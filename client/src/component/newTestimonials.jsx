import React from 'react';
import { Card } from 'react-bootstrap';
import "../App.css";

const testimonials = [
  {
    profileImage: 'profile.jpg',
    name: 'Ratan',
    description: 'This platform has been amazing for my business growth. Highly recommend it!',
  },
  {
    profileImage: 'profile.jpg',
    name: 'Chaman',
    description: 'I have learned so much from the courses here. The instructors are top-notch.',
  },
  {
    profileImage: 'profile.jpg',
    name: 'Ratan',
    description: 'This platform has been amazing for my business growth. Highly recommend it!',
  },
  {
    profileImage: 'profile.jpg',
    name: 'Chaman',
    description: 'I have learned so much from the courses here. The instructors are top-notch.',
  },
  // Add more testimonials as needed
];

const NewTestimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-item">
          <Card>
            <div className="profile-image-container">
              <Card.Img 
                variant="top" 
                src={testimonial.profileImage} 
                alt={`Profile ${index + 1}`} 
                className="profile-image" 
              />
            </div>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}><em>{testimonial.name}</em></Card.Title>
              <Card.Text>{testimonial.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default NewTestimonials;
