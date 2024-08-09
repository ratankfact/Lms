// src/component/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Ensure this path is correct based on your file structure

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {new Date().getFullYear()} Saumic Craft. All rights reserved.</p>
            <p>
              <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
