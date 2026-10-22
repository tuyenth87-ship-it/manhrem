export interface BeadShape {
  id: string;
  name: string;
  vietnameseName: string;
  shapeDescription: string;
  material: string;
  colors: string[];
  features: string[];
  bestSuitedFor: string;
  standardPrice1mx2m: number; // 600,000đ
  standardPrice1m2x2m: number; // 780,000đ
  image: string;
  badge: string;
}

export interface BeadArtPattern {
  id: string;
  name: string;
  theme: 'plastic-art' | 'wood-fengshui';
  materialType: 'Hạt Nhựa Acrylic Cao Cấp' | 'Hạt Gỗ Bồ Đề Tự Nhiên' | 'Hạt Gỗ Hương Cao Cấp';
  patternName: string;
  symbolism: string;
  fengShuiBenefit: string;
  suitableRooms: string[];
  standardPrice1mx2m: number; // 990,000đ - 1,200,000đ
  standardPrice1m2x2m: number; // 1,300,000đ - 1,850,000đ
  image: string;
  beadCountApprox: string;
  badge: string;
}

export const BEAD_SHAPES: BeadShape[] = [
  {
    id: 'hat-giot-le-pha-le',
    name: 'Hạt Giọt Lệ / Giọt Nước Pha Lê',
    vietnameseName: 'Rèm Hạt Nhựa Giọt Lệ Lung Linh',
    shapeDescription: 'Tạo hình hạt giọt sương mai thon dài ở đỉnh và bầu tròn ở đáy, các cạnh vát giác cắt tinh xảo phản chiếu ánh sáng lấp lánh như pha lê.',
    material: 'Nhựa Acrylic nguyên sinh chịu lực, độ trong suốt quang học cao',
    colors: ['Trắng Trong Pha Lê', 'Vàng Hổ Phách', 'Tím Thạch Anh', 'Khói Sang Trọng', 'Hồng Ngọc'],
    features: [
      'Khúc xạ ánh sáng đèn và nắng mai lộng lẫy',
      'Dây xâu cước lụa bọc thép chống đứt giãn tuyệt đối',
      'Thanh treo nhôm hợp kim sơn tĩnh điện kèm móc treo sẵn',
      'Dễ lau chùi bằng khăn ẩm, không ố vàng theo thời gian'
    ],
    bestSuitedFor: 'Cửa thông phòng khách, lối vào phòng ngủ, vách ngăn phòng khách - phòng ăn, lối huyền quan nhà phố.',
    standardPrice1mx2m: 600000,
    standardPrice1m2x2m: 780000,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    badge: 'Mẫu Bán Chạy Nhất',
  },
  {
    id: 'hat-tron-cuom-thuy-tinh',
    name: 'Hạt Tròn Cườm Thủy Tinh Cổ Điển',
    vietnameseName: 'Rèm Hạt Nhựa Tròn Đều Thanh Thoát',
    shapeDescription: 'Các viên hạt tròn đều tăm tắp đường kính 10mm - 14mm, bề mặt láng mịn, rủ xuống thẳng tắp và êm ái khi người đi qua.',
    material: 'Nhựa dẻo ABS cao cấp phối nhựa trong suốt, không mùi',
    colors: ['Trắng Tuyết', 'Hổ Phách Trầm', 'Xanh Ngọc Bích', 'Nâu Cà Phê', 'Phối Màu Cầu Vồng'],
    features: [
      'Rủ sóng đều đặn, không bị rối sợi khi có gió thoảng',
      'Đi lại qua rèm êm ái, hạt chạm nhau phát ra âm thanh lách cách nhẹ nhàng dễ chịu',
      'Chống bám bụi, dùng 5 - 10 năm vẫn bóng đẹp như mới',
      'Đã gồm thanh suốt định vị và ốc vít lắp đặt nhanh trong 10 phút'
    ],
    bestSuitedFor: 'Cửa buồng, cửa cầu thang, che chắn nhà vệ sinh đối diện giường ngủ (hóa giải phong thủy).',
    standardPrice1mx2m: 600000,
    standardPrice1m2x2m: 780000,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    badge: 'Đơn Giản & Bền Bỉ',
  },
  {
    id: 'hat-qua-tram-kim-cuong',
    name: 'Hạt Quả Trám Kim Cương Đa Diện',
    vietnameseName: 'Rèm Hạt Nhựa Quả Trám Giác Cắt Kim Cương',
    shapeDescription: 'Hạt hình quả trám giác cắt đa diện (Diamond facet), tạo nên hàng trăm mặt phản quang lấp lánh như viên kim cương khi bật đèn phòng.',
    material: 'Nhựa cao cấp tráng bóng quang học chống trầy',
    colors: ['Ánh Kim Vàng', 'Bạc Trắng Tinh Khiết', 'Hồng Pastel', 'Xanh Biển Trong'],
    features: [
      'Tạo vẻ đẹp kiêu sa, hiện đại cho ngôi nhà',
      'Mỗi sợi cách nhau 2cm - 2.5cm tạo độ thông thoáng tuyệt đối',
      'Hóa giải xung sát phong thủy giữa các cửa đối diện nhau',
      'Trọng lượng vừa phải, không làm cong vênh khung cửa'
    ],
    bestSuitedFor: 'Nhà phố hiện đại, căn hộ chung cư, cửa hàng thời trang, spa, salon làm đẹp.',
    standardPrice1mx2m: 600000,
    standardPrice1m2x2m: 780000,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop',
    badge: 'Lấp Lánh Sang Trọng',
  },
  {
    id: 'hat-hoa-cuc-ngu-sac',
    name: 'Hạt Hoa Cúc & Hạt Ngũ Sắc Nghệ Thuật',
    vietnameseName: 'Rèm Hạt Nhựa Hoa Cúc Điểm Hạt Bi',
    shapeDescription: 'Đan xen các hạt tạo hình cánh hoa cúc 8 cánh nở rộ kết hợp hạt bi tròn điểm xuyết, mang nét đẹp tự nhiên, sinh động và ấm cúng.',
    material: 'Nhựa tổng hợp dẻo dai đúc khuôn sắc nét từng cánh hoa',
    colors: ['Hoa Vàng Hạt Trắng', 'Hoa Cam Hạt Hổ Phách', 'Hoa Tím Hạt Khói', 'Ngũ Sắc Phong Thủy'],
    features: [
      'Họa tiết hoa cúc mang ý nghĩa may mắn, thanh bình và đoàn viên',
      'Sắp xếp so le nghệ thuật thu hút mắt nhìn',
      'Dây xâu cước đôi bền bỉ không bị giãn chảy',
      'Thích hợp cho cả nhà gỗ cổ truyền và nhà hiện đại'
    ],
    bestSuitedFor: 'Cửa gian bếp ngăn mùi phòng khách, cửa phòng người lớn tuổi, hiên nhà ngắm cảnh.',
    standardPrice1mx2m: 600000,
    standardPrice1m2x2m: 780000,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    badge: 'Họa Tiết Độc Đáo',
  },
  {
    id: 'hat-xoan-truc-ket-hop',
    name: 'Hạt Xoắn Ốc Phối Ống Trúc Nhựa',
    vietnameseName: 'Rèm Nhựa Dạng Ống Trúc Phối Hạt Bi Xoắn',
    shapeDescription: 'Kết hợp hài hòa giữa các ống trúc nhựa dài 5cm và hạt bi xoắn gân nổi, gợi nhớ phong cách mành trúc truyền thống nhưng hiện đại và sạch sẽ hơn.',
    material: 'Ống trúc nhựa PVC cách nhiệt + Hạt xoắn Acrylic',
    colors: ['Màu Giả Gỗ Nâu Gụ', 'Màu Vàng Tre Mộc', 'Màu Trắng Sứ Hiện Đại'],
    features: [
      'Tạo sự kín đáo cao hơn cho không gian riêng tư',
      'Không lo mối mọt hay ẩm mốc như mành gỗ tre tự nhiên',
      'Chùi rửa vệ sinh bằng nước xà phòng dễ dàng',
      'Thanh ray nhôm bản to chịu lực'
    ],
    bestSuitedFor: 'Cửa phòng ngủ, vách che cầu thang, cửa ngăn phòng thờ bán kín.',
    standardPrice1mx2m: 600000,
    standardPrice1m2x2m: 780000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    badge: 'Kín Đáo & Thanh Lịch',
  },
];

export const BEAD_ART_PATTERNS: BeadArtPattern[] = [
  // --- MÀNH HẠT NHỰA KẾT TRANH NGHỆ THUẬT ---
  {
    id: 'tranh-doi-chim-cong-phu-quy',
    name: 'Mành Hạt Nhựa Kết Tranh Đôi Chim Công Phú Quý (Khổng Tước Khai Hoa)',
    theme: 'plastic-art',
    materialType: 'Hạt Nhựa Acrylic Cao Cấp',
    patternName: 'Đôi Chim Công Đậu Cành Mẫu Đơn',
    symbolism: 'Chim công là loài chim quý tượng trưng cho vương giả, tài lộc dồi dào, quyền quý và hôn nhân sắt son, tình cảm vợ chồng thắm thiết.',
    fengShuiBenefit: 'Thu hút nguồn năng lượng tích cực, xua tan âm khí, kích hoạt cung tình duyên và đường công danh tài vận.',
    suitableRooms: ['Cửa chính phòng khách', 'Cửa phòng tân hôn', 'Lối thông phòng đại sảnh'],
    standardPrice1mx2m: 990000,
    standardPrice1m2x2m: 1300000, // Đúng giá 1.3 triệu bộ 1.2m x 2m theo yêu cầu
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    beadCountApprox: 'Khoảng 48 - 55 sợi dệt thủ công tỉ mỉ',
    badge: 'Mẫu Tranh Hot Nhất (1.3tr / 1.2m×2m)',
  },
  {
    id: 'tranh-tung-hac-dao-tien',
    name: 'Mành Hạt Nhựa Kết Tranh Tùng Hạc Đào Tiên (Trường Thọ An Khang)',
    theme: 'plastic-art',
    materialType: 'Hạt Nhựa Acrylic Cao Cấp',
    patternName: 'Cây Tùng Cổ Thụ & Đàn Hạc Tiên Dưới Trăng',
    symbolism: 'Cây tùng vững chãi cùng chim hạc tiên nghìn năm và quả đào tiên đại diện cho sức khỏe trường thọ, con cháu sum vầy, gia đạo bình yên.',
    fengShuiBenefit: 'Hóa giải hung khí, mang lại sinh khí dồi dào, rất tốt cho nhà có người cao tuổi.',
    suitableRooms: ['Cửa phòng ông bà cha mẹ', 'Cửa phòng khách nhìn ra sân', 'Lối vào gian thờ gia đình'],
    standardPrice1mx2m: 990000,
    standardPrice1m2x2m: 1300000, // Đúng giá 1.3 triệu bộ 1.2m x 2m
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    beadCountApprox: 'Khoảng 50 - 58 sợi kết tranh sắc nét',
    badge: 'Ý Nghĩa Trường Thọ',
  },
  {
    id: 'tranh-thuan-buom-xuoi-gio',
    name: 'Mành Hạt Nhựa Kết Tranh Thuận Buồm Xuôi Gió (Vạn Sự Hanh Thông)',
    theme: 'plastic-art',
    materialType: 'Hạt Nhựa Acrylic Cao Cấp',
    patternName: 'Thuyền Buồm No Gió Lướt Sóng Vàng',
    symbolism: 'Cánh buồm no gió vượt trùng dương mang ngụ ý mọi việc làm ăn buôn bán, kinh doanh đều trôi chảy, gặp nhiều quý nhân phù trợ.',
    fengShuiBenefit: 'Kích hoạt cung Tài Lộc, mang của cải và cơ hội mới vào nhà.',
    suitableRooms: ['Cửa hàng kinh doanh', 'Cửa văn phòng công ty', 'Cửa phòng làm việc tại gia'],
    standardPrice1mx2m: 990000,
    standardPrice1m2x2m: 1300000, // Đúng giá 1.3 triệu bộ 1.2m x 2m
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop',
    beadCountApprox: 'Khoảng 50 - 60 sợi dệt màu tương phản rõ nét',
    badge: 'Hút Tài Lộc Kinh Doanh',
  },
  {
    id: 'tranh-hoa-sen-tinh-tam',
    name: 'Mành Hạt Nhựa Kết Tranh Hoa Sen Tịnh Tâm (Thanh Cao Thoát Tục)',
    theme: 'plastic-art',
    materialType: 'Hạt Nhựa Acrylic Cao Cấp',
    patternName: 'Đầm Sen Nở Rộ & Búp Sen Thanh Khiết',
    symbolism: 'Hoa sen gần bùn mà chẳng hôi tanh mùi bùn, là quốc hoa tượng trưng cho sự thuần khiết, trí tuệ và sự an nhiên tự tại trong tâm hồn.',
    fengShuiBenefit: 'Thanh lọc từ trường xấu, tạo cảm giác thư thái, bình an, xua tan căng thẳng mệt mỏi.',
    suitableRooms: ['Cửa phòng thờ', 'Phòng thiền / phòng trà', 'Cửa phòng ngủ hướng yên tĩnh'],
    standardPrice1mx2m: 990000,
    standardPrice1m2x2m: 1300000,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    beadCountApprox: 'Khoảng 48 - 56 sợi xâu',
    badge: 'An Nhiên Thanh Tịnh',
  },

  // --- MÀNH HẠT GỖ PHONG THỦY KẾT TRANH & CHỮ (GIÁ TỪ 1.2 TRIỆU) ---
  {
    id: 'rem-hat-go-bo-de-phuc-loc-tho',
    name: 'Mành Hạt Gỗ Bồ Đề Kết Chữ Thư Pháp Phúc - Lộc - Thọ (Chuẩn Thước Lỗ Ban)',
    theme: 'wood-fengshui',
    materialType: 'Hạt Gỗ Bồ Đề Tự Nhiên',
    patternName: '3 Chữ Phúc - Lộc - Thọ Thư Pháp Nền Gỗ Vàng Chữ Đỏ',
    symbolism: '3 ước nguyện lớn nhất của đời người: Phúc đức tràn đầy, Tài lộc dồi dào, Thọ khang trường cửu. Cây bồ đề gắn với đạo hạnh và giác ngộ tâm linh.',
    fengShuiBenefit: 'Chắn tầm nhìn trực diện vào bàn thờ tổ tiên, hóa giải cửa đối cửa, giữ trường khí tôn nghiêm và tụ tài tụ lộc.',
    suitableRooms: ['Cửa phòng thờ gia tiên', 'Bàn thờ chung cư / nhà phố', 'Cửa từ đường dòng họ'],
    standardPrice1mx2m: 1200000, // Đúng giá "các mẫu hạt gỗ kết tranh từ 1,2tr"
    standardPrice1m2x2m: 1450000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    beadCountApprox: '48 - 52 sợi, hạt gỗ bồ đề tiện tròn 12mm xâu dây dù chống mục',
    badge: 'Rèm Phòng Thờ Từ 1.2 Triệu',
  },
  {
    id: 'rem-hat-go-dinh-hac-cay-tung',
    name: 'Mành Hạt Gỗ Tự Nhiên Kết Tranh Đỉnh Hạc Cây Tùng Cổ Kính',
    theme: 'wood-fengshui',
    materialType: 'Hạt Gỗ Bồ Đề Tự Nhiên',
    patternName: 'Đôi Chim Hạc Đứng Trên Lưng Rùa Dưới Bóng Cây Tùng',
    symbolism: 'Hình tượng hạc đứng trên lưng rùa biểu đạt sự gắn kết âm dương trời đất, trường tồn cùng tuế nguyệt và sự thanh sạch của gia phong.',
    fengShuiBenefit: 'Bảo vệ gia đạo khỏi tà khí, tăng vượng khí tôn kính cho không gian thờ cúng.',
    suitableRooms: ['Gian thờ từ đường', 'Phòng thờ biệt thự', 'Cửa ngăn không gian tâm linh'],
    standardPrice1mx2m: 1280000, // Từ 1.2tr
    standardPrice1m2x2m: 1550000,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop',
    beadCountApprox: '50 - 55 sợi hạt gỗ bồ đề phủ sơn bóng bảo vệ',
    badge: 'Cổ Kính & Tôn Nghiêm',
  },
  {
    id: 'rem-hat-go-huong-cao-cap-hoa-sen',
    name: 'Mành Hạt Gỗ Hương Cao Cấp Thơm Tự Nhiên Kết Tranh Hoa Sen Chữ Tâm',
    theme: 'wood-fengshui',
    materialType: 'Hạt Gỗ Hương Cao Cấp',
    patternName: 'Bông Sen Nở Rộ Trung Tâm & Chữ Tâm / Chữ Phúc Đỉnh Mành',
    symbolism: 'Gỗ Hương là loại gỗ quý nhóm 1, vân thớ gỗ màu nâu hồng ấm cúng, mùi tinh dầu gỗ hương tự nhiên thơm thoang thoảng giúp xua đuổi côn trùng và tà khí.',
    fengShuiBenefit: 'Dòng sản phẩm cao cấp đỉnh cao cho gia chủ cầu mong bình an, danh vọng và phúc đức lưu truyền.',
    suitableRooms: ['Phòng thờ đại gia đình', 'Biệt thự tân cổ điển', 'Nhà thờ họ bề thế'],
    standardPrice1mx2m: 1550000, // Cao cấp từ 1.2tr trở lên
    standardPrice1m2x2m: 1850000,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    beadCountApprox: 'Hạt gỗ hương chuẩn 12mm chuốt mịn bóng mộc tự nhiên, nặng đầm tay',
    badge: 'Gỗ Hương Quý Thơm Mộc',
  },
];
