import '../styles/Accueil/Accueil.css'
import Presentation from '../components/Accueil/Presentation'
import Projets from '../components/Accueil/Projets'
import Contact from '../components/Accueil/Contact'
import Competences from '../components/Accueil/Competences'

export default function Accueil() 
{
	return <div className="all">

                <Presentation/>
                
                <Projets/>

                <Competences/>
                
                <Contact/>
            </div>
}
