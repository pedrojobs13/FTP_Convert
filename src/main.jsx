import React from 'react'
import { HashRouter  } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import { Home_02 } from './Pages/Home_02'
import "./global.css"
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Header />
    </HashRouter>
  </React.StrictMode>
)
