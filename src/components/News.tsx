import { Calendar, Award, Users, FileText } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      icon: Calendar,
      title: 'Call for Delegates',
      description: 'Applications now open for the 2024 All African Youth Forum. Represent your country and be part of transformative continental dialogue.',
      date: 'Ongoing',
      color: 'from-[#004D40] to-[#006D5A]',
    },
    {
      icon: Users,
      title: 'AAYF Leadership Academy',
      description: 'Join our intensive 6-month leadership development program featuring mentorship from distinguished African leaders.',
      date: 'Opens Soon',
      color: 'from-[#F2C94C] to-[#e6bd3c]',
    },
    {
      icon: FileText,
      title: 'Youth Policy Consultation',
      description: 'Contribute to our upcoming policy brief on youth employment and entrepreneurship in post-pandemic Africa.',
      date: 'Submissions Open',
      color: 'from-[#3E2723] to-[#5D4037]',
    },
    {
      icon: Award,
      title: 'Rising Star Awards 2024',
      description: 'Nominations open for youth-led initiatives demonstrating exceptional impact in their communities.',
      date: 'Nominate Now',
      color: 'from-[#004D40] to-[#F2C94C]',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-[#F6F2EC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D40] mb-4">
            News & Events
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest AAYF announcements, upcoming forums, leadership programs, and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item, index) => {
            const Icon = item.icon;
            const isGoldBg = item.color.includes('F2C94C');
            const textColor = isGoldBg ? 'text-[#3E2723]' : 'text-white';

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${item.color} p-8`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${isGoldBg ? 'bg-[#004D40] bg-opacity-20' : 'bg-white bg-opacity-20'}`}>
                      <Icon size={32} className={textColor} />
                    </div>
                    <span className={`text-sm font-semibold ${textColor} ${isGoldBg ? 'opacity-90' : 'opacity-95'} px-3 py-1 rounded-full ${isGoldBg ? 'bg-[#004D40] bg-opacity-20' : 'bg-white bg-opacity-20'}`}>
                      {item.date}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold ${textColor} mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${textColor} ${isGoldBg ? 'opacity-90' : 'opacity-95'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#3E2723] mb-4">
            Never Miss an Update
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, events, and opportunities from AAYF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-full focus:border-[#004D40] focus:outline-none transition-colors"
            />
            <button className="px-8 py-3 bg-[#F2C94C] text-[#3E2723] font-semibold rounded-full hover:bg-[#e6bd3c] transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
