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
  mongodb,
  git,
  figma,
  python,
  docker,
  kubernetes,
  infratech,
  iub,
  wipro,
  ceg,
  fakenews,
  yard,
  speech,
  plant,
  underwater,
  Mimo,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  flowersML,
  banking,
  jobit,
  tripguide,
  tinkuproperty,
  threejs,
  cohortz,
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
    id: "publications",
    title: "Publications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Cloud Solution Architect",
    icon: creator,
  },
  {
    title: "Data Aspirant",
    icon: mobile,
  },
  // {
  //   title: "Full Stack Developer",
  //   icon: backend,
  // },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Cohortz",
    icon: cohortz,
    iconBg: "#ffffff",
    date: "Nov 2024 - Present",
    points: [
      "Built a fully automated resume-generation system, dynamically creating unique, job-specific resumes for each application, leveraging user-provided inputs and custom logic to eliminate manual effort post-setup.",
      "Developed the end-to-end notifications system, ensuring users are seamlessly informed about job applications and role updates with 100% accuracy while maintaining a fully automated backend process.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Infra Tech Engineering",
    icon: infratech,
    iconBg: "#ffffff",
    date: "Jun 2024 - Nov 2024",
    points: [
      "Developed a payroll estimation tool that processes employee timesheets, calculating salary breakdowns based on normal, overtime, and night shift hours, ensuring 100% accuracy in salary forecasting before submission.",
      "Built an interactive dashboard allowing employees to enter work hours, view estimated earnings, track remaining PTO, and generate detailed salary breakdown PDFs, improving payroll transparency and reducing HR queries by 40%",
    ],
  },
  {
    title: "Associate Instructor",
    company_name: "Indiana University Bloomington",
    icon: iub,
    iconBg: "#990000",
    date: "Aug 2023 - May 2024",
    points: [
      "For CSCI-P 565 (Software Engineering): Boosted team productivity by 20% through agile practices and full-stack guidance, ensuring timely delivery of high-quality projects.",
      "Managed website development for tour management, fitness tracking, and booking systems, ensuring successful implementation and performance throughout the course.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "#ffffff",
    date: "Jul 2021 - Jun 2022",
    points: [
      "Developed a responsive front-end for the Delivery Management System, raising customer satisfaction by 20% with chatbot integration.",
      "Implemented secure logins, advanced search functionality, and flexible item matching, boosting team management efficiency by 20% and customer bookings by 15%.",
      "Implemented real-time tracking for customers, managers, and drivers, optimizing transparency and logistics.",
    ],
  },
  {
    title: "Research Assistantship",
    company_name: "College of Engineering Guindy, Anna University",
    icon: ceg,
    iconBg: "#ffffff",
    date: "Jul 2018 - Aug 2020",
    points: [
      "Published 14 research papers at international conferences under Dr. Seetharaman.",
      "Developed automation solutions for Text-to-Speech, assistive tech, robotics, and anti-collision systems.",
      "Achieved over 95% accuracy in software projects, including Machine Learning applications for fake news detection and pneumonia prediction.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const publications = [
  {
    title: "Fake News Detection using Machine Learning",
    year: "2021",
    publication: "Materials Today: Proceedings",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2214785321073442",
    image: fakenews,
  },
  {
    title: "Efficient Algorithm for Yard Trimmer Design",
    year: "2021",
    publication: "Springer",
    url: "https://link.springer.com/chapter/10.1007/978-981-16-7657-4_66",
    image: yard,
  },
  {
    title: "Design of Speech Device Software using OCR",
    year: "2021",
    publication: "IEEE",
    url: "https://ieeexplore.ieee.org/abstract/document/9617343",
    image: speech,
  },
  {
    title: "A Smart Irrigation System using Plant Maintenance Bot",
    year: "2022",
    publication: "Springer",
    url: "https://link.springer.com/chapter/10.1007/978-981-19-1012-8_61",
    image: plant,
  },
  {
    title: "Li-Fi technique in Underwater Communication",
    year: "2022",
    publication: "Materials Today: Proceedings",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2214785321074095",
    image: underwater,
  },
  {
    title: "Dual Band MIMO Antenna for 5G Applications",
    year: "2021",
    publication: "Springer",
    url: "https://link.springer.com/chapter/10.1007/978-981-19-1111-8_60",
    image: Mimo,
  },

  // Add more publications as needed
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Tour Management",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers personalized and curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
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
  // {
  //   name: "Banking App",
  //   description:
  //     "A banking app with a comprehensive finance dashboard that connects multiple bank accounts, displays real-time transactions, and allows you to transfer money to other users seamlessly.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: banking,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Tinku Properties",
    description:
      "A comprehensive real estate application that allows users to search for, rent, and sell properties. The platform features secure account management, advanced property filters, and an interactive map view for seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tinkuproperty, // Replace with the appropriate variable or URL for the app's image
    source_code_link: "https://iconic-estate.onrender.com", // Replace with the actual repository link
  },
  {
    name: "Image Classification",
    description:
      "Curated a dataset of 3000+ images with preprocessing and augmentation. Fine-tuned VGG16 to 97.59% accuracy and developed a custom neural network achieving 96.38% accuracy.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "transfer learning",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: flowersML,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, publications, projects };
