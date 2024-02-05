<script>
  import Worked_For from './Worked_For.svelte';

  import Industry from "../components/Industry.svelte";
  import Service from "../components/Service.svelte";
  import Tech from "../components/Tech.svelte";
  import Slider from "../components/slider.svelte";
  const ongoing = [
    {
      text: "We welcome Mr. Mick An Dung, the head Project Operation for Vintage Tech Corporation. He will lead the team to run security protocols and Installations.",
      img: "/favicon.png",
    },
    {
      text: "We welcome Mr. Hangyeol Kwang-Su, a Senior tech consultant with Tidal corporation for a Technical Upgrade and Installation project in Slovakia. We are ready to work with your team.",
      img: "/favicon.png",
    },
    {
      text: "Meet the newly promoted Director. welcome Mr. Trịnh Phước Mạnh to the Board Of Directors and highest role at 9TP-Tech Company Limited, Mr. Trịnh Phước Mạnh will also be spearheading the first project of the year, we will keep you updated.",
      img: "/favicon.png",
    },
  ];
  const links = [
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/kjk.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/ey.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/eurostar.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/guinness.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/jaguar.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/walt-disney.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/guest-services.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/cirrus.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/wynn.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/melco.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/euro-accident.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/bombardier.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/harley.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/gulls.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/nestle.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/giant.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/land-rover.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/hoosbaa.svg",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/griffins.svg	",
    "https://www.9tp-tech.com/app/assets/cbef7669/img/clients-logo/af-gruppen.svg",
  ];


  const images = [
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/inc-5000.png',
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/itfirms.png',
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/Design-Rush-Accredited-Badge3.png',
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/stevies.png',
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/clutch-blockchain.png',
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/ny_nyc_software-development_2022.png',
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/techies.png',
    'https://www.9tp-tech.com/app/assets/cbef7669/img/ratings-logos/goodfirms.png'
  ]
  let section = "serv";

  function sectionToShow(sec) {
    return (section = sec);
  }

const slides = [
  {
    header:"enterprise software development",
    text:"leverage our years of experience to create a solid software funding for your business"
  },
  {
    header:"Mobile app development",
    text:"Delivering on-demand mobile app experiences for startups and enterprise clients by leveraging the latest technologies. "
  },
  {
    header:"Dedicated and experienced development team",
    text:"Hire top tech talent and quickly scale your delivery capacity. Our engineers have the necessary niche skills, deep expertise, and are highly loyal. "
  },
  {
    header:"Smart Healthcare solutions",
    text:"Leverage the power of digital solutions to provide more effective treatments and care. "
  }
]

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section
  class="  w-full m-auto object-contain [background-size:cover]"
  style="background-image: url(/bg1.jpg);"
>
  <div class="w-full h-[100vh] backdrop-blur-[5px] px-5 bg-[#0000008e]">
    <Slider {slides}/>
  </div>
</section>

<section class="w-full p-5 md:w-[70%] m-auto my-10">
  <h1 class="font-bold text-5xl my-2 caption-bottom text-center">
    Who Are We?
  </h1>
  <p class="text-center">
    We are a digital transformation consultancy and software development company
    that provides cutting edge engineering solutions, helping Fortune 500
    companies and enterprise clients untangle complex issues that always emerge
    during their digital evolution journey. The company was founded in 2015 by 5
    vision-oriented individuals and have been a reliable software engineering
    partner for world-class brands.
  </p>
</section>

<div class="w-full  md:w-4/6 m-auto">
  {#each ongoing as ong}
    <div
      class="w-full p-5 flex flex-col md:flex-row-reverse gap-6 justify-between items-start"
    >
      <div class="w-fit">
        <h2 class="font-bold text-2xl my-2 caption-bottom">
          NEWS ON OUR ONGOING PROJECTS
        </h2>
        <p class="">{ong.text}</p>
      </div>
      <img
        src={ong.img}
        class=" w-full md:w-[200px] md: h-[250px] rounded-md object-contain bg-slate-400 m-auto my-2"
        alt=""
      />
    </div>
  {/each}
</div>

<Worked_For></Worked_For>

<div class="my-2 w-full flex justify-center">
  <a
    href="#contact"
    class="px-6 py-2 border-2 border-blue-600 text-blue-600 text-xl"
    >Read More</a
  >
</div>

<section class="w-full p-5 md:w-[90%] m-auto my-10">
  <h1 class="font-bold text-5xl my-2 caption-bottom text-center">
    What We Offer
  </h1>
  <div class="flex  md:flex-row justify-center mt-5">
    <button
      on:click={() => sectionToShow("serv")}
      class="uppercase hover:text-blue-700 text-gray-800 cursor-pointer p-5 text-center text-xl font-bold border-b-2 border-gray-700 hover:border-blue-600 w-1/2 transition"
      >services</button
    >
    <button
      on:click={() => sectionToShow("indu")}
      class="uppercase hover:text-blue-700 text-gray-800 cursor-pointer p-5 text-center text-xl font-bold border-b-2 border-gray-700 hover:border-blue-600 w-1/2 transition"
      >industries</button
    >
  </div>
  <div>
    {#if section === "tech"}
      <Tech />
    {:else if section === "serv"}
      <Service />
    {:else}
      <Industry />
    {/if}
  </div>
  <div />
</section>


<section class="w-[80%] m-auto">
  <h1 class={'text-center'}>AWARDS & RECOGNITION</h1>
<div class="flex flex-wrap w-full justify-between">
  {#each images as imgs }
  <img src={imgs} alt='' class="w-[100px] h-[100px]  object-contain my-10 hover:scale-150 grayscale hover:grayscale-0 transition duration-300" />
{/each}
</div>
</section>