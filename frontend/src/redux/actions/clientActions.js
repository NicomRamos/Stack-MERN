import axios from "axios"
import {Url} from "./ApiUrl"

const clientActions = {
    addClient: (client) => {
        return async (dispatch) => {
            const response = await axios.post(`${Url}/client`, client)
            if (!response.data.success) {
                return response.data
            }
            dispatch({type: 'ADD_CLIENT', payload: response.data})
        }
    },
    allClient: () => {
        return async (dispatch) => {
            const response = await axios.get(`${Url}/client`)
            dispatch({type: 'CHARGE_CLIENTS', payload: response.data})
        }
    },
    delClient: ( _id ) => {
        return async (dispatch) => {
            const response  = await axios.delete(`${Url}/client/${_id}`)
            dispatch({type: 'DELETE_CLIENT', payload: response.data})
        }
    }
}

export default clientActions