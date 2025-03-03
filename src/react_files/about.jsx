import React, { useState } from 'react';
import "../css_files/about.css";
import Manoj from "../images/smk_suit.jpg";
import Sumanth from "../images/sumanth_nibba.jpeg";
import Surya from "../images/surya_ganjay.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null); 
    } else {
      setExpandedCard(index); 
    }
  };

  const teamMembers = [
    {
      name: 'Manoj Kumar S',
      photo: Manoj,
      linkedin: 'https://www.linkedin.com/in/manoj-kumar-surabhi/',
      github: 'https://github.com/Manoj-kumar-surabhi',
      instagram: 'https://www.instagram.com/manojsurabhi',
      email: 'mailto:manojsurabhi@example.com',
      about: 'Data Science graduate student with expertise in ML, Data Engineering, and Web Development.',
      details: 'Currently working on building scalable data pipelines and machine learning models for predictive analytics.',
    },
    {
      name: 'Surya Gowtham V',
      photo: Surya,
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
      instagram: 'https://www.instagram.com/',
      email: 'mailto:suryagowtham@example.com',
      about: 'Passionate about AI and cloud technologies, specializing in scalable data solutions.',
      details: 'Focused on developing AI-driven applications and deploying them on cloud platforms like AWS and Azure.',
    },
    {
      name: 'Sumanth Reddy T',
      photo: Sumanth,
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
      instagram: 'https://www.instagram.com/',
      email: 'mailto:sumanthreddy@example.com',
      about: 'Expert in machine learning, automation, and data analytics.',
      details: 'Specializes in automating data workflows and building machine learning models for business insights.',
    },
  ];

  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="profiles">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`profile-card ${expandedCard === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <img src={member.photo} alt={member.name} className="profile-pic" />
            <h3>{member.name}</h3>
            <p>{member.about}</p>
            {expandedCard === index && (
              <div className="details">
                <p>{member.details}</p>
              </div>
            )}
            <div className="links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={member.email}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;