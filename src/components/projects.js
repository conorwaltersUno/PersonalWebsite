import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardMenu,
} from 'react-mdl';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Radium, { StyleRoot } from 'radium';
import { fadeInLeftBig } from 'react-animations';
import Slide from 'react-reveal/Slide';

const styles = {
  leftSideAnimation: {
    animationDuration: '1s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleRaised = () =>
    this.setState({
      activeTab: this.state.activeTab,
    });

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <StyleRoot>
          <div className='projects-grid' style={styles.leftSideAnimation}>
            {/* Project 1 */}

            <Card
              shadow={5}
              style={{
                minWidth: '450',
                margin: 'auto',
                borderRadius: 5,
                background: '#112240',
                marginLeft: 409,
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: '#e6f1ff',
                  height: '140px',
                }}
              >
                Personal Website v1
              </CardTitle>
              <CardText
                style={{
                  color: '#ccd6f6',
                }}
              >
                This is a website I have created using react, it will be used as
                my cv when applying for graduate jobs. It was a super fun
                weekend project :D
              </CardText>
              <CardText
                style={{
                  color: '#8892b0',
                }}
              >
                <p>Node, React, Github, Firebase </p>
              </CardText>

              <CardMenu style={{ color: '#FFFFFF' }}>
                <a href='wwww.conorwalters.com'>
                  <LaunchIcon style={{ marginRight: 10 }} />
                </a>
                <a href='https://github.com/Cheesiewalters/PersonalWebsite'>
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card
              shadow={5}
              style={{
                minWidth: '450',
                margin: 'auto',
                borderRadius: 5,
                background: '#112240',
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: '#e6f1ff',
                  height: '140px',
                }}
              >
                Hireland
              </CardTitle>
              <CardText
                style={{
                  color: '#ccd6f6',
                }}
              >
                This website was creatde for my final year university project,
                it is a platform aimed to bring trades-persons and customers
                together through an online platform
              </CardText>
              <CardText
                style={{
                  color: '#8892b0',
                }}
              >
                <p>Node, React, Github, Firebase </p>
              </CardText>

              <CardMenu style={{ color: '#FFFFFF' }}>
                <a href='https://github.com/Cheesiewalters/Hireland'>
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card
              shadow={5}
              style={{
                minWidth: '450',
                margin: 'auto',
                borderRadius: 5,
                background: '#112240',
                marginRight: 450,
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: '#e6f1ff',
                  height: '140px',
                }}
              >
                Project 3
              </CardTitle>
              <CardText
                style={{
                  color: '#ccd6f6',
                }}
              >
                I will be completing this project to make this page look nice
                and to get more experienced with react. I hope to use the
                spotify api to create this website
              </CardText>
              <CardText
                style={{
                  color: '#8892b0',
                }}
              >
                <p>Node, React, Github, Firebase </p>
              </CardText>

              <CardMenu style={{ color: '#FFFFFF' }}>
                <a href='https://github.com/Cheesiewalters/PersonalWebsite'>
                  <GitHubIcon href='https://github.com/Cheesiewalters/PersonalWebsite' />
                </a>
              </CardMenu>
            </Card>
          </div>
        </StyleRoot>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <StyleRoot>
          <Slide left>
            <div className='projects-grid' style={styles.leftSideAnimation}>
              {/* Project 1 */}

              <Card
                shadow={5}
                style={{
                  minWidth: '450',
                  margin: 'auto',
                  borderRadius: 5,
                  background: '#112240',
                  marginLeft: 409,
                  height: 320,
                  maxHeight: 320,
                }}
              >
                <CardTitle
                  style={{
                    color: '#e6f1ff',
                    height: '140px',
                  }}
                >
                  SpaceShooterPro
                </CardTitle>
                <CardText
                  style={{
                    color: '#ccd6f6',
                  }}
                >
                  This is a small game designed and built in unity, It is a
                  small shooter game where a spaceship follows a set path in a
                  2d world and enemy spaceships must be shot down to win
                </CardText>
                <CardText
                  style={{
                    color: '#8892b0',
                  }}
                >
                  <p>unity, c# </p>
                </CardText>

                <CardMenu style={{ color: '#FFFFFF' }}>
                  <a href='wwww.conorwalters.com'>
                    <LaunchIcon style={{ marginRight: 10 }} />
                  </a>
                  <a href='https://github.com/Cheesiewalters/PersonalWebsite'>
                    <GitHubIcon />
                  </a>
                </CardMenu>
              </Card>

              {/* Project 2 */}

              <Card
                shadow={5}
                style={{
                  minWidth: '450',
                  margin: 'auto',
                  borderRadius: 5,
                  background: '#112240',
                  height: 320,
                  maxHeight: 320,
                }}
              >
                <CardTitle
                  style={{
                    color: '#e6f1ff',
                    height: '140px',
                  }}
                >
                  Hireland
                </CardTitle>
                <CardText
                  style={{
                    color: '#ccd6f6',
                  }}
                >
                  This website was creatde for my final year university project,
                  it is a platform aimed to bring trades-persons and customers
                  together through an online platform
                </CardText>
                <CardText
                  style={{
                    color: '#8892b0',
                  }}
                >
                  <p>Node, React, Github, Firebase </p>
                </CardText>

                <CardMenu style={{ color: '#FFFFFF' }}>
                  <a href='https://github.com/Cheesiewalters/Hireland'>
                    <GitHubIcon />
                  </a>
                </CardMenu>
              </Card>

              {/* Project 3 */}

              <Card
                shadow={5}
                style={{
                  minWidth: '450',
                  margin: 'auto',
                  borderRadius: 5,
                  background: '#112240',
                  marginRight: 450,
                  height: 320,
                  maxHeight: 320,
                }}
              >
                <CardTitle
                  style={{
                    color: '#e6f1ff',
                    height: '140px',
                  }}
                >
                  Project 3
                </CardTitle>
                <CardText
                  style={{
                    color: '#ccd6f6',
                  }}
                >
                  I will be completing this project to make this page look nice
                  and to get more experienced with react. I hope to use the
                  spotify api to create this website
                </CardText>
                <CardText
                  style={{
                    color: '#8892b0',
                  }}
                >
                  <p>Node, React, Github, Firebase </p>
                </CardText>

                <CardMenu style={{ color: '#FFFFFF' }}>
                  <a href='https://github.com/Cheesiewalters/PersonalWebsite'>
                    <GitHubIcon href='https://github.com/Cheesiewalters/PersonalWebsite' />
                  </a>
                </CardMenu>
              </Card>
            </div>
          </Slide>
        </StyleRoot>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: '#ffffff' }}>React</Tab>
          <Tab style={{ color: '#ffffff' }}>Unity</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
