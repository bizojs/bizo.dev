<script>
  import { Nav, Transition } from "$lib/components"
  import { Notifications } from "$lib/notifications"
  import "../app.css"
</script>

<Notifications />

<Nav />

<div class="flex flex-col p-5">
  <Transition>
    <slot />
  </Transition>
</div>