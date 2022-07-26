<script lang="ts">
	import { onMount } from 'svelte';
	import Navlink from './Navlink.svelte';
	import GiHeartOrgan from 'svelte-icons/gi/GiHeartOrgan.svelte';

	let scrolled = false;

	onMount(() => {
		window.onscroll = () => {
			scrolled = window.scrollY > 0;
		};
	});
</script>

<nav class:scrolled class="duration-500">
	<div class="inline-flex align-middle">
		<div class="w-10 pr-2 text-red-500 heartbeating">
			<GiHeartOrgan />
		</div>
		<a href="/">
			<p class="font-extrabold text-xl text-red-500">devenir-sst</p>
		</a>
	</div>

	<div class="flex-initial">
		<div class="flex justify-end items-center relative">
			<div class="flex mr-4 items-center">
				<a class="duration-300 hover:text-red-500 inline-block py-2 px-3 font-extrabold" href="/">
					Accueil
				</a>
				<a
					class="duration-300 hover:text-red-500 inline-block py-2 px-3 font-extrabold"
					href="/equipe"
				>
					Équipe
				</a>
			</div>
		</div>
	</div>
</nav>

<style lang="scss">
	nav {
		@apply fixed backdrop-blur-lg w-full flex justify-between items-center mx-auto px-8 h-20;

		&.scrolled {
			@apply shadow-xl bg-gray-200 bg-opacity-30;
		}
	}
</style>
