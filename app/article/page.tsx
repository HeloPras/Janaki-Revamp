// // app/article/page.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
// import CallToAction from '@/components/CallToAction';
// import articlesData from '@/data/articles.json';

// const categories = [
//   "All",
//   "Solar Energy",
//   "Hydropower", 
//   "Climate Change",
//   "Energy Storage",
//   "Community Impact",
//   "Policy",
//   "Technology"
// ];

// export default function ArticlePage() {
//   return (
//     <main className="pt-20 pb-16">
//       {/* Clean Header */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//             Articles & Insights
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Stay informed with the latest insights, research, and developments 
//             in renewable energy and sustainable development.
//           </p>
//         </div>
//       </section>
      
//       {/* Categories Filter */}
//       <section className="py-12 px-6 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 
//                          hover:bg-[#3489AE] hover:text-white transition-colors duration-300
//                          focus:outline-none focus:ring-2 focus:ring-[#3489AE] focus:ring-opacity-50 text-sm font-medium"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Article */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
//           <div className="h-1 w-20 bg-[#4ade80] mx-auto mb-12 rounded-full"></div>
          
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//             <div className="md:flex">
//               <div className="md:w-1/2">
//                 <div className="h-64 md:h-full relative">
//                   <Image
//                     src={articlesData.articles[0].featuredImage}
//                     alt={articlesData.articles[0].title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="md:w-1/2 p-8">
//                 <div className="flex items-center text-sm text-gray-600 mb-4">
//                   <Tag className="h-4 w-4 mr-2" />
//                   <span className="bg-[#3489AE]/10 text-[#3489AE] px-2 py-1 rounded-md text-xs mr-4 font-medium">
//                     {articlesData.articles[0].category}
//                   </span>
//                   <Calendar className="h-4 w-4 mr-2" />
//                   <span>{new Date(articlesData.articles[0].publishedAt).toLocaleDateString()}</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                   {articlesData.articles[0].title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   {articlesData.articles[0].excerpt}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center text-sm text-gray-600">
//                     <User className="h-4 w-4 mr-2" />
//                     <span>{articlesData.articles[0].author}</span>
//                     <span className="mx-2">•</span>
//                     <span>{articlesData.articles[0].readTime}</span>
//                   </div>
//                   <Link 
//                     href={`/article/${articlesData.articles[0].slug}`}
//                     className="bg-[#3489AE] text-white px-6 py-2 rounded-lg hover:bg-[#2C6B7A] 
//                              transition-colors duration-300 inline-flex items-center font-medium"
//                   >
//                     Read More
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Articles Grid */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Articles</h2>
//           <div className="h-1 w-20 bg-[#4ade80] mx-auto mb-12 rounded-full"></div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {articlesData.articles.slice(1).map((article) => (
//               <div key={article.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
//                 <div className="h-48 relative">
//                   <Image
//                     src={article.featuredImage}
//                     alt={article.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-600 mb-3">
//                     <Tag className="h-4 w-4 mr-2" />
//                     <span className="bg-[#4ade80]/10 text-[#4ade80] px-2 py-1 rounded-md text-xs mr-3 font-medium">
//                       {article.category}
//                     </span>
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
//                     {article.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 line-clamp-3">
//                     {article.excerpt}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center text-sm text-gray-600">
//                       <User className="h-4 w-4 mr-1" />
//                       <span className="truncate">{article.author}</span>
//                     </div>
//                     <span className="text-sm text-gray-500">{article.readTime}</span>
//                   </div>
//                   <Link 
//                     href={`/article/${article.slug}`}
//                     className="mt-4 block w-full text-center bg-[#3489AE] text-white py-2 rounded-lg 
//                              hover:bg-[#2C6B7A] transition-colors duration-300 font-medium"
//                   >
//                     Read Article
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

  
//       <CallToAction/>
      
//     </main>
//   );
// }

// app/article/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
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
  "Technology",
];

// Solar panel grid SVG used as a decorative motif
const PVGridBg = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="pv-cell" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <rect x="1" y="1" width="25" height="25" rx="1.5" fill="none" stroke="rgba(52,137,174,0.13)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pv-cell)" />
  </svg>
);

export default function ArticlePage() {
  const featured = articlesData.articles[0];
  const rest = articlesData.articles.slice(1);

  return (
    <main
      className="pt-20 pb-0"
      style={{ background: '#F7F6F2', fontFamily: "'Syne', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

        :root {
          --blue: #3489AE;
          --blue-dark: #2C6B7A;
          --blue-pale: #EBF4F9;
          --green: #4ade80;
          --green-dark: #22c55e;
          --ink: #0D1B1E;
          --ink-mid: #2A3E42;
          --muted: #6B8188;
          --surface: #F7F6F2;
          --white: #ffffff;
          --border: #D8E8EE;
        }

        .article-img-wrap img {
          transition: transform 0.45s ease, opacity 0.3s ease;
        }
        .article-card-hover:hover .article-img-wrap img {
          transform: scale(1.05);
          opacity: 0.95;
        }
        .article-link-hover {
          transition: gap 0.2s;
        }
        .article-card-hover:hover .article-link-hover {
          gap: 8px;
        }
        .cat-btn-active {
          color: var(--blue) !important;
          border-bottom: 2px solid var(--blue) !important;
        }
        .read-btn-arrow {
          transition: transform 0.2s;
        }
        .read-btn:hover .read-btn-arrow {
          transform: translateX(3px);
        }
      `}</style>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-6"
        style={{ background: 'var(--ink)' }}
      >
        <PVGridBg />
        {/* Gradient fade at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0D1B1E)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 text-xs font-bold tracking-widest uppercase"
            style={{ color: 'var(--green)', letterSpacing: '0.12em' }}
          >
            <span className="block w-6 h-0.5" style={{ background: 'var(--green)' }} />
            Solar Energy Insights
          </div>
          <h1
            className="font-extrabold leading-none mb-5"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(38px, 6vw, 60px)',
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Articles &amp;{' '}
            <span style={{ color: 'var(--blue)' }}>Insights</span>
          </h1>
          <p
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 18,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.65,
              fontStyle: 'italic',
              maxWidth: 520,
            }}
          >
            The latest research, analysis, and developments in renewable energy
            and sustainable development.
          </p>
        </div>
      </section>

      {/* ── CATEGORY NAV ───────────────────────────────────── */}
      <nav
        className="sticky top-0 z-20 border-b"
        style={{ background: 'var(--white)', borderColor: 'var(--border)' }}
        aria-label="Article categories"
      >
        <div
          className="max-w-4xl mx-auto px-6 flex overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-4 text-xs font-bold tracking-wide uppercase whitespace-nowrap border-b-2 transition-colors duration-200 focus:outline-none ${
                i === 0 ? 'cat-btn-active' : ''
              }`}
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: '0.04em',
                color: i === 0 ? 'var(--blue)' : 'var(--muted)',
                borderBottomColor: i === 0 ? 'var(--blue)' : 'transparent',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* ── FEATURED ARTICLE ───────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: 'var(--muted)', letterSpacing: '0.14em' }}
            >
              Featured Article
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          {/* Card */}
          <div
            className="grid md:grid-cols-2 overflow-hidden rounded-sm"
            style={{ border: '1px solid var(--border)', background: 'var(--white)' }}
          >
            {/* Image side */}
            <div className="relative min-h-80 overflow-hidden" style={{ background: 'var(--ink-mid)' }}>
              <Image
                src={featured.featuredImage}
                alt={featured.title}
                fill
                className="object-cover"
                style={{ opacity: 0.85 }}
              />
              <span
                className="absolute top-5 left-5 text-xs font-bold tracking-widest uppercase text-white px-3 py-1.5"
                style={{
                  background: 'var(--blue)',
                  letterSpacing: '0.1em',
                  borderRadius: 2,
                }}
              >
                {featured.category}
              </span>
            </div>

            {/* Content side */}
            <div className="p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-5 text-xs" style={{ color: 'var(--muted)' }}>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featured.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric',
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full" style={{ background: 'var(--border)' }} />
                  <span>{featured.readTime}</span>
                </div>

                <h2
                  className="font-bold mb-4 leading-tight"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 24,
                    color: 'var(--ink)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {featured.title}
                </h2>

                <p
                  className="mb-8"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 16,
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                  }}
                >
                  {featured.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Author */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'var(--blue-pale)', color: 'var(--blue)' }}
                  >
                    {featured.author
                      .split(' ')
                      .map((n: string) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--ink)', fontFamily: "'Syne', sans-serif" }}>
                      {featured.author}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/article/${featured.slug}`}
                  className="read-btn inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 transition-colors"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: 'var(--ink)',
                    borderRadius: 2,
                    letterSpacing: '0.03em',
                  }}
                >
                  Read Article
                  <ArrowRight className="read-btn-arrow w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ──────────────────────────────────── */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: 'var(--muted)', letterSpacing: '0.14em' }}
            >
              Latest Articles
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3"
            style={{
              gap: 1,
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            {rest.map((article) => (
              <div
                key={article.id}
                className="article-card-hover flex flex-col transition-colors duration-200"
                style={{ background: 'var(--white)' }}
              >
                {/* Image */}
                <div
                  className="article-img-wrap relative overflow-hidden"
                  style={{ height: 164, background: 'var(--ink-mid)' }}
                >
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                    style={{ opacity: 0.82 }}
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Tag + date */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2 py-1"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: '0.1em',
                        color: 'var(--green-dark)',
                        background: 'rgba(74,222,128,0.1)',
                        borderRadius: 2,
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                      <Calendar className="w-3 h-3" />
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold mb-2 line-clamp-2"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 15,
                      color: 'var(--ink)',
                      lineHeight: 1.35,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="flex-1 line-clamp-3 mb-4"
                    style={{
                      fontSize: 13,
                      color: 'var(--muted)',
                      lineHeight: 1.65,
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div
                    className="pt-3.5 border-t"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="flex items-center gap-1.5 text-xs font-semibold"
                        style={{ color: 'var(--ink-mid)', fontFamily: "'Syne', sans-serif" }}
                      >
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>
                        {article.readTime}
                      </span>
                    </div>

                    <Link
                      href={`/article/${article.slug}`}
                      className="article-link-hover inline-flex items-center gap-1.5 text-xs font-bold"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        color: 'var(--blue)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}