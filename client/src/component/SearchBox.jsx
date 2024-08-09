import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="SearchBox position relative d-flex align-intems-center">
      <IoSearch className="mr-2"/>

      <input type="text" placeholder="Find Courses and More..."/>
      
    </div>
  );
}

export default SearchBox;
