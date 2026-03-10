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
    <div className="min-h-screen pt-[100px]">
      {/* Hero */}
      <section className="px-6 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted mb-4">
                [ 002 — HOME + ACCESSORIES ]
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-accent-green">
                GREENHAUS
              </h1>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-muted tracking-wider text-right">
              <div>{products.length} ITEMS</div>
              <div>COLLECTION 001</div>
            </div>
          </div>
          <p className="text-muted text-sm max-w-lg mt-4">
            Your space is an extension of who you are. Greenhaus is home goods and accessories
            built with the same intention as the clothes on your back.
          </p>
        </div>
      </section>

      {/* Lookbook banner */}
      <section className="border-b border-border">
        <div className="scanlines relative h-64 md:h-96 bg-surface flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#111_25%,transparent_25%,transparent_75%,#111_75%)] bg-[length:4px_4px]" />
          <div className="relative text-center">
            <div className="font-mono text-[10px] tracking-[0.3em] text-accent-green mb-3">
              INTERIORS.ZIP
            </div>
            <p className="text-3xl md:text-5xl font-bold tracking-tight">
              COMING SOON
            </p>
            <p className="text-muted text-xs mt-3 font-mono">
              // STYLED SPACES + PRODUCT SHOTS DROPPING SOON
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Category filters */}
          <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-2">
            <button className="font-mono text-xs tracking-widest text-fg bg-subtle px-4 py-2 rounded-full whitespace-nowrap">
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-mono text-xs tracking-widest text-muted hover:text-fg px-4 py-2 rounded-full whitespace-nowrap transition-colors"
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="border-t border-border px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent-green mb-6">
            THE PHILOSOPHY
          </div>
          <blockquote className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
            &ldquo;Your space should feel like you.&rdquo;
          </blockquote>
          <p className="text-muted text-sm max-w-md mx-auto">
            Greenhaus is about bringing warmth, texture, and personality into your
            everyday environment. Nothing mass-produced. Everything considered.
          </p>
        </div>
      </section>
    </div>
  );
}
