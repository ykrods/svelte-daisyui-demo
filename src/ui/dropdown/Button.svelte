<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";
  import { getMenu, isMenuHidden, getCandidates } from "./internals";

  let {
    class: className = "",
    children,
  }: {
    class: string
    children: Snippet
  } = $props();

  const { popoverId, anchorName , getRoot } = getContext("ctx-dropdown");


  function onKeydown(e: KeyboardEvent) {
    const root = getRoot();
    if (e.key === "Enter" || e.key === " ") {
      const menu = getMenu(root);
      if (!menu) {
        return;
      }
      e.preventDefault();

      if (isMenuHidden(menu)) {
        menu.showPopover();

        const candidates = getCandidates(root);
        if (0 < candidates.length) {
          candidates[0].focus()
        }
      } else {
        menu.hidePopover();
      }
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const menu = getMenu(root);
      if (!menu) {
        return;
      }
      menu.showPopover();
      const candidates = getCandidates(root);
      if (0 < candidates.length) {
        candidates[0].focus()
      }
    }
  }
</script>
<button
  class="btn {className}"
  popoverTarget={popoverId}
  style:anchor-name={anchorName}
  onkeydown={onKeydown}
>
  {@render children()}
</button>
