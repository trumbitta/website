<script lang="ts">
  import QaTooltip from "$lib/components/qa-tooltip.svelte";
  import type {
    FeatureTocItem,
    FeatureTocItemType,
  } from "../feature-table.types";
  export let type: FeatureTocItemType;
  export let definition: FeatureTocItem;
</script>

<div class="flex items-center">
  {#if type === "tooltip"}
    <QaTooltip text={definition.text} tooltip={definition.tooltip} />
  {/if}
  {#if type === "text"}
    {definition.text}
  {/if}
  {#if type === "image"}<img
      class="mr-2"
      src={definition.image.path}
      alt={definition.image.alt}
      width="24"
    />
    {definition.text}
  {/if}
</div>
