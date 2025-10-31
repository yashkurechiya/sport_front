import React from 'react'
import AcademyCard from '../components/AcademyCard'
import GameFooter from '../components/Footer';
import { FaSearch } from 'react-icons/fa';

const academyData = [
    {
        Title: "Mumbai Aquatic Academy",
        logo: "🏊",
        Rating: "4.7",
        sports: ["Swimming", "Water Polo", "Diving"],
        location: "Mumbai",
        contact: "022-1234-5678",
        email: "mumbai@academy.com",
        description: "Top-notch aquatic training in Mumbai.",
        training: ["2 hr daily practice", "State tournaments", "National selection"]
    },
    {
        Title: "Delhi Sports Hub",
        logo: "🏸",
        Rating: "4.6",
        sports: ["Badminton", "Table Tennis", "Squash"],
        location: "Delhi",
        contact: "011-2345-6789",
        email: "delhi@academy.com",
        description: "Premier indoor sports academy in Delhi.",
        training: ["1.5 hr daily practice", "Inter-school competitions", "Coaching camps"]
    },
    {
        Title: "Bangalore Football Academy",
        logo: "⚽",
        Rating: "4.8",
        sports: ["Football", "Futsal"],
        location: "Bangalore",
        contact: "080-3456-7890",
        email: "bangalore@academy.com",
        description: "Elite football training for all ages.",
        training: ["2 hr daily practice", "League matches", "Skill workshops"]
    },
    {
        Title: "Chennai Cricket Center",
        logo: "🏏",
        Rating: "4.5",
        sports: ["Cricket"],
        location: "Chennai",
        contact: "044-4567-8901",
        email: "chennai@academy.com",
        description: "Best cricket coaching in Chennai.",
        training: ["3 hr daily nets", "Weekend matches", "Fitness sessions"]
    },
    {
        Title: "Kolkata Tennis School",
        logo: "🎾",
        Rating: "4.4",
        sports: ["Tennis"],
        location: "Kolkata",
        contact: "033-5678-9012",
        email: "kolkata@academy.com",
        description: "Professional tennis coaching for all levels.",
        training: ["1 hr daily practice", "Monthly tournaments", "Video analysis"]
    },
    {
        Title: "Hyderabad Athletics Academy",
        logo: "🏃",
        Rating: "4.6",
        sports: ["Athletics", "Long Jump", "High Jump"],
        location: "Hyderabad",
        contact: "040-6789-0123",
        email: "hyderabad@academy.com",
        description: "Comprehensive athletics training in Hyderabad.",
        training: ["2 hr daily training", "Track events", "Strength conditioning"]
    }
];

const Academy = () => {
    return (
        <>

            <img src="https://cpimg.tistatic.com/11167030/b/4/Artificial-Turf-Sports-Ground..jpg" alt="" className='object-cover w-full h-100' />
            <div className="absolute h-100 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className='mt-20 lg:px-20 px-5 '>

                <div>
                    <h1 className='absolute top-40 lg:left-160  z-10 text-white text-center my-5 py-5 text-3xl left-20 md:left-50 lg:text-5xl font-semibold '>Academy</h1>
                    <div className='flex justify-center mb-10 mt-[-50px]  items-center w-full gap-12'>
                        <div className='  border-gray-500 w-120 px-5 flex shadow shadow-black items-center rounded-full text-center '>
                            <FaSearch className='scale-130 opacity-40 ' />
                            <input type="text" placeholder='Search....' className='p-3 border-none outline-none rounded-full' />
                            {/* <select value={level}   className='px-4 outline-none border-none  rounded-full py-2 ml-2'>
                                            {/* {levels.map((lvl) => (
                                                <option value={lvl} key={lvl} className='rounded-full p-1 bg-black text-white'>
                                                    {lvl}
                                                </option>
                                            ))} */}
                            {/* </select> */}
                        </div>
                    </div>
                </div>
                <div className='grid gap-10 mb-20 lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {academyData.map((academy, idx) => (
                        <AcademyCard
                            key={idx}
                            Title={academy.Title}
                            logo={academy.logo}
                            Rating={academy.Rating}
                            sports={academy.sports}
                            location={academy.location}
                            contact={academy.contact}
                            email={academy.email}
                            description={academy.description}
                            training={academy.training}
                        />
                    ))}
                </div>

            </div>
            <GameFooter />
        </>
    )
}

export default Academy
