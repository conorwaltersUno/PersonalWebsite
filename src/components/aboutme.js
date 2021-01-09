import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import me from '../assets/me.jpg';
import Grid from '@material-ui/core/Grid';
import { StyleRoot } from 'radium';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';

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
        <div className='centerPane'>
          <Fade>
            <div className='each-fade'>
              <div>
                <img src={me} alt='Avatar' className='avatar' />
              </div>
            </div>
            <div className='each-fade'>
              <div>
                <img src={me} alt='Avatar' className='avatar' />
              </div>
            </div>
            <div className='each-fade'>
              <div>
                <img src={me} alt='Avatar' className='avatar' />
              </div>
            </div>
          </Fade>
          <h3 className='about-me-title'>Who am I?</h3>
          <div className='about-me-text'>
            <h4>
              I'm a full stack developer that enjoys using MERN stack but also
              has experience using angular and c# for backend development. I
              enjoy breaking down problems and using my solutions too create web
              apps that are both functional and easy to use.
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
                I am studious but also take part in many activities in my spare
                time. I have sailed at events all over ireland at events
                representing both my local sailing club and Queens University. I
                regularly mountain bike and skateboard if I can't make it out
                onto the water.
              </h4>
            </div>
          </Slide>
        </div>
        <Slide left>
          <Grid
            container
            spacing={3}
            style={{ paddingLeft: 70, paddingRight: 70 }}
          >
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={me} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Hello World</div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={me} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Hello World</div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={me} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Hello World</div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={me} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Hello World</div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={me} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Hello World</div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <div className='container'>
                  <img src={me} alt='Avatar' className='image' />
                  <div className='overlay'>
                    <div className='text'>Hello World</div>
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
