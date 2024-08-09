import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Amazon = () => {
  return (
    <Container className="mt-4">
        <h4 className="text-center mb-4">Our Premium Courses</h4>
        <Row>
          <Col md={4}>
            <Card className="course-card mb-4">
              <Card.Img variant="top" src="/Amazon.jpg" alt="Amazon" />
              <Card.Body>
                <Card.Title>Amazon</Card.Title>
                <Card.Text>
                  Amazon Four Days Training
                </Card.Text>
                <ul style={{listStyle:"none"}}>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Get Life Time Access</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Free e-Books</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Call Support</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Accessibility 24*7</li>
                </ul>
                <Link to="/courses/amazon/AmazonFourDaysTraining">
                  <Button variant="primary">View More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card mb-4">
              <Card.Img variant="top" src="/Amazon.jpg" alt="Website" />
              <Card.Body>
                <Card.Title>Amazon</Card.Title>
                <Card.Text>
                  Amazon Four Days Training Part-2
                </Card.Text>
                <ul style={{listStyle:"none"}}>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Get Life Time Access</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Free e-Books</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Call Support</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Accessibility 24*7</li>
                </ul>
                <Link to="/courses/website">
                  <Button variant="primary">View More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card mb-4">
              <Card.Img variant="top" src="/Amazon.jpg" alt="Franchise" />
              <Card.Body>
                <Card.Title>Amazon</Card.Title>
                <Card.Text>
                  Amazon PPC Ads Practice
                </Card.Text>
                <ul style={{listStyle:"none"}}>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Get Life Time Access</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Free e-Books</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Call Support</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Accessibility 24*7</li>
                </ul>
                <Link to="/courses/franchise">
                  <Button variant="primary">View More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default Amazon;
