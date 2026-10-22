import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REAL_PROJECTS, RealProjectItem } from '../data/realProjects';
import { STORE_INFO } from '../data/products';
import {
  Camera,
  MapPin,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  X,
  Maximize2,
  Ruler,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart
} from 'lucide-react';

interface RealProjectsGalleryProps {
  onRequestMeasurement?: (curtainType: string, note: string) => void;
  onOpenChat?: () => void;
}

export const RealProjectsGallery: React.FC<RealProjectsGalleryProps> = ({
  onRequestMeasurement,
  onOpenChat,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<RealProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Công Trình', count: REAL_PROJECTS.length },
    { id: 'honeycomb', label: 'Rèm & Vách Tổ Ong', count: REAL_PROJECTS.filter((p) => p.category === 'honeycomb').length },
    { id: 'curtain', label: 'Rèm Vải 2 Lớp', count: REAL_PROJECTS.filter((p) => p.category === 'curtain').length },
    { id: 'zebra', label: 'Rèm Cầu Vồng', count: REAL_PROJECTS.filter((p) => p.category === 'zebra').length },
    { id: 'full-house', label: 'Toàn Cảnh Nhà Phố', count: REAL_PROJECTS.filter((p) => p.category === 'full-house').length },
    { id: 'story', label: 'Đại Gia Đình Tuyến Hoa', count: REAL_PROJECTS.filter((p) => p.category === 'story').length },
  ];

  const filtered = REAL_PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/70">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Hình Ảnh Công Trình Thực Tế 100%</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-stone-900 tracking-tight">
            Thợ Tuyến Hoa Thi Công Tại Ứng Hòa
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
            Không dùng ảnh ảo hay ảnh mẫu 3D trên mạng. Toàn bộ hình ảnh dưới đây đều do đội thợ Tuyến Hoa trực tiếp đo đạc, may đo và bàn giao tại nhà khách hàng ở Chợ Cháy và các xã thuộc huyện Ứng Hòa.
          </p>
        </div>

        {/* Local Guarantee Pill */}
        <div className="shrink-0 flex items-center gap-3 bg-stone-50 border border-stone-200 p-2.5 sm:p-3 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-amber-900 text-white flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-amber-300" />
          </div>
          <div className="text-xs">
            <div className="font-bold text-stone-900">Xe chở &amp; Lắp đặt tận nhà</div>
            <div className="text-stone-500 text-[11px]">Toàn huyện Ứng Hòa &amp; lân cận</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="overflow-x-auto scrollbar-none snap-x touch-pan-x -mx-2 px-2">
        <div className="flex items-center gap-2 min-w-max">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 min-h-[38px] ${
                selectedCategory === c.id
                  ? 'bg-amber-950 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
              }`}
            >
              <span>{c.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedCategory === c.id ? 'bg-amber-800 text-amber-100' : 'bg-stone-200 text-stone-600'
                }`}
              >
                {c.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between ${
              item.category === 'story' ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {/* Image Container with Hover zoom */}
            <div
              className={`relative overflow-hidden bg-stone-200 cursor-pointer ${
                item.category === 'story'
                  ? 'h-64 sm:h-80'
                  : item.aspect === 'portrait'
                  ? 'h-72 sm:h-80'
                  : 'h-56 sm:h-64'
              }`}
              onClick={() => setActiveModalProject(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/95 text-stone-900 px-2.5 py-1 rounded-lg backdrop-blur-xs shadow-xs flex items-center gap-1">
                  {item.category === 'story' ? (
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                  ) : (
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  )}
                  <span>{item.tag}</span>
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProject(item);
                  }}
                  className="w-8 h-8 rounded-lg bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors pointer-events-auto"
                  title="Xem ảnh phóng to"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Overlay Title & Location */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold mb-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold font-display leading-tight text-white drop-shadow-xs">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-3.5 sm:p-4 space-y-3 flex-1 flex flex-col justify-between">
              <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                {item.description}
              </p>

              {/* Specs Pills */}
              <div className="space-y-1.5 pt-2 border-t border-stone-200/80">
                <div className="flex flex-wrap gap-1.5">
                  {item.specs.slice(0, 3).map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded-md font-medium"
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(item)}
                  className="text-xs font-bold text-amber-950 hover:text-amber-800 flex items-center gap-1 transition-colors"
                >
                  <span>Xem chi tiết ảnh</span>
                  <span>→</span>
                </button>

                {item.category !== 'story' ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (onRequestMeasurement) {
                        onRequestMeasurement(item.title, `Hẹn tư vấn mẫu giống công trình: ${item.title}`);
                      }
                    }}
                    className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                  >
                    <Ruler className="w-3 h-3 text-amber-300" />
                    <span>Hẹn thợ đo mẫu này</span>
                  </button>
                ) : (
                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>Hotline Tuyến Hoa</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Proof Strip */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-display">
              Bạn ưng ý mẫu rèm nào ở trên?
            </h4>
            <p className="text-xs text-stone-300">
              Chỉ cần chụp màn hình hoặc gọi ngay, thợ Tuyến Hoa sẽ mang đúng mẫu vải đó đến tận nhà quý khách tại Ứng Hòa để đo đạc và báo giá miễn phí.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
          {onOpenChat && (
            <button
              type="button"
              onClick={onOpenChat}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 min-h-[42px]"
            >
              <MessageCircle className="w-4 h-4 text-amber-300" />
              <span>Gửi ảnh qua Chat</span>
            </button>
          )}

          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="flex-1 sm:flex-none px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md min-h-[42px]"
          >
            <PhoneCall className="w-4 h-4 text-stone-900" />
            <span>Gọi {STORE_INFO.hotlineDisplay}</span>
          </a>
        </div>
      </div>

      {/* High-Resolution Zoom Lightbox Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-stone-800 bg-stone-950/80">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-400 text-stone-950">
                    {activeModalProject.tag}
                  </span>
                  <span className="text-xs text-stone-400 truncate flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    {activeModalProject.location}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors shrink-0"
                  aria-label="Đóng xem ảnh"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[420px]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Modal Information & CTAs */}
              <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
                  {activeModalProject.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-900 border border-stone-800 p-2 rounded-lg text-stone-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-800/80">
                  <div className="text-xs text-stone-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Cam kết bảo hành chính hãng tại chỗ · Miễn phí đo đạc Ứng Hòa</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {activeModalProject.category !== 'story' && onRequestMeasurement && (
                      <button
                        type="button"
                        onClick={() => {
                          onRequestMeasurement(
                            activeModalProject.title,
                            `Khách yêu cầu hẹn thợ mang mẫu đo trực tiếp tại nhà mẫu: ${activeModalProject.title}`
                          );
                          setActiveModalProject(null);
                        }}
                        className="flex-1 sm:flex-none px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Ruler className="w-4 h-4 text-stone-900" />
                        <span>Đặt thợ mang mẫu đo tại nhà</span>
                      </button>
                    )}

                    <a
                      href={`tel:${STORE_INFO.hotline}`}
                      className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Gọi {STORE_INFO.hotlineDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
