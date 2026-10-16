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
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-900" />
              <h2 className="text-base font-bold text-stone-900">
                Giỏ Hàng Tuyến Hoa ({totalItemCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Location trust strip */}
          <div className="px-6 py-2.5 bg-amber-50/70 border-b border-amber-100/80 flex items-center gap-2 text-xs text-amber-950 font-medium">
            <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Miễn phí giao hàng & lắp đặt tận nơi khu vực Ứng Hòa</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-stone-800">Giỏ hàng của bạn đang trống</h3>
                <p className="text-xs text-stone-500 max-w-xs">
                  Khám phá các sản phẩm đệm Vikosan, Sông Hồng, Everon, rèm cửa và chiếu trúc tại cửa hàng Tuyến Hoa Chợ Cháy.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Tiếp Tục Mua Sắm
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.productId}-${item.variantId}`}
                  className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/40 flex flex-col justify-between space-y-3"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900 leading-snug">
                        {item.productName}
                      </h4>
                      <div className="text-xs text-stone-500 mt-0.5 font-medium">
                        Quy cách: <span className="text-stone-800">{item.size}</span>
                      </div>
                      {item.customNote && (
                        <div className="text-[11px] text-amber-800 mt-1 italic">
                          Ghi chú: {item.customNote}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.productId, item.variantId)}
                      className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                      title="Xóa sản phẩm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-200/60">
                    {/* Stepper */}
                    <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.variantId, item.quantity - 1)
                        }
                        className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-0.5 text-xs font-bold font-mono text-stone-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.variantId, item.quantity + 1)
                        }
                        className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price calculation */}
                    <div className="text-right">
                      <div className="text-sm font-bold text-stone-900 font-mono tabular-nums">
                        {(item.price * item.quantity).toLocaleString('vi-VN')} đ
                      </div>
                      {item.quantity > 1 && (
                        <div className="text-[10px] text-stone-400 font-mono tabular-nums">
                          ({item.price.toLocaleString('vi-VN')} đ / sp)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50/80 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Tạm tính hàng hóa:</span>
                  <span className="font-mono font-medium">{totalAmount.toLocaleString('vi-VN')} đ</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Phí vận chuyển & lắp đặt:</span>
                  <span className="text-emerald-700 font-medium">Miễn phí tại Ứng Hòa</span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Tổng thanh toán:</span>
                  <span className="font-mono tabular-nums text-lg text-amber-950">
                    {totalAmount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Kiểm tra hàng đúng mẫu mã, nguyên tem mác trước khi thanh toán.</span>
              </div>

              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-semibold transition-all shadow-md"
              >
                <span>Tiến Hành Đặt Hàng & Giao Tận Nhà</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
