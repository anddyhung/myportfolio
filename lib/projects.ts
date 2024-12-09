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
  connect4: {
    title: "Mintlayer Node App",
    description: [
      "Mintlayer Node App is Tauri app that create, import, encrypt wallet and then stake, delegate, send ML token.",
      "The frontend is built using **React** and styled using **Tailwind CSS** and backend built using **Rust**.",
      "The app supports multiple functionalities parallel, means people can do several actions at the same time without any interference.",
    ],
    stack: [
      logos.tauri,
      logos.react,
      logos.rust,
      logos.tailwindcss,
      logos.git,
      logos.typescript,
      logos.cicd,
      logos.github,
      logos.vite,
    ],
    links: {
      live: "https://github.com/mintlayer/mintlayer-node-app",
    },
    images: {
      main: {
        link: "/project/mintlayer/staking.png",
        width: 1173,
        height: 847,
      },
    },
  },
  covid19: {
    title: "Apexpad",
    description: [
      "Apexpad Token Creator/Locker platform on Near chain.",
      "This web app can be used to create token and then create pool, liquidity, lock token, LP token.",
      "There is also used to list all tokens created on this platform and display realtime token info.",
      "The smart contract of this platform is developed with Rust and frontend developed with Next.js, styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    images: {
      main: {
        link: "/project/apexpad/near_creator_new.png",
        width: 1173,
        height: 751,
      },
    },
    stack: [
      logos.rust,
      logos.tailwindcss,
      logos.nextjs,
      logos.nginx,
      logos.cicd,
      logos.s3,
      logos.git,
      logos.materialui,
      logos.typescript,
      logos.d3js,
      logos.kubernetes,
    ],
    links: {
      live: "https://apexpad.finance/",
    },
  },

  getItDone: {
    title: "Stakeverses",
    description: [
      "NFT staking platform for GameFi ecosystem",
      "This platform is integrated with NFT marketplace platform",
      "The application is made using **Solidity**, **React** and styled using **Tailwind CSS.**",
      "Features of the app are **Stake, Deposit, Withdraw**. Create benefit by NFT staking",
    ],
    links: {
      live: "https://stakeverses.com/",
    },
    stack: [
      logos.solidity,
      logos.hardhat,
      logos.polygon,
      logos.aws,
      logos.jira,
      logos.confluence,
      logos.react,
      logos.cicd,
      logos.vite,
    ],
    images: {
      main: {
        link: "/project/staking/stake_home.png",
        width: 1173,
        height: 847,
      },
    },
  },
  urlShortener: {
    title: "Factory Game",
    description: [
      "NFT marketplace project consists one part of GameFi Ecosystem.",
      "As the title suggests, the app can be used to create, buy, sell NFTs for Factory game.",
      "This NFT marketplace project is integrated with NFT staking platform.",
      "The smart contract is developed with Solidity and deployed on Polygon and BSC.",
    ],
    images: {
      main: {
        link: "/project/factory/factory_info.png",
        width: 964,
        height: 751,
      },
    },
    links: {
      live: "https://factorygame.org/",
    },
    stack: [
      logos.solidity,
      logos.polygon,
      logos.expressjs,
      logos.materialui,
      logos.react,
      logos.hardhat,
    ],
  },
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
      logos.socketio,
      logos.aws,
      logos.react,
      logos.mongodb,
      logos.graphql,
      logos.typescript,
      logos.nodejs,
      logos.materialui,
      logos.redux,
      logos.jira,
      logos.confluence,
    ],
    links: {
      live: "",
      github: "https://github.com/digitalvaluestream/frontend",
    },
  },

  dogmash: {
    title: "Auxilar",
    description: [
      "Job site for the students in university.",
      "This was my first big **fullstack** project made by myself using **node.js** with **express.js** and styled using **TailwindCss**. Clients can post a new job and students search jobs and then request review to mentors. After reviewing by mentors, send proposals to client.",
      "Customized for the students studing in university.",
    ],
    images: {
      webm: "/project/auxilar/auxilar.webm",
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
      logos.tailwindcss,
      logos.jira,
      logos.socketio,
      logos.aws,
      logos.vite,
      logos.sass,
      logos.docker,
    ],
    links: {
      live: "https://auxilar.org",
    },
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
      live: "https://myportfolio-flax-theta.vercel.app/",
      github: "https://github.com/waytothevenus/myportfolio",
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
      live: "https://pokemon-hacktoberfest.vercel.app/",
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
      live: "https://jokes-hooks.vercel.app/",
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
