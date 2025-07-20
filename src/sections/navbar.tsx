import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Menus: Array<navbar.NavbarItem> = [
  { label: 'Home', link: '/', icon: 'home', active: true },
  { label: 'About', link: '/about', icon: 'info' },
  { label: 'Contact', link: '/contact', icon: 'phone' }
];
const NavItems = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <ul className="nav-ul">
    {Menus.map((item) => (
      <li key={item.label} className="nav-li">
        <a href={item.link} className="nav-li_a" onClick={onClick}>
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Lee
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            {isOpen ? (
              <MdClose size={24} />
            ) : (
              <MdMenu size={24} />
            )}
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;