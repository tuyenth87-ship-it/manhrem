import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/products';
import { ArrowRight, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenEstimator: () => void;
  onOpenVisualizer: () => void;
  onOpenArticles?: () => void;
  onSelectMainTab?: (tab: string) => void;
}

const HERO_GALLERY_SLIDES = [
  {
    id: 'showroom-tuyen-hoa-stamped',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png',
    badge: 'Showroom Chính Hãng Tuyến Hoa',
    title: 'Không Gian Trưng Bày Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa',
    caption: 'Giấc ngủ ngon – Cuộc sống trọn vẹn: Đại lý cấp 1 Đệm chính hãng, Màn Khung & Rèm Cửa.',
    priceHighlight: 'Showroom',
  },
  {
    id: 'dem-lo-xo-everhome',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/dem_lo_xo_everhome_tuyen_hoa.png',
    badge: '2.850.000đ / Tấm (Bảo Hành 10 Năm)',
    title: 'Đệm Lò Xo Túi Độc Lập & Gold 3 Viền Everhome Chính Hãng',
    caption: 'Nâng đỡ cột sống chuẩn y khoa, đầy đủ bản nguyên tấm hoàng gia & bản hút chân không cuộn gọn.',
    priceHighlight: '2,85Tr',
  },
  {
    id: 'chieu-may-tuyen-hoa',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png',
    badge: '450.000đ / Bộ (Kèm 2 Vỏ Gối)',
    title: 'Chiếu Mây Điều Hòa Lót Lưới 3D & Ngải Cứu Tự Nhiên',
    caption: 'Mặt mây tự nhiên mát dịu kết hợp mặt dưới lót lưới tổ ong 3D thoáng khí, đủ cỡ 1m6 · 1m8 · 2m2.',
    priceHighlight: '450k/bộ',
  },
  {
    id: 'rem-to-ong-cua-vom',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/vach_rem_to_ong_cua_vom_tuyen_hoa.png',
    badge: '650.000đ / m² (Ngăn Lạnh 98%)',
    title: 'Vách Rèm Tổ Ong Ngăn Lạnh Điều Hòa & Cửa Vòm Biệt Thự',
    caption: 'Lõi tráng bạc 2 lớp giữ nhiệt điều hòa tuyệt đối, xếp gọn sát tường chỉ 10cm cực kỳ tinh tế.',
    priceHighlight: '650k/m²',
  },
  {
    id: 'man-khung-1tr',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/IMG_4550_18a407c3.JPG',
    badge: '1.000.000đ / Bộ (1,8m × 2,0m)',
    title: 'Màn Khung Inox Cao Cấp Rộng 1,8m × Dài 2,0m',
    caption: 'Trọn gói khung Inox chịu lực + màn tuyn lạnh thêu hoa & công thợ lắp đặt tận giường.',
    priceHighlight: '1Tr/bộ',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onSelectMainTab,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_GALLERY_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_GALLERY_SLIDES[activeSlideIndex];

  return (
    <section className="border-b border-[#E5DEC9] bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F4EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Brand Introduction & Architectural Price Ledger (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE0] border border-[#DFD3BE] text-stone-800 text-xs sm:text-sm font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#9A6F2E] shrink-0" />
              <span>SHOWROOM &amp; XƯỞNG CHÍNH HÃNG · CHỢ CHÁY, ỨNG HÒA, HÀ NỘI</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-[#1C1917] leading-[1.18] tracking-tight">
                Không Gian Nội Thất Phòng Ngủ &amp; Mành Rèm{' '}
                <span className="text-[#8C6224]">Tuyến Hoa</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
                Tuyển chọn các dòng Chăn Ga Gối Đệm chính hãng, Màn Khung Hoàng Gia, Rèm Cửa may đo và Bạt Che Nắng Mưa với báo giá niêm yết minh bạch, miễn phí mang mẫu &amp; thi công tận nơi.
              </p>
            </div>

            {/* Unified Architectural 4-Column Price Ledger */}
            <div className="bg-white rounded-2xl border border-[#E5DEC9] shadow-[0_8px_30px_-12px_rgba(28,25,23,0.06)] grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-[#EAE3D5] overflow-hidden">
              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('man-khung-1tr')}
                className="p-4 text-left hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
              >
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#9A6F2E]">
                  Màn Khung 1,8m×2m
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-[#1C1917] mt-1 tabular-nums group-hover:text-[#8C6224] transition-colors">
                  1.000.000đ
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Trọn bộ cả công lắp</div>
              </button>

              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('fabric-600k')}
                className="p-4 text-left hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
              >
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#9A6F2E]">
                  Rèm Vải Cản Nắng
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-[#1C1917] mt-1 tabular-nums group-hover:text-[#8C6224] transition-colors">
                  600.000đ/m
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Kèm thanh &amp; lắp đặt</div>
              </button>

              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('man-khung-1tr')}
                className="p-4 text-left hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
              >
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#9A6F2E]">
                  Đệm Lò Xo Everhome
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-[#1C1917] mt-1 tabular-nums group-hover:text-[#8C6224] transition-colors">
                  2.850.000đ
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Bảo hành 10 năm</div>
              </button>

              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('awning-350k')}
                className="p-4 text-left hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
              >
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#9A6F2E]">
                  Bạt Xếp &amp; Tự Cuốn
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-[#1C1917] mt-1 tabular-nums group-hover:text-[#8C6224] transition-colors">
                  220k–350k
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">Đơn giá / 1 m² cả lắp</div>
              </button>
            </div>

            {/* Refined Primary & Secondary CTA Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={onExploreProducts}
                className="min-h-[48px] px-6 py-3 bg-[#1C1917] hover:bg-[#2E2924] text-[#F5E6C8] rounded-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2.5 shadow-sm cursor-pointer"
              >
                <span>Khám Phá Bộ Sưu Tập &amp; Bảng Giá</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="min-h-[48px] px-6 py-3 bg-white hover:bg-[#F3ECE0] text-[#1C1917] border border-[#D6C7B2] rounded-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#9A6F2E]" />
                <span>Tư Vấn Trực Tiếp: {STORE_INFO.hotlineDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Gallery Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-[#E2D9C8] p-3.5 shadow-[0_16px_40px_-15px_rgba(28,25,23,0.1)] space-y-3">
              <div
                onClick={() => onSelectMainTab && onSelectMainTab(currentSlide.tabTarget)}
                className="relative h-64 sm:h-76 rounded-2xl overflow-hidden bg-[#1C1917] cursor-pointer group"
              >
                <img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/20 to-transparent" />

                <div className="absolute top-3.5 left-3.5 bg-[#1C1917]/90 backdrop-blur-md text-[#F5E6C8] border border-[#D4AF37]/50 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{currentSlide.badge}</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1">
                  <h3 className="text-base sm:text-lg font-bold font-display leading-snug">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E7DAC1] font-normal leading-snug line-clamp-2">
                    {currentSlide.caption}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {HERO_GALLERY_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === activeSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`relative h-14 sm:h-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-[#9A6F2E] ring-2 ring-[#9A6F2E]/30 opacity-100'
                          : 'border-[#E5DEC9] opacity-65 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex items-end justify-center pb-1">
                        <span className="text-[10px] font-bold text-[#F5E6C8] font-mono">
                          {slide.priceHighlight}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
