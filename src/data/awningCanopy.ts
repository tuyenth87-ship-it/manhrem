export interface AwningPhotoArticle {
  id: string;
  code: string;
  image: string;
  category: 'biet-thu-nha-vuon' | 'san-thuong' | 'mai-thai-my-thuat' | 'gara-o-to' | 'nha-pho-kinh-doanh';
  categoryLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  pricePerSqm: number;
  locationLabel: string;
  spaceType: string;
  colorAndMaterial: string;
  frameStructure: string;
  summary: string;
  articleParagraphs: string[];
  highlights: string[];
  socialPostCopy: string;
}

export interface CuratedAwningVideo {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  sourceType: 'youtube-curated' | 'tuyen-hoa-local';
  category: 'bat-xep-tu-dong' | 'mai-hien-cam-bien' | 'video-tuyen-hoa';
  categoryLabel: string;
  youtubeId?: string;
  localVideoUrl?: string;
  posterImage: string;
  durationLabel: string;
  channelOrAuthor: string;
  motorSpec: string;
  priceHighlight: string;
  articleTitle: string;
  articleContent: string;
  keyFeatures: string[];
  socialPostCopy: string;
}

export interface AwningMotorOption {
  id: string;
  name: string;
  powerWatts: string;
  maxAreaSqm: number;
  price: number;
  warranty: string;
  features: string[];
}

export interface AwningQuoteInput {
  widthMeters: number;
  projectionMeters: number;
  includeMotor: boolean;
  motorId?: string;
}

export interface AwningQuoteResult {
  widthMeters: number;
  projectionMeters: number;
  areaSqm: number;
  pricePerSqm: number;
  canopyAndInstallCost: number;
  motorCost: number;
  totalCost: number;
  motorName: string | null;
  summaryText: string;
}

export const AWNING_UNIT_PRICE_PER_SQM = 350000;

export const AWNING_MOTOR_OPTIONS: AwningMotorOption[] = [
  {
    id: 'motor-bat-400kg',
    name: 'Motor Kéo Bạt Xếp Tự Động 400kg (Kèm 2 Remote Từ Xa)',
    powerWatts: '370W - 500W • Dây cáp lụa inox 6mm',
    maxAreaSqm: 35,
    price: 3200000,
    warranty: 'Bảo hành 24 tháng tận nhà',
    features: [
      'Điều khiển đóng mở mái bạt từ xa tới 50m bằng Remote chống nước',
      'Hành trình tự ngắt chính xác khi bạt căng hết cỡ hoặc thu gọn hết',
      'Tích hợp tay quay dự phòng khi mất điện',
    ],
  },
  {
    id: 'motor-bat-800kg',
    name: 'Motor Tời Bạt Xếp Công Suất Lớn 800kg + Cảm Biến Gió Mưa',
    powerWatts: '600W - 800W • Hộp số hợp kim siêu bền',
    maxAreaSqm: 80,
    price: 4800000,
    warranty: 'Bảo hành 36 tháng tận nhà',
    features: [
      'Chuyên dụng cho sân vườn lớn, sân để xe ô tô, quán cà phê & nhà hàng',
      'Tích hợp kết nối App điện thoại Wi-Fi & cảm biến tự thu bạt khi gió bão',
      'Lực kéo mạnh mẽ, kéo căng phẳng toàn bộ các múi sóng bạt Hàn Quốc',
    ],
  },
];

export const AWNING_PHOTO_ARTICLES: AwningPhotoArticle[] = [
  {
    id: 'bat-xep-6787-nha-vuon',
    code: 'TH-BAT01',
    image: '/assets/aistudio/IMG_6787_3dc0c93a.JPG',
    category: 'biet-thu-nha-vuon',
    categoryLabel: 'Mái Bạt Xếp Sân Vườn & Nhà Cổ',
    badge: 'Trọn Gói 350.000đ/m² Cả Công Lắp',
    title: 'Thi Công Mái Bạt Xếp Lượn Sóng Màu Nâu Cà Phê Cho Sân Biệt Thự Nhà Vườn Truyền Thống',
    subtitle: 'Không gian hiên nhà gỗ, bàn trà và tiểu cảnh cây xanh luôn râm mát, hài hòa kiến trúc mái ngói đỏ cổ truyền.',
    pricePerSqm: 350000,
    locationLabel: 'Công trình thực tế Tuyến Hoa thi công trọn gói',
    spaceType: 'Sân hiên nhà vườn truyền thống, nhà thờ họ, khu bàn trà ngoài trời',
    colorAndMaterial: 'Bạt Myung Sung Korea 3 lớp màu Nâu Cà Phê (Coffee Brown) dày 0.55mm',
    frameStructure: 'Hệ cột & kèo thép hộp mạ kẽm Hòa Phát sơn tĩnh điện chống gỉ',
    summary:
      'Bức ảnh ghi lại công trình mái bạt xếp lượn sóng màu nâu cà phê trầm ấm được Tuyến Hoa lắp đặt ngay trước hiên nhà mái ngói truyền thống có kê bàn ghế gỗ tự nhiên và chậu cây cảnh. Giải pháp vừa che nắng mưa tuyệt đối bảo vệ đồ gỗ, vừa giữ trọn nét sang trọng cổ điển.',
    articleParagraphs: [
      'Đối với các ngôi nhà vườn truyền thống, nhà 3 gian – 5 gian hoặc biệt thự có hiên rộng kê bàn ghế gỗ uống trà, nắng gắt buổi chiều và mưa tạt rất dễ làm bạc màu, nứt nẻ đồ gỗ quý cũng như làm héo cây cảnh. Tuyến Hoa đã tư vấn và thi công hệ mái bạt xếp lượn sóng tông màu Nâu Cà Phê (Coffee Brown) đồng điệu hoàn hảo với màu ngói đỏ và cột gỗ.',
      'Chất liệu bạt sử dụng là dòng bạt Myung Sung Korea 3 lớp cao cấp có lớp lõi sợi bố chịu lực siêu dai và lớp tráng PVC chống tia UV 98%. Các múi bạt lượn sóng cách đều 50cm giúp thoát nước mưa cực nhanh xuống máng thu nước, tuyệt đối không bị đọng nước hay phập phồng khi có gió lớn.',
      'Đặc biệt, toàn bộ hệ thống chạy trên ray trượt U chuyên dụng và bi treo bạc đạn inox. Ban ngày nắng gắt chỉ cần kéo nhẹ dây (hoặc bấm Remote nếu lắp thêm motor tự động) là che kín 100% sân gạch; khi chiều mát có thể thu gọn bạt lại chỉ còn 1/10 diện tích để đón gió trời và ánh trăng tự nhiên. Đơn giá trọn gói tại Tuyến Hoa chỉ 350.000đ / 1 m² đã bao gồm cả vật tư khung bạt và công thợ lắp đặt hoàn thiện.',
    ],
    highlights: [
      'Đồng giá trọn gói 350.000đ / 1 m² (Đã bao gồm cả khung sắt, bạt Hàn Quốc & công lắp đặt)',
      'Tông màu nâu cà phê sang trọng, sạch sẽ, cực hợp với nhà mái ngói và nội thất gỗ',
      'Cản nắng nóng 98%, giảm ngay 5–7°C cho khu vực hiên ngồi uống trà và sân vườn',
      'Kéo ra – thu vào nhẹ nhàng trong 15 giây, bảo hành khung và bạt tới 3 năm',
    ],
    socialPostCopy: `🌿 MÁI BẠT XẾP LƯỢN SÓNG SÂN VƯỜN & HIÊN NHÀ GỖ - TRỌN GÓI 350.000Đ/M² CẢ CÔNG LẮP ĐẶT 🌿
📸 Hình ảnh thực tế công trình mái bạt xếp màu Nâu Cà Phê do Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa trực tiếp thi công!
✅ Phù hợp hoàn hảo cho sân nhà vườn, nhà mái ngói cổ truyền, khu kê bàn ghế gỗ uống trà & chăm cây cảnh.
✅ Bạt Hàn Quốc 3 lớp dày dặn cản nắng 98%, chống tia UV, mưa không tạt, nắng không tới.
✅ Khi chiều mát kéo gọn 90% trả lại khoảng sân thoáng đãng chỉ trong vài giây.
💰 GIÁ NIÊM YẾT TRỌN GÓI: 350.000đ / 1 m² (Đã bao gồm toàn bộ khung kèo sắt mạ kẽm, bạt xếp và công thợ thi công lắp đặt tận nơi).
📍 Địa chỉ: Chợ Cháy - Ứng Hòa - Hà Nội (Nhận thi công trọn gói mọi miền)
📞 Hotline / Zalo Anh Tuyến: 0344.727.528`,
  },
  {
    id: 'bat-xep-6788-san-thuong',
    code: 'TH-BAT02',
    image: '/assets/aistudio/IMG_6788_36978811.JPG',
    category: 'san-thuong',
    categoryLabel: 'Mái Bạt Xếp Sân Thượng Tầng Cao',
    badge: 'Chống Nắng & Chống Bão Tầng Cao',
    title: 'Lắp Đặt Hệ Mái Bạt Xếp Khổ Lớn Trên Sân Thượng Tầng Cao — Trọn Gói 350.000đ/m² Cả Lắp Đặt',
    subtitle: 'Kết cấu khung thép hộp hàn gông kiên cố vượt trội, biến sân thượng nắng gắt thành không gian thư giãn mát mẻ quanh năm.',
    pricePerSqm: 350000,
    locationLabel: 'Công trình sân thượng nhà cao tầng khu đô thị',
    spaceType: 'Sân thượng tầng 3–6, sân phơi, khu trồng rau & tiệc BBQ gia đình',
    colorAndMaterial: 'Bạt xếp PVC 3 lớp chống nóng cách nhiệt + Khung thép hộp mạ kẽm dày 1.4ly–1.8ly',
    frameStructure: 'Khung kèo đôi liên kết trực tiếp vào lan can thép & dầm tường chịu gió giật',
    summary:
      'Góc chụp thực tế từ trên sân thượng tầng cao cho thấy hệ khung thép hộp sơn tĩnh điện được thợ cơ khí Tuyến Hoa gia cố cực kỳ chắc chắn, che phủ toàn bộ diện tích sân thượng giúp chống thấm, chống nóng trực tiếp cho trần nhà tầng dưới.',
    articleParagraphs: [
      'Sân thượng tầng cao là nơi chịu tác động khắc nghiệt nhất của ánh nắng mặt trời trực diện suốt cả ngày và những cơn gió giật mạnh khi trời chuyển mưa dông. Nếu lợp mái tôn cố định sẽ làm bí khí, nóng hầm hập và ồn ào khi mưa; vì vậy hệ Mái Bạt Xếp Lượn Sóng Di Động của Tuyến Hoa chính là giải pháp tối ưu nhất.',
      'Như trong bức ảnh thực tế tại công trình, đội thợ Tuyến Hoa đã thiết kế hệ khung cột và dầm ngang bằng thép hộp mạ kẽm dày dặn, hàn liên kết kiên cố với hệ khung bảo vệ sân thượng. Các thanh xà gồ đỡ bạt được chia khoang tiêu chuẩn, giúp tấm bạt luôn căng đều và chịu được sức gió trên tầng cao.',
      'Nhờ lớp bạt 3 lớp tráng nhựa cách nhiệt, sàn bê tông sân thượng không còn bị nung nóng vào mùa hè, giúp các phòng ngủ tầng ngay bên dưới mát hơn từ 5–6°C và tiết kiệm đáng kể tiền điện điều hòa. Với mức giá trọn gói chỉ 350.000đ / 1 m² cả công vận chuyển vật tư lên tầng cao và lắp đặt hoàn thiện, gia chủ đã có thêm một không gian sinh hoạt lý tưởng.',
    ],
    highlights: [
      'Trọn gói 350.000đ / 1 m² đã bao gồm cả công thợ vận chuyển và hàn lắp trên sân thượng',
      'Khung kèo thép hộp mạ kẽm gia cố chống rung lắc, an toàn trước gió lớn tầng cao',
      'Chống nóng trực tiếp cho sàn mái bê tông, bảo vệ trần nhà không bị nứt thấm',
      'Dễ dàng nâng cấp thêm Motor điều khiển từ xa để đóng mở bạt ngay từ trong phòng',
    ],
    socialPostCopy: `☀️ GIẢI PHÁP CHỐNG NÓNG SÂN THƯỢNG TẦNG CAO: MÁI BẠT XẾP LƯỢN SÓNG 350.000Đ/M² CẢ LẮP ĐẶT ☀️
📸 Ảnh thật 100% hệ mái bạt xếp sân thượng vừa được đội ngũ Tuyến Hoa hoàn thiện bàn giao!
✅ Kết cấu khung thép hộp mạ kẽm hàn liên kết siêu chắc chắn, chịu gió bão tầng cao.
✅ Chống nắng nóng trực tiếp xuống sàn mái, giúp phòng ngủ tầng dưới mát sâu, tiết kiệm điện điều hòa.
✅ Tận dụng sân thượng làm nơi phơi quần áo không sợ mưa bất chợt, trồng cây cảnh, tổ chức tiệc cuối tuần.
💰 ĐƠN GIÁ TRỌN GÓI: 350.000đ / 1 m² (Bao gồm toàn bộ khung sắt, bạt Hàn Quốc 3 lớp & công thợ lắp đặt).
📞 Gọi ngay Anh Tuyến khảo sát miễn phí: 0344.727.528`,
  },
  {
    id: 'bat-xep-6789-mai-thai-my-thuat',
    code: 'TH-BAT03',
    image: '/assets/aistudio/IMG_6789_90126eda.JPG',
    category: 'mai-thai-my-thuat',
    categoryLabel: 'Biệt Thự Mái Thái & Khung Mỹ Thuật',
    badge: 'Khung Vòm Hoa Văn Nghệ Thuật',
    title: 'Mái Bạt Xếp Biệt Thự Mái Thái Kết Hợp Khung Sắt Nghệ Thuật Uốn Hoa Văn — 350.000đ/m² Cả Công Lắp',
    subtitle: 'Nâng tầm thẩm mỹ mặt tiền biệt thự với hệ khung dầm uốn hoa văn sơn tĩnh điện tinh xảo cùng mái bạt lượn sóng mềm mại.',
    pricePerSqm: 350000,
    locationLabel: 'Công trình biệt thự mái Thái sân gạch đỏ tại Ứng Hòa',
    spaceType: 'Sảnh chính biệt thự mái Thái, sân trước nhà mới xây, hiên cửa gỗ đại hội',
    colorAndMaterial: 'Bạt Hàn Quốc màu Nâu Trầm sang trọng + Khung sắt mỹ thuật sơn tĩnh điện',
    frameStructure: 'Hệ dầm vòm uốn hoa văn chữ S nghệ thuật kết hợp cột chịu lực kiên cố',
    summary:
      'Bức ảnh chụp trực diện sảnh trước ngôi biệt thự mái Thái khang trang: Thay vì những thanh sắt hộp đơn điệu, Tuyến Hoa đã chế tác hệ khung dầm uốn hoa văn mỹ thuật cực kỳ bắt mắt, vừa chịu lực hoàn hảo vừa làm đẹp cho mặt tiền ngôi nhà.',
    articleParagraphs: [
      'Nhiều gia chủ sở hữu biệt thự mái Thái hoặc nhà mới xây thường băn khoăn: Làm sao để che nắng mưa cho khoảng sân gạch trước sảnh chính mà không làm mất đi vẻ đẹp kiến trúc sang trọng của ngôi nhà? Câu trả lời nằm ở mẫu Mái Bạt Xếp Khung Sắt Nghệ Thuật do chính tay thợ Tuyến Hoa thiết kế và thi công trong bức ảnh này.',
      'Điểm nhấn đắt giá nhất của công trình là hệ dầm ngang và vòm khung được uốn hoa văn mỹ thuật mềm mại, sơn phủ tĩnh điện chống gỉ sét tuyệt đối. Khi kết hợp cùng các múi bạt xếp lượn sóng màu nâu trầm, toàn bộ phần mái che trông như một hạng mục kiến trúc ngoại thất cao cấp của resort.',
      'Hệ mái che phủ toàn bộ khoảng sân trước thềm tam cấp, giúp bảo vệ bộ cửa gỗ chính khỏi nắng chiếu bạc màu và giữ cho sân gạch luôn khô ráo sạch sẽ mỗi khi trời mưa. Dù được gia công tỉ mỉ từng chi tiết hoa văn, Tuyến Hoa vẫn áp dụng mức giá ưu đãi trọn gói chỉ 350.000đ / 1 m² bao gồm cả vật tư và công lắp đặt.',
    ],
    highlights: [
      'Giá trọn gói 350.000đ / 1 m² cả khung sắt, bạt Hàn Quốc và công thợ thi công hoàn thiện',
      'Thiết kế khung dầm uốn hoa văn nghệ thuật độc quyền, tôn vinh vẻ đẹp biệt thự mái Thái',
      'Bảo vệ cửa gỗ mặt tiền và sảnh tam cấp khỏi nắng gắt hướng Tây & mưa hắt',
      'Vận hành êm ái, độ bền bạt trên 8–10 năm, khung thép bền bỉ trên 20 năm',
    ],
    socialPostCopy: `🏡 MÁI BẠT XẾP KHUNG SẮT NGHỆ THUẬT CHO BIỆT THỰ MÁI THÁI - CHỈ 350.000Đ/M² CẢ CÔNG LẮP 🏡
✨ Ai bảo lắp mái bạt là thô cứng? Hãy ngắm nhìn công trình thực tế do Tuyến Hoa vừa hoàn thiện cho căn biệt thự mái Thái!
✅ Khung dầm sắt hộp kết hợp uốn hoa văn vòm nghệ thuật cực kỳ sang trọng, thẩm mỹ cao.
✅ Bạt xếp lượn sóng Hàn Quốc màu nâu trầm che mát toàn bộ sân gạch đỏ và bảo vệ cửa gỗ chính.
✅ Kéo ra che nắng mưa 100%, thu vào gọn gàng khi cần thoáng đãng.
💰 ĐỒNG GIÁ TRỌN GÓI: 350.000đ / 1 m² (Đã gồm cả khung sắt, bạt và công thợ lắp đặt tận nhà).
📍 Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa - Chợ Cháy, Ứng Hòa, Hà Nội
📞 Hotline / Zalo tư vấn miễn phí: 0344.727.528`,
  },
  {
    id: 'bat-xep-6790-san-do-o-to',
    code: 'TH-BAT04',
    image: '/assets/aistudio/IMG_6790_02a22c42.JPG',
    category: 'gara-o-to',
    categoryLabel: 'Mái Bạt Xếp Che Sân Ô Tô & Khổ Lớn',
    badge: 'Vượt Nhịp Lớn Che Sân Ô Tô',
    title: 'Mái Bạt Xếp Lượn Sóng Diện Tích Lớn Che Sân Đỗ Ô Tô & Khu Kinh Doanh — 350.000đ/m² Cả Lắp Đặt',
    subtitle: 'Bạt màu ghi sáng phản xạ nhiệt mặt trời, kết cấu dầm kèo đôi vượt nhịp rộng giúp ô tô ra vào quay đầu thoải mái.',
    pricePerSqm: 350000,
    locationLabel: 'Công trình sân đỗ xe ô tô & khuôn viên rộng',
    spaceType: 'Sân đỗ xe ô tô gia đình, cơ quan, nhà hàng, quán bia, sân trường học',
    colorAndMaterial: 'Bạt Myung Sung Hàn Quốc màu Ghi Sáng (Silver Grey) phản xạ nhiệt mặt trời',
    frameStructure: 'Hệ dầm kèo chữ A và khung giằng kép vượt khẩu độ rộng không vướng cột giữa',
    summary:
      'Bức ảnh thực tế chụp dưới mái bạt xếp khổ lớn che phủ toàn bộ khoảng sân đỗ xe ô tô bán tải, xe con và xe máy. Nhờ sử dụng bạt màu ghi sáng cách nhiệt và hệ dầm kèo vượt nhịp lớn, không gian dưới mái luôn sáng sủa, mát mẻ và rộng rãi.',
    articleParagraphs: [
      'Đỗ xe ô tô ngoài trời nắng nóng mùa hè khiến nhiệt độ trong cabin có thể lên tới 60–70°C, làm nhanh hỏng nội thất da, taplo điện tử và bạc màu sơn xe. Với những khoảng sân rộng vừa làm nơi đỗ 2–3 chiếc ô tô vừa làm sân sinh hoạt chung như trong bức ảnh này, lắp đặt Mái Bạt Xếp Khổ Lớn của Tuyến Hoa là bài toán kinh tế và hiệu quả nhất.',
      'Đội ngũ kỹ thuật Tuyến Hoa đã tính toán kết cấu dầm kèo đôi (truss) chịu lực vượt khẩu độ lớn, nhờ đó toàn bộ lòng sân rộng hoàn toàn không bị vướng cột chống ở giữa, giúp xe bán tải và xe 7 chỗ lùi chuồng, quay đầu dễ dàng an toàn.',
      'Tông màu bạt Ghi Sáng (Silver Grey) có khả năng phản xạ bức xạ nhiệt mặt trời tốt nhất, giữ cho không gian bên dưới luôn dịu mát mà không bị tối. Giá thi công trọn gói tại Tuyến Hoa chỉ 350.000đ / 1 m² đã bao gồm toàn bộ sắt thép, bạt Hàn Quốc và công thợ lắp đặt từ A–Z.',
    ],
    highlights: [
      'Trọn gói 350.000đ / 1 m² cả công lắp đặt — Tiết kiệm hơn 40% so với làm mái tôn hoặc mái kính',
      'Thiết kế dầm kèo vượt nhịp lớn thông thoáng, không vướng cột giữa sân đỗ ô tô',
      'Bạt màu ghi sáng phản xạ tia UV, bảo vệ lớp sơn và nội thất xe hơi tuyệt đối',
      'Tương thích lắp đặt Motor tời tự động điều khiển bằng Remote ngay từ ghế lái ô tô',
    ],
    socialPostCopy: `🚗 MÁI BẠT XẾP KHỔ LỚN CHE SÂN ĐỖ Ô TÔ & SÂN KINH DOANH - TRỌN GÓI 350.000Đ/M² CẢ LẮP ĐẶT 🚗
📸 Hình ảnh thực tế công trình mái bạt xếp che sân để xe ô tô do Tuyến Hoa thi công trọn gói:
✅ Hệ dầm kèo đôi vượt nhịp rộng, lòng sân thông thoáng giúp ô tô ra vào quay đầu cực dễ dàng.
✅ Bạt Hàn Quốc màu Ghi Sáng phản xạ nhiệt mặt trời, giữ xe luôn mát mẻ, bảo vệ sơn và nội thất da.
✅ Có thể tích hợp Motor tự động: Ngồi ngay trên ghế lái bấm Remote mở/đóng mái bạt!
💰 GIÁ TRỌN GÓI TẬN XƯỞNG: 350.000đ / 1 m² (Bao gồm cả khung kèo sắt, bạt & công thợ lắp đặt).
📞 Liên hệ Anh Tuyến khảo sát đo đạc tận nơi: 0344.727.528`,
  },
  {
    id: 'bat-xep-6791-nha-pho',
    code: 'TH-BAT05',
    image: '/assets/aistudio/IMG_6791_228353ec.JPG',
    category: 'nha-pho-kinh-doanh',
    categoryLabel: 'Mái Bạt Xếp Mặt Tiền Nhà Phố',
    badge: 'Gọn Gàng & Linh Hoạt Số 1',
    title: 'Mái Bạt Xếp Di Động Lắp Mặt Tiền Nhà Phố & Shophouse Hiện Đại — 350.000đ/m² Cả Công Lắp Đặt',
    subtitle: 'Giải pháp che nắng mưa vỉa hè và mặt tiền tầng 1 cực kỳ gọn gàng, thẩm mỹ cao cho nhà phố liền kề và cửa hàng.',
    pricePerSqm: 350000,
    locationLabel: 'Công trình mặt tiền nhà phố liền kề sơn trắng hiện đại',
    spaceType: 'Mặt tiền nhà phố, shophouse liền kề, quán cà phê, tiệm thuốc, cửa hàng kinh doanh',
    colorAndMaterial: 'Bạt xếp lượn sóng màu Nâu Đen sạch sẽ + Khung sơn đồng bộ mặt tiền',
    frameStructure: 'Hệ khung консоль (console) gắn tường kết hợp cột biên gọn sát mép nhà',
    summary:
      'Bức ảnh ghi lại mẫu mái bạt xếp di động lắp trước mặt tiền ngôi nhà phố hiện đại sơn trắng. Thiết kế vuông vắn, gọn gàng ngay dưới ban công tầng 2 giúp che nắng mưa cho toàn bộ cửa chính tầng 1 và khoảng sân để xe phía trước.',
    articleParagraphs: [
      'Với các ngôi nhà phố liền kề hoặc cửa hàng kinh doanh mặt đường, khoảng không gian trước cửa tầng 1 đóng vai trò vô cùng quan trọng: vừa là nơi khách dựng xe, vừa là bộ mặt đón tài lộc của ngôi nhà. Nếu lắp mái cố định sẽ làm tối mặt tiền và vi phạm khoảng thông thoáng đô thị.',
      'Trong công trình thực tế ở bức ảnh thứ 5 này, Tuyến Hoa đã thi công hệ Mái Bạt Xếp Lượn Sóng gắn gọn gàng ngay dưới gầm ban công tầng 2. Hệ ray trượt được căn chỉnh độ dốc thoát nước chuẩn xác, giúp khi kéo bạt ra là che phủ toàn bộ mặt tiền, ngăn nắng chiếu xuyên qua cửa kính tầng 1.',
      'Khi trời râm mát hoặc buổi tối, gia chủ chỉ cần thu bạt xếp gọn sát vào tường, trả lại mặt tiền ngôi nhà sơn trắng khang trang như chưa từng lắp mái che. Đơn giá hoàn thiện trọn gói tại Tuyến Hoa chỉ 350.000đ / 1 m² đã bao gồm cả công thi công lắp đặt nhanh gọn trong 1 buổi.',
    ],
    highlights: [
      'Đồng giá 350.000đ / 1 m² trọn gói cả khung sắt, bạt Hàn Quốc và công thợ lắp đặt',
      'Thiết kế gọn gàng ôm sát gầm ban công tầng 2, giữ trọn vẻ đẹp hiện đại của nhà phố',
      'Kéo ra che nắng mưa cho khách để xe, thu gọn sát tường trong 10 giây khi trời mát',
      'Thi công nhanh gọn trong ngày, sạch sẽ, không ảnh hưởng việc kinh doanh của gia đình',
    ],
    socialPostCopy: `🏢 MÁI BẠT XẾP DI ĐỘNG MẶT TIỀN NHÀ PHỐ & CỬA HÀNG - TRỌN GÓI 350.000Đ/M² CẢ LẮP ĐẶT 🏢
📸 Công trình thực tế mái bạt xếp mặt tiền nhà phố hiện đại vừa được Tuyến Hoa lắp đặt hoàn thiện:
✅ Thiết kế vuông vắn, gọn gàng ngay dưới ban công tầng 2, che nắng mưa tuyệt đối cho cửa kính tầng 1 và chỗ để xe của khách.
✅ Linh hoạt 2 trong 1: Trời nắng mưa kéo ra che 100%, trời mát thu gọn sát tường khoe trọn mặt tiền đẹp.
💰 GIÁ NIÊM YẾT TRỌN GÓI: 350.000đ / 1 m² (Đã bao gồm toàn bộ vật tư khung bạt & công thợ lắp đặt).
📍 Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa - Chợ Cháy, Ứng Hòa, Hà Nội
📞 Gọi / Zalo Anh Tuyến: 0344.727.528`,
  },
];

export const CURATED_AWNING_VIDEOS: CuratedAwningVideo[] = [
  // 1. 3 Uploaded Real Videos from Tuyến Hoa
  {
    id: 'vid-th-install-lv0',
    code: 'TH-VID-01',
    title: 'Video Anh Tuyến Trực Tiếp Khoan Lắp & Bàn Giao Rèm Vải Gấm Thêu Hoa Có Yếm Nơ Đính Đá',
    subtitle: 'Quay thực tế tại nhà khách hàng: Chủ tiệm Tuyến Hoa trực tiếp cầm máy khoan lắp đặt và nghiệm thu cùng gia chủ',
    sourceType: 'tuyen-hoa-local',
    category: 'video-tuyen-hoa',
    categoryLabel: 'Video Thực Tế Tuyến Hoa',
    localVideoUrl: '/assets/aistudio/lv_0_20260706112032_1ddbd08c.mp4',
    posterImage: '/assets/aistudio/poster_tuyen_hoa_install.jpg',
    durationLabel: '02:02 • Full HD 1080p',
    channelOrAuthor: 'Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa',
    motorSpec: 'Thi công trực tiếp • Bảo hành tận nhà 3–5 năm',
    priceHighlight: 'Rèm vải 600k/m ngang • Bạt xếp 350k/m² cả lắp',
    articleTitle: 'Bài Viết Video #1: Anh Tuyến Trực Tiếp Thi Công Tận Nhà – Uy Tín Tạo Nên Thương Hiệu Tuyến Hoa',
    articleContent:
      'Video ghi lại cảnh Anh Tuyến (Chủ cơ sở Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa) trực tiếp đứng trên thang cầm máy khoan thi công lắp đặt bộ rèm vải gấm thêu hoa xanh cổ vịt kèm yếm nơ đính đá sang trọng tại nhà khách hàng. Từ khâu đo đạc, khoan bắt giá đỡ đến là hơi từng múi sóng rèm đều được thực hiện tỉ mỉ, sạch sẽ và tận tâm.',
    keyFeatures: [
      'Anh Tuyến trực tiếp khảo sát, đo đạc và lắp đặt hoàn thiện cho bà con',
      'Rèm vải cao cấp trọn gói 600.000đ/m ngang • Bạt mái xếp trọn gói 350.000đ/m² cả công lắp',
      'Thái độ phục vụ niềm nở, chu đáo, bảo hành nhanh chóng ngay khi khách gọi',
    ],
    socialPostCopy: `🎬 VIDEO THỰC TẾ: ANH TUYẾN TRỰC TIẾP LẮP ĐẶT & BÀN GIAO RÈM CỬA TẠI NHÀ KHÁCH HÀNG 🎬
✨ Tại Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa, mỗi công trình đều được chăm chút tỉ mỉ từ từng mũi khoan đến từng nếp sóng rèm!
🔥 ƯU ĐÃI TRỌN GÓI CẢ CÔNG LẮP ĐẶT:
👉 Rèm vải cản nắng cao cấp: 600.000đ / mét ngang (Cả thanh treo & công lắp)
👉 Bạt mái xếp lượn sóng che nắng mưa: 350.000đ / 1 m² (Cả khung sắt & công lắp)
📞 Hotline / Zalo Anh Tuyến: 0344.727.528`,
  },
  {
    id: 'vid-th-floral-curtain-2026',
    code: 'TH-VID-02',
    title: 'Video Cận Cảnh Bộ Rèm Vải Gấm Xanh Cổ Vịt Thêu Hoa Vàng & Yếm Võng Đính Đá Tuyệt Đẹp',
    subtitle: 'Quay thực tế từng đường kim mũi chỉ, yếm nơ rủ hạt pha lê lấp lánh và đai vén rèm đồng bộ',
    sourceType: 'tuyen-hoa-local',
    category: 'video-tuyen-hoa',
    categoryLabel: 'Video Thực Tế Tuyến Hoa',
    localVideoUrl: '/assets/aistudio/2026-07-05-161259219_b4419ba0.mp4',
    posterImage: '/assets/aistudio/poster_curtain_floral.jpg',
    durationLabel: '02:53 • Full HD Thực Tế',
    channelOrAuthor: 'Xưởng May Đo Mành Rèm Tuyến Hoa',
    motorSpec: 'May định hình 2.5m vải / 1m cửa • Yếm nơ thủ công',
    priceHighlight: '600.000đ / m ngang cả công lắp đặt',
    articleTitle: 'Bài Viết Video #2: Cận Cảnh Mẫu Rèm Gấm Thêu Hoa Xanh Cổ Vịt Phối Yếm Nơ Cho Cửa Buồng & Phòng Cưới',
    articleContent:
      'Đoạn video dài gần 3 phút quay cận cảnh thực tế bộ rèm cửa buồng / cầu thang tuyệt đẹp vừa được Tuyến Hoa lắp đặt hoàn thiện. Nổi bật trên nền vải gấm lụa màu xanh cổ vịt (Teal Blue) là những dải hoa cúc vàng thêu nổi sắc nét, kết hợp phần yếm rèm lượn sóng đính nơ và tua rua hạt đá lấp lánh giúp không gian ngôi nhà thêm phần ấm cúng, sang trọng.',
    keyFeatures: [
      'Chất vải gấm lụa bóng mịn, thêu hoa nổi 3D bền màu trên 10 năm',
      'Thiết kế yếm rèm đính nơ và hạt pha lê thủ công độc đáo của xưởng Tuyến Hoa',
      'Trọn gói chỉ 600.000đ / mét ngang bao gồm cả thanh suốt và công lắp đặt tận nơi',
    ],
    socialPostCopy: `🌸 CẬN CẢNH MẪU RÈM GẤM THÊU HOA XANH CỔ VỊT KÈM YẾM NƠ ĐÍNH ĐÁ TUYẾN HOA 🌸
🎥 Mời quý khách xem video quay thực tế 100% không qua chỉnh sửa tại nhà khách hàng:
✅ Từng múi sóng rèm tròn đều, chất vải gấm dày dặn, thêu hoa vàng nổi bật.
✅ Yếm nơ đính hạt đá lấp lánh che kín thanh treo cực kỳ duyên dáng.
💰 Đồng giá trọn gói: 600.000đ / mét ngang (Đã bao gồm cả công thi công lắp đặt).
📞 Gọi ngay Tuyến Hoa mang mẫu tận nhà: 0344.727.528`,
  },
  {
    id: 'vid-th-vong-xep-ngoc-tuyen',
    code: 'TH-VID-03',
    title: 'Video Giới Thiệu Võng Xếp Ngọc Tuyến Cao Cấp — Đẳng Cấp, Chuyên Nghiệp & Bền Bỉ',
    subtitle: 'Võng xếp khung inox/thép sơn tĩnh điện chịu lực lớn, lưới võng thoáng mát, phục vụ nhanh chóng tiện lợi',
    sourceType: 'tuyen-hoa-local',
    category: 'video-tuyen-hoa',
    categoryLabel: 'Video Thực Tế Tuyến Hoa',
    localVideoUrl: '/assets/aistudio/gemini_generated_video_493AC8E9_855479a1.mp4',
    posterImage: '/assets/aistudio/poster_vong_xep_ngoc_tuyen.jpg',
    durationLabel: '00:10 • HD Có Lời Thoại Tiếng Việt',
    channelOrAuthor: 'Võng Xếp Ngọc Tuyến - Tuyến Hoa',
    motorSpec: 'Khung chịu lực 200kg • Bạc đạn Nhật đưa êm',
    priceHighlight: 'Giao nhanh tận nhà • Giá gốc đại lý cấp 1',
    articleTitle: 'Bài Viết Video #3: Võng Xếp Ngọc Tuyến – Chất Lượng Hàng Đầu, Hân Hạnh Phục Vụ Quý Khách',
    articleContent:
      'Bên cạnh Chăn Ga Gối Đệm, Mành Rèm 600.000đ/m ngang và Bạt Xếp 350.000đ/m², cửa hàng Tuyến Hoa còn phân phối dòng Võng Xếp Ngọc Tuyến chính hãng. Khung võng ống to chắc chắn, đầu võng chạy vòng bi bạc đạn siêu êm không kêu cót két, lưới võng polyester 2 lớp thoáng khí cực mát lưng cho cả người lớn tuổi và trẻ nhỏ.',
    keyFeatures: [
      'Khung võng xếp Ngọc Tuyến chính hãng chịu tải trọng lớn, gấp gọn trong 30 giây',
      'Lưới võng rộng rãi, êm ái, không bị giãn xệ sau nhiều năm sử dụng',
      'Phục vụ giao hàng nhanh chóng tận nhà tại Ứng Hòa và gửi hàng toàn quốc',
    ],
    socialPostCopy: `🌟 VÕNG XẾP NGỌC TUYẾN - ĐẲNG CẤP, CHUYÊN NGHIỆP & BỀN BỈ 🌟
✅ Chất lượng hàng đầu - Khung võng chắc chắn, vòng bi đưa êm ru, lưới võng mát lịm.
✅ Phục vụ nhanh chóng, tiện lợi - Hân hạnh phục vụ quý khách!
📍 Tổng kho Chăn Ga Gối Đệm - Mành Rèm - Võng Xếp - Bạt Mái Xếp Tuyến Hoa (Chợ Cháy, Ứng Hòa, Hà Nội)
📞 Hotline / Zalo: 0344.727.528`,
  },

  // 2. 6 Curated Internet Videos on Motorized Awnings (Bạt Tự Động Sưu Tầm Trên Internet)
  {
    id: 'vid-net-homatic-rain-sensor',
    code: 'NET-BAT-01',
    title: 'Mái Bạt Xếp Khung Nhôm Tự Động Điều Khiển Từ Xa & Tự Mở Khi Trời Mưa (Sưu Tầm Internet)',
    subtitle: 'Công nghệ mái bạt xếp tự động thông minh: Bấm Remote đóng mở 1 chạm, tích hợp cảm biến mưa tự động kéo bạt',
    sourceType: 'youtube-curated',
    category: 'bat-xep-tu-dong',
    categoryLabel: 'Bạt Xếp Tự Động (Internet)',
    youtubeId: 'NFlf680vOv8',
    posterImage: '/assets/aistudio/IMG_6787_3dc0c93a.JPG',
    durationLabel: 'Video Thực Tế Internet • HD',
    channelOrAuthor: 'Sưu tầm: Công nghệ tự động Homatic',
    motorSpec: 'Motor kéo bạt tự động + Cảm biến mưa & gió',
    priceHighlight: 'Bạt xếp Tuyến Hoa 350.000đ/m² + Nâng cấp Motor',
    articleTitle: 'Công Nghệ Mái Bạt Xếp Tự Động Điều Khiển Từ Xa & Cảm Biến Mưa Thông Minh',
    articleContent:
      'Video sưu tầm trên internet trình diễn hệ mái bạt xếp tự động thế hệ mới: Gia chủ không cần quay tay hay kéo dây thừng truyền thống mà chỉ cần bấm nút trên Remote điều khiển từ xa (hoặc trên điện thoại), motor tời sẽ tự động kéo các múi bạt xếp trượt êm ái ra che kín sân. Đặc biệt khi trời đổ mưa bất chợt, cảm biến nước mưa sẽ tự động kích hoạt đóng mái bạt.',
    keyFeatures: [
      'Điều khiển đóng mở mái bạt từ xa tới 50m chỉ bằng 1 nút bấm Remote',
      'Tích hợp cảm biến mưa tự động đóng bạt bảo vệ sân phơi và bàn ghế ngoài trời',
      'Tuyến Hoa nhận lắp đặt trọn gói bạt xếp 350.000đ/m² kết hợp bộ Motor tự động theo yêu cầu',
    ],
    socialPostCopy: `⚡ VIDEO BẠT XẾP TỰ ĐỘNG ĐIỀU KHIỂN TỪ XA & CẢM BIẾN MƯA THÔNG MINH ⚡
🎥 Sưu tầm công nghệ mái bạt xếp tự động hiện đại nhất hiện nay đã có mặt tại Mành Rèm & Bạt Xếp Tuyến Hoa:
✅ Bấm Remote từ trong nhà, mái bạt tự động trượt ra che nắng mưa nhẹ nhàng.
✅ Thi công bạt mái xếp trọn gói chỉ 350.000đ / 1 m² cả công lắp đặt!
📞 Tư vấn lắp bạt xếp & motor tự động: 0344.727.528`,
  },
  {
    id: 'vid-net-remote-dalat',
    code: 'NET-BAT-02',
    title: 'Thực Tế Vận Hành Đóng / Mở Mái Bạt Xếp Lượn Sóng Bằng Điều Khiển Từ Xa (Sưu Tầm Internet)',
    subtitle: 'Quay thực tế tốc độ di chuyển mượt mà của hệ bạt xếp khổ lớn khi trang bị motor tời cáp inox chuyên dụng',
    sourceType: 'youtube-curated',
    category: 'bat-xep-tu-dong',
    categoryLabel: 'Bạt Xếp Tự Động (Internet)',
    youtubeId: 'fpKNHta8LpA',
    posterImage: '/assets/aistudio/IMG_6790_02a22c42.JPG',
    durationLabel: 'Video Thực Tế Internet • HD',
    channelOrAuthor: 'Sưu tầm: Cơ Khí & Tự Động',
    motorSpec: 'Motor tời cáp inox 6mm • Điều khiển RF xuyên tường',
    priceHighlight: 'Bạt xếp 350.000đ/m² trọn gói cả công lắp',
    articleTitle: 'Vận Hành Thực Tế Hệ Mái Bạt Xếp Lượn Sóng Khổ Lớn Bằng Remote Điều Khiển Từ Xa',
    articleContent:
      'Với các mái bạt xếp có diện tích từ 25m² đến trên 100m² (như sân để xe ô tô, sân vườn biệt thự, quán ăn sân vườn), việc lắp thêm motor điều khiển từ xa giúp người già và phụ nữ đóng mở mái bạt cực kỳ nhàn nhã. Dây cáp lụa inox 304 cuốn quanh trục lô motor kéo toàn bộ dàn bạt lượn sóng chạy đồng tốc, không bị lệch ray hay kẹt bi.',
    keyFeatures: [
      'Kéo căng phẳng phiu các múi bạt lượn sóng trên diện tích sân rộng lớn',
      'Remote sóng RF xuyên tường điều khiển từ tầng 1, tầng 2 hoặc từ trong xe ô tô',
      'Kết hợp hoàn hảo với gói thi công bạt xếp 350.000đ/m² cả công lắp của Tuyến Hoa',
    ],
    socialPostCopy: `🎬 VIDEO VẬN HÀNH MÁI BẠT XẾP LƯỢN SÓNG ĐIỀU KHIỂN TỪ XA BẰNG REMOTE 🎬
✅ Không tốn sức kéo dây — Chỉ cần bấm nút trên Remote cầm tay là mái bạt khổ lớn tự động mở ra hoặc thu gọn!
💰 Bạt mái xếp Tuyến Hoa: 350.000đ / 1 m² (Bao gồm cả khung sắt, bạt Hàn Quốc & công thợ lắp đặt).
📞 Hotline / Zalo Anh Tuyến: 0344.727.528`,
  },
  {
    id: 'vid-net-hoa-phat-auto',
    code: 'NET-BAT-03',
    title: 'Mái Bạt Xếp Nhập Khẩu Thu Kéo Tự Động Bằng Điều Khiển Từ Xa (Sưu Tầm Internet)',
    subtitle: 'Hệ khung kèo tiêu chuẩn kết hợp bạt PVC 3 lớp chống tia UV, thu gọn 90% diện tích khi cần đón gió trời',
    sourceType: 'youtube-curated',
    category: 'bat-xep-tu-dong',
    categoryLabel: 'Bạt Xếp Tự Động (Internet)',
    youtubeId: 'aOpIIVsMLjc',
    posterImage: '/assets/aistudio/IMG_6789_90126eda.JPG',
    durationLabel: 'Video Thực Tế Internet • HD',
    channelOrAuthor: 'Sưu tầm: Mái Che Di Động Hòa Phát',
    motorSpec: 'Hệ ray bi trượt bạc đạn + Motor tự ngắt hành trình',
    priceHighlight: 'Trọn gói bạt xếp 350.000đ/m² cả lắp đặt',
    articleTitle: 'Cơ Chế Thu Kéo Tự Động Của Mái Bạt Xếp Lượn Sóng Cao Cấp',
    articleContent:
      'Video minh họa rõ nét cơ chế xếp lớp lượn sóng thông minh: Khi motor quay chiều thu vào, từng thanh sáo sắt luồn trong các múi bạt được bi treo kéo sát lại gần nhau như đàn xếp (accordion), giải phóng tới 90% khoảng không gian bầu trời phía trên sân nhà.',
    keyFeatures: [
      'Thu gọn 90% diện tích mái chỉ trong 20–30 giây bấm nút',
      'Bạt 3 lớp chống nóng, chống thấm nước mưa 100%, không mục nát ngoài trời',
      'Thi công trọn gói tại Tuyến Hoa với đơn giá 350.000đ/m² cả công lắp đặt',
    ],
    socialPostCopy: `🌤️ CƠ CHẾ THU KÉO TỰ ĐỘNG CỦA MÁI BẠT XẾP LƯỢN SÓNG CAO CẤP 🌤️
✅ Che nắng mưa 100% ban trưa, thu gọn 90% đón gió mát ban chiều!
💰 Giá thi công trọn gói tại Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa: 350.000đ / 1 m² cả công lắp đặt.
📞 Hotline / Zalo: 0344.727.528`,
  },
  {
    id: 'vid-net-funas-pergola-pvc',
    code: 'NET-BAT-04',
    title: 'Hệ Mái Bạt Xếp Che Nắng Mưa Tự Động Pergola PVC Cao Cấp (Sưu Tầm Internet)',
    subtitle: 'Dòng mái bạt tự động căng phẳng chuẩn kiến trúc biệt thự hiện đại, tích hợp đèn LED chiếu sáng dưới thanh sáo',
    sourceType: 'youtube-curated',
    category: 'mai-hien-cam-bien',
    categoryLabel: 'Mái Hiên & Pergola Tự Động',
    youtubeId: 'KozWolEdwOU',
    posterImage: '/assets/aistudio/IMG_6788_36978811.JPG',
    durationLabel: 'Video Thực Tế Internet • HD',
    channelOrAuthor: 'Sưu tầm: Giải Pháp Tự Động Funas',
    motorSpec: 'Motor ống Somfy / Dooya ẩn trong dầm + Đèn LED',
    priceHighlight: 'Bạt xếp tiêu chuẩn 350.000đ/m² cả lắp đặt',
    articleTitle: 'Xu Hướng Mái Bạt Xếp Tự Động Pergola Cho Sân Thượng & Biệt Thự Hiện Đại',
    articleContent:
      'Video giới thiệu dòng mái bạt xếp tự động phong cách Pergola Châu Âu dành cho sân thượng, hồ bơi và sân vườn biệt thự. Hệ bạt chạy âm trong ray dẫn hướng hai bên giúp mặt bạt căng phẳng, chống gió giật và thoát nước mưa âm trong cột.',
    keyFeatures: [
      'Thiết kế sang trọng, hiện đại cho sân thượng tầng cao và biệt thự sân vườn',
      'Có thể kết hợp gắn dải đèn LED ấm cúng dưới các thanh đỡ bạt để ngồi uống trà tối',
      'Đội thợ Tuyến Hoa tư vấn thiết kế theo đúng kích thước sân thực tế của từng gia đình',
    ],
    socialPostCopy: `✨ XU HƯỚNG MÁI BẠT XẾP TỰ ĐỘNG CHO SÂN THƯỢNG & BIỆT THỰ HIỆN ĐẠI ✨
✅ Vừa chống nắng mưa tuyệt đối, vừa tạo không gian thư giãn đẳng cấp cho gia đình.
💰 Bạt mái xếp lượn sóng Tuyến Hoa: 350.000đ / 1 m² cả công thi công lắp đặt!
📞 Liên hệ Anh Tuyến: 0344.727.528`,
  },
  {
    id: 'vid-net-chienlong-remote',
    code: 'NET-BAT-05',
    title: 'Điều Khiển Từ Xa Mái Che Tự Động Sân Vườn & Mặt Tiền Nhà Phố (Sưu Tầm Internet)',
    subtitle: 'Giải pháp che nắng mưa tự động đóng mở linh hoạt bằng điều khiển cầm tay cho nhà phố và biệt thự',
    sourceType: 'youtube-curated',
    category: 'mai-hien-cam-bien',
    categoryLabel: 'Mái Hiên & Pergola Tự Động',
    youtubeId: 'whJsRPyZU7w',
    posterImage: '/assets/aistudio/IMG_6791_228353ec.JPG',
    durationLabel: 'Video Thực Tế Internet • HD',
    channelOrAuthor: 'Sưu tầm: Chiến Long Autohome',
    motorSpec: 'Điều khiển Remote đa kênh • Đóng mở theo góc tùy ý',
    priceHighlight: 'Bạt xếp nhà phố 350.000đ/m² cả công lắp',
    articleTitle: 'Giải Pháp Mái Che Điều Khiển Từ Xa Cho Mặt Tiền Nhà Phố & Cửa Hàng',
    articleContent:
      'Video thực tế trình diễn khả năng đóng mở linh hoạt của hệ mái che tự động bằng điều khiển từ xa. Người dùng có thể dừng mái che ở bất kỳ vị trí nào (mở 30%, 50%, 80% hoặc 100%) để điều tiết lượng ánh sáng và gió mát vào hiên nhà.',
    keyFeatures: [
      'Chủ động dừng mái bạt ở mọi vị trí mong muốn chỉ bằng nút STOP trên Remote',
      'Giữ cho mặt tiền nhà phố luôn thoáng đẹp, sang trọng và mát mẻ',
      'Thi công trọn gói bạt xếp tại Tuyến Hoa chỉ 350.000đ/m² đã gồm cả công lắp đặt',
    ],
    socialPostCopy: `🏡 ĐIỀU KHIỂN TỪ XA MÁI CHE TỰ ĐỘNG CHO SÂN VƯỜN & NHÀ PHỐ 🏡
✅ Bấm nút 1 chạm đóng mở theo ý muốn, bảo vệ mặt tiền ngôi nhà khỏi nắng gắt và mưa rào.
💰 Bạt mái xếp Tuyến Hoa: 350.000đ / 1 m² cả công lắp đặt trọn gói!
📞 Hotline / Zalo: 0344.727.528`,
  },
  {
    id: 'vid-net-review-motor-bat-xep',
    code: 'NET-BAT-06',
    title: 'Review Chi Tiết Công Trình Mái Bạt Xếp Có Lắp Motor Điều Khiển Từ Xa (Sưu Tầm Internet)',
    subtitle: 'Cận cảnh cách bố trí motor tời, puly dẫn hướng cáp và hộp điều khiển trung tâm trên khung mái bạt xếp',
    sourceType: 'youtube-curated',
    category: 'bat-xep-tu-dong',
    categoryLabel: 'Bạt Xếp Tự Động (Internet)',
    youtubeId: '7NIKHmXMOkA',
    posterImage: '/assets/aistudio/IMG_6787_3dc0c93a.JPG',
    durationLabel: 'Video Thực Tế Internet • HD',
    channelOrAuthor: 'Sưu tầm: Thật Huy Hoàng',
    motorSpec: 'Motor tời hộp số + Puly ròng rọc inox 304',
    priceHighlight: 'Bạt xếp 350.000đ/m² cả công lắp đặt',
    articleTitle: 'Cận Cảnh Cấu Tạo Kỹ Thuật Của Hệ Mái Bạt Xếp Lắp Motor Tự Động',
    articleContent:
      'Video quay cận cảnh thực tế bên dưới khung mái bạt xếp đã gắn motor điều khiển từ xa: Từ vị trí đặt hộp motor chống nước, đường đi của dây cáp lụa qua các bánh xe puly inox cho tới cách các thanh sáo bạt xếp gọn đều đặn khi bấm Remote.',
    keyFeatures: [
      'Hiểu rõ cấu tạo thực tế của khung kèo sắt hộp, bi treo và motor kéo bạt',
      'Có thể lắp mới trọn gói hoặc nâng cấp thêm motor vào mái bạt xếp sẵn có',
      'Tuyến Hoa nhận thi công trọn gói 350.000đ/m² cả công lắp đặt và bảo hành dài hạn',
    ],
    socialPostCopy: `🔧 REVIEW CHI TIẾT CÔNG TRÌNH MÁI BẠT XẾP LẮP MOTOR ĐIỀU KHIỂN TỪ XA 🔧
✅ Kết cấu cơ khí chuẩn xác, vận hành bền bỉ, kéo bạt êm nhẹ chỉ bằng 1 nút bấm!
💰 Thi công mái bạt xếp trọn gói Tuyến Hoa: 350.000đ / 1 m² (Cả vật tư & công lắp đặt).
📞 Gọi ngay Anh Tuyến: 0344.727.528`,
  },
];

/**
 * Pure calculation helper for Awning / Canopy 350.000đ/m² (all-inclusive with installation)
 */
export function calculateAwningCanopyQuote(input: AwningQuoteInput): AwningQuoteResult {
  const safeWidth = Math.max(1.5, Math.min(30, Number.isFinite(input.widthMeters) ? input.widthMeters : 4.0));
  const safeProjection = Math.max(1.5, Math.min(30, Number.isFinite(input.projectionMeters) ? input.projectionMeters : 5.0));

  const widthMeters = Math.round(safeWidth * 10) / 10;
  const projectionMeters = Math.round(safeProjection * 10) / 10;
  const areaSqm = Math.round(widthMeters * projectionMeters * 100) / 100;

  const canopyAndInstallCost = Math.round(areaSqm * AWNING_UNIT_PRICE_PER_SQM);

  let motorCost = 0;
  let motorName: string | null = null;

  if (input.includeMotor) {
    const selectedMotor =
      AWNING_MOTOR_OPTIONS.find((m) => m.id === input.motorId) ||
      (areaSqm > 35 ? AWNING_MOTOR_OPTIONS[1] : AWNING_MOTOR_OPTIONS[0]);
    motorCost = selectedMotor.price;
    motorName = selectedMotor.name;
  }

  const totalCost = canopyAndInstallCost + motorCost;

  const summaryText = input.includeMotor
    ? `Mái bạt xếp trọn gói ${areaSqm}m² (Ngang ${widthMeters}m × Vươn ${projectionMeters}m × 350.000đ/m² cả công lắp) + ${motorName}`
    : `Mái bạt xếp trọn gói ${areaSqm}m² (Ngang ${widthMeters}m × Vươn ${projectionMeters}m × 350.000đ/m² đã bao gồm cả khung sắt, bạt Hàn Quốc & công lắp đặt)`;

  return {
    widthMeters,
    projectionMeters,
    areaSqm,
    pricePerSqm: AWNING_UNIT_PRICE_PER_SQM,
    canopyAndInstallCost,
    motorCost,
    totalCost,
    motorName,
    summaryText,
  };
}

/**
 * Pure filter helper for Awning Photo Articles
 */
export function filterAwningPhotoArticles(
  articles: AwningPhotoArticle[],
  category: 'all' | AwningPhotoArticle['category']
): AwningPhotoArticle[] {
  if (category === 'all') return articles;
  return articles.filter((a) => a.category === category);
}

/**
 * Pure filter helper for Curated Awning Videos
 */
export function filterCuratedAwningVideos(
  videos: CuratedAwningVideo[],
  category: 'all' | CuratedAwningVideo['category']
): CuratedAwningVideo[] {
  if (category === 'all') return videos;
  return videos.filter((v) => v.category === category);
}
