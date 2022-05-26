import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Event from '../components/Event'
import { Link } from 'react-router-dom'


const UpcomingEvents = () => {


  const { data: events, loading, error } = useSelector(state=> state.events)

  const [newEvents, setNewEvents] = useState([])

  useEffect(() => {
    const sortedEvents = events.sort((a, b)=> {
      return Date.parse(a.date) - Date.parse(b.date)
    })
    const newEvts = sortedEvents.filter(evt => Date.parse(evt.date) > Date.now())

    setNewEvents(newEvts)
  }, [events, loading, error])


  return (
    <div>
      <h3 className='titel-text mt-3 pb-2'>KOMMANDE EVENT</h3>
      { loading && <p className='pt-5'>Laddar sidan...</p>}
      { error && 
      <div><h4 className='pt-5'>Du är antingen inte inloggad eller så har du inga kommande event än.</h4>
      <br />
      <Link to='/create'><button className='loggain-btn m-2'>SKAPA NYTT EVENT</button></Link>
      <Link to='/login'><button className='loggain-btn m-2'>LOGGA IN</button></Link>
      </div>
      }
      { newEvents.map(event => <Event key={event._id} event={event} newEvents={newEvents}/>) }
    </div>
  )
}

export default UpcomingEvents