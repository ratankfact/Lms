import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../layout/adminLayout";
import axios from "axios";
import { Button, Form, Input, Modal, Select } from "antd";

const EditCourse = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchCourseData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/course/getcoursedata/${id}`
      );
      setCourseData(response.data);
    } catch (error) {
      console.error("Error fetching the course data:", error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [id]);

  const handleAddVideo = async (values) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/course/addvideo/${id}`,
        values
      );
      console.log("Video added successfully:", response.data);
      setIsModalVisible(false); // Close the modal after submission
      fetchCourseData(); // Refresh course data to show the newly added video
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <AdminLayout>
      <div
        style={{
          width: "85vw",
          position: "fixed",
          marginLeft: "23%",
          paddingRight: "10%",
        }}
      >
        {courseData ? (
          <div>
            <h2>
              <strong>Course title: </strong>
              {courseData.title}
            </h2>
            <Button type="primary" onClick={showModal}>
              Add Video
            </Button>

            <Modal
              title="Add Video"
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null}
            >
              <Form layout="vertical" onFinish={handleAddVideo}>
                <Form.Item
                  label="Video Title"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input the video title!",
                    },
                  ]}
                >
                  <Input placeholder="Enter video title" />
                </Form.Item>

                <Form.Item
                  label="Video Link"
                  name="link"
                  rules={[
                    { required: true, message: "Please input the video link!" },
                  ]}
                >
                  <Input placeholder="Enter video link" />
                </Form.Item>

                <Form.Item
                  label="Category"
                  name="category"
                  rules={[
                    { required: true, message: "Please select a category!" },
                  ]}
                >
                  <Select placeholder="Select a category">
                    <Select.Option value="basic">Basic</Select.Option>
                    <Select.Option value="intermediate">
                      Intermediate
                    </Select.Option>
                    <Select.Option value="advanced">Advanced</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Course PDF Link"
                  name="coursepdf"
                  rules={[
                    { required: true, message: "Please input the PDF link!" },
                  ]}
                >
                  <Input placeholder="Enter PDF link" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button onClick={handleCancel} style={{ marginLeft: "10px" }}>
                    Cancel
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        ) : (
          <p>Loading course data...</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default EditCourse;
