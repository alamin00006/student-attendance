import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './components/Navber/Navber';
import Teacher from './components/GetTeacher/GetTeacher';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import GetUser from './components/GetUser/GetUser';
import GetTeacher from './components/GetTeacher/GetTeacher';
import PresentStudent from './components/Student/PresentStudent';
import Absent from './components/Student/Absent';
function App() {
  return (
    <div className='container'>
       <Navber></Navber>
      
       <Routes>

       <Route  path='/login' element={<Login></Login>}></Route>
       <Route  path='/teacher' element={<GetTeacher></GetTeacher>}></Route>
       <Route  path='/register' element={<SignUp></SignUp>}></Route>
       <Route  path='/student' element={<GetUser></GetUser>}></Route>
       <Route  path='/prStudent' element={<PresentStudent></PresentStudent>}></Route>
       <Route  path='/absent' element={<Absent></Absent>}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
