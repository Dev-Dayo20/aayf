import {
  Calendar,
  Award,
  BookOpen,
  Users,
  FileText,
  MapPin,
} from "lucide-react";

export default function Impact() {
  const activities = [
    {
      icon: Calendar,
      title: "Annual All African Youth Summit",
      description:
        "A flagship annual event bringing together delegates from across the continent to deliberate on key thematic areas.",
    },
    {
      icon: BookOpen,
      title: "Youth Leadership Bootcamps",
      description:
        "Intensive training series focusing on practical leadership skills, innovation, and entrepreneurship.",
    },
    {
      icon: FileText,
      title: "Policy Papers & Youth Declarations",
      description:
        "Research-driven contributions to continental policymaking and advocacy.",
    },
    {
      icon: MapPin,
      title: "Regional Outreach Programs",
      description:
        "Engagements with local communities, schools, and youth organizations to promote civic participation.",
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description:
        "Connecting emerging leaders with distinguished African professionals, academics, and policymakers.",
    },
    {
      icon: Award,
      title: "AAYF Rising Star Awards",
      description:
        "Honoring exceptional youth-led initiatives driving impact across Africa.",
    },
  ];

  const stats = [
    { number: "55", label: "African Union Member States", suffix: "" },
    { number: "1000", label: "Youth Leaders Engaged", suffix: "+" },
    { number: "5", label: "African Regions Represented", suffix: "" },
    { number: "20", label: "Partner Organizations", suffix: "+" },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-[#184c9f] via-[#184c9f] to-[#f68026]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Activities & Impact
          </h2>
          <div className="w-24 h-1 bg-[#f68026] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Creating measurable impact across Africa through strategic programs
            and continental engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#f68026] mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-white text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#F2C94C] bg-opacity-20 rounded-lg mr-4">
                    <Icon size={32} className="text-[#f68026]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3E2723]">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
