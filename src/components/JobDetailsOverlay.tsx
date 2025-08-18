
import React from 'react';

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
          <div style={{ paddingBottom: '1rem' }}> {/* Added padding container */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};