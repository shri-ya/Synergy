import Mainpage from './pages/Mainpage';
import './App.css';
import Superpowers from './pages/Superpowers';
import Analysis from './pages/Analysis';
import Emotion from './pages/Emotion';
import Mood from './pages/Mood';
import {Route,Routes,Link} from "react-router-dom"

function App() {
  return <div className='App'>
  <Routes>
    <Route  path="/" element={<Mainpage/>}/>
    <Route path ="/super" element = {<Superpowers/>}/>
    <Route path ="/analysis" element = {<Analysis/>}/>
    <Route path ="/emotion" element = {<Emotion/>}/>
    <Route path ="/mood" element = {<Mood/>}/>
  </Routes>
   




  </div>;
 
}

export default App;
