import Car from '../components/Car.js';
import ModalAdd from "../components/ModalAdd";

const Cars=(props) =>{
  const { id } = props.match.params

  return (
      <>
        <ModalAdd id={2} _id={id}/>
        <Car _id={id}/>
      </>
      )
}
export default Cars