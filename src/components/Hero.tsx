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
    label: 'Màn Khung Inox 1,8m × 2,0m',
    price: '1.000.000đ / bộ',
    sub: 'Trọn gói cả khung & công lắp',
    tab: 'man-khung-1tr',
  },
  {
    label: 'Rèm Vải Cản Nắng May Đo',
    price: '600.000đ / m',
    sub: 'Đủ phụ kiện thanh treo & lắp',
    tab: 'fabric-600k',
  },
  {
    label: 'Đệm Lò Xo Túi Everhome',
    price: '2.850.000đ / tấm',
    sub: 'Chính hãng · Bảo hành 10 năm',
    tab: 'man-khung-1tr',
  },
  {
    label: 'Bạt Xếp & Bạt Tự Cuốn',
    price: '220k – 350k / m²',
    sub: 'Đơn giá hoàn thiện cả lắp',
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
    <section className="border-b border-[#E5DEC9] bg-gradient-to-b from-[#FFFFFF] via-[#FCFBF8] to-[#F6EFE2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-11 lg:py-13">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-center">
          {/* Left Column: Bright Luxury Brand Intro & Large Clear Price Ledger (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF2E1] border border-[#DBC498] text-[#6E4710] text-xs sm:text-sm font-extrabold tracking-wide uppercase">
              <MapPin className="w-4 h-4 text-[#8A5A14] shrink-0" />
              <span>Showroom Chính Hãng · Chợ Cháy, Ứng Hòa, Hà Nội</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-display font-extrabold text-[#1C1917] leading-[1.18] tracking-tight">
                Chăn Ga Gối Đệm &amp; Mành Rèm{' '}
                <span className="text-[#8A5A14]">Tuyến Hoa</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-stone-700 font-medium leading-relaxed max-w-2xl">
                Báo giá niêm yết minh bạch tại xưởng — Miễn phí mang mẫu, đo đạc và lắp đặt hoàn thiện tận nhà trong ngày.
              </p>
            </div>

            {/* Bright Light-Mode 2x2 Price Ledger Cards with Full-Width Horizontal Lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {QUICK_PRICE_LEDGER.map((item, idx) => (
                <motion.button
                  key={item.label}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
                  whileHover={{ y: -2 }}
                  onClick={() => onSelectMainTab && onSelectMainTab(item.tab)}
                  className="p-4 sm:p-5 text-left bg-white hover:bg-[#FCF6E8] rounded-2xl border-2 border-[#E2D4B8] hover:border-[#C59B4D] shadow-[0_8px_24px_-10px_rgba(140,98,36,0.1)] transition-all cursor-pointer flex flex-col justify-between gap-2 group"
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span className="text-xs sm:text-sm uppercase tracking-wide font-extrabold text-[#8A5A14]">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#7A4E0E] tabular-nums">
                    {item.price}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-600">
                    {item.sub}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Bright Champagne Gold & Alabaster CTA Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <motion.button
                type="button"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={onExploreProducts}
                className="min-h-[52px] px-7 py-3.5 bg-gradient-to-r from-[#F3E1BE] via-[#EBD19E] to-[#E3C183] hover:from-[#ECD5AA] hover:to-[#DC85] text-[#1C1917] border-2 border-[#C59B4D] rounded-2xl text-base sm:text-lg font-extrabold transition-all flex items-center gap-2.5 shadow-sm cursor-pointer"
              >
                <span>Xem Bộ Sưu Tập &amp; Bảng Giá</span>
                <ArrowRight className="w-5 h-5 text-[#7A4E0E]" />
              </motion.button>

              <motion.a
                href={`tel:${STORE_INFO.hotline}`}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="min-h-[52px] px-6 py-3.5 bg-white hover:bg-[#FAF3E4] text-[#1C1917] border-2 border-[#D6C4A4] rounded-2xl text-base sm:text-lg font-extrabold transition-all flex items-center gap-2.5 shadow-2xs"
              >
                <PhoneCall className="w-5 h-5 text-[#8A5A14]" />
                <span>Gọi Ngay: {STORE_INFO.hotlineDisplay}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Bright Light-Mode Gallery Showcase Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl border-2 border-[#E2D4B8] p-4 shadow-[0_18px_44px_-15px_rgba(140,98,36,0.14)] space-y-3.5">
              <div
                onClick={() => onSelectMainTab && onSelectMainTab(currentSlide.tabTarget)}
                className="rounded-2xl overflow-hidden border border-[#E6DAC3] bg-[#FAF6EE] cursor-pointer group"
              >
                {/* Image Viewport */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F5EFE4]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide.id}
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      initial={{ opacity: 0, scale: 1.07 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Bright Frosted Price/Brand Badge */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`badge-${currentSlide.id}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                      className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#1C1917] border border-[#C69C4E] text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#8A5A14] shrink-0" />
                      <span>{currentSlide.badge}</span>
                    </motion.div>
                  </AnimatePresence>

                  {/* Bright Prev / Next Scene Navigation Controls */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      type="button"
                      aria-label="Ảnh trước"
                      onClick={handlePrevSlide}
                      className="w-9 h-9 rounded-xl bg-white/95 hover:bg-[#FAF2E1] text-[#1C1917] border border-[#D4B882] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Ảnh tiếp theo"
                      onClick={handleNextSlide}
                      className="w-9 h-9 rounded-xl bg-white/95 hover:bg-[#FAF2E1] text-[#1C1917] border border-[#D4B882] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Animated Gold Scene Progress Bar */}
                  <motion.div
                    key={`progress-${activeSlideIndex}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.5, ease: 'linear' }}
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C5943A] origin-left"
                  />
                </div>

                {/* Bright Light-Colored Caption Box Below Photo for Maximum Readability */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${currentSlide.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="p-4 bg-[#FCF9F2] border-t border-[#E6DAC3] space-y-1"
                  >
                    <h3 className="text-base sm:text-lg font-extrabold font-display text-[#1C1917] leading-snug">
                      {currentSlide.title}
                    </h3>
                    <p className="text-sm sm:text-base text-stone-700 font-medium leading-snug">
                      {currentSlide.caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 5 Bright Thumbnail Scene Selectors */}
              <div className="grid grid-cols-5 gap-2">
                {HERO_GALLERY_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === activeSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`relative h-15 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-[#9A681C] ring-2 ring-[#9A681C]/30 opacity-100 scale-[1.02]'
                          : 'border-[#E2D4B8] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-white/92 border-t border-[#E2D4B8] py-0.5 text-center">
                        <span className="text-[11px] font-extrabold text-[#1C1917] font-mono">
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
