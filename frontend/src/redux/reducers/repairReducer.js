const initialState = {
    repair:[]
}

export function repairReducer(state = initialState, action) { 
    switch (action.type) {
        case 'ADD_REPAIR':
            return {
                ...state,
                clients: action.payload.response
            }
        default:
            return state
    }

}