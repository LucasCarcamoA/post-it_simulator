import React, { useEffect, useRef, useState } from "react";
import Postit from "./Postit";
import { v4 as uuid } from 'uuid';
import './Style.css';

function Boxpostit() {
    const [postits, setPostits] = useState([]);
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();

    // Local storage
    const KEY = 'post-it-simulator';

    useEffect(() => {
        const misPostit = JSON.parse(localStorage.getItem(KEY));
        if (misPostit) {
            setPostits(misPostit);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(postits);
        console.log(json);
        localStorage.setItem(KEY, json);
    }, [postits]);
    //-------------------------------------

    const agregarPostit = () => {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;

        if (descripcion === '') return;

        const rotation = Math.random() < 0.5 ? 'left' : 'right';

        setPostits((prev) => {
            const nuevoPostit = {
                id: uuid(),
                importante: importante,
                titulo: titulo,
                descripcion: descripcion,
                rotation: rotation
            };
            return [...prev, nuevoPostit];
        });

        // Limpiar los campos de entrada después de agregar el postit
        tituloRef.current.value = '';
        descripcionRef.current.value = '';
        importanteRef.current.checked = false;
    };

    const eliminarPostit = (id) => {
        setPostits((prev) => prev.filter(postit => postit.id !== id));
    };

    return (
        <div className="container my-3">
            <div className="row g-3">
                <h2 className="hh">Post It Simulator!</h2>
                <div className="col-md-4">
                    <input ref={tituloRef} className="form-control" placeholder="Título" />
                </div>
                <div className="col-md-4">
                    <input ref={descripcionRef} className="form-control" placeholder="Descripción" />
                </div>
                <div className="form-check col-md-2">
                    <input ref={importanteRef} className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="importante">Importante!</label>
                </div>
                <div className="col-md-2">
                    <div className="d-grid gap-2">
                        <button onClick={agregarPostit} className="btn btn-secondary" type="button">Agregar</button>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row g-3">
                {postits.map(postit => (
                    <Postit
                        key={postit.id}
                        id={postit.id}
                        titulo={postit.titulo}
                        descripcion={postit.descripcion}
                        importante={postit.importante}
                        rotation={postit.rotation}
                        onDelete={eliminarPostit}
                    />
                ))}
            </div>
        </div>
    );
}

export default Boxpostit;
