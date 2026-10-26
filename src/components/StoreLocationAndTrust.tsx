import React from 'react';
import { motion } from 'motion/react';
import { STORE_INFO } from '../data/products';
import { MapPin, Phone, Clock, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

const SHOWROOM_PHOTOS = [
  {
    id: 'showroom-interior-365',
    src: '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png',
    badge: 'Không Gian Trưng Bày Bên Trong',
    title: 'Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa',
    caption:
      'Trưng bày đầy đủ các dòng Chăn Ga Lụa, Đệm chính hãng và hệ Rèm Vải – Rèm Gỗ – Rèm Tổ Ong mẫu mới.',
  },
  {
    id: 'showroom-facade-2floors',
    src: '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
    badge: 'Mặt Tiền Showroom 2 Tầng',
    title: 'Tòa Nhà 2 Tầng Mặt Đường Lớn Chợ Cháy, Ứng Hòa',
    caption:
      'Mặt tiền 3 gian kính rộng rãi, vỉa hè thoáng đãng thuận tiện cho quý khách đỗ ô tô và xe máy ghé chọn mẫu.',
  },
];

export const StoreLocationAndTrust: React.FC = () => {
  return (
    <section
      aria-label="Hình ảnh Showroom Tuyến Hoa và Địa chỉ liên hệ"
      className="py-9 md:py-12 bg-[#FAF5EA]/70 border-t border-[#E5DEC9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl border-2 border-[#E2D4B8] shadow-[0_12px_36px_-12px_rgba(140,98,36,0.08)] p-5 sm:p-7 space-y-6"
        >
          {/* Top Header & Contact Info Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#EAE0CE]">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#7A4E0E] bg-[#FAF2E1] px-3.5 py-1 rounded-full border border-[#D8B670]">
                <ShieldCheck className="w-4 h-4 text-[#8A5A14]" />
                <span>Showroom Chính Hãng · Tuyến Hoa</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1C1917]">
                Showroom Chăn Ga Gối Đệm – Phông Rèm Tuyến Hoa
              </h2>
              <p className="text-sm sm:text-base text-stone-700 font-medium">
                Mời Quý khách ghé tham quan trực tiếp hoặc liên hệ để kỹ thuật viên mang mẫu tư vấn tận nhà.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="px-5 py-3 bg-gradient-to-r from-[#F4E3C1] to-[#EBD19E] hover:from-[#EDD8AE] hover:to-[#E2C285] text-[#1C1917] border border-[#C59B4D] rounded-xl text-sm sm:text-base font-extrabold flex items-center gap-2 transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#7A4E0E]" />
                <span>Hotline: {STORE_INFO.hotlineDisplay}</span>
              </a>
              <a
                href={STORE_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-white hover:bg-[#FAF2E1] text-[#1C1917] border border-[#D5C29F] rounded-xl text-sm sm:text-base font-extrabold flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#8A5A14]" />
                <span>Nhắn Zalo Báo Giá</span>
              </a>
            </div>
          </div>

          {/* 2 Showroom Photos Side-by-Side with Bright Badges & Large Captions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SHOWROOM_PHOTOS.map((photo, index) => (
              <motion.figure
                key={photo.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                data-testid={`showroom-figure-${photo.id}`}
                className="luxury-card rounded-2xl overflow-hidden border-2 border-[#E2D4B8] bg-[#FCF9F3] flex flex-col justify-between"
              >
                <div className="relative aspect-16/10 bg-[#FAF6EE] overflow-hidden border-b border-[#EAE0CE]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-[#1C1917] text-xs sm:text-sm font-extrabold px-3.5 py-1 rounded-xl border border-[#C69C4E] shadow-xs">
                    {photo.badge}
                  </div>
                </div>
                <figcaption className="p-4 sm:p-5 space-y-1.5 bg-white">
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#1C1917]">
                    {photo.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                    {photo.caption}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Bottom Large Store Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm sm:text-base text-stone-800">
            <div className="flex items-start gap-3 bg-[#FCF9F3] p-4 rounded-2xl border border-[#E2D4B8]">
              <MapPin className="w-5 h-5 text-[#8A5A14] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] font-extrabold block">Địa chỉ Showroom:</strong>
                <span>Chợ Cháy, Huyện Ứng Hòa, Hà Nội</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FCF9F3] p-4 rounded-2xl border border-[#E2D4B8]">
              <Clock className="w-5 h-5 text-[#8A5A14] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] font-extrabold block">Giờ mở cửa:</strong>
                <span>06:30 – 21:00 (Tất cả các ngày)</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FDF6E7] p-4 rounded-2xl border border-[#D8B670]">
              <CheckCircle2 className="w-5 h-5 text-[#7A4E0E] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] font-extrabold block">Dịch vụ tận nơi:</strong>
                <span>Miễn phí mang mẫu, đo đạc &amp; lắp đặt</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
