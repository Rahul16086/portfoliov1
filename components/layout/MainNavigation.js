import React from "react";
import classes from "./MainNavigation.module.css";
import logo from "../../public/Group 1R Logo.svg";
import Image from "next/image";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.leftSideContainer}>
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
    </header>
  );
};

export default MainNavigation;
