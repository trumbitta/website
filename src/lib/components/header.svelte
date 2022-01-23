<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<header>
  <h1>{title}</h1>
  <p class="text-large">{@html text}</p>
</header>
