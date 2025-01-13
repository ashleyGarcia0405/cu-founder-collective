import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import SplineAnimation from "./components/SplineAnimation";




const teamData = [
  {
    name: "Georgina Alcaraz",
    role: "CEO, Co-founder",
    description: "Something something",
    linkedin: "https://www.linkedin.com/in/gigi/",
  },
  {
    name: "Ashley Garcia",
    role: "CTO, Co-founder",
    description: "Something something",
    linkedin: "https://www.linkedin.com/in/ashley/",
  },
  {
    name: "Bhavya Bellannagari",
    role: "COO, Co-founder",
    description: "bhavya",
    linkedin: "https://www.linkedin.com/in/bhavya/",
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


const App = () => (
  <div className="app">
    <div className="spline-wrapper">
      <SplineAnimation />
    </div>
    <div className="content">
      <TeamSection />
      <ContactSection />
    </div>
  </div>
);

export default App;
