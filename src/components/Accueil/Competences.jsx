import '../../styles/Accueil/Competences.css'
import {skillsList} from '../../datas/Competences'
import brain from '../../assets/brain.jpg'

export default function Competences() 
{
    function Ratings(skill) 
    {
        let foundRating = skillsList.find(element => element.title === skill);
        let rating = foundRating.rating;
        let ratingTab = ['fa fa-star gray','fa fa-star gray','fa fa-star gray','fa fa-star gray','fa fa-star gray'];

        if (rating > 5)
        {
            rating = 5;
        }

        else if (rating < 1)
        {
            rating = 1;
        }

        else if (isNaN(rating))
        {
            rating = 1;
            console.log('Invalid rating')
        }

        for (let i = 0; i < rating; i++)
        {
            ratingTab[i] = 'fa fa-star gold';
        }

        return ratingTab;
    }

    
    let htmlTab = Ratings('HTML');
    let cssTab = Ratings('CSS');
    let javascriptTab = Ratings('Javascript');
    let reactTab = Ratings('React');
    let mysqlTab = Ratings('MySQL');
    let phpTab = Ratings('PHP');
    let debugoptiTab = Ratings('Debug/Optimisation');
    
	return <div className='competences-bloc'>

                <h2 className='competences-text'>
                    Mes compétences actuelle :
                </h2>

                <div className='competences-all'>

                    <img src={brain} alt="Image d'un cerveau" className='brain'/>

                    <div className='competences-skills'>
                        <div className='competences'>
                            <i class="fa fa-html5"></i><span> HTML </span>               
                            {htmlTab.map
                                ((htmlrate,index) =>
                                    <i className={htmlrate} key={index}></i>
                                )
                            }
                        </div>

                        <div className='competences'>
                            <i class="fa fa-css3"></i><span> CSS </span>               
                            {cssTab.map
                                ((cssrate,index) =>
                                    <i className={cssrate} key={index}></i>
                                )
                            }
                        </div>

                        <div className='competences'>
                            <i class="fab fa-js"></i><span> Javascript </span>               
                            {javascriptTab.map
                                ((javascriptrate,index) =>
                                    <i className={javascriptrate} key={index}></i>
                                )
                            }
                        </div>

                        <div className='competences'>
                            <i class="fa-brands fa-react"></i><span> React </span>               
                            {reactTab.map
                                ((reactrate,index) =>
                                    <i className={reactrate} key={index}></i>
                                )
                            }
                        </div>

                        <div className='competences'>
                            <i class="fa-solid fa-database"></i><span> MySQL </span>               
                            {mysqlTab.map
                                ((mysqlrate,index) =>
                                    <i className={mysqlrate} key={index}></i>
                                )
                            }
                        </div>

                        <div className='competences'>
                            <i class="fa-brands fa-php"></i><span> PHP </span>               
                            {phpTab.map
                                ((phprate,index) =>
                                    <i className={phprate} key={index}></i>
                                )
                            }
                        </div>

                        <div className='competences'>
                            <i class="fa-solid fa-bug"></i><span> Debug et optimisation </span>               
                            {debugoptiTab.map
                                ((debugoptirate,index) =>
                                    <i className={debugoptirate} key={index}></i>
                                )
                            }
                        </div>
                    </div>
                </div>


                <h2 className='outils-text'>
                    Mes outils actuels :
                </h2>

                <div className='outils-all'>
                    <div className='outils'>
                        <i className="fa-brands fa-github"></i>
                        <span> Github </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-brands fa-git-alt"></i>
                        <span> Git </span>               
                    </div>
                    
                    <div className='outils'>
                        <i className="fa-brands fa-figma"></i>
                        <span> Figma </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-brands fa-envira"></i>
                        <span> MongoDB </span>                
                    </div>

                    <div className='outils'>
                        <i className="fa-regular fa-lightbulb"></i>
                        <span> Lightouse </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-solid fa-w"></i>
                        <span> Wave </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-solid fa-font-awesome"></i>
                        <span> Font-Awesome </span>                
                    </div>
                </div>

            </div>
}
