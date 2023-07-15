import '../../styles/Accueil/Presentation.css'
import Logo from "../../assets/Logo.png"

const PDF_FILE_URL = 'http://localhost:3000/Curriculum Vitae-Vincent Dos Santos.pdf'

export default function Presentation() 
{
    const downloadFileAtURL = (url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }



	return <div className='presentation-bloc'>
                    <img src={Logo} alt="Logo" className='Logo'/>

                    <div className='presentation'>
                        <span className='presentation-text'>
                            Bonjour ! Je m'appelle Vincent Dos Santos, je suis Développeur junior et voici mon portfolio !<br/>
                            Je viens de terminer ma formation de développement web de niveau bac +2 et je suis maintenant à la recherche d'un emploi dans ce domaine.<br/> 
                            Je souhaite devenir un développeur spécialisé dans le back-end et j'aimerais donc un travail me permettant d'atteindre cet objectif.
<button onClick= {()=>{downloadFileAtURL(PDF_FILE_URL)}} className="btn"> <i className="fa fa-download"></i> Télécharger mon CV ici !</button>
                            </span>

                    </div>
            </div>
}
