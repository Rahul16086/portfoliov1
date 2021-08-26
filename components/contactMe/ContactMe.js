import React from "react";
import classes from "./ContactMeComponent.module.css";
import Image from "next/image";
import insta from "../../public/VectorInsta.svg";
import gmail from "../../public/Gmail.svg";
import github from "../../public/GroupGithub.svg";
import twitter from "../../public/GroupTwitter.svg";
import Link from "next/link";

const ContactMeComponent = () => {
  return (
    <div className={classes.mainContainer}>
      <h1>About me</h1>
      <p>
        I am a hardworking and an optimistic engineer. I can build Apps and
        Webpages which are interactive and responsive. I am open to learn new
        stuff and also a great team player. I also have experience in video and
        image production and manipulation.
      </p>
      <h1 className={classes.reachMe}>Reach me out at</h1>
      <div className={classes.socialHandles}>
        <Link href={"https://github.com/Rahul16086"}>
          <a target={"_blank"}>
            <Image className={classes.logo} src={github} alt={"githubLogo"} />
          </a>
        </Link>
        <Link href={"https://www.instagram.com/r_a_h_u_l_1_6/"}>
          <a target={"_blank"}>
            <Image className={classes.logo} src={insta} alt={"instaLogo"} />
          </a>
        </Link>
        <Link href={"https://twitter.com/Im_Rahul16"}>
          <a target={"_blank"}>
            <Image className={classes.logo} src={twitter} alt={"twitterLogo"} />
          </a>
        </Link>
        <Link href={"mailto:rahulprabakar36@gmail.com"}>
          <a target={"_blank"}>
            <Image className={classes.logo} src={gmail} alt={"gmailLogo"} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ContactMeComponent;
