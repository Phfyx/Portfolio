import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <section className='aboutme'>
          <h1>À propos de moi</h1>
          <h2> Je m'appelle Mohamed Benomar </h2>
          <button>
          Me contacter
          </button>
        </section>
        
      </div>
    </>
  )
}

export default App
