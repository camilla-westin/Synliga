import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './pages/About.jsx'
import BandMembers from './pages/BandMembers.jsx'
import Discography from './pages/Discography.jsx'
import Home from './pages/Home.jsx'
import Links from './pages/Links.jsx'
import Press from './pages/Press.jsx'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'om-synliga', element: <About /> },
      { path: 'bandmedlemmar', element: <BandMembers /> },
      { path: 'om-synliga/bandmedlemmar', element: <BandMembers /> },
      { path: 'discography', element: <Discography /> },
      { path: 'diskografi', element: <Discography /> },
      { path: 'links', element: <Links /> },
      { path: 'lankar', element: <Links /> },
      { path: 'press', element: <Press /> },
      { path: 'contact', element: <Home /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
