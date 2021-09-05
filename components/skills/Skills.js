import React from "react";
import classes from "./Skills.module.css";
import { SkillsData } from "./SkillsData";

const SkillsComponent = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.firstHalf}>
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

      <div className={classes.skillsContainer}>
        {SkillsData.map((skill, key) => (
          <div className={classes.skills} key={key}>
            <div className={classes.individual}>
              <h1>{skill.SkillTitle}</h1>
              {skill.Skills.map((skillName, key) => (
                <p key={key}>{skillName}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
