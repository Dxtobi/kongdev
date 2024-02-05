<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div class="">
	<Header />

	<main class=" w-full ">
		<slot />
	</main>

	
	<Footer/>

</div>

