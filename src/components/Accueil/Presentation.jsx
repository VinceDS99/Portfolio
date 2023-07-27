import '../../styles/Accueil/Presentation.css'
import Logo from "../../assets/Logo-w-short.png"
import Man from "../../assets/Man.webp"
import {Link} from "react-router-dom"


export default function Presentation() 
{
	return <section className='presentation-bloc' id='presentation'>
                    <div className='presentation-img'>
                        <img src={Man} alt="Man" className='Man'/>
                        <img src={Logo} alt="Logo" className='Logo'/>
                    </div>

                    <div className='presentation'>
                        <span className='presentation-text'>
                            <h2>Bonjour ! </h2>

                            <span>Je m'appelle Vincent Dos Santos, je suis Développeur junior et voici mon portfolio !</span><br/>
                            <span>Je viens de terminer ma formation de développement web de niveau bac +2  sur Open Classroom et je suis maintenant à la recherche d'un emploi dans ce domaine.</span><br/> 
                            <span>Je souhaite devenir un développeur fullstack et j'aimerais donc un travail me permettant d'atteindre cet objectif.</span>
                            <Link to="https://drive.google.com/file/d/1SX-OPmntKHu4VQJ9Pw97M_07SMiUDkZV/view?usp=sharing" target="_blank" title="Lien vers mon CV">
                                <button className="btn"> <i className="fa fa-download"></i> Télécharger mon CV ici !</button>
                            </Link>
                            </span>
                    </div>
            </section>
}
