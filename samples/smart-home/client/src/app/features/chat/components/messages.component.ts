import { Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  RenderMessageComponent,
  UiAssistantMessage,
  UiChatMessage,
} from '@hashbrownai/angular';
import { ToolChipComponent } from './tool-chip.component';
import { CodeToolChipComponent } from './code-tool-chip.component';

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [
    RenderMessageComponent,
    MatIconModule,
    MatButtonModule,
    ToolChipComponent,
    CodeToolChipComponent,
  ],
  template: `
    @for (message of collapsedMessages(); track $index) {
      @switch (message.role) {
        @case ('user') {
          <div class="chat-message user">
            <p>{{ message.content }}</p>
          </div>
        }
        @case ('assistant') {
          <div
            class="chat-message assistant"
            [class.hasToolCalls]="message.toolCalls.length > 0"
          >
            <div class="assistant-avatar">
              <img src="/lil-guy.png" alt="Assistant Avatar" />
            </div>
            <div class="assistant-tools">
              @for (toolCall of message.toolCalls; track $index) {
                @switch (toolCall.name) {
                  @case ('getUser') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Getting your info..."
                      done="Got your info"
                    />
                  }
                  @case ('getLights') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Getting your lights..."
                      done="Got your lights"
                    />
                  }
                  @case ('getScenes') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Getting your scenes..."
                      done="Got your scenes"
                    />
                  }
                  @case ('controlLight') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Controlling your light..."
                      done="Controlled your light"
                    />
                  }
                  @case ('createScene') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Creating your scene..."
                      done="Created your scene"
                    />
                  }
                  @case ('javascript') {
                    <app-code-tool-chip
                      [toolCall]="toolCall"
                      [code]="toolCall.args.code"
                      pending="Running a script..."
                      done="Ran a script"
                    />
                  }

                  @case ('getPageHTML') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Looking at the page..."
                      done="Looked at the page"
                    />
                  }

                  @case ('findHTMLElementByXPathSelector') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Looking for an element..."
                      done="Found an element"
                    />
                  }

                  @case ('drawTopicMarker') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      pending="Showing an element..."
                      done="Showing an element"
                    />
                  }

                  @case ('clickElement') {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      [pending]="'Clicking on ' + toolCall.args.name + '...'"
                      [done]="'Clicked on ' + toolCall.args.name"
                    />
                  }

                  @default {
                    <app-tool-chip
                      [toolCall]="toolCall"
                      [pending]="'Running ' + toolCall.name"
                      [done]="'Ran ' + toolCall.name"
                    />
                  }
                }
              }
            </div>

            @if (message.content) {
              <hb-render-message [message]="message" />
            }
          </div>
        }
        @case ('error') {
          <div class="chat-message error">
            <mat-icon inline>error</mat-icon>
            <span>{{ message.content }}</span>
            @if ($last) {
              <button mat-button (click)="retry.emit()">Retry</button>
            }
          </div>
        }
      }
    }
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        padding: 16px;
      }

      .chat-message.user {
        padding: 16px;
        border-radius: 16px;
        width: 80%;
        background-color: var(--mat-sys-surface-container-highest);
        align-self: flex-end;
        margin-top: 16px;
      }

      .chat-message.assistant {
        display: grid;
        width: 100%;
        grid-template-columns: 24px 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
          'avatar content'
          'blank content';
        column-gap: 16px;
        padding: 16px 0px;
      }

      .chat-message.assistant.hasToolCalls {
        row-gap: 8px;
        grid-template-areas:
          'avatar tools'
          'blank content';
      }

      .assistant-avatar {
        grid-area: avatar;
        display: flex;
      }

      .assistant-avatar img {
        width: 24px;
        height: 24px;
        border-radius: 8px;
      }

      .assistant-tools {
        grid-area: tools;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
      }

      hb-render-message {
        grid-area: content;
      }

      .chat-message.component {
        align-self: flex-start;
        width: 100%;
      }

      .chat-message.tool {
        align-self: flex-start;
        width: 100%;
        font-style: italic;
      }

      .chat-message.error {
        padding: 16px;
        border-radius: 16px;
        width: 80%;
        background-color: var(--mat-sys-error-container);
        align-self: flex-start;
        margin-top: 16px;
        display: flex;
        align-items: center;
      }

      .chat-message.error span {
        width: 100%;
      }

      .chat-message.error mat-icon {
        width: 32px !important;
      }

      .chat-message.error button[mat-button] {
        align-self: flex-end;
        height: 16px;
      }
    `,
  ],
})
export class MessagesComponent {
  retry = output<void>();
  messages = input.required<UiChatMessage[]>();
  collapsedMessages = computed(() => {
    const messages = this.messages();
    const collapsedMessages = [];
    let assistantMessageStack: UiAssistantMessage[] = [];

    for (const message of messages) {
      if (message.role === 'assistant' && message.toolCalls.length > 0) {
        assistantMessageStack.push(message);
      } else if (
        message.role === 'assistant' &&
        message.toolCalls.length === 0
      ) {
        assistantMessageStack.push(message);

        collapsedMessages.push(
          this.collapseAssistantMessageStack(assistantMessageStack),
        );
        assistantMessageStack = [];
      } else {
        collapsedMessages.push(message);
      }
    }

    if (assistantMessageStack.length > 0) {
      collapsedMessages.push(
        this.collapseAssistantMessageStack(assistantMessageStack),
      );
    }

    return collapsedMessages;
  });

  collapseAssistantMessageStack(assistantMessageStack: UiAssistantMessage[]) {
    const [firstMessage, ...rest] = assistantMessageStack;
    return rest.reduce((acc: UiAssistantMessage, message) => {
      return {
        ...acc,
        ...message,
        toolCalls: [...acc.toolCalls, ...message.toolCalls],
      };
    }, firstMessage);
  }
}
