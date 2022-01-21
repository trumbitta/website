<script lang="ts">
  import FeatureTableToc from "./feature-table-toc.svelte";
  import FeatureTableColumn from "./feature-table-column.svelte";
</script>

<div class="grid grid-cols-5 gap-4">
  <FeatureTableToc />
  <FeatureTableColumn>
    <div class="text-center" slot="header">
      <h2>Free Plan</h2>
      <p>€0 per user/month</p>
    </div>
  </FeatureTableColumn>
  <FeatureTableColumn>
    <div class="text-center" slot="header">
      <h2>Free Plan</h2>
      <p>€0 per user/month</p>
    </div>
  </FeatureTableColumn>
  <FeatureTableColumn>
    <div class="text-center" slot="header">
      <h2>Free Plan</h2>
      <p>€0 per user/month</p>
    </div>
  </FeatureTableColumn>
</div>
