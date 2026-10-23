import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Ruler,
  ShoppingBag,
  ZoomIn,
  X,
  Copy,
  Check,
  ShieldCheck,
  Video,
  Play,
  BookOpen,
  Sun,
  CloudRain,
  Wind,
  Wifi,
  Calculator,
  Home,
  ExternalLink,
  Layers,
  Award,
} from 'lucide-react';
import {
  AWNING_PHOTO_ARTICLES,
  CURATED_AWNING_VIDEOS,
  AWNING_MOTOR_OPTIONS,
  AwningPhotoArticle,
  CuratedAwningVideo,
  calculateAwningCanopyQuote,
  filterAwningPhotoArticles,
  filterCuratedAwningVideos,
} from '../data/awningCanopy';
import { STORE_INFO } from '../data/products';
import { CartItem } from '../types/store';

interface AwningCanopyShowcase350kProps {
  onAddToCart: (item: CartItem) => void;
  onRequestMeasurement: (curtainType: string, note: string) => void;
  onShowToast?: (msg: string) => void;
}

export const AwningCanopyShowcase350k: React.FC<AwningCanopyShowcase350kProps> = ({
  onAddToCart,
  onRequestMeasurement,
  onShowToast,
}) => {
  // Filter & Selection State for the 5 Photo Articles
  const [selectedPhotoCat, setSelectedPhotoCat] = useState<'all' | AwningPhotoArticle['category']>('all');
  const [activeArticleModal, setActiveArticleModal] = useState<AwningPhotoArticle | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [fontSizeMode, setFontSizeMode] = useState<'standard' | 'large'>('large');

  // Interactive Calculator State (350.000đ/m² cả công lắp)
  const [widthMeters, setWidthMeters] = useState<number>(4.0);
  const [projectionMeters, setProjectionMeters] = useState<number>(5.0);
  const [includeMotor, setIncludeMotor] = useState<boolean>(false);
  const [selectedMotorId, setSelectedMotorId] = useState<string>(AWNING_MOTOR_OPTIONS[0].id);

  // Video Showcase State (3 Tuyến Hoa videos + 6 Internet Motorized Awning videos)
  const [selectedVideoCat, setSelectedVideoCat] = useState<'all' | CuratedAwningVideo['category']>('all');
  const [activeVideoId, setActiveVideoId] = useState<string>(CURATED_AWNING_VIDEOS[0].id);

  // Interactive Motorized Awning Simulator State
  const [awningExtendPercent, setAwningExtendPercent] = useState<number>(85);
  const [simStatusText, setSimStatusText] = useState<string>(
    'Đang mở 85% mái bạt xếp lượn sóng — Che nắng mưa hoàn hảo cho sân nhà'
  );

  const filteredArticles = useMemo(
    () => filterAwningPhotoArticles(AWNING_PHOTO_ARTICLES, selectedPhotoCat),
    [selectedPhotoCat]
  );

  const filteredVideos = useMemo(
    () => filterCuratedAwningVideos(CURATED_AWNING_VIDEOS, selectedVideoCat),
    [selectedVideoCat]
  );

  const activeVideo = useMemo(
    () => CURATED_AWNING_VIDEOS.find((v) => v.id === activeVideoId) || CURATED_AWNING_VIDEOS[0],
    [activeVideoId]
  );

  const quote = useMemo(
    () =>
      calculateAwningCanopyQuote({
        widthMeters,
        projectionMeters,
        includeMotor,
        motorId: selectedMotorId,
      }),
    [widthMeters, projectionMeters, includeMotor, selectedMotorId]
  );

  const handleCopyText = (id: string, text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedId(id);
    if (onShowToast) {
      onShowToast(`Đã sao chép bài viết ${label}!`);
    }
    setTimeout(() => setCopiedId(null), 2800);
  };

  const handleOrderAwningArticle = (article: AwningPhotoArticle) => {
    const item: CartItem = {
      productId: `bat-xep-350k-${article.id}`,
      productName: `${article.title} (${article.code})`,
      variantId: includeMotor ? `350k-motor-${selectedMotorId}` : 'tron-goi-350k-m2',
      variantName: includeMotor
        ? `Trọn gói 350.000đ/m² cả lắp + ${quote.motorName}`
        : 'Trọn gói 350.000đ / 1 m² (Đã gồm cả khung sắt, bạt Hàn Quốc & công lắp đặt)',
      size: `Ngang ${quote.widthMeters}m × Vươn ${quote.projectionMeters}m (${quote.areaSqm}m²)`,
      price: quote.totalCost,
      quantity: 1,
      category: 'rem-cua',
      customNote: `${article.code} - ${quote.summaryText}`,
    };
    onAddToCart(item);
  };

  const handleRemoteSim = (percent: number, message: string) => {
    setAwningExtendPercent(percent);
    setSimStatusText(message);
    if (onShowToast) {
      onShowToast(message);
    }
  };

  return (
    <section
      id="awning-canopy-350k-section"
      aria-label="Chuyên trang Bài Viết Bạt Mái Xếp 350.000đ/m² Cả Công Lắp & Video Bạt Tự Động"
      className="bg-white rounded-3xl border-2 border-emerald-500/80 shadow-lg overflow-hidden space-y-6 sm:space-y-10 pb-6 sm:pb-10"
    >
      {/* 1. TOP PROMOTIONAL BANNER & INSTANT 350.000Đ/M² CALCULATOR */}
      <div className="bg-gradient-to-br from-stone-950 via-emerald-950 to-stone-900 text-white p-5 sm:p-8 border-b border-amber-400/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left 7 cols: Concise Headline & Value Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 text-stone-950 text-xs font-extrabold uppercase tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 diamond-twinkle" />
              <span>5 Công Trình Thực Tế &amp; Kho Video Bạt Tự Động</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-[1.25] tracking-tight">
              Bạt Mái Xếp Lượn Sóng &amp; Bạt Tự Động Tuyến Hoa:{' '}
              <span className="luxury-gold-text underline decoration-amber-400/80 underline-offset-4">
                350.000đ / 1 m²
              </span>{' '}
              (Cả Công Lắp)
            </h2>

            <p className="text-sm sm:text-base text-stone-200 font-medium leading-relaxed max-w-2xl">
              Đơn giá trọn gói <strong className="text-amber-300 font-extrabold">350.000đ / 1 m² hoàn thiện</strong> đã bao gồm khung kèo sắt mạ kẽm, bạt Myung Sung Hàn Quốc 3 lớp cách nhiệt và công thợ lắp đặt tận nơi.
            </p>

            {/* 4 Clean Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
                <div className="text-amber-300 font-mono text-sm sm:text-base font-extrabold">350.000đ/m²</div>
                <div className="text-xs font-semibold text-stone-200 mt-0.5">Cả khung &amp; lắp</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
                <div className="text-emerald-300 font-mono text-sm sm:text-base font-extrabold">Bạt 3 Lớp</div>
                <div className="text-xs font-semibold text-stone-200 mt-0.5">Cản nắng 98%</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
                <div className="text-sky-300 font-mono text-sm sm:text-base font-extrabold">Tự Động 4.0</div>
                <div className="text-xs font-semibold text-stone-200 mt-0.5">Điều khiển từ xa</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
                <div className="text-rose-300 font-mono text-sm sm:text-base font-extrabold">0344.727.528</div>
                <div className="text-xs font-semibold text-stone-200 mt-0.5">Khảo sát 0đ</div>
              </div>
            </div>
          </div>

          {/* Right 5 cols: Interactive 350.000đ/m² Calculator Card */}
          <div className="lg:col-span-5 bg-white text-stone-950 rounded-2xl p-4 sm:p-6 border-2 border-amber-400 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold shrink-0">
                  <Calculator className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-display font-extrabold text-stone-950">
                    Tính Nhanh Giá Bạt 350.000đ/m²
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800">
                    Trọn gói cả vật tư &amp; công lắp đặt
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 font-mono text-xs sm:text-sm font-extrabold">
                350k / 1 m²
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="awning-width-input" className="block text-xs sm:text-sm font-bold text-stone-800">
                  Chiều ngang sân (m):
                </label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setWidthMeters((w) => Math.max(1.5, parseFloat((w - 0.5).toFixed(1))))}
                    className="w-9 h-10 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-950 font-extrabold text-base flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    id="awning-width-input"
                    type="number"
                    step="0.5"
                    min="1.5"
                    max="30"
                    value={widthMeters}
                    onChange={(e) => setWidthMeters(Math.max(1.5, parseFloat(e.target.value) || 1.5))}
                    className="w-full h-10 bg-stone-50 border border-stone-300 rounded-xl text-center font-mono text-base font-extrabold text-stone-950 focus:outline-hidden focus:border-emerald-700"
                  />
                  <button
                    type="button"
                    onClick={() => setWidthMeters((w) => Math.min(30, parseFloat((w + 0.5).toFixed(1))))}
                    className="w-9 h-10 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-950 font-extrabold text-base flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="awning-proj-input" className="block text-xs sm:text-sm font-bold text-stone-800">
                  Chiều vươn / dài (m):
                </label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setProjectionMeters((p) => Math.max(1.5, parseFloat((p - 0.5).toFixed(1))))}
                    className="w-9 h-10 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-950 font-extrabold text-base flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    id="awning-proj-input"
                    type="number"
                    step="0.5"
                    min="1.5"
                    max="30"
                    value={projectionMeters}
                    onChange={(e) => setProjectionMeters(Math.max(1.5, parseFloat(e.target.value) || 1.5))}
                    className="w-full h-10 bg-stone-50 border border-stone-300 rounded-xl text-center font-mono text-base font-extrabold text-stone-950 focus:outline-hidden focus:border-emerald-700"
                  />
                  <button
                    type="button"
                    onClick={() => setProjectionMeters((p) => Math.min(30, parseFloat((p + 0.5).toFixed(1))))}
                    className="w-9 h-10 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-950 font-extrabold text-base flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Motorized Upgrade Toggle */}
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMotor}
                  onChange={(e) => setIncludeMotor(e.target.checked)}
                  className="w-4 h-4 accent-emerald-700 rounded cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-bold text-stone-900">
                  Nâng cấp thêm Motor Bạt Tự Động Điều Khiển Remote
                </span>
              </label>

              {includeMotor && (
                <select
                  value={selectedMotorId}
                  onChange={(e) => setSelectedMotorId(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-stone-300 rounded-lg px-2.5 py-2 font-semibold text-stone-900"
                >
                  {AWNING_MOTOR_OPTIONS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} (+{m.price.toLocaleString('vi-VN')}đ)
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Total Output */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-500/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-stone-700">
                  Diện tích: <span className="font-mono font-extrabold text-stone-950">{quote.areaSqm} m²</span> × 350.000đ
                </div>
                <div className="text-xs font-semibold text-emerald-800 mt-0.5">
                  Trọn gói cả công thi công lắp đặt
                </div>
              </div>
              <div className="text-right">
                <div
                  data-testid="awning-quote-total"
                  className="text-xl sm:text-2xl font-mono tabular-nums font-extrabold text-emerald-900"
                >
                  {quote.totalCost.toLocaleString('vi-VN')} đ
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleOrderAwningArticle(AWNING_PHOTO_ARTICLES[0])}
                className="py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Đặt Làm Bạt Ngay</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  onRequestMeasurement(
                    `Bạt Mái Xếp Trọn Gói 350.000đ/m² (${quote.areaSqm}m²)`,
                    quote.summaryText
                  )
                }
                className="py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Ruler className="w-4 h-4 shrink-0" />
                <span>Hẹn Khảo Sát 0đ</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION PART 1: 5 TAILORED ARTICLES FOR EACH OF THE 5 UPLOADED PHOTOS */}
      <div className="px-4 sm:px-6 md:px-8 space-y-6">
        {/* Clean Header & Font-Size Readability Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-stone-950">
              5 Công Trình Mái Bạt Xếp Thực Tế (350.000đ/m² Cả Lắp)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              Bấm vào ảnh hoặc nút &ldquo;Đọc toàn bộ bài viết&rdquo; để xem chi tiết từng công trình.
            </p>
          </div>

          {/* Readability Font Size Toggle */}
          <div className="flex items-center gap-1.5 self-start md:self-auto bg-stone-100 p-1.5 rounded-xl border border-stone-300 shrink-0">
            <span className="text-xs font-bold text-stone-700 px-2">Cỡ chữ:</span>
            <button
              type="button"
              onClick={() => setFontSizeMode('standard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                fontSizeMode === 'standard'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:bg-stone-200'
              }`}
            >
              Vừa
            </button>
            <button
              type="button"
              onClick={() => setFontSizeMode('large')}
              className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                fontSizeMode === 'large'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-800 hover:bg-stone-200'
              }`}
            >
              Chữ To Rõ Nét
            </button>
          </div>
        </div>

        {/* Category Filter Pills for the 5 Photos */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Tất Cả (5 Công Trình)' },
            { id: 'biet-thu-nha-vuon', label: 'Ảnh 1: Sân Nhà Vườn' },
            { id: 'san-thuong', label: 'Ảnh 2: Sân Thượng' },
            { id: 'mai-thai-my-thuat', label: 'Ảnh 3: Biệt Thự Mái Thái' },
            { id: 'gara-o-to', label: 'Ảnh 4: Sân Đỗ Ô Tô' },
            { id: 'nha-pho-kinh-doanh', label: 'Ảnh 5: Mặt Tiền Nhà Phố' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedPhotoCat(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedPhotoCat === tab.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Airy, Visual-First Editorial Cards for Each Photo */}
        <div className="space-y-6">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              data-testid={`awning-article-${article.code}`}
              className="bg-[#FBFBFA] rounded-3xl border border-stone-200/90 hover:border-emerald-600/70 shadow-sm hover:shadow-xl transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left 6 Columns: Large Real Uploaded Photo */}
              <div className="lg:col-span-6 relative bg-stone-900 min-h-[260px] sm:min-h-[340px] flex flex-col justify-between overflow-hidden group">
                <img
                  src={article.image}
                  alt={article.title}
                  onClick={() => setActiveArticleModal(article)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.03] contrast-[1.05] cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-xl bg-amber-400 text-stone-950 text-xs font-extrabold shadow-md">
                    Ảnh #{index + 1} • {article.code}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveArticleModal(article)}
                    className="px-3 py-1 rounded-xl bg-black/75 hover:bg-black text-white text-xs font-bold flex items-center gap-1 border border-white/25 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
                    <span>Xem chi tiết</span>
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-stone-950/90 backdrop-blur-xs border border-amber-400/50 text-white flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-amber-300 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Tuyến Hoa • {STORE_INFO.hotlineDisplay}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-white mt-0.5">
                      {article.categoryLabel}
                    </div>
                  </div>
                  <div className="bg-emerald-500 text-stone-950 px-3 py-1.5 rounded-xl text-right shrink-0">
                    <div className="text-sm sm:text-base font-mono font-extrabold leading-none">
                      350.000đ
                    </div>
                    <div className="text-[11px] font-extrabold leading-tight">/ 1 m² cả lắp</div>
                  </div>
                </div>
              </div>

              {/* Right 6 Columns: Clean, Breathable Summary + Modal Trigger */}
              <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-950 text-xs font-extrabold">
                      {article.badge}
                    </span>
                    <span className="text-xs font-mono font-extrabold text-amber-900 bg-amber-100 px-3 py-1 rounded-lg border border-amber-300">
                      350.000đ / 1 m² cả lắp
                    </span>
                  </div>

                  <h4
                    onClick={() => setActiveArticleModal(article)}
                    className={`font-display font-extrabold text-stone-950 hover:text-emerald-900 cursor-pointer leading-[1.3] tracking-tight ${
                      fontSizeMode === 'large'
                        ? 'text-xl sm:text-2xl'
                        : 'text-lg sm:text-xl'
                    }`}
                  >
                    {article.title}
                  </h4>

                  <p
                    className={`text-stone-700 leading-relaxed line-clamp-3 ${
                      fontSizeMode === 'large' ? 'text-base' : 'text-sm'
                    }`}
                  >
                    {article.articleParagraphs[0]}
                  </p>

                  {/* 2 Clean Spec Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                      <span className="text-[11px] font-bold uppercase text-stone-500 block">
                        Chất liệu &amp; Màu sắc:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-stone-900 mt-0.5 block">
                        {article.colorAndMaterial}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                      <span className="text-[11px] font-bold uppercase text-stone-500 block">
                        Kết cấu khung:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-stone-900 mt-0.5 block">
                        {article.frameStructure}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Footer Bar */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveArticleModal(article)}
                      className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Đọc Bài Viết Chi Tiết</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOrderAwningArticle(article)}
                      className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4 text-amber-400" />
                      <span>Đặt Mẫu ({article.code})</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(article.id, article.socialPostCopy, article.code)
                    }
                    className="px-3 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedId === article.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-700" />
                        <span className="text-emerald-800">Đã Chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-900" />
                        <span>Chép Bài</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 3. SECTION PART 2: CURATED INTERNET MOTORIZED AWNING VIDEOS & TUYẾN HOA REAL VIDEOS */}
      <div className="px-3 sm:px-6 md:px-8 pt-6 border-t-2 border-stone-200 space-y-6">
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-5 sm:p-8 border border-emerald-500/40 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="space-y-2 max-w-4xl">
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-extrabold">
                <Video className="w-4 h-4" />
                <span>PHẦN 2: KHO VIDEO BẠT TỰ ĐỘNG SƯU TẦM TRÊN INTERNET &amp; VIDEO THỰC TẾ TUYẾN HOA</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-white leading-snug">
                Xem Thực Tế Bạt Mái Xếp Tự Động Điều Khiển Từ Xa &amp; Video Thi Công Tuyến Hoa
              </h3>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                Tổng hợp <strong className="text-amber-300 font-bold">6 Video Bạt Xếp Tự Động &amp; Mái Hiên Điều Khiển Từ Xa sưu tầm trên Internet</strong> cùng{' '}
                <strong className="text-emerald-300 font-bold">3 Video Thực Tế Mới Nhất Của Tuyến Hoa</strong>. Bấm vào từng video để xem trực tiếp và đọc bài thuyết minh chi tiết!
              </p>
            </div>

            {/* Video Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                { id: 'all', label: `Tất Cả (${CURATED_AWNING_VIDEOS.length} Video)` },
                { id: 'bat-xep-tu-dong', label: 'Video Bạt Xếp Tự Động (Internet)' },
                { id: 'mai-hien-cam-bien', label: 'Mái Che & Pergola Tự Động' },
                { id: 'video-tuyen-hoa', label: '3 Video Thực Tế Tuyến Hoa' },
              ].map((vTab) => (
                <button
                  key={vTab.id}
                  type="button"
                  onClick={() => {
                    setSelectedVideoCat(vTab.id as any);
                    const list = filterCuratedAwningVideos(CURATED_AWNING_VIDEOS, vTab.id as any);
                    if (list.length > 0) setActiveVideoId(list[0].id);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                    selectedVideoCat === vTab.id
                      ? 'bg-amber-400 text-stone-950 shadow-sm'
                      : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                  }`}
                >
                  {vTab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Video Player + Interactive Motorized Awning Remote Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-stone-900/90 rounded-2xl p-3.5 sm:p-6 border border-stone-700">
            {/* Left 7 cols: Active Video Player (Local HTML5 Video OR Curated YouTube Video) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-black border border-stone-700 shadow-2xl">
                {activeVideo.sourceType === 'tuyen-hoa-local' && activeVideo.localVideoUrl ? (
                  <video
                    key={activeVideo.localVideoUrl}
                    src={activeVideo.localVideoUrl}
                    poster={activeVideo.posterImage}
                    controls
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  />
                ) : activeVideo.youtubeId ? (
                  <iframe
                    key={activeVideo.youtubeId}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : null}
              </div>

              {/* Interactive Motorized Awning Remote Control Simulator Bar */}
              <div className="bg-stone-950 rounded-2xl p-4 border border-emerald-500/40 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-amber-400" />
                    <span className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase">
                      Mô Phỏng Điều Khiển Bạt Xếp Tự Động Bằng Remote &amp; Cảm Biến:
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    Độ vươn mái bạt: {awningExtendPercent}%
                  </span>
                </div>

                {/* Visual Animated Wave Awning Bar */}
                <div className="relative h-14 rounded-xl bg-stone-900 border border-stone-700 overflow-hidden flex items-center px-2">
                  <div
                    style={{ width: `${Math.max(12, awningExtendPercent)}%` }}
                    className="h-10 rounded-lg bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 border-r-4 border-amber-400 transition-all duration-500 flex overflow-hidden shadow-lg"
                  >
                    {Array.from({ length: 8 }).map((_, waveIdx) => (
                      <div
                        key={waveIdx}
                        className="flex-1 h-full border-r border-amber-950/60 bg-gradient-to-r from-black/25 via-amber-500/20 to-black/30 flex items-center justify-center"
                      >
                        <span className="text-[9px] font-mono text-amber-200/80 select-none">∿</span>
                      </div>
                    ))}
                  </div>
                  <span className="ml-auto pr-2 text-[11px] font-mono text-stone-400 shrink-0">
                    Sân Nhà / Sân Thượng
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoteSim(100, 'Remote Bạt Tự Động: KÉO RA 100% — Che nắng mưa toàn bộ sân')
                    }
                    className="py-2 px-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>Mở Bạt 100%</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoteSim(50, 'Remote Bạt Tự Động: DỪNG Ở 50% — Che mát hiên, đón gió nửa sân')
                    }
                    className="py-2 px-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-extrabold flex items-center justify-center gap-1 border border-stone-600 cursor-pointer"
                  >
                    <span>Che Nửa Sân 50%</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoteSim(10, 'Remote Bạt Tự Động: THU GỌN 90% — Đón gió trời & ánh sáng tự nhiên')
                    }
                    className="py-2 px-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-extrabold flex items-center justify-center gap-1 border border-stone-600 cursor-pointer"
                  >
                    <Wind className="w-3.5 h-3.5 text-sky-400" />
                    <span>Thu Gọn Bạt</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoteSim(
                        100,
                        'Cảm Biến Mưa Kích Hoạt: Phát hiện mưa rào -> Tự động kéo bạt đóng kín 100%!'
                      )
                    }
                    className="py-2 px-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-extrabold flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <CloudRain className="w-3.5 h-3.5" />
                    <span>Cảm Biến Mưa</span>
                  </button>
                </div>

                <div className="text-xs font-medium text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{simStatusText}</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Active Video Article & Explanation */}
            <div className="lg:col-span-5 bg-white text-stone-950 rounded-2xl p-4 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-950 text-xs font-extrabold">
                    {activeVideo.categoryLabel}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">
                    Mã: {activeVideo.code} • {activeVideo.durationLabel}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-display font-extrabold text-stone-950 leading-snug">
                  {activeVideo.articleTitle}
                </h4>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-xs sm:text-sm font-extrabold text-amber-950 flex items-center justify-between">
                  <span>Báo giá áp dụng tại Tuyến Hoa:</span>
                  <span className="font-mono text-emerald-900">{activeVideo.priceHighlight}</span>
                </div>

                <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
                  {activeVideo.articleContent}
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-extrabold uppercase text-stone-700">
                    Thông số &amp; Ưu điểm chính:
                  </div>
                  {activeVideo.keyFeatures.map((kf, idx) => (
                    <div
                      key={idx}
                      className="text-xs sm:text-sm font-semibold text-stone-900 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{kf}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 space-y-2">
                {activeVideo.youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 border border-stone-300"
                  >
                    <ExternalLink className="w-4 h-4 text-rose-600" />
                    <span>Mở xem trên YouTube ({activeVideo.channelOrAuthor})</span>
                  </a>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        activeVideo.id,
                        activeVideo.socialPostCopy,
                        activeVideo.code
                      )
                    }
                    className="py-2.5 px-3 bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 border border-amber-300 cursor-pointer"
                  >
                    {copiedId === activeVideo.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-700" />
                        <span>Đã Chép Bài!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Chép Bài Video</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Gọi {STORE_INFO.hotlineDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of All 9 Video Cards (3 Tuyến Hoa Videos + 6 Curated Internet Videos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {filteredVideos.map((vid) => {
              const isSelected = vid.id === activeVideo.id;
              return (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideoId(vid.id)}
                  className={`rounded-2xl overflow-hidden border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white text-stone-950 border-amber-400 shadow-xl ring-2 ring-amber-400/50'
                      : 'bg-stone-900/90 text-white border-stone-700 hover:border-stone-500'
                  }`}
                >
                  <div>
                    <div className="relative aspect-16/9 bg-stone-950 overflow-hidden">
                      <img
                        src={vid.posterImage}
                        alt={vid.title}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-lg text-[11px] font-extrabold ${
                            vid.sourceType === 'tuyen-hoa-local'
                              ? 'bg-amber-400 text-stone-950'
                              : 'bg-emerald-500 text-stone-950'
                          }`}
                        >
                          {vid.sourceType === 'tuyen-hoa-local'
                            ? 'Video Thật Tuyến Hoa'
                            : 'Video Bạt Tự Động Internet'}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="w-12 h-12 rounded-full bg-amber-400/95 text-stone-950 flex items-center justify-center shadow-lg">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-stone-200">
                        <span>{vid.code}</span>
                        <span>{vid.durationLabel}</span>
                      </div>
                    </div>

                    <div className="p-3.5 space-y-1.5">
                      <div
                        className={`text-xs font-bold ${
                          isSelected ? 'text-emerald-800' : 'text-amber-300'
                        }`}
                      >
                        {vid.channelOrAuthor}
                      </div>
                      <h5
                        className={`text-sm sm:text-base font-display font-extrabold leading-snug line-clamp-2 ${
                          isSelected ? 'text-stone-950' : 'text-white'
                        }`}
                      >
                        {vid.title}
                      </h5>
                      <p
                        className={`text-xs leading-relaxed line-clamp-2 ${
                          isSelected ? 'text-stone-700' : 'text-stone-300'
                        }`}
                      >
                        {vid.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`px-3.5 py-2.5 border-t flex items-center justify-between text-xs font-extrabold ${
                      isSelected
                        ? 'bg-amber-50 border-stone-200 text-amber-950'
                        : 'bg-stone-950/60 border-stone-800 text-emerald-300'
                    }`}
                  >
                    <span>{vid.priceHighlight}</span>
                    <span>{isSelected ? 'Đang phát ▲' : 'Bấm xem ▶'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox & Reader Modal for the 5 Photo Articles */}
      <AnimatePresence>
        {activeArticleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActiveArticleModal(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Image */}
              <div className="lg:col-span-6 bg-stone-950 flex items-center justify-center relative min-h-[280px] max-h-[50vh] lg:max-h-[90vh]">
                <img
                  src={activeArticleModal.image}
                  alt={activeArticleModal.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 text-white px-3.5 py-2 rounded-xl border border-amber-400/40 flex items-center justify-between text-xs font-bold">
                  <span className="text-amber-300">
                    MÀNH RÈM &amp; BẠT XẾP TUYẾN HOA • {STORE_INFO.hotlineDisplay}
                  </span>
                  <span className="bg-emerald-400 text-stone-950 px-2 py-0.5 rounded font-extrabold">
                    350.000đ/m² cả lắp
                  </span>
                </div>
              </div>

              {/* Right Full Article Text */}
              <div className="lg:col-span-6 p-5 sm:p-7 overflow-y-auto space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-950 font-mono text-xs font-extrabold">
                    Mã công trình: {activeArticleModal.code}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveArticleModal(null)}
                    className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-stone-950 leading-snug">
                  {activeArticleModal.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300">
                  <div className="text-xs font-bold text-emerald-950">Đơn giá trọn gói niêm yết:</div>
                  <div className="text-2xl font-mono font-extrabold text-emerald-900">
                    350.000 đ / 1 m² (Cả Công Lắp Đặt)
                  </div>
                </div>

                <div className="space-y-3 text-base text-stone-900 leading-relaxed">
                  {activeArticleModal.articleParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-3 border-t border-stone-200 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleOrderAwningArticle(activeArticleModal);
                      setActiveArticleModal(null);
                    }}
                    className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span>Đặt Lắp Mẫu Này (350.000đ/m²)</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
