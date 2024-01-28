<svelte:head>
	<title>Dark Mode Toggle - bizo demos</title>
</svelte:head>

<script>
	import { page } from "$app/stores"
</script>

<div class="flex flex-col gap-10 lg:m-40">
	<p class="text-4xl lg:text-left text-center">The theme is currently: <span class="font-semibold">{$page.data.theme}</span></p>
	<div class="flex flex-col gap-4">
		<p class="lg:text-left text-center">We can get the current theme with the following:</p>
		<div class="p-3 rounded bg-secondary-light dark:bg-secondary-dark/40">
			<p class="break-all">
				<span class="!text-import font-code lg:!text-lg !text-base">import</span>
				<span class="!text-bracket font-code lg:!text-lg !text-base">{"{"}</span>
				<span class="!text-export font-code lg:!text-lg !text-base">page</span>
				<span class="!text-bracket font-code lg:!text-lg !text-base">{"}"}</span>
				<span class="!text-import font-code lg:!text-lg !text-base">from</span>
				<span class="!text-package font-code lg:!text-lg !text-base">"$app/stores"</span>
			</p>
		</div>
		<p>And then use it like:</p>
		<div class="p-3 rounded bg-secondary-light dark:bg-secondary-dark/40">
			<p class="lg:text-left text-center flex items-center flex-wrap">
				<span class="font-code mr-2 lg:!text-lg !text-base">The current theme is:</span>
				<span class="!text-import font-code lg:!text-lg !text-base">{"{"}</span>
				<span class="!text-bracket font-code lg:!text-lg !text-base">$</span>
				<span class="!text-export font-code lg:!text-lg !text-base">page</span>
				<span class="!text-bracket font-code lg:!text-lg !text-base">.</span>
				<span class="!text-export font-code lg:!text-lg !text-base">data</span>
				<span class="!text-bracket font-code lg:!text-lg !text-base">.</span>
				<span class="!text-export font-code lg:!text-lg !text-base">theme</span>
				<span class="!text-import font-code lg:!text-lg !text-base">{"}"}</span>
			</p>
		</div>
	</div>
</div>