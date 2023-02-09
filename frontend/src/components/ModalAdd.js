import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { connect } from 'react-redux'
import clientActions from '../redux/actions/clientActions'
import carActions from '../redux/actions/carActions';
import repairActions from '../redux/actions/repairActions';

const ModalAdd = (props) => {
  const {id, addClient, addCar, addRepair,  _id} = props

  const [show, setShow] = useState(false)
  const {formState, onInputChange, onResetForm } = useForm()

  const handleClose = () => setShow(false)

  const add = () => {
    if( id === 1 ) {
      addClient(formState)
    } else if (id === 2) {
      addCar(formState, _id)
    } else {
      addRepair(formState.description, _id)
    }
    onResetForm()
    handleClose()
  }

  return (
    <>
    <Button variant="outline-dark" onClick={setShow}>{id !== 3 ? `Agregar ${id === 1 ? "cliente" : "auto" } `: `Agregar Reparacion`}</Button> 
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{id !== 3 ? `Agregar ${id === 1 ? "cliente" : "auto"}` : 'Agregar reparacion'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="m-1 justify-content-center">
          {id !== 3 ?
          <>
            <Form.Group className="d-flex">
              <Form.Control type="text" name={id === 1 ? "firstname" : "color"} onChange={onInputChange} placeholder={`Escribir ${ id === 1 ? "nombre" : "color"}`} />
              <Form.Control type="text" name={id === 1 ? "lastname" : "patent"} onChange={onInputChange} placeholder={`Escribir ${ id === 1 ? "apellido" : "patente"}`} />
            </Form.Group>
            <Form.Group>
              <Form.Control type={id === 1 ? "mail" : "text"} name={id === 1 ? "email" : "model"}onChange={onInputChange} placeholder={`Escribir ${ id === 1 ? "email" : "modelo"}`} />
            </Form.Group>
          </>
          : 
          <Form.Group>
            <Form.Control type="text" name="description" onChange={onInputChange} placeholder="Describir la reparacion" />
          </Form.Group>
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={add}>
          {id !== 3 ?
           `Agregar ${id === 1 ? "cliente" : "auto"}`
           :`Agregar reparacion` } 
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
const mapDispatchToProps = {
  addClient: clientActions.addClient,
  addCar: carActions.addCar,
  addRepair: repairActions.addRepair
  
}
export default connect(null, mapDispatchToProps)(ModalAdd)