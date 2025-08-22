
import './App.css'

import { RouterProvider } from 'react-router'
import route from './pages/route'

function App() {

  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App
