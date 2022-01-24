<script lang="ts">
  import type { FeatureItemDetail } from "../feature-table.types";
  export let definition: FeatureItemDetail;
</script>

<div class="flex items-center justify-center">
  {#if definition.text}
    {@html definition.text}
  {/if}
  {#if definition.availability}
    <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
  {/if}

  {#if definition.availability === false}
    <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
  {/if}
</div>
