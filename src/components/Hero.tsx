import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/products';
import {
  ArrowRight,
  ShieldCheck,
  Ruler,
  Sparkles,
  MapPin,
  BookOpen,
  Video,
  Palette,
  Camera,
  Compass,
  PhoneCall,
  Crown,
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenEstimator: () => void;
  onOpenVisualizer: () => void;
  onOpenArticles?: () => void;
  onSelectMainTab?: (tab: string) => void;
}

const HERO_GALLERY_SLIDES = [
  {
    id: 'bat-xep-350k',
    tabTarget: 'awning-350k',
    image: '/assets/aistudio/IMG_6787_3dc0c93a.JPG',
    badge: 'Bạt Mái Xếp 350.000đ / 1 m² (Cả Lắp)',
    title: 'Bạt Mái Xếp Lượn Sóng & Mái Hiên Tự Động',
    priceHighlight: '350k/m²',
  },
  {
    id: 'rem-vai-600k',
    tabTarget: 'fabric-600k',
    image: '/assets/aistudio/IMG_5314_ae0205c4.PNG',
    badge: 'Rèm Vải 600.000đ / m Ngang (Cả Lắp)',
    title: 'Rèm Vải Cản Nắng Cao Cấp Tuyến Hoa',
    priceHighlight: '600k/m',
  },
  {
    id: 'rem-phong-tho',
    tabTarget: 'fabric-600k',
    image: '/assets/aistudio/IMG_5312_c3f3e101.PNG',
    badge: 'Không Gian Thờ Tự & Sập Gụ',
    title: 'Rèm Phòng Thờ & Mành Tre Phong Thủy',
    priceHighlight: 'Phong thủy',
  },
  {
    id: 'rem-am-tran-40',
    tabTarget: 'motorized-curtains',
    image: '/assets/aistudio/IMG_5310_8f861c11.JPG',
    badge: 'SmartHome 4.0 Chuẩn Biệt Thự',
    title: 'Rèm Vải 2 Lớp Âm Trần Tự Động Sang Trọng',
    priceHighlight: 'Tự động 4.0',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenEstimator,
  onOpenVisualizer,
  onOpenArticles,
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

  const quickLaunchItems = [
    {
      id: 'awning-350k',
      label: 'Bạt Xếp 350k',
      icon: Sparkles,
      bg: 'bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-950 border-emerald-400',
    },
    {
      id: 'fabric-600k',
      label: 'Rèm Vải 600k',
      icon: Crown,
      bg: 'bg-gradient-to-br from-amber-100 to-yellow-50 text-amber-950 border-amber-400',
    },
    {
      id: 'motorized-curtains',
      label: 'Rèm Tự Động',
      icon: Video,
      bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100/70 text-emerald-900 border-emerald-300',
    },
    {
      id: 'bamboo-artworks',
      label: 'Mành Tre',
      icon: Palette,
      bg: 'bg-gradient-to-br from-amber-50 to-orange-50 text-amber-950 border-amber-300',
    },
    {
      id: 'bead-curtains',
      label: 'Mành Hạt Gỗ',
      icon: Compass,
      bg: 'bg-gradient-to-br from-orange-50 to-amber-50 text-orange-950 border-orange-300',
    },
    {
      id: 'real-projects',
      label: 'Công Trình',
      icon: Camera,
      bg: 'bg-gradient-to-br from-stone-100 to-amber-50/60 text-stone-900 border-stone-300',
    },
    {
      id: 'curtain-calculator',
      label: 'Tính Giá',
      icon: Ruler,
      bg: 'bg-gradient-to-br from-sky-50 to-indigo-50/60 text-sky-900 border-sky-300',
    },
    {
      id: 'curtain-articles',
      label: 'Cẩm Nang',
      icon: BookOpen,
      bg: 'bg-gradient-to-br from-rose-50 to-amber-50/50 text-rose-900 border-rose-300',
    },
  ];

  return (
    <div className="relative border-b border-amber-300/60 overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#FFFDF9] to-white">
      {/* Ambient Chandelier Radial Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/4 w-[520px] h-[320px] rounded-full bg-amber-300/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-[420px] h-[280px] rounded-full bg-emerald-300/15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column: Spacious Royal Showroom Headline & Clean Price Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Concise Royal Kicker Strip */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-bold">
              <span className="luxury-sheen-auto inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-amber-200 border border-amber-400/80 shadow-xs text-xs font-extrabold uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Showroom Tuyến Hoa</span>
                <Sparkles className="w-3 h-3 text-amber-300 diamond-twinkle shrink-0" />
              </span>

              <span className="inline-flex items-center gap-1 text-stone-700 font-semibold text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Chợ Cháy, Ứng Hòa, Hà Nội</span>
              </span>
            </div>

            {/* Hero Headline with Generous Line-Height & Breathing Room */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-display font-extrabold text-stone-950 tracking-tight leading-[1.24] text-balance">
              Chăn Ga Gối Đệm, Mành Rèm &amp; Bạt Mái Xếp{' '}
              <span className="luxury-gold-dark-text">Tuyến Hoa</span>
            </h1>

            {/* 2 Airy Visual Price Highlight Cards (replaces dense text paragraph) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div
                onClick={() => onSelectMainTab && onSelectMainTab('awning-350k')}
                className="luxury-card group cursor-pointer p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border border-emerald-400/80 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Bạt Mái Xếp &amp; Tự Động</span>
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-extrabold text-stone-950 mt-0.5">
                    350.000đ <span className="text-xs font-sans font-bold text-emerald-900">/ 1 m² cả lắp</span>
                  </div>
                </div>
                <span className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div
                onClick={() => onSelectMainTab && onSelectMainTab('fabric-600k')}
                className="luxury-card group cursor-pointer p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border border-amber-400/80 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 text-amber-600" />
                    <span>Rèm Vải Cản Nắng</span>
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-extrabold text-stone-950 mt-0.5">
                    600.000đ <span className="text-xs font-sans font-bold text-amber-900">/ m ngang cả lắp</span>
                  </div>
                </div>
                <span className="w-9 h-9 rounded-xl bg-amber-900 text-amber-200 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Clean, Badge-Free Quick Launcher Grid (4 columns for generous breathing room) */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
              {quickLaunchItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (onSelectMainTab) {
                        onSelectMainTab(item.id);
                      } else if (item.id === 'curtain-calculator') {
                        onOpenEstimator();
                      } else if (item.id === 'room-visualizer') {
                        onOpenVisualizer();
                      } else if (item.id === 'curtain-articles' && onOpenArticles) {
                        onOpenArticles();
                      } else {
                        onExploreProducts();
                      }
                    }}
                    className="luxury-sheen-hover group flex flex-col items-center justify-center py-3 px-2 rounded-2xl bg-white hover:bg-amber-50/70 border border-amber-200/80 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform ${item.bg}`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-stone-900 mt-1.5 leading-tight whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => (onSelectMainTab ? onSelectMainTab('awning-350k') : onExploreProducts())}
                className="luxury-sheen-auto min-h-[46px] px-5 py-2.5 bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-amber-200 border border-amber-400/80 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-[0_6px_20px_rgba(180,83,9,0.22)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0 diamond-twinkle" />
                <span>Xem Bạt 350k/m² &amp; Video Tự Động</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-amber-300" />
              </button>

              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="luxury-sheen-auto min-h-[46px] px-5 py-2.5 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white border border-emerald-400/70 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-[0_6px_20px_rgba(4,120,87,0.25)] flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Gọi {STORE_INFO.hotlineDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Royal Photo Showcase Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-stone-950 via-[#1C1612] to-stone-900 rounded-3xl border-2 border-amber-400/75 shadow-[0_20px_50px_-10px_rgba(180,83,9,0.28)] p-3 sm:p-4 overflow-hidden">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-3" />

              <div className="space-y-3">
                {/* Large Featured Photo Slide */}
                <div
                  onClick={() => onSelectMainTab && onSelectMainTab(currentSlide.tabTarget)}
                  className="luxury-sheen-auto relative h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-stone-900 border border-amber-400/50 group cursor-pointer"
                >
                  <img
                    key={currentSlide.image}
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.04] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-stone-950 text-xs font-extrabold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-stone-950" />
                    <span>{currentSlide.badge}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base sm:text-lg font-extrabold font-display leading-snug text-white">
                      {currentSlide.title}
                    </h3>
                  </div>
                </div>

                {/* 4 Clean Photo Switchers */}
                <div className="grid grid-cols-4 gap-2">
                  {HERO_GALLERY_SLIDES.map((slide, idx) => {
                    const isCurrent = idx === activeSlideIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActiveSlideIndex(idx)}
                        className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border transition-all cursor-pointer group ${
                          isCurrent
                            ? 'border-amber-400 ring-2 ring-amber-400/60 scale-[1.02]'
                            : 'border-stone-700 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                        <div className="absolute bottom-1 left-1 right-1 text-center">
                          <span className="text-[10px] font-extrabold text-amber-300 font-mono truncate block">
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
    </div>
  );
};
