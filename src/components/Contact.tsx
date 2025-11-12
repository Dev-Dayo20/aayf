import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D40] mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us. We're here to answer your questions and help
            you get involved.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F2C94C] bg-opacity-20 rounded-lg">
                    <MapPin size={24} className="text-[#004D40]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3E2723] mb-1">
                      Address
                    </h4>
                    <p className="text-gray-700">
                      All Africa Youth Monorovia,
                      <br />
                      West Africa - Liberia
                      {/* <br />
                      (with regional offices across Africa) */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F2C94C] bg-opacity-20 rounded-lg">
                    <Mail size={24} className="text-[#004D40]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3E2723] mb-1">Email</h4>
                    <p className="text-gray-700">
                      <a
                        href="mailto:info@allafricanyouth.org"
                        className="hover:text-[#004D40] transition-colors"
                      >
                        info@allafricanyouth.org
                      </a>
                      <br />
                      {/* <a
                        href="mailto:partnerships@aayf.org"
                        className="hover:text-[#004D40] transition-colors"
                      >
                        partnerships@aayf.org
                      </a> */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F2C94C] bg-opacity-20 rounded-lg">
                    <Phone size={24} className="text-[#004D40]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3E2723] mb-1">Phone</h4>
                    <p className="text-gray-700"> +231 88 139 3886</p>
                    <p className="text-gray-700"> +234 703 169 3020</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/AllAfricanYouthForum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#004D40] text-white rounded-full hover:bg-[#006D5A] transform hover:scale-110 transition-all duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://twitter.com/AAYF_Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#004D40] text-white rounded-full hover:bg-[#006D5A] transform hover:scale-110 transition-all duration-300"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://instagram.com/aayf_africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#004D40] text-white rounded-full hover:bg-[#006D5A] transform hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com/company/all-african-youth-forum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#004D40] text-white rounded-full hover:bg-[#006D5A] transform hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F2EC] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#3E2723] mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#004D40] focus:ring-2 focus:ring-[#004D40] focus:ring-opacity-20 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#3E2723] mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#004D40] focus:ring-2 focus:ring-[#004D40] focus:ring-opacity-20 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[#3E2723] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#004D40] focus:ring-2 focus:ring-[#004D40] focus:ring-opacity-20 outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#3E2723] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#004D40] focus:ring-2 focus:ring-[#004D40] focus:ring-opacity-20 outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#F2C94C] text-[#3E2723] font-bold rounded-lg hover:bg-[#e6bd3c] transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
