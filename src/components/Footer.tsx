import React from 'react';
import { STORE_INFO } from '../data/products';
import { Phone, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Store Intro */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold text-white tracking-wide">
              Tuyến Hoa
            </h3>
            <p className="text-stone-400 leading-relaxed">
              Cửa hàng chuyên kinh doanh mành rèm cao cấp, chăn ga gối đệm chính hãng tại khu vực Chợ Cháy, huyện Ứng Hòa, TP Hà Nội.
            </p>
            <div className="pt-1 space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${STORE_INFO.hotline}`} className="hover:text-white font-mono font-bold text-amber-400">
                  {STORE_INFO.hotlineDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{STORE_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Mattress Brands */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Các Dòng Đệm Chính Hãng
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-white transition-colors text-left"
                >
                  Đệm bông ép Vikosan Nano Hàn Quốc
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-white transition-colors text-left"
                >
                  Đệm bông tinh khiết Sông Hồng thế hệ 3
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-white transition-colors text-left"
                >
                  Đệm bông ép Everon Ceramic &amp; than hoạt tính
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-white transition-colors text-left"
                >
                  Đệm cao su thiên nhiên 100% Kymdan Deluxe
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Curtains & Mats */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Mành Rèm &amp; Chiếu Trúc
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('rem-cua')}
                  className="hover:text-white transition-colors text-left"
                >
                  Rèm vải 2 lớp cản sáng chống nắng 100%
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('rem-cua')}
                  className="hover:text-white transition-colors text-left"
                >
                  Rèm cầu vồng Hàn Quốc Modero
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('rem-cua')}
                  className="hover:text-white transition-colors text-left"
                >
                  Rèm tổ ong kết hợp lưới chống muỗi 2in1
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('rem-cua')}
                  className="hover:text-white transition-colors text-left"
                >
                  Rèm sáo gỗ tự nhiên &amp; rèm sáo nhôm
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('manh-chieu')}
                  className="hover:text-white transition-colors text-left"
                >
                  Chiếu trúc hạt Hương Trúc &amp; mành tre ngoài trời
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commitments & Service */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Chính Sách &amp; Cam Kết
            </h4>
            <div className="space-y-2.5 text-stone-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Cam kết chính hãng 100%, bảo hành theo chuẩn nhà máy từ 2 đến 15 năm.</span>
              </div>
              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/80 space-y-1 text-[11px]">
                <div className="font-semibold text-amber-300">Khảo Sát Tận Nhà Ứng Hòa</div>
                <div className="text-stone-300">
                  Thợ Tuyến Hoa mang mẫu vải rèm, đệm và chiếu trực tiếp đến nhà khảo sát, đo đạc miễn phí.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Cửa Hàng Mành Rèm - Chăn Ga Gối Đệm Tuyến Hoa. Chợ Cháy, Ứng Hòa, Hà Nội.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Hotline: {STORE_INFO.hotlineDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>Phục vụ toàn khu vực Ứng Hòa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
