<script lang="ts">
	import {page} from "$app/stores";

	export let name: string
	export let href = "/"
</script>

{#if $$slots.default}
	<li>
		<p class="btn rounded normal-case"
		   class:btn-primary={$page.url.pathname.includes(href)}
		   class:btn-ghost={!$page.url.pathname.includes(href)}>{name}

			<svg class="hidden lg:inline-flex fill-current"
				 xmlns="http://www.w3.org/2000/svg" width="20" height="20"
				 viewBox="0 0 24 24">
				<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
			</svg>

			<svg class="inline-flex lg:hidden fill-current"
				 xmlns="http://www.w3.org/2000/svg"
				 width="24" height="24" viewBox="0 0 24 24">
				<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
			</svg>
		</p>
		<ul
			class="menu menu-compact dropdown-content mt-3 mx-2 bg-white p-2 shadow rounded-box
				w-52 lg:w-auto lg:mt-0 ">
			<slot/>
		</ul>
	</li>
{:else}
	<li>
		<a class="btn rounded normal-case"
		   class:btn-primary={$page.url.pathname === href}
		   class:btn-ghost={$page.url.pathname !== href}
		   {href}>{name}
		</a>
	</li>
{/if}