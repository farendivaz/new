import { Link, useNavigate } from 'react-router-dom';
import '../styles/swiper.css'

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar bg-neutral-500">
            <img src='/public/logo.jpg' className='logo' alt="Logo"></img>
          <ul>
            <Link to="/">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="home">
                Home</li>
            </Link>
            <Link to="/about">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="about">
                About</li>
            </Link>
            <Link to="/">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="product">
                Product</li>
            </Link>
            <Link to="/news">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="news">
                News</li>
            </Link>
            <Link to="/contact-us">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="contact">
                Contact Us</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;