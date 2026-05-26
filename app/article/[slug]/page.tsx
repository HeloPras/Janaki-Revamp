import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import ShareButton from '@/components/ShareButton';
import CallToAction from '@/components/CallToAction';
import articlesData from '@/data/articles.json';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.articles.find(article => article.slug === slug);

  if (!article) {
    notFound();
  }

  // Split content into paragraphs for better formatting
  const contentParagraphs = article.content.split('\n\n');

  return (
    <main className="pt-20 pb-16">
      {/* Clean Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/article" 
            className="inline-flex items-center text-gray-600 hover:text-[#3489AE] mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Articles
          </Link>
          
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Tag className="h-4 w-4 mr-2" />
            <span className="bg-[#3489AE]/10 text-[#3489AE] px-3 py-1 rounded-md text-xs mr-4 font-medium">
              {article.category}
            </span>
            <Calendar className="h-4 w-4 mr-2" />
            <span>{new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <User className="h-5 w-5 mr-2" />
              <span className="mr-4">{article.author}</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>{article.readTime}</span>
            </div>
            
            {/* Share Button */}
            <ShareButton 
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={article.title}
              description={article.excerpt}
              variant="default"
              size="medium"
            />
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-sm">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {contentParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </article>
          
          {/* References Section */}
          {(article as any).references && (article as any).references.length > 0 && (
            <div className="mt-12 py-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ol className="space-y-2">
                {(article as any).references.map((reference: string, index: number) => (
                  <li key={index} className="text-gray-600 text-sm">
                    <span className="font-medium">{index + 1}.</span> {reference}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 py-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 font-medium">Share this article:</p>
              <ShareButton 
                url={typeof window !== 'undefined' ? window.location.href : ''}
                title={article.title}
                description={article.excerpt}
                variant="minimal"
                size="medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-[#3489AE]/10 text-[#3489AE] px-3 py-1 rounded-md text-sm hover:bg-[#3489AE]/20 transition-colors font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#3489AE]">
            <div className="flex items-start space-x-4">
              <div className="h-16 w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `#3489AE` }}>
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{article.author}</h4>
                <p className="text-gray-600">
                  Our expert team at Janaki Energy is dedicated to advancing renewable energy solutions 
                  and sustainable development in Nepal. We combine technical expertise with local knowledge 
                  to deliver innovative energy projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="h-1 w-20 bg-[#4ade80] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {articlesData.articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <div key={relatedArticle.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 relative">
                    <Image
                      src={relatedArticle.featuredImage}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Tag className="h-4 w-4 mr-2" />
                      <span className="bg-[#4ade80]/10 text-[#4ade80] px-2 py-1 rounded-md text-xs mr-3 font-medium">
                        {relatedArticle.category}
                      </span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(relatedArticle.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <Link 
                      href={`/article/${relatedArticle.slug}`}
                      className="block w-full text-center bg-[#3489AE] text-white py-2 rounded-lg 
                               hover:bg-[#2C6B7A] transition-colors duration-300 font-medium"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          
          {articlesData.articles.filter(a => a.id !== article.id && a.category === article.category).length === 0 && (
            <div className="text-center">
              <p className="text-gray-600 mb-6">No related articles found in this category.</p>
              <Link 
                href="/article" 
                className="bg-[#3489AE] text-white px-6 py-3 rounded-lg hover:bg-[#2C6B7A] transition-colors duration-300 font-medium"
              >
                Browse All Articles
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Floating Share Button */}
      <ShareButton 
        url={typeof window !== 'undefined' ? window.location.href : ''}
        title={article.title}
        description={article.excerpt}
        variant="floating"
        size="medium"
      />

      {/* Call to Action */}
      <CallToAction variant="button" href="/contact">
        Interested in Our Services?
      </CallToAction>
    </main>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  return articlesData.articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.articles.find(article => article.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found - Janaki Energy',
    };
  }

  return {
    title: `${article.title} - Janaki Energy`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    },
  };
}