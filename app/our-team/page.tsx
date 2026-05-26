'{use client';

import React from 'react';
import Image from 'next/image';
import { User, Zap, Users, Cog, Calculator, Scale, Leaf, Building, FlaskConical, MapPin, Settings } from 'lucide-react';
import VideoBackdrop from '@/components/VideoBackdrop';
import { BoardCard } from '../board-of-directors/page';

// Team members data
const teamMembers = [
  {
    
    id: 1,
    name: "Er. Tapendra Chand",
    position: "Chairperson & Technical Lead",
    department: "Executive Leadership",
    expertise: "Large Scale solar and hydro project management in The Investment Board Nepal",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    skills: ["Project Management", "Solar & Hydro Systems", "Investment Board Relations", "Technical Leadership"],
    type: "team",
    image: "/people/team/Tapendra.jpg"
  },
  // {
  //   id: 2,
  //   name: "Mr. Nischal Singh Bhandari",
  //   position: "Growth and Partnership Expert",
  //   department: "Business Development",
  //   expertise: "Growth and Partnership Expert with focus on communication strategies",
  //   icon: Users,
  //   color: "from-green-500 to-teal-500",
  //   skills: ["Partnership Development", "Communication Strategy", "Brand Visibility", "Business Growth"],
  //   type: "team",
  //   image: "/people/team/Nischal.jpg"
  // },
  {
    id: 3,
    name: "Mr. Sworup Dhungana",
    position: "Financial Analyst",
    department: "Finance",
    expertise: "Chartered Accountant with expertise in financial modelling of commercial solar projects",
    icon: Calculator,
    color: "from-orange-500 to-red-500",
    skills: ["Financial Modelling", "Chartered Accountancy", "Commercial Solar Analysis", "Investment Planning"],
    type: "team",
    image: "/people/team/Sworup.jpg"
  },
  {
    id: 4,
    name: "Ms. Dikshya Pokharel",
    position: "Legal & Finance Specialist",
    department: "Legal & Compliance",  
    expertise: "Experience in legal compliance and financing of energy projects",
    icon: Scale,
    color: "from-indigo-500 to-purple-500",
    skills: ["Legal Compliance", "Energy Project Financing", "Regulatory Affairs", "Contract Management"],
    type: "team",
    image: "/people/team/Dikshya.jpg"
  },
  {
    id: 5,
    name: "Ms. Rendira Maharjan",
    position: "Solar PV Designer",
    department: "Engineering",
    expertise: "Solar PV design specialist",
    icon: Settings,
    color: "from-pink-500 to-rose-500",
    skills: ["Solar PV Design", "System Optimization", "Technical Documentation", "Performance Analysis"],
    type: "team",
    image: "/people/team/Rendira.jpg"
  },
  {
    id: 6,
    name: "Ms. Pratikshya Pandey",
    position: "Finance Officer",
    department: "Finance",
    expertise: "Finance Officer with expertise in financial management and operations",
    icon: Calculator,
    color: "from-purple-600 to-blue-600",
    skills: ["Financial Management", "Operations", "Budget Planning", "Financial Analysis"],
    type: "team",
    image: "/people/team/Pratikshya.jpg"
  },
  {
    id: 7,
    name: "Ms. Sarita Adhikari",
    position: "Finance Manager",
    department: "Finance",
    expertise: "Chartered Accountant with expertise in accounting, financial reporting and risk management",
    icon: Calculator,
    color: "from-purple-600 to-blue-600",
    skills: ["Financial Modelling", "Investment Planning", "Financial Reporting", "Risk Management"],
    type: "team",
    image: "/people/team/Sarita.jpeg"
  },
 {
  id: 8,
  name: "Er. Abhay Kumar Karna",
  position: "Site Supervisor",
  department: "Renewable Energy",
  expertise: "Renewable energy professional with expertise in rooftop solar systems, grid-connected renewable energy projects, technical supervision, and solar infrastructure development.",
  icon: Building,
  color: "from-yellow-600 to-orange-600",
  skills: [
    "Project Coordination",
    "Rooftop Solar System Supervision",
    "Feasibility and Site Assessment",
    "Renewable Energy Projects"
  ],
  type: "consultant",
    image: "/people/team/Abhay.jpeg"
}, 
    {
    id: 1,
    name: "Er. Rakesh Shrestha",
    position: "Technical Consultant",
    department: "Engineering",
    expertise: "Technical Consultant for Solar Project (Electrical Engineer)",
    icon: Cog,
    color: "from-purple-500 to-pink-500",
    skills: ["Electrical Engineering", "Solar System Design", "Technical Consulting", "Project Implementation"],
    type: "consultant"
  },
  {
    id: 2,
    name: "Mr. Sharad Sharma",
    position: "Agricultural Expert",
    department: "Sustainability",
    expertise: "Agricultural Expert related to Agrivoltaics",
    icon: Leaf,
    color: "from-green-600 to-lime-500",
    skills: ["Agrivoltaics", "Agricultural Systems", "Sustainable Farming", "Land Use Optimization"],
    type: "consultant"
  },
  {
    id: 3,
    name: "Mr. Neelesh Man Shrestha",
    position: "Environmental Specialist",
    department: "Environment",
    expertise: "Environmental Specialist focusing on sustainable energy solutions",
    icon: Leaf,
    color: "from-teal-500 to-green-600",
    skills: ["Environmental Assessment", "Sustainability Research", "Impact Analysis", "Green Technology"],
    type: "consultant"
  },
  {
    id: 4,
    name: "Er. Dipesh Kharel",
    position: "Structural Engineer",
    department: "Engineering",
    expertise: "Rooftop Structural Analysis for Solar Project",
    icon: Building,
    color: "from-gray-600 to-blue-600",
    skills: ["Structural Analysis", "Rooftop Solar Systems", "Civil Engineering", "Safety Assessment"],
    type: "consultant"
  },
  {
    id: 5,
    name: "Er. Bishal Khatiwada",
    position: "Civil Engineer",
    department: "Engineering",
    expertise: "Civil Engineer with expertise related to solar project",
    icon: Building,
    color: "from-yellow-600 to-orange-600",
    skills: ["Civil Engineering", "Infrastructure Development", "Site Planning", "Construction Management"],
    type: "consultant"
  },

  

    
];

// advisors data
const advisors =   [{
    id: 1,
    name: "Dr. Govind Raj Pokharel",
    position: "Advisor",
    role: "",
    education: [
      "Doctoral Studies (Phd) in Energy Eonomics.",
      "Msc from Univerity of Flensburg.",
      "Bachelor in Mechanical Engineering."
    ],
    certifications: [],
    experience: "Over 25 years of experience in energy sector and strategic policy development.",
    achievements: [
      "Vice Chairman of National Planning Commission",
      "CEO o National Reconstruction Authority of Nepal",
      "Executive Director of Alternative Energy Promotion Ceter.",
      "Executive Director in People, Energy & Environment Development Association.",
    ],
    expertise: "Energy policy, planning and strategic development",
    image: "/people/board/Govinda.jpg"
  },]

// const advisors = [
//   {
//     id: 1,
//     name: "Dr. Govind Raj Pokharel",
//     position: "Advisor",
//     department: "Business Development",
//     expertise: "Energy policy, planning and strategic develoopment",
//     icon: User,
//     color: "from-purple-500 to-pink-500",
//     skills: ["Business Development", "Partnership Development", "Communication Strategy", "Brand Visibility", "Business Growth"],
//     type: "team",
//     image: "/people/team/Nischal.jpg"
//   }
// ]

// Consultants data
// const consultants = [

// ];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => {
  const IconComponent = member.icon;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Profile Header */}
      <div className={`relative h-32 bg-gradient-to-r ${member.color}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <IconComponent className="h-16 w-16 text-white opacity-80" />
        </div>
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-xs font-medium">{member.department}</span>
        </div>
        {/* Profile Image */}
        <div className="absolute -bottom-8 left-6">
          <div className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-lg">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white flex items-center justify-center">
                <User className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1 font-lexend">{member.name}</h3>
          <p className="text-blue-600 font-semibold mb-2 font-lato">{member.position}</p>
          <p className="text-gray-600 text-sm leading-relaxed font-nunito">{member.expertise}</p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-3 font-nunito">Key Skills</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <span 
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full
                         hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OurTeamPage() {
  return (
    <main className="pt-20 pb-16">
      {/* Hero Section */}
      <VideoBackdrop
        videoSrc="/videos/office.mp4"
        minHeight="500px"
      >
        <section className="text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-lexend">Our Team</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto font-lato">
              Meet the dedicated professionals driving innovation and excellence 
              in Nepal's renewable energy sector.
            </p>
          </div>
        </section>
      </VideoBackdrop>

      {/* Team Overview */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Expertise Across Disciplines
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lato">
              Our multidisciplinary team brings together engineering excellence, financial expertise, 
              environmental stewardship, and strategic leadership to deliver comprehensive 
              renewable energy solutions.
            </p>
          </div>

          {/* Department Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2 font-nunito">7</div>
              <div className="text-gray-600 text-sm font-medium">Team Members</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2 font-nunito">5</div>
              <div className="text-gray-600 text-sm font-medium">Consultants</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2 font-nunito">6</div>
              <div className="text-gray-600 text-sm font-medium">Departments</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2 font-nunito">12</div>
              <div className="text-gray-600 text-sm font-medium">Total Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Our Team
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Grid */}

      {/* <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Our Consultants
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultants.map((member) => (
              <TeamCard key={`consultant-${member.id}`} member={member} />
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Our Advisor
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <BoardCard key={advisor.id} member={advisor} />
            ))}
          </div>
        </div>
      </section>
  



      {/* Core Values */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Our Team Values
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-lexend">Innovation</h3>
              <p className="text-gray-600 font-lato">
                Constantly pushing boundaries with cutting-edge renewable energy technologies 
                and sustainable solutions.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-lexend">Collaboration</h3>
              <p className="text-gray-600 font-lato">
                Working together across disciplines to deliver comprehensive, 
                effective energy solutions for our clients.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-lexend">Sustainability</h3>
              <p className="text-gray-600 font-lato">
                Committed to environmental stewardship and creating a cleaner, 
                more sustainable future for Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

  
    </main>
  );
}