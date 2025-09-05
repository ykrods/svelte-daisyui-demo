<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    class: className = "",
    children,
  }: {
    class: string
    children: Snippet
  } = $props();
</script>
<li class={className}>
  {@render children()}
</li>
