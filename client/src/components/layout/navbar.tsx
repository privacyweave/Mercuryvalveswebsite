import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location === path;

  return (
    <nav
      className="text-white shadow-lg fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "#0a2348" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/Images/Mercury-Logo.png"
                alt="Mercury Valves Logo"
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-white hover:text-red-500 transition-colors font-medium ${isActive("/") ? "text-red-500" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-white hover:text-red-500 transition-colors font-medium ${isActive("/products") ? "text-red-500" : ""}`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`text-white hover:text-red-500 transition-colors font-medium ${isActive("/about") ? "text-red-500" : ""}`}
            >
              About
            </Link>
            <Link
              href="/clients"
              className={`text-white hover:text-red-500 transition-colors font-medium ${isActive("/clients") ? "text-red-500" : ""}`}
            >
              Clients
            </Link>
            <Link
              href="/infrastructure"
              className={`text-white hover:text-red-500 transition-colors font-medium ${isActive("/infrastructure") ? "text-red-500" : ""}`}
            >
              Infrastructure
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:text-red-500 transition-colors font-medium ${isActive("/contact") ? "text-red-500" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-3">
              <Link
                href="/"
                className={`block text-white hover:text-red-500 transition-colors font-medium ${isActive("/") ? "text-red-500" : ""}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`block text-white hover:text-red-500 transition-colors font-medium ${isActive("/products") ? "text-red-500" : ""}`}
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={`block text-white hover:text-red-500 transition-colors font-medium ${isActive("/about") ? "text-red-500" : ""}`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/clients"
                className={`block text-white hover:text-red-500 transition-colors font-medium ${isActive("/clients") ? "text-red-500" : ""}`}
                onClick={toggleMenu}
              >
                Clients
              </Link>
              <Link
                href="/infrastructure"
                className={`block text-white hover:text-red-500 transition-colors font-medium ${isActive("/infrastructure") ? "text-red-500" : ""}`}
                onClick={toggleMenu}
              >
                Infrastructure
              </Link>
              <Link
                href="/contact"
                className={`block text-white hover:text-red-500 transition-colors font-medium ${isActive("/contact") ? "text-red-500" : ""}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;