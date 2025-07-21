import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mercury-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2">
            <img
              src="/Images/Mercury-Logo.png"
              alt="Mercury Valves Logo"
              className="h-12 w-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">
              A.N.D Valves and Castings Pvt. Ltd.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer of high-quality valves, pipes, and fittings for industrial applications.
              Committed to excellence and reliability since 2017.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-300 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-gray-300 hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 A.N.D Valves & Casting India Pvt. Ltd. All Right Reserved
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Brand Management:{" "}
            <a
              href="https://www.privacyweave.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mercury-orange hover:text-orange-400 transition-colors"
            >
              Privacy weave.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;