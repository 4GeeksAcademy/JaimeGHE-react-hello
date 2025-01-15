import React from "react";

export const Spinner = () => {


    const spinner = {
        style: "danger",
        visible: false
    }
    return (
        <div className="container">
            <div className={'spinner-grow" text-${spinner.style} '} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}