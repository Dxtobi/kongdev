<script>
  import WorkedFor from "../Worked_For.svelte";

</script>



<div class=" w-full min-h-screen  flex flex-col  my-5 p-5 gap-4">
    <section  class="flex flex-col md:flex-row min-h-screen gap-4 md:justify-between items-center w-full">
        <div class="w-full md:w-1/2 p-4">
            <h2 class="text-3xl">About <span class='text-gray-300 text-3xl'>Kong</span>
                <span class='text-blue-600 text-3xl'>Devs</span>
            </h2>
            <h2 class="text-2xl"> COMPANY LIMITED</h2><br/>
            <div class="">
                <p>We are a digital transformation consultancy and engineering company that delivers cutting edge solutions for global organisations and technology startups. Since 2015 we have been helping companies and established brands reimagine their business through digitalisation.</p>
            </div>
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-start items-center h-[260px] overflow-hidden">
            <div class="image-locations flex flex-col gap-3 w-full md:w-[80%] m-auto">
                <div class=" text-5xl " style="background-image: url(/london.jpg);"> L o n d o n <span class=" text-5xl">.</span></div>
                <div class=" text-5xl" style="background-image: url(/miami.jpg);"> M i a m i <span class=" text-5xl">.</span></div>
                <div class=" text-5xl" style="background-image: url(/newyork.jpg);">New York, NY <span class=" text-5xl">.</span></div>
                <div class=" text-5xl" style="background-image: url(/osilo.jpg);">O s l o <span class=" text-5xl">.</span></div>
                <div class=" text-5xl" style="background-image: url(/lvivi.jpg);">Lviv, Chernivtsi <span class=" text-5xl">.</span></div>
                <div class=" text-5xl" style="background-image: url(/sofia.jpg);"> S o f i a <span class=" text-5xl">.</span></div>
                <div class=" text-5xl" style="background-image: url(/krokow.jpg);">  K r a k o w <span class=" text-5xl">.</span></div>
            </div>
        </div>
    </section>
  <div class="w-1/2 rounded-full h-2 bg-blue-600 m-auto mb-4"></div>
    <section class="">
        <div class=" text-center">
            <h3 class="font-bold text-3xl ">MISSION & VISION</h3><br/>

        <p class="p-0"> Our mission is to help enterprises accelerate adoption of new technologies,
            untangle complex issues that always emerge during digital evolution, 
            and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative 
            enterprise-class solution, the company leads the process 
            from ideation and concept to delivery, and provides ongoing support through its IS360 framework.</p>
        </div>
    </section>
    <div class="w-1/3 rounded-full h-2 bg-blue-600 m-auto my-8"></div>
    <section class="">
        <div class=" text-center">
            <h3 class="font-bold text-3xl ">OUR CLIENTS</h3><br/>

        <p class="p-0"> For over 7 years, 9TP-Tech has been helping Fortune 500 companies and established brands build solid software foundations for their businesses.

        </p>
        </div>
    </section>

    <div class="text-center flex flex-col items-center">
        <p>At <span class='text-gray-300'>Kong</span>
                <span class='text-blue-600 '>Devs</span>
         Company Limited we help business build an intelligently designed digital future. Tell us about your idea,
             and we’ll offer the most fitting technological solution.</p>
             <div class="my-10"><a href="#contact" class="px-4 py-2 border-2 border-blue-600 text-blue-600 my-10 text-xl">Contact Now</a></div>
    </div>
</div>

<WorkedFor></WorkedFor>

<style>
    .image-locations> div{
        background-size: cover;
        background-position: center;
        color: white;
        text-align: center;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:999px;
        font-weight: 600;
    }
    

</style>