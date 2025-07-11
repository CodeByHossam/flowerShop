import React, { useState, useRef, useEffect } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    // Clear any existing ScrollTrigger instances on headerRef
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === header) {
        trigger.kill();
      }
    });

    // Animate header background and blur based on scroll position
    gsap.to(header, {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      ease: "power1.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top+=20 top",  
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
      overwrite: "auto",
      duration: 0.5,
     });

    // Animate back to solid background when above 20px scroll is handled automatically by ScrollTrigger toggle

    // Optional: reset styles when mobile menu is open
    if (isOpen) {
      gsap.set(header, {
        backgroundColor: "#831843",  
        backdropFilter: "blur(0px)",
        boxShadow: "none",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === header) {
          trigger.kill();
        }
      });
    };
  }, [isOpen]);

  const navItems = [
    { id: "hero", label: "Home", icon: <Home size={18} />, className: "text-black" },
    { id: "products", label: "Products", icon: <ShoppingBag size={18} />, className: "text-black" },
    { id: "highlights", label: "Why Choose Us", icon: <HeartHandshake size={18} />, className: "text-black" },
    { id: "ourstory", label: "About", icon: <Info size={18} />, className: "text-black" },
    { id: "contact", label: "Contact", icon: <Phone size={18} />, className: "text-black" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        id="header"
        className={`sticky top-0 z-50 w-screen px-2 py-3 h-headerBarSmall sm:h-headerBarBig transition-all duration-300
          ${isOpen ? "bg-rose-950 text-white" : "text-black"}
        `}
      >
        <section
          id="header-bar"
          className="md:max-w-maxAppWidth mx-auto flex items-center justify-between text-sm md:px-10"
        >
          {/* Logo */}
          <section
            id="logo"
            className="flex justify-center gap-1 font-bold lg:text-2xl"
          >
            <span className="animate-spin">🌸 </span>
            <span className="font-parisienne font-bold"> <a href="#hero">Gardenia</a></span>
          </section>

          {/* Cart button for mobile */}
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

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </section>

        {/* Mobile Menu */}
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
