import React from "react";
import err from "../public/404.png";
import Image from "next/image";
import classes from "./404.module.css";
import { Link } from "@material-ui/core";

const ErrorPage = () => {
  return (
    <div className={classes.mainContainer}>
      <Image src={err} alt={"err img"} />
      <h1>Ouch! Page not found :(</h1>
      <Link href={"/"}>
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
