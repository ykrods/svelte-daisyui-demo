<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  let {
    class: className = "",
    children,
  }: {
    class: string
    children: Snippet
  } = $props();

  const { popoverId, anchorName } = getContext("ctx-dropdown");
</script>
<button
  class="btn {className}"
  popoverTarget={ popoverId }
  style:anchor-name={ anchorName }
>
  {@render children()}
</button>
