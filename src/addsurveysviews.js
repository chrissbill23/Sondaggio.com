import ReactDOM from "react-dom";
import React from "react";

export default function MainView() {
    ReactDOM.render(
        <React.StrictMode>
            <div className="sdg_slider">
            </div>
        </React.StrictMode>,
        document.getElementById('sdg_body')
    );
}

