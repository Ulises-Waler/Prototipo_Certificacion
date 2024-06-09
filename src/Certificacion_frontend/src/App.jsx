import { useEffect, useState } from 'react';
import { Certificacion_backend } from 'declarations/Certificacion_backend';
import { Form, Button, Container, Row, Card, Table, Col, Image, ModalBody, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { } from 'react-bootstrap/esm/PageItem'
import Backtothefuture from "./XDDD/Img/Backtothefuture-1.webp";
import Create from './Create';




  function App() {
    const [Carros, setCarros] = useState([]);
    const [carro, setCarro] = useState({});
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      getCarros();
    }, []);

    function getCarros() {
      Swal.fire("Cargando")
      Swal.showLoading()
      Certificacion_backend.getAllCarros().then(carros => {
        setCarros(carros.shift());
        Swal.close()
        setShow(true)
      });

      function deleteCarro(id) {
        Swal.fire("Se esta removiendo el carro...")
        Swal.showLoading()

        Certificacion_backend.deleteCarro(BigInt(id)).then(() => {
          getCarros();
        });
      }
    }



    return (

      <center><Container className='m-4'>
        <Row className='m-5'>
          <Card>
            <Card.Body>
              <Row className='m-5'>
                <Col>
                  <Card.Title>Auto Más Popular</Card.Title>
                  <Image src={Backtothefuture} fluid />
                </Col>
                <Col>
                  <Button variant="dark" onClick={() => navigate('/añadir_carro')}>Add car</Button>
                </Col>
              </Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>MAXVelocidad</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    Carros.length > 0 ?
                      Carros.map((Carro) => (
                        <tr>
                          <td>{Number(Carro.id)}</td>
                          <td>{Carro.name}</td>
                          <td>{Carro.description}</td>
                          <td>(Number{Carro.speed})</td>
                          <td>
                            <Row>
                              <col>
                                <button variant="Info" onClick={() => getCarro(Number(carro.id))}>Editar
                                </button>
                              </col>
                              <col>
                                <Button variant="Danger" onClick={() => deleteCarro(Number(carro.id))}>Eliminar
                                </Button>
                              </col>
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
          <Modal.Header closeButton>
            <Modal.Title>Editar Carro</Modal.Title>
          </Modal.Header>
        </Modal>
        <ModalBody>
          <Create
            id={Number(carro.id)}
            cName={carro.name}
            cDescription={carro.tilte}
            cSpeed={Number(carro.speed)}
            isEditable={true}
            getCarros={getCarros}
            setShow={setShow}
          />

        </ModalBody>


      </Container></center>
    );
  }

export default App;
