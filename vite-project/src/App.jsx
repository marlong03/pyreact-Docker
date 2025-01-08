import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tareas,setTareas] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/api/tareas/')
      .then((res)=>res.json())
      .then((data) =>{
        console.log(data)
        setTareas(data)
      })
  },[])
  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React + Python🎠</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <section className='container d-flex'>
          {
            tareas.map((tarea,index)=> ( 
              <div className="card m-3" style={{width:'18rem'}} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{tarea.titulo}</h5>
                  <p className="card-text">{tarea.descripcion}</p>
                  {tarea.completada && <a href="#" className="btn btn-success disabled">Hecho </a>}
                  {!tarea.completada && <a href="#" className="btn btn-primary disabled">Por hacer</a>}
                  
                  
                </div>
              </div>
            )

            )
          }
          
        </section>
       
      </div>
    </>
  )
}

export default App
