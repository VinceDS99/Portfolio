import { useParams } from "react-router-dom"
import { listProjets } from '../../datas/Projets'

export default function Tools() 
{
        const params = useParams()
        
        const foundTools = listProjets.find(element => element.id === params.id);
        
    return <div className="">
                                    
                    {foundTools.tools.length > 1 && (
                        <h2>Outils utilisés dans ce projet</h2>
                        )
                    }

                    {foundTools.tools.length  === 1 && (
                        <h2>Outil utilisé dans ce projet</h2>
                        )
                    }

                <div className="bloc-tools">
                    {foundTools.tools.map
                        ((tag,index) =>
                            <p className="tools" key={index}>{tag}</p>                    
                        )
                    }
                </div>

            </div> 
}

