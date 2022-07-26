<script lang="ts">
	import IoIosMail from 'svelte-icons/io/IoIosMail.svelte';
	import IoIosCall from 'svelte-icons/io/IoIosCall.svelte';
</script>

<div class="flex flex-col justify-center items-center h-screen pt-10">
	<div class="text-center items-center justify-center py-4">
		<h1 class="text-4xl font-extrabold">Vous êtes prêt ? Contactez nous !</h1>
		<p class="text-gray-700 font-medium py-3">Veuillez retrouver nos coordonnées:</p>
	</div>
	<div class="flex flex-row gap-6 justify-center items-center">
		<div
			class="flex flex-row duration-500 py-6 px-6 justify-center items-center rounded-lg gap-6 bg-white w-1/2"
		>
			<div class="w-16 bg-red-400 py-4 px-4 text-white rounded-lg"><IoIosMail /></div>
			<div class="">
				<h3>Email</h3>
				<a href="mailto:devenir-sst@gmail.com" class="text-red-500">devenir-sst@gmail.com</a>
			</div>
		</div>
		<div
			class="flex flex-row duration-500 py-6 px-6 justify-center items-center rounded-lg gap-6 bg-white w-1/2 "
		>
			<div class="w-16 bg-green-400 py-4 px-4 text-white rounded-lg"><IoIosCall /></div>
			<div class="">
				<h3>Téléphone</h3>
				<a href="tel:+33640404040" class="text-red-500">+33640404040</a>
			</div>
		</div>
	</div>
</div>
