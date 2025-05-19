import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Info,
  HeartHandshake,
  Phone,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "header", label: "Home", icon: <Home size={18} /> },
    { id: "products", label: "Products", icon: <ShoppingBag size={18} /> },
    {
      id: "highlights",
      label: "Why Choose Us",
      icon: <HeartHandshake size={18} />,
    },
    { id: "ourstory", label: "About", icon: <Info size={18} /> },

    { id: "contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  return (
    <header
      id="header"
      className={`${isOpen ? "bg-rose-950 text-white" : "bg-main-color"} h-headerBarSmall sm:h-headerBarBig sticky top-0 z-50 w-screen px-2 py-3 transition-all duration-300`}
    >
      {/* header bar section contains logo and Desktop menu OR mobile menu button based on screen size*/}
      <section
        id="header-bar"
        className="md:max-w-maxAppWidth mx-auto flex items-center justify-between text-sm md:px-10"
      >
        {/* Logo section */}
        <section id="logo" className="text-xl font-bold flex justify-center gap-0.5">
          <span className="animate-spin">🌸 </span>
           <span className="font-parisienne font-bold" >Gardenia</span> 
        </section>



        {/* Desktop Menu hidden on mobile */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative flex items-center gap-1 before:absolute before:bottom-[-5px] before:left-0 before:h-[3px] before:w-0 before:rounded before:bg-red-800 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
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
      <nav
        className={
          isOpen
            ? "bg-main-color absolute top-16 left-0 z-10 h-screen w-full origin-top scale-y-100 space-y-6 px-4 py-3 text-xl font-bold text-black transition-all duration-300 ease-in-out md:hidden"
            : "absolute top-16 left-0 z-10 w-full origin-top scale-y-0 transition-all duration-300 ease-in-out"
        }
      >
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
