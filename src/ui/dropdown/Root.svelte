<script lang="ts">
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

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
  });
</script>
<div>
  {@render children()}
</div>
