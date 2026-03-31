import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Quiz", path: "/quiz" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-slate-900">NATURAL</span>
            <span className="text-xl font-bold text-emerald-600">&</span>
            <span className="text-xl font-bold text-slate-900">PURE</span>
          </div>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
            Nonprofit
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
              <Link to="/quiz">Begin Assessment</Link>
            </Button>
          </div>
        ) : (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-2 mt-8">
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Navigation</p>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={`px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                      isActive(link.path)
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/quiz" onClick={closeMenu}>Begin Assessment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default Navbar;