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
      className="luxury-card group cursor-pointer bg-white rounded-3xl border-2 border-[#E6DAC3] flex flex-col justify-between overflow-hidden active:scale-[0.99]"
    >
      {/* Large Bright Photo Frame */}
      <div className="luxury-sheen-hover relative overflow-hidden bg-[#FAF6EE] border-b border-[#EAE0CE]">
        <ProductIllustration
          product={product}
          size="md"
          showSecondary={isHovered && !!product.secondaryImage}
          className="h-52 sm:h-64"
        />

        {/* Bright Frosted Badge on Top Left */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#1C1917] border border-[#C69C4E] text-xs font-extrabold px-3 py-1 rounded-xl shadow-xs">
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
            className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs text-[#1C1917] hover:bg-[#F3DFB8] border border-[#D4B882] shadow-sm flex items-center justify-center transition-all"
            title="Xem chi tiết"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Spacious Card Body with Larger, Clearer Typography */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600 font-bold">
            <span className="uppercase tracking-wider font-extrabold text-[#8A5A14] truncate max-w-[160px]">
              {product.brand}
            </span>
            <span className="flex items-center gap-1 text-[#8A5A14] shrink-0">
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="font-mono font-extrabold text-[#1C1917] text-xs sm:text-sm">
                {product.rating}
              </span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-[#1C1917] mt-1.5 line-clamp-2 leading-snug group-hover:text-[#8A5A14] transition-colors font-display">
            {product.name}
          </h3>
        </div>

        {/* Size / Variant Picker */}
        {product.variants.length > 1 && (
          <div onClick={(e) => e.stopPropagation()}>
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              className="w-full text-xs sm:text-sm bg-[#FCF9F3] hover:bg-[#FAF2E1] border border-[#D8C5A3] rounded-xl px-3 py-2.5 text-[#1C1917] font-bold focus:outline-hidden focus:border-[#8A5A14] transition-colors cursor-pointer truncate"
            >
              {product.variants.map((v, i) => (
                <option key={v.id} value={i}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price & Bright Action Buttons */}
        <div className="pt-3 border-t border-[#EFE7D8] flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-1 bg-[#FDF8EE] px-3.5 py-2 rounded-xl border border-[#E2CFA8]">
            <div className="text-lg sm:text-2xl font-extrabold text-[#7A4E0E] font-mono tabular-nums leading-none">
              {activeVariant.price.toLocaleString('vi-VN')}{' '}
              <span className="text-sm font-sans font-extrabold text-[#8A5A14]">đ</span>
            </div>
            {activeVariant.originalPrice && (
              <div className="text-xs sm:text-sm text-stone-400 line-through font-mono tabular-nums">
                {activeVariant.originalPrice.toLocaleString('vi-VN')} đ
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={handleAddToCart}
              className={`min-h-[44px] w-11 rounded-xl border text-xs font-bold transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                isAdded
                  ? 'bg-emerald-700 border-emerald-700 text-white'
                  : 'bg-[#FAF6EE] border-[#D8C5A3] hover:border-[#8A5A14] text-[#1C1917] hover:bg-[#F3E9D6]'
              }`}
              title="Thêm vào giỏ hàng"
            >
              {isAdded ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4 text-[#8A5A14]" />}
            </button>

            <button
              type="button"
              onClick={handleQuickBuy}
              className="flex-1 min-h-[44px] px-3 py-2.5 bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] hover:from-[#EDD8AE] hover:to-[#E2C285] text-[#1C1917] border border-[#C59B4D] rounded-xl text-sm sm:text-base font-extrabold whitespace-nowrap transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Đặt Mua Ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
