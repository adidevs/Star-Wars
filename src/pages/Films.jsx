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
                        <CategorySVG category="films" width={'20px'} /> <span>{props.title}</span>
                    </div>
                    <MenuButton onClick={toggleDropdown} />
                    {dropdownOpen && <Dropdown />}
                    {infobarOpen && <Infobar category={'Movie'}
                        label1="Title" label1Content={props.title}
                        label2="Director" label2Content={props.director}
                        label3="Release Date" label3Content={props.releaseDate}
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
                    <GridItem title={item.title} />
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
                <div className="details" onClick={toggleInfobar}>{props.title}</div>
                <div>{props.director}</div>
                <div>{props.releaseDate}</div>
                <div className="menu"><MenuButton onClick={toggleDropdown} />
                    {dropdownOpen && <Dropdown view={'list'} />}
                    <DeleteDialog name={"Movie"} />
                </div>
            </div>
            {infobarOpen && <Infobar category={'Movie'}
                label1="Title" label1Content={props.title}
                label2="Director" label2Content={props.director}
                label3="Release Date" label3Content={props.releaseDate}
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
                    <div>Movie Name</div>
                    <div>Director</div>
                    <div>Release Date</div>
                    <div></div>
                </div>
            </div>
            {
                //Mapping through the data and creating a ListItem for each item in the data
                data.map((item) => (
                    <ListItem title={item.title} director={item.director} releaseDate={item.release_date} />
                ))
            }
        </div>
    );
}

const Films = () => {

    //Fetching data from the API
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetchData("films").then((data) => {
            setFilms(data);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    //View toggle functionality
    const [grid, setGrid] = useState(true);

    const toggleView = () => {
        setGrid(!grid);
        const gridSelector = document.querySelector(".gridselector");
        const listSelector = document.querySelector(".listselector");
        gridSelector.classList.toggle("active");
        listSelector.classList.toggle("active");
    }

    return (
        <div className="page">
            <Sidebar category="films" data={films} />
            <div className="pageContent">
                <div className="pageCategory">
                    <h1 className="pageCategoryTitle">Films</h1>
                    <div className="viewSelector" onClick={toggleView}>
                        <div className="selector gridselector active"> <GridSVG fill={grid ? '#696974' : '#ffffff'} /> <span>{grid ? 'Grid' : ''}</span></div>
                        <div className="selector listselector "> <ListSVG fill={grid ? '#ffffff' : '#696974'} /> <span>{grid ? '' : 'List'}</span></div>
                    </div>
                </div>
                <div className="pageData">
                    {grid ? <GridView data={films} /> : <ListView data={films} />}
                </div>
            </div>
        </div>
    );
}

export default Films;