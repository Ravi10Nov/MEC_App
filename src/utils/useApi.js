import axios from 'axios';
import { useEffect, useState } from 'react';


const useApi = () =>{

    const [data, setData] = useState([]);

    const [filterData, setFilterData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/orders');
            setData(response.data);
            setFilterData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return {data ,filterData ,setData ,setFilterData}
}

export default useApi ; 