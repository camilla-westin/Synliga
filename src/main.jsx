import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './pages/About.jsx'
import AboutEnglish from './pages/AboutEnglish.jsx'
import BandMembers from './pages/BandMembers.jsx'
import BandMembersEnglish from './pages/BandMembersEnglish.jsx'
import Discography from './pages/Discography.jsx'
import DiscographyEnglish from './pages/DiscographyEnglish.jsx'
import Home from './pages/Home.jsx'
import HomeEnglish from './pages/HomeEnglish.jsx'
import Links from './pages/Links.jsx'
import Morkershow from './pages/Morkershow.jsx'
import MorkershowEnglish from './pages/MorkershowEnglish.jsx'
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
      { path: 'morkershow', element: <Morkershow /> },
      { path: 'discography', element: <Discography /> },
      { path: 'diskografi', element: <Discography /> },
      { path: 'links', element: <Links /> },
      { path: 'lankar', element: <Links /> },
      { path: 'press', element: <Press /> },
      { path: 'contact', element: <Home /> },
      { path: 'en', element: <HomeEnglish /> },
      { path: 'en/about', element: <AboutEnglish /> },
      { path: 'en/band-members', element: <BandMembersEnglish /> },
      { path: 'en/shows-in-the-dark', element: <MorkershowEnglish /> },
      { path: 'en/darkness-show', element: <MorkershowEnglish /> },
      { path: 'en/discography', element: <DiscographyEnglish /> },
      { path: 'en/links', element: <Links /> },
      { path: 'en/press', element: <Press /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
