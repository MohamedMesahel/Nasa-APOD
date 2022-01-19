import './App.css';
// Importing ReactRoutes and other components
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';





function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nasaphoto" element={<NasaPhoto />} />
        </Routes>

      </div>
    </BrowserRouter>


  );
}

export default App;
