import './App.css';
import {BrowserRouter as Router,Route,Routes, Navigate} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import ContestDashboard from "./components/contestDashboard/contestDashboard"
import HiringDashboard from "./components/hiringDashboard/hiringDashboard"
import HackathonDashboard from "./components/hackathonDashboard/hackathonDashboard"
import ErrorPage from "./components/errorPage/errorPage"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/contest"/>}/>

        <Route path="/contest" element={<ContestDashboard/>}/>

        <Route path="/hiring" element={<HiringDashboard/>}/>

        <Route path="/hackathon" element={<HackathonDashboard/>}/>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
