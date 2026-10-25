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
      className="py-8 md:py-11 bg-[#F4EFE6]/70 border-t border-[#E5DEC9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl border border-[#E5DEC9] shadow-[0_12px_36px_-12px_rgba(28,25,23,0.06)] p-5 sm:p-7 space-y-6"
        >
          {/* Top Header & Contact Info Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#EAE3D5]">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C6224] bg-[#FAF5EA] px-3 py-1 rounded-full border border-[#DFC99B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9A6F2E]" />
                <span>Showroom Chính Hãng · Tuyến Hoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#1C1917]">
                Showroom Chăn Ga Gối Đệm – Phông Rèm Tuyến Hoa
              </h2>
              <p className="text-sm text-stone-600">
                Mời Quý khách ghé tham quan trực tiếp hoặc liên hệ để kỹ thuật viên mang mẫu tư vấn tận nhà.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="px-5 py-2.5 bg-[#1C1917] hover:bg-[#2E2924] text-[#F5E6C8] rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Hotline: {STORE_INFO.hotlineDisplay}</span>
              </a>
              <a
                href={STORE_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#EFE8DA] text-[#1C1917] border border-[#D8C8AC] rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#9A6F2E]" />
                <span>Nhắn Zalo Báo Giá</span>
              </a>
            </div>
          </div>

          {/* 2 Showroom Photos Side-by-Side with Concise 1-Line Captions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SHOWROOM_PHOTOS.map((photo, index) => (
              <motion.figure
                key={photo.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                data-testid={`showroom-figure-${photo.id}`}
                className="luxury-card rounded-2xl overflow-hidden border border-[#E5DEC9] bg-[#FAF7F2] flex flex-col justify-between"
              >
                <div className="relative aspect-16/10 bg-[#1C1917] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1917]/90 text-[#F5E6C8] text-xs font-bold px-3 py-1 rounded-lg border border-[#D4AF37]/40">
                    {photo.badge}
                  </div>
                </div>
                <figcaption className="p-4 space-y-1 bg-white">
                  <h3 className="text-base sm:text-lg font-display font-bold text-[#1C1917]">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {photo.caption}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Bottom Concise Store Info Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-stone-700">
            <div className="flex items-start gap-2.5 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EAE3D5]">
              <MapPin className="w-4 h-4 text-[#9A6F2E] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] font-bold block">Địa chỉ Showroom:</strong>
                <span>Chợ Cháy, Huyện Ứng Hòa, Hà Nội</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EAE3D5]">
              <Clock className="w-4 h-4 text-[#9A6F2E] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] font-bold block">Giờ mở cửa:</strong>
                <span>06:30 – 21:00 (Tất cả các ngày)</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-[#FAF5EA] p-3.5 rounded-2xl border border-[#DFC99B]">
              <CheckCircle2 className="w-4 h-4 text-[#8C6224] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] font-bold block">Dịch vụ tận nơi:</strong>
                <span>Miễn phí mang mẫu, đo đạc &amp; lắp đặt</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
