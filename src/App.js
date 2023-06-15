
import Home from "../src/Component/Home";
import Nav from "../src/Component/Nav";
import { Route, Routes } from "react-router-dom";
import Courses from "./Component/Courses";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          
      </Routes>
      
    </div>
  );
}

export default App;
