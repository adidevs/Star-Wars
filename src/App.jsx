import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Titlebar from './components/Titlebar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Films from './pages/Films';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';

function App() {
  return (
    <div className="App">
      <Router>
      <Titlebar/>
      <Sidebar/>
      <Routes>
          <Route path="/" element={<Content/>} />
          <Route path="/films" element={<Films/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/planets" element={<Planets/>} />
          <Route path="/species" element={<Species/>} />
          <Route path="/starships" element={<Starships/>} />
          <Route path="/vehicles" element={<Vehicles/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
