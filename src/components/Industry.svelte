
<script>
    import { slide } from 'svelte/transition';
    import IoConstruct from "svelte-icons-pack/io/IoConstruct";
    import FaBrandsCreativeCommonsRemix from "svelte-icons-pack/fa/FaBrandsCreativeCommonsRemix";
    import RiFinanceBankCardFill from "svelte-icons-pack/ri/RiFinanceBankCardFill";
    import SiWebmoney from "svelte-icons-pack/si/SiWebmoney";
    import SiYourtraveldottv from "svelte-icons-pack/si/SiYourtraveldottv";
    import RiHealthHeartPulseFill from "svelte-icons-pack/ri/RiHealthHeartPulseFill";
    import Icon from "svelte-icons-pack";
    const services = [
      {
          text : `Map and tour dates, in-app chat and shop, streaming, subscription, and more..`,
          header: 'Construction',
          icon:IoConstruct
      },
      {
          text : `Claim management, alerts, AI, cloud and data solutions, SOS video, and more.`,
          header: 'Insurance',
          icon:SiWebmoney
      },
      {
          text : `Internet of Things solutions, latest tech, all the essential hotel app features.`,
          header: 'Travel & Hospitality',
          icon:SiYourtraveldottv
      },
    
      {
          text : `Patient-friendly software that empowers healthcare industry workers. `,
          header: 'Healthcare',
          icon:RiHealthHeartPulseFill
      },
      {
          text : `Engaging and exciting software solutions for modern retail.`,
          header: 'Retail & ECommerce',
          icon:FaBrandsCreativeCommonsRemix
      },
      {
          text : `Meet the demands of modern customers in speed and security with scalable financial technology.`,
          header: 'FinTech',
          icon:RiFinanceBankCardFill
      },
    ]
  </script>
  <div class="grid grid-cols-1 md:grid-cols-3 mt-5" in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
  {#each services as sev}
  
  <div class="flex gap-2 items-start mb-3">
      <Icon src={sev.icon} size={50} color='#2563eb'/>
      <div class="w-[80%]">
          <h2 class="font-bold text-xl">{sev.header} </h2>
          <p>{sev.text}</p>
      </div>
  </div>
  {/each}
  </div>