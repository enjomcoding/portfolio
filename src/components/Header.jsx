import { useContext } from "react";
import { Sun, Moon, Download, Mail, Phone } from "lucide-react";
import profileImg from "../assets/images/profile.jpg";
import { about } from "../data/about";

export default function Header() {
  return (
    <header className="w-full border-b transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left -> Profile and Info */}
        <div className="flex items-start space-x-4">
          {profileImg && (
            <img
              src={profileImg}
              alt="Profile"
              className="w-[155px] h-[155px] rounded-xl object-cover"
            />
          )}
          <div className = "mt-2">
            {/* Name aligned to the top now! */}
            <h1 className = "text-2xl sm:text-[32px] font-bold text-black">
              {about.name}<span className = "text-blue-500">✔</span>
            </h1>

            <p className = "text-sm text-gray-600 dark:text-gray-300">
              {about.location}
            </p>

            <p className = "text-sm text-gray-700 dark:text-gray-400">
              {about.title}
            </p>
          </div>
        </div>

        {/* Right -> Buttons */}
        <div className = "flex flex-col sm:flex-row sm:items-center gap-3 mt-4 sm:mt-0">
          <a
            href = "/assets/resume.pdf"
            download
            className = "flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            <Download size = {16} /> Download Resume
          </a>
          <a
            href = "mailto:jomsalvio@gmail.com"
            className = "flex items-center gap-2 border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Mail size = {16} /> Send Email
          </a>
          <a
            href = "tel:09566522948"
            className = "flex items-center gap-2 border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Phone size = {16} /> Call Me
          </a>
        </div>
        
      </div>
    </header>
  );
}