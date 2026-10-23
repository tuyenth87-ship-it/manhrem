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
import { PWAInstallModal } from './components/PWAInstallModal';
import { LogoModal } from './components/LogoModal';
import { Footer } from './components/Footer';
import { Search, Sparkles, CheckCircle2, Ruler, LayoutGrid, Scale, MapPin, Eye, PhoneCall, Bot, Zap, Camera, Smartphone, BookOpen, Compass, Palette, Video } from 'lucide-react';

type MainNavTab = 'catalog' | 'motorized-curtains' | 'fabric-600k' | 'bamboo-artworks' | 'curtain-articles' | 'bead-curtains' | 'real-projects' | 'curtain-calculator' | 'room-visualizer' | 'mattress-comparison' | 'store-consult';

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

  // Mobile Menu Drawer & Mobile Frame Preview State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFrameMode, setIsMobileFrameMode] = useState(false);

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
          : 'bg-[#FBFBFA]'
      }`}
    >
      <div
        className={`w-full flex flex-col min-h-screen bg-[#FBFBFA] ${
          isMobileFrameMode
            ? 'max-w-[430px] rounded-3xl shadow-2xl border-4 border-stone-700 overflow-x-hidden pb-20 relative'
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
            className="fixed top-16 md:top-20 right-4 md:right-6 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-stone-800 flex items-center gap-2 text-xs font-semibold max-w-[90vw]"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Local Trust Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white text-xs py-1.5 px-3 border-b border-amber-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-bold text-amber-300 shrink-0">Chợ Cháy, Ứng Hòa:</span>
            <span className="text-stone-100 font-medium truncate">Miễn phí mang mẫu vải rèm &amp; đệm đo tại nhà</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 pl-2">
            <button
              type="button"
              onClick={() => setIsLogoModalOpen(true)}
              className="text-amber-200 hover:text-white font-bold flex items-center gap-1 transition-colors text-xs"
              title="Xem chi tiết & Tải logo Tuyến Hoa"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Logo</span>
            </button>
            <span className="text-stone-500">|</span>
            <button
              type="button"
              onClick={() => setIsInstallModalOpen(true)}
              className="text-amber-300 hover:text-white font-bold flex items-center gap-1 transition-colors text-xs"
              title="Cài App Tuyến Hoa lên điện thoại"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Cài App</span>
            </button>
            <span className="hidden sm:inline text-stone-500">|</span>
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="hidden sm:flex text-stone-100 hover:text-white font-semibold items-center gap-1 transition-colors text-xs"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Hỏi Chatbot</span>
            </button>
            <span className="hidden sm:inline text-stone-500">|</span>
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

      {/* Main Workspace with Clear Tab Architecture */}
      <main id="main-workspace" className="w-full min-w-0 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12 space-y-4 sm:space-y-6 md:space-y-10">
        {/* Primary Functional Tabs */}
        <div className="w-full min-w-0 bg-white p-1.5 md:p-2.5 rounded-2xl border border-stone-200/90 shadow-xs overflow-x-auto scrollbar-none touch-pan-x">
          <div className="flex items-center gap-1 min-w-max">
            <button
              type="button"
              onClick={() => setActiveMainTab('catalog')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'catalog'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Sản Phẩm ({PRODUCTS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('motorized-curtains')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'motorized-curtains'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Video className="w-4 h-4 text-emerald-500" />
              <span className="flex items-center gap-1.5">
                <span>Rèm Tự Động Thông Minh (The Shade Store)</span>
                <span className="text-[11px] px-1.5 py-0.2 bg-emerald-400 text-stone-950 font-extrabold rounded">Video 4K</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('fabric-600k')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'fabric-600k'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="flex items-center gap-1.5">
                <span>Rèm Vải 600k/m Ngang (Cả Lắp Đặt)</span>
                <span className="text-[11px] px-1.5 py-0.2 bg-amber-400 text-stone-950 font-extrabold rounded">13 Mẫu Mới</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('bamboo-artworks')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'bamboo-artworks'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Palette className="w-4 h-4 text-amber-500" />
              <span className="flex items-center gap-1.5">
                <span>Mành Tre Vẽ Tranh Phong Thủy</span>
                <span className="text-[11px] px-1.5 py-0.2 bg-emerald-400 text-stone-950 font-extrabold rounded">38 Mẫu TMHC</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('curtain-articles')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'curtain-articles'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span className="flex items-center gap-1.5">
                <span>Cẩm Nang &amp; Bài Viết Rèm</span>
                <span className="text-[11px] px-1.5 py-0.2 bg-amber-400 text-stone-950 font-extrabold rounded">Mới</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('bead-curtains')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'bead-curtains'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-500" />
              <span className="flex items-center gap-1.5">
                <span>Mành Hạt Nhựa &amp; Gỗ Kết Tranh</span>
                <span className="text-[11px] px-1.5 py-0.2 bg-amber-400 text-stone-950 font-extrabold rounded">HOT</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('real-projects')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'real-projects'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Camera className="w-4 h-4 text-emerald-500" />
              <span className="flex items-center gap-1.5">
                <span>Ảnh Thật Công Trình ({REAL_PROJECTS.length})</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('curtain-calculator')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'curtain-calculator'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Ruler className="w-4 h-4 text-amber-500" />
              <span>Dự Toán May Rèm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('room-visualizer')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'room-visualizer'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Eye className="w-4 h-4 text-sky-500" />
              <span>Thử Rèm Ảo</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('mattress-comparison')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'mattress-comparison'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Scale className="w-4 h-4 text-emerald-500" />
              <span>So Sánh 4 Đệm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('store-consult')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'store-consult'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Chợ Cháy &amp; Đo Tại Nhà</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Product Catalog View */}
        {activeMainTab === 'catalog' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Real Projects Teaser Banner */}
            <div
              onClick={() => {
                setActiveMainTab('real-projects');
                scrollToContent();
              }}
              className="group cursor-pointer bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 rounded-2xl p-3 sm:p-4 text-white border border-amber-400/40 flex items-center justify-between gap-3 shadow-md hover:border-amber-300 transition-all"
            >
              <div className="flex items-center gap-3 truncate">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-amber-300/50 shadow-xs">
                  <img
                    src="/assets/aistudio/IMG_5314_ae0205c4.PNG"
                    alt="Ảnh thật công trình Tuyến Hoa"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute inset-0 bg-black/20" />
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] uppercase font-extrabold tracking-wide px-2 py-0.2 rounded-full bg-emerald-500 text-white font-mono">
                      100% Ảnh Thật Mới Nhất
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-amber-300 truncate">
                      Rèm Vải Cao Cấp Tuyến Hoa 600.000đ/m Ngang (Cả Công Thi Công Lắp Đặt)
                    </span>
                  </div>
                  <p className="text-xs font-medium text-stone-200 mt-0.5 truncate">
                    Xem toàn bộ {REAL_PROJECTS.length} công trình rèm vải, mành tre từ đường &amp; rèm cầu vồng thực tế →
                  </p>
                </div>
              </div>
              <span className="hidden md:flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:text-white shrink-0 group-hover:translate-x-1 transition-all">
                Xem {REAL_PROJECTS.length} ảnh công trình →
              </span>
            </div>

            {/* Embedded 13 New Fabric Curtains 600k/m Showcase right on Main Page */}
            <FabricCurtainShowcase600k
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onShowToast={showToast}
            />

            {/* Embedded Motorized Smart Curtain & Shade Showcase (The Shade Store × Tuyến Hoa) */}
            <MotorizedCurtainShowcase
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
              onShowToast={showToast}
            />
            {/* Catalog Sub-Filter Toolbar */}
            <div className="w-full min-w-0 bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-xs space-y-3 overflow-hidden">
              {/* Category Sub-Tabs with Smooth Touch Carousel */}
              <div className="w-full min-w-0 overflow-x-auto pb-1 scrollbar-none snap-x touch-pan-x">
                <div className="flex items-center gap-1.5 min-w-max">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setSelectedBrand('all');
                      }}
                      className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 min-h-[38px] ${
                        activeCategory === cat.id
                          ? 'bg-amber-900 text-white shadow-xs'
                          : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                          activeCategory === cat.id ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-800'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search, Brand & Sort controls */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <div className="relative">
                  <Search className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm Vikosan, Sông Hồng, Rèm cầu vồng, Chiếu trúc..."
                    className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm font-medium text-stone-900 placeholder:text-stone-500 bg-stone-50 rounded-xl border border-stone-300 focus:outline-hidden focus:border-amber-800 min-h-[42px]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-sm text-stone-500 hover:text-stone-900 font-bold"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full text-xs bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-2 text-stone-900 font-semibold focus:outline-hidden focus:border-amber-800 cursor-pointer min-h-[40px] truncate"
                  >
                    <option value="all">Tất cả thương hiệu</option>
                    <option value="vikosan">Đệm Vikosan (Hàn Quốc)</option>
                    <option value="song-hong">Đệm Sông Hồng (Chính hãng)</option>
                    <option value="everon">Đệm Everon (Hàn Quốc)</option>
                    <option value="kymdan">Đệm Kymdan (Cao su 100%)</option>
                    <option value="hương trúc">Chiếu Hương Trúc / Cao Sơn</option>
                    <option value="shikada">Chiếu Mây Shikada / Muji</option>
                    <option value="tuyến hoa">Tuyến Hoa Decor</option>
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full text-xs bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-2 text-stone-900 font-semibold focus:outline-hidden focus:border-amber-800 cursor-pointer min-h-[40px] truncate"
                  >
                    <option value="featured">Sắp xếp mặc định</option>
                    <option value="price-asc">Giá: Thấp đến cao</option>
                    <option value="price-desc">Giá: Cao xuống thấp</option>
                    <option value="rating">Đánh giá cao nhất</option>
                  </select>
                </div>
              </div>

              {/* 1-Tap Quick Brand & Category Chips (Mobile-First Experience) */}
              <div className="w-full min-w-0 pt-2 border-t border-stone-100 overflow-x-auto scrollbar-none snap-x touch-pan-x">
                <div className="flex items-center gap-1.5 min-w-max py-0.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wide text-stone-600 shrink-0">
                    Lọc nhanh:
                  </span>
                  {[
                    { label: 'Tất cả', brandVal: 'all', catVal: 'all' },
                    { label: 'Đệm Vikosan', brandVal: 'vikosan', catVal: 'dem' },
                    { label: 'Đệm Sông Hồng', brandVal: 'song-hong', catVal: 'dem' },
                    { label: 'Đệm Everon', brandVal: 'everon', catVal: 'dem' },
                    { label: 'Cao su Kymdan', brandVal: 'kymdan', catVal: 'dem' },
                    { label: 'Rèm Cầu Vồng', brandVal: 'all', catVal: 'rem-cua' },
                    { label: 'Rèm Vải 2 Lớp', brandVal: 'all', catVal: 'rem-cua' },
                    { label: 'Chiếu Trúc Hạt', brandVal: 'all', catVal: 'manh-chieu' },
                    { label: 'Chăn Ga Lụa', brandVal: 'all', catVal: 'chan-ga-goi' },
                  ].map((chip, idx) => {
                    const isActive =
                      (chip.brandVal !== 'all' && selectedBrand === chip.brandVal) ||
                      (chip.brandVal === 'all' && chip.catVal !== 'all' && activeCategory === chip.catVal) ||
                      (chip.brandVal === 'all' && chip.catVal === 'all' && selectedBrand === 'all' && activeCategory === 'all');

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedBrand(chip.brandVal);
                          setActiveCategory(chip.catVal as ProductCategory);
                        }}
                        className={`px-3 py-1 text-xs font-bold rounded-lg shrink-0 transition-all ${
                          isActive
                            ? 'bg-amber-950 text-white shadow-xs'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                        }`}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Product Cards Grid: 2-Columns on Mobile, 3 on Desktop */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 text-center space-y-3">
                <p className="text-stone-600 text-xs sm:text-sm">
                  Không tìm thấy sản phẩm nào khớp với từ khóa tìm kiếm.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSelectedBrand('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors min-h-[44px]"
                >
                  Đặt lại bộ lọc
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
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

            {/* Embedded Bamboo Artworks Showcase (38 TMHC Models) directly on Catalog page */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <BambooArtworkShowcase
                onSelectForOrder={(artwork) => {
                  handleAddToCart({
                    productId: `bamboo-${artwork.id}`,
                    productName: `Mành Tre Vẽ Tranh: ${artwork.title} (${artwork.code})`,
                    variantId: artwork.code,
                    variantName: `Kích thước chuẩn ${artwork.standardSize}`,
                    size: artwork.standardSize,
                    price: artwork.priceNumeric,
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
            </div>

            {/* Embedded Curtain Guide & Articles Section directly on Catalog page */}
            <div className="mt-8 pt-8 border-t border-stone-200">
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
            </div>
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
                handleAddToCart({
                  productId: `bamboo-${artwork.id}`,
                  productName: `Mành Tre Vẽ Tranh: ${artwork.title} (${artwork.code})`,
                  variantId: artwork.code,
                  variantName: `Kích thước chuẩn ${artwork.standardSize}`,
                  size: artwork.standardSize,
                  price: artwork.priceNumeric,
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
