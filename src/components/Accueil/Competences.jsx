import '../../styles/Accueil/Competences.css'
import {skillsList} from '../../datas/Competences'
import brain from '../../assets/skill.webp'

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
    
	return <div className='competences-bloc' id='skills'>

                <h2 className='competences-title'>
                    Mes compétences actuelle :
                </h2>

                <div className='competences-all'>

                    <img src={brain} alt="Image d'un cerveau" className='brain'/>

                    <div className='competences-skills'>

                        <div className='competences'>

                            <div className='competences-text'>
                                <i className="fa fa-html5 comp"></i><span> HTML </span>    
                            </div>

                            <div className='competences-stars'>
                                {htmlTab.map
                                    ((htmlrate,index) =>
                                        <i className={htmlrate} key={index}></i>
                                    )
                                }
                            </div>

                        </div>

                        <div className='competences'>

                            <div className='competences-text'>
                                <i className="fa fa-css3 comp"></i><span> CSS </span>    
                            </div>

                            <div className='competences-stars'>
                                {cssTab.map
                                    ((cssrate,index) =>
                                        <i className={cssrate} key={index}></i>
                                    )
                                }
                            </div>

                        </div>


                        <div className='competences'>

                            <div className='competences-text'>
                                <i className="fab fa-js comp"></i><span> Javascript </span>    
                            </div>

                            <div className='competences-stars'>
                                {javascriptTab.map
                                    ((javascriptrate,index) =>
                                        <i className={javascriptrate} key={index}></i>
                                    )
                                }
                            </div>

                        </div>


                        <div className='competences'>

                            <div className='competences-text'>
                                <i className="fa-brands fa-react comp"></i><span> React </span>    
                            </div>

                            <div className='competences-stars'>
                                {reactTab.map
                                    ((reactrate,index) =>
                                        <i className={reactrate} key={index}></i>
                                    )
                                }
                            </div>

                        </div>


                        <div className='competences'>

                            <div className='competences-text'>
                                <i className="fa-solid fa-database comp"></i><span> MySQL </span>    
                            </div>

                            <div className='competences-stars'>
                                {mysqlTab.map
                                    ((mysqlrate,index) =>
                                        <i className={mysqlrate} key={index}></i>
                                    )
                                }
                            </div>

                        </div>


                        <div className='competences'>

                            <div className='competences-text'>
                                <i className="fa-brands fa-php comp"></i><span> PHP </span>    
                            </div>

                            <div className='competences-stars'>
                                {phpTab.map
                                    ((phprate,index) =>
                                        <i className={phprate} key={index}></i>
                                    )
                                }
                            </div>

                        </div>


                        <div className='competences'>

                            <div className='competences-text'>
                                <i className="fa-solid fa-bug comp"></i><span> Debug et optimisation </span>    
                            </div>

                            <div className='competences-stars'>
                                {debugoptiTab.map
                                    ((debugoptirate,index) =>
                                        <i className={debugoptirate} key={index}></i>
                                    )
                                }
                            </div>

                        </div>

                    </div>
                </div>



                <h2 className='outils-text'>
                    Mes outils actuels :
                </h2>

                <div className='outils-all'>
                    <div className='outils'>
                        <i className="fa-brands fa-github tool"></i>
                        <span> Github </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-brands fa-git-alt tool"></i>
                        <span> Git </span>               
                    </div>
                    
                    <div className='outils'>
                        <i className="fa-brands fa-figma tool"></i>
                        <span> Figma </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-brands fa-envira tool"></i>
                        <span> MongoDB </span>                
                    </div>

                    <div className='outils'>
                        <i className="fa-regular fa-lightbulb tool"></i>
                        <span> Lightouse </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-solid fa-w tool"></i>
                        <span> Wave </span>               
                    </div>

                    <div className='outils'>
                        <i className="fa-solid fa-font-awesome tool"></i>
                        <span> Font-Awesome </span>                
                    </div>
                </div>

            </div>
}
