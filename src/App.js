
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router >
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
      
    </Router>
  );
}

export default App;
