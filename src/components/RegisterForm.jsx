import { useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { registerUser, authFailure } from '../store/actions/authActions'



const RegisterForm = ({setLogin}) => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)
  const error = useSelector(state => state.auth)

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }



  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    if(formData.password.trim() === formData.repeatPassword.trim()) {
      dispatch(registerUser(formData))
    }
    else {
      dispatch(authFailure(error))
    }
  }

  
  
  return (
    <section className='container py-5 p-3 mb-5'>
      <h2  className='text-center mb-4'>Bli medlem</h2>
      <form onSubmit={handleSubmit} className='pe-5 ps-5 d-flex justify-content-center'>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-4 pe-lg-2" >
            <input value={formData.firstName}
            onChange={onChange} 
            type="text" id='firstName' name='firstName' className='form-control' placeholder='Förnamn:' pattern=".{2,}" title="Ett namn bör vara minst 2 bokstäver långt" required />
          </div> 
          <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2" >       
            <input value={formData.lastName} 
            onChange={onChange} 
            type="text" id='lastName' name='lastName' className='form-control' placeholder='Efternamn:' pattern=".{2,}" title="Ett namn bör vara minst 2 bokstäver långt" required />
          </div>

          <div className="col-12 mb-4">
            <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' placeholder='Epost:' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title='Kan ej innehålla stora bokstäver' required />
          </div>

          <div className="col-lg-6 col-sm-12 mb-4 pe-lg-2">
            <input value={formData.password} onChange={onChange} 
            type="password" id='password' name='password' className='form-control' placeholder='Lösenord:' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Måste innehålla minst ett nummer, en stor och en liten bokstav, samt åtta eller fler tecken" required />
          </div>
          { !error && <p>Lösenordet matchar inte</p> }

          <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2">
            <input value={formData.repeatPassword} onChange={onChange} type="password" id='repeatPassword' name='repeatPassword' className='form-control' placeholder='Upprepa Lösenordet:' required />
          </div>
       
          <div className='d-flex justify-content-center'>
            <button className='mb-4 btn btn-block text-light gradient'>{loading ? 'Loading...' : 'Registrera'}</button>
          </div>
          <p className='text-center'>Redan medlem? <span className='login-link' onClick={() => setLogin(true)} >Logga in här</span></p>
          </div>
        </form>
    </section>
  )
}

export default RegisterForm