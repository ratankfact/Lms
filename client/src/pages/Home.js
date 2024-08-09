import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import '../App.css'; // Ensure this path is correct based on your file structure
import Timeline from '../component/Timeline';
import { Link } from 'react-router-dom';
// import NewTestimonials from '../component/newTestimonials';
import Footer from '../component/footer'; // Ensure the path is correct



const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleButtonClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div>
      <Container className="mt-4">
        <h4 className="text-center mb-4">Our Premium Courses</h4>
        <Row>
          <Col md={4}>
            <Card className="course-card mb-4">
              <Card.Img variant="top" src="Amazon.jpg" alt="Amazon" />
              <Card.Body>
                <Card.Title>Amazon</Card.Title>
                <Card.Text>
                Amazon Four days Live Training
                </Card.Text>
                <ul style={{listStyle:"none"}}>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Get Life Time Access</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Free e-Books</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Call Support</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Accessibility 24*7</li>
                </ul>
                <Link to="/courses/amazon">
                  <Button variant="primary">View More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card mb-4">
              <Card.Img variant="top" src="Amazon.jpg" alt="Website" />
              <Card.Body>
                <Card.Title>Website</Card.Title>
                <Card.Text>
                  Website Dropshipping Full Training
                </Card.Text>
                <ul style={{listStyle:"none"}}>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Get Life Time Access</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Free e-Books</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Call Support</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Accessibility 24*7</li>
                </ul>
                <Link to="/courses/website">
                  <Button variant="primary" className="Button-center">View More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card mb-4">
              <Card.Img variant="top" src="Amazon.jpg" alt="Franchise" />
              <Card.Body>
                <Card.Title>Franchise</Card.Title>
                <Card.Text>
                  How to get Dropskills Franchise
                </Card.Text>
                <ul style={{listStyle:"none"}}>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Get Life Time Access</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Free e-Books</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Call Support</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Accessibility 24*7</li>
                </ul>
                <Link to="/courses/franchise">
                  <Button variant="primary" className="Button-center">View More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="text-center mt-4">
        <Dropdown>
          <Dropdown.Toggle variant="success" className='Latest' onClick={handleDropdownToggle}>
            Some Latest Information Only For You
          </Dropdown.Toggle>
          {showDropdown && (
            <Dropdown.Menu>
              <Dropdown.Item href="#action/3.1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action/3.2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action/3.3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          )}
        </Dropdown>
      </div>

      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <div className="d-flex flex-column align-items-start">
              <Button variant="info" className="my-2" onClick={() => handleButtonClick('My Name is Ratan Kumar Srivastava, Pursuing BCA From Gyan Vihar University')} style={{ backgroundColor: 'white' }}>
                <h3>Hands-on training</h3> Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.
              </Button>
              <Button variant="info" className="my-2" onClick={() => handleButtonClick('This is another message for Button 2')} style={{ backgroundColor: 'white' }}>
                <h3>Certification prep</h3> Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.
              </Button>
              <Button variant="info" className="my-2" onClick={() => handleButtonClick('This is a different message for Button 3')} style={{ backgroundColor: 'white' }}>
                <h3>Insights and analytics</h3> Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.
              </Button>
              <Button variant="info" className="my-2" onClick={() => handleButtonClick('Here is a unique message for Button 4')} style={{ backgroundColor: 'white' }}>
                <h3>Customizable content</h3> Create tailored learning paths for team and organization goals and even host your own content and resources.
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="message-container sticky-message-box" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              {selectedMessage && (
                <div className="message">
                  <p>{selectedMessage}</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <h3 className="text-center pt-3">Your Working Stage</h3>

      <Container className="d-flex justify-content-center my-4">
        <Timeline />
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
