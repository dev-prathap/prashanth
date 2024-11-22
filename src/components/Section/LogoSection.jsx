import React from "react";

const PartnerLogos = () => {
  const partners = [
    { id: 1, src: "/logos/logo1.png", alt: "Partner 1" },
    { id: 2, src: "/logos/logo2.png", alt: "Partner 2" },
    { id: 3, src: "/logos/logo3.png", alt: "Partner 3" },
    { id: 4, src: "/logos/logo4.png", alt: "Partner 4" },
    { id: 5, src: "/logos/logo5.png", alt: "Partner 5" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Our Trusted Partners
        </h2>
        <div className="overflow-hidden">
          <div className="flex items-center gap-6 animate-slide">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="w-32 h-32 bg-white shadow-lg rounded-full flex items-center justify-center transition-transform hover:scale-110"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
