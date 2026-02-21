

const Affichearticle = ({ reference,designation,prix, handleUpdate }) => {
  return (
    <div>
      <h1>Article</h1>
      <p>Reference: {reference}</p>
      <p>Designation: {designation}</p>
      <p>Prix: {prix}</p>
      <button onClick={() => handleUpdate()}>Changer</button>
    </div>
  )
}

export default Affichearticle
