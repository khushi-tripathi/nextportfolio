

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 p-4 text-xs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-[5rem] lg:px-8 lg:ml-[10rem]">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            I am Khushi Tripathi. I am Software Engineer and I made this Portfolio websit to show case my skills and experiences. This will help me and recruiter to check the eligibility of mine and what are the things I have worked with in my professional journey.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div> */}
        <div className="">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Madhya Pradesh, India</p>
          <p>Bhopal 462001</p>
          <p className="w-full">Email: khushitripathi004@gmail.com</p>
          <p>Phone: +91-8461 8989 45</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 Khushi Tripathi Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer