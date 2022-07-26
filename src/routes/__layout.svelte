<script>
	import Navbar from '../components/navigation/Navbar.svelte';
	import Footer from '../components/navigation/Footer.svelte';

	import '../app.css';
	import '../app.scss';
</script>

<Navbar />
<slot />
<Footer />
