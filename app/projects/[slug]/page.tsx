// app/projects/[slug]/page.tsx
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, User, CheckCircle } from 'lucide-react';

// Real project data based on company information
const projectsDatabase = {
  "dhanushadham-solar": {
    title: "6MW Solar Project with 5.625MWh BESS",
    category: "Solar Energy",
    completionDate: "2026 (Survey License obtained and Study ongoing)",
    client: "Nepal Electricity Authority (NEA)",
    location: "Dhanushadham Municipality, Ward No 4",
    capacity: "6MW Solar + 5.625MWh BESS",
    overview: `
      Our flagship project featuring an integrated 6MW solar PV system with 5.625MWh battery energy storage system, 
      representing the future of reliable renewable energy in Nepal. This project is currently in the survey license 
      application phase and will provide clean, reliable electricity to over 5,000+ households while demonstrating 
      the viability of large-scale solar-plus-storage solutions in Nepal.
    `,
    challenges: [
      'Navigating complex regulatory framework for solar-plus-storage projects',
      'Ensuring grid stability with large-scale battery integration',
      'Managing project financing for innovative energy storage technology',
      'Coordinating with local communities and stakeholders',
    ],
    solutions: [
      'Comprehensive regulatory compliance and stakeholder engagement',
      'Advanced grid-tie inverters with smart energy management systems',
      'Strategic partnership development for project financing',
      'Community consultation and benefit-sharing programs',
      'Detailed technical and financial feasibility studies',
    ],
    results: [
      'First major solar-plus-storage project in the region',
      'Expected to power over 5,000+ households with reliable clean energy',
      'Significant reduction in carbon emissions and grid dependency',
      'Demonstration project for future renewable energy development',
      'Job creation and local economic development opportunities',
    ],
    testimonial: {
      quote: 'This project represents a significant step forward in Nepal\'s renewable energy journey, combining solar generation with reliable storage to provide 24/7 clean power.',
      author: 'Project Development Team',
      position: 'Janaki Energy Pvt. Ltd.',
    },
    images: ['/2.jpeg', '/1.jpg', '/3.jpg'],
    relatedProjects: [
      { slug: 'tariff-study', title: 'Solar PV with BESS Tariff Study', category: 'Policy Research' },
      // { slug: 'nepal-pulp-paper-solar', title: 'Nepal Pulp and Paper Industry Solar', category: 'Industrial Solar' },
      // { slug: 'everest-fiber-cement-bess', title: 'Everest Fiber Cement BESS', category: 'Solar + Storage' },
    ],
  },
  "tariff-study": {
    title: "Solar PV with BESS Tariff Study",
    category: "Policy Research",
    completionDate: "2025",
    client: "Electricity Regulatory Commission (via Sara Solutions Pvt. Ltd.)",
    location: "Nepal",
    capacity: "Policy Framework Development",
    overview: `
      Groundbreaking policy research conducted in collaboration with Sara Solutions Pvt. Ltd., analyzing optimal 
      pricing structures for solar energy systems with battery storage integration. This comprehensive study provides 
      the regulatory framework needed to incentivize solar-plus-storage deployment across Nepal, supporting the 
      country's renewable energy transition goals.
    `,
    challenges: [
      'Lack of existing regulatory precedent for solar-plus-storage tariffs',
      'Balancing investor returns with affordable electricity prices',
      'Accounting for complex battery storage economics',
      'Ensuring grid stability and reliability considerations',
    ],
    solutions: [
      'Comprehensive technical and economic analysis of storage technologies',
      'International best practice review and adaptation to Nepal context',
      'Stakeholder consultation with utilities, developers, and regulators',
      'Development of tiered tariff structure based on grid services provided',
      'Creation of implementation roadmap and monitoring framework',
    ],
    results: [
      'Established first-of-its-kind tariff framework for solar-plus-storage in Nepal',
      'Enabled regulatory pathway for innovative energy storage projects',
      'Provided foundation for national energy storage policy development',
      'Created investor confidence in renewable energy storage markets',
      'Positioned Nepal as regional leader in progressive energy policies',
    ],
    testimonial: {
      quote: 'This tariff study has been instrumental in creating a clear regulatory pathway for solar-plus-storage projects, providing the certainty investors need to commit to these innovative technologies.',
      author: 'Asika Kadariya',
      position: 'Research Officer - IGPA',
    },
    images: ['/2.jpeg', '/1.jpg', '/3.jpg'],
    relatedProjects: [
      { slug: 'dhanushadham-solar', title: '8MW Solar with BESS', category: 'Solar Energy' },
      // { slug: 'everest-fiber-cement-bess', title: 'Everest Fiber Cement BESS', category: 'Solar + Storage' },
      // { slug: 'ambe-cement-solar', title: 'Ambe Cement Solar', category: 'Industrial Solar' },
    ],
  },
  "nepal-pulp-paper-solar": {
    title: "Nepal Pulp and Paper Industry - 500kWp Solar",
    category: "Industrial Solar",
    completionDate: "2025 (Negotiation for bank financing - Ongoing)",
    client: "Nepal Pulp and Paper Industries Pvt. Ltd.",
    location: "Nepal",
    capacity: "504 kWp (440 kWac) Solar",
    overview: `
     Our project features an integrated 504 kWp rooftop solar system, designed to provide reliable, continuous renewable energy to the industry. The system is expected to generate approx 623.6 MWh energy annually, supporting long-term energy sustainability while reducing dependence on grid electricity and diesel generator. 
    `,
    challenges: [
    'Managing project financing for innovative solar technology',
    'Navigating local regulations, permitting, and grid interconnection requirements',
    'Optimizing system capacity while ensuring rooftop safety and structural integrity',
    'Ensuring seamless integration without disrupting ongoing industrial operations',
    ],
    solutions: [
     'Conducted detailed structural analysis to safely maximize solar generation capacity',
    'Integrated the solar system with existing electrical infrastructure without operational disruption',
    'Designed the system to align solar generation with the industrial load profile',
    'Implemented preventive maintenance planning and real-time performance monitoring',
    ],
    results: [
       'Expected annual energy generation of approximately 623.6 MWh',
    'Significant reduction in diesel generator usage',
    'Substantial decrease in carbon emissions and grid dependency',
    'Overall reduction in long-term energy costs',
    ],
    testimonial: {
      quote: 'The solar installation has exceeded our expectations in terms of performance and cost savings. It\'s a key component of our sustainability strategy and has significantly reduced our operational costs.',
      author: 'Operations Management',
      position: 'Nepal Pulp and Paper Industries Pvt. Ltd.',
    },
    images: ['/2.jpeg', '/1.jpg', '/3.jpg'],
    relatedProjects: [
      // { slug: 'everest-fiber-cement-bess', title: 'Everest Fiber Cement BESS', category: 'Solar + Storage' },
      // { slug: 'ambe-cement-solar', title: 'Ambe Cement Solar', category: 'Industrial Solar' },
      { slug: 'dhanushadham-solar', title: '8MW Solar with BESS', category: 'Solar Energy' },
    ],
  },
  "daunne-agro-farm-solar": {
  title: "Daunne Agro Farm -576.6kWp Solar",
  category: "Industrial Solar",
  completionDate: "2026(PPA Signed, financial negotiation ongoing)",
  client: "Daunne Agro Farm Pvt. Ltd",
  location: "Nawalparasi (Ba.Su.Pa), Nepal",
  capacity: "576.6kWp (500 kWac) Solar",
  overview: `
Our project features an integrated 576.6kWp/500 kWac ground-mounted solar system, designed to provide continuous and reliable energy to the industry. The system is to be installed across four different sites within the facility: Site A with a capacity of 352.8 kWp (300 kW) located at the hen shed area, Site B with a capacity of 56 kWp (50 kW) at the brooding plant area, Site C with a capacity of 44.8 kWp (40 kW) at the tray and packaging area, and Site D with a capacity of 123 kWp (110 kW) at the manure plant area. The whole system is expected to generate approx 782.189 MWh/year, significantly reducing reliance on grid electricity and diesel generators, promoting long-term energy sustainability and operational efficiency.
`,
  challenges: [
    "Designing for different site layouts and shading conditions",
    "Ensuring installation without disrupting operations",
    "Integrating with existing grid and diesel systems",
    "Handling terrain and river-side site constraints"
  ],
  solutions: [
  ],
  results: [
    "Generates 782.189 MWh of energy annually, reducing carbon footprint",
    "Reducing grid electricity and diesel cost",
    "Provides reliable and continuous power",
    "Overall reduction in long-term energy costs"
  ],
  testimonial: {
    quote: "",
    author: "",
    position: ""
  },
  images: ["/daunne-agro-1.jpg", "/daunne-agro-2.jpg", "/daunne-agro-3.jpg"],
  relatedProjects: [
    { slug: "nepal-pulp-paper-solar", title: "Nepal Pulp and Paper Industry - 500kWp Solar", category: "Industrial Solar" }
  ]
}
};

const getProjectData = (slug: string) => {
  return projectsDatabase[slug as keyof typeof projectsDatabase] || {
    title: 'Project Not Found',
    category: 'Unknown',
    completionDate: 'N/A',
    client: 'N/A',
    location: 'N/A',
    capacity: 'N/A',
    overview: 'Project details not available.',
    challenges: [],
    solutions: [],
    results: [],
    testimonial: { quote: '', author: '', position: '' },
    images: ['/3.jpg'],
    relatedProjects: [],
  };
};

// Define the types for params
type ParamsType = Promise<{ slug: string }>;

// Fix for Next.js 15.3.1 - Params need to be a Promise type in NextJS 15
export default async function ProjectDetailPage(props: { params: ParamsType }) {
  // Extract slug from params with await
  const { slug } = await props.params;
  
  // In a real application, you would use the slug to fetch project data
  const project = getProjectData(slug);

  return (
    <main className="pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/projects" className="text-gray-500 hover:text-blue-600">Projects</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-600">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 py-16 px-4 md:px-8 lg:px-16 relative">
        {/* Overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-green-600 inline-block text-sm font-medium py-1 px-3 rounded mb-4 text-white">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{project.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-green-400" />
              <div>
                <div className="text-sm text-green-400">Completion Date</div>
                <div className="text-white">{project.completionDate}</div>
              </div>
            </div>
            <div className="flex items-center">
              <User className="h-6 w-6 mr-3 text-green-400" />
              <div>
                <div className="text-sm text-green-400">Client</div>
                <div className="text-white">{project.client}</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-green-400" />
              <div>
                <div className="text-sm text-green-400">Location</div>
                <div className="text-white">{project.location}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Images */}
              <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 h-80 bg-gray-200 rounded-lg relative">
                  {/* Main image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Main Project Image
                  </div>
                </div>
                <div className="h-48 bg-gray-200 rounded-lg relative">
                  {/* Additional image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Additional Image 1
                  </div>
                </div>
                <div className="h-48 bg-gray-200 rounded-lg relative">
                  {/* Additional image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Additional Image 2
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-gray-700">{project.overview}</p>
              </div>

              {/* Challenges and Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Challenges</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Solution</h2>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 italic mb-4">"{project.testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-800">{project.testimonial.author}</div>
                  <div className="text-gray-600">{project.testimonial.position}</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Details Card */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-600">Services Provided:</div>
                    <div className="text-gray-800">
                      {project.category.includes('Policy') || project.category.includes('Research') 
                        ? 'Research, Analysis, Policy Development, Stakeholder Consultation' 
                        : 'Design, Engineering, Supply, Installation, Commissioning, Monitoring'}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Project Scale:</div>
                    <div className="text-gray-800">{project.capacity}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Technology/Approach:</div>
                    <div className="text-gray-800">
                      {project.category.includes('Policy') || project.category.includes('Research')
                        ? 'Comprehensive technical and economic analysis, international best practices review'
                        : project.capacity.includes('BESS') 
                          ? 'Solar PV with Battery Energy Storage System, Grid-tie Inverters, Smart Energy Management'
                          : 'High-efficiency Solar PV Modules, String Inverters, Monitoring Systems'}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Project Status:</div>
                    <div className="text-gray-800">{project.completionDate}</div>
                  </div>
                </div>
              </div>

              {/* Related Projects */}
              {/* <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {project.relatedProjects.map((relatedProject, index) => (
                    <Link
                      key={index}
                      href={`/projects/${relatedProject.slug}`}
                      className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-gray-800 mb-1">{relatedProject.title}</h4>
                      <div className="text-sm text-green-600">{relatedProject.category}</div>
                    </Link>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/projects" 
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Projects
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Interested in a Similar Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you implement sustainable, 
            efficient energy solutions tailored to your specific needs.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}