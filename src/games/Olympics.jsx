import React from "react";
import olympics from "../assets/olympics.png";

const Olympics = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white pb-20">

      {/* HERO SECTION */}
      <div className="relative w-full h-[300px] lg:h-[450px] overflow-hidden">
        <img
          src={olympics}
          alt="Olympics"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-16">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-xl">
            Olympic Games
          </h1>
          <p className="text-white/90 mt-2 lg:text-lg max-w-xl">
            The world’s greatest celebration of sports, unity, and human excellence.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 mt-12 space-y-16">

        {/* INTRODUCTION */}
        <section className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 border border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
            The Olympic Games are the world’s largest, most historic, and most
            celebrated multisport event, uniting thousands of athletes from across
            the globe. More than just a sporting competition, the Olympics represent
            a powerful symbol of peace, unity, cultural exchange, and human excellence.
            For over a century, the modern Olympic Games have served as a platform for
            athletes to showcase unmatched determination, skill, and sportsmanship.
            To understand the true essence of the Olympics, it is important to explore
            where it all began, how it evolved, how the Games function today, and the
            significant role nations like India have played in its journey.
          </p>
        </section>

        {/* ANCIENT OLYMPICS */}
        <section className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 border border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ancient Olympic Games
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
            The roots of the Olympics trace back to ancient Greece, around 776 BCE,
            in the city of Olympia. These ancient Games were held every four years
            and were dedicated to Zeus, the king of the Greek gods. Only men who
            spoke Greek could participate, and the competitions were closely tied to
            religion, culture, and community celebration.
          </p>

          <p className="mt-3 text-gray-700 text-sm lg:text-base">
            Events like running, wrestling, chariot racing, boxing, long jump, and
            the pentathlon were part of these early Games. Winners were celebrated
            as heroes, earning olive wreaths and lifelong honor. However, the ancient
            Olympics were discontinued around 393 CE when the Roman Emperor Theodosius I
            banned pagan festivals.
          </p>

          <h3 className="mt-8 text-xl lg:text-2xl font-semibold text-gray-900">
            Birth of the Modern Olympic Games
          </h3>

          <p className="mt-3 text-gray-700 text-sm lg:text-base">
            The modern revival came centuries later, thanks to Baron Pierre de Coubertin,
            a French educator who believed sports could promote peace and global unity.
            In 1896, the first Modern Olympic Games were held in Athens, Greece, with
            just 13 countries participating.
          </p>
        </section>

        {/* SUMMER & WINTER */}
        <section className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 border border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            The Two Categories of Olympic Games
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Summer Olympics */}
            <div className="bg-slate-100 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-indigo-600">Summer Olympics</h3>
              <p className="mt-2 text-gray-700 text-sm lg:text-base">
                Includes over 35 major sports like athletics, swimming, gymnastics,
                football, hockey, boxing, wrestling, and badminton.
              </p>
            </div>

            {/* Winter Olympics */}
            <div className="bg-slate-100 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-indigo-600">Winter Olympics</h3>
              <p className="mt-2 text-gray-700 text-sm lg:text-base">
                Focuses on snow and ice sports such as skiing, snowboarding, figure
                skating, bobsleigh, and ice hockey.
              </p>
            </div>

          </div>
        </section>

        {/* INDIA IN OLYMPICS */}
        <section className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 border border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            India in the Olympic Games
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
            India first participated in the Olympic Games in 1900, when Norman Pritchard,
            an Anglo-Indian athlete, won two silver medals—making India one of the
            earliest Asian countries to win an Olympic medal.
          </p>
        </section>

        {/* INDIA'S GOLDEN HOCKEY ERA */}
        <section className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 border border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            ⭐ India’s Hockey Golden Era
          </h2>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            From 1928 to 1956, India dominated world hockey by winning six consecutive
            Olympic gold medals, remaining unbeatable for nearly three decades. Legendary
            players like Dhyan Chand inspired millions with their unmatched skill,
            precision, and sportsmanship.
          </p>

          <div className="mt-6">
            <h3 className="text-lg lg:text-xl font-semibold text-indigo-600 mb-3">
              Gold Medals in Hockey:
            </h3>

            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700 text-sm lg:text-base">
              <li>1928 – Amsterdam</li>
              <li>1932 – Los Angeles</li>
              <li>1936 – Berlin</li>
              <li>1948 – London</li>
              <li>1952 – Helsinki</li>
              <li>1956 – Melbourne</li>
            </ul>

            <p className="mt-4 text-gray-700">
              India later added two more Olympic hockey golds:
              <br /> • 1964 Tokyo  
              <br /> • 1980 Moscow
            </p>
          </div>
        </section>

        {/* INDIA SPORTS ACHIEVEMENTS */}
        <section className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 border border-gray-200">

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            ⭐ India’s Performance in Other Sports
          </h2>

          <div className="space-y-8">

            {/* Shooting */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">1. Shooting</h3>
              <p className="text-gray-700 mt-2 text-sm lg:text-base">
                India has made significant progress in shooting:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm lg:text-base">
                <li>Abhinav Bindra – Gold (2008)</li>
                <li>Vijay Kumar – Silver</li>
                <li>Gagan Narang – Bronze</li>
              </ul>
            </div>

            {/* Wrestling */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">2. Wrestling</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm lg:text-base">
                <li>Sushil Kumar – Bronze (2008), Silver (2012)</li>
                <li>Yogeshwar Dutt – Bronze (2012)</li>
              </ul>
            </div>

            {/* Boxing */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">3. Boxing</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm lg:text-base">
                <li>Mary Kom – Bronze (2012)</li>
                <li>Vijender Singh – Bronze (2008)</li>
              </ul>
            </div>

            {/* Badminton */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">4. Badminton</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm lg:text-base">
                <li>PV Sindhu – Silver (2016), Bronze (2020)</li>
                <li>Saina Nehwal – Bronze (2012)</li>
              </ul>
            </div>

            {/* Weightlifting */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">5. Weightlifting</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm lg:text-base">
                <li>Mirabai Chanu – Silver (2020)</li>
              </ul>
            </div>

            {/* Athletics */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">6. Athletics</h3>
              <p className="text-gray-700 mt-2 text-sm lg:text-base">
                India created history when:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm lg:text-base">
                <li>Neeraj Chopra – Gold (Javelin Throw, 2020)</li>
              </ul>
            </div>

            {/* Hockey Revival */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">7. Hockey Revival</h3>
              <p className="mt-2 text-gray-700 text-sm lg:text-base">
                India’s men’s team won Bronze in Tokyo 2020 after 41 years.  
                The women’s team also reached the semifinals for the first time.
              </p>
            </div>

          </div>
        </section>

        {/* INDIA MEDAL SUMMARY */}
        <section className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 border border-gray-200 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            ⭐ India’s Medal Summary (Modern Era)
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-indigo-600 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-extrabold">10</h3>
              <p className="mt-1 text-sm lg:text-base">Gold</p>
            </div>

            <div className="bg-slate-800 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-extrabold">9</h3>
              <p className="mt-1 text-sm lg:text-base">Silver</p>
            </div>

            <div className="bg-orange-500 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-extrabold">16</h3>
              <p className="mt-1 text-sm lg:text-base">Bronze</p>
            </div>

            <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-extrabold">35</h3>
              <p className="mt-1 text-sm lg:text-base">Total Medals</p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 text-sm lg:text-base">
            India continues to grow stronger with major investments in sports science,
            training facilities, and grassroots development.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Olympics;
