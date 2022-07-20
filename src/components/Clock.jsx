import React from "react";

export default function clock(){
    return(
        <p className="clock">
            {new Date().toLocaleTimeString()}
        </p>
    )
}