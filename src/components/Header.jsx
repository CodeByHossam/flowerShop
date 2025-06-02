import { useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Info,
  HeartHandshake,
  Phone,
  ShoppingCart,
} from "lucide-react";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const navItems = [
    {
      id: "hero",
      label: "Home",
      icon: <Home size={18} />,
      className: "text-black",
    },
    {
      id: "products",
      label: "Products",
      icon: <ShoppingBag size={18} />,
      className: "text-black",
    },
    {
      id: "highlights",
      label: "Why Choose Us",
      icon: <HeartHandshake size={18} />,
      className: "text-black",
    },
    {
      id: "ourstory",
      label: "About",
      icon: <Info size={18} />,
      className: "text-black",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Phone size={18} />,
      className: "text-black",
    },
  ];

  return (
    <>
      <header
        id="header"
        className={`${
          isOpen ? "bg-rose-950 text-white" : "bg-main-color"
        } h-headerBarSmall sm:h-headerBarBig sticky top-0 z-50 w-screen px-2 py-3 transition-all duration-300`}
      >
        {/* header bar section contains logo and Desktop menu OR mobile menu button based on screen size*/}
        <section
          id="header-bar"
          className="md:max-w-maxAppWidth mx-auto flex items-center justify-between text-sm md:px-10"
        >
          {/* Logo section */}
          <section
            id="logo"
            className="flex justify-center gap-1 font-bold lg:text-2xl"
          >
            <span className="animate-spin">🌸 </span>
            <span className="font-parisienne font-bold"> Gardenia</span>
          </section>

          {/* Cart button for mobile - centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex cursor-pointer items-center gap-1 text-sm font-bold text-red-600"
            >
              <ShoppingCart size={18} />
              {getCartCount() > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-xs text-white">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

          {/* Desktop Menu hidden on mobile */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(({ id, label, icon, className }) => (
              <a
                key={id}
                href={`#${id}`}
                className="relative flex items-center gap-1 text-sm before:absolute before:bottom-[-5px] before:left-0 before:h-[3px] before:w-0 before:rounded before:bg-red-800 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
              >
                {icon}
                <span className={className}>{label}</span>
              </a>
            ))}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex cursor-pointer items-center gap-1 text-sm font-bold text-red-600"
            >
              <ShoppingCart size={18} />
              {getCartCount() > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-xs text-white">
                  {getCartCount()}
                </span>
              )}
            </button>
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
          className={`absolute top-16 left-0 z-10 w-full origin-top transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? "bg-main-color h-screen scale-y-100 space-y-12 px-4 py-3 text-xl font-bold text-black"
              : "h-0 scale-y-0 overflow-hidden"
          }`}
        >
          {navItems.map(({ id, label, icon, className }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`flex items-center gap-2 hover:underline ${className}`}
              onClick={() => setIsOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
