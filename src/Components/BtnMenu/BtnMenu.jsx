import React from "react";
import "./BtnMenu.css"

function BtnMenu(props){
    return(
        <div className="btn-menu">
            <span className="icone">{props.icone}</span>
            <span>{props.nomeBtn}</span>
        </div>
    );
}

export default BtnMenu;