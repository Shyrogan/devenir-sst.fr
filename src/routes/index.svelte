<script lang="ts">
</script>

<svelte:head>
	<title>Devenir-SST - Accueil</title>
</svelte:head>

<div class="h-2/5 flex flex-col items-center justify-center gap-12 lg:mb-24 mb-10 hero-fade">
	<h1 class="text-center pt-64 text-5xl font-extrabold">
		Les <span class="text-red-500">premiers secours</span>, facilement
	</h1>

	<p class="text-center text-xl w-8/12 font-semibold text-gray-600">
		Vous êtes une startup ou une PME ? Vous souhaitez formez vos employés aux premiers secours ? Que
		ce soit PSC1 ou SST - Nous sommes là pour vous !
	</p>
</div>

<div class="flex flex-row items-center justify-center">
	<img class="w-screen" alt="First aid" src="images/big-image.png" />
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
		class="lg:w-1/2 w-3/4"
		src="https://img.freepik.com/free-vector/hand-drawn-people-asking-questions-illustration_23-2148906555.jpg?t=st=1658154326~exp=1658154926~hmac=dbf4992338950e02056800ca6d3de17e347dac1e1db271e0b50cf1cc0385687c&w=1480"
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
		class="lg:w-1/2 w-3/4"
		src="https://img.freepik.com/free-vector/hand-drawn-people-asking-questions-illustration_23-2148906555.jpg?t=st=1658154326~exp=1658154926~hmac=dbf4992338950e02056800ca6d3de17e347dac1e1db271e0b50cf1cc0385687c&w=1480"
	/>
</div>

<style lang="scss">
	.hero-fade {
		background: linear-gradient(#ffffff, #e2e8f0);
	}
</style>
