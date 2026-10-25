import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AnnotatedProductPost,
  DEDUPLICATION_SUMMARY,
  MARKET_PRICE_SUMMARY_TABLE,
  NewProductCategory,
  calculateCanopyOrderTotal,
  filterAnnotatedProducts,
  generateFullCatalogFacebookPost,
  getDeduplicatedProductPosts,
} from '../data/canopyAndArtisanalData';
import { CartItem } from '../types/store';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  FileText,
  Filter,
  ImagePlus,
  Search,
  ShoppingBag,
  Sparkles,
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

const BAKED_BRAND_CODES = new Set([
  'CM-TH-01',
  'DLX-EH-01',
  'DCS-EH-01',
  'BC-TH-01',
  'XSX-TH-01',
  'RTO-TH-01',
  'RC-TH-01',
  'QT-NT-01',
  'SR-TH-01',
]);

const DEDUPLICATED_POSTS = getDeduplicatedProductPosts();

const CATEGORY_TABS: { id: NewProductCategory; label: string; count: number }[] = [
  {
    id: 'all',
    label: `Tất Cả (${DEDUPLICATED_POSTS.length})`,
    count: DEDUPLICATED_POSTS.length,
  },
  {
    id: 'man-khung-1tr',
    label: `Đệm · Chiếu · Màn Khung (${DEDUPLICATED_POSTS.filter((p) => p.category === 'man-khung-1tr').length})`,
    count: DEDUPLICATED_POSTS.filter((p) => p.category === 'man-khung-1tr').length,
  },
  {
    id: 'tuong-ngoc-tuyen',
    label: `Tương Ngọc Tuyến (${DEDUPLICATED_POSTS.filter((p) => p.category === 'tuong-ngoc-tuyen').length})`,
    count: DEDUPLICATED_POSTS.filter((p) => p.category === 'tuong-ngoc-tuyen').length,
  },
  {
    id: 'cong-trinh-video',
    label: `Rèm · Bạt · Showroom (${DEDUPLICATED_POSTS.filter((p) => p.category === 'cong-trinh-video').length})`,
    count: DEDUPLICATED_POSTS.filter((p) => p.category === 'cong-trinh-video').length,
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
  const [showDedupReport, setShowDedupReport] = useState<boolean>(false);
  const [showAllPrices, setShowAllPrices] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<AnnotatedProductPost | null>(null);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string | null>(null);

  // Custom Photo Stamper state ("Chèn Chữ Tuyến Hoa Lên Ảnh")
  const [showPhotoStamper, setShowPhotoStamper] = useState<boolean>(false);
  const [customStampImgUrl, setCustomStampImgUrl] = useState<string>(
    '/assets/aistudio/IMG_4550_18a407c3.JPG'
  );
  const [customBrandTitle, setCustomBrandTitle] = useState<string>(
    'SHOWROOM CHĂN GA GỐI ĐỆM & RÈM CỬA TUYẾN HOA'
  );
  const [customProductLine, setCustomProductLine] = useState<string>(
    'Màn Khung Inox Cao Cấp Rộng 1,8m × Dài 2,0m'
  );
  const [customPriceBadge, setCustomPriceBadge] = useState<string>(
    'Trọn Gói: 1.000.000đ/bộ (Cả Lắp) · ĐT/Zalo: 0344.727.528'
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const visiblePriceRows = useMemo(
    () => (showAllPrices ? MARKET_PRICE_SUMMARY_TABLE : MARKET_PRICE_SUMMARY_TABLE.slice(0, 6)),
    [showAllPrices]
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
    () =>
      DEDUPLICATED_POSTS.filter(
        (p) => p.category === 'man-khung-1tr' && p.code.startsWith('MK-')
      ),
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

  // Renders any image with "TUYẾN HOA" top & bottom banners onto a 1200x900 PNG and downloads it
  const renderAndDownloadStampedPng = (
    imgSrc: string,
    topBrandText: string,
    productTitleText: string,
    priceAndSpecText: string,
    fileName: string,
    alreadyBaked: boolean = false
  ) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 900;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.fillStyle = '#0c0a09';
      ctx.fillRect(0, 0, 1200, 900);
      const scale = Math.max(1200 / img.width, 900 / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const drawX = (1200 - drawW) / 2;
      const drawY = (900 - drawH) / 2;
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      if (!alreadyBaked) {
        ctx.fillStyle = 'rgba(28, 25, 23, 0.94)';
        ctx.fillRect(0, 0, 1200, 82);
        ctx.fillStyle = '#D4AF37';
        ctx.fillRect(0, 78, 1200, 4);

        ctx.fillStyle = '#F5E6C8';
        ctx.font = '800 28px "Be Vietnam Pro", sans-serif';
        ctx.fillText(topBrandText, 28, 52);

        ctx.fillStyle = '#D4AF37';
        ctx.beginPath();
        ctx.roundRect(880, 16, 292, 50, 12);
        ctx.fill();
        ctx.fillStyle = '#1c1917';
        ctx.font = '900 22px "Be Vietnam Pro", sans-serif';
        ctx.fillText('ĐT/Zalo: 0344.727.528', 902, 48);

        const grad = ctx.createLinearGradient(0, 680, 0, 900);
        grad.addColorStop(0, 'rgba(12, 10, 9, 0)');
        grad.addColorStop(0.3, 'rgba(12, 10, 9, 0.92)');
        grad.addColorStop(1, 'rgba(12, 10, 9, 0.98)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 680, 1200, 220);

        ctx.fillStyle = '#D4AF37';
        ctx.fillRect(28, 745, 8, 125);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 32px "Be Vietnam Pro", sans-serif';
        ctx.fillText(productTitleText.slice(0, 56), 52, 788);

        ctx.fillStyle = '#F5E6C8';
        ctx.font = '700 25px "Be Vietnam Pro", sans-serif';
        ctx.fillText(priceAndSpecText.slice(0, 68), 52, 832);

        ctx.fillStyle = '#d6d3d1';
        ctx.font = '600 20px "Be Vietnam Pro", sans-serif';
        ctx.fillText(
          'Showroom Tuyến Hoa – Chợ Cháy, Ứng Hòa, Hà Nội (Miễn phí giao & lắp đặt tận nhà)',
          52,
          868
        );
      }

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (onShowToast) {
        onShowToast(`Đã tải ảnh có chữ Tuyến Hoa (${fileName})!`);
      }
    };
    img.src = imgSrc;
  };

  const handleDownloadPostBrandedImage = (post: AnnotatedProductPost) => {
    const isBaked = BAKED_BRAND_CODES.has(post.code);
    renderAndDownloadStampedPng(
      post.imageUrl,
      'SHOWROOM & XƯỞNG TUYẾN HOA CHÍNH HÃNG',
      `${post.shortTitle} (${post.code})`,
      `Giá Tuyến Hoa: ${post.priceDisplay} · ${post.standardDimensions}`,
      `Tuyen-Hoa-${post.code}.png`,
      isBaked
    );
  };

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomStampImgUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
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
      aria-label="Bảng Giá & Bài Đăng Sản Phẩm Chèn Chữ Tuyến Hoa"
      className="space-y-7 sm:space-y-9"
    >
      {/* 1. CONCISE LUXURY HEADER & CURATED MARKET PRICE LEDGER */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white rounded-3xl border border-[#E5DEC9] overflow-hidden shadow-[0_12px_36px_-12px_rgba(28,25,23,0.06)]"
      >
        <div className="bg-[#1C1917] text-white p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#332C25]">
          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#D4AF37]">
              BẢNG GIÁ NIÊM YẾT · CHÍNH HÃNG TUYẾN HOA
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#FAF7F2] tracking-tight">
              Danh Mục Sản Phẩm Độc Bản &amp; Báo Giá Nhanh
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* Font Size Toggle */}
            <div className="flex items-center bg-[#2A2521] p-1 rounded-xl border border-[#3E3730]">
              <Type className="w-3.5 h-3.5 text-[#D4AF37] mx-1.5" />
              <button
                type="button"
                onClick={() => setFontScale('normal')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  fontScale === 'normal' ? 'bg-[#FAF7F2] text-[#1C1917]' : 'text-[#D6CEC2]'
                }`}
              >
                Vừa
              </button>
              <button
                type="button"
                onClick={() => setFontScale('large')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  fontScale === 'large' ? 'bg-[#D4AF37] text-[#1C1917]' : 'text-[#D6CEC2]'
                }`}
              >
                Chữ To
              </button>
              <button
                type="button"
                onClick={() => setFontScale('xlarge')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  fontScale === 'xlarge' ? 'bg-[#F5E6C8] text-[#1C1917]' : 'text-[#D6CEC2]'
                }`}
              >
                Rất To
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowPhotoStamper((prev) => !prev)}
              data-testid="toggle-photo-stamper-btn"
              className="px-3.5 py-2 rounded-xl bg-[#2A2521] hover:bg-[#38312B] text-[#F5E6C8] border border-[#4A4036] font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ImagePlus className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{showPhotoStamper ? 'Đóng Chèn Chữ' : 'Chèn Chữ Lên Ảnh'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyMasterPost}
              data-testid="copy-master-post-btn"
              className="px-3.5 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#DFBE4F] text-[#1C1917] font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedId === 'master-post' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1C1917]" />
                  <span>Đã Copy</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Bảng Giá</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowMasterPostBox((prev) => !prev)}
              className="px-3 py-2 rounded-xl bg-transparent hover:bg-[#2A2521] text-[#D6CEC2] font-semibold text-xs cursor-pointer border border-[#3E3730]"
            >
              {showMasterPostBox ? 'Ẩn bài' : 'Bài tổng hợp'}
            </button>
          </div>
        </div>

        {/* CONCISE DEDUPLICATION REPORT BANNER */}
        <div
          data-testid="deduplication-report-banner"
          className="bg-[#F4EFE6] text-stone-800 px-5 py-2.5 sm:px-6 border-b border-[#E5DEC9] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700">
            <Filter className="w-3.5 h-3.5 text-[#9A6F2E] shrink-0" />
            <span>
              <strong className="text-[#1C1917] font-bold">
                Đã lọc bỏ {DEDUPLICATION_SUMMARY.totalRemovedDuplicates} ảnh trùng
              </strong>{' '}
              · Giữ lại{' '}
              <strong className="text-[#8C6224] font-bold">
                {DEDUPLICATION_SUMMARY.totalUniquePublished} ảnh độc bản
              </strong>{' '}
              trong <strong className="text-[#1C1917]">{DEDUPLICATED_POSTS.length} bài đăng</strong>.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowDedupReport((prev) => !prev)}
            data-testid="toggle-dedup-details-btn"
            className="px-3 py-1 rounded-lg bg-white hover:bg-[#FAF7F2] text-stone-800 font-bold text-xs whitespace-nowrap cursor-pointer self-start sm:self-auto border border-[#D8C8AC] transition-colors"
          >
            {showDedupReport ? 'Thu gọn' : 'Chi tiết 18 ảnh đã lọc'}
          </button>
        </div>

        <AnimatePresence>
          {showDedupReport && (
            <motion.div
              key="dedup-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              data-testid="deduplication-details-panel"
              className="p-5 bg-[#FAF7F2] border-b border-[#E5DEC9] grid grid-cols-1 md:grid-cols-2 gap-3 overflow-hidden"
            >
              {DEDUPLICATION_SUMMARY.groups.map((grp) => (
                <div
                  key={grp.id}
                  className="bg-white p-3.5 rounded-2xl border border-[#E5DEC9] flex flex-col justify-between gap-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#1C1917] text-xs sm:text-sm">
                      {grp.groupTitle}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-[#F4EFE6] text-[#8C6224] border border-[#E2D5BE] font-mono font-bold text-xs shrink-0">
                      -{grp.removedCount} ảnh trùng
                    </span>
                  </div>
                  <p className="text-xs text-stone-600">{grp.reason}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Custom Photo Brand Stamper with Smooth Scene Expand */}
        <AnimatePresence>
          {showPhotoStamper && (
            <motion.div
              key="photo-stamper"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              data-testid="custom-photo-stamper-panel"
              className="p-5 sm:p-6 bg-[#FAF7F2] border-b border-[#E5DEC9] space-y-4 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-[#1C1917] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#9A6F2E]" />
                    <span>Đóng Dấu Thương Hiệu &quot;Tuyến Hoa&quot; Lên Ảnh</span>
                  </h3>
                  <p className="text-xs text-stone-600">
                    Tải ảnh lên, chỉnh dòng chú thích và tải về file .PNG sắc nét.
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCustomPhotoUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 rounded-xl bg-[#1C1917] hover:bg-[#2E2924] text-[#F5E6C8] font-bold text-xs flex items-center gap-2 cursor-pointer self-start"
                >
                  <ImagePlus className="w-4 h-4 text-[#D4AF37]" />
                  <span>Chọn Ảnh Từ Máy</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      1. Tiêu đề thương hiệu:
                    </label>
                    <input
                      type="text"
                      value={customBrandTitle}
                      onChange={(e) => setCustomBrandTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-sm font-semibold text-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      2. Tên sản phẩm:
                    </label>
                    <input
                      type="text"
                      value={customProductLine}
                      onChange={(e) => setCustomProductLine(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-sm font-semibold text-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      3. Giá niêm yết &amp; SĐT:
                    </label>
                    <input
                      type="text"
                      value={customPriceBadge}
                      onChange={(e) => setCustomPriceBadge(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCD2C0] text-sm font-semibold text-[#1C1917]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      renderAndDownloadStampedPng(
                        customStampImgUrl,
                        customBrandTitle,
                        customProductLine,
                        customPriceBadge,
                        'Anh-San-Pham-Tuyen-Hoa.png',
                        false
                      )
                    }
                    className="w-full py-2.5 px-4 rounded-xl bg-[#8C6224] hover:bg-[#76511B] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Tải Ảnh Đã Chèn Chữ &quot;Tuyến Hoa&quot; (.PNG)</span>
                  </button>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#D4AF37] bg-[#1C1917] shadow-md">
                    <img
                      src={customStampImgUrl}
                      alt="Xem trước ảnh đóng dấu Tuyến Hoa"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 inset-x-0 bg-[#1C1917]/95 border-b border-[#D4AF37] px-3 py-1.5 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#F5E6C8] truncate">
                        {customBrandTitle}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-[#D4AF37] text-[#1C1917] text-[10px] font-extrabold shrink-0">
                        0344.727.528
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 pt-7 text-white">
                      <div className="border-l-4 border-[#D4AF37] pl-2.5">
                        <div className="text-sm font-bold text-white leading-snug">
                          {customProductLine}
                        </div>
                        <div className="text-xs font-semibold text-[#F5E6C8] mt-0.5">
                          {customPriceBadge}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Concise Collapsible Architectural Price Grid */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2]/70 space-y-3">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <AnimatePresence initial={false}>
              {visiblePriceRows.map((row) => (
                <motion.div
                  key={row.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white px-4 py-3 rounded-2xl border border-[#EAE3D5] hover:border-[#C5A059] transition-colors flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-bold text-[#1C1917] text-xs sm:text-sm leading-snug">
                      {row.productGroup}
                    </div>
                    <div className="text-[11px] text-stone-400 mt-0.5">
                      Thị trường: <span className="line-through font-mono">{row.marketPrice}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs sm:text-sm font-mono font-extrabold text-[#1C1917] bg-[#FAF5EA] px-2.5 py-1 rounded-xl border border-[#DFC99B] tabular-nums whitespace-nowrap">
                      {row.storePrice}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center pt-1">
            <button
              type="button"
              onClick={() => setShowAllPrices((prev) => !prev)}
              className="px-4 py-1.5 rounded-full bg-white hover:bg-[#F3ECE0] text-[#1C1917] border border-[#DFD3BE] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <span>
                {showAllPrices
                  ? 'Thu gọn bảng giá nhanh'
                  : `Xem đầy đủ ${MARKET_PRICE_SUMMARY_TABLE.length} hạng mục báo giá`}
              </span>
              {showAllPrices ? (
                <ChevronUp className="w-3.5 h-3.5 text-[#9A6F2E]" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-[#9A6F2E]" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Master Post Box */}
        <AnimatePresence>
          {showMasterPostBox && (
            <motion.div
              key="master-post-box"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-5 sm:p-6 border-t border-[#E5DEC9] bg-[#FAF7F2] overflow-hidden"
            >
              <pre
                data-testid="master-facebook-post-content"
                className={`whitespace-pre-wrap font-sans text-[#1C1917] bg-white p-4 rounded-2xl border border-[#E5DEC9] ${bodyTextClass}`}
              >
                {masterFacebookPost}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 2. CONCISE CATEGORY & SEARCH BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 sm:p-3.5 rounded-2xl border border-[#E5DEC9] shadow-2xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#F5E6C8]'
                    : 'bg-[#FAF7F2] text-stone-700 hover:bg-[#F0E9DC] hover:text-stone-950'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="showcaseCategoryPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-[#1C1917] shadow-xs"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm đệm, chiếu mây, màn khung..."
            aria-label="Tìm kiếm sản phẩm"
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E2D9C8] rounded-xl text-[#1C1917] placeholder:text-stone-400 focus:outline-hidden focus:border-[#9A6F2E]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-900"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3. LUXURY EDITORIAL PRODUCT CARDS WITH SCENE TRANSITIONS */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => {
            const isBakedBrandImage = BAKED_BRAND_CODES.has(post.code);
            const primaryHighlight = post.visualAnnotations[0]?.label;
            return (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.035, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-testid={`annotated-post-card-${post.code}`}
                className="luxury-card bg-white rounded-3xl border border-[#E5DEC9] overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Media Display */}
                  <div className="relative aspect-4/3 bg-[#1C1917] overflow-hidden group">
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
                        className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    {/* Clean Brand Tag for Non-Baked Photos */}
                    {!isBakedBrandImage && post.mediaType === 'image' && (
                      <>
                        <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-md border border-[#D4AF37]/40 px-2.5 py-1 rounded-lg pointer-events-none">
                          <span className="text-[10px] font-bold text-[#F5E6C8] tracking-wide uppercase">
                            TUYẾN HOA · {post.code}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3 bg-[#1C1917]/90 backdrop-blur-md border border-[#D4AF37]/50 px-2.5 py-1 rounded-lg pointer-events-none">
                          <span className="text-xs font-extrabold text-[#F5E6C8] font-mono">
                            {post.priceDisplay}
                          </span>
                        </div>
                      </>
                    )}

                    {post.mediaType === 'video' && (
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-lg bg-[#1C1917]/90 text-[#F5E6C8] border border-[#D4AF37]/50 text-[11px] font-bold">
                          {post.code} · VIDEO THỰC TẾ
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Concise, Scannable Editorial Card Body */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#9A6F2E] truncate">
                        {post.code} · {post.highlightTag}
                      </div>
                      <h3 className={`font-display font-bold text-[#1C1917] leading-snug mt-0.5 line-clamp-2 ${cardTitleClass}`}>
                        {post.shortTitle}
                      </h3>
                    </div>

                    {/* Refined Ivory Price Ledger Box */}
                    <div className="bg-[#FAF7F2] border border-[#EAE3D5] rounded-2xl px-3.5 py-2.5 flex items-baseline justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-base sm:text-lg font-extrabold text-[#1C1917] font-mono tabular-nums whitespace-nowrap">
                          {post.priceDisplay}
                        </div>
                        <div className="text-[11px] text-stone-600 font-medium truncate">
                          {post.standardDimensions}
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-stone-400 shrink-0">
                        <span className="line-through font-mono font-semibold text-stone-400">
                          {post.marketPriceTiers[0]?.marketPrice || '1.300.000đ'}
                        </span>
                      </div>
                    </div>

                    {/* Single Concise Highlight Point for Fast Reading */}
                    {primaryHighlight && (
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-[#9A6F2E] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{primaryHighlight}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cohesive Luxury Action Bar */}
                <div
                  className={`px-4 pb-4 sm:px-5 sm:pb-5 pt-2.5 grid gap-1.5 border-t border-[#F0EAE0] ${
                    post.mediaType === 'image' ? 'grid-cols-4' : 'grid-cols-3'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleAddPostProductToCart(post)}
                    className="py-2 px-2 rounded-xl bg-[#1C1917] hover:bg-[#2E2924] text-[#F5E6C8] font-bold text-xs flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>Đặt Mua</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyPost(post)}
                    className="py-2 px-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F0E9DC] text-stone-800 font-bold text-xs flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer border border-[#E2D9C8] transition-colors"
                    title="Copy bài đăng Facebook / Zalo"
                  >
                    {copiedId === post.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>Đã Copy</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#9A6F2E] shrink-0" />
                        <span>Copy Bài</span>
                      </>
                    )}
                  </button>

                  {post.mediaType === 'image' && (
                    <button
                      type="button"
                      onClick={() => handleDownloadPostBrandedImage(post)}
                      className="py-2 px-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F0E9DC] text-stone-800 font-bold text-xs flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer border border-[#E2D9C8] transition-colors"
                      title="Tải ảnh đã chèn chữ Tuyến Hoa về máy"
                    >
                      <Download className="w-3.5 h-3.5 text-[#9A6F2E] shrink-0" />
                      <span>Tải Ảnh</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setActiveArticleModal(post);
                      setActiveGalleryImg(post.imageUrl);
                    }}
                    className="py-2 px-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F0E9DC] text-stone-800 font-bold text-xs flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer border border-[#E2D9C8] transition-colors"
                    title="Xem chi tiết & bảng giá"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#9A6F2E] shrink-0" />
                    <span>Chi Tiết</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* 4. CONCISE CALCULATOR: TÍNH NHANH ĐƠN MÀN KHUNG 1TR/BỘ */}
      <div
        id="bo-tinh-gia-man-khung"
        className="bg-white rounded-3xl border border-[#E5DEC9] p-5 sm:p-6 shadow-[0_12px_32px_-12px_rgba(28,25,23,0.05)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-7 space-y-3.5">
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#9A6F2E]">
                TÍNH NHANH CHI PHÍ TỰ ĐỘNG
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C1917]">
                Dự Toán Đơn Màn Khung 1.000.000đ/Bộ (1,8m × 2,0m) &amp; Combo
              </h3>
              <p className="text-xs text-stone-600">
                Giảm ngay <strong className="text-[#8C6224]">50.000đ/bộ</strong> khi lắp từ 2 bộ màn khung trở lên.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {canopyModels.map((model) => (
                <button
                  key={model.code}
                  type="button"
                  onClick={() => setSelectedCanopyCode(model.code)}
                  className={`p-2 rounded-xl border text-left transition-all flex items-center gap-2 cursor-pointer ${
                    selectedCanopyCode === model.code
                      ? 'bg-[#1C1917] text-[#F5E6C8] border-[#9A6F2E]'
                      : 'bg-[#FAF7F2] text-stone-800 border-[#E2D9C8] hover:bg-[#F3ECE0]'
                  }`}
                >
                  <img
                    src={model.imageUrl}
                    alt={model.shortTitle}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-lg object-cover shrink-0"
                  />
                  <span className="text-xs font-bold truncate">{model.code}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E5DEC9]">
                <label htmlFor="canopy-sets-input" className="block text-xs font-semibold text-stone-700">
                  Màn khung (1Tr):
                </label>
                <input
                  id="canopy-sets-input"
                  type="number"
                  min={0}
                  max={20}
                  value={canopySets}
                  onChange={(e) => setCanopySets(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1 text-center font-mono font-bold text-sm py-1 bg-white border border-[#DCD2C0] rounded-lg"
                />
              </div>

              <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E5DEC9]">
                <label htmlFor="curtain-meters-input" className="block text-xs font-semibold text-stone-700">
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
                  className="w-full mt-1 text-center font-mono font-bold text-sm py-1 bg-white border border-[#DCD2C0] rounded-lg"
                />
              </div>

              <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E5DEC9]">
                <label htmlFor="tuong-500-input" className="block text-xs font-semibold text-stone-700">
                  Tương 500ml (65k):
                </label>
                <input
                  id="tuong-500-input"
                  type="number"
                  min={0}
                  max={50}
                  value={tuong500Count}
                  onChange={(e) => setTuong500Count(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1 text-center font-mono font-bold text-sm py-1 bg-white border border-[#DCD2C0] rounded-lg"
                />
              </div>

              <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E5DEC9]">
                <label htmlFor="tuong-gift-input" className="block text-xs font-semibold text-stone-700">
                  Bình biếu (120k):
                </label>
                <input
                  id="tuong-gift-input"
                  type="number"
                  min={0}
                  max={50}
                  value={tuongGiftCount}
                  onChange={(e) => setTuongGiftCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1 text-center font-mono font-bold text-sm py-1 bg-white border border-[#DCD2C0] rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1C1917] text-white rounded-2xl p-5 flex flex-col justify-between gap-3.5 border border-[#332C25]">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-[#D6CEC2]">Tổng Dự Toán:</span>
              <span
                data-testid="canopy-calculator-total"
                className="text-2xl sm:text-3xl font-extrabold text-[#F5E6C8] font-mono tabular-nums"
              >
                {pricingResult.finalTotal.toLocaleString('vi-VN')}đ
              </span>
            </div>
            <p className="text-xs text-[#D6CEC2] truncate">{pricingResult.summaryLine}</p>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handleAddComboToCart}
                className="py-2.5 px-3 rounded-xl bg-[#D4AF37] hover:bg-[#DFBE4F] text-[#1C1917] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
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
                className="py-2.5 px-3 rounded-xl bg-[#2A2521] hover:bg-[#38312B] text-[#F5E6C8] border border-[#4A4036] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Gọi Thợ Lắp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Website Article & Post Modal */}
      <AnimatePresence>
        {activeArticleModal && (
          <motion.div
            key="article-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={activeArticleModal.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setActiveArticleModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D4AF37] p-5 sm:p-7 space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#EAE3D5] pb-3.5">
                <div>
                  <div className="text-xs font-mono font-bold text-[#9A6F2E]">
                    MÃ: {activeArticleModal.code} · THƯƠNG HIỆU TUYẾN HOA · {activeArticleModal.marketPriceRange}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C1917] mt-1">
                    {activeArticleModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticleModal(null)}
                  aria-label="Đóng"
                  className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#EFE8DA] text-stone-900 cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-[#1C1917] aspect-16/10 max-h-[380px] flex items-center justify-center relative">
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
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeGalleryImg || activeArticleModal.imageUrl}
                      src={activeGalleryImg || activeArticleModal.imageUrl}
                      alt={activeArticleModal.title}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                )}
              </div>

              {activeArticleModal.secondaryImages && activeArticleModal.secondaryImages.length > 1 && (
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-stone-700">
                    Các góc chụp độc bản thuộc bộ sản phẩm ({activeArticleModal.secondaryImages.length} ảnh):
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {activeArticleModal.secondaryImages.map((imgUrl, idx) => (
                      <button
                        key={imgUrl}
                        type="button"
                        onClick={() => setActiveGalleryImg(imgUrl)}
                        className={`w-16 h-12 rounded-xl overflow-hidden border-2 shrink-0 cursor-pointer transition-all ${
                          (activeGalleryImg || activeArticleModal.imageUrl) === imgUrl
                            ? 'border-[#9A6F2E] scale-105'
                            : 'border-[#E5DEC9] opacity-75 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${activeArticleModal.shortTitle} - Góc ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EAE3D5]">
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  Tải hình ảnh &amp; sao chép bài viết Tuyến Hoa:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {activeArticleModal.mediaType === 'image' && (
                    <button
                      type="button"
                      onClick={() => handleDownloadPostBrandedImage(activeArticleModal)}
                      className="px-3.5 py-2 rounded-xl bg-[#1C1917] hover:bg-[#2E2924] text-[#F5E6C8] text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#D4AF37]" />
                      <span>Tải Ảnh Có Chữ Tuyến Hoa</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleCopyPost(activeArticleModal)}
                    className="px-3.5 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#DFBE4F] text-[#1C1917] text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Bài Đăng Facebook/Zalo</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EAE3D5] space-y-2">
                <div className="text-sm font-bold text-[#1C1917]">
                  Chú Thích Chi Tiết ({activeArticleModal.code}):
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {activeArticleModal.visualAnnotations.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9A6F2E] shrink-0 mt-0.5" />
                      <span>
                        <strong>{note.label}:</strong> {note.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#EAE3D5]">
                <div className="text-sm font-bold text-[#1C1917]">
                  Bài Viết Giới Thiệu Trên Website Tuyến Hoa:
                </div>
                {activeArticleModal.articleParagraphs.map((para, idx) => (
                  <p key={idx} className="text-sm text-stone-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#DFC99B] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#1C1917]">Bảng Giá Theo Kích Thước:</span>
                  <span className="text-lg font-extrabold text-[#8C6224] font-mono">
                    {activeArticleModal.priceDisplay}
                  </span>
                </div>
                <div className="divide-y divide-[#EAE3D5] text-sm">
                  {activeArticleModal.marketPriceTiers.map((tier, idx) => (
                    <div key={idx} className="py-2 flex items-center justify-between gap-2">
                      <span className="font-semibold text-stone-800">{tier.sizeOrOption}</span>
                      <span className="font-mono">
                        <span className="line-through text-stone-400 mr-2">{tier.marketPrice}</span>
                        <strong className="text-[#1C1917]">{tier.storePrice}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1C1917] text-[#FAF7F2] rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-[#D4AF37]">
                    NỘI DUNG BÀI ĐĂNG FACEBOOK / ZALO:
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyPost(activeArticleModal)}
                    className="px-3 py-1 rounded-lg bg-[#D4AF37] text-[#1C1917] text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Bài Viết</span>
                  </button>
                </div>
                <pre className="text-sm text-[#EAE3D5] whitespace-pre-wrap font-sans leading-relaxed">
                  {activeArticleModal.facebookPostCopy}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
