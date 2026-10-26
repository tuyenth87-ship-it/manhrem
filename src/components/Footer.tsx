import React from 'react';
import { STORE_INFO } from '../data/products';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-gradient-to-b from-[#FAF5EA] to-[#F3E9D6] text-stone-700 pt-12 pb-9 border-t-2 border-[#E2D4B8] text-sm sm:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Store Intro with Brand Logo */}
          <div className="space-y-3.5">
            <BrandLogo variant="footer" />
            <p className="text-stone-700 leading-relaxed pt-1 font-medium">
              Showroom chuyên kinh doanh Mành Rèm cao cấp, Chăn Ga Gối Đệm chính hãng tại Chợ Cháy, Huyện Ứng Hòa, TP Hà Nội.
            </p>
            <div className="pt-1 space-y-2 text-stone-800 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A5A14] shrink-0 mt-1" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8A5A14] shrink-0" />
                <a
                  href={`tel:${STORE_INFO.hotline}`}
                  className="hover:text-[#1C1917] font-mono font-extrabold text-[#7A4E0E] text-base"
                >
                  {STORE_INFO.hotlineDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#8A5A14] shrink-0" />
                <span>{STORE_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Mattress Brands */}
          <div className="space-y-3.5">
            <h4 className="text-base font-extrabold text-[#1C1917] uppercase tracking-wider">
              Các Dòng Đệm Chính Hãng
            </h4>
            <ul className="space-y-2.5 text-stone-700 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Đệm lò xo &amp; cao su Everhome chính hãng
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Đệm bông ép Vikosan Nano Hàn Quốc
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Đệm bông tinh khiết Sông Hồng thế hệ 3
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('dem')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Đệm cao su thiên nhiên 100% Kymdan Deluxe
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Curtains & Mats */}
          <div className="space-y-3.5">
            <h4 className="text-base font-extrabold text-[#1C1917] uppercase tracking-wider">
              Mành Rèm &amp; Chiếu Mây
            </h4>
            <ul className="space-y-2.5 text-stone-700 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('rem-cua')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Rèm vải cản nắng 600.000đ/m hoàn thiện
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('rem-cua')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Vách rèm tổ ong ngăn lạnh điều hòa 650k/m²
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('rem-cua')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Rèm cầu vồng Hàn Quốc &amp; Rèm gỗ tự nhiên
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('manh-chieu')}
                  className="hover:text-[#8A5A14] transition-colors text-left cursor-pointer"
                >
                  Chiếu mây điều hòa 450k/bộ &amp; Màn khung 1Tr
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commitments & Service */}
          <div className="space-y-3.5">
            <h4 className="text-base font-extrabold text-[#1C1917] uppercase tracking-wider">
              Chính Sách &amp; Cam Kết
            </h4>
            <div className="space-y-3 text-stone-700 font-medium">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>Cam kết chính hãng 100%, bảo hành theo chuẩn nhà máy từ 5 đến 15 năm.</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#D8C5A3] space-y-1 text-sm shadow-2xs">
                <div className="font-extrabold text-[#7A4E0E]">Khảo Sát Tận Nhà Miễn Phí</div>
                <div className="text-stone-700">
                  Kỹ thuật viên Tuyến Hoa mang mẫu vải rèm, đệm và chiếu trực tiếp đến nhà khảo sát, đo đạc miễn phí.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#DFCEAF] flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-600 text-xs sm:text-sm font-semibold">
          <div>
            &copy; {new Date().getFullYear()} Showroom Mành Rèm - Chăn Ga Gối Đệm Tuyến Hoa · Chợ Cháy, Ứng Hòa, Hà Nội.
          </div>
          <div className="flex items-center gap-4 text-[#1C1917] font-bold">
            <span>Hotline: {STORE_INFO.hotlineDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>Giao &amp; Lắp Đặt Tận Nhà</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
