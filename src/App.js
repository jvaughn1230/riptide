import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Data from './Pages/Data';
import AddBug from './Pages/AddBug';
import Register from './Pages/Register';
import Signin from './Pages/Signin';
import Login from './Components/Login';

import './App.css';
import Navigation from './Pages/Navigation';

function App() {
  return (
    <Routes>
      <Route index element={<Signin />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Navigation />} >
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/data' element={<Data />}/>
        <Route path='/addBug' element={<AddBug />} />
      </Route>
    </Routes>
  );
}

export default App;
