import { useParams } from "react-router-dom"
import { projetsList } from '../../datas/Projets'
import '../../styles/Details/Carrousel.css'

export default function Carrousel() 
{
        const params = useParams()        
        const found = projetsList.find(element => element.id === params.id);

        var i = 0

        if (found !== undefined) 
        {
            var pictures = found.pictures[i]

            var taille = found.pictures.length        
        }

        var num = i + 1

        function getPictureNext() 
        {            
            i  = i + 1

            if (i === found.pictures.length)
            {
                i = 0
            }

            var pictures = found.pictures[i]
            const imgDiv = document.querySelector('#imageCarousel')
            imgDiv.src = pictures

            num = i + 1
            const numDiv = document.querySelector('#numeroImage')
            numDiv.innerHTML = num
        }

        function getPicturePrev() 
        {            
            i  = i - 1
            if (i === -1)
            {
                i = found.pictures.length - 1
            }

            var pictures = found.pictures[i]
            const imgDiv = document.querySelector('#imageCarousel')
            imgDiv.src = pictures

            num = i + 1
            const numDiv = document.querySelector('#numeroImage')
            numDiv.innerHTML = num
        }

    return <div>
                <div className="bloc-carrousel">

                
                    {taille > 1 && (
                        <div className="bloc-arrow" id="arrows">
                            <i className="fa-solid fa-chevron-left chevron" id='arrowLeft' onClick={() => getPicturePrev()}></i>
                        </div>
                        )
                    }

                    <img src={pictures} alt="Image du projet" className='carrousel-image' id="imageCarousel"/>
                    
                    {taille > 1 && (
                        <div className="bloc-arrow" id="arrows">
                            <i className="fa-solid fa-chevron-right chevron" id='arrowRight' onClick={() => getPictureNext()}></i><br></br>
                        </div>
                        )
                    }


                </div> 

                <div className="bloc-num">
                <span id="numeroImage">{num}</span><span>/{taille}</span>
                </div>

            </div>
}

