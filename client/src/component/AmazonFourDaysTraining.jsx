import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { FaVideo } from "react-icons/fa"; // Import video icon
import Footer from "./footer";

const AmazonFourDaysTraining = () => {
  const courses = [
    {
      title: "Amazon Four Days Training Part 1",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 2",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 3",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 4",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 5",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 6",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 7",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 8",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 9",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 10",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 11",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    {
      title: "Amazon Four Days Training Part 12",
      description: "Learn about Amazon dropshipping and how to succeed.",
      videoUrl: "https://www.youtube.com/embed/6y0AdODciSA",
      pdfUrl: "https://www.example.com/course1.pdf", // Add PDF URL
      links: [
        { text: "Dropshipping Basics", url: "https://www.youtube.com/embed/6y0AdODciSA" },
        { text: "Setting Up Your Amazon Store", url: "https://www.youtube.com/embed/FcI3o25qrvk" },
        { text: "Product Sourcing Strategies", url: "https://www.example.com/video3.mp4" },
        { text: "Effective Marketing Techniques", url: "https://www.example.com/video4.mp4" },
        { text: "Customer Service Best Practices", url: "https://www.example.com/video5.mp4" },
      ],
    },
    // Other courses...
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [activeKey, setActiveKey] = useState("0");
  const [completedCourses, setCompletedCourses] = useState([]);
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);

  const handleAccordionClick = (index, course) => {
    setSelectedCourse(course);
    setActiveKey(activeKey === index.toString() ? "" : index.toString());
    setSelectedLinkIndex(0); // Reset link index when toggling course
  };

  const handleNext = () => {
    const courseIndex = courses.indexOf(selectedCourse);
    const nextLinkIndex = (selectedLinkIndex + 1) % selectedCourse.links.length;
    if (nextLinkIndex === 0) {
      // If at end of links, move to next course
      const nextCourseIndex = (courseIndex + 1) % courses.length;
      setSelectedCourse(courses[nextCourseIndex]);
      setActiveKey(nextCourseIndex.toString());
      setSelectedLinkIndex(0); // Reset link index for new course
    } else {
      setSelectedLinkIndex(nextLinkIndex);
    }
  };

  const handlePrevious = () => {
    const courseIndex = courses.indexOf(selectedCourse);
    const prevLinkIndex = (selectedLinkIndex - 1 + selectedCourse.links.length) % selectedCourse.links.length;
    if (prevLinkIndex === selectedCourse.links.length - 1) {
      // If at start of links, move to previous course
      const prevCourseIndex = (courseIndex - 1 + courses.length) % courses.length;
      setSelectedCourse(courses[prevCourseIndex]);
      setActiveKey(prevCourseIndex.toString());
      setSelectedLinkIndex(courses[prevCourseIndex].links.length - 1); // Set to last link of new course
    } else {
      setSelectedLinkIndex(prevLinkIndex);
    }
  };

  const handleMarkAsComplete = () => {
    if (!completedCourses.includes(selectedCourse.title)) {
      setCompletedCourses([...completedCourses, selectedCourse.title]);
    }
  };

  const handleLinkClick = (index) => {
    setSelectedLinkIndex(index);
  };

  const currentLink = selectedCourse.links[selectedLinkIndex];
  const videoTitle = currentLink ? currentLink.text : selectedCourse.title;

  useEffect(() => {
    const videoElement = document.getElementById("video-player");
    if (videoElement) {
      videoElement.addEventListener("ended", handleNext);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleNext);
      }
    };
  }, [selectedCourse, selectedLinkIndex]);

  return (
    <>
    <Container className="container-custom">
      <Row>
        <Col md={4} className="scrollable-list">
          {/* Add company logo */}
          <div className="company-logo-container">
            <img
              src="/saumiccraft.png" // Replace with your logo URL
              alt="Company Logo"
              className="company-logo"
            />
          </div>
          <div className="navigation-buttons">
            <Button
              variant="secondary"
              onClick={handlePrevious}
              className="nav-button"
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={handleNext}
              className="nav-button"
            >
              Next
            </Button>
          </div>
          <Accordion activeKey={activeKey}>
            {courses.map((course, index) => (
              <Accordion.Item key={index} eventKey={index.toString()} className="accordion-card">
                <Accordion.Header
                  as={Card.Header}
                  eventKey={index.toString()}
                  className="accordion-header"
                  onClick={() => handleAccordionClick(index, course)}
                >
                  {course.title}
                  {completedCourses.includes(course.title) && (
                    <span className="completed-indicator">✔️</span>
                  )}
                </Accordion.Header>
                <Accordion.Body className="accordion-body">
                  <p>{course.description}</p>
                  <ul>
                    {course.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default link behavior
                            handleLinkClick(linkIndex);
                          }}
                          className={linkIndex === selectedLinkIndex ? "active-link" : ""}
                        >
                          <FaVideo className="video-icon" /> {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
        <Col md={8}>
          <Card className="video-card">
            <Card.Body>
              <div className="mark-complete-container">
                <Button
                  variant="success"
                  onClick={handleMarkAsComplete}
                  className="mark-complete-button"
                >
                  Mark as Complete
                </Button>
              </div>
              <Card.Title className="video-title">
                {videoTitle}
              </Card.Title>
              <Card.Text className="video-description">
                {selectedCourse.description}
              </Card.Text>
              {currentLink ? (
                currentLink.url.includes("youtube.com") ? (
                  <iframe
                    id="video-player"
                    className="video-player"
                    src={currentLink.url}
                    title={videoTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video id="video-player" className="video-player" controls>
                    <source src={currentLink.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <iframe
                  id="video-player"
                  className="video-player"
                  src={selectedCourse.videoUrl}
                  title={videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {selectedCourse.pdfUrl && (
                <div className="download-pdf-container">
                  <a href={selectedCourse.pdfUrl} download>
                    <Button variant="primary">Download PDF</Button>
                  </a>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
  
  
};

export default AmazonFourDaysTraining;
