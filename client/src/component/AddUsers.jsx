import React, { useState, useEffect } from 'react';
import AdminLayout from '../layout/adminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [userFormVisible, setUserFormVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [userService, setUserService] = useState('');
  const [editingUserIndex, setEditingUserIndex] = useState(null);
  const [filterService, setFilterService] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch existing users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUserSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      name: userName,
      enrollmentNumber: enrollmentNumber,
      service: userService,
      date: new Date().toISOString(),
    };

    // Log the form data to the console
    console.log('Form Data:', newUser);

    try {
      setLoading(true);
      setError(null);
      let response;

      if (editingUserIndex !== null) {
        // Update existing user
        response = await fetch(`/api/users/${users[editingUserIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
      } else {
        // Create new user
        response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
      }

      if (response.ok) {
        const savedUser = await response.json();

        if (editingUserIndex !== null) {
          const updatedUsers = [...users];
          updatedUsers[editingUserIndex] = savedUser;
          setUsers(updatedUsers);
          setEditingUserIndex(null);
        } else {
          setUsers([...users, savedUser]);
        }

        // Reset form fields
        setUserName('');
        setEnrollmentNumber('');
        setUserService('');
        setUserFormVisible(false);
      } else {
        setError('Failed to save user: ' + response.statusText);
        console.error('Failed to save user:', response.statusText);
      }
    } catch (error) {
      setError('Error saving user: ' + error.message);
      console.error('Error saving user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserEdit = (index) => {
    const userToEdit = users[index];
    setUserName(userToEdit.name);
    setEnrollmentNumber(userToEdit.enrollmentNumber);
    setUserService(userToEdit.service);
    setUserFormVisible(true);
    setEditingUserIndex(index);
  };

  const handleUserDelete = async (index) => {
    const userId = users[index].id;

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
      } else {
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const filterUsers = () => {
    return users.filter((user) => {
      const serviceMatches = filterService ? user.service === filterService : true;
      const dateMatches = filterDate ? user.date.startsWith(filterDate) : true;
      return serviceMatches && dateMatches;
    });
  };

  return (
    <AdminLayout>
      <div className="container mt-4" style={{ marginLeft: '250px', width: '80%' }}>
        <div className="header mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setUserFormVisible(!userFormVisible)}
          >
            {userFormVisible ? 'Cancel' : 'Add User'}
          </button>
        </div>

        {userFormVisible && (
          <form onSubmit={handleUserSubmit} className="mb-4">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Name of User</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Enrollment Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={enrollmentNumber}
                    onChange={(e) => setEnrollmentNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Select Service</label>
                  <select
                    className="form-control"
                    value={userService}
                    onChange={(e) => setUserService(e.target.value)}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Website">Website</option>
                    <option value="Franchise">Franchise</option>
                    <option value="Amazon Manager">Amazon Manager</option>
                    <option value="Website Manager">Website Manager</option>
                    <option value="Franchise Manager">Franchise Manager</option>
                    <option value="Sub-Admin">Sub-Admin</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  {editingUserIndex !== null ? 'Update User' : 'Add User'}
                </button>
              </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
          </form>
        )}

        {filterUsers().length > 0 && (
          <div className="user-list mt-4">
            <h2>Users</h2>
            <div className="filters mb-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Filter by Service</label>
                    <select
                      className="form-control"
                      value={filterService}
                      onChange={(e) => setFilterService(e.target.value)}
                    >
                      <option value="">All Services</option>
                      <option value="Amazon">Amazon</option>
                      <option value="Website">Website</option>
                      <option value="Franchise">Franchise</option>
                      <option value="Amazon Manager">Amazon Manager</option>
                      <option value="Website Manager">Website Manager</option>
                      <option value="Franchise Manager">Franchise Manager</option>
                      <option value="Sub-Admin">Sub-Admin</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Filter by Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={filterDate}
                      onChange={(e) => setFilterDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Enrollment Number</th>
                    <th scope="col">Service</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterUsers().map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.enrollmentNumber}</td>
                      <td>{user.service}</td>
                      <td>{new Date(user.date).toLocaleString()}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          onClick={() => handleUserEdit(index)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleUserDelete(index)}
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

export default CreateUser;
