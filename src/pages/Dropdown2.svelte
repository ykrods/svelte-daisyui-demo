<script lang="ts">
  import bars3 from "$src/assets/bars-3.svg";
  import SimpleDropdown from "$src/ui/Dropdown.svelte";
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
  <section>
    <h2 class="my-3 text-xl font-bold">Dropdown (simple)</h2>

    <SimpleDropdown>
      {#snippet buttonContent()}
        <img src={bars3} class="size-4" alt="other menu icon">
      {/snippet}
      {#snippet content(close)}
        <li>
          <button
            tabindex="-1"
            onclick={() => {
              console.log("edit")
              close();
            }}
          >Edit</button>
        </li>
        <li>
          <button
            class="text-error"
            tabindex="-1"
            onclick={() => {
              console.log("delete")
              close();
            }}
          >Delete</button>
        </li>
        <li>
          <a href="#" class="link" tabindex="-1">link</a>
        </li>
      {/snippet}
    </SimpleDropdown>
  </section>
  <section>
    <h2 class="my-3 text-xl font-bold">Dropdown (structured component and accessibility support)</h2>

    <Dropdown.Root>
      <Dropdown.Button>dropdown</Dropdown.Button>
      <Dropdown.Menu bind:dropdown aria-label="example menu">
        <Dropdown.MenuItem>
          <button
            role="menuitem"
            tabindex="-1"
            onclick={() => {
              dropdown.hidePopover();
              console.log("edit");
            }}
          >Edit</button>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem>
          <button
            class="text-error"
            role="menuitem"
            tabindex="-1"
            onclick={() => {
              dropdown.hidePopover();
              console.log("delete");
            }}
          >Delete</button>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem>
          <a class="link" href="#bar" role="menuitem" tabindex="-1">bar</a>
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown.Root>
  </section>
</main>
