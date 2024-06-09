import { useEffect, useState } from 'react';
import { Certificacion_backend } from 'declarations/Certificacion_backend';
import { Container, Row, Card, Table, Col, Image, Modal } from 'react-bootstrap'
import { } from 'react-bootstrap/esm/PageItem'
import Backtothefuture from "./XDDD/Img/Backtothefuture-1.webp";






function App() {
  const [Carros, setCarros] = useState([]);

  useEffect(() => {
    getCarros();
  }, []);

  function getCarros() {
    Certificacion_backend.getAllCarros().then(carros => {
      setCarros(carros);
    });
  }


  return (
    <center><Container className='m-4'>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Auto Más Popular</Card.Title>
            <Image src={Backtothefuture} fluid />
            <Table>
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
                        <td>{Carro.id}</td>
                        <td>{Carro.name}</td>
                        <td>{Carro.description}</td>
                        <td>{Carro.speed}</td>
                      </tr>
                    ))
                    : <tr></tr>
                }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Row>
    </Container></center>
  );
}

export default App;
