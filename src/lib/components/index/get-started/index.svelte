<script>
  import Section from "../../section.svelte";
  import LaunchExampleWorkspace from "./launch-example-workspace.svelte";
  import LinkGitRepository from "./link-git-repository.svelte";
</script>

<style lang="postcss">
  .cards-container {
    @apply flex justify-between;

    @media (max-width: 944px) {
      @apply flex-col mx-auto;
      max-width: 600px;
    }
  }

  .card {
    @apply p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-white text-center;
    flex: 0 0 49%;

    @media (max-width: 1140px) {
      padding: var(--small) var(--x-small);
    }

    &:not(:last-child) {
      @media (max-width: 944px) {
        @apply mb-x-small;
      }
    }
  }
</style>

<Section id="get-started" class="pt-20">
  <h2 class="mb-small text-center text-h2">Get started now</h2>
  <div class="cards-container">
    <div class="card shadow-normal">
      <LinkGitRepository />
    </div>
    <div class="card">
      <LaunchExampleWorkspace />
    </div>
  </div>
</Section>
