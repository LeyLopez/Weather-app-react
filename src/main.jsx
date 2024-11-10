import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WeatherApp} from './WeatherApp'
import './weatherStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp></WeatherApp>
  </StrictMode>,
)