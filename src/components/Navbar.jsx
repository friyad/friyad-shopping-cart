import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { handleNavigation } from "../redux/globals/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.products);
  const totalQuantity = cartItems.reduce(
    (prevQuantity, item) => item.quantity + prevQuantity,
    0
  );

  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="/">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(handleNavigation("home"))}
              className="navHome"
              id="lws-home"
            >
              Home
            </button>

            <button
              onClick={() => dispatch(handleNavigation("cart"))}
              className="navCart"
              id="lws-cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
              <span id="lws-totalCart">{totalQuantity}</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
