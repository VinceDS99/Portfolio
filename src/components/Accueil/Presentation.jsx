import '../../styles/Accueil/Presentation.css'
import Logo from "../../assets/Logo-w-short.png"
import Man from "../../assets/Man.webp"

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
                                <button onClick= {()=>{downloadFileAtURL(PDF_FILE_URL)}} className="btn"> <i className="fa fa-download"></i> Télécharger mon CV ici !</button>
                            </span>
                    </div>
            </section>
}
