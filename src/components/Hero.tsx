import React from 'react';
import { STORE_INFO } from '../data/products';
import { ArrowRight, ShieldCheck, Ruler, Truck, Award, Sparkles, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenEstimator: () => void;
  onOpenVisualizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenEstimator,
  onOpenVisualizer,
}) => {
  return (
    <div className="relative border-b border-stone-200 overflow-hidden bg-gradient-to-b from-[#F5F4EE] via-[#FBFBFA] to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-900">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Chợ Cháy, Ứng Hòa, Hà Nội</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Đại Lý Chính Hãng Cấp 1</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="font-mono text-stone-900 font-bold">{STORE_INFO.hotlineDisplay}</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight leading-[1.2] text-balance">
              Mành Rèm Cao Cấp &amp; Chăn Ga Gối Đệm Tuyến Hoa
            </h1>

            {/* Sub-headline */}
            <p className="text-xs sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Phân phối chính hãng <strong className="text-stone-900 font-semibold">Đệm Vikosan, Sông Hồng, Everon, Kymdan</strong> cùng rèm vải cản sáng 100%, rèm cầu vồng Hàn Quốc, rèm tổ ong chống muỗi và chiếu trúc hạt. Khảo sát và mang mẫu tận nhà miễn phí khu vực Ứng Hòa.
            </p>

            {/* Action CTAs: Touch-friendly on mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <button
                type="button"
                onClick={onExploreProducts}
                className="w-full sm:w-auto min-h-[46px] px-5 sm:px-6 py-3 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Xem Sản Phẩm &amp; Giá Công Khai</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={onOpenVisualizer}
                  className="min-h-[46px] px-3 sm:px-4 py-3 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>Thử Rèm Ảo</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="min-h-[46px] px-3 sm:px-4 py-3 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Ruler className="w-4 h-4 text-stone-700" />
                  <span>Tính Giá Rèm</span>
                </button>
              </div>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-3 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>100% Chính hãng bảo hành tới 15 năm</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Thợ mang mẫu đo tại nhà ở Ứng Hòa</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-700 shrink-0" />
                <span>Giao hàng tận giường kiểm tra mới trả tiền</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Real Photography Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl border border-stone-200/90 shadow-xl p-3 sm:p-4 overflow-hidden">
              <div className="space-y-3">
                {/* Main Luxury Bedroom Photo */}
                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
                    alt="Không gian rèm vải và đệm cao cấp Tuyến Hoa"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                      Bộ Sưu Tập 2026
                    </span>
                    <h3 className="text-sm sm:text-base font-bold font-display leading-tight">
                      Rèm Vải 2 Lớp Cản Sáng &amp; Đệm Chính Hãng
                    </h3>
                    <p className="text-[11px] text-stone-200 mt-0.5 hidden sm:block">
                      Đo may thủ công tỉ mỉ theo chuẩn kích thước từng ô cửa.
                    </p>
                  </div>
                </div>

                {/* Two small product cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {/* Mattress card */}
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 p-2 flex flex-col justify-end group">
                    <img
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop"
                      alt="Đệm Vikosan Everon Sông Hồng"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative text-white z-10">
                      <span className="text-[9px] text-amber-300 font-bold block">Vikosan · Sông Hồng</span>
                      <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Đệm Bông Ép &amp; Cao Su</div>
                      <div className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-200">Từ 1.350.000 đ</div>
                    </div>
                  </div>

                  {/* Curtain card */}
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 p-2 flex flex-col justify-end group">
                    <img
                      src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=600&auto=format&fit=crop"
                      alt="Rèm Cầu Vồng Hàn Quốc"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative text-white z-10">
                      <span className="text-[9px] text-sky-300 font-bold block">Hàn Quốc Modero</span>
                      <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Rèm Cầu Vồng &amp; Tổ Ong</div>
                      <div className="text-[10px] sm:text-[11px] font-mono font-bold text-sky-200">Từ 480.000 đ/m²</div>
                    </div>
                  </div>
                </div>

                {/* Commitment Banner */}
                <div className="p-2.5 sm:p-3 bg-amber-50/90 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-800 shrink-0" />
                    <span className="font-semibold text-stone-900 text-[11px] sm:text-xs">
                      Chợ Cháy · Lắp đặt tận nhà toàn Ứng Hòa
                    </span>
                  </div>
                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="text-amber-900 font-bold hover:underline font-mono text-[11px] sm:text-xs shrink-0"
                  >
                    {STORE_INFO.hotlineDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
