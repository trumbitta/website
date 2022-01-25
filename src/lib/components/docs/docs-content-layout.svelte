<script>
  /**
   * Typescript is not supported in mdsvex layout files.
   * @see https://github.com/pngwn/MDsveX/issues/116
   */
  import AnnouncementBanner from "./announcement-banner.svelte";
  import OpenGraph from "../open-graph.svelte";
  import FeedbackWidget from "./feedback-widget.svelte";
  import EditInGitpod from "$lib/components/docs/edit-in-gitpod.svelte";
  import docsCurrentSectionStore from "$lib/stores/docs-current-section";
  import PrevNext from "./prev-next.svelte";
  import OnThisPageNav from "../on-this-page-nav.svelte";

  /** @type {string} */
  export let section;
  /** @type {string} */
  export let title;

  $: $docsCurrentSectionStore = section;
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-solarized-light.min.css" />
</svelte:head>

<OpenGraph
  data={{
    description:
      "Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.",
    title: title ? title : "Gitpod Documentation",
  }}
/>
<AnnouncementBanner />
<EditInGitpod />
<div class="flex">
  <div class="content-docs prose max-w-none flex-auto min-w-0 xl:w-2/3">
    <slot />
  </div>
  <OnThisPageNav class="mt-20" />
</div>
<FeedbackWidget type="docs" class="my-huge" />
<PrevNext />
