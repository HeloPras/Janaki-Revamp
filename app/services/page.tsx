// app/services/page.tsx
import Link from 'next/link';
import { 
  Sun, 
  Wind, 
  Droplet, 
  Leaf, 
  BarChart2, 
  FileCheck, 
  Settings, 
  Activity,
  ArrowRight
} from 'lucide-react';
import VideoBackdrop from '@/components/VideoBackdrop';

export default function ServicesPage() {
  return (
    <main className="pt-20 pb-16">
      {/* Page Header */}
    

      <VideoBackdrop
        videoSrc="/videos/services.mp4"
      
        minHeight="400px"
      >
         
         <section className=" text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            We offer comprehensive, customized solutions across the energy spectrum, 
            from design and installation to consultancy and project management.
          </p>
        </div>
      </section>
      
      </VideoBackdrop>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Solar Energy Systems</h3>
              <p className="text-gray-600 mb-6">
                We design, develop, and install solar photovoltaic (PV) systems customized 
                to meet the specific requirements of each client. Our methodology prioritizes 
                maximizing efficiency, reducing costs, and incorporating the latest industry advancements.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Residential solar installations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Commercial solar systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Solar with battery storage solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Smart grid integration</span>
                </li>
              </ul>
              <Link 
                href="/services/solar" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-green-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                <Wind className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Renewable Energy Solutions</h3>
              <p className="text-gray-600 mb-6">
                We deliver comprehensive solutions for the development of renewable energy, 
                including solar, wind, thermal, and bioenergy systems. We aim to utilize 
                sustainable resources to provide clean, dependable, and affordable energy.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Wind energy systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Bioenergy solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Thermal energy systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Hybrid renewable solutions</span>
                </li>
              </ul>
              <Link 
                href="/services/renewable" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Droplet className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hydropower Development</h3>
              <p className="text-gray-600 mb-6">
                We assist in the development, operation, and maintenance of small, mini, 
                and large-scale hydropower projects. Our approach minimizes environmental 
                impacts while ensuring long-term benefits for communities.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Small-scale hydropower development</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Mini-hydro installations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Hydropower facility maintenance</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Environmental impact assessment</span>
                </li>
              </ul>
              <Link 
                href="/services/hydropower" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Service Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-green-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                <BarChart2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Feasibility Studies</h3>
              <p className="text-gray-600 mb-6">
                Our team performs thorough feasibility analyses for energy initiatives, 
                addressing technical, financial, environmental, and social factors. 
                We provide comprehensive assessments to support informed decision-making.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Technical feasibility analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Financial viability assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Environmental impact studies</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Social impact evaluations</span>
                </li>
              </ul>
              <Link 
                href="/services/feasibility" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Service Card 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Consultancy Services</h3>
              <p className="text-gray-600 mb-6">
                We provide expert consultancy services within the energy sector, 
                offering strategic guidance in technical, financial, and policy matters. 
                Our deep industry knowledge helps clients navigate complex challenges.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Technical energy consultancy</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Financial advisory services</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Energy policy guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Regulatory compliance support</span>
                </li>
              </ul>
              <Link 
                href="/services/consultancy" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Service Card 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-green-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Management</h3>
              <p className="text-gray-600 mb-6">
                We manage projects through their complete lifecycle—from the initial planning 
                and design phase to financing, construction, and commissioning. Our experienced 
                team ensures effective execution and high-quality results.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>End-to-end project management</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Planning and design coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Construction supervision</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Commissioning and handover</span>
                </li>
              </ul>
              <Link 
                href="/services/project-management" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Service Card 7 - Equipment Supply */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Equipment Supply & Logistics</h3>
              <p className="text-gray-600 mb-6">
                We import and supply high-quality solar, hydropower, and electrical equipment 
                from trusted global manufacturers. Our comprehensive logistics support ensures 
                timely delivery and proper installation.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Solar panel and inverter supply</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Hydropower equipment procurement</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Battery storage systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Electrical components and accessories</span>
                </li>
              </ul>
              <Link 
                href="/services/equipment-supply" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Service Card 8 - Investment & Partnerships */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-green-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Investment Facilitation</h3>
              <p className="text-gray-600 mb-6">
                We facilitate foreign investment and form strategic partnerships with government 
                entities for energy and infrastructure projects. Our joint venture approach 
                ensures sustainable project implementation.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Foreign investment facilitation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Joint venture formation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Government partnership coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Special Purpose Vehicle creation</span>
                </li>
              </ul>
              <Link 
                href="/services/investment" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Service Card 9 - C&I Solar Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Commercial & Industrial Solar</h3>
              <p className="text-gray-600 mb-6">
                Specialized solar solutions for commercial and industrial clients, including 
                integrated battery storage systems (BESS) for enhanced energy reliability 
                and cost optimization.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Large-scale commercial installations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Industrial solar systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Battery Energy Storage Systems (BESS)</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">•</div>
                  <span>Energy management systems</span>
                </li>
              </ul>
              <Link 
                href="/services/commercial-solar" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you implement sustainable, 
            efficient energy solutions tailored to your specific needs.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}