export interface CurtainSizeGuide {
  doorType: string;
  recommendedSize: string;
  installStyle: 'Lọt lòng khuôn bao' | 'Phủ bì cửa (đẹp nhất)' | 'Trần kịch sàn';
  unitCalc: string;
  approxPriceRange: string;
  note: string;
}

export interface MaterialDetail {
  part: string;
  material: string;
  origin: string;
  feature: string;
}

export interface CurtainArticle {
  id: string;
  curtainType: 'fabric' | 'rainbow' | 'honeycomb' | 'insect-screen' | 'motorized' | 'bead';
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  primaryImage: string;
  primaryImageCaption: string;
  galleryImages: {
    src: string;
    caption: string;
  }[];
  materialHeadline: string;
  materialDetails: MaterialDetail[];
  sizeGuides: CurtainSizeGuide[];
  measurementTip: string;
  promoHighlights: string[];
  adCopy: {
    heading: string;
    body: string;
    offer: string;
    cta: string;
  };
  priceFrom: number;
  priceUnit: 'mét ngang hoàn thiện' | 'm²' | 'bộ';
  estimatorTypeId: string;
}

export const CURTAIN_ARTICLES: CurtainArticle[] = [
  {
    id: 'bai-viet-rem-vai-2-lop-cao-cap',
    curtainType: 'fabric',
    categoryLabel: 'Rèm Vải Trọn Gói 600k/m',
    badge: 'Đồng Giá 600.000đ/m Ngang Cả Lắp Đặt',
    badgeColor: 'bg-amber-600 text-white',
    title: 'Rèm Vải Chống Nắng Cao Cấp Tuyến Hoa – Đồng Giá 600.000đ / Mét Ngang (Cả Công Thi Công Lắp Đặt)',
    subtitle: 'Trọn gói vải gấm dệt 3 lớp cản sáng 100%, thanh suốt hợp kim mạ vàng / ray âm trần tĩnh âm, độ nhún 2.5m vải và miễn phí 100% công thợ lắp đặt tận nhà.',
    primaryImage: '/assets/aistudio/IMG_5314_ae0205c4.PNG',
    primaryImageCaption: 'Anh Tuyến – Chủ cửa hàng Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa trực tiếp nghiệm thu bàn giao bộ rèm vải chống nắng màu ghi xám trọn gói 600.000đ/m ngang cả công lắp đặt.',
    galleryImages: [
      {
        src: '/assets/aistudio/IMG_5312_c3f3e101.PNG',
        caption: 'Rèm Tuyến Hoa - Đẳng cấp được khẳng định: Bộ rèm vải ghi trầm lắp trang nghiêm cạnh ban thờ gia tiên và sập gụ chiếu cói.',
      },
      {
        src: '/assets/aistudio/IMG_5310_8f861c11.JPG',
        caption: 'Không gian biệt thự hiện đại lắp hệ rèm vải 2 lớp màu kem sữa (Cream Beige) full tường kịch trần sang trọng.',
      },
      {
        src: '/assets/aistudio/IMG_5293_ff6844ca.JPG',
        caption: 'Phòng khách bàn ghế gỗ gụ truyền thống kết hợp rèm vải cản nắng xanh ghi và lớp voan trắng thêu hoa nghệ thuật.',
      },
      {
        src: '/assets/aistudio/IMG_5304_60468f41.JPG',
        caption: 'Rèm vải gấm nâu đồng phối viền thổ cẩm cổ điển lắp hộc âm trần thạch cao có đèn LED hắt ấm cúng.',
      },
      {
        src: '/assets/aistudio/IMG_5306_e08d9303.JPG',
        caption: 'Rèm cửa sổ 2 cánh màu ghi phối cổ vàng đồng hoàng gia và thanh suốt hợp kim mạ vàng (trọn gói 600k/m ngang).',
      },
      {
        src: '/assets/aistudio/IMG_5282_af0ccdef.JPG',
        caption: 'Rèm vải 2 lớp (vải bố ghi xám + voan lụa trắng) lắp âm trần phòng ngủ master hiện đại.',
      },
      {
        src: '/assets/aistudio/IMG_5290_021aafcc.JPG',
        caption: 'Hệ rèm vải phối 2 tông màu xanh cổ vịt và ghi sáng lắp cho Spa dưỡng sinh & thẩm mỹ viện.',
      },
      {
        src: '/assets/aistudio/IMG_5280_3a33f457.JPG',
        caption: 'Rèm vải cản sáng tuyệt đối 100% lắp âm trần phòng ngủ khi kéo kín toàn bộ cửa.',
      },
      {
        src: '/assets/aistudio/IMG_5281_6e8b018d.JPG',
        caption: 'Cận cảnh từng múi sóng rèm định hình suôn thẳng đều tăm tắp từ trần xuống sàn.',
      },
      {
        src: '/assets/aistudio/IMG_5305_f2f0bb33.JPG',
        caption: 'Cận cảnh góc nhìn từ dưới lên sóng rèm gấm nâu đồng phối viền kim tuyến sắc sảo.',
      },
      {
        src: '/assets/aistudio/IMG_5291_d4e47963.JPG',
        caption: 'Rèm vải 1 lớp màu ghi đậm lắp hộc âm trần cho cửa sổ khung nhôm kính lớn.',
      },
    ],
    materialHeadline: 'Chất Liệu Dệt 3 Lớp Cản Nắng & Phụ Kiện Trọn Gói Không Phát Sinh',
    materialDetails: [
      {
        part: 'Lớp Vải Chính Cản Nắng',
        material: 'Vải gấm bố, gấm lụa, gấm kim tuyến dệt 3 lớp nano chống bám bụi, sợi polyester mật độ cao',
        origin: 'Nhập khẩu công nghệ Nhật Bản / Hàn Quốc',
        feature: 'Cản sáng 100%, cản tia cực tím UV 99%, cách nhiệt chống thoát nhiệt điều hòa 40%',
      },
      {
        part: 'Lớp Voan Trang Trí (Tùy chọn 2 lớp)',
        material: 'Voan trắng lụa xước tuyết hoặc voan thêu hoa nổi thủ công',
        origin: 'Hàn Quốc',
        feature: 'Lấy sáng nhẹ êm dịu, tạo không gian lãng mạn, ngăn tầm nhìn từ ngoài vào bên trong',
      },
      {
        part: 'Thanh Ray Âm Trần & Suốt Hợp Kim Mạ Vàng',
        material: 'Suốt hợp kim nhôm mạ vàng đồng / trắng sứ hoặc ray định hình âm trần chịu lực 50kg',
        origin: 'Chính hãng Tuyến Hoa phụ kiện (Đã bao gồm trong giá 600k/m)',
        feature: 'Kéo nhẹ êm ái không gây tiếng rít, đầu chụp hợp kim đúc hoa văn hoàng gia hoặc tối giản',
      },
      {
        part: 'Đai Vén & Công Thợ Lắp Đặt',
        material: 'Đai vải may viền đính tem đỏ chính hãng Rèm Tuyến Hoa + Núm vén hợp kim gắn tường',
        origin: 'Đồng bộ may đo & lắp đặt tận nơi',
        feature: 'Miễn phí 100% công thợ khoan lắp hoàn thiện tại nhà khách hàng',
      },
    ],
    sizeGuides: [
      {
        doorType: 'Cửa Sổ Phòng Ngủ / Phòng Khách (1-2 cánh)',
        recommendedSize: 'Rộng 1.2m - 1.8m x Cao 1.5m - 2.2m',
        installStyle: 'Phủ bì cửa (đẹp nhất)',
        unitCalc: '1.5 - 2.0 mét ngang hoàn thiện × 600.000đ/m (Đã gồm công lắp)',
        approxPriceRange: '900.000đ - 1.200.000đ / bộ trọn gói',
        note: 'Đã bao gồm vải may độ nhún 2.5m, thanh suốt mạ vàng đồng và công thợ lắp đặt.',
      },
      {
        doorType: 'Cửa Ban Công / Phòng Thờ Gia Tiên / Phòng Ngủ Master',
        recommendedSize: 'Rộng 2.0m - 2.8m x Cao 2.4m - 2.8m',
        installStyle: 'Trần kịch sàn',
        unitCalc: '2.0 - 2.8 mét ngang hoàn thiện × 600.000đ/m (1 lớp) hoặc 850.000đ/m (2 lớp)',
        approxPriceRange: '1.200.000đ - 1.680.000đ / bộ trọn gói',
        note: 'Độ dài mép rèm cách mặt sàn đá/gỗ đúng 1.5cm - 2.0cm để không chạm đất bẩn mà vẫn kín gió.',
      },
      {
        doorType: 'Cửa Đại Phòng Khách / Biệt Thự Full Tường',
        recommendedSize: 'Rộng 3.0m - 4.5m x Cao 2.6m - 3.2m',
        installStyle: 'Trần kịch sàn',
        unitCalc: '3.0 - 4.5 mét ngang hoàn thiện (Lắp hộc âm trần thạch cao hoặc suốt đại)',
        approxPriceRange: '1.800.000đ - 2.700.000đ / bộ hoàn thiện',
        note: 'Được là hơi định hình tạo múi sóng rèm suôn thẳng ngay khi bàn giao tại nhà.',
      },
    ],
    measurementTip: 'Tuyến Hoa áp dụng mức giá ưu đãi ĐỒNG GIÁ 600.000Đ / MÉT NGANG HOÀN THIỆN (đã nhân hệ số nhún vải tiêu chuẩn 2.5m vải cho 1m ngang cửa), ĐÃ BAO GỒM thanh suốt, phụ kiện và công thợ thi công lắp đặt trọn gói. Ví dụ cửa ngang 2m chỉ hết đúng 1.200.000đ trọn gói!',
    promoHighlights: [
      'Đồng giá 600.000đ / m ngang ĐÃ BAO GỒM cả thanh phụ kiện & công thi công lắp đặt',
      'Miễn phí 100% khảo sát, mang mẫu vải tận nhà và lắp đặt tại Ứng Hòa & lân cận',
      'Chủ tiệm Anh Tuyến trực tiếp đo đạc và nghiệm thu từng đường kim mũi chỉ',
      'Bảo hành đường may, độ bền màu vải và thanh ray trượt 3 năm tại chỗ',
    ],
    adCopy: {
      heading: 'CHĂN GA GỐI ĐỆM & MÀNH RÈM TUYẾN HOA – RÈM VẢI CAO CẤP TRỌN GÓI CHỈ 600.000Đ / MÉT NGANG CẢ CÔNG LẮP ĐẶT!',
      body: 'Bạn đang tìm mẫu rèm vải chống nắng sang trọng cho phòng khách, phòng ngủ, phòng thờ gia tiên hay Spa dưỡng sinh? Đến ngay Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa (Chợ Cháy, Ứng Hòa)!\n\n✨ ĐỒNG GIÁ TRỌN GÓI: Chỉ 600.000đ / mét ngang hoàn thiện (Đã bao gồm vải gấm cản nắng 100%, độ nhún sóng 2.5m vải, thanh treo hợp kim và công thợ lắp đặt tận nhà).\n✨ ĐA DẠNG MẪU MÃ: Rèm vải âm trần thạch cao hiện đại, rèm gấm nâu đồng phối viền cổ điển, rèm phối cổ vàng đồng, rèm 2 lớp voan thêu hoa nghệ thuật.\n✨ PHỤC VỤ TẬN TÂM: Anh Tuyến trực tiếp mang mẫu tận nơi tư vấn và thi công phục vụ anh chị em mọi miền Tổ quốc!',
      offer: '🔥 CAM KẾT VÀNG: Báo giá trọn gói 600.000đ/m ngang không phát sinh phụ phí – Bảo hành 3 năm tận nhà!',
      cta: '👉 Gọi ngay Anh Tuyến: 0344.727.528 để được mang mẫu vải tận nhà đo đạc và lắp đặt ngay hôm nay!',
    },
    priceFrom: 600000,
    priceUnit: 'mét ngang hoàn thiện',
    estimatorTypeId: 'rem-vai-2-lop',
  },
  {
    id: 'bai-viet-rem-cau-vong-han-quoc',
    curtainType: 'rainbow',
    categoryLabel: 'Rèm Cầu Vồng Hàn Quốc',
    badge: 'Hiện Đại & Tiết Kiệm Không Gian',
    badgeColor: 'bg-indigo-600 text-white',
    title: 'Rèm Cầu Vồng Hàn Quốc Modero: Giải Pháp Hoàn Hảo Cho Cửa Sổ Phòng Ngủ, Phòng Trẻ & Phòng Làm Việc',
    subtitle: 'Thiết kế thông minh 2 lớp so le lấy sáng 0% - 100%, lọt lòng khung bao cửa gọn gàng, không vướng nan inox bảo vệ.',
    primaryImage: '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg',
    primaryImageCaption: 'Công trình thực tế: Bộ rèm cầu vồng Modero màu ghi bạc lắp đặt chuẩn xác bên trong khung cửa sổ inox tại Trầm Lộng, Ứng Hòa. Kéo êm ru, cản sáng 95%.',
    galleryImages: [
      {
        src: '/assets/aistudio/1792619301743_1293093313519991016_1293093313519991016_c3b884b0135e24592fd618ad629e07fd_9004b446.jpg',
        caption: 'Hệ thống rèm cầu vồng lắp dọc hành lang cầu thang và giếng trời tầng 2.',
      },
      {
        src: '/assets/aistudio/1792658171296_1293093313519991016_1293093313519991016_f85acd8d91ec951798f3b410a5744ecc_-_Copy_-_Copy_78dd3953.jpg',
        caption: 'Kiểm tra độ khít của hộp máng rèm cầu vồng với nan bảo vệ cửa sổ.',
      },
    ],
    materialHeadline: 'Chất Liệu Polyester Hàn Quốc Kháng Khuẩn, Chống Bám Bụi',
    materialDetails: [
      {
        part: 'Dải Vải Cản Nắng & Dải Lưới',
        material: '100% sợi tổng hợp Polyethylene cao cấp, dệt đan xen dải lưới voan xuyên sáng',
        origin: 'Nhập khẩu chính hãng Hàn Quốc (Modero / Allplus)',
        feature: 'Chống bám bụi bẩn, không phai màu trước ánh nắng mặt trời, độ cản sáng tùy chọn 85% - 100%',
      },
      {
        part: 'Hộp Máng Rèm & Thanh Đáy',
        material: 'Nhôm hợp kim đúc sơn tĩnh điện bóng mịn chống oxy hóa',
        origin: 'Hàn Quốc đồng bộ',
        feature: 'Bảo vệ cuộn rèm bên trong, chắn bụi, màu sắc sơn đồng bộ với vải rèm (ghi, kem, nâu cà phê)',
      },
      {
        part: 'Bộ Cuộn & Dây Kéo Trợ Lực',
        material: 'Hộp số cuốn trợ lực bánh răng đồng trục, dây kéo dù chịu lực siêu bền',
        origin: 'Phụ kiện Modero cao cấp',
        feature: 'Kéo nhẹ nhàng trơn tru, trẻ em hay người lớn tuổi đều kéo mở dễ dàng không bị kẹt rít',
      },
    ],
    sizeGuides: [
      {
        doorType: 'Cửa Sổ Phòng Học Trẻ Em / Phòng Đọc Sách (1 cánh)',
        recommendedSize: 'Rộng 0.8m - 1.2m x Cao 1.2m - 1.6m',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: '1.0m² - 1.8m² (Tính theo m² = Rộng x Cao)',
        approxPriceRange: '520.000đ - 980.000đ / bộ',
        note: 'Lắp lọt lòng khuôn bao cửa giúp bàn học sát cửa sổ không bị vướng rèm.',
      },
      {
        doorType: 'Cửa Sổ Phòng Ngủ 2 Cánh Có Song Inox Bảo Vệ',
        recommendedSize: 'Rộng 1.2m - 1.8m x Cao 1.4m - 1.8m',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: '1.7m² - 3.2m² (Có thể chia làm 2 bộ độc lập nếu cửa rộng >1.6m)',
        approxPriceRange: '890.000đ - 1.850.000đ / trọn bộ',
        note: 'Thợ Tuyến đo lùi kích thước 5mm mỗi bên để rèm lên xuống êm không cọ vào nan inox.',
      },
      {
        doorType: 'Cửa Sổ Phòng Bếp & Giếng Trời',
        recommendedSize: 'Rộng 0.8m - 1.4m x Cao 1.0m - 1.4m',
        installStyle: 'Phủ bì cửa (đẹp nhất)',
        unitCalc: '1.0m² - 2.0m² (Chọn dòng vải kháng dầu mỡ, lau chùi bằng khăn ẩm)',
        approxPriceRange: '580.000đ - 1.200.000đ / bộ',
        note: 'Dễ dàng vệ sinh lau chùi chỉ với một chiếc khăn ẩm hoặc chổi lông gà.',
      },
    ],
    measurementTip: 'Rèm cầu vồng tính giá theo MÉT VUÔNG (m² = Chiều Rộng x Chiều Cao). Với các ô cửa sổ nhỏ dưới 1m², đơn giá được làm tròn thành 1m² theo quy chuẩn sản xuất khung hộp nhôm.',
    promoHighlights: [
      'Giảm trực tiếp 15% khi lắp đặt từ 3 bộ rèm cầu vồng trở lên',
      'Miễn phí lắp đặt hoàn thiện hộp máng nhôm và bát định vị',
      'Đầy đủ bảng màu hơn 80 mã màu sắc tại nhà cho khách chọn',
      'Bảo hành chính hãng hộp cuốn và dây kéo 2 năm đổi mới',
    ],
    adCopy: {
      heading: 'RÈM CẦU VỒNG HÀN QUỐC MODERO - GỌN GÀNG, ĐẲNG CẤP, CỰC KỲ TIỆN LỢI CHO MỌI CỬA SỔ!',
      body: 'Nếu bạn đang đau đầu vì cửa sổ nhỏ, vướng bàn làm việc hoặc có khung nan inox bảo vệ khó treo rèm vải truyền thống? Hãy chọn ngay RÈM CẦU VỒNG HÀN QUỐC tại Rèm Chăn Đệm Tuyến Hoa!\n\n🌈 Tinh chỉnh ánh sáng thông minh chỉ với 1 thao tác kéo nhẹ.\n🌈 Hộp máng nhôm đúc tĩnh điện gọn gàng, ôm trọn lọt lòng khuôn cửa nhôm Xingfa.\n🌈 Vải dệt sợi tổng hợp kháng khuẩn, chống ẩm mốc, cản nhiệt tốt và lau chùi cực dễ.',
      offer: '🎁 ƯU ĐÃI KHỦNG: Lắp đặt trọn gói Ứng Hòa - Miễn phí vận chuyển và công lắp đặt trong ngày!',
      cta: '👉 Bấm xem bảng giá hoặc gọi ngay 0344 727 528 gặp anh Tuyến để đặt lịch đo tận phòng!',
    },
    priceFrom: 480000,
    priceUnit: 'm²',
    estimatorTypeId: 'rem-cau-vong',
  },
  {
    id: 'bai-viet-rem-to-ong-can-nhiet-dieu-hoa',
    curtainType: 'honeycomb',
    categoryLabel: 'Vách Ngăn & Rèm Tổ Ong',
    badge: 'Cứu Tinh Mùa Hè - Cản Nhiệt 100%',
    badgeColor: 'bg-emerald-700 text-white',
    title: 'Vách Ngăn & Rèm Tổ Ong Cản Nhiệt Điều Hòa: Tiết Kiệm Đến 40% Tiền Điện, Ngăn Phòng Thông Minh',
    subtitle: 'Cấu trúc nếp gấp tổ ong tráng bạc kép cách nhiệt, ngăn hơi lạnh điều hòa thoát ra cầu thang, kéo mở nhẹ nhàng, xếp gọn sát tường.',
    primaryImage: '/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg',
    primaryImageCaption: 'Anh Tuyến nghiệm thu thực tế vách rèm tổ ong màu ghi than chì cản nhiệt điều hòa ngăn phòng khách và cầu thang tại nhà khách hàng huyện Ứng Hòa.',
    galleryImages: [
      {
        src: '/assets/aistudio/1792658171183_1293093313519991016_1293093313519991016_10108ab564c8fb6ade925f6a8e609889_1971346a.jpg',
        caption: 'Tư vấn giải pháp rèm tổ ong kết hợp lưới chống muỗi 2 trong 1 qua điện thoại.',
      },
      {
        src: '/assets/aistudio/1792619301814_1293093313519991016_1293093313519991016_7660cb9abb659911e5fe3cd71a7f60bb_2e6c2394.jpg',
        caption: 'Không gian sống thoáng đãng khi rèm tổ ong được xếp gọn lại sát mép tường.',
      },
    ],
    materialHeadline: 'Cấu Trúc Lục Giác Tráng Bạc Kép Đột Phá Nhiệt Học',
    materialDetails: [
      {
        part: 'Lá Vải Tổ Ong Ép Nhiệt',
        material: 'Vải không dệt (Non-woven fabric) ép định hình lục giác tổ ong 2 lớp',
        origin: 'Hàn Quốc / Nhật Bản',
        feature: 'Chống thấm nước, kháng bụi, bên trong tráng 2 lớp màng nhôm mạ bạc cản 100% bức xạ nhiệt',
      },
      {
        part: 'Khung Nhôm Định Hình',
        material: 'Hợp kim nhôm 6063-T5 dày dặn, sơn tĩnh điện công nghệ Đức',
        origin: 'Đạt chuẩn xuất khẩu',
        feature: 'Cứng vững, chịu va đập mạnh, màu ghi xingfa hoặc trắng sữa hoặc vân gỗ cao cấp',
      },
      {
        part: 'Hệ Dây & Khóa Trượt Xích',
        material: 'Dây cáp bọc nhựa hoặc xích nhựa kỹ thuật POM chịu mài mòn',
        origin: 'Nhập khẩu cao cấp',
        feature: 'Hệ xích không ray dưới (bằng phẳng mặt sàn), người già và trẻ nhỏ đi lại an toàn không lo vấp ngã',
      },
    ],
    sizeGuides: [
      {
        doorType: 'Vách Ngăn Điều Hòa Cầu Thang / Ngăn Bếp (1 cánh)',
        recommendedSize: 'Rộng 1.2m - 2.2m x Cao 2.2m - 2.8m',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: '2.6m² - 6.0m² (Kéo xếp gọn về 1 bên chỉ dày khoảng 12 - 15cm)',
        approxPriceRange: '2.900.000đ - 6.800.000đ / trọn bộ vách',
        note: 'Bật điều hòa phòng khách không lo hơi lạnh tràn lên tầng trên hay thoát xuống bếp.',
      },
      {
        doorType: 'Vách Ngăn Thông Phòng Khách Lớn (Hệ 2 cánh đối đầu)',
        recommendedSize: 'Rộng 2.5m - 4.5m x Cao 2.4m - 3.0m',
        installStyle: 'Trần kịch sàn',
        unitCalc: '6.0m² - 13.5m² (Kéo 2 cánh vào giữa hút nam châm từ tính kín khít)',
        approxPriceRange: '6.900.000đ - 15.500.000đ / bộ',
        note: 'Khi mở ra tạo thành không gian mở liền mạch, thoáng đãng như chưa từng có vách ngăn.',
      },
      {
        doorType: 'Rèm Tổ Ong Cửa Sổ Hướng Tây Nắng Gắt',
        recommendedSize: 'Rộng 1.0m - 1.8m x Cao 1.2m - 1.8m',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: '1.2m² - 3.2m² (Hệ kéo lên xuống hoặc kéo ngang tiện lợi)',
        approxPriceRange: '1.380.000đ - 3.600.000đ / bộ',
        note: 'Nhiệt độ phòng giảm ngay từ 4°C - 7°C so với khi không kéo rèm.',
      },
    ],
    measurementTip: 'Vách rèm tổ ong tính theo MÉT VUÔNG (m² = Rộng x Cao). Tuyến Hoa hỗ trợ thiết kế hệ ray phẳng không ray dưới đối với cửa đi lại nhiều, đảm bảo robot hút bụi chạy qua êm ru.',
    promoHighlights: [
      'Tiết kiệm đến 40% hóa đơn tiền điện điều hòa hàng tháng',
      'Được đo đạc và tư vấn vị trí lắp đặt giữ nhiệt tối ưu nhất tại nhà',
      'Thanh ray nhôm chuẩn định hình, đóng mở khít khao bằng dải nam châm',
      'Bảo hành 3 năm hệ khung nhôm và vải tổ ong',
    ],
    adCopy: {
      heading: 'CỨU TINH TIỀN ĐIỆN MÙA HÈ - VÁCH NGĂN RÈM TỔ ONG CẢN NHIỆT ĐIỀU HÒA TUYẾN HOA!',
      body: 'Mùa hè bật điều hòa phòng khách nhưng hơi lạnh cứ bốc lên cầu thang làm tiền điện tăng vọt? Bạn muốn ngăn phòng nhưng sợ xây tường bí bách, làm cửa nhôm kính nặng nề?\n\n❄️ VÁCH RÈM TỔ ONG CẢN NHIỆT TUYẾN HOA chính là giải pháp số 1 hiện nay!\n❄️ Cấu trúc tổ ong chứa lớp đệm không khí và màng bạc kép, cản 100% hơi lạnh thất thoát.\n❄️ Khi không dùng, chỉ cần đẩy nhẹ là xếp gọn gàng sát mép tường, trả lại 100% không gian thoáng rộng.\n❄️ Thiết kế không ray sàn, cực kỳ an toàn cho trẻ nhỏ và người lớn tuổi di chuyển.',
      offer: '🌟 TẶNG NGAY GÓI KHẢO SÁT & ĐO ĐẠC TẬN NHÀ MIỄN PHÍ TẠI HUYỆN ỨNG HÒA VÀ KHU VỰC LÂN CẬN!',
      cta: '👉 Gọi ngay Anh Tuyến: 0344 727 528 để xem mẫu vách tổ ong tận nơi!',
    },
    priceFrom: 1150000,
    priceUnit: 'm²',
    estimatorTypeId: 'rem-to-ong-luoi-muoi',
  },
  {
    id: 'bai-viet-cua-luoi-chong-muoi-xep-ly',
    curtainType: 'insect-screen',
    categoryLabel: 'Cửa Lưới Chống Côn Trùng',
    badge: 'Bảo Vệ Sức Khỏe Gia Đình',
    badgeColor: 'bg-teal-700 text-white',
    title: 'Cửa Lưới Chống Muỗi Xếp Ly: Ngăn 100% Muỗi & Côn Trùng, Đón Gió Mát Lành Tự Nhiên',
    subtitle: 'Lưới sợi thủy tinh phủ nhựa PP dẻo dai chống tia UV, ngăn muỗi dĩn và kiến ba khoang tuyệt đối mà nhà cửa luôn thông thoáng.',
    primaryImage: '/assets/aistudio/1792658171183_1293093313519991016_1293093313519991016_10108ab564c8fb6ade925f6a8e609889_1971346a.jpg',
    primaryImageCaption: 'Anh Tuyến trực tiếp tiếp nhận cuộc gọi tư vấn khảo sát cửa lưới chống muỗi xếp ly bên khung cửa sổ tại nhà khách hàng Ứng Hòa.',
    galleryImages: [
      {
        src: '/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg',
        caption: 'Hệ cửa lưới có thể tích hợp cùng rèm tổ ong 2 trong 1 cực kỳ hiện đại.',
      },
      {
        src: '/assets/aistudio/1792658171296_1293093313519991016_1293093313519991016_f85acd8d91ec951798f3b410a5744ecc_-_Copy_-_Copy_78dd3953.jpg',
        caption: 'Đo lọt lòng khuôn cửa nhôm để cửa lưới thẩm mỹ nhất.',
      },
    ],
    materialHeadline: 'Lưới Sợi Thủy Tinh Siêu Bền Kháng Xé, Kháng Hóa Chất',
    materialDetails: [
      {
        part: 'Mắt Lưới Chống Muỗi',
        material: 'Sợi thủy tinh dệt ô mắt lưới 1.2mm x 1.2mm, bọc nhựa Polypropylene bảo vệ',
        origin: 'Chính hãng Nhật Bản / Đài Loan',
        feature: 'Ngăn chặn hoàn toàn ruồi, muỗi, dĩn, kiến ba khoang nhưng gió mát và ánh sáng vẫn lưu thông tự nhiên',
      },
      {
        part: 'Khung Nhôm & Ray Định Hình',
        material: 'Khung nhôm định hình chuẩn Xingfa 3.0cm - 4.0cm, sơn tĩnh điện ngoài trời',
        origin: 'Việt Nam xuất khẩu',
        feature: 'Không cong vênh rỉ sét theo năm tháng, độ bền trên 10 năm',
      },
      {
        part: 'Dây Dẫn Hướng & Bánh Xe',
        material: 'Dây cáp chịu lực chuyên dụng cùng bánh xe đồng trục',
        origin: 'Phụ kiện cửa lưới cao cấp',
        feature: 'Kéo mở êm ru, lưới xếp nếp hình nan quạt gọn gàng không bị nhăn rách',
      },
    ],
    sizeGuides: [
      {
        doorType: 'Cửa Sổ Mở Hất / Mở Quay (1 cánh hoặc 2 cánh)',
        recommendedSize: 'Rộng 0.6m - 1.4m x Cao 1.0m - 1.6m',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: '0.8m² - 2.2m² (Lắp lọt trong khuôn cửa kính, không ảnh hưởng đóng mở cửa kính)',
        approxPriceRange: '650.000đ - 1.650.000đ / bộ',
        note: 'Mở cửa sổ cả đêm đón gió trời mát rượi mà không sợ một con muỗi nào bay vào phòng.',
      },
      {
        doorType: 'Cửa Đi Ban Công / Cửa Thông Phòng (Hệ xếp xích không ray)',
        recommendedSize: 'Rộng 0.9m - 1.8m x Cao 2.0m - 2.4m',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: '1.8m² - 4.3m² (Ray dưới dán nẹp nhôm siêu mỏng 3mm không cản trở di chuyển)',
        approxPriceRange: '1.800.000đ - 3.800.000đ / bộ',
        note: 'Người già đẩy xe hoặc quét nhà không bị vướng mắc chân.',
      },
      {
        doorType: 'Cửa Đi Chính / Cửa Lùa 2 Cánh Phòng Khách',
        recommendedSize: 'Rộng 2.0m - 3.6m x Cao 2.2m - 2.8m',
        installStyle: 'Phủ bì cửa (đẹp nhất)',
        unitCalc: '4.4m² - 10m² (Kéo 2 cánh xếp gọn về 2 bên tường)',
        approxPriceRange: '4.500.000đ - 9.500.000đ / bộ hoàn thiện',
        note: 'Khung nhôm sơn đồng màu với cửa gỗ hoặc cửa nhôm kính của gia đình.',
      },
    ],
    measurementTip: 'Cửa lưới chống muỗi tính theo MÉT VUÔNG (m² = Rộng x Cao). Có thể kết hợp 2 trong 1: Một bên cửa lưới chống muỗi - một bên vách rèm tổ ong cản nhiệt.',
    promoHighlights: [
      'Giải pháp phòng bệnh sốt xuất huyết an toàn cho trẻ nhỏ không dùng hóa chất',
      'Đón gió tự nhiên, giảm bật điều hòa vào những ngày mát trời',
      'Thợ Tuyến lắp đặt nhanh gọn, vệ sinh sạch sẽ sau khi hoàn thành',
      'Bảo hành lưới và khung nhôm 3 năm tại Ứng Hòa',
    ],
    adCopy: {
      heading: 'BẢO VỆ CON YÊU KHỎI MUỖI & KIẾN BA KHOANG VỚI CỬA LƯỚI XẾP LY CAO CẤP TUYẾN HOA!',
      body: 'Mùa mưa ẩm là lúc muỗi và kiến ba khoang sinh sôi, đe dọa sức khỏe của trẻ nhỏ và người già. Thay vì dùng thuốc xịt độc hại hay nhốt mình trong phòng kín bật điều hòa quanh năm:\n\n🌿 HÃY LẮP NGAY CỬA LƯỚI CHỐNG MUỖI XẾP LY TUYẾN HOA!\n🌿 Mắt lưới sợi thủy tinh siêu nhỏ 1.2mm, ngăn 100% côn trùng mà vẫn đón trọn gió trời mát mẻ.\n🌿 Khung nhôm cao cấp, xếp gọn gàng sát mép cửa như tàng hình khi không sử dụng.\n🌿 Thợ Tuyến trực tiếp mang mẫu nhôm và lưới đến tận nhà đo đạc miễn phí!',
      offer: '🎁 KHUYẾN MÃI ĐẶC BIỆT: Giảm ngay 10% khi lắp đặt trọn gói hệ thống cửa sổ và cửa đi cho nhà dân tại Ứng Hòa!',
      cta: '👉 Bấm gọi ngay Anh Tuyến: 0344 727 528 để được báo giá ưu đãi nhất!',
    },
    priceFrom: 650000,
    priceUnit: 'm²',
    estimatorTypeId: 'rem-to-ong-luoi-muoi',
  },
  {
    id: 'bai-viet-rem-tu-dong-thong-minh',
    curtainType: 'motorized',
    categoryLabel: 'Rèm Thông Minh Tự Động',
    badge: 'Công Nghệ 4.0 - Đẳng Cấp Biệt Thự',
    badgeColor: 'bg-purple-700 text-white',
    title: 'Rèm Tự Động Thông Minh Điều Khiển Remote & Smartphone: 1 Chạm Nâng Tầm Không Gian Sống',
    subtitle: 'Tích hợp động cơ điện êm ái dưới 30dB, điều khiển từ xa qua remote hoặc ứng dụng điện thoại, tự động đóng mở theo kịch bản thông minh.',
    primaryImage: '/assets/aistudio/1792619301814_1293093313519991016_1293093313519991016_7660cb9abb659911e5fe3cd71a7f60bb_2e6c2394.jpg',
    primaryImageCaption: 'Hệ thống rèm vải tự động thông minh được anh Tuyến lắp đặt và cài đặt đồng bộ remote điều khiển 1 chạm tại phòng khách thông tầng biệt thự Ứng Hòa.',
    galleryImages: [
      {
        src: '/assets/aistudio/1792619301680_1293093313519991016_1293093313519991016_e1e1340b0c22b60107b156d2a1eeaa43_4fe9d601.jpg',
        caption: 'Thanh ray điện thông minh truyền động dây curoa lõi thép kéo rèm vải 2 lớp mượt mà.',
      },
      {
        src: '/assets/aistudio/1792658171296_1293093313519991016_1293093313519991016_f85acd8d91ec951798f3b410a5744ecc_-_Copy_-_Copy_78dd3953.jpg',
        caption: 'Khảo sát nguồn điện và vị trí giấu động cơ âm trần thẩm mỹ.',
      },
    ],
    materialHeadline: 'Động Cơ Rèm Tiêu Chuẩn Châu Âu, Vận Hành Siêu Êm',
    materialDetails: [
      {
        part: 'Động Cơ Rèm (Motor)',
        material: 'Động cơ điện không chổi than Dooya / Tuya Zigbee/Wifi thế hệ mới',
        origin: 'Chính hãng bảo hành 5 năm',
        feature: 'Vận hành êm ái < 30dB (không tiếng ồn), kéo tải rèm nặng tới 60kg, tự dừng khi gặp vật cản',
      },
      {
        part: 'Ray Điện & Dây Curoa',
        material: 'Ray nhôm định hình dập rãnh chống ồn, dây curoa lõi thép gia cường',
        origin: 'Đồng bộ cao cấp',
        feature: 'Tuổi thọ trên 15 năm, không lo giãn dây hay đứt gãy, bi lăn chịu tải cao',
      },
      {
        part: 'Phương Thức Điều Khiển',
        material: 'Remote cầm tay sóng RF xuyên tường + Ứng dụng điện thoại tiếng Việt + Giọng nói',
        origin: 'Smart Home tích hợp',
        feature: 'Kéo nhẹ tay rèm tự chạy, hẹn giờ sáng tự mở đón bình minh, tối tự đóng rèm riêng tư',
      },
    ],
    sizeGuides: [
      {
        doorType: 'Cửa Kính Phòng Khách Lớn / Cửa Ban Công Tầng 2',
        recommendedSize: 'Rộng 2.5m - 4.5m x Cao 2.6m - 3.2m',
        installStyle: 'Trần kịch sàn',
        unitCalc: 'Bộ động cơ rèm + Ray điện theo mét + Vải rèm 2 lớp',
        approxPriceRange: '3.800.000đ - 6.500.000đ / trọn bộ motor & ray',
        note: 'Chỉ cần một nút bấm trên remote cầm tay, cả 2 lớp rèm tự động rẽ sang 2 bên nhẹ nhàng.',
      },
      {
        doorType: 'Cửa Đại Biệt Thự & Giếng Trời Thông Tầng Cao Trên 4 Mét',
        recommendedSize: 'Rộng 3.5m - 6.0m x Cao 4.0m - 6.5m',
        installStyle: 'Trần kịch sàn',
        unitCalc: 'Động cơ công suất lớn 75W chịu tải cao 80kg',
        approxPriceRange: '6.500.000đ - 12.000.000đ / trọn bộ',
        note: 'Cửa sổ trên cao khó với tay kéo bằng dây thông thường thì rèm tự động là bắt buộc.',
      },
      {
        doorType: 'Rèm Cầu Vồng Tự Động Động Cơ Cuốn',
        recommendedSize: 'Rộng 1.2m - 2.5m x Cao 1.5m - 3.0m',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: 'Động cơ cuốn ống phi 38mm / 50mm giấu kín trong hộp máng',
        approxPriceRange: '2.400.000đ - 4.200.000đ / bộ',
        note: 'Không có dây kéo rườm rà, tuyệt đối an toàn cho trẻ nhỏ chạy nhảy.',
      },
    ],
    measurementTip: 'Tuyến Hoa nhận thi công và câu nguồn điện âm trần thẩm mỹ cho rèm tự động. Với nhà chưa chừa ổ cắm điện, có sẵn giải pháp ĐỘNG CƠ DÙNG PIN SẠC LITHIUM dùng 6 tháng mới phải sạc 1 lần!',
    promoHighlights: [
      'Điều khiển 1 chạm qua Remote hoặc Điện thoại thông minh mọi lúc mọi nơi',
      'Chế độ chạm nhẹ rèm tự động đóng mở thông minh (Touch & Go)',
      'Hỗ trợ cài đặt kịch bản rèm tự đóng khi ra khỏi nhà',
      'Bảo hành đổi mới động cơ 5 năm chính hãng tại Ứng Hòa',
    ],
    adCopy: {
      heading: 'CHÀO MỪNG ĐẾN VỚI NGÔI NHÀ THÔNG MINH CÙNG RÈM TỰ ĐỘNG TUYẾN HOA!',
      body: 'Trải nghiệm đỉnh cao của tiện nghi hiện đại: Chỉ với một nút bấm trên tay, toàn bộ hệ thống rèm cửa từ từ khép lại trong sự êm ái tuyệt đối!\n\n🚀 ĐỘNG CƠ RÈM THÔNG MINH TUYẾN HOA mang đến:\n🚀 Tự động đóng mở bằng remote cầm tay, ứng dụng smartphone hoặc giọng nói tiếng Việt.\n🚀 Động cơ siêu êm dưới 30dB, tải rèm nặng tới 60kg, bền bỉ hơn 15 năm.\n🚀 Lắp đặt hoàn thiện, giấu dây điện âm trần tinh tế, có sẵn tùy chọn động cơ pin sạc không cần kéo dây điện!',
      offer: '💎 TẶNG BỘ ĐIỀU KHIỂN TỪ XA REMOTE ĐA KÊNH TRỊ GIÁ 450.000đ khi lắp đặt hệ thống rèm tự động cho biệt thự!',
      cta: '👉 Liên hệ ngay thợ Tuyến 0344 727 528 để nhận video trải nghiệm và lịch hẹn khảo sát miễn phí!',
    },
    priceFrom: 2400000,
    priceUnit: 'bộ',
    estimatorTypeId: 'rem-tu-dong',
  },
  {
    id: 'bai-viet-manh-hat-nhua-hat-go-ket-tranh',
    curtainType: 'bead',
    categoryLabel: 'Mành Hạt Nhựa & Hạt Gỗ Kết Tranh',
    badge: 'Chuẩn Thước Lỗ Ban · Từ 600k',
    badgeColor: 'bg-amber-600 text-white',
    title: 'Mành Hạt Nhựa Các Hình Dạng & Mành Hạt Gỗ Kết Tranh Phong Thủy: Báo Giá & Kích Cỡ Chuẩn Lỗ Ban',
    subtitle: 'Tổng hợp các kiểu hạt giọt lệ pha lê, hạt tròn, quả trám kim cương và tranh Đôi Chim Công, Tùng Hạc, Hoa Sen, Phúc Lộc Thọ. Báo giá: 1m×2m giá 600k, 1.2m×2m giá 1.3 triệu, hạt gỗ từ 1.2 triệu.',
    primaryImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    primaryImageCaption: 'Mẫu mành hạt nhựa giọt lệ pha lê và hạt kết tranh phong thủy xâu tay tỉ mỉ, rủ sóng đều tăm tắp, khúc xạ ánh sáng lấp lánh cho cửa thông phòng và phòng thờ.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
        caption: 'Mành hạt nhựa kết tranh Đôi Chim Công Phú Quý khổ 1.2m x 2.0m giá 1.3 triệu.',
      },
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
        caption: 'Mành hạt gỗ Bồ Đề tự nhiên kết chữ Phúc - Lộc - Thọ phòng thờ giá từ 1.2 triệu.',
      },
      {
        src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop',
        caption: 'Mành hạt gỗ Hương thơm tự nhiên xua đuổi tà khí, chuẩn cung đỏ Lỗ Ban.',
      },
    ],
    materialHeadline: 'Chất Liệu Hạt Nhựa Acrylic Nguyên Sinh & Gỗ Tự Nhiên Tuyển Chọn',
    materialDetails: [
      {
        part: 'Hạt Nhựa Nhiều Hình Dạng',
        material: 'Nhựa Acrylic trong suốt / đục cao cấp tạo hình hạt giọt lệ, hạt tròn, quả trám kim cương, hoa cúc',
        origin: 'Hàng tuyển chọn loại 1',
        feature: 'Không ố vàng, bóng bẩy như pha lê, cọ rửa nước xà phòng thoải mái không sợ phai màu',
      },
      {
        part: 'Hạt Gỗ Phong Thủy',
        material: '100% Gỗ Bồ Đề tự nhiên nhẹ lành hoặc Gỗ Hương thơm mộc quý hiếm tiện tròn 12mm',
        origin: 'Làng nghề truyền thống Việt Nam',
        feature: 'Tẩm sấy chống mối mọt cong vênh, sơn bóng bảo vệ, tỏa hương thơm dịu nhẹ xua tà khí',
      },
      {
        part: 'Dây Xâu Chuỗi',
        material: 'Cước lụa bọc thép hoặc dây dù bện đôi chịu lực cao',
        origin: 'Chuyên dụng rèm phong thủy',
        feature: 'Chịu tải trọng lớn, tuyệt đối không bị đứt dão, trẻ em chạy qua lại thoải mái',
      },
      {
        part: 'Thanh Suốt Treo & Phụ Kiện',
        material: 'Thanh nhôm đúc tĩnh điện hoặc thanh gỗ tự nhiên có móc định vị sẵn',
        origin: 'Đồng bộ cao cấp',
        feature: 'Bắt lên khung bao cửa hoặc trần nhà nhanh chóng trong 10 phút',
      },
    ],
    sizeGuides: [
      {
        doorType: 'Rèm Hạt Nhựa Thường (Cửa buồng / Cửa phòng ngủ nhỏ)',
        recommendedSize: 'Rộng 1.0m × Cao 2.0m (Kích thước cửa tiêu chuẩn)',
        installStyle: 'Lọt lòng khuôn bao',
        unitCalc: '1 bộ hoàn thiện đầy đủ thanh treo và phụ kiện',
        approxPriceRange: '600.000 đ / trọn bộ (Đúng giá niêm yết)',
        note: 'Tùy chọn kiểu hạt: Hạt giọt lệ pha lê, hạt tròn, quả trám kim cương hoặc hoa cúc.',
      },
      {
        doorType: 'Rèm Hạt Nhựa Kết Tranh Nghệ Thuật (Cửa thông phòng rộng)',
        recommendedSize: 'Rộng 1.2m × Cao 2.0m (Cung đỏ Lỗ Ban đẹp nhất)',
        installStyle: 'Phủ bì cửa (đẹp nhất)',
        unitCalc: '1 bộ kết tranh Đôi Chim Công, Tùng Hạc, Hoa Sen, Thuận Buồm',
        approxPriceRange: '1.300.000 đ / trọn bộ (Đúng giá 1.3 triệu)',
        note: 'Hơn 50 - 60 sợi xâu tạo nên bức tranh phong thủy rực rỡ và sống động.',
      },
      {
        doorType: 'Mành Hạt Gỗ Phong Thủy Gian Thờ (Chữ Phúc Lộc Thọ / Đỉnh Hạc)',
        recommendedSize: 'Rộng 1.0m - 1.2m × Cao 2.0m',
        installStyle: 'Phủ bì cửa (đẹp nhất)',
        unitCalc: 'Gỗ Bồ Đề từ 1.200.000đ - 1.450.000đ / Gỗ Hương từ 1.550.000đ - 1.850.000đ',
        approxPriceRange: 'Từ 1.200.000 đ / bộ (Gỗ Bồ Đề) đến 1.850.000 đ (Gỗ Hương)',
        note: 'Hóa giải cửa đối cửa, che chắn bàn thờ trang nghiêm, tụ vượng khí tài lộc.',
      },
    ],
    measurementTip: 'Mành hạt phong thủy nên treo phủ bì rộng hơn mép cửa từ 5cm - 10cm để che kín mép cửa và giữ trường khí tụ tài. Chiều cao rèm cách mặt đất khoảng 5cm - 10cm. Thợ Tuyến hỗ trợ mang thước Lỗ Ban đo đạc chuẩn cung Đỏ tận nhà tại Ứng Hòa!',
    promoHighlights: [
      'Đúng giá niêm yết: Rèm hạt nhựa thường 1mx2m chỉ 600.000đ',
      'Đúng giá rèm kết tranh 1.2mx2m chuẩn 1.300.000đ',
      'Đúng giá rèm hạt gỗ phòng thờ kết tranh chỉ từ 1.200.000đ',
      'Miễn phí 100% công lắp đặt và mang mẫu tận nhà toàn huyện Ứng Hòa',
    ],
    adCopy: {
      heading: 'BỘ SƯU TẬP MÀNH HẠT NHỰA & HẠT GỖ KẾT TRANH PHONG THỦY TUYẾN HOA!',
      body: 'Bạn muốn tìm giải pháp vừa ngăn phòng kín đáo, vừa lung linh sang trọng lại mang lại may mắn tài lộc theo phong thủy chuẩn Thước Lỗ Ban?\n\n✨ Rèm Hạt Nhựa Đa Dạng Hình Dạng: Hạt giọt lệ pha lê, hạt tròn cườm, hạt quả trám kim cương, hạt hoa cúc. Giá trọn bộ 1.0m × 2.0m CHỈ 600.000đ!\n✨ Rèm Hạt Nhựa Kết Tranh Nghệ Thuật: Đôi Chim Công Phú Quý, Tùng Hạc Đào Tiên, Thuận Buồm Xuôi Gió. Bộ 1.2m × 2.0m CHỈ 1.300.000đ!\n✨ Rèm Hạt Gỗ Phong Thủy Phòng Thờ: Gỗ Bồ Đề, Gỗ Hương tự nhiên kết chữ Phúc Lộc Thọ, tranh Sen Hạc. Giá CHỈ TỪ 1.200.000đ!',
      offer: '🎁 ĐẶC BIỆT: Thợ Tuyến trực tiếp mang thước Lỗ Ban và mẫu hạt nhựa, hạt gỗ đến tận nhà đo đạc miễn phí tại Ứng Hòa!',
      cta: '👉 Gọi ngay Hotline: 0344 727 528 để chọn mẫu tranh ưng ý nhất!',
    },
    priceFrom: 600000,
    priceUnit: 'bộ',
    estimatorTypeId: 'rem-manh-hat',
  },
];
