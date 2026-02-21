import { useState } from "react"
import Article from "./Article"

const Client=()=> {
    const[cin,setCin]=useState("098978766")
    const[nom,setNom]=useState("mohamed")
    const[email,setEmail]=useState("mohamed@gmail.com")
    const handleChange=()=>{
        
        setNom("ESPS")
        setEmail("esps@gmail.com") 
    }
  return (
    <>
      <h1>Client</h1>
      <p>CIN: {cin}</p>
      <p>Nom: {nom}</p>
      <p>Email: {email}</p>
      <button onClick={()=>handleChange()}>Changer</button>
      <Article />
    </>
  )
}
export default Client