import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import KontaktPage from './components/KontaktPage';

function App() {
  
  return(
  <div className="main-div">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/ >} />
        <Route path="/kontakt" element={<KontaktPage/ >} />
      </Routes>
    </Router >
  </div>
  );
}

export default App;
