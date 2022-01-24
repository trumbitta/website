<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import FeatureTableItem from "./feature-table-item.svelte";
  import type { FeatureTableColumn } from "../feature-table.types";

  export let featureData: FeatureTableColumn;
</script>

<div class="p-4 bg-[#f9f9f9] shadow-xl rounded-3xl">
  <FeatureTableHeader headerData={featureData.header} />
  <section
    class="grid grid-cols-1 auto-rows-[3.75rem] border-t-2 border-divider pt-4 "
  >
    {#each featureData.items as item}
      <FeatureTableItem definition={item} />
    {/each}
  </section>
</div>
