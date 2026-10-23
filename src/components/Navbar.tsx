import React from 'react';
import { ShoppingBag, PhoneCall, Menu, Camera, Smartphone, Sparkles, Monitor } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
  onOpenChat?: () => void;
  onOpenInstallModal?: () => void;
  onOpenLogoModal?: () => void;
  onSelectCategory: (category: string) => void;
  onSelectTab?: (tab: string) => void;
  activeCategory: string;
  isMobileFrameMode?: boolean;
  onToggleMobileFrameMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenMobileMenu,
  onOpenChat,
  onOpenInstallModal,
  onOpenLogoModal,
  onSelectCategory,
  onSelectTab,
  activeCategory,
  isMobileFrameMode = false,
  onToggleMobileFrameMode,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 md:gap-6 h-[52px] sm:h-16">
          {/* Mobile Left: Hamburger Menu Button & Mobile Brand Logo */}
          <div className="flex items-center gap-1.5 md:hidden min-w-0">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="min-w-[44px] min-h-[44px] -ml-1 flex items-center justify-center rounded-xl text-stone-800 hover:bg-stone-100 active:scale-95 transition-all shrink-0"
              aria-label="Mở menu danh mục"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Brand Logo on mobile with photo avatar & Rèm Chăn Đệm */}
            <button
              type="button"
              onClick={onOpenLogoModal ? onOpenLogoModal : undefined}
              className="hover:opacity-90 transition-opacity text-left cursor-pointer shrink-0"
              title="Bấm để xem logo thương hiệu Tuyến Hoa"
            >
              <BrandLogo variant="nav-mobile" />
            </button>
          </div>

          {/* Desktop Zone 1: Brand Logo with avatar & Rèm Chăn Đệm */}
          <button
            type="button"
            onClick={onOpenLogoModal ? onOpenLogoModal : undefined}
            className="hidden md:inline-block shrink-0 hover:opacity-95 transition-opacity text-left cursor-pointer"
            title="Bấm để xem & tải logo thương hiệu Tuyến Hoa"
          >
            <BrandLogo variant="nav" />
          </button>

          {/* Desktop Zone 2: Primary navigation links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-sm font-semibold text-stone-800 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'all' ? 'text-stone-950 font-extrabold border-b-2 border-stone-950' : ''
              }`}
            >
              Tất Cả
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('dem')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'dem' ? 'text-stone-950 font-extrabold border-b-2 border-stone-950' : ''
              }`}
            >
              Đệm Cao Cấp
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('rem-cua')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'rem-cua' ? 'text-stone-950 font-extrabold border-b-2 border-stone-950' : ''
              }`}
            >
              Mành Rèm
            </button>
            {onSelectTab && (
              <>
                <button
                  type="button"
                  onClick={() => onSelectTab('fabric-600k')}
                  className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 text-amber-950 font-bold flex items-center gap-1 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Rèm Vải 600k/m</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('motorized-curtains')}
                  className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 text-emerald-950 font-bold flex items-center gap-1 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-400"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Rèm Tự Động 4.0</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('bamboo-artworks')}
                  className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 text-amber-950 font-bold flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-300"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-700" />
                  <span>38 Mành Tre TMHC</span>
                </button>
              </>
            )}
          </nav>

          {/* Zone 3: Actions (Mobile Preview Switcher, Call & Cart) */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {onToggleMobileFrameMode && (
              <button
                type="button"
                onClick={onToggleMobileFrameMode}
                className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold whitespace-nowrap shrink-0 transition-all min-h-[40px] cursor-pointer ${
                  isMobileFrameMode
                    ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300'
                }`}
                title="Chuyển đổi khung giao diện Mobile / Toàn màn hình"
              >
                {isMobileFrameMode ? (
                  <>
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Mở Rộng Màn Hình</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                    <span>Khung Điện Thoại</span>
                  </>
                )}
              </button>
            )}

            {onOpenInstallModal && (
              <button
                type="button"
                onClick={onOpenInstallModal}
                className="inline-flex lg:inline-flex items-center justify-center min-w-[44px] min-h-[44px] sm:min-h-[40px] px-2 sm:px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-950 text-xs font-bold whitespace-nowrap shrink-0 transition-colors"
                title="Cài đặt App lên màn hình chính điện thoại"
              >
                <Smartphone className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="ml-1">Tải App</span>
              </button>
            )}

            {onOpenChat && (
              <button
                type="button"
                onClick={onOpenChat}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-950 hover:bg-amber-100 text-xs font-bold whitespace-nowrap shrink-0 transition-colors min-h-[40px]"
                title="Tư vấn trực tuyến"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Tư Vấn</span>
              </button>
            )}

            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] sm:min-h-[40px] px-2.5 sm:px-3 py-1.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-950 hover:bg-emerald-100 text-xs sm:text-sm font-extrabold whitespace-nowrap shrink-0 transition-colors"
              title="Gọi Hotline Tuyến Hoa 0344.727.528"
            >
              <PhoneCall className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="hidden sm:inline ml-1.5 font-mono tabular-nums">{STORE_INFO.hotlineDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] sm:min-h-[40px] px-2.5 sm:px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-stone-900 rounded-xl hover:bg-stone-800 active:scale-95 transition-all whitespace-nowrap shrink-0"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Giỏ Hàng</span>
              {cartCount > 0 && (
                <span className="min-w-4 h-4 px-1 rounded-full bg-amber-500 text-stone-950 text-[11px] font-extrabold font-mono flex items-center justify-center -mr-0.5">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

