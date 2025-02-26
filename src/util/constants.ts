import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactImage from "../assets/tech/react.png";
import tailwind from "../assets/tech/tailwind.png";
import nodeImage from "../assets/tech/node.png";
import remix from "../assets/tech/remix.png";
import tsImage from "../assets/tech/ts.png";
import firebase from "../assets/tech/firebase.png";
import gc from "../assets/tech/gc.png";
import aws from "../assets/tech/aws.png";
import docker from "../assets/tech/docker.webp";
import kubernetes from "../assets/tech/kubernetes.png";
import git from "../assets/tech/git.png";
import cicd from "../assets/tech/gitlabcicd.png";
import grafana from "../assets/tech/grafana.png";
import sentry from "../assets/tech/sentry.svg";
import mysql from "../assets/tech/mysql.png";
import php from "../assets/tech/php.png";
import astro from "../assets/tech/astro.png";
import vue from "../assets/tech/vue.png";
import nextjs from "../assets/tech/nextjs.svg";
import nestjs from "../assets/tech/nestjs.svg";
import symfony from "../assets/tech/symfony.png";
import gitlab from "../assets/tech/gitlab.png";
import notion from "../assets/tech/notion.png";
import jira from "../assets/tech/jira.svg";
import confluence from "../assets/tech/confluence.png";
import krumbeinImmobilien from "../assets/work/krumbein_immobilien.png";
import familyApp from "../assets/work/family_application.png";
import ingoKrumbein from "../assets/work/ingo_krumbein.png";
import widthHint from "../assets/work/width_hint.png";

type NavLink = {
  link: string;
  name: string;
};

type Technology = {
  src: string;
  title: string;
  style: string;
};

type Framework = {
  src: string;
  title: string;
  style: string;
};

type Language = {
  src: string;
  title: string;
  style: string;
};

type Tool = {
  src: string;
  title: string;
  style: string;
};

type Work = {
  name: string;
  src: string;
  sourceCode?: string;
  link?: string;
};

export const links: NavLink[] = [
  {
    link: "",
    name: "Home",
  },
  {
    link: "about",
    name: "About",
  },
  {
    link: "work",
    name: "Work",
  },
  {
    link: "technologies",
    name: "Technologies",
  },
  {
    link: "contact",
    name: "Contact",
  },
];

export const technologies: Technology[] = [
  {
    src: firebase.src,
    title: "Firebase",
    style: "shadow-[#D7B245]",
  },
  {
    src: gc.src,
    title: "Google Cloud",
    style: "shadow-[#D85140]",
  },
  {
    src: aws.src,
    title: "AWS",
    style: "shadow-[#e47911]",
  },
  {
    src: git.src,
    title: "Git",
    style: "shadow-[#f14e32]",
  },
  {
    src: cicd.src,
    title: "GitLab CI/CD",
    style: "shadow-[#7759c2]",
  },
  {
    src: docker.src,
    title: "Docker",
    style: "shadow-[#1d63ed]",
  },
  {
    src: kubernetes.src,
    title: "Kubernetes",
    style: "shadow-[#326ce5]",
  },
];

export const languages: Language[] = [
  {
    src: html.src,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    src: css.src,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    src: php.src,
    title: "PHP",
    style: "shadow-[#797CB1]",
  },
  {
    src: mysql.src,
    title: "MySQL",
    style: "shadow-[#32738C]",
  },
  {
    src: javascript.src,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    src: nodeImage.src,
    title: "NodeJs",
    style: "shadow-[#94BA51]",
  },
  {
    src: tsImage.src,
    title: "Typescript",
    style: "shadow-blue-600",
  },
];

export const frameworks: Framework[] = [
  {
    src: symfony.src,
    title: "Symfony",
    style: "shadow-[#000000]",
  },
  {
    src: reactImage.src,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    src: nextjs.src,
    title: "NextJS",
    style: "shadow-[#000000]",
  },
  {
    src: remix.src,
    title: "Remix",
    style: "shadow-[#82AFF4]",
  },
  {
    src: astro.src,
    title: "Astro",
    style: "shadow-[#E7642B]",
  },
  {
    src: nestjs.src,
    title: "NestJS",
    style: "shadow-[#f1455f]",
  },
  {
    src: tailwind.src,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    src: vue.src,
    title: "VueJs",
    style: "shadow-[#42d392]",
  },
];

export const tools: Tool[] = [
  {
    src: grafana.src,
    title: "Grafana",
    style: "shadow-[#ff671d]",
  },
  {
    src: sentry.src,
    title: "Sentry",
    style: "shadow-[#4e2a9a]",
  },
  {
    src: gitlab.src,
    title: "GitLab",
    style: "shadow-[#7759c2]",
  },
  {
    src: jira.src,
    title: "Jira",
    style: "shadow-[#0052CC]",
  },
  {
    src: confluence.src,
    title: "Confluence",
    style: "shadow-[#0052CC]",
  },
  {
    src: notion.src,
    title: "Notion",
    style: "shadow-[#000000]",
  },
];

export const works: Work[] = [
  {
    name: "Krumbein-Immobilien",
    src: krumbeinImmobilien.src,
    link: "https://krumbein-immobilien.de",
  },
  {
    name: "Family App",
    src: familyApp.src,
  },
  {
    name: "Portfolio",
    src: ingoKrumbein.src,
    sourceCode: "https://github.com/Jings/portfolio",
    link: "https://ingo-krumbein.de",
  },
  {
    name: "CSS Width Hint",
    src: widthHint.src,
    sourceCode: "https://github.com/Jings/css3-width-hint",
  },
];
