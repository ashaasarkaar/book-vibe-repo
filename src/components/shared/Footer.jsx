
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="w-11/12 max-w-7xl mx-auto py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-base-content mb-4">
              Book<span className="text-[#f59e0b]">Vibe</span>
            </h2>

            <p className="text-sm leading-6 text-base-content/70 max-w-xs">
              Discover your next favorite book from our carefully selected
              collection. Read more, learn more, and grow every day.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-base-300 flex items-center justify-center
                hover:bg-[#f59e0b] hover:text-white transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-base-300 flex items-center justify-center
                hover:bg-[#f59e0b] hover:text-white transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-base-300 flex items-center justify-center
                hover:bg-[#f59e0b] hover:text-white transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-base-300 flex items-center justify-center
                hover:bg-[#f59e0b] hover:text-white transition"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-base-content mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Books
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Best Sellers
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-base-content mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-base-content/70 hover:text-[#f59e0b] transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-base-content mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <span className="text-[#f59e0b] text-lg">📍</span>
                <span className="text-base-content/70">
                  Dhaka, Bangladesh
                </span>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#f59e0b] text-lg">✉</span>
                <span className="text-base-content/70">
                  support@bookvibe.com
                </span>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#f59e0b] text-lg">☎</span>
                <span className="text-base-content/70">
                  +880 1234-567890
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-base-300 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <h3 className="text-base-content font-semibold text-lg">
              Subscribe to our newsletter
            </h3>

            <p className="text-sm text-base-content/60 mt-1">
              Get updates about new books and special offers.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 px-4 py-3 rounded-l-lg
              bg-base-100 text-base-content outline-none
              border border-base-300
              focus:border-[#f59e0b]"
            />

            <button
              className="px-5 py-3 bg-[#f59e0b] text-white font-semibold
              rounded-r-lg hover:bg-[#d97706] transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-300 mt-8 pt-6 text-center text-sm text-base-content/50">
          <p>
            © 2026 BookVibe. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
