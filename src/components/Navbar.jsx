import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=' px-6 flex justify-between bg-orange-400 text-white'>
      <div className=' px-6 flex justify-between h-20 items-center w-full'>
        <Link to='/' className='text-2xl font-medium'>
          Logo
        </Link>
        <ul className='flex gap-5 '>
          <li>
            <NavLink to='/home' className='font-medium'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/details' className=' font-medium'>
              Details
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
