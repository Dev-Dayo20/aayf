import { Building2 } from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    'African Union Commission',
    'United Nations Agencies',
    'Regional Development Institutions',
    'Universities & Research Centers',
    'Youth Organizations',
    'Private Sector Partners',
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D40] mb-4">
            Partners & Supporters
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Strategic partnerships that enhance our ability to train, engage, and empower African youth to take ownership of their continent's destiny.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#F6F2EC] to-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 border-l-4 border-[#F2C94C]"
              >
                <Building2 size={32} className="text-[#004D40] flex-shrink-0" />
                <span className="text-lg font-semibold text-[#3E2723]">
                  {category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
              AAYF works closely with regional and international institutions to implement and scale initiatives that empower African youth across all 55 AU member states.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#004D40] text-white font-semibold rounded-full hover:bg-[#006D5A] transition-all duration-300 shadow-lg"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
