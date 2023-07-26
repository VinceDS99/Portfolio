import { useParams } from "react-router-dom"
import { projetsList } from '../../datas/Projets'
import '../../styles/Details/SkillsTools.css'

export default function Skills() 
{
        const params = useParams()
        
        const foundSkills = projetsList.find(element => element.id === params.id);
        
    return <div className="">
                
                
                {foundSkills.skills.length > 1 && (
                    <h2>Compétences utilisées dans ce projet</h2>
                        )
                }

                {foundSkills.skills.length  === 1 && (
                    <h2>Compétence utilisée dans ce projet</h2>
                    )
                }

                <div className="bloc-skills">
                    {foundSkills.skills.map
                        ((tag,index) =>
                            <p className="skills" key={index}>{tag}</p>                    
                        )
                    }
                </div>

            </div> 
}

