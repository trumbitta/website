<script lang="ts">
  import type { Screencast as ScreencastType } from "$lib/types/screencasts.type";
  import Screencast from "./screencast.svelte";
  export let screencasts: ScreencastType[];
</script>

<style lang="postcss">
  div {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 25rem));
  }
</style>

<div
  class="grid justify-center gap-y-medium gap-x-5 m-x-small px-5"
  data-analytics={`{"context":"grid"}`}
>
  {#each screencasts as screencast}
    <Screencast
      {screencast}
      screencastNumber={screencast.nextScreencast ||
        screencast.screencastNumber}
    />
  {/each}
</div>
