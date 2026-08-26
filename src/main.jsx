import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-5xl text-red-700'>Tabu Sorry</h1>
    <button className="btn btn-warning">Warning</button>
  </StrictMode>,
)
