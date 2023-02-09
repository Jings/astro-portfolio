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
import mysql from "../assets/tech/mysql.png";
import php from "../assets/tech/php.png";
import astro from "../assets/tech/astro.png";
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
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    src: php,
    title: "PHP",
    style: "shadow-[#797CB1]",
  },
  {
    src: mysql,
    title: "MySQL",
    style: "shadow-[#32738C]",
  },
  {
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    src: nodeImage,
    title: "NodeJs",
    style: "shadow-[#94BA51]",
  },
  {
    src: tsImage,
    title: "Typescript",
    style: "shadow-blue-600",
  },
  {
    src: firebase,
    title: "Firebase",
    style: "shadow-[#D7B245]",
  },
  {
    src: gc,
    title: "Google Cloud",
    style: "shadow-[#D85140]",
  },
];

export const frameworks: Framework[] = [
  {
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    src: remix,
    title: "Remix",
    style: "shadow-[#82AFF4]",
  },
  {
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    src: astro,
    title: "Astro",
    style: "shadow-[#E7642B]",
  },
];

export const works: Work[] = [
  {
    name: "Krumbein-Immobilien",
    src: krumbeinImmobilien,
    link: "https://krumbein-immobilien.de",
  },
  {
    name: "Family App",
    src: familyApp,
  },
  {
    name: "Portfolio",
    src: ingoKrumbein,
    sourceCode: "https://github.com/Jings/portfolio",
    link: "https://ingo-krumbein.de",
  },
  {
    name: "CSS Width Hint",
    src: widthHint,
    sourceCode: "https://github.com/Jings/css3-width-hint",
  },
];
