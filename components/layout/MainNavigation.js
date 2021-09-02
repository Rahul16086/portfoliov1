import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import logo from "../../public/Group 1R Logo.svg";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import Backdrop from "@material-ui/core/Backdrop";

const MainNavigation = () => {
  const [hamClicked, setHamClicked] = useState(false);
  const hamToggle = () => {
    setHamClicked(() => !hamClicked);
  };
  return (
    <header className={classes.header}>
      {hamClicked && (
        <div className={classes.mobileView}>
          <ul>
            <Link href={"/"}>
              <li onClick={hamToggle}>Home</li>
            </Link>
            <Link href={"/skills"}>
              <li onClick={hamToggle}>Skills</li>
            </Link>
            <Link href={"/works"}>
              <li onClick={hamToggle}>Work</li>
            </Link>
            <Link href={"/contactme"}>
              <li onClick={hamToggle}>Contact Me</li>
            </Link>
          </ul>
        </div>
      )}
      <div className={classes.leftSideContainer}>
        <div className={classes.hamburger}>
          <Hamburger toggle={setHamClicked} toggled={hamClicked} />
        </div>
        <Link href={"/"}>
          <Image className={classes.logo} src={logo} alt={"logo"} />
        </Link>
      </div>
      <div className={classes.rightSideContainer}>
        <ul>
          <Link href={"/skills"}>
            <li>Skills</li>
          </Link>
          <Link href={"/works"}>
            <li>Work</li>
          </Link>
          <Link href={"/contactme"}>
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
      <Backdrop open={hamClicked} onClick={hamToggle} />
    </header>
  );
};

export default MainNavigation;
