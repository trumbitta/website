<script lang="ts">
  export let value: string;
  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  input {
    @apply border-none;
  }
</style>

<div
  class="relative bg-white rounded-xl max-w-lg mx-auto shadow-normal mb-12 pl-6 sm:pl-7 {clazz}"
>
  <label for="search" class="sr-only">Search</label>
  <img
    class="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small"
    src="/svg/mag-glass.svg"
    alt="Search"
    aria-hidden="true"
  />
  <input
    type="text"
    placeholder="Search"
    bind:value
    id="search"
    class="box-border block w-full text-p-medium h-small pl-12 pr-3 py-2 border border-transparent leading-5 text-gray-600 placeholder-gray-500 focus:outline-none focus:bg-none focus:border-white focus:ring-white focus:text-gray-900"
  />
</div>
