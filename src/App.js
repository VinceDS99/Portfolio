import Header from './components/Banner'
import Accueil from './pages/Accueil'
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
				<Route path="/*" element={<Error/>} />
			</Routes>
			<Footer/>
		</div>
	)
}

