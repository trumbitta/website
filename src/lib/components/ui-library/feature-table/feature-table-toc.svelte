<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import FeatureTableTocItem from "./feature-table-toc-item.svelte";
</script>

<div id="toc" class="p-4">
  <FeatureTableHeader />
  <section class="grid grid-cols-1 auto-rows-[3.75rem] pt-4">
    <FeatureTableTocItem value="Item 1" />
    <FeatureTableTocItem value="Item 2" />
    <FeatureTableTocItem value="Item 3" />
    <FeatureTableTocItem value="Item 4" />
    <FeatureTableTocItem value="Item 5" />
  </section>
</div>
