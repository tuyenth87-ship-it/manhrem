import React from 'react';
import { Sparkles } from 'lucide-react';

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
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-xs">
            <div className="w-full h-full rounded-full overflow-hidden bg-white border border-white">
              <img
                src={OWNER_PHOTO}
                alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[38%_32%] scale-110"
              />
            </div>
          </div>
          <span
            className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"
            title="Chủ tiệm sẵn sàng tư vấn"
          />
        </div>

        <div className="leading-tight min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-lg sm:text-xl font-display font-extrabold text-[#1C1917] tracking-tight whitespace-nowrap">
              Tuyến Hoa
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          </div>
          {showSubtitle && (
            <p className="text-xs font-bold text-[#8A5A14] uppercase tracking-tight whitespace-nowrap">
              Rèm • Chăn • Đệm
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'nav') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="relative shrink-0 group">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
              <img
                src={OWNER_PHOTO}
                alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[38%_32%] scale-110"
              />
            </div>
          </div>
          <span
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"
            title="Chủ tiệm Tuyến Hoa"
          />
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-[#1C1917] hover:text-[#8A5A14] transition-colors">
              Tuyến Hoa
            </span>
            <span className="hidden xl:inline-flex items-center gap-1 text-xs font-bold text-[#7A4E0E] bg-[#F7EBCE] border border-[#D4B06A] px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-[#9A681C]" />
              <span>Chợ Cháy</span>
            </span>
          </div>
          {showSubtitle && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8A5A14] tracking-wide uppercase">
              <span>Rèm Cửa</span>
              <span className="text-amber-600">•</span>
              <span>Chăn Đệm</span>
              <span className="text-amber-600">•</span>
              <span>Bạt Xếp</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="relative shrink-0">
          <div className="w-13 h-13 rounded-2xl p-[2px] bg-gradient-to-tr from-amber-600 via-amber-200 to-amber-800 shadow-sm">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-white border-2 border-white">
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
          <h2 className="text-xl font-display font-extrabold text-[#1C1917] leading-snug">
            Tuyến Hoa
          </h2>
          <p className="text-xs sm:text-sm font-bold text-[#8A5A14] tracking-wide uppercase">
            Rèm Cửa • Chăn Ga • Đệm
          </p>
          <p className="text-xs sm:text-sm font-medium text-stone-600 mt-0.5">
            Chợ Cháy, Ứng Hòa, Hà Nội
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-amber-200 to-amber-700 shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
              <img
                src={OWNER_PHOTO}
                alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[38%_32%] scale-110"
              />
            </div>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1C1917] tracking-tight">
            Tuyến Hoa
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#8A5A14] uppercase tracking-wide">
            Rèm Cửa • Chăn Ga • Đệm
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="relative">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-amber-600 via-amber-200 to-amber-800 shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white relative">
            <img
              src={OWNER_PHOTO}
              alt="Logo Tuyến Hoa - Rèm Chăn Đệm"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[38%_32%] scale-110"
            />
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#F7EBCE] text-[#7A4E0E] text-xs font-bold uppercase tracking-wide px-3.5 py-0.5 rounded-full border border-[#D4B06A] shadow-xs whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#9A681C]" />
          <span>Chợ Cháy</span>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-display font-extrabold text-[#1C1917]">
          Tuyến Hoa
        </h2>
        <p className="text-sm sm:text-base font-bold text-[#8A5A14] tracking-wide uppercase mt-0.5">
          Rèm Cửa • Chăn Ga • Đệm
        </p>
        <p className="text-sm font-medium text-stone-600 mt-1">
          Đại lý chính hãng Vikosan, Sông Hồng, Everon &amp; Thi công rèm tại nhà
        </p>
      </div>
    </div>
  );
};
