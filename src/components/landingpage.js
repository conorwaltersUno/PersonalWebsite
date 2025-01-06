import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Radium, { StyleRoot } from "radium";
import { headShake, fadeInLeftBig } from "react-animations";

const styles = {
  bannerFadeIn: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInLeftBig, "fadeInLeftBig"),
  },
  textFadeIn: {
    animationDuration: "4s",
    animationName: Radium.keyframes(fadeInLeftBig, "fadeInLeftBig"),
  },
  imageFadeIn: {
    animationDuration: "4s",
    animationName: Radium.keyframes(fadeInLeftBig, "fadeInLeftBig"),
  },
  socialFadeIn: {
    animationDuration: "4s",
    animationName: Radium.keyframes(headShake, "headShake"),
  },
};

class Landing extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <div className="avatar-toolbar-splitter"></div>
              <div className="banner-text" style={styles.bannerFadeIn}>
                <h5 style={styles.textFadeIn}>Hi, I am </h5>
                <h1 style={styles.textFadeIn}>Conor Walters.</h1>
                <h2 style={styles.textFadeIn}>
                  Intermediate Software Developer.
                </h2>

                <p style={styles.textFadeIn}>
                  JavaScript | Java (Spring) | React | React Native | NodeJS |
                  ExpressJS | MongoDB | MySQL | Docker | Flyway | AWS | MacOS
                </p>

                <div className="social-links" style={styles.imageFadeIn}>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/conor-walters-99b49a173/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i
                      className="fa fa-linkedin-square tex-black"
                      aria-hidden="true"
                    />
                  </a>

                  {/* Github */}
                  <a
                    href="https://github.com/Cheesiewalters"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}

export default Landing;
