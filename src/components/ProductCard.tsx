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
      className="luxury-card group cursor-pointer bg-white flex flex-col justify-between overflow-hidden active:scale-[0.995]"
    >
      {/* Photo Frame */}
      <div className="luxury-sheen-hover relative overflow-hidden bg-[#F7F4ED] border-b border-[#EFE9DC]">
        <ProductIllustration
          product={product}
          size="md"
          showSecondary={isHovered && !!product.secondaryImage}
          className="h-52 sm:h-60"
        />

        {/* Frosted Badge on Top Left */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#1C1917] border border-[#E2D5BE] text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-lg shadow-2xs">
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
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-[#1C1917] hover:bg-[#FAF5EB] border border-[#DFD2BA] shadow-xs flex items-center justify-center transition-all"
            title="Xem chi tiết"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tailored Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span className="uppercase tracking-[0.08em] font-semibold text-[#8C6224] truncate max-w-[160px]">
              {product.brand}
            </span>
            <span className="flex items-center gap-1 text-[#8C6224] shrink-0">
              <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span className="font-mono font-semibold text-[#1C1917] text-xs">
                {product.rating}
              </span>
            </span>
          </div>

          <h3 className="text-[15px] sm:text-base font-semibold text-[#1C1917] mt-1.5 line-clamp-2 leading-snug group-hover:text-[#8C6224] transition-colors font-display">
            {product.name}
          </h3>
        </div>

        {/* Size / Variant Picker */}
        {product.variants.length > 1 && (
          <div onClick={(e) => e.stopPropagation()}>
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              className="w-full text-xs bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#E5DEC9] rounded-xl px-3 py-2 text-[#1C1917] font-medium focus:outline-hidden focus:border-[#B5945B] transition-colors cursor-pointer truncate"
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
        <div className="pt-3 border-t border-[#F2ECE1] flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between gap-2 bg-[#FCF9F4] px-3.5 py-2 rounded-xl border border-[#EDE3D2]">
            <div className="text-base sm:text-lg font-semibold text-[#734F1A] font-mono tabular-nums leading-none">
              {activeVariant.price.toLocaleString('vi-VN')}{' '}
              <span className="text-xs font-sans font-medium text-[#8C6224]">đ</span>
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
              className={`min-h-[40px] w-10 rounded-xl border text-xs font-medium transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                isAdded
                  ? 'bg-emerald-700 border-emerald-700 text-white'
                  : 'bg-[#FAF8F5] border-[#E4DAC7] hover:border-[#B5945B] text-[#1C1917] hover:bg-[#F3EDE2]'
              }`}
              title="Thêm vào giỏ hàng"
            >
              {isAdded ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4 text-[#8C6224]" />}
            </button>

            <button
              type="button"
              onClick={handleQuickBuy}
              className="btn-luxury-primary flex-1 min-h-[40px] px-3 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Đặt Mua Ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
