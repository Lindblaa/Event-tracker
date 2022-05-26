import React from 'react'
import moment from 'moment'
import 'moment/locale/sv'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {

  console.log(event)

  return (
      <>
        <Link to={`/details/${event._id}`} className='event-div input-group my-4'>
            <div className="input-group input-group2">
                <span className='titel-input2'>{event.name} <h6 className='textfärg mt-1 pt-1 border-top'>{moment(event.date).fromNow()}</h6></span>
                {/* <button className="btn btn-danger btn-sm">X</button> */}
            </div>
        </Link>
    </>
  )
}

export default Event