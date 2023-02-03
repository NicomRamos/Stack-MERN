const initialState = {
    car:{}
}

export function carReducer(state = initialState, action) { 
    switch (action.type) {
        case 'CHARGE_CAR':
            return {
                ...state,
                car: action.payload.response
            }
        default:
            return state
    }

}