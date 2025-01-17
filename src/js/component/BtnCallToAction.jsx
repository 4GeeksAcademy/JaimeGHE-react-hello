import React from "react";

export const BtnCallToAction = () => {

    const handleOnClick = () => {
        alert("presioné el botón")
    }

    let action = {
        text: "Regístrate",
        background: "warning"
    }

    return (
        <button
        className={`btn btn-${action.background} px-5 mb-5`} 
        type="button"
        onClick={handleOnClick}
        >
            {action.text}
        </button>
    ) 
}