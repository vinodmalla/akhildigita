import './App.css'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'

function App() {
    return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App

export const approuter=createBrowserRouter([
  {
    path:"",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/services",
        element:<Services />,
      },

    ]
  }

])