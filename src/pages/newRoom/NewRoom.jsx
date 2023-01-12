import "./newRoom.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import axios from "axios";
import {roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";

const NewRoom = () => {

    const [info, setInfo] = useState({})
    const [hotelId, setHotelId] = useState([])
    const [rooms, setRooms] = useState([])

    const {data, loading, error} = useFetch("/hotels")

    const handleChange = (e) => {
        setInfo((prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async(e) => {
        e.preventDefault()

        console.log(rooms)
        const roomNumbers = rooms.split(",").map((room) => ({number: room}))
        try {
            await axios.post(`/rooms/${hotelId}`, {
                ...info, roomNumbers
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <div className="top">
                    <h1>Add New Room</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            {roomInputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input 
                                        onChange={handleChange} 
                                        type={input.type} 
                                        placeholder={input.placeholder} 
                                        id={input.id}
                                    />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Rooms</label>
                                <textarea style={{width: '100%', height: '5rem'}} onChange={(e) => setRooms(e.target.value) } placeholder="give comma between rooms no" ></textarea>
                            </div>    
                           <div className="formInput">
                                <label>Choose a Hotel</label>
                                <select id="hotelId" onChange={(e) => setHotelId(e.target.value) } >
                                    {loading 
                                       ? "loading"
                                       : data && 
                                         data.map((hotel) => (
                                            <option key={hotel._id} value={hotel._id} >{hotel.name}</option>
                                         ))
                                    }
                                </select>       
                            </div>
                            <button onClick={handleClick} >Send</button>
                        </form>
                    </div> 
                </div>        
            </div>
        </div>
    )
};

export default NewRoom;