<script lang="ts">
  export let href: string;
  export let icon: string;
</script>

<style>
  a,
  span {
    /* Move to markup once src/lib/assets/markdown-commons.scss is gone */
    @apply leading-4;
  }
</style>

<a
  class="inline-flex mr-4 py-macro px-3 bg-white no-underline items-center rounded-lg shadow-sm justify-center text-btn-small text-black font-semibold text-center transition-all hover:bg-off-white"
  {href}
  target="_blank"
  rel="noopener"
  ><span class="">{icon}</span>
  <img
    class="inline-block my-0 mx-2 h-3 w-3"
    src="/svg/external.svg"
    alt="External"
  /><slot /></a
>
