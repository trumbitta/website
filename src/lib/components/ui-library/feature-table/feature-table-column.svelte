<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
</script>

<div class="p-4 bg-[#f9f9f9] shadow-xl rounded-3xl">
  <FeatureTableHeader>
    <slot name="header" />
  </FeatureTableHeader>
  <section
    class="grid grid-cols-1 auto-rows-[3.75rem] border-t-2 border-divider pt-4 "
  >
    <div class="flex items-center justify-center">Free</div>
    <div class="flex items-center justify-center">Free</div>
    <div class="flex items-center justify-center">Free</div>
  </section>
</div>
