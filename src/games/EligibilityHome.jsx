import React from "react";

const EligibilityHome = () => {
  const data = [
    {
      id: 1,
      logo: "https://cdn-icons-png.flaticon.com/128/17942/17942183.png",
      title: "District Level",
      list: ["Age-appropriate category", "Basic skill assessment", "School/club participation"]
    },
    {
      id: 2,
      logo: "https://cdn-icons-png.flaticon.com/128/7998/7998652.png",
      title: "State Level",
      list: ["District championship", "State trials qualification", "Coaching certificate"]
    },
    {
      id: 3,
      logo: "https://cdn-icons-png.flaticon.com/128/317/317823.png",
      title: "National Level",
      list: ["State representation", "National trials performance", "Fitness standards"]
    },
    {
      id: 4,
      logo: "https://cdn-icons-png.flaticon.com/128/4540/4540365.png",
      title: "International / Olympics",
      list: ["National team selection", "International ranking", "Olympic qualification standards"]
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
           <h1 className="lg:text-4xl text-2xl font-bold text-slate-900">
            Eligibility Criteria
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((ele) => (
            <div
              key={ele.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center">
                  <img src={ele.logo} alt={ele.title} className="w-10 h-10 object-contain" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-center text-slate-800 mb-4">
                {ele.title}
              </h3>

              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                {ele.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EligibilityHome;
