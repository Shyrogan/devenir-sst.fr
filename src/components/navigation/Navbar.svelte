<script lang="ts">
	import { onMount } from 'svelte';
	import GiHeartOrgan from 'svelte-icons/gi/GiHeartOrgan.svelte'

	let scrolled = false;
	onMount(() => {
		window.onscroll = () => {
			scrolled = window.scrollY > 0;
		};
	});
</script>

<nav class:scrolled
	 class="duration-500 z-50 backdrop-blur-lg fixed w-full navbar py-4">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" class="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</div>
			<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
				<slot />
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">
			<div class="w-10 pr-2 text-red-500 heartbeating">
				<GiHeartOrgan />
			</div>
			<a href="/">
				<p class="font-extrabold text-xl text-red-500">devenir-sst</p>
			</a>
		</a>
	</div>

	<div class="navbar-end hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<slot />
		</ul>
	</div>
</nav>

<style lang="scss">
	nav {
		&.scrolled {
			@apply shadow-xl bg-gray-200 bg-opacity-30;
		}
	}
</style>
