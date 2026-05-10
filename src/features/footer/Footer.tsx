import flowericon from "../../assets/navicon/flowericon.png";

const Footer = () => {
  return (
    <footer className=" text-white py-16 mt-20">
      <div className="mx-auto">
        {/* Main Footer Content */}
        <section className="flex justify-between mb-12">
          <div className="space-y-6 max-w-[35%]">
            <div className="flex items-center gap-2">
              <div className="w-24 h-24">
                <img src={flowericon} alt="FloraVision Image" />
              </div>
              <h2 className="text-[45px] font-black opacity-75">
                FloraVision.
              </h2>
            </div>

            {/* Description */}
            <p className="text-[28px] font-medium ">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-bold">Quick Link's</h3>
            <nav className="flex flex-col gap-3 text-[24px] font-medium">
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
          <div className="space-y-6 min-w-[35%]">
            <h3 className="text-[28px] font-bold">For Every Update.</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#1a2e1a] font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>

        {/* Bottom Copyright */}
        <section className="flex justify-between">
          <div className="flex gap-6 text-[28px] font-extrabold w-[70%]">
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

          <p className="text-[24px] w-[30%]">FloraVision © all right reserve</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
