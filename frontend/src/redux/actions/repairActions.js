import axios from "axios"
import { Url } from "./ApiUrl"

const repairActions = {
    addRepair:(repair, _id) => {
        const repairJSON = {
            description: repair,
            id: _id
        }
        return async (dispatch) => {
            const response = await axios.post(`${Url}/repair`, repairJSON)
            dispatch({type: 'ADD_REPAIR', payload: response.data})
        }
    },
    delRepair: ( id, idRepair ) => {
        const repairJSON = {
            id,
            idRepair
        }
        return async (dispatch) => {
            // const response  = await axios.delete(`${Url}/repair`, repairJSON)
            const response  = await axios({
                url: `${Url}/repair`,
                method: 'delete',
                data: repairJSON
              });
            dispatch({type: 'DELETE_REPAIR', payload: response.data})
        }
    }
}

export default repairActions