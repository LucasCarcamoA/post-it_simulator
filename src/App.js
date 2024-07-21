import React from "react";
import Postit from "./Postit";


function App(props) {
    return (
        <div className="container my-3">
            <div className="row g-3">
                <h2>Post It Simulator!</h2>
                <div className="col-md-4">
                    <input className="form-control" placeholder="Título"></input>
                </div>
                <div className="col-md-4">
                    <input className="form-control" placeholder="Descripcion"></input>
                </div>
                <div className="form-check col-md-2">
                    <input id="importante" className="form-check-input" type="checkbox"></input>
                    <label class="form-check-label" for="importante">Importante!</label>
                </div>
                <div className="col-md-2">
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary" type="button">Agregar</button> 
                    </div>
                </div>
            </div>
            <div className="row g-3 my-3">
                <Postit></Postit>
                <Postit></Postit>
                <Postit></Postit>
                <Postit></Postit>
                <Postit></Postit>
            </div>
        </div>
    );
}

export default App;