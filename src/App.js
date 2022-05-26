import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Views from './views/Views';
import { getEvents } from './store/actions/eventActions';

function App() {

  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    dispatch(getEvents(token))
  }, [dispatch, token])

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="container">
          <Views />
        </div>
      </header>
    </div>
  );
}

export default App;
