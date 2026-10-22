import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Ruler, 
  CheckCircle2, 
  PhoneCall, 
  Copy, 
  Check, 
  ShieldCheck, 
  ChevronRight, 
  Share2, 
  Eye, 
  Calculator, 
  Layers, 
  Maximize2, 
  ArrowRight,
  Info,
  BadgePercent,
  Sliders
} from 'lucide-react';
import { CURTAIN_ARTICLES, CurtainArticle, CurtainSizeGuide } from '../data/curtainArticles';
import { STORE_INFO } from '../data/products';

interface CurtainGuideArticlesProps {
  onSelectEstimator?: (estimatorId: string) => void;
  onRequestMeasurement: (curtainType: string, note: string) => void;
  onOpenChat?: () => void;
  onShowToast: (msg: string) => void;
}

export const CurtainGuideArticles: React.FC<CurtainGuideArticlesProps> = ({
  onSelectEstimator,
  onRequestMeasurement,
  onOpenChat,
  onShowToast,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedArticleId, setSelectedArticleId] = useState<string>(CURTAIN_ARTICLES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<{ src: string; caption: string } | null>(null);

  // Active article
  const currentArticle = CURTAIN_ARTICLES.find((a) => a.id === selectedArticleId) || CURTAIN_ARTICLES[0];

  // Quick interactive dimension calculation state inside the article
  const [customWidth, setCustomWidth] = useState<number>(2.0);
  const [customHeight, setCustomHeight] = useState<number>(2.4);
  const [selectedSizeGuideIndex, setSelectedSizeGuideIndex] = useState<number>(0);

  const filteredArticles = activeFilter === 'all'
    ? CURTAIN_ARTICLES
    : CURTAIN_ARTICLES.filter((a) => a.curtainType === activeFilter);

  const handleCopyAd = (article: CurtainArticle) => {
    const textToCopy = `【 ${article.adCopy.heading} 】\n\n${article.adCopy.body}\n\n${article.adCopy.offer}\n\n${article.adCopy.cta}\n\n📍 Rèm Chăn Đệm Tuyến Hoa - Đại lý cấp 1 tại Chợ Cháy, Đồng Tân, Ứng Hòa, Hà Nội\n📞 Hotline / Zalo: ${STORE_INFO.hotlineDisplay}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedId(article.id);
        onShowToast('Đã sao chép nội dung bài viết quảng cáo vào bộ nhớ tạm!');
        setTimeout(() => setCopiedId(null), 3000);
      });
    } else {
      onShowToast('Đã chọn bài viết quảng cáo!');
    }
  };

  // Quick estimate calculation based on custom width & height
  const calculateQuickPrice = () => {
    if (currentArticle.priceUnit === 'mét ngang hoàn thiện') {
      return customWidth * currentArticle.priceFrom;
    } else if (currentArticle.priceUnit === 'm²') {
      const area = Math.max(1, customWidth * customHeight);
      return area * currentArticle.priceFrom;
    } else {
      return currentArticle.priceFrom;
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-stone-100/70 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Cẩm Nang May Đo & Bài Viết Quảng Cáo Thực Tế</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Tư Vấn Từng Loại Rèm Theo Chất Liệu & Kích Cỡ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Hình ảnh thi công thật 100% tại nhà khách hàng Ứng Hòa do thợ Tuyến trực tiếp đảm nhiệm. Bảng kích cỡ chuẩn, công thức tính giá minh bạch và bài viết quảng cáo trọn gói.
          </p>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-8 no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
              activeFilter === 'all'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-300'
            }`}
          >
            Tất Cả Loại Rèm ({CURTAIN_ARTICLES.length})
          </button>
          {CURTAIN_ARTICLES.map((art) => (
            <button
              key={art.id}
              type="button"
              onClick={() => {
                setActiveFilter(art.curtainType);
                setSelectedArticleId(art.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
                activeFilter === art.curtainType
                  ? 'bg-amber-700 text-white shadow-md font-bold'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-300'
              }`}
            >
              <span>{art.categoryLabel}</span>
            </button>
          ))}
        </div>

        {/* Quick Selection Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {filteredArticles.map((art) => {
            const isSelected = art.id === selectedArticleId;
            return (
              <button
                key={art.id}
                type="button"
                onClick={() => setSelectedArticleId(art.id)}
                className={`text-left rounded-2xl p-2.5 sm:p-3 transition-all relative overflow-hidden flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-amber-600 shadow-lg ring-2 ring-amber-500/30 -translate-y-1'
                    : 'bg-white/80 border-stone-200 hover:border-stone-400 hover:bg-white'
                }`}
              >
                <div>
                  <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-2 bg-stone-100">
                    <img
                      src={art.primaryImage}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className={`absolute top-1.5 left-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs ${art.badgeColor}`}>
                      {art.badge.split('&')[0]}
                    </span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-stone-900 line-clamp-2 leading-snug">
                    {art.categoryLabel}
                  </h3>
                </div>
                <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="text-stone-500">Từ</span>
                  <span className="font-extrabold text-amber-700">
                    {art.priceFrom.toLocaleString('vi-VN')}đ/{art.priceUnit.includes('m²') ? 'm²' : 'm'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Article Presentation Box */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          {/* Article Header Banner */}
          <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white p-5 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-xs ${currentArticle.badgeColor}`}>
                {currentArticle.badge}
              </span>
              <span className="text-xs bg-white/20 backdrop-blur-xs text-stone-200 px-2.5 py-1 rounded-full">
                {currentArticle.categoryLabel}
              </span>
              <span className="text-xs text-amber-300 ml-auto flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bảo hành 3 năm tận nhà</span>
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-snug text-white">
              {currentArticle.title}
            </h1>
            <p className="mt-2 text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {currentArticle.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-8">
            {/* Left 7 Columns: Real Images, Material Deep-Dive & Sizing Guide */}
            <div className="lg:col-span-7 space-y-6">
              {/* Primary Real Installation Image with Detailed Technical Caption */}
              <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-sm">
                <div className="relative group aspect-16/10 sm:aspect-16/9 bg-stone-900">
                  <img
                    src={currentArticle.primaryImage}
                    alt={currentArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setPreviewImage({ src: currentArticle.primaryImage, caption: currentArticle.primaryImageCaption })}
                    className="absolute bottom-3 right-3 p-2 bg-stone-900/80 hover:bg-stone-900 text-white rounded-xl backdrop-blur-xs text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Xem ảnh lớn</span>
                  </button>
                </div>
                <div className="p-3.5 bg-stone-50 border-t border-stone-200">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      <strong className="text-stone-900">Hình ảnh thực tế: </strong>
                      {currentArticle.primaryImageCaption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery thumbnails */}
              {currentArticle.galleryImages.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-stone-500" />
                    <span>Hình ảnh liên quan tại các công trình khác</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {currentArticle.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setPreviewImage(img)}
                        className="rounded-xl overflow-hidden border border-stone-200 text-left bg-stone-50 hover:border-amber-500 transition-colors group relative"
                      >
                        <div className="aspect-4/3 overflow-hidden bg-stone-100">
                          <img
                            src={img.src}
                            alt={img.caption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <p className="p-2 text-[10px] text-stone-600 line-clamp-2 leading-tight">
                          {img.caption}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 1. Material Specs Breakdown Table */}
              <div className="rounded-2xl border border-stone-200 p-4 sm:p-5 bg-stone-50/50">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-amber-800" />
                  <h4 className="font-extrabold text-sm sm:text-base text-stone-900">
                    {currentArticle.materialHeadline}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentArticle.materialDetails.map((mat, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-amber-900">{mat.part}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                          {mat.origin}
                        </span>
                      </div>
                      <p className="text-xs text-stone-800 font-semibold mb-1">{mat.material}</p>
                      <p className="text-[11px] text-stone-600 leading-tight flex items-start gap-1">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{mat.feature}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Standard Size Guide Table */}
              <div className="rounded-2xl border border-stone-200 p-4 sm:p-5 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-amber-800" />
                    <h4 className="font-extrabold text-sm sm:text-base text-stone-900">
                      Bảng Kích Cỡ Tiêu Chuẩn & Phương Pháp May Đo
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Khảo sát tận nhà 0đ
                  </span>
                </div>

                <div className="space-y-3">
                  {currentArticle.sizeGuides.map((guide, idx) => {
                    const isGuideSelected = idx === selectedSizeGuideIndex;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSizeGuideIndex(idx)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isGuideSelected
                            ? 'bg-amber-50/60 border-amber-500 ring-1 ring-amber-400'
                            : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                          <span className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] flex items-center justify-center font-mono">
                              {idx + 1}
                            </span>
                            {guide.doorType}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded font-semibold bg-stone-200/80 text-stone-800">
                            {guide.installStyle}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mt-2">
                          <div className="bg-white p-2 rounded-lg border border-stone-200">
                            <span className="text-stone-500 block text-[10px]">Kích thước tiêu chuẩn:</span>
                            <span className="font-semibold text-stone-800">{guide.recommendedSize}</span>
                          </div>
                          <div className="bg-white p-2 rounded-lg border border-stone-200">
                            <span className="text-stone-500 block text-[10px]">Dự toán hoàn thiện:</span>
                            <span className="font-bold text-amber-800">{guide.approxPriceRange}</span>
                          </div>
                        </div>
                        <p className="mt-2 text-[11px] text-stone-600 italic">
                          💡 {guide.note}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Measurement Advice Box */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Lưu ý đo đạc từ thợ Tuyến: </strong>
                    <span>{currentArticle.measurementTip}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Quick Estimator, Ad Copy & CTAs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Interactive Quick Price Calculator Widget */}
              <div className="rounded-2xl border-2 border-amber-500/40 p-5 bg-gradient-to-b from-amber-50/50 to-white shadow-md">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-200">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-800" />
                    <h4 className="font-extrabold text-sm sm:text-base text-stone-900">
                      Tính Nhanh Chi Phí Cửa Của Bạn
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-amber-800 font-mono">
                    {currentArticle.priceUnit}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1 font-semibold text-stone-700">
                      <span>Chiều rộng cửa (m):</span>
                      <span className="font-mono text-amber-900 font-bold">{customWidth.toFixed(2)}m</span>
                    </div>
                    <input
                      type="range"
                      min={0.8}
                      max={6.0}
                      step={0.1}
                      value={customWidth}
                      onChange={(e) => setCustomWidth(parseFloat(e.target.value))}
                      className="w-full accent-amber-700 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                      <span>0.8m</span>
                      <span>2.5m</span>
                      <span>4.0m</span>
                      <span>6.0m</span>
                    </div>
                  </div>

                  {currentArticle.priceUnit === 'm²' && (
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1 font-semibold text-stone-700">
                        <span>Chiều cao cửa (m):</span>
                        <span className="font-mono text-amber-900 font-bold">{customHeight.toFixed(2)}m</span>
                      </div>
                      <input
                        type="range"
                        min={1.0}
                        max={3.5}
                        step={0.1}
                        value={customHeight}
                        onChange={(e) => setCustomHeight(parseFloat(e.target.value))}
                        className="w-full accent-amber-700 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                        <span>1.0m</span>
                        <span>2.2m</span>
                        <span>2.8m</span>
                        <span>3.5m</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Calculated Result Display */}
                <div className="bg-white p-3.5 rounded-xl border border-amber-300 shadow-inner mb-4 text-center">
                  <div className="text-[11px] text-stone-600 uppercase font-semibold">
                    Dự toán tạm tính ({currentArticle.priceUnit === 'm²' ? `${(customWidth * customHeight).toFixed(1)}m²` : `${customWidth.toFixed(1)} mét ngang`})
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-800 font-mono my-1">
                    {calculateQuickPrice().toLocaleString('vi-VN')} đ
                  </div>
                  <div className="text-[10px] text-emerald-700 font-semibold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Đã gồm trọn gói phụ kiện + công thợ lắp tại Ứng Hòa</span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      onRequestMeasurement(
                        `${currentArticle.categoryLabel} (Rộng ${customWidth}m x Cao ${customHeight}m)`,
                        `Khách đặt lịch khảo sát từ cẩm nang báo giá (${currentArticle.title})`
                      );
                      onShowToast(`Đã thêm yêu cầu đo đạc "${currentArticle.categoryLabel}" vào lịch hẹn!`);
                    }}
                    className="w-full py-2.5 px-4 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
                  >
                    <Ruler className="w-4 h-4" />
                    <span>Đặt Lịch Thợ Tuyến Đo Tận Nhà (0đ)</span>
                  </button>

                  {onSelectEstimator && (
                    <button
                      type="button"
                      onClick={() => onSelectEstimator(currentArticle.estimatorTypeId)}
                      className="w-full py-2 px-4 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sliders className="w-3.5 h-3.5 text-stone-600" />
                      <span>Mở công cụ dự toán đầy đủ chi tiết</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Ready-to-use Advertising Post Copy Box (Nội Dung Đăng Quảng Cáo Mạng Xã Hội) */}
              <div className="rounded-2xl border border-stone-200 p-4 sm:p-5 bg-stone-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-stone-700" />
                    <h4 className="font-extrabold text-xs sm:text-sm text-stone-900">
                      Mẫu Bài Đăng Quảng Cáo Chuẩn
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyAd(currentArticle)}
                    className="px-2.5 py-1 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors shadow-2xs"
                  >
                    {copiedId === currentArticle.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã copy!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-600" />
                        <span>Sao chép bài</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 font-sans leading-relaxed space-y-2 max-h-56 overflow-y-auto select-all">
                  <p className="font-bold text-amber-900">{currentArticle.adCopy.heading}</p>
                  <p className="whitespace-pre-line text-stone-700">{currentArticle.adCopy.body}</p>
                  <p className="font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg">
                    {currentArticle.adCopy.offer}
                  </p>
                  <p className="font-bold text-stone-900">{currentArticle.adCopy.cta}</p>
                </div>
                <p className="text-[10px] text-stone-500 mt-2">
                  * Dễ dàng sao chép để đăng lên Zalo cá nhân, Fanpage Facebook hoặc gửi trực tiếp cho người thân tham khảo.
                </p>
              </div>

              {/* Hotline Contact & Personal Commitment Card */}
              <div className="rounded-2xl bg-stone-900 text-white p-4 sm:p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                    <img
                      src="/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg"
                      alt="Anh Tuyến"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Anh Tuyến - Chủ Tiệm</h5>
                    <p className="text-xs text-amber-400 font-medium">Trực tiếp tư vấn & khảo sát tận nhà</p>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  "Bà con ở Ứng Hòa chỉ cần gọi điện hoặc nhắn tin, Tuyến sẽ mang đầy đủ mẫu vải, mẫu nhôm tới tận nhà đo đạc và tư vấn hoàn toàn miễn phí!"
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>0344 727 528</span>
                  </a>
                  {onOpenChat && (
                    <button
                      type="button"
                      onClick={onOpenChat}
                      className="py-2 px-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                      <span>Chat Tư Vấn</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Lightbox Modal for Photo Inspection */}
        <AnimatePresence>
          {previewImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setPreviewImage(null)}
            >
              <div
                className="max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
                  <img
                    src={previewImage.src}
                    alt={previewImage.caption}
                    className="max-h-[75vh] w-auto object-contain mx-auto"
                  />
                  <button
                    type="button"
                    onClick={() => setPreviewImage(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-800/80 text-white flex items-center justify-center hover:bg-stone-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-4 sm:p-5 bg-stone-900 text-white border-t border-stone-800">
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {previewImage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
