import './NavBar.css';
import LogoNav from './logoZapa1.png';

export const NavBar = () => {

    return (
        <nav className="navHeader">
            <div className="divLogoNav">
                <img src={LogoNav} className="logoNavImg" alt="logo jordan"></img>
                <h1 className="logoNavText">Zapas Cba!</h1>
            </div>
            <div className="divEnlacesNav">
                <a href="/#" className="enlacesNav">Inicio</a>
                <a href="/#" className="enlacesNav">Nosotros</a>
                <a href="/#" className="enlacesNav">Productos</a>
                <a href="/#" className="enlacesNav">Contacto</a>
            </div>
        </nav>
    );



}
