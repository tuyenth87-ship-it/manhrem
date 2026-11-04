import React from 'react';
import { ShoppingBag, PhoneCall, Menu } from 'lucide-react';
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
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#EAE3D5] shadow-[0_4px_24px_-12px_rgba(28,25,23,0.05)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          {/* Mobile Left: Hamburger Menu Button & Mobile Brand Logo */}
          <div className="flex items-center gap-2.5 md:hidden min-w-0">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="min-w-[40px] min-h-[40px] -ml-1 flex items-center justify-center rounded-xl text-[#1C1917] bg-[#FAF8F5] border border-[#E6DEC8] hover:bg-[#F3EDE2] transition-all shrink-0 cursor-pointer"
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

          {/* Desktop Zone 2: Refined Architectural Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-stone-600 tracking-wide">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 ${
                activeCategory === 'all'
                  ? 'text-[#1C1917] font-semibold border-[#B5945B]'
                  : 'border-transparent hover:text-[#1C1917] hover:border-[#DCD2C0]'
              }`}
            >
              Bộ Sưu Tập Chính
            </button>
            {onSelectTab && (
              <>
                <button
                  type="button"
                  onClick={() => onSelectTab('man-khung-1tr')}
                  className="py-2 text-stone-600 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#DCD2C0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Đệm · Chiếu Mây · Màn Khung
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('fabric-600k')}
                  className="py-2 text-stone-600 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#DCD2C0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Rèm Vải 600k/m
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('awning-350k')}
                  className="py-2 text-stone-600 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#DCD2C0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Bạt Xếp 350k/m²
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('real-projects')}
                  className="hidden xl:inline-block py-2 text-stone-600 hover:text-[#1C1917] border-b-2 border-transparent hover:border-[#DCD2C0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Công Trình Thực Tế
                </button>
              </>
            )}
          </nav>

          {/* Zone 3: Refined Champagne & Obsidian Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="inline-flex items-center justify-center min-h-[40px] px-3.5 py-2 rounded-xl border border-[#E4DAC7] bg-[#FAF8F5] hover:bg-[#F3ECE0] text-[#1C1917] text-sm font-semibold whitespace-nowrap shrink-0 transition-all"
              title="Gọi Hotline Tuyến Hoa 0344.727.528"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#8C6224] shrink-0" />
              <span className="hidden sm:inline ml-2 font-mono tabular-nums tracking-tight">
                {STORE_INFO.hotlineDisplay}
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="btn-luxury-primary relative flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 text-sm font-medium rounded-xl active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D8B779]" />
              <span className="hidden sm:inline">Giỏ Hàng</span>
              {cartCount > 0 && (
                <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#B5945B] text-white text-xs font-semibold font-mono flex items-center justify-center">
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
