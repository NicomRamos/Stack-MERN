import axios from "axios"
import { Url } from "../../components/ApiUrl"

const carActions = {
    getCar: (id) => {
        return async (dispatch) => {
            const response = await axios.get(`${Url}/car/${id}`)
            dispatch({type:'CHARGE_CAR', payload: response.data})
        }
    }
}

export default carActions