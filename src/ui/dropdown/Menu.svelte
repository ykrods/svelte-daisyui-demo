<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  let {
    dropdown = $bindable(),
    class: className = "",
    children,
  }: {
    open: boolean
    class: string
    children: Snippet
  } = $props();

  const { popoverId, anchorName } = getContext("ctx-dropdown");
</script>
<ul
  bind:this={dropdown}
  class="dropdown menu rounded-box bg-base-100 shadow-sm {className}"
  popover
  id={popoverId}
  style:position-anchor={anchorName}
>
  {@render children()}
</ul>
