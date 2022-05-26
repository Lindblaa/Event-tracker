import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getEventById } from '../store/actions/eventActions'
import moment from 'moment'
import 'moment/locale/sv'

const EventDetailView = () => {

  const { id } = useParams()
  const { singleEvent } = useSelector(state => state.events)
  const dispatch = useDispatch()

  console.log(singleEvent)

  useEffect(() => {
    dispatch(getEventById(id))
  }, [dispatch, id])

  return (
      <div className="container mt-2">
        <NavLink className='text-light' to='/'><div className='text-start mt-4 ms-5 pb-3'><i className="fa-solid fa-left-long me-2 fs-9"></i>Tillbaka till startsidan</div></NavLink>
          { singleEvent && 
            <div className='card mt-3 text-dark'>
                <h3 className='my-3'>{singleEvent.name}</h3>
                {/* <h3 className='my-3'>Namn</h3> */}
                <p className='px-2'>{singleEvent.desc}</p>
                <h6 className='textfärg mt-1 pt-1 border-top'>{moment(singleEvent.date).fromNow()}</h6>
            </div>
          }
    </div>
  )
}

export default EventDetailView