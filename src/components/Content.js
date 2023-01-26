import React from "react";
import "./Content.scss";
import Clock from "./Clock";

const Content = () => {
    return (
        <div className="Content">
            <Clock />
            <img className="cat" src={process.env.PUBLIC_URL + '/cat.png'} width='20%' height='10%' alt="cat"/>
        </div>
    );
}

export default Content;