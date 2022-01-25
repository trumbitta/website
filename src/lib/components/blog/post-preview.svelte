<script lang="ts">
  import { isAnExternalLink } from "$lib/utils/helpers";
  import { authorSocialMediaLinks } from "$lib/contents/authors";

  import type { BlogPost } from "$lib/types/blog-post.type";
  import Avatars from "../avatars.svelte";

  export let post: BlogPost;
  export let isMostRecent: boolean = false;
  export let type: "blog" | "guides";
  export let layout: "row" | "column" = "column";

  export let headlineOrder: "h3" | "" = "";

  const href = post && post.href ? post.href : `/${type}/${post.slug}`;
  const target =
    post && post.href && isAnExternalLink(post.href) ? "_blank" : undefined;
</script>

<div
  class:bg-sand-dark={!isMostRecent}
  class="flex flex-col max-w-sm lg:max-w-none {layout === 'column'
    ? ''
    : 'lg:flex-row lg:max-w-6xl mx-auto'} rounded-xl bg-off-white"
  data-analytics={`{"context":"grid","variant":"preview"}`}
>
  {#if isMostRecent}
    <a {href} {target} sveltekit:prefetch>
      <div
        role="img"
        aria-label={`${type === "blog" ? "Blog post" : "Guide"}: ${post.title}`}
        class="object-cover m-auto overflow-hidden rounded-t-xl bg-center bg-cover w-full h-64 {layout ===
        'column'
          ? ''
          : 'lg:rounded-l-xl lg:rounded-t-none lg:w-60 lg:h-full'}"
        style={`background-image: url(${
          post.isNotAnActualPost
            ? post.image
            : `/images/${type}/${post.slug}/${post.image}`
        });`}
      />
    </a>
  {/if}
  <div
    class="{layout === 'column'
      ? 'flex-col h-full flex-nowrap'
      : 'flex-wrap'} flex lg:justify-between p-x-small pt-small"
  >
    <div>
      {#if headlineOrder === "h3"}
        <h3 class="text-h4">
          <a
            {href}
            {target}
            sveltekit:prefetch
            class="no-underline text-black focus:underline hover:underline"
          >
            {post.title}
          </a>
        </h3>
      {:else}
        <h2 class="text-h4">
          <a
            {href}
            {target}
            sveltekit:prefetch
            class="no-underline text-black focus:underline hover:underline"
          >
            {post.title}
          </a>
        </h2>
      {/if}
      <p>{post.excerpt}</p>
    </div>
    <p class="mt-micro">
      <span>
        {#if post.author}
          <Avatars
            usernames={post.author}
            socialMediaLinks={authorSocialMediaLinks}
            socialMediaLinkClasses="hover:drop-shadow"
          />
        {/if}
        {#if post.date}
          <a
            {href}
            {target}
            class="date no-underline text-p-small ml-macro"
            sveltekit:prefetch
          >
            {new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </a>
        {/if}
      </span>
    </p>
  </div>
</div>
