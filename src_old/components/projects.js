import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardMenu,
} from "react-mdl";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import Radium, { StyleRoot } from "radium";
import { fadeInLeftBig } from "react-animations";

const styles = {
  leftSideAnimation: {
    animationDuration: "1s",
    animationName: Radium.keyframes(fadeInLeftBig, "fadeInLeftBig"),
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
          <div className="projects-grid" style={styles.leftSideAnimation}>
            {/* Project 1 */}

            <Card
              shadow={5}
              style={{
                minWidth: "450",
                borderRadius: 5,
                margin: 50,
                background: "#112240",
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                Personal Website v1
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This is a website I have created using react, it will be used as
                my cv when applying for graduate jobs. It was a super fun
                weekend project :D
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>Node, React, Github, Firebase </p>
              </CardText>

              <CardMenu style={{ color: "#FFFFFF" }}>
                <a href="https://personal-cv-90a61.web.app">
                  <LaunchIcon style={{ marginRight: 10 }} />
                </a>
                <a href="https://github.com/Cheesiewalters/PersonalWebsite">
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: 50,
                borderRadius: 5,
                background: "#112240",
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                Hireland
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This website was created for my final year university project,
                it is a platform aimed to bring trades-persons and customers
                together through an online platform where traders bid on
                tickets.
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>Node, React, Github </p>
              </CardText>
              <CardMenu style={{ color: "#FFFFFF" }}>
                <a href="https://github.com/Cheesiewalters/Hireland">
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: 50,
                borderRadius: 5,
                background: "#112240",
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                URL shortener
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This is a project I created over a weekend that takes in a long
                URL and will replace it with a shorter URL, it was built using
                expressJS and react.
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>Node, React, Github, Docker </p>
              </CardText>

              <CardMenu style={{ color: "#FFFFFF" }}>
                <a href="http://gitlab.hal.davecutting.uk/40198023/url-react-frontend">
                  <GitHubIcon />
                </a>
                &nbsp;
                <a href="http://gitlab.hal.davecutting.uk/40198023/url-shrink-api">
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

            {/* Project 4 */}
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: 50,
                borderRadius: 5,
                background: "#112240",
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                Weather Tracker
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This project uses the NASA open API to get all current severe
                storms and wildfires happening in the world at this current
                moment. It plots these events onto a google map component so
                they can be visualised and interacted with.
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>React, Github, Firebase, NASA Api </p>
              </CardText>

              <CardMenu style={{ color: "#FFFFFF" }}>
                <a href="https://weather-tracker-5abcf.web.app/">
                  <LaunchIcon style={{ marginRight: 10 }} />
                </a>
                &nbsp;
                <a href="https://github.com/Cheesiewalters/weather-tracker">
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

            {/* Project 5 */}
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: 50,
                borderRadius: 5,
                background: "#112240",
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                To-do
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This is a simple to-do setup using react as the framework. It
                uses an array to store the current to-dos and the user can click
                on each to-do in order to move them to the complete section.
                This was completely developed from the start by me
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>React, Github, Firebase</p>
              </CardText>

              <CardMenu style={{ color: "#FFFFFF" }}>
                <a href="https://todo-project-e5aea.web.app/">
                  <LaunchIcon style={{ marginRight: 10 }} />
                </a>
                &nbsp;
                <a href="https://github.com/Cheesiewalters/to-do">
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>
            {/* Project 5 */}
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: 50,
                borderRadius: 5,
                background: "#112240",
                height: 320,
                maxHeight: 400,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                Sail app
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This is a complex sailing app designed for use by yacht clubs to
                track all races, results and boats that are competing in club
                races. The project was designed from the ground up including ERD
                diagrams for database design.
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>
                  React, Github, AWS, postressSQL, expressJS, Flyway, Prisma
                </p>
              </CardText>

              <CardMenu style={{ color: "#FFFFFF" }}>
                {/* <a href="https://todo-project-e5aea.web.app/">
                  <LaunchIcon style={{ marginRight: 10 }} />
                </a> */}
                &nbsp;
                <a href="https://github.com/conorwaltersUno/SailApp">
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
          <Tab style={{ color: "#ffffff" }}>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
