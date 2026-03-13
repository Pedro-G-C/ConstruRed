'use client'
import { useState } from 'react'

export default function Home() {
  const [entrar, setEntrar] = useState(false)
  const [obras, setObras] = useState([
    { nombre: 'Casa Rodríguez', zona: 'Pitillal', etapa: 'Muros' }
  ])
  const [nombre, setNombre] = useState('')
  const [zona, setZona] = useState('')
  const [etapa, setEtapa] = useState('Cimentación')

  if (!entrar) {
    return (
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <div>
          <h1>ConstruRed</h1>
          <button onClick={()=>setEntrar(true)}>Entrar</button>
        </div>
      </main>
    )
  }

  const agregar = () => {
    setObras([{
