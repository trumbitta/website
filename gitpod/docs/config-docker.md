---
section: configure
title: Custom Docker Image
---

<script context="module">
  export const prerender = true;
</script>

# Custom Docker Image

By default, Gitpod uses a standard Docker Image called [`Workspace-Full`](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile) as the foundation for workspaces. Workspaces started based on this default image come pre-installed with Docker, Go, Java, Node.js, C/C++, Python, Ruby, Rust, PHP as well as tools such as Homebrew, Tailscale, Nginx and several more.

If this image does not include the tools you need for your project, you can provide a public Docker image or your own [Dockerfile](#using-a-dockerfile). This provides you with the flexibility to install the tools & libraries required for your project.

> **Note:** Gitpod supports Debian/Ubuntu based Docker images. Alpine images do not include [libgcc and libstdc++](https://code.visualstudio.com/docs/remote/linux#_tips-by-linux-distribution) which breaks Visual Studio Code. See also [Issue #3356](https://github.com/gitpod-io/gitpod/issues/3356).

## Configure a public Docker image

You can define a public Docker image in your `.gitpod.yml` file with the following configuration:

```yaml
image: node:buster
```

The official Gitpod Docker images are hosted on <a href="https://hub.docker.com/u/gitpod/" target="_blank">Docker Hub</a>.

You can find the source code for these images in <a href="https://github.com/gitpod-io/workspace-images/" target="_blank">this GitHub repository</a>.

### Docker image tags

For public images, feel free to specify a tag, e.g. `image: node:buster` if you are interested in a particular version of the Docker image.

For Gitpod images, we recommend you do not specify a tag or use `:latest` to make sure you automatically benefit from security patches and fixes we release.

## Configure a custom Dockerfile

This option provides you with the most flexibility. Start by adding the following configuration in your `.gitpod.yml` file:

```yaml
image:
  file: .gitpod.Dockerfile
```

Next, create a `.gitpod.Dockerfile` file at the root of your project. The syntax is the regular `Dockerfile` syntax as <a href="https://docs.docker.com/engine/reference/builder/" target="_blank">documented on docs.docker.com</a>.

A good starting point for creating a custom `.gitpod.Dockerfile` is the
<a href="https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile" target="_blank">gitpod/workspace-full</a> image as it already contains all the tools necessary to work with all languages Gitpod supports.

```dockerfile
FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN brew install fzf
```

**Docker support**: If you use the `gitpod/workspace-full` image, you get Docker support built-in to your environment.

If you want a base image without the default tooling installed then use the <a href="https://github.com/gitpod-io/workspace-images/blob/master/base/Dockerfile" target="_blank">gitpod/workspace-base</a> image.

```dockerfile
FROM gitpod/workspace-base

# Install custom tools, runtime, etc.
RUN brew install fzf
```

When you launch a Gitpod workspace, the local console will use the `gitpod` user, so all local settings, config file, etc. should apply to `/home/gitpod` or be run using `USER gitpod` (we no longer recommend using `USER root`).

You can however use `sudo` in your Dockerfile. The following example shows a typical `.gitpod.Dockerfile` inheriting from `gitpod/workspace-full`:

```dockerfile
FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN sudo apt-get update \\
    && sudo apt-get install -y \\
        ... \\
    && sudo rm -rf /var/lib/apt/lists/*

# Apply user-specific settings
ENV ...
```

Once committed and pushed, Gitpod will automatically build this Dockerfile when (or [before](/docs/prebuilds)) new workspaces are created.

See also [Gero's blog post](/blog/docker-in-gitpod) running through an example.

## Trying out changes to your Dockerfile

### In the existing workspace

Since the `.gitpod.Dockerfile` is a regular Dockerfile, you can build the image in your Gitpod workspace. This helps you catch syntax or build errors before you commit your changes.

To test your custom `.gitpod.Dockerfile`, run the following commands from the project root:

1. `docker build -f .gitpod.Dockerfile -t gitpod-dockerfile-test .`
1. `docker run -it gitpod-dockerfile-test bash`

This builds a `gitpod-dockerfile-test` image and starts a new container based on that image. At this point, you are connected to the Docker container that will be available as the foundation for your Gitpod workspace. You can inspect the container and make sure the necessary tools & libraries are installed.

To exit the container and return back to your Gitpod workspace, type `exit`.

### As a new workspace

Once you validated the `.gitpod.Dockerfile` with the approach described in the previous chapter, it is time to start a new Gitpod workspace based on that custom image.

The easiest way to try out your changes is as follows:

1. Create a new branch.
1. Commit your changes & push the branch to your git hosting server.
1. Open a pull / merge request and open it in your browser.
1. Prefix the URL with `gitpod.io/#` and hit Enter.

This starts a new workspace with your changes applied. You notice you now have two Gitpod workspaces running. The one where you made the changes and the new one, based on the pull request.

**Caution**: Keeping the first workspace open is important in case your Dockerfile has bugs and prevents Gitpod from starting a workspace based on your pull request.

In the second workspace, the Docker build will start and show the output. If your Dockerfile has issues and the build fails or the resulting workspace does not look like you expected, you can force push changes to your config using your first, still running workspace and simply start a fresh workspace again to try them out.

We are working on allowing Docker builds directly from within workspaces, but until then this approach has been proven to be the most productive.
