import React, { useEffect, useState, useRef } from 'react';
import "../App.css"; // Ensure your CSS file includes the necessary styles

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null); // Reference to the timeline element

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const timelineOffsetTop = timelineRef.current.offsetTop;

    const docHeight = document.documentElement.scrollHeight - timelineOffsetTop;

    const timelineScroll = Math.max(scrollTop - timelineOffsetTop + windowHeight, 0);

    const totalScroll = Math.min((timelineScroll / docHeight) * 100, 100);

    setScrollProgress(totalScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline">
        <div
          className="timeline-progress"
          style={{ height: `${scrollProgress}%` }}
        ></div>
        <div className="timeline-labels">
          <div className="timeline-label" style={{ top: '10%', marginLeft: "-60px" }}>Come</div>
          <div className="timeline-label" style={{ top: '35%' }}>Learn</div>
          <div className="timeline-label" style={{ top: '55%', marginLeft: "-45px" }}>Sell</div>
          <div className="timeline-label" style={{ top: '75%' }}>Earn</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
