import React from 'react';
import { STORE_INFO } from '../data/products';
import { MapPin, Phone, Clock, ShieldCheck, Ruler, Truck, MessageCircle } from 'lucide-react';

export const StoreLocationAndTrust: React.FC = () => {
  return (
    <section className="py-8 md:py-16 bg-[#F8F7F2] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
            Địa Chỉ &amp; Uy Tín Cửa Hàng
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-stone-900">
            Cửa Hàng Mành Rèm, Chăn Ga Gối Đệm Tuyến Hoa
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Điểm đến quen thuộc của các gia đình tại Chợ Cháy và huyện Ứng Hòa trong suốt nhiều năm qua khi hoàn thiện nhà mới, chuẩn bị cưới hỏi hoặc mùa đông rét buốt.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {STORE_INFO.commitments.map((c, i) => (
            <div
              key={i}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-2"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-xs sm:text-sm">
                0{i + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 pt-0.5">{c.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Store Detail Box & Visit Information */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
          {/* Authentic Store & Family Story Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 group">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-7 relative h-64 sm:h-80 overflow-hidden">
                <img
                  src="/assets/aistudio/__i_ti_c_b_ng_bay_gi_a_l_ng_qu__-_Copy_5de32935.png"
                  alt="Đại gia đình Tuyến Hoa gắn bó hơn 20 năm tại Chợ Cháy Ứng Hòa"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-amber-950/90 text-amber-200 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Kỷ niệm gắn bó cùng bà con quê hương Chợ Cháy</span>
                </div>
              </div>

              <div className="md:col-span-5 p-5 sm:p-6 text-white space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Câu Chuyện &amp; Chữ Tín
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold leading-tight">
                  Tuyến Hoa · Hơn 20 Năm Gắn Bó Như Người Một Nhà
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Xuất thân từ mảnh đất Chợ Cháy - Ứng Hòa hiếu học và trọng tình nghĩa, gia đình Tuyến Hoa luôn tâm niệm kinh doanh phải xuất phát từ cái TÂM. Mỗi tấm đệm trao đi, mỗi bộ rèm cửa lắp lên đều phải bền đẹp, chuẩn kích thước và bảo hành chu đáo.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-stone-200 border border-white/10">
                    ✓ Uy tín 20+ năm
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-stone-200 border border-white/10">
                    ✓ Đền 10 lần nếu hàng giả
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-stone-200 border border-white/10">
                    ✓ Bảo hành tại nhà
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center pt-2">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                  Thông Tin Liên Hệ &amp; Đến Xem Trực Tiếp
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 mt-1">
                  Đại Lý Tuyến Hoa · Chợ Cháy Ứng Hòa
                </h3>
              </div>

              <div className="space-y-3 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 font-semibold block">Địa chỉ cửa hàng:</strong>
                    <span>Khu vực Chợ Cháy, Huyện Ứng Hòa, Thành phố Hà Nội</span>
                    <p className="text-xs text-stone-500 mt-0.5">
                      (Nằm ngay trung tâm khu Chợ Cháy, thuận tiện đỗ xe máy và ô tô tải chở đệm/rèm)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 font-semibold block">Đường dây nóng / Zalo tư vấn:</strong>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href={`tel:${STORE_INFO.hotline}`}
                        className="text-base font-bold font-mono text-amber-900 hover:underline"
                      >
                        {STORE_INFO.hotlineDisplay}
                      </a>
                      <a
                        href={STORE_INFO.zaloUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-800 border border-blue-200 rounded text-xs font-semibold hover:bg-blue-100 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Nhắn Zalo</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 font-semibold block">Thời gian mở cửa:</strong>
                    <span>{STORE_INFO.openingHours}</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-3 border-t border-stone-200">
                <div className="text-xs font-semibold text-stone-700 mb-1.5">
                  Phục vụ giao hàng &amp; lắp đặt tận nhà tại tất cả các xã thuộc Ứng Hòa:
                </div>
                <div className="text-xs text-stone-500 leading-relaxed">
                  Trầm Lộng, Đồng Tân, Hòa Nam, Hòa Xá, Vạn Thái, Kim Đường, Quảng Phú Cầu, Lưu Hoàng, Phù Lưu, Tảo Dương Văn, Đội Bình, thị trấn Vân Đình và toàn khu vực lân cận.
                </div>
              </div>
            </div>

            {/* Right Card: Quick Request Measuring Service (5 cols) */}
            <div className="lg:col-span-5 bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-4">
              <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-amber-800" />
                <h4 className="text-sm font-bold text-stone-900">
                  Dịch Vụ Mang Mẫu &amp; Khảo Sát Tận Nhà
                </h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bạn đang băn khoăn không biết màu vải rèm nào hợp với sơn tường, hoặc kích thước giường cần đệm bao nhiêu cm? Chỉ cần để lại cuộc gọi, thợ Tuyến Hoa sẽ mang mẫu đến tận phòng ngủ tư vấn miễn phí 100%.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${STORE_INFO.hotline}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Gọi {STORE_INFO.hotlineDisplay} Đặt Lịch Khảo Sát</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
