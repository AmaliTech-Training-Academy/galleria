import './App.css';
import Homepage from './component/Homepage';
import {Routes, Route} from "react-router-dom"
import Slideshow from './component/Slideshow/Slideshow';
// import Gallery from './component/Gallery/Gallery';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        {<Route path='Slideshow' element={<Slideshow/>}/>}
    </Routes>
  );
}

export default App;
