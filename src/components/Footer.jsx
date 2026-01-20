import { motion } from "framer-motion";
import { FaTwitter, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from '../assets/logosport.png'

export default function GameFooter() {
  return (
   <footer className="w-full bg-zinc-50 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-6 py-10 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
    
    {/* Brand / About */}
    <div>
      <img src={logo} alt="GoIndia Logo" className="h-10 mb-4" />
      <p className="text-sm text-slate-600 leading-relaxed">
        GoIndia is a unified sports platform to explore tournaments,
        connect with athletes, and track your competitive journey
        across local and international events.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
        Quick Links
      </h3>
      <ul className="space-y-3 text-sm">
        {["Home", "Sport", "Tournaments", "Stories", "About"].map((link, i) => (
          <li key={i}>
            <a
              href={`/${link.toLowerCase()}`}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
        Contact
      </h3>
      <div className="space-y-2 text-sm text-slate-600">
        <p>Email: <span className="text-slate-800">2005yashkurechiya@gmail.com</span></p>
        <p>Location: <span className="text-slate-800">Indore, India</span></p>
      </div>
    </div>

    {/* Social */}
    <div>
      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
        Follow Us
      </h3>
      <div className="flex gap-4">
        {[FaTwitter, FaDiscord, FaYoutube, FaInstagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="p-2 rounded-md border border-slate-200
                       text-slate-600 hover:text-blue-600
                       hover:border-blue-600 transition"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-zinc-100 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-slate-600">
      © {new Date().getFullYear()} <span className="font-medium text-slate-800">GoIndia</span>.
      All rights reserved. <br className="sm:hidden" />
      <span className="sm:ml-2">
        Developed by <span className="font-medium text-slate-800">Yash Kurechiya</span>
      </span>
    </div>
  </div>
</footer>

  );
}
