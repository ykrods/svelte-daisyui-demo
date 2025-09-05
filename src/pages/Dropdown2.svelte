<script lang="ts">
  import bars3 from "$src/assets/bars-3.svg";
  import Dropdown from "$src/ui/dropdown/dropdown";

  let dropdown = $state()
</script>
<svelte:head>
  <title>Dropdown2</title>
</svelte:head>
<main class="mt-12 mx-8">
  <h1 class="my-2 text-3xl font-bold">Dropdown2</h1>
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
