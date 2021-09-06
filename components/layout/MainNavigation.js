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
          {/*<ul>*/}
          {/*  <Link href={"/"} passHref>*/}
          {/*    <li onClick={hamToggle}>Home</li>*/}
          {/*  </Link>*/}
          {/*  <Link href={"/skills"} passHref>*/}
          {/*    <li onClick={hamToggle}>Skills</li>*/}
          {/*  </Link>*/}
          {/*  <Link href={"/works"} passHref>*/}
          {/*    <li onClick={hamToggle}>Work</li>*/}
          {/*  </Link>*/}
          {/*  <Link href={"/contactme"} passHref>*/}
          {/*    <li onClick={hamToggle}>Contact Me</li>*/}
          {/*  </Link>*/}
          {/*</ul>*/}
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link href={"/works"}>Work</Link>
            </li>
            <li>
              <Link href={"/contactme"}>Contact</Link>
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
          <div>
            <Image className={classes.logo} src={logo} alt={"logo"} />
          </div>
        </Link>
      </div>
      <div className={classes.rightSideContainer}>
        {/*<ul>*/}
        {/*  <Link href={"/skills"} passHref>*/}
        {/*    <li>Skills</li>*/}
        {/*  </Link>*/}
        {/*  <Link href={"/works"} passHref>*/}
        {/*    <li>Work</li>*/}
        {/*  </Link>*/}
        {/*  <Link href={"/contactme"} passHref>*/}
        {/*    <li>Contact Me</li>*/}
        {/*  </Link>*/}
        {/*</ul>*/}
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
        </ul>
      </div>
      <Backdrop open={hamClicked} onClick={hamToggle} />
    </header>
  );
};

export default MainNavigation;
