import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import logo from "../../public/Group 1R Logo.svg";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import Backdrop from "@material-ui/core/Backdrop";
import cv from "../../public/Rahul Prabakar Resume.pdf";

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
            <li onClick={hamToggle}>
              <Link href={"/"}>Home</Link>
            </li>
            <li onClick={hamToggle}>
              <Link href={"/skills"}>Skills</Link>
            </li>
            <li onClick={hamToggle}>
              <Link href={"/works"}>Work</Link>
            </li>
            <li onClick={hamToggle}>
              <Link href={"/contactme"}>Contact</Link>
            </li>
            <li>
              <Link href={cv}>
                <a target={"_blank"}>CV</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className={classes.leftSideContainer}>
        <div className={classes.hamburger}>
          <Hamburger toggle={setHamClicked} toggled={hamClicked} />
        </div>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href={"/"}>
          <div className={classes.logoContainer}>
            <Image className={classes.logo} src={logo} alt={"logo"} />
          </div>
        </Link>
      </div>
      <div className={classes.rightSideContainer}>
        <ul>
          <li>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/works"}>Work</Link>
          </li>
          <li>
            <Link href={"/contactme"}>About</Link>
          </li>
          <li>
            <Link href={cv}>
              <a target={"_blank"}>CV</a>
            </Link>
          </li>
        </ul>
      </div>
      <Backdrop
        open={hamClicked}
        onClick={hamToggle}
        transitionDuration={650}
      />
    </header>
  );
};

export default MainNavigation;
