
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './components/Navber/Navber';
import Student from './components/Student/Student';
import Teacher from './components/Teacher/Teacher';
function App() {
  return (
    <div className='container'>
       <Navber></Navber>
       <Routes>
       <Route  path='/student' element={<Student></Student>}></Route>
       <Route  path='/teacher' element={<Teacher></Teacher>}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
