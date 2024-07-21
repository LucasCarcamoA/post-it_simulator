import React, { useRef, useState } from "react";
import Postit from "./Postit";
import { v4 as uuid } from 'uuid';

function Boxpostit() {
    const [postits, setPostits] = useState([]);
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();

    const agregarPostit = () => {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;

        if (descripcion === '')  return;

        setPostits((prev) => {
            const nuevoPostit = {
                id: uuid(),
                importante: importante,
                titulo: titulo,
                descripcion: descripcion
            }
            return [...prev, nuevoPostit];
        });

        //// Limpiar los campos de entrada después de agregar el postit ////
        tituloRef.current.value = '';
        descripcionRef.current.value = '';
        importanteRef.current.checked = false;
    }

    return (
        <div className="container my-3">
            <div className="row g-3">
                <h2>Post It Simulator!</h2>
                <div className="col-md-4">
                    <input ref={tituloRef} className="form-control" placeholder="Título"></input>
                </div>
                <div className="col-md-4">
                    <input ref={descripcionRef} className="form-control" placeholder="Descripcion"></input>
                </div>
                <div className="form-check col-md-2">
                    <input ref={importanteRef} className="form-check-input" type="checkbox"></input>
                    <label class="form-check-label" for="importante">Importante!</label>
                </div>
                <div className="col-md-2">
                    <div className="d-grid gap-2">
                      <button onClick={agregarPostit} className="btn btn-primary" type="button">Agregar</button> 
                    </div>
                </div>
            </div>
            <div className="row g-3">
                {postits.map(postit => (
                    <Postit key={postit.id} titulo={postit.titulo} descripcion={postit.descripcion} importante={postit.importante} />
                ))}
            </div>
        </div>
    );
}

export default Boxpostit;