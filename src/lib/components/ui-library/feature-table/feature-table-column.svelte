<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import FeatureTableItem from "./feature-table-item.svelte";
</script>

<div class="p-4 bg-[#f9f9f9] shadow-xl rounded-3xl">
  <FeatureTableHeader>
    <slot name="header" />
  </FeatureTableHeader>
  <section
    class="grid grid-cols-1 auto-rows-[3.75rem] border-t-2 border-divider pt-4 "
  >
    <FeatureTableItem definition={{ term: "Test", text: "TESTASDF" }} />
    <FeatureTableItem definition={{ term: "Test", availability: false }} />
    <FeatureTableItem definition={{ term: "Test", availability: true }} />
  </section>
</div>
