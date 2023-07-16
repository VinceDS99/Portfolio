import { useParams } from "react-router-dom"
import { projetsList } from '../../datas/Projets'
import '../../styles/Details/SkillsTools.css'

export default function Skills() 
{
        const params = useParams()
        
        const foundSkills = projetsList.find(element => element.id === params.id);
        
    return <div className="bloc-skills">
                {foundSkills.skills.map
                    ((tag,index) =>
                        <p className="skills" key={index}>{tag}</p>                    
                    )
                }
            </div> 
}

