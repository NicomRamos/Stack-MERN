import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BtnDel from './BtnDel';
import Repairs from './Repairs';
import ModalAdd from './ModalAdd';

function CardCar(props) {
  const { car, onClick } = props

  return (
    <>
    <Card >
      <Card.Body>
        <div className='d-flex justify-content-center' onClick={onClick}>
          <BtnDel _id={car._id} id={2}/>
          <Card.Title className='m-2 text-center'>{car.model} || {car.patent} || {car.color}</Card.Title>
        </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default CardCar;