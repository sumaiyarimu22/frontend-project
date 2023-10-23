const Header = ({ setIsAdding }) => {
  return (
    <div className='header'>
      <h1>Employee menagement software</h1>
      <button onClick={() => setIsAdding(true)} className='header-btn'>
        add employee
      </button>
    </div>
  );
};

export default Header;
