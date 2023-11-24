import React from "react";
import "../styles/Infobar.css";

const Infobar = (props) => {

    return(
        <div className="infobar active">
            <div className="infobarHeader">
                <div className="infobarHeading">{props.category} Details</div>
                <div className="X" onClick={props.onClose}>X</div>
            </div>
            <div className="infoSection">
                <div className="label">Image</div>
                <img src="https://picsum.photos/360/250" alt="Pic" />
                <div className="label">{props.label1}</div>
                <div className="content">{props.label1Content}</div>
                <div className="label">{props.label2}</div>
                <div className="content">{props.label2Content}</div>
                <div className="label">{props.label3}</div>
                <div className="content">{props.label3Content}</div>
            </div>
            <div className="footer">
                <div className="close" onClick={props.onClose}>Close</div>
            </div>
        </div>
    )
}

export default Infobar;