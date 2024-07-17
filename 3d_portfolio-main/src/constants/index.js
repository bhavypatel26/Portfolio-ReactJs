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
    
    tailwind,
    nodejs,
    mongodb,
    git,
    // netlify,
  
    starbucks,
    tesla,
    
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN Developer",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "netlify",
    //   icon: netlify,
    // },
    
  ];
  
  const experiences = [
    {
      title: "LDRP Institute Of Technology",
      company_name: "Gandhinagar",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Oct 2021 - June 2025",
      points: [
        "Final year CSE student , pursuing a B.Tech degree.",
        "Focus Areas : Working on JavaScript and its frameworks.",
        "Experience : Completed an internship in full stack development, contributing to both backend and frontend development.",
        "Certifications : Holds an NPTEL and various hackathon's certificates.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company_name: "The Special Character",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2024 - June 2024",
      points: [
        " Enhancing my skills in creating comprehensive and robust Hostel Management System. ",
        "Developed and maintained server-side logic using NodeJs and Built responsive and dynamic user interfaces using ReactJs. ",
        "Utilized Git and GitHub for version control, ensuring code integrity and facilitating collaboration through branching, merging, and pull requests. ",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "Led a team to victory in a company-organized hackathon, securing first prize for developing Hostel Management Sys. ",
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
      name: "HMS",
      description:
        "Developed a comprehensive and robust web-based system to manage hostel operations efficiently, providing services for students and administrative staff. ",
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
          name: "mern",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Blog MERN",
      description:
        "Web application that enables users to publish their own stories or blogs , also Users can like and comment on posts and interact with other users. ",
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
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Invoice Generator",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      // source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };