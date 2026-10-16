import React, { useState } from 'react';
import { CartItem, CustomerOrderInfo, PlacedOrder } from '../types/store';
import { STORE_INFO } from '../data/products';
import { X, CheckCircle, ShieldCheck, MapPin, Phone, User, CreditCard, Banknote, CalendarCheck, ArrowRight, Printer } from 'lucide-react';

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
      errs.phone = 'Vui lòng nhập số điện thoại hợp lệ để Tuyến Hoa liên hệ';
    }
    if (!customer.address.trim()) errs.address = 'Vui lòng nhập thôn, xóm, số nhà hoặc địa chỉ cụ thể';
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/80">
          <div>
            <h2 className="text-base md:text-lg font-bold text-stone-900">
              {placedOrder ? 'Xác Nhận Đơn Hàng Thành Công' : 'Đặt Hàng & Giao Tận Nhà'}
            </h2>
            <p className="text-xs text-stone-500">
              Cửa hàng Tuyến Hoa · Chợ Cháy, Ứng Hòa, Hà Nội · Hotline {STORE_INFO.hotlineDisplay}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 md:p-8">
          {placedOrder ? (
            /* Order Success Receipt Screen */
            <div className="space-y-6">
              <div className="text-center space-y-2 py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900">
                  Cảm Ơn Quý Khách Đã Đặt Hàng!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Cửa hàng Tuyến Hoa đã tiếp nhận đơn hàng của quý khách. Chúng tôi sẽ gọi lại cho quý khách trong vòng 15 phút để xác nhận giờ giao hàng hoặc lịch đo đạc.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <div>
                    <span className="text-stone-500">Mã đơn hàng:</span>
                    <span className="font-mono font-bold text-sm text-amber-950 ml-2">
                      {placedOrder.orderId}
                    </span>
                  </div>
                  <div className="text-stone-500">
                    Thời gian: <span className="font-mono text-stone-800">{placedOrder.createdAt}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-stone-700 block mb-1">Thông tin người nhận:</span>
                    <div className="text-stone-900 font-medium">{placedOrder.customer.fullName}</div>
                    <div className="text-stone-600 font-mono">{placedOrder.customer.phone}</div>
                    <div className="text-stone-600 mt-0.5">
                      {placedOrder.customer.address}, {placedOrder.customer.districtNote}
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-700 block mb-1">Phương thức thanh toán:</span>
                    <div className="text-stone-800 font-medium">
                      {placedOrder.customer.paymentMethod === 'cod' && 'Thanh toán tiền mặt khi nhận hàng (COD)'}
                      {placedOrder.customer.paymentMethod === 'bank_transfer' && 'Chuyển khoản ngân hàng (MB Bank)'}
                      {placedOrder.customer.paymentMethod === 'consult_at_home' && 'Khảo sát mang mẫu & đo đạc thanh toán tại nhà'}
                    </div>
                    {placedOrder.customer.paymentMethod === 'bank_transfer' && (
                      <div className="mt-2 p-2 bg-white rounded border border-stone-200 text-[11px] space-y-0.5">
                        <div className="font-semibold text-amber-950">MB Bank: 0344727528</div>
                        <div className="text-stone-600">Chủ TK: TUYEN HOA CHO CHAY</div>
                        <div className="text-stone-500 font-mono">Nội dung: {placedOrder.orderId} - {placedOrder.customer.phone}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Items */}
                <div className="border-t border-stone-200 pt-3 space-y-2">
                  <span className="font-semibold text-stone-700 block">Sản phẩm đã đặt ({placedOrder.items.length}):</span>
                  {placedOrder.items.map((it, idx) => (
                    <div key={idx} className="flex justify-between items-center text-stone-800">
                      <div>
                        <span className="font-medium">{it.productName}</span>
                        <span className="text-stone-500 ml-2 font-mono">x{it.quantity}</span>
                        <div className="text-[11px] text-stone-500">{it.size}</div>
                      </div>
                      <span className="font-mono font-bold">
                        {(it.price * it.quantity).toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t border-stone-200 pt-3 flex justify-between items-center text-sm font-bold text-stone-900">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="text-lg font-mono text-amber-950">
                    {placedOrder.totalAmount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
              </div>

              {/* Tuyến Hoa Support Hotline */}
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="text-center sm:text-left">
                  <span className="font-bold text-amber-950 block">Cần chỉnh sửa đơn hàng hoặc hẹn giờ gấp?</span>
                  <span className="text-stone-600">Hotline Tuyến Hoa luôn sẵn sàng phục vụ từ 6h30 đến 21h00.</span>
                </div>
                <a
                  href={`tel:${STORE_INFO.hotline}`}
                  className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg font-bold flex items-center gap-1.5 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi {STORE_INFO.hotlineDisplay}</span>
                </a>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold"
                >
                  Đóng & Hoàn Tất
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Cart Review List */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-stone-700 border-b border-stone-200 pb-2">
                  <span>Sản phẩm trong đơn hàng ({items.length})</span>
                  <span className="font-mono text-stone-900">
                    Tổng: {totalAmount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
                <div className="space-y-1.5 max-h-32 overflow-y-auto">
                  {items.map((it, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs text-stone-800">
                      <div className="truncate pr-2">
                        <span className="font-medium">{it.productName}</span> ({it.size})
                      </div>
                      <span className="font-mono text-stone-700 whitespace-nowrap">
                        x{it.quantity} = {(it.price * it.quantity).toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Thông Tin Người Nhận Hàng & Lắp Đặt:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Họ và tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={customer.fullName}
                        onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                        placeholder="Ví dụ: Nguyễn Văn Tuấn"
                        className="w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-amber-800"
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Số điện thoại nhận hàng <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        placeholder="Ví dụ: 0988xxxxxx"
                        className="w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border border-stone-300 font-mono focus:outline-hidden focus:border-amber-800"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Địa chỉ chi tiết (Thôn / Xóm / Phố / Xã) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      placeholder="Ví dụ: Xóm 3, Thôn Thái Hòa, Gần UBND Xã, Chợ Cháy..."
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-amber-800"
                    />
                  </div>
                  {errors.address && <p className="text-xs text-rose-600 mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Khu vực quận / huyện:
                    </label>
                    <input
                      type="text"
                      value={customer.districtNote}
                      onChange={(e) => setCustomer({ ...customer, districtNote: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-stone-50 rounded-lg border border-stone-300 text-stone-800 focus:outline-hidden focus:border-amber-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Ghi chú thêm cho thợ / giao hàng:
                    </label>
                    <input
                      type="text"
                      value={customer.notes}
                      onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                      placeholder="Giao buổi chiều, mang thước đo thêm..."
                      className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-amber-800"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Phương Thức Thanh Toán Thuận Tiện:
                </h3>

                <div className="space-y-2">
                  {/* COD */}
                  <label
                    className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                      customer.paymentMethod === 'cod'
                        ? 'border-amber-800 bg-amber-50/60 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={customer.paymentMethod === 'cod'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'cod' })}
                      className="mt-1 text-amber-800 focus:ring-amber-800"
                    />
                    <div>
                      <div className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                        <Banknote className="w-4 h-4 text-emerald-700" />
                        <span>Thanh toán tiền mặt khi nhận hàng (COD)</span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Nhận hàng tận nhà, kiểm tra nguyên đai nguyên kiện, tem mác chính hãng rồi mới thanh toán cho thợ hoặc người giao hàng.
                      </p>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label
                    className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                      customer.paymentMethod === 'bank_transfer'
                        ? 'border-amber-800 bg-amber-50/60 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={customer.paymentMethod === 'bank_transfer'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'bank_transfer' })}
                      className="mt-1 text-amber-800 focus:ring-amber-800"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-blue-700" />
                        <span>Chuyển khoản ngân hàng (MB Bank)</span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Quét mã QR tiện lợi qua App ngân hàng hoặc chuyển khoản theo số tài khoản cửa hàng Tuyến Hoa.
                      </p>
                      {customer.paymentMethod === 'bank_transfer' && (
                        <div className="mt-2 p-2.5 bg-white rounded-lg border border-stone-200 text-xs space-y-1">
                          <div className="text-stone-700 font-medium">Ngân hàng: MB Bank (Quân Đội)</div>
                          <div className="text-stone-900 font-bold font-mono">STK: 0344727528</div>
                          <div className="text-stone-700 font-medium">Chủ TK: TUYEN HOA CHO CHAY</div>
                        </div>
                      )}
                    </div>
                  </label>

                  {/* Consult & measure at home */}
                  <label
                    className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                      customer.paymentMethod === 'consult_at_home'
                        ? 'border-amber-800 bg-amber-50/60 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="consult_at_home"
                      checked={customer.paymentMethod === 'consult_at_home'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'consult_at_home' })}
                      className="mt-1 text-amber-800 focus:ring-amber-800"
                    />
                    <div>
                      <div className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                        <CalendarCheck className="w-4 h-4 text-amber-700" />
                        <span>Hẹn thợ mang mẫu khảo sát & thanh toán tại nhà</span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Tuyến Hoa cử thợ mang mẫu vải rèm, đệm và chiếu trực tiếp đến nhà tại Ứng Hòa để quý khách xem chất liệu thực tế, đo kích thước chuẩn xác rồi mới chốt đơn.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-semibold transition-all shadow-md"
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
