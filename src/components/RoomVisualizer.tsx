import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    id: 'living-room',
    name: 'Phòng Khách Hiện Đại',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    recommendedCurtain: 'rem-vai-2-lop',
    description: 'Cửa kính lớn đón nắng hướng Đông/Nam, cần sự mềm mại và cản sáng cách nhiệt tối đa.',
  },
  {
    id: 'bedroom',
    name: 'Phòng Ngủ Master',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop',
    recommendedCurtain: 'rem-cau-vong',
    description: 'Không gian yên tĩnh, yêu cầu cản sáng Blackout 100% để giấc ngủ sâu suốt đêm.',
  },
  {
    id: 'balcony-patio',
    name: 'Cửa Ban Công & Vách Ngăn',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    recommendedCurtain: 'rem-to-ong',
    description: 'Khu vực nhiều gió và muỗi, cần giữ nhiệt điều hòa phòng khách ngăn côn trùng 100%.',
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
    name: 'Rèm Vải 2 Lớp (Gấm Nhật + Voan)',
    priceTag: '890.000 đ/m ngang',
    features: ['Cản sáng 100%', 'Lớp voan lọc sáng tinh tế', 'Chống thất thoát nhiệt'],
    colorHex: '#3E342B',
    textureLabel: 'Gấm thô dệt 3 lớp sóng rủ',
  },
  {
    id: 'rem-cau-vong',
    name: 'Rèm Cầu Vồng Hàn Quốc Modero',
    priceTag: '620.000 đ/m²',
    features: ['Điều chỉnh sáng 180°', '2 lớp vải so le hiện đại', 'Gọn gàng không chiếm chỗ'],
    colorHex: '#64748B',
    textureLabel: 'Dải cản sáng xen kẽ lưới voan',
  },
  {
    id: 'rem-sao-go',
    name: 'Rèm Sáo Gỗ Basswood Bắc Mỹ',
    priceTag: '650.000 đ/m²',
    features: ['100% Gỗ tự nhiên', 'Sơn UV chống cong vênh', 'Sang trọng đẳng cấp'],
    colorHex: '#78350F',
    textureLabel: 'Bản lá gỗ 50mm xoay lật',
  },
  {
    id: 'rem-to-ong',
    name: 'Rèm Tổ Ong & Lưới Muỗi 2 Trong 1',
    priceTag: '1.280.000 đ/m²',
    features: ['Cản nhiệt điều hòa 100%', 'Ngăn muỗi và côn trùng', 'Hệ xích không ray'],
    colorHex: '#D97706',
    textureLabel: 'Vải tổ ong tráng bạc + lưới inox',
  },
];

export const RoomVisualizer: React.FC = () => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [selectedCurtainIndex, setSelectedCurtainIndex] = useState(0);
  const [curtainCoverage, setCurtainCoverage] = useState(70); // 0% (fully open) to 100% (fully closed)
  const [isNightMode, setIsNightMode] = useState(false);

  const activeRoom = ROOM_SCENES[selectedRoomIndex];
  const activeCurtain = CURTAIN_STYLES[selectedCurtainIndex];

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 md:p-10 space-y-8">
      {/* Visualizer Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Trải Nghiệm Thử Rèm Thực Tế Ảo</span>
            <span className="text-stone-300">·</span>
            <span className="text-stone-500 font-normal">Mô phỏng ánh sáng &amp; không gian phòng</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mt-1">
            Xem Trước Mẫu Rèm Trong Không Gian Nhà Bạn
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Kéo thanh trượt để thử độ cản sáng, thay đổi loại phòng và loại rèm để chọn mẫu ưng ý nhất trước khi thợ Tuyến Hoa đến đo đạc.
          </p>
        </div>

        {/* Ambient Mode Toggle */}
        <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-xl self-start md:self-center">
          <button
            type="button"
            onClick={() => setIsNightMode(false)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !isNightMode ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-600" />
            <span>Ban Ngày</span>
          </button>
          <button
            type="button"
            onClick={() => setIsNightMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isNightMode ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-sky-400" />
            <span>Ban Đêm</span>
          </button>
        </div>
      </div>

      {/* Main Visual Stage and Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visual Stage (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Room Display Box */}
          <div className="relative w-full h-[340px] md:h-[440px] rounded-2xl overflow-hidden border border-stone-300 shadow-inner group">
            {/* Background Room Photo with Day/Night tone */}
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
                isNightMode
                  ? 'bg-indigo-950/40 mix-blend-multiply'
                  : 'bg-amber-100/10'
              }`}
            />

            {/* Simulated Animated Curtain Layer */}
            <div
              className="absolute inset-y-0 right-0 overflow-hidden shadow-2xl transition-all duration-300 ease-out flex"
              style={{
                width: `${curtainCoverage}%`,
              }}
            >
              {/* Outer Left Fabric Drape Edge */}
              <div
                className="w-full h-full relative border-l-2 border-white/40 flex flex-col justify-between"
                style={{
                  backgroundColor: activeCurtain.colorHex,
                  opacity: 0.94,
                }}
              >
                {/* Simulated vertical wave folds / pleated texture */}
                <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.4)_20px,rgba(0,0,0,0.4)_40px)]" />
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_10px,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.15)_20px)]" />

                {/* Top valence header bar */}
                <div className="relative z-10 h-7 bg-stone-900/80 backdrop-blur-xs flex items-center justify-between px-3 text-[10px] text-white">
                  <span className="font-semibold uppercase tracking-wider">{activeCurtain.name}</span>
                  <span className="font-mono text-amber-300">{curtainCoverage}% Kéo Phủ</span>
                </div>

                {/* Inner Sheer Voile (for 2-layer curtain) */}
                {activeCurtain.id === 'rem-vai-2-lop' && (
                  <div className="relative flex-1 bg-white/20 backdrop-blur-[1px] border-y border-white/20 p-4 flex items-center justify-center">
                    <span className="text-[11px] text-white/90 bg-black/40 px-2 py-1 rounded backdrop-blur-xs font-medium">
                      Lớp Voan Trắng Đón Ánh Sáng Tự Nhiên
                    </span>
                  </div>
                )}

                {/* Korean Rainbow Blind slats preview */}
                {activeCurtain.id === 'rem-cau-vong' && (
                  <div className="relative flex-1 p-3 flex flex-col justify-around">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                      <div
                        key={idx}
                        className="h-3 bg-white/40 rounded-sm shadow-inner border-y border-stone-800/30"
                      />
                    ))}
                  </div>
                )}

                {/* Honeycomb screen preview */}
                {activeCurtain.id === 'rem-to-ong' && (
                  <div className="relative flex-1 p-3 flex flex-col justify-around">
                    <div className="h-full border border-amber-300/40 rounded bg-amber-900/40 backdrop-blur-xs flex items-center justify-center text-center p-2">
                      <span className="text-[11px] text-amber-100 font-semibold leading-tight">
                        Cách Nhiệt Điều Hòa 100% · Ngăn Muỗi Côn Trùng
                      </span>
                    </div>
                  </div>
                )}

                {/* Wooden blinds preview */}
                {activeCurtain.id === 'rem-sao-go' && (
                  <div className="relative flex-1 p-3 space-y-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((idx) => (
                      <div
                        key={idx}
                        className="h-2.5 bg-amber-950/70 border-b border-amber-500/30 shadow-xs rounded-xs"
                      />
                    ))}
                  </div>
                )}

                {/* Bottom weighted bar */}
                <div className="relative z-10 h-6 bg-stone-900/90 flex items-center justify-center text-[10px] text-stone-300">
                  <span>Khung định hình chuẩn kỹ thuật Tuyến Hoa</span>
                </div>
              </div>
            </div>

            {/* Floating Room Label Tag */}
            <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeRoom.name}</span>
            </div>
          </div>

          {/* Interactive Pull Slider */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-800" />
                <span>Kéo Đóng / Mở Rèm:</span>
              </span>
              <span className="font-mono text-amber-900 font-bold">{curtainCoverage}% (Đang che chắn)</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={curtainCoverage}
              onChange={(e) => setCurtainCoverage(Number(e.target.value))}
              className="w-full accent-amber-800 h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-500">
              <span>Mở thoáng đón nắng (0%)</span>
              <span>Kéo đóng kín cản sáng 100%</span>
            </div>
          </div>
        </div>

        {/* Controls & Selection Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Step 1: Chọn Không Gian Phòng */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              1. Chọn Không Gian Lắp Đặt:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {ROOM_SCENES.map((rm, idx) => (
                <button
                  key={rm.id}
                  type="button"
                  onClick={() => setSelectedRoomIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                    selectedRoomIndex === idx
                      ? 'border-amber-800 bg-amber-50 text-amber-950 font-bold shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-white text-stone-700'
                  }`}
                >
                  <div className="truncate">{rm.name}</div>
                </button>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-1.5">{activeRoom.description}</p>
          </div>

          {/* Step 2: Chọn Mẫu Rèm Trải Nghiệm */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              2. Chọn Mẫu Mành Rèm Muốn Thử:
            </label>
            <div className="space-y-2.5">
              {CURTAIN_STYLES.map((c, idx) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCurtainIndex(idx)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedCurtainIndex === idx
                      ? 'border-amber-800 bg-amber-50/70 shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300 shrink-0"
                        style={{ backgroundColor: c.colorHex }}
                      />
                      <span>{c.name}</span>
                    </div>
                    <div className="text-xs text-stone-500">{c.textureLabel}</div>
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {c.features.map((f, i) => (
                        <span key={i} className="text-[10px] text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right shrink-0 pl-2">
                    <div className="text-xs font-bold font-mono text-amber-900">{c.priceTag}</div>
                    <span className="text-[10px] text-stone-400">Trọn gói lắp đặt</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Box */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
            <div className="text-xs font-bold text-stone-900">
              Bạn ưng ý mẫu {activeCurtain.name}?
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tuyến Hoa nhận mang mẫu vải thực tế, bảng màu sắc và cây rèm mẫu đến tận nhà bạn tại khu vực Chợ Cháy và Ứng Hòa để ướm thử trực tiếp lên tường hoàn toàn miễn phí.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${STORE_INFO.hotline}`}
                className="flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Gọi Khảo Sát: {STORE_INFO.hotlineDisplay}</span>
              </a>
              <a
                href="#du-toan-rem"
                className="py-2.5 px-4 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Tính Báo Giá Chi Tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
