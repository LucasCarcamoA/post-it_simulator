// Postit.js
import React from "react";
import './Style.css';

function Postit(props) {
    const rotationClass = props.rotation === 'left' ? 'rotate-left' : 'rotate-right';

    return (
        <div className={`col-md-3 ${props.importante ? 'importante' : ''} ${rotationClass}`}>
            <div className="card-body mt-3 position-relative">
                <h5 className="card-title">{props.titulo || ""}</h5>
                <br />
                <p className="card-text">{props.descripcion}</p>
                <button className="btn btn-danger btn-sm position-absolute" onClick={() => props.onDelete(props.id)}>Eliminar</button>
            </div>
        </div>
    );
}

export default Postit;
