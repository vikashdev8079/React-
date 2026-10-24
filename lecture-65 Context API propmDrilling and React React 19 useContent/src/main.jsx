import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemProvider } from './Context/ThemeContext.jsx'



export let UserContext =createContext(null)


  let username = "Mohan"

createRoot(document.getElementById('root')).render(

  <>
  {/* React version 18 old version .provider*/}
  {/* React version 19 new version */}
    {/* <UserContext value={username}>
    <App />
    </UserContext> */}
   <ThemProvider>
    <App/>
   </ThemProvider>
  </>
  
  
  
)
