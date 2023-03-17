import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../API";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res = await axios.get(`${BASE_URL}${url}` ,{withCredentials: true, credentials: 'include'})
                setData(res.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [url])

    const reFetch = async ()=>{
        setLoading(true)
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    
    return {data, loading, error, reFetch};
}

export default useFetch