import React from "react";

export default function AsianGames() {
  return (
    <main className="w-full bg-gradient-to-b from-slate-50 to-white text-slate-800">

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              
              {/* Left Side Title */}
              <div className="lg:w-2/3">
                <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                  The Asian Games (Asiad)
                </h1>
                <p className="mt-4 text-red-100 max-w-2xl text-sm lg:text-base leading-relaxed">
                  Asia’s biggest celebration of sports, unity, culture, and
                  international excellence — second only to the Olympics.
                </p>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <a
                    href="#origins"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Origins & Evolution
                  </a>
                  <a
                    href="#india"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    India at the Games
                  </a>
                </div>
              </div>

              {/* Stats Card */}
              <div className="lg:w-1/3">
                <div className="bg-white/10 p-6 rounded-2xl ring-1 ring-white/10">
                  <h3 className="text-sm font-semibold">Asian Games Overview</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold">40+</div>
                      <div className="text-xs text-white/80">Countries</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold">4 yrs</div>
                      <div className="text-xs text-white/80">Frequency</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold">1951</div>
                      <div className="text-xs text-white/80">First Held</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold">2nd Largest</div>
                      <div className="text-xs text-white/80">After Olympics</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 pb-20 space-y-10">

        {/* Introduction */}
        <section className="bg-white shadow rounded-2xl p-6 lg:p-10 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
            The Asian Games, popularly known as the Asiad, is the largest multi-sport
            event in Asia and the second-largest in the world after the Olympics.
            Organized by the Olympic Council of Asia (OCA), the Games unite athletes
            from over 40 Asian nations every four years to celebrate sportsmanship,
            diversity, and excellence. Since 1951, the Asian Games have showcased the
            continent’s strength across Olympic and Asian-specific sports.
          </p>
        </section>

        {/* ORIGINS */}
        <section id="origins" className="bg-white shadow rounded-2xl p-6 lg:p-10 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">⭐ Origins and Evolution of the Asian Games</h3>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            The concept of a Pan-Asian sports event traces back to the early 1900s.
            The Far Eastern Championship Games (1913–1934) were the first attempt at
            bringing Asian nations together through sports. After World War II,
            Asian countries envisioned a new sporting movement inspired by the
            Olympics — one that would symbolize unity and peace in Asia.
          </p>

          <p className="mt-4 text-gray-700 text-sm lg:text-base leading-relaxed">
            In 1951, the first Asian Games were held in New Delhi, India, with 11
            nations participating in six sports. Over time, the Games expanded in
            size, cultural richness, modern facilities, and global influence.
          </p>
        </section>

        {/* PURPOSE */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">⭐ Purpose and Cultural Significance</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm lg:text-base text-gray-700">
            <li>Unity in Diversity – Bringing together culturally diverse Asian nations</li>
            <li>Peace & Diplomacy – Strengthening international relations</li>
            <li>Sporting Excellence – Showcasing Asia’s best talent</li>
            <li>Cultural Exchange – Celebrating traditions of host nations</li>
            <li>Symbol of Asia’s rising global identity</li>
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">⭐ How the Asian Games Work</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-1">1. Host City Selection</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cities are evaluated based on infrastructure, planning, capability,
                sustainability, and long-term legacy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">2. Opening Ceremony</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Known for grand performances, parade of nations, lighting of the Asian Games flame,
                and speeches by leaders.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">3. Sports Competitions</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                The Games feature over 35–45 sports across two weeks. Nations are ranked by gold medals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">4. Para-Sports</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Since 2010, the Asian Para Games are held separately soon after the main event.
              </p>
            </div>
          </div>
        </section>

        {/* SPORTS */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">⭐ Sports in the Asian Games</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Olympic Sports */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-red-600">1. Olympic Sports</h4>
              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                <li>Athletics</li>
                <li>Swimming</li>
                <li>Badminton</li>
                <li>Boxing</li>
                <li>Football</li>
                <li>Weightlifting</li>
                <li>Archery</li>
                <li>Shooting</li>
                <li>Wrestling</li>
                <li>Hockey</li>
              </ul>
            </div>

            {/* Asian Sports */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-red-600">2. Non-Olympic Asian Sports</h4>
              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                <li>Kabaddi</li>
                <li>Sepak Takraw</li>
                <li>Wushu</li>
                <li>Soft Tennis</li>
                <li>Kurash</li>
                <li>Dragon Boat Racing</li>
              </ul>
            </div>

            {/* Modern Sports */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-red-600">3. Modern & Youth Sports</h4>
              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                <li>Skateboarding</li>
                <li>Esports (medal event from 2022)</li>
                <li>Sport Climbing</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SYMBOLS */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">⭐ Symbols and Traditions</h3>

          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
            <li><strong>Emblem:</strong> Each host designs a unique cultural logo.</li>
            <li><strong>Mascots:</strong> Official mascots reflect heritage (e.g., Hangzhou 2022 tech-AI mascots).</li>
            <li><strong>Asian Games Torch:</strong> Carried across cities before the opening ceremony.</li>
          </ul>
        </section>

        {/* INDIA HISTORY */}
        <section id="india" className="bg-white shadow rounded-2xl p-6 lg:p-10 border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">⭐ India’s History in the Asian Games</h3>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            India has an emotional and historic connection to the Asian Games as the 
            founding host nation in 1951. India hosted the Games again in 1982, a year
            that introduced color television broadcasting in India and transformed
            sports awareness.
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">India's Hosting Legacy</h4>
            <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm">
              <li>1951 — New Delhi (First-ever Asian Games)</li>
              <li>1982 — New Delhi (Modernized Indian sports infrastructure)</li>
            </ul>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 text-center">
            <div className="bg-red-600 text-white p-6 rounded-xl shadow">
              <h3 className="text-3xl font-extrabold">800+</h3>
              <p className="text-sm mt-1">Total Medals</p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-xl shadow">
              <h3 className="text-3xl font-extrabold">Top 10</h3>
              <p className="text-sm mt-1">All-Time Rank</p>
            </div>
          </div>
        </section>

        {/* INDIA'S ACHIEVEMENTS */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100 space-y-6">
          <h3 className="text-xl font-semibold">⭐ Historic Indian Moments</h3>

          <div>
            <h4 className="font-semibold text-red-600">1. Golden Era of Athletics</h4>
            <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
              <li>Milkha Singh — Gold (1958)</li>
              <li>PT Usha — Dominant in 1980s</li>
              <li>Kamaljit Sandhu — First Indian woman to win gold (1970)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600">2. India’s Kabaddi Dominance</h4>
            <p className="text-sm text-gray-700 mt-2">
              Men’s Gold (1990–2014) • Women’s Gold (2010–2014).  
              India remains unmatched in kabaddi excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-red-600">3. Shooting & Boxing Boom</h4>
            <p className="text-sm text-gray-700 mt-2">
              India consistently ranks among the best in these sports with multiple golds.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-red-600">4. Hockey Achievements</h4>
            <p className="text-sm text-gray-700 mt-2">
              India has won several medals in both men’s and women’s hockey across editions.
              Men: Gold in 1966, 1998 • Women: Gold in 1982
            </p>
          </div>
        </section>

        {/* RECENT GAMES */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">⭐ Recent Asian Games Performances</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-black">Jakarta–Palembang 2018</h4>
              <p className="text-sm text-gray-700 mt-2">
                Total Medals: 69  
                Historic golds by Neeraj Chopra (Javelin) & Swapna Barman (Heptathlon).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black">Hangzhou 2022 (held in 2023)</h4>
              <p className="text-sm text-gray-700 mt-2">
                India’s BEST performance ever — 107 medals  
                Gold: 28 • Silver: 38 • Bronze: 41
              </p>
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                <li>Neeraj Chopra — Gold (Javelin)</li>
                <li>Avinash Sable — Gold (Steeplechase)</li>
                <li>Indian Women’s Cricket Team — Gold</li>
                <li>Compound Archery — Dominant medals</li>
                <li>Badminton, Chess & Cycling — Historic wins</li>
              </ul>
            </div>
          </div>
        </section>

        {/* IMPORTANCE */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">⭐ Importance of the Asian Games</h3>

          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
            <li>Platform for emerging Asian nations to shine</li>
            <li>Showcases Asia’s traditional & modern sports culture</li>
            <li>Promotes unity, peace, and diplomacy</li>
            <li>Inclusive of para-sports & gender-balanced formats</li>
            <li>Prepares athletes for world championships & Olympics</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow">
          <h3 className="text-lg font-semibold">Want a PDF version of this Asian Games content?</h3>
          <p className="mt-2 text-sm text-gray-600">I can generate a PDF or format it for blogs.</p>

          <div className="mt-4 flex justify-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700">
              Download PDF
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50">
              Copy as Markdown
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
