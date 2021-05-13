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
                This website was created for my final year university project,
                it is a platform aimed to bring trades-persons and customers
                together through an online platform where traders bid on
                tickets.
              </CardText>
              <CardText
                style={{
                  color: '#8892b0',
                }}
              >
                <p>Node, React, Github </p>
              </CardText>
              <CardMenu style={{ color: '#FFFFFF' }}>
                <a href='https://github.com/Cheesiewalters/Hireland'>
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

              <Card
              shadow={5}
              style={{
                minWidth: '450',
                
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
                URL shortener
              </CardTitle>
              <CardText
                style={{
                  color: '#ccd6f6',
                }}
              >
                This is a project I created over a weekend that takes in a long URL and will replace it with a shorter URL, it was built using expressJS and react. Click the links above to see the live website.
              </CardText>
              <CardText
                style={{
                  color: '#8892b0',
                }}
              >
                <p>Node, React, Github, Docker </p>
              </CardText>

              <CardMenu style={{ color: '#FFFFFF' }}>
                <a href='http://40198023.urlshortener.frontend.qpc.hal.davecutting.uk/'>
                  <LaunchIcon style={{ marginRight: 10 }} />
                </a>
                <a href='http://gitlab.hal.davecutting.uk/40198023/url-react-frontend'>
                  <GitHubIcon />
                </a>
                <a href='http://gitlab.hal.davecutting.uk/40198023/url-shrink-api'>
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>
          </div>
        </StyleRoot>
      );
      // }
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
