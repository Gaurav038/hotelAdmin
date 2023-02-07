import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Widget3 = () => {
  const [data, setData] = useState();

   async function getData(){
      const res = (await axios.get("/booking/count")).data
      setData(res)
    } 

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="widget">
      <div className="left">
        <span className="title">
             BOOKINGS
        </span>
        <span className="counter">
          {data}
        </span>
        <Link to="/booking" ><span className="link">See all Booking</span></Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          50 %
        </div>
        <BeenhereIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
      </div>
    </div>
  );
};

export default Widget3;