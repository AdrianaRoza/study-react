import React from "react";

export default function Dados({crs, vlr, ds}){
    return(
        <section className="cvd">
            <p>Curso:{crs()}</p>
            <p>Valor:{vlr}</p>
            <a href="https://github.com/AdrianaRoza" target='_blank'>Github Adriana</a>

        </section>
    )
}

 