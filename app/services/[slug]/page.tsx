// app/services/[slug]/page.tsx
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle, 
  Users, 
  Clock, 
  Award, 
  ArrowRight
} from 'lucide-react';
import { getServiceData } from './serviceData';

// Define the types for params
type ParamsType = Promise<{ slug: string }>;

// Fix for Next.js 15.3.1 - Params need to be a Promise type in NextJS 15
export default async function ServiceDetailPage(props: { params: ParamsType }) {
  // Extract slug from params with await
  const { slug } = await props.params;
  
  // Get service data from our data file
  const service = getServiceData(slug);

  return (
    <main className="pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/services" className="text-gray-500 hover:text-blue-600">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-600">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Service Header */}
      <section className={`${service.headerBg} py-16 px-4 md:px-8 lg:px-16 relative`}>
        {/* Overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block text-sm font-medium py-1 px-3 rounded mb-4 text-white" style={{ backgroundColor: service.accentColor }}>
            Energy Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{service.title}</h1>
          <p className="text-xl max-w-3xl text-white">{service.description}</p>
          
          {/* Service Stats */}
          {service.stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {service.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white" style={{ color: service.accentColor }}>
                    {stat.value}
                  </div>
                  <div className="mt-2 text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <p className="text-gray-700">{service.overview}</p>
              </div>

              {/* Key Features & Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {service.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Our Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Process</h2>
                <div className="border-l-2 border-gray-200 pl-3 space-y-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-9 bg-white border-2 border-gray-200 rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-gray-800 font-bold ">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 mx-4">{step.title}</h3>
                      <p className="text-gray-700 px-4">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {/* {service.testimonial.quote && (
                <div className="bg-gray-50 p-8 rounded-lg border-l-4" style={{ borderLeftColor: service.iconColor }}>
                  <p className="text-gray-700 italic mb-4">"{service.testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-gray-800">{service.testimonial.author}</div>
                    <div className="text-gray-600">{service.testimonial.position}</div>
                  </div>
                </div>
              )} */}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Service Request Card */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Interested in this Service?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how we can help with your specific needs and 
                  provide a customized solution for your project.
                </p>
                <Link 
                  href="/contact" 
                  className="w-full block text-center py-3 px-4 rounded-md font-medium text-white transition-colors"
                  style={{ backgroundColor: service.iconColor }}
                >
                  Request a Consultation
                </Link>
              </div>

              {/* Related Projects */}
              {/* {service.projects.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    {service.projects.map((project, index) => (
                      <Link
                        key={index}
                        href={`/projects/${project.slug}`}
                        className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-bold text-gray-800 mb-1">{project.title}</h4>
                        <div className="text-sm text-green-600">{project.category}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/services" 
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you implement sustainable, 
            efficient energy solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-block"
            >
              Contact Us
            </Link>
            <Link 
              href="/projects" 
              className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-block"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}