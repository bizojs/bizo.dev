<script>
  import { Nav, Transition } from "$lib/components"
  import "../app.css"

  export let data
</script>

<Nav />

<div class="flex flex-col p-5">
  <Transition url={data.url}>
    <slot />
  </Transition>
</div>