import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Register from './components/Layouts/Register';
import Details from './components/Details';
import Edit from './components/Edit';





function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route index element={<Home/>} />
     <Route path='view/:id' element={<Details/>}/>
     <Route path='edit/:id' element={<Edit/>}/>


      {/* nested route */}
       {/* nested navigate */}
      <Route path='/register' element={<Register/>}>  
        {/* <Route path='/edit/:id' element={<Edit/>}/>   */}
      </Route>

    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
