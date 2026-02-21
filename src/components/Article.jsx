import { useState } from "react"
import Affichearticle from "./Affichearticle"

const Article=()=> {
    const [art, setArt] = useState({
        "reference": "A001",
        "designation": "stylo",
        "prix": 10.5
    })
//opérateur spread
    const handleUpdate = () => {
      setArt({...art,"designation":"cahier","prix":5.5})
    }
  return (
    <>
      
    <Affichearticle 
    reference={art.reference}
    designation={art.designation}
    prix={art.prix}
     handleUpdate={handleUpdate}/>
    </>
  )
}

export default Article



