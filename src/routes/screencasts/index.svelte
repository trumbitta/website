<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "$lib/components/open-graph.svelte";
  import { screencasts } from "$lib/contents/screencasts";
  import Explore from "$lib/components/explore.svelte";
  import ScreencastsGrid from "$lib/components/screencasts/screencasts-grid.svelte";
  import Search from "$lib/components/search.svelte";
  import SuggestedTopics from "$lib/components/screencasts/suggested-topics.svelte";

  let searchTerm = "";
  let tag = "";

  let filteredScreencasts = screencasts;

  $: {
    filteredScreencasts = screencasts.filter((screencast) => {
      const isTitleAMatch = screencast.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const isDescriptionAMatch = screencast.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return isTitleAMatch || isDescriptionAMatch;
    });
  }

  $: if (tag) {
    filteredScreencasts = screencasts.filter((screencast) =>
      screencast.tags.includes(tag)
    );
    searchTerm = "";
  } else {
    filteredScreencasts = screencasts;
  }
</script>

<OpenGraph
  data={{
    description: "Learn more about Gitpod with these short screencasts.",
    title: "Screencasts",
  }}
/>

<header class="tight">
  <h1 class="h2 text-center">Full screencast playlist</h1>
  <p>Learn how to be always ready-to-code by following these short videos.</p>
</header>

<Search bind:value={searchTerm} class="md:mt-medium" />

<SuggestedTopics currentTopic={tag} on:setTopic={(e) => (tag = e.detail)} />

<section>
  {#if filteredScreencasts.length}
    <ScreencastsGrid screencasts={filteredScreencasts} />
  {:else}
    <p class="text-center text-large">
      Sorry, we couldn't find any results matching your search.
    </p>
  {/if}
</section>

<Explore />
