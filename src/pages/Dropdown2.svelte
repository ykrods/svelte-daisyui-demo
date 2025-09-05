<script lang="ts">
  import bars3 from "$src/assets/bars-3.svg";
  import Dropdown from "$src/ui/dropdown/dropdown";

  let dropdown = $state()

  const supported = CSS.supports('anchor-name: --x');
</script>
<svelte:head>
  <title>Dropdown2</title>
</svelte:head>
<main class="mt-12 mx-8">
  <h1 class="my-2 text-3xl font-bold">Dropdown2</h1>
  {#if !supported}
    <div role="alert" class="alert alert-error alert-soft my-3">
      <span>It seems that your browser does not support anchor positioning. Display issues are likely to occur.</span>
    </div>
  {/if}
  <Dropdown.Root>
    <Dropdown.Button>dropdown</Dropdown.Button>
    <Dropdown.Menu bind:dropdown>
      <Dropdown.MenuItem>
        <button
          onclick={() => {
            dropdown.hidePopover();
          }}
        >menu item</button>
      </Dropdown.MenuItem>
      <Dropdown.MenuItem><a class="link">bar</a></Dropdown.MenuItem>
    </Dropdown.Menu>
  </Dropdown.Root>
</main>
