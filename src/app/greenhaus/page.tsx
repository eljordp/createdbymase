import { getProductsByBrand } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'GREENHAUS | Home + Accessories — CREATEDBYMASE',
  description: 'Accessories and custom home decoration. Live intentionally.',
};

export default function GreenhausPage() {
  const products = getProductsByBrand('greenhaus');
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen pt-[52px] sm:pt-[100px]">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-8 sm:pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted mb-3 sm:mb-4">
                [ 002 — HOME + ACCESSORIES ]
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-accent-green">
                GREENHAUS
              </h1>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-muted tracking-wider text-right">
              <div>{products.length} ITEMS</div>
              <div>COLLECTION 001</div>
            </div>
          </div>
          <p className="text-muted text-xs sm:text-sm max-w-lg mt-3 sm:mt-4">
            Your space is an extension of who you are. Greenhaus is home goods and accessories
            built with the same intention as the clothes on your back.
          </p>
          {/* Mobile item count */}
          <div className="md:hidden font-mono text-[9px] text-muted tracking-wider mt-3">
            {products.length} ITEMS — COLLECTION 001
          </div>
        </div>
      </section>

      {/* Lookbook banner */}
      <section className="border-b border-border">
        <div className="scanlines relative h-48 sm:h-64 md:h-96 bg-surface flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#111_25%,transparent_25%,transparent_75%,#111_75%)] bg-[length:4px_4px]" />
          <div className="relative text-center px-4">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-accent-green mb-2 sm:mb-3">
              INTERIORS.ZIP
            </div>
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
              COMING SOON
            </p>
            <p className="text-muted text-[10px] sm:text-xs mt-2 sm:mt-3 font-mono">
              // STYLED SPACES + PRODUCT SHOTS DROPPING SOON
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 sm:px-6 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Category filters */}
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            <button className="font-mono text-[10px] sm:text-xs tracking-widest text-fg bg-subtle px-3 sm:px-4 py-2 rounded-full whitespace-nowrap min-h-[36px]">
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-mono text-[10px] sm:text-xs tracking-widest text-muted hover:text-fg px-3 sm:px-4 py-2 rounded-full whitespace-nowrap transition-colors min-h-[36px]"
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="border-t border-border px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-accent-green mb-4 sm:mb-6">
            THE PHILOSOPHY
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-6 sm:mb-8">
            &ldquo;Your space should feel like you.&rdquo;
          </blockquote>
          <p className="text-muted text-xs sm:text-sm max-w-md mx-auto">
            Greenhaus is about bringing warmth, texture, and personality into your
            everyday environment. Nothing mass-produced. Everything considered.
          </p>
        </div>
      </section>
    </div>
  );
}
