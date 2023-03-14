import {Button, Accordion, Card, Jumbotron, Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import carActions from '../redux/actions/carActions';
import BtnDel from './BtnDel';
// import CardCar from './CardCar';
import Repairs from './Repairs';

const Car = (props) =>{
    const { cars } = props
    console.log(props)
    
    return cars.length && cars.length !== 0 ? cars.map((car, index) => {
          return(
            <>
            <div className='d-flex justify-content-center'>
            </div>
            <div className='d-flex justify-content-center'>
              {/* <CardCar car={car}/> */}
              <Accordion defaultActiveKey="1" key={index}>
                  <Accordion.Toggle as={Button} variant="h3" eventKey={index + 1}>
                  <Card>
                    <Card.Header>{car.model} || {car.patent} || {car.color}</Card.Header>
                  </Card>
                  </Accordion.Toggle>
                  <BtnDel _id={car._id} id={2}/>
                  <Repairs car={car} key={index} index={index + 1}/>
              </Accordion>
            </div>
            </>
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
    car:  state.repairReducer.car
  }
}
const mapDispatchToProps = {
  getCar: carActions.getCar,
}
export default connect(mapStateToProps, mapDispatchToProps)(Car)