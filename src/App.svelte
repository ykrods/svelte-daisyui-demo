<script lang="ts">
  import bars3 from "./assets/bars-3.svg";

  import Router from "./Router.svelte";
</script>
<div class="fixed top-0 left-0 p-2 z-1">
  <label for="drawer-toggle" class="btn btn-ghost drawer-button lg:hidden">
    <img class="size-6" src={bars3} alt="open sidebar"/>
  </label>
</div>

<div class="drawer lg:drawer-open">
  <input id="drawer-toggle" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <Router></Router>
  </div>
  <div class="drawer-side">
    <label for="drawer-toggle" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <li><a href="#Home">Home</a></li>
      <li><a href="#Dropdown">Dropdown</a></li>
      <li><a href="#Dropdown2">Dropdown2</a></li>
    </ul>
  </div>
</div>
