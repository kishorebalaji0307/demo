import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Createuser from "./pages/Createuser/Createuser";
import Edituser from "./pages/Edituser/Edituser";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import './App.css'

 function App() {
    return(
        <BrowserRouter>
        <div className="continer">
            <nav className="Navbar">
                <Link to="/">Login</Link>
                <Link to="/AdminDashboard">AdminDashboard</Link>
                <Link to="/Createuser">Createuser</Link>
                <Link to="/UserDashboard">UserDashboard</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                <Route path="/Createuser" element={<Createuser />} />
              <Route path="/Edituser/:id" element={<Edituser />}/>
                <Route path="/UserDashboard" element={<UserDashboard />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
 }
 export default App;