import { useEffect, useState } from 'react';
import { Certificacion_backend } from 'declarations/Certificacion_backend';
import { Form, Button, Container, Row, Card, Table, Col, Image, ModalBody, Modal, Carousel } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { } from 'react-bootstrap/esm/PageItem'
import Backtothefuture from "./XDDD/Img/Backtothefuture-1.webp";
import Create from './Create';






function App() {
  const [carros, setCarros] = useState([])
  const [carro, setCarro] = useState({})
  const[show,setShow]= useState (false)
  const navigate = useNavigate()
  useEffect(() => {
    getCarros();
  }, []);

  function getCarros() {
    Swal.fire("cargando");
    Swal.showLoading();
    Certificacion_backend.getAllCarros().then(carros => {
      setCarros(carros);
      Swal.close()
    });
  };

  function getCarro(id) {
    Swal.fire("cargando");
    Swal.showLoading();
    Certificacion_backend.getCarroById(BigInt(id)).then(carro => {
      setCarro(carro.shift());
      Swal.close()
      setShow(true)
    });
  };

  function deleteCarro(id) {
    Swal.fire("borrando");
    Swal.showLoading();
    Certificacion_backend.deleteCarro(BingInt(id)).then(() => { getCarros();

     });
};

  return (
    <Container>
      <Row className='m-5'>
        <Card>
          <Card.Body>
            <Row className='m-5'>
              <Col>
                <Card.Title>Vehiculo mas vendido</Card.Title>
                <Image src={Backtothefuture} fluid />
              </Col>
              <Col>
                <Button variant="dark" onClick={() => navigate('/Add')}>Agregar carro</Button>
              </Col>
            </Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>MAX Speed</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  carros.length > 0 ?
                    carros.map((carro) => (
                      <tr>
                        <td>{Number(carro.id)}</td>
                        <td>{carro.name}</td>
                        <td>{carro.description}</td>
                        <td>{Number(carro.speed)}</td>
                        <td>
                          <Row>
                            <Col><Button variant="info" onClick={() => getCarro(Number(carro.id))}>Actualizar</Button>
                            </Col>
                            <Col><Button variant="danger" onClick={()=>deleteCarro(Number(carro.id))}>Eliminar</Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    ))
                    : <tr></tr>
                }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Row>

<Modal show={show}>
  <Modal.Header closeButton > 
<Modal.Title> Editar carro </Modal.Title>

  </Modal.Header>
<Modal.Body>
<Create
id={Number(carro.id)}
pName= {carro.name}
pDescription={carro.description}
pSpeed={Number(carro.speed)}
isEditble={true}
getCarros={getCarros}
setShow={setShow}
/>
</Modal.Body>
</Modal>
    </Container>
  );
}
export default App;