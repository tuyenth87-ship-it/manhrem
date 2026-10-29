import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AnnotatedProductPost,
  DEDUPLICATION_SUMMARY,
  MARKET_PRICE_SUMMARY_TABLE,
  NewProductCategory,
  OFFICIAL_WEBSITE_URL,
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
  const [fontScale, setFontScale] = useState<FontScaleMode>('xlarge');
  const [showMasterPostBox, setShowMasterPostBox] = useState<boolean>(false);
  const [showDedupReport, setShowDedupReport] = useState<boolean>(false);
  const [showAllPrices, setShowAllPrices] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<AnnotatedProductPost | null>(null);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string | null>(null);
  const [cardPreviewImages, setCardPreviewImages] = useState<Record<string, string>>({});

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
    const fullCopyText = post.facebookPostCopy.includes(OFFICIAL_WEBSITE_URL)
      ? post.facebookPostCopy
      : `${post.facebookPostCopy}\n🌐 Xem bảng giá & ${DEDUPLICATED_POSTS.length} mẫu thực tế tại Website: ${OFFICIAL_WEBSITE_URL}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullCopyText).catch(() => {});
    }
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2500);
    if (onShowToast) {
      onShowToast(`Đã sao chép bài đăng "${post.shortTitle}" (kèm link Website)!`);
    }
  };

  const handleCopyWebsiteUrl = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(OFFICIAL_WEBSITE_URL).catch(() => {});
    }
    setCopiedId('website-url');
    setTimeout(() => setCopiedId(null), 2500);
    if (onShowToast) {
      onShowToast(`Đã sao chép link Website: ${OFFICIAL_WEBSITE_URL}`);
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

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(0, 0, 1200, 900);
      const scale = Math.max(1200 / img.width, 900 / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const drawX = (1200 - drawW) / 2;
      const drawY = (900 - drawH) / 2;
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      if (!alreadyBaked) {
        ctx.fillStyle = 'rgba(255, 252, 245, 0.96)';
        ctx.fillRect(0, 0, 1200, 82);
        ctx.fillStyle = '#C5943A';
        ctx.fillRect(0, 78, 1200, 4);

        ctx.fillStyle = '#1C1917';
        ctx.font = '800 28px "Be Vietnam Pro", sans-serif';
        ctx.fillText(topBrandText, 28, 52);

        ctx.fillStyle = '#F3DFB8';
        ctx.beginPath();
        ctx.roundRect(880, 16, 292, 50, 12);
        ctx.fill();
        ctx.fillStyle = '#1C1917';
        ctx.font = '900 22px "Be Vietnam Pro", sans-serif';
        ctx.fillText('ĐT/Zalo: 0344.727.528', 902, 48);

        ctx.fillStyle = 'rgba(255, 252, 245, 0.95)';
        ctx.fillRect(0, 730, 1200, 170);
        ctx.fillStyle = '#C5943A';
        ctx.fillRect(0, 730, 1200, 4);

        ctx.fillStyle = '#1C1917';
        ctx.font = '800 32px "Be Vietnam Pro", sans-serif';
        ctx.fillText(productTitleText.slice(0, 56), 36, 782);

        ctx.fillStyle = '#8A5A14';
        ctx.font = '800 26px "Be Vietnam Pro", sans-serif';
        ctx.fillText(priceAndSpecText.slice(0, 68), 36, 828);

        ctx.fillStyle = '#44403C';
        ctx.font = '600 20px "Be Vietnam Pro", sans-serif';
        ctx.fillText(
          'Showroom Tuyến Hoa – Chợ Cháy, Ứng Hòa, Hà Nội (Miễn phí giao & lắp đặt tận nhà)',
          36,
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

  const handleDownloadPostBrandedImage = (post: AnnotatedProductPost, overrideImgUrl?: string) => {
    const isBaked = BAKED_BRAND_CODES.has(post.code);
    const targetImg = overrideImgUrl || cardPreviewImages[post.id] || post.imageUrl;
    const imgCaption = post.imageCaptions?.[targetImg];
    renderAndDownloadStampedPng(
      targetImg,
      'SHOWROOM & XƯỞNG TUYẾN HOA CHÍNH HÃNG',
      imgCaption ? `${post.shortTitle} – ${imgCaption.badge}` : `${post.shortTitle} (${post.code})`,
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
      className="space-y-8 sm:space-y-10"
    >
      {/* 1. BRIGHT WARM IVORY & CHAMPAGNE HEADER + LARGE MARKET PRICE LEDGER */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white rounded-3xl border-2 border-[#E2D4B8] overflow-hidden shadow-[0_14px_38px_-14px_rgba(140,98,36,0.1)]"
      >
        <div className="bg-gradient-to-r from-[#FAF3E4] via-[#FDFBF7] to-[#F5E8CE] text-[#1C1917] p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E2D4B8]">
          <div className="space-y-1">
            <div className="text-xs sm:text-sm uppercase tracking-[0.12em] font-extrabold text-[#8A5A14]">
              BẢNG GIÁ NIÊM YẾT · CHÍNH HÃNG TUYẾN HOA
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1C1917] tracking-tight">
              Danh Mục Sản Phẩm Độc Bản &amp; Báo Giá Nhanh
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Bright Font Size Toggle */}
            <div className="flex items-center bg-white p-1 rounded-xl border border-[#D8C5A3] shadow-2xs">
              <Type className="w-4 h-4 text-[#8A5A14] mx-2" />
              <button
                type="button"
                onClick={() => setFontScale('normal')}
                className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  fontScale === 'normal'
                    ? 'bg-[#F3DFB8] text-[#1C1917] border border-[#C69C4E]'
                    : 'text-stone-600 hover:text-[#1C1917]'
                }`}
              >
                Vừa
              </button>
              <button
                type="button"
                onClick={() => setFontScale('large')}
                className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  fontScale === 'large'
                    ? 'bg-[#F3DFB8] text-[#1C1917] border border-[#C69C4E]'
                    : 'text-stone-600 hover:text-[#1C1917]'
                }`}
              >
                Chữ To
              </button>
              <button
                type="button"
                onClick={() => setFontScale('xlarge')}
                className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  fontScale === 'xlarge'
                    ? 'bg-[#F3DFB8] text-[#1C1917] border border-[#C69C4E]'
                    : 'text-stone-600 hover:text-[#1C1917]'
                }`}
              >
                Rất To
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowPhotoStamper((prev) => !prev)}
              data-testid="toggle-photo-stamper-btn"
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF2E1] text-[#1C1917] border border-[#D5C29F] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <ImagePlus className="w-4 h-4 text-[#8A5A14]" />
              <span>{showPhotoStamper ? 'Đóng Chèn Chữ' : 'Chèn Chữ Lên Ảnh'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyMasterPost}
              data-testid="copy-master-post-btn"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] hover:from-[#EDD8AE] hover:to-[#E2C285] text-[#1C1917] border border-[#C59B4D] font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              {copiedId === 'master-post' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Đã Copy</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#7A4E0E]" />
                  <span>Copy Bảng Giá</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleCopyWebsiteUrl}
              data-testid="copy-website-url-btn"
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#FAF2E1] text-[#8A5A14] border border-[#D5C29F] font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title={OFFICIAL_WEBSITE_URL}
            >
              {copiedId === 'website-url' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Đã Copy Link Web</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8A5A14]" />
                  <span>Copy Link: tuyenhoa-weld.vercel.app</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowMasterPostBox((prev) => !prev)}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#FAF2E1] text-[#1C1917] font-bold text-xs sm:text-sm cursor-pointer border border-[#D5C29F]"
            >
              {showMasterPostBox ? 'Ẩn bài' : 'Bài tổng hợp'}
            </button>
          </div>
        </div>

        {/* BRIGHT DEDUPLICATION REPORT BANNER */}
        <div
          data-testid="deduplication-report-banner"
          className="bg-[#FCF8F0] text-[#1C1917] px-5 py-3 sm:px-7 border-b border-[#EAE0CE] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base text-stone-800">
            <Filter className="w-4 h-4 text-[#8A5A14] shrink-0" />
            <span>
              <strong className="text-[#1C1917] font-extrabold">
                Đã cắt & lọc bỏ {DEDUPLICATION_SUMMARY.totalRemovedDuplicates} video · ảnh trùng lặp
              </strong>{' '}
              · Giữ lại{' '}
              <strong className="text-[#8A5A14] font-extrabold">
                {DEDUPLICATION_SUMMARY.totalUniquePublished} tư liệu chuẩn
              </strong>{' '}
              trong <strong className="text-[#1C1917]">{DEDUPLICATED_POSTS.length} bài đăng</strong>.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowDedupReport((prev) => !prev)}
            data-testid="toggle-dedup-details-btn"
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#FAF2E1] text-[#1C1917] font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer self-start sm:self-auto border border-[#D5C29F] transition-colors"
          >
            {showDedupReport
              ? 'Thu gọn'
              : `Chi tiết ${DEDUPLICATION_SUMMARY.totalRemovedDuplicates} video & ảnh đã lọc`}
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
              className="p-5 sm:p-6 bg-[#FCF9F3] border-b border-[#EAE0CE] grid grid-cols-1 md:grid-cols-2 gap-3.5 overflow-hidden"
            >
              {DEDUPLICATION_SUMMARY.groups.map((grp) => (
                <div
                  key={grp.id}
                  className="bg-white p-4 rounded-2xl border border-[#E2D4B8] flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-[#1C1917] text-sm sm:text-base">
                      {grp.groupTitle}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF2E1] text-[#8A5A14] border border-[#D9BF8C] font-mono font-extrabold text-xs sm:text-sm shrink-0">
                      {grp.removedCount > 0 ? `Đã cắt ${grp.removedCount} bản trùng` : 'Đã gộp góc chụp'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium">{grp.reason}</p>
                  {grp.removedExamples && grp.removedExamples.length > 0 && (
                    <ul className="text-xs text-stone-600 space-y-1 pl-4 list-disc">
                      {grp.removedExamples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Custom Photo Brand Stamper with Bright Light Surfaces */}
        <AnimatePresence>
          {showPhotoStamper && (
            <motion.div
              key="photo-stamper"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              data-testid="custom-photo-stamper-panel"
              className="p-5 sm:p-7 bg-[#FCF9F3] border-b border-[#EAE0CE] space-y-5 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#1C1917] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#8A5A14]" />
                    <span>Đóng Dấu Thương Hiệu &quot;Tuyến Hoa&quot; Lên Ảnh</span>
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700">
                    Tải ảnh lên, chỉnh dòng chú thích và tải về file .PNG nền sáng rõ nét.
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
                  className="px-4 py-2.5 rounded-xl bg-[#F3DFB8] hover:bg-[#E8CE9B] text-[#1C1917] border border-[#C69C4E] font-extrabold text-sm flex items-center gap-2 cursor-pointer self-start"
                >
                  <ImagePlus className="w-4 h-4 text-[#7A4E0E]" />
                  <span>Chọn Ảnh Từ Máy</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-3.5">
                  <div>
                    <label className="block text-sm font-bold text-[#1C1917] mb-1">
                      1. Tiêu đề thương hiệu:
                    </label>
                    <input
                      type="text"
                      value={customBrandTitle}
                      onChange={(e) => setCustomBrandTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D6C4A4] text-sm sm:text-base font-bold text-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1C1917] mb-1">
                      2. Tên sản phẩm:
                    </label>
                    <input
                      type="text"
                      value={customProductLine}
                      onChange={(e) => setCustomProductLine(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D6C4A4] text-sm sm:text-base font-bold text-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1C1917] mb-1">
                      3. Giá niêm yết &amp; SĐT:
                    </label>
                    <input
                      type="text"
                      value={customPriceBadge}
                      onChange={(e) => setCustomPriceBadge(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D6C4A4] text-sm sm:text-base font-bold text-[#1C1917]"
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
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F3E1BE] to-[#E8CB92] hover:from-[#ECD5AA] hover:to-[#DFBD7A] text-[#1C1917] border border-[#C59B4D] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#7A4E0E]" />
                    <span>Tải Ảnh Đã Chèn Chữ &quot;Tuyến Hoa&quot; (.PNG)</span>
                  </button>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#C69C4E] bg-[#FAF6EE] shadow-md">
                    <img
                      src={customStampImgUrl}
                      alt="Xem trước ảnh đóng dấu Tuyến Hoa"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 inset-x-0 bg-white/95 border-b-2 border-[#C69C4E] px-3.5 py-2 flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-[#1C1917] truncate">
                        {customBrandTitle}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-[#F3DFB8] text-[#1C1917] border border-[#C69C4E] text-xs font-extrabold shrink-0">
                        0344.727.528
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 border-t-2 border-[#C69C4E] p-3.5 text-[#1C1917]">
                      <div className="border-l-4 border-[#9A681C] pl-2.5">
                        <div className="text-sm sm:text-base font-extrabold text-[#1C1917] leading-snug">
                          {customProductLine}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#8A5A14] mt-0.5">
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

        {/* Bright, Large-Print Price Summary Grid */}
        <div className="p-5 sm:p-7 bg-[#FCFBF8] space-y-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence initial={false}>
              {visiblePriceRows.map((row) => (
                <motion.div
                  key={row.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white px-4 py-4 rounded-2xl border-2 border-[#EAE0CE] hover:border-[#C59B4D] transition-colors flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="min-w-0">
                    <div className="font-extrabold text-[#1C1917] text-sm sm:text-base leading-snug">
                      {row.productGroup}
                    </div>
                    <div className="text-xs sm:text-sm text-stone-500 mt-1 font-medium">
                      Thị trường: <span className="line-through font-mono">{row.marketPrice}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm sm:text-base font-mono font-extrabold text-[#7A4E0E] bg-[#FDF6E7] px-3 py-1.5 rounded-xl border border-[#D8B670] tabular-nums whitespace-nowrap">
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
              className="px-5 py-2 rounded-full bg-[#FAF2E1] hover:bg-[#F3E3C3] text-[#1C1917] border border-[#D5BA84] text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
            >
              <span>
                {showAllPrices
                  ? 'Thu gọn bảng giá nhanh'
                  : `Xem đầy đủ ${MARKET_PRICE_SUMMARY_TABLE.length} hạng mục báo giá`}
              </span>
              {showAllPrices ? (
                <ChevronUp className="w-4 h-4 text-[#8A5A14]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8A5A14]" />
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
              className="p-5 sm:p-7 border-t border-[#EAE0CE] bg-[#FCF9F3] overflow-hidden"
            >
              <pre
                data-testid="master-facebook-post-content"
                className={`whitespace-pre-wrap font-sans text-[#1C1917] bg-white p-5 rounded-2xl border border-[#E2D4B8] ${bodyTextClass}`}
              >
                {masterFacebookPost}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 2. BRIGHT CATEGORY & SEARCH BAR WITH LARGER TEXT */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-white p-4 rounded-2xl border-2 border-[#E2D4B8] shadow-2xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-4 py-2.5 rounded-xl text-sm sm:text-base font-extrabold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#1C1917]'
                    : 'bg-[#FAF6EE] text-stone-700 hover:bg-[#F3E9D6] hover:text-[#1C1917]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="showcaseCategoryPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] border border-[#C59B4D] shadow-2xs"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#8A5A14] absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm đệm, chiếu mây, màn khung..."
            aria-label="Tìm kiếm sản phẩm"
            className="w-full pl-10 pr-8 py-2.5 text-sm sm:text-base font-medium bg-[#FCFBF8] border border-[#D8C5A3] rounded-xl text-[#1C1917] placeholder:text-stone-500 focus:outline-hidden focus:border-[#8A5A14]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-stone-500 hover:text-[#1C1917]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3. BRIGHT LUXURY PRODUCT CARDS WITH LARGE CLEAR TYPOGRAPHY */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => {
            const isBakedBrandImage = BAKED_BRAND_CODES.has(post.code);
            const primaryHighlight = post.visualAnnotations[0]?.label;
            const allCardImages = [post.imageUrl, ...(post.secondaryImages || [])];
            const currentCardImg = cardPreviewImages[post.id] || post.imageUrl;
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
                className="luxury-card bg-white rounded-3xl border-2 border-[#E6DAC3] overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Bright Media Frame */}
                  <div className="relative aspect-4/3 bg-[#F6F1E6] overflow-hidden group border-b border-[#EAE0CE]">
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
                        src={currentCardImg}
                        alt={post.shortTitle}
                        referrerPolicy="no-referrer"
                        onClick={() => {
                          setActiveArticleModal(post);
                          setActiveGalleryImg(currentCardImg);
                        }}
                        className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    {/* Bright Frosted Brand Tag at Top-Left (leaves bottom corners unobstructed for SKY/LT28 code badges) */}
                    {!isBakedBrandImage && post.mediaType === 'image' && (
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-[#C69C4E] px-3 py-1 rounded-xl pointer-events-none shadow-xs">
                        <span className="text-xs font-extrabold text-[#1C1917] tracking-wide uppercase">
                          TUYẾN HOA · {post.code}
                        </span>
                      </div>
                    )}

                    {post.mediaType === 'video' && (
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <span className="px-3 py-1 rounded-xl bg-white/95 text-[#1C1917] border border-[#C69C4E] text-xs font-extrabold shadow-xs">
                          {post.code} · VIDEO THỰC TẾ
                        </span>
                      </div>
                    )}

                    {post.secondaryImages && post.secondaryImages.length > 0 && (
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-xl bg-white/95 text-[#8A5A14] border border-[#C69C4E] text-xs font-extrabold shadow-xs">
                          Đủ {allCardImages.length} ảnh / mã màu
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Interactive Thumbnail Swatch Bar right below image when multiple angles/colors exist */}
                  {allCardImages.length > 1 && (
                    <div className="px-5 pt-3.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
                      <span className="text-xs font-extrabold text-[#8A5A14] shrink-0">
                        Chọn mẫu ({allCardImages.length}):
                      </span>
                      {allCardImages.map((imgUrl, idx) => {
                        const isSelected = currentCardImg === imgUrl;
                        return (
                          <button
                            key={imgUrl}
                            type="button"
                            onClick={() =>
                              setCardPreviewImages((prev) => ({
                                ...prev,
                                [post.id]: imgUrl,
                              }))
                            }
                            className={`relative w-12 h-10 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                              isSelected
                                ? 'border-[#9A681C] ring-2 ring-[#C59B4D]/40 scale-105'
                                : 'border-[#E2D4B7] opacity-80 hover:opacity-100'
                            }`}
                            title={
                              post.imageCaptions?.[imgUrl]?.badge || `Xem mẫu ảnh số ${idx + 1}`
                            }
                          >
                            <img
                              src={imgUrl}
                              alt={`${post.code} - mẫu ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Per-Image Specific Annotation Box when imageCaptions is provided */}
                  {post.imageCaptions?.[currentCardImg] && (
                    <div
                      data-testid={`image-caption-box-${post.code}`}
                      className="mx-5 mt-3 p-3 rounded-2xl bg-[#FAF4E4] border border-[#D8BE8B] space-y-1"
                    >
                      <div className="text-xs sm:text-sm font-extrabold text-[#7A4E0E] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#8A5A14]" />
                        <span>{post.imageCaptions[currentCardImg].badge}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1C1917] font-medium leading-relaxed">
                        {post.imageCaptions[currentCardImg].caption}
                      </p>
                    </div>
                  )}

                  {/* Large, Crisp Editorial Card Body */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#8A5A14]">
                        {post.code} · {post.highlightTag}
                      </div>
                      <h3 className={`font-display font-extrabold text-[#1C1917] leading-snug mt-1 ${cardTitleClass}`}>
                        {post.shortTitle}
                      </h3>
                    </div>

                    {/* Bright Warm Cream Price Ledger Box */}
                    <div className="bg-[#FDF8EE] border border-[#E2CFA8] rounded-2xl px-4 py-3 flex items-baseline justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-xl sm:text-2xl font-extrabold text-[#7A4E0E] font-mono tabular-nums whitespace-nowrap">
                          {post.priceDisplay}
                        </div>
                        <div className="text-xs sm:text-sm text-stone-700 font-semibold mt-0.5">
                          {post.standardDimensions}
                        </div>
                      </div>
                      <div className="text-right text-xs sm:text-sm text-stone-500 shrink-0">
                        <div className="text-[11px] font-semibold">Thị trường</div>
                        <span className="line-through font-mono font-bold text-stone-400">
                          {post.marketPriceTiers[0]?.marketPrice || '1.300.000đ'}
                        </span>
                      </div>
                    </div>

                    {/* Large, Easy-to-Read Highlight Point */}
                    {primaryHighlight && (
                      <div className="flex items-start gap-2.5 text-sm sm:text-base text-stone-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#8A5A14] shrink-0 mt-1" />
                        <span>{primaryHighlight}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bright Luxury Action Bar */}
                <div
                  className={`px-5 pb-5 sm:px-6 sm:pb-6 pt-3 grid gap-2 border-t border-[#EFE7D8] ${
                    post.mediaType === 'image' ? 'grid-cols-4' : 'grid-cols-3'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleAddPostProductToCart(post)}
                    className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] hover:from-[#EDD8AE] hover:to-[#E2C285] text-[#1C1917] border border-[#C59B4D] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#7A4E0E] shrink-0" />
                    <span>Đặt Mua</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyPost(post)}
                    className="py-2.5 px-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F2E6CE] text-[#1C1917] font-bold text-xs sm:text-sm flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer border border-[#DFCEAF] transition-colors"
                    title="Copy bài đăng Facebook / Zalo"
                  >
                    {copiedId === post.id ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>Đã Copy</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#8A5A14] shrink-0" />
                        <span>Copy Bài</span>
                      </>
                    )}
                  </button>

                  {post.mediaType === 'image' && (
                    <button
                      type="button"
                      onClick={() => handleDownloadPostBrandedImage(post, currentCardImg)}
                      className="py-2.5 px-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F2E6CE] text-[#1C1917] font-bold text-xs sm:text-sm flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer border border-[#DFCEAF] transition-colors"
                      title="Tải ảnh đang chọn đã chèn chữ Tuyến Hoa về máy"
                    >
                      <Download className="w-4 h-4 text-[#8A5A14] shrink-0" />
                      <span>Tải Ảnh</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setActiveArticleModal(post);
                      setActiveGalleryImg(currentCardImg);
                    }}
                    className="py-2.5 px-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F2E6CE] text-[#1C1917] font-bold text-xs sm:text-sm flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer border border-[#DFCEAF] transition-colors"
                    title="Xem chi tiết & bảng giá"
                  >
                    <FileText className="w-4 h-4 text-[#8A5A14] shrink-0" />
                    <span>Chi Tiết</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* 4. BRIGHT LIGHT-MODE CALCULATOR: TÍNH NHANH ĐƠN MÀN KHUNG 1TR/BỘ */}
      <div
        id="bo-tinh-gia-man-khung"
        className="bg-white rounded-3xl border-2 border-[#E2D4B8] p-5 sm:p-7 shadow-[0_12px_32px_-12px_rgba(140,98,36,0.08)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-[#8A5A14]">
                TÍNH NHANH CHI PHÍ TỰ ĐỘNG
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1C1917] mt-0.5">
                Dự Toán Đơn Màn Khung 1.000.000đ/Bộ (1,8m × 2,0m) &amp; Combo
              </h3>
              <p className="text-sm sm:text-base text-stone-700 font-medium">
                Giảm ngay <strong className="text-[#8A5A14] font-extrabold">50.000đ/bộ</strong> khi lắp từ 2 bộ màn khung trở lên.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {canopyModels.map((model) => (
                <button
                  key={model.code}
                  type="button"
                  onClick={() => setSelectedCanopyCode(model.code)}
                  className={`p-2.5 rounded-xl border-2 text-left transition-all flex items-center gap-2 cursor-pointer ${
                    selectedCanopyCode === model.code
                      ? 'bg-[#F4E3C1] text-[#1C1917] border-[#B88938] shadow-2xs'
                      : 'bg-[#FCF9F3] text-stone-800 border-[#E2D4B8] hover:bg-[#FAF2E1]'
                  }`}
                >
                  <img
                    src={model.imageUrl}
                    alt={model.shortTitle}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-lg object-cover shrink-0"
                  />
                  <span className="text-xs sm:text-sm font-extrabold truncate">{model.code}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#FCF9F3] p-3 rounded-xl border border-[#E2D4B8]">
                <label htmlFor="canopy-sets-input" className="block text-xs sm:text-sm font-bold text-[#1C1917]">
                  Màn khung (1Tr):
                </label>
                <input
                  id="canopy-sets-input"
                  type="number"
                  min={0}
                  max={20}
                  value={canopySets}
                  onChange={(e) => setCanopySets(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1.5 text-center font-mono font-extrabold text-base py-1.5 bg-white border border-[#D5C29F] rounded-lg text-[#1C1917]"
                />
              </div>

              <div className="bg-[#FCF9F3] p-3 rounded-xl border border-[#E2D4B8]">
                <label htmlFor="curtain-meters-input" className="block text-xs sm:text-sm font-bold text-[#1C1917]">
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
                  className="w-full mt-1.5 text-center font-mono font-extrabold text-base py-1.5 bg-white border border-[#D5C29F] rounded-lg text-[#1C1917]"
                />
              </div>

              <div className="bg-[#FCF9F3] p-3 rounded-xl border border-[#E2D4B8]">
                <label htmlFor="tuong-500-input" className="block text-xs sm:text-sm font-bold text-[#1C1917]">
                  Tương 500ml (65k):
                </label>
                <input
                  id="tuong-500-input"
                  type="number"
                  min={0}
                  max={50}
                  value={tuong500Count}
                  onChange={(e) => setTuong500Count(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1.5 text-center font-mono font-extrabold text-base py-1.5 bg-white border border-[#D5C29F] rounded-lg text-[#1C1917]"
                />
              </div>

              <div className="bg-[#FCF9F3] p-3 rounded-xl border border-[#E2D4B8]">
                <label htmlFor="tuong-gift-input" className="block text-xs sm:text-sm font-bold text-[#1C1917]">
                  Bình biếu (120k):
                </label>
                <input
                  id="tuong-gift-input"
                  type="number"
                  min={0}
                  max={50}
                  value={tuongGiftCount}
                  onChange={(e) => setTuongGiftCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full mt-1.5 text-center font-mono font-extrabold text-base py-1.5 bg-white border border-[#D5C29F] rounded-lg text-[#1C1917]"
                />
              </div>
            </div>
          </div>

          {/* Bright Warm Champagne Summary Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#FBF6EB] via-[#F7EDD8] to-[#F2E2C2] text-[#1C1917] rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 border-2 border-[#D4B06A]">
            <div className="flex items-baseline justify-between">
              <span className="text-base font-extrabold text-[#6E4710]">Tổng Dự Toán:</span>
              <span
                data-testid="canopy-calculator-total"
                className="text-2xl sm:text-3xl font-extrabold text-[#7A4E0E] font-mono tabular-nums"
              >
                {pricingResult.finalTotal.toLocaleString('vi-VN')}đ
              </span>
            </div>
            <p className="text-sm font-semibold text-stone-700">{pricingResult.summaryLine}</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleAddComboToCart}
                className="py-3 px-3 rounded-xl bg-white hover:bg-[#FAF2E1] text-[#1C1917] border-2 border-[#C59B4D] font-extrabold text-sm sm:text-base flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
              >
                <ShoppingBag className="w-4 h-4 text-[#7A4E0E]" />
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
                className="py-3 px-3 rounded-xl bg-[#EED6A7] hover:bg-[#E5C68B] text-[#1C1917] border-2 border-[#B88938] font-extrabold text-sm sm:text-base flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <Truck className="w-4 h-4 text-[#7A4E0E]" />
                <span>Gọi Thợ Lắp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bright Light-Mode Website Article & Post Modal */}
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
            className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setActiveArticleModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#C69C4E] p-5 sm:p-7 space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#EAE0CE] pb-4">
                <div>
                  <div className="text-xs sm:text-sm font-mono font-extrabold text-[#8A5A14]">
                    MÃ: {activeArticleModal.code} · THƯƠNG HIỆU TUYẾN HOA · {activeArticleModal.marketPriceRange}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1C1917] mt-1">
                    {activeArticleModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticleModal(null)}
                  aria-label="Đóng"
                  className="p-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#EFE4CE] text-[#1C1917] border border-[#D8C5A3] cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#E2D4B8] aspect-16/10 max-h-[380px] flex items-center justify-center relative">
                {activeArticleModal.mediaType === 'video' &&
                activeArticleModal.videoUrl &&
                (!activeGalleryImg || activeGalleryImg === activeArticleModal.imageUrl) ? (
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

              {activeArticleModal.imageCaptions?.[
                activeGalleryImg || activeArticleModal.imageUrl
              ] && (
                <div className="p-4 rounded-2xl bg-[#FAF4E4] border border-[#D8BE8B] space-y-1">
                  <div className="text-sm sm:text-base font-extrabold text-[#7A4E0E] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#8A5A14] shrink-0" />
                    <span>
                      {
                        activeArticleModal.imageCaptions[
                          activeGalleryImg || activeArticleModal.imageUrl
                        ].badge
                      }
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#1C1917] font-medium">
                    {
                      activeArticleModal.imageCaptions[
                        activeGalleryImg || activeArticleModal.imageUrl
                      ].caption
                    }
                  </p>
                </div>
              )}

              {activeArticleModal.secondaryImages && activeArticleModal.secondaryImages.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm font-bold text-[#1C1917]">
                    Các góc chụp thực tế thuộc bộ sản phẩm ({activeArticleModal.secondaryImages.length + 1} tư liệu):
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {[activeArticleModal.imageUrl, ...activeArticleModal.secondaryImages].map(
                      (imgUrl, idx) => (
                        <button
                          key={imgUrl}
                          type="button"
                          onClick={() => setActiveGalleryImg(imgUrl)}
                          className={`w-20 h-15 rounded-xl overflow-hidden border-2 shrink-0 cursor-pointer transition-all relative ${
                            (activeGalleryImg || activeArticleModal.imageUrl) === imgUrl
                              ? 'border-[#8A5A14] scale-105'
                              : 'border-[#E2D4B8] opacity-75 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={`${activeArticleModal.shortTitle} - Góc ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {idx === 0 && activeArticleModal.mediaType === 'video' && (
                            <span className="absolute bottom-0.5 inset-x-0.5 bg-white/90 text-[#1C1917] text-[10px] font-extrabold rounded px-1 text-center">
                              VIDEO
                            </span>
                          )}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 bg-[#FCF8F0] p-4 rounded-2xl border border-[#E2D4B8]">
                <span className="text-sm sm:text-base font-extrabold text-[#1C1917]">
                  Tải hình ảnh &amp; sao chép bài viết Tuyến Hoa:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {activeArticleModal.mediaType === 'image' && (
                    <button
                      type="button"
                      onClick={() =>
                        handleDownloadPostBrandedImage(
                          activeArticleModal,
                          activeGalleryImg || activeArticleModal.imageUrl
                        )
                      }
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF2E1] text-[#1C1917] border border-[#C69C4E] text-xs sm:text-sm font-extrabold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#8A5A14]" />
                      <span>Tải Ảnh Đang Xem Có Chữ Tuyến Hoa</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleCopyPost(activeArticleModal)}
                    className="px-4 py-2.5 rounded-xl bg-[#F3DFB8] hover:bg-[#E8CE9B] text-[#1C1917] border border-[#C69C4E] text-xs sm:text-sm font-extrabold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-4 h-4 text-[#7A4E0E]" />
                    <span>Copy Bài Đăng Facebook/Zalo</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#FCF8F0] rounded-2xl p-4 sm:p-5 border border-[#E2D4B8] space-y-2.5">
                <div className="text-base font-extrabold text-[#1C1917]">
                  Chú Thích Chi Tiết ({activeArticleModal.code}):
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-stone-800">
                  {activeArticleModal.visualAnnotations.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8A5A14] shrink-0 mt-1" />
                      <span>
                        <strong>{note.label}:</strong> {note.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5 bg-white p-4 sm:p-5 rounded-2xl border border-[#E2D4B8]">
                <div className="text-base font-extrabold text-[#1C1917]">
                  Bài Viết Giới Thiệu Trên Website Tuyến Hoa:
                </div>
                {activeArticleModal.articleParagraphs.map((para, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-stone-800 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="bg-[#FDF8EE] rounded-2xl p-4 sm:p-5 border border-[#D8B670] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-extrabold text-[#1C1917]">Bảng Giá Theo Kích Thước:</span>
                  <span className="text-xl font-extrabold text-[#7A4E0E] font-mono">
                    {activeArticleModal.priceDisplay}
                  </span>
                </div>
                <div className="divide-y divide-[#EAE0CE] text-sm sm:text-base">
                  {activeArticleModal.marketPriceTiers.map((tier, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between gap-2">
                      <span className="font-bold text-[#1C1917]">{tier.sizeOrOption}</span>
                      <span className="font-mono">
                        <span className="line-through text-stone-400 mr-2">{tier.marketPrice}</span>
                        <strong className="text-[#7A4E0E]">{tier.storePrice}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF4E6] text-[#1C1917] rounded-2xl p-4 sm:p-5 border border-[#D8B670] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-extrabold text-[#8A5A14]">
                    NỘI DUNG BÀI ĐĂNG FACEBOOK / ZALO:
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyPost(activeArticleModal)}
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F3DFB8] text-[#1C1917] border border-[#C69C4E] text-xs sm:text-sm font-extrabold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#7A4E0E]" />
                    <span>Copy Bài Viết</span>
                  </button>
                </div>
                <pre className="text-sm sm:text-base text-[#1C1917] whitespace-pre-wrap font-sans leading-relaxed bg-white p-4 rounded-xl border border-[#E2D4B8]">
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
