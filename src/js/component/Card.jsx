import React from "react";
import logoReact from "../../img/rigo-baby.jpg"

export const Card = () => {


    return (
        <div className="card bg-warning-subtle" style={{ width: "18rem"}}>
            <img src="https://randomuser.me/api/portraits/men/94.jpg" className="card-img-top" alt="..."/>
            <img src={logoReact} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Título de la card</h5>
                    <p className="card-text">Aquí iría alguna cosa</p>
                    <a href="#" className="btn btn-primary">Ir a algún lado</a>
                </div>
        </div>
    )
}