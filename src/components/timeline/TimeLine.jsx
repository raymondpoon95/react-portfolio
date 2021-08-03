import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const TimeLine = () => {
  return (
    <div>
      <Timeline lineColor={"#008c8c"}>

        <TimelineItem
          key="0"
          dateText="8/2020 - Present"
          dateInnerStyle={{ background: "#008c8c", color: "#FFFFFF" }}
          bodyContainerStyle={{
            background: "#008c8c",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
        <div style={{ color: "#FFFFFF"}}>
          <h4>PF Nexus</h4>
          <h4 style={{ padding: "5px 5px 5px 0" }}>Graduate software developer</h4>
          <p style={{ textAlign: "justify", lineHeight: "1.5"  }}>Creating and implementing various features to enhance the productivity of the platform using <strong>ReactJS</strong> and <strong>NodeJS</strong></p>
        </div>
        </TimelineItem>

        <TimelineItem
          key="1"
          dateText="9/2016 - 6/2019"
          dateInnerStyle={{ background: "#008c8c", color: "#FFFFFF" }}
          bodyContainerStyle={{
            background: "#008c8c",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
        <div style={{ color: "#FFFFFF"}}>
          <h4>Queen Mary university of London</h4>
          <h4 style={{ padding: "5px 5px 5px 0" }}>Computer science</h4>
          <p style={{ textAlign: "justify", lineHeight: "1.5"  }}>Graduated with a First class honours.<br/>
          Final year dissertation, created a Teaching Assistant Management system using <strong>Django</strong> and <strong>Python</strong>
          </p>
        </div>
        </TimelineItem>

        <TimelineItem
          key="2"
          dateText="9/2015 - 6/2016"
          dateInnerStyle={{ background: "#008c8c", color: "#FFFFFF" }}
          bodyContainerStyle={{
            background: "#008c8c",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
        <div style={{ color: "#FFFFFF"}}>
          <h4>Barking & Dagenham College</h4>
          <h4 style={{ padding: "5px 5px 5px 0" }}>Access to IT</h4>
          <p style={{ textAlign: "justify", lineHeight: "1.5" }}>Passed with Distinction.<br/>
          Created a mathematical calculator <strong>(Python)</strong> which returns the type of triangle based on the length of each side inputted by the user
          </p>
        </div>
        </TimelineItem>

      </Timeline>
    </div>
  )
}

export default TimeLine;

