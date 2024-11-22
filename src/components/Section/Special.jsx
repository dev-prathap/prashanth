const Special = () => {
  return (
    <section id="special" className="bg-primary text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h5 className="text-2xl leading-tight font-bold">OUR SPECIALITIES</h5>
          <p className="mt-4 text-gray-300">
            We specialize in a diverse range of services, from crafting impactful digital marketing campaigns to professional cinema shooting, ad production, small creative projects, and other media solutions tailored for you.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block items-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-700/10 text-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto text-violet-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m3 6h8M17 3l4 4m0 0l-4 4m4-4H9"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-white">Digital Marketing</h2>
            <p className="mt-1 text-sm text-gray-300">
              Strategize, promote, and grow your brand with expert digital campaigns, SEO, and social media management.
            </p>
          </a>

          <a
            className="block items-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-700/10 text-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto text-violet-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.586-4.586A2 2 0 0119 3h3a2 2 0 012 2v3a2 2 0 01-.586 1.414L18 10"
              />
              <path d="M3 10h12v10H3z" />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-white">Cinema Shooting & Ads</h2>
            <p className="mt-1 text-sm text-gray-300">
              Delivering high-quality cinema shoots, ad productions, and creative visual content for your business needs.
            </p>
          </a>

          <a
            className="block items-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-700/10 text-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto text-violet-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M9 21h6a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 002 2z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-white">Creative Projects</h2>
            <p className="mt-1 text-sm text-gray-300">
              From small projects to custom solutions, we bring your vision to life with tailored creative services.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-white px-12 py-3 text-sm font-medium text-primary transition hover:bg-gray-400 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Special;
