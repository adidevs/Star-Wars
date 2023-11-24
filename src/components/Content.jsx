import React from "react";
import "../styles/Content.css";
const Content = () => {
    return (
        <div className="welcome">
            <div className="greeting">
                <img className="greetingImage" src="https://picsum.photos/647/218" alt="picsum" />
                <h1>Welcome to Star Wars Dashboard</h1>
                <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
            </div>
        </div>
    );
}

export default Content;

