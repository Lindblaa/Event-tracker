import { Route, Routes } from 'react-router-dom'
import CreateEventView from './CreateEventView'
import LoginView from './LoginView'
import UpcomingEvents from './UpcomingEvents'
import OldEvents from './OldEvents'
import HomeView from './HomeView'
import EventDetailView from './EventDetailView'
import RegisterForm from '../components/RegisterForm'


const Views = () => {



  return (
    <Routes>
        <Route path='/' element={ <HomeView /> } />
        <Route path='/login' element={ <LoginView /> } />
        <Route path='/register' element={ <RegisterForm /> } />
        <Route path='/upcoming' element={ <UpcomingEvents/> } />
        <Route path='/old' element={ <OldEvents /> } />
        <Route path='/create' element={ <CreateEventView /> } />
        <Route path='/details/:id' element={ <EventDetailView /> } />
    </Routes>
  )
}

export default Views