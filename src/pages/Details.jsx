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
                                            Date de fin du projet : {filteredProject.date}
                                            </h2>
                                    </div>


                                    <Carrousel/>

                                    <div className="details-skills-tools">
                                        <div className="details-skills">
                                            <h2>Compétences utilisés dans ce projet</h2>
                                            <Skills/>
                                        </div>

                                        <div className="details-tools">
                                            <h2>Outils utilisés dans ce projet</h2>
                                            <Tools/>
                                        </div>

                                    </div>


                                    <div className='details-bloc-desc'>
                                        <h2 className="details-desc-titre1">
                                            Description du projet 
                                        </h2>
                                        <div className='details-desc'>
                                            <p>
                                                {filteredProject.description}
                                            </p>  
                                            
                                            <div className="details-bloc-links">


                                                {taille.github.length > 1 && 
                                                (
                                                <div className="details-links">
                                                    <Link to={filteredProject.github} target="_blank" className="details-link">
                                                        <i className="fa-brands fa-github ilink"></i>                                                
                                                        <p className="details-link-txt">Code du projet</p>
                                                    </Link>
                                                </div>
                                                )
                                                }

                                                {taille.figma.length > 1 && 
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

