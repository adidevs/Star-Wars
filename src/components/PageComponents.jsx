import "../styles/PageComponents.css";
import { ViewSVG, DownloadSVG, RenameSVG, ShareSVG, MoveSVG, MarkSVG, DeleteSVG } from "../resources/SVGs.jsx";
import CautionPNG from "../resources/caution.png";

export const MenuButton = (props) => {

    return (
        <div className="menuButton" onClick={props.onClick}>
            <div className="menuButtonLine"></div>
            <div className="menuButtonLine"></div>
            <div className="menuButtonLine"></div>
        </div>
    );
}

export const DeleteDialog = (props) => {
    const toggleDialog = () => {
        const dialog = document.querySelector(".deleteDialog");
        dialog.classList.toggle("active");
    }
    return (
        <div className="deleteDialog">
            <div className="deleteDialogContent">
                <img src={CautionPNG} alt="caution" />
                <div className="deleteDialogText">
                    <h2>Caution!</h2>
                    <p>Are you sure you want to delete <strong>{props.name}</strong>?</p>
                </div>
                <div className="deleteDialogButtons">
                    <button className="deleteDialogButton" onClick={toggleDialog}>Cancel</button>
                    <button className="deleteDialogButton yes" onClick={toggleDialog}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export const Dropdown = (props) => {

    const toggleDialog = () => {
        const dialog = document.querySelector(".deleteDialog");
        dialog.classList.toggle("active");
    }

    return (
        <div className={(props.view === 'list') ? "listDropdown" : "dropdown"}>
            <div className="dropdownItem">
                <ViewSVG />
                <p>View</p>
            </div>
            <div className="dropdownItem">
                <DownloadSVG />
                <p>Download</p>
            </div>
            <div className="dropdownItem">
                <RenameSVG />
                <p>Rename</p>
            </div>
            <div className="dropdownItem">
                <ShareSVG />
                <p>Share Link</p>
            </div>
            <div className="dropdownItem">
                <MoveSVG />
                <p>Move</p>
            </div>
            <div className="dropdownItem">
                <MarkSVG />
                <p>Mark Private</p>
            </div>
            <div className="dropdownItem" onClick={toggleDialog}>
                <DeleteSVG />
                <p>Delete</p>
            </div>
        </div>
    )
}