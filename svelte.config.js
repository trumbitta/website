import adapterNetlify from "@sveltejs/adapter-netlify";
import { mdsvex } from "mdsvex";
import headings from "remark-autolink-headings";
import remarkExternalLinks from "remark-external-links";
import slug from "remark-slug";
import sveltePreprocess from "svelte-preprocess";
import rehypeToc from "@jsdevtools/rehype-toc";
import remarkSetImagePath from "./src/lib/utils/remark-set-image-path.js";
import remarkEmbedVideo from "./src/lib/utils/remark-embed-video.js";
import remarkLinkWithImageAsOnlyChild from "./src/lib/utils/remark-link-with-image-as-only-child.js";
import remarkHeadingsPermaLinks from "./src/lib/utils/remark-headings-permalinks.js";
import { toString } from "mdast-util-to-string";
import { h } from "hastscript";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapterNetlify({
      split: true,
    }),
    amp: false,
    appDir: "_app",
    files: {
      assets: "static",
      hooks: "src/hooks",
      lib: "src/lib",
      routes: "src/routes",
      template: "src/app.html",
    },
    hydrate: true,
    prerender: {
      crawl: true,
      enabled: true,
      onError: "fail",
      entries: ["*"],
    },
    router: true,
    target: "#svelte",
    vite: {
      resolve: {
        preserveSymlinks: true,
      },
      server: {
        hmr: {
          clientPort: process.env.HMR_HOST ? 443 : 3000,
          host: process.env.HMR_HOST
            ? process.env.HMR_HOST.substring("https://".length)
            : "localhost",
        },
      },
    },
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: [
    sveltePreprocess({ postcss: true, scss: true, preserve: ["ld+json"] }),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "./src/lib/components/blog/blog-content-layout.svelte",
        docs: "./src/lib/components/docs/docs-content-layout.svelte",
        guides: "./src/lib/components/guides/guides-content-layout.svelte",
      },
      rehypePlugins: [
        [
          rehypeToc,
          {
            customizeTOC: (toc) => {
              // The Toc always has an <ol> element, but it doesn't
              // have children if the Markdown content contains no headings.
              return toc.children[0].children.length === 0 ? false : toc;
            },
            customizeTOCItem: (toc, heading) => {
              if (heading.tagName !== "h2") {
                toc.properties.className = `${
                  toc.properties.className || ""
                } ml-4`;
              }
              return toc;
            },
            cssClasses: {
              listItem: "toc-level my-micro",
            },
            headings: ["h2", "h3", "h4", "h5", "h6"],
            position: "beforebegin",
          },
        ],
      ],
      remarkPlugins: [
        [
          remarkExternalLinks,
          {
            target: "_blank",
          },
        ],
        slug,
        [
          headings,
          {
            behavior: "append",
            linkProperties: {},
            content: function (node) {
              return [
                h("span.icon.icon-link", {
                  ariaLabel: toString(node) + " permalink",
                }),
              ];
            },
          },
        ],
        remarkSetImagePath,
        remarkLinkWithImageAsOnlyChild,
        remarkHeadingsPermaLinks,
        [
          remarkEmbedVideo,
          {
            width: 800,
            height: 400,
            noIframeBorder: true,
          },
        ],
      ],
    }),
  ],
};

export default config;
