import React, { useState } from "react";
import classes from "./Works.module.css";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";
import { WorksData } from "./WorksData";

const WorkComponent = () => {
  const [dumbMobileToggled, setDumbMobileToggled] = useState(true);

  const viewToggle = () => {
    setDumbMobileToggled(() => !dumbMobileToggled);
  };

  return (
    <div className={classes.mainContainer}>
      {WorksData.map((work, key) => (
        <div className={classes.workContainer} key={key}>
          <div className={classes.slidesContainer}>
            <div className={classes.slides}>
              {dumbMobileToggled && (
                <Slide transitionDuration={700}>
                  {work.slides.map((slide, key) => (
                    <div key={key}>
                      <Image src={slide} alt={"slides"} />
                    </div>
                  ))}
                </Slide>
              )}
              {!dumbMobileToggled && (
                <div className={classes.slides}>
                  <Slide transitionDuration={700}>
                    {work.mSlides.map((mSlide, key) => (
                      <div key={key}>
                        <Image src={mSlide} alt={"slides"} />
                      </div>
                    ))}
                  </Slide>
                </div>
              )}
            </div>
          </div>
          <div className={classes.details}>
            <h1>{work.title}</h1>
            <p>{work.description}</p>
            <Image src={work.techStack} alt={"stack used"} />
            <div className={classes.buttonsContainer}>
              <Link href={work.viewLink}>
                <a target={"_blank"}>
                  <button>View</button>
                </a>
              </Link>
              {work.mobile && (
                <button onClick={viewToggle}>
                  {dumbMobileToggled ? "Mobile" : "Desktop"}
                </button>
              )}
              <Link href={work.codeLink}>
                <a target={"_blank"}>
                  <button>Code</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkComponent;
