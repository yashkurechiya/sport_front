import React from "react";


export default function Common() {
  return (
    <main className="w-full bg-gradient-to-b mt-30 from-slate-50 to-white text-slate-800">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 text-white">
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-2/3">
                <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
                  The Commonwealth Games
                </h1>
                <p className="mt-4 text-indigo-100 max-w-2xl text-sm lg:text-base leading-relaxed">
                  A unique multi-sport event bringing together the nations of the Commonwealth —
                  celebrated for friendly competition, cultural exchange, and sporting excellence.
                </p>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <a
                    href="#origins"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Read Origins
                  </a>
                  <a
                    href="#india"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    India at the Games
                  </a>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-white/10 p-6 rounded-2xl ring-1 ring-white/10">
                  <h3 className="text-sm font-semibold text-white/90">Snapshot</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold">70+</div>
                      <div className="text-xs text-white/80">Nations</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold">4 yrs</div>
                      <div className="text-xs text-white/80">Frequency</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold">Inclusive</div>
                      <div className="text-xs text-white/80">Para-Sports</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold">1930</div>
                      <div className="text-xs text-white/80">First held</div>
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

        {/* INTRO (long content opening paragraph) */}
        <section className="bg-white shadow rounded-2xl p-6 lg:p-10 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-sm lg:text-base leading-relaxed text-gray-700">
            The Commonwealth Games stand among the most respected and widely watched international multi-sport events in the world. What makes them unique is that they are participated only by nations that are part of the Commonwealth—an association of countries that were mostly former territories of the British Empire. Since their inception in 1930, the Commonwealth Games have become a symbol of friendly competition, unity, cultural diversity, and sporting excellence.
          </p>

          <p className="mt-4 text-sm lg:text-base leading-relaxed text-gray-700">
            Often called the “Friendly Games,” the Commonwealth Games focus heavily on harmony, equality, and the idea that sports can bring nations together. With over 70 nations taking part, the event is celebrated once every four years and features several sports not commonly seen in the Olympics. India has been an important participant and one of the top-performing nations at the Commonwealth Games, contributing significantly to the event's sporting legacy.
          </p>
        </section>

        {/* ORIGINS & EVOLUTION */}
        <section id="origins" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white shadow rounded-2xl p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Origins and Evolution</h3>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              The idea for the Commonwealth Games dates back to 1891, but it wasn’t until 1930 that the first official edition was held in Hamilton, Canada, known then as the British Empire Games. Over time, the name evolved as the Commonwealth of Nations grew and took on a new identity.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold">Name Evolution</h4>
              <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm">
                <li>British Empire Games (1930–1950)</li>
                <li>British Empire and Commonwealth Games (1954–1966)</li>
                <li>British Commonwealth Games (1970–1974)</li>
                <li>Commonwealth Games (Since 1978)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Purpose & Spirit</h4>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed mt-2">
                The Games emphasize values like humanity, equality, and destiny — focusing on inclusiveness and respect. They promote collaboration over rivalry, and prioritise cultural representation and fairness.
              </p>
            </div>
          </div>

          <aside className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <h4 className="text-sm font-semibold text-indigo-600">Quick Facts</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><strong>First Held:</strong> 1930 (Hamilton)</li>
              <li><strong>Frequency:</strong> Every 4 years</li>
              <li><strong>Participants:</strong> Commonwealth nations (70+)</li>
              <li><strong>Known as:</strong> Friendly Games</li>
            </ul>
          </aside>
        </section>

        {/* HOW THE GAMES WORK */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">How the Commonwealth Games Work</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-1">Host City Selection</h4>
              <p className="text-gray-700 text-sm leading-relaxed">Chosen by the Commonwealth Games Federation (CGF). Host must ensure facilities, transport, sustainability, and cultural representation.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Opening Ceremony</h4>
              <p className="text-gray-700 text-sm leading-relaxed">Features parade of athletes, cultural performances, lighting of the cauldron, and the Queen's Baton Relay tradition.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Sports Competitions</h4>
              <p className="text-gray-700 text-sm leading-relaxed">Events across around 11–12 days, medals awarded for top performances and national rankings based on medal counts.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Para-Sports</h4>
              <p className="text-gray-700 text-sm leading-relaxed">Para-sports are integrated into the main program — a pioneering move for inclusivity.</p>
            </div>
          </div>
        </section>

        {/* UNIQUE SPORTS */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Signature & Unique Sports</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-gray-100">
              <h4 className="font-semibold text-indigo-600">Commonwealth-Exclusive</h4>
              <ul className="mt-3 text-sm text-gray-700 list-disc ml-5">
                <li>Lawn Bowls</li>
                <li>Netball</li>
                <li>Squash</li>
                <li>Rugby Sevens</li>
                <li>Cricket (select editions)</li>
                <li>Para-Powerlifting</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-gray-100">
              <h4 className="font-semibold text-indigo-600">Popular Olympic Sports</h4>
              <ul className="mt-3 text-sm text-gray-700 list-disc ml-5">
                <li>Athletics</li>
                <li>Swimming</li>
                <li>Weightlifting</li>
                <li>Wrestling</li>
                <li>Shooting</li>
                <li>Badminton</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-gray-100">
              <h4 className="font-semibold text-indigo-600">Other Sports</h4>
              <ul className="mt-3 text-sm text-gray-700 list-disc ml-5">
                <li>Table Tennis</li>
                <li>Boxing</li>
                <li>Gymnastics</li>
                <li>Hockey</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INDIA SECTION */}
        <section id="india" className="bg-white shadow rounded-2xl p-6 lg:p-10 border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">India and the Commonwealth Games</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                India has been a consistent and influential participant in the Commonwealth Games. The country first competed in 1934, only the second edition of the Games. Since then, India has steadily risen as one of the top-performing nations, showing particular strength in shooting, wrestling, weightlifting, boxing, badminton, table tennis and selected athletics events.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold">Breakthrough Moments</h4>
                <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm">
                  <li><strong>Early Years (1934–1950s):</strong> Modest achievements as infrastructure developed.</li>
                  <li><strong>Rise to Dominance (1990s–2010s):</strong> Investment in coaching and facilities led to sustained medal wins.</li>
                  <li><strong>2010 Delhi Games:</strong> India hosted and achieved its best-ever finish — 2nd overall with 101 medals (38 Gold, 27 Silver, 36 Bronze).</li>
                </ul>
              </div>
            </div>

            <aside className="bg-slate-50 p-4 rounded-lg border border-gray-100">
              <h4 className="text-sm font-semibold text-indigo-600">India at a glance</h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-xs text-gray-600">Gold (all-time)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-gray-600">Total Medals</div>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-8 space-y-6">
            <h4 className="text-lg font-semibold">Top Indian Sports</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-indigo-600">Shooting</h5>
                <p className="mt-2 text-sm text-gray-700">India’s most successful discipline. Champions include Jaspal Rana, Abhinav Bindra, Gagan Narang, Heena Sidhu, and Manu Bhaker.</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-indigo-600">Wrestling</h5>
                <p className="mt-2 text-sm text-gray-700">India is a powerhouse with stars like Sushil Kumar, Bajrang Punia, Yogeshwar Dutt, Sakshi Malik, and Vinesh Phogat.</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-indigo-600">Weightlifting</h5>
                <p className="mt-2 text-sm text-gray-700">Consistent medals from athletes such as Mirabai Chanu and Ravi Katulu.</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-indigo-600">Badminton & Table Tennis</h5>
                <p className="mt-2 text-sm text-gray-700">PV Sindhu, Saina Nehwal, Kidambi Srikanth, Sharath Kamal, Manika Batra are notable names leading India’s rise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2010 DELHI HIGHLIGHT */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">2010 Delhi Commonwealth Games — A Turning Point</h3>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            The 2010 Delhi Games were a landmark edition for India — hosting the Games for the first time and achieving a record medal haul of 101 medals (38 Gold, 27 Silver, 36 Bronze). It created national heroes, improved infrastructure, and inspired a generation of athletes.
          </p>
        </section>

        {/* RECENT EDITION HIGHLIGHTS */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Recent Edition — Birmingham 2022</h3>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            In 2022, India finished with a strong performance despite the absence of shooting (a traditional strength). India won 61 medals across weightlifting, badminton, table tennis, wrestling and boxing. Standout performers included Mirabai Chanu (Gold), PV Sindhu (Gold), Achanta Sharath Kamal (table tennis), Bajrang Punia (Gold), and Nikhat Zareen (boxing).
          </p>
        </section>

        {/* IMPORTANCE & LEGACY */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Importance of the Commonwealth Games</h3>
          <ul className="list-disc ml-5 text-gray-700 text-sm lg:text-base space-y-2">
            <li><strong>Accessible platform for emerging nations:</strong> Smaller nations find a level playing field here.</li>
            <li><strong>Blend of traditional & modern sports:</strong> Preserves Commonwealth cultural identity through sports like netball and lawn bowls.</li>
            <li><strong>Equality & inclusion:</strong> Early adopters of para-sport integration and gender-balanced events.</li>
            <li><strong>Training ground for the Olympics:</strong> Many athletes use the Games as preparation for Olympics and world championships.</li>
          </ul>
        </section>

        {/* CLOSING / CTA */}
        <section className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow">
          <h3 className="text-lg font-semibold">Want this content as a downloadable article?</h3>
          <p className="mt-2 text-sm text-gray-600">I can convert this to a printable PDF or a blog-ready markdown file.</p>
          <div className="mt-4 flex justify-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700">Download PDF</button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50">Copy as Markdown</button>
          </div>
        </section>
      </div>
    </main>
  );
}
