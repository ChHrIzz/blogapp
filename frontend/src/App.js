import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Viewblog from './components/Viewblog';
import Addblog from './components/Addblog';
import Myprofile from './components/Myprofile';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/add' element={<Main child={<Addblog/>}/>}/>
        <Route path='/view' element={<Main child={<Viewblog/>}/>}/>
        <Route path='/nav' element={<Main/>}/> 
        <Route path='/viewmypro' element={<Myprofile/>}/>


        </Routes>  
    </div>
  );
}

export default App;

