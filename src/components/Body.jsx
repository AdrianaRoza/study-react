import React from "react";
import Dados from "./Dados";


export default function Body(){
    
    const  crs=() => {
        return ' DSG Cursos'
    } 

    const  vlr= ' R$ 150,00' 
    const  ds= ' 27 e 28 de Setembro'

    return(
        <section>
            <h2>Curso designer</h2>
            <p>Se inscreva em nosso curso</p>
            <p>Não perca a oportunidade de desconto</p>
            <Dados 
                crs= {crs} 
                vlr= {vlr}
                ds= {ds}/>
        </section>
    )
}