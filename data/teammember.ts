import {
  User,
  Zap,
  Users,
  Cog,
  Calculator,
  Scale,
  Leaf,
  Building,
  FlaskConical,
  MapPin,
  Settings,
} from "lucide-react"


// ======================= BoardMember ======================================

export const boardMembers: BoardMember[] = [
  {
    id: 2,
    name: "Er. Tapendra Chand",
    position: "Chairperson",
    role: "Executive Leadership",
    education: ["MSc in Energy System", "Bachelor in Industrial Engineering"],
    certifications: ["APMG (CP³P)® Certified PPP Professional®"],
    experience:
      "Over 11 years of experience in Large Scale hydro and solar projects (FDI)",
    achievements: [
      "Token of appreciation from the Rt. Honorable Prime Minister of Nepal",
      "Recognition for outstanding dedication and service to the Office of Investment Board Nepal",
    ],
    expertise:
      "Large Scale solar and hydro project management in The Investment Board Nepal",
    image: "/people/board/T2.jpeg",
    color: "green",
  },
  {
    id: 3,
    name: "Mr. Praharsh Malla",
    position: "Director",
    role: "",
    education: [],
    certifications: [],
    experience:
      "Over 11 years of experience in enterprise management and market development",
    achievements: [
      "Director of Hetish Krishi farm",
      "Successful track record in agricultural and business ventures",
    ],
    expertise: "Enterprise management and market development strategies",
    image: "/people/board/Praharsh.jpg",
    color: "blue",
  },
  {
    id: 4,
    name: "Ms. Smritee Paudel",
    position: "Director",
    role: "",
    education: [
      "Master degree in Development and Sustainability",
      "MSc in International Management",
    ],
    certifications: [],
    experience:
      "Over 5 years of experience in renewable energy, sustainability research & project development",
    achievements: [
      "Expertise in project planning and human resource management",
      "Strong background in partnership development",
    ],
    expertise:
      "Project planning, human resource management & partnership development",
    image: "/people/board/Smritee.jpg",
    color: "green",
  },
]


// ======================= Promoters ======================================

export const promoters: BoardMember[] = [
  {
    id: 3,
    name: "Mr. Manoj Poudel",
    position: "Advisor",
    role: "Strategic Advisory",
    education: ["MSc from London School of Economics (Chevening Scholar)"],
    certifications: [],
    experience: "Extensive experience in investment and international affairs",
    achievements: [
      "Chairperson/Executive Committee Member of the Investment and International Affairs Forum",
      "Key role at the Federation of Nepalese Chambers of Commerce and Industry (FNCCI)",
    ],
    expertise: "Investment strategy and international business development",
    image: "/people/board/Manoj.jpg",
    color: "blue",
  },
  {
    id: 2,
    name: "Mr. Sambridh Ghimire",
    position: "Promoter",
    role: "",
    education: [
      "BA LLB from the National Law School of India University, Bangalore",
    ],
    certifications: [],
    experience:
      "Extensive experience advising institutions including i-PAC, and the Office of the Chief Minister of West Bengal.",
    achievements: [
      "Director of Institute for Government and Public Affairs (IGPA)",
      "Widely published columnist in national and international publications",
    ],
    expertise:
      "Governance, Public policy, political consulting and strategic public affairs across South Asia",
    image: "/people/board/sambridh (1).jpeg",
    color: "green",
  },
  {
    id: 1,
    name: "Mr. Nischal Singh Bhandari",
    position: "Promoter",
    role: "",
    education: ["Bachelor of Arts, Public Relations/Image Management"],
    certifications: [],
    experience:
      "Over 7 years of experience in communication, partnership and brand visibility",
    achievements: [
      "Seasoned growth and partnership expert",
      "Strong communication and brand management skills",
    ],
    expertise:
      "Growth and Partnership Expert with focus on communication strategies",
    image: "/people/board/Nischal.jpg",
    color: "blue",
  },
]



// ======================= Team Members ======================================

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Er. Tapendra Chand",
    position: "Chairperson & Technical Lead",
    department: "Executive Leadership",
    expertise:
      "Large Scale solar and hydro project management in The Investment Board Nepal",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "Project Management",
      "Solar & Hydro Systems",
      "Investment Board Relations",
      "Technical Leadership",
    ],
    type: "team",
    image: "/people/team/Tapendra.jpg",
  },
  {
    id: 3,
    name: "Mr. Sworup Dhungana",
    position: "Financial Analyst",
    department: "Finance",
    expertise:
      "Chartered Accountant with expertise in financial modelling of commercial solar projects",
    icon: Calculator,
    color: "from-orange-500 to-red-500",
    skills: [
      "Financial Modelling",
      "Chartered Accountancy",
      "Commercial Solar Analysis",
      "Investment Planning",
    ],
    type: "team",
    image: "/people/team/Sworup.jpg",
  },
  {
    id: 4,
    name: "Ms. Dikshya Pokharel",
    position: "Legal & Finance Specialist",
    department: "Legal & Compliance",
    expertise:
      "Experience in legal compliance and financing of energy projects",
    icon: Scale,
    color: "from-indigo-500 to-purple-500",
    skills: [
      "Legal Compliance",
      "Energy Project Financing",
      "Regulatory Affairs",
      "Contract Management",
    ],
    type: "team",
    image: "/people/team/Dikshya.jpg",
  },
  {
    id: 5,
    name: "Ms. Rendira Maharjan",
    position: "Solar PV Designer",
    department: "Engineering",
    expertise: "Solar PV design specialist",
    icon: Settings,
    color: "from-pink-500 to-rose-500",
    skills: [
      "Solar PV Design",
      "System Optimization",
      "Technical Documentation",
      "Performance Analysis",
    ],
    type: "team",
    image: "/people/team/Rendira.jpg",
  },
  {
    id: 6,
    name: "Ms. Pratikshya Pandey",
    position: "Finance Officer",
    department: "Finance",
    expertise:
      "Finance Officer with expertise in financial management and operations",
    icon: Calculator,
    color: "from-purple-600 to-blue-600",
    skills: [
      "Financial Management",
      "Operations",
      "Budget Planning",
      "Financial Analysis",
    ],
    type: "team",
    image: "/people/team/Pratikshya.jpg",
  },
  {
    id: 7,
    name: "Ms. Sarita Adhikari",
    position: "Finance Manager",
    department: "Finance",
    expertise:
      "Chartered Accountant with expertise in accounting, financial reporting and risk management",
    icon: Calculator,
    color: "from-purple-600 to-blue-600",
    skills: [
      "Financial Modelling",
      "Investment Planning",
      "Financial Reporting",
      "Risk Management",
    ],
    type: "team",
    image: "/people/team/Sarita.jpeg",
  },
  {
    id: 8,
    name: "Er. Abhay Kumar Karna",
    position: "Site Supervisor",
    department: "Renewable Energy",
    expertise:
      "Renewable energy professional with expertise in rooftop solar systems, grid-connected renewable energy projects, technical supervision, and solar infrastructure development.",
    icon: Building,
    color: "from-yellow-600 to-orange-600",
    skills: [
      "Project Coordination",
      "Rooftop Solar System Supervision",
      "Feasibility and Site Assessment",
      "Renewable Energy Projects",
    ],
    type: "consultant",
    image: "/people/team/Abhay.jpeg",
  },
  {
    id: 1,
    name: "Er. Rakesh Shrestha",
    position: "Technical Consultant",
    department: "Engineering",
    expertise: "Technical Consultant for Solar Project (Electrical Engineer)",
    icon: Cog,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Electrical Engineering",
      "Solar System Design",
      "Technical Consulting",
      "Project Implementation",
    ],
    type: "consultant",
  },
  {
    id: 2,
    name: "Mr. Sharad Sharma",
    position: "Agricultural Expert",
    department: "Sustainability",
    expertise: "Agricultural Expert related to Agrivoltaics",
    icon: Leaf,
    color: "from-green-600 to-lime-500",
    skills: [
      "Agrivoltaics",
      "Agricultural Systems",
      "Sustainable Farming",
      "Land Use Optimization",
    ],
    type: "consultant",
  },
  {
    id: 3,
    name: "Mr. Neelesh Man Shrestha",
    position: "Environmental Specialist",
    department: "Environment",
    expertise:
      "Environmental Specialist focusing on sustainable energy solutions",
    icon: Leaf,
    color: "from-teal-500 to-green-600",
    skills: [
      "Environmental Assessment",
      "Sustainability Research",
      "Impact Analysis",
      "Green Technology",
    ],
    type: "consultant",
  },
  {
    id: 4,
    name: "Er. Dipesh Kharel",
    position: "Structural Engineer",
    department: "Engineering",
    expertise: "Rooftop Structural Analysis for Solar Project",
    icon: Building,
    color: "from-gray-600 to-blue-600",
    skills: [
      "Structural Analysis",
      "Rooftop Solar Systems",
      "Civil Engineering",
      "Safety Assessment",
    ],
    type: "consultant",
  },
  {
    id: 5,
    name: "Er. Bishal Khatiwada",
    position: "Civil Engineer",
    department: "Engineering",
    expertise: "Civil Engineer with expertise related to solar project",
    icon: Building,
    color: "from-yellow-600 to-orange-600",
    skills: [
      "Civil Engineering",
      "Infrastructure Development",
      "Site Planning",
      "Construction Management",
    ],
    type: "consultant",
  },
]

export const advisors:BoardMember[] =   [{
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