'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, FileText, Eye, Calendar, FileIcon, Search } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

// Company documents data
const documentsData = [
  // {
  //   id: "company-profile",
  //   title: "Janaki Energy Company Profile",
  //   description: "Comprehensive company profile including mission, vision, services, and team information",
  //   category: "Company Profile",
  //   fileType: "PDF",
  //   fileSize: "2.4 MB",
  //   uploadDate: "2024-01-15",
  //   downloadUrl: "/documents/Janaki energy Pvt Ltd_companyprofile.pdf",
  //   previewUrl: "/documents/Janaki energy Pvt Ltd_companyprofile.pdf",
  //   featured: true,
  //   summary: "Complete overview of Janaki Energy's business operations, leadership team, and strategic vision for renewable energy in Nepal."
  // },
  // {
  //   id: "janaki-energy-pitchdeck",
  //   title: "Janaki Energy pitchdeck",
  //   description: "Pitch deck for Janaki Energy, focusing on clean energy solutions for industrial transition.",
  //   category: "Company Profile",
  //   fileType: "PDF",
  //   fileSize: "Unknown",
  //   uploadDate: "2024-10-6",
  //   downloadUrl: "/documents/Janaki Energy pitchdeck.pdf",
  //   previewUrl: "/documents/Janaki Energy pitchdeck.pdf",
  //   featured: true,
  //   summary: "A presentation detailing Janaki Energy's vision to lead Nepal's clean energy transition using innovative solar and hydropower solutions. It highlights their end-to-end services, key projects, and their diverse team expertise."
  // },
  {
    id: "ci-factsheet",
    title: "Commercial & Industrial Solar Factsheet",
    description: "Detailed information about commercial and industrial solar solutions and services",
    category: "Fact Sheet",
    fileType: "PDF",
    fileSize: "1.8 MB",
    uploadDate: "2024-01-10",
    downloadUrl: "/documents/Commercial and Industrial Solar.pdf",
    previewUrl: "/documents/Commercial and Industrial Solar.pdf",
    featured: true,
    summary: "Technical specifications and benefits of commercial and industrial solar energy systems offered by Janaki Energy."
  },
  {
    id: "bess-factsheet",
    title: "Solar System with BESS Factsheet",
    description: "Information about Solar PV systems integrated with Battery Energy Storage Systems",
    category: "Fact Sheet",
    fileType: "PDF",
    fileSize: "2.1 MB",
    uploadDate: "2024-01-12",
    downloadUrl: "/documents/Solar System with BESS factsheet.pdf",
    previewUrl: "/documents/Solar System with BESS factsheet.pdf",
    featured: true,
    summary: "Comprehensive guide to solar photovoltaic systems with battery energy storage solutions for enhanced energy reliability."
  },
  {
    id: "battery-factsheet",
    title: "Facts about battery",
    description: "Information about battery State of Health (SOH), degradation, and repurposing",
    category: "Fact Sheet",
    fileType: "PDF",
    fileSize: "1.5 MB",
    uploadDate: "2024-10-6",
    downloadUrl: "/documents/facts about battery.pdf",
    previewUrl: "/documents/facts about battery.pdf",
    featured: true,
    summary: "Data and information on battery State of Health (SOH), its degradation over time, and different repurposing stages based on SOH. Also includes lithium-ion battery price trends."
  },
  {
   id: "rooftopsolar-factsheet",
    title: "Benefits of rooftop Solar PV",
    description: "Information about the benefits of rooftop Solar PV",
    category: "Fact Sheet",
    fileType: "PDF",
    fileSize: "1.1 MB",
    uploadDate: "2024-10-6",
    downloadUrl: "/documents/Benefits of rooftop Solar PV.pdf",
    previewUrl: "/documents/Benefits of rooftop Solar PV.pdf",
    featured: true,
    summary: "Details on the financial, environmental, and other benefits of a 500KW rooftop solar system, including net metering, carbon reduction, and continuous energy supply."
  },
  {
    id: "insurance-factsheet",
    title: "Insurance in Renewable Sector ",
    description: "Information on insurance in the renewable energy sector",
    category: "Fact Sheet",
    fileType: "PDF",
    fileSize: "327 KB",
    uploadDate: "2024-10-6",
    downloadUrl: "/documents/Insurance in Renewable Sector .pdf",
    previewUrl: "/documents/Insurance in Renewable Sector .pdf",
    featured: true,
    summary: "Overview of the need for insurance in the renewable sector, major risks in Nepal, various insurance types (Pre-Completion and Operational Phase), and current challenges/way forward."
  },
  {
    id: "energy-scenario-factsheet",
    title: "_Energy Scenario in FY 2024-25",
    description: "Information on the energy scenario in FY 2024/25",
    category: "Fact Sheet",
    fileType: "PDF",
    fileSize: "398 KB",
    uploadDate: "2024-10-6",
    downloadUrl: "/documents/_Energy Scenario in FY 2024-25.pdf",
    previewUrl: "/documents/_Energy Scenario in FY 2024-25.pdf",
    featured: true,
    summary: "Data on Nepal's electricity scenario for FY 2024/25, including total installed capacity, energy mix, import/export trends, transmission line and substation capacity, and PPA status for various energy projects."
  },
  // {
  //   id: "board-members",
  //   title: "Board Members Information",
  //   description: "Information about Janaki Energy's board of directors and key leadership",
  //   category: "Corporate Governance",
  //   fileType: "DOCX",
  //   fileSize: "0.5 MB",
  //   uploadDate: "2024-01-08",
  //   downloadUrl: "/documents/Board Members.docx",
  //   previewUrl: null, // Cannot preview DOCX files directly
  //   featured: false,
  //   summary: "Details about the board of directors and executive leadership team at Janaki Energy."
  // }
];

//pitch desk 
const FactSheetCount = documentsData.filter((item)=>{const something= item.category === 'Fact Sheet'; return something }).length
const CompanyProfileCount = documentsData.filter((item)=>{const something= item.category === 'Company Profile'; return something }).length
const CorporateGovernanceCount = documentsData.filter((item)=>{const something= item.category === 'Corporate Governance'; return something }).length



const categories = [
  { name: "All Documents", count: documentsData.length },
  { name: "Company Profile", count: CompanyProfileCount },
  { name: "Fact Sheet", count: FactSheetCount },
  { name: "Corporate Governance", count: CorporateGovernanceCount}
];

interface DocumentCardProps {
  document: typeof documentsData[0];
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getFileIcon = (fileType: string) => {
    switch (fileType.toUpperCase()) {
      case 'PDF':
        return <FileText className="h-7 w-7 text-[#3489AE]" />;
      case 'DOCX':
        return <FileIcon className="h-7 w-7 text-[#2C6B7A]" />;
      default:
        return <FileText className="h-7 w-7 text-gray-500" />;
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Document Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getFileIcon(document.fileType)}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{document.title}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="bg-[#3489AE]/10 text-[#3489AE] px-2 py-1 rounded-md text-xs font-medium">
                {document.category}
              </span>
              <span>•</span>
              <span>{document.fileType}</span>
              <span>•</span>
              <span>{document.fileSize}</span>
            </div>
          </div>
        </div>
        {document.featured && (
          <span className="bg-[#4ade80]/10 text-[#4ade80] px-2 py-1 rounded-md text-xs font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Document Description */}
      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{document.description}</p>
      
      {/* Document Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-[#3489AE]">
        <p className="text-sm text-gray-700">{document.summary}</p>
      </div>

      {/* Upload Date */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Calendar className="h-4 w-4 mr-2" />
        <span>Uploaded: {new Date(document.uploadDate).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        {document.previewUrl && (
          <Link
            href={document.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-[#3489AE]/10 text-[#3489AE] hover:bg-[#3489AE]/20 
                     rounded-lg transition-colors duration-200 flex-1 font-medium"
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Link>
        )}
        <Link
          href={document.downloadUrl}
          download
          className="flex items-center justify-center px-4 py-2 bg-[#4ade80] text-white hover:bg-[#22c55e] 
                   rounded-lg transition-colors duration-200 flex-1 font-medium"
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Link>
      </div>
    </div>
  );
};

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Documents');

  const filteredDocuments = documentsData.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Documents' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  
  console.log(filteredDocuments);
  
  

  return (
    <main className="pt-20 pb-16">
      {/* Clean Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Document Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive collection of company documents, fact sheets, and corporate information.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3489AE] focus:border-transparent bg-white shadow-sm"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                  selectedCategory === category.name
                    ? 'bg-[#3489AE] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-[#3489AE]/10 hover:text-[#3489AE] border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Documents
            </h2>
            <div className="h-1 w-20 bg-[#4ade80] mx-auto rounded-full"></div>
          </div>

          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDocuments.map((document) => (
                <DocumentCard key={document.id} document={document} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-500 mb-2">No documents found</h3>
              <p className="text-gray-400 text-sm">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      <CallToAction />

    </main>
  );
}