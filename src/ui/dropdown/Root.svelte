<script lang="ts">
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";
  import { getMenu } from "./internals";

  let {
    children,
  } : {
    children: Snippet
  } = $props();

  const uid = $props.id();
  const popoverId = `popover-${uid}`;
  const anchorName = `--popover-anchor-${uid}`;

  setContext("ctx-dropdown", {
    popoverId,
    anchorName,
    getRoot() { return _root; }
  });

  let _root: HTMLDivElement;

  function onFocusout(e: FocusEvent) {
    if (!_root.contains(e.relatedTarget)) {
      getMenu(_root).hidePopover();
    }
  }
</script>
<div bind:this={_root} onfocusout={onFocusout}>
  {@render children()}
</div>
