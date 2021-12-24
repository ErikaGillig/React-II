import react from "react";
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';
import '../styles/pages/Miembros.css';

const MiembrosPage =(props) => {
    return(
        <>
        <Header />
        <Nav />
        <main className="holder">
        <div className="titulo"><h1> Conoce a las chicas!</h1></div>
        <div className="container">
            <div className="card">
                <img src="img/Ahri.jpg" alt="Photo Ahri"/>
                <h4 class="tittle">Ahri, The leader!</h4>
                <p> Líder, fundadora y vocalista principal de K/DA, Ahri deslumbra a los fans con su carisma y confianza.
                 Ella es la pieza central del grupo. De carácter tranquilo, defiende la libertad de expresión y la naturalidad, tanto la 
                suya como la de sus compañeras. Ahri se enorgullece de descubrir talentos nuevos y de ayudarles a alcanzar su máximo potencial.
                </p>
            </div>
        </div>
        <div className="container">
            <div className="card">
                <img src="img/Akali.jpg" alt="Photo Akali"/>
                <h4 className="tittle">Akali, The rapper!</h4>
                <p> Akali es la rapera principal del grupo, con su estilo punk grafitero y su toque audaz y peligroso. 
                    Ella mantiene al equipo constantemente enfocado y valora su independencia creativa, ante todo. Akali siempre está 
                    trabajando en proyectos nuevos y se niega a comprometer su arte. Ella también es rapera en otro grupo llamado 
                    True Damage actualmente en hiatus.
                </p>
            </div>
        </div>
        <div className="container">
            <div className="card">
                <img src="img/Evelynn.jpg" alt="Photo Evelynn "/>
                <h4 className="tittle">Evelynn, the diva!</h4>
                <p> Evelynn es la vocalista líder de K/DA y su presencia sobre el escenario es sencillamente hipnótica. 
                    No le gusta estar a la sombra de nadie y se deleita con la reacción del público ante su apariencia estilizada. 
                    Como cofundadora de K/DA junto con Ahri, Evelynn empuja al grupo hacia sus proyectos creativos más arriesgados y emocionantes.
                </p>
            </div>
        </div>
        <div className="container">
            <div className="card">
                <img src="img/Kaisa.jpg" alt="Photo Kaisa"/>
                <h4 className="tittle">Kai'Sa, The Dancer!</h4>
                <p> Como bailarina principal y coreógrafa del equipo, Kai'Sa solo se conforma con la perfección. 
                    Su enfoque silencioso pero intenso, su misticismo y su impecable atención al detalle impulsan a su equipo. 
                    Kai'Sa tiene una visión cosmopolita de la vida, por lo que cada rincón del mundo la inspira en una forma particular.
                </p>
            </div>
        </div>
        <div className="container">
            <div className="card">
                <img src="img/Seraphine.jpg" alt="Photo Seraphine"/>
                <h4 className="tittle">Seraphine!</h4>
                <p>Es una joven productora y compositora con mucha energía. Para ella, la música es una forma 
                    de conectarse con los demás y con ella misma... Y junto a K/DA, está decidida a alcanzar nuevas alturas. 
                    Sincera y de corazón abierto, Seraphine sueña con unir al mundo a través de su arte.
                </p>
            </div>
        </div>



        </main>

         <Footer />
         </>
    )
}

export default MiembrosPage