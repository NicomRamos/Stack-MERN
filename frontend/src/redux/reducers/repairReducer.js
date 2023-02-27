const initialState = {
    car:{}
}

export function repairReducer(state = initialState, action) { 
    switch (action.type) {
        case 'ADD_REPAIR':
            return {
                ...state,
                car: action.payload.response
            }
        case 'DELETE_REPAIR':
                return {
                ...state,
                car: action.payload.response
                }
        default:
            return state
    }

}