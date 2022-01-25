<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const posts = session.posts;
    return { props: { posts } };
  }
</script>

<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post.type";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PostPreview from "$lib/components/blog/post-preview.svelte";
  import Section from "$lib/components/section.svelte";

  export let posts: BlogPost[];
</script>

<style lang="postcss">
  .blog-layout {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply mb-x-large;
    }
  }
</style>

<div class="blog-layout">
  <OpenGraph
    data={{
      description:
        "Visit the Gitpod blog to learn about releases, tutorials, news and more.",
      title: "Blog",
    }}
  />
  <Section>
    <h1 class="text-center">Blog</h1>
    <div
      class="grid m-auto max-w-7xl w-full gap-6 grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3"
    >
      {#each posts.slice(0, 6) as post}
        <div class="flex justify-center min-w-[20rem] max-w-sm">
          <PostPreview {post} type="blog" isMostRecent />
        </div>
      {/each}
    </div>
  </Section>

  <Section>
    <h2 class="mb-small text-center">Previous posts</h2>
    <div
      class="previous grid m-auto max-w-7xl w-full gap-6 grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3"
    >
      {#each posts.slice(6) as post}
        <div class="flex justify-center min-w-[20rem] max-w-sm">
          <PostPreview {post} type="blog" />
        </div>
      {/each}
    </div>
  </Section>
</div>
