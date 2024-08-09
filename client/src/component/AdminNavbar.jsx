import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { MdMenuOpen, MdLightMode, MdRemoveRedEye } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
// import SearchBox from '../SearchBox';
import { GoMention } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import Divider from '@mui/material/Divider';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [commentsEl, setCommentsEl] = useState(null);

  const open = Boolean(anchorEl);
  const commentsOpen = Boolean(commentsEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCommentsClick = (event) => {
    setCommentsEl(event.currentTarget);
  };

  const handleCommentsClose = () => {
    setCommentsEl(null);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          {/* Logo Area */}
          {/* <div className="col-sm-2 part1">
            <Link to={'/'} className="d-flex align-items-center logo">
              <span className="ml-2">DropSkills</span>
            </Link>
          </div> */}

          <div className="col-sm-3 part2 pl-4 d-flex align-items-center">
            <Button className="rounded-circle ml-2 mr-3" variant="text" style={{ margin: '0 3rem' }}>
              <MdMenuOpen />
            </Button>
            {/* <SearchBox /> */}
          </div>

          <div className="col-sm-7 part3 d-flex justify-content-end pl-4 align-items-center">
            <Button className="rounded-circle ml-2 mr-3" variant="text" style={{ margin: '.5rem' }}>
              <MdLightMode />
            </Button>
            <Button className="rounded-circle ml-2 mr-3" variant="text" style={{ margin: '.5rem' }}>
              <MdRemoveRedEye />
            </Button>
            <Button className="rounded-circle ml-2 mr-3" variant="text" style={{ margin: '.5rem' }} onClick={handleCommentsClick}>
              <FaRegCommentAlt />
            </Button>

            <Button className="rounded-circle ml-2 mr-3" variant="text" style={{ margin: '.5rem' }}>
              <GoMention />
            </Button>
            <div className="myAccwrapper">
              <Button className="myAcc d-flex align-items-center" onClick={handleClick}>
                <div className="userImage">
                  <span className="rounded-circle">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/3217907/63de0136d9811_download.jpg" alt="User avatar" />
                  </span>
                </div>

                <div className="myUserInfo">
                  <h5>Ratan Babu</h5>
                  <p className="mb-0">@emp_ratan_90</p>
                </div>
              </Button>
              
              <Menu
                anchorEl={anchorEl}
                id="profile"
                className="profile"
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {/* My Profile Area */}
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <IoMdSettings style={{marginRight:"20px"}} />
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <RiLogoutBoxLine style={{marginRight:"20px"}}/>
                  Logout
                </MenuItem>
              </Menu>

              {/* Comments Menu */}
              <Menu
                anchorEl={commentsEl}
                id="comment"
                className="commemt dropdown_list"
                open={commentsOpen}
                onClose={handleCommentsClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <div className="head" pl-3 pb-0>
                <h4><u>Total Comments (8)</u></h4>
                </div>
                <Divider className='mb-3'/>

                <div className='scroll'>
                <MenuItem onClick={handleCommentsClose} style={{ width: 300 }}>
              <div className='d-flex'>
                <div>
                <div className="userImage">
                  <span className="rounded-circle">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/3217907/63de0136d9811_download.jpg" alt="User avatar" />
                  </span>
                </div>
                </div>

                <div className='dropdownInfo'>
                  <h4>
                    <span className='data' mb-0>
                      <b>Ratan: </b>
                      One to का Four Four to का One My Name is Ratan
                    </span>
                  </h4>
                  <p className='text-sky' mb-0>few seconds ago</p>
                </div>
              </div>
            </MenuItem>

            <MenuItem onClick={handleCommentsClose} style={{ width: 300 }}>
              <div className='d-flex'>
                <div>
                <div className="userImage">
                  <span className="rounded-circle">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/3217907/63de0136d9811_download.jpg" alt="User avatar" />
                  </span>
                </div>
                </div>

                <div className='dropdownInfo'>
                  <h4>
                    <span className='data' mb-0>
                      <b>Ratan: </b>
                      One to का Four Four to का One My Name is Ratan
                    </span>
                  </h4>
                  <p className='text-sky' mb-0>few seconds ago</p>
                </div>
              </div>
            </MenuItem>

            <MenuItem onClick={handleCommentsClose} style={{ width: 300 }}>
              <div className='d-flex'>
                <div>
                <div className="userImage">
                  <span className="rounded-circle">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/3217907/63de0136d9811_download.jpg" alt="User avatar" />
                  </span>
                </div>
                </div>

                <div className='dropdownInfo'>
                  <h4>
                    <span className='data' mb-0>
                      <b>Ratan: </b>
                      One to का Four Four to का One My Name is Ratan
                    </span>
                  </h4>
                  <p className='text-sky' mb-0>few seconds ago</p>
                </div>
              </div>
            </MenuItem>

            <MenuItem onClick={handleCommentsClose} style={{ width: 300 }}>
              <div className='d-flex'>
                <div>
                <div className="userImage">
                  <span className="rounded-circle">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/3217907/63de0136d9811_download.jpg" alt="User avatar" />
                  </span>
                </div>
                </div>

                <div className='dropdownInfo'>
                  <h4>
                    <span className='data' mb-0>
                      <b>Ratan: </b>
                      One to का Four Four to का One My Name is Ratan
                    </span>
                  </h4>
                  <p className='text-sky' mb-0>few seconds ago</p>
                </div>
              </div>
            </MenuItem>

            <MenuItem onClick={handleCommentsClose} style={{ width: 300 }}>
              <div className='d-flex'>
                <div>
                <div className="userImage">
                  <span className="rounded-circle">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/3217907/63de0136d9811_download.jpg" alt="User avatar" />
                  </span>
                </div>
                </div>

                <div className='dropdownInfo'>
                  <h4>
                    <span className='data' mb-0>
                      <b>Ratan: </b>
                      One to का Four Four to का One My Name is Ratan
                    </span>
                  </h4>
                  <p className='text-sky' mb-0>few seconds ago</p>
                </div>
              </div>
            </MenuItem>

            <MenuItem onClick={handleCommentsClose} style={{ width: 300 }}>
              <div className='d-flex'>
                <div>
                <div className="userImage">
                  <span className="rounded-circle">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/3217907/63de0136d9811_download.jpg" alt="User avatar" />
                  </span>
                </div>
                </div>

                <div className='dropdownInfo'>
                  <h4>
                    <span className='data' mb-0>
                      <b>Ratan: </b>
                      One to का Four Four to का One My Name is Ratan
                    </span>
                  </h4>
                  <p className='text-sky' mb-0>few seconds ago</p>
                </div>
              </div>
            </MenuItem>
          </div>
            <div className='pl-3 pr-3 w-100 pt-3 pb-1'>
            <Button className='btn-blue w-100'>View All Comments</Button>
              </div>    
        </Menu>
      </div>
    </div>
  </div>
</div>
</header>
  );
} 

export default Header;
