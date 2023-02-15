import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { BASE_URL } from "../../API";

const Widget = () => {
  const [data, setData] = useState();

   async function getData(){
      const res = (await axios.get(`${BASE_URL}/users/count`)).data
      setData(res)
    } 

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">
            USERS
        </span>
        <span className="counter">
          {data}
        </span>
        <Link to="/users" ><span className="link">See all users</span></Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          48 %
        </div>
        <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
      </div>
    </div>
  );
};

export default Widget;