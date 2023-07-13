import {Link} from "react-router-dom"

export default function Header() 
{
        return <header className="header">

                <div className="header-bloc" >
                        <nav className="nav">
                                <Link to="/" className="nav-text">Accueil</Link>
                                <Link to="/A-propos" className="nav-text">A propos</Link>
                        </nav>
                </div>

                </header>
}

