
'use client'
import { useState } from 'react'

export default function Home(){

const [logged,setLogged]=useState(false)
const [obras,setObras]=useState([])
const [nombre,setNombre]=useState('')

if(!logged){
return (
<div style={{padding:40}}>
<h1>ConstruRed</h1>
<button onClick={()=>setLogged(true)}>Entrar demo</button>
</div>
)
}

return (
<div style={{padding:40}}>
<h1>Mis Obras</h1>

<input 
placeholder="Nombre obra"
value={nombre}
onChange={e=>setNombre(e.target.value)}
/>

<button onClick={()=>{
if(!nombre) return
setObras([{nombre},...obras])
setNombre('')
}}>
Crear obra
</button>

{obras.map((o,i)=>(
<div key={i} style={{border:'1px solid black',marginTop:10,padding:10}}>
{o.nombre}
</div>
))}

</div>
)
}
