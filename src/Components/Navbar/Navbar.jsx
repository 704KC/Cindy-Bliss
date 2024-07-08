import "./Navbar.css";
import { FaGuitar } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <FaGuitar className="icon" /> Cindy Bliss
            </h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a className="navLink" href="#">
                Home
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                About
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Music
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Videos
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Gallery
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Sign out
              </a>
            </li>

            <button className="btn">
              <a href="View Now"></a>
            </button>
          </ul>

          <div className="closeBar">
            <IoIosClose className="icon" />
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="toggleBar">
          <HiOutlineDotsVertical className="icons" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
