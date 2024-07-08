import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    <footer>

      <div className="flex footer-info">
        <img src="logo/logo-nk-white.png" alt="" />
        <div className='font-mono'>
          <b>NK REAL CHOPPA</b>
          <p>We are great because we are many, we represent a lifestyle</p>
        </div>
      </div>

    </footer>

  </React.StrictMode>,
)
