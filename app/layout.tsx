// app/layout.tsx
'use client'

import type { Metadata } from 'next';
import { Montserrat, Inter, Poppins, Lexend, Lato, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import { useState, useEffect } from 'react';

// Load Montserrat font with specific weights (existing)
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

// Load Inter font for professional business look
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

// Load Poppins font for modern, clean appearance
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

// Load Lexend font for excellent readability
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
});

// Load Lato font for professional clean look
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
});

// Load Playfair Display font for fancy hero sections
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <html lang="en">
      <head>
        <title>Janaki Energy - Sustainable Energy Solutions</title>
        <meta name="description" content="Forward-thinking energy company committed to advancing sustainable development through innovative and reliable energy solutions." />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} ${poppins.variable} ${lexend.variable} ${lato.variable} ${playfair.variable} font-lato`}>
        {/* Page Loader */}
        <PageLoader 
          isLoading={isLoading} 
          onComplete={() => setIsLoading(false)} 
        />
        {/* Main App Content */}
        <div >
          {/* Solar Panel Grid Backdrop */}
          <div className="solar-grid-backdrop" aria-hidden="true"></div>
          
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}