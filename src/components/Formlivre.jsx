import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Formlivre = ({liv,setliv}) => {
  return (
    <div>
      <Form >
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ISBN"
            value={liv.isbn}
            onChange={(e)=>setliv({...liv,isbn:e.target.value})}
            
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Titre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Titre"
            value={liv.titre}
            onChange={(e)=>setliv({...liv,titre:e.target.value})}
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Auteur</Form.Label>
          
            <Form.Control
              type="text"
              placeholder="Auteur"
              required
              value={liv.auteur}
              onChange={(e)=>setliv({...liv,auteur:e.target.value})}
            />
            
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label>Prix</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Prix" 
          required 
          value={liv.prix}
          onChange={(e)=>setliv({...liv,prix:e.target.value})}
          />
          
        </Form.Group>
        <Form.Group as={Col} md="3" >
          <Form.Label>Image</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Image" 
          value={liv.image}
          onChange={(e)=>setliv({...liv,image:e.target.value})}
          />
          
        </Form.Group>
        
      </Row>
            
    </Form>
    </div>
  )
}

export default Formlivre
