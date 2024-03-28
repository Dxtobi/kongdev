<script>
  import FandQ from './FandQ.svelte';

  import Contact from '../components/contact.svelte';
  import { createDisclosure } from 'svelte-headlessui';
  const services = [
    'Dedicated Teams',
    'Product Strategy',
    'Product Engineering',
    'Architecture',
    'UX / UI Design',
    'App Developers',
    'QA & Testing',
    'Cyber Security',
    'Web Development',
    'Custom Software Development',
    'Outsourcing Software Development Services',
  ];

  const TECHNOLOGIES = ['Internet of Things', 'Blockchain', 'Cloud Computing'];

  const PLATFORMS = ['iOS', 'Android', 'Windows', 'Hybrid Platform', 'Azure'];

  const COMPANY = ['About', 'Team', 'Careers', 'Clients'];
</script>

<footer class="bg-blue-500 text-white min-h-screen py-10 w-full">
  <FandQ></FandQ>
  <Contact />
  <div class="  my-8 p-4 grid md:grid-cols-4">
    <div>
      <h2 class=" uppercase text-3xl font-bold my-3">Services</h2>
      <ul>
        {#each services as sr}
          <li><a href="/services">{sr}</a></li>
        {/each}
      </ul>
    </div>
    <div>
      <h2 class=" uppercase text-3xl font-bold my-3">TECHNOLOGIES</h2>
      <ul>
        {#each TECHNOLOGIES as sr}
          <li><a href="/tech">{sr}</a></li>
        {/each}
      </ul>
    </div>
    <div>
      <h2 class=" uppercase text-3xl font-bold my-3">PLATFORMS</h2>
      <ul>
        {#each PLATFORMS as sr}
          <li><a href="/mobile-app-development">{sr}</a></li>
        {/each}
      </ul>
    </div>
    <div>
      <h2 class=" uppercase text-3xl font-bold my-3">COMPANY</h2>
      <ul>
        {#each COMPANY as sr}
          <li><a href="/companies">{sr}</a></li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="flex p-5 justify-center" id="privacy">
    <div>
      © 2022 KongDev Company Limited US | <span class="text-gray-800"><a href="#privacy">Privacy Policy</a></span>
    </div>
    <div></div>
  </div>
</footer>
