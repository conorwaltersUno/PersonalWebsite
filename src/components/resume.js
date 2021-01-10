import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import TestResults from './testResults';
import Radium, { StyleRoot } from 'radium';
import { fadeInLeft } from 'react-animations';
import me from '../assets/me.jpg';
import Slide from 'react-reveal/Slide';

const styles = {
  imageFadeIn: {
    animationDuration: '2s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },
  leftTextFadeIn: {
    animationDuration: '2s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },
  rightcolumnsFadeIn: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },
};

const Resume = () => {
  return (
    <StyleRoot>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: 'center' }}>
            <img
              style={styles.imageFadeIn}
              src={me}
              alt='Avatar'
              className='avatar'
            />
          </div>
          <div style={styles.leftTextFadeIn}>
            <h2 style={{ paddingTop: '2em', color: 'white' }}>Conor Walters</h2>
            <h4 style={{ color: 'white' }}>Graduate Software Engineer</h4>
            <hr
              style={{
                borderTop: '3px solid #64ffda',
                width: '50%',
                color: 'white',
              }}
            />
            <p style={{ color: 'white' }}>
              I am currently studying at Queen's University Belfast with the aim
              of obtaining a 1st class degree by the summer of 2021.
            </p>
            <p style={{ color: 'white' }}>
              Please do not hesitate to contact me if you have any enquires
              about my education or cv!.
            </p>
            <hr
              style={{
                borderTop: '3px solid #64ffda',
                width: '50%',
                color: 'white',
              }}
            />
            <h5 style={{ color: 'white' }}>Address</h5>
            <p style={{ color: 'white' }}>5 Balfour Avenue, Belfast, BT7 2EU</p>
            <h5 style={{ color: 'white' }}>Phone</h5>
            <p style={{ color: 'white' }}>(+44) 07455 000235</p>
            <h5 style={{ color: 'white' }}>Email</h5>
            <a href='cwalters01@qub.ac.uk' style={{ color: '#64ffda' }}>
              cwalters01@qub.ac.uk
            </a>

            <h5 style={{ color: 'white' }}>Website</h5>
            <Link to='/' style={{ color: 'white' }}>
              www.conorwalters.com
            </Link>
            <hr
              style={{
                borderTop: '3px solid #64ffda',
                width: '50%',
                color: 'white',
              }}
            />
          </div>
        </Cell>

        <Cell className='resume-right-col' col={8}>
          <div style={styles.leftTextFadeIn}>
            <hr style={{ borderTop: '3px solid #64ffda' }} />
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Queen's University Belfast"
              degree='BEng Software Engineering'
              link='https://www.qub.ac.uk/courses/undergraduate/software-engineering-placement-beng-g604/#course'
            />

            <TestResults title='Module Results'></TestResults>
          </div>

          <Slide left>
            <hr style={{ borderTop: '3px solid #64ffda' }} />

            <h2>Experience</h2>

            <Experience
              startYear={'July ' + 2019}
              endYear={'July ' + 2020}
              jobName='Associate Software Engineer'
              company='Philips'
              jobDescription='Working at Philips has provided me with great experience and exposure to the software industry, I spent most of my placement year working on front end web development using Angular and React and contributing to the development of the Xplore product. I worked extensively with c# in to help develop the Xplore products backend api and gained a great insight into what working within the software industry is like. I also gained hands on experience using Docker to host Sql databases images and used Jenkins for Continous Integration with Github.
              '
            />
          </Slide>

          <Slide left>
            <hr style={{ borderTop: '3px solid #64ffda' }} />
            <h2>Skills</h2>
            <Skills skill='React' progress={80} />
            <Skills skill='HTML/CSS' progress={80} />
            <Skills skill='Windows 7/8/9/10' progress={80} />
            <Skills skill='Postman' progress={80} />
            <Skills skill='NodeJS' progress={70} />
            <Skills skill='Github' progress={70} />
            <Skills skill='Javascript ES6' progress={60} />
            <Skills skill='C#' progress={60} />
            <Skills skill='Mac OS' progress={50} />
            <Skills skill='C++' progress={50} />
            <Skills skill='Jenkins (CI/CD)' progress={40} />
            <Skills skill='Docker' progress={40} />
            <Skills skill='Python 3.9' progress={40} />
          </Slide>
        </Cell>
      </Grid>
    </StyleRoot>
  );
};

export default Resume;
