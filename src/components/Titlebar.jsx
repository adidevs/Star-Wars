import React from "react";
import { Link } from "react-router-dom";
import "../styles/Titlebar.css";
import { MenuSVG, SearchSVG } from "../resources/SVGs";
import StarWars from "../resources/star_wars_logo.png.png";

const Titlebar = () => {

    const toggleSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("active");
    }

    return (
        <nav className="titlebar" onClick={toggleSidebar}>
            <div className="Logo">
                <div className="sideMenu"> <MenuSVG /> </div>
                <Link to="/">
                    <img className="StarWarsLogo" src={StarWars} alt="Star Wars" />
                </Link>
            </div>
            <div className="searchContainer">
                <div className="searchIcon">
                    <SearchSVG/>
                </div>
                <input className="Search" type="text" placeholder="Search" />
            </div>
        </nav>
    );
}

export default Titlebar;