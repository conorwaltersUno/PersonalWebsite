import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import withSplashScreen from './components/withSplashScreen';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Radium, { StyleRoot } from 'radium';
import { fadeInLeftBig } from 'react-animations';

const styles = {
  leftSideAnimation: {
    animationDuration: '1s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  rightSideAnimation: {
    animationDuration: '2s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
};

function App() {
  return (
    <StyleRoot>
      <div className='demo-big-content' id='scrolly'>
        <Layout>
          <Header
            className='header-color'
            title={
              <div style={styles.leftSideAnimation}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                  My Portfolio
                </Link>
              </div>
            }
            scroll
          >
            <div style={styles.rightSideAnimation}>
              <Navigation>
                <Link to='/resume'>Resume</Link>
                <Link to='/aboutme'>About Me</Link>
                <Link to='/projects'>Projects</Link>
              </Navigation>
            </div>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to='/resume'>Resume</Link>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    </StyleRoot>
  );
}

export default withSplashScreen(App);
