<script>
  import Slider from '../../components/slider.svelte';
  import FirstSection from './FirstSection.svelte';
  const slides = [
    {
      header: 'SOFTWARE SOLUTIONS FOR BIG INDUSTRIES',
      text: `KongDev Company Limited brings the best from both software worlds to your industry. From one side, you get our 10-year expertise in building wide-ranging custom software. On the other, we have made the most of Mobile Roadie — the leading app platform favored by the most celebrated entertainers, sports teams, and venues that we acquired in 2015. With the upgraded
         platform and our expertise, we can help you build impactful software solutions for your industry faster than ever before. `,
    },
  ];
  const links = [
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/kjk.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/ey.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/eurostar.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/guinness.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/jaguar.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/walt-disney.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/guest-services.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/cirrus.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/wynn.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/melco.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/euro-accident.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/bombardier.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/harley.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/gulls.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/nestle.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/giant.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/land-rover.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/hoosbaa.svg',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/griffins.svg	',
    'https://www.KongDev.com/app/assets/cbef7669/img/clients-logo/af-gruppen.svg',
  ];
</script>

<div class="min-h-screen bg-gray-900">
  <div class="w-full h-[100vh] backdrop-blur-[5px] px-5 bg-[#0000008e]">
    <Slider {slides} />
  </div>
</div>

<FirstSection />
<section class="w-full p-5 md:w-[70%] m-auto my-10">
  <h1 class="font-bold text-5xl my-2 caption-bottom text-center">OUR CLIENTS</h1>
  <p class="text-center">
    KongDev's approach to delivering software solutions across industries has helped Fortune 500 companies and
    established enterprises build solid software pillars for their operations.
  </p>
</section>
<div class="w-full p-10 columns-3 gap-5 md:columns-5">
  {#each links as lnk}
    <img src={lnk} class=" w-[100px] h-[100px] object-contain m-auto" alt="" />
  {/each}
</div>
