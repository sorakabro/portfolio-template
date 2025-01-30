let info = {
  name: "Benjamin Oldén",
  logo_name: "Benjamin",
  flat_picture: require("./src/assets/portrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "Welcome 👋 I'm a Software engineer with 7+ years experience designing highly scalable web applications. Works in a team as a Senior Software engineer working on different software solutions with a focus on delivering measurable value to organizations. Highly proficient in Javascript, React.js, Vue.js, Node.js and Nest.js. Has strong industrial experience.",
  links: {
    linkedin: "https://www.linkedin.com/in/benjamin-olden",
    github: "https://github.com/sorakabro",
    resume:
      "https://github.com/sorakabro/portfolio-template/blob/main/src/assets/pdfs/Resume.pdf",
    mail: "mailto:contact@benjaminolden.com",
  },
  education: [
    {
      name: "Högskolan Väst",
      place: "Sweden",
      date: "2018 - 2019",
      degree: "Computer Science",
      description: "Computer science courses",
      skills: [
        "PHP",
        "Html",
        "Css",
        "JavaScript",
        "Linux",
        "Planning project",
        "Database Structure",
      ],
    },
    {
      name: "Högskolan Dalarna",
      place: "Sweden",
      date: "2019 - 2020",
      degree: "Computer Science",
      description: "Computer science courses",
      skills: ["C#", "Java", "Software Engineering", "Network Engineering"],
    },
  ],
  experience: [
    {
      name: "BTJ",
      place: "Lund",
      date: "2024 - Present",
      position: "Senior Software Engineer",
      description:
        "Reduced technical debt by 30% through the design and development of a SaaS application, enabling teachers to discover books tailored to grades and themes. Automated book addition workflows, decreasing manual effort by 20% and improving efficiency. Developed an internal cataloging system, improving page load speed by 50%, enhancing user productivity by 20%, and optimizing database queries by 25%. Worked with a stack including Node.js, React.js, Typescript, .Net, C#, SQL, TDD, DDD and Azure to deliver scalable and reliable solutions.",
      skills: [
        "Node.js",
        "React.js",
        "Typescript",
        ".Net",
        "C#",
        "SQL",
        "TDD",
        "DDD",
        "Azure",
      ],
    },
    {
      name: "Lund College Of Technology",
      place: "Lund",
      date: "2022 - 2024",
      position: "Senior Software Engineer",
      description:
        "Improved program planning efficiency by developing a new system for managing courses and schedules, increasing page load speed by 35% and optimizing database queries by 20%. Enhanced submission workflows by building an internal master’s degree project system, reducing processing time by 25% for student documentation. Collaborated in agile teams with daily standups and scrum-based sprints to ensure timely feature delivery. Worked with a stack including Node.js, Vue.js, Typescript, Knex.js and Objection.js, SQL, Linux to deliver scalable and reliable solutions.",
      skills: [
        "Node.js",
        "Vue.js",
        "Typescript",
        "Knex.js",
        "Objection.js",
        "SQL",
        "Linux",
      ],
    },
    {
      name: "Exakta Software",
      place: "Hassleholm",
      date: "2021 - 2022",
      position: "Software Engineer",
      description:
        "Improved e-commerce SaaS application payment workflows by integrating Klarna, Svea Checkout and Swish payment solutions using Node.js REST APIs, boosting checkout customer conversion rate by 18%. Enhanced data processing efficiency by creating a Node.js import system to fetch and handle XML data, making imports 35% more effective while handling 50% more data. Mentored 2 interns, guiding them in best practices for back-end development, conducting code reviews, and fostering effective team collaboration. Worked with a stack including Node.js, Nest.js, React.js, Typescript, SQL, Aws to deliver scalable and reliable solutions.",
      skills: ["Node.js", "Nest.js", "React.js", "Typescript", "SQL", "Aws"],
    },
    {
      name: "Head Of Search",
      place: "Malmo",
      date: "20119 -2021",
      position: "Software Engineer",
      description:
        "Developed a SaaS e-commerce solution with React.js and Node.js, integrating Klarna and increasing checkout conversion rates by 25%. Developed a custom application integrated with Microsoft Business Central Dynamics to sync orders and inventory, reducing manual effort by 35% and boosting efficiency. Worked with a stack including Node.js, React.js, Typescript, PHP, SQL and Aws.",
      skills: ["Node.js", "React.js", "Typescript", "PHP", "SQL", "Aws"],
    },
  ],
  skills: [
    {
      title: "Programming",
      info: [
        "TypeScript",
        "Javascript",
        "C#/.Net",
        "SQL",
        "NoSQL",
        "Shell",
        "PHP",
      ],
      icon: "fa fa-code",
    },
    {
      title: "Web",
      info: [
        "React",
        "Vue",
        "NodeJS",
        "Redux",
        "Tailwind",
        "HTML/CSS",
        "OAuth",
        "i18n",
      ],
      icon: "fas fa-laptop-code",
    },
    {
      title: "Databases",
      info: ["MongoDB", "Redis", "MySQL", "Firebase"],
      icon: "fa fa-database",
    },
    {
      title: "OS & Tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Git",
        "Agile(Scrum)",
        "Tdd",
        "Ddd",
        "Jira",
        "Heroku",
        "AWS S3",
        "Azure",
      ],
      icon: "fas fa-tools",
    },
    {
      title: "Design & Research",
      info: ["Interviews", "User Research", "Design strategy", "Photoshop"],
      icon: "fa fa-pencil-square-o",
    },
  ],
  portfolio: [
    {
      name: "Sass AI Content Generator",
      pictures: [
        {
          img: require("./src/assets/portfolio/ai-content-generator-portfolio-img.png"),
        },
      ],
      technologies: [
        "React.js (TS)",
        "Node.js (TS)",
        "MongoDB",
        "Openai",
        "Stripe",
      ],
      category: "Website Development",
      date: "2024",
      github: "https://github.com/sorakabro/serp-ranker-frontend",
      visit: "https://serp-ranker-frontend.onrender.com/",
      description:
        "Sass inspired ai content generator application, done with React.js, Node.js and Openai with stripe integration.",
    },
    {
      name: "Ecommerce Website",
      pictures: [
        {
          img: require("./src/assets/portfolio/web_app_MVC.png"),
        },
      ],
      technologies: ["C#", ".Net Core", "MVC", "Stripe", "Azure"],
      category: "Website Development",
      date: "2024",
      github: "https://github.com/sorakabro/Bulky_MVC",
      visit:
        "https://bookapp-arh4cchwbab3fsf0.canadacentral-01.azurewebsites.net/",
      description:
        "Ecommerce inspired application, done with .Net Core MVC with stripe integration.",
    },
    {
      name: "Amazon inspired website",
      pictures: [
        {
          img: require("./src/assets/portfolio/amazon-portfolio-img.png"),
        },
      ],
      technologies: ["React", "HTML", "CSS"],
      category: "Website",
      date: "2020",
      github: "https://github.com/sorakabro/Amazon-clone-with-react",
      visit: "https://benjaminolden.com/build/",
      description: "Amazon inspired website, done with react",
    },
    {
      name: "Spotify Clone",
      pictures: [
        {
          img: require("./src/assets/portfolio/spotifyclone_project.jpg"),
        },
      ],
      technologies: ["PHP", "Javascript", "Html", "Css", "Sql"],
      category: "Website",
      github: "https://github.com/sorakabro/Spotify-Clone",
      date: "2020",
      visit: "https://benjaminolden.com/Spotify-Clone/register.php",
      description: "Spotify Clone done with php,javascript, sql",
    },
  ],
  portfolio_design: [
    /* {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    } */
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai",
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai",
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai",
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore",
    },
  ],
};

export default info;
