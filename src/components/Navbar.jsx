import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="/">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>
          <div className="flex gap-4">
            <button className="navHome" id="lws-home">
              Home
            </button>

            <button className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
              <span id="lws-totalCart">0</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
