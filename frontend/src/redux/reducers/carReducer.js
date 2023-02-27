const initialState = {
    cars:[],
    car:{}
}

export function carReducer(state = initialState, action) { 
    switch (action.type) {
        case 'ADD_CAR':
            return {
                ...state,
                cars: action.payload.response
            }
        case 'CHARGE_CAR':
            return {
                ...state,
                cars: action.payload.response
            }
        case 'DELETE_CAR':
            return {
                ...state,
                cars: action.payload.response
            }
        default:
            return state
    }

}