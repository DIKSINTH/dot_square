import React from "react";

const CodeToSuccessSection = () => {
  return (
    // Outer container with dark background and the orange wave pattern
    // The pattern is achieved using a combination of a solid color and a pseudo-element or background image (simulated here)
    // For a real-world, exact replication of the complex texture, a background image would be necessary.
    // This uses a linear gradient and a dark overlay to capture the *feel* and colors.
    <section className="relative w-full overflow-hidden bg-black py-16 md:py-24 lg:py-32">
      {/* Background overlay/texture simulation - adjusted for the dark-orange wave look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-orange-900 opacity-60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[url('/path-to-your-wave-pattern-image.png')] bg-cover bg-center opacity-30"></div>

      {/* Content Container - uses a max-width and centers the content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="text-white mb-8 md:mb-0 md:pr-12 lg:pr-24 text-center md:text-left">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            From Code to Success 📈
          </h1>

          {/* Subtext/Slogan */}
          <p className="mt-2 text-lg sm:text-xl font-light opacity-80">
            We Build More Than Software.
          </p>
        </div>

        {/* Right Button/Call-to-Action */}
        <div className="w-full md:w-auto">
          <a
            href="#contact" // Replace with actual link
            className="w-full md:w-auto inline-flex items-center justify-center 
                       px-8 py-4 sm:px-10 sm:py-5 text-lg font-semibold 
                       rounded-lg shadow-xl transition duration-300 ease-in-out
                       
                       // Orange background and hover effect
                       bg-orange-600 hover:bg-orange-700 text-white 
                       
                       // Ensures button has a good width on mobile
                       min-w-[280px] md:min-w-0"
          >
            Discuss Your Requirement!
            {/* Right arrow icon */}
            <span className="ml-3 text-2xl leading-none">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodeToSuccessSection;
