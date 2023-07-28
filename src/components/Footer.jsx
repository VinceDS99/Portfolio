import '../styles/Footer.css'
import github from '../assets/github.png'
import {Link} from "react-router-dom"
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import Linkedin from '../assets/Linkedin.png'

export default function Footer() 
{
    return <footer className="Footer-bloc">
                
                <div className="footer-links">
                    <div className="footer-circle">

                        <Link to="https://github.com/VinceDS99?tab=repositories"  className='loc-text' target="_blank" title="Lien vers mon GitHub">
                        <img src={github} alt="Logo" className='logo-github' id='logo-github'/>
                        </Link>

                        <a href="mailto:vincedos@hotmail.com" title='vincedos@hotmail.com'>
                            <img src={mail} alt="Logo" className='logo-mail'/>
                        </a>

                        <a href="tel:+33621037753" title='Mon numéro de téléphone : 06 21 03 77 53'>
                            <img src={phone} alt="Logo" className='logo-phone'/>
                        </a>

                        <Link to="https://www.linkedin.com/in/vincent-dos-santos-863b98284/"  className='loc-text' target="_blank" title="Lien vers mon Linkedin">
                            <img src={Linkedin} alt="Logo" className='logo-linkedin'/>
                        </Link>
                    </div>


                    <span className="footer-text">Mon lien github, mon mail, mon numéro et mon linkedin</span>
                </div>


            </footer>
}

