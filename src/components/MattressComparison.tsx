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
    brand: 'Vikosan',
    badge: 'Bán chạy nhất Chợ Cháy',
    coreMaterial: '100% Bông xơ polyester tinh khiết ép cách nhiệt công nghệ Hàn Quốc, không keo dán',
    firmnessScore: 'Phẳng vững chắc (9/10)',
    orthopedicRating: 'Tối ưu cho người già, người thoái hóa cột sống, trẻ em tuổi phát triển',
    breathability: 'Khá tốt, vỏ gấm Valize thoáng khí',
    warranty: '5 Năm chính hãng',
    durability: '8 - 10 năm không xẹp lún',
    priceRange: '1.350.000 đ – 3.150.000 đ',
    bestFor: 'Khách hàng tìm đệm bền bỉ, tiết kiệm chi phí, thích nằm đệm thẳng lưng không lún',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop',
  },
  {
    brand: 'Sông Hồng',
    badge: 'Thương hiệu quốc dân',
    coreMaterial: 'Bông tinh khiết kháng khuẩn dập lượn sóng + Lớp foam đàn hồi nâng đỡ đa vùng',
    firmnessScore: 'Vừa êm vừa phẳng (8/10)',
    orthopedicRating: 'Nâng đỡ 5 vùng cơ thể, giải phóng áp lực thắt lưng & bả vai',
    breathability: 'Rất thoáng mát, công nghệ dập sóng thoát ẩm vượt trội',
    warranty: '5 Năm chính hãng (tem SMS cào)',
    durability: '10 - 12 năm',
    priceRange: '2.380.000 đ – 5.450.000 đ',
    bestFor: 'Gia đình chuộng đệm có độ nảy êm nhẹ, an toàn tuyệt đối cho da nhạy cảm và trẻ sơ sinh',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
  },
  {
    brand: 'Everon',
    badge: 'Đẳng cấp Hàn Quốc',
    coreMaterial: 'Sợi bông xơ Wonwan Hàn Quốc tráng lớp Ceramic phát tia hồng ngoại hoặc than hoạt tính',
    firmnessScore: 'Đàn hồi vững chãi (8.5/10)',
    orthopedicRating: 'Thúc đẩy tuần hoàn máu khi ngủ, giảm tê bì chân tay',
    breathability: 'Tuyệt vời, khử mùi ẩm mốc mùa nồm nhờ than hoạt tính',
    warranty: '5 Năm chính hãng Everon',
    durability: '12 - 15 năm',
    priceRange: '3.390.000 đ – 4.950.000 đ',
    bestFor: 'Phòng tân hôn cưới hỏi, gia đình thích hàng thương hiệu Hàn Quốc cao cấp, bền đẹp',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?q=80&w=800&auto=format&fit=crop',
  },
  {
    brand: 'Kymdan',
    badge: 'Cao su 100% Thượng hạng',
    coreMaterial: '100% Mủ cao su thiên nhiên nguyên chất, cấu trúc bọt khí hở hàng triệu lỗ thông hơi',
    firmnessScore: 'Êm ái nâng đỡ sinh học (7.5/10)',
    orthopedicRating: 'Chuẩn y khoa quốc tế, duy trì 3 đường cong sinh lý cột sống tự nhiên',
    breathability: 'Mát rượi quanh năm, không bí lưng ngay cả giữa mùa hè',
    warranty: '15 Năm chính hãng (kèm sổ bảo hành seri)',
    durability: '25 - 30 năm sử dụng',
    priceRange: '15.600.000 đ – 34.200.000 đ',
    bestFor: 'Phân khúc cao cấp, biệt thự, người có tiền sử thoát vị đĩa đệm, giá trị sử dụng trọn đời',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
  },
];

interface MattressComparisonProps {
  onSelectBrand: (brand: string) => void;
}

export const MattressComparison: React.FC<MattressComparisonProps> = ({ onSelectBrand }) => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 md:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Cẩm Nang Tư Vấn Đệm Chuyên Sâu</span>
            <span className="text-stone-300">·</span>
            <span className="text-stone-500 font-normal">Cửa Hàng Tuyến Hoa Chợ Cháy</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mt-1">
            So Sánh 4 Thương Hiệu Đệm Lớn: Vikosan · Sông Hồng · Everon · Kymdan
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-3xl">
            Bảng tra cứu đặc tính kỹ thuật, độ êm/cứng, thời hạn bảo hành và tầm giá thực tế để giúp quý khách lựa chọn chiếc đệm phù hợp nhất với thể trạng và ngân sách gia đình.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-800" />
            <span>Tư vấn đệm theo số đo: {STORE_INFO.hotlineDisplay}</span>
          </a>
        </div>
      </div>

      {/* Comparison Cards Grid (Desktop & Tablet) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
