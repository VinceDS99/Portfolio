import '../../styles/Accueil/Projets.css'
import {projetsList} from '../../datas/Projets'
import {Link} from "react-router-dom"

export default function Projets() 
{
	return <div className='projets-bloc' id='projets'>

                <div className='projets'>
                    <h1 className='projets-text'>
                        Voci différents projets réalisé au cours de mes formations ou pendant mon temps libre :                
                    </h1>

                    <div className='projets-btns'>
                        <button title='Filtrer par outils utilisés' id='projets-btn'> Outils utilisés</button>
                        <button title="Trier en ayant les projets les plus récents d'abord" id='projets-btn'> Projets les plus récents</button>
                        <button title="Trier en ayant les projets les plus anciens d'abord" id='projets-btn'> Projets les plus ancien</button>
                        <button title="Trier en ayant les projets les plus durs pour moi d'abord" id='projets-btn'> Difficultés</button>
                    </div>


                    <div className="projets-all">
                        {projetsList.map((projet) => 
                                            (
                                                <div className='projets-item' key={projet.id}>
                                                    <Link to={"FicheDetail/" + projet.id}  className='loc-text'>
                                                        <img src={projet.cover} alt='Couverture du projet' className='img-projet' ></img>
                                                    </Link>
                                                </div>
                                            ))
                        }
                    </div>


                </div>
            </div>
}
