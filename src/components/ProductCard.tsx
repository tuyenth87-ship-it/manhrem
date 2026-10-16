import React, { useState } from 'react';
import { Product, ProductVariant, CartItem } from '../types/store';
import { ProductIllustration } from './ProductIllustration';
import { ShoppingBag, Eye, Star, Check, ShieldCheck, Ruler } from 'lucide-react';

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
      className="group cursor-pointer bg-white rounded-2xl border border-stone-200/90 hover:border-amber-900/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
    >
      {/* Visual Top Container with Real Photo & Hover Swap */}
      <div className="relative overflow-hidden bg-stone-100">
        <ProductIllustration
          product={product}
          size="md"
          showSecondary={isHovered && !!product.secondaryImage}
        />

        {/* 1-line Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-md tracking-wide">
            {product.badge}
          </div>
        )}

        {/* Floating Quick Action overlay */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-stone-700 hover:text-stone-950 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105"
            title="Xem chi tiết & thông số"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Warranty / Spec Pill */}
        <div className="absolute bottom-2.5 left-3 text-[10px] font-medium text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>{product.specs.warranty}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Metadata: Brand & Category */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <span className="uppercase tracking-wider font-bold text-amber-950">{product.brand}</span>
            <span aria-hidden="true">·</span>
            <span>{product.subCategory}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-0.5 text-amber-700">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-mono font-bold text-stone-800">{product.rating}</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-base font-bold text-stone-900 mt-1 line-clamp-2 leading-snug group-hover:text-amber-900 transition-colors font-display">
            {product.name}
          </h3>

          {/* Summary snippet */}
          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
            {product.summary}
          </p>
        </div>

        {/* Size / Variant Picker */}
        {product.variants.length > 1 && (
          <div className="pt-1" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center text-[11px] font-medium text-stone-500 mb-1">
              <span>Chọn quy cách:</span>
              <span className="text-stone-700 font-semibold">{product.variants.length} kích cỡ</span>
            </div>
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              className="w-full text-xs bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg px-2.5 py-2 text-stone-800 font-medium focus:outline-hidden focus:border-amber-800 transition-colors cursor-pointer"
            >
              {product.variants.map((v, i) => (
                <option key={v.id} value={i}>
                  {v.name} — {v.price.toLocaleString('vi-VN')} đ
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price Baseline & Action Buttons */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-base sm:text-lg font-bold text-amber-950 font-mono tabular-nums leading-none">
              {activeVariant.price.toLocaleString('vi-VN')}{' '}
              <span className="text-xs font-sans font-normal text-stone-500">đ</span>
            </div>
            {activeVariant.originalPrice && (
              <div className="text-[11px] text-stone-400 line-through font-mono tabular-nums mt-0.5">
                {activeVariant.originalPrice.toLocaleString('vi-VN')} đ
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={handleAddToCart}
              className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                isAdded
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-stone-300 hover:border-stone-900 text-stone-800 hover:bg-stone-50'
              }`}
              title="Thêm vào giỏ hàng"
            >
              {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleQuickBuy}
              className="px-3.5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-xs hover:shadow-md"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
