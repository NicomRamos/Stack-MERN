import { connect } from 'react-redux';
import Car from '../components/Car.js';
import ModalAdd from "../components/ModalAdd";
import carActions from '../redux/actions/carActions.js';

const Cars=(props) =>{
  const { id } = props.match.params
  const { getCar } = props
  getCar(id)

  return (
      <>
      <div className='mb-3'>
        <ModalAdd id={2} _id={id}/>
      </div>
      <Car _id={id}/>
      </>
      )
}

const mapDispatchToProps = {
  getCar: carActions.getCar,
}
export default connect(null, mapDispatchToProps)(Cars)