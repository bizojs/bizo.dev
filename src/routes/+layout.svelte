<script>
  import { Nav, Footer, Transition } from "$lib/components"
  import { Notifications } from "$lib/notifications"
  import "../app.css"
</script>

<Notifications />

<Nav />

<div class="flex flex-col">
  <Transition>
    <div class="lg:mx-60 mx-5">
      <slot />
    </div>
  </Transition>
</div>

<Footer />