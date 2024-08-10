import React, { useState } from "react";
import AdminLayout from "../layout/adminLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios"; // Import Axios

const CreateBlogPost = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [publishedPosts, setPublishedPosts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [generatedResult, setGeneratedResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      title: blogTitle,
      content: blogContent,
      category: blogCategory,
      date: new Date().toLocaleString(),
    };

    try {
      if (editingIndex !== null) {
        // Update existing post in the backend
        await axios.put(
          `/api/posts/${publishedPosts[editingIndex].id}`,
          newPost
        );
        const updatedPosts = [...publishedPosts];
        updatedPosts[editingIndex] = newPost;
        setPublishedPosts(updatedPosts);
        setEditingIndex(null);
      } else {
        // Send the new post to the backend
        const response = await axios.post(
          "http://localhost:5000/api/posts/addPost",
          newPost
        );
        console.log(newPost);
        setPublishedPosts([...publishedPosts, response.data]); // Assuming the backend returns the created post with an id
      }
    } catch (error) {
      console.error("Error saving the post:", error);
    }

    setBlogTitle('');
    setBlogContent('');
    setBlogCategory('');
    setIsFormVisible(false);
  };

  const handleEdit = (index) => {
    const postToEdit = publishedPosts[index];
    setBlogTitle(postToEdit.title);
    setBlogContent(postToEdit.content);
    setBlogCategory(postToEdit.category);
    setIsFormVisible(true);
    setEditingIndex(index);
    setGeneratedResult(null); // Clear generated result when editing
  };

  const handleDelete = (index) => {
    const updatedPosts = publishedPosts.filter((_, i) => i !== index);
    setPublishedPosts(updatedPosts);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  return (
    <AdminLayout>
    <div className="container mt-4" style={{marginLeft:"250px",width:"80%"}}>
      <div className="header mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {isFormVisible ? 'Cancel' : 'New Blog Post'}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Your Blog Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Paragraph</label>
                <ReactQuill
                  value={blogContent}
                  onChange={setBlogContent}
                  modules={modules}
                  formats={formats}
                  className="mb-4"
                />
              </div>
              <button type="submit" className="btn btn-primary">Publish</button>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Category</label>
                <select
                  className="form-control"
                  value={blogCategory}
                  onChange={(e) => setBlogCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Website">Website</option>
                  <option value="Franchise">Franchise</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      )}

      {publishedPosts.length > 0 && (
        <div className="published-posts mt-4">
          <h2>Published Posts</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {publishedPosts.map((post, index) => (
                  <tr key={index}>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{new Date(post.date).toLocaleString()}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
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

export default CreateBlogPost;
