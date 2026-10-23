import React from 'react';
import { STORE_INFO } from '../data/products';
import { ArrowRight, ShieldCheck, Ruler, Truck, Award, Sparkles, MapPin, Phone, BookOpen } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenEstimator: () => void;
  onOpenVisualizer: () => void;
  onOpenArticles?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenEstimator,
  onOpenVisualizer,
  onOpenArticles,
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
              Ưu đãi đặc biệt: <strong className="text-amber-900 font-bold bg-amber-100 px-1.5 py-0.5 rounded">Rèm vải chống nắng cao cấp trọn gói 600.000đ / mét ngang (cả công thi công lắp đặt)</strong>. Phân phối chính hãng <strong className="text-stone-900 font-semibold">Đệm Vikosan, Sông Hồng, Everon, Kymdan</strong>, rèm cầu vồng Hàn Quốc, mành tre vẽ tranh phong thủy &amp; mành hạt kết tranh.
            </p>

            {/* Action CTAs: Touch-friendly on mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <button
                type="button"
                onClick={onExploreProducts}
                className="w-full sm:w-auto min-h-[46px] px-5 sm:px-6 py-3 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Xem Rèm Vải 600k/m &amp; Bảng Giá</span>
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

                {onOpenArticles && (
                  <button
                    type="button"
                    onClick={onOpenArticles}
                    className="col-span-2 sm:col-span-1 min-h-[46px] px-3.5 sm:px-4 py-3 bg-amber-100/80 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <BookOpen className="w-4 h-4 text-amber-800" />
                    <span>Cẩm Nang Rèm</span>
                  </button>
                )}
              </div>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-3 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Rèm vải 600.000đ/m ngang cả công lắp đặt</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Thợ mang mẫu đo tại nhà toàn Ứng Hòa</span>
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
                {/* Main Authentic Handover Photo by Mr. Tuyen Hoa */}
                <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-stone-100 group">
                  <img
                    src="/assets/aistudio/IMG_5314_ae0205c4.PNG"
                    alt="Anh Tuyến trực tiếp bàn giao bộ rèm vải chống nắng trọn gói 600.000đ/m ngang cả công lắp đặt"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-[1.03] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  
                  {/* Verified Real Badge */}
                  <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Trọn Gói 600.000đ / m Ngang Cả Lắp Đặt</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                      Chủ Cửa Hàng Tuyến Hoa Trực Tiếp Thi Công
                    </span>
                    <h3 className="text-sm sm:text-base font-bold font-display leading-tight text-white drop-shadow-xs">
                      Rèm Vải Cản Nắng Cao Cấp – Đồng Giá 600.000đ/m Ngang
                    </h3>
                    <p className="text-[11px] text-stone-200 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Đã bao gồm vải, thanh treo, phụ kiện &amp; công lắp đặt hoàn thiện</span>
                    </p>
                  </div>
                </div>

                {/* Two authentic thumbnail cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {/* Real Ancestral Room Curtain */}
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 p-2 flex flex-col justify-end group">
                    <img
                      src="/assets/aistudio/IMG_5312_c3f3e101.PNG"
                      alt="Rèm Tuyến Hoa - Đẳng cấp được khẳng định"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <div className="relative text-white z-10">
                      <span className="text-[9px] text-amber-300 font-bold block">Đẳng Cấp Khẳng Định</span>
                      <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Rèm Phòng Thờ &amp; Sập Gụ</div>
                      <div className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-200">600.000 đ/m ngang</div>
                    </div>
                  </div>

                  {/* Real Villa Cream 2-Layer Curtain */}
                  <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 p-2 flex flex-col justify-end group">
                    <img
                      src="/assets/aistudio/IMG_5310_8f861c11.JPG"
                      alt="Hệ rèm vải 2 lớp kem sữa biệt thự cao cấp Tuyến Hoa"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <div className="relative text-white z-10">
                      <span className="text-[9px] text-emerald-300 font-bold block">13 Mẫu Mới Lên Sóng</span>
                      <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Rèm Âm Trần Biệt Thự</div>
                      <div className="text-[10px] sm:text-[11px] font-mono font-bold text-stone-200">Cả công lắp đặt</div>
                    </div>
                  </div>
                </div>

                {/* Commitment Banner */}
                <div className="p-2.5 sm:p-3 bg-amber-50/90 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-800 shrink-0" />
                    <span className="font-semibold text-stone-900 text-[11px] sm:text-xs">
                      Chợ Cháy · Thợ mang mẫu đo tại nhà toàn Ứng Hòa
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
