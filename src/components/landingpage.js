import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Radium, { StyleRoot } from 'radium';
import { headShake, fadeInLeftBig } from 'react-animations';
import me from '../assets/me.jpg';

const styles = {
  bannerFadeIn: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  textFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  imageFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  socialFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(headShake, 'headShake'),
  },
};

class Landing extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className='landing-grid'>
            <Cell col={12}>
              <div className='avatar-toolbar-splitter'></div>
              <img
                style={styles.imageFadeIn}
                src={me}
                alt='Avatar'
                className='avatar'
              />

              <div className='banner-text' style={styles.bannerFadeIn}>
                <h1 style={styles.textFadeIn}>Full Stack Web Developer</h1>
                <hr />
                <p style={styles.textFadeIn}>
                  HTML/CSS | JavaScript | React | React Native | NodeJS |
                  Express | MongoDB | SQL
                </p>

                <div className='social-links' style={styles.imageFadeIn}>
                  {/* LinkedIn */}
                  <a
                    href='https://www.linkedin.com/in/conor-walters-99b49a173/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                  </a>

                  {/* Github */}
                  <a
                    href='https://github.com/Cheesiewalters'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-github-square' aria-hidden='true' />
                  </a>

                  {/* Facebook */}
                  <a
                    href='https://www.facebook.com/conor.walters.16/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-facebook-f' aria-hidden='true' />
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
