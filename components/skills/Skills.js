import React from "react";
import classes from "./Skills.module.css";

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
        <div className={classes.skills}>
          <div className={classes.individual}>
            <h1>Languages</h1>
            <p>
              Javascript <br />
              Python <br />
              Typescript
              <br /> Java
              <br /> C
            </p>
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.individual}>
            <h1>Front-end</h1>
            <p>
              HTML <br />
              CSS <br />
              React
              <br />
              Bootstrap
            </p>
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.individual}>
            <h1>Back-end</h1>
            <p>
              Firebase
              <br /> NodeJS
            </p>
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.individual}>
            <h1>Mobile</h1>
            <p>Android Studio</p>
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.individual}>
            <h1>Database</h1>
            <p>
              SQL
              <br />
              Firestore
              <br />
              MongoDB
            </p>
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.individual}>
            <h1>Version Control</h1>
            <p>
              Git
              <br />
              Github
            </p>
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.individual}>
            <h1>UI/UX</h1>
            <p>
              Figma
              <br />
              Adobe Photoshop
            </p>
          </div>
        </div>
        {/*</div>*/}
        {/*<div>*/}
        {/*  <h1>UI/UX</h1>*/}
        {/*  <p>Figma</p>*/}
        {/*</div>*/}
        {/*  </p>*/}
        {/*  <h1>Mobile</h1>*/}
        {/*  <p>Android Studio</p>*/}
        {/*</div>*/}
        {/*<div className={classes.skills}>*/}
        {/*  <h1>Database</h1>*/}
        {/*  <p>*/}
        {/*    SQL*/}
        {/*    <br />*/}
        {/*    Firestore*/}
        {/*    <br />*/}
        {/*    MongoDB*/}
        {/*  </p>*/}
        {/*  <h1>Version Control</h1>*/}
        {/*  <p>Git Github</p>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default SkillsComponent;
