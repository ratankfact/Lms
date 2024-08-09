import React, { useState } from 'react';
import AdminLayout from '../layout/adminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FiEdit2 } from 'react-icons/fi';

const CreateCourse = () => {
  const [courseTopics, setCourseTopics] = useState([{ topic: '', description: '', videoUrl: '', pdf: null }]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [publishedCourses, setPublishedCourses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All Category');
  const [filterDate, setFilterDate] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseThumbnail, setCourseThumbnail] = useState(null);

  const handleAddTopic = () => {
    setCourseTopics([...courseTopics, { topic: '', description: '', videoUrl: '', pdf: null }]);
  };

  const handleRemoveTopic = (index) => {
    const newTopics = [...courseTopics];
    newTopics.splice(index, 1);
    setCourseTopics(newTopics);
  };

  const handleTopicChange = (index, field, value) => {
    const newTopics = [...courseTopics];
    newTopics[index][field] = value;
    setCourseTopics(newTopics);
  };

  const handleFileChange = (index, file) => {
    const newTopics = [...courseTopics];
    newTopics[index].pdf = file;
    setCourseTopics(newTopics);
  };

  const handleThumbnailChange = (file) => {
    setCourseThumbnail(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title: event.target.title.value,
      description: courseDescription,
      url: event.target.url.value,
      category: event.target.category.value,
      topics: courseTopics,
      thumbnail: courseThumbnail,
      date: new Date().toLocaleString(),
      author: 'Saumic Craft',
      price: 'Free'
    };

    if (editingIndex !== null) {
      const updatedCourses = [...publishedCourses];
      updatedCourses[editingIndex] = formData;
      setPublishedCourses(updatedCourses);
      setEditingIndex(null);
    } else {
      setPublishedCourses([...publishedCourses, formData]);
    }

    setIsFormVisible(false);
    setCourseTopics([{ topic: '', description: '', videoUrl: '', pdf: null }]);
    setCourseDescription('');
    setCourseThumbnail(null);
  };

  const handleEdit = (index) => {
    const courseToEdit = publishedCourses[index];
    setEditingIndex(index);
    setCourseTopics(courseToEdit.topics);
    setCourseDescription(courseToEdit.description);
    setCourseThumbnail(courseToEdit.thumbnail);
    setIsFormVisible(true);
  };

  const handleDelete = (index) => {
    const updatedCourses = publishedCourses.filter((_, i) => i !== index);
    setPublishedCourses(updatedCourses);
  };

  const filterCourses = () => {
    return publishedCourses.filter(course => {
      const categoryMatch = filterCategory === 'All Category' || course.category === filterCategory;
      const dateMatch = !filterDate || new Date(course.date).toLocaleDateString() === new Date(filterDate).toLocaleDateString();
      return categoryMatch && dateMatch;
    });
  };

  const handleViewCourse = (course) => {
    alert('Viewing course: ' + course.title);
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'color', 'background'
  ];

  return (
    <AdminLayout>
      <div className="container" style={{marginLeft:"250px",width:"80%"}}>
        <div className="header mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            {isFormVisible ? 'Cancel' : 'New Course'}
          </button>
        </div>

        {isFormVisible && (
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
              <label>Course Title</label>
              <input type="text" name="title" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Course Thumbnail</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => handleThumbnailChange(e.target.files[0])}
              />
            </div>
            <div className="form-group">
              <label>Course Description</label>
              <ReactQuill
                theme="snow"
                value={courseDescription}
                onChange={setCourseDescription}
                placeholder="Enter course description..."
                modules={modules}
                formats={formats}
                style={{ height: '250px', marginBottom: '50px' }}
              />
            </div>
            <div className="form-group">
              <label>Intro Course URL</label>
              <input type="url" name="url" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Course Category</label>
              <select name="category" className="form-control" required>
                <option value="Amazon">Amazon</option>
                <option value="Website">Website</option>
                <option value="Franchise">Franchise</option>
                <option value="Flipkart">Flipkart</option>
              </select>
            </div>
            <div className="form-group">
              <label>Course Topics</label>
              {courseTopics.map((topic, index) => (
                <div key={index} className="course-topic mb-2">
                  <input
                    type="text"
                    className="form-control mb-1"
                    placeholder="Topic Title"
                    value={topic.topic}
                    onChange={(e) => handleTopicChange(index, 'topic', e.target.value)}
                    required
                  />
                  <textarea
                    className="form-control mb-1"
                    placeholder="Topic Description (Optional)"
                    value={topic.description}
                    onChange={(e) => handleTopicChange(index, 'description', e.target.value)}
                  ></textarea>
                  <input
                    type="url"
                    className="form-control mb-1"
                    placeholder="Video URL"
                    value={topic.videoUrl}
                    onChange={(e) => handleTopicChange(index, 'videoUrl', e.target.value)}
                  />
                  <input
                    type="file"
                    className="form-control mb-1"
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                  />
                  <button type="button" onClick={() => handleRemoveTopic(index)} className="btn btn-danger btn-sm">Remove</button>
                </div>
              ))}
              <button type="button" onClick={handleAddTopic} className="btn btn-secondary">Add Topic</button>
            </div>
            <button type="submit" className="btn btn-primary">Publish</button>
          </form>
        )}

        {publishedCourses.length > 0 && (
          <div className="published-courses mt-4">
            <h2>Published Courses</h2>
            <div className="filters mb-3 d-flex justify-content-between">
              <div className="form-group mr-2">
                <label>Category</label>
                <select
                  className="form-control"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="All Category">All Category</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Website">Website</option>
                  <option value="Franchise">Franchise</option>
                  <option value="Flipkart">Flipkart</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" />
                    </th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Date</th>
                    <th scope="col">Author</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterCourses().map((course, index) => (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        {course.thumbnail && (
                          <img
                            src={URL.createObjectURL(course.thumbnail)}
                            alt="Course Thumbnail"
                            width="50"
                            height="50"
                            style={{ objectFit: 'cover' }}
                          />
                        )}
                      </td>
                      <td>{course.title}</td>
                      <td>{course.category}</td>
                      <td>{new Date(course.date).toLocaleString()}</td>
                      <td>{course.author}</td>
                      <td>{course.price}</td>
                      <td>
                        <button className="btn btn-primary btn-sm mr-1" onClick={() => handleViewCourse(course)}>
                          View
                        </button>
                        <button className="btn btn-warning btn-sm mr-1" onClick={() => handleEdit(index)}>
                          <FiEdit2 />
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default CreateCourse;
