<script>
	import { hslide } from '../lib/fun/hslide';
	import AiFillCaretLeft from "svelte-icons-pack/ai/AiFillCaretLeft";
    import AiFillCaretRight from "svelte-icons-pack/ai/AiFillCaretRight";
    import Icon from "svelte-icons-pack";
  	import { onDestroy, onMount } from 'svelte';
    
export let slides
	
	let cur = 0;
	
	function changeSlide(slide) {
		cur = slide;
	}
	
	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);
	const transition_args = {
		duration: 200,
	}
	
	function prev(e) {
		cur = clamp( --cur, 0, slides.length-1 )
	}
	
	// function next(e) {
	// 	if (cur === slides.length-1) {
	// 		 cur = 0
	// 	}
	// 	 cur = clamp( ++cur, 0, slides.length-1 )
	// }// 
	function next(e) {
		
		 cur = clamp( ++cur, 0, slides.length-1 )
	}
	
  const ARROW_LEFT = 37;
	const ARROW_RIGHT = 39;
	function handleShortcut(e) {
        if (e.keyCode === ARROW_LEFT ) {
						prev();
        }
		    if (e.keyCode === ARROW_RIGHT ) {
            next();
        }
    }

	let autoSlideInterval;

	// Function to start the auto slider
	function startAutoSlider() {
	autoSlideInterval = setInterval(() => {
		next();
	}, 2000);
	}

	// Function to stop the auto slider
	function stopAutoSlider() {
	clearInterval(autoSlideInterval);
	}

	// Start the auto slider when the component is mounted
	onMount(() => {
	startAutoSlider();
	});

	// Stop the auto slider when the component is unmounted
	onDestroy(() => {
	stopAutoSlider();
	});

</script>

<svelte:window on:keyup={handleShortcut} />

<div class="extra-outer-wrapper h-full w-full">
	<div class="outer-wrapper h-full w-full">
		<div class="inner-wrapper h-full w-full">
			{#each slides as slide, id}
				{#if id === cur}
				<div	class="slide w-full p-5  md:px-20  h-full"
						 in:hslide={transition_args}
						 out:hslide={transition_args}>
                    <div class="  md:p-5 ">
                        <h1 class="text-3xl capitalize text-white">{slide.header}</h1>
                        <p class=" capitalize text-gray-200 my-5">{slide.text}</p>
                        <div class="my-10"><a href="#contact" class="px-4 py-2 border-2 border-gray-100 text-gray-100 my-10 text-xl">Contact Now</a></div>

                    </div>
               
				</div>
				{/if}
			{/each}
			<div class="controls">
				<button on:click="{()=>prev()}">
					<Icon src={AiFillCaretLeft} size={24} color='#2563eb'/>
				</button>
				<button on:click="{()=>next()}">
                    <Icon src={AiFillCaretRight} size={24} color='#2563eb'/>
				</button>
			</div>
		</div>
	</div>
    <div class="dots absolute bottom-10 z-40  left-10">
        {#each slides as slide, i}
            <button on:click={()=>changeSlide(i)} class="dot" class:selected={cur == i}>{i+1}</button>
        {/each}
    </div>
</div>



<style>
	


	button {
		background: transparent;
		color: #FFF;
		border-color: transparent;
		width: 3.2rem;
		height: 3.2rem;
	}
	
	button:hover,
	button:focus{
		background: rgba(0,0,0,0.5);
	}
	
	.dots {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 8px;
	}
	
	.dot {
		width: 15px;
		height: 15px;
		background: #ffffff;
		border-radius: 1px;
		font-size: 0;
		margin: 0.3rem;
		opacity: 0.3;
	}
	
	.dot.selected {
		opacity: 1;
	}

	.extra-outer-wrapper {
		
		margin: 0 auto;
	}

	.outer-wrapper {
		width: 100%;
		
		position: relative;
	}
	
	.inner-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		position: absolute;
	}

	.controls button:first-child {
		position: absolute;
		left: 0;
		top: calc(50% - 1.2rem);
	}
	
	.controls button:last-child {
		position: absolute;
		right: 0;
		top: calc(50% - 1.2rem);
	}
	
	.slide {
		flex: 1 0 auto;
		width: 100%;
		height: 100%;
		
	  align-items: center;
		justify-content: center;
		display: flex;
		text-align: center;
		font-weight: bold;
		font-size: 2rem;
		color: white;
	}
	
	.controls {
		text-align: center;
		width: 100%;
		display: block;
	}
</style>