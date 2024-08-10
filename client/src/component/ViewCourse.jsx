import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import AdminLayout from "../layout/adminLayout";
import { useNavigate } from "react-router-dom"; // Correct import from react-router-dom
import axios from "axios";

const ViewCourse = () => {
  const [courseData, setCourseData] = useState([]);
  console.log(courseData); // Ensure this prints the expected data
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const getCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/course/getallcourses"
      );
      setCourseData(response.data.courses || response.data); // Adjust based on your actual API structure
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleCardClick = (id) => {
    console.log(id);
    navigate(`/edit-course/${id}`); // Navigate to the edit page when a card is clicked
  };

  return (
    <AdminLayout>
      <Container sx={{ py: 8, ml: 40, w: 800 }}>
        <Grid container spacing={4}>
          {courseData.length > 0 ? (
            courseData.map((course, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onClick={() => handleCardClick(course._id)}
                >
                  <CardMedia
                    component="img"
                    image={course.thumbnail || "default-thumbnail.jpg"} // Ensure a default image if `thumbnail` is missing
                    alt={course.title}
                    sx={{ height: 140 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                    <ul>
                      <li>{course.bullet1}</li>
                      <li>{course.bullet2}</li>
                      <li>{course.bullet3}</li>
                      <li>{course.bullet4}</li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", width: "100%" }}
            >
              No courses available.
            </Typography>
          )}
        </Grid>
      </Container>
    </AdminLayout>
  );
};

export default ViewCourse;