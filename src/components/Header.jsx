import { useState, useEffect } from "react";
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
  const [mobileMenuClass, setMobileMenuClass] = useState("hidden");

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

  // Update mobile menu class when isOpen changes
  useEffect(() => {
    setMobileMenuClass(isOpen ? "mobile-menu-open " : "mobile-menu-closed ");
  }, [isOpen]);

  return (
    <header className="bg-main-color h-headerBarSmall sm:h-headerBarBig sticky top-0 z-50 w-screen px-2 py-3">
      {/* header bar section contains logo and Desktop menu OR mobile menu button based on screen size*/}
      <section
        id="header-bar"
        className="md:max-w-maxAppWidth mx-auto flex items-center justify-between text-sm md:px-10"
      >
        {/* Logo section */}
        <section id="logo" className="text-xl font-bold">
          🌸 Flower Shop
        </section>

        {/* Desktop Menu hidden on mobile */}
        <nav className="hidden items-center gap-6 md:flex">
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

        {/* Mobile Menu Button appears on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </section>

      {/* Mobile Menu appears when click the button */}
      <nav className={mobileMenuClass}>
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
    </header>
  );
};

export default Header;
