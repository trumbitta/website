<script lang="ts">
  const toggleIsShown = () => {
    isShown = !isShown;
  };
  export let isShown: boolean;
</script>

<div class="mb-x-small flex flex-col justify-center items-center">
  <div class="text-center mb-x-small">
    <h3>Free Plan</h3>
    <p>Thats a super-neat subtitle</p>
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
