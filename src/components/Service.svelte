<script>
  import { slide } from 'svelte/transition';
  import FaSolidLaptopCode from "svelte-icons-pack/fa/FaSolidLaptopCode";
  import IoWatchSharp from "svelte-icons-pack/io/IoWatchSharp";
  import HiOutlineCubeTransparent from "svelte-icons-pack/hi/HiOutlineCubeTransparent";
  import AiFillDatabase from "svelte-icons-pack/ai/AiFillDatabase";
  import BsIntersect from "svelte-icons-pack/bs/BsIntersect";
  import Icon from "svelte-icons-pack";
  const services = [
    {
        text : `Support your business infrastructure with scalable software that improves key facets of your enterprise. Get access to our industry-specific knowledge to design, build, and scale your new enterprise software solution.`,
        header: 'Custom Enterprise Software Development',
        icon:FaSolidLaptopCode
    },
    {
        text : `Our end-to-end enterprise mobility solutions allow organizations to safely and efficiently manage the extensive use of mobile devices that can support a large number of users in their business environment.`,
        header: 'Enterprise Mobility Services',
        icon:IoWatchSharp
    },
    {
        text : `9TP-Tech Company Limited is your reliable digital transformation partner. Leverage our expertise in using digital technologies to create new or modify existing business processes to meet changing market requirements.`,
        header: 'Digital Transformation Services',
        icon:HiOutlineCubeTransparent
    },
    {
        text : `Stay ahead with effective data management strategy, predictive analytics, and intelligent automation using our in-depth knowledge of emerging technologies such as Big Data, Data Science, Cognitive Computing, Blockchain and more.`,
        header: 'Data Management',
        icon:AiFillDatabase
    },
    {
        text : `Improve your software infrastructure with well-built microservices, reliable API, and data integration. Launch your business strategy with our comprehensive enterprise application development, or use our enterprise app integration solutions.`,
        header: 'Software Integration',
        icon:BsIntersect
    },
    {
        text : `Outdated software comes with much bigger risks and can be expensive to maintain. Hire our top minds to perform an in-depth feature and technical analysis of your legacy solution and improve it with the latest tools and technologies.`,
        header: 'Legacy Application Modernization',
        icon:FaSolidLaptopCode
    }
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
