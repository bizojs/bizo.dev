<script>
    import IconInfo from "~icons/tabler/info-circle"
    import IconWarning from "~icons/tabler/flag-2"
    import IconDefault from "~icons/tabler/world"
    import IconSuccess from "~icons/tabler/check"
    import IconError from "~icons/tabler/x"

    export let type
</script>

{#if type === "success"}
    <IconSuccess class="w-5 h-5 thick" />
{:else if type === "error"}
    <IconError class="w-5 h-5 thick" />
{:else if type === "info"}
    <IconInfo class="w-5 h-5 thick" />
{:else if type === "warning"}
    <IconWarning class="w-5 h-5 thick" />
{:else if type === "default"}
    <IconDefault class="w-5 h-5 thick" />
{/if}