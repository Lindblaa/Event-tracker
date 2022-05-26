import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/actions/authActions'

const LoginForm = ({setLogin}) => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth.loading)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const onChange = e => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()        
        dispatch(loginUser(formData))
    }

  return (
    <div>
        <div className='container py-5 p-3 mb-5'>
            <h2 className='text-center mb-4'>Logga in</h2>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                <div className=" col-10">
                <div className="col-12 mb-4 ">
                    <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' placeholder='Epost:' required />
                </div>
                <div className="col-12 mb-4 ">
                    <input value={formData.password} onChange={onChange} type="password" id='password' name='password' className='form-control' placeholder='Lösenord:' required />
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-loginForm mb-4 btn btn-block text-light gradient'>{loading ? 'Loading...' : 'Logga in'}</button>
                </div>
                <p className='text-center'>Har du inget konto? <span className='login-link' onClick={() => setLogin(false)}>Bli medlem</span></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm