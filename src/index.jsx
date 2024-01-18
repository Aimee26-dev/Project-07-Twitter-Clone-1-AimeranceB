import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Iconetweet from './pages/Iconetweet'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Bookmark from './pages/Bookmark'
import Profil from './pages/Profil'
import More from './pages/More'
import Iconelists from './pages/Iconelist'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/iconetweet" element={<Iconetweet/>}></Route>
				<Route path="/iconeexploretweet" element={<Explore/>}></Route>
				<Route path="/iconenotificationtweet" element={<Notifications/>}></Route>
				<Route path="/iconemessage" element={<Messages/>}></Route>
				<Route path="/iconebook" element={<Bookmark/>}></Route>
				<Route path="/iconlists" element={<Iconelists/>}></Route>
				<Route path="/iconeprofile" element={<Profil/>}></Route>
				<Route path="/iconemore" element={<More/>}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
)