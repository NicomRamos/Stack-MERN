import axios from "axios"
import { Url } from "../../components/ApiUrl"

const carActions = {
    addCar:(car, id) => {
        return async (dispatch) => {
            const response = await axios.post(`${Url}/cars/${id}`, car)
            dispatch({type: 'ADD_CAR', payload: response.data})
        }
    },
    getCar: (id) => {
        return async (dispatch) => {
            const response = await axios.get(`${Url}/cars/${id}`)
            dispatch({type:'CHARGE_CAR', payload: response.data})
        }
    }
}

export default carActions