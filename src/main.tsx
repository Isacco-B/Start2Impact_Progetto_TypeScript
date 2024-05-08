import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Progress } from './components/ui/progress.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Progress value={50} className='rounded-none h-1'/>
    <App />
  </React.StrictMode>,
)
