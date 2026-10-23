import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BAMBOO_ARTWORKS, BAMBOO_CATEGORIES, BambooArtwork, BambooCategory } from '../data/bambooCurtainArtworks';
import { STORE_INFO } from '../data/products';
import { 
  Search, 
  Sparkles, 
  Filter, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Copy, 
  PhoneCall, 
  Share2, 
  Ruler, 
  Info, 
  Eye, 
  SlidersHorizontal,
  Home,
  ShieldCheck,
  Palette,
  Flame,
  Award
} from 'lucide-react';

interface BambooArtworkShowcaseProps {
  onSelectForOrder?: (artwork: BambooArtwork) => void;
  onOpenEstimator?: (artworkType: string) => void;
}

export const BambooArtworkShowcase: React.FC<BambooArtworkShowcaseProps> = ({
  onSelectForOrder,
  onOpenEstimator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BambooCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxArtwork, setLightboxArtwork] = useState<BambooArtwork | null>(null);
  const [enhancedMode, setEnhancedMode] = useState<boolean>(true);
  const [showWatermark, setShowWatermark] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter artworks
  const filteredArtworks = useMemo(() => {
    return BAMBOO_ARTWORKS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        item.suitableRooms.some((r) => r.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxArtwork) return;
      if (e.key === 'Escape') {
        setLightboxArtwork(null);
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxArtwork, filteredArtworks]);

  const currentIndex = useMemo(() => {
    if (!lightboxArtwork) return -1;
    return filteredArtworks.findIndex((a) => a.id === lightboxArtwork.id);
  }, [lightboxArtwork, filteredArtworks]);

  const handleNextImage = () => {
    if (currentIndex < 0 || filteredArtworks.length === 0) return;
    const nextIdx = (currentIndex + 1) % filteredArtworks.length;
    setLightboxArtwork(filteredArtworks[nextIdx]);
  };

  const handlePrevImage = () => {
    if (currentIndex < 0 || filteredArtworks.length === 0) return;
    const prevIdx = (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    setLightboxArtwork(filteredArtworks[prevIdx]);
  };

  const copyAdText = (item: BambooArtwork) => {
    const text = `🎋 [SIÊU PHẨM MÀNH TRE NGHỆ THUẬT TUYẾN HOA]
✨ Mã tác phẩm: ${item.code} - ${item.title}
💰 Báo giá dự kiến: ${item.priceEstimate}
📏 Kích thước tiêu chuẩn: ${item.standardSize} (Nhận may đo theo kích thước riêng)
💎 Chất liệu: ${item.material}
🌟 Ý nghĩa phong thủy: ${item.meaning}
🏠 Thích hợp treo tại: ${item.suitableRooms.join(', ')}

✨ ĐẶC ĐIỂM NỔI BẬT:
${item.specs.map((s) => `• ${s}`).join('\n')}

☎️ XƯỞNG MÀNH RÈM ĐỆM TUYẾN HOA:
📍 Địa chỉ: Đội 3, Thôn Lưu Xá, Xã Trầm Lộng, Huyện Ứng Hòa, Hà Nội
📞 Hotline / Zalo tư vấn miễn phí: 0344.727.528
🚚 Miễn phí đo đạc & lắp đặt hoàn thiện tận nhà!`;

    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="py-10 bg-gradient-to-b from-amber-50/60 via-stone-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 shadow-xs mb-3 text-sm font-semibold">
            <Sparkles className="w-4 h4 text-amber-600 animate-pulse" />
            <span>Kho Lưu Trữ 38 Bức Ảnh Mới • Mành Tre Trúc & Tranh Vẽ TMHC Tuyến Hoa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Tuyển Tập Mành Tre Nghệ Thuật & Công Trình Thực Tế
          </h1>
          <p className="mt-3 text-stone-600 text-base sm:text-lg leading-relaxed">
            Khám phá 38 tác phẩm mành tăm tre vẽ sơn dầu phong thủy, tranh bàn thờ gia tiên, tranh thiền trà thất cùng các công trình từ đường, nhà cổ 5 gian do chính nghệ nhân xưởng Tuyến Hoa thi công.
          </p>

          {/* Quick Stats Badges */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <Award className="w-4 h-4 text-amber-600" />
              <strong>38</strong> Ảnh công trình & mẫu mã
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <Flame className="w-4 h-4 text-rose-600" />
              Tranh vẽ sơn dầu thủ công
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <Ruler className="w-4 h-4 text-emerald-600" />
              Đo đạc chuẩn Thước Lỗ Ban
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Xưởng sản xuất trực tiếp tại Ứng Hòa
            </span>
          </div>
        </div>

        {/* Control Toolbar: Search + Filter Tabs + Enhancement Toggle */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-4 sm:p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo mã tranh (vd: TMHC 155, TMHC 055) hoặc tên mẫu (sen, tùng, từ đường, chòi...)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm text-stone-800 placeholder-stone-400 bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Display Enhancements Toggles */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <button
                onClick={() => setEnhancedMode(!enhancedMode)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border font-medium transition-all ${
                  enhancedMode
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                }`}
                title="Bật/Tắt chế độ tối ưu tương phản và độ nét cho ảnh"
              >
                <Sparkles className="w-4 h-4" />
                <span>{enhancedMode ? 'Chế độ Nét HD' : 'Ảnh Gốc'}</span>
              </button>

              <button
                onClick={() => setShowWatermark(!showWatermark)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border font-medium transition-all ${
                  showWatermark
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                }`}
                title="Bật/Tắt dấu bản quyền mành rèm Tuyến Hoa"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Dấu Xưởng Tuyến Hoa</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {BAMBOO_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    active
                      ? 'bg-amber-700 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-stone-500 mb-6 px-1">
          <span>
            Đang hiển thị <strong>{filteredArtworks.length}</strong> / 38 bức ảnh
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-700 hover:underline font-medium"
            >
              Xóa tìm kiếm
            </button>
          )}
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col"
            >
              {/* Image Container with Visual Enhancement Filter & Watermark */}
              <div 
                className="relative bg-stone-900 cursor-pointer overflow-hidden aspect-[4/5] flex items-center justify-center"
                onClick={() => setLightboxArtwork(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    enhancedMode ? 'contrast-105 brightness-100 saturate-105' : ''
                  }`}
                  loading="lazy"
                />

                {/* Top Overlay Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-900/85 backdrop-blur-md text-amber-300 font-mono text-xs font-bold tracking-wider border border-amber-500/30 shadow-xs">
                    {item.code}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-600/90 backdrop-blur-md text-white text-[11px] font-medium shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Bottom Watermark Badge (if enabled) */}
                {showWatermark && (
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-[10px] text-amber-200/90 font-medium flex items-center justify-between pointer-events-none">
                    <span>Mành Rèm Tuyến Hoa • Ứng Hòa</span>
                    <span className="text-white font-mono">0344.727.528</span>
                  </div>
                )}

                {/* Hover overlay button */}
                <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-3.5 py-2 rounded-xl bg-white/95 text-stone-900 font-semibold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-4 h-4 text-amber-600" />
                    Phóng To & Xem Chi Tiết
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base line-clamp-2 group-hover:text-amber-800 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 italic">
                    "{item.meaning}"
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-stone-500">Kích thước chuẩn:</span>
                    <span className="font-medium text-stone-800 truncate max-w-[150px]">{item.standardSize}</span>
                  </div>

                  <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500">Giá tham khảo:</span>
                    <span className="text-sm font-bold text-amber-800">{item.priceEstimate}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      if (onSelectForOrder) {
                        onSelectForOrder(item);
                      } else {
                        setLightboxArtwork(item);
                      }
                    }}
                    className="w-full py-2 px-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Đặt Mẫu Này</span>
                  </button>

                  <button
                    onClick={() => copyAdText(item)}
                    className="w-full py-2 px-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs flex items-center justify-center gap-1 transition-colors"
                    title="Sao chép bài đăng Zalo / Facebook với nội dung giới thiệu mẫu này"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Đã Chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Chép Bài Đăng</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 my-8">
            <Info className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800">Không tìm thấy bức ảnh phù hợp</h3>
            <p className="text-stone-500 text-sm mt-1">
              Thử tìm kiếm với từ khóa khác hoặc nhấn vào danh mục bên trên.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-700 text-white text-xs font-semibold"
            >
              Xem tất cả 38 bức ảnh
            </button>
          </div>
        )}

        {/* Bottom Banner: Custom Workshop Callout */}
        <div className="mt-16 bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/30">
                Xưởng May Đo & Sản Xuất Trực Tiếp
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-100">
                Bạn Có Ảnh Cửa Nhà Mình Hoặc Muốn Vẽ Tranh Theo Kích Thước Riêng?
              </h2>
              <p className="text-stone-300 text-sm sm:text-base max-w-2xl">
                Nghệ nhân Tuyến Hoa nhận vẽ tay tranh phong cảnh, tranh chữ Phúc Lộc Thọ, tranh Phật giáo và gia công mành tre cật che nắng mọi kích thước theo Thước Lỗ Ban phong thủy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-sm text-center shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Gọi 0344.727.528</span>
              </a>
              <a
                href={STORE_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm text-center border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <span>Gửi Ảnh Cửa Qua Zalo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-700 flex flex-col lg:flex-row max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxArtwork(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors"
                title="Đóng (Esc)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors shadow-lg"
                title="Ảnh trước (Mũi tên trái)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 lg:right-[420px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors shadow-lg"
                title="Ảnh sau (Mũi tên phải)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image View */}
              <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-4 min-h-[300px] lg:min-h-[550px] overflow-hidden">
                <img
                  src={lightboxArtwork.image}
                  alt={lightboxArtwork.title}
                  className={`max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl ${
                    enhancedMode ? 'contrast-105 saturate-105' : ''
                  }`}
                />

                {/* Lightbox Watermark */}
                {showWatermark && (
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-stone-950/75 backdrop-blur-xs text-xs text-amber-200 border border-stone-700">
                    Mành Rèm Tuyến Hoa • Trầm Lộng, Ứng Hòa • Hotline: 0344.727.528
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="w-full lg:w-[400px] bg-stone-900 text-white p-6 overflow-y-auto flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 font-mono text-xs font-bold border border-amber-500/30">
                      {lightboxArtwork.code}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-300 text-xs font-medium">
                      {lightboxArtwork.categoryLabel}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-amber-100 leading-snug">
                    {lightboxArtwork.title}
                  </h2>

                  <div className="mt-3 p-3 rounded-xl bg-stone-800/60 border border-stone-700 text-xs text-amber-200/90 leading-relaxed italic">
                    "{lightboxArtwork.meaning}"
                  </div>

                  {/* Price & Dimensions */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-400">Giá dự kiến:</span>
                      <span className="font-bold text-amber-400 text-sm">{lightboxArtwork.priceEstimate}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-400">Kích thước tiêu chuẩn:</span>
                      <span className="font-medium text-stone-200">{lightboxArtwork.standardSize}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-400">Chất liệu nan:</span>
                      <span className="font-medium text-stone-200 text-right max-w-[200px]">{lightboxArtwork.material}</span>
                    </div>
                  </div>

                  {/* Suitable Rooms */}
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-stone-400 block mb-1.5">Không gian phù hợp:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {lightboxArtwork.suitableRooms.map((room, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-stone-800 text-stone-300 text-[11px]">
                          {room}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-stone-400 block mb-1.5">Chi tiết cấu tạo:</span>
                    <ul className="space-y-1 text-xs text-stone-300">
                      {lightboxArtwork.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="mt-6 pt-4 border-t border-stone-800 space-y-2.5">
                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Gọi Báo Giá Ngay ({STORE_INFO.hotlineDisplay})</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={STORE_INFO.zaloUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Chat Zalo</span>
                    </a>

                    <button
                      onClick={() => copyAdText(lightboxArtwork)}
                      className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedId === lightboxArtwork.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Đã Chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Chép Bài Đăng</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
