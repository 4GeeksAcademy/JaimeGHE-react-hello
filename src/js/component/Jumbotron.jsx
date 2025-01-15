import React from "react";//1. Importar React.
import { BtnCallToAction } from "./BtnCallToAction.jsx";

//5 y 2
export const Jumbotron = () => {
    //3
    return (
        <div className="container">
            <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
                <p className="col-lg-6 mx-auto mb-4">
                    Prueba
                </p>
                <BtnCallToAction/>
            </div>
        </div>
    )
    //4
}
