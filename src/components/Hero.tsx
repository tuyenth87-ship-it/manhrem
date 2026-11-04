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
    id: 'showroom-tuyen-hoa-2tang',
    tabTarget: 'catalog',
    image: '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
    badge: 'Showroom 2 Tầng · Chợ Cháy',
    title: 'Showroom Chăn Ga Gối Đệm & Rèm Tuyến Hoa',
    caption: 'Chợ Cháy, Ứng Hòa · Trưng bày đệm chính hãng & rèm cao cấp.',
    priceHighlight: 'Showroom',
  },
  {
    id: 'dem-cao-su-everhome',
    tabTarget: 'catalog',
    image: '/assets/aistudio/dem_cao_su_everhome_tuyen_hoa.png',
    badge: '4.850.000đ · 100% Thiên Nhiên',
    title: 'Nệm Cao Su 100% Thiên Nhiên Everhome',
    caption: 'Cấu trúc lỗ thoáng tròn mặt trên & lỗ vuông nâng đỡ mặt dưới.',
    priceHighlight: '4,85Tr',
  },
  {
    id: 'dem-lo-xo-everhome-gold',
    tabTarget: 'catalog',
    image: '/assets/aistudio/dem_lo_xo_everhome_tuyen_hoa.png',
    badge: '2.850.000đ · Bảo Hành 10 Năm',
    title: 'Đệm Lò Xo Túi Độc Lập & Gold 3 Viền Everhome',
    caption: 'Êm ái chuẩn khách sạn 5 sao, giao miễn phí tận giường.',
    priceHighlight: '2,85Tr',
  },
  {
    id: 'rem-to-ong-cua-vom',
    tabTarget: 'catalog',
    image: '/assets/aistudio/vach_rem_to_ong_cua_vom_tuyen_hoa.png',
    badge: '650.000đ / m² · Ngăn Lạnh 98%',
    title: 'Vách Rèm Tổ Ong & Cửa Vòm',
    caption: 'Tráng bạc 2 lớp giữ nhiệt điều hòa, xếp gọn sát tường.',
    priceHighlight: '650k/m²',
  },
  {
    id: 'man-khung-1tr',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/IMG_4550_18a407c3.JPG',
    badge: '1.000.000đ / Bộ (1,8m × 2,0m)',
    title: 'Màn Khung Inox Rộng 1,8m × Dài 2,0m',
    caption: 'Trọn gói khung Inox + màn tuyn thêu hoa & công lắp.',
    priceHighlight: '1Tr/bộ',
  },
];

const QUICK_PRICE_LEDGER = [
  {
    label: 'Nệm Cao Su Everhome',
    price: '5.500.000đ / tấm',
    sub: '100% thiên nhiên · BH 10 năm',
    tab: 'catalog',
  },
  {
    label: 'Đệm Lò Xo Everhome',
    price: '2.850.000đ / tấm',
    sub: 'Lò xo túi & Gold 3 viền',
    tab: 'catalog',
  },
  {
    label: 'Màn Khung 1,8m × 2,0m',
    price: '1.000.000đ / bộ',
    sub: 'Trọn gói cả khung & lắp',
    tab: 'man-khung-1tr',
  },
  {
    label: 'Rèm Vải & Bạt Xếp',
    price: '350k – 600k',
    sub: 'Đo đạc & lắp đặt tận nhà',
    tab: 'fabric-600k',
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
    <section className="border-b border-[#E5DEC9] bg-gradient-to-b from-[#FFFFFF] via-[#FCFBF8] to-[#F6F1E7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-11 lg:py-13">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-center">
          {/* Left Column: Refined Brand Intro & Architectural Price Ledger (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-[#8A6421] text-xs sm:text-sm font-medium tracking-wider uppercase bg-[#FAF6EE] px-3.5 py-1.5 rounded-full border border-[#E5DEC9]">
              <MapPin className="w-3.5 h-3.5 text-[#8A6421] shrink-0" />
              <span>Showroom Chính Hãng · Chợ Cháy, Ứng Hòa, Hà Nội</span>
            </div>

            <div className="space-y-2.5">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-semibold text-[#1C1917] leading-[1.22] tracking-tight">
                Chăn Ga Gối Đệm &amp; Mành Rèm{' '}
                <span className="text-[#8A6421]">Tuyến Hoa</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-[17px] text-stone-600 font-normal leading-relaxed max-w-xl">
                Không gian nội thất phòng ngủ &amp; giải pháp mành rèm chính hãng · Miễn phí mang mẫu, khảo sát và lắp đặt tận nhà.
              </p>
            </div>

            {/* Clean, Architectural 2x2 Price Ledger Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
              {QUICK_PRICE_LEDGER.map((item, idx) => (
                <motion.button
                  key={item.label}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.06 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2 }}
                  onClick={() => onSelectMainTab && onSelectMainTab(item.tab)}
                  className="p-3.5 sm:p-4 text-left bg-white hover:bg-[#FAF7F2] rounded-2xl border border-[#E5DEC9] hover:border-[#C5A872] shadow-2xs transition-all cursor-pointer flex flex-col justify-between gap-1 group"
                >
                  <span className="text-xs font-medium text-[#8A6421] tracking-wide">
                    {item.label}
                  </span>
                  <div className="text-base sm:text-xl font-mono font-semibold text-[#1C1917] tabular-nums">
                    {item.price}
                  </div>
                  <div className="text-xs font-normal text-stone-500">
                    {item.sub}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Quiet-Luxury Obsidian & Alabaster CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.button
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={onExploreProducts}
                className="min-h-[46px] px-6 py-3 btn-luxury-primary rounded-xl text-sm sm:text-base font-medium transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <span>Khám Phá Bộ Sưu Tập</span>
                <ArrowRight className="w-4 h-4 text-[#E5C98B]" />
              </motion.button>

              <motion.a
                href={`tel:${STORE_INFO.hotline}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="min-h-[46px] px-5 py-3 bg-white hover:bg-[#FAF7F2] text-[#1C1917] border border-[#D8CEBC] rounded-xl text-sm sm:text-base font-medium transition-all flex items-center gap-2 shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#8A6421]" />
                <span className="font-mono">{STORE_INFO.hotlineDisplay}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Seamless Crossfade Gallery Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl border border-[#E5DEC9] p-3.5 shadow-[0_12px_32px_-16px_rgba(28,25,23,0.08)] space-y-3">
              <div
                onClick={() => onSelectMainTab && onSelectMainTab(currentSlide.tabTarget)}
                className="rounded-xl overflow-hidden border border-[#EAE2D3] bg-[#FAF7F2] cursor-pointer group"
              >
                {/* Image Viewport with Seamless Crossfade */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F5EFE4]">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={currentSlide.id}
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Frosted Price/Brand Badge */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`badge-${currentSlide.id}`}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#1C1917] border border-[#D8CEBC] text-xs font-medium px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs z-10"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8A6421] shrink-0" />
                      <span>{currentSlide.badge}</span>
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev / Next Scene Navigation Controls */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                    <button
                      type="button"
                      aria-label="Ảnh trước"
                      onClick={handlePrevSlide}
                      className="w-8 h-8 rounded-lg bg-white/95 hover:bg-[#FAF6EE] text-[#1C1917] border border-[#D8CEBC] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Ảnh tiếp theo"
                      onClick={handleNextSlide}
                      className="w-8 h-8 rounded-lg bg-white/95 hover:bg-[#FAF6EE] text-[#1C1917] border border-[#D8CEBC] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Subtle Gold Scene Progress Bar */}
                  <motion.div
                    key={`progress-${activeSlideIndex}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.5, ease: 'linear' }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#B38B45] origin-left z-10"
                  />
                </div>

                {/* Concise, Airy Caption Box Below Photo */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${currentSlide.id}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="p-3.5 bg-[#FCFBF8] border-t border-[#EAE2D3] space-y-0.5"
                  >
                    <h3 className="text-sm sm:text-base font-semibold font-display text-[#1C1917] leading-snug truncate">
                      {currentSlide.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed truncate">
                      {currentSlide.caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
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
                      className={`relative h-14 sm:h-15 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-[#1C1917] ring-1 ring-[#1C1917]/20 opacity-100'
                          : 'border-[#E5DEC9] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-white/92 border-t border-[#EAE2D3] py-0.5 text-center">
                        <span className="text-[10px] font-semibold text-[#1C1917] font-mono">
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
