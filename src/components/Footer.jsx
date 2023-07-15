import '../styles/Footer.css'
import github from '../assets/github.png'
import {Link} from "react-router-dom"

export default function Footer() 
{
    return <footer className="Footer-bloc">
                
                <div className="footer-links">

                    <Link to="https://github.com/VinceDS99?tab=repositories"  className='loc-text' target="_blank">
                    <img src={github} alt="Logo" className='logo-github'/>
                    </Link>

                    <span className="footer-text">Mes liens github et</span>
                </div>


            </footer>
}

