import React from "react";
import './Style.css';

function Postit(props) {
    const rotationClass = props.rotation === 'left' ? 'rotate-left' : 'rotate-right';
    
    return (
        <div className={`col-md-3 ${props.importante ? 'importante' : ''} ${rotationClass}`}>
            <div className="card-body mt-3">
                <h5 className="card-title">{props.titulo || ""}</h5>
                <br></br>
                <p className="card-text">{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Postit;