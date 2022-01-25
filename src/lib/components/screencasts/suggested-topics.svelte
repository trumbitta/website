<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { topics } from "$lib/contents/screencasts";
  export let currentTopic: string;

  const dispatch = createEventDispatcher();

  const handleTopicSetup = (e: Event, topic: string) => {
    const target = e.target as HTMLElement;
    target.parentElement.childNodes.forEach(
      (t: HTMLElement) => (t.style.background = "var(--sand-dark)")
    );
    if (topic !== currentTopic) {
      dispatch("setTopic", topic);
      target.style.background = "var(--brand-almost-ripe)";
    } else {
      dispatch("setTopic", "");
      target.style.background = "var(--sand-dark)";
    }
  };
</script>

<div class="md:mt-x-large mb-small">
  <p class="h5 text-center text-black font-bold mb-xx-small">
    Suggested topics
  </p>
  <div class="flex flex-wrap justify-center max-w-3xl mx-auto sm:space-x-macro">
    {#each topics as topic}
      <button
        on:click={(e) => handleTopicSetup(e, topic)}
        class="btn-cta-small mb-macro mx-0.5 sm:mx-0"
      >
        {topic}
      </button>
    {/each}
  </div>
</div>
