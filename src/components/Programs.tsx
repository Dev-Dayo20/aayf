import { Users, MessageSquare, Globe, Palette } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Intensive workshops, mentorships, and training modules equipping participants with 21st-century leadership competencies in strategic leadership, ethical decision-making, public speaking, innovation, and community development.',
      color: 'from-[#004D40] to-[#006D5A]',
    },
    {
      icon: MessageSquare,
      title: 'Policy Dialogue',
      description: 'Inclusive policy forums and roundtable discussions where young Africans engage with policymakers on critical issues like youth employment, peacebuilding, gender inclusion, and digital transformation.',
      color: 'from-[#3E2723] to-[#5D4037]',
    },
    {
      icon: Globe,
      title: 'Model African Union',
      description: 'Dynamic simulations allowing youth to experience AU decision-making processes firsthand, representing countries and deliberating on pressing continental issues while learning diplomacy and negotiation.',
      color: 'from-[#F2C94C] to-[#e6bd3c]',
    },
    {
      icon: Palette,
      title: 'Cultural Exchange',
      description: "Celebrating Africa's rich cultural heritage through intercultural showcases, language exchanges, and artistic collaborations, promoting pan-African solidarity and lasting networks of collaboration.",
      color: 'from-[#004D40] to-[#F2C94C]',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D40] mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transformative initiatives designed to build leadership capacity, strengthen continental cooperation, and promote active youth engagement in policymaking and governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isGoldBg = program.color.includes('F2C94C');
            const textColor = isGoldBg ? 'text-[#3E2723]' : 'text-white';

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${program.color} p-8 h-full`}>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${isGoldBg ? 'bg-[#004D40] bg-opacity-20' : 'bg-white bg-opacity-20'}`}>
                      <Icon size={32} className={textColor} />
                    </div>
                    <h3 className={`text-2xl font-bold ${textColor}`}>
                      {program.title}
                    </h3>
                  </div>
                  <p className={`text-lg leading-relaxed ${textColor} ${isGoldBg ? 'opacity-90' : 'opacity-95'}`}>
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
