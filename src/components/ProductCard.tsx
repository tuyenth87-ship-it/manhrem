import React, { useState } from 'react';
import { Product, ProductVariant, CartItem } from '../types/store';
import { ProductIllustration } from './ProductIllustration';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';

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
      className="luxury-card group cursor-pointer bg-white rounded-3xl border border-[#E6DFD3] flex flex-col justify-between overflow-hidden active:scale-[0.99]"
    >
      {/* Large Airy Photo Frame */}
      <div className="luxury-sheen-hover relative overflow-hidden bg-[#F4EFE6]">
        <ProductIllustration
          product={product}
          size="md"
          showSecondary={isHovered && !!product.secondaryImage}
          className="h-48 sm:h-60 md:h-64"
        />

        {/* Single Understated Badge on Top Left */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#1C1917]/90 backdrop-blur-md text-[#F5E6C8] border border-[#D4AF37]/40 text-[11px] font-bold px-3 py-1 rounded-lg shadow-xs">
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
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-stone-900 hover:bg-[#1C1917] hover:text-[#F5E6C8] border border-[#E2D9C8] shadow-sm flex items-center justify-center transition-all"
            title="Xem chi tiết"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Spacious Card Body — Minimal Text, Focus on Title & Price */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500 font-semibold">
            <span className="uppercase tracking-wider font-bold text-[#9A6F2E] truncate max-w-[150px]">
              {product.brand}
            </span>
            <span className="flex items-center gap-1 text-[#9A6F2E] shrink-0">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="font-mono font-bold text-stone-700 text-xs">{product.rating}</span>
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-[#1C1917] mt-1.5 line-clamp-2 leading-snug group-hover:text-[#8C6224] transition-colors font-display">
            {product.name}
          </h3>
        </div>

        {/* Size / Variant Picker */}
        {product.variants.length > 1 && (
          <div onClick={(e) => e.stopPropagation()}>
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              className="w-full text-xs bg-[#FAF7F2] hover:bg-[#F3ECE0] border border-[#E2D9C8] rounded-xl px-3 py-2 text-stone-800 font-semibold focus:outline-hidden focus:border-[#9A6F2E] transition-colors cursor-pointer truncate"
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
        <div className="pt-3 border-t border-[#EFE9DE] flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between gap-1">
            <div className="text-base sm:text-xl font-extrabold text-[#1C1917] font-mono tabular-nums leading-none">
              {activeVariant.price.toLocaleString('vi-VN')}{' '}
              <span className="text-xs font-sans font-bold text-[#8C6224]">đ</span>
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
                  ? 'bg-emerald-700 border-emerald-700 text-white'
                  : 'bg-[#FAF7F2] border-[#E2D9C8] hover:border-[#9A6F2E] text-stone-800 hover:bg-[#F3ECE0]'
              }`}
              title="Thêm vào giỏ hàng"
            >
              {isAdded ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleQuickBuy}
              className="flex-1 min-h-[40px] px-3 py-2 bg-[#1C1917] hover:bg-[#2E2924] text-[#F5E6C8] rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Đặt Mua Ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
