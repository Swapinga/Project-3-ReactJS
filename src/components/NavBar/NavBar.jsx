import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
function NavBar() {
    return(
        <nav>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Informacion</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
                <li>
                    <a href="/"><CartWidget /></a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;