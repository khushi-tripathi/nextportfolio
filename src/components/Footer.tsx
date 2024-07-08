import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 p-4 text-xs z-50">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-[5rem] lg:px-8 ">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About</h2>
          <p className="mb-4">
            I'm Khushi Tripathi, a software engineer who has developed this portfolio website to showcase my skills and experiences. My objective is to consistently learn and advance, delivering high-quality, innovative solutions that fulfill both technical and business needs. This portfolio helps me to exhibit my skills and enables recruiters to assess my eligibility and review the projects I've completed.
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
                href="/projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>

          </ul>
        </div>
        <div className="">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p className="w-full hover:text-white transition-colors duration-300 cursor-pointer">Email: khushitripathi004@gmail.com</p>
          <Link className="hover:text-white transition-colors duration-300 w-full cursor-pointer" target="_blank" href={"https://github.com/khushi-tripathi"}> GitHub: https://github.com/khushi-tripathi </Link>
          <Link className=" hover:text-white transition-colors duration-300 w-full cursor-pointer flex flex-wrap" target="_blank" href={"https://www.linkedin.com/in/khushi-tripathi-885a881b1/"}>LinkedIn: https://www.linkedin.com/in/khushi-tripathi-885a881b1/ </Link>
          {/* <p>Madhya Pradesh, India</p>
          <p>Bhopal 462001</p> */}
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 Khushi Tripathi Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer