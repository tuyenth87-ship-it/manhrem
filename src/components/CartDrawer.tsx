import React from 'react';
import { CartItem } from '../types/store';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, variantId: string, quantity: number) => void;
  onRemoveItem: (productId: string, variantId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex w-full sm:max-w-md">
        <div className="w-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="px-4 sm:px-6 py-3.5 border-b border-stone-200 flex items-center justify-between bg-stone-50/90">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-900" />
              <h2 className="text-sm sm:text-base font-bold text-stone-900">
                Giỏ Hàng Tuyến Hoa ({totalItemCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Location trust strip */}
          <div className="px-4 py-2 bg-amber-50/80 border-b border-amber-100 flex items-center gap-2 text-[11px] sm:text-xs text-amber-950 font-medium">
            <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Miễn phí giao hàng &amp; kê đệm tại huyện Ứng Hòa</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-sm font-semibold text-stone-800">Giỏ hàng chưa có sản phẩm nào</h3>
                <p className="text-xs text-stone-500 max-w-xs">
                  Chọn các mẫu đệm Vikosan, Everon, rèm cầu vồng hoặc chiếu trúc tại Tuyến Hoa Chợ Cháy.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-[44px] px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Tiếp Tục Xem Hàng
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.productId}-${item.variantId}`}
                  className="p-3 sm:p-3.5 rounded-2xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-3"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug">
                        {item.productName}
                      </h4>
                      <div className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                        Quy cách: <span className="text-stone-800 font-medium">{item.size}</span>
                      </div>
                      {item.customNote && (
                        <div className="text-[10px] text-amber-800 mt-1 italic">
                          {item.customNote}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.productId, item.variantId)}
                      className="min-w-[36px] min-h-[36px] flex items-center justify-center text-stone-400 hover:text-rose-600 transition-colors -mr-1 -mt-1"
                      title="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-200/60">
                    {/* Stepper with 44px hitboxes */}
                    <div className="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.variantId, item.quantity - 1)
                        }
                        className="min-w-[38px] min-h-[38px] flex items-center justify-center text-stone-600 hover:bg-stone-100 active:bg-stone-200 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 py-0.5 text-xs font-bold font-mono text-stone-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.variantId, item.quantity + 1)
                        }
                        className="min-w-[38px] min-h-[38px] flex items-center justify-center text-stone-600 hover:bg-stone-100 active:bg-stone-200 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-bold text-stone-900 font-mono tabular-nums">
                        {(item.price * item.quantity).toLocaleString('vi-VN')} đ
                      </div>
                      {item.quantity > 1 && (
                        <div className="text-[10px] text-stone-400 font-mono">
                          ({item.price.toLocaleString('vi-VN')} đ / sp)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sticky Checkout Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-stone-200 bg-stone-50/90 space-y-3.5">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Tạm tính tiền hàng:</span>
                  <span className="font-mono font-medium">{totalAmount.toLocaleString('vi-VN')} đ</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Vận chuyển tại Ứng Hòa:</span>
                  <span className="text-emerald-700 font-medium">Miễn phí 100%</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-stone-900 pt-1.5 border-t border-stone-200">
                  <span>Tổng thanh toán:</span>
                  <span className="font-mono tabular-nums text-base sm:text-lg text-amber-950">
                    {totalAmount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Kiểm tra hàng nguyên tem mác trước khi thanh toán.</span>
              </div>

              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white rounded-2xl text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <span>Đặt Hàng &amp; Giao Tận Nhà</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
