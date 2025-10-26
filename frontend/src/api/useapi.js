import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useapi = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const getApi = async () => {
            try {
                const res = await axios.get(url);
                
                setData(res.data)
            } catch (error) {
                console.log(error,"check your internet")
                setError(true)

            }
            finally {
                setLoading(false)
            }

        }
        getApi();
    }, [url]);
    return { data, loading, error };

};

export default useapi
