import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  shade?: string;
}

export const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  rating,
  shade
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card border-0 shadow-soft hover:shadow-luxury transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart 
            className={`h-4 w-4 transition-colors duration-300 ${
              isWishlisted ? "fill-rose-gold text-rose-gold" : "text-luxury-black"
            }`} 
          />
        </Button>

        {/* Quick add button - appears on hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button 
            className="w-full bg-luxury-black/80 backdrop-blur-sm text-white hover:bg-luxury-black transition-all duration-300"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Quick Add
              </>
            )}
          </Button>
        </div>

        {/* Sale badge */}
        {originalPrice && (
          <div className="absolute top-3 left-3 bg-rose-gold text-luxury-black px-2 py-1 rounded-full text-xs font-semibold">
            SALE
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
            {brand}
          </p>
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {name}
          </h3>
          {shade && (
            <p className="text-sm text-muted-foreground">
              {shade}
            </p>
          )}
        </div>

        {rating && (
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < rating ? "bg-rose-gold" : "bg-muted"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({rating}/5)
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-foreground">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};