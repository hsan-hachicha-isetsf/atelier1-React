import { useState } from "react"
import Article from "./Article"
import Afficheclient from "./Afficheclient"

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
      <Afficheclient
      cin={cin}
      nom={nom}
      email={email}
      handleChange={handleChange}
      />
      
    </>
  )
}
export default Client