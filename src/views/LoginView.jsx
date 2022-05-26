import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'

const LoginView = () => {

  const navigate = useNavigate()
  const user = useSelector(state => state.auth.token)
  const [login, setLogin] = useState(true)

  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
   <div>
    { login 
    ? <LoginForm setLogin={setLogin} />
    : <RegisterForm setLogin={setLogin} />
    }
    </div>
  )
}

export default LoginView