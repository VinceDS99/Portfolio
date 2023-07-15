import '../../styles/Accueil/Projets.css'
import {projetsList} from '../../datas/Projets'
import {Link} from "react-router-dom"

export default function Projets() 
{
	return <div className='Projets-bloc'>

                <div className='projets'>
                    <span className='Projets-text'>
                        Voci différents projets réalisé au cours de mes formations ou pendant mon temps libre :                <i class="fa-brands fa-square-github" id="icon-github"></i>

                    </span>

                    <div className='projets-btn'>
                        <button title='Filtrer par outils utilisés'> Outils utilisés</button>
                        <button title="Trier en ayant les projets les plus récents d'abord"> Projets les plus récents</button>
                        <button title="Trier en ayant les projets les plus anciens d'abord"> Projets les plus ancien</button>
                        <button title="Trier en ayant les projets les plus durs pour moi d'abord"> Difficultés</button>
                    </div>



                    {projetsList.map((projet) => 
                    (
                        <div className='projets-item' key={projet.id}>
                            <img src={projet.cover} alt='Image du projet' className='img-projet' ></img>
                            <Link to={"Fiche/" + projet.id}  className='loc-text'>
                            </Link>
                        </div>
                    ))
                    }

                </div>
            </div>
}
