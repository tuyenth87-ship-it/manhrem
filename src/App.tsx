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
import {
  Search,
  Sparkles,
  CheckCircle2,
  Ruler,
  LayoutGrid,
  Scale,
  MapPin,
  Eye,
  PhoneCall,
  Camera,
  BookOpen,
  Compass,
  Palette,
  Video,
} from 'lucide-react';

type MainNavTab =
  | 'catalog'
  | 'man-khung-1tr'
  | 'awning-350k'
  | 'motorized-curtains'
  | 'fabric-600k'
  | 'bamboo-artworks'
  | 'curtain-articles'
  | 'bead-curtains'
  | 'real-projects'
  | 'curtain-calculator'
  | 'room-visualizer'
  | 'mattress-comparison'
  | 'store-consult';

const MAIN_NAV_ITEMS: { id: MainNavTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'catalog', label: 'Bộ Sưu Tập', icon: LayoutGrid },
  { id: 'man-khung-1tr', label: 'Đệm · Màn · Tương', icon: Sparkles },
  { id: 'fabric-600k', label: 'Rèm Vải 600k', icon: Sparkles },
  { id: 'awning-350k', label: 'Bạt Xếp 350k', icon: Sparkles },
  { id: 'motorized-curtains', label: 'Rèm Tự Động', icon: Video },
  { id: 'bamboo-artworks', label: 'Mành Tre Tranh', icon: Palette },
  { id: 'bead-curtains', label: 'Mành Hạt Gỗ', icon: Compass },
  { id: 'real-projects', label: 'Công Trình', icon: Camera },
  { id: 'curtain-calculator', label: 'Tính Giá Rèm', icon: Ruler },
  { id: 'room-visualizer', label: 'Thử Rèm Ảo', icon: Eye },
  { id: 'mattress-comparison', label: 'So Sánh Đệm', icon: Scale },
  { id: 'curtain-articles', label: 'Cẩm Nang', icon: BookOpen },
  { id: 'store-consult', label: 'Địa Chỉ', icon: MapPin },
];

const CATEGORIES: { id: ProductCategory; label: string; count: number }[] = [
  { id: 'all', label: 'Tất Cả', count: PRODUCTS.length },
  { id: 'dem', label: 'Đệm Chính Hãng', count: PRODUCTS.filter((p) => p.category === 'dem').length },
  { id: 'rem-cua', label: 'Mành Rèm & Tổ Ong', count: PRODUCTS.filter((p) => p.category === 'rem-cua').length },
  { id: 'manh-chieu', label: 'Chiếu & Mành Tre', count: PRODUCTS.filter((p) => p.category === 'manh-chieu').length },
  { id: 'chan-ga-goi', label: 'Chăn Ga Gối', count: PRODUCTS.filter((p) => p.category === 'chan-ga-goi').length },
];

const SCENE_TRANSITION = {
  initial: { opacity: 0, y: 18, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.99 },
  transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState<MainNavTab>('catalog');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [estimatorInitialType, setEstimatorInitialType] = useState<string | undefined>(undefined);

  // Mobile Menu Drawer, Mobile Frame Preview & Luxury Sparkle State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFrameMode, setIsMobileFrameMode] = useState(false);
  const [isSparkleModeEnabled] = useState(false);

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
          ? 'bg-stone-200 md:py-6 md:px-4 items-center'
          : 'bg-[#FCFBF8]'
      }`}
    >
      <LuxurySparkleOverlay enabled={isSparkleModeEnabled} />

      <div
        className={`w-full flex flex-col min-h-screen bg-[#FCFBF8] ${
          isMobileFrameMode
            ? 'max-w-[430px] rounded-3xl shadow-2xl border-4 border-amber-500/70 overflow-x-hidden pb-20 relative'
            : 'max-w-full'
        }`}
      >
        {/* Bright Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-16 md:top-20 right-4 md:right-6 z-50 bg-white text-[#1C1917] px-4 py-3 rounded-2xl shadow-xl border-2 border-[#C59B4D] flex items-center gap-2 text-sm font-extrabold max-w-[90vw]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bright Warm Champagne Announcement Bar */}
        <div className="bg-gradient-to-r from-[#FAF2E1] via-[#FDFBF7] to-[#FAF2E1] text-[#1C1917] text-xs sm:text-sm py-2.5 px-4 border-b border-[#E2D4B8]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 truncate">
              <span className="text-[#8A5A14] font-extrabold tracking-wide uppercase shrink-0">
                Showroom Tuyến Hoa:
              </span>
              <span className="text-stone-800 font-semibold truncate">
                Màn Khung 1.000.000đ/bộ · Rèm Vải 600k/m · Đệm Everhome 2,85Tr · Bạt Xếp 350k/m²
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0 pl-2">
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="hidden sm:flex items-center gap-1.5 text-[#7A4E0E] hover:text-[#1C1917] font-extrabold font-mono tabular-nums transition-colors text-xs sm:text-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#8A5A14]" />
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

        {/* Hero Showcase with Bright Light Boxes & Smooth Scene Transitions */}
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

        {/* Main Workspace with Animated Scene Transitions */}
        <main
          id="main-workspace"
          className="w-full min-w-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 space-y-8 sm:space-y-10"
        >
          {/* Bright Light-Mode Navigation Bar with Champagne Gold Pill Transition */}
          <div className="w-full min-w-0 bg-white p-2.5 rounded-2xl border-2 border-[#E2D4B8] shadow-2xs overflow-x-auto scrollbar-none touch-pan-x">
            <div className="flex items-center gap-1.5 min-w-max">
              {MAIN_NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeMainTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveMainTab(item.id)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-extrabold transition-colors whitespace-nowrap min-h-[44px] cursor-pointer ${
                      isActive
                        ? 'text-[#1C1917]'
                        : 'text-stone-700 hover:text-[#1C1917] hover:bg-[#FAF6EE]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeMainTabIndicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] border border-[#C59B4D] shadow-2xs"
                      />
                    )}
                    <Icon
                      className={`relative z-10 w-4 h-4 ${
                        isActive ? 'text-[#7A4E0E]' : 'text-[#8A5A14]'
                      }`}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated Scene Switcher for All Main Tabs */}
          <AnimatePresence mode="wait">
            {activeMainTab === 'catalog' && (
              <motion.div
                key="scene-catalog"
                {...SCENE_TRANSITION}
                className="space-y-8 sm:space-y-10"
              >
                <CanopyAndArtisanalShowcase
                  onAddToCart={handleAddToCart}
                  onRequestMeasurement={handleRequestMeasurement}
                  onShowToast={showToast}
                />

                {/* Bright Light-Mode Catalog Filter Bar */}
                <div className="w-full min-w-0 bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#E2D4B8] shadow-2xs space-y-3 overflow-hidden">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
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
                            className={`px-4 py-2.5 text-sm sm:text-base font-extrabold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 min-h-[42px] cursor-pointer ${
                              activeCategory === cat.id
                                ? 'bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] text-[#1C1917] border border-[#C59B4D] shadow-2xs'
                                : 'bg-[#FAF6EE] text-stone-700 hover:text-[#1C1917] hover:bg-[#F3E9D6]'
                            }`}
                          >
                            <span>{cat.label}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-mono font-extrabold ${
                                activeCategory === cat.id
                                  ? 'bg-white text-[#7A4E0E] border border-[#C59B4D]'
                                  : 'bg-[#EAE0CE] text-stone-700'
                              }`}
                            >
                              {cat.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 lg:w-[460px]">
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-[#8A5A14] absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Tìm đệm, rèm, chiếu trúc..."
                          className="w-full pl-10 pr-8 py-2.5 text-sm sm:text-base font-medium text-[#1C1917] placeholder:text-stone-500 bg-[#FCFBF8] rounded-xl border border-[#D8C5A3] focus:outline-hidden focus:border-[#8A5A14] min-h-[42px]"
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-2.5 text-base text-stone-500 hover:text-[#1C1917] font-bold"
                          >
                            ×
                          </button>
                        )}
                      </div>

                      <select
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="text-sm sm:text-base bg-[#FCFBF8] border border-[#D8C5A3] rounded-xl px-3.5 py-2.5 text-[#1C1917] font-bold focus:outline-hidden focus:border-[#8A5A14] cursor-pointer min-h-[42px]"
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

                {/* Product Cards Grid */}
                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-3xl border-2 border-[#E2D4B8] p-10 text-center space-y-3">
                    <p className="text-stone-700 text-base font-medium">
                      Không tìm thấy sản phẩm nào khớp với từ khóa tìm kiếm.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory('all');
                        setSelectedBrand('all');
                        setSearchQuery('');
                      }}
                      className="px-6 py-3 bg-[#F3DFB8] text-[#1C1917] border border-[#C59B4D] rounded-xl text-sm sm:text-base font-extrabold hover:bg-[#E8CE9B] transition-colors cursor-pointer"
                    >
                      Đặt lại bộ lọc
                    </button>
                  </div>
                ) : (
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7"
                  >
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        onOpenDetails={(p) => setSelectedProductModal(p)}
                        onQuickBuy={(p, variant) => handleQuickBuy(p, variant, 1)}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeMainTab === 'man-khung-1tr' && (
              <motion.div key="scene-man-khung" {...SCENE_TRANSITION}>
                <CanopyAndArtisanalShowcase
                  onAddToCart={handleAddToCart}
                  onRequestMeasurement={handleRequestMeasurement}
                  onShowToast={showToast}
                />
              </motion.div>
            )}

            {activeMainTab === 'awning-350k' && (
              <motion.div key="scene-awning" {...SCENE_TRANSITION}>
                <AwningCanopyShowcase350k
                  onAddToCart={handleAddToCart}
                  onRequestMeasurement={handleRequestMeasurement}
                  onShowToast={showToast}
                />
              </motion.div>
            )}

            {activeMainTab === 'motorized-curtains' && (
              <motion.div key="scene-motorized" {...SCENE_TRANSITION}>
                <MotorizedCurtainShowcase
                  onAddToCart={handleAddToCart}
                  onRequestMeasurement={handleRequestMeasurement}
                  onShowToast={showToast}
                />
              </motion.div>
            )}

            {activeMainTab === 'fabric-600k' && (
              <motion.div key="scene-fabric" {...SCENE_TRANSITION}>
                <FabricCurtainShowcase600k
                  onAddToCart={handleAddToCart}
                  onRequestMeasurement={handleRequestMeasurement}
                  onShowToast={showToast}
                />
              </motion.div>
            )}

            {activeMainTab === 'bamboo-artworks' && (
              <motion.div key="scene-bamboo" {...SCENE_TRANSITION}>
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

            {activeMainTab === 'curtain-articles' && (
              <motion.div key="scene-articles" {...SCENE_TRANSITION}>
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

            {activeMainTab === 'bead-curtains' && (
              <motion.div key="scene-bead" {...SCENE_TRANSITION}>
                <BeadCurtainGallery
                  onAddToCart={handleAddToCart}
                  onRequestMeasurement={handleRequestMeasurement}
                  onOpenChat={() => setIsChatOpen(true)}
                  onShowToast={showToast}
                />
              </motion.div>
            )}

            {activeMainTab === 'real-projects' && (
              <motion.div key="scene-projects" {...SCENE_TRANSITION}>
                <RealProjectsGallery
                  onRequestMeasurement={handleRequestMeasurement}
                  onOpenChat={() => setIsChatOpen(true)}
                />
              </motion.div>
            )}

            {activeMainTab === 'curtain-calculator' && (
              <motion.div key="scene-calculator" {...SCENE_TRANSITION}>
                <CurtainEstimator
                  onAddToCart={handleAddToCart}
                  onRequestMeasurement={handleRequestMeasurement}
                  initialCurtainTypeId={estimatorInitialType}
                />
              </motion.div>
            )}

            {activeMainTab === 'room-visualizer' && (
              <motion.div key="scene-visualizer" {...SCENE_TRANSITION}>
                <RoomVisualizer />
              </motion.div>
            )}

            {activeMainTab === 'mattress-comparison' && (
              <motion.div key="scene-comparison" {...SCENE_TRANSITION}>
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

            {activeMainTab === 'store-consult' && (
              <motion.div key="scene-store" {...SCENE_TRANSITION}>
                <StoreLocationAndTrust />
              </motion.div>
            )}
          </AnimatePresence>
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

        {/* Showroom Photos & Store Location Section (Always visible above Footer) */}
        {activeMainTab !== 'store-consult' && <StoreLocationAndTrust />}

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
