'use client';

import React from 'react';
import Image from 'next/image';
import { User, MapPin, Award, BookOpen } from 'lucide-react';
import VideoBackdrop from '@/components/VideoBackdrop';

// Board of Directors data from pitch deck
const boardMembers = [
  //  {
  //   id: 7,
  //   name: "Dr. Govind Raj Pokharel",
  //   position: "Advisor",
  //   role: "",
  //   education: [
  //     "PhD in Economics (Ennergy) from Germany",
  //     "MSc in Appropriate Rural Energy Technology, Policy and Extension Skills from Germany",
  //     "BE in Mechanical Engineering from Rajasthan, India.",
  //   ],
  //   certifications: [],
  //   experience: "Over 25 years of professional experience in public policy, planning, budgeting, international development and academia",
  //   achievements: [
  //     "CEO of Reconstruction Authority",
  //   ],
  //   expertise: " Public policy, planning, budgeting, international development and academia",
  //   image: "/people/board/Govinda.jpg"
  // },
  // {

  {
    id: 2,
    name: "Er. Tapendra Chand",
    position: "Chairperson",
    role: "Executive Leadership",
    education: [
      "MSc in Energy System",
      "Bachelor in Industrial Engineering"
    ],
    certifications: [
      "APMG (CP³P)® Certified PPP Professional®"
    ],
    experience: "Over 11 years of experience in Large Scale hydro and solar projects (FDI)",
    achievements: [
      "Token of appreciation from the Rt. Honorable Prime Minister of Nepal",
      "Recognition for outstanding dedication and service to the Office of Investment Board Nepal"
    ],
    expertise: "Large Scale solar and hydro project management in The Investment Board Nepal",
    image: "/people/board/T2.jpeg"
  },
  {
    id: 3,
    name: "Mr. Praharsh Malla",
    position: "Director",
    role: " ",
    education: [
      " "
    ],
    certifications: [],
    experience: "Over 11 years of experience in enterprise management and market development",
    achievements: [
      "Director of Hetish Krishi farm",
      "Successful track record in agricultural and business ventures"
    ],
    expertise: "Enterprise management and market development strategies",
    image: "/people/board/Praharsh.jpg"
  },
  {
    id: 4,
    name: "Ms. Smritee Paudel",
    position: "Director",
    role: " ",
    education: [
      "Master degree in Development and Sustainability",
      "MSc in International Management"
    ],
    certifications: [],
    experience: "Over 5 years of experience in renewable energy, sustainability research & project development",
    achievements: [
      "Expertise in project planning and human resource management",
      "Strong background in partnership development"
    ],
    expertise: "Project planning, human resource management & partnership development",
    image: "/people/board/Smritee.jpg"
  },


];

const promoters = [
  {
      id: 3,
    name: "Mr. Manoj Poudel",
    position: "Advisor",
    role: "Strategic Advisory",
    education: [
      "MSc from London School of Economics (Chevening Scholar)"
    ],
    certifications: [],
    experience: "Extensive experience in investment and international affairs",
    achievements: [
      "Chairperson/Executive Committee Member of the Investment and International Affairs Forum",
      "Key role at the Federation of Nepalese Chambers of Commerce and Industry (FNCCI)"
    ],
    expertise: "Investment strategy and international business development",
    image: "/people/board/Manoj.jpg"
  },
    {
    id: 2,
    name: "Mr. Sambridh Ghimire",
    position: "Promoter",
    role: "",
    subtitle: "Director representing Invest and Infra Pvt. Ltd",
    education: [
      "BA LLB from the National Law School of India University, Bangalore "  
    ],
    certifications: [],
    experience: "Extensive Experience advising institutions including i-PAC, and the Office of the Chief Minister of West Bengal.",
    achievements: [
      "Director of Institute for Government and Public Affairs (IGPA)",
      "Widely published columnist in national and international publications"
    ],
    expertise: "Governance, Public policy, political consulting and strategic public affairs across South Asia",
    image: "/people/board/sambridh (1).jpeg"
  },
  {
    id: 1,
    name: "Mr. Nischal Singh Bhandari",
    position: "Promoter",
    role: "",
    education: [
      "Bachelor of Arts, Public Relations/Image Management"
    ],
    certifications: [],
    experience: "Over 7 years of experience in communication, partnership and brand visibility",
    achievements: [
      "Seasoned growth and partnership expert",
      "Strong communication and brand management skills"
    ],
    expertise: "Growth and Partnership Expert with focus on communication strategies",
    image: "/people/board/Nischal.jpg"
  },

];

export const BoardCard = ({ member }: { member: typeof boardMembers[0] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Profile Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-sm font-medium">{member.position}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-1 font-lexend">{member.name}</h3>
          <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
          <p className="text-gray-600 text-sm font-lato">{member.role}</p>
          {/* {member.subtitle && (
            <p className="text-sm text-gray-500 mt-1 italic">{member.subtitle}</p>
          )} */}
        </div>

        {/* Education - Only show if there's actual education data */}
        {member.education.length > 0 && member.education[0].trim() !== "" && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <BookOpen className="h-4 w-4 text-blue-500 mr-2" />
              <h4 className="font-semibold text-gray-800 font-nunito">Education</h4>
            </div>
            <ul className="space-y-1">
              {member.education.map((edu, index) => (
                <li key={index} className="text-sm text-gray-600 pl-4 border-l-2 border-blue-100">
                  {edu}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Experience & Expertise */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Award className="h-4 w-4 text-green-500 mr-2" />
            <h4 className="font-semibold text-gray-800 font-nunito">Expertise</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{member.expertise}</p>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 font-nunito">Experience</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{member.experience}</p>
        </div>

        {/* Achievements */}
        {member.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2 font-nunito">Key Achievements</h4>
            <ul className="space-y-1">
              {member.achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-600 pl-4 border-l-2 border-green-100">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {member.certifications.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 font-nunito">Certifications</h4>
            <ul className="space-y-1">
              {member.certifications.map((cert, index) => (
                <li key={index} className="text-sm text-gray-600 pl-4 border-l-2 border-yellow-100">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default function BoardOfDirectorsPage() {
  return (
    <main className="pt-20 pb-16">
      {/* Hero Section */}
      <VideoBackdrop
        videoSrc="/videos/office.mp4"
        minHeight="500px"
      >
        <section className="text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-lexend">Board of Directors</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto font-lato">
              Meet our experienced leadership team driving Janaki Energy's mission 
              toward sustainable energy solutions in Nepal.
            </p>
          </div>
        </section>
      </VideoBackdrop>

      {/* Board Overview */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Leadership Excellence
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lato">
              Our board combines decades of experience in energy sector development, 
              financial management, and sustainable business practices to guide Janaki Energy's 
              strategic vision and operational excellence.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 font-nunito">50+</div>
              <div className="text-gray-600 font-medium">Combined Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 font-nunito">{boardMembers.length}</div>
              <div className="text-gray-600 font-medium">Board Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 font-nunito">3</div>
              <div className="text-gray-600 font-medium">Sectors Represented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 font-nunito">100%</div>
              <div className="text-gray-600 font-medium">Committed to Sustainability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Grid */}
      <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Our Board of Directors
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          </div>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <BoardCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

<div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-lexend">
              Our Key Promoter
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          </div>
<section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promoters.map((member) => (
              <BoardCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}