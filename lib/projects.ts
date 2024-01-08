import logos from "./logos";

type ProjectName =
  | "devGram"
  | "dogmash"
  | "covid19"
  | "connect4"
  | "getItDone"
  | "urlShortener"
  | "thisWebsite"
  | "theMealHub"
  | "pokemon"
  | "jokes";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  devGram: {
    title: "Digital Value Stream",
    description: [
      "A Job site for fintech companies senior officers who can work part time for those companies.",
      "Companeis or clients can post a new job and find experts and then send invitation, Clients can search job and then send proposal if they are interested.",
      "End-to-End typesafe code",
    ],
    images: {
      main: {
        link: "/project/dvs/dvs_home.png",
        width: 1182,
        height: 732,
      },
    },
    stack: [
      logos.trpc,
      logos.nextjs,
      logos.react,
      logos.mongodb,
      // logos.graphql,
      logos.typescript,
      logos.nodejs,
      logos.reactQuery,
      logos.materialui,
    ],
    links: {
      live: "http://136.243.150.17",
      github: "https://github.com/digitalvaluestream/frontend",
    },
  },

  dogmash: {
    title: "Auxilar",
    description: [
      "Job site for the students in university.",
      "This was my first big **fullstack** project made by myself using **node.js** with **express.js** and styled using **TailwindCss**. Clients can post a new job and students search jobs and then request review to mentors. After reviewing by mentors, send proposals to client.",
      "Customized for the students studing in university."
    ],
    images: {
      webm:'/project/auxilar/auxilar.webm',
      mp4: "/project/auxilar/auxilar.mp4",
      poster: "/project/auxilar/auxilar_home.png",
      vidHeight: 676,
      vidWidth: 963,
    },
    stack: [
      logos.nodejs,
      logos.expressjs,
      logos.s3,
      logos.mongodb,
      logos.bootstrap,
      logos.ejs,
    ],
    links: {
      live: "http://3.88.116.42:3000",
    },
  },
  covid19: {
    title: "Covid-19 India tracker",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    images: {
      webm: "/project/covid-19/c4.webm",
      mp4: "/project/covid-19/c4.mp4",
      poster: "/project/covid-19/poster.png",
      vidHeight: 676,
      vidWidth: 963,
    },
    stack: [logos.chartjs, logos.react, logos.materialui],
    links: {
      live: "https://covid-tracker-beta.vercel.app/",
    },
  },
  connect4: {
    title: "Connect-4 Online Multiplayer",
    description: [
      "Connect-4 board game that allows you to **play with anyone around the world** with no registration or downloads. You and your friend just need to open the link in the browser and you're ready to play 🙂",
      "The frontend is built using **React** and styled using **material-ui** and backend built using **node.js**.",
      "**socket.io** library is used for live transfer of data from client to server using websockets.",
      "The app supports multiple games running parallel, means multiple pair of people can play on the same website at the same time without any interference."    ],
    stack: [logos.nodejs, logos.react, logos.socketio, logos.materialui],
    links: {
      live: "https://konnect-4.vercel.app/",
    },
    images: {
      poster: "/project/connect-4/poster.jpeg",
      mp4: "/project/connect-4/c4mp4.mp4",
      webm: "/project/connect-4/c4webm.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
  },
  getItDone: {
    title: "Get-It-Done",
    description: [
      "Goal tracker app made with my friend for a **hackthon that we won.**",
      "The challenge for the hackathon was to make a **CRUDy** web application for goal management.",
      "The application is made using **React** and styled using **material-ui.**",
      "Features of the app are **create, update, edit and delete** goals. Add **labels** to goal, Start a **timer to track** the time spent for goal, **timer keeps running even when the window is closed!**",
      "**Filter** goals by hashtag and/or text, **sort** goals by time spent per goal.",
      "View a **Bar graph** that displays the amount of time spent per goal.",
      "Check this video made by my hackathon partner **Priya Aswani** **[explaining how it works](https://www.linkedin.com/posts/activity-6755554068011319296-VlpE)**",
    ],
    links: {
      live: "https://get-it-done-git-master-juggernaut9.vercel.app",
    },
    stack: [logos.react, logos.chartjs, logos.materialui, logos.vercel],
    images: {
      main: {
        link: "/project/get-it-done/main.png",
        width: 1173,
        height: 847,
      },
    },
  },
  urlShortener: {
    title: "URL shortener",
    description: [
      "My very first **fullstack Typescript** web application.",
      "As the title suggests, the app can be used to shorten urls that can be shared with anyone on the internet.",
      "A **QR code** is also generated when submitting a URL that can be scanned to redirect to the original URL.",
      "The frontend is built using **React** with **Material-UI** for styling.",
      "The backend is build with **Node.js** with **Express.js** framework along with **MongoDB** database to store the URLs.",
    ],
    images: {
      main: {
        link: "/project/url-short/main.png",
        width: 964,
        height: 751,
      },
    },
    links: {
      live: "https://short-url-three.vercel.app/",
    },
    stack: [
      logos.typescript,
      logos.react,
      logos.expressjs,
      logos.materialui,
      logos.mongodb,
      logos.nodejs,
    ],
  },
  thisWebsite: {
    title: "This website",
    description: [
      "My portfolio website build with **React** using **Next.js** framework.",
      "The source code is writtin in **100% TypeScript** and the project is easy to maintain with the **type safety** provided by Typescript. The source code is very **moduler** allowing easy **debugging.**",
      "Styling is done using **Material-UI**, the website comes with two **themes, dark and light.**",
      "Animations are done using two libraries, **react-spring** for the bouncy logo animations, and **framer-motion** for page transitions.",
      "**next/image** which is a new Next.js 10 feature is being used to automatically resize images according to display and also **prevent html elements shifting** from slow loading images.",
      "This description is typed as **markdown** in source code, the Project component takes in props for links, icons, title, images, etc; nothing is hard coded.",
    ],
    links: {
      live: "https://bhavya.dev",
      github: "https://github.com/anddyhung/myportfolio",
    },
    stack: [
      logos.typescript,
      logos.nextjs,
      logos.react,
      logos.materialui,
      logos.reactSpring,
      logos.framerMotion,
    ],
    images: {
      main: {
        link: "/project/portfolio/main.png",
        width: 859,
        height: 509,
      },
    },
  },
  theMealHub: {
    title: "The Meal Hub",
    description: [
      "A simple recipe application made for a **live workshop** I conducted on my friend's **[discord server](https://discord.gg/vtbc5EktTm)**.",
      "Goal of the workshop was to make a small recipe app using **[TheMealDB api](https://www.themealdb.com/)** and learn about React hooks, **useState, useEffect, useRef** and **react-router-dom** for routing.",
      "Note - styling was not done during the workshop, as the focus was more on React concepts.",
    ],
    links: {
      live: "https://recipe-material-ui-juggernaut9.vercel.app/",
    },
    stack: [logos.react, logos.materialui],
    images: {
      main: {
        link: "/project/the-meal-hub/main.png",
        height: 841,
        width: 1195,
      },
    },
  },
  pokemon: {
    title: "Pokemon",
    description: [
      "I started this projects for beginners in **open source** to help them make their first **pull request** on Github for **Hacktoberfest.**",
      "I learned a lot about **merge conflits,** **github issues,** and **maitaining open source project** while also helping lots of people make their contribution count for Hacktoberfest.",
      "The project received about **55 pull requests in total!!**",
    ],
    links: {
      live: "https://pokemon-hacktoberfest.vercel.app/"
    },
    stack: [logos.github, logos.git, logos.react, logos.bootstrap],
    images: {
      main: {
        link: "/project/pokemon/main.png",
        height: 936,
        width: 1020,
      },
    },
  },
  jokes: {
    title: "Lit Jokes",
    description: [
      "Jokes app build using **React** and styled using **Material-UI.**",
      "The app uses **[Sv443's JokeAPI](https://v2.jokeapi.dev/)** to fetch jokes.",
      "features of the app are **filtering** jokes by category, **searching** jokes, **Blacklisting** controversial/inappropriate jokes.",
      "Users can also **favorite a joke**, after which they may view it on the **[favorites page](https://jokes-hooks.vercel.app/favorites)** by navigating to it thought the navbar.",
      "There are also two ways to **share jokes**, either copy the link that will take you to the webpage for that joke, or copy the joke directly to computer's **clipboard.**",
    ],
    links: {
      live: "https://jokes-hooks.vercel.app/"
    },
    stack: [logos.react, logos.materialui],
    images: {
      main: {
        link: "/project/jokes/main.png",
        width: 1273,
        height: 873,
      },
    },
  },
};

export default projects;
