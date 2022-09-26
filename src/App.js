import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
