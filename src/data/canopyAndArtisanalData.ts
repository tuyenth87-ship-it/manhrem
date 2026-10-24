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

export const MARKET_PRICE_SUMMARY_TABLE: MarketPriceSummaryRow[] = [
  {
    id: 'mp-man-khung-18x20',
    productGroup: '1. Màn Khung Inox (1,8m × 2,0m)',
    specification: 'Giường đôi 1,8m × 2,0m (Đủ 4 màu)',
    marketPrice: '1.300.000đ / bộ',
    storePrice: '1.000.000đ / bộ',
    warrantyAndService: 'Bao lắp tận giường, bảo hành 3 năm',
  },
  {
    id: 'mp-man-khung-other-sizes',
    productGroup: '2. Màn Khung Cỡ 1,6m & 2,2m',
    specification: 'Giường 1,6m×2m hoặc 2,0m×2,2m',
    marketPrice: '1.150k – 1.550k',
    storePrice: '950k – 1.150k / bộ',
    warrantyAndService: 'Giảm 50k/bộ khi lắp từ 2 bộ',
  },
  {
    id: 'mp-rem-vai-1lop',
    productGroup: '3. Rèm Vải Cản Nắng (1 Lớp)',
    specification: 'Rèm gấm cản nắng 100% & Rèm thêu',
    marketPrice: '750.000đ / m',
    storePrice: '600.000đ / m',
    warrantyAndService: 'Trọn gói thanh treo & công lắp',
  },
  {
    id: 'mp-rem-vai-2lop',
    productGroup: '4. Rèm Vải 2 Lớp Âm Trần',
    specification: '1 lớp vải gấm + 1 lớp voan trắng',
    marketPrice: '1.150.000đ / m',
    storePrice: '850.000đ / m',
    warrantyAndService: 'Kèm 2 hệ thanh ray âm trần',
  },
  {
    id: 'mp-rem-cau-vong',
    productGroup: '5. Rèm Cầu Vồng Hàn Quốc',
    specification: 'Lắp gọn lọt lòng cửa sổ',
    marketPrice: '650.000đ / m²',
    storePrice: '520.000đ / m²',
    warrantyAndService: 'Hộp máng nhôm tĩnh điện bền 10 năm',
  },
  {
    id: 'mp-dem-bong-ep',
    productGroup: '6. Đệm Bông Ép Gấp 3 Hàn Quốc',
    specification: 'Vikosan / Sông Hồng / Everon',
    marketPrice: '1,65Tr – 3,15Tr',
    storePrice: '1,35Tr – 2,45Tr',
    warrantyAndService: 'Chính hãng 100%, bảo hành 5 năm',
  },
  {
    id: 'mp-bat-mai-xep',
    productGroup: '7. Mái Bạt Xếp Lượn Sóng',
    specification: 'Bạt Hàn Quốc 3 lớp + Khung thép',
    marketPrice: '420.000đ / m²',
    storePrice: '350.000đ / m²',
    warrantyAndService: 'Trọn gói cả khung sắt & công lắp',
  },
  {
    id: 'mp-tuong-ngoc-tuyen',
    productGroup: '8. Tương Ngọc Tuyến Thủ Công',
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

export function filterAnnotatedProducts(
  category: NewProductCategory,
  searchQuery: string = ''
): AnnotatedProductPost[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return ANNOTATED_PRODUCT_POSTS.filter((item) => {
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
  return ANNOTATED_PRODUCT_POSTS.find(
    (item) => item.id.toLowerCase() === target || item.code.toLowerCase() === target
  );
}

export function generateFullCatalogFacebookPost(category: NewProductCategory = 'all'): string {
  const posts = filterAnnotatedProducts(category);
  const header =
    '🌟 TỔNG HỢP BÀI ĐĂNG & BẢNG GIÁ CÁC SẢN PHẨM TẠI CỬA HÀNG NGỌC TUYẾN – TUYẾN HOA 🌟\n' +
    '📍 Địa chỉ: Khu vực Chợ Cháy – Chợ Ngăm, Huyện Ứng Hòa, Hà Nội\n' +
    '📞 Hotline / Zalo đặt hàng & lắp đặt tận nhà: 0344.727.528\n' +
    '==================================================\n' +
    '📋 BẢNG GIÁ NIÊM YẾT RÕ RÀNG (RẺ HƠN GIÁ THỊ TRƯỜNG 15% – 25%):\n' +
    '1️⃣ MÀN KHUNG INOX CAO CẤP (Đủ 4 màu: Xanh Dương, Tím Huế, Xanh Lam, Xanh Cốm):\n' +
    '   • Kích thước chuẩn giường đôi Rộng 1,8m × Dài 2,0m: 1.000.000đ / 1 bộ (Giá thị trường: 1.250.000đ – 1.450.000đ).\n' +
    '   • Kích thước 1,6m × 2,0m: 950.000đ / bộ | Kích thước đại 2,0m × 2,2m: 1.150.000đ / bộ.\n' +
    '   • Đã bao gồm cả khung Inox, màn tuyn lạnh thêu hoa & công thợ lắp tận giường!\n\n' +
    '2️⃣ RÈM CỬA CẢN NẮNG & RÈM CẦU VỒNG HÀN QUỐC:\n' +
    '   • Rèm vải gấm cản nắng 100% (1 lớp, gồm cả রèm thêu cây tùng): 600.000đ / mét ngang cả thanh treo & công lắp (Giá thị trường: 750.000đ – 900.000đ/m).\n' +
    '   • Hệ rèm vải 2 lớp âm trần (1 lớp vải gấm + 1 lớp voan lụa trắng): 850.000đ / mét ngang (Giá thị trường: 1.150.000đ/m).\n' +
    '   • Rèm cầu vồng Hàn Quốc cản sáng phòng khách/phòng ngủ: 520.000đ / 1 m² cả lắp (Giá thị trường: 650.000đ/m²).\n\n' +
    '3️⃣ ĐỆM BÔNG ÉP HÀN QUỐC GẤP 3 & MÁI BẠT XẾP DI ĐỘNG:\n' +
    '   • Đệm bông ép gấp 3 chính hãng (Vikosan, Sông Hồng, Everon bảo hành 5 năm): Từ 1.350.000đ – 2.450.000đ/tấm tùy kích thước.\n' +
    '   • Mái bạt xếp lượn sóng Hàn Quốc 3 lớp: 350.000đ / 1 m² trọn gói cả khung sắt & công hàn lắp (Giá thị trường: 420.000đ – 480.000đ/m²).\n\n' +
    '4️⃣ ĐẶC SẢN TƯƠNG NGỌC TUYẾN THỦ CÔNG TRUYỀN THỐNG (Ủ CHUM SÀNH):\n' +
    '   • Chai thủy tinh cao cấp 500ml nắp kín niêm phong: 65.000đ / chai (Mua 2 chai: 120.000đ | Thùng 6 chai: 350.000đ).\n' +
    '   • Bình thủy tinh lục giác chạm chữ Thọ bọc giấy Kraft 750ml (Quà biếu): 120.000đ / bình (Cặp 2 bình: 230.000đ).\n' +
    '==================================================\n' +
    `📌 CHI TIẾT ${posts.length} SẢN PHẨM TRONG HÌNH ẢNH & VIDEO:\n\n`;

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
    '🚛 CAM KẾT: Miễn phí 100% xe bán tải Ngọc Tuyến giao hàng & thợ lắp đặt tận nhà – Nghiệm thu ưng ý mới thanh toán!\n' +
    '📞 GỌI / KẾT BẠN ZALO NGAY: 0344.727.528 (Anh Tuyến – Ngọc Tuyến)';

  return header + itemsText + footer;
}
