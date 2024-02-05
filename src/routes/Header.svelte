<script>
	import Icon from "svelte-icons-pack";
	import BiMenu from "svelte-icons-pack/bi/BiMenu";

	let show=false
	const showMenu =()=>{
		return show = !show
	}
</script>

<header class="flex justify-between items-center p-3 fixed left-0 top-0 w-full backdrop-blur-[10px] z-50">
	<a href="/" class="flex items-center capitalize  p-4 pl-0 font-bold text-xl">
		<span class='text-gray-300'>Kong</span>
		<span class='text-blue-600'>Devs</span>
	</a>

	<div class="md:flex justify-between items-center gap-2  hidden ">
		<a href="/services" class="text-gray-300 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform">services</a>
		<a href="/tech" class="text-gray-300 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform">technologies</a>
		<a href="/industries" class="text-gray-300 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform">industries</a>
		<a href="/clients" class="text-gray-300 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform">clients</a>
		<a href="/companies" class="text-gray-300 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform">companies</a>
		<a href="#contact" class="text-gray-100 bg-blue-600 hover:bg-blue-800 uppercase px-4 py-2 hover:scale-[1.2] transition-transform">contact</a>
	</div>

	<button on:click={showMenu} class="block justify-between items-center gap-2 md:hidden " >
		<Icon src={BiMenu} size={24} color='#2563eb'/>
	</button>

	{#if show}
		<div class="flex flex-col gap-2 fixed h-screen overflow-y-scroll bg-[#ffffff] backdrop-blur-[10px] top-0 right-0 w-1/2 p-5">
			<a href="/services" class="text-gray-900 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform" on:click={showMenu}>services</a>
			<a href="/tech" class="text-gray-900 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform" on:click={showMenu}>technologies</a>
			<a href="/industries" class="text-gray-900 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform" on:click={showMenu}>industries</a>
			<a href="/clients" class="text-gray-900 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform" on:click={showMenu}>clients</a>
			<a href="/companies" class="text-gray-900 hover:text-blue-600 capitalize p-4 font-bold hover:scale-[1.2] transition-transform" on:click={showMenu}>companies</a>
			<a href="#contact" class="text-gray-100 bg-blue-600 hover:bg-blue-800 uppercase px-4 py-2 hover:scale-[1.2] transition-transform" on:click={showMenu}>contact</a>
		</div>
	{/if}
</header>
