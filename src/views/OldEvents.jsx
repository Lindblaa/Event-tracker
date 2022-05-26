import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Event from '../components/Event'


const OldEvents = () => {


  const { data: events, loading, error } = useSelector(state=> state.events)

  const [oldEvents, setOldEvents] = useState([])

  useEffect(() => {
    const sortedEvents = events.sort((a, b)=> {
      return Date.parse(b.date) - Date.parse(a.date)
      // return b.date - a.date
    })
    const oldEvts = sortedEvents.filter(evt => Date.parse(evt.date) < Date.now())

    setOldEvents(oldEvts)
  }, [events, loading, error])


  return (
    <div>
      <h3 className='titel-text mt-3 pb-2'>AVSLUTADE EVENT</h3>
      { loading && <p  className='pt-5'>Laddar sidan...</p>}
      { error && 
      <div><h4 className='pt-5'>Du är antingen inte inloggad eller så har du inga gamla event än.</h4>
      <br />
      <Link to='/create'><button className='loggain-btn m-2'>SKAPA NYTT EVENT</button></Link>
      <Link to='/login'><button className='loggain-btn m-2'>LOGGA IN</button></Link>
      </div>
      }
      { oldEvents.map(event => <Event key={event._id} event={event} />) }
    </div>
  )
}

export default OldEvents