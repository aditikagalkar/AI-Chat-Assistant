import lipstick1 from "@/assets/lipstick-1.jpg";
import eyeshadowPalette from "@/assets/eyeshadow-palette.jpg";
import foundation from "@/assets/foundation.jpg";
import blush from "@/assets/blush.jpg";
import mascara from "@/assets/mascara.jpg";
import concealer from "@/assets/concealer.jpg";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  shade?: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Matte Revolution Lipstick",
    brand: "Charlotte Tilbury",
    price: 38,
    image: lipstick1,
    rating: 5,
    shade: "Pillow Talk",
    category: "Lips",
    description: "Iconic matte lipstick with buildable coverage and long-lasting wear."
  },
  {
    id: 2,
    name: "Luxury Eyeshadow Palette",
    brand: "Tom Ford",
    price: 88,
    originalPrice: 98,
    image: eyeshadowPalette,
    rating: 5,
    shade: "Rose Gold",
    category: "Eyes",
    description: "Ultra-pigmented eyeshadows in a curated palette of warm neutrals."
  },
  {
    id: 3,
    name: "Light Wonder Foundation",
    brand: "Charlotte Tilbury",
    price: 46,
    image: foundation,
    rating: 4,
    shade: "Fair 2",
    category: "Face",
    description: "Lightweight foundation with natural coverage and SPF 15."
  },
  {
    id: 4,
    name: "Cheek to Chic Blush",
    brand: "Charlotte Tilbury",
    price: 40,
    image: blush,
    rating: 5,
    shade: "Love Glow",
    category: "Face",
    description: "Two-toned blush for a natural, radiant flush of color."
  },
  {
    id: 5,
    name: "Full Lash Volume Mascara",
    brand: "Giorgio Armani",
    price: 34,
    image: mascara,
    rating: 4,
    shade: "Black",
    category: "Eyes",
    description: "Volumizing mascara for dramatic lashes with no clumping."
  },
  {
    id: 6,
    name: "Magic Away Concealer",
    brand: "Charlotte Tilbury",
    price: 32,
    image: concealer,
    rating: 5,
    shade: "Light 3",
    category: "Face",
    description: "Full-coverage concealer that brightens and perfects."
  },
  {
    id: 7,
    name: "Fenty Icon Lipstick",
    brand: "Fenty Beauty",
    price: 26,
    image: lipstick1,
    rating: 4,
    shade: "The MVP",
    category: "Lips",
    description: "Semi-matte lipstick with rich color payoff and comfortable wear."
  },
  {
    id: 8,
    name: "Born This Way Foundation",
    brand: "Too Faced",
    price: 39,
    originalPrice: 45,
    image: foundation,
    rating: 4,
    shade: "Light Beige",
    category: "Face",
    description: "Medium-to-full coverage foundation with natural finish."
  }
];