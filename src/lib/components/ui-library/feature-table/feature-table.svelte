<script lang="ts">
  import FeatureTableToc from "./desktop/feature-table-toc.svelte";
  import FeatureTableColumn from "./desktop/feature-table-column.svelte";
  import type { FeatureTable } from "./feature-table.types";
  import FeatureTableColumnMobile from "./mobile/feature-table-column-mobile.svelte";
  export let tableData: FeatureTable;

  const gridColumns = `grid-cols-${tableData.columns.length + 1}`;
</script>

<div class="{gridColumns} gap-4 mb-8 hidden md:grid">
  <FeatureTableToc tocData={tableData.toc} />
  {#each tableData.columns as col}
    <FeatureTableColumn featureData={col} />
  {/each}
</div>
<div class="grid grid-cols-1 md:hidden gap-4 justify-center">
  <div class="w-full">
    <FeatureTableColumnMobile />
  </div>
</div>
