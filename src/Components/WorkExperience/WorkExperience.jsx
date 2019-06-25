import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WorkExperience.sass";

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: "Frontend"
    };
  }

  render() {
    return (
      <div
        className="workexperience"
        style={{ marginTop: 70, height: "75vh", overflowY: "scroll" }}
      >
        <VerticalTimeline style={{ color: "#7ef0ff" }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan, 2018 - Present"
            icon={
              <FontAwesomeIcon
                icon={["fas", "building"]}
                style={{ fontSize: 30, color: "#7ef0ff" }}
              />
            }
          >
            <label style={{ fontSize: 28 }}>Dataone Innovation Labs</label>
            <label style={{ fontSize: 22 }}>Fullstack Software Developer</label>
            <label style={{ fontSize: 16 }}>Ahmedabad, India</label>

            <p>
              I am currently working on product named Shoppr, Shoppr is a
              Customer Science Platform that provides the often-missing holistic
              customer view to e-commerce sellers and empowers them to reach out
              to right customers with right product at right time. Shoppr pulls
              data from your e-commerce platform, merges data from different
              marketing channels, and provides AI and ML powered analytical
              solutions.
            </p>
            <p>I am responsible for Front-End development.</p>
            <div style={{ display: "flex", marginTop: 20 }}>
              <FontAwesomeIcon
                icon={["fas", "code"]}
                style={{
                  fontSize: 20,
                  color: "#7ef0ff",
                  marginRight: 15,
                  marginTop: 5
                }}
              />
              <label>
                React, Redux, Bootstrap, AntDesigns, Recharts, BizCharts, Google
                Charts
              </label>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May, 2017 - Jul, 2017 "
            icon={
              <FontAwesomeIcon
                icon={["fas", "building"]}
                style={{ fontSize: 30, color: "#7ef0ff" }}
              />
            }
          >
            <label style={{ fontSize: 28 }}>Cousins Infotech</label>
            <label style={{ fontSize: 22 }}>Software Developer Intern</label>
            <br />
            <label style={{ fontSize: 16 }}>Surat, India</label>
            <p>
              I have completed my summer internship at Cousins Infotech as a
              part of my masters program. Initially at Infosys, I was assigned
              to a client's project to create a hybrid mobile application. I was
              responsible for mobile app development using Ionic framework.
            </p>
            <div style={{ display: "flex", marginTop: 20 }}>
              <FontAwesomeIcon
                icon={["fas", "code"]}
                style={{
                  fontSize: 20,
                  color: "#7ef0ff",
                  marginRight: 15,
                  marginTop: 0
                }}
              />
              <label>Ionic, AngularJs, CSS</label>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April, 2016 - June, 2016"
            icon={
              <FontAwesomeIcon
                icon={["fas", "building"]}
                style={{ fontSize: 30, color: "#7ef0ff" }}
              />
            }
          >
            <label style={{ fontSize: 28 }}>Cousins Infotech</label>
            <label style={{ fontSize: 22 }}>Software Developer Intern</label>
            <br />
            <label style={{ fontSize: 16 }}>Surat, India</label>
            <p>
              I have completed my internship at Cousins Infotech as a part of my
              bachelor program. At Cousins Infotech, I was professionally
              trained in different web technologies including Php, BootStrap,
              MySql. I Developed a project named "MyProfile" using Php, MySql
              and bootstrap.The main goal of this project is user can search
              multiple skills on the single platform. In MyProfile, the user can
              search person or skill(Doctor, Engineer,etc.) and contact them.
              Registered Users can view their own website given by the system. I
              was responsible for full stack development of a website.
            </p>
            <div style={{ display: "flex", marginTop: 20 }}>
              <FontAwesomeIcon
                icon={["fas", "code"]}
                style={{
                  fontSize: 20,
                  color: "#7ef0ff",
                  marginRight: 15,
                  marginTop: 0
                }}
              />
              <label>PHP, MySql, BootStrap, HTML5, CSS3, JavaScript</label>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default WorkExperience;
