<script>
    import '../app.scss';

	import Navbar from '../components/navigation/Navbar.svelte';
    import Navlink from "../components/navigation/Navlink.svelte";
</script>

<Navbar>
    <Navlink name="Accueil" href="/" />
    <Navlink name="Équipe" href="/equipe" />
    <Navlink name="Formations" href="/formation">
        <Navlink name="SST" href="/formation/sst" />
    </Navlink>
</Navbar>
<slot />