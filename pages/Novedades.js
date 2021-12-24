import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';
import '../styles/pages/Novedades.css';

const Novedades = () => {
    return (
        <>
            <Header />
            <Nav />
            <h1 class="titulo">Noticias sobre K/DA</h1>
            <div className="noticias">
        <img src="img/In stage I.jpg" alt=" Foto en stage"/>
        <h1 className="titulo">The Queens are back!</h1>
        <p> Nuestras diosas volvieron con todo su espledor a los escenarios y que mejor que volver de la mano de una pequeña futura promesa
            en la mùsica. ASI ES! Las chicas de K/DA se presentaron junto a Seraphine en un estadio replete de fanaticos que rondaban
            la cantidad aproximada de 20.000 espectadores.
            En dicha presentacion pusieron en escena todo el nuevo mini album All out mostrando cada una de ellas su escencia con canciones solo de las
            integrantes. ¿Aun no viste el regreso de nuestras reinas? ¡QUE ESPERAS!<a href="https://www.youtube.com/watch?v=3VTkBuxU4yk">Ven a mirarlo</a>
        </p>
    </div>
    <div class="noticias">
        <img src="img/Evelynn villain.gif" alt=" Fragmento de video"/>
        <h1 class="titulo"> Straight up Villain</h1>
        <p> Nuestra flamante diva Evelynn por fin logro estrenar su MV en solitario con una cancion compuesta por ella y para ella misma.
            Villain es ese tipo de canciónes que te suben el autoestima en días muy grises y sombríos. Con el cambio de ritmo y melodía tan 
            adictiva no vas a poder parar de escucharla.
            <a href="https://www.youtube.com/watch?v=xoWxv2yZXLQ">Click aquí para escucharla</a>
        </p>
    </div>
    <div class="noticias">
        <img src="img/Ahri will show you.gif" alt=" Fragmento de video"/>
        <h1 class="titulo">I will show you</h1>
        <p> Nuestra preciosa líder anda de estreno con su video de canción solista. Como siempre nuestra Ahri brilla por su gran
            visual y talentosisima voz. I will show you fue una canción escrita por ella que nos narra un poco lo atrapada que se sentía 
            en su carrera artistica teniendo que siempre buscar los conceptos populares y no los que ella quería hacer con todo su corazón.
            <a href="https://www.youtube.com/watch?v=WW1BpABbzHs">Click aquí para escucharla</a>
        </p>
    </div>
    <h1 class="titulo"> ¿Te interesa estar al tanto?. Suscribete</h1>
    <div class="formulario">
        <form>
            <ul>
             <li><label for="name">Nombre:</label> <input type="text" id="name" name="user_name"/></li>
             <li><label for="mail">Correo electrónico: </label><input type="email" id="mail" name="user_mail"/></li>
             <li><label for="msg">Cuentanos un poco de tí: </label><textarea id="msg" name="user_message"></textarea></li>
            </ul>
            <li class="button"><button type="submit">Enviar</button></li>
           </form>
           </div>    
            <Footer />
        </>
    )
}

export default Novedades
