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
import pfHome from "../../public/work/portfolio/home.png";
import pfSkills from "../../public/work/portfolio/skills.png";
import pfWork from "../../public/work/portfolio/work.png";
import pfAbout from "../../public/work/portfolio/about.png";
import pfError from "../../public/work/portfolio/error.png";
import pfMobile1 from "../../public/work/portfolio/mobile/homabtskl.png";
import pfMobile2 from "../../public/work/portfolio/mobile/workhammenu404.png";
import pfTechStack from "../../public/work/portfolio/pfTechstack.svg";
import tdLandingOne from "../../public/work/tindev/landingPage.jpg";
import tdLandingTwo from "../../public/work/tindev/landingPage2.jpg";
import tdMatchmakerMain from "../../public/work/tindev/matchmakerMain.jpg";
import tdMatchmakerRight from "../../public/work/tindev/matchmakerSwipeRight.jpg";
import tdMatchmakerLeft from "../../public/work/tindev/matchmakerSwipeLeft.jpg";
import tdProfile from "../../public/work/tindev/Profile.jpg";
import tdProfileEDit from "../../public/work/tindev/ProfileEdit.jpg";
import tdLogin from "../../public/work/tindev/login.jpg";
import tdPasswordReset from "../../public/work/tindev/passwordReset.jpg";
import tdSignUpForm from "../../public/work/tindev/signupForm.jpg";
import tdSignUpFormTwo from "../../public/work/tindev/signupFormTwo.jpg";
import tdSignUpFormTwoTwo from "../../public/work/tindev/signupFormTwoTwo.jpg";
import tdTechStack from "../../public/work/tindev/tdTechStack.svg";

export const WorksData = [
  {
    title: "tinDev",
    description:
      "My version of tinder, specially for developer looking for like minded people around, who can help with development",
    slides: [
      tdLandingOne,
      tdLandingTwo,
      tdMatchmakerMain,
      tdMatchmakerRight,
      tdMatchmakerLeft,
      tdProfile,
      tdProfileEDit,
      tdLogin,
      tdPasswordReset,
      tdSignUpForm,
      tdSignUpFormTwo,
      tdSignUpFormTwoTwo,
    ],
    mobile: false,
    techStack: tdTechStack,
    viewLink: "https://tindev-murex.vercel.app/",
    codeLink: "https://github.com/Rahul16086/tindev",
  },
  {
    title: "Portfolio",
    description: "My first portfolio page which I build using NextJS.",
    slides: [pfHome, pfSkills, pfWork, pfAbout, pfError],
    mSlides: [pfMobile1, pfMobile2],
    techStack: pfTechStack,
    mobile: true,
    viewLink: "https://rportfolio.vercel.app/",
    codeLink: "https://github.com/Rahul16086/portfoliov1",
  },
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
