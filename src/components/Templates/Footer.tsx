import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center border-t pt-6 pb-6">
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
              <Link to="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Home</Link>
              <Link to="/about" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
              <Link to="/collections" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Collections</Link>
              <Link to="/contact" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
};

export default Footer;