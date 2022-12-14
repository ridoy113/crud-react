import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { UserProvider } from './components/UserContext/UserContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';


function App() {
  return (
    <div className='app'>
      <UserProvider>
        <Routes>
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
