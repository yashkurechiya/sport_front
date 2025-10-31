import React from 'react'



const EligibilityHome = () => {
  const data = [
    {
      id: 1,
      logo: "https://cdn-icons-png.flaticon.com/128/17942/17942183.png",
      title: "District Level",
      list: [
        "Age-appropriate category",
        "Basic skill assessment",
        "School/club participation"
      ]
    },
    {
      id: 2,
      logo: "https://cdn-icons-png.flaticon.com/128/7998/7998652.png",
      title: "State Level",
      list: [
        "Distrit championship",
        "State trials qualification",
        "Coaching certificate"
      ]
    },
    {
      id: 3,
      logo: "https://cdn-icons-png.flaticon.com/128/317/317823.png",
      title: "National Level",
      list: [
        "State representaion",
        "National trials performance",
        "Fitness standards"
      ]
    },
    {
      id: 4,
      logo: "https://cdn-icons-png.flaticon.com/128/4540/4540365.png",
      title: "International/ Olympics",
      list: [
        "National team selection",
        "International ranking",
        "Olympic qualification standards"
      ]
    },
  ]
  return (
    <div className='min-h-100 lg:my-5 flex flex-col items-center justify-center'>
      <div className='flex flex-col'>
        <h1 className='lg:text-4xl text-2xl md:text-3xl font-semibold text-center lg:my-20 my-10'>Eligibility Criteria</h1>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-2 lg:w-300 px-5 lg:px-20 lg:gap-10 gap-5 items-center justify-center'>
        {
          data.map((ele) => (
            <div key={ele.id} className='  lg:p-3 bg-slate-100 py-5 gap-5 rounded-lg shadow-lg items-center lg:min-w-50 justify-center flex flex-col lg:h-70 h-75'>
              <img className='lg:w-15 w-10 text-white' src={ele.logo} alt={ele.title} />
              <h3 className='lg:text-xl text-center font-semibold my-2'>{ele.title}</h3>
              {
                ele.list ? (
                  <ul className='list-disc text-xs lg:text-sm lg:px-1 px-10 w-40 text-start'>
                    {ele.list.map((item, idx) => (
                      <li className='' key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : ""

              }
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default EligibilityHome;
