import { useState, useEffect } from 'react'
import UpcomingEvents from './UpcomingEvents'
import { useSelector, useDispatch } from 'react-redux'
import { addEvent } from '../store/actions/eventActions'
import { useNavigate } from 'react-router-dom'
// import moment from 'moment'
// import axios from 'axios'

const CreateEventView = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector(state => state.event)
    const token = useSelector(state => state.auth.token)

    const [addedEvent, setAddedEvent] = useState(false)

    const [formData, setFormData] = useState({
      name: '',
      desc: '',
      date: ''
    })

    const onChange = e => {
      setFormData(state => ({
        ...state,
        [e.target.name]: e.target.value
      }))
    }

    const handleSubmit = async e => {
      e.preventDefault()

      
      const data = {
        name: formData.name,
        desc: formData.desc,
        date: Date.parse(formData.date)
      }

      // console.log(data)
      // console.log(Date.now())
      setAddedEvent(data)
      dispatch(addEvent(formData, token))
    }

    useEffect(() => {
      if(!loading && addedEvent) {
        navigate('/upcoming')
      }
    }, [loading, addedEvent, navigate ])



  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
          <h5 className="d-flex justify-content-center mt-4">Namn på eventet: </h5>
            <div className="form-group">
                <input className='titel-input mb-4' type='text' name='name' value={formData.name} onChange={onChange} placeholder='Ge eventet en titel' required></input>
                <h5>Beskrivning av eventet:</h5>
                <textarea className='text-area' name="desc" id="" cols="30" rows="10" value={formData.desc} onChange={onChange} placeholder='Beskriv ditt event' required></textarea>
            </div>
      <h5 className="d-flex justify-content-center mt-3">Välj datum och tid för eventet: </h5>
      <div className='d-flex justify-content-around'>
        <div className='form-focus mt-1'>
          <div className="form-group pb-3">
            <input className='datetimepicker' name='date' value={formData.date} onChange={onChange} type="datetime-local" required></input>
          </div>
        </div>
      </div>
        <div className='button-div'><button className='btn mt-4 mb-5 gradient'>LÄGG TILL EVENT</button></div>
      <br />
      <UpcomingEvents/>
      </form>
    </div>
  )
}

export default CreateEventView