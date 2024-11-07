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
    "Welcome 👋 I'm a Full Stack Software Developer at BTJ 👻 based out of Lund, Sweden. I am working as a Full Stack Software Developer for over 5 years. I have a love of anything related to programming and have been associated with computers since a very young age.",
  links: {
    linkedin: "https://www.linkedin.com/in/benjamin-old%C3%A9n-789435172/",
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
    {
      name: "Medieinstitutet Malmö",
      place: "Sweden",
      date: "2020 - 2021",
      degree: "Website development",
      description: "Website development courses",
      skills: ["Php", "Wordpress", "Html", "Css", "Javascript"],
    },
  ],
  experience: [
    {
      name: "BTJ",
      place: "Lund",
      date: "2024 - Present",
      position: "Full Stack Developer",
      description:
        "At BTJ, I work as a Software Developer and have mainly worked with the development of customer applications. My main project has been to develop a new application that helps teachers to more easily find suitable books for different grades and themes, which facilitates their work with literature selection at school. I have also worked on an application that enables our customers to easily order new cataloging of books. In addition, I have participated in the new development of an older internal system to introduce new functions and streamline and automate workflows for our users.",
      skills: [
        "React.js (TS)",
        ".Net",
        "Node.js",
        "Azure",
        "TDD",
        "DDD",
        "SQL",
      ],
    },
    {
      name: "Lund College Of Technology",
      place: "Lund",
      date: "2022 - 2024",
      position: "Full Stack Developer",
      description:
        "I worked as a Software Developer where I mainly work with developing internal systems that are used both by teachers and students who attend LTH. I have mainly worked on developing a completely new program planning program which is used, among other things, to be able to plan which programs and courses LTH will offer its students for each new academic year.",
      skills: ["Vue.js", "Node.js", "OpenAPI", "Knex.js", "SQL"],
    },
    {
      name: "Exakta Software",
      place: "Hassleholm",
      date: "2021 - 2022",
      position: "Full Stack Developer",
      description:
        "At Exakta software, I have worked as a Software Developer with the company's self-developed business system/e-store with SaaS.",
      skills: ["Vue.js", "PHP", "Laravel", "SQL"],
    },
    {
      name: "Head Of Search",
      place: "Malmo",
      date: "2020 -2021",
      position: "Full Stack Developer",
      description:
        "Worked as a web developer at a web agency mainly with Wordpress as cms. Backend development of e-commerce solutions built in php, javascript and wordpress.",
      skills: ["Wordpress", "Woocommerce", "PHP", "Javascript", "SQL"],
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
