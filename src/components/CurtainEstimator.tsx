import React, { useState } from 'react';
import { Calculator, CheckCircle2, PhoneCall, Ruler, Sparkles, Plus, Minus } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { CartItem } from '../types/store';

interface CurtainEstimatorProps {
  onAddToCart: (item: CartItem) => void;
  onRequestMeasurement: (curtainType: string, note: string) => void;
}

interface CurtainTypeOption {
  id: string;
  name: string;
  unit: 'm2' | 'mét ngang';
  categoryTitle: string;
  pricingTiers: {
    name: string;
    pricePerUnit: number;
    description: string;
  }[];
  included: string[];
}

const CURTAIN_OPTIONS: CurtainTypeOption[] = [
  {
    id: 'rem-vai-2-lop',
    name: 'Rèm Vải 2 Lớp (Gấm + Voan)',
    unit: 'mét ngang',
    categoryTitle: 'Rèm Vải Gia Đình',
    pricingTiers: [
      { name: 'Gấm thô cản sáng 85% + Voan trắng', pricePerUnit: 680000, description: 'Phù hợp phòng ngủ, căn hộ chung cư' },
      { name: 'Gấm Nhật cản sáng 100% + Voan xước', pricePerUnit: 890000, description: 'Dòng chuộng nhất, cách nhiệt điều hòa' },
      { name: 'Gấm nhung họa tiết hoàng gia 2 lớp', pricePerUnit: 1080000, description: 'Biệt thự, nhà phố sang trọng' },
    ],
    included: ['Độ chun 2.5m vải/1m cửa', 'Thanh hợp kim nhôm định hình êm', 'Núm vén rèm và dây buộc đồng bộ', 'Miễn phí công lắp tại Ứng Hòa'],
  },
  {
    id: 'rem-cau-vong',
    name: 'Rèm Cầu Vồng Hàn Quốc Modero',
    unit: 'm2',
    categoryTitle: 'Rèm Cầu Vồng',
    pricingTiers: [
      { name: 'Dòng Eco cản sáng 85% tiêu chuẩn', pricePerUnit: 480000, description: 'Cửa sổ phòng làm việc, phòng đọc' },
      { name: 'Dòng Modero cản sáng 95% cao cấp', pricePerUnit: 620000, description: 'Phòng ngủ không bị chói sáng' },
      { name: 'Dòng Blackout cản sáng tuyệt đối 100%', pricePerUnit: 780000, description: 'Chống nóng hướng Tây, phòng ngủ trẻ em' },
    ],
    included: ['Hộp máng nhôm sơn tĩnh điện cao cấp', 'Dây kéo dù chịu lực chống kẹt', 'Bát đỡ bắt tường hoặc trần', 'Bảo hành phụ kiện 2 năm'],
  },
  {
    id: 'rem-to-ong-luoi-muoi',
    name: 'Rèm Tổ Ong & Lưới Chống Muỗi 2 Trong 1',
    unit: 'm2',
    categoryTitle: 'Giải Pháp Thông Minh',
    pricingTiers: [
      { name: 'Hệ 1 cánh kéo ngang (Tổ ong hoặc lưới)', pricePerUnit: 1150000, description: 'Cửa sổ hoặc cửa đi hẹp' },
      { name: 'Hệ 2 cánh kép (1 bên tổ ong, 1 bên lưới)', pricePerUnit: 1280000, description: 'Vừa chống muỗi vừa cản nhiệt điều hòa' },
      { name: 'Hệ xích không ray sàn cao cấp chống gió', pricePerUnit: 1450000, description: 'Không vấp ngã, thẩm mỹ đỉnh cao' },
    ],
    included: ['Khung nhôm Xingfa sơn tĩnh điện bền đẹp', 'Vải tổ ong tráng bạc cách nhiệt 100%', 'Lưới sợi thủy tinh chống côn trùng', 'Miễn phí đo đạc & lắp đặt tại Ứng Hòa'],
  },
  {
    id: 'rem-tu-dong',
    name: 'Rèm Tự Động Thông Minh (Motor Remote & App)',
    unit: 'mét ngang',
    categoryTitle: 'Rèm Thông Minh 4.0',
    pricingTiers: [
      { name: 'Động cơ Tuya Wifi/Zigbee + Ray điện nhôm', pricePerUnit: 1450000, description: 'Điều khiển bằng smartphone, remote cầm tay hoặc giọng nói' },
      { name: 'Động cơ Dooya Châu Âu siêu êm <30dB', pricePerUnit: 1850000, description: 'Chịu tải 60kg, kéo nhẹ tự chạy, bảo hành 5 năm' },
      { name: 'Động cơ Pin Lithium không cần đi dây điện', pricePerUnit: 2200000, description: 'Tiện lợi cho nhà đã hoàn thiện chưa chừa ổ cắm điện' },
    ],
    included: ['Động cơ rèm thông minh chính hãng', 'Ray điện nhôm định hình dập rãnh chống ồn', 'Remote điều khiển từ xa đa kênh', 'Lắp đặt và cài đặt app tận nhà miễn phí'],
  },
  {
    id: 'rem-manh-hat',
    name: 'Mành Hạt Nhựa & Hạt Gỗ Kết Tranh Phong Thủy',
    unit: 'm2',
    categoryTitle: 'Mành Hạt Phong Thủy',
    pricingTiers: [
      { name: 'Mành hạt nhựa thường nhiều hình dáng (Bộ 1m×2m: 600k)', pricePerUnit: 300000, description: 'Hạt giọt lệ pha lê, hạt tròn, quả trám kim cương, hoa cúc' },
      { name: 'Mành hạt nhựa kết tranh nghệ thuật (Bộ 1.2m×2m: 1.3 triệu)', pricePerUnit: 540000, description: 'Tranh Đôi Chim Công, Tùng Hạc, Thuận Buồm, Hoa Sen' },
      { name: 'Mành hạt gỗ phong thủy phòng thờ (Giá từ 1.2 triệu)', pricePerUnit: 600000, description: 'Gỗ Bồ Đề, Gỗ Hương kết chữ Phúc - Lộc - Thọ, Đỉnh Hạc' },
    ],
    included: ['Hạt chuốt bóng tinh xảo, chống bạc màu', 'Dây cước bọc thép hoặc dây dù bện đôi siêu dai', 'Thanh suốt treo và móc định vị sẵn', 'Mang mẫu và thước Lỗ Ban đo tận nhà tại Ứng Hòa'],
  },
  {
    id: 'rem-sao-go',
    name: 'Rèm Sáo Gỗ Basswood Tự Nhiên',
    unit: 'm2',
    categoryTitle: 'Rèm Gỗ Tự Nhiên',
    pricingTiers: [
      { name: 'Gỗ Basswood bản lá 3.5cm', pricePerUnit: 590000, description: 'Thanh thoát, phù hợp cửa sổ vừa và nhỏ' },
      { name: 'Gỗ Basswood bản lá 5.0cm chuẩn đẹp', pricePerUnit: 650000, description: 'Bản lá rộng sang trọng, xoay lật 180°' },
      { name: 'Gỗ Bách Hương Đỏ thơm cao cấp bản 5.0cm', pricePerUnit: 790000, description: 'Hương thơm mộc, vân gỗ quý phái' },
    ],
    included: ['Hộp số cuốn trợ lực kéo nhẹ', 'Gỗ xử lý tẩm sấy chống cong vênh', 'Sơn phủ Nano UV chống tia cực tím', 'Phụ kiện đồng bộ theo bộ rèm'],
  },
  {
    id: 'manh-tre-ban-cong',
    name: 'Mành Tre Trúc Che Nắng Ban Công',
    unit: 'm2',
    categoryTitle: 'Mành Tre Trúc Ngoài Trời',
    pricingTiers: [
      { name: 'Nan trúc cật tự nhiên nguyên bản', pricePerUnit: 175000, description: 'Chắn nắng gió thông thoáng' },
      { name: 'Nan trúc cật sơn phủ 2 lớp PU bóng', pricePerUnit: 210000, description: 'Chống thấm dột nước mưa, bền 4-6 năm' },
      { name: 'Nan tre luồng vót bóng sơn cánh gián', pricePerUnit: 235000, description: 'Dày dặn, chịu gió bão ngoài trời' },
    ],
    included: ['Nan cật già chống mối mọt', 'Bộ ròng rọc chịu tải nặng', 'Dây kéo cuộn dù dẻo dai', 'Hỗ trợ lắp đặt trọn gói tại nhà'],
  },
];

export const CurtainEstimator: React.FC<CurtainEstimatorProps & { initialCurtainTypeId?: string }> = ({
  onAddToCart,
  onRequestMeasurement,
  initialCurtainTypeId,
}) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const [width, setWidth] = useState<number>(2.5);
  const [height, setHeight] = useState<number>(2.6);
  const [quantity, setQuantity] = useState<number>(1);

  React.useEffect(() => {
    if (initialCurtainTypeId) {
      const idx = CURTAIN_OPTIONS.findIndex((c) => c.id === initialCurtainTypeId);
      if (idx !== -1) {
        setSelectedTypeIndex(idx);
        setSelectedTierIndex(0);
      }
    }
  }, [initialCurtainTypeId]);
  const [windowNote, setWindowNote] = useState<string>('Cửa sổ phòng ngủ');
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  const currentType = CURTAIN_OPTIONS[selectedTypeIndex];
  const currentTier = currentType.pricingTiers[selectedTierIndex] || currentType.pricingTiers[0];

  const measurementAmount =
    currentType.unit === 'mét ngang'
      ? Math.max(0.8, width) * quantity
      : Math.max(0.5, width * height) * quantity;

  const totalCalculatedPrice = Math.round(measurementAmount * currentTier.pricePerUnit);

  const handleAddCustomToCart = () => {
    const item: CartItem = {
      productId: `custom-${currentType.id}`,
      productName: `Đặt may đo: ${currentType.name}`,
      variantId: `tier-${selectedTierIndex}`,
      variantName: currentTier.name,
      size: `${width}m (rộng) x ${height}m (cao) - ${currentType.unit === 'mét ngang' ? `${width}m ngang` : `${(width * height).toFixed(2)}m²`}`,
      price: Math.round(totalCalculatedPrice / quantity),
      quantity: quantity,
      category: 'rem-cua',
      customNote: `${windowNote} - Quy cách: ${currentType.unit} (${measurementAmount.toFixed(1)} ${currentType.unit})`,
    };
    onAddToCart(item);
    setIsAddedSuccess(true);
    setTimeout(() => setIsAddedSuccess(false), 2500);
  };

  const handleRequestSurvey = () => {
    const summary = `${currentType.name} (${currentTier.name}) - Kích thước: ${width}m x ${height}m (${quantity} bộ). Vị trí: ${windowNote}`;
    onRequestMeasurement(currentType.name, summary);
  };

  return (
    <div id="du-toan-rem" className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 sm:pb-6 border-b border-stone-200 gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>Công Cụ Dự Toán Rèm Tuyến Hoa</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-stone-900 mt-1">
            Bảng Tính Giá May Đo Rèm Theo Kích Thước Cửa
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Nhập kích thước cửa thực tế để nhận ngay báo giá công khai. Thợ Tuyến Hoa mang mẫu tận nhà đo đạc miễn phí tại Ứng Hòa.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${STORE_INFO.hotline}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-semibold transition-colors min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4 text-amber-800" />
            <span>Gọi Thợ Đo: {STORE_INFO.hotlineDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Step 1: Chọn loại rèm */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              1. Chọn Loại Mành Rèm Cần Lắp:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CURTAIN_OPTIONS.map((opt, idx) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedTypeIndex(idx);
                    setSelectedTierIndex(0);
                  }}
                  className={`p-3 text-left rounded-2xl border text-xs transition-all min-h-[56px] flex flex-col justify-between ${
                    selectedTypeIndex === idx
                      ? 'border-amber-800 bg-amber-50/80 text-amber-950 font-bold shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-stone-50/50'
                  }`}
                >
                  <div className="font-semibold leading-tight">{opt.name}</div>
                  <div className="text-[10px] text-stone-500 mt-1">
                    Đơn vị: <strong className="font-mono text-stone-900">{opt.unit}</strong>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Chọn phân khúc vải */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              2. Chọn Phân Khúc Vải &amp; Độ Cản Sáng:
            </label>
            <div className="space-y-2">
              {currentType.pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedTierIndex(idx)}
                  className={`p-3 sm:p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all min-h-[52px] ${
                    selectedTierIndex === idx
                      ? 'border-amber-800 bg-amber-50/60 shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="text-xs sm:text-sm font-semibold text-stone-900 flex items-center gap-2">
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTierIndex === idx ? 'border-amber-800 bg-amber-800' : 'border-stone-300'
                      }`}>
                        {selectedTierIndex === idx && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </span>
                      <span>{tier.name}</span>
                    </div>
                    <div className="text-[11px] text-stone-500 pl-5.5">{tier.description}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs sm:text-sm font-bold text-amber-900 font-mono tabular-nums">
                      {tier.pricePerUnit.toLocaleString('vi-VN')} đ
                    </div>
                    <div className="text-[10px] text-stone-500">/{currentType.unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Nhập kích thước với nút bấm cảm ứng +/- tiện dụng */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                3. Kích Thước Cửa Cần Làm (Mét):
              </label>
              <span className="text-[11px] text-stone-500">Chạm +/- để chỉnh nhanh</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Width input */}
              <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
                <span className="text-[11px] text-stone-500 block mb-1">Chiều Rộng cửa (m)</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setWidth((w) => Math.max(0.5, parseFloat((w - 0.1).toFixed(1))))}
                    className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 font-bold flex items-center justify-center active:bg-stone-300"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    max="20"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                    className="flex-1 bg-white px-2 py-1.5 rounded-lg border border-stone-300 text-center text-sm font-bold font-mono focus:outline-hidden focus:border-amber-700"
                  />
                  <button
                    type="button"
                    onClick={() => setWidth((w) => parseFloat((w + 0.1).toFixed(1)))}
                    className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 font-bold flex items-center justify-center active:bg-stone-300"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-stone-600 font-mono">m</span>
                </div>
              </div>

              {/* Height input */}
              <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
                <span className="text-[11px] text-stone-500 block mb-1">Chiều Cao cửa (m)</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setHeight((h) => Math.max(0.5, parseFloat((h - 0.1).toFixed(1))))}
                    className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 font-bold flex items-center justify-center active:bg-stone-300"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    max="10"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                    className="flex-1 bg-white px-2 py-1.5 rounded-lg border border-stone-300 text-center text-sm font-bold font-mono focus:outline-hidden focus:border-amber-700"
                  />
                  <button
                    type="button"
                    onClick={() => setHeight((h) => parseFloat((h + 0.1).toFixed(1)))}
                    className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 font-bold flex items-center justify-center active:bg-stone-300"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-stone-600 font-mono">m</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
                <span className="text-[11px] text-stone-500 block mb-1">Số lượng bộ cửa</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 font-bold flex items-center justify-center active:bg-stone-300"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="flex-1 bg-white px-2 py-1.5 rounded-lg border border-stone-300 text-center text-sm font-bold font-mono focus:outline-hidden focus:border-amber-700"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 font-bold flex items-center justify-center active:bg-stone-300"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-stone-600 font-mono">bộ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vị trí lắp đặt */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Ghi chú vị trí (VD: Cửa sổ tầng 2, Cửa ban công...):
            </label>
            <input
              type="text"
              value={windowNote}
              onChange={(e) => setWindowNote(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-stone-300 focus:outline-hidden focus:border-amber-700 min-h-[44px]"
            />
          </div>
        </div>

        {/* Right Summary Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-stone-50 to-stone-100/70 p-5 sm:p-6 rounded-3xl border border-stone-200 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Kết Quả Dự Toán
              </span>
              <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Giá trọn gói
              </span>
            </div>

            <div>
              <div className="text-xs text-stone-500">Mẫu rèm:</div>
              <div className="text-base font-bold text-stone-900">{currentType.name}</div>
              <div className="text-xs text-amber-900 font-medium">{currentTier.name}</div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs py-2 bg-white/90 p-2.5 rounded-xl border border-stone-200">
              <div>
                <span className="text-stone-500 block">Kích thước:</span>
                <span className="font-mono font-bold text-stone-800">
                  {width}m (rộng) x {height}m (cao)
                </span>
              </div>
              <div>
                <span className="text-stone-500 block">Quy cách:</span>
                <span className="font-mono font-bold text-stone-800">
                  {currentType.unit === 'mét ngang'
                    ? `${width}m ngang x ${quantity} bộ`
                    : `${(width * height).toFixed(2)} m² x ${quantity} bộ`}
                </span>
              </div>
            </div>

            {/* Total Price */}
            <div>
              <span className="text-xs text-stone-500 block">Tổng chi phí dự toán:</span>
              <div className="text-2xl sm:text-3xl font-display font-bold text-amber-950 font-mono tabular-nums">
                {totalCalculatedPrice.toLocaleString('vi-VN')} <span className="text-base font-sans font-normal text-stone-600">đ</span>
              </div>
              <div className="text-[11px] text-stone-500 mt-1">
                (Đã gồm: vải rèm, thanh ray hợp kim, phụ kiện và công may lắp tại Ứng Hòa)
              </div>
            </div>

            {/* Included Services */}
            <div className="pt-2 border-t border-stone-200/80 space-y-1 text-xs text-stone-600">
              {currentType.included.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            {/* Craftsman Guarantee Strip */}
            <div className="flex items-center gap-2.5 p-2.5 bg-amber-50/90 rounded-xl border border-amber-200/80">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-300 shrink-0">
                <img
                  src="/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg"
                  alt="Thợ Tuyến Hoa cam kết đo đạc tận nhà"
                  className="w-full h-full object-cover object-[50%_15%]"
                />
              </div>
              <div className="text-[11px] leading-tight">
                <div className="font-bold text-amber-950 flex items-center gap-1">
                  <span>Cam kết thợ Tuyến Hoa</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-stone-600">Đo chuẩn từng milimet, khảo sát mang mẫu tận nhà Ứng Hòa</div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={handleAddCustomToCart}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white rounded-2xl text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>{isAddedSuccess ? 'Đã thêm vào giỏ hàng!' : 'Thêm Bộ Rèm Này Vào Giỏ'}</span>
            </button>

            <button
              type="button"
              onClick={handleRequestSurvey}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-2xl text-xs sm:text-sm font-semibold transition-colors"
            >
              <Ruler className="w-4 h-4" />
              <span>Hẹn Thợ Mang Mẫu Đo Tận Nhà</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
