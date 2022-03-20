 
import './App.css';
import { Routes, Route } from "react-router-dom"
import ShowData from './componants/ShowData';
import AddData from './componants/AddData';
import Edit from './Edit';
import Nav from './Nav';
import View from './componants/View';

function App() {
  return (
      
    <div className="App">
    <Nav/>
    <Routes>
    <Route path="/AddData/*" element={<AddData/> } />
    <Route path="/" element={<ShowData />} />
    <Route path="/Edit/:id" element={<Edit/>} />
    <Route path="/View/:id" element={<View/>} />
  </Routes>
      
    </div>
  );
}

export default App;
