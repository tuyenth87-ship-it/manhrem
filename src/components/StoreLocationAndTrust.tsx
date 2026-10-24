import React from 'react';
import { STORE_INFO } from '../data/products';
import { MapPin, Phone, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export const StoreLocationAndTrust: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xs p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Info: Short, Clear Contact Details (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                <ShieldCheck className="w-4 h-4" />
                <span>Đại Lý Chính Hãng · Uy Tín Hơn 20 Năm</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-stone-950 mt-2">
                Cửa Hàng Chăn Ga Gối Đệm &amp; Mành Rèm Tuyến Hoa
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-800">
              <div className="flex items-start gap-2.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-950 font-extrabold block">Địa chỉ:</strong>
                  <span>Chợ Cháy, Huyện Ứng Hòa, Hà Nội</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-950 font-extrabold block">Giờ mở cửa:</strong>
                  <span>06:30 – 21:00 (Tất cả các ngày)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="px-5 py-3 bg-stone-950 hover:bg-stone-800 text-amber-300 rounded-xl text-sm font-extrabold flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Gọi Điện: {STORE_INFO.hotlineDisplay}</span>
              </a>
              <a
                href={STORE_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-extrabold flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nhắn Zalo Báo Giá</span>
              </a>
            </div>
          </div>

          {/* Right Photo Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden border border-stone-200 bg-stone-900">
              <img
                src="/assets/aistudio/__i_ti_c_b_ng_bay_gi_a_l_ng_qu__-_Copy_5de32935.png"
                alt="Cửa hàng Tuyến Hoa Chợ Cháy Ứng Hòa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-sm sm:text-base font-extrabold">
                  Miễn Phí Mang Mẫu &amp; Lắp Đặt Tận Nhà
                </div>
                <div className="text-xs text-amber-200 mt-0.5">
                  Phục vụ toàn huyện Ứng Hòa và các khu vực lân cận
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
