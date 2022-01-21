<script lang="ts">
  import FeatureTableToc from "./feature-table-toc.svelte";
  import FeatureTableColumn from "./feature-table-column.svelte";
  import type { FeatureTable } from "./feature-table.types";
  export let tableData: FeatureTable;
</script>

<div class="grid grid-cols-5 gap-4">
  <FeatureTableToc tocData={tableData.toc} />
  {#each tableData.columns as col}
    <FeatureTableColumn featureData={col} />
  {/each}
</div>
