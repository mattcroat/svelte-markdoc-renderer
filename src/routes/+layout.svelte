<script lang="ts">
  import '@fontsource-variable/manrope';

  let { children } = $props()
</script>

<svelte:head>
  <title>Markdoc</title>
</svelte:head>

<main>
  {@render children()}
</main>

<style>
  :global(body) {
    height: 100svh;
    display: grid;
    place-items: center;
    margin: 0px;
    font-family: 'Manrope Variable';
    line-height: 1.8;
    color: white;
    background-color: oklch(20% 0.01 200);
  }

  :global(a) {
    color: inherit;
  }

  main {
    max-width: 60ch;
    margin-inline: auto;
  }
</style>