import { ArrowRight } from "lucide-react";
import img1 from "../assets/img1.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#184c9f] via-[#184c9f] to-[#f68026] opacity-95"></div>

      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Rise Up <span className="text-[#f68026]">Africa</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-100">
            Empowering the Next Generation of Transformative African Leaders
          </p>
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            The All African Youth Forum (AAYF) is a transformative continental
            platform dedicated to empowering young African leaders through
            leadership development, policy dialogue, and Model African Union
            simulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-involved"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f68026] text-[#3E2723] font-semibold rounded-full hover:bg-[#e6bd3c] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join the Movement
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#004D40] transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-white opacity-75 hover:opacity-100 transition-opacity"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
