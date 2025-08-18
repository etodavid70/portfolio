import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface JobDetailsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  children: React.ReactNode;
}

const JobDetailsOverlay: React.FC<JobDetailsOverlayProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  date,
  location,
  children
}) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-backdrop" onClick={onClose} />
      <div className="overlay-content">
        <button className="overlay-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p className="overlay-date">{date} | {location}</p>
        <div className="overlay-scrollable">
          {children}
        </div>
      </div>
    </div>
  );
};

interface JobExperience {
  id: string;
  date: string;
  location: string;
  title: string;
  subtitle: string;
  techStack: string;
  details: React.ReactNode;
  skills?: React.ReactNode;
}

function Timeline() {
  const [openOverlayId, setOpenOverlayId] = useState<string | null>(null);

  const jobExperiences: JobExperience[] = [
    {
      id: "polaris",
      date: "January 2025 – Present",
      location: "Lagos State, Nigeria",
      title: "Polaris Digitech",
      subtitle: "Mobile Engineer| SDK Developer(Contract)",
      techStack: "Kotlin, Flutter, React Native",
      details: (
        <div>
          <p>As a Mobile Engineer, I architected and developed a mobile SDK for address verification, designed for seamless integration into digital banking applications.</p>
          <ul>

            <li>The SDK is to be adopted by over 15+ financial institutions and integrated into apps with a combined user base of over 10 million+ active users.</li>
            <li>Built with Kotlin and React Native support, the library enabled rapid onboarding and reduced integration time by 40% for client development teams.</li>
            <li>Ensured compliance with industry standards for data security and KYC regulations.</li>
            <li>Implemented a modular structure that allowed for 99.9% crash-free sessions and optimized performance across low-end devices.</li>
            <li>My contributions directly supported faster user verification flows, improving user onboarding success rates by 30%.</li>
          </ul>
        </div>
      ),

    },
    {
      id: "tm30",
      date: "April 2024 – September 2024",
      location: "Onikan, Lagos, Nigeria",
      title: "TM30",
      subtitle: "Mobile Application Developer (Contract)",
      techStack: "Kotlin & Flutter",
      details: (
        <div>
          <ul>
            <li>Developed and maintained cross-platform mobile applications for Android and iOS using Flutter and Dart.</li>
            <li>Collaborated with designers, product managers, and backend teams to deliver seamless user experiences.</li>
            <li>Implemented state management (e.g GetX, Provider) and integrated APIs for dynamic data handling.</li>
            <li>Optimized app performance, ensured responsive designs, and followed best practices for mobile security.</li>
            <li>Debugged, tested, and deployed apps to the Google Play Store and Apple App Store.</li>
            <li>Delivered successful fintech projects, including a full banking application for a Microfinance Bank.</li>
          </ul>
        </div>
      )
    },
    {
      id: "tech-champions",
      date: "October 2023 – May 2024",
      location: "Ikeja, Lagos, Nigeria",
      title: "Tech Champions",
      subtitle: "Mobile Application Developer (Hybrid, Contract)",
      techStack: "Flutter",
      details: (
        <div>
          <ul>
            <li>Architected a scalable mobile application framework projected to support over 50,000 active users, ensuring optimal performance and user experience.</li>
            <li>Implemented automated testing protocols that decreased bug reports by 30% in the first release cycle.</li>
            <li>Integrated APIs, managed state with GetX, and optimized performance for different mobile platforms.</li>
            <li>Drove the initiative to more responsive development process that improved deliverable quality, benefiting 8 employees directly.</li>
          </ul>
        </div>
      )
    },
    {
      id: "globaltech",
      date: "March 2022 – September 2023",
      location: "Ikorodu, Lagos, Nigeria",
      title: "Globaltech World Computer Institute",
      subtitle: "Mobile App Developer & Backend Engineer",
      techStack: "Flutter & Django",
      details: (
        <div>
          <ul>
            <li>Delivered comprehensive lectures and practical sessions on Flutter, and API development with Django.</li>
            <li>Guided students through the development of cross-platform mobile apps for iOS and Android, emphasizing efficient design patterns and best coding practices.</li>
            <li>Developed hands-on projects and assignments to help students gain real-world experience in mobile app development and backend engineering.</li>
            <li>Provided mentorship and technical support to students, ensuring they mastered Flutter and Django.</li>
          </ul>
        </div>
      )
    }
  ];

  const handleOpenOverlay = (id: string) => {
    setOpenOverlayId(id);
  };

  const handleCloseOverlay = () => {
    setOpenOverlayId(null);
  };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {jobExperiences.map((job) => (
            <React.Fragment key={job.id}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date={job.date}
                iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">{job.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{job.subtitle}</h4>
                <p>{job.location}</p>
                <p>Tech Stack: {job.techStack}</p>
                <button
                  className="overlay-link"
                  onClick={() => handleOpenOverlay(job.id)}
                >
                  View Details
                </button>
              </VerticalTimelineElement>

              <JobDetailsOverlay
                isOpen={openOverlayId === job.id}
                onClose={handleCloseOverlay}
                title={job.title}
                subtitle={job.subtitle}
                date={job.date}
                location={job.location}
              >
                {job.details}
                {job.skills && job.skills}
              </JobDetailsOverlay>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;