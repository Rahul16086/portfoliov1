import React from "react";
import classes from "./Works.module.css";
import Image from "next/image";
import login from "../../public/work/dumbnotes/login.png";
import hello from "../../public/work/dumbnotes/hello.png";
import profile from "../../public/work/dumbnotes/profile.png";
import allNotes from "../../public/work/dumbnotes/allnotes.png";
import favNotes from "../../public/work/dumbnotes/favnotes.png";
import maps from "../../public/work/dumbnotes/maps.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import techStack from "../../public/work/techstack/TechStack.svg";
import Link from "next/link";

const WorkComponent = () => {
  const slideImages = [login, hello, profile, allNotes, favNotes, maps];

  return (
    <div className={classes.mainContainer}>
      <div className={classes.dumbNotes}>
        <div className={classes.slides}>
          <Slide>
            <div>
              <Image src={slideImages[0]} />
            </div>
            <div>
              <Image src={slideImages[1]} />
            </div>
            <div>
              <Image src={slideImages[2]} />
            </div>
            <div>
              <Image src={slideImages[3]} />
            </div>
            <div>
              <Image src={slideImages[4]} />
            </div>
            <div>
              <Image src={slideImages[5]} />
            </div>
          </Slide>
        </div>
        <div className={classes.details}>
          <h1>Dumb Notes</h1>
          <p>A simple note taking app with authentication and geolocation. </p>
          <Image src={techStack} alt={"techUsed"} />
          <div>
            <Link href={"https://dumb-notes.web.app/"}>
              <a target={"_blank"}>
                <button>View</button>
              </a>
            </Link>
            <Link href={"https://github.com/Rahul16086/dumb-notes"}>
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
