import React from 'react'

const EventDetail = ({event}) => {
  return (
    <div>
        <div className='card mt-3 text-dark'>
            <h3 className=''>{event.name}</h3>
            <p>Här kommer beskrivningen på eventet hamna. {event.desc}</p>
            <h6 className='textfärg mt-1 pt-1 border-top'>{event.date}</h6>
        </div>
    </div>
  )
}

export default EventDetail