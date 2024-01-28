<script>
  import Nav from "$lib/components/Nav.svelte"
  import "../app.css"
</script>

<Nav />

<div class="flex flex-col p-5">
  <slot />
</div>