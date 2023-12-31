import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  );
}

export default App
