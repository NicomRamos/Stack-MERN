import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import clientActions from '../redux/actions/clientActions'
import carActions from '../redux/actions/carActions';
import repairActions from '../redux/actions/repairActions';

const BtnDel = ( props ) => {
  const {_id, id, delClient, delCar, delRepair } = props
  const del = () => {
    if( id === 1 ) {
      delClient(_id)
    } else if ( id === 2 ) {
      delCar(_id)
    } else {
      delRepair(_id, id)
    }
  }
  return (
  <>
    <Button onClick={del} variant="primary">
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  </>
  )
}

const mapDispatchToProps = {
  delClient: clientActions.delClient,
  delCar: carActions.delCar,
  delRepair: repairActions.delRepair
}
export default connect(null, mapDispatchToProps)(BtnDel)