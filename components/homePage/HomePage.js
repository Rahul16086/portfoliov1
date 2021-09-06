import React from "react";
import classes from "./HomePage.module.css";
import Image from "next/image";
import me from "../../public/work/myPic.svg";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.description}>
          <h1>Hi There! I am Rahul</h1>
          <h2>
            I am a fullstack web developer. I build webpages which are both
            responsive and interactive.
          </h2>
          {/*<Link href={"/contactme"} passHref>*/}
          {/*  <button>Catch me here!</button>*/}
          {/*</Link>*/}
          <button>
            <Link href={"/contactme"}>Catch me here!</Link>
          </button>
        </div>
        <div className={classes.imageContainer}>
          <Image src={me} alt={"me"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
