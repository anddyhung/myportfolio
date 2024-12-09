type logoNames =
  | "apollo"
  | "graphql"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "chartjs"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "s3"
  | "socketio"
  | "typescript"
  | "vercel"
  | "ejs"
  | "nodejs"
  | "javascript"
  | "postgresql"
  | "redux"
  | "sass"
  | "bash"
  | "reactSpring"
  | "framerMotion"
  | "trpc"
  | "cypress"
  | "reactQuery"
  | "tauri"
  | "vite"
  | "mysql"
  | "docker"
  | "kubernetes"
  | "jira"
  | "cicd"
  | "hardhat"
  | "confluence"
  | "d3js"
  | "nginx"
  | "polygon"
  | "solidity"
  | "tailwindcss"
  | "mui"
  | "graphql"
  | "aws"
  | "rust";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/assets/icons/apollo.svg",
    spin: false,
    invert: true,
  },
  graphql: {
    label: "GraphQl",
    logo: "/assets/icons/graphql.svg",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/assets/icons/nestjs.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "/assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  chartjs: {
    label: "Chart.js",
    logo: "/assets/icons/chartjs.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/assets/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/assets/icons/nextjs.svg",
    invert: true,
  },
  s3: {
    label: "AWS-S3",
    logo: "/assets/icons/s3.svg",
  },
  socketio: {
    label: "Socket.IO",
    logo: "/assets/icons/socketio.svg",
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "/assets/icons/vercel.svg",
    invert: true,
  },
  ejs: {
    label: "EJS",
    logo: "/assets/icons/ejs.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  postgresql: {
    label: "PostgreSQL",
    logo: "/assets/icons/postgresql.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  reactSpring: {
    label: "react-spring",
    logo: "/assets/icons/react-spring.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
  },
  trpc: {
    label: "tRPC",
    logo: "/assets/icons/trpc.svg",
  },
  cypress: {
    label: "Cypress",
    logo: "/assets/icons/cypress.svg",
  },
  reactQuery: {
    label: "React Query",
    logo: "/assets/icons/react-query.svg",
  },
  tauri: {
    label: "Tauri",
    logo: "/assets/icons/Tauri.svg",
  },
  rust: {
    label: "Rust",
    logo: "/assets/icons/Rust.svg",
  },
  mui: {
    label: "Material UI",
    logo: "/assets/icons/Material-UI.svg",
  },
  vite: {
    label: "Vite.js",
    logo: "/assets/icons/Vite.js.svg",
  },
  tailwindcss: {
    label: "Tailwind CSS",
    logo: "/assets/icons/Tailwind-CSS.svg",
  },
  solidity: {
    label: "Solidity",
    logo: "/assets/icons/Solidity.svg",
  },
  polygon: {
    label: "Polygon",
    logo: "/assets/icons/Polygon.svg",
  },
  nginx: {
    label: "Nginx",
    logo: "/assets/icons/NGINX.svg",
  },
  mysql: {
    label: "MySQL",
    logo: "/assets/icons/MySQL.svg",
  },
  kubernetes: {
    label: "Kubernetes",
    logo: "/assets/icons/Kubernetes.svg",
  },
  jira: {
    label: "Jira",
    logo: "/assets/icons/Jira.svg",
  },
  hardhat: {
    label: "Hardhat",
    logo: "/assets/icons/Hardhat.svg",
  },
  cicd: {
    label: "CI/CD",
    logo: "/assets/icons/GitHub-Actions.svg",
  },
  docker: {
    label: "Docker",
    logo: "assets/icons/Docker.svg",
  },
  d3js: {
    label: "D3.js",
    logo: "/assets/icons/D3.js.svg",
  },
  confluence: {
    label: "Confluence",
    logo: "/assets/icons/Confluence.svg",
  },
  aws: {
    label: "AWS",
    logo: "/assets/icons/AWS.svg",
  },
};

export default logos;
