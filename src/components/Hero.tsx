import React from 'react';
import { STORE_INFO } from '../data/products';
import {
  ArrowRight,
  ShieldCheck,
  Ruler,
  Truck,
  Award,
  Sparkles,
  MapPin,
  BookOpen,
  Video,
  Palette,
  Camera,
  Compass,
  PhoneCall,
  LayoutGrid,
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenEstimator: () => void;
  onOpenVisualizer: () => void;
  onOpenArticles?: () => void;
  onSelectMainTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenEstimator,
  onOpenVisualizer,
  onOpenArticles,
  onSelectMainTab,
}) => {
  const quickLaunchItems = [
    {
      id: 'fabric-600k',
      label: 'Rèm Vải 600k',
      sub: 'Cả lắp đặt',
      badge: '13 Mẫu',
      icon: Sparkles,
      bg: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      id: 'motorized-curtains',
      label: 'Rèm Tự Động',
      sub: 'Video 4K',
      badge: '4.0',
      icon: Video,
      bg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    {
      id: 'bamboo-artworks',
      label: 'Mành Tre Vẽ',
      sub: 'Tranh TMHC',
      badge: '38 Mẫu',
      icon: Palette,
      bg: 'bg-amber-50 text-amber-950 border-amber-200',
    },
    {
      id: 'bead-curtains',
      label: 'Mành Hạt Gỗ',
      sub: 'Kết tranh',
      badge: '600k',
      icon: Compass,
      bg: 'bg-orange-50 text-orange-950 border-orange-200',
    },
    {
      id: 'real-projects',
      label: 'Công Trình',
      sub: 'Ảnh thực tế',
      badge: 'Thật 100%',
      icon: Camera,
      bg: 'bg-stone-100 text-stone-900 border-stone-300',
    },
    {
      id: 'curtain-calculator',
      label: 'Tính Giá Rèm',
      sub: 'Báo giá 3s',
      badge: 'Miễn phí',
      icon: Ruler,
      bg: 'bg-sky-50 text-sky-900 border-sky-200',
    },
    {
      id: 'room-visualizer',
      label: 'Thử Rèm Ảo',
      sub: 'Phối màu',
      badge: '3D',
      icon: LayoutGrid,
      bg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    },
    {
      id: 'curtain-articles',
      label: 'Cẩm Nang',
      sub: 'Kinh nghiệm',
      badge: 'Mới',
      icon: BookOpen,
      bg: 'bg-rose-50 text-rose-900 border-rose-200',
    },
  ];

  return (
    <div className="relative border-b border-stone-200 overflow-hidden bg-gradient-to-b from-[#F5F4EE] via-[#FBFBFA] to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Mobile Super-App Launcher (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-5">
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-amber-950">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Chợ Cháy, Ứng Hòa, Hà Nội</span>
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Xưởng May Đo Trực Tiếp</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="font-mono tabular-nums text-emerald-800 font-extrabold underline decoration-emerald-600/60"
              >
                {STORE_INFO.hotlineDisplay}
              </a>
            </div>

            {/* Hero Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-extrabold text-stone-950 tracking-tight leading-[1.28] text-balance">
              Mành Rèm Cao Cấp &amp; Chăn Ga Gối Đệm Tuyến Hoa
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base md:text-lg text-stone-800 font-medium leading-relaxed max-w-2xl">
              Ưu đãi trọn gói:{' '}
              <strong className="text-amber-950 font-extrabold bg-amber-200 px-1.5 py-0.5 rounded">
                Rèm vải chống nắng cao cấp 600.000đ / mét ngang (cả công thi công lắp đặt)
              </strong>
              . Chuyên Rèm tự động thông minh 4.0, 38 mẫu Mành tre vẽ tranh phong thủy, Đệm Vikosan, Sông Hồng, Everon &amp; Kymdan.
            </p>

            {/* Mobile Super-App Quick Launcher Grid (8 tactile shortcuts) */}
            <div className="bg-white rounded-2xl p-2.5 sm:p-3.5 border border-stone-300 shadow-xs">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-stone-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Menu Nhanh Phiên Bản Mobile (Chạm 1 Lần)</span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono tabular-nums text-amber-900 font-extrabold">
                  Hotline: {STORE_INFO.hotlineDisplay}
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-1.5 sm:gap-2">
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
                      className="group relative flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-400 transition-all active:scale-95 min-h-[70px] cursor-pointer"
                    >
                      <span className="absolute -top-1 right-1 px-1 py-0.2 rounded bg-stone-900 text-amber-300 text-[9px] font-bold font-mono leading-tight">
                        {item.badge}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform ${item.bg}`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-stone-950 mt-1 leading-snug whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="text-[10px] font-medium text-stone-600 leading-tight whitespace-nowrap hidden sm:block">
                        {item.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTAs: Touch-friendly 2-button mobile row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => (onSelectMainTab ? onSelectMainTab('fabric-600k') : onExploreProducts())}
                className="min-h-[46px] px-3 sm:px-5 py-2.5 bg-stone-900 hover:bg-stone-800 active:scale-98 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Rèm Vải 600k/m</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="min-h-[46px] px-3 sm:px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 active:scale-98 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span>Gọi {STORE_INFO.hotlineDisplay}</span>
              </a>

              <button
                type="button"
                onClick={onOpenEstimator}
                className="col-span-2 sm:col-span-1 min-h-[44px] px-3.5 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Ruler className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Dự Toán Kích Thước Cửa &amp; Báo Giá Tự Động</span>
              </button>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-2.5 border-t border-stone-200 grid grid-cols-3 gap-1 sm:gap-4 text-[11px] sm:text-xs font-bold text-stone-800">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span className="whitespace-nowrap">600k/m cả lắp</span>
              </div>
              <div className="flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 shrink-0" />
                <span className="whitespace-nowrap">Đo tận nhà</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-700 shrink-0" />
                <span className="whitespace-nowrap">Bảo hành 5 năm</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Real Photography Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-stone-200 shadow-lg p-2.5 sm:p-4 overflow-hidden">
              <div className="space-y-2.5">
                {/* Main Authentic Handover Photo by Mr. Tuyen Hoa */}
                <div className="relative h-48 sm:h-64 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 group">
                  <img
                    src="/assets/aistudio/IMG_5314_ae0205c4.PNG"
                    alt="Anh Tuyến trực tiếp bàn giao bộ rèm vải chống nắng trọn gói 600.000đ/m ngang cả công lắp đặt"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-[1.03] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Verified Real Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-amber-400 text-stone-950 text-[11px] sm:text-xs font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>Trọn Gói 600.000đ / m Ngang Cả Lắp Đặt</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wide block">
                      Chủ Cửa Hàng Tuyến Hoa Trực Tiếp Thi Công
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold font-display leading-snug text-white">
                      Rèm Vải Cản Nắng Cao Cấp – Đồng Giá 600.000đ/m Ngang
                    </h3>
                  </div>
                </div>

                {/* Two authentic thumbnail cards */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Real Ancestral Room Curtain */}
                  <div
                    onClick={() => onSelectMainTab && onSelectMainTab('fabric-600k')}
                    className="relative h-20 sm:h-24 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 p-2 flex flex-col justify-end group cursor-pointer"
                  >
                    <img
                      src="/assets/aistudio/IMG_5312_c3f3e101.PNG"
                      alt="Rèm Tuyến Hoa - Đẳng cấp được khẳng định"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="relative text-white z-10">
                      <div className="text-xs font-bold leading-snug truncate">Rèm Phòng Thờ &amp; Sập Gụ</div>
                      <div className="text-[11px] font-mono tabular-nums font-bold text-amber-300">600.000 đ/m ngang</div>
                    </div>
                  </div>

                  {/* Real Villa Cream 2-Layer Curtain */}
                  <div
                    onClick={() => onSelectMainTab && onSelectMainTab('motorized-curtains')}
                    className="relative h-20 sm:h-24 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 p-2 flex flex-col justify-end group cursor-pointer"
                  >
                    <img
                      src="/assets/aistudio/IMG_5310_8f861c11.JPG"
                      alt="Hệ rèm vải 2 lớp kem sữa biệt thự cao cấp Tuyến Hoa"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="relative text-white z-10">
                      <div className="text-xs font-bold leading-snug truncate">Rèm Âm Trần Tự Động</div>
                      <div className="text-[11px] font-mono font-bold text-emerald-300">Điều khiển App / Remote</div>
                    </div>
                  </div>
                </div>

                {/* Commitment Banner */}
                <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-300 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 truncate">
                    <Award className="w-4 h-4 text-amber-800 shrink-0" />
                    <span className="font-bold text-stone-900 text-xs truncate">
                      Chợ Cháy, Ứng Hòa · Đo tại nhà miễn phí
                    </span>
                  </div>
                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="text-amber-950 font-extrabold hover:underline font-mono tabular-nums text-xs shrink-0 ml-2"
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

