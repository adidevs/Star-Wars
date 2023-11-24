import React, { useState, useEffect } from "react";
import { MenuButton, DeleteDialog, Dropdown } from "../components/PageComponents.jsx";
import "../styles/Pages.css";
import { GridSVG, ListSVG } from "../resources/SVGs.jsx";
import CategorySVG from "../resources/CategorySVG.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Infobar from '../components/Infobar.jsx';
import { fetchData } from "../utils/api.js";


const GridItem = (props) => {

    //Dropdown menu functionality
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    //Infobar functionality
    const [infobarOpen, setInfobarOpen] = useState(false);
    const toggleInfobar = () => {
        setInfobarOpen(!infobarOpen);
    }

    return (
        <div className="gridItem">
            <div className="gridItemData">
                <img src="https://picsum.photos/400/190" alt="film pic" />
                <div className="gridItemContent">
                    <div className="gridItemTitle" onClick={toggleInfobar}>
                        <CategorySVG category="people" width={'20px'} /> <span>{props.name}</span>
                    </div>
                    <MenuButton onClick={toggleDropdown} />
                    {dropdownOpen && <Dropdown />}
                    {infobarOpen && <Infobar category={'Character'}
                        label1="Name" label1Content={props.name}
                        label2="Birth" label2Content={props.birthdate}
                        label3="Species" label3Content={props.species}
                        onClose={toggleInfobar} />}
                    <DeleteDialog name={"Movie"} />
                </div>
            </div>
        </div>
    )
}

const GridView = (props) => {

    //Data from the API passed as props
    const data = props.data;
    console.log(data);
    return (
        <div className="gridView">
            {
                //Mapping through the data and creating a GridItem for each item in the data
                data.map((item) => (
                    <GridItem name={item.name} />
                ))
            }
        </div>
    );
}

const ListItem = (props) => {

    //Dropdown menu functionality
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    //Infobar functionality
    const [infobarOpen, setInfobarOpen] = useState(false);
    const toggleInfobar = () => {
        setInfobarOpen(!infobarOpen);
    }

    return (
        <div className="listViewItem">
            <div className="listItemData">
                <div className="details" onClick={toggleInfobar}>{props.name}</div>
                <div>{props.birthdate}</div>
                <div>{props.species}</div>
                <div className="menu"><MenuButton onClick={toggleDropdown} />
                    {dropdownOpen && <Dropdown view={'list'} />}
                    <DeleteDialog name={"Movie"} />
                </div>
            </div>
            {infobarOpen && <Infobar category={'Character'}
                label1="Name" label1Content={props.name}
                label2="Birth" label2Content={props.birthdate}
                label3="Species" label3Content={props.species}
                onClose={toggleInfobar} />}
        </div>
    );
}

const ListView = (props) => {

    //Data from the API passed as props
    const data = props.data;
    console.log(data);

    return (
        <div className="listView">
            <div className="listHeader">
                <div className="listItemData">
                    <div>Name</div>
                    <div>Birthdate</div>
                    <div>Gender</div>
                    <div></div>
                </div>
            </div>
            {
                //Mapping through the data and creating a ListItem for each item in the data
                data.map((item) => (
                    <ListItem name={item.name} birthdate={item.birth_year}
                        species={item.gender} />

                ))
            }
        </div>
    );
}

const People = () => {

    //Fetching data from the API
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData("people").then((data) => {
            setData(data);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    //View toggle functionality
    const [grid, setGrid] = useState(false);

    const toggleView = () => {
        setGrid(!grid);
        const gridSelector = document.querySelector(".gridselector");
        const listSelector = document.querySelector(".listselector");
        gridSelector.classList.toggle("active");
        listSelector.classList.toggle("active");
    }

    return (
        <div className="page">
            <Sidebar category="people" data={data} />
            <div className="pageContent">
                <div className="pageCategory">
                    <h1 className="pageCategoryTitle">People</h1>
                    <div className="viewSelector" onClick={toggleView}>
                        <div className="selector gridselector "> <GridSVG fill={grid ? '#696974' : '#ffffff'} /> <span>{grid ? 'Grid' : ''}</span></div>
                        <div className="selector listselector active"> <ListSVG fill={grid ? '#ffffff' : '#696974'} /> <span>{grid ? '' : 'List'}</span></div>
                    </div>
                </div>
                <div className="pageData">
                    {grid ? <GridView data={data} /> : <ListView data={data} />}
                </div>
            </div>
        </div>
    );
}

export default People;