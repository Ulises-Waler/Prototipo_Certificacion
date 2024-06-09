<<<<<<< HEAD
import React, { useState } from 'react'
import { Form, Button, Container, Row, Card, Col, } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Certificacion_backend } from 'declarations/Certificacion_backend';
import { useNavigate } from 'react-router-dom';


const Create = () => (
  {  id= null,
    cName= null,
    cDescription= null,
    cSpeed= null,
    isEditable= null, 
    getCarros= null,
    setShow= null
  }
) => {


    const [name, setName] = useState(cName ? cName:"");
    const [description, setDescription] = useState(cDescription ? cDescription:"");
    const [speed, setSpeed] = useState(cpSpeed ? cSpeed : 0 );

    const navigate = useNavigate()

    const onChangeName = (e) => {
        e.preventDefault()
        const preName = e.target.value
        setName(preName)
    }

    const onChangeDescription = (e) => {
        e.preventDefault()
        const preDescription = e.target.value
        setDescription(preDescription)
    }

    const onChangeSpeed = (e) => {
        e.preventDefault()
        const preSpeed = e.target.value
        setSpeed(preSpeed)
    }

    function updateCarro() {
        Swal.fire("Actualizando...")
        Swal.showLoading()
        Certificacion_backend.updateCarro(BigInt(id), BigInt(speed), description, name).then(carro => {
            Swal.fire({
                icon: "success",
                title: "¡Se guardo exitosamente!",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                    setShow(false);
                    getCarros();
            })
        }).catch((err) => {
            Swal.fire({
                icon: "Error",
                title: "¡Lo siento ocurrio un error!",
            })
            console.log("Error al cargar.", err)
        })
    }

    console.log("Valor del componente Editar", id)
    console.log("Valor del componente a Editar",cName )
    console.log("Valor del componente a Editar",cDescription)
    console.log("Valor del componente a Editar",cSpeed)
    console.log("Valor del componente a Editar",isEditable)  

    return (
        <Container className='m-5'>
            <Row className='m-5'>
                <Card>
                    <Card.Body>
                        <Card.Title>{isEditable ? "Editar" : "Agregar"} carro</Card.Title>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Anadir carro:</Form.Label>
                                        <Form.Control defaultValue={name} name="name" onChange={onChangeName} type="text" placeholder="Ingresa el nombre" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Anadir descripcion:</Form.Label>
                                        <Form.Control defaultValue={description} name="description" onChange={onChangeDescription} as="textarea" placeholder="Ingresa la descripcion" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ingresa la vel. maxima:</Form.Label>
                                        <Form.Control defaultValue={speed}name="speed" onChange={onChangeSpeed} type="number" placeholder="Ingresa la velocidad maxima" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={isEditable ? updateCarro() : createCarr} >
                                        {isEditable ? "Editar" : "Guardar"} carro
                                        Guardar carta
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    );
}


=======
import React, { useState } from 'react'
import { Form, Button, Container, Row, Card, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Certificacion_backend } from 'declarations/Certificacion_backend';
import { useNavigate } from 'react-router-dom';


const Create = () => (
  {  id= null,
    cName= null,
    cDescription= null,
    cSpeed= null,
    isEditable= null, 
    getCarros= null,
    setShow= null
  }
) => {


    const [name, setName] = useState(cName ? cName:"");
    const [description, setDescription] = useState(cDescription ? cDescription:"");
    const [speed, setSpeed] = useState(cpSpeed ? cSpeed : 0 );

    const navigate = useNavigate()

    const onChangeName = (e) => {
        e.preventDefault()
        const preName = e.target.value
        setName(preName)
    }

    const onChangeDescription = (e) => {
        e.preventDefault()
        const preDescription = e.target.value
        setDescription(preDescription)
    }

    const onChangeSpeed = (e) => {
        e.preventDefault()
        const preSpeed = e.target.value
        setSpeed(preSpeed)
    }

    function updateCarro() {
        Swal.fire("Actualizando...")
        Swal.showLoading()
        Certificacion_backend.updateCarro(BigInt(id), BigInt(speed), description, name).then(carro => {
            Swal.fire({
                icon: "success",
                title: "¡Se guardo exitosamente!",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                    setShow(false);
                    getCarros();
            })
        }).catch((err) => {
            Swal.fire({
                icon: "Error",
                title: "¡Lo siento ocurrio un error!",
            })
            console.log("Error al cargar.", err)
        })
    }

    console.log("Valor del componente Editar", id)
    console.log("Valor del componente a Editar",cName )
    console.log("Valor del componente a Editar",cDescription)
    console.log("Valor del componente a Editar",cSpeed)
    console.log("Valor del componente a Editar",isEditable)  

    return (
        <Container className='m-5'>
            <Row className='m-5'>
                <Card>
                    <Card.Body>
                        <Card.Title>{isEditable ? "Editar" : "Agregar"} carro</Card.Title>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Anadir carro:</Form.Label>
                                        <Form.Control defaultValue={name} name="name" onChange={onChangeName} type="text" placeholder="Ingresa el nombre" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Anadir descripcion:</Form.Label>
                                        <Form.Control defaultValue={description} name="description" onChange={onChangeDescription} as="textarea" placeholder="Ingresa la descripcion" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ingresa la vel. maxima:</Form.Label>
                                        <Form.Control defaultValue={speed}name="speed" onChange={onChangeSpeed} type="number" placeholder="Ingresa la velocidad maxima" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={isEditable ? updateCarro() : createCarr} >
                                        {isEditable ? "Editar" : "Guardar"} carro
                                        Guardar carta
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    );
}


>>>>>>> dcd052f2e6ad9d8658fbefe10c7984fe098f5500
export default Create;