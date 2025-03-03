import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [language, setLanguage] = useState('en')
  const [translation,setTranslation]=useState({})


  //importing translation stored in locales folder or API to update content dynamically upon language change
  useEffect(()=>{
    import(`./locales/${language}.json`).
    then((data)=>setTranslation(data)).
    catch((err)=>console.log(err))
  },[language])
  return (
    <>
    <h1>{translation.welcome}</h1>
    <button>{translation.button_text}</button>

    <div>
      <button onClick={()=>setLanguage("en")}>English</button>
      <button onClick={()=>setLanguage("es")}>Español</button>
    </div>
    </>
  )
}

export default App
