import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import boat1 from '../assets/boat_1.jpg';
import qub_sailing from '../assets/qub_sailing.jpg';
import adventure from '../assets/adventure.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import Radium, { StyleRoot } from 'radium';
import { fadeInLeftBig } from 'react-animations';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const styles = {
  leftSideAnimation: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
};

const About = () => {
  return (
    <StyleRoot>
      <div className='splitScreen'>
        <div className='centerPane' style={styles.leftSideAnimation}>
          <div className='slider-image-about-me'>
            <AwesomeSlider>
              <div data-src={boat1} style={{ borderRadius: 5 }} />
              <div data-src={adventure} style={{ borderRadius: 5 }} />
              <div data-src={qub_sailing} style={{ borderRadius: 5 }} />
            </AwesomeSlider>
          </div>
          <h3 className='about-me-title'>Who am I?</h3>
          <div className='about-me-text'>
            <h4>
              I'm a software engineer that enjoys using MERN stack but also has
              experience using angular and c# for backend development to build
              creative websites. I enjoy breaking down problems and using my
              solutions to create web apps that are both functional and easy to
              use.
            </h4>
          </div>
          <div className='about-me-text'>
            <h4>
              {' '}
              I love to make code that is readable and robust. I can't wait for
              my next opportunity to work in a team and learn as much as I can
              from my co-workers.{' '}
            </h4>
          </div>
          <Slide left>
            <div className='about-me-text' data-reveal-delay='150'>
              <h4>
                If i'm not studying or writing code you can find me training or
                competiting in sailing events all over Ireland for my
                university. I am vice captain of Queens Sailing club and have
                been involved in sailing all my life.
              </h4>
            </div>
          </Slide>
        </div>

        <Slide left>
          <div className='social-links-about-me'>
            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/conor-walters-99b49a173/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='social-hover'>
                <i className='fa fa-linkedin-square' aria-hidden='true' />
              </div>
            </a>

            {/* Github */}
            <a
              href='https://github.com/Cheesiewalters'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='social-hover-github'>
                <i className='fa fa-github-square' aria-hidden='true' />
              </div>
            </a>

            {/* Facebook */}
            <a
              href='https://www.facebook.com/conor.walters.16/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='social-hover'>
                <i className='fa fa-facebook-f' aria-hidden='true' />
              </div>
            </a>
          </div>
        </Slide>
      </div>
    </StyleRoot>
  );
};

export default About;
