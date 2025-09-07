<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  import { getCandidates } from "./internals";

  let {
    dropdown = $bindable(),
    class: className = "",
    children,
  }: {
    open: boolean
    class: string
    children: Snippet
  } = $props();

  const { popoverId, anchorName, getRoot } = getContext("ctx-dropdown");

  function onKeydown(e: KeyboardEvent) {
    console.log(e.key);
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      const d = e.key === "ArrowDown" ? +1 : -1;
      const candidates = getCandidates(getRoot());
      const cur = candidates.findIndex(o => o === e.target);
      const idx = (cur + d + candidates.length) % candidates.length;
      candidates[idx].focus();
    }
  }
</script>
<ul
  bind:this={dropdown}
  class="dropdown menu rounded-box bg-base-100 shadow-sm {className}"
  popover
  id={popoverId}
  style:position-anchor={anchorName}
  role="menu"
  onkeydown={onKeydown}
>
  {@render children()}
</ul>
