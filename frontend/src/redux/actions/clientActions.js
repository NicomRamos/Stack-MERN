import axios from "axios"
import {Url} from "../../components/ApiUrl"

const clientActions = {
    newClient: (client) => {
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
}

export default clientActions