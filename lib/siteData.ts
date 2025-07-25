import HeroAvatar from "@/public/images/hero-avatar.jpg";
import ClientLogo from "@/public/images/client-logo.jpg";
import BlogImg from "@/public/images/blog-img.jpg";
import BlogImg2x from "@/public/images/blog-img@2x.jpg";
import BlogImgWide from "@/public/images/blog-img-wide.jpg";
import PortfolioImg from "@/public/images/LMS.png";
import PortfolioSecondImg from "@/public/images/LMS-2.png"
import PortfolioImgWide from "@/public/images/LMS-WI.png";
import TestimonialAvatar from "@/public/images/testimonial-avatar.jpg";

export const headerData = {
  logo: "Raza",
  navlinks: [
    {
      url: "/#about",
      title: "About",
    },
    {
      url: "/#services",
      title: "Services",
    },
    {
      url: "/#portfolio",
      title: "Portfolio",
    },
    {
      url: "/#awards",
      title: "Awards",
    },
    {
      url: "/#testimonial",
      title: "Testimonial",
    },
    {
      url: "/#blog",
      title: "Blog",
    },
    {
      url: "/#contact",
      title: "Contact",
    },
  ],
};

export const aboutData = {
  mainData: {
    name: "ALI Raza",
    heroAvatar: HeroAvatar,
    biography:
      "Full Stack Developer skilled in building scalable web applications with modern front-end and back-end technologies—turning complex problems into clean, user-focused solutions.",
    projectsDone: "25+",
    yearsOfExperience: "1",
    worldwideClients: "10+",
  },
  skills: [
    {
      name: "Web Development",
    },
    {
      name: "Data Science",
    },
    {
      name: "No-Code/Low-Code Tools",
    },
  ],
  connect: [
    {
      url: "#",
      bootstrapIcon: "bi bi-linkedin",
    },
    {
      url: "#",
      bootstrapIcon: "bi bi-github",
    },
  ],
};

export const servicesData = {
  mainData: {
    title: "Services",
    title2: "What I",
    title2Span: "Do",
  },
  services: [
    {
      number: "01",
      bootstrapIcon: "bi bi-code-slash",
      title: "Full Stack Dev",
      description:
        "Develop scalable MERN stack apps with sleek, responsive UIs and efficient RESTful APIs using Tailwind and Node.js.",
    },
    {
      number: "02",
      bootstrapIcon: "bi bi-bar-chart-line",
      title: "Data Science",
      description:
        "Use data science to analyze data, extract insights, and drive smarter decisions.",
    },
    {
      number: "03",
      bootstrapIcon: "bi bi-lightning-charge",
      title: "Low/No-Code",
      description:
        "Build and deploy web interfaces faster using low-code tools like Bubble and WeWeb.",
    },
  ],
};

export const clientsData = {
  clients: [
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
  ],
};

export const portfolioData = {
  mainData: {
    title: "Portfolio",
    title2: "Recent",
    title2Span: "Works",
    description:
      "Explore some of my latest projects, highlighting creativity, technical skills, and a passion for building modern web experiences.",
  },
  projects: [
    {
      title: "LMS - Learning Management System",
      slug: "lms",
      description:
        "A comprehensive Learning Management System (LMS) developed using the MERN stack, featuring role-based access for admins, instructors, and students. The platform supports course management, user enrollment, and progress tracking within a secure, scalable, and fully responsive environment.",
      keywords:
        "MERN Stack, LMS, Redux, MongoDB, Node.js, React, Express, Education Platform",
      categories: [
        { name: "Full Stack" },
        { name: "Education" },
        { name: "Web Application" },
      ],
      services: [
        { name: "Web Development" },
        { name: "Frontend & Backend Integration" },
        { name: "Responsive UI" },
      ],
      client: "Personal Project",
      duration: "Under development",
      projectLink: {
        title: "View Live Project",
        url: "https://github.com/Ali-Raza-12/Learning-Management-System",
      },
      content: `
          <p class="text-white/70">
            This Learning Management System (LMS) is a full-stack web application designed to streamline online education. Built with the MERN stack and Redux Toolkit, the platform offers seamless role-based access for admins, instructors, and students.
          </p>

          <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Key Features</h5>
          <p class="text-white/70">
            The system includes student registration, course enrollment, and progress tracking. Instructors have access to a dashboard for creating and managing course content, while admins can oversee user management and system settings. The platform also supports JWT-based authentication, secure RESTful APIs, Redux-powered state management, and a fully responsive user interface.
          </p>

          <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Tech Stack</h5>
          <p class="text-white/70">
            Frontend: React.js, Redux Toolkit, Tailwind CSS. Backend: Node.js, Express.js, MongoDB. Authentication: JWT. Tools: Postman, GitHub, VS Code.
          </p>

          <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Project Goals</h5>
          <p class="text-white/70">
            The goal of this project was to enhance the online learning experience through a structured, secure, and intuitive platform. It reflects real-world education use cases and demonstrates my ability to build scalable and maintainable full-stack web applications.
          </p>
        `,

      mainImage: PortfolioImgWide,
      secondImage: PortfolioSecondImg,
      wideImage: PortfolioImg,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 2",
      slug: "project-title-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 3",
      slug: "project-title-3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 4",
      slug: "project-title-4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 5",
      slug: "project-title-5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: false,
    },
    {
      title: "Project Title 6",
      slug: "project-title-6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: false,
    },
  ],
};

export const blogData = {
  mainData: {
    title: "Journal",
    title2: "Blog",
    title2Span: "Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  posts: [
    {
      title: "Blog Post Title",
      slug: "blog-post-title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
  ],
};

export const awardsData = {
  mainData: {
    title: "Certificates",
    title2: "Awa",
    title2Span: "rds",
  },
  awards: [
    {
      title: "Microsoft Certified – Azure AI Fundamentals AI-900",
      date: "2025",
      description:
        "Demonstrated understanding of AI concepts, machine learning.",
    },
    {
      title: "Corvit Certified – AI (ML, DL, DS)",
      date: "2025",
      description:
        "Gained hands-on experience in ML models, deep learning architectures, and data science workflows.",
    },
    {
      title: "SiliconWhiz Certified – Full Stack Web Development",
      date: "2024",
      description:
        "Completed training at SiliconWhiz covering front-end (React, HTML/CSS) and back-end (Node.js, MongoDB) technologies.",
    },
    {
      title: "SmartSEO Certified – Frontend Development",
      date: "2022",
      description:
        "Gained practical skills in creating dynamic and responsive web interfaces.",
    },
  ],
};

export const testimonialData = {
  testimonial: [
    {
      name: "Alexander Warren",
      avatar: TestimonialAvatar,
      jobTitle: "CTO - Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      name: "Alexander Warren",
      avatar: TestimonialAvatar,
      jobTitle: "CTO - Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ],
};

export const contactData = {
  mainData: {
    title: "Contact",
    title2: "Let's",
    title2Span: "Talk",
    phone: "+123 456 7890",
    email: "contact@flatheme.net",
  },
};

export const mapData = {
  mainData: {
    lat: -3.745,
    lng: -38.523,
  },
};

export const footerData = {
  copyWriteText: "© 2025 Ali Raza Portfolio. All rights reserved.",
};
