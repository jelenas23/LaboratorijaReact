import React from 'react'
import Laboratorija from './Laboratorija'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Laboratorije() {

    const [laboratorije, setLaboratorije] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/laboratorija').then(res => {
            console.log('Rez: ' + JSON.stringify(res))
            setLaboratorije(res.data.data)
        });
    }, []);


    const prikazLaboratorija = laboratorije.map(lab => (
        <Laboratorija key={lab.id} laboratorija={lab} />
    ))

    return (
        <div className="row row-cols-1 row-cols-sm-2 g-3">
            {prikazLaboratorija}
        </div>
    );
}

export default Laboratorije
