import React from 'react';
import { STORE_INFO } from '../data/products';
import { MapPin, Phone, Clock, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

const SHOWROOM_PHOTOS = [
  {
    id: 'showroom-interior-365',
    src: '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png',
    badge: 'Không Gian Trưng Bày Bên Trong',
    title: 'Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa',
    caption:
      'Khu trưng bày Chăn Ga êm ái, Gối thư giãn, Đệm bông ép vững chãi (bên trái) và hệ Rèm Vải – Rèm Gỗ – Rèm Trúc sang trọng (bên phải).',
  },
  {
    id: 'showroom-facade-2floors',
    src: '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
    badge: 'Toàn Cảnh Mặt Tiền 2 Tầng',
    title: 'Showroom Tuyến Hoa: Chăn - Ga - Gối - Đệm - Phông - Rèm',
    caption:
      'Tòa nhà 2 tầng mặt đường lớn với 3 gian kính trưng bày rộng rãi, vỉa hè thoáng đãng thuận tiện cho quý khách đỗ xe máy và ô tô ghé chọn mẫu.',
  },
];

export const StoreLocationAndTrust: React.FC = () => {
  return (
    <section
      aria-label="Hình ảnh Showroom Tuyến Hoa và Địa chỉ liên hệ"
      className="py-8 md:py-10 bg-stone-100/70 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xs p-5 sm:p-7 space-y-6">
          {/* Top Header & Contact Info Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-5 border-b border-stone-200">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                <ShieldCheck className="w-4 h-4" />
                <span>Showroom Chính Hãng · Giấc Ngủ Ngon - Cuộc Sống Trọn Vẹn</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-stone-950">
                Showroom Chăn Ga Gối Đệm – Phông Rèm Tuyến Hoa
              </h2>
              <p className="text-sm sm:text-base text-stone-700 font-medium">
                Kính chào Quý khách đến tham quan trực tiếp kho mẫu Chăn Ga Gối Đệm, Màn Khung &amp; Rèm Cửa tại cửa hàng.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
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

          {/* 2 Showroom Photos Side-by-Side with Clear, Readable Captions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SHOWROOM_PHOTOS.map((photo) => (
              <figure
                key={photo.id}
                data-testid={`showroom-figure-${photo.id}`}
                className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 flex flex-col justify-between shadow-2xs"
              >
                <div className="relative aspect-16/10 bg-stone-900 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/85 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-amber-400/40">
                    {photo.badge}
                  </div>
                </div>
                <figcaption className="p-4 space-y-1.5 bg-white">
                  <h3 className="text-base sm:text-lg font-display font-extrabold text-stone-950">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed font-medium">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Bottom Concise Store Info Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-stone-800 pt-1">
            <div className="flex items-start gap-2.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
              <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-950 font-extrabold block">Địa chỉ Showroom:</strong>
                <span>Chợ Cháy, Huyện Ứng Hòa, Hà Nội</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
              <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-950 font-extrabold block">Giờ mở cửa đón khách:</strong>
                <span>06:30 – 21:00 (Tất cả các ngày trong tuần)</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-950 font-extrabold block">Dịch vụ tận nhà:</strong>
                <span>Miễn phí mang mẫu, đo đạc &amp; lắp đặt tận nơi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
