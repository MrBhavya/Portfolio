import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Bhavya",
  lastName: "Bhardwaj",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Game Developer",
  avatar: "/images/projects/project-01/Bhavya2.jpg",
  email: "bbhardwaj0803@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MrBhavya",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bhavya-bhardwaj88/",
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/919717715773?text=Hello%20(URL%20encoded%20version%20of%20message)",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between Gaming and Reality</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Escape The AI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Bhavya, a Game Developer based in Delhi, India. I specialize in creating immersive game experiences using Unity and Unreal Engine. With a passion for storytelling and interactive design, I aim to push the boundaries of what's possible in gaming.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate and highly motivated Game Developer with hands on experience in C#, Unity, and Unreal Engine. Adept at building immersive gameplay mechanics and interactive worlds, with a strong foundation in software architecture and game development principles. Eager to collaborate with cross-functional teams to bring creative concepts to life and continually grow by embracing new tools and technologies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
        name: "Guru Gobind Singh Indraprastha University | GGSIPU",
        location: "Delhi, India",
        degree: "Bachelor of Technology in Computer Science",
        timeframe: "2021 - 2025",
        cgpa: "8.6",
        description: <>
          Studied Bachelor of Technology in Computer Science.<br />
          CGPA: 8.6
        </>,
      },
      {
        name: "Holy Child Public School | CBSE",
        timeframe: "2018 - 2021",
        xii: {
          year: "2020-21",
          percentage: "76.6%",
        },
        x: {
          year: "2018-19",
          percentage: "82.6%",
        },
        description: <>
          XII Percentage: 76.6% (2020-21)<br />
          X Percentage: 82.6% (2018-19)
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Unity | Unreal Engine",
        description: <>Proficient in using Unity and Unreal Engine for game development.</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "C# | C++",
        description: <>Experienced in C# and C++ programming languages for game logic and performance optimization.</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Blender | Photoshop | VRM studio | Asperite",
        description: <>Skilled in using Blender, Photoshop, VRM Studio, and Aseprite for 3D modeling, texture creation, avatar design, and sprite editing respectively.</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-05.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
