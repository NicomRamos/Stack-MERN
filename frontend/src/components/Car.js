import {Button, Accordion, Card, Jumbotron, Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import carActions from '../redux/actions/carActions';
import BtnDel from './BtnDel';
import CardCar from './CardCar';
import Repairs from './Repairs';
import { useState } from 'react';

const Car = (props) =>{
    const { cars } = props
    const ind  = cars.length !== 0 && cars.length
    const [showChild, setShowChild] = useState(new Array(ind && ind).fill(false));
    function toggleChild(index) {
      const newShowChild = [...showChild]; // Clonamos el arreglo para no modificar el original
      newShowChild[index] = !newShowChild[index]; // Cambiamos el valor del índice correspondiente
      setShowChild(newShowChild); // Actualizamos el estado con el nuevo arreglo
    }
    return ind ? cars.map((car, index) => {
          return(
            <>
            <div className='d-flex justify-content-center mb-3' key={index}>
              <CardCar car={car} onClick={() => toggleChild(index)}/>
              {showChild[index] && <Repairs car={car} key={`child-${index}`}/>}
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