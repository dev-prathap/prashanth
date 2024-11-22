/* eslint-disable @next/next/no-img-element */
const Clintlogo = () => {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Trusted by Leading Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our esteemed clients who trust us to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-3 lg:grid-cols-6">
          {[  
            "/SOWBAGYA.png",
            "/daysHotel.png",
            "/saaral.png",
            "/wechai.jpg",
            "/wonkrew.png",
            "/crossway.png",
          ].map((logo, index) => (
            <a
              key={index}
              href="#"
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-w-full h-16 md:h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clintlogo;
