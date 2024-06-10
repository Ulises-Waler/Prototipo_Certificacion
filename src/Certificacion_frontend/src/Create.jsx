
import React, { useState } from 'react'
import { Form, Button, Container, Row, Card, Col, } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Certificacion_backend } from 'declarations/Certificacion_backend';
import { useNavigate } from 'react-router-dom';


const Create = (
    {
        id = null,
        pName = null,
        pDescription = null,
        pSpeed = null,
        isEditable = null,
        getCarros = null,
        setShow = null,
    }
) => {
    const [name, setName] = useState(pName ? pName : "");
    const [description, setDescription] = useState(pDescription ? pDescription : "");
    const [speed, setSpeed] = useState(pSpeed ? pSpeed : 0);

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

    function createCarro() {
        Swal.fire("cargando")
        Swal.showLoading()
        Certificacion_backend.addCarro(BigInt(speed), description, name).then(carro => {
            Swal.fire({
                icon: "success",
                title: "Se guardo",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => navigate('/'))
        }).catch((err) => {
            Swal.fire({
                icon: "Error",
                title: "Ocurrio un error",
            })
            console.log("Error al cargar", err)
        })
    }

    function updateCarro() {
        Swal.fire("Actualizando")
        Swal.showLoading()
        Certificacion_backend.updateCarro(BigInt(id), name, BigInt(speed), description,).then(carro => {
            Swal.fire({
                icon: "success",
                title: "yep",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setShow(false);
                getCarros();
            })
        }).catch((err) => {
            Swal.fire({
                icon: "Error",
                title: "Ocurrio un error",
            })
            console.log("Error al cargar", err)
        })
    }

    

    return (
        <Container className='m-5'>
            <Row className='m-5'>
                <Card>
                    <Card.Body>
                        <Card.Title>{isEditable ? "Editar" : "Agregar"}</Card.Title>
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
                                        <Form.Control name="speed" defaultValue={speed} onChange={onChangeSpeed} type="number" placeholder="Ingresa la velocidad maxima" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={isEditable ? updateCarro : createCarro}>
                                        {isEditable ? "Editar" : "Guardar"}
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


export default Create;