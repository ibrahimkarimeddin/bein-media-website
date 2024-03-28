import React from 'react';
import './SearchBar.scss';
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
    return (
        <div className='SearchBar'>
            <div className="group">
                <FaSearch className="icon" />
                <input placeholder="Search By Name" type="search" className="input" />
            </div>
        </div>
    );
};

export default SearchBar;
