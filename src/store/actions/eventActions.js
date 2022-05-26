import actiontypes from "../actiontypes";
import axios from "axios";

export const getEvents = (token) => {
    return async dispatch => {
        dispatch(loadingEvents(true))
        try {
            const res = await axios.get('http://localhost:9090/api/events', {
                headers: {'Authorization': `Bearer ${token}`}
            })
            dispatch(getAllEvents(res.data))
        } catch (err) {
            dispatch(loadingEventsFail(err.message))
        }
    }
}

export const addEvent = (event, token) => {
    return async dispatch => {
        dispatch(loadingEvents(true))
        try {
            const res = await axios.post('http://localhost:9090/api/events', event, {
                headers: {'Authorization': `Bearer ${token}`}
            })
            dispatch(addToList(res.data.data))
        } catch (err) {
            dispatch(loadingEventsFail(err.message))
        }
    }
}

export const getEventById = (id) => {
    return async dispatch => {
      dispatch({
        type: actiontypes().events.getEventById
      })
  
      try {
        const res = await axios.get('http://localhost:9090/api/events/' + id)
        console.log(res.data)
        dispatch(getEventByIdSuccess(res.data))
      } catch (err) {
        dispatch(loadingEventsFail(err.message))
      }
    }
  }
  
 export const getEventByIdSuccess = (event) => {
    return {
      type: actiontypes().events.getEventByIdSuccess,
      payload: event
    }
  }

const addToList = (event) => {
    return {
        type: actiontypes().events.addEvent,
        payload: event
    }
}

const getAllEvents = (events) => {
    return {
        type: actiontypes().events.getAllEvents,
        payload: events
    }
}

const loadingEvents = (payload) => {
    return {
        type: actiontypes().events.loadingEvents,
        payload
    }
}

const loadingEventsFail = (payload) => {
    return {
        type: actiontypes().events.loadingEventsFail,
        payload
    }
}