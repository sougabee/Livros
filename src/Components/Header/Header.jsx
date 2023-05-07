import React from "react";
import "./Header.css"


function Header(){
   

    return(
        <header>
            <img className="foto-perfil" src="https://gabriela-afrotech.netlify.app/gabi2.png" alt="" />
            <span className="nome-usuario">Gabee Ferraz</span>
            <div className="lidos">
                
             
                
            </div>
            <div className="vou-ler">
                <span>30</span>
                <span>Meta de Leitura</span>
                
            </div>
        </header>
    );
}

export default Header;
