<script>
	import { browser } from "$app/environment";
	import { slide } from "svelte/transition";
  import Tooltip from "$lib/components/Tooltip.svelte";

	let isDarkMode = true;
	const handleMode = () => {
		isDarkMode = !isDarkMode;

        localStorage.setItem('theme', isDarkMode ? "dark" : "light");
        // localStorage.setItem('color-theme', isDarkMode ? "dark" : "light");

		isDarkMode
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
		// alert(`it is dark ${localStorage.getItem('color-theme')}`);
	}

	if (browser) {
		if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.documentElement.classList.add("dark");
			isDarkMode = true;
		} else {
			document.documentElement.classList.remove("dark");
			isDarkMode = false;
		}
	}
</script>

<!-- <input type="checkbox" checked={isDarkMode} on:click={handleMode} name="theme-toggle" id="theme-toggle"/> -->
<div class="flex items-center justify-center">
	<button data-tooltip-target={`mode-btn`} data-tooltip-placement="right" type="button" on:click={handleMode} class={`p-0.5 relative ${isDarkMode ? "bg-blue-700 hover:bg-blue-600" : " bg-gray-300 dark:bg-zinc-800 hover:bg-transparent/10 dark:hover:bg-zinc-700/70"} rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600 overflow-hidden`}>
	{#if isDarkMode}
		<i transition:slide class="relative icon icon-ic_fluent_weather_sunny_20_regular flex text-xl rounded-full text-zinc-100 p-0.5 justify-end"></i>
	{:else}
		<i transition:slide class="relative icon icon-ic_fluent_weather_moon_20_regular flex text-xl rounded-full p-0.5"></i>
	{/if}
	</button>
	<Tooltip title={isDarkMode ? "Light mode" : "Dark mode"} id={"mode-btn"}/>
</div>
