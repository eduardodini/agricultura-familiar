import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import InsertData from './Pages/InsertData/InsertData';
import History from './Pages/History/History';
import './App.css';
import Login from './Pages/Login/Login';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/inserir' element={<InsertData />} />
          <Route path='/historico' element={<History />} />
        </Routes>
      </Router>
  );
}

export default App;