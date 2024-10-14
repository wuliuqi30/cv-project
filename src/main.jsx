import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CvMaker from './CvMaker.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvMaker />
  </StrictMode>,
)
