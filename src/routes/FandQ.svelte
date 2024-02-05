<script lang="ts">
	import { createDisclosure } from 'svelte-headlessui'
    import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
	import Icon from "svelte-icons-pack";
	const refund = createDisclosure({ label: 'Refund Policy', expanded: false })
	const support = createDisclosure({ label: 'Technical Support', expanded: false })
    const benefits = createDisclosure({ label: 'benefits', expanded: false })
	const software = createDisclosure({ label: 'software development', expanded: false })
</script>

<div class="text-center">
    <h2 class="text-3xl font-bold">F.A.Q</h2>
    <h4 class="text-2xl font-thin">Do you have additional questions?</h4>
</div>
<div class="flex w-full flex-col items-center justify-center">
	<div class="w-full px-4 pt-16 my-10">
		<div class="mx-auto w-full md:w-[60%] rounded-2xl bg-white p-2">
			<div>
				<button
					use:refund.button
					class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
				>
					<span>What is the ISO Certification? And does KongDev Company Limited ISO certified??</span>
                    <Icon src={RiSystemArrowDownSLine} size={'24'} class="h-5 w-5 text-purple-500 {$refund.expanded ? 'rotate-180 transform' : ''}" />
					
				</button>
				{#if $refund.expanded}
					<div use:refund.panel class="px-4 pt-4 pb-2 text-sm text-gray-500">
						<p>ISO 9001:2015 is the most widely known as the international standard that specifies requirements for a quality management system (QMS). Organizations use the standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements.</p>
                        <p>KongDev Company Limited team has passed an in-depth set of assessments to achieve the ISO 9001:2015 certification for our quality management systems. Our clients partner with an organization that strives to continuously improve service quality and inevitably look for ways to make processes more efficient, improve communications, and better manage future risks.</p>
					</div>
				{/if}
			</div>
			<div class="mt-2">
				<button
					use:support.button
					class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
				>
					<span>How to choose a software development services company?</span>
					<Icon src={RiSystemArrowDownSLine}  size={24}  class="h-5 w-5 text-purple-500 {$support.expanded ? 'rotate-180 transform' : ''}" />
				</button>
				{#if $support.expanded}
					<div use:support.panel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <p>Choosing the right software development services company for your project or idea is like choosing a crew to go sailing. Before making any decisions, triple check the contractor with whom you will work with over the next few months, or sometimes even years, and more importantly, may decide on your future success.</p>
                        <p>Contact the past clients of the company as such corroboration is key if you want to have a reliable relationship with the software development services firm. Now that your shortlist becomes shorter, proceed to the next step in your verification process.</p>
                    </div>
				{/if}
			</div>
            <div class="mt-2">
				<button
					use:benefits.button
					class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
				>
					<span>What are the biggest benefits of outsourcing a software development services firm?</span>
					<Icon src={RiSystemArrowDownSLine}  size={24}  class="h-5 w-5 text-purple-500 {$support.expanded ? 'rotate-180 transform' : ''}" />
				</button>
				{#if $benefits.expanded}
					<div use:benefits.panel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <p>Outsourcing software development is an alternative that can be a great part of corporate strategies for various businesses. This working model has been increasingly used by companies that adopt planning directed to their core business, but that seek more agility, quality, and specialization in all processes.</p>
                        <p>Besides the economies of scale, time, and cost control, there are more software development services benefits you should pay attention to. Another benefit brought by outsourcing software development is the ability to build partnerships with agencies and not just contract services. Additionally, you can easily optimize time for managers and professionals and expand your business in a structured way.</p>
                    </div>
				{/if}
			</div>
            <div class="mt-2">
				<button
					use:software.button
					class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
				>
					<span>How to choose a software development services company?</span>
					<Icon src={RiSystemArrowDownSLine}  size={24}  class="h-5 w-5 text-purple-500 {$support.expanded ? 'rotate-180 transform' : ''}" />
				</button>
				{#if $software.expanded}
					<div use:software.panel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <p>Saving costs and improving the quality of work can be done by coding best practices into the shared software platform, which is easy to discover and to adopt by the Agile squads. Moreover, using planning techniques prevents teams from getting lost due to unclear requirements and wrong assumptions, focusing on deliverables in the context of impacts they are supposed to achieve. It helps to reduce waste by preventing over-engineered solutions.</p>
                        <p>Agile project management is necessary due to the complexity of various software projects. Such complex projects are not manageable in the traditional Waterfall approach. Agile principles focus on improving its teams, processes, and product.</p>
                    </div>
				{/if}
			</div>
           

		</div>
	</div>
</div>
