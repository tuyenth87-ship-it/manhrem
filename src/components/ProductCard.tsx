import React, { useState } from 'react';
import { Product, ProductVariant, CartItem } from '../types/store';
import { ProductIllustration } from './ProductIllustration';
import { ShoppingBag, Eye, Star, Check, ShieldCheck } from 'lucide-react';

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
      className="group cursor-pointer bg-white rounded-2xl border border-stone-200/90 hover:border-amber-900/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden active:scale-[0.99]"
    >
      {/* Visual Top Container with Real Photo */}
      <div className="relative overflow-hidden bg-stone-100">
        <ProductIllustration
          product={product}
          size="md"
          showSecondary={isHovered && !!product.secondaryImage}
          className="h-44 sm:h-56 md:h-60"
        />

        {/* 1-line Badge on Top Left */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-stone-900/95 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-md">
            {product.badge}
          </div>
        )}

        {/* Floating Quick Action overlay for desktop */}
        <div className="absolute top-2.5 right-2.5 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-stone-700 hover:text-stone-950 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105"
            title="Xem chi tiết"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Warranty Tag */}
        <div className="absolute bottom-2 left-2 text-[10px] sm:text-[11px] font-semibold text-white bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{product.specs.warranty}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-2.5 sm:p-4 md:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div>
          {/* Metadata: Brand & Rating */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-stone-600 font-semibold">
            <span className="uppercase tracking-wide font-extrabold text-amber-950 truncate max-w-[110px] sm:max-w-[140px]">
              {product.brand}
            </span>
            <span className="flex items-center gap-0.5 text-amber-700 shrink-0">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-mono font-bold text-stone-900 text-[11px] sm:text-xs">{product.rating}</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-sm sm:text-base font-extrabold text-stone-950 mt-1 line-clamp-2 leading-snug group-hover:text-amber-900 transition-colors font-display">
            {product.name}
          </h3>

          {/* Summary snippet (hidden on tiny mobile screens to keep card compact and clean) */}
          <p className="hidden sm:block text-xs sm:text-sm text-stone-700 mt-1 line-clamp-2 leading-relaxed">
            {product.summary}
          </p>
        </div>

        {/* Size / Variant Picker */}
        {product.variants.length > 1 && (
          <div className="pt-0.5" onClick={(e) => e.stopPropagation()}>
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              className="w-full text-[11px] sm:text-xs bg-stone-50 hover:bg-stone-100 border border-stone-300 rounded-lg px-2 py-1.5 text-stone-900 font-semibold focus:outline-hidden focus:border-amber-800 transition-colors cursor-pointer truncate"
            >
              {product.variants.map((v, i) => (
                <option key={v.id} value={i}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price & Touch Buttons */}
        <div className="pt-2 sm:pt-3 border-t border-stone-100 flex flex-col gap-1.5 sm:gap-2">
          <div className="flex items-baseline justify-between gap-1">
            <div className="text-sm sm:text-lg md:text-xl font-extrabold text-amber-950 font-mono tabular-nums leading-none">
              {activeVariant.price.toLocaleString('vi-VN')}{' '}
              <span className="text-[11px] sm:text-xs font-sans font-bold text-stone-600">đ</span>
            </div>
            {activeVariant.originalPrice && (
              <div className="text-[10px] sm:text-xs text-stone-500 line-through font-mono tabular-nums">
                {activeVariant.originalPrice.toLocaleString('vi-VN')} đ
              </div>
            )}
          </div>

          {/* Touch Buttons */}
          <div className="flex items-center gap-1.5 w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={handleAddToCart}
              className={`min-h-[38px] w-9 sm:w-10 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center shrink-0 ${
                isAdded
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-stone-300 hover:border-stone-900 text-stone-900 hover:bg-stone-50'
              }`}
              title="Thêm vào giỏ hàng"
            >
              {isAdded ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleQuickBuy}
              className="flex-1 min-h-[38px] px-2 py-1.5 bg-stone-900 active:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs text-center flex items-center justify-center"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
