<script>
  import Worked_For from './../Worked_For.svelte';
  import Slider from '../../components/slider.svelte';
  import FirstSection from './FirstSection.svelte';
  const slides = [
    {
      header: 'SOFTWARE SOLUTIONS FOR BIG INDUSTRIES',
      text: `KongDev Company Limited brings the best from both software worlds to your industry. From one side, you get our 10-year expertise in building wide-ranging custom software. On the other, we have made the most of Mobile Roadie — the leading app platform favored by the most celebrated entertainers, sports teams, and venues that we acquired in 2015. With the upgraded
         platform and our expertise, we can help you build impactful software solutions for your industry faster than ever before. `,
    },
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
<Worked_For />
