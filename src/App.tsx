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
import { Footer } from './components/Footer';
import { Search, Sparkles, CheckCircle2, Ruler, LayoutGrid, Scale, MapPin, Eye, PhoneCall, Bot, Zap } from 'lucide-react';

type MainNavTab = 'catalog' | 'curtain-calculator' | 'room-visualizer' | 'mattress-comparison' | 'store-consult';

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

  // Mobile Menu Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-[#FBFBFA] flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950 pb-24 md:pb-0">
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
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white text-[11px] sm:text-xs py-1.5 px-3 border-b border-amber-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-semibold text-amber-200">Chợ Cháy, Ứng Hòa:</span>
            <span className="text-stone-300 truncate">Miễn phí mang mẫu vải rèm &amp; đệm đo tại nhà</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 pl-2">
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="text-amber-300 hover:text-white font-bold flex items-center gap-1 transition-colors text-[11px]"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Hỏi Chatbot</span>
            </button>
            <span className="hidden sm:inline text-stone-500">|</span>
            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-white font-bold font-mono transition-colors"
            >
              <PhoneCall className="w-3 h-3" />
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
        onSelectCategory={(cat) => {
          setActiveMainTab('catalog');
          setActiveCategory(cat as ProductCategory);
          setSelectedBrand('all');
          scrollToContent();
        }}
        activeCategory={activeCategory}
      />

      {/* Mobile Menu Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
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

      {/* Hero Showcase with real photography */}
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
      />

      {/* Main Workspace with Clear Tab Architecture */}
      <main id="main-workspace" className="w-full min-w-0 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12 space-y-4 sm:space-y-6 md:space-y-10">
        {/* Primary Functional Tabs */}
        <div className="w-full min-w-0 bg-white p-1.5 md:p-2.5 rounded-2xl border border-stone-200/90 shadow-xs overflow-x-auto scrollbar-none touch-pan-x">
          <div className="flex items-center gap-1 min-w-max">
            <button
              type="button"
              onClick={() => setActiveMainTab('catalog')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'catalog'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Sản Phẩm ({PRODUCTS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('curtain-calculator')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'curtain-calculator'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Ruler className="w-4 h-4 text-amber-500" />
              <span>Dự Toán May Rèm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('room-visualizer')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'room-visualizer'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Eye className="w-4 h-4 text-sky-500" />
              <span>Thử Rèm Ảo</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('mattress-comparison')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'mattress-comparison'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Scale className="w-4 h-4 text-emerald-500" />
              <span>So Sánh 4 Đệm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('store-consult')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] ${
                activeMainTab === 'store-consult'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
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
                      className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 min-h-[36px] ${
                        activeCategory === cat.id
                          ? 'bg-amber-900 text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          activeCategory === cat.id ? 'bg-amber-800 text-white' : 'bg-stone-100 text-stone-600'
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
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm Vikosan, Sông Hồng, Rèm cầu vồng, Chiếu trúc..."
                    className="w-full pl-9 pr-8 py-2 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-hidden focus:border-amber-800 min-h-[40px]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-700 font-bold"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full text-[11px] sm:text-xs bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-2 text-stone-700 font-medium focus:outline-hidden focus:border-amber-800 cursor-pointer min-h-[38px] truncate"
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
                    className="w-full text-[11px] sm:text-xs bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-2 text-stone-700 font-medium focus:outline-hidden focus:border-amber-800 cursor-pointer min-h-[38px] truncate"
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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 shrink-0">
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
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg shrink-0 transition-all ${
                          isActive
                            ? 'bg-amber-950 text-white shadow-xs'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
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
          </motion.div>
        )}

        {/* Tab 2: Curtain Estimator */}
        {activeMainTab === 'curtain-calculator' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CurtainEstimator
              onAddToCart={handleAddToCart}
              onRequestMeasurement={handleRequestMeasurement}
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
  );
}
