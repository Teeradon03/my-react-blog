import "./App.css";
import Home from "./components/home";
import About from "./components/About";
import Blogs from "./components/Blog";
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;