import Header from './components/Header'
import Accueil from './pages/Accueil'
import Details from './pages/Details'
import Footer from './components/Footer'
import Error from './pages/Error'
import {Routes, Route} from "react-router-dom"

export default function App() 
{
    return (
		<div className="AppDiv">
			<Header/>
			<Routes>
				<Route path="/" element={<Accueil/>} />
				<Route path="/Portfolio" element={<Accueil/>} />
				<Route path="/FicheDetail/:id" element={<Details/>} />
				<Route path="/*" element={<Error/>} />
			</Routes>
			<Footer/>
		</div>
	)
}

