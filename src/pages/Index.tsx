import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        {/* Featured Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Featured
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Products
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked selection of luxury makeup essentials, 
                curated by beauty experts for the modern woman.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-luxury-black hover:bg-luxury-black/90 text-white px-8 py-4 transition-all duration-300 hover:shadow-luxury group"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-luxury-black mb-6">
              Stay in the Loop
            </h3>
            <p className="text-lg text-luxury-black/80 mb-8 max-w-2xl mx-auto">
              Be the first to know about new arrivals, exclusive offers, and beauty tips 
              from our experts.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-luxury-black/20 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-luxury-black transition-all duration-300"
              />
              <Button className="bg-luxury-black hover:bg-luxury-black/90 text-white px-8 py-3 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-luxury-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
                LUXE
              </h4>
              <p className="text-white/70">
                Redefining beauty with luxury makeup that celebrates your unique style.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-rose-gold transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">Shipping</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-rose-gold transition-colors">Face</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">Eyes</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">Lips</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">Skincare</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-rose-gold transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
