import React from "react";
import "./CardAvaliacao.css";
import LivroAvaliado from "../../LivroAvaliado/LivroAvaliado";
import logo1 from "../../1.jpg"
import logo2 from "../../2.jpg"

function CardAvaliacao(props){
    return(
        <div className="card-avaliacao">
           <LivroAvaliado nota="5" capa={logo1} />
                    <div className="resenha">
            <h4>{props.titulo}</h4>
            <p>{props.resenha}</p>
            
           </div>
        </div>
    );
}

export default CardAvaliacao; 