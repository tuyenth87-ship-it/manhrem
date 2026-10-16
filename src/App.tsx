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
import { Footer } from './components/Footer';
import { Search, Sparkles, CheckCircle2, Ruler, LayoutGrid, Scale, MapPin, Eye } from 'lucide-react';

type MainNavTab = 'catalog' | 'curtain-calculator' | 'room-visualizer' | 'mattress-comparison' | 'store-consult';

const CATEGORIES: { id: ProductCategory; label: string; count: number }[] = [
  { id: 'all', label: 'Tất Cả Sản Phẩm', count: PRODUCTS.length },
  { id: 'dem', label: 'Đệm Cao Cấp', count: PRODUCTS.filter((p) => p.category === 'dem').length },
  { id: 'rem-cua', label: 'Mành Rèm Cửa', count: PRODUCTS.filter((p) => p.category === 'rem-cua').length },
  { id: 'manh-chieu', label: 'Chiếu Trúc & Mành Tre', count: PRODUCTS.filter((p) => p.category === 'manh-chieu').length },
  { id: 'chan-ga-goi', label: 'Chăn Ga Gối', count: PRODUCTS.filter((p) => p.category === 'chan-ga-goi').length },
];

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState<MainNavTab>('catalog');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

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

  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-stone-800 flex items-center gap-2.5 text-xs font-semibold"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(cat) => {
          setActiveMainTab('catalog');
          setActiveCategory(cat as ProductCategory);
          setSelectedBrand('all');
          scrollToContent();
        }}
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
      <main id="main-workspace" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
        {/* Primary Functional Tabs */}
        <div className="bg-white p-2 md:p-2.5 rounded-2xl border border-stone-200/90 shadow-sm overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max">
            <button
              type="button"
              onClick={() => setActiveMainTab('catalog')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeMainTab === 'catalog'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>1. Danh Mục Sản Phẩm ({PRODUCTS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('curtain-calculator')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeMainTab === 'curtain-calculator'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Ruler className="w-4 h-4 text-amber-500" />
              <span>2. Bảng Tính Giá May Đo Rèm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('room-visualizer')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeMainTab === 'room-visualizer'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Eye className="w-4 h-4 text-sky-500" />
              <span>3. Thử Mẫu Rèm Ảo (Visualizer)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('mattress-comparison')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeMainTab === 'mattress-comparison'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Scale className="w-4 h-4 text-emerald-500" />
              <span>4. So Sánh 4 Hãng Đệm Lớn</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMainTab('store-consult')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeMainTab === 'store-consult'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>5. Cửa Hàng Chợ Cháy &amp; Đo Tận Nhà</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Product Catalog View */}
        {activeMainTab === 'catalog' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Catalog Sub-Filter Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              {/* Category Sub-Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSelectedBrand('all');
                    }}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? 'bg-amber-900 text-white shadow-sm'
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

              {/* Search, Brand & Sort row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-3 border-t border-stone-100">
                <div className="sm:col-span-6 relative">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm theo tên sản phẩm (Vikosan, Sông Hồng, Rèm cầu vồng, Chiếu trúc...)"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-hidden focus:border-amber-800"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2 text-xs text-stone-400 hover:text-stone-700 font-bold"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-700 font-medium focus:outline-hidden focus:border-amber-800 cursor-pointer"
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
                </div>

                <div className="sm:col-span-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-700 font-medium focus:outline-hidden focus:border-amber-800 cursor-pointer"
                  >
                    <option value="featured">Sắp xếp: Mặc định đề xuất</option>
                    <option value="price-asc">Giá: Từ thấp đến cao</option>
                    <option value="price-desc">Giá: Từ cao xuống thấp</option>
                    <option value="rating">Đánh giá cao nhất</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Cards Grid with real photography */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-3">
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
                  className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Đặt lại bộ lọc
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.3 }}
          >
            <RoomVisualizer />
          </motion.div>
        )}

        {/* Tab 4: Mattress Comparison */}
        {activeMainTab === 'mattress-comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.3 }}
          >
            <StoreLocationAndTrust />
          </motion.div>
        )}
      </main>

      {/* Floating Call & Zalo Contact buttons */}
      <FloatingContact />

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
