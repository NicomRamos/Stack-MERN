import axios from "axios"
import { Url } from "./ApiUrl"

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
    },
    delCar: ( _id ) => {
        return async (dispatch) => {
            const response  = await axios.delete(`${Url}/cars/${_id}`)
            dispatch({type: 'DELETE_CAR', payload: response.data})
        }
    }
}

export default carActions