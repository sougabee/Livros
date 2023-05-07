import React from "react";
import "./Menu.css"
import BtnMenu from "../BtnMenu/BtnMenu";
import { TiHeartOutline, TiStarOutline, TiPointOfInterestOutline} from "react-icons/ti";

function Menu(){
    return(
        <div>
            <BtnMenu icone={<TiHeartOutline />} nomeBtn="Favoritos" />
            <BtnMenu icone={<TiPointOfInterestOutline />} nomeBtn="Desejados" />
            <BtnMenu icone={<TiStarOutline />} nomeBtn="Avaliados" />
            <BtnMenu icone={<TiStarOutline />} nomeBtn="Resenha" />
        </div>
    );
}

export default Menu;