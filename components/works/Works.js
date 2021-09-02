import React, { useState } from "react";
import classes from "./Works.module.css";
import Image from "next/image";
import login from "../../public/work/dumbnotes/login.png";
import hello from "../../public/work/dumbnotes/hello.png";
import profile from "../../public/work/dumbnotes/profile.png";
import allNotes from "../../public/work/dumbnotes/allnotes.png";
import favNotes from "../../public/work/dumbnotes/favnotes.png";
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
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import techStack from "../../public/work/techstack/TechStack.svg";
import Link from "next/link";

const WorkComponent = () => {
  const dumbSlideImages = [login, hello, profile, allNotes, favNotes, maps];
  const dumbMSlideImages = [mLogin, notes, mapNav];
  const amazonSlide = [home, cart, cartEmpty, aLogin];
  const amazonMSlide = [loginHome, navCart];
  const spotifySlides = [spotifyHome, logoLogin, loginApi];

  const [dumbMobileToggled, setDumbMobileToggled] = useState(true);
  const [amazonMobileToggled, setAmazonMobileToggled] = useState(true);

  const viewToggle = () => {
    setDumbMobileToggled(() => !dumbMobileToggled);
  };
  const amazonMToggle = () => {
    setAmazonMobileToggled(() => !amazonMobileToggled);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.workContainer}>
        <div className={classes.slidesContainer}>
          {dumbMobileToggled && (
            <div className={classes.slides}>
              <Slide transitionDuration={700}>
                <div>
                  <Image src={dumbSlideImages[0]} />
                </div>
                <div>
                  <Image src={dumbSlideImages[1]} />
                </div>
                <div>
                  <Image src={dumbSlideImages[2]} />
                </div>
                <div>
                  <Image src={dumbSlideImages[3]} />
                </div>
                <div>
                  <Image src={dumbSlideImages[4]} />
                </div>
                <div>
                  <Image src={dumbSlideImages[5]} />
                </div>
              </Slide>
            </div>
          )}
          {!dumbMobileToggled && (
            <div className={classes.slides}>
              <Slide transitionDuration={750}>
                <div>
                  <Image src={dumbMSlideImages[0]} />
                </div>
                <div>
                  <Image src={dumbMSlideImages[1]} />
                </div>
                <div>
                  <Image src={dumbMSlideImages[2]} />
                </div>
              </Slide>
            </div>
          )}
        </div>
        <div className={classes.details}>
          <h1>Dumb Notes</h1>
          <p>
            A simple note taking app with authentication and geolocation. The
            user can create an account using his email or login using google
            account/phone number(+91 only).
          </p>
          <Image src={techStack} alt={"techUsed"} />
          <div className={classes.buttonsContainer}>
            <Link href={"https://dumb-notes.web.app/"}>
              <a target={"_blank"}>
                <button>View</button>
              </a>
            </Link>
            <button onClick={viewToggle}>
              {dumbMobileToggled ? "Mobile" : "Desktop"}
            </button>
            <Link href={"https://github.com/Rahul16086/dumb-notes"}>
              <a target={"_blank"}>
                <button>Code</button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.workContainer}>
        <div className={classes.slidesContainer}>
          {amazonMobileToggled && (
            <div className={classes.slides}>
              <Slide transitionDuration={700}>
                <div>
                  <Image src={amazonSlide[0]} />
                </div>
                <div>
                  <Image src={amazonSlide[1]} />
                </div>
                <div>
                  <Image src={amazonSlide[2]} />
                </div>
                <div>
                  <Image src={amazonSlide[3]} />
                </div>
              </Slide>
            </div>
          )}
          {!amazonMobileToggled && (
            <div className={classes.slides}>
              <Slide transitionDuration={750}>
                <div>
                  <Image src={amazonMSlide[0]} />
                </div>
                <div>
                  <Image src={amazonMSlide[1]} />
                </div>
              </Slide>
            </div>
          )}
        </div>
        <div className={classes.details}>
          <h1>Amazon - Clone</h1>
          <p>
            Tried to clone Amazon website using React and firebase. User can
            create an account and sign in using the same.
          </p>
          <Image src={amazonTechStack} />
          <div className={classes.buttonsContainer}>
            <Link href={"https://like-clone-16.web.app/"}>
              <a target={"_blank"}>
                <button>View</button>
              </a>
            </Link>
            <button onClick={amazonMToggle}>
              {amazonMobileToggled ? "Mobile" : "Desktop"}
            </button>
            <Link href={"https://github.com/Rahul16086/amazon-clone"}>
              <a target={"_blank"}>
                <button>Code</button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.workContainer}>
        <div className={classes.slidesContainer}>
          <div className={classes.slides}>
            <Slide transitionDuration={700}>
              <div>
                <Image src={spotifySlides[0]} />
              </div>
              <div>
                <Image src={spotifySlides[1]} />
              </div>
              <div>
                <Image src={spotifySlides[2]} />
              </div>
            </Slide>
          </div>
        </div>
        <div className={classes.details}>
          <h1>Spotify - Clone</h1>
          <p>
            A simple Spotify clone using spotify api and React. User can login
            using a spotify account and view the current playlist.
          </p>
          <Image src={spotifyTechStack} />
          <div className={classes.buttonsContainer}>
            <Link href={"https://spotify-clone-dd6c2.web.app/"}>
              <a target={"_blank"}>
                <button>View</button>
              </a>
            </Link>
            <Link href={"https://github.com/Rahul16086/spotify-clone"}>
              <a target={"_blank"}>
                <button>Code</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
