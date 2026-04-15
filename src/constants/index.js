
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    modyo,
    xepelin,
    digbang,
    almundo,
    acidlabs,
    olx,
    pasap,
    modyo_screen,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "experience",
      title: "Work Experience",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Acid Labs",
      employment: "Full-time",
      location: "Argentina · Remote",
      icon: acidlabs,
      iconBg: "#0b1f17",
      date: "Jun 2024 - Present · 1 yr 11 mos",
      intro_heading: "Role in Airtalk (LATAM Airlines)",
      intro:
        "I am part of the team behind Airtalk, LATAM Airlines' strategic chatbot that translates natural language into SQL queries through Large Language Models (LLMs), enabling business users to access and analyze complex datasets without technical knowledge. I also contribute to the design of the AI-driven analytics layer, enhancing reporting processes, operational metrics, and data insights.",
      points: [
        "Lead the definition and curation of business rules and usage notes to ensure semantic accuracy in query generation.",
        "Develop and maintain context shots that guide the model in handling evolutionary queries, date filters, and key airline metrics such as FO, ASK, and RPK.",
        "Collaborate on prompt engineering and automated evaluation pipelines, improving robustness and consistency of model outputs.",
        "Drive the application of AI for flight operations and financial control, aligning advanced analytics with business needs.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Modyo",
      icon: modyo,
      iconBg: "#383E56",
      date: "Apr 2023 - Apr 2024",
      points: [
        "I had the privilege of contributing to a highly innovative and dynamic company, where I worked on a cutting-edge platform centered around Microfrontend architecture. I played a key role in a project dedicated to maintaining and enhancing the digital interface of a major Chilean bank.",
        "In this role, I utilized a diverse set of technologies, including Vue, Figma, Git, Vanilla JavaScript, SCSS, and Github Actions, ensuring the delivery of high-quality solutions on a daily basis.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Xepelin",
      icon: xepelin,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Nov 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Digbang",
      icon: digbang,
      iconBg: "#383E56",
      date: "Jan 2020 - Apr 2022",
      points: [
        "I joined the Frontend team and had the opportunity to contribute to a fascinating project from its inception to the MVP presentation.",
        "Also, I participated in a interdisciplinary team for the OLX company in his car selling vertical, developing new features and landings for Chile, Mexico and Colombia.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Almundo",
      icon: almundo,
      iconBg: "#E6DEDD",
      date: "Nov 2017 - Dec 2019",
      points: [
        "As a part of the FE team in the flight department. we developed new functionalities for the web app, in an interdisciplinary approach with design and backend team. We organised our objectives in agile scrum methodology.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "OLX Autos",
      description:
        "OLX Autos is an online platform that facilitates the buying and selling of cars, providing a reliable and convenient experience for users looking for new or used vehicles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: olx,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pasap",
      description:
        "Pasap Brokers is an application that streamlines the process for insurance brokers by providing tools for managing policies, clients, and claims efficiently on a single platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: pasap,
      source_code_link: "https://github.com/",
    },
    {
      name: "Modyo",
      description:
        "Modyo is a digital experience platform that helps businesses create, manage, and optimize web and mobile applications for enhanced customer engagement and digital transformation.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: modyo_screen,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  