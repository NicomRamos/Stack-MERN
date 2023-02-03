import { connect } from 'react-redux'
import { Button, Table, Jumbotron, Container } from 'react-bootstrap';

const Client=(props) =>{
    return (
    <>
    {props.clients.email ? 
      <Jumbotron fluid>
          <Container>
              <h1>No tiene clientes cargados</h1>
          </Container>
      </Jumbotron> 
      : 
      <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Ver auto</th>
        </tr>
        </thead>
        <tbody>
        {props.clients.map((client, index) => {
            return( 
                <tr key={index}>
                    <td>{index}</td>
                    <td>{client.firstname}</td>
                    <td>{client.lastname}</td>
                    <td>{client.email}</td>
                    <Button href={"/cars/"+ client._id} className="linkClient">
                    <td>Ver autos</td>
                    </Button>
                </tr>
                )
        })}
        </tbody>
      </Table>
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
