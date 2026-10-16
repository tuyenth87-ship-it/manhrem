import React, { useState } from 'react';
import { Product } from '../types/store';

interface ProductIllustrationProps {
  product: Product;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSecondary?: boolean;
}

export const ProductIllustration: React.FC<ProductIllustrationProps> = ({
  product,
  className = '',
  size = 'md',
  showSecondary = false,
}) => {
  const { iconType, brand, name, image, secondaryImage } = product;
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const displayImage = showSecondary && secondaryImage ? secondaryImage : image;

  const heightClasses =
    size === 'hero'
      ? 'h-80 md:h-[420px]'
      : size === 'lg'
      ? 'h-72 md:h-80'
      : size === 'sm'
      ? 'h-32'
      : 'h-60';

  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center bg-stone-100 ${heightClasses} ${className}`}
    >
      {/* Real Photographic Image with Smooth Scale and Fade-in */}
      {!imageFailed && displayImage ? (
        <>
          <img
            src={displayImage}
            alt={name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 scale-98'
            }`}
          />
          {/* Subtle luxurious vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-60 pointer-events-none" />
          
          {/* Brand watermark badge at bottom right */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-medium px-2 py-0.5 rounded shadow-xs tracking-wider uppercase">
            {brand}
          </div>
        </>
      ) : null}

      {/* Styled Architectural Fallback Container (Zero-Broken-Image Policy) */}
      {(imageFailed || !displayImage || !imageLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
            imageLoaded && !imageFailed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            background: `radial-gradient(circle at 50% 30%, #fdfdfc 0%, #f4f3ef 100%)`,
          }}
        >
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px]" />

          {iconType === 'mattress' && (
            <div className="relative w-full max-w-[240px] flex flex-col items-center">
              <div className="w-full bg-gradient-to-br from-amber-50 to-stone-100 rounded-xl shadow-md border border-stone-300 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  {brand}
                </span>
                <div className="text-xs font-bold text-stone-900 mt-2">{name}</div>
                <div className="text-[11px] text-stone-500 mt-1">Đệm Bông Ép & Cao Su Thiên Nhiên</div>
              </div>
            </div>
          )}

          {iconType === 'curtain' && (
            <div className="relative w-full max-w-[240px] flex flex-col items-center">
              <div className="w-full bg-gradient-to-br from-sky-50 to-stone-100 rounded-xl shadow-md border border-stone-300 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-900 bg-sky-100 px-2 py-0.5 rounded">
                  {brand}
                </span>
                <div className="text-xs font-bold text-stone-900 mt-2">{name}</div>
                <div className="text-[11px] text-stone-500 mt-1">Hệ Rèm Cản Sáng Hàn Quốc</div>
              </div>
            </div>
          )}

          {iconType === 'honeycomb' && (
            <div className="relative w-full max-w-[240px] flex flex-col items-center">
              <div className="w-full bg-gradient-to-br from-amber-50 to-emerald-50 rounded-xl shadow-md border border-stone-300 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  Tổ Ong & Lưới Muỗi
                </span>
                <div className="text-xs font-bold text-stone-900 mt-2">{name}</div>
                <div className="text-[11px] text-stone-500 mt-1">Hệ Xích Không Ray 2 Trong 1</div>
              </div>
            </div>
          )}

          {iconType === 'wood' && (
            <div className="relative w-full max-w-[240px] flex flex-col items-center">
              <div className="w-full bg-gradient-to-br from-amber-900/10 to-amber-900/20 rounded-xl shadow-md border border-amber-800/30 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-200 px-2 py-0.5 rounded">
                  Gỗ & Tre Tự Nhiên
                </span>
                <div className="text-xs font-bold text-stone-900 mt-2">{name}</div>
                <div className="text-[11px] text-stone-500 mt-1">Gỗ Basswood / Nan Trúc Sơn PU</div>
              </div>
            </div>
          )}

          {iconType === 'mat' && (
            <div className="relative w-full max-w-[240px] flex flex-col items-center">
              <div className="w-full bg-gradient-to-br from-emerald-50 to-stone-100 rounded-xl shadow-md border border-stone-300 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                  Chiếu Trúc & Mây
                </span>
                <div className="text-xs font-bold text-stone-900 mt-2">{name}</div>
                <div className="text-[11px] text-stone-500 mt-1">Hạt Trúc Hương Trúc / Mây Shikada</div>
              </div>
            </div>
          )}

          {iconType === 'bedding' && (
            <div className="relative w-full max-w-[240px] flex flex-col items-center">
              <div className="w-full bg-gradient-to-br from-rose-50 to-stone-100 rounded-xl shadow-md border border-stone-300 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-900 bg-rose-100 px-2 py-0.5 rounded">
                  Chăn Ga Gối
                </span>
                <div className="text-xs font-bold text-stone-900 mt-2">{name}</div>
                <div className="text-[11px] text-stone-500 mt-1">Lụa Tencel 60s / Sông Hồng</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
