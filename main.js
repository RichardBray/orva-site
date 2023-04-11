import { animate } from "motion";
import './style.css';

const logo = document.querySelector(".home__logo");
logo.style.opacity = 0;

animate(
  logo,
  { opacity: 1, y:-10 },
  { delay: 0.2, duration: 1 }
);

const slogan = document.querySelector(".home__slogan");
slogan.style.opacity = 0;

animate(
  slogan,
  { opacity: 1, y:-10 },
  { delay: 1.3, duration: 1 }
);

const cta = document.querySelector(".home__cta");
cta.style.opacity = 0;

animate(
  cta,
  { opacity: 1, y:-10 },
  { delay: 3.5, duration: 1 }
);
