<script lang="ts">
  import type { FeatureTableHeader } from "../feature-table.types";

  export let headerData: FeatureTableHeader;
  const toggleIsShown = () => {
    isShown = !isShown;
  };
  export let isShown: boolean;
</script>

<div class="mb-x-small flex flex-col justify-center items-center">
  <div class="mb-x-small flex flex-col justify-center items-center">
    {#if headerData.image}
      <img
        src={headerData.image.path}
        alt={headerData.image.alt}
        class="h-10 mb-macro"
      />
    {/if}
    <div class="text-center ">
      <h3>{headerData.headline}</h3>
      {#if headerData.subtitle}
        <p>{headerData.subtitle}</p>
      {/if}
    </div>
  </div>
  <button
    class="pt-x-small border-t-2 border-divider w-56"
    on:click={() => toggleIsShown()}
  >
    <div class="underline">
      {#if isShown}
        Hide Features
      {:else}
        View all Features
      {/if}
    </div>
    <img
      src="/arrow.svg"
      alt="Arrow Toggle"
      class="h-6 w-6 mt-macro mx-auto duration-200"
      class:rotate-180={isShown}
    />
  </button>
</div>
