import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { MdDashboard, MdPostAdd } from 'react-icons/md';
import { FaAngleRight, FaCommentAlt } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import { RiUserAddFill } from 'react-icons/ri';
import { GiHumanTarget } from 'react-icons/gi';
import { GrLogin } from 'react-icons/gr';
import { IoNotificationsSharp } from 'react-icons/io5';
import { BsCameraReelsFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "./sidebar.css"

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(null);

    const isOpenSubmenu = (index) => {
        setActiveTab(index === activeTab ? null : index);
    };

    return (
        <div className="sidebar">
            <ul>
                <li className="has-sub-menu">
                    <Button
                        className={`w-100 ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => isOpenSubmenu(0)}
                    >
                        <span className='icon'><MdDashboard /></span>
                        Dashboard
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                   
                        <div className={`submenuWrapper ${activeTab === 0? 'open': 'close'}`}>
                            <ul className='sub-menu'>
                                <li><Link to="/">Amazon User's</Link></li>
                                <li><Link to="#">Website User's</Link></li>
                                <li><Link to="#">Franchise</Link></li>
                            </ul>
                        </div>
            
                </li>

                <li>
                    <Link to="/createcourse">
                        <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><SiCoursera /></span>
                            Create Courses
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/addpost">
                        <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                            <span className='icon'><MdPostAdd /></span>
                            Add Post
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/addusers">
                        <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                            <span className='icon'><RiUserAddFill /></span>
                            Add Users
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                            <span className='icon'><GiHumanTarget /></span>
                            Create Role
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                            <span className='icon'><IoNotificationsSharp /></span>
                            Regular Updates
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                            <span className='icon'><BsCameraReelsFill /></span>
                            Social Media
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}>
                            <span className='icon'><FaCommentAlt /></span>
                            View Comment
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
                            <span className='icon'><GrLogin /></span>
                            Login
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
