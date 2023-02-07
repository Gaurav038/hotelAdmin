import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Widget2 = () => {
  const [data, setData] = useState();

   async function getData(){
      const res = (await axios.get("/hotels/count")).data
      setData(res)
    } 

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">
            HOTELS
        </span>
        <span className="counter">
          {data}
        </span>
        <Link to="/hotels" ><span className="link">See all Hotels</span></Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          42 %
        </div>
        <LocalHotelIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
      </div>
    </div>
  );
};

export default Widget2;