import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const isMase = product.brand === 'bymase';

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-square bg-surface rounded overflow-hidden border border-border group-hover:border-muted/40 transition-all">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price tag */}
        <div className="absolute bottom-3 right-3 bg-bg/80 backdrop-blur-sm px-3 py-1 rounded font-mono text-xs">
          ${product.price}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className={`font-mono text-xs tracking-widest ${isMase ? 'text-accent-mase' : 'text-accent-green'}`}>
            VIEW.exe
          </span>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-mono text-sm font-bold tracking-wide group-hover:opacity-70 transition-opacity">
          {product.name}
        </h3>
        <p className="text-muted text-xs">{product.category.toUpperCase()}</p>
      </div>
    </Link>
  );
}
