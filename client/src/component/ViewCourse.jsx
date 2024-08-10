import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import AdminLayout from '../layout/adminLayout';
import { useEffect } from 'react';
import { SiAxios } from 'react-icons/si';


const ViewCourse = () => {
    const [courseData, setCourseData]=([]);
    const getTicket = async () => {

    try {
      const response = await SiAxios.get(
        "http://localhost:5000/api/course/getallcourses",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setCourseData(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }

  };

  useEffect(() => {
    getTicket();
  }, []);










  const courses = [
    {
      title: 'React Basics',
      description: 'Learn the basics of React, including components, state, and props.',
      thumbnail: 'https://via.placeholder.com/140',
    },
    {
      title: 'Advanced React',
      description: 'Deep dive into advanced topics in React, such as hooks, context, and more.',
      thumbnail: 'https://via.placeholder.com/140',
    },
    // Add more course objects as needed
  ];

  return (
    <AdminLayout>
      <Container sx={{ py: 8, ml:40 }}>
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={course.thumbnail}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AdminLayout>
  );
};

export default ViewCourse;
