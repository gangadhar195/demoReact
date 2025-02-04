import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card/Card.jsx'
import Demo from './componentes/Demo.jsx'
import RemoveArry from './RemoveArry/RemoveArry.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Card/> */}
    {/* <Demo/> */}
    <RemoveArry/>
  </StrictMode>,
)
