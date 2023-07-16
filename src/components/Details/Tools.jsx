import { useParams } from "react-router-dom"
import { projetsList } from '../../datas/Projets'

export default function Tools() 
{
        const params = useParams()
        
        const foundTools = projetsList.find(element => element.id === params.id);
        
    return <div className="bloc-tools">
                {foundTools.tools.map
                    ((tag,index) =>
                        <p className="tools" key={index}>{tag}</p>                    
                    )
                }
            </div> 
}

