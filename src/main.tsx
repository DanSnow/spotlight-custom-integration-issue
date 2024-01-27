import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import * as Spotlight from '@spotlightjs/spotlight'
import { customIntegration } from './custom-integration'

Spotlight.init({
  integrations: [customIntegration()],
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
