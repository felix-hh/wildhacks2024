// components/Navbar.js

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">Good Neighbor</a>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Sign Up</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Log In</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
