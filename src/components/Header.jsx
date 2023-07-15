import {Link} from "react-router-dom"
import '../styles/Header.css'
import LogoSmall from "../assets/Logo-small.png"

export default function Header() 
{
        return <header className="header">

                <div className="header-bloc" >
                        <img src={LogoSmall} alt="Logo" className='Logo-small'/>

                        <nav className="nav">
                                <Link to="/" className="nav-text">Présentation</Link>
                                <Link to="/A-propos" className="nav-text">Projets</Link>
                                <a href="#contact" className="nav-text">Contact</a>
                        </nav>
                </div>

                </header>
}

