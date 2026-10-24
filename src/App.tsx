import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, STORE_INFO } from './data/products';
import { Product, ProductCategory, ProductVariant, CartItem, PlacedOrder } from './types/store';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CurtainEstimator } from './components/CurtainEstimator';
import { RoomVisualizer } from './components/RoomVisualizer';
import { MattressComparison } from './components/MattressComparison';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { StoreLocationAndTrust } from './components/StoreLocationAndTrust';
import { FloatingContact } from './components/FloatingContact';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MobileMenuDrawer } from './components/MobileMenuDrawer';
import { TuyenHoaChatbox } from './components/TuyenHoaChatbox';
import { RealProjectsGallery } from './components/RealProjectsGallery';
import { REAL_PROJECTS } from './data/realProjects';
import { CurtainGuideArticles } from './components/CurtainGuideArticles';
import { BeadCurtainGallery } from './components/BeadCurtainGallery';
import { BambooArtworkShowcase } from './components/BambooArtworkShowcase';
import { FabricCurtainShowcase600k } from './components/FabricCurtainShowcase600k';
import { MotorizedCurtainShowcase } from './components/MotorizedCurtainShowcase';
import { AwningCanopyShowcase350k } from './components/AwningCanopyShowcase350k';
import { CanopyAndArtisanalShowcase } from './components/CanopyAndArtisanalShowcase';
import { PWAInstallModal } from './components/PWAInstallModal';
import { LogoModal } from './components/LogoModal';
import { Footer } from './components/Footer';
import { LuxurySparkleOverlay } from './components/LuxurySparkleOverlay';
import { Search, Sparkles, CheckCircle2, Ruler, LayoutGrid, Scale, MapPin, Eye, PhoneCall, Bot, Zap, Camera, Smartphone, BookOpen, Compass, Palette, Video } from 'lucide-react';

type MainNavTab = 'catalog' | 'man-khung-1tr' | 'awning-350k' | 'motorized-curtains' | 'fabric-600k' | 'bamboo-artworks' | 'curtain-articles' | 'bead-curtains' | 'real-projects' | 'curtain-calculator' | 'room-visualizer' | 'mattress-comparison' | 'store-consult';

const CATEGORIES: { id: ProductCategory; label: string; count: number }[] = [
  { id: 'all', label: 'Tất Cả Sản Phẩm', count: PRODUCTS.length },
  { id: 'dem', label: 'Đệm Bông Ép & Cao Su', count: PRODUCTS.filter((p) => p.category === 'dem').length },
  { id: 'rem-cua', label: 'Mành Rèm Cửa & Tổ Ong', count: PRODUCTS.filter((p) => p.category === 'rem-cua').length },
  { id: 'manh-chieu', label: 'Chiếu Trúc & Mành Tre', count: PRODUCTS.filter((p) => p.category === 'manh-chieu').length },
  { id: 'chan-ga-goi', label: 'Chăn Ga Gối Lụa', count: PRODUCTS.filter((p) => p.category === 'chan-ga-goi').length },
];

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState<MainNavTab>('catalog');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [estimatorInitialType, setEstimatorInitialType] = useState<string | undefined>(undefined);

  // Mobile Menu Drawer, Mobile Frame Preview & Luxury Sparkle State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFrameMode, setIsMobileFrameMode] = useState(false);
  const [isSparkleModeEnabled, setIsSparkleModeEnabled] = useState(false);

  // Cart State (persisted in localStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tuyen_hoa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tuyen_hoa_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  // Quick toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.productId === item.productId && i.variantId === item.variantId
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + item.quantity,
        };
        return next;
      }
      return [...prev, item];
    });
    showToast(`Đã thêm "${item.productName}" vào giỏ hàng`);
  };

  const handleUpdateQuantity = (productId: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId, variantId);
      return;
    }
    setCartItems((prev) =>
      prev.map((it) =>
        it.productId === productId && it.variantId === variantId ? { ...it, quantity } : it
      )
    );
  };

  const handleRemoveItem = (productId: string, variantId: string) => {
    setCartItems((prev) =>
      prev.filter((it) => !(it.productId === productId && it.variantId === variantId))
    );
  };

  const handleQuickBuy = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    const item: CartItem = {
      productId: product.id,
      productName: product.name,
      variantId: variant.id,
      variantName: variant.name,
      size: variant.size,
      price: variant.price,
      quantity: quantity,
      category: product.category,
    };
    handleAddToCart(item);
    setIsCartOpen(false);
    setSelectedProductModal(null);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (order: PlacedOrder) => {
    setCartItems([]);
    showToast(`Đặt hàng thành công! Mã đơn: ${order.orderId}`);
  };

  const handleRequestMeasurement = (curtainType: string, note: string) => {
    const item: CartItem = {
      productId: 'survey-request',
      productName: `Hẹn Khảo Sát & Đo Đạc: ${curtainType}`,
      variantId: 'free-survey',
      variantName: 'Miễn phí mang mẫu tại nhà',
      size: 'Đo thực tế tại nhà Ứng Hòa',
      price: 0,
      quantity: 1,
      category: 'rem-cua',
      customNote: note,
    };
    handleAddToCart(item);
    setIsCheckoutOpen(true);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      if (selectedBrand !== 'all') {
        const matchesBrand = p.brand.toLowerCase().includes(selectedBrand.toLowerCase());
        if (!matchesBrand) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesSub = p.subCategory.toLowerCase().includes(q);
        const matchesSummary = p.summary.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesSub && !matchesSummary) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      const aMinPrice = a.variants[0]?.price || 0;
      const bMinPrice = b.variants[0]?.price || 0;
      if (sortBy === 'price-asc') return aMinPrice - bMinPrice;
      if (sortBy === 'price-desc') return bMinPrice - aMinPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, selectedBrand, searchQuery, sortBy]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToContent = () => {
    const el = document.getElementById('main-workspace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCall = () => {
    window.location.href = `tel:${STORE_INFO.hotline}`;
  };

  return (
    <div
      className={`w-full max-w-full overflow-x-hidden min-h-screen flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950 pb-20 md:pb-0 ${
        isMobileFrameMode
          ? 'bg-stone-900 md:py-6 md:px-4 items-center'
          : 'bg-[#FBF9F5]'
      }`}
    >
      {/* Ambient Chandelier & 24K Gold Diamond Sparkle Overlay */}
      <LuxurySparkleOverlay enabled={isSparkleModeEnabled} />

      <div
        className={`w-full flex flex-col min-h-screen bg-[#FBF9F5] ${
          isMobileFrameMode
            ? 'max-w-[430px] rounded-3xl shadow-2xl border-4 border-amber-500/70 overflow-x-hidden pb-20 relative'
            : 'max-w-full'
        }`}
      >
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 md:top-20 right-4 md:right-6 z-50 bg-stone-950 text-amber-100 px-4 py-2.5 rounded-2xl shadow-2xl border border-amber-400/70 flex items-center gap-2 text-xs font-extrabold max-w-[90vw]"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Royal Trust Announcement Bar */}
      <div className="bg-gradient-to-r from-stone-950 via-amber-950 to-stone-950 text-white text-xs py-1.5 px-3 border-b border-amber-500/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 diamond-twinkle shrink-0" />
            <span className="luxury-gold-text font-extrabold shrink-0">Showroom Tuyến Hoa:</span>
            <span className="text-amber-50 font-semibold truncate">
              Màn khung 1.000.000đ/bộ (1,8m×2m) · Rèm vải 600k/m · Bạt xếp 350k/m² · Tương Ngọc Tuyến
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 pl-2">
            <button
              type="button"
              onClick={() => setIsSparkleModeEnabled((prev) => !prev)}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold flex items-center gap-1 transition-all cursor-pointer border ${
                isSparkleModeEnabled
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 text-stone-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                  : 'bg-stone-800 text-stone-300 border-stone-600'
              }`}
              title="Bật / Tắt hiệu ứng ánh kim cương long lanh"
            >
              <Sparkles className="w-3 h-3" />
              <span>{isSparkleModeEnabled ? 'Long Lanh' : 'Tắt'}</span>
            </button>
            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-white font-extrabold font-mono tabular-nums transition-colors text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{STORE_INFO.hotlineDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
        onSelectCategory={(cat) => {
          setActiveMainTab('catalog');
          setActiveCategory(cat as ProductCategory);
          setSelectedBrand('all');
          scrollToContent();
        }}
        onSelectTab={(tab) => {
          setActiveMainTab(tab as MainNavTab);
          scrollToContent();
        }}
        activeCategory={activeCategory}
        isMobileFrameMode={isMobileFrameMode}
        onToggleMobileFrameMode={() => setIsMobileFrameMode((prev) => !prev)}
      />

      {/* Mobile Menu Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedBrand('all');
        }}
        onSelectTab={(tab) => {
          setActiveMainTab(tab as MainNavTab);
          scrollToContent();
        }}
        onOpenChat={() => setIsChatOpen(true)}
        activeCategory={activeCategory}
      />

      {/* Hero Showcase with real photography & Mobile Quick Launcher */}
      <Hero
        onExploreProducts={() => {
          setActiveMainTab('catalog');
          scrollToContent();
        }}
        onOpenEstimator={() => {
          setActiveMainTab('curtain-calculator');
          scrollToContent();
        }}
        onOpenVisualizer={() => {
          setActiveMainTab('room-visualizer');
          scrollToContent();
        }}
        onOpenArticles={() => {
          setActiveMainTab('curtain-articles');
          scrollToContent();
        }}
        onSelectMainTab={(tab) => {
          setActiveMainTab(tab as MainNavTab);
          scrollToContent();
        }}
      />

      {/* Main Workspace with Spacious, Breathable Layout */}
      <main id="main-workspace" className="w-full min-w-0 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-14 space-y-6 sm:space-y-8 md:space-y-12">
        {/* Clean, Concise Tab Bar (No badge clutter) */}
        <div className="luxury-card w-full min-w-0 bg-gradient-to-r from-white via-[#FFFDF9] to-amber-50/30 p-2 rounded-2xl border border-amber-300/70 overflow-x-auto scrollbar-none touch-pan-x">
          <div className="flex items-center gap-2 min-w-max">
            <button
              type="button"
              onClick={() => setActiveMainTab('catalog')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'catalog'
                  ? 'luxury-sheen-auto bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-amber-200 border border-amber-400/70 shadow-sm'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-amber-400" />
              <span>Tất Cả Sản Phẩm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('man-khung-1tr')}
              className={`luxury-sheen-auto flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'man-khung-1tr'
                  ? 'bg-gradient-to-r from-sky-800 via-blue-800 to-sky-900 text-white border border-amber-300 shadow-sm'
                  : 'bg-gradient-to-r from-sky-50 via-amber-50 to-sky-50 text-sky-950 hover:from-sky-100 hover:to-amber-100 border border-sky-400/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500 diamond-twinkle" />
              <span>Màn Khung 1Tr (1,8m×2m) &amp; Tương Ngọc Tuyến</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('awning-350k')}
              className={`luxury-sheen-auto flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'awning-350k'
                  ? 'bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 text-white border border-amber-300 shadow-sm'
                  : 'bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 text-emerald-950 hover:from-emerald-100 hover:to-teal-100 border border-emerald-400/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500 diamond-twinkle" />
              <span>Bạt Xếp 350k/m² &amp; Video</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('fabric-600k')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'fabric-600k'
                  ? 'luxury-sheen-auto bg-amber-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Rèm Vải 600k/m</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('motorized-curtains')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'motorized-curtains'
                  ? 'luxury-sheen-auto bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Video className="w-4 h-4 text-emerald-500" />
              <span>Rèm Tự Động 4.0</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('bamboo-artworks')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'bamboo-artworks'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Palette className="w-4 h-4 text-amber-500" />
              <span>Mành Tre Tranh</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('bead-curtains')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'bead-curtains'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-500" />
              <span>Mành Hạt Gỗ</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('real-projects')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'real-projects'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Camera className="w-4 h-4 text-emerald-500" />
              <span>Công Trình Thực Tế</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('curtain-calculator')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'curtain-calculator'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Ruler className="w-4 h-4 text-amber-500" />
              <span>Tính Giá Rèm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('room-visualizer')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'room-visualizer'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Eye className="w-4 h-4 text-sky-500" />
              <span>Thử Rèm Ảo</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('mattress-comparison')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'mattress-comparison'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <Scale className="w-4 h-4 text-emerald-500" />
              <span>So Sánh Đệm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('curtain-articles')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'curtain-articles'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Cẩm Nang</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('store-consult')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] cursor-pointer ${
                activeMainTab === 'store-consult'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-50/70'
              }`}
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Địa Chỉ</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Spacious Product Catalog View */}
        {activeMainTab === 'catalog' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-8 sm:space-y-10"
          >
            {/* Direct Featured Showcase of All Newly Published & Annotated Products with Market Prices */}
            <CanopyAndArtisanalShowcase
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onShowToast={showToast}
            />

            {/* Clean, Single-Box Catalog Filter Bar */}
            <div className="w-full min-w-0 bg-white p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs space-y-3.5 overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                {/* Category Pills */}
                <div className="w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                  <div className="flex items-center gap-2 min-w-max">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setSelectedBrand('all');
                        }}
                        className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 min-h-[40px] cursor-pointer ${
                          activeCategory === cat.id
                            ? 'bg-stone-950 text-amber-200 border border-amber-400/60 shadow-xs'
                            : 'bg-stone-100/80 text-stone-800 hover:text-stone-950 hover:bg-amber-50'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                            activeCategory === cat.id ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-700'
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search & Sort Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 lg:w-[460px]">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm đệm, rèm, chiếu trúc..."
                      className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm font-medium text-stone-900 placeholder:text-stone-400 bg-stone-50 rounded-xl border border-stone-200 focus:outline-hidden focus:border-amber-700 min-h-[40px]"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-2 text-base text-stone-400 hover:text-stone-900 font-bold"
                      >
                        ×
                      </button>
                    )}
                  </div>

                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-900 font-semibold focus:outline-hidden focus:border-amber-700 cursor-pointer min-h-[40px]"
                  >
                    <option value="all">Tất cả thương hiệu</option>
                    <option value="vikosan">Đệm Vikosan</option>
                    <option value="song-hong">Đệm Sông Hồng</option>
                    <option value="everon">Đệm Everon</option>
                    <option value="kymdan">Cao su Kymdan</option>
                    <option value="tuyến hoa">Tuyến Hoa Decor</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Cards Grid with Generous Breathing Room */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-stone-200 p-10 text-center space-y-3">
                <p className="text-stone-600 text-sm">
                  Không tìm thấy sản phẩm nào khớp với từ khóa tìm kiếm.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSelectedBrand('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-stone-800 transition-colors min-h-[42px] cursor-pointer"
                >
                  Đặt lại bộ lọc
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onOpenDetails={(p) => setSelectedProductModal(p)}
                    onQuickBuy={(p, variant) => handleQuickBuy(p, variant, 1)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Tab: Dedicated Màn Khung 1.000.000đ/Bộ (1,8m x 2,0m) & Tương Ngọc Tuyến */}
        {activeMainTab === 'man-khung-1tr' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CanopyAndArtisanalShowcase
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onShowToast={showToast}
            />
          </motion.div>
        )}

        {/* Tab: Dedicated Awning Canopy 350k/m2 Articles & Motorized Awning Videos */}
        {activeMainTab === 'awning-350k' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <AwningCanopyShowcase350k
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onShowToast={showToast}
            />
          </motion.div>
        )}

        {/* Tab: Dedicated Motorized Smart Curtains & Shades (The Shade Store × Tuyến Hoa) */}
        {activeMainTab === 'motorized-curtains' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <MotorizedCurtainShowcase
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onShowToast={showToast}
            />
          </motion.div>
        )}

        {/* Tab: Dedicated 13 New Fabric Curtains 600k/m Showcase */}
        {activeMainTab === 'fabric-600k' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FabricCurtainShowcase600k
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onShowToast={showToast}
            />
          </motion.div>
        )}

        {/* Tab: Dedicated 38 TMHC Painted Bamboo Curtains */}
        {activeMainTab === 'bamboo-artworks' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <BambooArtworkShowcase
              onSelectForOrder={(artwork) => {
                const numericMatch = artwork.priceEstimate.replace(/\./g, '').match(/\d+/);
                const parsedPrice = numericMatch ? parseInt(numericMatch[0], 10) : 350000;
                handleAddToCart({
                  productId: `bamboo-${artwork.id}`,
                  productName: `Mành Tre Vẽ Tranh: ${artwork.title} (${artwork.code})`,
                  variantId: artwork.code,
                  variantName: `Kích thước chuẩn ${artwork.standardSize}`,
                  size: artwork.standardSize,
                  price: parsedPrice,
                  quantity: 1,
                  category: 'manh-chieu',
                  customNote: `Mã tranh ${artwork.code} - Ý nghĩa: ${artwork.meaning}`,
                });
              }}
              onOpenEstimator={() => {
                setEstimatorInitialType('manh-tre-ban-cong');
                setActiveMainTab('curtain-calculator');
                scrollToContent();
              }}
            />
          </motion.div>
        )}

        {/* Tab: Dedicated Curtain Guide & Advertising Articles */}
        {activeMainTab === 'curtain-articles' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CurtainGuideArticles
              onSelectEstimator={(estimatorId) => {
                setEstimatorInitialType(estimatorId);
                setActiveMainTab('curtain-calculator');
                scrollToContent();
              }}
              onRequestMeasurement={handleRequestMeasurement}
              onOpenChat={() => setIsChatOpen(true)}
              onShowToast={showToast}
            />
          </motion.div>
        )}

        {/* Tab: Bead Curtain Gallery (Mành Hạt Nhựa & Hạt Gỗ Kết Tranh) */}
        {activeMainTab === 'bead-curtains' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <BeadCurtainGallery
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onOpenChat={() => setIsChatOpen(true)}
              onShowToast={showToast}
            />
          </motion.div>
        )}

        {/* Tab 2: Real Projects & Authentic Work Showcase */}
        {activeMainTab === 'real-projects' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <RealProjectsGallery
              onRequestMeasurement={handleRequestMeasurement}
              onOpenChat={() => setIsChatOpen(true)}
            />
          </motion.div>
        )}

        {/* Tab 3: Curtain Estimator */}
        {activeMainTab === 'curtain-calculator' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CurtainEstimator
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              initialCurtainTypeId={estimatorInitialType}
            />
          </motion.div>
        )}

        {/* Tab 3: Interactive Room Visualizer */}
        {activeMainTab === 'room-visualizer' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <RoomVisualizer />
          </motion.div>
        )}

        {/* Tab 4: Mattress Comparison */}
        {activeMainTab === 'mattress-comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <MattressComparison
              onSelectBrand={(brand) => {
                setSelectedBrand(brand);
                setActiveCategory('dem');
                setActiveMainTab('catalog');
                scrollToContent();
              }}
            />
          </motion.div>
        )}

        {/* Tab 5: Store Location & Home Survey */}
        {activeMainTab === 'store-consult' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <StoreLocationAndTrust />
          </motion.div>
        )}
      </main>

      {/* Floating Call & Zalo Contact buttons (Desktop only) */}
      <div className="hidden md:block">
        <FloatingContact />
      </div>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav
        activeTab={activeMainTab}
        onSelectTab={(tab) => {
          setActiveMainTab(tab);
          scrollToContent();
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCall={handleOpenCall}
        onOpenChat={() => setIsChatOpen(true)}
        forceVisible={isMobileFrameMode}
      />

      {/* Tuyen Hoa AI Chatbox Consultant */}
      <TuyenHoaChatbox
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => setIsChatOpen(true)}
        onAddToCart={handleAddToCart}
        onSelectProduct={(p) => setSelectedProductModal(p)}
        onRequestMeasurement={handleRequestMeasurement}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={handleAddToCart}
        onQuickBuy={handleQuickBuy}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* PWA Mobile Installation Modal */}
      <PWAInstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

      {/* Tuyến Hoa Brand Logo Showcase Modal */}
      <LogoModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveMainTab('catalog');
          setActiveCategory(cat as ProductCategory);
          setSelectedBrand('all');
          scrollToContent();
        }}
      />
      </div>
    </div>
  );
}
