import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link,  useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  const logOutFunct = () => {
    localStorage.removeItem('user');
    navigate("/login")
  }

  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/booking" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>
         
          <p className="title">USER</p>
      
          <li onClick={logOutFunct}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;