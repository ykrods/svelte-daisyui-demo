<script lang="ts">
  import bars3 from "$src/assets/bars-3.svg";
  import Dropdown from "$src/ui/Dropdown.svelte";
</script>
<svelte:head>
  <title>Dropdown</title>
</svelte:head>
<main class="mt-12 mx-8">
  <h1 class="my-2 text-3xl font-bold">Dropdown</h1>
  <Dropdown>
    {#snippet buttonContent()}
      <img src={bars3} class="size-4" alt="other menu icon">
    {/snippet}
    {#snippet content(close)}
      <li>
        <button
          class="text-error"
          onclick={() => {
            close();
          }}
        >Delete</button>
      </li>
    {/snippet}
  </Dropdown>
</main>
