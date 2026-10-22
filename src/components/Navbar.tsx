import React from 'react';
import { ShoppingBag, PhoneCall, Menu, Camera, Smartphone, Sparkles } from 'lucide-react';
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
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 md:gap-8 h-14 sm:h-16">
          {/* Mobile Left: Hamburger Menu Button & Mobile Brand Logo */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Mở menu danh mục"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Brand Logo on mobile with photo avatar & Rèm Chăn Đệm */}
            <button
              type="button"
              onClick={onOpenLogoModal ? onOpenLogoModal : undefined}
              className="hover:opacity-90 transition-opacity text-left cursor-pointer"
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

          {/* Desktop Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'all' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Tất Cả
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('dem')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'dem' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Đệm Cao Cấp
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('rem-cua')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'rem-cua' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Mành Rèm
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('manh-chieu')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'manh-chieu' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Chiếu Trúc &amp; Mây
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory('chan-ga-goi')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeCategory === 'chan-ga-goi' ? 'text-stone-950 font-bold border-b-2 border-stone-900' : ''
              }`}
            >
              Chăn Ga Gối
            </button>
            {onSelectTab && (
              <>
                <button
                  type="button"
                  onClick={() => onSelectTab('bead-curtains')}
                  className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 text-amber-950 font-bold flex items-center gap-1 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Mành Hạt Kết Tranh (600k)</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('curtain-articles')}
                  className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 text-amber-900 font-bold flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Cẩm Nang Rèm</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('real-projects')}
                  className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 text-emerald-800 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Ảnh Thật Công Trình</span>
                </button>
              </>
            )}
          </nav>

          {/* Zone 3: Actions (Chat, Call & Cart) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {onOpenInstallModal && (
              <button
                type="button"
                onClick={onOpenInstallModal}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors min-h-[38px]"
                title="Cài đặt App lên điện thoại"
              >
                <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                <span>Cài App</span>
              </button>
            )}

            {onOpenChat && (
              <button
                type="button"
                onClick={onOpenChat}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50/80 text-amber-950 hover:bg-amber-100 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors min-h-[38px]"
                title="Tư vấn trực tuyến"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Tư Vấn 24/7</span>
              </button>
            )}

            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="inline-flex items-center justify-center p-2 sm:px-3 sm:py-1.5 rounded-xl border border-stone-200 text-stone-800 hover:text-stone-950 hover:bg-stone-50 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors min-h-[38px]"
              title="Gọi Hotline Tuyến Hoa"
            >
              <PhoneCall className="w-4 h-4 text-emerald-700 sm:text-amber-800" />
              <span className="hidden sm:inline ml-1.5">{STORE_INFO.hotlineDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 min-h-[38px]"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Giỏ Hàng</span>
              {cartCount > 0 && (
                <span className="min-w-4 h-4 px-1 rounded-full bg-amber-500 text-stone-950 text-[10px] font-bold font-mono flex items-center justify-center -mr-0.5">
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
