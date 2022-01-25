<script>
  import Section from "../section.svelte";

  let text =
    "As Alice automates the configuration setup by using Gitpod she is ready to code within seconds, while it can take up to days for Bob.";
</script>

<style>
  @media (max-width: 980px) {
    div:last-of-type {
      flex: 0 0 60%;
    }
  }
</style>

<Section
  class="flex flex-col py-small px-xx-small sm:px-small md:p-0 md:flex-row items-center max-w-lg md:max-w-6xl bg-white rounded-2xl sm:rounded-5xl shadow-normal mx-auto"
>
  <div class="p-0 md:pl-small lgx:pl-large lgx:py-0">
    <h3 class="h3">Ready within seconds when working in the cloud</h3>
    <p class="text-large">
      {text}
    </p>
  </div>
  <div class="pt-micro md:px-small md:py-x-small max-w-xl lgx:max-w-2xl">
    <img
      class="hidden md:block"
      src="/images/local-development/comparison.png"
      alt={text}
    />
    <img
      class="md:hidden max-h-96 mx-auto"
      src="/images/local-development/comparison-mobile.png"
      alt={text}
    />
  </div>
</Section>
