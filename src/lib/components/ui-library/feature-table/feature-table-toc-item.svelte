<script lang="ts">
  import QaTooltip from "../../qa-tooltip.svelte";
  import type { TocItem, TocItemType } from "./feature-table.types";
  export let type: TocItemType;
  export let definition: TocItem;
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
