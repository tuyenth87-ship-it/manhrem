import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const OWNER_PHOTO = '/assets/aistudio/20261017_162136_c08f9065.jpg';

interface BrandLogoProps {
  variant?: 'nav' | 'nav-mobile' | 'drawer' | 'footer' | 'emblem-large' | 'card';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'nav',
  showSubtitle = true,
  className = '',
}) => {
  if (variant === 'nav-mobile') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Circular Avatar / Emblem with 24K Golden Halo Border */}
        <div className="relative shrink-0">
          <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-yellow-200 to-amber-700 shadow-[0_0_12px_rgba(245,158,11,0.45)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 border border-white">
              <img
                src={OWNER_PHOTO}
                alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[38%_32%] scale-110"
              />
            </div>
          </div>
          {/* Mini diamond star & active badge */}
          <Sparkles
            className="w-3 h-3 absolute -top-1 -left-0.5 text-amber-500 diamond-twinkle select-none"
            aria-hidden="true"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-xs" title="Chủ tiệm sẵn sàng tư vấn" />
        </div>

        {/* Text */}
        <div className="leading-tight min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-[15px] sm:text-lg font-display font-extrabold text-stone-950 tracking-tight whitespace-nowrap">
              Tuyến Hoa
            </span>
            <Sparkles className="w-3 h-3 text-amber-500 diamond-twinkle shrink-0" />
          </div>
          {showSubtitle && (
            <p className="text-[10px] font-extrabold text-amber-900 uppercase tracking-tight whitespace-nowrap">
              Rèm • Chăn • Đệm
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'nav') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Circular Avatar / Emblem with 24K Golden Ring & Glow */}
        <div className="relative shrink-0 group">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-yellow-200 to-amber-800 shadow-[0_0_16px_rgba(245,158,11,0.45)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 border-2 border-white">
              <img
                src={OWNER_PHOTO}
                alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[38%_32%] scale-110"
              />
            </div>
          </div>
          <Sparkles
            className="w-3.5 h-3.5 absolute -top-1 -left-1 text-amber-500 diamond-twinkle select-none"
            aria-hidden="true"
          />
          {/* Mini badge icon */}
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-xs" title="Chủ tiệm Tuyến Hoa" />
        </div>

        {/* Brand Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-stone-950 hover:text-amber-900 transition-colors">
              Tuyến Hoa
            </span>
            <span className="hidden xl:inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-200 bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 border border-amber-400/70 px-2.5 py-0.5 rounded-full shadow-xs luxury-sheen-auto">
              <Sparkles className="w-2.5 h-2.5 text-amber-300" />
              <span>Chợ Cháy</span>
            </span>
          </div>
          {showSubtitle && (
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-900 tracking-wide uppercase">
              <span>Rèm Cửa</span>
              <span className="text-amber-500 font-bold">•</span>
              <span>Chăn Đệm</span>
              <span className="text-amber-500 font-bold">•</span>
              <span>Bạt Xếp</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative shrink-0">
          <div className="w-13 h-13 rounded-2xl p-[2px] bg-gradient-to-tr from-amber-600 via-amber-200 to-amber-800 shadow-md">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-stone-100 border-2 border-white">
              <img
                src={OWNER_PHOTO}
                alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[38%_32%] scale-110"
              />
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
        </div>
        <div>
          <h2 className="text-lg font-display font-extrabold text-stone-950 leading-snug">
            Tuyến Hoa
          </h2>
          <p className="text-xs font-bold text-amber-900 tracking-wide uppercase">
            Rèm Cửa • Chăn Ga • Đệm
          </p>
          <p className="text-xs font-medium text-stone-600 mt-0.5">
            Chợ Cháy, Ứng Hòa, Hà Nội
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-amber-200 to-amber-600 shadow-md">
            <div className="w-full h-full rounded-full overflow-hidden bg-stone-800 border-2 border-stone-900">
              <img
                src={OWNER_PHOTO}
                alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[38%_32%] scale-110"
              />
            </div>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-stone-900" />
        </div>
        <div>
          <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
            Tuyến Hoa
          </h3>
          <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">
            Rèm Cửa • Chăn Ga • Đệm
          </p>
        </div>
      </div>
    );
  }

  // Large Luxury Emblem Presentation (for modals, about page, or logo preview)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Outer Medallion Frame */}
      <div className="relative">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-amber-600 via-amber-200 to-amber-800 shadow-xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white shadow-inner relative">
            <img
              src={OWNER_PHOTO}
              alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[38%_32%] scale-110"
            />
          </div>
        </div>
        {/* Golden craftsman tag */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-stone-900 text-amber-300 text-[11px] font-bold uppercase tracking-wide px-3 py-0.5 rounded-full border border-amber-400/80 shadow-md whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Chợ Cháy</span>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-display font-extrabold text-stone-950">
          Tuyến Hoa
        </h2>
        <p className="text-sm font-bold text-amber-900 tracking-wide uppercase mt-0.5">
          Rèm Cửa • Chăn Ga • Đệm
        </p>
        <p className="text-xs font-medium text-stone-600 mt-1">
          Đại lý chính hãng Vikosan, Sông Hồng, Everon &amp; Thi công rèm tại nhà
        </p>
      </div>
    </div>
  );
};
