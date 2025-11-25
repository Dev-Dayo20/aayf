import presidoNew from "../assets/presidoNew.webp";

const FounderMessage = () => {
  return (
    <section id="president" className="py-20 bg-[#F6F2EC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#184c9f] mb-4">
            Message from the President
          </h2>
          <div className="w-24 h-1 bg-[#f68026] mx-auto"></div>
        </div>

        {/* President Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className=" rounded-lg overflow-hidden">
              <img
                src={presidoNew}
                alt="African Youth Leaders"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-bold text-[#f68026]">
              Dear African Youth,
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              When we speak of Africa’s future, we speak of you — the dreamers,
              innovators, and changemakers who carry the heartbeat of a rising
              continent. The All African Youth Forum (AAYF) was born from a deep
              belief that the solutions to Africa’s challenges lie within the
              courage and creativity of its young people. Our generation stands
              at a pivotal moment in history. Across every border and language,
              young Africans are shaping new narratives of leadership,
              entrepreneurship, and transformation. Through the AAYF, we aim to
              channel this energy into concrete action — building bridges of
              collaboration, amplifying youth voices in policymaking, and
              preparing ethical, visionary leaders for the Africa we all
              imagine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The theme “Rise Up Africa” is not just a call — it is a
              commitment. A commitment to rise with integrity, unity, and
              purpose. Together, we can craft a continent that leads with
              innovation, compassion, and pride.
            </p>
            <p className="text-lg text-gray-70 font-medium0">
              Thank you for being part of this journey.
            </p>
            <h3 className="font-bold">
              Dr. Abubakar Bamai Musa <br /> President All African Youth Forum
              (AAYF)
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
