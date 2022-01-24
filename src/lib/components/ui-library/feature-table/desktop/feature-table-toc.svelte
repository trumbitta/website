<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import FeatureTableTocItem from "./feature-table-toc-item.svelte";
  import type { FeatureTableToc } from "../feature-table.types";
  export let tocData: FeatureTableToc[];
</script>

<div id="toc" class="p-4">
  <FeatureTableHeader isToc={true} />
  <section class="grid grid-cols-1 auto-rows-[3.75rem] pt-4">
    {#each tocData as item}
      <FeatureTableTocItem type={item.type} definition={item.data} />
    {/each}
  </section>
</div>
