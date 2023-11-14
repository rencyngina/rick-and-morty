
import './App.css';

import Home from './component/Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cher1 from './component/Pages/Cher1'
import Cher2 from './component/Pages/Cher2'
import Cher3 from './component/Pages/Cher3'
import Cher4 from './component/Pages/Cher4'
import Cher5 from './component/Pages/Cher5'
import Cher6 from './component/Pages/Cher6'
import Cher7 from './component/Pages/Cher7'
import Cher8 from './component/Pages/Cher8'
import Cher9 from './component/Pages/Cher9'
import Cher10 from './component/Pages/Cher10'
import Cher11 from './component/Pages/Cher11'
import Cher12 from './component/Pages/Cher12'
import Cher13 from './component/Pages/Cher13'
import Cher14 from './component/Pages/Cher14'
import Cher15 from './component/Pages/Cher15'
import Cher16 from './component/Pages/Cher16'
import Cher17 from './component/Pages/Cher17'
import Cher18 from './component/Pages/Cher18'
import Cher19 from './component/Pages/Cher19'
import Cher20 from './component/Pages/Cher20'

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Cher1" element={<Cher1/>}/> 
    <Route path="Cher2" element={<Cher2/>}/> 
    <Route path="Cher3" element={<Cher3/>}/> 
    <Route path="Cher4" element={<Cher4/>}/> 
    <Route path="Cher5" element={<Cher5/>}/> 
    <Route path="Cher6" element={<Cher6/>}/> 
    <Route path="Cher7" element={<Cher7/>}/> 
    <Route path="Cher8" element={<Cher8/>}/> 
    <Route path="Cher9" element={<Cher9/>}/> 
    <Route path="Cher10" element={<Cher10/>}/> 
    <Route path="Cher11" element={<Cher11/>}/> 
    <Route path="Cher12" element={<Cher12/>}/> 
    <Route path="Cher13" element={<Cher13/>}/> 
    <Route path="Cher14" element={<Cher14/>}/> 
    <Route path="Cher15" element={<Cher15/>}/> 
    <Route path="Cher16" element={<Cher16/>}/> 
    <Route path="Cher17" element={<Cher17/>}/> 
    <Route path="Cher18" element={<Cher18/>}/> 
    <Route path="Cher19" element={<Cher19/>}/> 
    <Route path="Cher20" element={<Cher20/>}/> 
    </Routes>
    </Router>
    </div>
  );
}

export default App;
