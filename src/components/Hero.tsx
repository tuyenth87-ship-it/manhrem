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
    id: 'man-khung-1tr',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/IMG_4550_18a407c3.JPG',
    badge: '1.000.000đ / Bộ (1,8m × 2,0m)',
    title: 'Màn Khung Inox Cao Cấp 1,8m × 2,0m',
    priceHighlight: '1Tr / bộ',
  },
  {
    id: 'rem-vai-600k',
    tabTarget: 'fabric-600k',
    image: '/assets/aistudio/IMG_5314_ae0205c4.PNG',
    badge: '600.000đ / m Ngang (Cả Lắp)',
    title: 'Rèm Vải Gấm Cản Nắng 100%',
    priceHighlight: '600k / m',
  },
  {
    id: 'bat-xep-350k',
    tabTarget: 'awning-350k',
    image: '/assets/aistudio/IMG_6787_3dc0c93a.JPG',
    badge: '350.000đ / 1 m² (Cả Lắp)',
    title: 'Mái Bạt Xếp Lượn Sóng Hàn Quốc',
    priceHighlight: '350k / m²',
  },
  {
    id: 'tuong-ngoc-tuyen',
    tabTarget: 'man-khung-1tr',
    image: '/assets/aistudio/Bao_b__t__ng_Ng_c_Tuy_n_th__c_ng_b04e6f94.png',
    badge: '65.000đ / Chai Thủy Tinh 500ml',
    title: 'Tương Ngọc Tuyến Thủ Công Truyền Thống',
    priceHighlight: '65k / chai',
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

  return (
    <div className="border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Short, Clear, Easy-to-Read Summary (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-300 text-stone-900 text-sm font-bold">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
              <span>Chợ Cháy, Ứng Hòa, Hà Nội · ĐT/Zalo: {STORE_INFO.hotlineDisplay}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-stone-950 leading-tight">
              Màn Khung, Chăn Ga Gối Đệm &amp; Mành Rèm Tuyến Hoa
            </h1>

            <p className="text-base sm:text-lg text-stone-700 font-medium">
              Giá gốc tận xưởng – Miễn phí mang mẫu, giao hàng và lắp đặt tận nhà.
            </p>

            {/* 4 Short, Clear Price Cards */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('man-khung-1tr')}
                className="p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-300 text-left transition-colors cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-bold text-sky-950">
                  Màn Khung (1,8m × 2,0m)
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-stone-950 mt-0.5 tabular-nums">
                  1.000.000đ <span className="text-xs font-sans font-bold text-stone-700">/ bộ</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('fabric-600k')}
                className="p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-left transition-colors cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-bold text-amber-950">
                  Rèm Vải Cản Nắng
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-stone-950 mt-0.5 tabular-nums">
                  600.000đ <span className="text-xs font-sans font-bold text-stone-700">/ m</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('awning-350k')}
                className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-left transition-colors cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-bold text-emerald-950">
                  Bạt Mái Xếp Cả Lắp
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-stone-950 mt-0.5 tabular-nums">
                  350.000đ <span className="text-xs font-sans font-bold text-stone-700">/ m²</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectMainTab && onSelectMainTab('man-khung-1tr')}
                className="p-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-left transition-colors cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-bold text-stone-900">
                  Tương Ngọc Tuyến 500ml
                </div>
                <div className="text-lg sm:text-xl font-mono font-extrabold text-stone-950 mt-0.5 tabular-nums">
                  65.000đ <span className="text-xs font-sans font-bold text-stone-700">/ chai</span>
                </div>
              </button>
            </div>

            {/* 2 Clear Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onExploreProducts}
                className="min-h-[46px] px-5 py-3 bg-stone-950 hover:bg-stone-800 text-amber-300 rounded-xl text-sm sm:text-base font-extrabold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Xem Bảng Giá &amp; Sản Phẩm</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="min-h-[46px] px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-sm sm:text-base font-extrabold transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Gọi {STORE_INFO.hotlineDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Photo Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-stone-950 rounded-3xl border border-stone-800 p-3 space-y-2.5">
              <div
                onClick={() => onSelectMainTab && onSelectMainTab(currentSlide.tabTarget)}
                className="relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-stone-900 cursor-pointer group"
              >
                <img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-amber-400 text-stone-950 text-xs sm:text-sm font-extrabold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{currentSlide.badge}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base sm:text-lg font-extrabold font-display">
                    {currentSlide.title}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {HERO_GALLERY_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === activeSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`relative h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        isCurrent ? 'border-amber-400' : 'border-stone-700 opacity-65 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/45 flex items-end justify-center pb-1">
                        <span className="text-[11px] font-extrabold text-amber-300 font-mono">
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
    </div>
  );
};
