import React from "react";
import Logo from './Imgs/logo.jpg'

export default function Header(){

    return(
        <header>
            <h1 className="header" >Designer</h1>
            <img className="logo" src={Logo}/>
        </header>
        
    )
}
