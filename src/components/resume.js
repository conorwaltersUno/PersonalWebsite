import React from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import TestResults from "./testResults";
import Radium, { StyleRoot } from "radium";
import { fadeInLeft } from "react-animations";
import me from "../assets/me.jpg";
import Slide from "react-reveal/Slide";

const styles = {
  imageFadeIn: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  leftTextFadeIn: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  rightcolumnsFadeIn: {
    animationDuration: "3s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
};

const Resume = () => {
  return (
    <StyleRoot>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              style={styles.imageFadeIn}
              src={me}
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div style={styles.leftTextFadeIn}>
            <h2 style={{ paddingTop: "2em", color: "white" }}>Conor Walters</h2>
            <h4 style={{ color: "white" }}>Fullstack Software Engineer</h4>
            <hr
              style={{
                borderTop: "3px solid #64ffda",
                width: "50%",
                color: "white",
              }}
            />
            <p style={{ color: "white" }}>
              I have completed my studies at Queen's University Belfast
              obtaining a first class honours. I am currently working as a
              Software Engineer at &nbsp;
              <Link to="https://www.unosquare.com/" style={{ color: "white" }}>
                Unosquare
              </Link>
            </p>

            <p style={{ color: "white" }}>
              I have a passion for programming + technology and I aim to
              continually expand my understanding of everything technology I
              work with. I have been working with Javascript for 2+ years now
              and I am very familar with React as my main framework
            </p>
            <hr
              style={{
                borderTop: "3px solid #64ffda",
                width: "50%",
                color: "white",
              }}
            />
            <h5 style={{ color: "white" }}>Address</h5>
            <p style={{ color: "white" }}>
              5 Scaddy Road, Downpatrick, BT30 9BW
            </p>
            <h5 style={{ color: "white" }}>Phone</h5>
            <p style={{ color: "white" }}>(+44) 7455 000235 </p>
            <h5 style={{ color: "white" }}>Email</h5>
            <a href="cwalters01@qub.ac.uk" style={{ color: "#64ffda" }}>
              cwalters01@qub.ac.uk
            </a>
            <h5 style={{ color: "white" }}>Github</h5>
            <a href="cwalters01@qub.ac.uk" style={{ color: "#64ffda" }}>
              https://github.com/conorwaltersUno
            </a>

            <hr
              style={{
                borderTop: "3px solid #64ffda",
                width: "50%",
                color: "white",
              }}
            />
          </div>
        </Cell>

        <Cell className="resume-right-col" col={8}>
          <div style={styles.leftTextFadeIn}>
            <hr style={{ borderTop: "3px solid #64ffda" }} />
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Queen's University Belfast"
              degree="First-Class honours BEng Software Engineering"
              link="https://www.qub.ac.uk/courses/undergraduate/software-engineering-placement-beng-g604/#course"
            />

            <TestResults title="Module Results"></TestResults>
          </div>

          <Slide left>
            <hr style={{ borderTop: "3px solid #64ffda" }} />

            <h2>Experience</h2>

            <Experience
              startYear={"July " + 2019}
              endYear={"July " + 2020}
              jobName="Associate Software Engineer"
              company="Philips"
              jobDescription="Working at Philips has provided me with great experience and exposure to the software industry, I spent most of my placement year working on front end web development using Angular and React and contributing to the development of the Xplore product. I worked extensively with c# in to help develop the Xplore products backend api and gained a great insight into what working within the software industry is like. I also gained hands on experience using Docker to host Sql databases images and used Jenkins for Continous Integration with Github."
            />
          </Slide>
          <Slide left>
            <Experience
              startYear={"July " + 2021}
              endYear={"Novemeber " + 2021}
              jobName="Software Engineer 1"
              company="Payroc"
              jobDescription="During my time at Payroc I was mainly involved in production support using my knowledge of .net core and SQL to debug production environments."
            />
          </Slide>
          <Slide left>
            <Experience
              startYear={"November " + 2021}
              endYear={"Current"}
              jobName="Software Engineer "
              company="Unosquare"
              jobDescription="At Unosquare I have been involved in consulting for clients from all over the world and I have worked within many different teams to produce production-ready, scalable solutions within an agile software environment. My main goal while working with Unosquare has been to continue to gain a greater understanding of technologies such as React, HTML/CSS, Docker, AWS and MYSQL and by getting exposure to these technologies on a daily basis this has greatly increased my knowledge around these areas. I have gained a much greater understanding of how to produce production ready software through utilising AWS to host software solutions through: AWS s3, AWS lightsail and AWS RDS"
            />
          </Slide>

          <Slide left>
            <hr style={{ borderTop: "3px solid #64ffda" }} />
            <h2>Skills</h2>
            <Skills skill="Mac OS" progress={100} />
            <Skills skill="React" progress={90} />
            <Skills skill="React Native" progress={90} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="Windows 7/8/9/10" progress={80} />
            <Skills skill="Postman" progress={80} />
            <Skills skill="Docker" progress={80} />
            <Skills skill="Javascript" progress={75} />
            <Skills skill="Typescript" progress={85} />
            <Skills skill="NodeJS" progress={80} />
            <Skills skill="Github" progress={70} />
            <Skills skill="AWS" progress={70} />
          </Slide>
        </Cell>
      </Grid>
    </StyleRoot>
  );
};

export default Resume;
