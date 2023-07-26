import {Link} from "react-router-dom"
import {useState} from "react"
import '../styles/Header.css'
import LogoSmall from "../assets/Logo-small-w.png"

export default function Header() 
{
        const [stick, setSticky] = useState(false)
        const [colorPres, setColorPres] = useState(true)
        const [colorProj, setColorProj] = useState(false)
        const [colorComp, setColorComp] = useState(false)
        const [colorCont, setColorCont] = useState(false)

        const changeSticky = () => {
                // console.log(window.scrollY)
                if (window.scrollY > 90 )
                {
                        setSticky(true)
                }
                else
                {
                        setSticky(false)
                }


                if (window.location.pathname.includes('FicheDetail') === true)
                {               
                        setColorProj(true)

                        setColorPres(false)
                        setColorComp(false)
                        setColorCont(false)
                }

                else if (window.scrollY <= 515)
                {
                        setColorPres(true)

                        setColorProj(false)
                        setColorComp(false)
                        setColorCont(false)
                }

                else if (window.scrollY >= 516 && window.scrollY <= 3025)
                {
                        setColorProj(true)

                        setColorPres(false)
                        setColorComp(false)
                        setColorCont(false)
                }
                else if (window.scrollY >= 3026 && window.scrollY <= 3967)
                {
                        setColorComp(true)

                        setColorPres(false)
                        setColorProj(false)
                        setColorCont(false)
                }
                else if (window.scrollY >= 3968)
                {
                        setColorCont(true)

                        setColorPres(false)
                        setColorProj(false)
                        setColorComp(false)
                }

        }

        window.addEventListener("scroll", changeSticky)


        return <header className='header'>

                <div className={stick ? 'header-bloc-scroll' : 'header-bloc'} >

                        <img src={LogoSmall} alt="Logo" className='Logo-small'/>

                        <nav className="nav">
                                <Link to="/" className="nav-text">Accueil</Link>
                                <a href="#presentation" className={colorPres ? 'nav-text-actif' : 'nav-text'} id="nav-presentation">Présentation</a>
                                <a href="#projets" className={colorProj ? 'nav-text-actif' : 'nav-text'} id="nav-projets">Projets</a>
                                <a href="#skills" className={colorComp ? 'nav-text-actif' : 'nav-text'} id="nav-competences">Competences</a>
                                <a href="#contact" className={colorCont ? 'nav-text-actif' : 'nav-text'} id="nav-contact">Contact</a>
                        </nav>
                </div>

                </header>
}

