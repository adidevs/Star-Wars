import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import CategorySVG from "../resources/CategorySVG.jsx";
import { Angle, FolderSVG } from "../resources/SVGs.jsx";


const CategoryList = (props) => {

    const category = props.category;
    const listData = props.data;


    return (
        <div className="categoryList">
            {(listData !== "no") && listData.map((item, index) => (
                <div key={index} className="listItem">
                    <div className="listItemLink">
                        <CategorySVG width={'16px'} category={category} />
                        <span>{(category === 'films') ? item.title : item.name}</span> {/* Assuming there is a 'name' property in your data */}
                    </div>
                    <Angle />
                </div>
            ))}
        </div>
    );
}

const SidebarItem = (props) => {

    const listData = props.active;

    const [listOpen, setListOpen] = useState(false);
    const toggleList = () => {
        setListOpen(!listOpen);
    }
    return (
        <div className="sidebarItem">
            <div className={`category ${(listData !== "no")? `active` : ``}`}>
                <Link className="categoryTitle" to={`/${props.category.toLowerCase()}`}><FolderSVG /> <span>{props.category}</span></Link> <Angle onClick={toggleList} />
            </div>
            {listOpen && <CategoryList category={`${props.category.toLowerCase()}`} data={listData}/>}
        </div>
    );
}



const Sidebar = (props) => {

    const activeCategory = props.category;
    const listData = props.data;

    return (
        <div className="sidebar">
            <SidebarItem category="Films" active={(activeCategory === 'films') ? listData : "no"}/>
            <SidebarItem category="People" active={(activeCategory === 'people') ? listData : "no"} />
            <SidebarItem category="Planets" active={(activeCategory === 'planets') ? listData : "no"}/>
            <SidebarItem category="Species" active={(activeCategory === 'species') ? listData : "no"}/>
            <SidebarItem category="Starships" active={(activeCategory === 'starships') ? listData : "no"}/>
            <SidebarItem category="Vehicles" active={(activeCategory === 'vehicles') ? listData : "no"}/>
        </div>
    );
}

export default Sidebar;