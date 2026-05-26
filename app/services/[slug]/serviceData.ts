// app/services/[slug]/serviceData.ts

// Service interface
export interface ServiceStep {
    title: string;
    description: string;
  }
  
  export interface ServiceTestimonial {
    quote: string;
    author: string;
    position: string;
  }
  
  export interface RelatedProject {
    slug: string;
    title: string;
    category: string;
  }
  
  export interface ServiceStat {
    value: string;
    label: string;
  }
  
  export interface ServiceData {
    title: string;
    iconColor: string;
    description: string;
    headerBg: string;
    accentColor: string;
    overview: string;
    keyFeatures: string[];
    benefits: string[];
    process: ServiceStep[];
    testimonial: ServiceTestimonial;
    projects: RelatedProject[];
    stats: ServiceStat[];
  }
  
  // Service data mapping
  const servicesData: Record<string, ServiceData> = {
    'solar': {
      title: 'Solar Energy Systems',
      iconColor: '#4361ee',
      description: 'We design, develop, and install solar photovoltaic (PV) systems customized to meet the specific requirements of each client.',
      headerBg: 'bg-blue-900',
      accentColor: '#4ade80',
      overview: `
        Our solar energy solutions are tailored to meet specific client needs, whether for residential, 
        commercial, or industrial applications. We handle everything from initial assessment and design 
        to installation, commissioning, and ongoing maintenance. Our team of experts utilizes the latest 
        technologies to maximize efficiency and minimize costs, ensuring that each system delivers optimal 
        performance throughout its lifespan.
      `,
      keyFeatures: [
        'Customized system design based on energy needs and site conditions',
        'High-efficiency solar panels and components from trusted manufacturers',
        'Battery storage integration for energy independence',
        'Smart monitoring systems for real-time performance tracking',
        'Grid-tied and off-grid solutions available',
        'Rooftop, ground-mounted, and solar carport options',
      ],
      benefits: [
        'Reduced electricity bills and operating costs',
        'Lower carbon footprint and environmental impact',
        'Energy independence and security',
        'Increased property value',
        'Government incentives and tax benefits',
        'Reliable power supply with minimal maintenance',
      ],
      process: [
        {
          title: 'Initial Consultation',
          description: 'We begin with a thorough consultation to understand your energy needs, budget, and goals.'
        },
        {
          title: 'Site Assessment',
          description: 'Our team conducts a comprehensive evaluation of your site to determine solar potential and optimal system design.'
        },
        {
          title: 'Customized Design',
          description: 'We create a tailored solar system design that maximizes energy production and efficiency for your specific location.'
        },
        {
          title: 'Proposal and Agreement',
          description: 'We provide a detailed proposal outlining system specifications, costs, expected performance, and ROI.'
        },
        {
          title: 'Installation',
          description: 'Our experienced technicians handle the installation with minimal disruption to your home or business.'
        },
        {
          title: 'Commissioning',
          description: 'We thoroughly test the system to ensure everything is working correctly and meeting performance standards.'
        },
        {
          title: 'Monitoring and Maintenance',
          description: 'We provide ongoing support and maintenance services to ensure optimal system performance over time.'
        }
      ],
      testimonial: {
        quote: 'The solar installation has exceeded our expectations. Not only are we saving significantly on our energy bills, but the system was installed professionally with minimal disruption to our business operations.',
        author: 'Rajendra Sharma',
        position: 'CEO, Himalayan Industries Ltd.',
      },
      projects: [
        // {
        //   slug: '1mw-solar',
        //   title: '1MW Solar PV System',
        //   category: 'Solar Energy',
        // },
        {
          slug: 'dhanusha-assessment',
          title: 'Dhanusha Solar Assessment',
          category: 'Feasibility Assessment',
        },
      ],
      stats: []
    },
    'renewable': {
      title: 'Renewable Energy Solutions',
      iconColor: '#22c55e',
      description: 'We deliver comprehensive solutions for the development of renewable energy, including solar, wind, thermal, and bioenergy systems.',
      headerBg: 'bg-green-800',
      accentColor: '#22c55e',
      overview: `
        Our renewable energy solutions portfolio encompasses a wide range of clean energy technologies, 
        helping organizations and communities transition to sustainable power sources. We develop 
        integrated systems that combine different renewable technologies to create reliable, efficient 
        energy solutions tailored to specific needs and geographic conditions.
      `,
      keyFeatures: [
        'Comprehensive renewable energy portfolio including solar, wind, hydro, and bioenergy',
        'Hybrid system integration combining multiple renewable sources',
        'Energy storage solutions for consistent power supply',
        'Microgrids for energy independence in remote locations',
        'Smart energy management systems',
        'Scalable solutions for growing energy needs',
      ],
      benefits: [
        'Diversified energy sources for greater reliability',
        'Reduced dependence on fossil fuels',
        'Lower and more predictable energy costs',
        'Compliance with environmental regulations and CSR goals',
        'Community development through local energy projects',
        'Resilience against conventional energy price fluctuations',
      ],
      process: [
        {
          title: 'Resource Assessment',
          description: 'We evaluate available renewable resources in your area, including solar irradiance, wind patterns, and available biomass.'
        },
        {
          title: 'Feasibility Analysis',
          description: 'Our team conducts technical and economic feasibility studies to determine the most viable renewable energy mix.'
        },
        {
          title: 'Integrated System Design',
          description: 'We design a balanced renewable energy system that maximizes reliability and efficiency.'
        },
        {
          title: 'Project Development',
          description: 'Our experts manage the complete project development process, including permitting, financing, and stakeholder engagement.'
        },
        {
          title: 'Implementation',
          description: 'We oversee the construction and installation of all renewable energy components.'
        },
        {
          title: 'System Integration',
          description: 'Our technical team ensures all renewable sources work together seamlessly with energy storage and grid connections.'
        },
        {
          title: 'Ongoing Management',
          description: 'We provide continual monitoring, maintenance, and optimization services to ensure maximum system performance.'
        }
      ],
      testimonial: {
        quote: 'Working with your team allowed us to successfully transition to 100% renewable energy for our operations. The integrated approach combining solar, small hydro, and biomass has provided us with reliable power while significantly reducing our environmental footprint.',
        author: 'Arun Patel',
        position: 'Sustainability Director, Everest Resort Group',
      },
      projects: [
        {
          slug: 'community-microgrid',
          title: 'Community Microgrid',
          category: 'Smart Grid',
        },
        {
          slug: 'mini-hydro',
          title: 'Mini-Hydro Installation',
          category: 'Hydropower',
        },
      ],
      stats: []
    },
    'hydropower': {
      title: 'Hydropower Development',
      iconColor: '#0ea5e9',
      description: 'We assist in the development, operation, and maintenance of small, mini, and large-scale hydropower projects.',
      headerBg: 'bg-blue-800',
      accentColor: '#0ea5e9',
      overview: `
        Our hydropower development services cover the entire lifecycle of hydroelectric projects, from 
        initial resource assessment and feasibility studies to design, construction, commissioning, and 
        operational management. We specialize in environmentally sensitive approaches that maximize 
        energy generation while minimizing ecological impacts.
      `,
      keyFeatures: [
        'Small, mini, and micro hydropower project development',
        'Run-of-river hydroelectric solutions',
        'Environmentally friendly turbine technologies',
        'Integration with existing water infrastructure',
        'Modernization and upgrading of existing facilities',
        'Robust control and monitoring systems',
      ],
      benefits: [
        'Reliable baseload renewable energy generation',
        'Long operational lifespan with minimal maintenance',
        'No fuel costs and low operational expenses',
        'Complementary to other renewable energy sources',
        'Can include multipurpose benefits (irrigation, flood control)',
        'Local economic development through clean energy jobs',
      ],
      process: [
        {
          title: 'Resource Assessment',
          description: 'We evaluate water resources, flow rates, and head potential to determine hydropower feasibility.'
        },
        {
          title: 'Environmental Impact Study',
          description: 'Our team conducts thorough environmental assessments to ensure sustainable development.'
        },
        {
          title: 'Hydrological Analysis',
          description: 'We perform detailed flow studies and climate impact analysis to ensure long-term viability.'
        },
        {
          title: 'Civil Works Design',
          description: 'Our engineers develop optimal designs for dams, weirs, channels, and powerhouses.'
        },
        {
          title: 'Electromechanical Engineering',
          description: 'We select and design appropriate turbine systems, generators, and control equipment.'
        },
        {
          title: 'Construction Management',
          description: 'Our team oversees the construction process, ensuring quality, safety, and environmental compliance.'
        },
        {
          title: 'Commissioning and Operation',
          description: 'We manage system testing, grid connection, and provide operational training and support.'
        }
      ],
      testimonial: {
        quote: 'The mini-hydropower plant your team developed has transformed our community. Not only do we now have reliable electricity, but the project was completed with minimal environmental impact and has created sustainable local employment.',
        author: 'Bishnu Gurung',
        position: 'Chairperson, Lamjung Community Electricity Cooperative',
      },
      projects: [
        {
          slug: 'mini-hydro',
          title: 'Mini-Hydro Installation',
          category: 'Hydropower',
        },
        {
          slug: 'community-hydro',
          title: 'Community Hydropower Project',
          category: 'Hydropower',
        },
      ],
      stats: []
    },
    'feasibility': {
      title: 'Feasibility Studies',
      iconColor: '#22c55e',
      description: 'Our team performs thorough feasibility analyses for energy initiatives, addressing technical, financial, environmental, and social factors.',
      headerBg: 'bg-green-800',
      accentColor: '#22c55e',
      overview: `
        Our comprehensive feasibility studies provide detailed evaluations of proposed energy projects, 
        examining their technical viability, financial profitability, environmental impacts, and social 
        implications. We deliver data-driven insights that guide investment decisions, regulatory 
        approvals, and project planning.
      `,
      keyFeatures: [
        'Technical feasibility assessments',
        'Financial and economic analysis',
        'Environmental impact evaluations',
        'Social acceptability studies',
        'Regulatory compliance reviews',
        'Risk assessment and mitigation planning',
      ],
      benefits: [
        'Informed decision-making for project investment',
        'Early identification of potential challenges',
        'Optimization of project design and implementation',
        'Improved project financing opportunities',
        'Streamlined regulatory approval process',
        'Reduced project development risks',
      ],
      process: [
        {
          title: 'Project Scoping',
          description: 'We define the project parameters, objectives, and assessment criteria.'
        },
        {
          title: 'Data Collection',
          description: 'Our team gathers comprehensive data related to technical, environmental, social, and economic factors.'
        },
        {
          title: 'Technical Analysis',
          description: 'We evaluate technological options, resource availability, and infrastructure requirements.'
        },
        {
          title: 'Financial Modeling',
          description: 'Our experts develop detailed financial models including capital costs, operational expenses, revenue projections, and ROI analysis.'
        },
        {
          title: 'Environmental Assessment',
          description: 'We conduct environmental studies to identify potential impacts and mitigation measures.'
        },
        {
          title: 'Social Impact Evaluation',
          description: 'Our team assesses community impacts, benefits, and engagement strategies.'
        },
        {
          title: 'Comprehensive Reporting',
          description: 'We deliver detailed reports with clear recommendations and implementation roadmaps.'
        }
      ],
      testimonial: {
        quote: 'The feasibility study provided by your team was instrumental in securing project financing. The thorough analysis and clear presentation of data gave our investors the confidence to move forward with the project.',
        author: 'Sunita Thapa',
        position: 'Project Director, Himalayan Green Energy',
      },
      projects: [
        {
          slug: 'dhanusha-assessment',
          title: 'Dhanusha Solar Assessment',
          category: 'Feasibility Assessment',
        },
        {
          slug: 'tariff-study',
          title: 'Tariff Fixation Study',
          category: 'Feasibility Study',
        },
      ],
      stats: []
    },
    'consultancy': {
      title: 'Consultancy Services',
      iconColor: '#3b82f6',
      description: 'We provide expert consultancy services within the energy sector, offering strategic guidance in technical, financial, and policy matters.',
      headerBg: 'bg-blue-800',
      accentColor: '#3b82f6',
      overview: `
        Our energy consultancy services provide expert guidance and support across all aspects of 
        energy projects and strategy. Drawing on our extensive experience and specialized knowledge, 
        we help clients navigate complex challenges, identify opportunities, and implement effective 
        solutions that drive success in the evolving energy landscape.
      `,
      keyFeatures: [
        'Energy strategy development',
        'Technical advisory services',
        'Financial and economic consulting',
        'Policy and regulatory guidance',
        'Project development support',
        'Operational optimization',
      ],
      benefits: [
        'Access to specialized expertise and industry knowledge',
        'Improved decision-making through strategic insights',
        'Cost reduction through operational efficiency',
        'Risk mitigation and compliance assurance',
        'Enhanced project development and implementation',
        'Competitive advantage in a dynamic market',
      ],
      process: [
        {
          title: 'Needs Assessment',
          description: 'We work closely with clients to understand their specific challenges, goals, and requirements.'
        },
        {
          title: 'Opportunity Identification',
          description: 'Our experts analyze the situation to identify key opportunities and potential solutions.'
        },
        {
          title: 'Strategic Planning',
          description: 'We develop customized strategies and recommendations based on project-specific needs.'
        },
        {
          title: 'Implementation Support',
          description: 'Our team provides guidance and assistance throughout the implementation process.'
        },
        {
          title: 'Monitoring and Evaluation',
          description: 'We assess outcomes against objectives and identify areas for further improvement.'
        },
        {
          title: 'Knowledge Transfer',
          description: 'We ensure clients gain valuable insights and capabilities through the consulting process.'
        },
        {
          title: 'Ongoing Support',
          description: 'We provide continued advisory services to address evolving challenges and opportunities.'
        }
      ],
      testimonial: {
        quote: 'The strategic guidance provided by your consultancy team helped us navigate the complex regulatory environment and develop a robust energy strategy that aligned with our business objectives. Their expertise was invaluable.',
        author: 'Prakash Adhikari',
        position: 'Director of Operations, Nepal Industrial Group',
      },
      projects: [
        {
          slug: 'energy-audit',
          title: 'Industrial Energy Audit',
          category: 'Energy Efficiency',
        },
        {
          slug: 'tariff-study',
          title: 'Tariff Fixation Study',
          category: 'Feasibility Study',
        },
      ],
      stats: []
    },
    'project-management': {
      title: 'Project Management',
      iconColor: '#22c55e',
      description: 'We manage projects through their complete lifecycle—from the initial planning and design phase to financing, construction, and commissioning.',
      headerBg: 'bg-green-800',
      accentColor: '#22c55e',
      overview: `
        Our comprehensive project management services ensure successful execution of energy projects 
        from conception to completion. We take a systematic approach to planning, organizing, and 
        overseeing all aspects of project implementation, ensuring that objectives are met on time, 
        within budget, and to the highest quality standards.
      `,
      keyFeatures: [
        'End-to-end project management',
        'Schedule and budget control',
        'Quality assurance protocols',
        'Risk management strategies',
        'Stakeholder coordination',
        'Procurement and contract management',
      ],
      benefits: [
        'Streamlined project execution',
        'Cost efficiency and budget adherence',
        'Timely project completion',
        'Quality control and standards compliance',
        'Effective risk mitigation',
        'Transparent communication and reporting',
      ],
      process: [
        {
          title: 'Project Initiation',
          description: 'We establish project parameters, objectives, and success criteria with key stakeholders.'
        },
        {
          title: 'Comprehensive Planning',
          description: 'Our team develops detailed project plans including schedules, budgets, resources, and risk management strategies.'
        },
        {
          title: 'Procurement Management',
          description: 'We manage vendor selection, contract negotiation, and procurement processes.'
        },
        {
          title: 'Implementation Oversight',
          description: 'Our project managers coordinate and supervise all construction and installation activities.'
        },
        {
          title: 'Quality Control',
          description: 'We implement rigorous quality assurance processes throughout project execution.'
        },
        {
          title: 'Progress Monitoring',
          description: 'Our team tracks project progress, ensuring adherence to schedule and budget.'
        },
        {
          title: 'Project Closure',
          description: 'We manage final testing, commissioning, handover, and documentation.'
        }
      ],
      testimonial: {
        quote: 'The project management team demonstrated exceptional professionalism in handling our complex renewable energy installation. Their meticulous planning and execution ensured the project was completed on time and within budget, despite challenging conditions.',
        author: 'Ramesh Bhattarai',
        position: 'Chief Engineer, Kathmandu Metropolitan City',
      },
      projects: [
        // {
        //   slug: '1mw-solar',
        //   title: '1MW Solar PV System',
        //   category: 'Solar Energy',
        // },
        {
          slug: 'community-microgrid',
          title: 'Community Microgrid',
          category: 'Smart Grid',
        },
      ],
      stats: []
    },
  };
  
  // Function to retrieve service data by slug
  export const getServiceData = (slug: string): ServiceData => {
    // Return the data for the requested slug, or a default object if not found
    return servicesData[slug] || {
      title: 'Service Details',
      iconColor: '#4361ee',
      description: 'Service description not available.',
      headerBg: 'bg-blue-900',
      accentColor: '#4ade80',
      overview: 'Service overview not available.',
      keyFeatures: [],
      benefits: [],
      process: [],
      testimonial: {
        quote: '',
        author: '',
        position: '',
      },
      projects: [],
      stats: []
    };
  };