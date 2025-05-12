import { useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Info,
  MessageCircle,
  Phone,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "shop", label: "Shop", icon: <ShoppingBag size={18} /> },
    { id: "about", label: "About", icon: <Info size={18} /> },
    {
      id: "testimonials",
      label: "Testimonials",
      icon: <MessageCircle size={18} />,
    },
    { id: "contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  return (
    <header className="sticky top-0 bg-red-300 shadow z-50 w-screen">
      {/* header bar section will contains logo and (desktop menu OR mobile menu button based on screen size) */}
      <section
        id="header-bar"
        className="max-w-[app-max-width] mx-auto flex justify-between items-center px-4 py-3"
      >
        <section id="logo" className="text-xl font-bold">
          🌸 Flower Shop
        </section>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-1 hover:underline"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </section>

      {/* Mobile Menu will appear below the header bar section if button is open */}
      {isOpen && (
        <nav className="md:hidden absolute  w-full origin-top bg-red-200 px-4 py-3 space-y-3 animate-slideDown ">
          {navItems.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-2 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
