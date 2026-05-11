import flowericon from "../../assets/navicon/flowericon.png";

export const Footer = () => {
  return (
    <footer className=" text-white py-8 sm:py-10 lg:py-16 mt-10 sm:mt-14 lg:mt-20">
      <div className="mx-auto">
        {/* Main Footer Content */}
        <section className="flex flex-col md:flex-row justify-between mb-8 sm:mb-10 lg:mb-12 gap-8 md:gap-6">
          <div className="space-y-4 sm:space-y-6 max-w-full md:max-w-[35%]">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                <img src={flowericon} alt="FloraVision Image" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-black opacity-75">
                FloraVision.
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[28px] font-medium ">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-bold">Quick Link's</h3>
            <nav className="flex flex-col gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl xl:text-[24px] font-medium">
              <a
                href="#"
                className="underline hover:text-green-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="underline hover:text-green-400 transition-colors"
              >
                Type's Of plants
              </a>
              <a
                href="#"
                className="underline hover:text-green-400 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="underline hover:text-green-400 transition-colors"
              >
                Privacy
              </a>
            </nav>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-4 sm:space-y-6 min-w-0 md:min-w-[35%]">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-bold">For Every Update.</h3>
            <form className="flex items-center border border-white rounded-md p-1.5 focus-within:ring-1">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-2 sm:px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none min-w-0"
              />
              <button
                type="submit"
                className="px-3 sm:px-6 py-2 sm:py-3 bg-white text-black font-bold rounded-[4px] hover:bg-gray-200 transition-colors text-xs sm:text-base tracking-tight flex-shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>

        {/* Bottom Copyright */}
        <section className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          <div className="flex gap-4 sm:gap-6 text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-extrabold w-full sm:w-[70%]">
            <a href="#" className="hover:text-green-400 transition-colors">
              FB
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              TW
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              LI
            </a>
          </div>

          <p className="text-sm sm:text-base lg:text-xl xl:text-[24px] w-full sm:w-[30%]">FloraVision © all right reserve</p>
        </section>
      </div>
    </footer>
  );
};

