import { useState } from "react"

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
      <h1>Article</h1>
      <p>Reference: {art.reference}</p>
      <p>Designation: {art.designation}</p>
      <p>Prix: {art.prix}</p>
      <button onClick={() => handleUpdate()}>Changer</button>

    </>
  )
}

export default Article



