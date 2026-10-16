import React, { useState } from 'react';
import { CartItem, CustomerOrderInfo, PlacedOrder } from '../types/store';
import { STORE_INFO } from '../data/products';
import { X, CheckCircle, ShieldCheck, MapPin, Phone, User, CreditCard, Banknote, CalendarCheck, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (order: PlacedOrder) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [customer, setCustomer] = useState<CustomerOrderInfo>({
    fullName: '',
    phone: '',
    address: '',
    villageOrHamlet: 'Khu vực Chợ Cháy',
    districtNote: 'Huyện Ứng Hòa, Hà Nội',
    notes: '',
    paymentMethod: 'cod',
  });

  const [placedOrder, setPlacedOrder] = useState<PlacedOrder | null>(null);
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; address?: string }>({});

  const validate = () => {
    const errs: { fullName?: string; phone?: string; address?: string } = {};
    if (!customer.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    if (!customer.phone.trim() || customer.phone.length < 9) {
      errs.phone = 'Vui lòng nhập số điện thoại để Tuyến Hoa gọi giao hàng';
    }
    if (!customer.address.trim()) errs.address = 'Vui lòng nhập thôn, xóm hoặc địa chỉ giao hàng';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newOrder: PlacedOrder = {
      orderId: `TH-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      customer: customer,
      items: items,
      totalAmount: totalAmount,
      shippingFee: 0,
      status: customer.paymentMethod === 'consult_at_home' ? 'measuring_scheduled' : 'confirmed',
    };

    setPlacedOrder(newOrder);
    onOrderSuccess(newOrder);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-end md:items-center justify-center p-0 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-t-3xl md:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh] md:max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator */}
        <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto my-2 md:hidden" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-stone-200 bg-stone-50/90">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900">
              {placedOrder ? 'Xác Nhận Đơn Hàng' : 'Đặt Hàng & Giao Tận Nhà'}
            </h2>
            <p className="text-[11px] sm:text-xs text-stone-500">
              Cửa hàng Tuyến Hoa · Chợ Cháy Ứng Hòa · Hotline {STORE_INFO.hotlineDisplay}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
          {placedOrder ? (
            /* Order Success Receipt */
            <div className="space-y-5">
              <div className="text-center space-y-2 py-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                  Cảm Ơn Quý Khách Đã Đặt Hàng!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Cửa hàng Tuyến Hoa sẽ gọi điện thoại cho quý khách trong vòng 15 phút để xác nhận giờ giao hàng hoặc lịch mang mẫu đo đạc tại nhà.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3.5 text-xs">
                <div className="flex justify-between items-center border-b border-stone-200 pb-2.5">
                  <div>
                    <span className="text-stone-500">Mã đơn:</span>
                    <span className="font-mono font-bold text-sm text-amber-950 ml-1.5">
                      {placedOrder.orderId}
                    </span>
                  </div>
                  <div className="text-stone-500 font-mono">{placedOrder.createdAt}</div>
                </div>

                <div className="space-y-1">
                  <span className="font-semibold text-stone-700 block">Người nhận hàng:</span>
                  <div className="text-stone-900 font-medium">{placedOrder.customer.fullName} - <span className="font-mono">{placedOrder.customer.phone}</span></div>
                  <div className="text-stone-600">
                    {placedOrder.customer.address}, {placedOrder.customer.districtNote}
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-2.5 space-y-1.5">
                  <span className="font-semibold text-stone-700 block">Sản phẩm ({placedOrder.items.length}):</span>
                  {placedOrder.items.map((it, idx) => (
                    <div key={idx} className="flex justify-between items-center text-stone-800">
                      <div className="truncate pr-2">
                        <span className="font-medium">{it.productName}</span> x{it.quantity}
                      </div>
                      <span className="font-mono font-bold whitespace-nowrap">
                        {(it.price * it.quantity).toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-stone-200 pt-2.5 flex justify-between items-center text-sm font-bold text-stone-900">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="text-base sm:text-lg font-mono text-amber-950">
                    {placedOrder.totalAmount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
              </div>

              {/* Fast Hotline Contact */}
              <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-stone-700 text-center sm:text-left">
                  Cần hỗ trợ gấp xin vui lòng gọi hotline Tuyến Hoa Chợ Cháy:
                </span>
                <a
                  href={`tel:${STORE_INFO.hotline}`}
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{STORE_INFO.hotlineDisplay}</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full min-h-[44px] py-3 bg-stone-900 text-white rounded-xl text-xs font-semibold"
              >
                Đóng &amp; Hoàn Tất
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {/* Order Summary banner */}
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex justify-between items-center text-xs">
                <span className="text-stone-600">Đơn hàng ({items.length} món):</span>
                <span className="font-mono font-bold text-sm text-amber-950">
                  {totalAmount.toLocaleString('vi-VN')} đ
                </span>
              </div>

              {/* Inputs */}
              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Họ và tên của bạn <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={customer.fullName}
                      onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                      placeholder="Nguyễn Văn Tuấn"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-stone-300 min-h-[44px] focus:outline-hidden focus:border-amber-800"
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Số điện thoại nhận hàng <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      inputMode="tel"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      placeholder="0988xxxxxx"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-stone-300 font-mono min-h-[44px] focus:outline-hidden focus:border-amber-800"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Địa chỉ (Thôn / Xóm / Phố / Xã) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      placeholder="Xóm 3, Thôn Thái Hòa, gần UBND Xã, Chợ Cháy..."
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-stone-300 min-h-[44px] focus:outline-hidden focus:border-amber-800"
                    />
                  </div>
                  {errors.address && <p className="text-xs text-rose-600 mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Ghi chú thêm:
                  </label>
                  <input
                    type="text"
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                    placeholder="Giao buổi chiều, mang thước đo thêm..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-stone-300 min-h-[44px] focus:outline-hidden focus:border-amber-800"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Phương Thức Thanh Toán:
                </span>

                <div className="space-y-2">
                  <label
                    className={`p-3 rounded-2xl border flex items-center gap-3 cursor-pointer min-h-[52px] ${
                      customer.paymentMethod === 'cod'
                        ? 'border-amber-800 bg-amber-50/70 shadow-xs'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={customer.paymentMethod === 'cod'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'cod' })}
                      className="text-amber-800 focus:ring-amber-800"
                    />
                    <div className="text-xs font-semibold text-stone-900 flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-emerald-700" />
                      <span>Thanh toán tiền mặt khi nhận hàng (COD)</span>
                    </div>
                  </label>

                  <label
                    className={`p-3 rounded-2xl border flex items-center gap-3 cursor-pointer min-h-[52px] ${
                      customer.paymentMethod === 'bank_transfer'
                        ? 'border-amber-800 bg-amber-50/70 shadow-xs'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={customer.paymentMethod === 'bank_transfer'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'bank_transfer' })}
                      className="text-amber-800 focus:ring-amber-800"
                    />
                    <div className="text-xs font-semibold text-stone-900 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-blue-700" />
                      <span>Chuyển khoản MB Bank ({STORE_INFO.bankInfo.accountNumber})</span>
                    </div>
                  </label>

                  <label
                    className={`p-3 rounded-2xl border flex items-center gap-3 cursor-pointer min-h-[52px] ${
                      customer.paymentMethod === 'consult_at_home'
                        ? 'border-amber-800 bg-amber-50/70 shadow-xs'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="consult_at_home"
                      checked={customer.paymentMethod === 'consult_at_home'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'consult_at_home' })}
                      className="text-amber-800 focus:ring-amber-800"
                    />
                    <div className="text-xs font-semibold text-stone-900 flex items-center gap-2">
                      <CalendarCheck className="w-4 h-4 text-amber-700" />
                      <span>Thợ mang mẫu đo đạc &amp; thanh toán tại nhà</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white rounded-2xl text-xs sm:text-sm font-semibold transition-all shadow-md"
                >
                  <span>Hoàn Tất Đặt Hàng ({totalAmount.toLocaleString('vi-VN')} đ)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
