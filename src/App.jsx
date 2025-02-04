import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import SplineAnimation from "./components/spline_animations";

const teamData = [
  {
    name: "Bhavya Bellannagari",
    role: "Co-founder",
    description: "Computer Science and Entreprenuership @Columbia University",
    linkedin: "https://www.linkedin.com/in/bhavya-bellannagari/",
  },
  {
    name: "Ashley Garcia",
    role: "Co-founder",
    description: "Computer Science and Math @Columbia University",
    linkedin: "https://www.linkedin.com/in/ashley-garcia1/",
  },
];

const timelineData = [
  {
    date: "2021",
    event: "Company Founded",
  },
  {
    date: "2022",
    event: "First Product Launch",
  },
  {
    date: "2023",
    event: "Series A Funding",
  },
];

const ContactSection = () => (
  <div className="contact-section">
    <h2>Contact Us</h2>
    <div className="contact-options">
      <div>
        <p>Email Us</p>
        <a href="mailto:founders@anthrogen.com">founders@anthrogen.com</a>
      </div>
      <div>
        <p>Work With Us</p>
        <a href="#open-roles">See Open Roles</a>
      </div>
      <div>
        <p>Follow Us</p>
        <a href="https://www.linkedin.com">LinkedIn</a>
      </div>
    </div>
  </div>
);

const TeamSection = () => (
  <div className="team-section">
    <h2>Team</h2>
    <div className="team-grid">
      {teamData.map((member, index) => (
        <div key={index} className="team-member">
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <p>{member.description}</p>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      ))}
    </div>
  </div>
);

const TimelineSection = () => (
  <div className="timeline-section">
    <h2>Vertical Timeline</h2>
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <div className="timeline-number">{index + 1}</div>
            <h3>{item.event}</h3>
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="app">
    <div className="spline-wrapper">
      <SplineAnimation />
    </div>
    <div className="content">
      <TeamSection />
      <TimelineSection />
      <ContactSection />
    </div>
  </div>
);

export default App;
