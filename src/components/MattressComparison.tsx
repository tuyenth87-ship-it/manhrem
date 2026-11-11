import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Star, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface MattressBrandComparison {
  brand: string;
  badge: string;
  coreMaterial: string;
  firmnessScore: string; // e.g. "Phẳng vững chãi (8.5/10)"
  orthopedicRating: string; // e.g. "Rất tốt cho người đau lưng"
  breathability: string;
  warranty: string;
  durability: string;
  priceRange: string;
  bestFor: string;
  image: string;
}

const MATTRESS_COMPARISONS: MattressBrandComparison[] = [
  {
    brand: 'ELAN (Since 1990)',
    badge: 'Mới cập nhật · Giảm 30%',
    coreMaterial: 'Lò xo túi độc lập ELAN VIP III Pillow Top 30cm · Lò xo túi ELANNOVA & VIMATT 1 Mặt · Nano Foam Massage & Bông ép vỏ chần SEE01/SEE05',
    firmnessScore: 'Đa dạng: Êm 5 sao & Phẳng (9.5/10)',
    orthopedicRating: 'Phân vùng nâng đỡ 5 điểm cơ thể, núm gai massage huyệt đạo chống đau mỏi thắt lưng',
    breathability: 'Vải gấm dệt kim Jacquard kháng khuẩn & thành thổ cẩm bo viền gân thoáng khí 4 mùa',
    warranty: '5 – 10 Năm chính hãng ELAN',
    durability: '15 - 20 năm sử dụng',
    priceRange: '1.450.000 đ – 7.850.000 đ',
    bestFor: 'Phòng ngủ Master, phòng cưới sang trọng (ELAN VIP III / ELANNOVA) & người đau lưng thích nằm phẳng êm (Nano Foam / SEE Vỏ Chần)',
    image: '/assets/aistudio/IMG_9328_elan_vip_iii_phong_ngu_hd.jpg',
  },
  {
    brand: 'Vikosan',
    badge: 'Bán chạy nhất Chợ Cháy',
    coreMaterial: 'Lò xo túi độc lập Standard 3 Sao · 5 Sao · VIP D\'luxe 30cm & Bông xơ polyester ép cách nhiệt Hàn Quốc',
    firmnessScore: 'Phẳng vững chắc (9/10)',
    orthopedicRating: 'Tối ưu cho người già, người thoái hóa cột sống, trẻ em tuổi phát triển',
    breathability: 'Khá tốt, vỏ gấm Valize & gấm dệt kim thoáng khí',
    warranty: '5 – 7 Năm chính hãng',
    durability: '10 - 15 năm không xẹp lún',
    priceRange: '1.350.000 đ – 8.990.000 đ',
    bestFor: 'Khách hàng tìm đệm lò xo túi cao cấp hoặc đệm bông ép bền bỉ, tiết kiệm chi phí',
    image: '/assets/aistudio/DLX_VK_01_bang_gia_dem_lo_xo_vikosan_hd.jpg',
  },
  {
    brand: 'Sông Hồng',
    badge: 'Thương hiệu quốc dân',
    coreMaterial: 'Bông tinh khiết kháng khuẩn dập lượn sóng + Lớp Memory Foam đàn hồi nâng đỡ đa vùng (Back Essential Gen 4)',
    firmnessScore: 'Vừa êm vừa phẳng (8.5/10)',
    orthopedicRating: 'Nâng đỡ 5 vùng cơ thể, giải phóng áp lực thắt lưng & bả vai',
    breathability: 'Rất thoáng mát, công nghệ dập sóng thoát ẩm vượt trội',
    warranty: '5 Năm chính hãng (tem SMS cào)',
    durability: '10 - 12 năm',
    priceRange: '2.380.000 đ – 8.850.000 đ',
    bestFor: 'Gia đình chuộng đệm có độ nảy êm nhẹ, an toàn tuyệt đối cho da nhạy cảm và trẻ sơ sinh',
    image: '/assets/aistudio/dem_song_hong_back_essential_1.png',
  },
  {
    brand: 'Everon & Everhome',
    badge: 'Đẳng cấp Hàn Quốc',
    coreMaterial: 'Cao su 100% thiên nhiên Everhome, Lò xo Gold 3 Viền & Bông Ceramic phát tia hồng ngoại Everon Artemis',
    firmnessScore: 'Đàn hồi vững chãi (8.5/10)',
    orthopedicRating: 'Thúc đẩy tuần hoàn máu khi ngủ, giảm tê bì chân tay, nâng đỡ cột sống chuẩn y khoa',
    breathability: 'Tuyệt vời, khử mùi ẩm mốc mùa nồm nhờ than hoạt tính & cấu trúc lỗ thoáng',
    warranty: '5 – 10 Năm chính hãng',
    durability: '12 - 20 năm',
    priceRange: '2.850.000 đ – 6.450.000 đ',
    bestFor: 'Phòng tân hôn cưới hỏi, gia đình thích hàng thương hiệu Hàn Quốc cao cấp, bền đẹp',
    image: '/assets/aistudio/DLX_EH_01_dem_lo_xo_everhome_typography_hd.jpg',
  },
];

interface MattressComparisonProps {
  onSelectBrand: (brand: string) => void;
}

export const MattressComparison: React.FC<MattressComparisonProps> = ({ onSelectBrand }) => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 md:p-10 space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 sm:pb-6 border-b border-stone-200 gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-900">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Cẩm Nang Tư Vấn Đệm Chuyên Sâu</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-stone-900 mt-1">
            So Sánh Thương Hiệu Đệm Lớn: ELAN (Since 1990) · Vikosan · Sông Hồng · Everon
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
            Bảng tra cứu đặc tính kỹ thuật, độ êm/cứng, thời hạn bảo hành và tầm giá thực tế để giúp quý khách lựa chọn chiếc đệm phù hợp nhất với thể trạng và ngân sách gia đình.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-800" />
            <span>Tư vấn đệm theo số đo: {STORE_INFO.hotlineDisplay}</span>
          </a>
        </div>
      </div>

      {/* Comparison Cards Grid (Desktop & Tablet & Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {MATTRESS_COMPARISONS.map((m, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-amber-800/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            {/* Top Image Preview */}
            <div className="relative h-44 overflow-hidden bg-stone-200">
              <img
                src={m.image}
                alt={m.brand}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                    {m.badge}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">
                    Đệm {m.brand}
                  </h3>
                </div>
              </div>
            </div>

            {/* Spec rows */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-xs">
              <div className="space-y-3">
                {/* Price */}
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">Khoảng giá tại Chợ Cháy:</span>
                  <span className="text-sm font-bold text-amber-950 font-mono tabular-nums">
                    {m.priceRange}
                  </span>
                </div>

                {/* Core Material */}
                <div>
                  <strong className="text-stone-800 font-semibold block mb-0.5">Chất liệu lõi đệm:</strong>
                  <p className="text-stone-600 leading-relaxed text-[11px]">{m.coreMaterial}</p>
                </div>

                {/* Firmness & Orthopedic */}
                <div className="space-y-1 pt-1 border-t border-stone-200/80">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Cảm giác nằm:</span>
                    <span className="font-semibold text-stone-800">{m.firmnessScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Bảo hành hãng:</span>
                    <span className="font-bold text-emerald-800">{m.warranty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Tuổi thọ:</span>
                    <span className="font-medium text-stone-700">{m.durability}</span>
                  </div>
                </div>

                {/* Best for */}
                <div className="pt-2 border-t border-stone-200/80">
                  <strong className="text-stone-800 font-semibold block mb-0.5">Khuyên dùng cho:</strong>
                  <p className="text-stone-600 leading-relaxed text-[11px]">{m.bestFor}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onSelectBrand(m.brand.toLowerCase())}
                  className="w-full py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors text-center"
                >
                  Xem Mẫu Đệm {m.brand} & Báo Giá
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tuyến Hoa Guarantee Banner */}
      <div className="p-6 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center justify-center md:justify-start gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Cam Kết Độc Quyền Tại Cửa Hàng Tuyến Hoa Chợ Cháy</span>
          </div>
          <h3 className="text-lg md:text-xl font-display font-bold">
            100% Đệm Nguyên Đai Nguyên Kiện · Đền Gấp 10 Lần Nếu Hàng Nhái
          </h3>
          <p className="text-xs text-stone-300 max-w-2xl">
            Tất cả đệm bán ra đều có phiếu bảo hành chính hãng, tem chống giả có mã cào SMS xác thực từ nhà sản xuất. Hỗ trợ giao đệm lên tận phòng ngủ, kê đệm vào giường cho khách hàng tại Ứng Hòa.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="px-5 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-all shadow-md whitespace-nowrap"
          >
            Gọi Đặt Đệm: {STORE_INFO.hotlineDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
