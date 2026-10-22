import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Ruler, 
  CheckCircle2, 
  PhoneCall, 
  ShoppingBag, 
  Info, 
  Layers, 
  Compass, 
  Check, 
  Copy, 
  ChevronRight, 
  ShieldCheck, 
  Palette,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { BEAD_SHAPES, BEAD_ART_PATTERNS, BeadShape, BeadArtPattern } from '../data/beadCurtains';
import { STORE_INFO, PRODUCTS } from '../data/products';
import { CartItem, Product } from '../types/store';

interface BeadCurtainGalleryProps {
  onAddToCart: (item: CartItem) => void;
  onRequestMeasurement: (curtainType: string, note: string) => void;
  onOpenChat?: () => void;
  onShowToast: (msg: string) => void;
}

type TabType = 'all' | 'shapes' | 'plastic-art' | 'wood-fengshui';

export const BeadCurtainGallery: React.FC<BeadCurtainGalleryProps> = ({
  onAddToCart,
  onRequestMeasurement,
  onOpenChat,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<'all' | '1m' | '1.2m'>('all');
  const [selectedDetailItem, setSelectedDetailItem] = useState<BeadShape | BeadArtPattern | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Filter items
  const shapes = BEAD_SHAPES;
  const plasticArt = BEAD_ART_PATTERNS.filter((p) => p.theme === 'plastic-art');
  const woodArt = BEAD_ART_PATTERNS.filter((p) => p.theme === 'wood-fengshui');

  const handleAddShapeToCart = (shape: BeadShape, size: '1m' | '1.2m') => {
    const is1m = size === '1m';
    const price = is1m ? shape.standardPrice1mx2m : shape.standardPrice1m2x2m;
    const sizeLabel = is1m ? '1.0m x 2.0m' : '1.2m x 2.0m';
    
    const item: CartItem = {
      productId: 'manh-hat-nhua-giot-le-tron-da-dang',
      productName: `${shape.vietnameseName} (${sizeLabel})`,
      variantId: `shape-${shape.id}-${size}`,
      variantName: `${shape.name} - Màu tùy chọn`,
      size: sizeLabel,
      price: price,
      quantity: 1,
      category: 'rem-cua',
      customNote: `Kiểu hạt: ${shape.name}. Cửa hàng sẽ gọi xác nhận màu sắc.`,
    };
    onAddToCart(item);
  };

  const handleAddArtToCart = (art: BeadArtPattern, size: '1m' | '1.2m') => {
    const is1m = size === '1m';
    const price = is1m ? art.standardPrice1mx2m : art.standardPrice1m2x2m;
    const sizeLabel = is1m ? '1.0m x 2.0m' : '1.2m x 2.0m';
    const productId = art.theme === 'wood-fengshui' 
      ? 'manh-hat-go-phong-thuy-phuc-loc-tho-sen-hac' 
      : 'manh-hat-nhua-ket-tranh-phong-thuy-nghe-thuat';

    const item: CartItem = {
      productId: productId,
      productName: `${art.name} (${sizeLabel})`,
      variantId: `art-${art.id}-${size}`,
      variantName: `${art.patternName} - ${art.materialType}`,
      size: sizeLabel,
      price: price,
      quantity: 1,
      category: 'rem-cua',
      customNote: `Mẫu tranh: ${art.patternName}. Kích thước ${sizeLabel}.`,
    };
    onAddToCart(item);
  };

  const handleCopyAdText = () => {
    const adText = `【 BỘ SƯU TẬP MÀNH HẠT NHỰA & HẠT GỖ KẾT TRANH PHONG THỦY TUYẾN HOA 】\n\n✨ Rèm Hạt Nhựa Thường (Hạt giọt lệ pha lê, hạt tròn, quả trám kim cương, hoa cúc):\n   👉 Bộ 1.0m x 2.0m: CHỈ 600.000 đ/bộ\n   👉 Bộ 1.2m x 2.0m: 780.000 đ/bộ\n\n✨ Rèm Hạt Nhựa Kết Tranh Phong Thủy Nghệ Thuật (Đôi Chim Công, Tùng Hạc, Thuận Buồm, Hoa Sen):\n   👉 Bộ 1.0m x 2.0m: 990.000 đ/bộ\n   👉 Bộ 1.2m x 2.0m: ĐÚNG 1.300.000 đ/bộ\n\n✨ Rèm Hạt Gỗ Phong Thủy Phòng Thờ (Gỗ Bồ Đề, Gỗ Hương kết chữ Phúc - Lộc - Thọ, Đỉnh Hạc):\n   👉 Giá CHỈ TỪ 1.200.000 đ/bộ chuẩn Thước Lỗ Ban cung Đỏ!\n\n🚗 MIỄN PHÍ mang mẫu hạt và thước Lỗ Ban đo đạc tận nhà trên toàn huyện Ứng Hòa!\n📞 Hotline & Zalo: ${STORE_INFO.hotlineDisplay} (Anh Tuyến trực tiếp tư vấn)`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(adText).then(() => {
        setIsCopied(true);
        onShowToast('Đã sao chép bảng giá mành hạt nhựa & hạt gỗ vào bộ nhớ tạm!');
        setTimeout(() => setIsCopied(false), 3000);
      });
    } else {
      onShowToast('Đã lưu thông tin báo giá mành hạt!');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-5 sm:p-8 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sưu Tầm Mẫu Mới &amp; Báo Giá Niêm Yết</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Mành Hạt Nhựa &amp; Hạt Gỗ Kết Tranh Phong Thủy
          </h2>
          <p className="mt-3 text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Tuyển tập đầy đủ các hình dạng hạt (giọt lệ, hạt tròn, quả trám, hoa cúc) và mẫu tranh phong thủy (Đôi Chim Công, Tùng Hạc, Hoa Sen, Phúc Lộc Thọ). Báo giá minh bạch: <strong className="text-amber-400">bộ 1m×2m chỉ 600.000đ</strong>, <strong className="text-amber-400">bộ 1.2m×2m tranh 1.3 triệu</strong>, <strong className="text-amber-400">hạt gỗ từ 1.2 triệu</strong>.
          </p>

          {/* Quick Pricing Ribbon */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-white/10 text-xs">
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <span className="text-stone-300 block text-[11px]">Hạt nhựa thường (1m × 2m):</span>
              <span className="text-amber-300 font-extrabold text-base font-mono">600.000 đ</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <span className="text-stone-300 block text-[11px]">Hạt nhựa kết tranh (1.2m × 2m):</span>
              <span className="text-amber-300 font-extrabold text-base font-mono">1.300.000 đ</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <span className="text-stone-300 block text-[11px]">Mành hạt gỗ phòng thờ:</span>
              <span className="text-emerald-400 font-extrabold text-base font-mono">Từ 1.200.000 đ</span>
            </div>
          </div>
        </div>

        {/* Action Button: Copy Social Ad */}
        <div className="mt-6 flex flex-wrap items-center gap-3 relative z-10">
          <button
            type="button"
            onClick={handleCopyAdText}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 active:scale-98 text-stone-950 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            {isCopied ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Đã Sao Chép Báo Giá!' : 'Sao Chép Bài Quảng Cáo Đăng Zalo'}</span>
          </button>
          
          <button
            type="button"
            onClick={() => onRequestMeasurement('Mành Hạt Nhựa / Hạt Gỗ Phong Thủy', 'Khách quan tâm mành hạt từ bộ sưu tập')}
            className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Ruler className="w-4 h-4 text-amber-300" />
            <span>Hẹn Thợ Tuyến Mang Mẫu Đo Tận Nhà (0đ)</span>
          </button>
        </div>
      </div>

      {/* Tabs Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Tất Cả Mẫu ({shapes.length + plasticArt.length + woodArt.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('shapes')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'shapes'
                ? 'bg-amber-700 text-white shadow-xs font-bold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>Hình Dạng Hạt Nhựa (600k)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('plastic-art')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'plastic-art'
                ? 'bg-amber-700 text-white shadow-xs font-bold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>Hạt Nhựa Kết Tranh (1.3tr)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('wood-fengshui')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'wood-fengshui'
                ? 'bg-emerald-800 text-white shadow-xs font-bold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>Mành Hạt Gỗ Phong Thủy (Từ 1.2tr)</span>
          </button>
        </div>

        {/* Quick Size Filter */}
        <div className="flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 p-1 rounded-xl">
          <span className="text-[11px] font-semibold px-2 text-stone-500">Cỡ rèm:</span>
          <button
            type="button"
            onClick={() => setSelectedSizeFilter('all')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
              selectedSizeFilter === 'all' ? 'bg-white shadow-xs text-stone-900 font-bold' : 'text-stone-600'
            }`}
          >
            Tất cả
          </button>
          <button
            type="button"
            onClick={() => setSelectedSizeFilter('1m')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
              selectedSizeFilter === '1m' ? 'bg-white shadow-xs text-amber-900 font-bold' : 'text-stone-600'
            }`}
          >
            1.0m × 2.0m
          </button>
          <button
            type="button"
            onClick={() => setSelectedSizeFilter('1.2m')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
              selectedSizeFilter === '1.2m' ? 'bg-white shadow-xs text-amber-900 font-bold' : 'text-stone-600'
            }`}
          >
            1.2m × 2.0m
          </button>
        </div>
      </div>

      {/* SECTION 1: Các Hình Dạng Hạt Nhựa Thường (Giá chuẩn 600.000đ/bộ 1m x 2m) */}
      {(activeTab === 'all' || activeTab === 'shapes') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-600" />
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                1. Mẫu Mành Hạt Nhựa Các Hình Dạng Độc Đáo (Giá 600.000 đ / Bộ 1m×2m)
              </h3>
            </div>
            <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              600.000đ (1m×2m) · 780.000đ (1.2m×2m)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shapes.map((shape) => (
              <div
                key={shape.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 bg-stone-100 overflow-hidden">
                    <img
                      src={shape.image}
                      alt={shape.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-700 text-white shadow-xs">
                      {shape.badge}
                    </span>
                  </div>

                  <div className="p-4 space-y-2.5">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                      {shape.vietnameseName}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {shape.shapeDescription}
                    </p>

                    {/* Color pills */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1">
                        Màu sắc sẵn có:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {shape.colors.map((c, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 bg-stone-100 text-stone-700 rounded font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-[11px] text-stone-500 italic pt-1">
                      📍 Phù hợp: {shape.bestSuitedFor}
                    </div>
                  </div>
                </div>

                {/* Price and Cart Buttons */}
                <div className="p-4 pt-2 border-t border-stone-100 bg-stone-50/50 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Bộ 1.0m × 2.0m:</span>
                    <span className="font-extrabold text-amber-800 text-sm font-mono">
                      {shape.standardPrice1mx2m.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Bộ 1.2m × 2.0m:</span>
                    <span className="font-extrabold text-stone-800 text-sm font-mono">
                      {shape.standardPrice1m2x2m.toLocaleString('vi-VN')} đ
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleAddShapeToCart(shape, '1m')}
                      className="py-1.5 px-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mua cỡ 1m (600k)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddShapeToCart(shape, '1.2m')}
                      className="py-1.5 px-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mua cỡ 1.2m (780k)</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Mẫu Hạt Nhựa Kết Tranh Phong Thủy (Giá 1.3 Triệu cho bộ 1.2m x 2m) */}
      {(activeTab === 'all' || activeTab === 'plastic-art') && (
        <div className="space-y-4 pt-4 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-600" />
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                2. Mẫu Hạt Nhựa Kết Tranh Nghệ Thuật (Bộ 1.2m × 2m Giá 1.3 Triệu)
              </h3>
            </div>
            <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Cỡ 1.2m×2m: 1.300.000 đ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {plasticArt.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/9 bg-stone-900 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 shadow-xs">
                      {art.badge}
                    </span>
                    <span className="absolute bottom-2.5 left-3 text-white text-xs font-semibold">
                      {art.beadCountApprox}
                    </span>
                  </div>

                  <div className="p-4 space-y-2.5">
                    <h4 className="font-extrabold text-stone-900 text-sm sm:text-base leading-snug">
                      {art.name}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong className="text-stone-800">Ý nghĩa: </strong>
                      {art.symbolism}
                    </p>
                    <div className="p-2.5 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-1.5">
                      <Compass className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <strong>Phong thủy: </strong>
                        <span>{art.fengShuiBenefit}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price and Cart Buttons */}
                <div className="p-4 pt-3 border-t border-stone-100 bg-stone-50 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-stone-500 block">Kích thước 1.2m × 2.0m chuẩn:</span>
                      <span className="text-lg font-black text-amber-800 font-mono">
                        {art.standardPrice1m2x2m.toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-stone-500 block">Cỡ 1.0m × 2.0m:</span>
                      <span className="text-sm font-bold text-stone-700 font-mono">
                        {art.standardPrice1mx2m.toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddArtToCart(art, '1.2m')}
                      className="py-2 px-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mua 1.2m×2m (1.3tr)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddArtToCart(art, '1m')}
                      className="py-2 px-3 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mua 1.0m×2m (990k)</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: Mẫu Hạt Gỗ Tự Nhiên Kết Tranh Phòng Thờ (Giá từ 1.2 Triệu) */}
      {(activeTab === 'all' || activeTab === 'wood-fengshui') && (
        <div className="space-y-4 pt-4 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-700" />
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                3. Mành Hạt Gỗ Phong Thủy Phòng Thờ Kết Chữ &amp; Tranh (Giá Từ 1.2 Triệu)
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Giá Từ 1.200.000 đ / Bộ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {woodArt.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 bg-stone-900 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-700 text-white shadow-xs">
                      {art.badge}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                      {art.materialType}
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm sm:text-base leading-snug">
                      {art.name}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {art.symbolism}
                    </p>
                    <div className="text-[11px] text-stone-500">
                      💡 {art.fengShuiBenefit}
                    </div>
                  </div>
                </div>

                {/* Price and Cart Buttons */}
                <div className="p-4 pt-2 border-t border-stone-100 bg-stone-50 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Bộ 1.0m × 2.0m:</span>
                    <span className="font-extrabold text-emerald-800 text-sm font-mono">
                      {art.standardPrice1mx2m.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Bộ 1.2m × 2.0m:</span>
                    <span className="font-extrabold text-stone-800 text-sm font-mono">
                      {art.standardPrice1m2x2m.toLocaleString('vi-VN')} đ
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleAddArtToCart(art, '1m')}
                      className="py-1.5 px-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Cỡ 1m (từ 1.2tr)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddArtToCart(art, '1.2m')}
                      className="py-1.5 px-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Cỡ 1.2m</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feng Shui Advice & Measurement Note */}
      <div className="bg-stone-50 rounded-2xl p-4 sm:p-6 border border-stone-200 space-y-3">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-amber-800" />
          <h4 className="font-bold text-sm sm:text-base text-stone-900">
            Tư Vấn Phong Thủy &amp; Đo Đạc Thước Lỗ Ban Từ Thợ Tuyến
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Mành hạt nhựa và mành hạt gỗ không chỉ làm đẹp không gian mà còn là pháp khí hóa giải phong thủy cực kỳ hiệu nghiệm cho các trường hợp: <strong>Cửa phòng ngủ đối diện cửa chính, bàn thờ nhìn thẳng ra bếp/nhà vệ sinh, hoặc lối cầu thang đâm thẳng vào cửa buồng</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 pt-1">
          <div className="bg-white p-3 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">📐 Chiều Rộng:</strong>
            Nên phủ bì rộng hơn mép cửa từ 5cm - 10cm mỗi bên để che kín mép và không để luồng tà khí lọt vào.
          </div>
          <div className="bg-white p-3 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">📏 Chiều Cao:</strong>
            Mép dưới của mành hạt nên cách mặt sàn khoảng 5cm - 10cm để không chạm đất bẩn mà vẫn che kín tầm nhìn.
          </div>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Thợ Tuyến mang thước Lỗ Ban và mẫu hạt tận nhà khảo sát miễn phí tại huyện Ứng Hòa!</span>
          </span>
          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Gọi 0344 727 528</span>
          </a>
        </div>
      </div>
    </div>
  );
};
