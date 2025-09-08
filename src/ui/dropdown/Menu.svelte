<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  import { getCandidates } from "./internals";

  let {
    dropdown = $bindable(),
    class: className = "",
    children,
    ...props
  }: {
    open: boolean
    class: string
    children: Snippet
  } = $props();

  const { popoverId, anchorName, getRoot } = getContext("ctx-dropdown");

  function onKeydown(e: KeyboardEvent) {
    const candidates = getCandidates(getRoot());
    if (candidates.length === 0) {
      return;
    }

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      const d = e.key === "ArrowDown" ? +1 : -1;
      const cur = candidates.findIndex(o => o === e.target);
      const idx = (cur + d + candidates.length) % candidates.length;
      candidates[idx].focus();
    }
    if (e.key === "Home") {
      candidates[0].focus();
    }
    if (e.key === "End") {
      candidates[candidates.length - 1].focus();
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
  {...props}
>
  {@render children()}
</ul>
