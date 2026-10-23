import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_INFO } from '../data/products';
import { CartItem } from '../types/store';
import {
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Ruler,
  ShoppingBag,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ShieldCheck,
  Award,
  SlidersHorizontal,
  Home,
} from 'lucide-react';

export interface FabricSample600k {
  id: string;
  code: string;
  title: string;
  category: 'am-tran' | 'phong-tho-co-dien' | 'voan-2-lop' | 'spa-phoi-mau';
  categoryLabel: string;
  image: string;
  badge: string;
  roomType: string;
  colorTone: string;
  installStyle: string;
  pricePerMeter: number;
  description: string;
  highlights: string[];
}

export const FABRIC_SAMPLES_600K: FabricSample600k[] = [
  {
    id: 'rv600-01-handover',
    code: 'TH-RV01',
    title: 'Anh Tuyến Nghiệm Thu Bàn Giao Rèm Vải Cản Nắng Ghi Xám Hiện Đại',
    category: 'am-tran',
    categoryLabel: 'Bàn Giao Thực Tế',
    image: '/assets/aistudio/IMG_5314_ae0205c4.PNG',
    badge: 'Phục Vụ Mọi Miền Tổ Quốc',
    roomType: 'Phòng khách & Phòng ngủ cửa sổ khung Inox',
    colorTone: 'Xám ghi (Ash Grey) sang trọng',
    installStyle: 'Thanh suốt hợp kim mạ vàng đồng + Khuyên Ore',
    pricePerMeter: 600000,
    description:
      'Chủ cửa hàng Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa trực tiếp lắp đặt và nghiệm thu bàn giao bộ rèm vải chống nắng màu ghi xám. Múi sóng tròn đều tăm tắp, kèm đai vén rèm chính hãng.',
    highlights: [
      'Trọn gói 600.000đ/m ngang cả thanh suốt & công lắp đặt',
      'Cản nắng 100%, chống tia UV bảo vệ nội thất',
      'Độ nhún tiêu chuẩn vàng 2.5m vải / 1m ngang cửa',
    ],
  },
  {
    id: 'rv600-02-altar-luxury',
    code: 'TH-RV02',
    title: 'Rèm Vải Gấm Ghi Trầm Không Gian Phòng Thờ Gia Tiên & Sập Gụ Chiếu Cói',
    category: 'phong-tho-co-dien',
    categoryLabel: 'Phòng Thờ & Sập Gụ',
    image: '/assets/aistudio/IMG_5312_c3f3e101.PNG',
    badge: 'Đẳng Cấp Được Khẳng Định',
    roomType: 'Phòng thờ gia tiên, nhà truyền thống sập gụ tủ chè',
    colorTone: 'Ghi trầm ánh bạc tôn nghiêm',
    installStyle: 'Thanh suốt hợp kim vân gỗ vàng đồng',
    pricePerMeter: 600000,
    description:
      'Thiết kế chuẩn mực cho không gian phòng thờ và sập gụ chiếu cói: Chất vải gấm dày dặn rủ sóng thẳng đứng, che nắng gắt chiếu vào án gian thờ mà vẫn giữ nét trang nghiêm ấm cúng.',
    highlights: [
      'Đồng giá 600.000đ/m ngang bao gồm cả công thi công lắp đặt',
      'Tông màu trầm mặc hài hòa với đồ gỗ gụ, gỗ hương',
      'Giữ nhiệt điều hòa và cản bụi bẩn tuyệt đối',
    ],
  },
  {
    id: 'rv600-03-villa-cream',
    code: 'TH-RV03',
    title: 'Hệ Rèm Vải 2 Lớp Kem Sữa (Cream Beige) Biệt Thự Kịch Trần Full Tường',
    category: 'voan-2-lop',
    categoryLabel: 'Rèm 2 Lớp Biệt Thự',
    image: '/assets/aistudio/IMG_5310_8f861c11.JPG',
    badge: 'Sang Trọng Chuẩn 5 Sao',
    roomType: 'Phòng khách biệt thự, căn hộ cao cấp, sảnh lớn',
    colorTone: 'Kem sữa (Cream Beige) + Voan trắng lụa',
    installStyle: 'Hộc rèm âm trần thạch cao kịch sàn',
    pricePerMeter: 600000,
    description:
      'Không gian phòng khách biệt thự bừng sáng ấm áp với hệ rèm vải màu kem sữa lắp âm trần full tường kết hợp lớp voan lụa mềm mại và đèn thả trần hiện đại.',
    highlights: [
      'Rèm vải 1 lớp cản nắng trọn gói 600.000đ/m ngang cả công lắp',
      'May định hình cao kịch trần 2m8 - 3m2 không nối vải',
      'Tôn vinh không gian nội thất hiện đại, rộng mở',
    ],
  },
  {
    id: 'rv600-04-voan-theu-go-gu',
    code: 'TH-RV04',
    title: 'Rèm Vải 2 Lớp Xanh Ghi Phối Voan Trắng Thêu Hoa Nghệ Thuật Phòng Khách Gỗ Gụ',
    category: 'voan-2-lop',
    categoryLabel: 'Rèm 2 Lớp Voan Thêu',
    image: '/assets/aistudio/IMG_5293_ff6844ca.JPG',
    badge: 'Voan Thêu Hoa Tinh Xảo',
    roomType: 'Phòng khách truyền thống kê bàn ghế gỗ tự nhiên',
    colorTone: 'Xanh ghi lịch lãm + Voan trắng thêu hoa mẫu đơn',
    installStyle: 'Lắp âm trần hoặc thanh ray đôi hợp kim nhôm',
    pricePerMeter: 600000,
    description:
      'Sự giao thoa tuyệt đẹp giữa nét truyền thống của bộ trường kỷ gỗ gụ và vẻ thanh tao của lớp voan trắng thêu hoa nghệ thuật, bên ngoài là lớp vải gấm cản nắng 100%.',
    highlights: [
      'Lớp vải cản nắng trọn gói 600.000đ/m ngang cả lắp đặt',
      'Voan thêu hoa nổi sắc nét, lấy sáng dịu nhẹ thơ mộng',
      'Đường may ly sóng đều đặn, bền đẹp trên 10 năm',
    ],
  },
  {
    id: 'rv600-05-gam-nau-dong-vien',
    code: 'TH-RV05',
    title: 'Rèm Vải Gấm Nâu Đồng Phối Viền Thổ Cẩm Lắp Hộc Âm Trần Đèn Hắt Ấm Cúng',
    category: 'phong-tho-co-dien',
    categoryLabel: 'Gấm Phối Viền Cổ Điển',
    image: '/assets/aistudio/IMG_5304_60468f41.JPG',
    badge: 'Ấm Cúng & Quý Phái',
    roomType: 'Phòng thờ, phòng khách, phòng ngủ ông bà',
    colorTone: 'Nâu đồng (Bronze Brown) phối viền thổ cẩm vàng',
    installStyle: 'Hộc thạch cao âm trần có đèn LED hắt sáng',
    pricePerMeter: 600000,
    description:
      'Chất vải gấm dệt vân nổi màu nâu đồng sang trọng kết hợp dải viền hoa văn cổ điển trên cổ rèm. Khi bật đèn hắt trần, bề mặt vải ánh lên sắc đồng ấm áp và quyền quý.',
    highlights: [
      'Đồng giá 600.000đ/m ngang hoàn thiện cả thanh ray & lắp đặt',
      'Chống bám bụi, không phai màu, giặt giũ dễ dàng',
      'Cực kỳ hợp với chiếu hoa, sập gỗ và ánh đèn vàng ấm',
    ],
  },
  {
    id: 'rv600-06-can-canh-nau-dong',
    code: 'TH-RV06',
    title: 'Cận Cảnh Sóng Rèm Gấm Nâu Đồng Phối Viền Kim Tuyến Sắc Nét Từng Đường Kim',
    category: 'phong-tho-co-dien',
    categoryLabel: 'Chi Tiết Sóng Rèm Gấm',
    image: '/assets/aistudio/IMG_5305_f2f0bb33.JPG',
    badge: 'May Đo Chuẩn Tỉ Lệ Vàng',
    roomType: 'Phòng khách, phòng thờ, phòng ngủ cao cấp',
    colorTone: 'Nâu đồng vân gấm + Viền dệt nổi',
    installStyle: 'Ray định hình âm trần thạch cao',
    pricePerMeter: 600000,
    description:
      'Góc chụp cận cảnh từ dưới lên cho thấy kỹ thuật may định hình đỉnh cao của thợ Tuyến Hoa: Các múi sóng rèm tròn đều tăm tắp, dải viền hoa văn nối liền mạch thẳng hàng.',
    highlights: [
      'Trọn gói 600.000đ/m ngang cả công lắp đặt tận nhà',
      'Vải gấm dệt 3 lớp dày dặn, cản sáng và cách âm tốt',
      'Bảo hành đường may và phụ kiện ray trượt 3 năm',
    ],
  },
  {
    id: 'rv600-07-cua-so-co-vang',
    code: 'TH-RV07',
    title: 'Rèm Vải Cửa Sổ 2 Cánh Màu Ghi Phối Cổ Vàng Đồng & Thanh Suốt Mạ Vàng',
    category: 'spa-phoi-mau',
    categoryLabel: 'Cửa Sổ Phối Cổ Vàng',
    image: '/assets/aistudio/IMG_5306_e08d9303.JPG',
    badge: 'Trọn Gói 600k/m Ngang',
    roomType: 'Cửa sổ phòng ngủ, phòng khách nhà mới xây',
    colorTone: 'Ghi sáng phối cổ vàng hoàng gia',
    installStyle: 'Thanh suốt hợp kim mạ vàng đồng chạm đầu rồng',
    pricePerMeter: 600000,
    description:
      'Mẫu rèm cửa sổ quốc dân được ưa chuộng nhất tại Ứng Hòa: Thiết kế phối cổ rèm màu vàng kim kèm dải viền thổ cẩm giúp khung cửa sổ trông cao ráo, bề thế và nổi bật.',
    highlights: [
      'Chỉ 600.000đ/m ngang đã gồm cả suốt mạ vàng & công lắp',
      'Kèm 2 đai vén rèm đính tem đỏ chính hãng Tuyến Hoa',
      'Che phủ kín mép cửa nhôm Xingfa, không lọt sáng',
    ],
  },
  {
    id: 'rv600-08-bedroom-2lop-open',
    code: 'TH-RV08',
    title: 'Rèm Vải 2 Lớp Phòng Ngủ Master (Vải Bố Ghi Xám + Voan Lụa Trắng Xuyên Sáng)',
    category: 'voan-2-lop',
    categoryLabel: 'Phòng Ngủ 2 Lớp',
    image: '/assets/aistudio/IMG_5282_af0ccdef.JPG',
    badge: 'Mẫu Phòng Ngủ Bán Chạy',
    roomType: 'Phòng ngủ master, phòng tân hôn, chung cư',
    colorTone: 'Ghi xám hiện đại + Trắng tinh khôi',
    installStyle: 'Lắp âm trần thạch cao 2 đường ray trượt êm',
    pricePerMeter: 600000,
    description:
      'Khi vén lớp vải chính sang hai bên, lớp voan trắng lụa bên trong giúp đón ánh sáng dịu nhẹ vào phòng ngủ mà vẫn giữ trọn sự riêng tư kín đáo cho gia chủ.',
    highlights: [
      'Lớp vải cản nắng trọn gói 600.000đ/m ngang cả công lắp',
      'Chống nóng mùa hè giảm 4-5 độ C cho phòng điều hòa',
      'Chất vải mềm mịn, không bám bụi, an toàn cho trẻ nhỏ',
    ],
  },
  {
    id: 'rv600-09-bedroom-2lop-angle',
    code: 'TH-RV09',
    title: 'Toàn Cảnh Hệ Rèm Vải 2 Lớp Lắp Âm Trần Phòng Ngủ Hiện Đại',
    category: 'voan-2-lop',
    categoryLabel: 'Phòng Ngủ Hiện Đại',
    image: '/assets/aistudio/IMG_5282__1__af0ccdef.JPG',
    badge: 'Thi Công Chuẩn Kỹ Thuật',
    roomType: 'Phòng ngủ gia đình, biệt thự nhà vườn',
    colorTone: 'Xám trung tính (Neutral Grey)',
    installStyle: 'Ray âm trần thạch cao giấu phụ kiện 100%',
    pricePerMeter: 600000,
    description:
      'Chiều dài rèm được thợ Tuyến Hoa đo đạc chuẩn xác cách mặt sàn gạch men đúng 1.5cm giúp rèm luôn sạch sẽ, rủ sóng thẳng tắp không bị chạm sàn hay nhăn nhúm.',
    highlights: [
      'Đơn giá 600.000đ/m ngang hoàn thiện cả công lắp đặt',
      'Miễn phí mang mẫu vải đến tận nhà tư vấn theo màu sơn tường',
      'Thi công lắp đặt nhanh gọn, sạch sẽ trong ngày',
    ],
  },
  {
    id: 'rv600-10-spa-two-tone',
    code: 'TH-RV10',
    title: 'Hệ Rèm Vải Phối 2 Màu Xanh Cổ Vịt & Ghi Sáng Cho Spa Dưỡng Sinh',
    category: 'spa-phoi-mau',
    categoryLabel: 'Rèm Spa & Phối 2 Màu',
    image: '/assets/aistudio/IMG_5290_021aafcc.JPG',
    badge: 'Thiết Kế Phối Màu Độc Đáo',
    roomType: 'Spa dưỡng sinh, Thẩm mỹ viện, Phòng khách trẻ trung',
    colorTone: 'Xanh cổ vịt (Teal Blue) phối Ghi sáng',
    installStyle: 'Lắp âm trần kịch sàn chia khoang nghệ thuật',
    pricePerMeter: 600000,
    description:
      'Phối hợp 2 tông màu xanh cổ vịt và ghi sáng trên cùng một hệ rèm tạo hiệu ứng thị giác sang trọng, thư thái, cực kỳ được các chủ Spa, Salon và gia đình trẻ yêu thích.',
    highlights: [
      'Đồng giá 600.000đ/m ngang cả công lắp đặt (không tính thêm phí phối màu)',
      'Tạo vách ngăn mềm mại, kín đáo và thẩm mỹ cao',
      'Ray trượt bi lăn chống ồn, kéo mở nhẹ nhàng bằng 1 tay',
    ],
  },
  {
    id: 'rv600-11-blackout-closed',
    code: 'TH-RV11',
    title: 'Rèm Vải Cản Sáng Tuyệt Đối 100% Lắp Âm Trần Khi Kéo Kín Toàn Bộ Cửa',
    category: 'am-tran',
    categoryLabel: 'Cản Nắng 100% Âm Trần',
    image: '/assets/aistudio/IMG_5280_3a33f457.JPG',
    badge: 'Chống Nắng 100% Blackout',
    roomType: 'Phòng ngủ hướng Tây, phòng chiếu phim gia đình',
    colorTone: 'Ghi đá (Stone Grey) hiện đại',
    installStyle: 'Hộc âm trần thạch cao che kín toàn bộ mảng tường',
    pricePerMeter: 600000,
    description:
      'Khi kéo đóng hoàn toàn, bộ rèm vải gấm dệt 3 lớp của Tuyến Hoa ngăn chặn 100% ánh nắng gay gắt ban trưa, biến phòng ngủ thành không gian dịu mát tuyệt đối để nghỉ ngơi.',
    highlights: [
      'Trọn gói 600.000đ/m ngang bao gồm cả thanh ray & công lắp',
      'Cản sáng 100%, giữ nhiệt lạnh điều hòa không thoát ra ngoài',
      'Múi sóng rèm dàn đều đẹp mắt ngay cả khi kéo kín cửa',
    ],
  },
  {
    id: 'rv600-12-pleats-closeup',
    code: 'TH-RV12',
    title: 'Cận Cảnh Múi Sóng Rèm Vải Định Hình Suôn Mượt Từ Trần Xuống Sàn',
    category: 'am-tran',
    categoryLabel: 'Chuẩn Múi Sóng Định Hình',
    image: '/assets/aistudio/IMG_5281_6e8b018d.JPG',
    badge: 'Độ Nhún 2.5m Vải / 1m Cửa',
    roomType: 'Mọi không gian phòng khách & phòng ngủ',
    colorTone: 'Ghi xám vân vải bố cao cấp',
    installStyle: 'May định hình ly sóng tiêu chuẩn xuất khẩu',
    pricePerMeter: 600000,
    description:
      'Nhờ sử dụng đủ định mức 2.5 mét vải cho mỗi mét ngang cửa kết hợp mếch cổ rèm cao cấp, từng lọn sóng rèm luôn giữ phom tròn trịa, thẳng tắp sau nhiều năm sử dụng.',
    highlights: [
      'Cam kết đủ độ nhún 2.5m vải – Giá trọn gói 600.000đ/m ngang',
      'Vải dày nặng tay, không nhăn nhàu sau khi giặt máy',
      'Là hơi phẳng phiu miễn phí khi lắp đặt bàn giao',
    ],
  },
  {
    id: 'rv600-13-window-recessed',
    code: 'TH-RV13',
    title: 'Rèm Vải 1 Lớp Màu Ghi Đậm Lắp Hộc Âm Trần Cho Cửa Sổ Lớn Nhôm Kính',
    category: 'am-tran',
    categoryLabel: 'Rèm Cửa Sổ Âm Trần',
    image: '/assets/aistudio/IMG_5291_d4e47963.JPG',
    badge: 'Gọn Gàng & Bền Đẹp',
    roomType: 'Cửa sổ lớn phòng ngủ, phòng làm việc',
    colorTone: 'Ghi đậm (Charcoal Grey) sạch sẽ',
    installStyle: 'Ray âm trần thạch cao lọt hộc rèm',
    pricePerMeter: 600000,
    description:
      'Giải pháp tối giản, bền bỉ và tiết kiệm cho các ô cửa sổ lớn khung nhôm kính: Rèm vải 1 lớp màu ghi đậm cản nắng 100%, dễ phối nội thất, giá trọn gói chỉ 600.000đ/m ngang.',
    highlights: [
      'Trọn gói 600.000đ/m ngang cả thanh ray & công thợ lắp đặt',
      'Che kín toàn bộ khung cửa nhôm kính lớn',
      'Độ bền trên 10 năm, bảo hành tận nhà chu đáo',
    ],
  },
];

interface FabricCurtainShowcase600kProps {
  onAddToCart: (item: CartItem) => void;
  onRequestMeasurement: (curtainType: string, note: string) => void;
  onShowToast?: (msg: string) => void;
}

export const FabricCurtainShowcase600k: React.FC<FabricCurtainShowcase600kProps> = ({
  onAddToCart,
  onRequestMeasurement,
  onShowToast,
}) => {
  const [selectedCat, setSelectedCat] = useState<'all' | FabricSample600k['category']>('all');
  const [doorWidth, setDoorWidth] = useState<number>(2.5);
  const [enhancedPhoto, setEnhancedPhoto] = useState<boolean>(true);
  const [lightboxItem, setLightboxItem] = useState<FabricSample600k | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSamples = useMemo(() => {
    if (selectedCat === 'all') return FABRIC_SAMPLES_600K;
    return FABRIC_SAMPLES_600K.filter((s) => s.category === selectedCat);
  }, [selectedCat]);

  const estimatedTotal = Math.round(Math.max(1, doorWidth) * 600000);

  const handleOrderSample = (sample: FabricSample600k) => {
    const item: CartItem = {
      productId: `rem-vai-600k-${sample.id}`,
      productName: `${sample.title} (Mã ${sample.code})`,
      variantId: 'tron-goi-600k',
      variantName: 'Trọn gói 600.000đ/m ngang (Cả công thi công lắp đặt)',
      size: `Ngang ${doorWidth}m × 600.000đ/m`,
      price: estimatedTotal,
      quantity: 1,
      category: 'rem-cua',
      customNote: `Đặt mẫu ${sample.code} - Đơn giá 600.000đ/m ngang cả công thi công lắp đặt (${doorWidth}m ngang)`,
    };
    onAddToCart(item);
  };

  const handleCopyPost = (sample: FabricSample600k) => {
    const content = `✨ CHĂN GA GỐI ĐỆM & MÀNH RÈM TUYẾN HOA ✨
🔥 MẪU MỚI BÀN GIAO: ${sample.title} (Mã: ${sample.code})
💰 ĐỒNG GIÁ TRỌN GÓI: 600.000đ / mét ngang (ĐÃ BAO GỒM CẢ THANH TREO & CÔNG THI CÔNG LẮP ĐẶT)
✅ Chất liệu: Vải gấm cản nắng 100%, cách nhiệt điều hòa, múi sóng chuẩn 2.5m vải.
✅ Không gian phù hợp: ${sample.roomType}
📍 Địa chỉ: Chợ Cháy - Trầm Lộng, Ứng Hòa, Hà Nội (Phục vụ anh chị em mọi miền Tổ quốc)
📞 Hotline / Zalo Anh Tuyến: ${STORE_INFO.hotlineDisplay}`;
    navigator.clipboard.writeText(content);
    setCopiedId(sample.id);
    if (onShowToast) {
      onShowToast(`Đã sao chép bài đăng mẫu ${sample.code}!`);
    }
    setTimeout(() => setCopiedId(null), 2500);
  };

  const currentIndex = useMemo(() => {
    if (!lightboxItem) return -1;
    return filteredSamples.findIndex((s) => s.id === lightboxItem.id);
  }, [lightboxItem, filteredSamples]);

  const handleNext = () => {
    if (currentIndex < 0) return;
    setLightboxItem(filteredSamples[(currentIndex + 1) % filteredSamples.length]);
  };

  const handlePrev = () => {
    if (currentIndex < 0) return;
    setLightboxItem(filteredSamples[(currentIndex - 1 + filteredSamples.length) % filteredSamples.length]);
  };

  return (
    <section className="bg-white rounded-3xl border-2 border-amber-300/90 shadow-md overflow-hidden">
      {/* Top Promotional Header Banner */}
      <div className="bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-4 sm:p-6 md:p-8 border-b border-amber-500/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bộ Sưu Tập 13 Ảnh Thật Mới Nhất</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                Đã Chỉnh Sửa Sắc Nét &amp; Lên Sóng Website
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-white leading-snug">
              Chăn Ga Gối Đệm &amp; Mành Rèm Tuyến Hoa: Rèm Vải Cao Cấp{' '}
              <span className="text-amber-400 underline decoration-amber-400/60 underline-offset-4">
                600.000đ / m Ngang
              </span>{' '}
              (Cả Công Thi Công Lắp Đặt)
            </h2>

            <p className="text-sm sm:text-base text-stone-100 leading-relaxed">
              Trọn gói hoàn thiện gồm <strong className="text-white font-bold">Vải gấm cản nắng 100% (độ nhún 2.5m vải) + Thanh suốt hợp kim / Ray âm trần + Đai vén rèm + Miễn phí công thợ lắp đặt tận nơi</strong>. Anh Tuyến trực tiếp đo đạc và phục vụ anh chị em mọi miền Tổ quốc!
            </p>
          </div>

          {/* Quick Interactive Width Price Calculator Box */}
          <div className="bg-white/10 backdrop-blur-md border border-amber-400/40 rounded-2xl p-4 shrink-0 lg:w-80 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-amber-200 font-bold">
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-amber-400" />
                <span>Tính Nhanh Theo Cửa Nhà Bạn:</span>
              </span>
              <span className="font-mono font-extrabold text-amber-300">600.000đ / m</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-stone-100 shrink-0">Rộng cửa (m):</span>
              <div className="flex items-center gap-1 flex-1">
                <button
                  type="button"
                  onClick={() => setDoorWidth((w) => Math.max(1.0, parseFloat((w - 0.2).toFixed(1))))}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-bold flex items-center justify-center"
                >
                  -
                </button>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="20"
                  value={doorWidth}
                  onChange={(e) => setDoorWidth(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-stone-900 border border-amber-400/50 rounded-lg py-1.5 text-center text-sm font-mono font-extrabold text-amber-300 focus:outline-hidden"
                />
                <button
                  type="button"
                  onClick={() => setDoorWidth((w) => parseFloat((w + 0.2).toFixed(1)))}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-bold flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-200">Giá trọn gói cả lắp đặt:</span>
              <span className="text-base sm:text-lg font-mono tabular-nums font-extrabold text-amber-400">
                {estimatedTotal.toLocaleString('vi-VN')} đ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar & Image Enhancement Toggle */}
      <div className="p-3 sm:p-5 bg-amber-50/50 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: 'all', label: `Tất Cả (${FABRIC_SAMPLES_600K.length} Ảnh Mới)` },
            { id: 'am-tran', label: 'Rèm Cản Nắng & Âm Trần' },
            { id: 'phong-tho-co-dien', label: 'Phòng Thờ & Gấm Viền Cổ Điển' },
            { id: 'voan-2-lop', label: 'Rèm 2 Lớp Voan Thêu' },
            { id: 'spa-phoi-mau', label: 'Rèm Phối Cổ Vàng & Spa' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCat(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCat === tab.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-800 hover:bg-stone-100 border border-stone-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setEnhancedPhoto((prev) => !prev)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 border transition-all self-start sm:self-auto ${
            enhancedPhoto
              ? 'bg-amber-100 border-amber-300 text-amber-950'
              : 'bg-white border-stone-300 text-stone-800'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
          <span>{enhancedPhoto ? 'Chế độ Ảnh Chỉnh Sửa HDR: BẬT' : 'Chế độ Ảnh Gốc'}</span>
        </button>
      </div>

      {/* 13 Edited & Branded Cards Grid (2 Columns on Mobile, 3 on Desktop) */}
      <div className="p-2.5 sm:p-6 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
        {filteredSamples.map((sample) => (
          <div
            key={sample.id}
            className="group bg-white rounded-2xl border border-stone-200/90 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Edited Image Frame with Studio Branding Overlay */}
            <div
              onClick={() => setLightboxItem(sample)}
              className="relative aspect-[4/5] w-full bg-stone-900 overflow-hidden cursor-pointer"
            >
              <img
                src={sample.image}
                alt={sample.title}
                loading="lazy"
                className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ${
                  enhancedPhoto ? 'brightness-[1.04] contrast-[1.06] saturate-[1.08]' : ''
                }`}
              />

              {/* Subtle Editorial Vignette & Studio Frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30 pointer-events-none" />

              {/* Top Badges */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-400 text-stone-950 text-[10px] sm:text-xs font-extrabold shadow-xs truncate">
                  {sample.badge}
                </span>
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/75 text-amber-300 font-mono text-[10px] sm:text-xs font-bold backdrop-blur-xs border border-amber-400/30 shrink-0">
                  {sample.code}
                </span>
              </div>

              {/* Center Zoom Hint on Hover */}
              <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <span className="px-3.5 py-2 rounded-full bg-white/95 text-stone-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <ZoomIn className="w-4 h-4 text-amber-700" />
                  <span>Phóng to ảnh thực tế</span>
                </span>
              </div>

              {/* Bottom Branded Watermark Strip inside Photo */}
              <div className="absolute bottom-1.5 sm:bottom-2.5 left-1.5 sm:left-2.5 right-1.5 sm:right-2.5 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-stone-950/90 backdrop-blur-xs border border-amber-400/40 text-white flex items-center justify-between gap-1.5">
                <div className="truncate">
                  <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wide text-amber-300 flex items-center gap-1 truncate">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">Tuyến Hoa • {STORE_INFO.hotlineDisplay}</span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-white truncate mt-0.5">{sample.categoryLabel}</div>
                </div>
                <div className="text-right shrink-0 bg-amber-400 text-stone-950 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                  <div className="text-[11px] sm:text-xs font-extrabold font-mono leading-none">600k</div>
                  <div className="text-[9px] sm:text-[10px] font-bold leading-tight">/m ngang</div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-amber-900">
                  <Home className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{sample.roomType}</span>
                </div>

                <h3
                  onClick={() => setLightboxItem(sample)}
                  className="text-sm sm:text-base font-display font-extrabold text-stone-950 group-hover:text-amber-900 transition-colors cursor-pointer line-clamp-2 leading-snug"
                >
                  {sample.title}
                </h3>

                <p className="hidden sm:block text-xs sm:text-sm text-stone-700 line-clamp-2 leading-relaxed">
                  {sample.description}
                </p>

                <ul className="hidden sm:block space-y-1 pt-1">
                  {sample.highlights.map((h, i) => (
                    <li key={i} className="text-xs font-medium text-stone-800 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Calculation & Action Buttons */}
              <div className="pt-2 sm:pt-3 border-t border-stone-100 space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between bg-amber-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-amber-200">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-stone-600 block">Trọn gói cả lắp:</span>
                    <span className="text-xs sm:text-sm font-extrabold font-mono tabular-nums text-amber-950">600.000đ/m</span>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-[11px] font-medium text-stone-600 block">Cửa {doorWidth}m:</span>
                    <span className="text-xs sm:text-sm font-extrabold font-mono tabular-nums text-emerald-800">
                      {estimatedTotal.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => handleOrderSample(sample)}
                    className="min-h-[38px] sm:min-h-[42px] px-2 sm:px-3 py-1.5 sm:py-2.5 bg-stone-900 hover:bg-stone-800 active:scale-95 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-xs whitespace-nowrap cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Đặt Mẫu</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onRequestMeasurement(
                        `${sample.title} (600.000đ/m ngang cả lắp đặt)`,
                        `Khách chọn mẫu ${sample.code} - Kích thước dự kiến ${doorWidth}m ngang (${estimatedTotal.toLocaleString('vi-VN')}đ trọn gói)`
                      )
                    }
                    className="min-h-[38px] sm:min-h-[42px] px-2 sm:px-3 py-1.5 sm:py-2.5 bg-amber-100 hover:bg-amber-200 active:scale-95 text-amber-950 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>Đo Tận Nhà</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyPost(sample)}
                  className="w-full py-1 text-[11px] font-bold text-stone-600 hover:text-stone-950 flex items-center justify-center gap-1 transition-colors truncate cursor-pointer"
                >
                  {copiedId === sample.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="text-emerald-700 font-bold truncate">Đã chép {sample.code}!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 shrink-0" />
                      <span className="truncate">Chép bài mẫu {sample.code}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Fullscreen Inspection */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Image */}
              <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[320px] sm:min-h-[460px] max-h-[60vh] lg:max-h-[88vh]">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className={`w-full h-full object-contain ${
                    enhancedPhoto ? 'brightness-[1.04] contrast-[1.06] saturate-[1.08]' : ''
                  }`}
                />

                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-xs border border-amber-400/40 rounded-xl px-3 py-2 text-white flex items-center justify-between">
                  <div className="text-xs font-bold text-amber-300">
                    CHĂN GA GỐI ĐỆM &amp; MÀNH RÈM TUYẾN HOA • {STORE_INFO.hotlineDisplay}
                  </div>
                  <div className="text-xs font-mono font-extrabold bg-amber-400 text-stone-950 px-2 py-0.5 rounded">
                    600.000đ/m ngang cả lắp
                  </div>
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-5 p-5 sm:p-6 bg-white flex flex-col justify-between overflow-y-auto space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-mono text-xs font-bold">
                      Mã mẫu: {lightboxItem.code}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLightboxItem(null)}
                      className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-stone-900">
                    {lightboxItem.title}
                  </h3>

                  <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                    <div className="text-xs text-amber-900 font-semibold">Giá niêm yết trọn gói:</div>
                    <div className="text-xl font-mono font-extrabold text-amber-900 mt-0.5">
                      600.000 đ / mét ngang
                    </div>
                    <div className="text-[11px] text-emerald-800 font-semibold mt-0.5 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Đã bao gồm thanh treo, phụ kiện &amp; công thợ thi công lắp đặt</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {lightboxItem.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <div>
                      <strong>• Không gian:</strong> {lightboxItem.roomType}
                    </div>
                    <div>
                      <strong>• Tông màu:</strong> {lightboxItem.colorTone}
                    </div>
                    <div>
                      <strong>• Quy cách lắp:</strong> {lightboxItem.installStyle}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => {
                      handleOrderSample(lightboxItem);
                      setLightboxItem(null);
                    }}
                    className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span>Đặt Mua Mẫu {lightboxItem.code} (600.000đ/m ngang)</span>
                  </button>

                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Gọi Anh Tuyến Mang Mẫu Tận Nhà: {STORE_INFO.hotlineDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
