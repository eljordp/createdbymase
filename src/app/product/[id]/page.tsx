import { products, getProductById } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Not Found' };
  return {
    title: `${product.name} | CREATEDBYMASE`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const isMase = product.brand === 'bymase';
  const accentClass = isMase ? 'text-accent-mase' : 'text-accent-green';
  const accentBgClass = isMase ? 'bg-accent-mase' : 'bg-accent-green';
  const brandName = isMase ? 'byMASE' : 'GREENHAUS';
  const brandHref = isMase ? '/bymase' : '/greenhaus';

  return (
    <div className="min-h-screen pt-[52px] sm:pt-[100px]">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border">
        <div className="max-w-7xl mx-auto font-mono text-[9px] sm:text-[10px] tracking-wider text-muted flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="hover:text-fg transition-colors shrink-0">HOME</Link>
          <span className="shrink-0">/</span>
          <Link href={brandHref} className={`hover:${accentClass} transition-colors shrink-0`}>
            {brandName}
          </Link>
          <span className="shrink-0">/</span>
          <span className="text-fg truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-16">
          {/* Product image */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative aspect-square bg-surface rounded border border-border overflow-hidden scanlines">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Thumbnail row placeholder */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-surface rounded border border-border flex items-center justify-center"
                >
                  <span className="text-muted text-[7px] sm:text-[8px] font-mono">IMG_{String(i).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className={`font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] ${accentClass} mb-2 sm:mb-3`}>
              {brandName} // {product.category.toUpperCase()}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1 sm:mb-2">
              {product.name}
            </h1>

            <div className="font-mono text-xl sm:text-2xl font-bold mb-5 sm:mb-8">
              ${product.price}.00
            </div>

            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              {product.description}
            </p>

            {/* Size selector */}
            {product.sizes && (
              <div className="mb-5 sm:mb-6">
                <label className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted mb-2 sm:mb-3 block">
                  SIZE
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="min-w-[44px] h-[44px] border border-border rounded font-mono text-xs hover:border-fg hover:text-fg text-muted transition-colors flex items-center justify-center active:bg-subtle"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color selector */}
            {product.colors && (
              <div className="mb-6 sm:mb-8">
                <label className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted mb-2 sm:mb-3 block">
                  COLOR
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2.5 min-h-[44px] border border-border rounded font-mono text-xs hover:border-fg hover:text-fg text-muted transition-colors active:bg-subtle"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart — sticky on mobile */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-bg/95 backdrop-blur-md border-t border-border z-40 md:relative md:p-0 md:bg-transparent md:backdrop-blur-none md:border-0 md:z-auto">
              <button
                className={`w-full py-4 ${accentBgClass} ${isMase ? 'text-white' : 'text-black'} font-mono font-bold text-sm tracking-widest rounded hover:opacity-90 transition-opacity active:opacity-80`}
              >
                ADD TO CART — ${product.price}.00
              </button>
              <p className="font-mono text-[9px] sm:text-[10px] text-muted tracking-wider text-center mt-2 sm:mt-3 hidden md:block">
                // SHOPIFY CHECKOUT COMING SOON
              </p>
            </div>

            {/* Product details */}
            <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 space-y-3 sm:space-y-4 mb-24 md:mb-0">
              <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted">DETAILS</div>
              <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 text-xs sm:text-sm">
                <span className="text-muted">Brand</span>
                <span className="text-fg">{brandName}</span>
                <span className="text-muted">Category</span>
                <span className="text-fg capitalize">{product.category}</span>
                <span className="text-muted">SKU</span>
                <span className="text-fg font-mono text-[10px] sm:text-xs">{product.id.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
