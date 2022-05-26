const actiontypes = () => {
    return {
        auth: {
            loading: 'LOADING_USER',
            authFailure: 'AUTH_FAILURE',
            authSuccess: 'AUTH_SUCCESS',
            logout: 'LOGOUT_USER'
        },
        events: {
            addEvent: 'ADD_EVENT',
            getAllEvents: 'GET_ALL_EVENTS',
            getEventById: 'GET_EVENT_BY_ID',
            getEventByIdSuccess: 'GET_EVENT_BY_ID_SUCCESS',
            loadingEvents: 'LOADING_EVENTS',
            loadingEventsFail: 'LOADING_EVENTS_FAIL'
        }
    }
}

export default actiontypes;