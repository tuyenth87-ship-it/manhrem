import React, { useState } from 'react';
import { Eye, Sun, Moon, Sparkles, Sliders, Check, ArrowRight, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface RoomScene {
  id: string;
  name: string;
  image: string;
  recommendedCurtain: string;
  description: string;
}

const ROOM_SCENES: RoomScene[] = [
  {
    id: 'living-room-unghoa',
    name: 'Phòng Khách Nhà Phố Ứng Hòa (Ảnh Thật)',
    image: '/assets/aistudio/1792619301814_1293093313519991016_1293093313519991016_7660cb9abb659911e5fe3cd71a7f60bb_2e6c2394.jpg',
    recommendedCurtain: 'rem-vai-2-lop',
    description: 'Ảnh thật công trình Tuyến Hoa bàn giao tại Chợ Cháy Ứng Hòa: Cửa chính lớn lắp rèm vải 2 lớp & rèm cầu vồng cầu thang.',
  },
  {
    id: 'bedroom-window-unghoa',
    name: 'Cửa Sổ Phòng Ngủ Ứng Hòa (Ảnh Thật)',
    image: '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg',
    recommendedCurtain: 'rem-cau-vong',
    description: 'Ảnh thật cửa sổ khung inox lắp rèm cầu vồng Hàn Quốc gọn gàng lọt lòng, điều chỉnh sáng linh hoạt.',
  },
  {
    id: 'hallway-view-unghoa',
    name: 'Toàn Cảnh Nhà 2 Tầng Ứng Hòa (Ảnh Thật)',
    image: '/assets/aistudio/1792619301743_1293093313519991016_1293093313519991016_c3b884b0135e24592fd618ad629e07fd_9004b446.jpg',
    recommendedCurtain: 'rem-vai-2-lop',
    description: 'Góc nhìn từ tầng 2 nhà phố tại Vân Đình: Đồng bộ hệ rèm vải ban công và rèm cầu vồng cầu thang.',
  },
  {
    id: 'balcony-patio',
    name: 'Ban Công & Vách Ngăn',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    recommendedCurtain: 'rem-to-ong',
    description: 'Nhiều gió và muỗi, giữ nhiệt điều hòa ngăn côn trùng 100%.',
  },
];

interface CurtainStyle {
  id: string;
  name: string;
  priceTag: string;
  features: string[];
  colorHex: string;
  textureLabel: string;
}

const CURTAIN_STYLES: CurtainStyle[] = [
  {
    id: 'rem-vai-2-lop',
    name: 'Rèm Vải 2 Lớp (Gấm + Voan)',
    priceTag: '890.000 đ/m',
    features: ['Cản sáng 100%', 'Lớp voan lọc sáng'],
    colorHex: '#3E342B',
    textureLabel: 'Gấm thô dệt 3 lớp',
  },
  {
    id: 'rem-cau-vong',
    name: 'Rèm Cầu Vồng Hàn Quốc',
    priceTag: '620.000 đ/m²',
    features: ['Điều chỉnh sáng 180°', '2 lớp so le'],
    colorHex: '#64748B',
    textureLabel: 'Dải cản sáng & voan lưới',
  },
  {
    id: 'rem-sao-go',
    name: 'Rèm Sáo Gỗ Basswood',
    priceTag: '650.000 đ/m²',
    features: ['100% Gỗ tự nhiên', 'Sơn UV chống vênh'],
    colorHex: '#78350F',
    textureLabel: 'Bản lá gỗ 50mm xoay lật',
  },
  {
    id: 'rem-to-ong',
    name: 'Rèm Tổ Ong & Lưới 2in1',
    priceTag: '1.280.000 đ/m²',
    features: ['Cản nhiệt điều hòa', 'Ngăn muỗi 100%'],
    colorHex: '#D97706',
    textureLabel: 'Vải tổ ong tráng bạc + lưới',
  },
];

export const RoomVisualizer: React.FC = () => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [selectedCurtainIndex, setSelectedCurtainIndex] = useState(0);
  const [curtainCoverage, setCurtainCoverage] = useState(70);
  const [isNightMode, setIsNightMode] = useState(false);

  const activeRoom = ROOM_SCENES[selectedRoomIndex];
  const activeCurtain = CURTAIN_STYLES[selectedCurtainIndex];

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 md:p-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-stone-200 gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Trải Nghiệm Thử Rèm Thực Tế</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-stone-900 mt-1">
            Xem Trước Mẫu Rèm Trong Không Gian Phòng
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Kéo thanh trượt để thử ánh sáng và độ cản nhiệt trực tiếp trên điện thoại.
          </p>
        </div>

        {/* Ambient Switch */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1.5 rounded-2xl self-start sm:self-center">
          <button
            type="button"
            onClick={() => setIsNightMode(false)}
            className={`min-h-[36px] flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              !isNightMode ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-600" />
            <span>Ngày</span>
          </button>
          <button
            type="button"
            onClick={() => setIsNightMode(true)}
            className={`min-h-[36px] flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              isNightMode ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-sky-400" />
            <span>Đêm</span>
          </button>
        </div>
      </div>

      {/* Main Visual Stage & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Visual Stage (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-300 shadow-inner group">
            {/* Background Room Photo */}
            <img
              src={activeRoom.image}
              alt={activeRoom.name}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isNightMode ? 'brightness-50 contrast-125' : 'brightness-100'
              }`}
            />

            {/* Window Light Scrim */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                isNightMode ? 'bg-indigo-950/40 mix-blend-multiply' : 'bg-amber-100/10'
              }`}
            />

            {/* Simulated Animated Curtain Layer */}
            <div
              className="absolute inset-y-0 right-0 overflow-hidden shadow-2xl transition-all duration-200 ease-out flex"
              style={{ width: `${curtainCoverage}%` }}
            >
              <div
                className="w-full h-full relative border-l-2 border-white/40 flex flex-col justify-between"
                style={{
                  backgroundColor: activeCurtain.colorHex,
                  opacity: 0.94,
                }}
              >
                {/* Pleats texture */}
                <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.4)_20px,rgba(0,0,0,0.4)_40px)]" />

                <div className="relative z-10 h-6 sm:h-7 bg-stone-900/80 backdrop-blur-xs flex items-center justify-between px-3 text-[10px] text-white">
                  <span className="font-semibold truncate max-w-[140px]">{activeCurtain.name}</span>
                  <span className="font-mono text-amber-300">{curtainCoverage}% Kéo</span>
                </div>

                {activeCurtain.id === 'rem-vai-2-lop' && (
                  <div className="relative flex-1 bg-white/20 backdrop-blur-[1px] border-y border-white/20 p-2 flex items-center justify-center text-center">
                    <span className="text-[10px] text-white/95 bg-black/40 px-2 py-0.5 rounded font-medium">
                      Lớp Voan Trắng Đón Sáng
                    </span>
                  </div>
                )}

                {activeCurtain.id === 'rem-cau-vong' && (
                  <div className="relative flex-1 p-2 flex flex-col justify-around">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <div key={idx} className="h-2.5 bg-white/40 rounded-sm shadow-inner" />
                    ))}
                  </div>
                )}

                {activeCurtain.id === 'rem-to-ong' && (
                  <div className="relative flex-1 p-2 flex items-center justify-center text-center">
                    <span className="text-[10px] text-amber-100 bg-amber-950/60 p-1.5 rounded font-semibold leading-tight">
                      Cản Nhiệt 100% · Lưới Ngăn Muỗi
                    </span>
                  </div>
                )}

                {activeCurtain.id === 'rem-sao-go' && (
                  <div className="relative flex-1 p-2 space-y-1.5">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                      <div key={idx} className="h-2 bg-amber-950/70 border-b border-amber-500/30 rounded-xs" />
                    ))}
                  </div>
                )}

                <div className="relative z-10 h-5 bg-stone-900/90 flex items-center justify-center text-[9px] text-stone-300">
                  <span>Khung kỹ thuật Tuyến Hoa</span>
                </div>
              </div>
            </div>

            {/* Room Tag */}
            <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeRoom.name}</span>
            </div>
          </div>

          {/* Touch Slider */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-800" />
                <span>Kéo Đóng / Mở Rèm:</span>
              </span>
              <span className="font-mono text-amber-900">{curtainCoverage}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={curtainCoverage}
              onChange={(e) => setCurtainCoverage(Number(e.target.value))}
              className="w-full accent-amber-800 h-3 bg-stone-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-500 font-medium">
              <span>Mở thoáng (0%)</span>
              <span>Đóng kín cản sáng 100%</span>
            </div>
          </div>
        </div>

        {/* Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Room picker */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              1. Chọn Không Gian:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {ROOM_SCENES.map((rm, idx) => (
                <button
                  key={rm.id}
                  type="button"
                  onClick={() => setSelectedRoomIndex(idx)}
                  className={`p-2.5 rounded-2xl border text-center text-xs transition-all min-h-[44px] flex items-center justify-center ${
                    selectedRoomIndex === idx
                      ? 'border-amber-800 bg-amber-50 text-amber-950 font-bold shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-white text-stone-700'
                  }`}
                >
                  <span className="truncate">{rm.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Curtain style picker */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              2. Chọn Mẫu Rèm Thử Ánh Sáng:
            </label>
            <div className="space-y-2">
              {CURTAIN_STYLES.map((c, idx) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCurtainIndex(idx)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between min-h-[52px] ${
                    selectedCurtainIndex === idx
                      ? 'border-amber-800 bg-amber-50/70 shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="text-xs sm:text-sm font-semibold text-stone-900 flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full border border-stone-300 shrink-0"
                        style={{ backgroundColor: c.colorHex }}
                      />
                      <span>{c.name}</span>
                    </div>
                    <div className="text-[11px] text-stone-500">{c.textureLabel}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold font-mono text-amber-900">{c.priceTag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Call Box */}
          <div className="bg-stone-50 p-4 sm:p-5 rounded-3xl border border-stone-200 space-y-3">
            <div className="text-xs font-bold text-stone-900">
              Bạn thích mẫu {activeCurtain.name}?
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tuyến Hoa mang mẫu vải và cây rèm mẫu đến tận nhà bạn tại Ứng Hòa để ướm thử lên tường hoàn toàn miễn phí.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="min-h-[44px] py-2.5 px-4 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Gọi Khảo Sát: {STORE_INFO.hotlineDisplay}</span>
              </a>
              <a
                href="#du-toan-rem"
                className="min-h-[44px] py-2.5 px-4 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Tính Báo Giá</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
