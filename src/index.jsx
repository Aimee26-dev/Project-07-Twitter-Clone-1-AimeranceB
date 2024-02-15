import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
 import Home from './pages/Home'
import Iconetweet from './pages/Iconetweet'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Bookmark from './pages/Bookmark'
import Profil from './pages/Profil'
import More from './pages/More'
import Iconelists from './pages/Iconelist'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tweets, { PageContext } from './components/Tweets'


const router= createBrowserRouter([
		{
			path:"/",
			element:<App/>
		},

		{
			path:"/iconetweet",
			element:<Iconetweet/>
		},

		{
			path:"/home",
			element:<Home/>
		},

		{ 
			path:"/Explore",
			element:<Explore/>
		},

		{
			path:"/Notifications",
			element:<Notifications/>
		},

		{
			path:"/Messages",
			element:<Messages/>
		},

		{
			path:"/Bookmark",
			element:<Bookmark/>
		},

		{
			path:"/Iconelists",
			element:<Iconelists/>
		},

		{
			path:"/Profil",
			element:<Profil/>
		},

		{
			path:"/More",
			element:<More/>
		},
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
			<Tweets>
				<RouterProvider router={router}/>
			</Tweets>
	</React.StrictMode>
)