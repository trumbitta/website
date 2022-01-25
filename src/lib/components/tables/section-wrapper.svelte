<script lang="ts">
  export let type: "desktop" | "mobile";
  export let isHighlighted: boolean = false;
  export let renderedOn: string = "";
</script>

<style lang="postcss">
  .mobile {
    @media (min-width: 1060px) {
      @apply hidden;
    }
  }

  .desktop {
    @apply hidden;

    @media (min-width: 1060px) {
      @apply block;
    }
  }

  .local-development > :global(*) {
    grid-template-rows: 350px 250px 400px 200px 100px;
  }

  .card {
    @apply p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-off-white;
  }

  @media (max-width: 1059px) {
    .card {
      @apply pb-macro mb-micro md:mb-x-small;
    }
  }
</style>

<section
  class="card text-center shadow-normal {type} {renderedOn}"
  class:shadow-brand={isHighlighted}
>
  <slot />
</section>
