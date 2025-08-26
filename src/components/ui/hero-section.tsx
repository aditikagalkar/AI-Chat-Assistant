import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-makeup.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury makeup collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/70 via-luxury-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <Sparkles className="h-5 w-5 text-rose-gold" />
            <span className="text-rose-gold font-medium tracking-wide uppercase text-sm">
              New Collection
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
            Luxury
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Discover our exclusive collection of high-end makeup that enhances your natural beauty with unparalleled elegance and sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-rose-gold hover:bg-rose-gold-dark text-luxury-black font-semibold px-8 py-4 transition-all duration-300 hover:shadow-luxury group"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="overlay" 
              size="lg"
              className="px-8 py-4 transition-all duration-300"
            >
              Watch Campaign
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-champagne/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
    </section>
  );
};