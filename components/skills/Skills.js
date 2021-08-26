import React from "react";
import classes from "./Skills.module.css";

const SkillsComponent = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.consolidatedSkills}>
        <div className={classes.bar}>
          <div className={classes.skillName}>
            <span>Front-end</span>
          </div>
          <div className={classes.barProgressFE}>
            <span></span>
          </div>
        </div>

        <div className={classes.bar}>
          <div className={classes.skillName}>
            <span>Back-end</span>
          </div>
          <div className={classes.barProgressBE}>
            <span></span>
          </div>
        </div>

        <div className={classes.bar}>
          <div className={classes.skillName}>
            <span>React</span>
          </div>
          <div className={classes.barProgressRE}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
