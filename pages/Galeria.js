import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';
import '../styles/pages/Galeria.css';


import React from 'react'

const Galeria = () => (
    <div>
        <Header />
        <Nav />
        <div className="titulo"> <h1> Fotos, recuerdos y más </h1> </div>

        <div className="gallery">
            <div className="img-card"><img src="img/Vestuario.jpg" alt="Pruebas del vestuario" /></div>
            <div className="img-card"><img src="img/Discografica.jpg" alt="Día de lanzamiento del mini album" /></div>
            <div className="img-card"><img src="img/camerin ii.jpg" alt="En los Camerinos durante el rodaje del Video musical" /></div>
            <div className="img-card"><img src="img/in stage III.jpg" alt="Estrella de la suerte antes de salir a escena" /></div>
            <div className="img-card"><img src="img/sesion I.jpg" alt="Sesion para Dazzed China" /></div>
            <div className="img-card"><img src="img/sesion II.jpg" alt="Sesion para Dazzed China" /></div>

        </div>
        <div clasName="modal">
            <span className="close">x</span>
            <img src="" alt="" id="mymodalimg" />
            <div className="caption-text"></div>
            <div className="list">
                <img src="img/Vestuario.jpg" alt="Pruebas del vestuario" />
                <img src="img/Discografica.jpg" alt="Día de lanzamienton del mini album" />
                <img src="img/camerin ii.jpg" alt="En los Camerinos durante el rodaje del Video musical" />
                <img src="img/in stage III.jpg" alt="Estrella de la suerte antes de salir a escena" />
                <img src="img/sesion I.jpg" alt="Sesion para Dazzed China" />
                <img src="img/sesion II.jpg" alt="Sesion para Dazzed China" />

            </div>

        </div>

        <Footer />
    </div>
)

export default Galeria