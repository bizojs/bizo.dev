<script>
  import { Nav, Transition } from "$lib/components"
  import "../app.css"
</script>

<Nav />

<div class="flex flex-col p-5">
  <Transition>
    <slot />
  </Transition>
</div>