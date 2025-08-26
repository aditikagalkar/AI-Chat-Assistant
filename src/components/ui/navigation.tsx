import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu, X, Heart, User, MessageCircle } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              LUXE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-foreground hover:text-accent transition-colors duration-300">
                New Arrivals
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors duration-300">
                Makeup
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors duration-300">
                Skincare
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors duration-300">
                Brands
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors duration-300">
                Sale
              </a>
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
            <a href="#" className="block px-3 py-2 text-foreground hover:text-accent">
              New Arrivals
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-accent">
              Makeup
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-accent">
              Skincare
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-accent">
              Brands
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-accent">
              Sale
            </a>
            <div className="flex space-x-4 px-3 py-2">
              <Button variant="ghost" size="sm">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};