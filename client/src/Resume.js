// Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h1>Joshua Backus</h1>
      <p>Email: joshua.backus@example.com | Phone: (123) 456-7890</p>

      <section>
        <h2>Education</h2>
        <p>BS in Cybersecurity, City University of Seattle</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>React, Node.js, GitHub</li>
          <li>Python, JavaScript, Linux</li>
          <li>Network Security, Ethical Hacking</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <p>PNW Fitness – Tech & Compliance Officer (2023–Present)</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Wearable-Based Response System (AI + anomaly detection)</li>
          <li>Automated Medical Triage and Staffing System</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
