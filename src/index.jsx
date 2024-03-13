import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout'
import Profil from './pages/Profil'

const router = createBrowserRouter([
	{
		path:"/",
		element:<Layout/>,
		children:[
			{
				path:"/",
				element:<Home/>
			},
			{
				path:":userName",
				element:<Profil />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)