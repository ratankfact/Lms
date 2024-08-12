import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import SocialMediaContent from './pages/SocialMediaContent';
import RegularUpdates from './pages/RegularUpdates';
import Navbar from './component/Navbar.jsx';
import Amazon from './component/Amazon.jsx';
import Website from './component/Website.jsx';
import Franchise from './component/Franchise.jsx';
import AmazonFourDaysTraining from './component/AmazonFourDaysTraining.jsx';
import Footer from './component/footer.jsx';
import Admin from './pages/Admin.jsx';
import CreateCourse from './component/CreateCourse.jsx';
import AddPost from './component/AddPost.jsx';
import AddUsers from './component/AddUsers.jsx';
import ViewCourse from './component/ViewCourse.jsx';
import EditCourse from './component/EditCourse.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/social-media" element={<SocialMediaContent />} />
          <Route path="/updates" element={<RegularUpdates />} />
          <Route path="/courses/amazon" element={<Amazon />} />
          <Route path="/courses/website" element={<Website />} />
          <Route path="/courses/franchise" element={<Franchise />} />
          <Route path="/courses/amazon/AmazonFourDaysTraining" element={<AmazonFourDaysTraining />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/createcourse" element={<CreateCourse />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/addusers" element={<AddUsers />} />
          <Route path="/viewcourse" element={<ViewCourse />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
