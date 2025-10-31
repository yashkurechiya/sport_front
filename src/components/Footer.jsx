import { motion } from "framer-motion";
import { FaTwitter, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from '../assets/logosport.png'

export default function GameFooter() {
  return (
    <footer className="relative bg-white text-gray-600 py-12 px-6 mt-16">
      {/* Neon Border Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 z-10 relative">
        
        {/* About */}
        <div>
           <img src={logo} alt=""  className="lg:h-20 h-10"/>
          <p className="mt-4 text-gray-600 text-sm">
            Enter the ultimate gaming hub 🌌. Explore tournaments, track your stats, 
            and level up your journey with our community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Sports", "Events", "Academy", "News", "About"].map((link, i) => (
              <motion.li 
                key={i}
                whileHover={{ scale: 1.1, x: 6 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <a href={`/${link.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Contact</h3>
          <p className="text-sm">📧 support@gameverse.com</p>
          <p className="text-sm">📍 New Delhi, India</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Connect</h3>
          <div className="flex space-x-5">
            {[FaTwitter, FaDiscord, FaYoutube, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.3, rotate: 8 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-400 hover:text-pink-500 shadow-lg shadow-cyan-500/20"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} GameVerse. All Rights Reserved. ⚡
      </div>
    </footer>
  );
}
