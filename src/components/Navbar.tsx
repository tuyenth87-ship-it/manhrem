import React from 'react';
import { ShoppingBag, PhoneCall, Menu, Smartphone, Sparkles, Monitor } from 'lucide-react';
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
  onOpenLogoModal,
  onSelectCategory,
  onSelectTab,
  activeCategory,
  isMobileFrameMode = false,
  onToggleMobileFrameMode,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-xl border-b border-amber-300/60 shadow-[0_4px_24px_-6px_rgba(180,83,9,0.12)]">
      {/* Subtle 24K Gold Hairline Top Shimmer */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-700 via-yellow-300 to-emerald-600" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 md:gap-6 h-14 sm:h-16">
          {/* Mobile Left: Hamburger Menu Button & Mobile Brand Logo */}
          <div className="flex items-center gap-2 md:hidden min-w-0">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="min-w-[42px] min-h-[42px] -ml-1 flex items-center justify-center rounded-xl text-stone-900 hover:bg-amber-50 border border-transparent hover:border-amber-300 active:scale-95 transition-all shrink-0"
              aria-label="Mở menu danh mục"
            >
              <Menu className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={onOpenLogoModal ? onOpenLogoModal : undefined}
              className="hover:opacity-90 transition-opacity text-left cursor-pointer shrink-0"
              title="Bấm để xem logo thương hiệu Tuyến Hoa"
            >
              <BrandLogo variant="nav-mobile" />
            </button>
          </div>

          {/* Desktop Zone 1: Brand Logo */}
          <button
            type="button"
            onClick={onOpenLogoModal ? onOpenLogoModal : undefined}
            className="hidden md:inline-block shrink-0 hover:opacity-95 transition-opacity text-left cursor-pointer"
            title="Bấm để xem & tải logo thương hiệu Tuyến Hoa"
          >
            <BrandLogo variant="nav" />
          </button>

          {/* Desktop Zone 2: Clean, Airy Primary Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-sm font-bold text-stone-800">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeCategory === 'all' ? 'text-stone-950 font-extrabold border-b-2 border-amber-600' : ''
              }`}
            >
              Tất Cả Sản Phẩm
            </button>
            {onSelectTab && (
              <>
                <button
                  type="button"
                  onClick={() => onSelectTab('awning-350k')}
                  className="luxury-sheen-auto whitespace-nowrap shrink-0 text-stone-950 font-extrabold flex items-center gap-1.5 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-400 hover:to-yellow-300 px-3.5 py-1.5 rounded-xl border border-amber-500 shadow-[0_2px_10px_rgba(245,158,11,0.3)] cursor-pointer transition-all hover:scale-[1.02]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-950 diamond-twinkle" />
                  <span>Bạt Xếp 350k/m²</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('fabric-600k')}
                  className="luxury-sheen-hover whitespace-nowrap shrink-0 text-amber-100 font-extrabold flex items-center gap-1.5 bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 px-3.5 py-1.5 rounded-xl border border-amber-400/70 shadow-xs cursor-pointer transition-all hover:scale-[1.02]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 diamond-twinkle" />
                  <span>Rèm Vải 600k/m</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('motorized-curtains')}
                  className="hidden xl:inline-block hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer text-stone-800"
                >
                  Rèm Tự Động 4.0
                </button>
              </>
            )}
          </nav>

          {/* Zone 3: Clean Actions (Call & Cart) */}
          <div className="flex items-center gap-2 shrink-0">
            {onToggleMobileFrameMode && (
              <button
                type="button"
                onClick={onToggleMobileFrameMode}
                className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold whitespace-nowrap shrink-0 transition-all min-h-[40px] cursor-pointer ${
                  isMobileFrameMode
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 border-amber-600 shadow-xs'
                    : 'bg-stone-100 hover:bg-amber-50 text-stone-800 border-stone-300'
                }`}
                title="Chuyển đổi khung giao diện Mobile / Toàn màn hình"
              >
                {isMobileFrameMode ? (
                  <>
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Toàn Màn Hình</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                    <span>Giao Diện Mobile</span>
                  </>
                )}
              </button>
            )}

            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="luxury-sheen-auto inline-flex items-center justify-center min-w-[42px] min-h-[40px] px-3 sm:px-4 py-1.5 rounded-xl border border-emerald-500 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white hover:from-emerald-600 hover:to-teal-600 text-xs sm:text-sm font-extrabold whitespace-nowrap shrink-0 transition-all shadow-[0_2px_12px_rgba(4,120,87,0.28)]"
              title="Gọi Hotline Tuyến Hoa 0344.727.528"
            >
              <PhoneCall className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="hidden sm:inline ml-1.5 font-mono tabular-nums">{STORE_INFO.hotlineDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="luxury-sheen-auto relative flex items-center justify-center gap-1.5 min-w-[42px] min-h-[40px] px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-extrabold text-amber-200 bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 border border-amber-400/70 rounded-xl hover:border-amber-300 active:scale-95 transition-all whitespace-nowrap shrink-0 shadow-[0_4px_14px_rgba(28,25,23,0.22)] cursor-pointer"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Giỏ Hàng</span>
              {cartCount > 0 && (
                <span className="min-w-4 h-4 px-1 rounded-full bg-amber-400 text-stone-950 text-[11px] font-extrabold font-mono flex items-center justify-center -mr-0.5 shadow-xs">
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
