import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";

const courses = [
  {
    title: "Course 1: Amazon Dropshipping Basics",
    description: "Learn the fundamentals of Amazon dropshipping, including account setup, product sourcing, and more.",
    imageUrl: "/Amazon.jpg",
    learnMoreUrl: "#",
  },
  {
    title: "Course 2: Advanced Amazon Strategies",
    description: "Dive deep into advanced strategies for scaling your Amazon dropshipping business.",
    imageUrl: "/Amazon.jpg",
    learnMoreUrl: "#",
  },
  {
    title: "Course 3: Mastering Customer Service",
    description: "Learn how to provide exceptional customer service and maintain a positive seller reputation.",
    imageUrl: "/Amazon.jpg",
    learnMoreUrl: "#",
  },
];

const CourseCards = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                sx={{ pt: "-0.75%" }} // 16:9 ratio
                image={course.imageUrl}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography>{course.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={course.learnMoreUrl}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseCards;
