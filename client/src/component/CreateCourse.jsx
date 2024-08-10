import React, { useState } from 'react';
import { Form, Input, Button, Typography, Layout } from 'antd';
import AdminLayout from '../layout/adminLayout';

const { Title } = Typography;
const { Content } = Layout;

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    bullet1: '',
    bullet2: '',
    bullet3: '',
    bullet4: '',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(formData)
    try {
      // Define the API endpoint
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      if (response.ok) {
        console.log('Course created successfully!');
        // Optionally reset the form
        setFormData({
          title: '',
          description: '',
          bullet1: '',
          bullet2: '',
          bullet3: '',
          bullet4: '',
          thumbnail: '',
        });
      } else {
        console.error('Failed to create course.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <AdminLayout>
      <Content style={{ padding: '50px', width: '50%', marginLeft: '30%' }}>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Title level={2}>Create Course</Title>
          <Form.Item label="Course Title">
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Course Description">
            <Input.TextArea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Course Bullet Point 1">
            <Input
              name="bullet1"
              value={formData.bullet1}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Course Bullet Point 2">
            <Input
              name="bullet2"
              value={formData.bullet2}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Course Bullet Point 3">
            <Input
              name="bullet3"
              value={formData.bullet3}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Course Bullet Point 4">
            <Input
              name="bullet4"
              value={formData.bullet4}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Course Thumbnail URL">
            <Input
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </AdminLayout>
  );
};

export default CreateCourse;
