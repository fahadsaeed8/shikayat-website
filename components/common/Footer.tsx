export default function Footer() {
  return (
    <footer className="bg-[#1f1d2b] text-gray-300 text-sm pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 mb-10 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#00c7b1"
            className="w-5 h-5"
          >
            <path d="M20.285 2.859l1.415 1.415L8.414 17.56l-6.114-6.114 1.414-1.415L8.414 14.73z" />
          </svg>
          <span className="text-white font-semibold text-[20px]">şhikayat</span>
        </div>

        {/* Top Navigation & Social */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center border-b border-gray-600 pb-4">
          <div className="flex gap-9 flex-wrap justify-center sm:justify-start text-white font-semibold text-sm">
            <a href="#">About Us</a>
            <a href="#">For Brands</a>
            <a href="#">Blog</a>
            <a href="#">Product Guide</a>
            <a href="#">Frequently Asked Questions</a>
            <a href="#">Communication</a>
          </div>

          <div className="flex gap-4 mt-4 sm:mt-0">
            {[
              {
                href: "#",
                label: "Facebook",
                svg: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.87v-7h-2v-2.87h2v-2.2c0-2 1.2-3.13 3-3.13a12 12 0 0 1 1.78.16v2h-1c-1 0-1.2.5-1.2 1.1v2h2.4L16 14.9h-2v7A10 10 0 0 0 22 12Z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "Twitter",
                svg: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 19c7.5 0 11.6-6.1 11.6-11.4v-.5A8.1 8.1 0 0 0 22 5.9a7.9 7.9 0 0 1-2.3.6 4.1 4.1 0 0 0 1.8-2.2 7.8 7.8 0 0 1-2.6 1A4 4 0 0 0 12 9.5a11.3 11.3 0 0 1-8.2-4 4.1 4.1 0 0 0 1.3 5.4A3.9 3.9 0 0 1 3 10.3v.1a4 4 0 0 0 3.3 4A4 4 0 0 1 5 14.5a4 4 0 0 0 3.7 2.8A8.1 8.1 0 0 1 2 18.5a11.5 11.5 0 0 0 6 1.7" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "Instagram",
                svg: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3Zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "YouTube",
                svg: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184C21.493 3.58 22.5 5.255 22.5 8.253v7.493c0 2.998-1.007 4.673-2.885 5.069-2.79.603-10.11.603-12.9 0C4.837 20.42 3.83 18.745 3.83 15.747V8.253c0-2.998 1.007-4.673 2.885-5.069 2.79-.603 10.11-.603 12.9 0Zm-7.115 5.568v6.496l5.765-3.248-5.765-3.248Z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "LinkedIn",
                svg: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.94 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 8h3.8v11H5V8Zm6 0h3.7v1.6h.1c.5-.9 1.5-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.8V19H18v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V19h-3.9V8Z" />
                  </svg>
                ),
              },
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                aria-label={s.label}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Content Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-10 text-gray-400 text-xs">
          {[
            {
              title: "Complaints",
              links: [
                "Delivery Problems",
                "Wrong Product Shipment",
                "Bad Travel Experience",
                "Turkish Airlines Service",
                "Terminal Issues",
                "Return Process",
                "Damaged Product",
                "Car Breakdown",
                "Bus Drivers",
                "Birth Certificate App Issue",
              ],
            },
            {
              title: "Brands",
              links: [
                "North Time",
                "JAECOO",
                "Ministry of National Defense",
                "Casinolivent",
                "Google Play",
                "McKinley",
                "TCL Television",
                "H&M",
                "OKX",
              ],
            },
            {
              title: "Most Wanted",
              links: [
                "Vodafone",
                "Pharmacy",
                "Nivea",
                "Vestel",
                "Huawei",
                "NT1",
                "ETS Tour",
                "Internet Inquiry",
                "Bring",
              ],
            },
            {
              title: "Trend100",
              links: [
                "ERETSA (SMS)",
                "Mr Motors",
                "Casinolavent",
                "Oldextra.com",
                "Yildirim Law",
                "Security",
                "Nosty",
                "Bitcoin",
                "Primebeats",
                "0312547291",
              ],
            },
            {
              title: "Topics",
              links: [
                "Return",
                "Service",
                "Bursa",
                "Works",
                "Worker",
                "Izmir",
                "Customer Service",
                "Fee",
                "Ankara",
                "Telephone",
              ],
            },
          ].map((group, idx) => (
            <div key={idx}>
              <h4 className="text-[#afb0b6] mb-3 font-semibold text-sm">
                {group.title}
              </h4>
              <ul className="space-y-1">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white text-[#afb0b6]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-4 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4">
            <a href="#">Member Information Text</a>
            <a href="#">Visitor Information Text</a>
            <a href="#">Terms Of Use</a>
            <a href="#" className="text-red-400 font-semibold">
              Evaluation Guide
            </a>
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-gray-800 text-white text-xs p-1 rounded">
              <option>🇹🇷 Türkiye</option>
            </select>
            <p className="text-gray-500">© 2025</p>
            <span className="text-white font-bold">SiteName</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
