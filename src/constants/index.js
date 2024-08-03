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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  flowersML,
  banking,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Cloud Solution Architect",
    icon: creator,
  },
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
    title: "ITS Engineer",
    company_name: "Infra Tech Engineering",
    icon: infratech,
    iconBg: "#ffffff",
    date: "Jun 2024 - Present",
    points: [
      "Integrated GPS equipment with satelite technology for precise site assessments, utilizing MicroStation and AutoCAD for area and volume calculations, ensuring elevation, coordinates, and benchmark verifications.",
      "Optimized traffic management systems by inspecting and enhancing road sensor data collection software processes, applying machine learning algorithms to improve traffic light control efficiency and reduce congestion.",
      "Designed robust database management systems for traffic data, integrating AWS cloud solutions for scalable and secure infrastructure; ensured efficient storage, retrieval, and data integrity optimizing system performance.",
    ],
  },
  {
    title: "Associate Instructor",
    company_name: "Indiana University Bloomington",
    icon: iub,
    iconBg: "#990000",
    date: "Aug 2023 - May 2024",
    points: [
      "Associate Instructor for the course CSCI-P 565 (Software Engineering) under Prof. Hamidreza Bahramian.",
      "Implemented agile practices and provided full-stack guidance to software engineering teams, resulting in a 20% increase in team productivity. Oversaw timely delivery of high-quality final products, meeting semester timelines.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "#ffffff",
    date: "Jul 2021 - Jun 2022",
    points: [
      "Architected responsive front-end for Delivery Management System, ensuring tailored user experiences (UX) for customers, delivery managers, and drivers. Boosting customer satisfaction by 20% with an integrated, omnichannel chatbot.",
      "Secure logins (OAuth & Duo) empower users. Advanced search boosts manager team management by 20%, optimizing delivery logistics. Flexible item matching (any type) increases customer bookings by 15%, enhancing satisfaction.",
      "Live map tracking empowers informed decisions: Customers follow deliveries with unique IDs, managers monitor driver locations, and drivers update positions in real time, fostering transparency and optimized logistics.",
    ],
  },
  {
    title: "Research Assistantship",
    company_name: "College of Engineering Guindy, Anna University",
    icon: ceg,
    iconBg: "#ffffff",
    date: "Jul 2018 - Aug 2020",
    points: [
      "Published 14 research papers at international conferences under the guidance of Dr. Seetharaman, Sr. Asst. Prof.",
      "Designed and developed software and hardware automation solutions for diverse applications, including Text-to-Speech, assistive tech for the visually impaired, robotics for plant maintenance, grass cutting, and anti-collision systems.",
      "As a web developer, achieved over 95% accuracy in software-driven projects, applying strong problem solving skills in Machine Learning-based applications such as fake news detection and pneumonia prediction.",
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

// export const publications = [
//   {
//     name: "Publication Title 1",
//     url: "https://example.com/publication1",
//     image: "/path/to/image1.jpg",
//     publicationName: "Journal Name 1",
//     year: 2021,
//   },
//   {
//     name: "Publication Title 2",
//     url: "https://example.com/publication2",
//     image: "/path/to/image2.jpg",
//     publicationName: "Journal Name 2",
//     year: 2022,
//   },
//   // Add more publications as needed
// ];

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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers personalized and curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
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
    image: tripguide,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Banking App",
    description:
      "A banking app with a comprehensive finance dashboard that connects multiple bank accounts, displays real-time transactions, and allows you to transfer money to other users seamlessly.",
    tags: [
      {
        name: "nextjs",
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
    image: banking,
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
