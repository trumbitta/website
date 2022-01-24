<script lang="ts">
  import FeatureTableToc from "./desktop/feature-table-toc.svelte";
  import FeatureTableColumn from "./desktop/feature-table-column.svelte";
  import type { FeatureTable } from "./feature-table.types";
  export let tableData: FeatureTable;

  const getDesktopColumns = () => {
    return `md:grid-cols-${tableData.columns.length + 1}`;
  };
</script>

<div class="grid {getDesktopColumns()} gap-4 grid-cols-1">
  <FeatureTableToc tocData={tableData.toc} />
  {#each tableData.columns as col}
    <FeatureTableColumn featureData={col} />
  {/each}
</div>
