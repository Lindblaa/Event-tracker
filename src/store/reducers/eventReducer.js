import actiontypes from "../actiontypes";

const initState = {
    data: [],
    singleEvent: null,
    loading: false,
    error: null
}

const eventReducer = (state = initState, action) => {
    switch(action.type) {
        
        case actiontypes().events.getAllEvents:
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        
        case actiontypes().events.loadingEvents:
            return {
                ...state,
                loading: true
            }

        case actiontypes().events.loadingEventsFail:
            return {
                data: [],
                loading: false,
                error: action.payload
            }

        case actiontypes().events.addEvent:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: false,
                error: null
            }
        
        case actiontypes().events.getEventById:
            return {
                ...state,
                loading: true
            }

        case actiontypes().events.getEventByIdSuccess:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                error: false,
                singleEvent: action.payload
            }
        default:
            return state
    }
}


export default eventReducer