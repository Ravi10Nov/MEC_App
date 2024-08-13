import axios from "axios";
import { useEffect } from "react";


const Home = () =>{

    useEffect(()=>{
        callHome();
    },[])

    const callHome = async () =>{
        try{
            const response = await axios.get('http://localhost:8000/home',{ withCredentials: true });

            console.log(response.data)
        }
        catch (err){
            console.error('Error fetching data:', err);
        }
    }

    return(
        <div>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
        </div>
    )
};

export default Home;