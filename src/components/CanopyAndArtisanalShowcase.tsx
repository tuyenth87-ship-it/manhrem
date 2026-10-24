import React, { useState, useMemo } from 'react';
import {
  ANNOTATED_PRODUCT_POSTS,
  AnnotatedProductPost,
  MARKET_PRICE_SUMMARY_TABLE,
  NewProductCategory,
  calculateCanopyOrderTotal,
  filterAnnotatedProducts,
  generateFullCatalogFacebookPost,
} from '../data/canopyAndArtisanalData';
import { CartItem } from '../types/store';
import {
  CheckCircle2,
  Copy,
  FileText,
  Search,
  ShoppingBag,
  Truck,
  Type,
  X,
} from 'lucide-react';

interface CanopyAndArtisanalShowcaseProps {
  onAddToCart: (item: CartItem) => void;
  onRequestMeasurement: (curtainType: string, note: string) => void;
  onShowToast?: (msg: string) => void;
}

type FontScaleMode = 'normal' | 'large' | 'xlarge';

const CATEGORY_TABS: { id: NewProductCategory; label: string; count: number }[] = [
  { id: 'all', label: 'Tất Cả (14)', count: ANNOTATED_PRODUCT_POSTS.length },
  {
    id: 'man-khung-1tr',
    label: 'Màn Khung 1Tr/Bộ (4)',
    count: ANNOTATED_PRODUCT_POSTS.filter((p) => p.category === 'man-khung-1tr').length,
  },
  {
    id: 'tuong-ngoc-tuyen',
    label: 'Tương Ngọc Tuyến (4)',
    count: ANNOTATED_PRODUCT_POSTS.filter((p) => p.category === 'tuong-ngoc-tuyen').length,
  },
  {
    id: 'cong-trinh-video',
    label: 'Rèm Cửa & Công Trình (6)',
    count: ANNOTATED_PRODUCT_POSTS.filter((p) => p.category === 'cong-trinh-video').length,
  },
];

export const CanopyAndArtisanalShowcase: React.FC<CanopyAndArtisanalShowcaseProps> = ({
  onAddToCart,
  onRequestMeasurement,
  onShowToast,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<NewProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fontScale, setFontScale] = useState<FontScaleMode>('large');
  const [showMasterPostBox, setShowMasterPostBox] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<AnnotatedProductPost | null>(null);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string | null>(null);

  // Calculator state for Màn Khung 1.000.000đ/bộ (1,8m × 2,0m) & Combo
  const [selectedCanopyCode, setSelectedCanopyCode] = useState<string>('MK-TH-01');
  const [canopySets, setCanopySets] = useState<number>(1);
  const [curtainMeters, setCurtainMeters] = useState<number>(0);
  const [tuong500Count, setTuong500Count] = useState<number>(0);
  const [tuongGiftCount, setTuongGiftCount] = useState<number>(0);

  const filteredPosts = useMemo(
    () => filterAnnotatedProducts(selectedCategory, searchQuery),
    [selectedCategory, searchQuery]
  );

  const masterFacebookPost = useMemo(
    () => generateFullCatalogFacebookPost(selectedCategory),
    [selectedCategory]
  );

  const pricingResult = useMemo(
    () =>
      calculateCanopyOrderTotal({
        modelCode: selectedCanopyCode,
        setsCount: canopySets,
        includeWindowCurtainMeters: curtainMeters,
        tuongBottle500mlCount: tuong500Count,
        tuongGiftJarCount: tuongGiftCount,
      }),
    [selectedCanopyCode, canopySets, curtainMeters, tuong500Count, tuongGiftCount]
  );

  const canopyModels = useMemo(
    () => ANNOTATED_PRODUCT_POSTS.filter((p) => p.category === 'man-khung-1tr'),
    []
  );

  const bodyTextClass =
    fontScale === 'xlarge'
      ? 'text-lg sm:text-xl'
      : fontScale === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm sm:text-base';

  const cardTitleClass =
    fontScale === 'xlarge'
      ? 'text-xl sm:text-2xl'
      : fontScale === 'large'
      ? 'text-lg sm:text-xl'
      : 'text-base sm:text-lg';

  const handleCopyPost = (post: AnnotatedProductPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(post.facebookPostCopy).catch(() => {});
    }
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2500);
    if (onShowToast) {
      onShowToast(`Đã sao chép bài đăng "${post.shortTitle}"!`);
    }
  };

  const handleCopyMasterPost = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(masterFacebookPost).catch(() => {});
    }
    setCopiedId('master-post');
    setTimeout(() => setCopiedId(null), 2500);
    if (onShowToast) {
      onShowToast('Đã sao chép Bài Đăng Tổng Hợp & Bảng Giá!');
    }
  };

  const handleAddPostProductToCart = (post: AnnotatedProductPost) => {
    onAddToCart({
      productId: post.id,
      productName: `${post.shortTitle} (${post.code})`,
      variantId: `${post.code}-standard`,
      variantName: post.standardDimensions,
      size: post.standardDimensions,
      price: post.numericPrice,
      quantity: 1,
      category: post.category === 'man-khung-1tr' ? 'chan-ga-goi' : 'rem-cua',
      customNote: `Mã SP: ${post.code} - ${post.priceDisplay}`,
    });
  };

  const handleAddComboToCart = () => {
    if (pricingResult.finalTotal <= 0) {
      if (onShowToast) {
        onShowToast('Vui lòng chọn ít nhất 1 sản phẩm!');
      }
      return;
    }
    const chosenModel = canopyModels.find((m) => m.code === selectedCanopyCode);
    onAddToCart({
      productId: `combo-man-khung-${selectedCanopyCode.toLowerCase()}`,
      productName: `Đơn Đặt Màn Khung 1,8m×2,0m (${chosenModel?.shortTitle || selectedCanopyCode})`,
      variantId: `${selectedCanopyCode}-${canopySets}-${curtainMeters}-${tuong500Count}-${tuongGiftCount}`,
      variantName: pricingResult.summaryLine,
      size: 'Chuẩn Rộng 1,8m × Dài 2,0m',
      price: pricingResult.finalTotal,
      quantity: 1,
      category: 'chan-ga-goi',
      customNote: pricingResult.summaryLine,
    });
  };

  return (
    <section
      aria-label="Bảng Giá & Bài Đăng Sản Phẩm Ngắn Gọn Dễ Đọc"
      className="space-y-6 sm:space-y-8"
    >
      {/* 1. COMPACT HEADER & BẢNG GIÁ TÓM TẮT (NGẮN GỌN - CHỮ TO DỄ ĐỌC) */}
      <div className="bg-white rounded-3xl border border-stone-300 overflow-hidden shadow-xs">
        <div className="bg-stone-950 text-white p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Bảng Giá Các Sản Phẩm Đã Gửi Hình (So Với Giá Thị Trường)
            </h2>
            <p className="text-sm sm:text-base text-stone-300 mt-0.5">
              Ngắn gọn, chữ to dễ đọc – Bấm <strong className="text-amber-300">Copy Bài Đăng</strong> để đăng lên Facebook / Zalo.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* Font Size Toggle */}
            <div className="flex items-center bg-stone-800 p-1 rounded-xl border border-stone-700">
              <Type className="w-4 h-4 text-amber-300 mx-2" />
              <button
                type="button"
                onClick={() => setFontScale('normal')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                  fontScale === 'normal' ? 'bg-white text-stone-950' : 'text-stone-300'
                }`}
              >
                Vừa
              </button>
              <button
                type="button"
                onClick={() => setFontScale('large')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                  fontScale === 'large' ? 'bg-amber-400 text-stone-950' : 'text-stone-300'
                }`}
              >
                Chữ To
              </button>
              <button
                type="button"
                onClick={() => setFontScale('xlarge')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                  fontScale === 'xlarge' ? 'bg-emerald-500 text-stone-950' : 'text-stone-300'
                }`}
              >
                Rất To
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopyMasterPost}
              data-testid="copy-master-post-btn"
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-sm flex items-center gap-1.5 cursor-pointer"
            >
              {copiedId === 'master-post' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                  <span>Đã Copy!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Bài Tổng Hợp</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowMasterPostBox((prev) => !prev)}
              className="px-3.5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs sm:text-sm cursor-pointer border border-stone-700"
            >
              {showMasterPostBox ? 'Ẩn bài viết' : 'Xem bài tổng hợp'}
            </button>
          </div>
        </div>

        {/* Clean, Scannable 2-Column Price Grid (Minimal Text) */}
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 bg-stone-50/60">
          {MARKET_PRICE_SUMMARY_TABLE.map((row) => (
            <div
              key={row.id}
              className="bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <div className={`font-extrabold text-stone-950 ${bodyTextClass}`}>
                  {row.productGroup}
                </div>
                <div className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  Thị trường: <span className="line-through font-mono">{row.marketPrice}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-base sm:text-lg font-mono font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 tabular-nums">
                  {row.storePrice}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Master Post Box (Only visible when user clicks "Xem bài tổng hợp") */}
        {showMasterPostBox && (
          <div className="p-4 sm:p-6 border-t border-stone-200 bg-stone-100">
            <pre
              data-testid="master-facebook-post-content"
              className={`whitespace-pre-wrap font-sans text-stone-950 bg-white p-4 rounded-2xl border border-stone-300 ${bodyTextClass}`}
            >
              {masterFacebookPost}
            </pre>
          </div>
        )}
      </div>

      {/* 2. FILTER BAR (SHORT & CLEAN) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-stone-200">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-stone-950 text-amber-300'
                  : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm sản phẩm..."
            aria-label="Tìm kiếm sản phẩm"
            className="w-full pl-9 pr-8 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl text-stone-950 focus:outline-hidden focus:border-stone-950"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-900"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3. CONCISE PRODUCT CARDS (LARGE IMAGE + CLEAR PRICE + 2 KEY POINTS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            data-testid={`annotated-post-card-${post.code}`}
            className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:border-amber-500 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Media Display */}
              <div className="relative aspect-4/3 bg-stone-950 overflow-hidden">
                {post.mediaType === 'video' && post.videoUrl ? (
                  <video
                    src={post.videoUrl}
                    poster={post.imageUrl}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={post.imageUrl}
                    alt={post.shortTitle}
                    referrerPolicy="no-referrer"
                    onClick={() => {
                      setActiveArticleModal(post);
                      setActiveGalleryImg(post.imageUrl);
                    }}
                    className="w-full h-full object-cover cursor-pointer hover:scale-103 transition-transform duration-500"
                  />
                )}

                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-950/85 text-amber-300 text-xs font-extrabold font-mono">
                    {post.code}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-stone-950 text-xs font-extrabold">
                    {post.highlightTag}
                  </span>
                </div>
              </div>

              {/* Minimal, High-Impact Card Content */}
              <div className="p-4 sm:p-5 space-y-3">
                <h3 className={`font-display font-extrabold text-stone-950 leading-snug ${cardTitleClass}`}>
                  {post.shortTitle}
                </h3>

                {/* Clear Price Box */}
                <div className="bg-amber-50/90 border border-amber-300 rounded-2xl p-3 flex items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-red-700 font-mono tabular-nums">
                      {post.priceDisplay}
                    </div>
                    <div className="text-xs text-stone-600 font-medium mt-0.5">
                      {post.standardDimensions}
                    </div>
                  </div>
                  <div className="text-right text-xs text-stone-500">
                    <div>Thị trường:</div>
                    <div className="line-through font-mono font-bold">
                      {post.marketPriceTiers[0]?.marketPrice || '1.300.000đ'}
                    </div>
                  </div>
                </div>

                {/* 2 Short, Complete Bullet Points (No Cut-off Text) */}
                <ul className="space-y-1.5 text-sm text-stone-800 font-medium">
                  {post.visualAnnotations.slice(0, 2).map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-extrabold shrink-0">✓</span>
                      <span>{note.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 Clean Action Buttons */}
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 flex items-center gap-2 border-t border-stone-100">
              <button
                type="button"
                onClick={() => handleAddPostProductToCart(post)}
                className="flex-1 py-2.5 px-3 rounded-xl bg-stone-950 hover:bg-stone-800 text-amber-300 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>Đặt Mua</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopyPost(post)}
                className="py-2.5 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-stone-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1 cursor-pointer border border-amber-300"
                title="Copy bài đăng Facebook / Zalo"
              >
                {copiedId === post.id ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span>Đã Copy</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 shrink-0" />
                    <span>Copy Bài</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveArticleModal(post);
                  setActiveGalleryImg(post.imageUrl);
                }}
                className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1 cursor-pointer"
                title="Xem chi tiết bài viết & ghi chú"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Chi Tiết</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 4. COMPACT CALCULATOR: TÍNH NHANH ĐƠN MÀN KHUNG 1TR/BỘ */}
      <div
        id="bo-tinh-gia-man-khung"
        className="bg-amber-50/70 rounded-3xl border border-amber-300 p-4 sm:p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-display font-extrabold text-stone-950">
                Tính Nhanh Đơn Màn Khung 1.000.000đ/Bộ (1,8m × 2,0m) &amp; Tương Ngọc Tuyến
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Giảm ngay <strong className="text-emerald-800">50.000đ/bộ</strong> khi lắp từ 2 bộ màn khung trở lên.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {canopyModels.map((model) => (
                <button
                  key={model.code}
                  type="button"
                  onClick={() => setSelectedCanopyCode(model.code)}
                  className={`p-2 rounded-xl border text-left transition-all flex items-center gap-2 cursor-pointer ${
                    selectedCanopyCode === model.code
                      ? 'bg-stone-950 text-amber-300 border-amber-400'
                      : 'bg-white text-stone-900 border-stone-200'
                  }`}
                >
                  <img
                    src={model.imageUrl}
                    alt={model.shortTitle}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-lg object-cover shrink-0"
                  />
                  <span className="text-xs font-extrabold truncate">{model.code}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <label htmlFor="canopy-sets-input" className="block text-xs font-bold text-stone-700">
                  Màn khung (1Tr):
                </label>
                <input
                  id="canopy-sets-input"
                  type="number"
                  min={0}
                  max={20}
                  value={canopySets}
                  onChange={(e) => setCanopySets(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1 text-center font-mono font-extrabold text-sm py-1 border border-stone-200 rounded-lg"
                />
              </div>

              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <label htmlFor="curtain-meters-input" className="block text-xs font-bold text-stone-700">
                  Rèm cửa (600k/m):
                </label>
                <input
                  id="curtain-meters-input"
                  type="number"
                  min={0}
                  step={0.5}
                  max={50}
                  value={curtainMeters}
                  onChange={(e) => setCurtainMeters(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full mt-1 text-center font-mono font-extrabold text-sm py-1 border border-stone-200 rounded-lg"
                />
              </div>

              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <label htmlFor="tuong-500-input" className="block text-xs font-bold text-stone-700">
                  Tương 500ml (65k):
                </label>
                <input
                  id="tuong-500-input"
                  type="number"
                  min={0}
                  max={50}
                  value={tuong500Count}
                  onChange={(e) => setTuong500Count(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1 text-center font-mono font-extrabold text-sm py-1 border border-stone-200 rounded-lg"
                />
              </div>

              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <label htmlFor="tuong-gift-input" className="block text-xs font-bold text-stone-700">
                  Bình biếu (120k):
                </label>
                <input
                  id="tuong-gift-input"
                  type="number"
                  min={0}
                  max={50}
                  value={tuongGiftCount}
                  onChange={(e) => setTuongGiftCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1 text-center font-mono font-extrabold text-sm py-1 border border-stone-200 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-950 text-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold text-amber-200">Tổng Cộng:</span>
              <span
                data-testid="canopy-calculator-total"
                className="text-2xl font-extrabold text-amber-300 font-mono tabular-nums"
              >
                {pricingResult.finalTotal.toLocaleString('vi-VN')}đ
              </span>
            </div>
            <p className="text-xs text-stone-300 truncate">{pricingResult.summaryLine}</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleAddComboToCart}
                className="py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Thêm Giỏ Hàng</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  onRequestMeasurement(
                    `Màn khung 1,8m×2,0m (${selectedCanopyCode})`,
                    pricingResult.summaryLine
                  )
                }
                className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Gọi Thợ Lắp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Details & Post Modal (Opens only when user clicks "Chi Tiết") */}
      {activeArticleModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeArticleModal.title}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveArticleModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-amber-400 p-5 sm:p-7 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-3">
              <div>
                <div className="text-xs font-mono font-extrabold text-amber-900">
                  MÃ: {activeArticleModal.code} · {activeArticleModal.marketPriceRange}
                </div>
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-stone-950 mt-0.5">
                  {activeArticleModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticleModal(null)}
                aria-label="Đóng"
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden bg-stone-950 aspect-16/10 max-h-[380px] flex items-center justify-center">
              {activeArticleModal.mediaType === 'video' && activeArticleModal.videoUrl ? (
                <video
                  src={activeArticleModal.videoUrl}
                  poster={activeArticleModal.imageUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={activeGalleryImg || activeArticleModal.imageUrl}
                  alt={activeArticleModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Market Price Tiers */}
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-stone-900">Bảng Giá Theo Kích Thước:</span>
                <span className="text-lg font-extrabold text-red-700 font-mono">
                  {activeArticleModal.priceDisplay}
                </span>
              </div>
              <div className="divide-y divide-amber-200/80 text-sm">
                {activeArticleModal.marketPriceTiers.map((tier, idx) => (
                  <div key={idx} className="py-1.5 flex items-center justify-between gap-2">
                    <span className="font-bold text-stone-800">{tier.sizeOrOption}</span>
                    <span className="font-mono">
                      <span className="line-through text-stone-400 mr-2">{tier.marketPrice}</span>
                      <strong className="text-emerald-800">{tier.storePrice}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ready-to-copy Facebook/Zalo Ad Copy */}
            <div className="bg-stone-950 text-amber-50 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-extrabold text-amber-300">
                  NỘI DUNG BÀI ĐĂNG FACEBOOK / ZALO:
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyPost(activeArticleModal)}
                  className="px-3 py-1 rounded-lg bg-amber-400 text-stone-950 text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Bài Viết</span>
                </button>
              </div>
              <pre className="text-sm text-amber-50 whitespace-pre-wrap font-sans leading-relaxed">
                {activeArticleModal.facebookPostCopy}
              </pre>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
