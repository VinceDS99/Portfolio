import '../../styles/Accueil/Projets.css'
import {listProjets} from '../../datas/Projets'
import {Link} from "react-router-dom"
import {useState} from "react"


export default function Projets() 
{
        //    const dateMDY = new Date('November 14, 20');
        //    console.log(dateMDY.getTime());
        
        //  var numDate= new Date(dateMDY.getTime());
        //  console.log(numDate.getTime());
        //  console.log(new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(numDate.getTime()));

    var [displayedProjects, setDisplayedProjects] = useState(listProjets);

    const [isNewestClick, setNewestClick] = useState(false);
    const [isOldestClick, setOldestClick] = useState(false);

    const [isCompsClick, setCompsClick] = useState(false);

    const [isHtmlClick, setHtmlClick] = useState(false);
    const [isCssClick, setCssClick] = useState(false);
    const [isJavascriptClick, setJavascriptClick] = useState(false);
    const [isReactClick, setReactClick] = useState(false);
    const [isPhpClick, setPhpClick] = useState(false);
    const [isDebugClick, setDebugClick] = useState(false);

    const newestButtonClick = () => {
        if ( isNewestClick === false )
        {
            console.log('Affichage tab trié') 

            setDisplayedProjects(listProjets.sort((a, b) => b.date - a.date));
            console.log(displayedProjects);

            setNewestClick(true);
            setOldestClick(false);
        }
        else if ( isNewestClick === true )
        {
            console.log('Affichage de base') 

            setDisplayedProjects(listProjets.sort());
            console.log(displayedProjects);
            setOldestClick(false);
        }        
        }

        const oldestButtonClick = () => {
        if ( isOldestClick === false )
        {
            console.log('Affichage tab trié') 

            setDisplayedProjects(listProjets.sort((a, b) => a.date - b.date));
            console.log(displayedProjects);

            setOldestClick(true);
            setNewestClick(false);
        }
        else if ( isOldestClick === true )
        {
            console.log('Affichage de base') 

            setDisplayedProjects(listProjets.sort());
            console.log(displayedProjects);

            setOldestClick(false);
            setNewestClick(false);
        }        
        }

        const compsButtonClick = () => {
            if ( isCompsClick === false )
            {
                setCompsClick(true);
            }
            else if ( isCompsClick === true )
            {
                setCompsClick(false);
            }        
            }

        const skillButtonClick = (skillSend) => {

                skillSend = skillSend.target.innerHTML; 
                console.log(skillSend)
                
                setDisplayedProjects(listProjets.filter( el =>  el.skills.includes(skillSend) === true  ))


                console.log(displayedProjects)

                if (skillSend === 'HTML' && isHtmlClick === false)
                {
                    setHtmlClick(true);

                    setCssClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'HTML' && isHtmlClick === true)
                {
                    setHtmlClick(false);

                    setCssClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }

                else if (skillSend === 'CSS' && isCssClick === false)
                {
                    setCssClick(true);

                    setHtmlClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'CSS' && isCssClick === true)
                {
                    setCssClick(false);

                    setHtmlClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }

                else if (skillSend === 'Javascript' && isJavascriptClick === false)
                {
                    setJavascriptClick(true);

                    setHtmlClick(false);
                    setCssClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'Javascript' && isJavascriptClick === true)
                {
                    setJavascriptClick(false);

                    setHtmlClick(false);
                    setCssClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }

                else if (skillSend === 'React' && isReactClick === false)
                {
                    setReactClick(true);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'React' && isReactClick === true)
                {
                    setReactClick(false);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'React' && isReactClick === false)
                {
                    setReactClick(true);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'React' && isReactClick === true)
                {
                    setReactClick(false);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setPhpClick(false);
                    setDebugClick(false);
                }                
                else if (skillSend === 'PHP' && isPhpClick === false)
                {
                    setPhpClick(true);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'PHP' && isPhpClick === true)
                {
                    setPhpClick(false);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setDebugClick(false);
                }
                else if (skillSend === 'Debug' && isDebugClick === false)
                {
                    setDebugClick(true);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                }
                else if (skillSend === 'Debug' && isDebugClick === true)
                {
                    setDebugClick(false);

                    setHtmlClick(false);
                    setCssClick(false);
                    setJavascriptClick(false);
                    setReactClick(false);
                    setPhpClick(false);
                }


                setOldestClick(false);
                setNewestClick(false);
            }
            
            console.log(displayedProjects)

	return <section className='projets-bloc' id='projets'>

                <div className='projets'>
                    <h1 className='projets-text'>
                        Voici différents projets réalisés au cours de mes formations ou pendant mon temps libre :                
                    </h1>

                    <div className='projets-btns'>
                        <button title='Filtrer par compétences utilisés' className={isCompsClick ? 'projets-btn-click' : 'projets-btn'} onClick={compsButtonClick}> Compétences utilisées</button>
                        <button title="Trier en ayant les projets les plus récents d'abord" className={isNewestClick ? 'projets-btn-click' : 'projets-btn'} onClick={newestButtonClick}> Projets les plus récents</button>
                        <button title="Trier en ayant les projets les plus anciens d'abord" className={isOldestClick ? 'projets-btn-click' : 'projets-btn'} onClick={oldestButtonClick}> Projets les plus anciens</button>
                    </div>

                    <div className={isCompsClick ? 'projets-btns2-active' : 'projets-btns2'}>
                        <button title='Filtrer par projet fait avec HTML' className={isHtmlClick ? 'projets-btn2-click' : 'projets-btn2'} onClick={skillButtonClick}>HTML</button>
                        <button title="Filtrer par projet fait avec CSS" className={isCssClick ? 'projets-btn2-click' : 'projets-btn2'} onClick={skillButtonClick}>CSS</button>
                        <button title="Filtrer par projet fait avec Javascript" className={isJavascriptClick ? 'projets-btn2-click' : 'projets-btn2'} onClick={skillButtonClick}>Javascript</button>                        
                        <button title='Filtrer par projet fait avec React' className={isReactClick ? 'projets-btn2-click' : 'projets-btn2'} onClick={skillButtonClick}>React</button>
                        <button title="Filtrer par projet fait avec PHP"  className={isPhpClick ? 'projets-btn2-click' : 'projets-btn2'} onClick={skillButtonClick}>PHP</button>
                        <button title="Filtrer par projet avec du debug" className={isDebugClick ? 'projets-btn2-click' : 'projets-btn2'} onClick={skillButtonClick}>Debug</button>
                    </div>



                    <div className="projets-all">
                        {displayedProjects.map((projet) => 
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
            </section>
}
