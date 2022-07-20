import React from "react";

export default function Dados({crs, vlr, ds}){
    return(
        <section>
            <p>Curso:{crs()}</p>
            <p>Valor:{vlr}</p>
            <p>Dias:{ds}</p>

        </section>
    )
}

 