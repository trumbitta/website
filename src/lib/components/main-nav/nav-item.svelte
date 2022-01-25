<script lang="ts">
  import { page } from "$app/stores";

  export let navItem: any;
  const { href, highlight, label, isExternal } = navItem;
  const isPrefecthable = isExternal ? undefined : true;

  $: isActivePage =
    $page.url.pathname === "/"
      ? /\/$/.test(href)
      : href.indexOf($page.url.pathname) >= 0;
</script>

<style lang="postcss">
  a {
    @media (min-width: 1050px) {
      @apply text-base;
    }
  }

  .active {
    color: var(--black);
  }

  .highlight {
    @apply relative;
    &::after {
      content: url("/indicator.svg");
      @apply absolute -top-3 -right-2;
    }
  }
</style>

<a
  class:active={isActivePage && !isExternal}
  class:highlight
  {href}
  on:click
  on:focus
  sveltekit:prefetch={isPrefecthable}
  class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black"
>
  {label}
</a>
