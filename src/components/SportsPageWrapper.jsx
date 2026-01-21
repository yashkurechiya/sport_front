import { useParams } from "react-router-dom";
import sportsData from '../assets/data/fullData.js'
import SportsPage from '../pages/SportsPage.jsx'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loader from "./Loader.jsx";

 export function SportsPageWrapper() {

    const [sportD, setSportD] = useState([]);

       const backend = import.meta.env.VITE_BACKEND_URL ?? '';
    const base = backend.replace(/\/$/, ''); // remove trailing slash if present

    const handleData = async () =>{
        try {
            const response = await axios.get(`${base}/api/sportget`, {});
            setSportD(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleData()
    });

  const { id } = useParams();
  const sport = sportD.find((item) => item.id === id);

  if (!sport) return <h1 className="text-center mt-40 text-2xl"><Loader /></h1>;
  return sport ?  <SportsPage data={sport} /> : <Loader />;
}