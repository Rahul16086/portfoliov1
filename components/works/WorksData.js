import login from "../../public/work/dumbnotes/login.png";
import hello from "../../public/work/dumbnotes/hello.png";
import profile from "../../public/work/dumbnotes/profile.png";
import allNotes from "../../public/work/dumbnotes/allnotes.png";
import favNotes from "../../public/work/dumbnotes/favnotes.png";
import techStack from "../../public/work/techstack/TechStack.svg";
import maps from "../../public/work/dumbnotes/maps.png";
import mLogin from "../../public/work/dumbnotes/mobile/login.png";
import notes from "../../public/work/dumbnotes/mobile/notes.png";
import mapNav from "../../public/work/dumbnotes/mobile/mapNav.png";
import amazonTechStack from "../../public/work/amazon-clone/amazon techstack.svg";
import home from "../../public/work/amazon-clone/homepage.png";
import cart from "../../public/work/amazon-clone/cart.png";
import cartEmpty from "../../public/work/amazon-clone/cartEmpty.png";
import aLogin from "../../public/work/amazon-clone/login.png";
import loginHome from "../../public/work/amazon-clone/mobile/loginHome.png";
import navCart from "../../public/work/amazon-clone/mobile/navCart.png";
import spotifyTechStack from "../../public/work/spotify-clone/TechStack.svg";
import logoLogin from "../../public/work/spotify-clone/logologin.png";
import spotifyHome from "../../public/work/spotify-clone/home.png";
import loginApi from "../../public/work/spotify-clone/apiLogin.png";

export const WorksData = [
  {
    title: "Dumb Notes",
    description:
      "A simple note taking app with authentication and geolocation. The user can create an account using his email or login using google account/phone number(+91 only).",
    slides: [login, hello, profile, allNotes, favNotes, maps],
    mSlides: [mLogin, notes, mapNav],
    techStack: techStack,
    mobile: true,
    viewLink: "https://dumb-notes.web.app/",
    codeLink: "https://github.com/Rahul16086/dumb-notes",
  },
  {
    title: "Amazon - Clone",
    description:
      "Tried to clone Amazon website using React and firebase. User can\n" +
      "            create an account and sign in using the same.",
    slides: [home, cart, cartEmpty, aLogin],
    mSlides: [loginHome, navCart],
    techStack: amazonTechStack,
    mobile: true,
    viewLink: "https://like-clone-16.web.app/",
    codeLink: "https://github.com/Rahul16086/amazon-clone",
  },
  {
    title: "Spotify - Clone",
    description:
      "A simple Spotify clone using spotify api and React. User can login\n" +
      "            using a spotify account and view the current playlist.",
    slides: [logoLogin, spotifyHome, loginApi],
    techStack: spotifyTechStack,
    mobile: false,
    viewLink: "https://spotify-clone-dd6c2.web.app/",
    codeLink: "https://github.com/Rahul16086/spotify-clone",
  },
];
