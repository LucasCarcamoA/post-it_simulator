import React, {useRef, useState} from "react";
import './Style.css';

function Postit(props){
    return (
        <div className="col-md-3">
            <div className="card text-bg">
                <div className="card-header">titulo</div>
                <div className="card-body">
                    <p className="card-text">cuerpo</p>
                </div>
            </div>
        </div>
    );
}

export default Postit;