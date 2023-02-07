import Sidebar from "../../components/sidebar/Sidebar.js";
import "./home.css";
import Widget from "../../components/widget/Widget.js";
import Widget2 from "../../components/widget/Widget2.js";
import Widget3 from "../../components/widget/Widget3.js";

const Home = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="widgets">
            <Widget />
            <Widget2 />
            <Widget3 />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;