import "./newHotel.css";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { hotelInputs } from "../../formSource";

const NewHotel = () => {

    const [files, setFiles] = useState()
    const [info, setInfo] = useState({})

    const handleChange = (e) => {
        setInfo((prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async(e) => {
        e.preventDefault()

        try {

            const list = await Promise.all(
                Object.values(files).map(async(file) => {
                    const data = new FormData()
                    data.append("file", file)
                    data.append("upload_preset", "hotelResUpload")

                    const uploadResp = await axios.post(
                        "https://api.cloudinary.com/v1_1/gaurav1st/image/upload",
                        data
                    )

                    const {url} = uploadResp.data

                    return url
                }
            ))
            
            const newhotel = {
                ...info,
                photos: list
            }
            await axios.post("/hotels", newhotel)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <div className="top">
                    <h1>Add New Hotel</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src={
                            files
                              ? URL.createObjectURL(files[0])
                              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
                            
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Images : <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input 
                                    type="file"
                                    id="file"
                                    multiple
                                    onChange={(e) => setFiles(e.target.files)}
                                    style={{display: "none"}}
                                />
                            </div>
                            {hotelInputs.map((input) => (
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
                                    <label>Featured</label>
                                    <select id="featured" onChange={handleChange} >
                                        <option value={false} >No</option>
                                        <option value={true} >Yes</option>
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

export default NewHotel;