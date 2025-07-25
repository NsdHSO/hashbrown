## 0.2.3 (2025-07-17)

This was a version bump only, there were no code changes.

## 0.2.2 (2025-07-17)

This was a version bump only, there were no code changes.

## 0.2.1 (2025-07-17)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- middleware ([4733a91](https://github.com/liveloveapp/project-cassini/commit/4733a91))
- better vm support ([0bed9e1](https://github.com/liveloveapp/project-cassini/commit/0bed9e1))
- **angular:** add createRuntime, createRuntimeFunction, and createToolJavaScript helpers ([2edee16](https://github.com/liveloveapp/project-cassini/commit/2edee16))
- **angular,react:** expose lastAssistantMessage helper ([bcbfecc](https://github.com/liveloveapp/project-cassini/commit/bcbfecc))
- **azure:** Allow devs to supply the version number for models ([826afe4](https://github.com/liveloveapp/project-cassini/commit/826afe4))
- **core:** Add emulated structured outputs mode to the API ([d127f9f](https://github.com/liveloveapp/project-cassini/commit/d127f9f))
- **core:** Switch to encoded binary responses for resiliency ([02dc324](https://github.com/liveloveapp/project-cassini/commit/02dc324))
- **core:** Improve consuming tool call results ([b57f42b](https://github.com/liveloveapp/project-cassini/commit/b57f42b))
- **core:** add JavaScript runtime and function execution support ([34a56b1](https://github.com/liveloveapp/project-cassini/commit/34a56b1))
- **core, angular:** Show errors in chat and completion ([#154](https://github.com/liveloveapp/project-cassini/pull/154))
- **core, angular, react:** allow stopping of requests in progress ([#226](https://github.com/liveloveapp/project-cassini/pull/226), [#101](https://github.com/liveloveapp/project-cassini/issues/101))
- **core,react,angular:** Add known model IDs ([eb11165](https://github.com/liveloveapp/project-cassini/commit/eb11165))
- **google:** Wire up Gemini support ([f36402d](https://github.com/liveloveapp/project-cassini/commit/f36402d))
- **hashbrown:** Add internal state management to core ([#82](https://github.com/liveloveapp/project-cassini/pull/82))
- **react:** Combine createTool and createToolWithArgs into useTool ([4e2e796](https://github.com/liveloveapp/project-cassini/commit/4e2e796))
- **react:** Update useTool ergonomics for v0.2 ([c59f944](https://github.com/liveloveapp/project-cassini/commit/c59f944))
- **react:** Add JavaScript runtime hooks ([0e7ef30](https://github.com/liveloveapp/project-cassini/commit/0e7ef30))
- **samples:** Add a generative UI dashboard ([91f7808](https://github.com/liveloveapp/project-cassini/commit/91f7808))
- **writer:** Add initial implementation of Writer adapter ([8b16959](https://github.com/liveloveapp/project-cassini/commit/8b16959))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))
- **www:** analytics ([#168](https://github.com/liveloveapp/project-cassini/pull/168), [#164](https://github.com/liveloveapp/project-cassini/issues/164))
- **www:** docs clean up ([#177](https://github.com/liveloveapp/project-cassini/pull/177))
- **www:** Add homepage tour ([#173](https://github.com/liveloveapp/project-cassini/pull/173))
- **www:** Add Intro to Hashbrown video ([e7cbdee](https://github.com/liveloveapp/project-cassini/commit/e7cbdee))
- **www:** Add meta images to the website ([68b66db](https://github.com/liveloveapp/project-cassini/commit/68b66db))
- **www:** hero and docs ([#234](https://github.com/liveloveapp/project-cassini/pull/234))
- **www:** docs improvements ([#238](https://github.com/liveloveapp/project-cassini/pull/238))
- **www:** blog ([#241](https://github.com/liveloveapp/project-cassini/pull/241))
- **www:** improve blog post ([#244](https://github.com/liveloveapp/project-cassini/pull/244))

### 🩹 Fixes

- provider injector ([#94](https://github.com/liveloveapp/project-cassini/pull/94))
- do not show examples in Safari ([#167](https://github.com/liveloveapp/project-cassini/pull/167), [#159](https://github.com/liveloveapp/project-cassini/issues/159))
- vimeo video player ([0774d1e](https://github.com/liveloveapp/project-cassini/commit/0774d1e))
- examples ([30438d5](https://github.com/liveloveapp/project-cassini/commit/30438d5))
- netlify deployment ([#249](https://github.com/liveloveapp/project-cassini/pull/249))
- **angular:** Remove infinite loop caused by tool dependencies ([#76](https://github.com/liveloveapp/project-cassini/pull/76))
- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))
- **core:** Minor bug fixes and enhancements to state ([9417198](https://github.com/liveloveapp/project-cassini/commit/9417198))
- **core:** Handle situations where no choices are generated ([7608510](https://github.com/liveloveapp/project-cassini/commit/7608510))
- **core:** Relax inferred schema constraint for numbers ([d8fb592](https://github.com/liveloveapp/project-cassini/commit/d8fb592))
- **core, angular, react:** Properly render child components in nested UI schema ([#225](https://github.com/liveloveapp/project-cassini/pull/225), [#223](https://github.com/liveloveapp/project-cassini/issues/223))
- **samples:** Improve the rich chat prompt ([9a6ca96](https://github.com/liveloveapp/project-cassini/commit/9a6ca96))
- **samples/finance:** update Chat sample to use new runtime API and chart schema ([13286f3](https://github.com/liveloveapp/project-cassini/commit/13286f3))
- **samples/smart-home:** adapt ChatPanel and Planner samples to new runtime API ([bddf4ce](https://github.com/liveloveapp/project-cassini/commit/bddf4ce))
- **samples/smart-home:** bump dashboard model to gpt-4.1-nano ([0cec2fe](https://github.com/liveloveapp/project-cassini/commit/0cec2fe))
- **www:** api reference doesnt handle namespaces ([#162](https://github.com/liveloveapp/project-cassini/pull/162))
- **www:** More landing page polish ([13f55fe](https://github.com/liveloveapp/project-cassini/commit/13f55fe))
- **www:** Make the hero a little more rad ([f16aede](https://github.com/liveloveapp/project-cassini/commit/f16aede))

### ❤️ Thank You

- Ben Taylor
- Brian Love @blove
- Jake Harris @jakeharris
- Mike Ryan @MikeRyanDev
- U.G. Wilson

## 0.2.0 (2025-07-16)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- middleware ([4733a91](https://github.com/liveloveapp/project-cassini/commit/4733a91))
- better vm support ([0bed9e1](https://github.com/liveloveapp/project-cassini/commit/0bed9e1))
- **angular:** add createRuntime, createRuntimeFunction, and createToolJavaScript helpers ([2edee16](https://github.com/liveloveapp/project-cassini/commit/2edee16))
- **azure:** Allow devs to supply the version number for models ([826afe4](https://github.com/liveloveapp/project-cassini/commit/826afe4))
- **core:** Add emulated structured outputs mode to the API ([d127f9f](https://github.com/liveloveapp/project-cassini/commit/d127f9f))
- **core:** Switch to encoded binary responses for resiliency ([02dc324](https://github.com/liveloveapp/project-cassini/commit/02dc324))
- **core:** Improve consuming tool call results ([b57f42b](https://github.com/liveloveapp/project-cassini/commit/b57f42b))
- **core:** add JavaScript runtime and function execution support ([34a56b1](https://github.com/liveloveapp/project-cassini/commit/34a56b1))
- **core, angular:** Show errors in chat and completion ([#154](https://github.com/liveloveapp/project-cassini/pull/154))
- **core, angular, react:** allow stopping of requests in progress ([#226](https://github.com/liveloveapp/project-cassini/pull/226), [#101](https://github.com/liveloveapp/project-cassini/issues/101))
- **core,react,angular:** Add known model IDs ([eb11165](https://github.com/liveloveapp/project-cassini/commit/eb11165))
- **google:** Wire up Gemini support ([f36402d](https://github.com/liveloveapp/project-cassini/commit/f36402d))
- **hashbrown:** Add internal state management to core ([#82](https://github.com/liveloveapp/project-cassini/pull/82))
- **react:** Combine createTool and createToolWithArgs into useTool ([4e2e796](https://github.com/liveloveapp/project-cassini/commit/4e2e796))
- **react:** Update useTool ergonomics for v0.2 ([c59f944](https://github.com/liveloveapp/project-cassini/commit/c59f944))
- **react:** Add JavaScript runtime hooks ([0e7ef30](https://github.com/liveloveapp/project-cassini/commit/0e7ef30))
- **samples:** Add a generative UI dashboard ([91f7808](https://github.com/liveloveapp/project-cassini/commit/91f7808))
- **writer:** Add initial implementation of Writer adapter ([8b16959](https://github.com/liveloveapp/project-cassini/commit/8b16959))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))
- **www:** analytics ([#168](https://github.com/liveloveapp/project-cassini/pull/168), [#164](https://github.com/liveloveapp/project-cassini/issues/164))
- **www:** docs clean up ([#177](https://github.com/liveloveapp/project-cassini/pull/177))
- **www:** Add homepage tour ([#173](https://github.com/liveloveapp/project-cassini/pull/173))
- **www:** Add Intro to Hashbrown video ([e7cbdee](https://github.com/liveloveapp/project-cassini/commit/e7cbdee))
- **www:** Add meta images to the website ([68b66db](https://github.com/liveloveapp/project-cassini/commit/68b66db))
- **www:** hero and docs ([#234](https://github.com/liveloveapp/project-cassini/pull/234))
- **www:** docs improvements ([#238](https://github.com/liveloveapp/project-cassini/pull/238))
- **www:** blog ([#241](https://github.com/liveloveapp/project-cassini/pull/241))
- **www:** improve blog post ([#244](https://github.com/liveloveapp/project-cassini/pull/244))

### 🩹 Fixes

- provider injector ([#94](https://github.com/liveloveapp/project-cassini/pull/94))
- do not show examples in Safari ([#167](https://github.com/liveloveapp/project-cassini/pull/167), [#159](https://github.com/liveloveapp/project-cassini/issues/159))
- vimeo video player ([0774d1e](https://github.com/liveloveapp/project-cassini/commit/0774d1e))
- examples ([30438d5](https://github.com/liveloveapp/project-cassini/commit/30438d5))
- netlify deployment ([#249](https://github.com/liveloveapp/project-cassini/pull/249))
- **angular:** Remove infinite loop caused by tool dependencies ([#76](https://github.com/liveloveapp/project-cassini/pull/76))
- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))
- **core:** Minor bug fixes and enhancements to state ([9417198](https://github.com/liveloveapp/project-cassini/commit/9417198))
- **core:** Handle situations where no choices are generated ([7608510](https://github.com/liveloveapp/project-cassini/commit/7608510))
- **core, angular, react:** Properly render child components in nested UI schema ([#225](https://github.com/liveloveapp/project-cassini/pull/225), [#223](https://github.com/liveloveapp/project-cassini/issues/223))
- **samples:** Improve the rich chat prompt ([9a6ca96](https://github.com/liveloveapp/project-cassini/commit/9a6ca96))
- **samples/finance:** update Chat sample to use new runtime API and chart schema ([13286f3](https://github.com/liveloveapp/project-cassini/commit/13286f3))
- **samples/smart-home:** adapt ChatPanel and Planner samples to new runtime API ([bddf4ce](https://github.com/liveloveapp/project-cassini/commit/bddf4ce))
- **samples/smart-home:** bump dashboard model to gpt-4.1-nano ([0cec2fe](https://github.com/liveloveapp/project-cassini/commit/0cec2fe))
- **www:** api reference doesnt handle namespaces ([#162](https://github.com/liveloveapp/project-cassini/pull/162))
- **www:** More landing page polish ([13f55fe](https://github.com/liveloveapp/project-cassini/commit/13f55fe))
- **www:** Make the hero a little more rad ([f16aede](https://github.com/liveloveapp/project-cassini/commit/f16aede))

### ❤️ Thank You

- Ben Taylor
- Brian Love @blove
- Jake Harris @jakeharris
- Mike Ryan @MikeRyanDev
- U.G. Wilson

## 0.1.1 (2025-06-02)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- middleware ([4733a91](https://github.com/liveloveapp/project-cassini/commit/4733a91))
- better vm support ([0bed9e1](https://github.com/liveloveapp/project-cassini/commit/0bed9e1))
- **azure:** Allow devs to supply the version number for models ([826afe4](https://github.com/liveloveapp/project-cassini/commit/826afe4))
- **core:** Add emulated structured outputs mode to the API ([d127f9f](https://github.com/liveloveapp/project-cassini/commit/d127f9f))
- **core:** Switch to encoded binary responses for resiliency ([02dc324](https://github.com/liveloveapp/project-cassini/commit/02dc324))
- **core:** Improve consuming tool call results ([b57f42b](https://github.com/liveloveapp/project-cassini/commit/b57f42b))
- **core, angular:** Show errors in chat and completion ([#154](https://github.com/liveloveapp/project-cassini/pull/154))
- **google:** Wire up Gemini support ([f36402d](https://github.com/liveloveapp/project-cassini/commit/f36402d))
- **hashbrown:** Add internal state management to core ([#82](https://github.com/liveloveapp/project-cassini/pull/82))
- **writer:** Add initial implementation of Writer adapter ([8b16959](https://github.com/liveloveapp/project-cassini/commit/8b16959))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))
- **www:** analytics ([#168](https://github.com/liveloveapp/project-cassini/pull/168), [#164](https://github.com/liveloveapp/project-cassini/issues/164))
- **www:** docs clean up ([#177](https://github.com/liveloveapp/project-cassini/pull/177))
- **www:** Add homepage tour ([#173](https://github.com/liveloveapp/project-cassini/pull/173))
- **www:** Add Intro to Hashbrown video ([e7cbdee](https://github.com/liveloveapp/project-cassini/commit/e7cbdee))
- **www:** Add meta images to the website ([68b66db](https://github.com/liveloveapp/project-cassini/commit/68b66db))

### 🩹 Fixes

- provider injector ([#94](https://github.com/liveloveapp/project-cassini/pull/94))
- do not show examples in Safari ([#167](https://github.com/liveloveapp/project-cassini/pull/167), [#159](https://github.com/liveloveapp/project-cassini/issues/159))
- vimeo video player ([0774d1e](https://github.com/liveloveapp/project-cassini/commit/0774d1e))
- examples ([30438d5](https://github.com/liveloveapp/project-cassini/commit/30438d5))
- **angular:** Remove infinite loop caused by tool dependencies ([#76](https://github.com/liveloveapp/project-cassini/pull/76))
- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))
- **core:** Minor bug fixes and enhancements to state ([9417198](https://github.com/liveloveapp/project-cassini/commit/9417198))
- **www:** api reference doesnt handle namespaces ([#162](https://github.com/liveloveapp/project-cassini/pull/162))
- **www:** More landing page polish ([13f55fe](https://github.com/liveloveapp/project-cassini/commit/13f55fe))
- **www:** Make the hero a little more rad ([f16aede](https://github.com/liveloveapp/project-cassini/commit/f16aede))

### ❤️ Thank You

- Ben Taylor
- Brian Love @blove
- Mike Ryan @MikeRyanDev

## 0.1.0 (2025-05-30)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- middleware ([4733a91](https://github.com/liveloveapp/project-cassini/commit/4733a91))
- better vm support ([0bed9e1](https://github.com/liveloveapp/project-cassini/commit/0bed9e1))
- **azure:** Allow devs to supply the version number for models ([826afe4](https://github.com/liveloveapp/project-cassini/commit/826afe4))
- **core:** Add emulated structured outputs mode to the API ([d127f9f](https://github.com/liveloveapp/project-cassini/commit/d127f9f))
- **core:** Switch to encoded binary responses for resiliency ([02dc324](https://github.com/liveloveapp/project-cassini/commit/02dc324))
- **core:** Improve consuming tool call results ([b57f42b](https://github.com/liveloveapp/project-cassini/commit/b57f42b))
- **core, angular:** Show errors in chat and completion ([#154](https://github.com/liveloveapp/project-cassini/pull/154))
- **google:** Wire up Gemini support ([f36402d](https://github.com/liveloveapp/project-cassini/commit/f36402d))
- **hashbrown:** Add internal state management to core ([#82](https://github.com/liveloveapp/project-cassini/pull/82))
- **writer:** Add initial implementation of Writer adapter ([8b16959](https://github.com/liveloveapp/project-cassini/commit/8b16959))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))
- **www:** analytics ([#168](https://github.com/liveloveapp/project-cassini/pull/168), [#164](https://github.com/liveloveapp/project-cassini/issues/164))
- **www:** docs clean up ([#177](https://github.com/liveloveapp/project-cassini/pull/177))
- **www:** Add homepage tour ([#173](https://github.com/liveloveapp/project-cassini/pull/173))
- **www:** Add Intro to Hashbrown video ([e7cbdee](https://github.com/liveloveapp/project-cassini/commit/e7cbdee))
- **www:** Add meta images to the website ([68b66db](https://github.com/liveloveapp/project-cassini/commit/68b66db))

### 🩹 Fixes

- provider injector ([#94](https://github.com/liveloveapp/project-cassini/pull/94))
- do not show examples in Safari ([#167](https://github.com/liveloveapp/project-cassini/pull/167), [#159](https://github.com/liveloveapp/project-cassini/issues/159))
- vimeo video player ([0774d1e](https://github.com/liveloveapp/project-cassini/commit/0774d1e))
- **angular:** Remove infinite loop caused by tool dependencies ([#76](https://github.com/liveloveapp/project-cassini/pull/76))
- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))
- **core:** Minor bug fixes and enhancements to state ([9417198](https://github.com/liveloveapp/project-cassini/commit/9417198))
- **www:** api reference doesnt handle namespaces ([#162](https://github.com/liveloveapp/project-cassini/pull/162))
- **www:** More landing page polish ([13f55fe](https://github.com/liveloveapp/project-cassini/commit/13f55fe))
- **www:** Make the hero a little more rad ([f16aede](https://github.com/liveloveapp/project-cassini/commit/f16aede))

### ❤️ Thank You

- Ben Taylor
- Brian Love @blove
- Mike Ryan @MikeRyanDev

## 0.0.3 (2025-05-30)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- middleware ([4733a91](https://github.com/liveloveapp/project-cassini/commit/4733a91))
- better vm support ([0bed9e1](https://github.com/liveloveapp/project-cassini/commit/0bed9e1))
- **azure:** Allow devs to supply the version number for models ([826afe4](https://github.com/liveloveapp/project-cassini/commit/826afe4))
- **core:** Add emulated structured outputs mode to the API ([d127f9f](https://github.com/liveloveapp/project-cassini/commit/d127f9f))
- **core:** Switch to encoded binary responses for resiliency ([02dc324](https://github.com/liveloveapp/project-cassini/commit/02dc324))
- **core:** Improve consuming tool call results ([b57f42b](https://github.com/liveloveapp/project-cassini/commit/b57f42b))
- **core, angular:** Show errors in chat and completion ([#154](https://github.com/liveloveapp/project-cassini/pull/154))
- **google:** Wire up Gemini support ([f36402d](https://github.com/liveloveapp/project-cassini/commit/f36402d))
- **hashbrown:** Add internal state management to core ([#82](https://github.com/liveloveapp/project-cassini/pull/82))
- **writer:** Add initial implementation of Writer adapter ([8b16959](https://github.com/liveloveapp/project-cassini/commit/8b16959))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))
- **www:** analytics ([#168](https://github.com/liveloveapp/project-cassini/pull/168), [#164](https://github.com/liveloveapp/project-cassini/issues/164))
- **www:** docs clean up ([#177](https://github.com/liveloveapp/project-cassini/pull/177))
- **www:** Add homepage tour ([#173](https://github.com/liveloveapp/project-cassini/pull/173))
- **www:** Add Intro to Hashbrown video ([e7cbdee](https://github.com/liveloveapp/project-cassini/commit/e7cbdee))
- **www:** Add meta images to the website ([68b66db](https://github.com/liveloveapp/project-cassini/commit/68b66db))

### 🩹 Fixes

- provider injector ([#94](https://github.com/liveloveapp/project-cassini/pull/94))
- do not show examples in Safari ([#167](https://github.com/liveloveapp/project-cassini/pull/167), [#159](https://github.com/liveloveapp/project-cassini/issues/159))
- vimeo video player ([0774d1e](https://github.com/liveloveapp/project-cassini/commit/0774d1e))
- **angular:** Remove infinite loop caused by tool dependencies ([#76](https://github.com/liveloveapp/project-cassini/pull/76))
- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))
- **core:** Minor bug fixes and enhancements to state ([9417198](https://github.com/liveloveapp/project-cassini/commit/9417198))
- **www:** api reference doesnt handle namespaces ([#162](https://github.com/liveloveapp/project-cassini/pull/162))
- **www:** More landing page polish ([13f55fe](https://github.com/liveloveapp/project-cassini/commit/13f55fe))
- **www:** Make the hero a little more rad ([f16aede](https://github.com/liveloveapp/project-cassini/commit/f16aede))

### ❤️ Thank You

- Ben Taylor
- Brian Love @blove
- Mike Ryan @MikeRyanDev

## 0.0.2-9 (2025-05-29)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- middleware ([4733a91](https://github.com/liveloveapp/project-cassini/commit/4733a91))
- better vm support ([0bed9e1](https://github.com/liveloveapp/project-cassini/commit/0bed9e1))
- **core:** Add emulated structured outputs mode to the API ([d127f9f](https://github.com/liveloveapp/project-cassini/commit/d127f9f))
- **core:** Switch to encoded binary responses for resiliency ([02dc324](https://github.com/liveloveapp/project-cassini/commit/02dc324))
- **core:** Improve consuming tool call results ([b57f42b](https://github.com/liveloveapp/project-cassini/commit/b57f42b))
- **core, angular:** Show errors in chat and completion ([#154](https://github.com/liveloveapp/project-cassini/pull/154))
- **google:** Wire up Gemini support ([f36402d](https://github.com/liveloveapp/project-cassini/commit/f36402d))
- **hashbrown:** Add internal state management to core ([#82](https://github.com/liveloveapp/project-cassini/pull/82))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))
- **www:** analytics ([#168](https://github.com/liveloveapp/project-cassini/pull/168))
- **www:** docs clean up ([#177](https://github.com/liveloveapp/project-cassini/pull/177))
- **www:** Add homepage tour ([#173](https://github.com/liveloveapp/project-cassini/pull/173))

### 🩹 Fixes

- provider injector ([#94](https://github.com/liveloveapp/project-cassini/pull/94))
- do not show examples in Safari ([#167](https://github.com/liveloveapp/project-cassini/pull/167))
- **angular:** Remove infinite loop caused by tool dependencies ([#76](https://github.com/liveloveapp/project-cassini/pull/76))
- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))
- **core:** Minor bug fixes and enhancements to state ([9417198](https://github.com/liveloveapp/project-cassini/commit/9417198))
- **www:** api reference doesnt handle namespaces ([#162](https://github.com/liveloveapp/project-cassini/pull/162))

### ❤️ Thank You

- Ben Taylor
- Brian Love @blove
- Mike Ryan @MikeRyanDev

## 0.0.2-7 (2025-05-14)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- middleware ([4733a91](https://github.com/liveloveapp/project-cassini/commit/4733a91))
- **hashbrown:** Add internal state management to core ([#82](https://github.com/liveloveapp/project-cassini/pull/82))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))

### 🩹 Fixes

- **angular:** Remove infinite loop caused by tool dependencies ([#76](https://github.com/liveloveapp/project-cassini/pull/76))
- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))
- **core:** Minor bug fixes and enhancements to state ([9417198](https://github.com/liveloveapp/project-cassini/commit/9417198))

### ❤️ Thank You

- Brian Love @blove
- Mike Ryan @MikeRyanDev

## v0.0.2-6 (2025-05-08)

### 🚀 Features

- www homepage sdk mockup ([#62](https://github.com/liveloveapp/project-cassini/pull/62))
- www branding ([#63](https://github.com/liveloveapp/project-cassini/pull/63))
- www lla branding ([#64](https://github.com/liveloveapp/project-cassini/pull/64))
- **www:** Add a feature tour to the landing page ([#65](https://github.com/liveloveapp/project-cassini/pull/65))

### 🩹 Fixes

- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))

### ❤️ Thank You

- Brian Love @blove
- Mike Ryan @MikeRyanDev

## 0.0.2-5 (2025-05-01)

### 🩹 Fixes

- **azure:** Handle situations where the LLM emits a chunk without any choices ([1f3a3f0](https://github.com/liveloveapp/project-cassini/commit/1f3a3f0))

### ❤️ Thank You

- Mike Ryan @MikeRyanDev

## 0.0.2-4 (2025-05-01)

This was a version bump only, there were no code changes.

## 0.0.2-3 (2025-05-01)

### 🚀 Features

- www theme ([e95c430](https://github.com/liveloveapp/project-cassini/commit/e95c430))

### ❤️ Thank You

- Brian Love

## 0.0.2-2 (2025-05-01)

This was a version bump only, there were no code changes.

## 0.0.2-1 (2025-05-01)

This was a version bump only, there were no code changes.

## 0.0.2-0 (2025-05-01)

### 🚀 Features

- Add support for structured outputs ([740b69a](https://github.com/liveloveapp/project-cassini/commit/740b69a))
- Make rich chat a bit richer ([30d0353](https://github.com/liveloveapp/project-cassini/commit/30d0353))
- Add tools-javascript for code execution ([878c2e2](https://github.com/liveloveapp/project-cassini/commit/878c2e2))
- openai lib ([dcf2118](https://github.com/liveloveapp/project-cassini/commit/dcf2118))
- google lib ([15cb3a1](https://github.com/liveloveapp/project-cassini/commit/15cb3a1))
- gemini structured output ([8220813](https://github.com/liveloveapp/project-cassini/commit/8220813))
- Add framework-agnostic exposeComponent utility ([00c7943](https://github.com/liveloveapp/project-cassini/commit/00c7943))
- azure package ([b0b151d](https://github.com/liveloveapp/project-cassini/commit/b0b151d))
- Add a production-grade schema library implementation ([6dd4503](https://github.com/liveloveapp/project-cassini/commit/6dd4503))
- Add a mature version of the javascript tool ([1cb60bb](https://github.com/liveloveapp/project-cassini/commit/1cb60bb))
- www ([8070cd4](https://github.com/liveloveapp/project-cassini/commit/8070cd4))
- **nx-cloud:** setup nx cloud workspace ([ce401e1](https://github.com/liveloveapp/project-cassini/commit/ce401e1))

### 🩹 Fixes

- Make tool calling more type safe ([4df5e1b](https://github.com/liveloveapp/project-cassini/commit/4df5e1b))

### ❤️ Thank You

- Brian Love
- Mike Ryan @MikeRyanDev