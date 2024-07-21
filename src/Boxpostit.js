import React, { useEffect, useRef, useState } from "react";
import ItemTarea from "./ItemTarea";
import { v4 as uuid } from 'uuid';

function Boxpostit() {

    const [postit, setPostit] = useState([]);
    const postitRef = useRef();

    const agregarPostit = () => {
        const postit = postitRef.current.value;
        console.log(postit);

        if (postit === '') return;

        setPostit( (prev) => {
            const nuevoPostit = {
                id:uuid(),
                importante: false,
                titulo:titulo,
                descripcion:descripcion
            }
            return [...prev, nuevoPostit];
        })
    }
    
}

export default ListaTareas;