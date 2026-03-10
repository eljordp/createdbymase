export type Product = {
  id: string;
  name: string;
  price: number;
  brand: 'bymase' | 'greenhaus';
  category: string;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
};

export const products: Product[] = [
  // byMase — Clothes
  {
    id: 'bm-hoodie-black',
    name: 'MASE ESSENTIAL HOODIE',
    price: 85,
    brand: 'bymase',
    category: 'hoodies',
    image: '/images/placeholder.svg',
    description: 'Heavyweight 400gsm hoodie. Oversized fit. Embroidered logo on chest.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Cream', 'Forest'],
  },
  {
    id: 'bm-tee-logo',
    name: 'LOGO TEE',
    price: 45,
    brand: 'bymase',
    category: 'tees',
    image: '/images/placeholder.svg',
    description: 'Premium cotton tee with screen-printed byMase logo. Relaxed fit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Olive'],
  },
  {
    id: 'bm-pants-cargo',
    name: 'CARGO PANTS',
    price: 95,
    brand: 'bymase',
    category: 'bottoms',
    image: '/images/placeholder.svg',
    description: 'Heavyweight cotton cargo. Adjustable waist. Six pockets.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Khaki'],
  },
  {
    id: 'bm-jacket-work',
    name: 'WORK JACKET',
    price: 120,
    brand: 'bymase',
    category: 'outerwear',
    image: '/images/placeholder.svg',
    description: 'Canvas work jacket with corduroy collar. Washed finish.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Washed Black', 'Tan'],
  },
  {
    id: 'bm-shorts-mesh',
    name: 'MESH SHORTS',
    price: 55,
    brand: 'bymase',
    category: 'bottoms',
    image: '/images/placeholder.svg',
    description: 'Breathable mesh shorts with embroidered logo. Elastic waist.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
  },
  {
    id: 'bm-beanie',
    name: 'RIBBED BEANIE',
    price: 30,
    brand: 'bymase',
    category: 'headwear',
    image: '/images/placeholder.svg',
    description: 'Thick ribbed knit beanie with woven label.',
    sizes: ['One Size'],
    colors: ['Black', 'Cream', 'Forest'],
  },

  // Greenhaus — Accessories & Home
  {
    id: 'gh-candle-cedar',
    name: 'CEDAR + SMOKE CANDLE',
    price: 38,
    brand: 'greenhaus',
    category: 'candles',
    image: '/images/placeholder.svg',
    description: 'Hand-poured soy candle. 60hr burn time. Reusable ceramic vessel.',
    colors: ['Natural', 'Black'],
  },
  {
    id: 'gh-tray-concrete',
    name: 'CONCRETE TRAY',
    price: 45,
    brand: 'greenhaus',
    category: 'home',
    image: '/images/placeholder.svg',
    description: 'Hand-cast concrete tray for keys, jewelry, or display. Each one unique.',
    colors: ['Grey', 'Black', 'White'],
  },
  {
    id: 'gh-poster-001',
    name: 'ARCHIVE PRINT 001',
    price: 25,
    brand: 'greenhaus',
    category: 'prints',
    image: '/images/placeholder.svg',
    description: 'Limited run archival print on heavyweight matte paper. 18x24.',
  },
  {
    id: 'gh-keychain',
    name: 'BRASS KEYCHAIN',
    price: 22,
    brand: 'greenhaus',
    category: 'accessories',
    image: '/images/placeholder.svg',
    description: 'Solid brass keychain with laser-engraved Greenhaus logo. Develops patina over time.',
  },
  {
    id: 'gh-incense',
    name: 'PALO SANTO BUNDLE',
    price: 18,
    brand: 'greenhaus',
    category: 'home',
    image: '/images/placeholder.svg',
    description: 'Sustainably sourced palo santo sticks. Set of 5.',
  },
  {
    id: 'gh-planter',
    name: 'CERAMIC PLANTER',
    price: 55,
    brand: 'greenhaus',
    category: 'home',
    image: '/images/placeholder.svg',
    description: 'Hand-thrown ceramic planter with drainage hole. Matte glaze finish.',
    colors: ['Sage', 'Charcoal', 'Cream'],
  },
  {
    id: 'gh-coasters',
    name: 'CORK COASTER SET',
    price: 28,
    brand: 'greenhaus',
    category: 'home',
    image: '/images/placeholder.svg',
    description: 'Set of 4 natural cork coasters with branded stamp.',
  },
  {
    id: 'gh-bag-tote',
    name: 'CANVAS TOTE',
    price: 35,
    brand: 'greenhaus',
    category: 'accessories',
    image: '/images/placeholder.svg',
    description: 'Heavy-duty canvas tote with screen-printed Greenhaus graphic.',
    colors: ['Natural', 'Black'],
  },
];

export function getProductsByBrand(brand: 'bymase' | 'greenhaus') {
  return products.filter((p) => p.brand === brand);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
