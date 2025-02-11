import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ibrahim",
  lastName: "Dilshad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/projects/project-01/2025011623184300.png",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French","Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/IbrahimDilshad",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ibrahim-dilshad-858128331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/IbrahimzDilshad?t=Vk8aX9qaOvv1SclSMvKmuw&s=09",
  },
  {
    name: "Email",
    icon: "email",
    link: "ibrahimzdilshad@gmail.com",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://youtube.com/@ibrahimcreates?si=W4dPL-cAOHABoYmb",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ibrahim_dilshadsharif?igsh=Y2Q4anUyaXBtbWhq",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and Business Developer</>,
  subline: (
    <>
      I'm Ibrahim, a Web Developer , Designer , Graphic Designer <InlineCode>Businessman</InlineCode>, French Language Expert
      <br /> I am currently working on creating my own businesses.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ibrahim-dilshad-1igxhi/quick-chat",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ibrahim is a Self-Employed enterpreneur with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Skils Sphere",
        timeframe: "2025 - Present",
        role: "Cheif Exective Office",
        achievements: [
          <>
            Also a Instructor of Web Designing and Development 
            
          </>,
          <>
            Currently leading the organization as founder
            
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Screenshot 2025-02-06 023617.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Hum Online Store",
        timeframe: "2023 - 2024",
        role: "E-commerce Incharge",
        achievements: [
          <>
            Leaded organization For Product Management 
            
          </>,
          <>
            Served as E-commerce Store Handler
            
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of The Punjab,Lahore",
        description: <>Studying Becholers In French Language.</>,
      },
      {
        name: "University of The Punjab,Lahore",
        description: <>Web Develpment And E-commerce.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Develpment & Designing",
        description: <>Able to Develop and Design Complex Websites.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Screenshot 2025-01-30 205032.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Screenshot 2025-01-30 210008.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "E-commerce",
        description: <>Able to handle, Create, Manage Leads and More</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "App Designing",
        description: <>Able to Design and Create Android and ios Apps</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Screenshot 2025-01-28 131328.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
