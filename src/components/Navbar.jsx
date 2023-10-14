import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../layout/Main";

const Navbar = () => {
  const [cart] = useContext(CartContext);
  return (
    <div className='py-5 px-6 flex justify-between h-20 items-center text-gray-900'>
      <Link to='/' className='text-lg font-medium'>
        SMART HOME
      </Link>
      <ul className='flex gap-5'>
        <li>
          <NavLink to='/home' className='relative group px-2 font-medium'>
            <small className='tooltip'>Home</small>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/shop' className='relative group px-2 font-medium'>
            <small className='tooltip'>shop</small>
            shop
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' className='relative group px-2 font-medium'>
            <small className='tooltip'>cart</small>
            {cart.length > 0 && (
              <small className='absolute -top-2 -right-1'>{cart.length}</small>
            )}
            cart
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='relative group px-2 font-medium'>
            <small className='tooltip'>about us</small>
            about us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
