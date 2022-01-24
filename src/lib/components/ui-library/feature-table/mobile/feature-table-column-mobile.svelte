<script lang="ts">
  import FeatureTableHeaderMobile from "./feature-table-header-mobile.svelte";

  let isShown: boolean = false;
</script>

<div class="p-x-small bg-off-white shadow-xl rounded-3xl max-w-[400px] mx-auto">
  <FeatureTableHeaderMobile bind:isShown />
  {#if isShown}
    <section
      class="grid grid-cols-1 auto-rows-[3.75rem] border-t-2 border-divider pt-4"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="font-bold mb-macro">
          {@html "Hallo Welt"}
        </div>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </div>
    </section>
  {/if}
</div>
