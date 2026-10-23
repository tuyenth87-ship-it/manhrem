export type MotorizedSystemCategory =
  | 'all'
  | 'drapery'
  | 'roller-zebra'
  | 'roman'
  | 'cellular-skylight'
  | 'motors';

export interface ShadeStoreInsight {
  id: string;
  englishTerm: string;
  vietnameseTitle: string;
  categoryBadge: string;
  summary: string;
  keyTakeaways: string[];
  tuyenHoaApplication: string;
  specHighlight: string;
}

export interface MotorizedVideoDemo {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  systemType: 'drapery-dual' | 'roller-solar' | 'zebra-combi' | 'roman-fold' | 'cellular-honeycomb' | 'touch-motion';
  durationLabel: string;
  motorModel: string;
  noiseLevelDb: number;
  powerSource: string;
  controlMethods: string[];
  posterImage: string;
  secondaryImage: string;
  videoUrl: string;
  description: string;
  technicalHighlights: string[];
  defaultOpenPercent: number;
  defaultSheerPercent: number;
}

export interface MotorizedCurtainProduct {
  id: string;
  code: string;
  name: string;
  shadeStoreEquivalent: string;
  category: Exclude<MotorizedSystemCategory, 'all'>;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  unit: string;
  motorBrand: string;
  powerType: 'Hardwired 220V' | 'Pin Sạc Lithium-Ion' | 'Tùy chọn 220V / Pin sạc';
  noiseDb: string;
  maxLoadKg: string;
  warranty: string;
  smartEcosystems: string[];
  image: string;
  secondaryImage: string;
  badge: string;
  summary: string;
  features: string[];
}

export interface SmartMotorOption {
  id: string;
  name: string;
  brand: string;
  origin: string;
  powerType: string;
  noiseDb: number;
  maxWidthMeters: number;
  maxLoadKg: number;
  baseMotorPrice: number;
  trackPricePerMeter: number;
  warrantyYears: number;
  features: string[];
  recommendedFor: string;
}

export const SHADE_STORE_ANALYSIS: ShadeStoreInsight[] = [
  {
    id: 'insight-custom-drapery',
    englishTerm: 'Motorized Custom Drapery (Ripple Fold & Tailored Pleat)',
    vietnameseTitle: '1. Hệ Rèm Vải Tự Động Định Hình (Ripple Fold) & Xếp Ly Âm Trần',
    categoryBadge: 'Phân Tích The Shade Store (Mỹ)',
    summary:
      'Trên theshadestore.com, dòng rèm vải tự động cao cấp nhất sử dụng ray hợp kim nhôm chạy dây curoa lõi thép bọc nhựa dẻo giúp múi rèm lượn sóng chữ S (Ripple Fold) đều tăm tắp và trượt hoàn toàn không tiếng ồn.',
    keyTakeaways: [
      'Thiết kế giấu kín động cơ sau lớp vải rèm chính hoặc âm trong hộc thạch cao (Recessed Ceiling Track).',
      'Hỗ trợ hệ ray đôi (Dual-Track): 1 động cơ kéo lớp vải gấm cản sáng 100% + 1 động cơ kéo lớp voan lụa xuyên sáng độc lập.',
      'Tích hợp cảm biến hành trình tự động dừng mềm (Soft-Start / Soft-Stop) cách điểm cuối 5cm để bảo vệ mấu ray.',
    ],
    tuyenHoaApplication:
      'Tuyến Hoa kết hợp vải gấm cản sáng 600.000đ/m ngang (hoặc rèm 2 lớp 850.000đ/m ngang) với hệ ray điện định hình âm trần chịu tải tới 60kg, mang chuẩn thẩm mỹ biệt thự Mỹ về tận nhà khách hàng Ứng Hòa - Hà Nội.',
    specHighlight: 'Độ ồn < 28dB • Chịu tải 50–80kg • Ray cong hoặc thẳng tới 8m',
  },
  {
    id: 'insight-wirefree-roller',
    englishTerm: 'Wire-Free Rechargeable Roller & Solar Shades',
    vietnameseTitle: '2. Động Cơ Ống Pin Sạc Lithium-Ion Không Dây (Wire-Free Tubular Motor)',
    categoryBadge: 'Công Nghệ Không Cần Đục Tường Đi Dây',
    summary:
      'Điểm đột phá lớn nhất được The Shade Store áp dụng cho nhà đã hoàn thiện là động cơ ống (Tubular Motor) tích hợp pin Lithium-Ion nằm gọn bên trong ống nhôm cuốn rèm.',
    keyTakeaways: [
      'Hoàn toàn không cần đi dây điện 220V hay đục phá tường thạch cao — lắp đặt nhanh trong 20 phút như rèm thường.',
      'Mỗi lần sạc đầy qua cổng từ tính/USB-C dùng liên tục từ 6 đến 12 tháng (tương đương 400–500 chu kỳ đóng mở).',
      'Tùy chọn tấm pin năng lượng mặt trời nhỏ gọn gắn sát kính cửa sổ để tự nạp điện vĩnh viễn.',
    ],
    tuyenHoaApplication:
      'Giải pháp số 1 tại Tuyến Hoa cho các gia đình ở Chợ Cháy, Vân Đình muốn nâng cấp rèm cầu vồng Hàn Quốc hoặc rèm cuốn chống nắng lên tự động mà chưa để sẵn ổ cắm điện trên cao.',
    specHighlight: 'Pin Lithium 2600mAh–3200mAh • Sạc 1–2 lần/năm • Lắp gọn trong ống Ф38mm',
  },
  {
    id: 'insight-roman-cellular',
    englishTerm: 'Motorized Roman Shades & Cellular Honeycomb Skylight',
    vietnameseTitle: '3. Rèm Roman Xếp Lớp & Rèm Tổ Ong Cách Nhiệt Giếng Trời Tự Động',
    categoryBadge: 'Kiểm Soát Nhiệt Độ & Ánh Sáng Thông Minh',
    summary:
      'The Shade Store thiết kế hệ trục cuốn dây nâng ẩn phía sau rèm Roman và hệ ray dẫn hướng cho rèm tổ ong (Cellular Shades), cho phép đóng mở các ô cửa sổ cao hoặc giếng trời chỉ bằng 1 chạm.',
    keyTakeaways: [
      'Cấu trúc rèm tổ ong (Honeycomb) tráng bạc kép giữ lớp đệm không khí cách nhiệt, giảm tới 40% thất thoát hơi lạnh điều hòa.',
      'Chế độ Top-Down / Bottom-Up: Hạ phần trên rèm để đón nắng tự nhiên trên cao mà vẫn che kín tầm nhìn ngang bảo vệ sự riêng tư.',
      'Đồng bộ hoàn hảo nhiều ô cửa sổ thông tầng cùng nâng lên/hạ xuống ở một cao độ chính xác tuyệt đối từng milimet.',
    ],
    tuyenHoaApplication:
      'Tuyến Hoa thi công trọn gói rèm tổ ong tự động cho giếng trời cầu thang, vách kính thông tầng biệt thự và rèm Roman tự động cho phòng ngủ master.',
    specHighlight: 'Cách nhiệt 99% • Đồng bộ đa cửa sổ sai số < 1mm • Chống tia UV',
  },
  {
    id: 'insight-smart-ecosystem',
    englishTerm: 'The Shade Store V2 Wireless Link & Smart Home Integration',
    vietnameseTitle: '4. Hệ Sinh Thái Điều Khiển Đa Kênh: Remote, App, Giọng Nói & Cảm Biến Nắng',
    categoryBadge: 'Trải Nghiệm Smart Home 4.0',
    summary:
      'Hệ thống điều khiển thông minh trên theshadestore.com phân tầng từ Remote cầm tay tối giản (1–15 kênh) đến trung tâm kết nối Wi-Fi/Zigbee/Matter điều khiển qua điện thoại và giọng nói.',
    keyTakeaways: [
      'Điều khiển chính xác phần trăm mở rèm (0% – 25% – 50% – 75% – 100%) trực tiếp trên màn hình điện thoại từ bất cứ đâu.',
      'Ra lệnh giọng nói tiếng Việt & tiếng Anh qua Apple HomeKit (Siri), Google Assistant, Amazon Alexa, Lumi, Aqara, Tuya.',
      'Tính năng Touch-Motion (Kéo nhẹ tay 5cm rèm tự động chạy hết hành trình) & Kéo tay nhẹ nhàng khi nhà mất điện.',
    ],
    tuyenHoaApplication:
      'Kỹ thuật viên Tuyến Hoa trực tiếp cài đặt App tiếng Việt trên điện thoại của gia chủ, thiết lập lịch hẹn giờ tự mở rèm lúc 6h30 sáng và tự đóng rèm chắn nắng hướng Tây lúc 13h00 chiều.',
    specHighlight: 'App Tiếng Việt • Kéo nhẹ tự chạy • Mất điện kéo tay bình thường',
  },
];

export const MOTORIZED_VIDEO_DEMOS: MotorizedVideoDemo[] = [
  {
    id: 'vid-ripple-fold-dual',
    code: 'VID-01',
    title: 'Video Thực Tế Hệ Rèm Vải 2 Lớp Tự Động Âm Trần (Motorized Ripple-Fold Dual Drapery)',
    subtitle: 'Chuẩn thiết kế The Shade Store: 1 lớp vải gấm cản sáng 100% + 1 lớp voan lụa trắng điều khiển độc lập',
    systemType: 'drapery-dual',
    durationLabel: '01:25 • 4K 60fps Interactive',
    motorModel: 'Somfy Glydea Ultra / Aqara Dual-Track',
    noiseLevelDb: 26,
    powerSource: 'Điện 220V Âm Trần / Pin Sạc Rời',
    controlMethods: ['Remote 6 Kênh', 'App Smartphone %', 'Kéo Nhẹ Tự Chạy', 'Giọng Nói Siri/Google'],
    posterImage: '/assets/aistudio/IMG_5310_8f861c11.JPG',
    secondaryImage: '/assets/aistudio/IMG_5282_af0ccdef.JPG',
    videoUrl: '/assets/videos/motorized_drapery_dual.mp4',
    description:
      'Trải nghiệm chuyển động trượt êm như lướt trên không khí của hệ rèm vải 2 lớp lắp trong hộc thạch cao âm trần. Gia chủ có thể mở riêng lớp rèm vải chính để đón ánh nắng dịu qua lớp voan trắng, hoặc đóng kín cả 2 lớp chỉ với 1 nút bấm trên giường ngủ.',
    technicalHighlights: [
      'Sóng rèm Ripple-Fold định hình giữ khoảng cách múi rèm đều 100% khi đóng và mở',
      'Khởi động mềm & dừng giảm tốc êm ái, độ ồn động cơ dưới 26dB (êm hơn tiếng lá rơi)',
      'Khi mất điện có thể kéo tay nhẹ nhàng không lo kẹt dây curoa',
    ],
    defaultOpenPercent: 25,
    defaultSheerPercent: 85,
  },
  {
    id: 'vid-roller-solar-wirefree',
    code: 'VID-02',
    title: 'Video Rèm Cuốn & Rèm Cầu Vồng Tự Động Động Cơ Ống Pin Sạc Không Dây',
    subtitle: 'Giải pháp The Shade Store Wire-Free: Không cần đi dây điện, sạc 1 lần dùng 8–10 tháng',
    systemType: 'zebra-combi',
    durationLabel: '01:10 • 4K 60fps Interactive',
    motorModel: 'Dooya Wire-Free Lithium 25mm',
    noiseLevelDb: 28,
    powerSource: 'Pin Sạc Lithium-Ion 3200mAh (Không dây)',
    controlMethods: ['Remote Đa Kênh', 'App Tuya / Smart Life', 'Hẹn Giờ Theo Nắng'],
    posterImage: '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg',
    secondaryImage: '/assets/aistudio/IMG_5053_4a4c9d67.JPG',
    videoUrl: '/assets/videos/motorized_zebra_wirefree.mp4',
    description:
      'Động cơ hình ống nằm gọn hoàn toàn bên trong trục cuốn nhôm của rèm cầu vồng Hàn Quốc hoặc rèm cuốn chống nắng. Cho phép chỉnh so le các dải vải cản sáng & dải lưới voan chính xác tới từng milimet để lấy sáng vừa đủ mà không cần đứng dậy kéo dây.',
    technicalHighlights: [
      'Lắp đặt trong 15 phút cho cửa sổ nhà đã hoàn thiện, không đục tường đi dây điện',
      'Đồng bộ 3–5 bộ rèm cửa sổ phòng khách cùng nâng lên một đường thẳng tắp',
      'An toàn tuyệt đối cho trẻ nhỏ vì loại bỏ hoàn toàn dây kéo hạt nhựa truyền thống',
    ],
    defaultOpenPercent: 40,
    defaultSheerPercent: 60,
  },
  {
    id: 'vid-roman-tailored',
    code: 'VID-03',
    title: 'Video Rèm Roman Xếp Lớp Tự Động (Motorized Tailored Roman Shades)',
    subtitle: 'Phong cách boutique Mỹ & Châu Âu: Xếp nếp phẳng ngang thanh lịch khi nâng rèm',
    systemType: 'roman-fold',
    durationLabel: '00:58 • 4K 60fps Interactive',
    motorModel: 'Aqara / Somfy Sonesse 30',
    noiseLevelDb: 27,
    powerSource: 'Pin Sạc Hoặc Nguồn 220V',
    controlMethods: ['Công Tắc Không Dây Gắn Tường', 'Remote', 'App Điện Thoại'],
    posterImage: '/assets/aistudio/IMG_5293_ff6844ca.JPG',
    secondaryImage: '/assets/aistudio/IMG_5304_60468f41.JPG',
    videoUrl: '/assets/videos/motorized_roman_shade.mp4',
    description:
      'Lấy cảm hứng từ dòng Flat & Hobbled Roman Shades danh tiếng của The Shade Store, hệ rèm Roman tự động của Tuyến Hoa dùng trục cuốn dây ẩn phía sau lớp vải gấm linen. Khi bấm mở, từng lớp vải gấp nếp chồng lên nhau đều đặn và gọn gàng trong khung cửa.',
    technicalHighlights: [
      'May 2 lớp vải gấm bố cản sáng tuyệt đối 100%, giữ phom nếp gấp sắc nét',
      'Toàn bộ dây nâng và động cơ được giấu kín trong hộp kỹ thuật nhôm sơn tĩnh điện',
      'Lý tưởng cho cửa sổ phòng ngủ, phòng đọc sách, bàn trà và ô cửa sổ vòm biệt thự',
    ],
    defaultOpenPercent: 35,
    defaultSheerPercent: 0,
  },
  {
    id: 'vid-cellular-skylight',
    code: 'VID-04',
    title: 'Video Rèm Tổ Ong Cách Nhiệt & Giếng Trời Tự Động (Cellular Honeycomb Shades)',
    subtitle: 'Ngăn 99% tia UV & hơi nóng mái kính, tiết kiệm 40% điện năng điều hòa mùa hè',
    systemType: 'cellular-honeycomb',
    durationLabel: '01:05 • 4K 60fps Interactive',
    motorModel: 'Dooya Skylight Dual-Torque 40N',
    noiseLevelDb: 29,
    powerSource: 'Điện 220V / Năng Lượng Mặt Trời',
    controlMethods: ['Cảm Biến Nhiệt Độ & Nắng', 'Remote Từ Xa', 'App Smart Home'],
    posterImage: '/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg',
    secondaryImage: '/assets/aistudio/1792658171183_1293093313519991016_1293093313519991016_10108ab564c8fb6ade925f6a8e609889_1971346a.jpg',
    videoUrl: '/assets/videos/motorized_cellular_skylight.mp4',
    description:
      'Giải pháp chuyên dụng cho các ô kính trên cao, giếng trời cầu thang và vách ngăn lạnh phòng khách. Cấu trúc ống lục giác tổ ong tráng bạc kép bên trong tạo rào cản nhiệt hoàn hảo, điều khiển đóng mở từ tầng 1 mà không cần leo trèo.',
    technicalHighlights: [
      'Lõi tráng bạc kép cách nhiệt 100%, hạ nhiệt độ dưới giếng trời từ 6–8 độ C',
      'Khung nhôm dẫn hướng 2 bên giữ rèm căng phẳng cả khi lắp nghiêng hoặc lắp ngang trần',
      'Tích hợp tự động đóng rèm khi nhiệt độ phòng vượt quá 32 độ C vào buổi trưa',
    ],
    defaultOpenPercent: 50,
    defaultSheerPercent: 0,
  },
];

export const MOTORIZED_CURTAIN_PRODUCTS: MotorizedCurtainProduct[] = [
  {
    id: 'mc-ripple-fold-600k-smart',
    code: 'TH-SMART-01',
    name: 'Hệ Rèm Vải Tự Động Định Hình Âm Trần (Vải 600k/m + Ray Điện Tĩnh Âm)',
    shadeStoreEquivalent: 'The Shade Store Ripple Fold Motorized Drapery',
    category: 'drapery',
    categoryLabel: 'Rèm Vải Kéo Ngang Tự Động',
    price: 2150000,
    originalPrice: 2650000,
    unit: 'Combo Động Cơ + Vải 600k/m ngang',
    motorBrand: 'Tuya Smart Wi-Fi / Dooya',
    powerType: 'Tùy chọn 220V / Pin sạc',
    noiseDb: '27 dB (Siêu êm)',
    maxLoadKg: '50 kg (Cửa rộng tới 6m)',
    warranty: 'Bảo hành động cơ 3–5 năm tận nhà',
    smartEcosystems: ['Remote 6 kênh', 'App Tuya / Smart Life', 'Google Home / Siri', 'Kéo nhẹ tự chạy'],
    image: '/assets/aistudio/IMG_5310_8f861c11.JPG',
    secondaryImage: '/assets/aistudio/IMG_5314_ae0205c4.PNG',
    badge: 'Bán Chạy Số 1 - Chuẩn Biệt Thự',
    summary:
      'Sự kết hợp hoàn hảo giữa bộ sưu tập rèm vải cản nắng 100% giá 600.000đ/m ngang của Tuyến Hoa và hệ ray điện hợp kim nhôm chạy dây curoa tĩnh âm chuẩn The Shade Store.',
    features: [
      'Điều khiển từ xa qua Remote, điện thoại hoặc giọng nói tiếng Việt',
      'Chạm kéo nhẹ tay 5cm rèm tự động trượt đóng/mở hết hành trình',
      'Mất điện vẫn kéo tay nhẹ nhàng như rèm thường, không hại motor',
      'Đặt lịch tự mở đón nắng sáng 6:30 và tự đóng lúc 22:00 đi ngủ',
    ],
  },
  {
    id: 'mc-dual-track-luxury-villa',
    code: 'TH-SMART-02',
    name: 'Hệ Rèm Tự Động 2 Lớp Độc Lập Biệt Thự (Vải Gấm Cản Sáng + Voan Lụa Thêu)',
    shadeStoreEquivalent: 'The Shade Store Dual-Track Layered Drapery System',
    category: 'drapery',
    categoryLabel: 'Rèm Vải 2 Lớp Tự Động',
    price: 3850000,
    originalPrice: 4600000,
    unit: 'Trọn bộ 2 Động Cơ + Ray Đôi Âm Trần',
    motorBrand: 'Aqara Zigbee / Somfy Pháp',
    powerType: 'Tùy chọn 220V / Pin sạc',
    noiseDb: '25 dB ( Chuẩn Khách Sạn 5 Sao)',
    maxLoadKg: '65 kg mỗi ray (Cửa thông tầng)',
    warranty: 'Bảo hành chính hãng 5 năm',
    smartEcosystems: ['Apple HomeKit (Siri)', 'Aqara Home', 'Google Home', 'Remote Đôi 15 Kênh'],
    image: '/assets/aistudio/IMG_5282_af0ccdef.JPG',
    secondaryImage: '/assets/aistudio/IMG_5293_ff6844ca.JPG',
    badge: 'Đỉnh Cao 2 Lớp Độc Lập',
    summary:
      'Trang bị 2 đường ray điện song song trong hộc thạch cao: điều khiển độc lập lớp vải gấm cản nắng tuyệt đối và lớp voan trắng thêu hoa dịu dàng.',
    features: [
      'Chế độ "Đón Nắng Sớm": Tự động mở lớp vải dày, giữ nguyên lớp voan trắng lọc sáng',
      'Động cơ hợp kim nhôm nguyên khối chống quá nhiệt, vận hành bền bỉ trên 15 năm',
      'Hỗ trợ cả ray thẳng, ray uốn cong góc chữ L hoặc cửa sổ vòm thông tầng',
      'Anh Tuyến trực tiếp khảo sát hộc thạch cao và lắp đặt hoàn thiện tại nhà',
    ],
  },
  {
    id: 'mc-zebra-roller-wirefree',
    code: 'TH-SMART-03',
    name: 'Rèm Cầu Vồng & Rèm Cuốn Tự Động Pin Sạc Không Dây (Wire-Free Tubular)',
    shadeStoreEquivalent: 'The Shade Store Motorized Roller & Solar Shades V2',
    category: 'roller-zebra',
    categoryLabel: 'Rèm Cuốn & Cầu Vồng Tự Động',
    price: 1850000,
    originalPrice: 2300000,
    unit: 'Động cơ ống Pin Sạc + Phụ kiện trục cuốn',
    motorBrand: 'Dooya Lithium Wire-Free',
    powerType: 'Pin Sạc Lithium-Ion',
    noiseDb: '28 dB',
    maxLoadKg: 'Cuốn cửa rộng tới 3.2m',
    warranty: 'Bảo hành 3 năm chính hãng',
    smartEcosystems: ['Không cần đi dây điện', 'Remote Cầm Tay', 'App Smartphone', 'Tùy chọn Pin Mặt Trời'],
    image: '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg',
    secondaryImage: '/assets/aistudio/IMG_5053_4a4c9d67.JPG',
    badge: 'Không Cần Đi Dây Điện 220V',
    summary:
      'Động cơ ống tích hợp pin sạc Lithium-Ion giấu kín 100% bên trong ống cuốn nhôm của rèm cầu vồng Hàn Quốc Modero hoặc rèm cuốn chống nắng văn phòng.',
    features: [
      'Lắp đặt ngay cho nhà đang ở mà không cần ổ cắm điện cạnh cửa sổ',
      '1 lần sạc đầy dùng liên tục 6–10 tháng, có đèn báo dung lượng pin thông minh',
      'Điều chỉnh góc so le sáng/tối của rèm cầu vồng cực kỳ chính xác bằng nút nhấp trên Remote',
      'An toàn tuyệt đối cho phòng trẻ em vì không có dây kéo lòng thòng',
    ],
  },
  {
    id: 'mc-roman-tailored-auto',
    code: 'TH-SMART-04',
    name: 'Rèm Roman Xếp Lớp Tự Động Cao Cấp (Motorized Tailored Roman Shade)',
    shadeStoreEquivalent: 'The Shade Store Flat & Relaxed Motorized Roman Shades',
    category: 'roman',
    categoryLabel: 'Rèm Roman Xếp Lớp Tự Động',
    price: 1950000,
    originalPrice: 2450000,
    unit: 'Hệ trục cuốn tự động + Hộp máng nhôm',
    motorBrand: 'Aqara / Dooya Quiet Lift',
    powerType: 'Tùy chọn 220V / Pin sạc',
    noiseDb: '27 dB',
    maxLoadKg: 'Nâng vải dày 3 lớp tới 18kg',
    warranty: 'Bảo hành 3 năm tận nơi',
    smartEcosystems: ['Công tắc gắn tường không dây', 'Remote', 'App Điện Thoại'],
    image: '/assets/aistudio/IMG_5304_60468f41.JPG',
    secondaryImage: '/assets/aistudio/IMG_5306_e08d9303.JPG',
    badge: 'Sang Trọng & Gọn Gàng',
    summary:
      'Thiết kế xếp lớp ngang chuẩn boutique Mỹ: khi nâng rèm lên, các tầng vải gấm xếp nếp phẳng phiu gọn trong lòng khung cửa sổ, tiết kiệm diện tích tối đa.',
    features: [
      'Hệ thống dây dù chịu lực cuốn đồng tốc trong hộp nhôm kín, không bao giờ lệch tầng vải',
      'Vải gấm lụa hoặc linen dệt 3 lớp cản nắng 100%, tháo giặt dễ dàng qua khóa nhám Velcro',
      'Tặng kèm công tắc cảm ứng không dây dán tường sang trọng cạnh đầu giường',
      'May đo theo kích thước từng ô cửa sổ phòng ngủ, phòng thờ, phòng làm việc',
    ],
  },
  {
    id: 'mc-cellular-skylight-auto',
    code: 'TH-SMART-05',
    name: 'Rèm Tổ Ong Cách Nhiệt & Rèm Giếng Trời Tự Động (Cellular Skylight)',
    shadeStoreEquivalent: 'The Shade Store Motorized Cellular & Skylight Shades',
    category: 'cellular-skylight',
    categoryLabel: 'Rèm Tổ Ong & Giếng Trời Tự Động',
    price: 2450000,
    originalPrice: 2950000,
    unit: 'Hệ khung nhôm + Động cơ kéo giếng trời',
    motorBrand: 'Dooya High-Torque Skylight',
    powerType: 'Hardwired 220V',
    noiseDb: '29 dB',
    maxLoadKg: 'Lực kéo 40Nm cho mái kính rộng',
    warranty: 'Bảo hành 3 năm hệ khung & motor',
    smartEcosystems: ['Remote Xuyên Tầng', 'Hẹn Giờ Chống Nắng Trưa', 'App Tuya Smart'],
    image: '/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg',
    secondaryImage: '/assets/aistudio/1792658171183_1293093313519991016_1293093313519991016_10108ab564c8fb6ade925f6a8e609889_1971346a.jpg',
    badge: 'Chuyên Dụng Giếng Trời & Vách Kính',
    summary:
      'Giải pháp che nắng cách nhiệt tuyệt đối cho ô giếng trời cầu thang, mái kính sân thượng và cửa sổ thông tầng cao trên 4m.',
    features: [
      'Vải tổ ong ép nhiệt tráng bạc 2 lớp bên trong, giảm ngay 6–8°C nhiệt độ phòng mùa hè',
      'Khung ray nhôm Xingfa dẫn hướng 2 bên giữ mặt rèm phẳng căng tuyệt đối không võng',
      'Remote sóng RF xuyên tường điều khiển từ tầng 1 lên tầng 4 dễ dàng',
      'Có thể kết hợp cảm biến nhiệt độ & ánh nắng để tự động đóng rèm khi trời nắng gắt',
    ],
  },
  {
    id: 'mc-somfy-france-premium-kit',
    code: 'TH-SMART-06',
    name: 'Bộ Động Cơ Rèm Siêu Tĩnh Âm Somfy Pháp (Glydea Ultra / Movelite 35 RTS)',
    shadeStoreEquivalent: 'The Shade Store Somfy® Powered Luxury Automation',
    category: 'motors',
    categoryLabel: 'Động Cơ Rèm Cao Cấp',
    price: 4950000,
    originalPrice: 5800000,
    unit: 'Bộ Động Cơ Somfy Pháp Chính Hãng',
    motorBrand: 'Somfy (Thương hiệu Pháp từ 1969)',
    powerType: 'Hardwired 220V',
    noiseDb: '24 dB (Siêu tĩnh âm số 1 thế giới)',
    maxLoadKg: '60 kg – 80 kg (Cửa đại sảnh)',
    warranty: 'Bảo hành 5 năm chính hãng Somfy',
    smartEcosystems: ['Somfy TaHoma', 'Apple HomeKit', 'Control4 / Crestron / Lumi', 'Remote Situo RTS'],
    image: '/assets/aistudio/1792619301814_1293093313519991016_1293093313519991016_7660cb9abb659911e5fe3cd71a7f60bb_2e6c2394.jpg',
    secondaryImage: '/assets/aistudio/IMG_5312_c3f3e101.PNG',
    badge: 'Thương Hiệu Pháp - Bảo Hành 5 Năm',
    summary:
      'Dòng động cơ chính hãng Somfy (Pháp) — đối tác động cơ cốt lõi của The Shade Store Hoa Kỳ. Vận hành gần như không phát ra âm thanh, độ bền trên 20 năm.',
    features: [
      'Công nghệ độc quyền Ultra-Quiet < 24dB dành cho phòng ngủ президент và biệt thự',
      'Tích hợp sẵn với mọi hệ thống điện thông minh cao cấp (Lumi, Bkav, Control4, Crestron)',
      'Chức năng "My" ghi nhớ vị trí mở rèm yêu thích chỉ với 1 nút bấm trên Remote Situo',
      'Vỏ hợp kim chống cháy nổ, tự ngắt thông minh khi gặp vật cản bảo vệ trẻ nhỏ',
    ],
  },
];

export const SMART_MOTOR_OPTIONS: SmartMotorOption[] = [
  {
    id: 'motor-tuya-wifi',
    name: 'Động Cơ Thông Minh Tuya Smart Wi-Fi + Remote',
    brand: 'Tuya Smart',
    origin: 'Quốc tế (Phổ biến nhất)',
    powerType: 'Điện 220V',
    noiseDb: 28,
    maxWidthMeters: 5.5,
    maxLoadKg: 50,
    baseMotorPrice: 1450000,
    trackPricePerMeter: 280000,
    warrantyYears: 3,
    features: [
      'Kết nối trực tiếp Wi-Fi gia đình không cần bộ trung tâm Hub',
      'Điều khiển mở theo % trên App Tuya / Smart Life tiếng Việt',
      'Kèm Remote cầm tay + Kéo nhẹ tay tự chạy + Mất điện kéo tay',
    ],
    recommendedFor: 'Gia đình muốn lắp rèm tự động tiện nghi với chi phí tiết kiệm nhất',
  },
  {
    id: 'motor-dooya-battery',
    name: 'Động Cơ Pin Sạc Lithium Không Dây Dooya',
    brand: 'Dooya (Châu Âu/Quốc tế)',
    origin: 'Liên doanh Somfy - Dooya',
    powerType: 'Pin Sạc Lithium (Không cần đi dây 220V)',
    noiseDb: 27,
    maxWidthMeters: 5.0,
    maxLoadKg: 45,
    baseMotorPrice: 2150000,
    trackPricePerMeter: 280000,
    warrantyYears: 4,
    features: [
      'Pin sạc tháo rời dễ dàng, sạc 1 lần dùng liên tục 6–9 tháng',
      'Lắp đặt ngay cho nhà đã hoàn thiện chưa chừa ổ cắm điện trên trần',
      'Siêu êm 27dB, khởi động mềm & giảm tốc khi đóng kín',
    ],
    recommendedFor: 'Nhà đang ở, phòng ngủ hoặc cửa sổ không muốn đi dây điện nổi',
  },
  {
    id: 'motor-aqara-homekit',
    name: 'Động Cơ Aqara Zigbee 3.0 Chuẩn Apple HomeKit',
    brand: 'Aqara Smart Home',
    origin: 'Chính hãng Quốc tế',
    powerType: 'Tùy chọn Điện 220V hoặc Pin Sạc',
    noiseDb: 26,
    maxWidthMeters: 6.0,
    maxLoadKg: 55,
    baseMotorPrice: 2650000,
    trackPricePerMeter: 310000,
    warrantyYears: 4,
    features: [
      'Tương thích trực tiếp Apple HomeKit (ra lệnh Siri trên iPhone/Apple Watch)',
      'Tùy chỉnh tốc độ trượt rèm 3 mức (Nhanh - Tiêu chuẩn - Êm dịu ban đêm)',
      'Tự động hóa theo cảm biến ánh sáng và cảm biến hiện diện',
    ],
    recommendedFor: 'Gia đình sử dụng hệ sinh thái iPhone, iPad, Apple HomeKit & nhà thông minh',
  },
  {
    id: 'motor-somfy-france',
    name: 'Động Cơ Somfy Pháp (Movelite / Glydea Ultra RTS)',
    brand: 'Somfy France',
    origin: 'Pháp (Tiêu chuẩn The Shade Store Mỹ)',
    powerType: 'Điện 220V Chuyên Dụng',
    noiseDb: 24,
    maxWidthMeters: 8.0,
    maxLoadKg: 80,
    baseMotorPrice: 4950000,
    trackPricePerMeter: 390000,
    warrantyYears: 5,
    features: [
      'Thương hiệu động cơ rèm số 1 thế giới từ Pháp (sử dụng tại The Shade Store Mỹ)',
      'Siêu tĩnh âm < 24dB, chịu tải rèm thông tầng nặng tới 80kg',
      'Bảo hành chính hãng 5 năm, tuổi thọ vận hành trên 20 năm',
    ],
    recommendedFor: 'Biệt thự, đại sảnh thông tầng, khách hàng yêu cầu độ êm và độ bền đỉnh cao',
  },
];

export interface MotorizedQuoteInput {
  widthMeters: number;
  fabricOption: 'none' | 'single-600k' | 'double-850k';
  motorId: string;
  isDualLayerMotor: boolean;
}

export interface MotorizedQuoteResult {
  widthMeters: number;
  fabricCost: number;
  motorCost: number;
  trackCost: number;
  installationCost: number;
  totalPrice: number;
  motorName: string;
  motorCount: number;
  breakdownSummary: string;
}

/**
 * Pure calculation function for Motorized Curtain & Shade Quote
 */
export function calculateMotorizedCurtainQuote(input: MotorizedQuoteInput): MotorizedQuoteResult {
  const safeWidth = Math.max(1.0, Math.min(12.0, Number.isFinite(input.widthMeters) ? input.widthMeters : 2.5));
  const roundedWidth = Math.round(safeWidth * 10) / 10;

  const motor =
    SMART_MOTOR_OPTIONS.find((m) => m.id === input.motorId) || SMART_MOTOR_OPTIONS[0];

  const motorCount = input.isDualLayerMotor ? 2 : 1;

  const fabricRate =
    input.fabricOption === 'single-600k'
      ? 600000
      : input.fabricOption === 'double-850k'
      ? 850000
      : 0;

  const fabricCost = Math.round(roundedWidth * fabricRate);
  const motorCost = motor.baseMotorPrice * motorCount;
  const trackCost = Math.round(roundedWidth * motor.trackPricePerMeter * motorCount);
  const installationCost = 0; // Miễn phí công lắp đặt & cài đặt App tận nhà tại Tuyến Hoa

  const totalPrice = fabricCost + motorCost + trackCost + installationCost;

  const fabricDesc =
    input.fabricOption === 'single-600k'
      ? `Vải cản nắng 600k/m (${roundedWidth}m)`
      : input.fabricOption === 'double-850k'
      ? `Vải 2 lớp cản nắng + voan 850k/m (${roundedWidth}m)`
      : 'Chỉ lắp đặt hệ Động Cơ + Ray Điện (Giữ nguyên vải rèm sẵn có)';

  return {
    widthMeters: roundedWidth,
    fabricCost,
    motorCost,
    trackCost,
    installationCost,
    totalPrice,
    motorName: motor.name,
    motorCount,
    breakdownSummary: `${fabricDesc} + ${motorCount} ${motor.name} + ${
      roundedWidth * motorCount
    }m ray điện hợp kim (Miễn phí công lắp đặt & cài App)`,
  };
}

/**
 * Pure filter helper for Motorized Curtain products
 */
export function filterMotorizedSystems(
  products: MotorizedCurtainProduct[],
  category: MotorizedSystemCategory,
  searchQuery: string = ''
): MotorizedCurtainProduct[] {
  const q = searchQuery.trim().toLowerCase();
  return products.filter((item) => {
    if (category !== 'all' && item.category !== category) {
      return false;
    }
    if (q) {
      const inName = item.name.toLowerCase().includes(q);
      const inBrand = item.motorBrand.toLowerCase().includes(q);
      const inSummary = item.summary.toLowerCase().includes(q);
      const inEquiv = item.shadeStoreEquivalent.toLowerCase().includes(q);
      if (!inName && !inBrand && !inSummary && !inEquiv) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Pure helper returning target curtain & sheer percentages for smart home scene presets
 */
export function getSmartSchedulePresetPosition(
  scene: 'morning-sunrise' | 'noon-uv-shield' | 'evening-cinema' | 'night-sleep' | 'full-open'
): { curtainClosedPercent: number; sheerClosedPercent: number; sceneLabel: string } {
  switch (scene) {
    case 'morning-sunrise':
      return {
        curtainClosedPercent: 15,
        sheerClosedPercent: 80,
        sceneLabel: '06:30 Bình Minh — Mở rèm chính, khép voan lụa lọc nắng sớm',
      };
    case 'noon-uv-shield':
      return {
        curtainClosedPercent: 75,
        sheerClosedPercent: 100,
        sceneLabel: '13:00 Chống Nắng Trưa — Tự động đóng 75% cản tia UV & giữ mát điều hòa',
      };
    case 'evening-cinema':
      return {
        curtainClosedPercent: 95,
        sheerClosedPercent: 100,
        sceneLabel: '20:00 Rạp Phim Gia Đình — Đóng rèm cản sáng chống chói màn hình TV',
      };
    case 'night-sleep':
      return {
        curtainClosedPercent: 100,
        sheerClosedPercent: 100,
        sceneLabel: '22:00 Chúc Ngủ Ngon — Đóng kín 100% bảo vệ giấc ngủ sâu',
      };
    case 'full-open':
    default:
      return {
        curtainClosedPercent: 0,
        sheerClosedPercent: 0,
        sceneLabel: 'Mở Toàn Bộ 100% — Đón trọn tầm nhìn sân vườn thoáng đãng',
      };
  }
}
