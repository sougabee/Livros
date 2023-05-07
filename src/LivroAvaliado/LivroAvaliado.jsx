import React from "react";
import "./LivroAvaliado.css";
import { TiStar, TiStarOutline } from "react-icons/ti";

function LivroAvaliado(props){
    return(
        <div className="livro-avaliado">
            <img className="capa-livro" src={props.capa} alt="" />
            <br />
            {props.nota > 0 ? <TiStar />:<TiStarOutline />}
            {props.nota > 1 ? <TiStar />:<TiStarOutline />}
            {props.nota > 2 ? <TiStar />:<TiStarOutline />}
            {props.nota > 3 ? <TiStar />:<TiStarOutline />}
            {props.nota > 4 ? <TiStar />:<TiStarOutline />}

        </div>
    );
}

export default LivroAvaliado;