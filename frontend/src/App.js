import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './User';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create" element={<CreateUser/>} />
          <Route path="/update/:id" element={<UpdateUser/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
