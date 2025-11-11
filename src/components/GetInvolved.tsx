import { UserPlus, Heart, Handshake, DollarSign, CheckCircle2 } from 'lucide-react';

export default function GetInvolved() {
  const ways = [
    {
      icon: UserPlus,
      title: 'Become a Delegate',
      description: 'Represent your country at the next All African Youth Forum and engage in transformative continental dialogue.',
    },
    {
      icon: Heart,
      title: 'Volunteer',
      description: 'Support our mission through logistics, research, communication, or community outreach roles.',
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Join as an organization, embassy, or private-sector supporter to amplify our impact.',
    },
    {
      icon: DollarSign,
      title: 'Sponsor Scholarships',
      description: 'Fund delegations from underrepresented communities and help create equal opportunities.',
    },
  ];

  const benefits = [
    'Access to continental leadership and policy platforms',
    'Mentorship from high-level African and international leaders',
    'Opportunity to represent your country in Model AU simulations',
    'Participation in cultural and innovation exchange programs',
    'Access to AAYF publications, grants, and fellowships',
    'Lifetime membership in a pan-African network of changemakers',
  ];

  return (
    <section id="get-involved" className="py-20 bg-[#F6F2EC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D40] mb-4">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join the movement of young leaders shaping Africa's future. Your journey to transformative leadership starts here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#F2C94C]"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#004D40] rounded-full">
                    <Icon size={32} className="text-[#F2C94C]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3E2723] mb-3 text-center">
                  {way.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {way.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#004D40] to-[#006D5A] rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Membership Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 size={24} className="text-[#F2C94C] flex-shrink-0 mt-1" />
                    <p className="text-white text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6">
                Ready to Make a Difference?
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                The All African Youth Forum is open to young leaders, volunteers, mentors, and institutional partners who share our vision of a united and prosperous Africa.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F2C94C] text-[#3E2723] font-bold rounded-full hover:bg-[#e6bd3c] transform hover:scale-105 transition-all duration-300 shadow-lg text-center"
              >
                Contact Us to Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
