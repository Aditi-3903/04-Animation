import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter } from 'react-router-dom'
import Stair from './components/common/Stair.jsx'
import NavContext from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename="/04-Animation">
    <Stair>
     <NavContext>
       <App />
     </NavContext>
   </Stair>
    </HashRouter>
  </StrictMode>,
)
