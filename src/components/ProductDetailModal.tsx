import React, { useState } from 'react';
import { Product, ProductVariant, CartItem } from '../types/store';
import { STORE_INFO } from '../data/products';
import { X, Check, ShieldCheck, Truck, PhoneCall, Ruler, Star, Plus, Minus, MessageCircle } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onQuickBuy: (product: Product, variant: ProductVariant, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onQuickBuy,
}) => {
  if (!product) return null;

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(product.defaultVariantIndex);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const activeVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const imagesList = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image, product.secondaryImage].filter(Boolean) as string[];

  const currentDisplayImage = imagesList[activeImageIndex] || product.image;

  const handleAddToCart = () => {
    const item: CartItem = {
      productId: product.id,
      productName: product.name,
      variantId: activeVariant.id,
      variantName: activeVariant.name,
      size: activeVariant.size,
      price: activeVariant.price,
      quantity: quantity,
      category: product.category,
    };
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    onQuickBuy(product, activeVariant, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-end md:items-center justify-center p-0 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-t-3xl md:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh] md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Handle */}
        <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto my-2 md:hidden" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-stone-200 bg-stone-50/90">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-stone-600 font-medium truncate">
            <span className="uppercase tracking-wider font-bold text-amber-950 shrink-0">{product.brand}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{product.subCategory}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 pb-28 md:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Left Column: Photo Gallery & Specifications (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              {/* Main Image */}
              <div className="relative rounded-2xl border border-stone-200 overflow-hidden bg-stone-100 h-60 sm:h-80 shadow-inner group">
                <img
                  src={currentDisplayImage}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.src = product.image;
                  }}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                  {product.badge || 'Ảnh thực tế'}
                </div>
              </div>

              {/* Thumbnails */}
              {imagesList.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {imagesList.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 overflow-hidden shrink-0 transition-all ${
                        activeImageIndex === idx
                          ? 'border-amber-800 ring-2 ring-amber-800/20'
                          : 'border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Góc chụp ${idx + 1}`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Specifications Table */}
              <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2 text-xs">
                <div className="font-bold text-stone-900 border-b border-stone-200 pb-2 flex items-center justify-between">
                  <span>Thông Số Kỹ Thuật</span>
                  <span className="text-amber-800 font-mono text-[11px]">Chính Hãng</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-stone-500">Chất liệu:</span>
                  <span className="col-span-2 font-medium text-stone-800">{product.specs.material}</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-stone-500">Bảo hành:</span>
                  <span className="col-span-2 font-bold text-emerald-800">{product.specs.warranty}</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-stone-500">Xuất xứ:</span>
                  <span className="col-span-2 font-medium text-stone-800">{product.specs.origin}</span>
                </div>
                {product.specs.thicknessOrSize && (
                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-stone-500">Kích thước:</span>
                    <span className="col-span-2 font-medium text-stone-800">{product.specs.thicknessOrSize}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Contiguous Purchase Module (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Title & Reviews */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                    <div className="flex items-center text-amber-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-mono font-bold text-stone-800">{product.rating}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{product.reviewsCount} khách hàng tại Ứng Hòa tin dùng</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-stone-900 leading-tight">
                    {product.name}
                  </h2>
                </div>

                {/* Price Box */}
                <div className="p-3.5 sm:p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-baseline justify-between">
                  <div>
                    <div className="text-[11px] text-stone-500">Giá niêm yết công khai:</div>
                    <div className="text-2xl sm:text-3xl font-bold text-amber-950 font-mono tabular-nums">
                      {activeVariant.price.toLocaleString('vi-VN')}{' '}
                      <span className="text-sm font-sans font-normal text-stone-500">đ</span>
                    </div>
                  </div>
                  {activeVariant.originalPrice && (
                    <div className="text-right">
                      <span className="text-[10px] text-stone-400">Tiết kiệm:</span>
                      <div className="text-xs sm:text-sm text-stone-400 line-through font-mono tabular-nums">
                        {activeVariant.originalPrice.toLocaleString('vi-VN')} đ
                      </div>
                    </div>
                  )}
                </div>

                {/* Variant Options Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Chọn kích thước &amp; quy cách:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.variants.map((v, idx) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariantIndex(idx)}
                        className={`p-2.5 sm:p-3 text-left rounded-xl border text-xs font-medium transition-all min-h-[44px] ${
                          selectedVariantIndex === idx
                            ? 'border-amber-800 bg-amber-50/80 text-amber-950 font-bold shadow-xs'
                            : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                        }`}
                      >
                        <div className="font-semibold text-stone-900">{v.name}</div>
                        <div className="text-amber-900 font-mono tabular-nums mt-0.5">
                          {v.price.toLocaleString('vi-VN')} đ
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity picker */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Số lượng:
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-1 text-sm font-bold font-mono text-stone-900">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="text-xs text-stone-500">
                      Tổng: <strong className="font-mono text-stone-900">{(activeVariant.price * quantity).toLocaleString('vi-VN')} đ</strong>
                    </span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    Điểm nổi bật:
                  </div>
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Description paragraphs */}
                <div className="space-y-2 pt-2 border-t border-stone-200 text-xs text-stone-600 leading-relaxed">
                  {product.description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Trust perks */}
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 space-y-1 text-xs text-amber-950">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Truck className="w-4 h-4 text-amber-800" />
                    <span>Miễn phí giao hàng &amp; kê đệm tại Ứng Hòa</span>
                  </div>
                  <p className="text-[11px] text-stone-600">
                    Thợ Tuyến Hoa mang mẫu vải/đệm trực tiếp đến tận nhà khảo sát đo đạc miễn phí.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Mobile Bottom Buy Bar (Natural Thumb Reach) */}
        <div className="fixed md:static bottom-0 left-0 right-0 z-30 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-xl flex items-center gap-2">
          {/* Direct call button on mobile */}
          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="md:hidden min-w-[48px] min-h-[48px] rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300"
            title="Gọi tư vấn"
          >
            <PhoneCall className="w-5 h-5 text-amber-800" />
          </a>

          {/* Add to Cart button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 min-h-[48px] py-2.5 px-3 border border-stone-800 text-stone-900 hover:bg-stone-100 rounded-2xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            {isAdded ? <Check className="w-4 h-4 text-emerald-600" /> : null}
            <span>{isAdded ? 'Đã thêm!' : 'Thêm Vào Giỏ'}</span>
          </button>

          {/* Buy Now button */}
          <button
            type="button"
            onClick={handleBuyNow}
            className="flex-1 min-h-[48px] py-2.5 px-3 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white rounded-2xl text-xs sm:text-sm font-semibold transition-colors shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Mua Ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
