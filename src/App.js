import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Clock from './simple_clock/Clock';
import Shop from './simple_shop/Shop';
import Todo from './simple_todo/Todo'
import Gif from './gif_search_bar/Gif';
import Drag from './dragable_video/Drag'

const Navbar = () =>{
  return(
    <div className="nav">
      <li>
        <Link key="0" to="/clock">Clock</Link>
      </li>
      <li>
        <Link key="1" to="/shop">Shop</Link>
      </li>
      <li>
        <Link key="2" to="/todo">Todo</Link>
      </li>
      <li>
        <Link key="3" to="/gif">Gif</Link>
      </li>
      <li>
        <Link key="4" to="/drag">Drag</Link>
      </li>
    </div>
  )
}

const WelcomeContent = () =>{
  return (
    <div className="welcomeContainer">
      <h1>Practice React Project Navigator</h1>
      <p>
        This is a simple interface for navigating around some projects I made to learn and practice 
        react, these are very simple and mainly represent a single react component.
      </p>
      <p>
        Using the Nav bar above you can navigate between the different projects
      </p>
    </div>  
        )
}

function App() {
  return (
    <Router>
        <Navbar/>

        <div className="content">
          <Routes >
            <Route path="/" element={<WelcomeContent />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/gif" element={<Gif />} />
            <Route path="/drag" element={<Drag />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
