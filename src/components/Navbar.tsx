import React from 'react';
import { ShoppingBag, PhoneCall, Menu, Smartphone, Monitor } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#E5DEC9]/90 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          {/* Mobile Left: Hamburger Menu Button & Mobile Brand Logo */}
          <div className="flex items-center gap-2.5 md:hidden min-w-0">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="min-w-[42px] min-h-[42px] -ml-1 flex items-center justify-center rounded-xl text-stone-900 hover:bg-[#F0EAE1] transition-all shrink-0 cursor-pointer"
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
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-stone-700">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 ${
                activeCategory === 'all'
                  ? 'text-stone-950 font-bold border-[#B4833E]'
                  : 'border-transparent hover:text-stone-950 hover:border-[#D5C5A8]'
              }`}
            >
              Bộ Sưu Tập Chính
            </button>
            {onSelectTab && (
              <>
                <button
                  type="button"
                  onClick={() => onSelectTab('man-khung-1tr')}
                  className="py-1.5 text-stone-700 hover:text-stone-950 border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Đệm, Chiếu Mây &amp; Màn Khung
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('fabric-600k')}
                  className="py-1.5 text-stone-700 hover:text-stone-950 border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Rèm Vải Thiết Kế
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('awning-350k')}
                  className="py-1.5 text-stone-700 hover:text-stone-950 border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Mái Bạt &amp; Ngoại Thất
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab('real-projects')}
                  className="hidden xl:inline-block py-1.5 text-stone-700 hover:text-stone-950 border-b-2 border-transparent hover:border-[#D5C5A8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Công Trình Tiêu Biểu
                </button>
              </>
            )}
          </nav>

          {/* Zone 3: Understated Luxury Actions (Hotline & Cart) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="inline-flex items-center justify-center min-h-[42px] px-3.5 sm:px-4 py-2 rounded-xl border border-[#D8C8AC] bg-white hover:bg-[#F5EFE4] text-stone-900 text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all"
              title="Gọi Hotline Tuyến Hoa 0344.727.528"
            >
              <PhoneCall className="w-4 h-4 text-[#9A6F2E] shrink-0" />
              <span className="hidden sm:inline ml-2 font-mono tabular-nums tracking-tight">
                {STORE_INFO.hotlineDisplay}
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center justify-center gap-2 min-h-[42px] px-4 py-2 text-xs sm:text-sm font-bold text-[#F7E7C4] bg-[#1C1917] hover:bg-[#2A2521] border border-[#3E352B] rounded-xl active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden sm:inline">Giỏ Hàng</span>
              {cartCount > 0 && (
                <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#D4AF37] text-[#1C1917] text-[11px] font-extrabold font-mono flex items-center justify-center">
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
