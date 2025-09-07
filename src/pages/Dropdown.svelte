<script lang="ts">
  import bars3 from "$src/assets/bars-3.svg";
</script>
<svelte:head>
  <title>Dropdown</title>
</svelte:head>
<main class="mt-12 mx-8">
  <h1 class="my-5 text-3xl font-bold">Dropdown</h1>
  <p class="my-3">
    There are 3 methods to use a dropdowns introduced by docs (<a class="link" href="https://daisyui.com/components/dropdown/" target="_blank">dropdown</a>).
  </p>
  <ul class="pl-5 list-disc">
    <li>Regardless of the method used, additional JavaScript implementation will be required when considering accessibility.</li>
  </ul>

  <section>
    <h2 class="my-3 text-xl font-bold">Details and summary</h2>
    <details class="dropdown">
      <summary class="btn m-1">open or close</summary>
      <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>
  </section>
  <section>
    <h2 class="my-3 text-xl font-bold">Popover API and anchor positioning</h2>
    <div role="alert" class="alert alert-error alert-soft my-3">
      <span>Anchor positioning is not supported by some browsers (on 2025-09).</span>
    </div>

    <button class="btn" popovertarget="popover-1" style="anchor-name:--anchor-1">
      Button
    </button>
    <ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover id="popover-1" style="position-anchor:--anchor-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </section>
  <section>
    <h2 class="my-3 text-xl font-bold">CSS focus</h2>
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">Click</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
      <div class="p-30 bg-red-50">brabrabra</div>
    </div>
  </section>
</main>
