import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
