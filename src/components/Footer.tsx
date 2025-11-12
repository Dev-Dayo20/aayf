import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import riseUp from "../assets/riseUp.png";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Get Involved", href: "#get-involved" },
  ];

  const resources = [
    { label: "News & Events", href: "#news" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#004D40] to-[#3E2723] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F2C94C] to-[#e6bd3c] rounded-full flex items-center justify-center">
                <img src={riseUp} alt="" />
                {/* <span className="text-[#004D40] font-bold text-xl">AA</span> */}
              </div>
              <div>
                <h3 className="text-xl font-bold">AAYF</h3>
                <p className="text-sm text-gray-300">Rise Up Africa</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering the next generation of transformative African leaders
              through leadership development, policy dialogue, and continental
              collaboration.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/AllAfricanYouthForum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-[#F2C94C] hover:text-[#004D40] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/AAYF_Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-[#F2C94C] hover:text-[#004D40] transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/aayf_africa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-[#F2C94C] hover:text-[#004D40] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/all-african-youth-forum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-[#F2C94C] hover:text-[#004D40] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F2C94C]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#F2C94C] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F2C94C]">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#F2C94C] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F2C94C]">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">
                  All Africa Youth Monorovia West Africa - Liberia
                </span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:info@allafricanyouth.org"
                  className="text-sm hover:text-[#F2C94C] transition-colors"
                >
                  info@allafricanyouth.org
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">
                  +231 88 139 3886, +234 703 169 3020
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} All African Youth Forum. All Rights
              Reserved.
            </p>
            <p className="text-gray-300 text-sm text-center md:text-right">
              Aligned with the African Youth Charter, Agenda 2063 & UN SDGs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
