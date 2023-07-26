import {Link} from "react-router-dom"
import '../styles/Error.css'


export default function Error() {

	return (
		<div className='Error' >
				<h1 className="E404">404</h1>

				<h2> Oups! La page que vous demandez n'existe pas.</h2>

				<Link to={"/"} className='linkError'>
                    <h4>Retour à la page d’accueil</h4>
                </Link>
		</div>
	)
}