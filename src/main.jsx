import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ClassComponent from './MyComponent.jsx'
// import FunctionalComponent from './FunctionComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ClassComponent /> */}
    {/* <FunctionalComponent /> */}
  </StrictMode>,
)
