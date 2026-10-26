export type NewProductCategory =
  | 'all'
  | 'man-khung-1tr'
  | 'tuong-ngoc-tuyen'
  | 'cong-trinh-video';

export interface ProductVisualNote {
  label: string;
  detail: string;
}

export interface MarketPriceTier {
  sizeOrOption: string;
  marketPrice: string;
  storePrice: string;
  note: string;
}

export interface AnnotatedProductPost {
  id: string;
  code: string;
  category: Exclude<NewProductCategory, 'all'>;
  categoryName: string;
  title: string;
  shortTitle: string;
  priceDisplay: string;
  marketPriceRange: string;
  marketPriceNote: string;
  marketPriceTiers: MarketPriceTier[];
  numericPrice: number;
  unitLabel: string;
  standardDimensions: string;
  mediaType: 'image' | 'video';
  imageUrl: string;
  videoUrl?: string;
  secondaryImages?: string[];
  highlightTag: string;
  summary: string;
  visualAnnotations: ProductVisualNote[];
  specs: {
    label: string;
    value: string;
  }[];
  articleParagraphs: string[];
  facebookPostCopy: string;
}

export interface MarketPriceSummaryRow {
  id: string;
  productGroup: string;
  specification: string;
  marketPrice: string;
  storePrice: string;
  warrantyAndService: string;
}

export interface DeduplicatedImageGroup {
  id: string;
  groupTitle: string;
  keptImage: string;
  removedCount: number;
  removedExamples: string[];
  reason: string;
}

export const DEDUPLICATION_SUMMARY = {
  totalUploaded: 66,
  totalRemovedDuplicates: 18,
  totalUniquePublished: 48,
  groups: [
    {
      id: 'dup-lo-dem-moi-16-anh',
      groupTitle: 'Lô 16 Ảnh Thực Tế Đệm Kim Cương Mặt Trần, TH VICUNA & Đệm Gấp 2 Chần Múi Dày 18–20cm',
      keptImage: '1792918016482_4373635352308930219_4373635352308930219_4312b35fb8fb2294dae9814c0fd63b76_efca6d23.jpg',
      removedCount: 0,
      removedExamples: [
        'Phân nhóm thông minh 16 ảnh thành 06 bài đăng chuyên sâu theo từng dòng đệm (Chần Múi Lông Vũ, Kim Cương Mặt Trần, TH VICUNA 5 Sao, Chần Múi Kẻ Caro, Gấm Đỏ Phòng Cưới & Phôi Đệm Cao Su Tổng Hợp Tại Xưởng)',
        'Gộp các góc chụp nghiêng, chụp cận bản lề và chụp chồng kiện tại kho vào mục "Góc chụp thực tế khác" của từng bài để trang web gọn gàng, không bị lặp bài đăng',
      ],
      reason: 'Giữ trọn 16 góc chụp thực tế sắc nét nhưng quy hoạch gọn thành 6 bài đăng chuẩn báo giá, giúp khách xem dễ so sánh từng dòng đệm.',
    },
    {
      id: 'dup-showroom-2tang',
      groupTitle: 'Tòa Nhà 2 Tầng Showroom Tuyến Hoa & Ảnh Phố Trống Gốc',
      keptImage: 'Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
      removedCount: 3,
      removedExamples: [
        'Gemini_Generated_Image_v2fukev2fukev2fu (1).png (Trùng 100% mã MD5)',
        'Gemini_Generated_Image_v2fukev2fukev2fu (2).png (Trùng 100% mã MD5)',
        '20261025_061025.jpg (Ảnh nền đường phố trống trước khi ghép tòa nhà)',
      ],
      reason: 'Giữ lại 01 bức ảnh tòa nhà 2 tầng Showroom Tuyến Hoa sắc nét nhất, loại bỏ 2 bản sao trùng hệt và 1 ảnh phố trống.',
    },
    {
      id: 'dup-chieu-may',
      groupTitle: 'Bộ Ảnh Chiếu Mây Điều Hòa Lót Lưới 3D & Ngải Cứu Tự Nhiên',
      keptImage: 'chieu_may_dieu_hoa_tuyen_hoa.png',
      removedCount: 9,
      removedExamples: [
        '4 ảnh chụp trùng góc chiếu mây trải trên giường bọc nệm kem + túi xách xanh',
        '3 ảnh chụp lặp góc cận cảnh mặt dưới lưới tổ ong 3D & tem mác',
        '2 ảnh chụp lặp góc xếp gấp chiếu mây trên bề mặt mây đan',
      ],
      reason: 'Tổng hợp thành 01 bảng ảnh chú thích chi tiết mặt mây tự nhiên, mặt lưới 3D và bảng giá theo 3 kích thước giường.',
    },
    {
      id: 'dup-dem-everhome',
      groupTitle: 'Bộ Ảnh Đệm Lò Xo Túi & Đệm Cao Su Thiên Nhiên Everhome Tại Kho',
      keptImage: 'dem_lo_xo_everhome_tuyen_hoa.png',
      removedCount: 4,
      removedExamples: [
        '2 ảnh chụp trùng góc lô Đệm Lò Xo Túi Everhome hút chân không cuộn tròn',
        '2 ảnh chụp trùng góc kiện Đệm Cao Su 100% Thiên Nhiên Everhome bọc nilon',
      ],
      reason: 'Chọn lọc các góc chụp rõ tem mác chính hãng Everhome nhất để viết 2 bài đăng chuyên biệt cho Đệm Lò Xo và Đệm Cao Su.',
    },
    {
      id: 'dup-rem-bat',
      groupTitle: 'Ảnh Rèm Vải Phòng Ngủ Master & Bạt Tự Cuốn Kẻ Sọc Xanh Trắng',
      keptImage: 'IMG_5282_af0ccdef.JPG',
      removedCount: 2,
      removedExamples: [
        'IMG_5282 (1).JPG (Trùng 100% mã MD5 với IMG_5282.JPG)',
        'Ảnh trùng góc chụp Bạt Tự Cuốn kẻ sọc xanh trắng hiên nhà',
      ],
      reason: 'Loại bỏ hoàn toàn các file ảnh nhân bản trùng mã MD5 trên toàn bộ danh mục sản phẩm.',
    },
  ] as DeduplicatedImageGroup[],
};

export const MARKET_PRICE_SUMMARY_TABLE: MarketPriceSummaryRow[] = [
  {
    id: 'mp-dem-gap2-chan-mui',
    productGroup: '1. Đệm Gấp 2 Chần Múi Lông Vũ & Caro (Dày 18–20cm)',
    specification: 'Thành vải bố cao cấp, mặt chần múi 3D (1m6 / 1m8 / 2m2)',
    marketPrice: '2,35Tr – 3,15Tr',
    storePrice: '1,75Tr – 2,15Tr',
    warrantyAndService: 'Êm như đệm khách sạn 5 sao, bảo hành 5 năm',
  },
  {
    id: 'mp-dem-kim-cuong-vicuna',
    productGroup: '2. Đệm Kim Cương Mặt Trần & TH VICUNA Luxury 5 Sao',
    specification: 'Bông tinh khiết kháng khuẩn & Luxury Sleep (1m6 / 1m8 / 2m2)',
    marketPrice: '2,45Tr – 3,35Tr',
    storePrice: '1,85Tr – 2,35Tr',
    warrantyAndService: 'Nguyên tem chính hãng, bảo hành 5–7 năm',
  },
  {
    id: 'mp-man-khung-18x20',
    productGroup: '3. Màn Khung Inox (1,8m × 2,0m)',
    specification: 'Giường đôi 1,8m × 2,0m (Đủ 4 màu)',
    marketPrice: '1.300.000đ / bộ',
    storePrice: '1.000.000đ / bộ',
    warrantyAndService: 'Bao lắp tận giường, bảo hành 3 năm',
  },
  {
    id: 'mp-chieu-may-dieu-hoa',
    productGroup: '4. Chiếu Mây Điều Hòa Lót Lưới 3D',
    specification: 'Kèm 2 vỏ gối mây & túi xách (1m6 / 1m8 / 2m2)',
    marketPrice: '650k – 850k / bộ',
    storePrice: '450k – 550k / bộ',
    warrantyAndService: 'Mây tự nhiên & sợi ngải cứu thoáng khí',
  },
  {
    id: 'mp-dem-lo-xo-everhome',
    productGroup: '5. Đệm Lò Xo Túi & Gold 3 Viền Everhome',
    specification: 'Lò xo túi độc lập & Gold 3 viền (1m6 / 1m8 / 2m2)',
    marketPrice: '3,8Tr – 5,95Tr',
    storePrice: '2,85Tr – 4,45Tr',
    warrantyAndService: 'Chính hãng Everhome, bảo hành 7–10 năm',
  },
  {
    id: 'mp-dem-cao-su-everhome',
    productGroup: '6. Nệm Cao Su 100% Thiên Nhiên Everhome',
    specification: 'Cao su nguyên khối kháng khuẩn (1m6 / 1m8 × 10cm)',
    marketPrice: '6,5Tr – 7,8Tr',
    storePrice: '4,85Tr – 5,45Tr',
    warrantyAndService: 'Tặng bộ gối cao su non, bảo hành 10 năm',
  },
  {
    id: 'mp-bat-tu-cuon-nang-mua',
    productGroup: '7. Bạt Tự Cuốn & Bạt Lưới Ban Công',
    specification: 'Kẻ sọc, hoa văn lá trúc, lưới đen xuyên sáng',
    marketPrice: '300k – 380k / m²',
    storePrice: '220k – 280k / m²',
    warrantyAndService: 'Trọn gói ống nhôm, lò xo tự cuốn & công lắp',
  },
  {
    id: 'mp-rem-to-ong-cua-luoi',
    productGroup: '8. Vách Rèm Tổ Ong Cửa Vòm & Cửa Lưới',
    specification: 'Ngăn lạnh điều hòa, cửa vòm cong & chống muỗi',
    marketPrice: '750k – 1.150k / m²',
    storePrice: '550k – 750k / m²',
    warrantyAndService: 'Gia công trực tiếp tại Xưởng Tuyến Hoa',
  },
  {
    id: 'mp-rem-cuon-van-phong',
    productGroup: '9. Rèm Cuốn Chống Nắng Văn Phòng 100%',
    specification: 'Màu ghi xám, xanh dương, kem vàng (Cả lắp)',
    marketPrice: '380k – 450k / m²',
    storePrice: '280k – 320k / m²',
    warrantyAndService: 'Cản nắng 100%, chống tia UV, bền 10 năm',
  },
  {
    id: 'mp-rem-vai-1lop',
    productGroup: '10. Rèm Vải Cản Nắng (1 Lớp & 2 Lớp)',
    specification: 'Rèm gấm cản nắng 100% & Rèm 2 lớp âm trần',
    marketPrice: '750k – 1.150k / m',
    storePrice: '600k – 850k / m',
    warrantyAndService: 'Trọn gói thanh treo & công lắp đặt',
  },
  {
    id: 'mp-rem-cau-vong',
    productGroup: '11. Rèm Cầu Vồng Hàn Quốc',
    specification: 'Lắp gọn lọt lòng cửa sổ',
    marketPrice: '650.000đ / m²',
    storePrice: '520.000đ / m²',
    warrantyAndService: 'Hộp máng nhôm tĩnh điện bền 10 năm',
  },
  {
    id: 'mp-dem-bong-ep',
    productGroup: '12. Đệm Bông Ép Gấp 3 & Đệm Gấm Đỏ Phòng Cưới',
    specification: 'Kim Cương / Vikosan / Sông Hồng / Everon / DER LAMOR',
    marketPrice: '1,65Tr – 3,15Tr',
    storePrice: '1,35Tr – 2,45Tr',
    warrantyAndService: 'Chính hãng 100%, bảo hành 5 năm',
  },
  {
    id: 'mp-bat-mai-xep',
    productGroup: '13. Mái Bạt Xếp & Mái Hiên Tay Khuỷu',
    specification: 'Bạt Hàn Quốc 3 lớp + Khung thép / Tay khuỷu',
    marketPrice: '420.000đ / m²',
    storePrice: '350.000đ / m²',
    warrantyAndService: 'Trọn gói cả khung sắt & công lắp',
  },
  {
    id: 'mp-tuong-ngoc-tuyen',
    productGroup: '14. Tương Ngọc Tuyến Thủ Công',
    specification: 'Chai 500ml & Bình quà biếu 750ml',
    marketPrice: '80k – 150k',
    storePrice: '65k – 120k',
    warrantyAndService: '100% đậu tương & nếp quê ủ chum sành',
  },
];

export interface CanopyPricingInput {
  modelCode: string;
  setsCount: number;
  includeWindowCurtainMeters?: number;
  tuongBottle500mlCount?: number;
  tuongGiftJarCount?: number;
}

export interface CanopyPricingResult {
  canopyUnitPrice: number;
  canopySubtotal: number;
  curtainUnitPrice: number;
  curtainSubtotal: number;
  tuongSubtotal: number;
  discountAmount: number;
  finalTotal: number;
  freeInstallation: boolean;
  summaryLine: string;
}

export const CANOPY_STANDARD_PRICE = 1000000; // 1.000.000đ / 1 bộ rộng 1,8m dài 2,0m
export const CURTAIN_STANDARD_PRICE_PER_M = 600000; // 600.000đ / 1m ngang cả lắp
export const TUONG_500ML_PRICE = 65000; // 65.000đ / chai thủy tinh 500ml
export const TUONG_GIFT_JAR_PRICE = 120000; // 120.000đ / bình lục giác quà biếu 750ml

export function calculateCanopyOrderTotal(input: CanopyPricingInput): CanopyPricingResult {
  const sets = Math.max(0, Math.floor(input.setsCount || 0));
  const curtainMeters = Math.max(0, Number(input.includeWindowCurtainMeters || 0));
  const bottles500 = Math.max(0, Math.floor(input.tuongBottle500mlCount || 0));
  const giftJars = Math.max(0, Math.floor(input.tuongGiftJarCount || 0));

  const canopySubtotal = sets * CANOPY_STANDARD_PRICE;
  const curtainSubtotal = Math.round(curtainMeters * CURTAIN_STANDARD_PRICE_PER_M);
  const tuongSubtotal = bottles500 * TUONG_500ML_PRICE + giftJars * TUONG_GIFT_JAR_PRICE;

  // Giảm 50.000đ/bộ nếu lắp từ 2 bộ màn khung trở lên
  const discountAmount = sets >= 2 ? sets * 50000 : 0;
  const finalTotal = Math.max(0, canopySubtotal + curtainSubtotal + tuongSubtotal - discountAmount);

  const parts: string[] = [];
  if (sets > 0) {
    parts.push(`${sets} bộ Màn khung 1,8m×2,0m (${input.modelCode})`);
  }
  if (curtainMeters > 0) {
    parts.push(`${curtainMeters}m Rèm cửa cản nắng`);
  }
  if (bottles500 > 0) {
    parts.push(`${bottles500} chai Tương Ngọc Tuyến 500ml`);
  }
  if (giftJars > 0) {
    parts.push(`${giftJars} bình Tương Ngọc Tuyến Lục Giác`);
  }

  return {
    canopyUnitPrice: CANOPY_STANDARD_PRICE,
    canopySubtotal,
    curtainUnitPrice: CURTAIN_STANDARD_PRICE_PER_M,
    curtainSubtotal,
    tuongSubtotal,
    discountAmount,
    finalTotal,
    freeInstallation: sets >= 1 || curtainMeters >= 1,
    summaryLine: parts.length > 0 ? parts.join(' + ') : 'Chưa chọn sản phẩm',
  };
}

export const ANNOTATED_PRODUCT_POSTS: AnnotatedProductPost[] = [
  // ===========================================================================
  // 0A. BỘ SƯU TẬP 16 ẢNH ĐỆM MỚI CẬP NHẬT (CHẦN MÚI LÔNG VŨ, KIM CƯƠNG, TH VICUNA, CARO, GẤM ĐỎ & XƯỞNG PHÔI ĐỆM)
  // ===========================================================================
  {
    id: 'dem-gap-2-chan-mui-long-vu-tuyen-hoa-dlv01',
    code: 'DLV-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Đệm Cao Su Non & Bông Ép Gấp 2 Chần Múi Lông Vũ Thành Vải Bố Cao Cấp (Dày 18cm – 20cm)',
    shortTitle: 'Đệm Gấp 2 Chần Múi Lông Vũ Dày 18–20cm',
    priceDisplay: '1.850.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 2.500.000đ – 3.150.000đ / tấm',
    marketPriceNote: 'Dòng đệm gấp 2 cao cấp vừa về tại Showroom Tuyến Hoa: Lõi cao su tổng hợp kết hợp bông ép kháng khuẩn dày 18–20cm, mặt trên chần múi nổi 3D thêu họa tiết lông vũ & lá bạc, thành đệm bọc vải bố Canvas sang trọng.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Cỡ giường 1,6m × 2,0m × Dày 18cm (Gấp 2 chần múi nổi)',
        marketPrice: '2.500.000đ / tấm',
        storePrice: '1.850.000đ / tấm',
        note: 'Tặng kèm bộ ga gối lụa Tencel đồng bộ',
      },
      {
        sizeOrOption: 'Cỡ giường đôi 1,8m × 2,0m × Dày 18cm–20cm (Bán chạy số 1)',
        marketPrice: '2.850.000đ / tấm',
        storePrice: '2.050.000đ / tấm',
        note: 'Nằm êm ái nâng đỡ cột sống – Không xẹp lún',
      },
      {
        sizeOrOption: 'Cỡ đại 2,0m × 2,2m × Dày 20cm (Phòng ngủ Master / Phòng cưới)',
        marketPrice: '3.150.000đ / tấm',
        storePrice: '2.350.000đ / tấm',
        note: 'Xe bán tải Tuyến Hoa giao tận giường miễn phí',
      },
    ],
    numericPrice: 1850000,
    unitLabel: '1 tấm đệm gấp 2 chần múi lông vũ (Bảo hành 5 năm)',
    standardDimensions: 'Đủ cỡ: 1,6m × 2,0m | 1,8m × 2,0m | 2,0m × 2,2m (Độ dày 18cm – 20cm)',
    mediaType: 'image',
    imageUrl:
      '/assets/aistudio/1792918016482_4373635352308930219_4373635352308930219_4312b35fb8fb2294dae9814c0fd63b76_efca6d23.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016457_4373635352308930219_4373635352308930219_ce5968c3bf0facffcac3c3337b6368f8_6a935b43.jpg',
      '/assets/aistudio/1792918016506_4373635352308930219_4373635352308930219_64e0bdcea0b4a6a81dd49838bee4f92b_9aa612e6.jpg',
      '/assets/aistudio/1792918016531_4373635352308930219_4373635352308930219_923776db7491fe49943cc0401d79b4a6_02f36a9c.jpg',
    ],
    highlightTag: 'Mẫu Mới 2026 · Dày 18–20cm Chần Múi 3D',
    summary:
      'Bộ 4 góc chụp thực tế dòng Đệm Gấp 2 Chần Múi Lông Vũ & Lá Bạc cao cấp tại xưởng Tuyến Hoa: Thiết kế gập đôi linh hoạt nhưng khi trải phẳng liền mạch như đệm lò xo nguyên tấm, bề mặt vải gấm dệt kim chần bông dày dặn, thành đệm bọc vải bố màu kem ghi chống bám bẩn.',
    visualAnnotations: [
      {
        label: 'Bề mặt chần múi 3D thêu họa tiết Lông Vũ & Lá Bạc tinh xảo',
        detail:
          'Các ô múi chần sâu tạo rãnh thoáng khí đối lưu, nâng đỡ êm ái vùng vai gáy và thắt lưng, nằm mùa hè thoáng mát, mùa đông ấm áp.',
      },
      {
        label: 'Thành đệm cao 18cm–20cm bọc vải bố Canvas kèm viền bo xương cá',
        detail:
          'Thành đệm đứng phom vuông vức như đệm khách sạn 5 sao; đường bo viền to bản khâu máy công nghiệp 2 kim chống bung chỉ suốt 10 năm.',
      },
      {
        label: 'Bản lề gập 2 thông minh – Dễ dàng vận chuyển qua cầu thang hẹp',
        detail:
          'Khắc phục hoàn toàn nhược điểm cồng kềnh của đệm lò xo nguyên tấm: có thể gập chữ A để vệ sinh hoặc dựng gọn sát tường khi chưa sử dụng.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DLV-TH-01 (Đệm Gấp 2 Chần Múi Lông Vũ Tuyến Hoa)' },
      { label: 'Giá thị trường', value: '2.500.000đ – 3.150.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '1.850.000đ (1m6×2m) | 2.050.000đ (1m8×2m) | 2.350.000đ (2m×2m2)' },
      { label: 'Độ dày tiêu chuẩn', value: '18cm – 20cm (Phom đệm dày sang trọng chuẩn giường hiện đại)' },
      { label: 'Bảo hành & Vận chuyển', value: 'Bảo hành 5 năm không xẹp lún · Giao tận giường miễn phí' },
    ],
    articleParagraphs: [
      'Dòng Đệm Gấp 2 Chần Múi Lông Vũ (Mã DLV-TH-01) là lựa chọn hoàn hảo cho các gia đình yêu thích vẻ sang trọng, bề thế của đệm dày 18cm–20cm nhưng vẫn muốn sự gọn nhẹ, dễ di chuyển qua cầu thang của thiết kế gập đôi.',
      'Toàn bộ 4 bức ảnh thực tế tại xưởng cho thấy độ hoàn thiện sắc nét từng đường kim mũi chỉ: mặt trên là vải gấm dệt kim trắng kem thêu họa tiết lông vũ thanh thoát, chần lớp mút Memory Foam êm ái; phần thành xung quanh bọc vải bố Canvas màu ghi kem hiện đại, chống sờn rách và cực kỳ sạch sẽ.'
    ],
    facebookPostCopy:
      '✨ [SIÊU PHẨM MỚI VỀ] ĐỆM GẤP 2 CHẦN MÚI LÔNG VŨ THÀNH VẢI BỐ DÀY 18–20CM – ĐẸP NHƯ ĐỆM KHÁCH SẠN 5 SAO! ✨\n' +
      '--------------------------------------------\n' +
      '🔥 Bác nào thích nằm đệm dày 18–20cm nhìn sang trọng như đệm lò xo nguyên tấm nhưng lại ngại bê vác qua cầu thang hẹp thì chốt ngay mẫu Đệm Gấp 2 Chần Múi Lông Vũ này tại Showroom Tuyến Hoa nhé!\n' +
      '✅ Mặt trên: Vải gấm dệt kim chần múi nổi 3D thêu họa tiết Lông Vũ & Lá Bạc cực kỳ êm lưng, thoáng khí.\n' +
      '✅ Thành đệm: Bọc vải bố Canvas màu kem ghi sang trọng, bo viền xương cá siêu bền, không lo xẹp góc.\n' +
      '✅ Lõi đệm: Phôi cao su tổng hợp & bông ép nhiệt tỷ trọng cao – Nằm êm mà không bị võng lưng!\n' +
      '💰 GIÁ TẠI KHO TUYẾN HOA (Rẻ hơn thị trường 650k – 800k/tấm):\n' +
      '   • Cỡ 1,6m × 2,0m × 18cm: Chỉ 1.850.000đ (Giá TT: 2.500.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m × 18–20cm: Chỉ 2.050.000đ (Giá TT: 2.850.000đ)\n' +
      '   • Cỡ 2,0m × 2,2m × 20cm: Chỉ 2.350.000đ (Giá TT: 3.150.000đ)\n' +
      '🎁 Bảo hành chính hãng 5 năm – Miễn phí xe bán tải chở tận nhà!\n' +
      '📞 Gọi/Zalo chốt đơn ngay: 0344.727.528 (Showroom Tuyến Hoa – Chợ Cháy / Chợ Ngăm)',
  },
  {
    id: 'dem-bong-tinh-khiet-kim-cuong-mat-tran-dkc01',
    code: 'DKC-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Đệm Bông Tinh Khiết Mặt Trần Kim Cương & Kim Cương Plaza Chính Hãng (Bảo Hành 5 Năm)',
    shortTitle: 'Đệm Kim Cương Mặt Trần Chính Hãng',
    priceDisplay: '1.850.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 2.450.000đ – 3.100.000đ / tấm',
    marketPriceNote: 'Đệm Bông Tinh Khiết Mặt Trần thương hiệu Kim Cương & Kim Cương Plaza Hoàng Gia chính hãng 100%, nguyên tem phiếu bảo hành 5 năm và bảng giá niêm yết từ nhà máy.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Giường 1,6m × 2,0m (Đệm Kim Cương Bông Tinh Khiết Mặt Trần)',
        marketPrice: '2.450.000đ / tấm',
        storePrice: '1.850.000đ / tấm',
        note: 'Bông Polyester kháng khuẩn ép nhiệt công nghệ Hàn Quốc',
      },
      {
        sizeOrOption: 'Giường đôi 1,8m × 2,0m (Đệm Kim Cương / Kim Cương Plaza Mặt Trần)',
        marketPrice: '2.750.000đ / tấm',
        storePrice: '2.050.000đ / tấm',
        note: 'Mặt trần bông êm ái, gập 3 gọn gàng có túi khóa kéo',
      },
      {
        sizeOrOption: 'Giường đại 2,0m × 2,2m (Bản Hoàng Gia Mặt Trần Cao Cấp)',
        marketPrice: '3.100.000đ / tấm',
        storePrice: '2.350.000đ / tấm',
        note: 'Bảo hành chính hãng 5 năm – Giao tận phòng ngủ',
      },
    ],
    numericPrice: 1850000,
    unitLabel: '1 tấm Đệm Kim Cương Mặt Trần chính hãng',
    standardDimensions: 'Đủ kích thước: 1,5m×1,9m | 1,6m×2,0m | 1,8m×2,0m | 2,0m×2,2m (Độ dày 9cm / 14cm / 18cm)',
    mediaType: 'image',
    imageUrl:
      '/assets/aistudio/1792918003089_4373635352308930219_4373635352308930219_a5ccc3d45dfc907903e18cbbbb8e9365_bf882307.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016556_4373635352308930219_4373635352308930219_e5e9f00e0ae5608b681c11af93f12660_7e65653b.jpg',
      '/assets/aistudio/1792918003163_4373635352308930219_4373635352308930219_3f68d7dd8f736b30aab8ab95a3d71907_285e6b75.jpg',
    ],
    highlightTag: 'Chính Hãng Kim Cương · Bảo Hành 5 Năm',
    summary:
      'Bộ 3 ảnh chụp thực tế lô Đệm Bông Tinh Khiết Mặt Trần Kim Cương & Kim Cương Plaza Hoàng Gia tại kho Tuyến Hoa: Đầy đủ 4 tông màu gấm xám đá, gấm kem vân mây và họa tiết hình học hiện đại, đi kèm phiếu bảo hành 5 năm chính hãng.',
    visualAnnotations: [
      {
        label: 'Tem chính hãng "Đệm Bông Tinh Khiết Mặt Trần KIM CƯƠNG" & Phiếu bảo hành 5 năm',
        detail:
          'Mỗi tấm đệm đều có tem xanh vàng in nổi thương hiệu Kim Cương / Kim Cương Plaza kèm bảng thông số chất liệu 100% Airy Polyester kháng khuẩn.',
      },
      {
        label: 'Lớp áo gấm mặt trần (Quilted Top) êm ái hơn đệm bông ép thường',
        detail:
          'Bề mặt vải gấm dệt kim được chần thêm một lớp bông mịn tạo độ êm dịu ngay khi đặt lưng, không gây cứng rát lưng cho người lớn tuổi.',
      },
      {
        label: '4 gam màu sang trọng: Xám Đá, Ghi Bạc, Kem Hoàng Gia & Xám Hình Học',
        detail:
          'Tông màu trung tính, sạch sẽ, dễ phối với mọi màu ga trải giường và nội thất phòng ngủ hiện đại.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DKC-TH-01 (Đệm Bông Tinh Khiết Mặt Trần Kim Cương)' },
      { label: 'Thương hiệu', value: 'Đệm Kim Cương & Kim Cương Plaza Hoàng Gia Chính Hãng' },
      { label: 'Giá thị trường', value: '2.450.000đ – 3.100.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '1.850.000đ (1m6×2m) | 2.050.000đ (1m8×2m) | 2.350.000đ (2m×2m2)' },
      { label: 'Chế độ bảo hành', value: 'Bảo hành chính hãng 5 năm – Đổi mới nếu lỗi nhà sản xuất' },
    ],
    articleParagraphs: [
      'Khác với các dòng đệm bông ép vỏ trơn thông thường, Đệm Bông Tinh Khiết Mặt Trần Kim Cương & Kim Cương Plaza (Mã DKC-TH-01) được nâng cấp lớp áo vải gấm chần bông (mặt trần) dày dặn, vừa giữ được độ phẳng chuẩn y khoa bảo vệ cột sống, vừa mang lại cảm giác êm ái ngay khi nằm.',
      'Tại Showroom Tuyến Hoa, toàn bộ đệm Kim Cương đều nhập trực tiếp từ nhà máy với đầy đủ tem nhãn, phiếu bảo hành 5 năm và mức chiết khấu tận gốc giúp bà con tiết kiệm từ 600.000đ – 750.000đ mỗi tấm.'
    ],
    facebookPostCopy:
      '💎 ĐỆM BÔNG TINH KHIẾT MẶT TRẦN KIM CƯƠNG & KIM CƯƠNG PLAZA CHÍNH HÃNG – BẢO HÀNH 5 NĂM! 💎\n' +
      '--------------------------------------------\n' +
      '📸 Hình ảnh chụp thật 100% tại kho Chăn Ga Gối Đệm Tuyến Hoa: Đủ 4 màu Gấm Xám Đá, Ghi Bạc, Kem Vân Mây & Họa Tiết Hình Học cực sang!\n' +
      '✅ Lõi bông Polyester tinh khiết ép nhiệt công nghệ cao: Phẳng lưng, thoáng khí, không xẹp lún, cực tốt cho người đau mỏi lưng & trẻ nhỏ.\n' +
      '✅ Bề mặt chần bông (Mặt Trần) êm ái, đường chỉ chần sắc nét, đóng túi khóa kéo nguyên đai nguyên kiện.\n' +
      '💰 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA:\n' +
      '   • Cỡ 1,6m × 2,0m: 1.850.000đ / tấm (Giá TT: 2.450.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m: 2.050.000đ / tấm (Giá TT: 2.750.000đ)\n' +
      '   • Cỡ 2,0m × 2,2m: 2.350.000đ / tấm (Giá TT: 3.100.000đ)\n' +
      '🚛 Miễn phí giao đệm tận nhà khu vực Chợ Cháy, Chợ Ngăm, Ứng Hòa & lân cận!\n' +
      '📞 Hotline/Zalo đặt hàng: 0344.727.528 (Tuyến Hoa)',
  },
  {
    id: 'dem-th-vicuna-luxury-sleep-5-sao-dvc01',
    code: 'DVC-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Đệm Cao Cấp TH VICUNA Luxury Sleep Chuẩn 5 Sao – Bọc Góc Da Thêu Kim Cương Sang Trọng',
    shortTitle: 'Đệm TH VICUNA Luxury Sleep 5 Sao',
    priceDisplay: '2.150.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 2.850.000đ – 3.550.000đ / tấm',
    marketPriceNote: 'Dòng đệm thương hiệu TH VICUNA Luxury Sleep 5 sao cao cấp nguyên đai nguyên kiện tại kho Tuyến Hoa: Góc đệm bọc da thêu nổi logo, mặt gấm dệt nổi 3D siêu êm.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Giường 1,6m × 2,0m (Đệm TH VICUNA Luxury Sleep 5 Sao)',
        marketPrice: '2.850.000đ / tấm',
        storePrice: '2.150.000đ / tấm',
        note: 'Bọc góc da cao cấp chống trầy xước 4 góc đệm',
      },
      {
        sizeOrOption: 'Giường đôi 1,8m × 2,0m (Kích thước chuẩn phòng cưới sang trọng)',
        marketPrice: '3.150.000đ / tấm',
        storePrice: '2.350.000đ / tấm',
        note: 'Nằm êm tĩnh lặng, nâng đỡ cột sống chuẩn 5 sao',
      },
      {
        sizeOrOption: 'Giường đại 2,0m × 2,2m (Bản Luxury dày dặn cho phòng lớn)',
        marketPrice: '3.550.000đ / tấm',
        storePrice: '2.650.000đ / tấm',
        note: 'Tặng kèm ga chống thấm hoặc bộ vỏ gối cao cấp',
      },
    ],
    numericPrice: 2150000,
    unitLabel: '1 tấm Đệm TH VICUNA Luxury Sleep 5 Sao',
    standardDimensions: 'Đủ cỡ: 1,6m × 2,0m | 1,8m × 2,0m | 2,0m × 2,2m (Độ dày 18cm – 20cm)',
    mediaType: 'image',
    imageUrl:
      '/assets/aistudio/1792918016629_4373635352308930219_4373635352308930219_d5df01664878568ea8e6066bf3bdb431_97fe4b70.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016605_4373635352308930219_4373635352308930219_ff42bd0c92e3d13ea3f0b5801bac59b4_4b51f748.jpg',
      '/assets/aistudio/1792918016580_4373635352308930219_4373635352308930219_3fd82c5b2fa089ea2e68a07151974250_668f1bab.jpg',
    ],
    highlightTag: 'Luxury Sleep 5 Sao · Bọc Góc Da Cao Cấp',
    summary:
      'Bộ 3 ảnh chụp thực tế dòng Đệm TH VICUNA Luxury Sleep 5 Sao vừa cập bến kho Tuyến Hoa: Nổi bật với tem xanh ngọc – vàng kim 5 sao, 4 góc đệm được gia cố bằng ốp da đen thêu họa tiết quả trám kim cương, mặt đệm gấm trắng chần bông siêu đàn hồi.',
    visualAnnotations: [
      {
        label: 'Nhãn hiệu "TH VICUNA – Luxury Sleep" 5 Sao chính hãng',
        detail:
          'Thiết kế tem nhãn sang trọng màu xanh lục bảo phối vàng kim, cam kết tiêu chuẩn chất lượng giấc ngủ khách sạn 5 sao.',
      },
      {
        label: 'Ốp bảo vệ 4 góc đệm bằng da thêu quả trám tinh tế',
        detail:
          'Giúp 4 góc đệm luôn vuông vức, chống sờn rách khi di chuyển hoặc thay ga giường, tạo điểm nhấn đẳng cấp.',
      },
      {
        label: 'Mặt vải gấm Tencel dệt nổi thoáng khí & kháng khuẩn',
        detail:
          'Thấm hút mồ hôi nhanh, bề mặt mềm mượt như lụa, an toàn tuyệt đối cho làn da nhạy cảm của em bé.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DVC-TH-01 (Đệm TH VICUNA Luxury Sleep 5 Sao)' },
      { label: 'Giá thị trường', value: '2.850.000đ – 3.550.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '2.150.000đ (1m6×2m) | 2.350.000đ (1m8×2m) | 2.650.000đ (2m×2m2)' },
      { label: 'Thiết kế đặc biệt', value: 'Ốp da 4 góc thêu kim cương + Mặt chần bông Luxury êm sâu' },
      { label: 'Bảo hành chính hãng', value: 'Bảo hành 7 năm – Miễn phí vận chuyển tận nhà' },
    ],
    articleParagraphs: [
      'Đệm TH VICUNA Luxury Sleep (Mã DVC-TH-01) là dòng đệm phân khúc cao cấp được nhiều gia đình chọn mua cho phòng ngủ chính và phòng cưới nhờ ngoại hình sang trọng vượt trội: từ tem góc vàng kim, ốp da thêu quả trám ở 4 góc cho đến lớp vải gấm trắng ngọc trai chần nổi.',
      'Hàng luôn có sẵn số lượng lớn nguyên bọc nilon hút ẩm tại kho Tuyến Hoa để quý khách đến nằm thử trực tiếp và chọn kích thước chuẩn cho chiếc giường của gia đình.'
    ],
    facebookPostCopy:
      '👑 ĐỆM TH VICUNA LUXURY SLEEP 5 SAO – SANG TRỌNG ĐẲNG CẤP CHO PHÒNG NGỦ HIỆN ĐẠI! 👑\n' +
      '--------------------------------------------\n' +
      '✨ Nhìn cận cảnh 4 góc đệm bọc da thêu quả trám và mặt gấm trắng chần nổi của dòng Đệm TH VICUNA Luxury Sleep là thấy ngay độ xịn sò chuẩn khách sạn 5 sao!\n' +
      '✅ Độ đàn hồi êm ái, nâng đỡ trọn vẹn đường cong cơ thể, xoay trở mình hoàn toàn êm ru không gây tiếng động.\n' +
      '✅ Áo đệm vải gấm cao cấp thoáng khí 4 mùa, nguyên đai nguyên kiện từ nhà máy.\n' +
      '💰 BẢNG GIÁ TẬN GỐC TẠI SHOWROOM TUYẾN HOA:\n' +
      '   • Cỡ 1,6m × 2,0m: 2.150.000đ / tấm (Giá TT: 2.850.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m: 2.350.000đ / tấm (Giá TT: 3.150.000đ)\n' +
      '   • Cỡ 2,0m × 2,2m: 2.650.000đ / tấm (Giá TT: 3.550.000đ)\n' +
      '🚛 Giao đệm tận giường miễn phí – Kiểm tra đúng tem TH VICUNA 5 sao mới thanh toán!\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528 (Showroom Tuyến Hoa)',
  },
  {
    id: 'dem-gap-2-chan-mui-ke-caro-xam-ghi-dcr01',
    code: 'DCR-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Đệm Gấp 2 Chần Múi Kẻ Caro Thành Xám Ghi & Kem Sáng Cỡ Lớn (1,8m × 2,0m × Dày 18cm)',
    shortTitle: 'Đệm Gấp 2 Chần Múi Kẻ Caro Dày 18cm',
    priceDisplay: '1.750.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 2.350.000đ – 2.850.000đ / tấm',
    marketPriceNote: 'Mẫu đệm gấp 2 chần múi vuông kẻ Caro hiện đại, độ dày chuẩn 18cm (ghi rõ thông số 18×2×18 trên kiện phôi tại xưởng), có 2 tùy chọn thành đệm màu Xám Ghi đậm và Kem Sáng.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Giường 1,6m × 2,0m × Dày 18cm (Múi kẻ Caro thành Xám / Kem)',
        marketPrice: '2.350.000đ / tấm',
        storePrice: '1.750.000đ / tấm',
        note: 'Thiết kế múi vuông khỏe khoắn, sạch sẽ',
      },
      {
        sizeOrOption: 'Giường đôi 1,8m × 2,0m × Dày 18cm (Thông số chuẩn 18×2×18)',
        marketPrice: '2.600.000đ / tấm',
        storePrice: '1.950.000đ / tấm',
        note: 'Sẵn hàng tại kho cả bản thành Xám Đậm & Kem Sáng',
      },
      {
        sizeOrOption: 'Giường đại 2,0m × 2,2m × Dày 18cm',
        marketPrice: '2.850.000đ / tấm',
        storePrice: '2.250.000đ / tấm',
        note: 'Bảo hành 5 năm – Giao tận nơi miễn phí',
      },
    ],
    numericPrice: 1750000,
    unitLabel: '1 tấm Đệm Gấp 2 Chần Múi Kẻ Caro dày 18cm',
    standardDimensions: '1,6m × 2,0m × 18cm | 1,8m × 2,0m × 18cm | 2,0m × 2,2m × 18cm',
    mediaType: 'image',
    imageUrl:
      '/assets/aistudio/1792918016653_4373635352308930219_4373635352308930219_4e5893d4d7b1a42ce14f5c79a80e3b74_5615ca60.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016678_4373635352308930219_4373635352308930219_e02b93233d85d3ba3faf920984a28150_e939a0e0.jpg',
    ],
    highlightTag: 'Chần Múi Vuông Caro · Dày Chuẩn 18cm',
    summary:
      'Bộ đôi ảnh thực tế dòng Đệm Gấp 2 Chần Múi Kẻ Caro dày 18cm tại xưởng Tuyến Hoa: Mặt trên chia ô vuông chần múi sâu kết hợp họa tiết caro thanh lịch, khách hàng có thể chọn bản thành đệm vải bố màu Xám Đậm sạch sẽ hoặc màu Kem Sáng nhã nhặn.',
    visualAnnotations: [
      {
        label: 'Hệ thống ô chần múi vuông Caro phân bổ lực đồng đều',
        detail:
          'Các đường rãnh chần vuông vức giữ lớp bông và mút mặt trên cố định tuyệt đối, không bị xô lệch sau nhiều năm sử dụng.',
      },
      {
        label: 'Hai phiên bản màu thành đệm: Xám Ghi Đậm & Kem Sáng',
        detail:
          'Thành đệm Xám Ghi cực kỳ sạch khi nhà có trẻ nhỏ; thành đệm Kem Sáng lại hợp với giường gỗ sồi hoặc phòng ngủ tông sáng.',
      },
      {
        label: 'Độ dày thực tế 18cm (Thông số xưởng 18×2×18)',
        detail:
          'Đặt lên giường không cần dùng thêm chiếu hay topper phụ, độ cao vừa tầm ngồi lên xuống thoải mái.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DCR-TH-01 (Đệm Gấp 2 Chần Múi Kẻ Caro Dày 18cm)' },
      { label: 'Màu sắc thành đệm', value: 'Xám Ghi Đậm (Charcoal) & Kem Sáng (Warm Beige)' },
      { label: 'Giá thị trường', value: '2.350.000đ – 2.850.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '1.750.000đ (1m6×2m) | 1.950.000đ (1m8×2m) | 2.250.000đ (2m×2m2)' },
      { label: 'Bảo hành', value: 'Bảo hành 5 năm chính hãng tại Showroom Tuyến Hoa' },
    ],
    articleParagraphs: [
      'Bên cạnh mẫu chần múi lông vũ, Xưởng & Showroom Tuyến Hoa còn sản xuất và phân phối dòng Đệm Gấp 2 Chần Múi Kẻ Caro (Mã DCR-TH-01) với thiết kế ô vuông khỏe khoắn, hiện đại, độ dày chuẩn 18cm.',
      'Sản phẩm có sẵn cả hai tông màu thành đệm là Xám Ghi Đậm và Kem Sáng để quý khách dễ dàng lựa chọn theo màu sơn tường và màu giường gỗ của gia đình.'
    ],
    facebookPostCopy:
      '🛋️ ĐỆM GẤP 2 CHẦN MÚI KẺ CARO DÀY 18CM – ĐỦ 2 MÀU THÀNH XÁM GHI & KEM SÁNG! 🛋️\n' +
      '--------------------------------------------\n' +
      '✅ Thiết kế mặt chần múi vuông kẻ Caro hiện đại, độ dày thực tế đủ 18cm cực kỳ tôn dáng giường.\n' +
      '✅ Có sẵn 2 bản màu thành vải bố: Màu Xám Ghi sạch khỏe khoắn & Màu Kem Sáng sang trọng.\n' +
      '💰 GIÁ XƯỞNG TUYẾN HOA:\n' +
      '   • Cỡ 1,6m × 2,0m × 18cm: 1.750.000đ / tấm (Giá TT: 2.350.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m × 18cm: 1.950.000đ / tấm (Giá TT: 2.600.000đ)\n' +
      '   • Cỡ 2,0m × 2,2m × 18cm: 2.250.000đ / tấm (Giá TT: 2.850.000đ)\n' +
      '🚛 Giao miễn phí tận nhà – Bảo hành 5 năm không xẹp lún!\n' +
      '📞 Gọi/Zalo đặt hàng: 0344.727.528 (Showroom Tuyến Hoa)',
  },
  {
    id: 'dem-bong-ep-gam-do-phong-cuoi-kim-cuong-dgd01',
    code: 'DGD-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Đệm Bông Ép Gấm Đỏ Hoàng Gia (Phòng Cưới) & Gấm Xám Lá Phong Đóng Túi Kim Cương',
    shortTitle: 'Đệm Gấm Đỏ Phòng Cưới & Gấm Xám Lá Phong',
    priceDisplay: '1.450.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 1.850.000đ – 2.450.000đ / tấm',
    marketPriceNote: 'Đệm bông ép gấp 3 truyền thống vỏ Gấm Đỏ Hoàng Gia (chuyên dùng cho phòng cưới may mắn) và Gấm Xám Lá Phong / Xám Vân Đá sạch đẹp, đóng túi khóa kéo Kim Cương chính hãng.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Giường 1,6m × 2,0m × 9cm (Vỏ Gấm Đỏ Hoàng Gia / Gấm Xám Lá Phong)',
        marketPrice: '1.850.000đ / tấm',
        storePrice: '1.450.000đ / tấm',
        note: 'Gấp 3 gọn nhẹ, vỏ gấm có khóa kéo tháo giặt dễ dàng',
      },
      {
        sizeOrOption: 'Giường đôi 1,8m × 2,0m × 9cm (Chuẩn giường cưới truyền thống)',
        marketPrice: '2.150.000đ / tấm',
        storePrice: '1.650.000đ / tấm',
        note: 'Mua kèm Màn khung 1Tr được giảm thêm 50.000đ',
      },
      {
        sizeOrOption: 'Bản dày 14cm – 18cm (Cỡ 1,8m × 2,0m hoặc 2,0m × 2,2m)',
        marketPrice: '2.450.000đ / tấm',
        storePrice: '1.950.000đ / tấm',
        note: 'Bông ép cứng cáp phẳng lưng – Bảo hành 5 năm',
      },
    ],
    numericPrice: 1450000,
    unitLabel: '1 tấm Đệm Gấm Đỏ / Gấm Xám gấp 3 chính hãng',
    standardDimensions: '1,5m×1,9m | 1,6m×2,0m | 1,8m×2,0m | 2,0m×2,2m (Độ dày 9cm / 14cm / 18cm)',
    mediaType: 'image',
    imageUrl:
      '/assets/aistudio/1792918003114_4373635352308930219_4373635352308930219_183a5322d1c3677c81ea3c6eed04d596_c7602f66.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918003138_4373635352308930219_4373635352308930219_8dab47a7f373f06a9c0f8a93b6f426a3_9e0a77a6.jpg',
    ],
    highlightTag: 'Mẫu Gấm Đỏ Phòng Cưới & Gấm Xám Lá Phong',
    summary:
      'Hai bức ảnh chụp thực tế lô Đệm Bông Ép Gấp 3 đóng túi Kim Cương tại kho Tuyến Hoa: Nổi bật với mẫu vỏ Gấm Đỏ thêu hoa văn Hoàng Gia rực rỡ cho mùa cưới hỏi và mẫu Gấm Xám Lá Phong nhã nhặn cho gia đình.',
    visualAnnotations: [
      {
        label: 'Màu Gấm Đỏ Hoàng Gia may mắn cho phòng tân hôn',
        detail:
          'Vải gấm dệt kim tuyến nhẹ trên nền đỏ thẫm sang trọng, là mẫu đệm được các gia đình chọn mua nhiều nhất khi sắm sửa giường cưới cho con cháu.',
      },
      {
        label: 'Màu Gấm Xám Lá Phong & Xám Vân Đá trang nhã',
        detail:
          'Họa tiết lá phong vàng kim trên nền xám sạch sẽ, hiện đại, phù hợp với mọi lứa tuổi.',
      },
      {
        label: 'Đóng túi nhựa trong suốt có khóa kéo & tay xách chính hãng',
        detail:
          'Thuận tiện bảo quản chống bụi bẩn khi cất kho mùa hè, vỏ áo đệm có khóa kéo tháo rời để giặt máy.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DGD-TH-01 (Đệm Bông Ép Gấm Đỏ & Gấm Xám Lá Phong)' },
      { label: 'Chất liệu vỏ', value: 'Vải Gấm Đỏ Hoàng Gia / Gấm Xám Lá Phong bền màu, có khóa kéo' },
      { label: 'Giá thị trường', value: '1.850.000đ – 2.450.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '1.450.000đ (1m6×2m) | 1.650.000đ (1m8×2m) | 1.950.000đ (Bản dày)' },
      { label: 'Bảo hành', value: 'Bảo hành 5 năm – Miễn phí giao tận nhà' },
    ],
    articleParagraphs: [
      'Vào mỗi mùa cưới hỏi và dịp cuối năm, dòng Đệm Bông Ép Vỏ Gấm Đỏ Hoàng Gia (Mã DGD-TH-01) tại Showroom Tuyến Hoa luôn được các bậc phụ huynh ưu tiên lựa chọn để sắm trọn bộ chăn ga gối đệm + màn khung cho phòng tân hôn.',
      'Song song với màu đỏ truyền thống, kho Tuyến Hoa luôn sẵn các kiện đệm vỏ Gấm Xám Lá Phong và Xám Vân Đá ép cứng phẳng lưng, giá chỉ từ 1.450.000đ/tấm.'
    ],
    facebookPostCopy:
      '🌺 ĐỆM BÔNG ÉP GẤM ĐỎ PHÒNG CƯỚI & GẤM XÁM LÁ PHONG – BỀN ĐẸP, PHẲNG LƯNG, GIÁ TẬN GỐC! 🌺\n' +
      '--------------------------------------------\n' +
      '💍 Gia đình chuẩn bị sắm giường cưới hay thay đệm mới cho ông bà, bố mẹ thì tham khảo ngay lô Đệm Gấm Đỏ Hoàng Gia & Gấm Xám Lá Phong vừa về ngập kho Tuyến Hoa nhé!\n' +
      '✅ Ruột bông ép nhiệt trắng tinh khiết, độ cứng tiêu chuẩn nâng đỡ cột sống, không lún võng.\n' +
      '✅ Vỏ gấm dệt dày dặn, không xù lông, có khóa kéo tháo giặt cực tiện.\n' +
      '💰 GIÁ BÁN LẺ RẺ NHƯ GIÁ BUÔN:\n' +
      '   • Cỡ 1,6m × 2,0m: Chỉ 1.450.000đ / tấm (Giá TT: 1.850.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m: Chỉ 1.650.000đ / tấm (Giá TT: 2.150.000đ)\n' +
      '   • Bản dày 14cm–18cm: Chỉ 1.950.000đ / tấm (Giá TT: 2.450.000đ)\n' +
      '🎁 Mua combo Đệm + Màn khung 1.000.000đ/bộ được giảm thêm ngay tiền mặt & bao lắp tận giường!\n' +
      '📞 Gọi/Zalo: 0344.727.528 (Showroom Tuyến Hoa)',
  },
  {
    id: 'tong-kho-xuong-phoi-dem-cao-su-tong-hop-tuyen-hoa-kxd01',
    code: 'KXD-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Kho Xưởng',
    title: 'Tổng Kho Xưởng Phôi Đệm Cao Su Tổng Hợp Ép Nhiệt & Đệm DER LAMOR Tuyến Hoa (Cắt Đặt Mọi Kích Thước)',
    shortTitle: 'Xưởng Phôi Đệm Cao Su Tổng Hợp & Đệm Đặt Cỡ',
    priceDisplay: '1.350.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 1.850.000đ – 2.650.000đ / tấm',
    marketPriceNote: 'Hình ảnh trực tiếp tại kho phôi lõi Đệm Cao Su Tổng Hợp Ép Nhiệt tỷ trọng cao (cỡ 18×2×19cm) và các lô đệm thành phẩm DER LAMOR / DIAMOND. Nhận đặt cắt đệm theo mọi kích thước giường gỗ tự đóng hoặc sập gụ.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Đệm bông ép / Cao su tổng hợp đặt theo kích thước sập gụ, phản gỗ',
        marketPrice: '1.850.000đ / tấm',
        storePrice: '1.350.000đ / tấm',
        note: 'Cắt chuẩn từng cm theo yêu cầu của khách',
      },
      {
        sizeOrOption: 'Phôi đệm Cao Su Tổng Hợp Ép Nhiệt mặt chần bông dày 18–19cm (1,8m×2,0m)',
        marketPrice: '2.450.000đ / tấm',
        storePrice: '1.750.000đ / tấm',
        note: 'Cốt đệm siêu đầm nặng, độ bền trên 10 năm',
      },
      {
        sizeOrOption: 'Cung cấp sỉ & lẻ cho Nhà nghỉ, Khách sạn, Homestay, Ký túc xá',
        marketPrice: '2.650.000đ / tấm',
        storePrice: '1.650.000đ / tấm',
        note: 'Chiết khấu cao theo số lượng – Xuất xưởng trực tiếp',
      },
    ],
    numericPrice: 1350000,
    unitLabel: '1 tấm đệm xuất xưởng / Nhận đặt mọi kích thước lẻ',
    standardDimensions: 'Sẵn phôi 1,6m×2m | 1,8m×2m×19cm | Nhận cắt đặt cỡ giường sập 1,2m / 1,4m / 2,2m',
    mediaType: 'image',
    imageUrl:
      '/assets/aistudio/1792918016702_4373635352308930219_4373635352308930219_4911d2249505ab896640c28518a2313f_4ecf452b.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016727_4373635352308930219_4373635352308930219_7bf37d678a6e59c76c1278c6e258a872_b3bd3aac.jpg',
    ],
    highlightTag: 'Giá Gốc Tại Xưởng · Nhận Đặt Mọi Cỡ Lẻ',
    summary:
      'Cận cảnh bên trong kho xưởng phôi lõi Đệm Cao Su Tổng Hợp Ép Nhiệt kết hợp mặt chần bông (ghi rõ thông số 18×2×19 trên kiện hàng) cùng hàng trăm tấm đệm thành phẩm DER LAMOR, DIAMOND và đệm gấp 2 bo viền sẵn sàng xuất kho.',
    visualAnnotations: [
      {
        label: 'Lõi phôi Cao Su Tổng Hợp ép nhiệt tỷ trọng cao (18×2×19cm)',
        detail:
          'Nhìn trực diện phần lõi phôi đa sắc ép khối đặc khít phía dưới và lớp bông trắng chần múi phía trên: cầm cực kỳ đầm tay, chịu lực nén vượt trội, không bao giờ xẹp lún.',
      },
      {
        label: 'Kho đệm thành phẩm DER LAMOR & Đệm Gấp 2 quy mô lớn',
        detail:
          'Hàng trăm tấm đệm đủ độ dày từ 9cm, 14cm, 18cm đến 20cm xếp ngay ngắn tại kho, khách mua lẻ được hưởng ngay mức giá xuất xưởng.',
      },
      {
        label: 'Nhận gia công cắt đệm theo kích thước giường cổ, sập gụ, giường tầng',
        detail:
          'Các gia đình có giường gỗ đóng riêng cỡ 1m55, 1m75, 1m95 hay sập gỗ 2m×2m4 đều có thể đặt xưởng Tuyến Hoa làm chuẩn khít 100%.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'KXD-TH-01 (Tổng Kho Xưởng Phôi Đệm & Đệm Thành Phẩm Tuyến Hoa)' },
      { label: 'Cấu tạo lõi phôi', value: 'Cao su tổng hợp ép nhiệt tỷ trọng cao + Lớp mặt bông trắng chần múi' },
      { label: 'Giá thị trường', value: '1.850.000đ – 2.650.000đ / tấm' },
      { label: 'Giá xuất xưởng Tuyến Hoa', value: 'Từ 1.350.000đ – 1.750.000đ / tấm (Tiết kiệm 30% so với qua trung gian)' },
      { label: 'Dịch vụ đặc biệt', value: 'Nhận đặt cắt đệm mọi kích thước lẻ cho giường đóng riêng & sập gụ' },
    ],
    articleParagraphs: [
      'Nhiều khách hàng thắc mắc vì sao đệm tại Showroom Tuyến Hoa vừa nặng đầm tay, nằm êm không xẹp mà giá lại rẻ hơn thị trường từ 500.000đ – 800.000đ/tấm. Câu trả lời nằm ngay ở 2 bức ảnh chụp trực tiếp kho phôi lõi đệm cao su tổng hợp và dây chuyền hoàn thiện áo đệm tại xưởng.',
      'Chúng tôi công khai minh bạch phần lõi phôi bên trong (cao su tổng hợp ép nhiệt kết hợp mặt bông chần dày 18–19cm) để bà con tận mắt kiểm chứng chất lượng thực chất trước khi bọc áo gấm thành phẩm. Đặc biệt, xưởng nhận đặt làm mọi kích thước lẻ cho giường sập, giường tầng trẻ em trong thời gian nhanh nhất.'
    ],
    facebookPostCopy:
      '🏭 [MỤC SỞ THỊ TỔNG KHO XƯỞNG ĐỆM] LÕI PHÔI CAO SU TỔNG HỢP ÉP NHIỆT DÀY 19CM & KHO ĐỆM DER LAMOR TUYẾN HOA! 🏭\n' +
      '--------------------------------------------\n' +
      '🔍 Quay chụp cận cảnh phần lõi phôi đệm bên trong chưa bọc vỏ để các bác thấy độ đặc khít, đầm nặng của dòng Đệm Cao Su Tổng Hợp kết hợp mặt bông chần tại Xưởng Tuyến Hoa!\n' +
      '✅ Cốt đệm ép nhiệt tỷ trọng cao dày 18cm–19cm: Nằm êm ái, đàn hồi cực tốt, dùng 10 năm không lo võng lưng.\n' +
      '✅ Kho sẵn hàng trăm tấm đệm thành phẩm DER LAMOR, Kim Cương, TH VICUNA, Đệm Gấp 2 Chần Múi đủ mọi kích thước.\n' +
      '✅ ĐẶC BIỆT: Nhận đặt cắt đệm theo mọi kích thước lẻ cho sập gụ, phản gỗ, giường tầng, giường đóng riêng!\n' +
      '💰 Giá xuất xưởng trực tiếp chỉ từ: 1.350.000đ – 1.750.000đ / tấm (Rẻ hơn thị trường 500k – 800k/tấm).\n' +
      '📞 Gọi/Zalo đặt đệm lẻ & sỉ: 0344.727.528 (Xưởng & Showroom Tuyến Hoa)',
  },

  // ===========================================================================
  // 0B. SHOWROOM & SẢN PHẨM MỚI CHÈN CHỮ THƯƠNG HIỆU "TUYẾN HOA" TRÊN ẢNH
  // ===========================================================================
  {
    id: 'chieu-may-dieu-hoa-tuyen-hoa-cm01',
    code: 'CM-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Chiếu Mây Điều Hòa Cao Cấp Tuyến Hoa – Lót Lưới Tổ Ong 3D & Sợi Ngải Cứu Tự Nhiên (Tặng Kèm 2 Vỏ Gối & Túi Đựng)',
    shortTitle: 'Chiếu Mây Điều Hòa Cao Cấp Tuyến Hoa',
    priceDisplay: '450.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 650.000đ – 850.000đ / bộ',
    marketPriceNote: 'Trọn bộ chiếu mây điều hòa chính hãng Tuyến Hoa gồm: 01 chiếu mây viền gấm thêu + 02 vỏ gối mây đồng bộ + 01 túi xách đựng sang trọng.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Giường 1,6m × 2,0m (Chiếu mây + 2 vỏ gối + Túi xách)',
        marketPrice: '650.000đ / bộ',
        storePrice: '450.000đ / bộ',
        note: 'Có chun cài 4 góc cố định vào đệm',
      },
      {
        sizeOrOption: 'Giường 1,8m × 2,0m (Kích thước chuẩn giường đôi phổ biến)',
        marketPrice: '750.000đ / bộ',
        storePrice: '490.000đ / bộ',
        note: 'Bán chạy số 1 mùa hè – Nằm êm mát lưng',
      },
      {
        sizeOrOption: 'Giường đại 2,0m × 2,2m (Khổ rộng gia đình)',
        marketPrice: '850.000đ / bộ',
        storePrice: '550.000đ / bộ',
        note: 'Miễn phí giao hàng tận nhà',
      },
    ],
    numericPrice: 450000,
    unitLabel: 'Trọn bộ: 1 Chiếu mây + 2 Vỏ gối mây + Túi xách Tuyến Hoa',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m (450k) · 1,8m × 2,0m (490k) · 2,0m × 2,2m (550k)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png',
      '/assets/aistudio/showroom_tuyen_hoa_stamped.png',
    ],
    highlightTag: 'Ảnh Đã Chèn Chữ Tuyến Hoa',
    summary:
      'Chiếu Mây Điều Hòa Cao Cấp Tuyến Hoa cấu tạo 2 lớp thông minh: Mặt trên đan sợi mây tự nhiên kết hợp sợi ngải cứu kháng khuẩn mát lạnh, bo viền lụa gấm thêu hoa; mặt dưới lót lưới tổ ong 3D thông hơi chống bí lưng, gấp gọn tiện lợi.',
    visualAnnotations: [
      {
        label: 'Mặt trên sợi mây tự nhiên & ngải cứu kháng khuẩn',
        detail: 'Sợi mây đan khít bóng mịn, không dằm xước, hấp thụ nhiệt nhanh giúp mát lưng ngay khi đặt lưng nằm.',
      },
      {
        label: 'Mặt dưới lót lưới tổ ong 3D thoáng khí + Chun 4 góc',
        detail: 'Lớp đệm lưới 3D đàn hồi êm ái, thoát mồ hôi cực nhanh và có dây chun cài 4 góc chống xô lệch trên đệm.',
      },
      {
        label: 'Trọn bộ kèm 2 vỏ gối mây & túi xách Tuyến Hoa',
        detail: 'Mua 1 được 3: Gồm 1 chiếu mây điều hòa, 2 vỏ gối nằm đồng màu và túi khóa kéo bảo quản gọn gàng.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CM-TH-01 (Chiếu Mây Điều Hòa Tuyến Hoa Luxury)' },
      { label: 'Thương hiệu trên ảnh', value: 'TUYẾN HOA Nature Home – ĐT/Zalo: 0344.727.528' },
      { label: 'Giá cỡ 1,6m × 2,0m', value: '450.000đ / bộ (Thị trường: 650.000đ/bộ)' },
      { label: 'Giá cỡ 1,8m × 2,0m', value: '490.000đ / bộ (Thị trường: 750.000đ/bộ)' },
      { label: 'Giá cỡ 2,0m × 2,2m', value: '550.000đ / bộ (Thị trường: 850.000đ/bộ)' },
      { label: 'Phụ kiện đi kèm', value: 'Tặng kèm 02 vỏ gối mây êm mát + 01 túi xách đựng chiếu' },
    ],
    articleParagraphs: [
      'Chiếu Mây Điều Hòa Cao Cấp Tuyến Hoa (Mã CM-TH-01) là dòng chiếu trải đệm thế hệ mới được kết hợp giữa sợi mây tự nhiên tuyển chọn và tinh chất sợi ngải cứu thảo mộc, mang lại cảm giác mát dịu tự nhiên, không gây lạnh buốt lưng cho người già và trẻ nhỏ khi nằm phòng điều hòa.',
      'Mặt trên của chiếu được dệt tỉ mỉ với độ bóng mịn cao, xung quanh bo viền gấm thêu hoa văn sang trọng. Mặt dưới được ép lớp lưới tổ ong 3D thoáng khí dày dặn có độ đàn hồi êm ái, kèm 4 dây chun định vị chắc chắn vào 4 góc đệm bông ép hoặc đệm lò xo.',
      'Tại Showroom Tuyến Hoa, mỗi bộ chiếu đều kèm sẵn 02 vỏ gối mây đồng bộ và túi xách sang trọng với mức giá gốc tận kho: cỡ 1,6m×2,0m chỉ 450.000đ/bộ; cỡ 1,8m×2,0m chỉ 490.000đ/bộ; cỡ đại 2,0m×2,2m chỉ 550.000đ/bộ.'
    ],
    facebookPostCopy:
      '🌿 [SIÊU PHẨM MÙA HÈ] CHIẾU MÂY ĐIỀU HÒA CAO CẤP TUYẾN HOA – LÓT LƯỚI 3D & NGẢI CỨU TỰ NHIÊN!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 650.000đ – 850.000đ / bộ\n' +
      '🔥 GIÁ TẠI SHOWROOM TUYẾN HOA (TẶNG KÈM 2 VỎ GỐI MÂY + TÚI XÁCH):\n' +
      '   👉 Cỡ 1,6m × 2,0m: Chỉ 450.000đ / bộ\n' +
      '   👉 Cỡ 1,8m × 2,0m: Chỉ 490.000đ / bộ\n' +
      '   👉 Cỡ 2,0m × 2,2m: Chỉ 550.000đ / bộ\n' +
      '--------------------------------------------\n' +
      '📌 ƯU ĐIỂM VƯỢT TRỘI CỦA CHIẾU MÂY TUYẾN HOA:\n' +
      '✔️ Mặt trên: Đan sợi mây tự nhiên kết hợp sợi ngải cứu kháng khuẩn, nằm êm mát mịn, không lo dằm xước.\n' +
      '✔️ Mặt dưới: Lớp lưới tổ ong 3D thông hơi 100%, chống hầm bí lưng, có chun cài 4 góc đệm chắc chắn.\n' +
      '✔️ Viền chiếu: Bo gấm thêu hoa sang trọng, gấp gọn hoặc cuộn tròn vệ sinh cực dễ dàng.\n' +
      '🚛 Giao hàng tận nơi – Kiểm tra hàng ưng ý mới thanh toán!\n' +
      '📞 Gọi/Zalo đặt ngay: 0344.727.528 (Showroom Tuyến Hoa – Ứng Hòa, Hà Nội)',
  },
  {
    id: 'bat-tu-cuon-nang-mua-mai-hien-bc01',
    code: 'BC-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Showroom & Công Trình Thực Tế',
    title: 'Bạt Tự Cuốn Che Nắng Mưa Ban Công, Hiên Nhà, Trường Học & Mái Hiên Di Động Tay Khuỷu Tuyến Hoa',
    shortTitle: 'Bạt Tự Cuốn Che Nắng Mưa & Mái Hiên Tuyến Hoa',
    priceDisplay: '220.000đ / m²',
    marketPriceRange: 'Giá thị trường: 300.000đ – 380.000đ / m²',
    marketPriceNote: 'Xưởng Tuyến Hoa trực tiếp cắt may ép bạt và lắp đặt hoàn thiện tận nơi: Bạt kẻ sọc, bạt hoa văn nâu đồng, bạt lá trúc, bạt lưới xuyên sáng và mái hiên quay tay.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Bạt Tự Cuốn Lò Xo Kẻ Sọc Xanh Trắng / Vàng Xanh (Cả lắp)',
        marketPrice: '300.000đ / m²',
        storePrice: '220.000đ / m²',
        note: 'Bạt nhựa PVC tráng nhựa 2 mặt chống mưa nắng 100%',
      },
      {
        sizeOrOption: '2. Bạt Tự Cuốn Hoa Văn Nâu Đồng & Họa Tiết Lá Trúc (Cả lắp)',
        marketPrice: '330.000đ / m²',
        storePrice: '240.000đ / m²',
        note: 'Mẫu mới sang trọng cho hiên nhà phố, biệt thự, trường học',
      },
      {
        sizeOrOption: '3. Rèm Bạt Cuốn Lưới Đen Ghi Xuyên Sáng Ban Công Chung Cư',
        marketPrice: '380.000đ / m²',
        storePrice: '280.000đ / m²',
        note: 'Cản nắng 90%, thoáng gió, nhìn được cảnh bên ngoài',
      },
      {
        sizeOrOption: '4. Mái Hiên Di Động Tay Khuỷu Quay Tay Khổ Lớn',
        marketPrice: '580.000đ / m ngang',
        storePrice: '450.000đ / m ngang',
        note: 'Khung càng nhôm đúc hợp kim dày + Bạt Hàn Quốc',
      },
    ],
    numericPrice: 220000,
    unitLabel: '1 m² hoàn thiện cả ống nhôm, lò xo tự cuốn & công lắp',
    standardDimensions: 'May đo theo kích thước hiên nhà, ban công, hành lang trường học',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/bat_tu_cuon_nang_mua_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/bat_tu_cuon_nang_mua_tuyen_hoa.png',
      '/assets/aistudio/xuong_san_xuat_rem_tuyen_hoa.png',
    ],
    highlightTag: 'Ảnh Đã Chèn Chữ Tuyến Hoa',
    summary:
      'Tổng hợp các mẫu Bạt Tự Cuốn Lò Xo & Mái Hiên Di Động Tay Khuỷu do Xưởng Tuyến Hoa trực tiếp sản xuất và thi công: Đầy đủ mẫu kẻ sọc xanh trắng truyền thống, mẫu hoa văn nâu đồng cổ điển, họa tiết lá trúc xanh mát và bạt lưới đen ghi hiện đại.',
    visualAnnotations: [
      {
        label: 'Mẫu 01: Bạt kẻ sọc xanh trắng & mái hiên tay khuỷu (220k/m²)',
        detail: 'Chuyên lắp cho mặt tiền cửa hàng, ban công nhà ống, hành lang trường học; cản nắng mưa tuyệt đối 100%.',
      },
      {
        label: 'Mẫu 02: Rèm bạt cuốn lưới đen ghi xuyên sáng (280k/m²)',
        detail: 'Lắp gọn cho ban công biệtự, chung cư, quán cafe: Chắn nắng gắt và mưa hắt nhưng vẫn đón gió thoáng mát.',
      },
      {
        label: 'Mẫu 03: Bạt tự cuốn hoa văn nâu đồng & lá trúc (240k/m²)',
        detail: 'Trục cuốn nhôm hợp kim lò xo tự hãm thông minh: Kéo nhẹ xuống móc neo là căng phẳng, thả neo tự cuộn gọn lên.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'BC-TH-01 (Bạt Tự Cuốn & Mái Hiên Quay Tay Tuyến Hoa)' },
      { label: 'Thương hiệu trên ảnh', value: 'XƯỞNG BẠT & MÀNH RÈM TUYẾN HOA – ĐT: 0344.727.528' },
      { label: 'Giá bạt tự cuốn kẻ sọc', value: '220.000đ / m² trọn gói cả lắp (Thị trường: 300.000đ/m²)' },
      { label: 'Giá bạt hoa văn / lá trúc', value: '240.000đ / m² trọn gói cả lắp (Thị trường: 330.000đ/m²)' },
      { label: 'Giá bạt lưới xuyên sáng', value: '280.000đ / m² trọn gói cả lắp (Thị trường: 380.000đ/m²)' },
      { label: 'Cơ cấu vận hành', value: 'Ống nhôm Φ63 + Lò xo tự cuốn Đài Loan hoặc Hộp số tay quay' },
    ],
    articleParagraphs: [
      'Để bảo vệ cửa gỗ, ban công, hiên nhà và hành lang trường học khỏi nắng gắt hướng Tây cũng như mưa tạt gió lùa, Xưởng Bạt & Mành Rèm Tuyến Hoa mang đến giải pháp Bạt Tự Cuốn Lò Xo và Mái Hiên Di Động Tay Khuỷu với giá gốc trực tiếp tại xưởng chỉ từ 220.000đ/m² bao gồm cả công thợ lắp đặt.',
      'Khách hàng có thể lựa chọn đa dạng chất liệu phù hợp từng không gian: (1) Bạt PVC kẻ sọc xanh trắng hoặc vàng xanh tráng nhựa 2 mặt chống thấm 100% giá 220.000đ/m²; (2) Bạt in hoa văn nâu đồng hoàng gia hoặc họa tiết lá trúc xanh mát giá 240.000đ/m²; (3) Bạt lưới đen ghi cao cấp cản 90% nắng nhưng vẫn giữ tầm nhìn thoáng đãng giá 280.000đ/m².',
      'Toàn bộ hệ trục cuốn sử dụng ống nhôm định hình Φ63 chống võng, thanh đáy sắt kẽm luồn chân bạt chắc chắn và lò xo tự cuốn bền bỉ: chỉ mất 3 giây kéo dây thả xuống hoặc nhả dây để bạt tự động cuộn gọn lên sát trần.'
    ],
    facebookPostCopy:
      '☀️🌧️ [XƯỞNG BẠT TUYẾN HOA] BẠT TỰ CUỐN CHE NẮNG MƯA BAN CÔNG, HIÊN NHÀ & MÁI HIÊN DI ĐỘNG!\n' +
      '💰 BÁO GIÁ TẬN XƯỞNG BAO LẮP ĐẶT HOÀN THIỆN:\n' +
      '🔹 1. Bạt tự cuốn lò xo kẻ sọc xanh trắng / vàng xanh: Chỉ 220.000đ / m² (Thị trường: 300.000đ/m²).\n' +
      '🔹 2. Bạt tự cuốn hoa văn nâu đồng & họa tiết lá trúc: Chỉ 240.000đ / m² (Thị trường: 330.000đ/m²).\n' +
      '🔹 3. Rèm bạt cuốn lưới đen ghi xuyên sáng hiện đại: Chỉ 280.000đ / m² (Thị trường: 380.000đ/m²).\n' +
      '🔹 4. Mái hiên di động tay khuỷu quay tay: Chỉ 450.000đ / m ngang hoàn thiện.\n' +
      '--------------------------------------------\n' +
      '✅ Chắn nắng mưa 99%, bảo vệ cửa gỗ, máy giặt và ban công luôn khô ráo mát mẻ.\n' +
      '✅ Lò xo tự cuốn thông minh: Kéo nhẹ là che, thả dây tự cuộn gọn trong 3 giây!\n' +
      '🚛 Miễn phí đo đạc & lắp đặt tận nhà tại Ứng Hòa và khu vực lân cận!\n' +
      '📞 Gọi/Zalo ngay Xưởng Tuyến Hoa: 0344.727.528',
  },
  {
    id: 'xuong-san-xuat-rem-to-ong-cua-luoi-xsx01',
    code: 'XSX-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Showroom & Công Trình Thực Tế',
    title: 'Xưởng Sản Xuất Vách Rèm Tổ Ong Ngăn Lạnh Điều Hòa, Cửa Lưới Chống Muỗi & Rèm Cuốn Tuyến Hoa',
    shortTitle: 'Xưởng Rèm Tổ Ong & Cửa Lưới Muỗi Tuyến Hoa',
    priceDisplay: '550.000đ / m²',
    marketPriceRange: 'Giá thị trường: 750.000đ – 900.000đ / m²',
    marketPriceNote: 'Gia công trực tiếp tại Xưởng Nhôm Kính & Mành Rèm Tuyến Hoa không qua trung gian – Tiết kiệm 25% đến 30% chi phí cho mọi gia đình.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Cửa Lưới Chống Muỗi Xếp Xích Khung Nhôm Định Hình',
        marketPrice: '750.000đ / m²',
        storePrice: '550.000đ / m²',
        note: 'Ngăn muỗi & côn trùng 100%, đón gió tự nhiên',
      },
      {
        sizeOrOption: '2. Vách Rèm Tổ Ong Ngăn Phòng Điều Hòa (Tráng Bạc 2 Lớp)',
        marketPrice: '880.000đ / m²',
        storePrice: '650.000đ / m²',
        note: 'Giữ lạnh điều hòa tuyệt đối, kéo xếp gọn sát tường',
      },
      {
        sizeOrOption: '3. Rèm Tổ Ong Trên Kính & Rèm Cầu Vồng Hàn Quốc',
        marketPrice: '680.000đ / m²',
        storePrice: '520.000đ / m²',
        note: 'Cách nhiệt chống nóng cửa sổ hướng Tây',
      },
    ],
    numericPrice: 550000,
    unitLabel: '1 m² hoàn thiện khung nhôm sơn tĩnh điện & công lắp',
    standardDimensions: 'Cắt khung nhôm & gia công chuẩn từng milimet theo ô cửa thực tế',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/xuong_san_xuat_rem_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/xuong_san_xuat_rem_tuyen_hoa.png',
      '/assets/aistudio/bat_tu_cuon_nang_mua_tuyen_hoa.png',
    ],
    highlightTag: 'Ảnh Đã Chèn Chữ Tuyến Hoa',
    summary:
      'Dây chuyền cắt khung nhôm định hình, lắp ráp Vách Rèm Tổ Ong ngăn lạnh điều hòa, Cửa Lưới Chống Muỗi xếp xích và Bạt Cuốn trực tiếp tại Xưởng Tuyến Hoa – Đảm bảo chất lượng xuất xưởng bền bỉ và giá gốc tận gốc.',
    visualAnnotations: [
      {
        label: 'Dây chuyền gia công khung nhôm sơn tĩnh điện tại xưởng',
        detail: 'Khung nhôm hệ dày dặn đủ màu trắng sứ, ghi xám, nâu cafe, vân gỗ được cắt góc chính xác trên bàn máy.',
      },
      {
        label: 'Vách rèm tổ ong tráng bạc ngăn lạnh điều hòa (650k/m²)',
        detail: 'Lõi giấy bạc hình tổ ong cách nhiệt hoàn hảo, thay thế cửa kính nặng nề cho phòng khách, cầu thang, phòng ăn.',
      },
      {
        label: 'Cửa lưới chống muỗi xếp gọn không ray dưới (550k/m²)',
        detail: 'Lưới sợi thủy tinh phủ nhựa uPVC dẻo dai, kéo xếp nhẹ nhàng, an toàn cho trẻ nhỏ và người lớn tuổi.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'XSX-TH-01 (Xưởng Rèm Tổ Ong & Cửa Lưới Tuyến Hoa)' },
      { label: 'Thương hiệu trên ảnh', value: 'XƯỞNG SẢN XUẤT RÈM & BẠT TUYẾN HOA – 0344.727.528' },
      { label: 'Giá cửa lưới chống muỗi', value: '550.000đ / m² cả lắp (Thị trường: 750.000đ/m²)' },
      { label: 'Giá vách rèm tổ ong', value: '650.000đ / m² cả lắp (Thị trường: 880.000đ/m²)' },
      { label: 'Màu khung nhôm', value: 'Trắng sứ, Ghi xám Xingfa, Nâu Cafe, Vân gỗ' },
      { label: 'Chế độ bảo hành', value: 'Bảo hành khung nhôm & phụ kiện 3 năm tận nhà' },
    ],
    articleParagraphs: [
      'Hình ảnh thực tế tại Xưởng Sản Xuất Rèm & Bạt Tuyến Hoa với hệ thống bàn gá lắp ráp cơ khí chính xác, kệ phôi nhôm định hình sơn tĩnh điện và máy ép nhiệt hiện đại chuyên gia công các dòng sản phẩm thế hệ mới: Vách Rèm Tổ Ong ngăn phòng điều hòa, Cửa Lưới Chống Muỗi xếp xích và Bạt Cuốn che nắng mưa.',
      'Nhờ tự chủ 100% khâu sản xuất tại xưởng không qua trung gian thương mại, Tuyến Hoa cung cấp mức giá gốc tận xưởng: Cửa lưới chống muỗi xếp gọn chỉ 550.000đ/m² (thị trường 750.000đ/m²) và Vách rèm tổ ong có lớp tráng bạc cách nhiệt bên trong chỉ 650.000đ/m² (thị trường 880.000đ/m²).',
      'Khi kéo ra, vách rèm tổ ong tạo thành bức tường kín khít giữ nhiệt điều hòa mát lạnh; khi không dùng có thể đẩy xếp gọn hoàn toàn về một bên chỉ dày 10cm, trả lại không gian thông thoáng tuyệt đối cho ngôi nhà.'
    ],
    facebookPostCopy:
      '🏭 [TRỰC TIẾP TẠI XƯỞNG TUYẾN HOA] VÁCH RÈM TỔ ONG NGĂN LẠNH ĐIỀU HÒA & CỬA LƯỚI CHỐNG MUỖI!\n' +
      '💰 BÁO GIÁ XUẤT XƯỞNG KHÔNG QUA TRUNG GIAN:\n' +
      '🔹 1. Cửa lưới chống muỗi xếp xích cao cấp: Chỉ 550.000đ / m² cả lắp (Giá thị trường: 750.000đ/m²).\n' +
      '🔹 2. Vách rèm tổ ong ngăn lạnh điều hòa (lõi tráng bạc 2 lớp): Chỉ 650.000đ / m² cả lắp (Giá thị trường: 880.000đ/m²).\n' +
      '🔹 3. Rèm cầu vồng & Rèm tổ ong lắp trên kính cản nắng: Chỉ 520.000đ / m².\n' +
      '--------------------------------------------\n' +
      '✅ Gia công chuẩn kích thước từng ô cửa trên dây chuyền hiện đại tại Xưởng Tuyến Hoa.\n' +
      '✅ Kéo ra ngăn lạnh điều hòa & chặn muỗi 100% – Xếp gọn sát tường cực kỳ thẩm mỹ!\n' +
      '📞 Gọi/Zalo kỹ thuật đo đạc tận nhà miễn phí: 0344.727.528 (Tuyến Hoa)',
  },
  {
    id: 'showroom-chan-ga-goi-dem-rem-tuyen-hoa-sr01',
    code: 'SR-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Showroom & Công Trình Thực Tế',
    title: 'Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa – Giấc Ngủ Ngon, Cuộc Sống Trọn Vẹn',
    shortTitle: 'Showroom Chăn Ga Gối Đệm & Rèm Tuyến Hoa',
    priceDisplay: 'Đệm 1,35Tr · Rèm 600k',
    marketPriceRange: 'Tiết kiệm 15% – 30% so với giá thị trường',
    marketPriceNote: 'Trưng bày đầy đủ Chăn Ga êm ái, Gối thư giãn, Đệm bông ép vững chãi và Rèm Cửa sang trọng tại Showroom Tuyến Hoa.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Chăn Ga Gối Lụa Cotton & Đệm Bông Ép Hàn Quốc Gấp 3',
        marketPrice: '1.650.000đ – 3.450.000đ',
        storePrice: '1.350.000đ – 2.450.000đ',
        note: 'Chính hãng 100%, bảo hành 5 năm',
      },
      {
        sizeOrOption: '2. Màn Khung Inox Cao Cấp Chuẩn Giường Đôi (1,8m × 2,0m)',
        marketPrice: '1.300.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Bao lắp đặt hoàn thiện tận giường',
      },
      {
        sizeOrOption: '3. Rèm Vải Cản Nắng – Rèm Gỗ – Rèm Trúc – Rèm Cầu Vồng',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Miễn phí mang mẫu & lắp đặt tận nhà',
      },
    ],
    numericPrice: 1000000,
    unitLabel: 'Trưng bày đầy đủ Chăn Ga Gối Đệm & Rèm Cửa chính hãng',
    standardDimensions: 'Giấc ngủ ngon - Cuộc sống trọn vẹn (Kính chào Quý khách)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/showroom_tuyen_hoa_stamped.png',
    secondaryImages: [
      '/assets/aistudio/showroom_tuyen_hoa_stamped.png',
      '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png',
      '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
    ],
    highlightTag: 'Showroom Chính Hãng Tuyến Hoa',
    summary:
      'Không gian trưng bày hiện đại của Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa ("Giấc ngủ ngon - Cuộc sống trọn vẹn"): Khu vực bên trái trưng bày kệ chăn ga, gối, đệm bông ép cao cấp; khu vực bên phải trưng bày rèm vải, rèm gỗ, rèm trúc sang trọng.',
    visualAnnotations: [
      {
        label: 'Chăn Ga êm ái – Gối thư giãn – Đệm vững chãi',
        detail: 'Trưng bày sẵn các bộ chăn ga gối lụa thêu và đệm bông ép gấp 3 chính hãng để quý khách nằm thử trực tiếp.',
      },
      {
        label: 'Hệ Rèm Vải – Rèm Cửa – Rèm Gỗ – Rèm Trúc sang trọng',
        detail: 'Hàng trăm mẫu vải cản nắng 100%, rèm cầu vồng, rèm gỗ tự nhiên treo mẫu thực tế dễ dàng chọn lựa.',
      },
      {
        label: 'Thảm đỏ "Kính Chào Quý Khách" & Dịch vụ tận tâm',
        detail: 'Không gian sáng đẹp, đón tiếp chu đáo, miễn phí vận chuyển và lắp đặt tận phòng ngủ.',
      },
    ],
    specs: [
      { label: 'Mã hình ảnh', value: 'SR-TH-01 (Không Gian Showroom Tuyến Hoa)' },
      { label: 'Thông điệp thương hiệu', value: 'Tuyến Hoa – Chăn Ga Gối Đệm: Giấc ngủ ngon - Cuộc sống trọn vẹn' },
      { label: 'Ngành hàng bên trái', value: 'Chăn ga êm ái thoáng mát | Gối thư giãn | Đệm êm ấm vững chãi' },
      { label: 'Ngành hàng bên phải', value: 'Rèm vải | Rèm cửa | Rèm gỗ | Rèm trúc sang trọng thẩm mỹ' },
      { label: 'Hotline / Zalo tư vấn', value: '0344.727.528 (Giao & lắp đặt miễn phí tận nhà)' },
    ],
    articleParagraphs: [
      'Chào mừng Quý khách đến với Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa – điểm đến tin cậy mang lại "Giấc ngủ ngon – Cuộc sống trọn vẹn" cho mọi gia đình.',
      'Không gian bên trong Showroom được bố trí khoa học làm 2 phân khu chuyên biệt: Phía bên trái là hệ thống kệ trưng bày hàng trăm mẫu Chăn Ga lụa cotton thoáng mát, Gối nằm thư giãn tốt cho sức khỏe và Đệm bông ép chính hãng êm ấm vững chãi. Phía bên phải là khu trưng bày thực tế các mẫu Rèm Vải cản nắng, Rèm Gỗ, Rèm Trúc và Màn Khung cao cấp.',
      'Quý khách ghé thăm Showroom sẽ được trực tiếp sờ tận tay chất vải, nằm thử độ êm của đệm và nhận mức giá gốc tận xưởng tiết kiệm 15% – 30% so với thị trường.'
    ],
    facebookPostCopy:
      '🌸 [GIỚI THIỆU SHOWROOM] CHĂN GA GỐI ĐỆM & RÈM CỬA TUYẾN HOA – GIẤC NGỦ NGON, CUỘC SỐNG TRỌN VẸN!\n' +
      '--------------------------------------------\n' +
      '✨ Kính mời Quý khách ghé thăm không gian trưng bày chính hãng của Showroom Tuyến Hoa:\n' +
      '🛏️ CHĂN GA: Êm ái – Thoáng mát, đủ mẫu phòng cưới & gia đình.\n' +
      '☁️ GỐI NẰM: Thư giãn cổ vai gáy – Tốt cho sức khỏe.\n' +
      '🛡️ ĐỆM CHÍNH HÃNG: Êm ấm – Vững chãi, bảo hành 5–10 năm (Từ 1.350.000đ/tấm).\n' +
      '🪟 RÈM CỬA – RÈM VẢI – RÈM GỖ – RÈM TRÚC: Sang trọng – Thẩm mỹ (Rèm vải cản nắng chỉ 600.000đ/m ngang cả lắp).\n' +
      '👑 MÀN KHUNG INOX CAO CẤP (1,8m × 2,0m): Chỉ 1.000.000đ / 1 bộ bao lắp tận giường!\n' +
      '--------------------------------------------\n' +
      '🚛 Miễn phí mang mẫu, giao hàng và lắp đặt tận nhà!\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528 (Showroom Tuyến Hoa – Ứng Hòa, Hà Nội)',
  },
  {
    id: 'toan-canh-showroom-tuyen-hoa-2-tang-sr02',
    code: 'SR-TH-02',
    category: 'cong-trinh-video',
    categoryName: 'Showroom & Công Trình Thực Tế',
    title: 'Toàn Cảnh Tòa Nhà 2 Tầng Showroom Tuyến Hoa: Chăn - Ga - Gối - Đệm - Phông - Rèm Mặt Đường Lớn',
    shortTitle: 'Toàn Cảnh Showroom Tuyến Hoa 2 Tầng Mặt Đường Lớn',
    priceDisplay: 'Màn 1Tr · Rèm 600k/m',
    marketPriceRange: 'Đại lý cấp 1 – Cam kết giá tốt nhất khu vực',
    marketPriceNote: 'Showroom 2 tầng quy mô lớn với 3 gian kính mặt tiền rộng rãi, vỉa hè đỗ xe ô tô thoải mái, luôn có sẵn hàng giao ngay trong ngày.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Màn Khung Inox Cao Cấp (Rộng 1,8m × Dài 2,0m)',
        marketPrice: '1.300.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Đủ 4 màu: Xanh Dương, Tím Huế, Xanh Lam, Xanh Cốm',
      },
      {
        sizeOrOption: 'Rèm Vải Gấm Cản Nắng 100% & Phông Rèm Sự Kiện',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Bao gồm thanh suốt & công lắp đặt',
      },
      {
        sizeOrOption: 'Trọn Bộ Chăn Ga Gối Đệm Phòng Cưới & Gia Đình',
        marketPrice: '3.500.000đ – 6.500.000đ',
        storePrice: '2.500.000đ – 4.800.000đ',
        note: 'Chiết khấu trực tiếp 20% – 30% tại Showroom',
      },
    ],
    numericPrice: 600000,
    unitLabel: 'Showroom 2 tầng mặt đường lớn – Đỗ ô tô thoải mái',
    standardDimensions: 'Mặt tiền 3 gian kính lớn · Chăn - Ga - Gối - Đệm - Phông - Rèm',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
    secondaryImages: [
      '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
      '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png',
    ],
    highlightTag: 'Tòa Nhà 2 Tầng Mặt Đường Lớn (Đã Lọc 2 Ảnh Trùng)',
    summary:
      'Toàn cảnh mặt tiền tòa nhà 2 tầng bề thế của SHOWROOM TUYẾN HOA (CHĂN - GA - GỐI - ĐỆM - PHÔNG - RÈM): Tầng 1 thiết kế 3 gian kính lớn trưng bày giường mẫu và rèm vải đủ màu sắc, vỉa hè rộng rãi thuận tiện đỗ xe máy và ô tô.',
    visualAnnotations: [
      {
        label: 'Mặt tiền 3 gian kính lớn trưng bày giường & rèm mẫu',
        detail: 'Nhìn từ ngoài đường đã thấy rõ các bộ giường chăn ga gối đệm và hệ phông rèm đủ màu sắc rực rỡ.',
      },
      {
        label: 'Vỉa hè lát gạch rộng thoáng – Đỗ ô tô tận cửa',
        detail: 'Thuận tiện cho khách hàng đi xe máy hoặc ô tô gia đình ghé chọn mua đệm và rèm cửa trực tiếp.',
      },
      {
        label: 'Đã loại bỏ 2 bản sao trùng lặp & 1 ảnh phố trống',
        detail: 'Chỉ giữ lại duy nhất 01 bức ảnh chính thức sắc nét nhất của tòa nhà 2 tầng Showroom Tuyến Hoa.',
      },
    ],
    specs: [
      { label: 'Mã hình ảnh', value: 'SR-TH-02 (Toàn Cảnh Tòa Nhà 2 Tầng Showroom Tuyến Hoa)' },
      { label: 'Biển hiệu chính', value: 'SHOWROOM TUYẾN HOA: CHĂN - GA - GỐI - ĐỆM - PHÔNG - RÈM' },
      { label: 'Quy mô trưng bày', value: 'Tòa nhà 2 tầng mặt đường lớn – 3 gian cửa kính trưng bày mẫu thực tế' },
      { label: 'Giờ mở cửa', value: '06:30 – 21:00 tất cả các ngày trong tuần' },
      { label: 'Hotline / Zalo', value: '0344.727.528 (Anh Tuyến – Phục vụ tận nơi)' },
    ],
    articleParagraphs: [
      'Tọa lạc ngay mặt đường lớn thuận tiện giao thông, tòa nhà 2 tầng Showroom Tuyến Hoa (Chăn - Ga - Gối - Đệm - Phông - Rèm) nổi bật với thiết kế 3 gian kính mặt tiền rộng mở cùng bảng hiệu hoa sen hồng trang nhã.',
      'Tại tầng 1, quý khách có thể dễ dàng quan sát và trải nghiệm trực tiếp các mẫu giường ngủ trưng bày trọn bộ Chăn Ga Gối Đệm bên trái, cùng hệ thống Phông Rèm hội trường, Rèm Vải gấm cản nắng, Rèm Cầu Vồng đa dạng sắc màu bên phải.',
      'Với kho hàng lớn luôn có sẵn và đội xe bán tải giao lắp miễn phí tận nơi, Showroom Tuyến Hoa cam kết đáp ứng nhanh nhất mọi nhu cầu sắm sửa nội thất phòng ngủ và rèm cửa của bà con.'
    ],
    facebookPostCopy:
      '🏢 [TOÀN CẢNH SHOWROOM 2 TẦNG] TUYẾN HOA: CHĂN - GA - GỐI - ĐỆM - PHÔNG - RÈM MẶT ĐƯỜNG LỚN!\n' +
      '--------------------------------------------\n' +
      '📍 Mặt tiền 3 gian kính rộng rãi, vỉa hè đỗ xe ô tô thoải mái – Kính mời bà con ghé xem mẫu trực tiếp!\n' +
      '💰 BÁO GIÁ TẬN XƯỞNG NIÊM YẾT CÔNG KHAI:\n' +
      '✅ Màn khung Inox cao cấp (Rộng 1,8m × Dài 2,0m): 1.000.000đ / 1 bộ cả lắp.\n' +
      '✅ Rèm vải cản nắng 100%: 600.000đ / mét ngang hoàn thiện cả thanh treo & công lắp.\n' +
      '✅ Đệm bông ép Hàn Quốc gấp 3 chính hãng: Từ 1.350.000đ – 2.450.000đ/tấm.\n' +
      '✅ Bạt mái xếp lượn sóng: 350.000đ / 1 m² trọn gói.\n' +
      '--------------------------------------------\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528 (Miễn phí mang mẫu & lắp đặt tận nhà)!',
  },
  {
    id: 'dem-lo-xo-tui-gold-3-vien-everhome-dlx01',
    code: 'DLX-EH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Đệm Lò Xo Túi Độc Lập & Đệm Lò Xo Gold 3 Viền Everhome Chính Hãng – Trưng Bày Tại Showroom & Tổng Kho Tuyến Hoa',
    shortTitle: 'Đệm Lò Xo Túi & Gold 3 Viền Everhome',
    priceDisplay: '2.850.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 3.800.000đ – 5.950.000đ / tấm',
    marketPriceNote: 'Phân phối trực tiếp từ Tổng Kho Everhome Tuyến Hoa (có đủ bản nguyên tấm hoàng gia và bản hút chân không cuộn tròn tiện lợi). Tiết kiệm 25% – 30% so với giá niêm yết hãng.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Đệm Lò Xo Túi Độc Lập Everhome (Cỡ 1,6m × 2,0m × dày 23cm)',
        marketPrice: '3.850.000đ / tấm',
        storePrice: '2.850.000đ / tấm',
        note: 'Có bản đóng cuộn hút chân không dễ chuyển lên tầng cao',
      },
      {
        sizeOrOption: '2. Đệm Lò Xo Túi Độc Lập Everhome (Cỡ 1,8m × 2,0m × dày 23cm)',
        marketPrice: '4.350.000đ / tấm',
        storePrice: '3.250.000đ / tấm',
        note: 'Chống rung động khi người nằm cạnh trở mình',
      },
      {
        sizeOrOption: '3. Đệm Lò Xo Gold 3 Viền Hoàng Gia Everhome (1,8m × 2,0m × dày 27cm)',
        marketPrice: '5.950.000đ / tấm',
        storePrice: '4.450.000đ / tấm',
        note: 'Tích hợp lớp Pillow Top êm ái chuẩn khách sạn 5 sao',
      },
    ],
    numericPrice: 2850000,
    unitLabel: '1 tấm chính hãng Everhome (Miễn phí xe bán tải giao tận giường)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m · 1,8m × 2,0m · 2,0m × 2,2m (Dày 23cm – 27cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/dem_lo_xo_everhome_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/dem_lo_xo_everhome_tuyen_hoa.png',
      '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png',
    ],
    highlightTag: 'Chính Hãng Everhome · Đã Lọc Ảnh Trùng',
    summary:
      'Dòng Đệm Lò Xo Túi Độc Lập & Đệm Lò Xo Gold 3 Viền Everhome chính hãng trưng bày trên giường tân cổ điển tại Showroom Tuyến Hoa và sẵn hàng số lượng lớn tại kho (cả dạng nguyên tấm và dạng hút chân không cuộn gọn).',
    visualAnnotations: [
      {
        label: 'Hệ lò xo túi độc lập & thiết kế Gold 3 viền sang trọng',
        detail: 'Mỗi con lò xo thép cacbon được bọc trong túi vải riêng biệt giúp nâng đỡ cột sống êm ái, không gây tiếng kêu hay rung lắc.',
      },
      {
        label: 'Đầy đủ bản nguyên tấm & bản hút chân không cuộn gọn',
        detail: 'Dạng cuộn hút chân không chính hãng Everhome giúp vận chuyển qua cầu thang hẹp hoặc lên tầng cao cực kỳ dễ dàng.',
      },
      {
        label: 'Chiết khấu trực tiếp 25% – 30% tại Tổng Kho Tuyến Hoa',
        detail: 'Giá chỉ từ 2.850.000đ/tấm (1m6×2m) và 3.250.000đ/tấm (1m8×2m), bảo hành chính hãng 7 – 10 năm.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DLX-EH-01 (Đệm Lò Xo Túi & Gold 3 Viền Everhome)' },
      { label: 'Thương hiệu', value: 'Everhome Chính Hãng – Đại lý cấp 1 Tuyến Hoa (0344.727.528)' },
      { label: 'Giá cỡ 1,6m × 2,0m', value: '2.850.000đ / tấm (Giá thị trường: 3.850.000đ)' },
      { label: 'Giá cỡ 1,8m × 2,0m', value: '3.250.000đ / tấm | Bản Gold 3 Viền: 4.450.000đ / tấm' },
      { label: 'Quy cách đóng gói', value: 'Nguyên tấm bọc nilon dày hoặc Hút chân không cuộn tròn' },
      { label: 'Chế độ bảo hành', value: 'Bảo hành chính hãng Everhome 7 – 10 năm tận nhà' },
    ],
    articleParagraphs: [
      'Đệm Lò Xo Túi Độc Lập và Đệm Lò Xo Gold 3 Viền Everhome (Mã DLX-EH-01) là dòng đệm cao cấp chuyên dụng cho phòng cưới, biệt thự và gia đình hiện đại đang được trưng bày trực tiếp tại Showroom Chăn Ga Gối Đệm Tuyến Hoa.',
      'Nhờ hệ thống lò xo túi độc lập mật độ cao kết hợp lớp mút đàn hồi Pillow Top và vỏ gấm dệt Jacquard kháng khuẩn, đệm ôm sát đường cong cơ thể, giải phóng hoàn toàn áp lực vùng vai gáy và thắt lưng mà không hề gây rung động cho người nằm cạnh khi trở mình.',
      'Tại Tổng Kho Tuyến Hoa, quý khách có thể chọn dòng nguyên tấm truyền thống hoặc dòng Đệm Lò Xo Túi Everhome ép hút chân không cuộn gọn thông minh với mức giá tận gốc chỉ từ 2.850.000đ/tấm (cỡ 1,6m×2,0m) đến 3.250.000đ/tấm (cỡ 1,8m×2,0m), miễn phí 100% xe bán tải giao tận giường.'
    ],
    facebookPostCopy:
      '🛏️ [TỔNG KHO ĐỆM EVERHOME TUYẾN HOA] ĐỆM LÒ XO TÚI ĐỘC LẬP & ĐỆM LÒ XO GOLD 3 VIỀN CHÍNH HÃNG!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.850.000đ – 5.950.000đ / tấm\n' +
      '🔥 GIÁ TẠI SHOWROOM TUYẾN HOA (CHIẾT KHẤU NGAY 25% – 30%):\n' +
      '   👉 Đệm Lò Xo Túi Everhome 1,6m × 2,0m: Chỉ 2.850.000đ / tấm\n' +
      '   👉 Đệm Lò Xo Túi Everhome 1,8m × 2,0m: Chỉ 3.250.000đ / tấm\n' +
      '   👉 Đệm Lò Xo Gold 3 Viền Hoàng Gia 1,8m × 2,0m: Chỉ 4.450.000đ / tấm\n' +
      '--------------------------------------------\n' +
      '📌 ƯU ĐIỂM VƯỢT TRỘI:\n' +
      '✔️ Lò xo túi độc lập êm ái tuyệt đối, trở mình không rung lắc, nâng đỡ cột sống chuẩn y khoa.\n' +
      '✔️ Có sẵn cả bản nguyên tấm và bản hút chân không cuộn gọn dễ dàng mang lên cầu thang tầng cao.\n' +
      '✔️ Cam kết chính hãng Everhome 100% – Bảo hành 7 đến 10 năm!\n' +
      '🚛 Miễn phí xe bán tải Ngọc Tuyến – Tuyến Hoa giao đệm tận giường ngủ!\n' +
      '📞 Gọi/Zalo đặt ngay: 0344.727.528 (Showroom Tuyến Hoa – Ứng Hòa, Hà Nội)',
  },
  {
    id: 'nem-cao-su-100-thien-nhien-everhome-dcs01',
    code: 'DCS-EH-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Nệm Cao Su 100% Thiên Nhiên Everhome Kháng Khuẩn – Đàn Hồi Chuẩn Y Khoa, Chống Đau Lưng (Bảo Hành 10 Năm)',
    shortTitle: 'Nệm Cao Su 100% Thiên Nhiên Everhome',
    priceDisplay: '4.850.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 6.500.000đ – 7.800.000đ / tấm',
    marketPriceNote: 'Nệm cao su thiên nhiên 100% nguyên khối đổ khuôn 2 mặt lỗ thoáng khí. Tặng kèm bộ gối cao su non khi mua tại Showroom Tuyến Hoa.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Nệm Cao Su Thiên Nhiên Everhome 1,6m × 2,0m (Dày 5cm)',
        marketPrice: '4.950.000đ / tấm',
        storePrice: '3.650.000đ / tấm',
        note: 'Êm ái, gọn nhẹ, bảo hành 10 năm',
      },
      {
        sizeOrOption: '2. Nệm Cao Su Thiên Nhiên Everhome 1,6m × 2,0m (Dày 10cm chuẩn)',
        marketPrice: '6.500.000đ / tấm',
        storePrice: '4.850.000đ / tấm',
        note: 'Bán chạy số 1 – Tặng kèm 2 gối cao su non',
      },
      {
        sizeOrOption: '3. Nệm Cao Su Thiên Nhiên Everhome 1,8m × 2,0m (Dày 10cm chuẩn)',
        marketPrice: '7.800.000đ / tấm',
        storePrice: '5.450.000đ / tấm',
        note: 'Nâng đỡ 5 vùng cơ thể, chống đau mỏi lưng',
      },
    ],
    numericPrice: 4850000,
    unitLabel: '1 tấm cao su thiên nhiên nguyên khối (Tặng kèm gối cao su)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m · 1,8m × 2,0m · Độ dày 5cm / 10cm / 15cm',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/dem_cao_su_everhome_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/dem_cao_su_everhome_tuyen_hoa.png',
      '/assets/aistudio/IMG_4553_3bdc7af1.JPG',
    ],
    highlightTag: '100% Cao Su Thiên Nhiên · BH 10 Năm',
    summary:
      'Nệm Cao Su 100% Thiên Nhiên Everhome nguyên khối tại kho Tuyến Hoa: Mặt trên hàng nghìn lỗ thông hơi tròn đối lưu khí, mặt dưới cấu trúc chân vuông vững chãi nâng đỡ cột sống hoàn hảo suốt 15–20 năm.',
    visualAnnotations: [
      {
        label: '100% mủ cao su thiên nhiên nguyên khối không pha tạp',
        detail: 'Độ đàn hồi tự nhiên bền bỉ 15–20 năm không xẹp lún, nâng đỡ trọn vẹn 5 vùng cơ thể từ đầu đến chân.',
      },
      {
        label: 'Hệ thống lỗ thông hơi tròn mặt trên & chân vuông mặt dưới',
        detail: 'Lưu thông không khí liên tục, chống hầm nóng lưng vào mùa hè và giữ ấm áp vào mùa đông.',
      },
      {
        label: 'Giá gốc tại Tổng Kho Tuyến Hoa tiết kiệm gần 2 triệu/tấm',
        detail: 'Cỡ 1,6m×2m×10cm chỉ 4.850.000đ; cỡ 1,8m×2m×10cm chỉ 5.450.000đ, tặng kèm bộ gối cao su êm ái.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DCS-EH-01 (Nệm Cao Su 100% Thiên Nhiên Everhome)' },
      { label: 'Chất liệu cốt lõi', value: '100% Cao su thiên nhiên nguyên khối kháng khuẩn khử mùi' },
      { label: 'Giá cỡ 1,6m × 2,0m × 10cm', value: '4.850.000đ / tấm (Thị trường: 6.500.000đ/tấm)' },
      { label: 'Giá cỡ 1,8m × 2,0m × 10cm', value: '5.450.000đ / tấm (Thị trường: 7.800.000đ/tấm)' },
      { label: 'Quà tặng kèm', value: 'Tặng ngay 02 ruột gối cao su non + Miễn phí giao tận phòng' },
      { label: 'Bảo hành chính hãng', value: '10 Năm không xẹp lún (Độ bền thực tế 15–20 năm)' },
    ],
    articleParagraphs: [
      'Nệm Cao Su 100% Thiên Nhiên Everhome (Mã DCS-EH-01) được sản xuất từ nguồn mủ cao su tự nhiên tinh khiết qua dây chuyền xử lý kháng khuẩn và khử mùi hiện đại, mang lại giấc ngủ êm sâu và hỗ trợ trị liệu đau mỏi lưng hiệu quả cho người lớn tuổi cũng như người làm việc văn phòng.',
      'Hình ảnh thực tế tại kho Tuyến Hoa cho thấy rõ kết cấu khuôn đúc nguyên khối chuẩn mực: mặt trên bố trí hàng nghìn lỗ thông hơi nhỏ li ti giúp thoát nhiệt nhanh, mặt dưới là hệ thống ô chân vuông chịu lực vững chãi không bị biến dạng qua hàng chục năm sử dụng.',
      'Nhờ nhập trực tiếp số lượng lớn từ nhà máy Everhome, Showroom Tuyến Hoa ưu đãi giá chỉ 4.850.000đ cho tấm 1,6m×2,0m dày 10cm và 5.450.000đ cho tấm 1,8m×2,0m dày 10cm (tiết kiệm từ 1,6 đến 2,3 triệu đồng so với giá thị trường).'
    ],
    facebookPostCopy:
      '🌿 [KHO NỆM CAO SU TUYẾN HOA] NỆM CAO SU 100% THIÊN NHIÊN EVERHOME NGUYÊN KHỐI – BẢO HÀNH 10 NĂM!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 6.500.000đ – 7.800.000đ / tấm\n' +
      '🔥 GIÁ GỐC TẠI KHO TUYẾN HOA (TẶNG KÈM 2 GỐI CAO SU NON):\n' +
      '   👉 Cỡ 1,6m × 2,0m (Dày 5cm): Chỉ 3.650.000đ / tấm\n' +
      '   👉 Cỡ 1,6m × 2,0m (Dày 10cm): Chỉ 4.850.000đ / tấm\n' +
      '   👉 Cỡ 1,8m × 2,0m (Dày 10cm): Chỉ 5.450.000đ / tấm\n' +
      '--------------------------------------------\n' +
      '✅ 100% Cao su thiên nhiên nguyên khối đàn hồi chuẩn y khoa, nâng đỡ cột sống chống đau lưng.\n' +
      '✅ Hàng nghìn lỗ thoáng khí mặt trên & chân vuông mặt dưới thông thoáng 4 mùa.\n' +
      '✅ Bảo hành chính hãng 10 năm – Độ bền 15 đến 20 năm!\n' +
      '📞 Gọi/Zalo giao ngay tận nhà: 0344.727.528 (Showroom Tuyến Hoa – Ứng Hòa, Hà Nội)',
  },
  {
    id: 'vach-rem-to-ong-cua-vom-phong-khach-rto01',
    code: 'RTO-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Showroom & Công Trình Thực Tế',
    title: 'Vách Rèm Tổ Ong Ngăn Lạnh Điều Hòa Lắp Cửa Vòm Tân Cổ Điển & Phòng Khách Hiện Đại Tuyến Hoa',
    shortTitle: 'Vách Rèm Tổ Ong Cửa Vòm & Phòng Khách',
    priceDisplay: '650.000đ / m²',
    marketPriceRange: 'Giá thị trường: 880.000đ – 1.150.000đ / m²',
    marketPriceNote: 'Xưởng Tuyến Hoa trực tiếp uốn khung nhôm vòm cong nan quạt xòe và lắp đặt vách rèm tổ ong tráng bạc 2 lớp ngăn lạnh điều hòa tuyệt đối.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Vách Rèm Tổ Ong Ngăn Phòng Khách / Cầu Thang (Hệ kéo ngang)',
        marketPrice: '880.000đ / m²',
        storePrice: '650.000đ / m²',
        note: 'Lõi giấy bạc 2 lớp giữ nhiệt điều hòa 100%',
      },
      {
        sizeOrOption: '2. Vách Rèm Tổ Ong Lắp Cửa Vòm Tân Cổ Điển (Có vòm nan quạt)',
        marketPrice: '1.150.000đ / m²',
        storePrice: '750.000đ / m²',
        note: 'Uốn vòm nhôm chuẩn xác theo độ cong thực tế của cửa',
      },
      {
        sizeOrOption: '3. Cửa Đi 2 Cánh Ghép Tổ Ong + Lưới Chống Muỗi (2 trong 1)',
        marketPrice: '1.350.000đ / m²',
        storePrice: '950.000đ / m²',
        note: 'Ban ngày kéo lưới đón gió, bật điều hòa kéo rèm tổ ong',
      },
    ],
    numericPrice: 650000,
    unitLabel: '1 m² hoàn thiện khung nhôm định hình & công lắp đặt',
    standardDimensions: 'Gia công theo kích thước cửa vòm cong, cửa thông phòng, vách ngăn điều hòa',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/vach_rem_to_ong_cua_vom_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/vach_rem_to_ong_cua_vom_tuyen_hoa.png',
      '/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg',
      '/assets/aistudio/xuong_san_xuat_rem_tuyen_hoa.png',
    ],
    highlightTag: 'Chuyên Cửa Vòm & Ngăn Lạnh Điều Hòa',
    summary:
      'Thi công thực tế Vách Rèm Tổ Ong ngăn lạnh điều hòa cho hệ cửa vòm tân cổ điển (kết hợp nan quạt xòe nửa vòm phía trên) và bộ đôi vách ngăn phòng khách lắp dưới ô kính vòm hiện đại.',
    visualAnnotations: [
      {
        label: 'Thiết kế cửa vòm nan quạt xòe kết hợp vách kéo 2 cánh',
        detail: 'Phần vòm cong phía trên được xếp nan tổ ong hình rẻ quạt sang trọng, phần dưới kéo mở 2 cánh nhẹ nhàng.',
      },
      {
        label: 'Lõi tráng bạc 2 lớp giữ hơi lạnh điều hòa 100%',
        detail: 'Ngăn hoàn toàn hơi lạnh thất thoát sang phòng bếp hoặc cầu thang, giúp điều hòa làm mát nhanh và tiết kiệm 40% điện.',
      },
      {
        label: 'Xếp gọn sát tường chỉ 10cm – Không vướng ray sàn',
        detail: 'Khi không bật điều hòa, đẩy xếp gọn vào khung nhôm hai bên trả lại lối đi rộng thoáng hoàn toàn.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'RTO-TH-01 (Vách Rèm Tổ Ong Cửa Vòm & Phòng Khách)' },
      { label: 'Đơn giá vách phẳng', value: '650.000đ / m² cả lắp (Giá thị trường: 880.000đ/m²)' },
      { label: 'Đơn giá hệ cửa vòm cong', value: '750.000đ / m² cả lắp (Giá thị trường: 1.150.000đ/m²)' },
      { label: 'Cấu tạo vải rèm', value: 'Vải không dệt ép nếp tổ ong 26mm + Lõi tráng bạc cách nhiệt' },
      { label: 'Màu sắc khung & rèm', value: 'Khung nhôm nâu cafe, ghi xám, trắng sứ, vân gỗ | Vải kem, nâu, ghi' },
      { label: 'Bảo hành kỹ thuật', value: '3 Năm tận nhà bởi Xưởng Nhôm Kính & Rèm Tuyến Hoa' },
    ],
    articleParagraphs: [
      'Với các ngôi nhà phố hiện đại và biệt thự tân cổ điển sử dụng thiết kế cửa vòm cong hoặc không gian liên thông phòng khách – cầu thang – phòng ăn, việc lắp cửa kính truyền thống thường tốn diện tích và làm mất vẻ mềm mại của kiến trúc.',
      'Giải pháp Vách Rèm Tổ Ong Cửa Vòm & Phòng Khách (Mã RTO-TH-01) do Xưởng Tuyến Hoa trực tiếp gia công giải quyết triệt để bài toán này: Phần nửa vòm phía trên được tạo hình nan quạt xòe cố định khít tuyệt đối với vòm tường, trong khi phần thân cửa bên dưới là hệ rèm tổ ong 2 cánh kéo ngang siêu nhẹ.',
      'Bên trong mỗi khoang vải hình lục giác đều được tráng 2 lớp bạc cách nhiệt giúp khóa chặt 100% hơi lạnh điều hòa. Giá xuất xưởng trọn gói cả lắp đặt tại Tuyến Hoa chỉ 650.000đ/m² cho vách phẳng và 750.000đ/m² cho hệ cửa vòm uốn cong.'
    ],
    facebookPostCopy:
      '🏛️ [SIÊU PHẨM CỬA VÒM & NGĂN PHÒNG] VÁCH RÈM TỔ ONG NGĂN LẠNH ĐIỀU HÒA TUYẾN HOA!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 880.000đ – 1.150.000đ / m²\n' +
      '🔥 GIÁ XUẤT XƯỞNG TUYẾN HOA (BAO ĐO ĐẠC & LẮP ĐẶT TẬN NHÀ):\n' +
      '   👉 Vách rèm tổ ong ngăn phòng khách / cầu thang: Chỉ 650.000đ / m²\n' +
      '   👉 Vách rèm tổ ong uốn Cửa Vòm Tân Cổ Điển: Chỉ 750.000đ / m²\n' +
      '--------------------------------------------\n' +
      '✅ Lõi tráng bạc 2 lớp giữ nhiệt điều hòa 100%, tiết kiệm 40% tiền điện mùa hè.\n' +
      '✅ Kéo ra thành vách ngăn sang trọng – Đẩy xếp gọn sát tường chỉ 10cm, không vướng lối đi!\n' +
      '✅ Chuyên trị mọi ô cửa vòm cong, gầm cầu thang, cửa thông phòng bếp.\n' +
      '📞 Gọi/Zalo Anh Tuyến khảo sát miễn phí: 0344.727.528!',
  },
  {
    id: 'rem-cuon-chong-nang-van-phong-gia-dinh-rc01',
    code: 'RC-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Showroom & Công Trình Thực Tế',
    title: 'Rèm Cuốn Chống Nắng Văn Phòng, Showroom & Cửa Sổ Gia Đình Cản Sáng 100% (Ghi Xám, Xanh Dương, Kem Vàng)',
    shortTitle: 'Rèm Cuốn Chống Nắng Văn Phòng & Gia Đình',
    priceDisplay: '280.000đ / m²',
    marketPriceRange: 'Giá thị trường: 380.000đ – 450.000đ / m²',
    marketPriceNote: 'Trọn gói cả thanh cuộn nhôm hợp kim, đầu kéo trợ lực và công thợ lắp đặt tận nơi cho văn phòng, trường học, quán cafe và gia đình.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Cuốn Trơn Cản Sáng 100% (Màu Ghi Xám / Xanh Dương / Kem Vàng)',
        marketPrice: '380.000đ / m²',
        storePrice: '280.000đ / m²',
        note: 'Vải phủ nhựa PVC chống nắng & tia UV tuyệt đối',
      },
      {
        sizeOrOption: '2. Rèm Cuốn Lưới Xuyên Sáng Văn Phòng & Quán Cafe (Cản nắng 85%)',
        marketPrice: '450.000đ / m²',
        storePrice: '320.000đ / m²',
        note: 'Chống chói mắt nhưng vẫn nhìn được không gian bên ngoài',
      },
      {
        sizeOrOption: '3. Rèm Cầu Vồng Hàn Quốc 2 Lớp So Le Cao Cấp',
        marketPrice: '650.000đ / m²',
        storePrice: '520.000đ / m²',
        note: 'Hộp máng nhôm sơn tĩnh điện sang trọng',
      },
    ],
    numericPrice: 280000,
    unitLabel: '1 m² hoàn thiện cả phụ kiện & công lắp đặt',
    standardDimensions: 'May đo lọt lòng khuôn cửa sổ hoặc phủ bì vách kính lớn',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/rem_cuon_van_phong_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/rem_cuon_van_phong_tuyen_hoa.png',
      '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg',
      '/assets/aistudio/IMG_5053_4a4c9d67.JPG',
    ],
    highlightTag: 'Trọn Gói 280.000đ/m² Cả Lắp',
    summary:
      'Bộ sưu tập công trình Rèm Cuốn Chống Nắng 100% do Tuyến Hoa lắp đặt cho hành lang vách kính dài (màu ghi xám), cửa sổ phòng làm việc (màu xanh dương nhạt) và mặt tiền văn phòng công ty (màu kem vàng).',
    visualAnnotations: [
      {
        label: 'Cản nắng & cách nhiệt 100% cho vách kính hướng Tây',
        detail: 'Vải Polyester tráng nhựa cản 100% ánh nắng chói chang, giúp màn hình máy tính không bị lóa và giảm tải cho điều hòa.',
      },
      {
        label: 'Lắp gọn lọt lòng cửa sổ – Không chiếm diện tích',
        detail: 'Cuộn gọn hoàn toàn lên ống nhôm phía trên khi cần mở rộng tầm nhìn, cực kỳ gọn gàng cho bàn làm việc và tủ hồ sơ.',
      },
      {
        label: 'Giá xuất xưởng chỉ 280.000đ/m² bao gồm cả công lắp đặt',
        detail: 'Đầy đủ bảng màu Ghi xám, Xanh dương nhạt, Kem vàng, Trắng sứ; độ bền cơ học trên 10 năm.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'RC-TH-01 (Rèm Cuốn Chống Nắng Văn Phòng & Gia Đình)' },
      { label: 'Đơn giá rèm cuốn trơn', value: '280.000đ / m² cả lắp (Giá thị trường: 380.000đ/m²)' },
      { label: 'Đơn giá rèm cuốn lưới', value: '320.000đ / m² cả lắp (Giá thị trường: 450.000đ/m²)' },
      { label: 'Chất liệu vải', value: '75% PVC + 25% Polyester chống nắng 100%, chống bám bụi & chống ẩm' },
      { label: 'Màu sắc thực tế', value: 'Ghi xám hiện đại, Xanh dương dịu mát, Kem vàng ấm áp, Trắng kem' },
      { label: 'Bảo hành phụ kiện', value: '3 Năm cho ống nhôm, dây kéo hạt nhựa cường lực và đầu khóa bi' },
    ],
    articleParagraphs: [
      'Đối với các không gian văn phòng làm việc, phòng học, hành lang vách kính lớn hay cửa sổ phòng ngủ nhỏ cần sự gọn gàng tối đa, Rèm Cuốn Chống Nắng 100% (Mã RC-TH-01) của Xưởng Rèm Tuyến Hoa là lựa chọn kinh tế và bền bỉ bậc nhất.',
      'Như trong các công trình thực tế vừa bàn giao: Dãy rèm cuốn màu ghi xám lắp dọc hành lang kính có quầy bar cây xanh, bộ rèm cuốn màu xanh dương nhạt lắp lọt lòng cửa sổ, và hệ rèm cuốn màu kem vàng lắp full vách kính văn phòng đều mang lại vẻ phẳng phiu, chuyên nghiệp và hiện đại.',
      'Với đơn giá trọn gói chỉ 280.000đ/m² (đã bao gồm thanh nhôm hợp kim chịu lực, bộ đầu kéo trợ lực và công thợ khoan lắp tận nơi), khách hàng tiết kiệm ngay 100.000đ/m² so với mặt bằng thị trường.'
    ],
    facebookPostCopy:
      '🪟 [XƯỞNG RÈM CUỐN TUYẾN HOA] RÈM CUỐN CHỐNG NẮNG 100% CHO VĂN PHÒNG, SHOWROOM & GIA ĐÌNH!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 380.000đ – 450.000đ / m²\n' +
      '🔥 GIÁ TẠI XƯỞNG TUYẾN HOA: CHỈ 280.000Đ / M² (BAO LẮP ĐẶT HOÀN THIỆN)!\n' +
      '--------------------------------------------\n' +
      '✅ Cản nắng – Cản nhiệt 100%, chống chói màn hình máy tính và bảo vệ đồ nội thất.\n' +
      '✅ Bề mặt phủ nhựa chống bám bụi, lau chùi cực nhanh, kéo lên hạ xuống nhẹ nhàng.\n' +
      '✅ Đủ màu sắc đẹp mắt: Ghi xám, Xanh dương nhạt, Kem vàng, Trắng sứ.\n' +
      '📞 Gọi/Zalo mang mẫu đo đạc miễn phí tận nơi: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'quy-trinh-7-buoc-dich-vu-che-nang-ngoc-tuyen-qt01',
    code: 'QT-NT-01',
    category: 'cong-trinh-video',
    categoryName: 'Showroom & Công Trình Thực Tế',
    title: 'Quy Trình 7 Bước Dịch Vụ Rèm - Mành - Bạt Che Nắng & Đại Lý Chăn Ga Gối Đệm Ngọc Tuyến – Tuyến Hoa',
    shortTitle: 'Quy Trình 7 Bước Rèm Bạt & Đại Lý Đệm Ngọc Tuyến',
    priceDisplay: 'Khảo Sát & Lắp 0đ',
    marketPriceRange: 'Đại lý cấp 1 Sông Hồng · Everhome · Everon · Kim Đoan',
    marketPriceNote: 'Ngọc Tuyến – Tuyến Hoa: Mang bóng mát và giấc ngủ trọn vẹn đến mọi nhà với quy trình 7 bước chuyên nghiệp, minh bạch từ khảo sát đến bảo hành.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Bước 1 – 3: Khảo Sát Tận Nhà + Tư Vấn Mẫu + Đo Đạc Chính Xác',
        marketPrice: '200.000đ – 300.000đ',
        storePrice: 'MIỄN PHÍ 100%',
        note: 'Anh Tuyến trực tiếp mang mẫu đến tận công trình',
      },
      {
        sizeOrOption: 'Bước 4 – 7: Gia Công Tại Xưởng + Lắp Đặt Sạch Sẽ + Nghiệm Thu',
        marketPrice: 'Tính thêm công lắp 15%',
        storePrice: 'BAO TRỌN GÓI 0Đ',
        note: 'Bảo hành chu đáo 3 – 10 năm tận nhà',
      },
      {
        sizeOrOption: 'Đại Lý Đệm Sông Hồng · Everhome · Everon · Kim Đoan Chính Hãng',
        marketPrice: 'Giá niêm yết hãng',
        storePrice: 'CHIẾT KHẤU 20% – 30%',
        note: 'Đền gấp 10 lần nếu phát hiện hàng giả',
      },
    ],
    numericPrice: 600000,
    unitLabel: 'Quy trình 7 bước chuẩn mực – Phục vụ tận tâm từ A đến Z',
    standardDimensions: 'Chuyên Sông Hồng · Everhome · Everon · Kim Đoan · Rèm Mành Bạt Che Nắng',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/quy_trinh_7_buoc_ngoc_tuyen.png',
    secondaryImages: [
      '/assets/aistudio/quy_trinh_7_buoc_ngoc_tuyen.png',
      '/assets/aistudio/20261023_112551_27542eea.jpg',
      '/assets/aistudio/showroom_tuyen_hoa_stamped.png',
    ],
    highlightTag: 'Quy Trình 7 Bước Chuẩn · Đại Lý Cấp 1',
    summary:
      'Quy trình 7 bước vàng "Ngọc Tuyến: Rèm - Mành - Bạt Che Nắng – Mang bóng mát đến mọi nhà!" kết hợp hệ thống Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến – Tuyến Hoa chuyên phân phối Sông Hồng, Everhome, Everon, Kim Đoan chính hãng.',
    visualAnnotations: [
      {
        label: 'Quy trình 7 bước thi công Rèm – Mành – Bạt Che Nắng',
        detail: '1. Khảo sát -> 2. Tư vấn chọn mẫu -> 3. Đo đạc -> 4. Báo giá -> 5. Gia công tại xưởng -> 6. Lắp đặt -> 7. Hoàn thiện & Bảo hành.',
      },
      {
        label: 'Đại lý chính hãng Sông Hồng – Everhome – Everon – Kim Đoan',
        detail: 'Cửa hàng mặt phố lớn trưng bày đầy đủ chăn ga gối đệm chính hãng với mức chiết khấu gốc 20% – 30%.',
      },
      {
        label: 'Một số điện thoại duy nhất phục vụ tận nơi: 0344.727.528',
        detail: 'Gọi hoặc nhắn Zalo 0344.727.528 là đội ngũ Ngọc Tuyến – Tuyến Hoa có mặt khảo sát và giao lắp ngay trong ngày.',
      },
    ],
    specs: [
      { label: 'Mã dịch vụ', value: 'QT-NT-01 (Quy Trình 7 Bước & Đại Lý Đệm Ngọc Tuyến)' },
      { label: 'Lĩnh vực 1', value: 'Rèm Vải (600k/m) · Rèm Cầu Vồng (520k/m²) · Rèm Tổ Ong (650k/m²) · Bạt Cuốn (220k/m²)' },
      { label: 'Lĩnh vực 2', value: 'Đại lý Chăn Ga Gối Đệm Sông Hồng, Everhome, Everon, Kim Đoan, Vikosan' },
      { label: 'Lĩnh vực 3', value: 'Màn Khung Inox 1,8m×2,0m (1.000.000đ/bộ) & Đặc sản Tương Ngọc Tuyến' },
      { label: 'Hotline / Zalo', value: '0344.727.528 (Anh Tuyến – Chợ Cháy, Ứng Hòa, Hà Nội)' },
    ],
    articleParagraphs: [
      'Với phương châm "Mang bóng mát và giấc ngủ êm ái đến mọi nhà", cơ sở Ngọc Tuyến – Tuyến Hoa chuẩn hóa Quy Trình 7 Bước Dịch Vụ Rèm – Mành – Bạt Che Nắng chuyên nghiệp: (1) Khảo sát thực tế hiện trạng nắng hướng Tây/mưa hắt -> (2) Tư vấn mẫu mã phù hợp kiến trúc -> (3) Đo đạc kích thước chính xác -> (4) Báo giá gốc tận xưởng không phát sinh -> (5) Cắt may & gia công tại xưởng -> (6) Lắp đặt nhanh gọn, sạch sẽ -> (7) Hoàn thiện nghiệm thu & bảo hành dài hạn.',
      'Song song với xưởng mành rèm và bạt che nắng, Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến – Tuyến Hoa tự hào là đại lý phân phối chính thức các thương hiệu lớn: Sông Hồng, Everhome, Everon, Kim Đoan và Vikosan.',
      'Dù quý khách cần lắp 1 bộ rèm cửa sổ, 1 mái bạt tự cuốn ban công hay sắm trọn bộ chăn ga gối đệm cưới, đội ngũ Ngọc Tuyến – Tuyến Hoa đều phục vụ tận tâm từ A đến Z qua số Hotline/Zalo: 0344.727.528.'
    ],
    facebookPostCopy:
      '🌟 [DỊCH VỤ UY TÍN SỐ 1] QUY TRÌNH 7 BƯỚC RÈM – MÀNH – BẠT CHE NẮNG & ĐẠI LÝ ĐỆM NGỌC TUYẾN – TUYẾN HOA!\n' +
      '--------------------------------------------\n' +
      '🛠️ QUY TRÌNH 7 BƯỚC MANG BÓNG MÁT ĐẾN MỌI NHÀ:\n' +
      '1️⃣ Khảo sát tận nơi miễn phí -> 2️⃣ Tư vấn mẫu vải/bạt -> 3️⃣ Đo đạc chuẩn xác -> 4️⃣ Báo giá gốc tận xưởng -> 5️⃣ Gia công sắc nét -> 6️⃣ Lắp đặt sạch sẽ -> 7️⃣ Nghiệm thu & Bảo hành 3–5 năm!\n' +
      '--------------------------------------------\n' +
      '🛏️ ĐẠI LÝ CHĂN GA GỐI ĐỆM CHÍNH HÃNG (CHIẾT KHẤU 20% – 30%):\n' +
      '✅ Chuyên phân phối: SÔNG HỒNG – EVERHOME – EVERON – KIM ĐOAN – VIKOSAN.\n' +
      '✅ Đầy đủ Đệm bông ép, Đệm lò xo túi, Nệm cao su 100% thiên nhiên, Chiếu mây điều hòa (450k/bộ) & Màn khung (1Tr/bộ).\n' +
      '📞 Liên hệ ngay Hotline/Zalo: 0344.727.528 (Phục vụ tận nhà trong ngày)!',
  },

  // ===========================================================================
  // 1. BỘ SƯU TẬP MÀN KHUNG CAO CẤP 1.000.000Đ / BỘ (RỘNG 1,8M × DÀI 2,0M)
  // ===========================================================================
  {
    id: 'man-khung-xanh-duong-hoa-mai-mk01',
    code: 'MK-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Màn Khung 1 Triệu / Bộ (1,8m × 2m)',
    title: 'Màn Khung Cao Cấp Màu Xanh Dương Thêu Hoa Mai Trắng & Diềm Ren Vàng Đồng (Rộng 1,8m × Dài 2,0m)',
    shortTitle: 'Màn Khung Xanh Dương Thêu Hoa Mai (1,8m × 2m)',
    priceDisplay: '1.000.000đ / 1 bộ',
    marketPriceRange: 'Giá thị trường: 1.250.000đ – 1.400.000đ / bộ',
    marketPriceNote: 'Tiết kiệm ngay 250.000đ – 400.000đ/bộ so với giá thị trường. Đã bao gồm khung Inox + màn tuyn thêu hoa + công lắp tận nhà.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Giường 1,6m × 2,0m (Trọn bộ khung + màn)',
        marketPrice: '1.150.000đ',
        storePrice: '950.000đ / bộ',
        note: 'Miễn phí lắp đặt tận giường',
      },
      {
        sizeOrOption: 'Giường 1,8m × 2,0m (Kích thước chuẩn phổ biến)',
        marketPrice: '1.300.000đ',
        storePrice: '1.000.000đ / bộ',
        note: 'Bán chạy số 1 – Đúng giá niêm yết',
      },
      {
        sizeOrOption: 'Giường đại 2,0m × 2,2m (Khung đại chịu lực)',
        marketPrice: '1.500.000đ',
        storePrice: '1.150.000đ / bộ',
        note: 'Đặt may theo kích thước giường lớn',
      },
    ],
    numericPrice: 1000000,
    unitLabel: '1 bộ hoàn thiện (Rộng 1,8m × Dài 2,0m)',
    standardDimensions: 'Rộng 1,8m × Dài 2,0m × Cao 2,15m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/IMG_4550_18a407c3.JPG',
    highlightTag: '1.000.000đ / Bộ (1,8m × 2,0m)',
    summary:
      'Mẫu màn khung ròng rọc cao cấp màu xanh biển dịu mát, đỉnh màn 2 tầng thêu nổi cành hoa mai trắng nhụy vàng kết hợp chân diềm ren dệt kim tuyến vàng đồng hoàng gia. Trọn gói 1.000.000đ/bộ chuẩn giường 1,8m × 2,0m.',
    visualAnnotations: [
      {
        label: 'Đỉnh màn & Diềm 2 tầng thêu nổi',
        detail: 'Thêu họa tiết cành hoa mai trắng 5 cánh nhụy vàng trên nền voan xanh biển, viền lượn sóng mềm mại.',
      },
      {
        label: 'Chân diềm ren vàng đồng hoàng gia',
        detail: 'Phối dải ren dệt hoa văn kim tuyến vàng đồng 2 lớp rủ đều, tôn vẻ sang trọng cho phòng ngủ.',
      },
      {
        label: 'Thân màn tuyn lạnh mắt nhỏ',
        detail: 'Vải tuyn sợi kép dai bền, mắt lưới siêu nhỏ chặn tuyệt đối muỗi và côn trùng nhưng vẫn thoáng khí.',
      },
      {
        label: 'Khung inox chịu lực chuẩn 1,8m × 2,0m',
        detail: 'Khung hợp kim / inox sáng bóng, buông rủ kín chân chiếu và vén gọn nhẹ nhàng sau khi ngủ dậy.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'MK-TH-01 (Xanh Dương Hoa Mai)' },
      { label: 'Giá thị trường chung', value: '1.250.000đ – 1.400.000đ / bộ' },
      { label: 'Giá bán tại Tuyến Hoa', value: '1.000.000đ / 1 bộ hoàn thiện (1,8m × 2,0m)' },
      { label: 'Kích thước chuẩn', value: 'Rộng 1,8m × Dài 2,0m (Cao 2,15m)' },
      { label: 'Chất liệu khung & vải', value: 'Khung Inox chống gỉ + Tuyn lạnh thêu hoa & ren vàng đồng' },
      { label: 'Bảo hành & Lắp đặt', value: 'Miễn phí lắp đặt tận nhà – Bảo hành khung 3 năm' },
    ],
    articleParagraphs: [
      'Màn Khung Xanh Dương Thêu Hoa Mai (Mã MK-TH-01) là mẫu màn khung bán chạy hàng đầu tại cửa hàng Tuyến Hoa dành cho giường đôi tiêu chuẩn Rộng 1,8m × Dài 2,0m. Trong khi giá thị trường hiện nay dao động từ 1.250.000đ – 1.400.000đ/bộ, cửa hàng Tuyến Hoa niêm yết giá gốc tận xưởng chỉ đúng 1.000.000đ / 1 bộ trọn gói.',
      'Điểm nhấn đắt giá của mẫu MK-TH-01 nằm ở phần diềm đỉnh màn 2 tầng: tầng trên thêu nổi những nhánh hoa mai trắng nhụy vàng thanh tao, tầng dưới phối dải ren hoa văn vàng đồng hoàng gia lượn sóng. Thân màn sử dụng chất vải tuyn lạnh sợi dẻo, không nhăn, không co rút khi giặt và ngăn muỗi tuyệt đối 100%.',
      'Hình ảnh thực tế được đội thợ Tuyến Hoa lắp đặt hoàn thiện tại phòng ngủ tầng 2 (cạnh lan can cầu thang inox), chân màn phủ dài chạm chiếu giúp bảo vệ giấc ngủ an toàn tuyệt đối cho cả gia đình.'
    ],
    facebookPostCopy:
      '💙 [BÀI ĐĂNG SỐ 1] MÀN KHUNG CAO CẤP MÀU XANH DƯƠNG THÊU HOA MAI (MÃ MK-TH-01)\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.250.000đ – 1.400.000đ / bộ\n' +
      '🔥 GIÁ TẠI TUYẾN HOA: CHỈ 1.000.000Đ / 1 BỘ (RỘNG 1,8M × DÀI 2,0M – BAO LẮP ĐẶT TẬN NHÀ)!\n' +
      '--------------------------------------------\n' +
      '📌 GHI CHÚ RÕ TỪNG CHI TIẾT SẢN PHẨM:\n' +
      '✔️ Kích thước: Rộng 1,8m × Dài 2,0m × Cao 2,15m (Có đủ cỡ 1,6m×2m giá 950k và 2m×2,2m giá 1.150k).\n' +
      '✔️ Đỉnh màn: May 2 tầng thêu nổi hoa mai trắng nhụy vàng phối chân ren vàng đồng hoàng gia cực sang.\n' +
      '✔️ Thân màn: Vải tuyn lạnh sợi kép mắt nhỏ siêu bền, thoáng mát, chống muỗi 100%.\n' +
      '✔️ Khung màn: Khung Inox chịu lực sáng bóng, kéo ròng rọc nhẹ nhàng, bảo hành 3 năm.\n' +
      '📞 Gọi/Zalo đặt lắp ngay: 0344.727.528 (Cửa hàng Tuyến Hoa – Ứng Hòa, Hà Nội)',
  },
  {
    id: 'man-khung-tim-hue-lang-man-mk02',
    code: 'MK-TH-02',
    category: 'man-khung-1tr',
    categoryName: 'Màn Khung 1 Triệu / Bộ (1,8m × 2m)',
    title: 'Màn Khung Gấp Gọn Màu Tím Huế Lãng Mạn Thêu Hoa Kem & Viền Ren Trắng (Rộng 1,8m × Dài 2,0m)',
    shortTitle: 'Màn Khung Tím Huế Lãng Mạn (1,8m × 2m)',
    priceDisplay: '1.000.000đ / 1 bộ',
    marketPriceRange: 'Giá thị trường: 1.250.000đ – 1.450.000đ / bộ',
    marketPriceNote: 'Mẫu màn phòng cưới bán chạy nhất. Giá tại Tuyến Hoa chỉ 1.000.000đ/bộ (1,8m × 2,0m), rẻ hơn thị trường 250.000đ – 450.000đ.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Giường 1,6m × 2,0m (Màn khung tím phòng cưới)',
        marketPrice: '1.200.000đ',
        storePrice: '950.000đ / bộ',
        note: 'Bao gồm khung Inox & công lắp',
      },
      {
        sizeOrOption: 'Giường 1,8m × 2,0m (Chuẩn giường cưới đôi)',
        marketPrice: '1.350.000đ',
        storePrice: '1.000.000đ / bộ',
        note: 'Đồng giá ưu đãi đặc biệt',
      },
      {
        sizeOrOption: 'Giường đại 2,0m × 2,2m',
        marketPrice: '1.550.000đ',
        storePrice: '1.150.000đ / bộ',
        note: 'Bảo hành khung 3 năm tận nhà',
      },
    ],
    numericPrice: 1000000,
    unitLabel: '1 bộ hoàn thiện (Rộng 1,8m × Dài 2,0m)',
    standardDimensions: 'Rộng 1,8m × Dài 2,0m × Cao 2,15m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/IMG_4551_a163b8cb.JPG',
    highlightTag: '1.000.000đ / Bộ Phòng Cưới',
    summary:
      'Mẫu màn khung màu tím Huế mộng mơ chuyên dụng cho phòng cưới và phòng ngủ vợ chồng. Khung bắt tường trên cao gọn gàng, diềm thêu hoa hồng kem phối ren trắng 2 tầng, giá trọn bộ 1.000.000đ (Rộng 1,8m × Dài 2,0m).',
    visualAnnotations: [
      {
        label: 'Bát khung inox bắt tường chắc chắn',
        detail: 'Cố định vững chãi vào tường bằng vít nở inox, không vướng thành giường hay chân giường.',
      },
      {
        label: 'Diềm đỉnh màn thêu hoa hồng kem trên nền tím',
        detail: 'Họa tiết hoa lá thêu chỉ nổi sắc nét, kết hợp đường viền ren trắng tinh khôi chạy dọc khung.',
      },
      {
        label: 'Đai vén màn gọn sát góc tường',
        detail: 'Ban ngày vén gọn toàn bộ thân màn vào góc tường giúp phòng ngủ thoáng đãng, sang trọng.',
      },
      {
        label: 'Kích thước tiêu chuẩn 1,8m × 2,0m',
        detail: 'Vừa khít mọi mẫu giường gỗ và đệm bông ép kích thước 1m8 × 2m thông dụng.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'MK-TH-02 (Tím Huế Phòng Cưới)' },
      { label: 'Giá thị trường chung', value: '1.250.000đ – 1.450.000đ / bộ' },
      { label: 'Giá bán tại Tuyến Hoa', value: '1.000.000đ / 1 bộ hoàn thiện (1,8m × 2,0m)' },
      { label: 'Kích thước chuẩn', value: 'Rộng 1,8m × Dài 2,0m (Cao 2,15m)' },
      { label: 'Kiểu khung', value: 'Khung inox cao cấp gắn tường vén gọn góc' },
      { label: 'Màu sắc & Họa tiết', value: 'Tím Huế lãng mạn thêu hoa kem, phối ren trắng & chân bèo tím' },
    ],
    articleParagraphs: [
      'Màn Khung Tím Huế Lãng Mạn (Mã MK-TH-02) mang sắc tím dịu dàng, ấm áp, luôn là lựa chọn số 1 của các cặp đôi chuẩn bị cưới hỏi hoặc gia chủ yêu thích phong cách phòng ngủ lãng mạn. So với giá thị trường 1.250.000đ – 1.450.000đ/bộ, tại Tuyến Hoa trọn bộ kích thước Rộng 1,8m × Dài 2,0m có giá niêm yết chỉ 1.000.000đ/bộ.',
      'Phần khung được thiết kế thông minh gắn trực tiếp lên tường ở độ cao hợp lý, giúp không gian bên dưới hoàn toàn thông thoáng. Khi không buông màn, toàn bộ thân màn tuyn tím được gom gọn vào góc tường kèm đai buộc đồng màu như một chiếc rèm trang trí hoàng gia.',
      'Đỉnh màn được may 2 lớp bèo rủ mềm mại, điểm xuyết họa tiết hoa hồng kem thêu nổi và đường ren trắng uốn lượn tỉ mỉ từng đường kim mũi chỉ.'
    ],
    facebookPostCopy:
      '💜 [BÀI ĐĂNG SỐ 2] MÀN KHUNG TÍM HUẾ PHÒNG CƯỚI SANG TRỌNG (MÃ MK-TH-02)\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.250.000đ – 1.450.000đ / bộ\n' +
      '🔥 GIÁ TẠI TUYẾN HOA: ĐỒNG GIÁ 1.000.000Đ / 1 BỘ (RỘNG 1,8M × DÀI 2,0M)!\n' +
      '--------------------------------------------\n' +
      '📌 GHI CHÚ RÕ TỪNG CHI TIẾT SẢN PHẨM:\n' +
      '✔️ Kích thước chuẩn giường đôi: Rộng 1,8m × Dài 2,0m × Cao 2,15m.\n' +
      '✔️ Màu sắc: Tông tím Huế ngọt ngào, đỉnh màn thêu hoa kem nổi 3D phối ren trắng 2 tầng.\n' +
      '✔️ Thiết kế: Khung Inox bắt tường chắc chắn, ban ngày vén gọn sát góc tường cực thoáng đẹp.\n' +
      '✔️ Dịch vụ: Miễn phí mang mẫu và khoan lắp tận giường ngủ.\n' +
      '📞 Gọi/Zalo đặt lắp ngay: 0344.727.528 (Tuyến Hoa – Ứng Hòa, Hà Nội)',
  },
  {
    id: 'combo-man-khung-xanh-lam-rem-ghi-mk03',
    code: 'MK-TH-03',
    category: 'man-khung-1tr',
    categoryName: 'Màn Khung 1 Triệu / Bộ (1,8m × 2m)',
    title: 'Combo Màn Khung Xanh Lam Phối Ren Trắng (1.000.000đ/Bộ 1,8m × 2m) & Rèm Cửa Sổ Ghi Xám Cản Nắng (600.000đ/m)',
    shortTitle: 'Màn Khung Xanh Lam Ren Trắng & Rèm Cửa',
    priceDisplay: '1.000.000đ / 1 bộ',
    marketPriceRange: 'Giá thị trường: Màn khung 1,3Tr/bộ + Rèm vải 750k/m ngang',
    marketPriceNote: 'Đặt cả Màn khung + Rèm cửa sổ tiết kiệm trên 500.000đ/phòng so với giá thị trường.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Màn Khung Xanh Lam Ren Trắng (1,8m × 2,0m)',
        marketPrice: '1.300.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Bao gồm khung Inox & công lắp đặt',
      },
      {
        sizeOrOption: '2. Rèm Vải Gấm Cản Nắng Cửa Sổ (Tính theo mét ngang)',
        marketPrice: '750.000đ – 850.000đ / m',
        storePrice: '600.000đ / m ngang',
        note: 'Đã gồm thanh suốt, khuyên ore & công lắp',
      },
      {
        sizeOrOption: '3. Trọn bộ phòng ngủ (1 Màn khung 1,8m×2m + Cửa sổ 2m)',
        marketPrice: '2.800.000đ',
        storePrice: '2.200.000đ / trọn bộ',
        note: 'Tiết kiệm ngay 600.000đ',
      },
    ],
    numericPrice: 1000000,
    unitLabel: '1 bộ màn khung 1,8m × 2,0m (Rèm cửa tính riêng 600k/m)',
    standardDimensions: 'Màn khung: Rộng 1,8m × Dài 2,0m | Rèm cửa sổ: May đo theo cửa',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/IMG_4552_1e188f79.JPG',
    highlightTag: '1.000.000đ / Bộ + Rèm Cửa 600k/m',
    summary:
      'Công trình thực tế lắp đặt trọn bộ phòng ngủ: Màn khung xanh lam pastel phối chân ren trắng tinh khôi (1.000.000đ/bộ rộng 1,8m dài 2,0m) kết hợp Rèm vải ore màu ghi đậm cản nắng 100% cho cửa sổ (600.000đ/m ngang).',
    visualAnnotations: [
      {
        label: 'Màn khung xanh lam phối ren trắng (Bên trái)',
        detail: 'Giá 1.000.000đ/bộ (Rộng 1,8m × Dài 2,0m), diềm thêu hoa vàng nhạt phối chân ren trắng 2 lớp thanh lịch.',
      },
      {
        label: 'Rèm vải cửa sổ màu ghi than (Bên phải)',
        detail: 'Giá 600.000đ/m ngang cả lắp đặt, may ore sóng đều, kèm suốt trắng và núm vén gọn hai bên cửa sổ.',
      },
      {
        label: 'Phối màu nội thất hài hòa, mát mắt',
        detail: 'Sự kết hợp giữa sắc xanh lam dịu nhẹ của màn khung và màu ghi hiện đại của rèm cửa giúp phòng ngủ luôn mát mẻ.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'MK-TH-03 (Xanh Lam Phối Ren Trắng + Rèm Ghi)' },
      { label: 'Giá màn khung (1,8m×2m)', value: '1.000.000đ / bộ (Thị trường: 1.300.000đ/bộ)' },
      { label: 'Giá rèm cửa sổ đi kèm', value: '600.000đ / m ngang (Thị trường: 750.000đ – 850.000đ/m)' },
      { label: 'Chất liệu màn', value: 'Tuyn lạnh xanh lam pastel + Diềm thêu hoa + Chân ren trắng' },
      { label: 'Chất liệu rèm cửa', value: 'Vải gấm bố dệt 3 lớp cản sáng 100%, chống tia UV' },
      { label: 'Thi công thực tế', value: 'Đội ngũ Tuyến Hoa đo đạc và lắp đặt trọn gói trong 45 phút' },
    ],
    articleParagraphs: [
      'Hình ảnh thực tế công trình phòng ngủ được Tuyến Hoa thi công đồng bộ cả 2 hạng mục theo giá gốc tận xưởng: Bộ Màn Khung Xanh Lam Phối Ren Trắng (Mã MK-TH-03, giá 1.000.000đ/bộ kích thước Rộng 1,8m × Dài 2,0m) và Bộ Rèm Vải Cửa Sổ Màu Ghi Đậm (600.000đ/m ngang cả công lắp).',
      'Mẫu màn khung MK-TH-03 sở hữu tông màu xanh lam nhạt (Baby Blue) vô cùng trang nhã, phần diềm trên thêu hoa dây ánh vàng đồng nhẹ nhàng, chân diềm viền ren trắng sữa tạo cảm giác bồng bềnh, thư thái mỗi khi bước vào phòng.',
      'Ngay bên cạnh là cửa sổ khung sắt bảo vệ được lắp bộ rèm vải gấm màu ghi xám 2 cánh vén gọn hai bên, giúp gia chủ chủ động điều chỉnh ánh sáng và giữ nhiệt độ điều hòa mát lạnh suốt mùa hè.'
    ],
    facebookPostCopy:
      '🏡 [BÀI ĐĂNG SỐ 3] COMBO PHÒNG NGỦ ĐẸP MÊ LY: MÀN KHUNG XANH LAM REN TRẮNG + RÈM CỬA SỔ CẢN NẮNG!\n' +
      '💰 BÁO GIÁ CÔNG KHAI THEO THỊ TRƯỜNG:\n' +
      '🔹 1. Màn khung Xanh Lam phối ren trắng (Rộng 1,8m × Dài 2,0m): Chỉ 1.000.000đ / 1 bộ (Giá thị trường 1.300.000đ/bộ).\n' +
      '🔹 2. Rèm vải gấm cản nắng 100% màu ghi sang trọng: Chỉ 600.000đ / mét ngang hoàn thiện cả thanh treo & công lắp (Giá thị trường 750.000đ/m).\n' +
      '--------------------------------------------\n' +
      '✅ Vải tuyn lạnh mềm mịn, đỉnh thêu hoa phối chân ren trắng 2 lớp cực mát mắt.\n' +
      '✅ Miễn phí mang mẫu tận nhà đo đạc và lắp đặt hoàn thiện trong 45 phút!\n' +
      '📞 Gọi/Zalo ngay Tuyến Hoa: 0344.727.528!',
  },
  {
    id: 'combo-man-khung-xanh-com-dem-rem-mk04',
    code: 'MK-TH-04',
    category: 'man-khung-1tr',
    categoryName: 'Màn Khung 1 Triệu / Bộ (1,8m × 2m)',
    title: 'Combo 3 Món Phòng Ngủ: Màn Khung Xanh Cốm Viền Vàng (1.000.000đ/Bộ 1,8m × 2m) + Đệm Bông Ép Gấp 3 + Rèm Cửa',
    shortTitle: 'Màn Khung Xanh Cốm Hoàng Gia (1,8m × 2m)',
    priceDisplay: '1.000.000đ / 1 bộ',
    marketPriceRange: 'Giá thị trường trọn bộ 3 món: 4.800.000đ – 5.600.000đ',
    marketPriceNote: 'Sắm trọn bộ 3 món (Màn khung + Đệm bông ép + Rèm cửa) tại Tuyến Hoa tiết kiệm từ 800.000đ – 1.200.000đ so với mua lẻ ngoài thị trường.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Màn Khung Xanh Cốm Hoàng Gia (1,8m × 2,0m)',
        marketPrice: '1.350.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Đỉnh thêu hoa văn vàng kim sang trọng',
      },
      {
        sizeOrOption: '2. Đệm Bông Ép Hàn Quốc Gấp 3 (1,8m × 2,0m × dày 9cm)',
        marketPrice: '2.890.000đ / tấm',
        storePrice: '2.150.000đ – 2.450.000đ',
        note: 'Chính hãng Vikosan / Sông Hồng bảo hành 5 năm',
      },
      {
        sizeOrOption: '3. Rèm Vải Cửa Sổ Cản Nắng 100% (Màu ghi xám)',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Trọn gói thanh treo & công lắp đặt',
      },
    ],
    numericPrice: 1000000,
    unitLabel: '1 bộ màn khung 1,8m × 2,0m (Đệm & Rèm tính theo kích thước)',
    standardDimensions: 'Màn khung: Rộng 1,8m × Dài 2,0m | Đệm bông ép gấp 3 | Rèm cửa sổ',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/IMG_4553_3bdc7af1.JPG',
    highlightTag: 'Trọn Bộ 3 Món Phòng Ngủ',
    summary:
      'Bàn giao trọn gói 3 sản phẩm tại phòng ngủ khách hàng: (1) Màn khung xanh cốm phối ren vàng hoàng gia 1.000.000đ/bộ rộng 1,8m dài 2,0m; (2) Đệm bông ép gấp 3 kháng khuẩn nguyên nilon; (3) Rèm vải cửa sổ màu ghi xám 600.000đ/m ngang.',
    visualAnnotations: [
      {
        label: '1. Màn khung xanh cốm viền vàng (Góc trái trên)',
        detail: 'Giá 1.000.000đ/bộ (Rộng 1,8m × Dài 2,0m), màu xanh cốm ngọc bích mát dịu, diềm thêu vương miện vàng đồng.',
      },
      {
        label: '2. Đệm bông ép gấp 3 chính hãng (Bên dưới)',
        detail: 'Đệm bông ép Hàn Quốc gấp 3 tấm gọn gàng, nguyên đai nguyên kiện bọc nilon chống ẩm, bảo hành 5 năm.',
      },
      {
        label: '3. Rèm vải cửa sổ màu ghi đậm (Bên phải)',
        detail: 'Trọn gói 600.000đ/m ngang bao gồm thanh treo hợp kim trắng, khoen ore và đai vén gọn hai bên.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'MK-TH-04 (Xanh Cốm Hoàng Gia + Combo Đệm Rèm)' },
      { label: 'Giá màn khung (1,8m×2m)', value: '1.000.000đ / 1 bộ (Thị trường: 1.350.000đ/bộ)' },
      { label: 'Giá rèm cửa sổ', value: '600.000đ / mét ngang (Thị trường: 750.000đ/m)' },
      { label: 'Giá đệm bông ép gấp 3', value: '1.350.000đ – 2.450.000đ (Rẻ hơn thị trường 400k–600k)' },
      { label: 'Màu sắc màn khung', value: 'Xanh cốm (Xanh ngọc) phối diềm thêu hoa văn vàng kim' },
      { label: 'Ưu đãi combo', value: 'Miễn phí vận chuyển & công lắp đặt toàn bộ 3 món tận phòng ngủ' },
    ],
    articleParagraphs: [
      'Nếu anh chị đang hoàn thiện nhà mới hoặc sắm sửa phòng ngủ đồng bộ, bức ảnh thực tế mã MK-TH-04 chính là minh chứng rõ nét nhất cho dịch vụ "Trọn Gói Một Điểm Đến – Giá Tốt Nhất Thị Trường" của Cửa hàng Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa.',
      'Trong cùng một buổi sáng, đội thợ Tuyến Hoa đã bàn giao và lắp đặt hoàn chỉnh 3 hạng mục: Bộ Màn Khung Xanh Cốm Hoàng Gia kích thước Rộng 1,8m × Dài 2,0m (giá đúng 1.000.000đ/bộ), chiếc Đệm Bông Ép Gấp 3 chính hãng còn nguyên lớp bọc nilon bảo vệ (từ 1.350.000đ – 2.450.000đ tùy cỡ), và Bộ Rèm Vải Cản Nắng màu ghi xám lắp cho ô cửa sổ (600.000đ/m ngang).',
      'Màu xanh cốm ngọc bích của màn khung mang ý nghĩa phong thủy sinh sôi, bình an và tạo cảm giác dịu mắt ngay khi bước vào phòng.'
    ],
    facebookPostCopy:
      '💚 [BÀI ĐĂNG SỐ 4] BÀN GIAO TRỌN BỘ 3 MÓN PHÒNG NGỦ TẠI NHÀ KHÁCH HÀNG – BÁO GIÁ RÕ RÀNG!\n' +
      '--------------------------------------------\n' +
      '1️⃣ MÀN KHUNG XANH CỐM HOÀNG GIA (Rộng 1,8m × Dài 2,0m):\n' +
      '   👉 Giá Tuyến Hoa: 1.000.000đ / 1 bộ cả lắp (Giá thị trường: 1.350.000đ/bộ).\n' +
      '2️⃣ ĐỆM BÔNG ÉP HÀN QUỐC GẤP 3 CHÍNH HÃNG (Nguyên bọc nilon, bảo hành 5 năm):\n' +
      '   👉 Cỡ 1m2×1m9: 1.350.000đ | Cỡ 1m6×2m: 1.950.000đ – 2.150.000đ | Cỡ 1m8×2m: 2.250.000đ – 2.450.000đ.\n' +
      '3️⃣ RÈM VẢI CẢN NẮNG CỬA SỔ MÀU GHI XÁM:\n' +
      '   👉 Giá Tuyến Hoa: 600.000đ / mét ngang hoàn thiện cả thanh treo & công lắp.\n' +
      '--------------------------------------------\n' +
      '🚛 Miễn phí 100% xe chở và thợ lắp đặt tận phòng ngủ!\n' +
      '📞 Gọi/Zalo ngay Anh Tuyến: 0344.727.528!',
  },

  // ===========================================================================
  // 2. ĐẶC SẢN TƯƠNG NGỌC TUYẾN THỦ CÔNG TRUYỀN THỐNG ("TƯƠNG NGON TỪ TÂM")
  // ===========================================================================
  {
    id: 'chai-tuong-ngoc-tuyen-500ml-tnt01',
    code: 'TNT-500ML',
    category: 'tuong-ngoc-tuyen',
    categoryName: 'Tương Ngọc Tuyến Thủ Công',
    title: 'Tương Ngọc Tuyến Thủ Công Truyền Thống – Chai Thủy Tinh Cao Cấp 500ml ("Đậm Đà Hương Vị Việt")',
    shortTitle: 'Chai Tương Ngọc Tuyến Thủy Tinh 500ml',
    priceDisplay: '65.000đ / chai 500ml',
    marketPriceRange: 'Giá thị trường: 75.000đ – 90.000đ / chai thủy tinh 500ml',
    marketPriceNote: 'Ủ chượp chum sành truyền thống 100% tự nhiên, đóng chai thủy tinh dày có màng co niêm phong. Mua từ 2 chai chỉ còn 60.000đ/chai.',
    marketPriceTiers: [
      {
        sizeOrOption: '1 Chai Thủy Tinh Cao Cấp 500ml',
        marketPrice: '80.000đ',
        storePrice: '65.000đ / chai',
        note: 'Nắp vặn kim loại & tem niêm phong cổ chai',
      },
      {
        sizeOrOption: 'Combo Tiết Kiệm 2 Chai Thủy Tinh (2 × 500ml)',
        marketPrice: '160.000đ',
        storePrice: '120.000đ / 2 chai',
        note: 'Chỉ 60.000đ / chai',
      },
      {
        sizeOrOption: 'Thùng Gia Đình / Làm Quà 6 Chai (6 × 500ml)',
        marketPrice: '450.000đ',
        storePrice: '350.000đ / thùng 6 chai',
        note: 'Miễn phí giao hàng nội huyện',
      },
    ],
    numericPrice: 65000,
    unitLabel: '1 chai thủy tinh 500ml niêm phong an toàn',
    standardDimensions: 'Dung tích thực: 500ml (Chai thủy tinh dày cao cấp)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/Bao_b__t__ng_Ng_c_Tuy_n_th__c_ng_b04e6f94.png',
    highlightTag: '65.000đ / Chai Thủy Tinh 500ml',
    summary:
      'Đặc sản Tương Ngọc Tuyến ủ chượp thủ công truyền thống từ đậu tương tuyển chọn, nếp cái hoa vàng ủ mốc tự nhiên và muối sạch trong chum sành. Đóng chai thủy tinh 500ml nắp vặn niêm phong an toàn thực phẩm.',
    visualAnnotations: [
      {
        label: 'Nắp chai kim loại đen & Tem niêm phong cổ chai',
        detail: 'Đóng nắp kín khí kèm tem niêm phong "Ngọc Tuyến" dán dọc cổ chai, giữ trọn hương vị tự nhiên.',
      },
      {
        label: 'Nhãn chính diện "Ngọc Tuyến – Tương Đậm Đà Hương Vị Việt"',
        detail: 'In rõ hình bát tương sánh mịn, hạt đậu tương vàng óng, ớt tươi và số điện thoại đặt hàng 0344.727.528.',
      },
      {
        label: 'Nhãn phụ mặt sau minh bạch thông tin',
        detail: 'Ghi rõ thành phần tự nhiên lên men truyền thống, hướng dẫn bảo quản nơi khô ráo thoáng mát, ngày sản xuất & hạn dùng.',
      },
      {
        label: 'Chai thủy tinh cao cấp 500ml thân thiện môi trường',
        detail: 'Thủy tinh trong suốt nhìn rõ cốt tương nâu sậm sánh đặc bên trong, an toàn sức khỏe và tái sử dụng tiện lợi.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'TNT-500ML (Chai Thủy Tinh 500ml)' },
      { label: 'Giá thị trường', value: '75.000đ – 90.000đ / chai thủy tinh 500ml' },
      { label: 'Giá bán lẻ tại cơ sở', value: '65.000đ / 1 chai 500ml (Combo 2 chai: 120.000đ)' },
      { label: 'Thành phần chính', value: 'Đậu tương quê tuyển chọn, cơm nếp ủ mốc tự nhiên, muối tinh khiết' },
      { label: 'Quy trình sản xuất', value: 'Ủ chượp truyền thống trong chum sành phơi nắng tự nhiên nhiều tháng' },
      { label: 'Cách dùng ngon nhất', value: 'Chấm rau muống luộc, cà muối, thịt luộc, đậu phụ rán, bê thui, kho cá' },
    ],
    articleParagraphs: [
      'Bên cạnh các sản phẩm nội thất – chăn ga gối đệm – màn khung, gia đình Ngọc Tuyến còn gìn giữ và phát triển nghề làm tương thủ công truyền thống với thương hiệu "Tương Ngọc Tuyến – Tương Ngon, Đậm Vị Quê Nhà".',
      'Mỗi chai Tương Ngọc Tuyến 500ml (giá niêm yết 65.000đ/chai, mua 2 chai chỉ 120.000đ) là kết tinh của hạt đậu tương quê chắc mẩy rang chín thơm lừng, cơm nếp cái hoa vàng ủ lên mốc tự nhiên và ngâm ủ trong chum sành dưới nắng vàng suốt nhiều tháng trời. Thành phẩm có màu nâu hổ phách sậm, sóng sánh, vị ngọt hậu tự nhiên của đạm đậu nành và hương thơm nếp quê không lẫn vào đâu được.',
      'Sản phẩm được đóng trong chai thủy tinh 500ml sang trọng, có tem niêm phong cổ chai chắc chắn, cam kết 3 KHÔNG: Không chất bảo quản hóa học – Không phẩm màu công nghiệp – Không hương liệu tổng hợp.'
    ],
    facebookPostCopy:
      '🏺 [BÀI ĐĂNG SỐ 5] ĐẶC SẢN TƯƠNG NGỌC TUYẾN THỦ CÔNG TRUYỀN THỐNG – CHAI THỦY TINH 500ML!\n' +
      '💰 BẢNG GIÁ NIÊM YẾT RÕ RÀNG:\n' +
      '👉 Lẻ 1 chai thủy tinh 500ml: 65.000đ / chai (Giá thị trường 80.000đ).\n' +
      '👉 Combo 2 chai thủy tinh 500ml: 120.000đ (Chỉ 60k/chai).\n' +
      '👉 Thùng gia đình 6 chai 500ml: 350.000đ.\n' +
      '--------------------------------------------\n' +
      '🌱 100% Nguyên liệu tự nhiên: Đậu tương quê chắc mẩy + Cơm nếp cái hoa vàng ủ mốc nắng + Ủ chượp chum sành truyền thống.\n' +
      '🍶 Đóng chai thủy tinh 500ml nắp kín có tem niêm phong cổ chai sạch sẽ, sang trọng.\n' +
      '🥢 Chấm rau muống luộc, thịt luộc, đậu rán, bê thui hay kho cá đồng đều thơm nức mũi!\n' +
      '📞 Gọi/Zalo đặt hàng: 0344.727.528 (Ngọc Tuyến – Tương ngon từ tâm)',
  },
  {
    id: 'quy-trinh-9-buoc-tuong-ngoc-tuyen-tnt02',
    code: 'TNT-STORY-01',
    category: 'tuong-ngoc-tuyen',
    categoryName: 'Tương Ngọc Tuyến Thủ Công',
    title: 'Bảng Quy Trình 9 Bước Làm Tương Đậu Nành & Cơm Nếp Ủ Chum Sành Truyền Thống Ngọc Tuyến',
    shortTitle: 'Quy Trình 9 Bước Ủ Chượp Tương Đậu Nành',
    priceDisplay: '65.000đ / chai 500ml',
    marketPriceRange: 'Giá thị trường tương chum sành nguyên chất: 75.000đ – 90.000đ / chai',
    marketPriceNote: 'Sản xuất trực tiếp tại cơ sở Ngọc Tuyến không qua trung gian, cam kết chuẩn tương ủ chum sành phơi nắng tự nhiên.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Chai Thủy Tinh 500ml (Khách mua lẻ ăn gia đình)',
        marketPrice: '80.000đ / chai',
        storePrice: '65.000đ / chai',
        note: 'Ủ đủ tháng, sánh đặc thơm ngọt',
      },
      {
        sizeOrOption: 'Combo 2 Chai Thủy Tinh 500ml',
        marketPrice: '160.000đ',
        storePrice: '120.000đ / 2 chai',
        note: 'Tiết kiệm 40.000đ',
      },
      {
        sizeOrOption: 'Khách lấy sỉ nhà hàng / quán ăn (Từ 10 chai trở lên)',
        marketPrice: '650.000đ',
        storePrice: '550.000đ / 10 chai',
        note: 'Liên hệ trực tiếp 0344.727.528',
      },
    ],
    numericPrice: 65000,
    unitLabel: 'Đặt mua chai 500ml (Quy trình chuẩn truyền thống)',
    standardDimensions: 'Bảng giới thiệu 9 công đoạn vàng làm tương Ngọc Tuyến',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/B_ng_Qu_ng_C_o_T__ng_Ng_c_Tuy_n__m__p_86dbb55c.png',
    highlightTag: 'Quy Trình 9 Bước Truyền Thống',
    summary:
      'Bảng thuyết minh chi tiết 9 công đoạn làm nên giọt Tương Ngọc Tuyến: Từ cánh đồng đậu tương xanh mướt, tuyển chọn hạt đậu, ủ mốc cơm nếp trên nong tre, ngâm ủ trong chum sành lớn đến khi rót ra dòng tương sánh mịn.',
    visualAnnotations: [
      {
        label: 'Bước 1–3: Tuyển chọn đậu tương & Phơi mốc cơm nếp (Hàng trên)',
        detail: 'Chọn hạt đậu tương chắc mẩy từ cánh đồng quê; cơm nếp nấu chín trải nong tre phơi nắng tạo mốc tự nhiên.',
      },
      {
        label: 'Bước 4–6: Ủ chượp chum sành & Đóng chai thủy tinh (Hàng giữa)',
        detail: 'Đậu nành, mốc nếp và muối ủ trong chum sành lớn cho ra cốt tương nâu sậm sánh mịn, đóng chai thủy tinh 500ml.',
      },
      {
        label: 'Bước 7–9: Tròn vị bữa cơm gia đình & Cam kết chất lượng (Hàng dưới)',
        detail: 'Dùng chấm, nêm, kho, xào; cam kết 100% nguyên liệu tự nhiên, nắp kín an toàn thực phẩm. Liên hệ: 0344.727.528.',
      },
    ],
    specs: [
      { label: 'Mã bài viết', value: 'TNT-STORY-01 (Quy trình Tương Đậu Nành & Cơm Nếp)' },
      { label: 'Giá bán niêm yết', value: '65.000đ / chai 500ml (Combo 2 chai: 120.000đ)' },
      { label: 'Nguyên liệu cốt lõi', value: 'Đậu tương quê + Cơm nếp ủ mốc nắng + Muối biển sạch' },
      { label: 'Dụng cụ ủ chượp', value: '100% Chum sành nung già truyền thống đặt ngoài sân nắng' },
      { label: 'Bao bì đóng gói', value: 'Chai thủy tinh cao cấp 500ml có thể tái sử dụng' },
      { label: 'Số điện thoại đặt hàng', value: '0344.727.528 (Giao hàng tận nơi toàn quốc)' },
    ],
    articleParagraphs: [
      'Để làm ra một mẻ Tương Ngọc Tuyến chuẩn vị quê xưa, người thợ thủ công phải tuân thủ nghiêm ngặt quy trình 9 bước truyền thống được minh họa rõ nét trên bảng quy trình:',
      '1. Từ những cánh đồng đậu tương xanh mướt quê nhà -> 2. Tuyển chọn kỹ càng từng hạt đậu tương tròn mẩy, không sâu lép -> 3. Cơm nếp cái hoa vàng nấu chín, xới tơi trên nong tre phơi nắng nhẹ để lên mốc vàng tự nhiên – tinh túy tạo nên vị ngọt của tương.',
      '4. Đậu nành, cơm nếp ủ mốc và nước muối tinh khiết được ủ chượp trong hàng chục chiếc chum sành lớn dưới ánh nắng mặt trời -> 5. Sau thời gian ủ kỹ, tương chuyển màu nâu sậm, sánh đặc và dậy mùi thơm dịu -> 6. Đóng chai thủy tinh 500ml nắp kín sang trọng (giá chỉ 65.000đ/chai), đưa hương vị quê nhà đến mọi bữa cơm gia đình Việt.'
    ],
    facebookPostCopy:
      '🌾 [BÀI ĐĂNG SỐ 6] HÀNH TRÌNH 9 BƯỚC TỪ HẠT ĐẬU TƯƠNG & NẾP QUÊ ĐẾN CHAI TƯƠNG NGỌC TUYẾN THƠM NGON!\n' +
      '💰 GIÁ BÁN TẬN CƠ SỞ: 65.000đ / chai thủy tinh 500ml (Mua 2 chai chỉ 120.000đ)!\n' +
      '--------------------------------------------\n' +
      '1️⃣ Tuyển chọn hạt đậu tương chắc mẩy từ cánh đồng quê.\n' +
      '2️⃣ Cơm nếp nấu chín ủ mốc vàng tự nhiên trên nong tre.\n' +
      '3️⃣ Ủ chượp hoàn toàn trong chum sành phơi nắng tự nhiên cho ra giọt tương sánh mịn, đậm đà.\n' +
      '4️⃣ Đóng chai thủy tinh 500ml nắp kín an toàn thực phẩm – Không chất bảo quản!\n' +
      '📞 Đặt mua Tương Ngọc Tuyến chính gốc: 0344.727.528!',
  },
  {
    id: 'bang-quang-cao-tuong-ngoc-tuyen-bua-com-viet-tnt03',
    code: 'TNT-STORY-02',
    category: 'tuong-ngoc-tuyen',
    categoryName: 'Tương Ngọc Tuyến Thủ Công',
    title: 'Bảng Quảng Cáo Tương & Nước Chấm Cổ Truyền Ngọc Tuyến – Gắn Kết Yêu Thương Bữa Cơm Gia Đình Việt',
    shortTitle: 'Bảng Quảng Cáo Tương Ngọc Tuyến Gia Đình Việt',
    priceDisplay: '65.000đ / chai 500ml',
    marketPriceRange: 'Giá thị trường: 75.000đ – 90.000đ / chai 500ml',
    marketPriceNote: 'Gia vị truyền thống lành sạch cho cả gia đình 3 thế hệ. Giao hàng tận nơi khi đặt kèm Chăn ga gối đệm hoặc gửi bưu điện toàn quốc.',
    marketPriceTiers: [
      {
        sizeOrOption: '1 Chai Thủy Tinh Vuông Bo Góc 500ml',
        marketPrice: '80.000đ',
        storePrice: '65.000đ / chai',
        note: 'Đặt trên bàn ăn sang trọng, sạch sẽ',
      },
      {
        sizeOrOption: 'Combo Gia Đình 2 Chai 500ml',
        marketPrice: '160.000đ',
        storePrice: '120.000đ / 2 chai',
        note: 'Dùng chấm & kho cá cả tháng',
      },
      {
        sizeOrOption: 'Thùng 6 Chai Thủy Tinh 500ml',
        marketPrice: '450.000đ',
        storePrice: '350.000đ / 6 chai',
        note: 'Tặng kèm túi xách lịch sự',
      },
    ],
    numericPrice: 65000,
    unitLabel: 'Chai thủy tinh 500ml (Đặt sỉ & lẻ 0344.727.528)',
    standardDimensions: 'Chai thủy tinh 500ml – Thùng quà 6 chai / 12 chai',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/_nh_ChatGPT_14_17_01_23_thg_10__2026_0ef46668.png',
    highlightTag: 'Đậm Đà Bữa Cơm Việt',
    summary:
      'Bảng hình ảnh quảng bá dòng sản phẩm Tương & Nước chấm truyền thống Ngọc Tuyến: Ủ chượp tự nhiên giữ trọn vị ngon nguyên bản, giúp các món chấm, nêm, kho, xào thêm đậm đà và gắn kết bữa cơm gia đình 3 thế hệ.',
    visualAnnotations: [
      {
        label: 'Ủ chượp truyền thống giữ trọn vị ngon',
        detail: 'Lên men hoàn toàn tự nhiên theo phương pháp cổ truyền, không dùng hóa chất thúc chín.',
      },
      {
        label: 'Thiết kế chai thủy tinh 500ml cầm vừa tay',
        detail: 'Kiểu dáng chai vuông bo góc sang trọng, đặt trên bàn ăn hay kệ bếp đều gọn đẹp, sạch sẽ.',
      },
      {
        label: 'Gia vị vàng cho món chấm, nêm, kho, xào',
        detail: 'Chỉ cần một bát tương Ngọc Tuyến thêm vài lát ớt tươi là cả mâm cơm gia đình thêm ấm cúng, tròn vị.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'TNT-STORY-02 (Tương Ngọc Tuyến Bữa Cơm Gia Đình)' },
      { label: 'Đơn giá niêm yết', value: '65.000đ / chai 500ml (Giá thị trường: 80.000đ/chai)' },
      { label: 'Tiêu chuẩn bao bì', value: 'Thủy tinh cao cấp an toàn thực phẩm – Nắp kín giữ trọn hương vị' },
      { label: 'Cam kết thương hiệu', value: '100% nguyên liệu tự nhiên – An toàn cho sức khỏe – Thân thiện môi trường' },
      { label: 'Liên hệ đặt hàng', value: '0344.727.528 (Ngọc Tuyến)' },
    ],
    articleParagraphs: [
      'Trong văn hóa ẩm thực người Việt, bát tương quê đặt giữa mâm cơm chính là sợi dây gắn kết các thế hệ ông bà, cha mẹ và con cháu. Hiểu rõ giá trị ấy, Tương Ngọc Tuyến luôn đặt chữ "Tâm" lên hàng đầu trong từng mẻ ủ chượp.',
      'Dù dùng để chấm trực tiếp với rau luộc, thịt ba chỉ luộc, đậu phụ rán giòn hay dùng làm gia vị ướp kho cá trắm, kho thịt, chỉ cần 2–3 thìa Tương Ngọc Tuyến là món ăn đã dậy lên màu nâu cánh gián óng ả cùng hương thơm quyến rũ.',
      'Mỗi chai thủy tinh 500ml (giá 65.000đ/chai) đều có nhãn nhận diện rõ ràng kèm số điện thoại 0344.727.528 để quý khách dễ dàng gọi đặt thêm bất cứ lúc nào.'
    ],
    facebookPostCopy:
      '🍲 [BÀI ĐĂNG SỐ 7] MÓN NGON THÊM TRÒN VỊ CÙNG TƯƠNG NGỌC TUYẾN – TƯƠNG NGON TỪ TÂM!\n' +
      '💰 GIÁ BÁN: 65.000đ / chai thủy tinh 500ml (Combo 2 chai: 120.000đ)!\n' +
      '--------------------------------------------\n' +
      '✨ Từng giọt tương sánh mịn, thơm lừng mùi đậu tương & nếp quê ủ chượp tự nhiên trong chum sành.\n' +
      '✨ Dùng để chấm rau luộc, thịt luộc, đậu rán, bê thui hoặc nêm kho cá đồng đều tuyệt vời.\n' +
      '✨ Chai thủy tinh 500ml nắp vặn kín khí, an toàn sức khỏe cho cả gia đình.\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528 để đặt Tương Ngọc Tuyến giao tận nhà!',
  },
  {
    id: 'binh-tuong-ngoc-tuyen-luc-giac-qua-bieu-tnt04',
    code: 'TNT-GIFT-750',
    category: 'tuong-ngoc-tuyen',
    categoryName: 'Tương Ngọc Tuyến Thủ Công',
    title: 'Bình Tương Ngọc Tuyến Gia Truyền Dáng Lục Giác Chữ Thọ Bọc Giấy Kraft Thủ Công (Phiên Bản Quà Biếu 750ml)',
    shortTitle: 'Bình Tương Ngọc Tuyến Lục Giác Quà Biếu 750ml',
    priceDisplay: '120.000đ / bình 750ml',
    marketPriceRange: 'Giá thị trường quà biếu đặc sản: 150.000đ – 180.000đ / bình',
    marketPriceNote: 'Phiên bản bình thủy tinh lục giác chạm chữ Thọ cao cấp đựng cốt tương ủ trên 12 tháng. Giá tại cơ sở Ngọc Tuyến chỉ 120.000đ/bình.',
    marketPriceTiers: [
      {
        sizeOrOption: '1 Bình Thủy Tinh Lục Giác Chữ Thọ 750ml (Bọc giấy Kraft)',
        marketPrice: '150.000đ / bình',
        storePrice: '120.000đ / bình',
        note: 'Kèm thẻ bài vẽ chum tương thủ công',
      },
      {
        sizeOrOption: 'Set Quà Biếu Cặp Đôi 2 Bình Lục Giác (2 × 750ml)',
        marketPrice: '300.000đ / cặp',
        storePrice: '230.000đ / cặp 2 bình',
        note: 'Quà biếu thông gia, đối tác cực sang',
      },
      {
        sizeOrOption: 'Set Quà Biếu Đại Gia Đình 4 Bình Lục Giác',
        marketPrice: '600.000đ',
        storePrice: '440.000đ / 4 bình',
        note: 'Miễn phí vận chuyển tận nơi',
      },
    ],
    numericPrice: 120000,
    unitLabel: '1 bình thủy tinh lục giác 750ml khắc chữ Thọ',
    standardDimensions: 'Dung tích 750ml – Bình thủy tinh lục giác dập nổi + Nút gỗ bọc giấy Kraft',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/Gemini_Generated_Image_a02k7ha02k7ha02k_8ab38dbe.png',
    highlightTag: '120.000đ / Bình Quà Biếu 750ml',
    summary:
      'Phiên bản đặc biệt "Tương Ngọc Tuyến Gia Truyền" đựng trong bình thủy tinh lục giác chạm nổi hoa văn chữ Thọ cổ điển, cổ bình bọc giấy Kraft buộc dây gai mộc mạc kèm thẻ treo thủ công và nhãn họa tiết trống đồng Đông Sơn.',
    visualAnnotations: [
      {
        label: 'Nút gỗ & Cổ bình bọc giấy Kraft buộc dây gai',
        detail: 'Đóng gói thủ công mộc mạc kèm thẻ treo vẽ hình 3 chum sành và dòng chữ thư pháp "Tương Ngọc Tuyến".',
      },
      {
        label: 'Thân bình thủy tinh lục giác dập nổi chữ Thọ',
        detail: 'Thủy tinh dày cao cấp chạm nổi hoa văn chữ Thọ truyền thống, tôn vinh sắc tương vàng nâu óng ả bên trong.',
      },
      {
        label: 'Nhãn giấy mỹ thuật in họa tiết Trống Đồng',
        detail: 'In dòng chữ thư pháp "Tương Ngọc Gia Truyền – 0344727528" sang trọng, thích hợp làm quà biếu người thân, đối tác.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'TNT-GIFT-750 (Bình Lục Giác Quà Biếu)' },
      { label: 'Giá thị trường', value: '150.000đ – 180.000đ / bình 750ml' },
      { label: 'Giá tại Ngọc Tuyến', value: '120.000đ / 1 bình 750ml (Cặp 2 bình: 230.000đ)' },
      { label: 'Chất liệu bình', value: 'Thủy tinh lục giác dày dập nổi hoa văn chữ Thọ + Nắp gỗ kín khí' },
      { label: 'Chất lượng cốt tương', value: 'Cốt tương đầu ủ chum sành trên 12 tháng, sánh đặc, thơm ngọt đậm đà' },
      { label: 'Hotline đặt hàng', value: '0344.727.528 (Tương Ngọc Tuyến Gia Truyền)' },
    ],
    articleParagraphs: [
      'Đáp ứng nhu cầu tìm kiếm một món quà quê mộc mạc nhưng sang trọng, tinh tế để biếu tặng ông bà, thông gia hay bạn bè phương xa, cơ sở Ngọc Tuyến ra mắt phiên bản Bình Tương Ngọc Tuyến Gia Truyền Lục Giác Chữ Thọ (Mã TNT-GIFT-750) với giá chỉ 120.000đ/bình (giá thị trường 150.000đ – 180.000đ).',
      'Bên trong bình là phần cốt tương hạng nhất được tuyển chọn từ những chum sành ủ đủ nắng trên 12 tháng, sánh đặc và thơm lừng. Bên ngoài là chiếc bình thủy tinh lục giác chạm nổi chữ Thọ mang ý nghĩa chúc sức khỏe, trường thọ, cổ bình bọc giấy Kraft buộc dây thừng gai và gắn thẻ bài vẽ tay hình chum tương truyền thống.',
      'Đây là món quà quê hương vừa thiết thực, vừa chứa đựng trọn vẹn tấm lòng hiếu thảo và nét đẹp văn hóa ẩm thực truyền thống Việt Nam.'
    ],
    facebookPostCopy:
      '🎁 [BÀI ĐĂNG SỐ 8] PHIÊN BẢN QUÀ BIẾU ĐẶC BIỆT: BÌNH TƯƠNG NGỌC TUYẾN GIA TRUYỀN LỤC GIÁC CHỮ THỌ (750ML)!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 150.000đ – 180.000đ / bình\n' +
      '🔥 GIÁ TẠI CƠ SỞ NGỌC TUYẾN: CHỈ 120.000Đ / 1 BÌNH 750ML (CẶP 2 BÌNH QUÀ BIẾU: 230.000Đ)!\n' +
      '--------------------------------------------\n' +
      '🏺 Bình thủy tinh lục giác dày dập nổi hoa văn chữ Thọ, cổ bọc giấy Kraft buộc dây gai thủ công cực sang.\n' +
      '🌾 Cốt tương đầu ủ chum sành trên 12 tháng sánh đặc, thơm ngọt đậm đà.\n' +
      '🎉 Món quà quê ý nghĩa biếu ông bà, bố mẹ, thông gia, đối tác phương xa.\n' +
      '📞 Gọi/Zalo đặt hàng ngay: 0344.727.528!',
  },

  // ===========================================================================
  // 3. CÔNG TRÌNH BIỆT THỰ THỰC TẾ, VIDEO NGHIỆM THU & XE GIAO LẮP NGỌC TUYẾN
  // ===========================================================================
  {
    id: 'video-nghiem-thu-rem-nha-so-20-ct01',
    code: 'VID-TH-20',
    category: 'cong-trinh-video',
    categoryName: 'Công Trình Thực Tế & Video',
    title: 'Video Thực Tế: Anh Tuyến Nghiệm Thu Rèm Cầu Vồng Phòng Khách (520k/m²) & Rèm Vải Gấm Thêu Cây Tùng (600k/m) Tại Nhà Số 20',
    shortTitle: 'Video Rèm Cầu Vồng & Rèm Vải Nhà Số 20',
    priceDisplay: '520.000đ / m²',
    marketPriceRange: 'Giá thị trường: Rèm vải thêu 750k–900k/m | Rèm cầu vồng 620k–700k/m²',
    marketPriceNote: 'Báo giá trực tiếp tại công trình nhà số 20: Rèm cầu vồng Hàn Quốc 520.000đ/m², Rèm vải gấm thêu cây tùng 600.000đ/m ngang cả lắp.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Cầu Vồng Hàn Quốc Cản Sáng (Phòng khách)',
        marketPrice: '620.000đ – 700.000đ / m²',
        storePrice: '520.000đ / m²',
        note: 'Lắp gọn lọt lòng cửa sổ sau ghế trường kỷ',
      },
      {
        sizeOrOption: '2. Rèm Vải Gấm Thêu Cây Tùng Xanh Ngọc (Phòng ngủ)',
        marketPrice: '750.000đ – 900.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Trọn gói cả thanh treo, khuyên ore & công lắp',
      },
      {
        sizeOrOption: '3. Màn Khung Phòng Ngủ Giường Đôi (1,8m × 2,0m)',
        marketPrice: '1.300.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Lắp đồng bộ cho phòng ngủ gia đình',
      },
    ],
    numericPrice: 600000,
    unitLabel: 'mét ngang hoàn thiện (Rèm vải) / m² (Rèm cầu vồng)',
    standardDimensions: 'Thi công trọn gói phòng khách & phòng ngủ nhà vườn số 20',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/poster_video_cong_trinh_so_20.jpg',
    videoUrl: '/assets/aistudio/20261024_105539_124c8af1.mp4',
    secondaryImages: [
      '/assets/aistudio/poster_video_cong_trinh_so_20.jpg',
    ],
    highlightTag: 'Video Thực Tế Tại Nhà Khách',
    summary:
      'Video quay trực tiếp hành trình Anh Tuyến đến cổng nhà khách hàng số 20, kiểm tra và kéo thử hệ Rèm Cầu Vồng Hàn Quốc màu ghi than lắp sau bộ trường kỷ gỗ chạm rồng, cùng bộ Rèm Vải Gấm Thêu Cây Tùng xanh ngọc trong phòng ngủ.',
    visualAnnotations: [
      {
        label: 'Đầu video: Lối vào nhà vườn số 20',
        detail: 'Quay thực tế từ ngoài ngõ bước qua cổng mái ngói xanh số nhà 20 vào sân gạch đỏ của gia chủ.',
      },
      {
        label: 'Giữa video: Test Rèm Cầu Vồng Hàn Quốc phòng khách',
        detail: 'Anh Tuyến trực tiếp kéo dây điều chỉnh các dải sáng – tối của bộ rèm cầu vồng màu ghi than ngay sau bộ ghế gỗ chạm rồng.',
      },
      {
        label: 'Cuối video: Cận cảnh Rèm Vải Gấm Thêu Cây Tùng phòng ngủ',
        detail: 'Bộ rèm vải gấm màu xanh ngọc phối cổ kem thêu họa tiết hàng cây tùng & chiếc lá (Đồng giá 600.000đ/m ngang cả lắp).',
      },
    ],
    specs: [
      { label: 'Mã công trình', value: 'VID-TH-20 (Nhà vườn số 20 – Ứng Hòa)' },
      { label: 'Hạng mục 1 (Phòng khách)', value: '2 Bộ Rèm Cầu Vồng Hàn Quốc màu ghi than: 520.000đ/m² (Thị trường 650k/m²)' },
      { label: 'Hạng mục 2 (Phòng ngủ)', value: 'Rèm Vải Gấm Thêu Cây Tùng xanh ngọc: 600.000đ/m ngang cả lắp' },
      { label: 'Người trực tiếp nghiệm thu', value: 'Anh Tuyến – Chủ cơ sở Rèm & Màn Khung Tuyến Hoa' },
      { label: 'Thời gian bảo hành', value: '3 Năm tận nhà cho toàn bộ phụ kiện và vải rèm' },
    ],
    articleParagraphs: [
      'Không gì chân thực hơn những thước phim quay trực tiếp tại nhà khách hàng! Trong video công trình mã VID-TH-20, quý khách sẽ theo chân Anh Tuyến bước vào ngôi nhà vườn số 20 để nghiệm thu toàn bộ hệ thống rèm cửa vừa lắp đặt hoàn tất.',
      'Tại phòng khách trang trọng với bộ bàn ghế gỗ chạm rồng phượng và bức tranh chữ "Cha Mẹ", hai ô cửa sổ hai bên được lắp đặt hệ Rèm Cầu Vồng Hàn Quốc màu ghi xám lọt lòng khuôn cửa (đơn giá chỉ 520.000đ/m² so với giá thị trường 620.000đ – 700.000đ/m²). Chỉ với thao tác kéo nhẹ nhàng, các dải vải cản nắng và lưới xuyên sáng đan xen giúp điều tiết ánh sáng cực kỳ gọn gàng, không hề vướng vào thành ghế gỗ.',
      'Tiếp đó, tại phòng ngủ của gia đình, bộ Rèm Vải Gấm Thêu Cây Tùng màu xanh ngọc phối diềm kem sữa (trọn gói 600.000đ/m ngang cả công lắp đặt) tạo nên điểm nhấn tươi mát, cản nắng tuyệt đối và hài hòa với không gian nghỉ ngơi.'
    ],
    facebookPostCopy:
      '🎬 [BÀI ĐĂNG SỐ 9 - VIDEO THỰC TẾ] NGHIỆM THU RÈM CẦU VỒNG PHÒNG KHÁCH & RÈM VẢI GẤM THÊU CÂY TÙNG TẠI NHÀ SỐ 20!\n' +
      '💰 BÁO GIÁ MINH BẠCH THEO THỊ TRƯỜNG:\n' +
      '✅ 1. Rèm cầu vồng Hàn Quốc phòng khách (Màu ghi than sang trọng): Chỉ 520.000đ / m² cả lắp (Giá thị trường 650.000đ/m²).\n' +
      '✅ 2. Rèm vải gấm xanh ngọc thêu họa tiết Cây Tùng phòng ngủ: Đồng giá 600.000đ / mét ngang hoàn thiện cả thanh treo & công lắp (Giá thị trường 800.000đ/m).\n' +
      '--------------------------------------------\n' +
      '🛠️ Anh Tuyến trực tiếp khảo sát, lắp đặt và bảo hành 3 năm tận nhà.\n' +
      '📞 Gọi/Zalo ngay Anh Tuyến: 0344.727.528 để được mang mẫu tư vấn miễn phí!',
  },
  {
    id: 'video-rem-tu-dong-anh-tuyen-gioi-thieu-ct02',
    code: 'VID-TH-40',
    category: 'cong-trinh-video',
    categoryName: 'Công Trình Thực Tế & Video',
    title: 'Video Giới Thiệu: Hệ Rèm Vải 2 Lớp Âm Trần Phòng Khách Hiện Đại (850k/m) & Chia Sẻ Trực Tiếp Từ Anh Tuyến',
    shortTitle: 'Video Rèm Vải 2 Lớp Âm Trần Phòng Khách',
    priceDisplay: '850.000đ / m ngang',
    marketPriceRange: 'Giá thị trường rèm 2 lớp âm trần: 1.050.000đ – 1.350.000đ / m ngang',
    marketPriceNote: 'Thi công chuẩn âm trần thạch cao khách sạn 5 sao: Rèm 1 lớp 600.000đ/m ngang, Rèm 2 lớp (Vải gấm + Voan trắng) chỉ 850.000đ/m ngang.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Rèm Vải Gấm Cản Nắng 1 Lớp (Đủ màu)',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Cả thanh treo & công lắp hoàn thiện',
      },
      {
        sizeOrOption: 'Hệ Rèm Vải 2 Lớp Âm Trần (1 lớp vải chính + 1 lớp voan trắng)',
        marketPrice: '1.150.000đ / m ngang',
        storePrice: '850.000đ / m ngang',
        note: 'Bao gồm 2 đường ray trượt êm âm trần',
      },
      {
        sizeOrOption: 'Nâng cấp Động cơ Rèm Tự Động điều khiển Remote / Điện thoại',
        marketPrice: '3.800.000đ / bộ motor',
        storePrice: '2.850.000đ / bộ motor',
        note: 'Bảo hành động cơ 3 năm chính hãng',
      },
    ],
    numericPrice: 600000,
    unitLabel: 'mét ngang hoàn thiện trọn gói',
    standardDimensions: 'Lắp âm trần thạch cao full tường phòng khách hiện đại',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/poster_video_anh_tuyen_rem_tu_dong.jpg',
    videoUrl: '/assets/aistudio/f03efb8a2a264f82b668b69ba4ffc276_7aa20115.mov',
    secondaryImages: [
      '/assets/aistudio/poster_video_anh_tuyen_rem_tu_dong.jpg',
    ],
    highlightTag: 'Video Chia Sẻ Từ Chủ Tiệm',
    summary:
      'Video giới thiệu không gian phòng khách chung cư – biệt thự hiện đại lắp đặt hệ rèm vải 2 lớp (vải cản nắng màu ghi sáng + voan trắng xuyên sáng) âm trần thạch cao có đèn hắt và phần chia sẻ trực tiếp của Anh Tuyến.',
    visualAnnotations: [
      {
        label: 'Hệ rèm vải 2 lớp âm trần thạch cao',
        detail: 'Lớp vải chính màu ghi sáng vén hai bên kết hợp lớp voan lụa trắng rủ mềm mại từ trần kịch sàn.',
      },
      {
        label: 'Đồng bộ nội thất Sofa & Kệ Tivi vách đá',
        detail: 'Tông màu ghi kem của rèm hòa quyện hoàn hảo với bộ sofa góc, quạt trần gỗ và ánh đèn LED âm trần ấm áp.',
      },
      {
        label: 'Anh Tuyến trực tiếp tư vấn & cam kết chất lượng',
        detail: 'Chủ cơ sở Tuyến Hoa trực tiếp chia sẻ tâm huyết nghề rèm và cam kết bảo hành uy tín với bà con.',
      },
    ],
    specs: [
      { label: 'Mã video', value: 'VID-TH-40 (Rèm Vải 2 Lớp Phòng Khách & Lời Chào Chủ Tiệm)' },
      { label: 'Kiểu rèm', value: 'Rèm vải 2 lớp (1 lớp vải gấm cản nắng + 1 lớp voan lụa trắng)' },
      { label: 'Giá thị trường', value: '1.050.000đ – 1.350.000đ / m ngang (Rèm 2 lớp)' },
      { label: 'Đơn giá tại Tuyến Hoa', value: '600.000đ/m ngang (Rèm 1 lớp) | 850.000đ/m ngang (Rèm 2 lớp)' },
      { label: 'Nâng cấp tự động', value: 'Hỗ trợ lắp động cơ rèm tự động điều khiển qua Remote / Smartphone' },
    ],
    articleParagraphs: [
      'Trong video mã VID-TH-40, quý khách có thể chiêm ngưỡng vẻ đẹp sang trọng của hệ Rèm Vải 2 Lớp lắp âm trần thạch cao cho không gian phòng khách hiện đại có vách tivi giả đá và đèn LED hắt trần.',
      'Lớp voan trắng bên trong giúp lọc ánh nắng chói chang thành luồng sáng dịu nhẹ và giữ sự riêng tư cho phòng khách vào ban ngày, trong khi lớp vải chính màu ghi sáng hai bên sẵn sàng kéo kín để cản nắng 100% khi cần nghỉ ngơi hoặc xem phim. Giá thi công trọn gói rèm 2 lớp tại Tuyến Hoa chỉ 850.000đ/m ngang (tiết kiệm 250.000đ – 400.000đ/m so với giá thị trường).',
      'Đặc biệt, phần cuối video là hình ảnh Anh Tuyến – người trực tiếp đo đạc, kiểm tra chất lượng và bảo hành từng bộ rèm, bộ màn khung cho khách hàng gần xa.'
    ],
    facebookPostCopy:
      '🌟 [BÀI ĐĂNG SỐ 10 - VIDEO] KHÔNG GIAN PHÒNG KHÁCH ĐẲNG CẤP VỚI HỆ RÈM VẢI 2 LỚP ÂM TRẦN TUYẾN HOA!\n' +
      '💰 BẢNG GIÁ RÕ RÀNG SO VỚI THỊ TRƯỜNG:\n' +
      '👉 Rèm vải gấm cản nắng 1 lớp: 600.000đ / m ngang cả lắp (Thị trường 750.000đ/m).\n' +
      '👉 Rèm vải 2 lớp âm trần (Vải chính + Voan lụa trắng): 850.000đ / m ngang cả lắp (Thị trường 1.150.000đ/m).\n' +
      '--------------------------------------------\n' +
      '✨ Sóng rèm suôn thẳng kịch sàn, cản nắng cách nhiệt tuyệt đối.\n' +
      '✨ Anh Tuyến trực tiếp tư vấn, đo đạc và bảo hành 3 năm tận nhà.\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528!',
  },
  {
    id: 'cong-trinh-biet-thu-tan-co-dien-ho-koi-ct03',
    code: 'CT-BT-01',
    category: 'cong-trinh-video',
    categoryName: 'Công Trình Thực Tế & Video',
    title: 'Công Trình Trọn Gói Biệt Thự Tân Cổ Điển 3 Tầng Hồ Cá Koi: Lắp Rèm Vải 2 Lớp & Màn Khung Phòng Ngủ (1Tr/Bộ)',
    shortTitle: 'Trọn Gói Rèm & Màn Khung Biệt Thự 3 Tầng',
    priceDisplay: '600.000đ / m ngang',
    marketPriceRange: 'Giá thị trường trọn gói biệt thự: 35.000.000đ – 50.000.000đ',
    marketPriceNote: 'Thi công trọn gói toàn bộ rèm cửa 3 tầng & màn khung 4 phòng ngủ tại xưởng Tuyến Hoa giúp gia chủ tiết kiệm từ 7.000.000đ – 12.000.000đ.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Rèm Vải Gấm 1 Lớp Cửa Sổ & Ban Công',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Bao gồm thanh treo & công lắp đặt',
      },
      {
        sizeOrOption: 'Rèm Vải 2 Lớp Hoàng Gia Đại Sảnh Phòng Khách',
        marketPrice: '1.200.000đ / m ngang',
        storePrice: '850.000đ / m ngang',
        note: 'Vải gấm kem vàng + Voan lụa cao cấp',
      },
      {
        sizeOrOption: 'Màn Khung Phòng Ngủ Giường Đôi (1,8m × 2,0m)',
        marketPrice: '1.350.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Giảm thêm 50.000đ/bộ khi lắp từ 2 phòng',
      },
    ],
    numericPrice: 1000000,
    unitLabel: 'Trọn gói Rèm cửa & Màn khung biệt thự',
    standardDimensions: 'Full hệ thống cửa 3 tầng + 4 phòng ngủ giường 1,8m × 2,0m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/Gemini_Generated_Image_ft96peft96peft96_a2a207a7.png',
    highlightTag: 'Công Trình Biệt Thự Tiêu Biểu',
    summary:
      'Phối cảnh & phương án thi công trọn gói toàn bộ rèm cửa hoàng gia và màn khung phòng ngủ cho công trình biệt thự tân cổ điển 3 tầng có sân vườn hồ cá Koi và giàn hoa giấy.',
    visualAnnotations: [
      {
        label: 'Hệ rèm cửa sổ & cửa ban công tầng 1 – tầng 2',
        detail: 'Lắp đặt rèm vải gấm 2 lớp màu kem vàng đồng bộ với kiến trúc phào chỉ tân cổ điển nhìn từ mặt tiền.',
      },
      {
        label: 'Phòng khách đại sảnh tầng 1',
        detail: 'Kết hợp sofa da tân cổ điển với hệ rèm vải cản sáng 100% đơn giá 600.000đ/m ngang (1 lớp) – 850.000đ/m (2 lớp).',
      },
      {
        label: '4 Phòng ngủ lắp Màn khung 1.000.000đ/bộ (1,8m × 2,0m)',
        detail: 'Trang bị trọn bộ màn khung ròng rọc / gấp gọn cao cấp cho các giường đôi 1,8m × 2,0m trên tầng 2 và tầng 3.',
      },
    ],
    specs: [
      { label: 'Mã công trình', value: 'CT-BT-01 (Biệt Thự Tân Cổ Điển 3 Tầng Hồ Cá Koi)' },
      { label: 'Đơn giá rèm cửa biệt thự', value: '600.000đ/m ngang (1 lớp) – 850.000đ/m ngang (2 lớp)' },
      { label: 'Đơn giá màn khung 1,8m×2m', value: '1.000.000đ / 1 bộ hoàn thiện' },
      { label: 'Ưu đãi công trình lớn', value: 'Chiết khấu trực tiếp 5% – 10% khi làm trọn gói cả nhà mới' },
    ],
    articleParagraphs: [
      'Với các công trình biệt thự tân cổ điển 2–3 tầng, việc lựa chọn màu sắc rèm cửa nhìn từ mặt tiền bên ngoài lẫn từ không gian nội thất bên trong đóng vai trò quyết định đến vẻ sang trọng của toàn bộ ngôi nhà.',
      'Trong phương án thi công mã CT-BT-01, Tuyến Hoa sử dụng dòng rèm vải gấm kem vàng vén hai bên cho các ô cửa sổ nhôm kính lớn mặt tiền (đơn giá 600.000đ/m ngang cho rèm 1 lớp, 850.000đ/m ngang cho rèm 2 lớp), tạo sự cân đối hài hòa với hệ cột phào chỉ và hồ cá Koi sân vườn.',
      'Toàn bộ các phòng ngủ bên trong đều được lắp đặt Màn Khung Cao Cấp kích thước chuẩn Rộng 1,8m × Dài 2,0m (đơn giá 1.000.000đ/bộ) giúp không gian nghỉ ngơi vừa sang trọng như cung điện vừa bảo vệ sức khỏe tuyệt đối.'
    ],
    facebookPostCopy:
      '🏰 [BÀI ĐĂNG SỐ 11] THI CÔNG TRỌN GÓI RÈM CỬA HOÀNG GIA & MÀN KHUNG CHO BIỆT THỰ TÂN CỔ ĐIỂN 3 TẦNG!\n' +
      '💰 BÁO GIÁ TẬN XƯỞNG RẺ HƠN THỊ TRƯỜNG 20%:\n' +
      '✨ 1. Rèm vải cản nắng 100% (1 lớp): 600.000đ / m ngang cả công lắp đặt (Thị trường 750k/m).\n' +
      '✨ 2. Hệ rèm vải 2 lớp hoàng gia (Vải gấm + Voan lụa): 850.000đ / m ngang cả lắp (Thị trường 1.200k/m).\n' +
      '✨ 3. Màn khung phòng ngủ chuẩn giường 1,8m × 2,0m: Chỉ 1.000.000đ / 1 bộ!\n' +
      '🎁 Chiết khấu thêm 5% – 10% khi nhận thi công trọn gói nhà mới, biệt thự.\n' +
      '📞 Hotline khảo sát & báo giá tận nơi: 0344.727.528!',
  },
  {
    id: 'khao-sat-thuc-te-biet-thu-trang-cho-ngam-ct04',
    code: 'CT-BT-02',
    category: 'cong-trinh-video',
    categoryName: 'Công Trình Thực Tế & Video',
    title: 'Khảo Sát Đo Đạc Thực Tế Biệt Thự Tân Cổ Điển Trắng Đang Hoàn Thiện Tại Chợ Ngăm, Đại Cường, Ứng Hòa',
    shortTitle: 'Khảo Sát Biệt Thự Trắng (Chợ Ngăm, Ứng Hòa)',
    priceDisplay: '600.000đ / m ngang',
    marketPriceRange: 'Giá thị trường: Khảo sát + Rèm vải 750.000đ – 950.000đ / m ngang',
    marketPriceNote: 'Miễn phí 100% công khảo sát và tư vấn chừa hộc thạch cao âm trần từ khi nhà đang sơn bả. Cam kết giữ giá ưu đãi 600.000đ/m ngang đến ngày tân gia.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Chi phí khảo sát & Tư vấn hộc rèm âm trần tại công trình',
        marketPrice: '200.000đ – 300.000đ',
        storePrice: 'MIỄN PHÍ 100%',
        note: 'Anh Tuyến trực tiếp đo đạc tận nơi',
      },
      {
        sizeOrOption: 'Rèm Vải Gấm Cản Nắng Cao Cấp (Đặt trước giữ giá)',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Bao gồm phụ kiện & công lắp đặt',
      },
      {
        sizeOrOption: 'Màn Khung Inox Phòng Ngủ (1,8m × 2,0m)',
        marketPrice: '1.350.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Lắp gọn ngay trước ngày nhập trạch',
      },
    ],
    numericPrice: 600000,
    unitLabel: 'mét ngang rèm (Đặt lịch đo trước khi sơn hoàn thiện)',
    standardDimensions: 'Khảo sát hộc rèm âm trần & kích thước cửa biệt thự thực tế',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/20261023_112522_44728187.jpg',
    secondaryImages: [
      '/assets/aistudio/20261023_112522_44728187.jpg',
      '/assets/aistudio/20261023_112551_27542eea.jpg',
      '/assets/aistudio/20261023_112553_6ffdc042.jpg',
    ],
    highlightTag: 'Khảo Sát Công Trình Thực Tế',
    summary:
      'Hình ảnh thực tế Anh Tuyến có mặt tại công trình biệt thự tân cổ điển trắng đang hoàn thiện (đắp hoa văn cột trụ, ốp gạch chân tường) tại khu vực Chợ Ngăm, Đại Cường, Ứng Hòa để đo đạc kích thước hộc rèm âm trần và phòng ngủ.',
    visualAnnotations: [
      {
        label: 'Kiểm tra cốt trần thạch cao & Hộc rèm âm trần',
        detail: 'Tư vấn thợ thạch cao chừa khe rèm rộng 18cm–22cm (cho rèm 2 lớp) ngay từ giai đoạn đang hoàn thiện thô.',
      },
      {
        label: 'Đo kích thước lọt lòng & phủ bì cửa sổ mặt tiền',
        detail: 'Đo chuẩn từng milimet để gia công rèm vải 600.000đ/m ngang và màn khung 1.000.000đ/bộ (1,8m × 2,0m) kịp ngày tân gia.',
      },
      {
        label: 'Hệ cột trụ đắp phù điêu tân cổ điển trắng',
        detail: 'Không gian kiến trúc bề thế đòi hỏi các mẫu rèm vải gấm dày dặn, sóng rèm suôn thẳng từ trần xuống sàn.',
      },
    ],
    specs: [
      { label: 'Mã khảo sát', value: 'CT-BT-02 (Biệt Thự Trắng Chợ Ngăm – Đại Cường – Ứng Hòa)' },
      { label: 'Giai đoạn khảo sát', value: 'Khi công trình đang hoàn thiện trần thạch cao, sơn bả và ốp lát' },
      { label: 'Chi phí khảo sát', value: 'Miễn phí 100% đo đạc và mang quyển mẫu vải tận công trình' },
      { label: 'Báo giá cam kết', value: 'Rèm vải 600.000đ/m ngang | Màn khung 1,8m×2m: 1.000.000đ/bộ' },
    ],
    articleParagraphs: [
      'Kinh nghiệm vàng cho các gia chủ đang xây nhà mới hoặc biệt thự tân cổ điển: Hãy gọi đội kỹ thuật Rèm Tuyến Hoa đến khảo sát ngay khi công trình đang đóng trần thạch cao và sơn bả (như hình ảnh thực tế tại công trình biệt thự trắng mã CT-BT-02).',
      'Việc khảo sát sớm giúp Anh Tuyến trực tiếp hướng dẫn đội thợ thạch cao chừa kích thước hộc rèm âm trần chuẩn xác (rộng 15cm cho rèm 1 lớp, 20cm–22cm cho rèm 2 lớp) và đi sẵn nguồn điện chờ nếu gia chủ muốn lắp rèm tự động thông minh.',
      'Ngay khi gia chủ dọn vệ sinh chuẩn bị nhập trạch, toàn bộ rèm cửa (600.000đ/m ngang) và màn khung giường ngủ (1.000.000đ/bộ rộng 1,8m dài 2,0m) đã được may đo hoàn chỉnh, chỉ mất 1 buổi lắp đặt là ngôi nhà lộng lẫy đón khách tân gia.'
    ],
    facebookPostCopy:
      '📐 [BÀI ĐĂNG SỐ 12] KHẢO SÁT TRỰC TIẾP CÔNG TRÌNH BIỆT THỰ TÂN CỔ ĐIỂN ĐANG HOÀN THIỆN TẠI ỨNG HÒA!\n' +
      '💡 Gia chủ đang xây nhà mới hãy gọi ngay Anh Tuyến để được tư vấn chừa hộc rèm âm trần thạch cao chuẩn đẹp hoàn toàn MIỄN PHÍ.\n' +
      '💰 BẢNG GIÁ CAM KẾT KHÔNG PHÁT SINH:\n' +
      '✅ Rèm vải cản nắng trọn gói: 600.000đ / m ngang cả lắp (Thị trường 750.000đ/m).\n' +
      '✅ Rèm vải 2 lớp âm trần: 850.000đ / m ngang cả lắp.\n' +
      '✅ Màn khung phòng ngủ 1,8m × 2,0m: 1.000.000đ / 1 bộ.\n' +
      '📞 Hotline khảo sát miễn phí: 0344.727.528!',
  },
  {
    id: 'khu-pho-thuong-mai-chan-ga-goi-dem-cho-ngam-ct05',
    code: 'CT-BT-03',
    category: 'cong-trinh-video',
    categoryName: 'Công Trình Thực Tế & Video',
    title: 'Hình Ảnh Thực Tế Cửa Hàng Chăn Ga Gối Đệm & Công Trình Biệt Thự Trắng Tại Khu Vực Chợ Ngăm – Ứng Hòa',
    shortTitle: 'Cửa Hàng Chăn Ga Gối Đệm & Rèm Ứng Hòa',
    priceDisplay: '1.350.000đ / tấm đệm',
    marketPriceRange: 'Giá thị trường: Đệm bông ép 1,65Tr – 3,45Tr | Màn khung 1,3Tr',
    marketPriceNote: 'Phân phối trực tiếp tại cửa hàng khu vực Chợ Cháy – Chợ Ngăm, Ứng Hòa với mức chiết khấu 20% – 30% so với giá niêm yết hãng.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Đệm Bông Ép Hàn Quốc Gấp 3 (Vikosan / Sông Hồng / Everon)',
        marketPrice: '1.650.000đ – 3.450.000đ',
        storePrice: '1.350.000đ – 2.450.000đ',
        note: 'Đủ kích thước 1m2, 1m5, 1m6, 1m8, 2m2',
      },
      {
        sizeOrOption: 'Màn Khung Inox Cao Cấp (Rộng 1,8m × Dài 2,0m)',
        marketPrice: '1.300.000đ / bộ',
        storePrice: '1.000.000đ / bộ',
        note: 'Bao gồm công thợ lắp tận giường',
      },
      {
        sizeOrOption: 'Mái Bạt Xếp Lượn Sóng & Rèm Cửa Cản Nắng',
        marketPrice: 'Bạt 420k/m² · Rèm 750k/m',
        storePrice: 'Bạt 350k/m² · Rèm 600k/m',
        note: 'Thi công trọn gói trong ngày tại Ứng Hòa',
      },
    ],
    numericPrice: 1000000,
    unitLabel: 'Đầy đủ Chăn Ga Gối Đệm – Màn Khung 1Tr – Rèm Cửa',
    standardDimensions: 'Phục vụ tận nơi tại Chợ Cháy, Chợ Ngăm, Đại Cường, Ứng Hòa & lân cận',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/20261023_112551_27542eea.jpg',
    secondaryImages: [
      '/assets/aistudio/20261023_112553_6ffdc042.jpg',
      '/assets/aistudio/20261023_112522_44728187.jpg',
    ],
    highlightTag: 'Hình Ảnh Thực Tế Tại Ứng Hòa',
    summary:
      'Hình ảnh thực tế khu phố sầm uất dưới bóng cây đa cổ thụ tại khu vực Chợ Ngăm, Đại Cường, Ứng Hòa, Hà Nội – nơi cung ứng Chăn Ga Gối Đệm, Quần Áo Cao Cấp và thi công trọn gói cho tòa biệt thự tân cổ điển trắng phía sau.',
    visualAnnotations: [
      {
        label: 'Cửa hàng Chăn Ga Gối Đệm mặt đường lớn',
        detail: 'Trưng bày sẵn các mẫu chăn ga gối đệm, chiếu trúc, màn khung để bà con khu vực Ứng Hòa ghé xem trực tiếp.',
      },
      {
        label: 'Tòa biệt thự tân cổ điển trắng nổi bật phía sau',
        detail: 'Công trình biệt thự 3 tầng mái vòm trắng ngay sau cửa hàng đang được hoàn thiện nội thất rèm cửa & phòng ngủ.',
      },
      {
        label: 'Phục vụ nhanh chóng khắp các xã huyện Ứng Hòa',
        detail: 'Từ Chợ Cháy, Chợ Ngăm, Đại Cường, Trầm Lộng đến Kim Đường, Đông Lỗ đều được giao lắp miễn phí trong ngày.',
      },
    ],
    specs: [
      { label: 'Mã địa điểm', value: 'CT-BT-03 (Tuyến phố Chợ Ngăm – Đại Cường – Ứng Hòa – Hà Nội)' },
      { label: 'Sản phẩm chủ lực 1', value: 'Màn khung cao cấp rộng 1,8m × dài 2,0m: 1.000.000đ / 1 bộ' },
      { label: 'Sản phẩm chủ lực 2', value: 'Rèm vải cản nắng: 600.000đ / m ngang | Bạt xếp: 350.000đ / m²' },
      { label: 'Sản phẩm chủ lực 3', value: 'Chăn ga gối đệm Vikosan, Sông Hồng, Everon, Kymdan & Tương Ngọc Tuyến' },
    ],
    articleParagraphs: [
      'Bức ảnh thực tế ghi lại khung cảnh quen thuộc tại tuyến phố Chợ Ngăm – Đại Cường – Ứng Hòa – Hà Nội dưới tán cây đa cổ thụ rợp bóng mát, phía trước là cửa hàng Chăn Ga Gối Đệm – Quần Áo Cao Cấp, phía sau là tòa biệt thự tân cổ điển màu trắng nguy nga đang hoàn thiện.',
      'Nhờ lợi thế cơ sở sản xuất và kho hàng ngay tại địa phương, Tuyến Hoa luôn đảm bảo mức giá gốc tận xưởng tốt nhất thị trường cho bà con: Màn khung giường đôi rộng 1,8m dài 2,0m chỉ 1.000.000đ/bộ, Rèm vải chống nắng 600.000đ/m ngang cả công lắp, Bạt mái xếp lượn sóng 350.000đ/m² cả khung lẫn bạt.',
      'Bà con chỉ cần nhấc máy gọi 0344.727.528, đội thợ sẽ mang mẫu tận nhà đo đạc và lắp đặt chu đáo ngay trong ngày.'
    ],
    facebookPostCopy:
      '📍 [BÀI ĐĂNG SỐ 13] CỬA HÀNG CHĂN GA GỐI ĐỆM & MÀNH RÈM TẠI ỨNG HÒA – BÁO GIÁ TỐT NHẤT THỊ TRƯỜNG!\n' +
      '--------------------------------------------\n' +
      '✅ 1. Màn khung cao cấp rộng 1,8m × dài 2,0m: 1.000.000đ / 1 bộ cả lắp (Thị trường 1.300.000đ).\n' +
      '✅ 2. Rèm vải cản nắng 100%: 600.000đ / m ngang cả công lắp đặt (Thị trường 750.000đ).\n' +
      '✅ 3. Mái bạt xếp lượn sóng Hàn Quốc: 350.000đ / 1 m² cả khung & bạt (Thị trường 420.000đ).\n' +
      '✅ 4. Đệm bông ép chính hãng Vikosan, Sông Hồng, Everon: Chiết khấu 20%–30%, từ 1.350.000đ/tấm.\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528 phục vụ tận nhà trong ngày!',
  },
  {
    id: 'doi-xe-ban-tai-dien-ngoc-tuyen-giao-lap-ct06',
    code: 'DV-NT-01',
    category: 'cong-trinh-video',
    categoryName: 'Công Trình Thực Tế & Video',
    title: 'Dịch Vụ Vận Chuyển & Giao Lắp Tận Nhà Bằng Đội Xe Bán Tải "Ngọc Tuyến" – Miễn Phí Ship Đơn Màn Khung, Đệm & Rèm',
    shortTitle: 'Đội Xe Bán Tải Ngọc Tuyến Giao Lắp Tận Nhà',
    priceDisplay: 'Miễn Phí Giao Lắp 0đ',
    marketPriceRange: 'Phí vận chuyển & khoan lắp ngoài thị trường: 200.000đ – 400.000đ / chuyến',
    marketPriceNote: 'Khách đặt Màn khung 1Tr/bộ, Đệm bông ép hoặc Rèm cửa tại Ngọc Tuyến – Tuyến Hoa được MIỄN PHÍ 100% phí xe bán tải chở hàng và công thợ lắp đặt.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Phí xe bán tải chở Đệm 1,8m×2,0m & Khung rèm dài 3m–4m tận nhà',
        marketPrice: '200.000đ / chuyến',
        storePrice: 'MIỄN PHÍ 0đ',
        note: 'Áp dụng tại Ứng Hòa & khu vực lân cận',
      },
      {
        sizeOrOption: 'Công thợ khoan lắp Màn khung (1,8m×2,0m) & Rèm cửa tại nhà',
        marketPrice: '150.000đ – 250.000đ / bộ',
        storePrice: 'MIỄN PHÍ 0đ',
        note: 'Lắp sạch sẽ, nghiệm thu mới thanh toán',
      },
      {
        sizeOrOption: 'Bảo hành tận nơi cho Khung màn, Rèm cửa & Đệm chính hãng',
        marketPrice: 'Tính phí theo lần gọi',
        storePrice: 'MIỄN PHÍ 3 – 5 NĂM',
        note: 'Uy tín thương hiệu Ngọc Tuyến – Tuyến Hoa',
      },
    ],
    numericPrice: 1000000,
    unitLabel: 'Giao lắp miễn phí Màn khung 1Tr, Đệm & Rèm cửa',
    standardDimensions: 'Thùng xe rộng chở nguyên tấm đệm 1,8m × 2,0m & khung rèm dài 3m–4m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/Gemini_Generated_Image_uzr9k0uzr9k0uzr9_704694ed.png',
    highlightTag: 'Giao Lắp Miễn Phí Tận Nhà',
    summary:
      'Hình ảnh chiếc xe bán tải gắn biển thương hiệu "Ngọc Tuyến" đại diện cho dịch vụ vận chuyển chuyên nghiệp: Chở đệm bông ép, khung màn inox 1,8m × 2,0m, thanh ray rèm cửa và các thùng Tương Ngọc Tuyến giao tận cửa nhà khách hàng.',
    visualAnnotations: [
      {
        label: 'Biển tên thương hiệu "Ngọc Tuyến" phát sáng',
        detail: 'Khẳng định uy tín và phong cách phục vụ hiện đại, tận tâm của cơ sở Ngọc Tuyến – Tuyến Hoa.',
      },
      {
        label: 'Thùng xe bán tải rộng rãi, an toàn hàng hóa',
        detail: 'Vận chuyển đệm 1,8m × 2,0m, khung màn inox và các bình tương thủy tinh không lo cong vênh hay va đập.',
      },
      {
        label: 'Giao hàng & Lắp đặt bất kể nắng mưa',
        detail: 'Miễn phí 100% chi phí vận chuyển và công lắp đặt cho khách đặt màn khung, rèm cửa và đệm tại khu vực.',
      },
    ],
    specs: [
      { label: 'Mã dịch vụ', value: 'DV-NT-01 (Vận chuyển & Lắp đặt tận nhà Ngọc Tuyến)' },
      { label: 'Phí vận chuyển thị trường', value: '200.000đ – 400.000đ / chuyến xe & công lắp' },
      { label: 'Phí tại Ngọc Tuyến', value: 'MIỄN PHÍ 100% giao hàng & lắp đặt tận nhà' },
      { label: 'Thời gian đáp ứng', value: 'Giao nhanh trong 2 giờ đối với Đệm, Màn khung 1,8m×2m & Tương Ngọc Tuyến' },
      { label: 'Hotline điều phối', value: '0344.727.528 (Anh Tuyến)' },
    ],
    articleParagraphs: [
      'Nhằm mang đến trải nghiệm mua sắm thuận tiện nhất cho bà con, cơ sở Ngọc Tuyến – Tuyến Hoa hỗ trợ vận chuyển và lắp đặt tận nơi hoàn toàn miễn phí (tiết kiệm 200.000đ – 400.000đ phí xe và công thợ so với thị trường) đối với các đơn hàng Đệm bông ép, Màn khung (1.000.000đ/bộ 1,8m × 2,0m), Rèm cửa (600.000đ/m ngang) và Bạt mái xếp (350.000đ/m²).',
      'Khách hàng ở xa hoặc bận rộn công việc chỉ cần chọn mẫu trên website hoặc qua Zalo 0344.727.528, đội thợ sẽ chở đầy đủ vật tư, thang nhôm, máy khoan hút bụi đến lắp đặt sạch sẽ, nghiệm thu ưng ý mới thanh toán.'
    ],
    facebookPostCopy:
      '🛻 [BÀI ĐĂNG SỐ 14] ĐỘI XE BÁN TẢI NGỌC TUYẾN GIAO & LẮP ĐẶT MIỄN PHÍ TẬN NHÀ CHO QUÝ KHÁCH!\n' +
      '--------------------------------------------\n' +
      '✅ Mua Màn khung 1.000.000đ/bộ (1,8m × 2,0m) -> Miễn phí chở tận nơi & khoan lắp tận giường!\n' +
      '✅ Mua Đệm bông ép, Chăn ga gối, Rèm cửa (600k/m) -> Xe bán tải chở thẳng vào tận phòng không lo cồng kềnh!\n' +
      '✅ Đặt Đặc sản Tương Ngọc Tuyến (65k/chai 500ml, 120k/bình quà biếu 750ml) -> Ship tận tay an toàn!\n' +
      '📞 Gọi/Zalo đặt hàng ngay: 0344.727.528 (Phục vụ tận tâm từ 6h30 – 21h00 tất cả các ngày)!',
  },
];

export function getDeduplicatedProductPosts(
  posts: AnnotatedProductPost[] = ANNOTATED_PRODUCT_POSTS
): AnnotatedProductPost[] {
  const seenImages = new Set<string>();
  const seenCodes = new Set<string>();
  const result: AnnotatedProductPost[] = [];

  // First pass: collect all primary images
  for (const post of posts) {
    const normalizedImg = post.imageUrl.trim().replace(/__\d+__/, '_');
    const normalizedCode = post.code.trim().toUpperCase();
    if (seenImages.has(normalizedImg) || seenCodes.has(normalizedCode)) {
      continue;
    }
    seenImages.add(normalizedImg);
    seenCodes.add(normalizedCode);
    result.push(post);
  }

  // Second pass: deduplicate secondaryImages globally against all primary and already-used secondary images
  return result.map((post) => {
    if (!post.secondaryImages) {
      return post;
    }
    const uniqueSecondary: string[] = [];
    for (const img of post.secondaryImages) {
      const normalizedSec = img.trim().replace(/__\d+__/, '_');
      if (
        !seenImages.has(normalizedSec) &&
        !img.includes('Gemini_Generated_Image_v2fukev2fukev2fu__1__') &&
        !img.includes('Gemini_Generated_Image_v2fukev2fukev2fu__2__') &&
        !img.includes('IMG_5282__1__')
      ) {
        seenImages.add(normalizedSec);
        uniqueSecondary.push(img);
      }
    }
    return {
      ...post,
      secondaryImages: uniqueSecondary.length > 0 ? uniqueSecondary : undefined,
    };
  });
}

export function filterAnnotatedProducts(
  category: NewProductCategory,
  searchQuery: string = ''
): AnnotatedProductPost[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const deduplicated = getDeduplicatedProductPosts(ANNOTATED_PRODUCT_POSTS);
  return deduplicated.filter((item) => {
    if (category !== 'all' && item.category !== category) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.code.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.categoryName.toLowerCase().includes(normalizedQuery) ||
      item.priceDisplay.toLowerCase().includes(normalizedQuery) ||
      item.marketPriceRange.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getCanopyProductById(idOrCode: string): AnnotatedProductPost | undefined {
  const target = idOrCode.trim().toLowerCase();
  return getDeduplicatedProductPosts(ANNOTATED_PRODUCT_POSTS).find(
    (item) => item.id.toLowerCase() === target || item.code.toLowerCase() === target
  );
}

export function generateFullCatalogFacebookPost(category: NewProductCategory = 'all'): string {
  const posts = filterAnnotatedProducts(category);
  const header =
    '🌟 TỔNG HỢP BÀI ĐĂNG & BẢNG GIÁ CÁC SẢN PHẨM TẠI SHOWROOM & XƯỞNG TUYẾN HOA 🌟\n' +
    '📍 Địa chỉ: Khu vực Chợ Cháy – Chợ Ngăm, Huyện Ứng Hòa, Hà Nội\n' +
    '📞 Hotline / Zalo đặt hàng & lắp đặt tận nhà: 0344.727.528\n' +
    '==================================================\n' +
    '📋 BẢNG GIÁ NIÊM YẾT RÕ RÀNG (RẺ HƠN GIÁ THỊ TRƯỜNG 15% – 30%):\n' +
    '1️⃣ ĐỆM GẤP 2 CHẦN MÚI, ĐỆM KIM CƯƠNG, TH VICUNA 5 SAO, EVERHOME, MÀN KHUNG & CHIẾU MÂY:\n' +
    '   • Đệm Gấp 2 Chần Múi Lông Vũ & Kẻ Caro Thành Vải Bố (Dày 18–20cm): Cỡ 1m6×2m từ 1.750.000đ – 1.850.000đ | Cỡ 1m8×2m từ 1.950.000đ – 2.050.000đ.\n' +
    '   • Đệm Bông Tinh Khiết Mặt Trần Kim Cương & Kim Cương Plaza (BH 5 năm): Cỡ 1m6×2m giá 1.850.000đ | Cỡ 1m8×2m giá 2.050.000đ.\n' +
    '   • Đệm Cao Cấp TH VICUNA Luxury Sleep 5 Sao (Bọc góc da): Cỡ 1m6×2m giá 2.150.000đ | Cỡ 1m8×2m giá 2.350.000đ.\n' +
    '   • Đệm Lò Xo Túi Độc Lập Everhome: Cỡ 1m6×2m giá 2.850.000đ | Cỡ 1m8×2m giá 3.250.000đ | Bản Gold 3 Viền giá 4.450.000đ.\n' +
    '   • Nệm Cao Su 100% Thiên Nhiên Everhome (Bảo hành 10 năm): Cỡ 1m6×2m×10cm giá 4.850.000đ | Cỡ 1m8×2m×10cm giá 5.450.000đ.\n' +
    '   • Màn khung giường đôi Rộng 1,8m × Dài 2,0m: 1.000.000đ / 1 bộ (Giá thị trường: 1.250.000đ – 1.450.000đ).\n' +
    '   • Chiếu mây điều hòa lót lưới 3D & ngải cứu (tặng 2 vỏ gối + túi xách): Cỡ 1m6×2m giá 450.000đ/bộ | Cỡ 1m8×2m giá 490.000đ/bộ | Cỡ 2m×2m2 giá 550.000đ/bộ.\n\n' +
    '2️⃣ BẠT TỰ CUỐN CHE NẮNG MƯA, MÁI HIÊN TAY KHUỶU & BẠT XẾP:\n' +
    '   • Bạt tự cuốn lò xo kẻ sọc xanh trắng / vàng xanh: 220.000đ / 1 m² cả lắp (Thị trường: 300.000đ/m²).\n' +
    '   • Bạt tự cuốn hoa văn nâu đồng & lá trúc: 240.000đ / 1 m² cả lắp | Bạt lưới đen xuyên sáng: 280.000đ / 1 m².\n' +
    '   • Mái bạt xếp lượn sóng Hàn Quốc 3 lớp: 350.000đ / 1 m² trọn gói cả khung sắt & công hàn lắp.\n\n' +
    '3️⃣ XƯỞNG RÈM VẢI, RÈM CUỐN VĂN PHÒNG, VÁCH TỔ ONG CỬA VÒM & CỬA LƯỚI MUỖI:\n' +
    '   • Rèm cuốn chống nắng 100% văn phòng & gia đình: 280.000đ / 1 m² cả lắp.\n' +
    '   • Rèm vải gấm cản nắng 100% (1 lớp): 600.000đ / mét ngang cả thanh treo & công lắp (Rèm 2 lớp âm trần: 850.000đ/m).\n' +
    '   • Rèm cầu vồng Hàn Quốc: 520.000đ / 1 m² | Cửa lưới chống muỗi xếp xích: 550.000đ / 1 m² | Vách rèm tổ ong ngăn lạnh điều hòa: 650.000đ / 1 m² (Cửa vòm cong: 750.000đ/m²).\n\n' +
    '4️⃣ ĐỆM BÔNG ÉP HÀN QUỐC GẤP 3 & ĐẶC SẢN TƯƠNG NGỌC TUYẾN:\n' +
    '   • Đệm bông ép gấp 3 chính hãng (Sông Hồng, Everhome, Everon, Kim Đoan, Vikosan): Từ 1.350.000đ – 2.450.000đ/tấm.\n' +
    '   • Đặc sản Tương Ngọc Tuyến ủ chum sành: 65.000đ / chai 500ml | 120.000đ / bình lục giác quà biếu 750ml.\n' +
    '==================================================\n' +
    `📌 CHI TIẾT ${posts.length} SẢN PHẨM ĐÃ CHÚ THÍCH RÕ RÀNG (ĐÃ LỌC BỎ ẢNH TRÙNG LẶP):\n\n`;

  const itemsText = posts
    .map(
      (p, index) =>
        `[${index + 1}] MÃ ${p.code}: ${p.title.toUpperCase()}\n` +
        `   - Giá tại cửa hàng: ${p.priceDisplay} (${p.marketPriceRange})\n` +
        `   - Quy cách: ${p.standardDimensions}\n` +
        `   - Đặc điểm nổi bật: ${p.summary}`
    )
    .join('\n\n');

  const footer =
    '\n\n==================================================\n' +
    '🚛 CAM KẾT: Miễn phí 100% xe bán tải Ngọc Tuyến – Tuyến Hoa giao hàng & thợ lắp đặt tận nhà – Nghiệm thu ưng ý mới thanh toán!\n' +
    '📞 GỌI / KẾT BẠN ZALO NGAY: 0344.727.528 (Showroom Tuyến Hoa)';

  return header + itemsText + footer;
}
