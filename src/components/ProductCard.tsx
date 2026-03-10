import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const isMase = product.brand === 'bymase';

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block active:opacity-80"
    >
      <div className="relative aspect-square bg-surface rounded overflow-hidden border border-border group-hover:border-muted/40 transition-all">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price tag */}
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-bg/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded font-mono text-[10px] sm:text-xs">
          ${product.price}
        </div>
        {/* Hover overlay — desktop only */}
        <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
          <span className={`font-mono text-xs tracking-widest ${isMase ? 'text-accent-mase' : 'text-accent-green'}`}>
            VIEW.exe
          </span>
        </div>
      </div>
      <div className="mt-2 sm:mt-3 space-y-0.5 sm:space-y-1">
        <h3 className="font-mono text-[11px] sm:text-sm font-bold tracking-wide group-hover:opacity-70 transition-opacity leading-tight">
          {product.name}
        </h3>
        <p className="text-muted text-[10px] sm:text-xs">{product.category.toUpperCase()}</p>
      </div>
    </Link>
  );
}
