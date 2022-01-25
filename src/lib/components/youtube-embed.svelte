<script context="module" lang="ts">
  declare global {
    interface Window {
      onYouTubeIframeAPIReady: any;
    }
    var YT: any;
  }
</script>

<script lang="ts">
  import { afterUpdate } from "svelte";
  import { trackEvent } from "./segment.svelte";
  import Share from "./share.svelte";

  export let embedId: string;
  export let title: string;

  const randomId = "yt-player-" + Math.random().toString(36).slice(2, 5);
  const VIDEO_PLAYING = 1;
  let videoStarted = false;

  const setUpVideo = () => {
    const onStateChange = (e: any) => {
      if (e.data == VIDEO_PLAYING) {
        if (!videoStarted) {
          trackEvent("screencast_started", {
            id: embedId,
            name: title,
            url: window.location.href,
            path: window.location.pathname,
          });
        }
        videoStarted = true;
      }
    };

    new YT.Player(randomId, {
      events: { onStateChange },
    });
  };

  afterUpdate(() => {
    if (typeof YT === "undefined") {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Youtube script will automatically call the following function
      window.onYouTubeIframeAPIReady = () => {
        setUpVideo();
      };
    } else {
      videoStarted = false;
      setUpVideo();
    }
  });

  export const youtubeURL = `https://youtube.com/watch?v=${embedId}`;

  const shareLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        youtubeURL
      )}`,
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
      trackingName: "twitter",
    },
    {
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
        youtubeURL
      )}`,
      alt: "Reddit",
      icon: "/svg/brands/reddit.svg",
      trackingName: "reddit",
    },
    {
      href: `http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
        youtubeURL
      )}`,
      alt: "HackerNews",
      icon: "/svg/brands/hackernews.svg",
      trackingName: "hackernews",
    },
  ];
</script>

<style>
  .youtube {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    max-height: 620px;
    margin: auto;

    @media (min-width: 1240px) {
      height: 620px;
    }
  }

  .youtube,
  .youtube + :global(div) {
    width: 990px;
    max-width: 100%;
  }

  .youtube::after {
    display: block;
    content: "";
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
</style>

<div class="youtube rounded-2xl shadow-light1">
  <iframe
    id={randomId}
    src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1`}
    {title}
    width="560"
    height="315"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</div>
<Share
  text="Share this video"
  {shareLinks}
  class="share justify-end mx-auto mt-xx-small"
/>
