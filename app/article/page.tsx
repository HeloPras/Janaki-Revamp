// app/article/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import articlesData from '@/data/articles.json';

const categories = [
  "All",
  "Solar Energy",
  "Hydropower", 
  "Climate Change",
  "Energy Storage",
  "Community Impact",
  "Policy",
  "Technology"
];

export default function ArticlePage() {
  return (
    <main className="pt-20 pb-16">
      {/* Clean Header */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Articles & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, research, and developments 
            in renewable energy and sustainable development.
          </p>
        </div>
      </section>
      
      {/* Categories Filter */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 
                         hover:bg-[#3489AE] hover:text-white transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-[#3489AE] focus:ring-opacity-50 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
          <div className="h-1 w-20 bg-[#4ade80] mx-auto mb-12 rounded-full"></div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full relative">
                  <Image
                    src={articlesData.articles[0].featuredImage}
                    alt={articlesData.articles[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Tag className="h-4 w-4 mr-2" />
                  <span className="bg-[#3489AE]/10 text-[#3489AE] px-2 py-1 rounded-md text-xs mr-4 font-medium">
                    {articlesData.articles[0].category}
                  </span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(articlesData.articles[0].publishedAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {articlesData.articles[0].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {articlesData.articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>{articlesData.articles[0].author}</span>
                    <span className="mx-2">•</span>
                    <span>{articlesData.articles[0].readTime}</span>
                  </div>
                  <Link 
                    href={`/article/${articlesData.articles[0].slug}`}
                    className="bg-[#3489AE] text-white px-6 py-2 rounded-lg hover:bg-[#2C6B7A] 
                             transition-colors duration-300 inline-flex items-center font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Articles</h2>
          <div className="h-1 w-20 bg-[#4ade80] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.articles.slice(1).map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="h-48 relative">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Tag className="h-4 w-4 mr-2" />
                    <span className="bg-[#4ade80]/10 text-[#4ade80] px-2 py-1 rounded-md text-xs mr-3 font-medium">
                      {article.category}
                    </span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      <span className="truncate">{article.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <Link 
                    href={`/article/${article.slug}`}
                    className="mt-4 block w-full text-center bg-[#3489AE] text-white py-2 rounded-lg 
                             hover:bg-[#2C6B7A] transition-colors duration-300 font-medium"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <CallToAction/>
      
    </main>
  );
}