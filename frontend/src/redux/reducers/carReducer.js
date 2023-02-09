const initialState = {
    cars:[]
}

export function carReducer(state = initialState, action) { 
    switch (action.type) {
        case 'ADD_CAR':
            return {
                ...state,
                car: action.payload.response
            }
        case 'CHARGE_CAR':
            return {
                ...state,
                cars: action.payload.response
            }
        default:
            return state
    }

}