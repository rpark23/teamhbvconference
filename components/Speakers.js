import React, { Component } from "react";
import Image from 'next/image'
import styles from '../styles/Speakers.module.scss'

class Speakers extends Component {
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