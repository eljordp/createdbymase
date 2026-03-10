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
    <div className="min-h-screen pt-[100px]">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto font-mono text-[10px] tracking-wider text-muted flex items-center gap-2">
          <Link href="/" className="hover:text-fg transition-colors">HOME</Link>
          <span>/</span>
          <Link href={brandHref} className={`hover:${accentClass} transition-colors`}>
            {brandName}
          </Link>
          <span>/</span>
          <span className="text-fg">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Product image */}
          <div className="space-y-4">
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
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-surface rounded border border-border flex items-center justify-center"
                >
                  <span className="text-muted text-[8px] font-mono">IMG_{String(i).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className={`font-mono text-[10px] tracking-[0.3em] ${accentClass} mb-3`}>
              {brandName} // {product.category.toUpperCase()}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {product.name}
            </h1>

            <div className="font-mono text-2xl font-bold mb-8">
              ${product.price}.00
            </div>

            <p className="text-muted text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size selector */}
            {product.sizes && (
              <div className="mb-6">
                <label className="font-mono text-[10px] tracking-widest text-muted mb-3 block">
                  SIZE
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="w-12 h-12 border border-border rounded font-mono text-xs hover:border-fg hover:text-fg text-muted transition-colors flex items-center justify-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color selector */}
            {product.colors && (
              <div className="mb-8">
                <label className="font-mono text-[10px] tracking-widest text-muted mb-3 block">
                  COLOR
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border border-border rounded font-mono text-xs hover:border-fg hover:text-fg text-muted transition-colors"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart */}
            <button
              className={`w-full py-4 ${accentBgClass} ${isMase ? 'text-white' : 'text-black'} font-mono font-bold text-sm tracking-widest rounded hover:opacity-90 transition-opacity`}
            >
              ADD TO CART
            </button>

            <p className="font-mono text-[10px] text-muted tracking-wider text-center mt-3">
              // SHOPIFY CHECKOUT COMING SOON
            </p>

            {/* Product details */}
            <div className="mt-12 border-t border-border pt-8 space-y-4">
              <div className="font-mono text-[10px] tracking-widest text-muted">DETAILS</div>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <span className="text-muted">Brand</span>
                <span className="text-fg">{brandName}</span>
                <span className="text-muted">Category</span>
                <span className="text-fg capitalize">{product.category}</span>
                <span className="text-muted">SKU</span>
                <span className="text-fg font-mono text-xs">{product.id.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
