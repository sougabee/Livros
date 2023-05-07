import React from "react";
import "./Estante.css";
import LivroAvaliado from "../../LivroAvaliado/LivroAvaliado";
import logo from "../../logo.svg";
import logo1 from "../../1.jpg";
import logo2 from "../../2.jpg";
import logo3 from "../../3.jpg";
import logo4 from "../../4.jpg";
import logo5 from "../../5.jpg";
import logo6 from "../../6.jpg";

function Estante(){
    return(
        <div className="estante">
            <LivroAvaliado nota="3" capa={logo1}/>
            <LivroAvaliado nota="4" capa={logo2}/>
            <LivroAvaliado nota="5" capa={logo3}/>
            <LivroAvaliado nota="2" capa={logo4}/>
            <LivroAvaliado nota="4" capa={logo5}/>
            <LivroAvaliado nota="5" capa={logo6}/>
        </div>
    );
}

export default Estante;