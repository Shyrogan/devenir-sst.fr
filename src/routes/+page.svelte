<svelte:head>
	<title>Devenir-SST - Accueil</title>
</svelte:head>

<div class="h-2/5 flex flex-col items-center justify-center gap-12 lg:mb-24 mb-10 hero-fade">
	<h1
			class="text-center pt-64 lg:text-5xl text-3xl font-extrabold">
		Les <span class="text-red-500">premiers secours</span>, facilement
	</h1>

	<p
			class="text-center lg:text-xl text-lg w-8/12 font-semibold text-gray-600">
		Vous êtes une startup, une PME, un artisan ou autre ? Vous souhaitez
		formez	vos employés aux premiers secours ? Que ce soit PSC1 ou SST
		— Nous sommes là pour vous !
	</p>
</div>

<div class="flex flex-col align-middle justify-center items-center">
	<img
			class="lg:w-9/12 w-full"
			alt="First aid"
			src="images/teach.svg"/>
</div>

<div class="flex lg:flex-row flex-col items-center justify-center gap-20 my-32">
	<div class="flex flex-col gap-6 lg:w-1/4 w-3/4">
		<h2 class="text-xl text-red-500 font-bold">Choisissez une formation</h2>
		<h1 class="text-3xl font-bold">Facile, rapide, humain.</h1>
		<p class="text-gray-700 font-medium">
			Tout d'abord, déterminer la formation que vous souhaitez effectuer. Si vous ne savez pas, pas
			de soucis ! N'hésitez pas à nous contacter pour des renseignements.
		</p>
	</div>

	<img
		alt="Formation"
		class="lg:w-1/3 w-7/12"
		src="/images/fast.svg"
	/>
</div>

<div class="flex lg:flex-row-reverse flex-col items-center justify-center gap-20 my-32">
	<div class="flex flex-col gap-6 lg:w-1/4 w-3/4">
		<h2 class="text-xl text-red-500 font-bold">Prise de rendez-vous</h2>
		<h1 class="text-3xl font-bold">Tout est planifié, vous choisissez.</h1>
		<p class="text-gray-700 font-medium">
			Si vous avez fais votre choix, établissez des dates qui vous arrange et appelez nous pour
			essayer de prendre rendez-vous. Nous faisons au mieux pour que les rendez-vous vous
			correspond.
		</p>
	</div>

	<img
		alt="Formation"
		class="lg:w-1/2 w-full"
		src="/images/planned.svg"
	/>
</div>

<style lang="scss">
	.hero-fade {
		background: linear-gradient(#ffffff, #e2e8f0);
	}
</style>
