import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_INFO } from '../data/products';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';

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
    title: 'Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa',
    caption: 'Đại lý cấp 1 Đệm chính hãng, Màn Khung & Rèm Cửa may đo tại Chợ Cháy, Ứng Hòa.',
    priceHighlight: 'Showroom',
  },
  {
    id: 'dem-lo-xo-everhome',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/dem_lo_xo_everhome_tuyen_hoa.png',
    badge: '2.850.000đ / Tấm · Bảo Hành 10 Năm',
    title: 'Đệm Lò Xo Túi Độc Lập & Gold 3 Viền Everhome',
    caption: 'Nâng đỡ cột sống êm ái chuẩn khách sạn 5 sao, giao miễn phí tận giường.',
    priceHighlight: '2,85Tr',
  },
  {
    id: 'chieu-may-tuyen-hoa',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png',
    badge: '450.000đ / Bộ · Tặng 2 Vỏ Gối',
    title: 'Chiếu Mây Điều Hòa Lót Lưới 3D Thoáng Khí',
    caption: 'Mặt mây tự nhiên mát dịu kết hợp đế lưới tổ ong 3D, đủ cỡ 1m6 · 1m8 · 2m2.',
    priceHighlight: '450k/bộ',
  },
  {
    id: 'rem-to-ong-cua-vom',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/vach_rem_to_ong_cua_vom_tuyen_hoa.png',
    badge: '650.000đ / m² · Ngăn Lạnh 98%',
    title: 'Vách Rèm Tổ Ong Ngăn Lạnh & Cửa Vòm Biệt Thự',
    caption: 'Lõi tráng bạc 2 lớp giữ nhiệt điều hòa tuyệt đối, xếp gọn sát tường 10cm.',
    priceHighlight: '650k/m²',
  },
  {
    id: 'man-khung-1tr',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/IMG_4550_18a407c3.JPG',
    badge: '1.000.000đ / Bộ (1,8m × 2,0m)',
    title: 'Màn Khung Inox Cao Cấp Rộng 1,8m × Dài 2,0m',
    caption: 'Trọn gói khung Inox chịu lực + màn tuyn lạnh thêu hoa & công thợ lắp tận nơi.',
    priceHighlight: '1Tr/bộ',
  },
];

const QUICK_PRICE_LEDGER = [
  {
    label: 'Màn Khung 1,8m×2m',
    price: '1.000.000đ',
    sub: 'Trọn bộ cả lắp',
    tab: 'man-khung-1tr',
  },
  {
    label: 'Rèm Vải Cản Nắng',
    price: '600.000đ/m',
    sub: 'Đủ phụ kiện & lắp',
    tab: 'fabric-600k',
  },
  {
    label: 'Đệm Everhome',
    price: '2.850.000đ',
    sub: 'Bảo hành 10 năm',
    tab: 'man-khung-1tr',
  },
  {
    label: 'Bạt Xếp & Tự Cuốn',
    price: '220k–350k',
    sub: 'Đơn giá / m² cả lắp',
    tab: 'awning-350k',
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
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_GALLERY_SLIDES[activeSlideIndex];

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev - 1 + HERO_GALLERY_SLIDES.length) % HERO_GALLERY_SLIDES.length);
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev + 1) % HERO_GALLERY_SLIDES.length);
  };

  return (
    <section className="border-b border-[#E5DEC9] bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F3ECE0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-11 lg:py-13">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-center">
          {/* Left Column: Concise Luxury Brand Intro & Animated Price Ledger (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE0] border border-[#DFD3BE] text-stone-800 text-xs font-bold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#9A6F2E] shrink-0" />
              <span>Showroom Chính Hãng · Chợ Cháy, Ứng Hòa, Hà Nội</span>
            </div>

            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-[#1C1917] leading-[1.16] tracking-tight">
                Chăn Ga Gối Đệm &amp; Mành Rèm{' '}
                <span className="text-[#8C6224]">Tuyến Hoa</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-normal leading-relaxed max-w-xl">
                Báo giá niêm yết tại xưởng — Miễn phí mang mẫu, đo đạc và lắp đặt hoàn thiện tận nhà trong ngày.
              </p>
            </div>

            {/* Unified Architectural 4-Column Price Ledger with Staggered Hover Lift */}
            <div className="bg-white rounded-2xl border border-[#E5DEC9] shadow-[0_10px_30px_-12px_rgba(28,25,23,0.07)] grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-[#EAE3D5] overflow-hidden">
              {QUICK_PRICE_LEDGER.map((item, idx) => (
                <motion.button
                  key={item.label}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
                  whileHover={{ y: -2 }}
                  onClick={() => onSelectMainTab && onSelectMainTab(item.tab)}
                  className="p-3.5 sm:p-4 text-left hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
                >
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#9A6F2E] truncate">
                    {item.label}
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-extrabold text-[#1C1917] mt-1 tabular-nums group-hover:text-[#8C6224] transition-colors">
                    {item.price}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5 truncate">{item.sub}</div>
                </motion.button>
              ))}
            </div>

            {/* Primary & Secondary CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <motion.button
                type="button"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={onExploreProducts}
                className="min-h-[46px] px-6 py-3 bg-[#1C1917] hover:bg-[#2E2924] text-[#F5E6C8] rounded-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2.5 shadow-sm cursor-pointer"
              >
                <span>Xem Bộ Sưu Tập &amp; Bảng Giá</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </motion.button>

              <motion.a
                href={`tel:${STORE_INFO.hotline}`}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="min-h-[46px] px-5 py-3 bg-white hover:bg-[#F3ECE0] text-[#1C1917] border border-[#D6C7B2] rounded-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#9A6F2E]" />
                <span>Gọi Ngay: {STORE_INFO.hotlineDisplay}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Cinematic Scene-Transition Gallery Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl border border-[#E2D9C8] p-3.5 shadow-[0_18px_44px_-15px_rgba(28,25,23,0.12)] space-y-3">
              <div
                onClick={() => onSelectMainTab && onSelectMainTab(currentSlide.tabTarget)}
                className="relative h-64 sm:h-74 rounded-2xl overflow-hidden bg-[#1C1917] cursor-pointer group"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide.id}
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    initial={{ opacity: 0, scale: 1.08, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.97, filter: 'blur(2px)' }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/92 via-[#141210]/25 to-transparent pointer-events-none" />

                {/* Top Price/Brand Badge */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`badge-${currentSlide.id}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="absolute top-3.5 left-3.5 bg-[#1C1917]/90 backdrop-blur-md text-[#F5E6C8] border border-[#D4AF37]/50 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{currentSlide.badge}</span>
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next Scene Navigation Controls */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label="Ảnh trước"
                    onClick={handlePrevSlide}
                    className="w-8 h-8 rounded-lg bg-[#1C1917]/80 hover:bg-[#1C1917] text-[#F5E6C8] border border-[#D4AF37]/40 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Ảnh tiếp theo"
                    onClick={handleNextSlide}
                    className="w-8 h-8 rounded-lg bg-[#1C1917]/80 hover:bg-[#1C1917] text-[#F5E6C8] border border-[#D4AF37]/40 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide-up Caption Overlay */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${currentSlide.id}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.4, delay: 0.06 }}
                    className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1 pointer-events-none"
                  >
                    <h3 className="text-base sm:text-lg font-bold font-display leading-snug">
                      {currentSlide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E7DAC1] font-normal leading-snug line-clamp-1">
                      {currentSlide.caption}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Animated Gold Scene Progress Bar */}
                <motion.div
                  key={`progress-${activeSlideIndex}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5.5, ease: 'linear' }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left"
                />
              </div>

              {/* 5 Thumbnail Scene Selectors */}
              <div className="grid grid-cols-5 gap-2">
                {HERO_GALLERY_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === activeSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`relative h-14 sm:h-15 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-[#9A6F2E] ring-2 ring-[#9A6F2E]/35 opacity-100 scale-[1.02]'
                          : 'border-[#E5DEC9] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent flex items-end justify-center pb-1">
                        <span className="text-[10px] font-bold text-[#F5E6C8] font-mono">
                          {slide.priceHighlight}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
