import '../styles/Accueil/Accueil.css'
import Presentation from '../components/Accueil/Presentation'
import Projets from '../components/Accueil/Projets'
import Contact from '../components/Accueil/Contact'

export default function Accueil() 
{
	return <div className="all">
                <Presentation/>
                
                <Projets/>

                <Contact/>
            </div>
}
