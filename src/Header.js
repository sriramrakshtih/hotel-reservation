import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/d7/ac/67/d7ac67d50d2769dab9d81d27dfb28883.png"
                    alt=""
                />
            </Link>

            <div className="header__center">
                <input type = "text" />
                <SearchIcon /> 
            </div> 

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>  
        </div>
    )
}

export default Header
