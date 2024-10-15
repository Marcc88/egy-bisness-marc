import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './Components/Sign.jsx';
import Login from './Components/Login.jsx';
import Footer from './Components/Footer.jsx';
import '../src/Components/Footer.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sign />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
