import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import TournamentCard from '../components/TournamentCard';
import GameFooter from '../components/Footer';

const Tournament = () => {

    const [level, setLevel] = useState("All levels");

    const levels = ["All levels", "International", "National", "Locals"];
    const handleLevel = (e) => {
        setLevel(e.target.value);
        console.log(e.target.value);
    }

    // Dummy data for TournamentCard
    const tournaments = [
        {
            id: 1,
            logo: "🌐",
            status: "Upcoming",
            enrolled: 120,
            state: "International",
            name: "World Sports Gala",
            level: "International",
            date: "2024-07-20",
            location: "Indore, Madhya Pradesh",
            description: "Elite teams from around the globe compete for the grand title.",
        },
        {
            id: 2,
            logo: "🏆",
            status: "Upcoming",
            enrolled: 80,
            state: "National",
            name: "India National Cup",
            level: "National",
            date: "2024-08-15",
            location: "Delhi, India",
            description: "The top national teams battle for the championship.",
        },
        {
            id: 3,
            logo: "⚽",
            status: "Upcoming",
            enrolled: 40,
            state: "Locals",
            name: "Bangalore City League",
            level: "Locals",
            date: "2024-09-01",
            location: "Bangalore, India",
            description: "Local clubs compete for city bragging rights.",
        },
        {
            id: 4,
            logo: "🏅",
            status: "Upcoming",
            enrolled: 60,
            state: "Locals",
            name: "Mumbai Summer Cup",
            level: "Locals",
            date: "2024-07-30",
            location: "Mumbai, India",
            description: "A summer tournament for local teams in Mumbai.",
        },
    ];
    return (
        <>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2231194475.jpg?c=original&q=w_1202,c_fill/f_avif" alt="" className='h-100 object-cover w-full ' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-100'></div>
            <div className='mt-20 lg:px-20'>
                <div>
                    <h1 className='absolute lg:top-40 top-50 lg:left-150 z-10 text-white left-15 text-center my-5 py-5 text-3xl lg:text-5xl font-semibold '>Tournaments</h1>
                    <div className='flex justify-center mb-10 mt-[-50px]   items-center w-full lg:gap-12'>
                        <div className='  border-gray-500 px-5 flex shadow shadow-black w-70 lg:w-110 items-center rounded-full text-center '>
                            <FaSearch className='scale-130 hidden lg:flex md:flex opacity-40 ' />
                            <input type="text" placeholder='Search....' className='lg:p-3 border-none  outline-none lg:w-50 w-70 rounded-full' />
                            <select value={level} onChange={handleLevel} className='lg:px-4 bg-slate-100 outline-none border-none  rounded-full py-2 ml-[-100px] lg:ml-2'>
                                {levels.map((lvl) => (
                                    <option value={lvl} key={lvl} className='rounded-full p-1  bg-gray-200 text-black border-none outline-none'>
                                        {lvl}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-10 mt-10 justify-items-center'>
                    {tournaments.map(tournament => (level === "All levels" || tournament.level === level) && (
                        <TournamentCard key={tournament.id} title={tournament.name} logo={tournament.logo} status={tournament.status} date={tournament.date} description={tournament.description} location={tournament.location} enrolled={tournament.enrolled} state={tournament.state} />
                    ))}
                    {/* Example usage of TournamentCard with dummy data */}
                    {/* <TournamentCard title="International Open" logo="🌐" status="Upcoming" date="2024-07-15" description="A prestigious international tournament." location="London, UK" enrolled={150} state="International" /> */}
                    {/*<TournamentCard title={tournaments[0].name} logo={tournaments[0].logo} status={tournaments[0].status} date={tournaments[0].date} description={tournaments[0].description} location={tournaments[0].location} enrolled={tournaments[0].enrolled} state={tournaments[0].state} />*/}
                </div>
            </div>
            <GameFooter />
        </>

    )
}

export default Tournament
