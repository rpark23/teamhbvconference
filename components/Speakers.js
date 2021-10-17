import React, { Component } from "react";
import styles from '../styles/NavBar.module.scss'

class Speakers extends Component {
  navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav-links");
    let navLinks = document.getElementsByClassName("nav-link");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      Array.prototype.forEach.call(navLinks, function (link, index) {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      burger.classList.toggle("toggle");
    });
  };

  componentDidMount = () => {
    this.navSlide();
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 0);
    });
  };

  render() {
    return (
        <div className={styles.speakerInfo} id="speakers">
        <h2>Speaker Bios</h2>
        <div className={styles.speakerScroll}>
          <p>Test</p>
          <div className={styles.speakers}>
            <div className={styles.speaker}>
              <Image src={nyambeBig} />
              <div className={styles.text}>
                <h3>Monde Nyambe</h3>
                <p>
                  Monde Nyambe is the Outreach Coordinator at the Illinois Public Health Association, 
                  where she facilitates Hepatitis B outreach efforts and care linkage within the African immigrant population 
                  amongst 5 different Illinois counties. She serves as an avid health advocate for African patients, 
                  and is a member of the Coalition Against Hepatitis for People of African Origin (CHIPO). 
                  She also has a rich history in patient care, patient health education, and public health through 
                  her diverse clinical experiences as a certified health education specialist, certified nursing assistant, 
                  health insurance enrollment specialist, and through an internship she completed at the 
                  Southern Illinois University School of Medicine Family and Community Medicine Clinic.
                </p>
              </div>
            </div>

            <div className={styles.speaker}>
              <Image src={nyambeBig} />
              <div className={styles.text}>
                <h3>Monde Nyambe</h3>
                <p>
                  Monde Nyambe is the Outreach Coordinator at the Illinois Public Health Association, 
                  where she facilitates Hepatitis B outreach efforts and care linkage within the African immigrant population 
                  amongst 5 different Illinois counties. She serves as an avid health advocate for African patients, 
                  and is a member of the Coalition Against Hepatitis for People of African Origin (CHIPO). 
                  She also has a rich history in patient care, patient health education, and public health through 
                  her diverse clinical experiences as a certified health education specialist, certified nursing assistant, 
                  health insurance enrollment specialist, and through an internship she completed at the 
                  Southern Illinois University School of Medicine Family and Community Medicine Clinic.
                </p>
              </div>
            </div>

            <div className={styles.speaker}>
              <Image src={nyambeBig} />
              <div className={styles.text}>
                <h3>Monde Nyambe</h3>
                <p>
                  Monde Nyambe is the Outreach Coordinator at the Illinois Public Health Association, 
                  where she facilitates Hepatitis B outreach efforts and care linkage within the African immigrant population 
                  amongst 5 different Illinois counties. She serves as an avid health advocate for African patients, 
                  and is a member of the Coalition Against Hepatitis for People of African Origin (CHIPO). 
                  She also has a rich history in patient care, patient health education, and public health through 
                  her diverse clinical experiences as a certified health education specialist, certified nursing assistant, 
                  health insurance enrollment specialist, and through an internship she completed at the 
                  Southern Illinois University School of Medicine Family and Community Medicine Clinic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;