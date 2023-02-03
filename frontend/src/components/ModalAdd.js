import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { connect } from 'react-redux'
import clientActions from '../redux/actions/clientActions'

const ModalAdd = (props) => {
  const id = 1
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const {formState, onInputChange, onResetForm } = useForm()

  const add = () => {
    id === 1 && props.newClient(formState)
    onResetForm()
    handleClose()
  }
  return (
    <>
    <div>
      <Button variant="outline-dark" onClick={setShow}>Agregar {id === 1 ? "cliente" : "auto" }</Button>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Agregar {id === 1 ? "cliente" : "auto"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="m-1 justify-content-center">
          <Form.Group className="d-flex">
            <Form.Control type="text" name={id === 1 ? "firstname" : "color"} onChange={onInputChange} placeholder={`Escribir ${ id === 1 ? "nombre" : "color"}`} />
            <Form.Control type="text" name={id === 1 ? "lastname" : "patent"} onChange={onInputChange} placeholder={`Escribir ${ id === 1 ? "apellido" : "patente"}`} />
          </Form.Group>
          <Form.Group>
            <Form.Control type={id === 1 ? "mail" : "text"} name={id === 1 ? "email" : "model"}onChange={onInputChange} placeholder={`Escribir ${ id === 1 ? "mail" : "model"}`} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={add}>
          Agregar {id === 1 ? "cliente" : "auto"}
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
const mapDispatchToProps = {
  newClient: clientActions.newClient
}
const mapStateToProps = state => {
  return {
    clients: state.clientReducer.clients
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalAdd)