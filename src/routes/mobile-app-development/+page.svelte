<script>
  import Ideas from './Ideas.svelte';

	import Slider from '../../components/slider.svelte';
  import Native from './Native.svelte';
  import DevOffer from './DevOffer.svelte';
    const slides = [
    {
        header:"DELIVERING STELLAR MOBILE APP DEVELOPMENT SERVICES",
        text:`We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices. `
    },
]

const list =[
    'Custom iOS and Android apps development',
    'Native and cross-platform solutions',
    'Second platform app development',
    'UI/UX design',
    'Consulting and prototyping',
    'Automated QA and testing',
    'Power management, notification and geofencing',
    'Embedded Android & AOSP customizations',
    'Maintenance and post-warranty support'
]
</script>

<div class="min-h-screen bg-gray-900">
    <div class="w-full h-[100vh] backdrop-blur-[5px] px-5 bg-[#0000008e]">
         <Slider {slides} />
    </div>
</div>

<div class="text-center w-full min-h-[50vh] items-center flex flex-col justify-center my-5 p-5">
    <div>
        <h2 class="text-3xl font-bold mb-5 text-gray-700">OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES</h2>
       <p>
        We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
       </p>
    </div>
</div>
<div class="flex md:flex-row flex-col justify-between items-start w-[90%] md:w-[80%] m-auto">
  
    <div class="flex flex-col gap-5 mt-3">
        {#each list as li}
            <div class="px-4 rounded-full  text-gray-600 hover:text-gray-950 hover:scale-[1.2] transition-transform">{li}</div>
        {/each}
    </div>

    <img alt='' src="https://www.9tp-tech.com/app/assets/cbef7669/img/mobile-app/Group286.png" class="w-full md:w-[40%] hover:scale-[1.2] transition-transform" />
</div>


<div class="my-5  text-white bg-gradient-to-r  from-blue-800 to-blue-500 p-10">
    <div class=" md:w-[70%] m-auto text-center mb-5">
        <h2 class="text-3xl font-bold mb-5 0">OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES</h2>
       <p class="text-white">
        We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
       </p>
    </div>
<div class="my-10 h-2 w-[50%] bg-white m-auto rounded-full"/>
    <Ideas></Ideas>
  
</div>
<Native/>
<DevOffer/>