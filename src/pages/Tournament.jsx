import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import TournamentCard from '../components/TournamentCard';
import GameFooter from '../components/Footer';
import axios from 'axios';

const Tournament = () => {

    const [level, setLevel] = useState("All levels");

    const levels = ["All levels", "International", "National", "Local"];
    const handleLevel = (e) => {
        setLevel(e.target.value);
        console.log(e.target.value);
    }
    const [tournaData, setTournaData] = useState([]);
    const backend = import.meta.env.VITE_BACKEND_URL ?? '';
    const base = backend.replace(/\/$/, ''); // remove trailing slash if present
    console.log(base);

    const handleData = async () => {
        try {
            const response = await axios.get(`${base}/api/tour/getTournament`, {});
            setTournaData(response.data.data)
            console.log(response.data.data);
            console.log("from response");

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleData()
        console.log("from useeffect");

    }, [])


    // Dummy data for TournamentCard removed (not used) to avoid unused-variable warning
    return (
        <>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2231194475.jpg?c=original&q=w_1202,c_fill/f_avif" alt="" className='h-100 object-cover w-full ' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-100'></div>
            <div className='mt-20 lg:px-20'>
                <div>
                    <h1 className='absolute lg:top-40 top-50 lg:left-150 z-10 text-white  text-center item-center left-1/5 justify-center my-5 py-5 text-3xl lg:text-5xl font-semibold '>Tournaments</h1>
                    <div className='flex justify-center mb-10 mt-[-50px]   items-center w-full lg:gap-12'>
                        <div className="
  w-[80%] sm:w-[85%] md:w-[420px] lg:w-[480px]
  flex items-center gap-3 
  bg-white border border-gray-200
  shadow-sm rounded-full 
  px-4 py-2
">

                            {/* Search Icon */}
                            <FaSearch className="text-gray-500 hidden md:block text-xl" />

                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Search..."
                                className="
      flex-1 
      bg-transparent 
      text-sm sm:text-base
      placeholder-gray-400 
      text-gray-800
      outline-none
    "
                            />

                            {/* Select Box */}
                            <select
                                value={level}
                                onChange={handleLevel}
                                className="
      bg-gray-100 
      rounded-full 
      px-1 py-2
      text-sm sm:text-base
      text-gray-800
      hidden lg:block
      outline-none 
      border border-gray-300
      hover:bg-gray-200 transition
    "
                            >
                                {levels.map((lvl) => (
                                    <option key={lvl} value={lvl} className="text-gray-800">
                                        {lvl}
                                    </option>
                                ))}
                            </select>

                        </div>


                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-10 mt-[-2rem] lg:mt-10 justify-items-center'>
                    {tournaData.map(tournament => (level === "All levels" || tournament.category === level) && (
                        <TournamentCard
                            key={tournament._id}
                            id={tournament._id}
                            logo={tournament.logo}
                            title={tournament.title}
                            // status={tournament.computedState}
                            date={tournament.date}
                            description={tournament.description}
                            location={tournament.location}
                            enrolled={tournament.enrolled}
                            state={tournament.category}
                            computedState={tournament.computedState}
                        />))}
                    {/* Example usage of TournamentCard with dummy data */}
                    {/* <TournamentCard title="International Open" logo="🌐" status="Upcoming" date="2024-07-15" description="A prestigious international tournament." location="London, UK" enrolled={150} state="International" /> */}
                    {/*<TournamentCard title={tournaments[0].name} logo={tournaments[0].logo} status={tournaments[0].status} date={tournaments[0].date} description={tournaments[0].description} location={tournaments[0].location} enrolled={tournaments[0].enrolled} state={tournaments[0].state} />*/}
                </div>
            </div>
        </>

    )
}

export default Tournament
