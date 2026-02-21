
const Afficheclient = ({cin,nom,email,handleChange}) => {
  return (
    <div>
      <h1>Client</h1>
      <p>CIN: {cin}</p>
      <p>Nom: {nom}</p>
      <p>Email: {email}</p>
      <button onClick={()=>handleChange()}>Changer</button>
    </div>
  )
}

export default Afficheclient
