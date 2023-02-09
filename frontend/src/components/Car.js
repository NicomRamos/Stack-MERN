import { useEffect } from 'react';
import {Button, Accordion, Card, Jumbotron, Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import carActions from '../redux/actions/carActions';
import Repairs from './Repairs';

const Car = (props) =>{
    const { _id, getCar, cars } = props
    useEffect(() => {
        getCar(_id)
    }, [])
    
    return cars.length !== 0 ? cars.map((car, index) => {
          return(
            <Accordion defaultActiveKey="1" key={index}>
                <Card>
                    <Accordion.Toggle as={Button} variant="h3" eventKey={index + 1}>
                        <Card.Header>{car.model} || {car.patent} || {car.color}</Card.Header>
                    </Accordion.Toggle>
                    <Repairs car={car} key={index} index={index + 1}/>
                </Card>
            </Accordion>
          )
          }) :
    <Jumbotron fluid>
              <Container>
                  <h1 className="text-center mt-5">No tiene Autos Cargados</h1>
              </Container>
          </Jumbotron>
}
const mapStateToProps = state => {
  return {
    cars: state.carReducer.cars,
    repair: state.repairReducer.repair
  }
}
const mapDispatchToProps = {
  getCar: carActions.getCar,
}
export default connect(mapStateToProps, mapDispatchToProps)(Car)