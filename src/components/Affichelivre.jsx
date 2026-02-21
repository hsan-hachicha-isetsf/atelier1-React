
const Affichelivre = ({livres,handleDelete}) => {
  return (
    <div>
      <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Isbn</th>
                    <th>Titre</th>
                    <th>Auteur</th> 
                    <th>Prix</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {livres.map((l,index) => 
                <tr key={index}>
                    <td>{l.isbn}</td>
                    <td>{l.titre}</td>
                    <td>{l.auteur}</td>
                    <td>{l.prix}</td>
                    <td><img src={l.image} alt={l.titre} width="100"/></td>
                    <td><button className='btn btn-danger' onClick={()=>handleDelete(l.isbn)}>Delete</button></td>
                </tr>
                )}
            </tbody>
        </table>
        
    </div>
  )
}

export default Affichelivre
