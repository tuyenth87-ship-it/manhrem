import { X, Phone, MessageCircle, MapPin, Clock, ChevronRight, ShieldCheck, Ruler, Scale, Camera, Smartphone, Sparkles } from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '../data/products';
import { REAL_PROJECTS } from '../data/realProjects';
import { ProductCategory } from '../types/store';
import { BrandLogo } from './BrandLogo';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectTab: (tab: string) => void;
  onOpenChat?: () => void;
  onOpenInstallModal?: () => void;
  onOpenLogoModal?: () => void;
  activeCategory: string;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectTab,
  onOpenChat,
  onOpenInstallModal,
  onOpenLogoModal,
  activeCategory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-[85%] w-80 bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              if (onOpenLogoModal) {
                onClose();
                onOpenLogoModal();
              }
            }}
            className="text-left cursor-pointer hover:opacity-90 transition-opacity"
            title="Bấm để xem logo Tuyến Hoa"
          >
            <BrandLogo variant="drawer" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center hover:bg-stone-300 transition-colors shrink-0 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Navigation */}
        <div className="p-5 space-y-4 flex-1">
          {/* Mobile PWA Install Banner */}
          {onOpenInstallModal && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenInstallModal();
              }}
              className="w-full p-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-left flex items-center justify-between shadow-xs transition-colors border border-amber-600/30"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Smartphone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-950 flex items-center gap-1.5">
                    <span>Cài App Tuyến Hoa</span>
                    <span className="text-[10px] px-1.5 py-0.2 bg-stone-900 text-amber-300 rounded font-semibold">Miễn phí</span>
                  </div>
                  <div className="text-[10px] text-stone-800">Thêm vào màn hình chính điện thoại</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-900" />
            </button>
          )}

          {/* Real Projects Highlight Button */}
          <button
            type="button"
            onClick={() => {
              onSelectTab('real-projects');
              onClose();
            }}
            className="w-full p-3 bg-gradient-to-r from-stone-900 to-amber-950 text-white rounded-xl text-left flex items-center justify-between border border-amber-400/40 shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Camera className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Ảnh Thật Công Trình</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-stone-300">{REAL_PROJECTS.length} ảnh thợ thi công &amp; đo rèm tại Ứng Hòa</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-300" />
          </button>

          {/* Curtain Guide & Articles Highlight Button */}
          <button
            type="button"
            onClick={() => {
              onSelectTab('curtain-articles');
              onClose();
            }}
            className="w-full p-3 bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 text-white rounded-xl text-left flex items-center justify-between border border-amber-400/50 shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/30 text-amber-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Cẩm Nang & Bài Viết Rèm</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-amber-400 text-stone-950 rounded font-bold">Mới</span>
                </div>
                <div className="text-[10px] text-amber-200">Tư vấn chất liệu, bảng kích cỡ & giá</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-300" />
          </button>

          {/* Bead Curtains Highlight Button */}
          <button
            type="button"
            onClick={() => {
              onSelectTab('bead-curtains');
              onClose();
            }}
            className="w-full p-3 bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-xl text-left flex items-center justify-between border border-amber-400/50 shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/30 text-amber-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Mành Hạt Nhựa &amp; Gỗ Kết Tranh</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-amber-400 text-stone-950 rounded font-bold">Từ 600k</span>
                </div>
                <div className="text-[10px] text-amber-200">Hạt giọt lệ, tròn, tranh Công &amp; Sen Hạc</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-300" />
          </button>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                onSelectTab('curtain-calculator');
                onClose();
              }}
              className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-left flex flex-col justify-between"
            >
              <Ruler className="w-5 h-5 text-amber-800 mb-1" />
              <span className="text-xs font-bold text-amber-950">Dự Toán Rèm</span>
              <span className="text-[10px] text-stone-500">Tính giá theo mét</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (onOpenChat) {
                  onClose();
                  onOpenChat();
                }
              }}
              className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-left flex flex-col justify-between text-white"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-amber-400 font-bold text-sm">AI 24/7</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-xs font-bold text-white">Chat Tư Vấn</span>
              <span className="text-[10px] text-stone-300">Hỏi giá đệm & rèm</span>
            </button>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Danh Mục Hàng Hóa
            </h3>
            <div className="space-y-1">
              {[
                { id: 'all', label: 'Tất cả sản phẩm', count: PRODUCTS.length },
                { id: 'dem', label: 'Đệm bông ép & cao su', count: PRODUCTS.filter((p) => p.category === 'dem').length },
                { id: 'rem-cua', label: 'Mành rèm cửa & tổ ong', count: PRODUCTS.filter((p) => p.category === 'rem-cua').length },
                { id: 'manh-chieu', label: 'Chiếu trúc & mành tre', count: PRODUCTS.filter((p) => p.category === 'manh-chieu').length },
                { id: 'chan-ga-goi', label: 'Chăn ga gối Tencel', count: PRODUCTS.filter((p) => p.category === 'chan-ga-goi').length },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    onSelectCategory(cat.id as ProductCategory);
                    onSelectTab('catalog');
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-stone-900 text-white font-bold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="font-mono text-[11px] opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Brands Quick Filter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Thương Hiệu Nổi Bật
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {['Vikosan', 'Sông Hồng', 'Everon', 'Kymdan', 'Hương Trúc', 'Modero'].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => {
                    onSelectTab('catalog');
                    onClose();
                  }}
                  className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-[11px] font-medium"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Store Info */}
          <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs text-stone-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Chợ Cháy, Huyện Ứng Hòa, Hà Nội</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>6:30 - 21:00 hàng ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Khảo sát đo rèm tại nhà miễn phí</span>
            </div>
          </div>
        </div>

        {/* Footer Direct CTA */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2">
          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="w-full flex items-center justify-center gap-2 py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Gọi Hotline: {STORE_INFO.hotlineDisplay}</span>
          </a>

          <a
            href={STORE_INFO.zaloUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Zalo Tuyến Hoa</span>
          </a>
        </div>
      </div>
    </div>
  );
};
