import { Target, Eye, CheckCircle } from "lucide-react";
import img2 from "../assets/img2.jpg";

export default function About() {
  const objectives = [
    {
      title: "Identify and Empower Youth Leaders",
      description:
        "We identify, train, and mentor young African leaders aged 18–35 who demonstrate outstanding commitment to civic engagement, ethical leadership, social innovation, and community development.",
    },
    {
      title: "Foster Regional and Linguistic Diversity",
      description:
        "Africa's diversity is its strength. AAYF ensures equitable representation from all five African Union regions with special attention to marginalized communities and linguistic minorities.",
    },
    {
      title: "Align with Continental Frameworks",
      description:
        "Our work aligns with the African Youth Charter, Agenda 2063, and UN SDGs, ensuring our interventions contribute to measurable progress toward Africa's development commitments.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F6F2EC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D40] mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
              <img
                src={img2}
                alt="African Youth Leaders"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-bold text-[#3E2723]">Who We Are</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The All African Youth Forum (AAYF) is a continental initiative
              uniting exceptional young leaders from all 55 member states of the
              African Union. We believe that Africa's greatest resource is its
              youth — and through deliberate engagement, inclusive dialogue, and
              institutional empowerment, the Forum acts as a catalyst for
              pan-African leadership renewal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              AAYF brings together young innovators, policymakers,
              entrepreneurs, civil society leaders, and academics to exchange
              ideas, shape policy, and participate in transformative simulations
              and capacity-building programs that reflect the realities and
              aspirations of Africa's future.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#004D40] to-[#006D5A] text-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Eye size={40} className="text-[#F2C94C] mr-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To build a generation of ethical, innovative, and united African
              youth leaders who will drive sustainable development, peace, and
              prosperity across the continent.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F2C94C] to-[#e6bd3c] text-[#3E2723] p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Target size={40} className="text-[#004D40] mr-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To provide a continental platform for youth leadership, policy
              innovation, and cross-cultural collaboration, empowering young
              Africans to contribute meaningfully to Agenda 2063 and the UN
              SDGs.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#004D40] mb-8 text-center">
            Our Objectives
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#F2C94C]"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} className="text-[#004D40]" />
                </div>
                <h4 className="text-xl font-bold text-[#3E2723] mb-3 text-center">
                  {objective.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
