import Sidebar from "../../components/sidebar/Sidebar.js";
import "./home.css";
import Widget from "../../components/widget/Widget.js";

const Home = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;