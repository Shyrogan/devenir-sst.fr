<script lang="ts">
	import IoIosMail from 'svelte-icons/io/IoIosMail.svelte'
	import IoLogoWhatsapp from 'svelte-icons/io/IoLogoWhatsapp.svelte'
</script>

<div class="flex flex-col justify-center items-center text-center">
	<div
			class="bg-svg rounded-2xl lg:px-64 lg:w-auto md:w-2/3 w-10/12 px-20 py-10 mt-10 mb-40">
		<h2 class="text-2xl text-white font-bold">Parlons-en !</h2>
		<p class="font-light text-white my-4">Contactez-nous pour commencer
			votre
			formation aux premiers secours.</p>

		<div
				class="flex lg:flex-row flex-col gap-6 justify-center items-center lg:mt-28 md:mt-20 mt-12 mb-6">
			<a href="mailto:contact@devenir-sst.fr"
			   class="btn btn-accent md:w-auto w-32">
				<div class="flex flex-row items-center justify-center align-middle">
					<div class="w-6 mr-1">
						<IoIosMail />
					</div>
					Mail
				</div>
			</a>
			<a
					href="https://wa.me/33673246864?text=Bonjour,%20je%20souhaiterais%20des%20reseignements%20sur%20une%20formation%20(SST/PSC1),%20merci."
			   class="btn btn-accent md:w-auto w-32">
				<div
						class="flex flex-row items-center justify-center align-middle">
					<div class="w-6 mr-1">
						<IoLogoWhatsapp />
					</div>
					WhatsApp
				</div>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.bg-svg {
		background-color: #ef4444;
		background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23b91c1c' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
	}
</style>