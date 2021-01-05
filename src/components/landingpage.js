import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <div className='avatar-toolbar-splitter'></div>
            <img
              src='https://s.gravatar.com/avatar/5e142e4f1e05af8242d7199a36436005?s=80'
              alt='Avatar'
              className='avatar'
            />

            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | JavaScript | React | React Native | NodeJS | Express
                | MongoDB | SQL
              </p>

              <div className='social-links'>
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
    );
  }
}

export default Landing;
