import { useParams } from "react-router-dom"
import { projetsList } from '../datas/Projets'
import {Link} from "react-router-dom"
import '../styles/Details/Details.css'

import Skills from '../components/Details/Skills'
import Tools from '../components/Details/Tools'
import Carrousel from '../components/Details/Carrousel'
import NavigationError from "../components/NavigationError"

export default function Details() 
{
        const params = useParams()
        const taille = projetsList.find(element => element.id === params.id)
        console.log(taille.date)

        var dateDMY = taille.date
        const dateFin = new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(dateDMY);


        return <div className='' >

                    <NavigationError/>
                        
                    {projetsList.filter(projet => projet.id === params.id).map((filteredProject,index) => 

                    <div key={index}>
                            <div className="details-bloc" >
                                <div className='bloc-title'>
                                        <h1 className="details-titre1">
                                        Nom du projet : {filteredProject.title}
                                        </h1>
                                        <h2 className="details-titre2">
                                        Date de fin du projet : {dateFin}
                                        </h2>
                                </div>  
                                <Carrousel/>
                                <div className='details-bloc-desc'>
                                    <h2 className="details-desc-titre1">
                                        Description du projet 
                                    </h2>
                                    <div className='details-desc'>
                                        <p className="details-desc-txt">
                                            {filteredProject.description}
                                        </p>  
                                        {filteredProject.tasks.length > 0 &&
                                            <h2>Tâches principales réalisés :</h2>
                                        }
                                        
                                        {filteredProject.tasks.length > 0 && filteredProject.tasks.map
                                            ((task,index) =>
                                                <p className="detais-desc-task" key={index}>- {task}</p>                    
                                            )
                                        }
                                        

                                        <h2>Contexte de la réalisation du projet :</h2>
                                        <p className="details-desc-context">
                                            {filteredProject.context}
                                        </p>
                                            
                                        <div className="details-skills-tools">
                                        <div className="details-skills">
                                            <Skills/>
                                        </div>

                                        <div className="details-tools">
                                            <Tools/>
                                        </div>
                                    </div>
                                            

                                            <div className="details-bloc-links">

                                                {taille.github.length > 5 && 
                                                (
                                                <div className="details-links">
                                                    <Link to={filteredProject.github} target="_blank" className="details-link">
                                                        <i className="fa-brands fa-github ilink"></i>                                                
                                                        <p className="details-link-txt">Code du projet</p>
                                                    </Link>
                                                </div>
                                                )
                                                }

                                                {taille.link.length > 5 && 
                                                (
                                                <div className="details-links">
                                                    <Link to={filteredProject.link} target="_blank" className="details-link">
                                                        <i className="fa-solid fa-link ilink"></i>
                                                        <p className="details-link-txt">Le site du projet</p>
                                                    </Link>
                                                </div>
                                                )
                                                }

                                                {taille.figma.length > 5 && 
                                                (
                                                <div className="details-links">
                                                    <Link to={filteredProject.figma} target="_blank" className="details-link">
                                                        <i className="fa-brands fa-figma ilink"></i>
                                                        <p className="details-link-txt">Maquette du projet</p>
                                                    </Link>
                                                </div>
                                                )
                                                }
                                            </div>

                                        </div>
                                    </div>
                            </div>
                    </div>                        
                    )
                    }  

                </div>  
}

