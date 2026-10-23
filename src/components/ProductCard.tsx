import React, { useState } from 'react';
import { Product, ProductVariant, CartItem } from '../types/store';
import { ProductIllustration } from './ProductIllustration';
import { ShoppingBag, Eye, Star, Check, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
  onOpenDetails: (product: Product) => void;
  onQuickBuy: (product: Product, variant: ProductVariant) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenDetails,
  onQuickBuy,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(product.defaultVariantIndex);
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const activeVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const item: CartItem = {
      productId: product.id,
      productName: product.name,
      variantId: activeVariant.id,
      variantName: activeVariant.name,
      size: activeVariant.size,
      price: activeVariant.price,
      quantity: 1,
      category: product.category,
    };
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleQuickBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickBuy(product, activeVariant);
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="luxury-card group cursor-pointer bg-gradient-to-b from-white via-[#FFFDF9] to-amber-50/20 rounded-2xl border border-amber-300/60 flex flex-col justify-between overflow-hidden active:scale-[0.99]"
    >
      {/* Top 24K Gold Hairline Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/80 to-transparent opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Large Airy Photo Frame */}
      <div className="luxury-sheen-hover relative overflow-hidden bg-stone-100">
        <ProductIllustration
          product={product}
          size="md"
          showSecondary={isHovered && !!product.secondaryImage}
          className="h-48 sm:h-60 md:h-64"
        />

        {/* Single Clean Badge on Top Left */}
        {product.badge && (
          <div className="luxury-sheen-auto absolute top-3 left-3 bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 backdrop-blur-md text-amber-200 border border-amber-400/70 text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Quick View Eye Button on Hover */}
        <div className="absolute top-3 right-3 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-amber-950 hover:bg-amber-400 border border-amber-300 shadow-md flex items-center justify-center transition-all hover:scale-105"
            title="Xem chi tiết"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Spacious Card Body — Minimal Text, Focus on Title & Price */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-600 font-semibold">
            <span className="uppercase tracking-wider font-extrabold text-amber-900 truncate max-w-[140px]">
              {product.brand}
            </span>
            <span className="flex items-center gap-1 text-amber-700 shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span className="font-mono font-bold text-stone-800 text-xs">{product.rating}</span>
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-extrabold text-stone-950 mt-1.5 line-clamp-2 leading-snug group-hover:text-amber-900 transition-colors font-display">
            {product.name}
          </h3>
        </div>

        {/* Size / Variant Picker */}
        {product.variants.length > 1 && (
          <div onClick={(e) => e.stopPropagation()}>
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              className="w-full text-xs bg-amber-50/40 hover:bg-amber-50 border border-amber-300/70 rounded-xl px-2.5 py-2 text-stone-900 font-bold focus:outline-hidden focus:border-amber-700 transition-colors cursor-pointer truncate"
            >
              {product.variants.map((v, i) => (
                <option key={v.id} value={i}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price & Action Buttons */}
        <div className="pt-2.5 border-t border-amber-200/60 flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between gap-1">
            <div className="text-base sm:text-xl font-extrabold text-amber-950 font-mono tabular-nums leading-none">
              {activeVariant.price.toLocaleString('vi-VN')}{' '}
              <span className="text-xs font-sans font-bold text-amber-800">đ</span>
            </div>
            {activeVariant.originalPrice && (
              <div className="text-xs text-stone-400 line-through font-mono tabular-nums">
                {activeVariant.originalPrice.toLocaleString('vi-VN')} đ
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={handleAddToCart}
              className={`min-h-[40px] w-10 rounded-xl border text-xs font-bold transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                isAdded
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                  : 'bg-amber-50/70 border-amber-300 hover:border-amber-600 text-amber-950 hover:bg-amber-100'
              }`}
              title="Thêm vào giỏ hàng"
            >
              {isAdded ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleQuickBuy}
              className="luxury-sheen-hover flex-1 min-h-[40px] px-3 py-2 bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 hover:from-amber-950 hover:to-stone-950 text-amber-200 border border-amber-500/60 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all shadow-xs text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Mua ngay</span>
              <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
