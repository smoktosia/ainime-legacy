import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

// CONTEXTS
import { IconContext } from 'react-icons'
import { LangContext } from 'context'

// SERVICES
import LangService from 'services/LangService'

// UTILS
import { setTitle } from 'utils'

// COMPONENTS
import Header from 'components/structure/Header/Header'

// MAINS CSS
import './App.css';

// INIT SERVICES
const Lang = new LangService()

function App() {

  // STATES
    // LANGUAGE STATE
  const [ lang, setLang ] = useState(Lang.quickGetLang())

  // INITIAL EFFECT
  useEffect(() => {
    setTitle('Home')

    // LANGUAGE
    let _lang = Lang.getLocalStorage() || Lang.getBrowserLang()
    setLang(Lang.checkFromList(_lang))

  }, [])

  // change lang cb
  useEffect(() => {
    if(!lang) return

    Lang.setLocalStorage(lang)
  }, [lang])

  return (
    <BrowserRouter>
    <LangContext.Provider value={lang}>
    <div className="App">


    <IconContext.Provider value={{
      className: 'icon',
      size: '1.5rem'
    }}>


      <Header />


    </IconContext.Provider>

    </div>
    </LangContext.Provider>
    </BrowserRouter>
  );
}

export default App;
