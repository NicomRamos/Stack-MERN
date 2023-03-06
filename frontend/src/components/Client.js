import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Table, Jumbotron, Container } from 'react-bootstrap';
import BtnDel from './BtnDel';

const Client=(props) =>{
  const { clients } = props
  const history = useHistory()
  return (
    <>
    {clients.email ? 
      <Jumbotron fluid>
          <Container>
              <h1>No tiene clientes cargados</h1>
          </Container>
      </Jumbotron> 
      : 
      <div className="container">
      <Table striped bordered hover >
        <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
        </tr>
        </thead>
        {clients.map((client, index) => {
            return(
              <>
              <BtnDel id={1} _id={client._id}/>
              <tbody>
                <tr key={index} onClick={() => history.push("/cars/" + client._id)}>
                    <td>{index}</td>
                    <td>{client.firstname}</td>
                    <td>{client.lastname}</td>
                    <td>{client.email} 
                    {/* <BtnDel id={1} _id={client._id}/> */}
                    </td>
                </tr>
              </tbody>
              </>
              )
        })}
      </Table>

      </div>
    }
    </>
  );
}
const mapStateToProps = state => {
  return {
    clients: state.clientReducer.clients
  }
}
export default connect(mapStateToProps)(Client)
