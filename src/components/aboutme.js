import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import me from '../assets/me.jpg';
import boat1 from '../assets/boat_1.jpg';
import boat2 from '../assets/boat_2.jpg';
import volunteering_2 from '../assets/volunteering_2.jpg';
import volunteering_1 from '../assets/volunteering_1.jpg';
import boat_3 from '../assets/boat_3.jpg';
import adventure from '../assets/adventure.jpg';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import Radium, { StyleRoot } from 'radium';
import { fadeInLeftBig } from 'react-animations';

const styles = {
  leftSideAnimation: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <StyleRoot>
      <div className='splitScreen'>
        <div className='centerPane' style={styles.leftSideAnimation}>
          <Fade>
            <div className='each-fade'>
              <div>
                <img src={me} alt='Avatar' className='avatar' />
              </div>
            </div>
            <div className='each-fade'>
              <div>
                <img src={boat1} alt='Avatar' className='avatar' />
              </div>
            </div>
            <div className='each-fade-test'>
              <div>
                <img src={boat2} alt='Avatar' className='avatar' />
              </div>
            </div>
          </Fade>
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
          <div>
            <hr style={{ borderTop: '3px solid #64ffda' }} />
          </div>
          <Grid
            container
            spacing={3}
            style={{ paddingLeft: 70, paddingRight: 70 }}
          >
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={volunteering_1} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Volunteering in Cambodia!</div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={boat_3} alt='Avatar' className='image' />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={volunteering_2} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Volunteering in Cambodia!</div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={adventure} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Sailing with my twin brother!</div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Slide>
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
