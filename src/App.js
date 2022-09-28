import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { UserProvider } from './components/UserContext/UserContext';
import Delete from './components/Delete/Delete';


function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
