import React, { Component } from "react";
import styles from '../styles/NavBar.module.scss'

class NavBar extends Component {
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
      <div className={styles.navContainer}>
        <nav>
          <div className={styles.navLinks} id="nav-links">
            <p><a href="#schedule">Schedule</a></p>
            <p><a href="#project">Project</a></p>
            <p><a href="#speakers">Speakers</a></p>
          </div>
          <div className="burger" id="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;