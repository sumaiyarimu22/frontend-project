import logo from "../assets/Ellipse 1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Knowledge Cafe</div>
      <div className="user-img">
        <img src={logo} alt="user profile" />
      </div>
    </div>
  );
};

export default Navbar;
