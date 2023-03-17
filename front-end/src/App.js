
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FishList from './components/FishList';

import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    
    
     <Routes>
     <Route path='/'element={<Navbar />}/>
     <Route path='/list'element={<FishList/>}/>
     </Routes>
    </div>
  );
}

export default App;
