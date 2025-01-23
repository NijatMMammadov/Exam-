import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ROUTER from './Router/router'

function App() {

  let routes=createBrowserRouter(ROUTER)

  return (
    <>
      <RouterProvider router={routes}/>
      
    </>
  )
}

export default App
