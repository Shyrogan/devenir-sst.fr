<svelte:head>
	<title>Devenir-SST - Équipe</title>
</svelte:head>

<div
		class="flex flex-col items-center justify-center gap-12 mb-6 hero-fade">
	<div class="text-center items-center justify-center py-4">
		<h1 class="text-4xl font-extrabold pt-32">Notre équipe</h1>
		<p class="text-gray-700 font-medium py-3">Les membres de notre équipe
			s'occupant des formations.</p>
	</div>
</div>

	<div
			class="flex lg:flex-row flex-col gap-12 justify-center items-center mb-20">
		<div
				class="flex flex-col duration-500 py-4 px-10 justify-center items-center rounded-lg text-center">
			<img
				class="rounded-full my-4 w-52 h-52"
				src="/images/jose.png"
				alt="José VIAL"
			/>
			<h1 class="text-3xl font-bold">VIAL José</h1>
			<h3 class="font-semibold py-1 text-red-500">Ancien CRS secouriste en montagne</h3>
			<p class="font-semibold py-1 text-gray-600 w-64">“Après plus de 27
				ans	dans le secours en  montagne, je souhaite
				mettre à profit mes compétences en tant que formateur en
				sauvetage secourisme du travail.“</p>
		</div>

		<div
				class="flex flex-col duration-500 py-4 px-10 justify-center items-center rounded-lg text-center">
			<img
					class="rounded-full my-4 w-52 h-52"
					src="/images/carol.png"
					alt="José VIAL"
			/>
			<h1 class="text-3xl font-bold">FEYDEL Carol</h1>
			<h3 class="font-semibold py-1 text-red-500">CRS secouriste en montagne</h3>
			<p class="font-semibold py-1 text-gray-600 w-64">"Toujours en
				activité, formateur secouriste depuis plus de 18 ans, je me
				trouve en phase avec ce que ce qui m’anime : secourir,
				assister, informer,  former."</p>
		</div>
	</div>

<style lang="scss">
	.hero-fade {
		background: linear-gradient(#ffffff, #e2e8f0);
	}
</style>
