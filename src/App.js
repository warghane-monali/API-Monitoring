import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Screen from './Components/Screen';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import AddProject from './Pages/AddProject';
import Projects from './Pages/Projects';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Screen/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addproject' element={<AddProject/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
