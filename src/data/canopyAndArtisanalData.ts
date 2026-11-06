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
  imageCaptions?: Record<string, { badge: string; caption: string }>;
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
  totalUploaded: 380,
  totalRemovedDuplicates: 65,
  totalUniquePublished: 315,
  groups: [
    {
      id: 'dup-lo-12-anh-manh-truc-tu-duong-vach-chu-tho-phuc-duc-2026',
      groupTitle: 'Lô 12 Ảnh Tuyệt Tác Mành Tre Trúc & Vách Bình Phong Chữ Thọ Ngọc Tuyến Mới Nhất: Công Trình Nhà Thờ Họ · Từ Đường 3 Gian · Đình Chùa · Biệt Thự Ven Hồ & Bộ Tranh Thư Pháp Phúc – Đức · Chùa Một Cột · Salon Tóc Thanh Vân',
      keptImage: 'MT_NT_01_cong_trinh_nha_tho_tu_duong_ngoc_tuyen_hd.jpg',
      removedCount: 0,
      removedExamples: [
        'Quy hoạch Bài Đăng Số 1 (Mã MT-NT-01 – 06 Ảnh Công Trình Kiến Trúc): Tổ hợp 6 công trình Ngọc Tuyến Mành Che Nắng (Đình Chùa, Từ Đường, Nhà Cổ), Công trình Từ Đường 3 Gian lắp bộ 3 bức Tùng – Đầm Sen Chữ Phúc (福) – Trúc, 02 mẫu Vách Bình Phong Khung Cột Trúc Cật Già chạm Chữ Thọ Tròn (đã xử lý làm sạch watermark đơn vị khác & đóng khung Ngọc Tuyến HD) và Hệ 6 khoang Mành Trúc Đỏ Cánh Gián che hành lang Biệt Thự Ven Hồ',
        'Quy hoạch Bài Đăng Số 2 (Mã MT-NT-02 – 06 Ảnh Tuyệt Tác Mành Tranh Phong Thủy & Khắc Tên Riêng): Cặp mành trúc nâu đỏ vẽ Đầm Sen Hồng thư pháp Vàng Kim "PHÚC" & "ĐỨC", Mành tranh danh thắng "Chùa Một Cột – Liên Hoa Đài", Bộ đôi tranh mành treo tường đối xứng "Tùng Hạc – Trúc Hạc", Bộ ghép đôi đại cảnh "Tùng Trúc Hạc Hội Tụ", Bức "Trúc Lâm Sơn Thủy" và mẫu khắc tên thương hiệu riêng "Salon Tóc Thanh Vân"',
      ],
      reason: 'Đã biên tập nội dung phong cách sang trọng, cổ kính, đóng khung Typography HD kèm bảng giá niêm yết tại xưởng Ngọc Tuyến – Tuyến Hoa và đưa lên vị trí trang trọng nhất đầu website.',
    },
    {
      id: 'dup-lo-124-anh-bang-gia-vikosan-alyda-skysilk-tencel-eu-2026',
      groupTitle: 'Lô 124 Ảnh (Đã Viết Bài, Điền Bảng Giá Chi Tiết & Đóng Khung HD): Đệm Lò Xo Túi Vikosan 3 Sao · 5 Sao · VIP D\'luxe, Lụa Tencel Alyda® 7 Món, Sky Silk 60s, Ren Công Chúa, D-Dror, Dream World Thêu Trúc, Tencel EU & Kho Đệm',
      keptImage: 'DLX_VK_01_bang_gia_dem_lo_xo_vikosan_hd.jpg',
      removedCount: 7,
      removedExamples: [
        'Điền đầy đủ bảng giá theo từng kích thước (1m2×1m9, 1m5×1m9, 1m6×2m, 1m8×2m, 2m0×2m2) cho Đệm Lò Xo Túi Độc Lập Vikosan Standard 3 Sao (3*22: 3,48Tr–5,38Tr), Standard 5 Sao (5*22: 4,33Tr–6,60Tr) và VIP 5 Sao D\'luxe (VIP*30 dày 30cm: 6,08Tr–8,99Tr)',
        'Điền giá niêm yết & giá ưu đãi Tuyến Hoa cho trọn bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® 7 Món (2.150.000đ/bộ), 17 mã Lụa Tencel Sky Silk 60s (1.150.000đ/bộ), 8 màu Ren Công Chúa Hàn Quốc (1.350.000đ/bộ), 4 màu Lụa Tencel D – Dror (1.450.000đ/bộ) và 6 màu Lụa Tencel Dream World Thêu Nhành Trúc (1.350.000đ/bộ)',
        'Bổ sung bài đăng & bảng giá Set Ga Gối Lụa Tencel EU kèm túi khóa kéo (Mã EUMD05–18: 390.000đ/set), Set Ga Gối Chần Bông Tổ Ong (550.000đ/set) và Bộ Đũi Xước 5 Món Kèm Chăn Hè (950.000đ/bộ)',
      ],
      reason: 'Đã tổng hợp toàn bộ 124 bức ảnh sản phẩm, điền bảng giá chi tiết theo từng kích thước ngay trên ảnh bìa HD (phông chữ Be Vietnam Pro sắc nét) và trên từng thẻ bài đăng.',
    },
    {
      id: 'dup-lo-21-anh-manh-tre-truc-phong-tho-phong-tra-2026',
      groupTitle: 'Lô 21 Ảnh Mới Nhất Vừa Tải Lên (Đã Xóa Sạch Watermark & Chỉnh Sửa HD): Mành Tre Trúc Phòng Thờ Gia Tiên (Lưỡng Long Chầu Thọ, Chữ Hiếu, Vạn Cổ Anh Linh, Hoa Sen Vàng) & Mành Trúc Nghệ Thuật Phòng Trà – Phòng Khách (Liên Hoa Cửu Ngư, Tùng Hạc, Mẫu Đơn, Hoa Mai Đỏ)',
      keptImage: 'MT_PT_01_manh_truc_phong_tho_hd.jpg',
      removedCount: 0,
      removedExamples: [
        'Xóa sạch toàn bộ chữ chìm chéo ("Mành tre trúc Hồng Dương") và logo góc dưới bên phải trên cả 21 mẫu Mành Tre Trúc Phòng Thờ & Phòng Khách, tái tạo bộ ảnh Studio HD sắc nét mang thương hiệu Xưởng Mành Tre Trúc Tuyến Hoa – Ngọc Tuyến',
        'Quy hoạch Nhóm Mành Tre Trúc Phòng Thờ Gia Tiên (07 mẫu): Bộ 3 tấm "Vạn Cổ Anh Linh – Âm Siêu Dương Thái" Hoa Sen Trắng, Bộ 3 tấm Bạch Liên Hoa, Mành nâu đỏ vẽ nhũ vàng "Lưỡng Long Chầu Chữ Thọ", Mành nâu cánh gián khắc Hoa Sen Vàng Kim, Mành nâu trầm vẽ Hoa Sen Vàng & Thư pháp chữ "HIẾU", Bộ 3 tấm vách ngăn "Tổ Tiên Công Đức – Chữ Hiếu" và Mành vàng óng Đầm Sen Hồng thơ thư pháp',
        'Quy hoạch Nhóm Mành Tre Trúc Nghệ Thuật Phòng Trà & Phòng Khách (14 mẫu): Liên Hoa Cửu Ngư (Hoa Sen, Chim Bói Cá & Đàn Cá Koi), Hoa Mai Đỏ & Đôi Bướm, Đèn Lồng Đỏ Hoa Đào, Phố Cổ Giang Nam Hồ Sen, Thủy Mặc Sơn Thủy Tùng Hạc Diên Niên, Hoa Mẫu Đơn Hồng Phú Quý, Độc Liên Hồng, Song Hạc Đào Nguyên, Song Liên Cá Chép, Sơn Thủy "Bình An", Hồ Sen Núi Non Mặt Trời Đỏ, Thiết kế riêng "Cửa Hàng Sâm Ngọc Linh", Bộ 3 tấm Viền Triện Hoa Mai Trắng Dưới Trăng và Đầm Sen Hồng Chim Bói Cá',
      ],
      reason: 'Đã chỉnh sửa hậu kỳ xóa sạch watermark đơn vị khác, đóng khung Typography Be Vietnam Pro sắc nét và đăng trọn bộ 21 mẫu Mành Tre Trúc Phòng Thờ & Phòng Trà ngay vị trí số 1 đầu trang web.',
    },
    {
      id: 'dup-lo-17-anh-kho-dem-cao-su-non-american-kim-cuong-good-luck-2026',
      groupTitle: 'Lô 17 Ảnh Kho Xưởng Đệm: Tổng Kho Đệm Cao Su Non American & King Sleep (9 Ảnh) + Đệm Kim Cương Mặt Trần Good Luck, Kim Cương Plaza Airy, Chần Múi Lông Vũ & Gấm Đỏ (8 Ảnh)',
      keptImage: 'KXD_AM_01_cao_su_non_american_hd.jpg',
      removedCount: 2,
      removedExamples: [
        'Lọc bỏ 01 ảnh nháp bị vẽ vệt bút đỏ hình chữ V đè lên mặt đệm (1792918003065...jpg trùng 100% góc chụp với bản sạch 1792918003040...jpg xếp 4 tấm đệm mặt trần xám than bậc thang)',
        'Lọc bỏ 01 ảnh chụp trùng góc lồng thang nâng hàng inox chứa 15 tấm đệm Cao Su Non American tại xưởng (1792915509224...jpg trùng góc với 1792915509174...jpg)',
        'Đóng khung Typography HD Be Vietnam Pro sắc nét cho 04 bài đăng Đệm đầu trang: KXD-TH-01 (Tổng Kho Đệm Cao Su Non American & King Sleep), DKC-TH-01 (Đệm Kim Cương Mặt Trần Good Luck & Plaza Airy), DLV-TH-01 (Đệm Chần Múi Lông Vũ Dày 18–20cm) và DGD-TH-01 (Đệm Gấm Đỏ Phòng Cưới & Gấm Xám Lá Phong)',
      ],
      reason: 'Lọc bỏ 01 ảnh dính nét vẽ bút đỏ và 01 góc chụp trùng lồng thang nâng hàng, giữ lại 15 góc chụp sắc nét nhất.',
    },
    {
      id: 'dup-lo-18-anh-typography-hd-ngoc-tuyen-everhome-rem-bat-2026',
      groupTitle: 'Lô 18 Ảnh Mới Tải Lên (Đã Chỉnh Sửa Phông Chữ Be Vietnam Pro Sắc Nét): Cửa Hàng Ngọc Tuyến, Đệm Lò Xo & Cao Su Everhome, Rèm Tổ Ong, Rèm Cuốn & Bạt Tự Cuốn',
      keptImage: 'SR_NT_01_cua_hang_ngoc_tuyen_typography_hd.jpg',
      removedCount: 0,
      removedExamples: [
        'Phục chế & làm nét hoàn toàn biển hiệu Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến (IMG_5432.PNG): Xóa sạch các chữ AI bị nhòe lỗi ("KIM ĐOAN", "Số điện thogi", "03447ET528", "SVER HONG") và thay bằng phông chữ Be Vietnam Pro chuẩn: "CỬA HÀNG CHĂN GA GỐI ĐỆM NGỌC TUYẾN – ĐẠI LÝ CẤP 1 SÔNG HỒNG • EVERHOME • EVERON • KYMDAN – ĐT: 0344.727.528"',
        'Chỉnh sáng, khử ám màu và đóng khung Typography HD sắc nét cho 05 ảnh Đệm Lò Xo Everhome (IMG_5413 Gold 3 Viền, IMG_5416 Pillow Top, IMG_5422 Luxury, IMG_5415 Lò xo túi, IMG_5408 Kho lõi lò xo) & 03 ảnh Nệm Cao Su Thiên Nhiên Everhome (IMG_5412, IMG_5410, IMG_5411)',
        'Đóng khung Typography HD rõ giá & thông số cho 02 ảnh Vách Rèm Tổ Ong Cửa Vòm (IMG_5433, IMG_5434), 04 ảnh Rèm Cuốn Văn Phòng (IMG_5435, IMG_5436, IMG_5437, IMG_5438) và 03 ảnh Bạt Tự Cuốn Lò Xo (IMG_5454, IMG_5457, IMG_5458)',
      ],
      reason: 'Chỉnh sửa hậu kỳ toàn bộ 18 bức ảnh vừa tải lên với phông chữ Be Vietnam Pro in đậm sắc nét, bố cục sang trọng và đưa cả 06 bài đăng lên vị trí đầu tiên của website.',
    },
    {
      id: 'dup-lo-18-anh-chieu-may-nicolas-rem-cuon-showroom-2026',
      groupTitle: 'Lô 18 Ảnh Trước: Chiếu Mây Ngải Cứu Lót Lưới 3D NICOLAS Nature Home (16 Ảnh), Rèm Bạt Cuốn Lưới Hiên Nhà (IMG_5470) & Showroom Tuyến Hoa',
      keptImage: 'chieu_may_dieu_hoa_tuyen_hoa.png',
      removedCount: 5,
      removedExamples: [
        'Lọc bỏ 05 bức ảnh chụp lặp góc chéo của bộ Chiếu Mây Điều Hòa NICOLAS Nature Home trải trên giường da kem (IMG_5521, IMG_5524, IMG_5526, IMG_5528, IMG_5530 trùng bố cục với IMG_5523 & IMG_5529)',
        'Quy hoạch các góc chụp đặc sắc nhất của Chiếu Mây NICOLAS Nature Home (IMG_5508, IMG_5509, IMG_5510, IMG_5511 phòng mẫu & rừng trúc; IMG_5519 túi xách xanh navy; IMG_5520, IMG_5522, IMG_5527, IMG_5531 cận cảnh lưới 3D & đai chun NICOLAS LUXURY) vào bài đăng đầu trang CM-TH-01',
        'Quy hoạch ảnh thực tế Rèm Bạt Cuốn Lưới Đen Nâu Xuyên Sáng lắp dưới hiên mái ngói đỏ (IMG_5470.JPG) vào bài đăng BC-TH-01 và ảnh toàn cảnh mặt tiền Showroom Chăn Ga Gối Đệm Tuyến Hoa số 365 vào bài đăng SR-TH-01',
      ],
      reason: 'Từ 18 bức ảnh vừa tải lên, hệ thống đã lọc 5 góc chụp trùng lặp trên giường mẫu và biên tập thành 03 bài đăng chuyên nghiệp ngay đầu trang web kèm bảng giá chi tiết.',
    },
    {
      id: 'dup-lo-12-anh-everhome-cao-su-lo-xo-showroom-2tang-2026',
      groupTitle: 'Lô 12 Ảnh Trước: Nệm Cao Su 100% Thiên Nhiên Everhome, Đệm Lò Xo Gold 3 Viền · Lò Xo Túi Cuộn & Showroom 2 Tầng',
      keptImage: 'dem_cao_su_everhome_tuyen_hoa.png',
      removedCount: 6,
      removedExamples: [
        'Loại bỏ 02 bản sao trùng lặp 100% mã MD5 của ảnh Tòa nhà 2 tầng Showroom Tuyến Hoa (Gemini_Generated_Image_v2fukev2fukev2fu (1).png & (2).png), giữ 01 bản gốc sắc nét nhất cho bài đăng SR-TH-02',
        'Chỉnh sáng, cân bằng trắng và quy hoạch 04 ảnh Nệm Cao Su 100% Thiên Nhiên Everhome (IMG_5405 banner cấu tạo 2 mặt lỗ, IMG_5412 phôi chân vuông, IMG_5410 & IMG_5411 lô phôi cao su tại kho) vào bài đăng DCS-EH-01',
        'Chỉnh sáng và quy hoạch 05 ảnh Đệm Lò Xo Gold 3 Viền & Lò Xo Túi Cuộn Hút Chân Không Everhome (IMG_5413 Gold 3 Viền, IMG_5415 giường tân cổ điển, IMG_5406, IMG_5407 & IMG_5408 kho lò xo) vào bài đăng DLX-EH-01',
      ],
      reason: 'Biên tập trọn vẹn 12 ảnh Everhome & Showroom 2 Tầng: lọc bỏ các file trùng lặp và tách từng góc chụp thực tế kèm chú thích chi tiết.',
    },
    {
      id: 'dup-lo-18-anh-alyda-theu-hoang-gia-ren-cong-chua-2026',
      groupTitle: 'Lô 18 Ảnh Trước: BST Chăn Ga Gối Lụa Tencel Alyda® 7 Món Thêu Hoàng Gia (Mẫu Đơn, Versailles, Vương Miện, Báo Gấm, Đàn Bướm)',
      keptImage: '1792915211500_4373635352308930219_4373635352308930219_04e295b3aa5b354be1569c1d47ab183e_3f6b8135.jpg',
      removedCount: 0,
      removedExamples: [
        'Phân nhóm theo đúng họa tiết thêu đối xứng: Nhóm Hoa Mẫu Đơn Phú Quý 3 màu (Đỏ, Xanh Cổ Vịt, Xanh Tím Than – CGL-AL-01), Nhóm Cổ Điển Versailles & Baroque 3 mẫu (CGL-AL-02), Nhóm Vương Miện Hoàng Gia 3 màu (CGL-AL-03), Nhóm Báo Gấm Luxury 2 màu (CGL-AL-04), Nhóm Hoa Thiên Nhiên & Đàn Bướm 5 mẫu (CGL-AL-05)',
        'Bổ sung phiên bản màu Xanh Than Ghi Chì của họa tiết Cung Đình LT 28 (1792915211751...) vào bộ chọn màu của bài đăng CGL-LT-28 để khách xem đủ 2 màu Đỏ & Xanh Than trên cùng 1 thẻ',
      ],
      reason: 'Quy hoạch các bức ảnh Alyda® thành các bộ sưu tập đồng nhất họa tiết thêu, giúp khách hàng bấm chọn đổi màu trực tiếp ngay trên từng thẻ sản phẩm.',
    },
    {
      id: 'dup-lo-chan-ga-goi-lua-tencel-alyda-skysilk-18-anh',
      groupTitle: 'Lô 18 Ảnh Mới Tải Lên: Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® LT 28 (7 Món) & Bộ Sưu Tập 17 Mã Màu Lụa Tencel Sky Silk',
      keptImage: '1792915211423_4373635352308930219_4373635352308930219_72e61c228464506313c098328bfdea78_43281348.jpg',
      removedCount: 0,
      removedExamples: [
        'Quy hoạch thông minh 18 ảnh vừa tải lên thành 06 bài đăng chuyên sâu theo Tông Màu Phong Thủy & Phòng Cưới (CGL-LT-28, CGL-SK-01, CGL-SK-02, CGL-SK-03, CGL-SK-04, CGL-SK-05)',
        'Chú thích rõ 02 cặp mã màu chụp cùng 1 phòng mẫu (SKY338 ≈ SKY26 tông Xanh Ghi Băng & SKY362 ≈ SKY7 tông Xanh Cổ Vịt Lục Bảo) ngay trong bộ chọn màu để khách dễ đối chiếu mã số',
      ],
      reason: 'Giữ nguyên vẹn 100% cả 18 mã màu chăn ga gối Lụa Tencel (LT 28 & 17 mã SKY) nhưng gom gọn theo 6 bảng màu sang trọng để khách dễ chọn màu, không làm rối trang web.',
    },
    {
      id: 'dup-lo-dem-moi-internet-2026',
      groupTitle: 'Bộ 09 Ảnh Mẫu Đệm Mới Tải Từ Internet: Sông Hồng Back Essential Gen 4, Kim Cương Happy Gold, Everon Artemis, Liên Á L\'A Dome & Hanvico Nano',
      keptImage: 'dem_song_hong_back_essential_1.png',
      removedCount: 0,
      removedExamples: [
        'Tải trực tiếp 09 ảnh sản phẩm độ phân giải cao (PNG/JPG) của 05 dòng đệm mới nhất trên thị trường Việt Nam kèm thông số kỹ thuật và bảng giá niêm yết chính hãng',
        'Quy hoạch thành 05 bài đăng quảng cáo chuyên sâu (DSH-BE-01, DKC-HG-01, DEV-AT-01, DLA-LD-01, DHV-NN-01) với 05 ảnh đại diện chính và 04 ảnh góc chụp mặt cắt cấu tạo bên trong',
      ],
      reason: 'Cập nhật đầy đủ thông số kỹ thuật, giá hãng đối chiếu giá ưu đãi tại Tổng Kho Tuyến Hoa (chiết khấu 25%–40%) và bài viết quảng cáo Facebook/Zalo sẵn sàng đăng ngay.',
    },
    {
      id: 'dup-lo-manh-truc-man-hop-thong-minh-2026',
      groupTitle: 'Lô 02 Video & 06 Ảnh Mới Tải Lên: Mành Trúc Biệt Thự 3 Tầng, Rèm Gỗ Phòng Thờ & Xưởng Màn Hộp Thông Minh Vân Gỗ',
      keptImage: 'IMG_9290_f6c3666b.JPG',
      removedCount: 0,
      removedExamples: [
        'Quy hoạch 02 ảnh Mành Trúc Tranh Đồng Quê Biệt Thự 3 Tầng (IMG_9290 thả kín 2 tầng & IMG_9291 kéo lửng sảnh chính) vào bài đăng MT-TH-01 kèm Video toàn cảnh nội thất biệt thự (VID-BT-01)',
        'Quy hoạch 02 ảnh cận cảnh Hộp Màn Thông Minh Vân Gỗ khắc Laser trong thùng xốp chống sốc (IMG_9295 & IMG_9296) vào bài đăng sản phẩm MH-TH-01',
        'Quy hoạch Video Xưởng Khắc Laser CNC & Tổng Kho (efac2904...) cùng 02 ảnh dây chuyền lắp bản lề Inox (IMG_9297) và kho hộp màn vân gỗ – trắng sứ (IMG_9294) vào bài đăng XMH-TH-01',
      ],
      reason: 'Giữ trọn vẹn 100% 02 video và 06 hình ảnh thực tế vừa tải lên, đồng thời gộp các góc chụp cận cảnh cùng 1 sản phẩm vào bộ sưu tập ảnh chi tiết để trang web sang trọng, không bị lặp ô hiển thị.',
    },
    {
      id: 'dup-lo-24-anh-rem-cau-vong-ngoc-tuyen',
      groupTitle: 'Lô 24 Ảnh Mới Tải Lên: Rèm Cầu Vồng Ngọc Tuyến, Cầu Thang Thông Tầng & Khảo Sát View Hồ',
      keptImage: '20261017_162136_c08f9065.jpg',
      removedCount: 20,
      removedExamples: [
        'Loại bỏ 10 bản sao trùng lặp (- Copy, - Copy (2), - Copy (3)...) của ảnh Anh Tuyến nghiệm thu Rèm cầu vồng cầu thang (1792658171609_..._745ccdff... – giữ 1 bản chuẩn từ 11 file)',
        'Loại bỏ 07 bản sao trùng lặp (- Copy, - Copy (2), - Copy (3)...) của ảnh Rèm cầu vồng Ngọc Tuyến lắp cửa sổ khung Inox (1792658171440_..._79d52b2d... – giữ 1 bản chuẩn từ 8 file)',
        'Loại bỏ 02 bản sao trùng lặp (- Copy, - Copy (3)) của ảnh Anh Tuyến đeo mic khảo sát cửa sổ nhôm kính lớn view hồ (1792658171296_..._f85acd8d... – giữ 1 bản chuẩn từ 3 file)',
        'Loại bỏ 01 bản sao trùng lặp (- Copy - Copy - Copy - Copy) của ảnh Rèm cầu vồng phòng học & phòng ngủ nội thất hiện đại (1792658171720_..._3b14bddb... – giữ 1 bản chuẩn từ 2 file)',
      ],
      reason: 'Từ 24 file ảnh tải lên bị nhân bản nhiều lần trong thư mục máy tính, hệ thống đã lọc sạch 20 bản Copy trùng lặp và biên tập thành 04 bài đăng chuẩn mực ngay đầu trang.',
    },
    {
      id: 'dup-video-showroom-3tang-2026',
      groupTitle: 'Lô 04 Video & 05 Ảnh Mới (Showroom 3 Tầng, Rèm Tự Động & Ảnh Ngoài Lề)',
      keptImage: 'IMG_5314_ae0205c4.PNG',
      removedCount: 7,
      removedExamples: [
        '03 Video cắt lẻ (0:09s) trùng lặp 100% với Video tổng hợp (Cảnh Flycam Tầng 1, Cảnh Livestream Sofa Tầng 2 & Cảnh Công nghệ Tầng 3)',
        'Cắt bỏ đoạn ghép 4 ảnh tĩnh đầu video (0:00–0:12), các cảnh ghép giải trí ngoài lề (0:35–0:51) và 2 giây màn hình đen logo CapCut cuối video',
        'Loại bỏ 01 ảnh chế mạng xã hội không liên quan (865634088_..._n.png) & 01 ảnh selfie cận mặt thô (20261026_115655.jpg)',
        'Gộp 02 ảnh mặt tiền Showroom trùng lặp với bài đăng SR-TH-01 đã có sẵn trên hệ thống',
      ],
      reason: 'Chắt lọc giữ lại nội dung đắt giá nhất: Tổ hợp Showroom 3 Tầng Năng Lượng Mặt Trời, Hệ Rèm Vải & Rèm Cầu Vồng Tự Động điều khiển Remote và Video Anh Tuyến trực tiếp thi công.',
    },
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
    id: 'mp-vach-binh-phong-manh-truc-tu-duong-ngoc-tuyen',
    productGroup: '1. Vách Bình Phong Trúc Chữ Thọ & Mành Trúc Từ Đường · Biệt Thự',
    specification: 'Mành trúc đỏ biệt thự (240k–280k) · Mành tranh Từ Đường 3 gian (280k–320k) · Vách trúc Chữ Thọ (450k–650k/m²)',
    marketPrice: '360k – 850k / m²',
    storePrice: '240k – 650k / m²',
    warrantyAndService: 'Chế tác thủ công cột trúc cật già, khảo sát & lắp đặt tận nơi, BH 5 năm',
  },
  {
    id: 'mp-manh-truc-thu-phap-phuc-duc-chua-mot-cot',
    productGroup: '2. Mành Trúc Thư Pháp "Phúc – Đức" · Chùa Một Cột & Khắc Tên Riêng',
    specification: 'Đầm Sen Phúc – Đức · Chùa Một Cột (280k/m²) · Cặp Tùng – Trúc Hạc (950k/cặp) · Vẽ tên Salon/Spa (300k/m²)',
    marketPrice: '420k – 520k / m²',
    storePrice: '280k – 320k / m²',
    warrantyAndService: 'Vẽ tay sơn dầu đa lớp bền màu 10 năm, tặng kèm ròng rọc đồng & dây kéo',
  },
  {
    id: 'mp-dem-lo-xo-tui-vikosan-3sao-5sao-vip',
    productGroup: '3. Đệm Lò Xo Túi Độc Lập Vikosan 3 Sao · 5 Sao · VIP D\'luxe',
    specification: 'Standard 3*22 (Dày 22cm) · Standard 5*22 (Dày 22cm) · VIP*30 (Dày 30cm)',
    marketPrice: '4,98Tr – 12,90Tr',
    storePrice: '3,48Tr – 8,99Tr',
    warrantyAndService: 'Chiết khấu 30% từ bảng giá hãng Vikosan, bảo hành 7 năm',
  },
  {
    id: 'mp-chan-ga-goi-lua-tencel-alyda-lt28',
    productGroup: '2. Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® 7 Món Thêu Hoàng Gia',
    specification: '1 Ga phủ + 1 Vỏ chăn có ruột + 4 Vỏ gối đầu + 1 Vỏ gối ôm (Đủ 18 mẫu thêu)',
    marketPrice: '3,20Tr – 4,20Tr / bộ',
    storePrice: '2,15Tr – 2,35Tr / bộ',
    warrantyAndService: 'Lụa Tencel thêu hoàng gia, tặng túi đựng & miễn phí giao',
  },
  {
    id: 'mp-chan-ga-goi-lua-tencel-sky-silk',
    productGroup: '3. Bộ Chăn Ga Gối Lụa Tencel Sky Silk 60s (Đủ 17 Mã Màu)',
    specification: 'Trọn bộ 5 món Lụa Tencel thêu nổi Sky Silk (SKY1 – SKY362)',
    marketPrice: '1,65Tr – 2,25Tr / bộ',
    storePrice: '1,15Tr – 1,35Tr / bộ',
    warrantyAndService: 'Mát lạnh tự nhiên, chống xù lông, đủ cỡ 1m6 / 1m8 / 2m2',
  },
  {
    id: 'mp-set-ga-goi-tencel-eu-eumd-to-ong',
    productGroup: '4. Set Ga Gối Lụa Tencel EU (EUMD) · Tổ Ong & Đũi Xước 5 Món',
    specification: 'Set 3 món EUMD05–18 (390k) · Chần bông tổ ong (550k) · Đũi xước 5 món (950k)',
    marketPrice: '580k – 1,45Tr / bộ',
    storePrice: '390k – 950k / bộ',
    warrantyAndService: 'Kèm túi khóa kéo TENCEL EU chính hãng, bo chun miễn phí',
  },
  {
    id: 'mp-chan-ga-goi-ren-cong-chua-han-quoc',
    productGroup: '5. Bộ Chăn Ga Gối Chần Bông Phối Ren Công Chúa Hàn Quốc (Đủ 8 Màu)',
    specification: 'Ga phủ rủ ren hoa 2 tầng + Chăn chần + 4 Vỏ gối bèo nhún (Tím, Hồng, Xanh Cốm, Xám, Cam Đào...)',
    marketPrice: '1,95Tr – 2,65Tr / bộ',
    storePrice: '1,35Tr – 1,55Tr / bộ',
    warrantyAndService: 'Chần quả trám êm ái, ren thêu cao cấp, sẵn đủ 08 màu Pastel',
  },
  {
    id: 'mp-chan-ga-goi-lua-tencel-dror-hoa-anh-dao',
    productGroup: '6. Bộ Lụa Tencel Thêu Chữ D – Dror Hoa Anh Đào & Dream World Thêu Trúc',
    specification: 'Ga chần quả trám + Chăn chần lụa + Vỏ gối thêu nổi (Xanh Rêu, Hồng Đất, Đỏ, Xám, Tím Than)',
    marketPrice: '1,95Tr – 2,95Tr / bộ',
    storePrice: '1,35Tr – 1,65Tr / bộ',
    warrantyAndService: 'Lụa Tencel 60s chần bông êm mát, thêu nổi sắc nét',
  },
  {
    id: 'mp-dem-song-hong-back-essential',
    productGroup: '3. Đệm Sông Hồng Back Essential Thế Hệ 4 (Dày 17–32cm)',
    specification: 'Bông tinh khiết kháng khuẩn + Memory Foam đàn hồi 98% (1m6 / 1m8)',
    marketPrice: '11,30Tr – 14,73Tr',
    storePrice: '6,75Tr – 8,85Tr',
    warrantyAndService: 'Chiết khấu 40% tại kho Tuyến Hoa, bảo hành 5 năm',
  },
  {
    id: 'mp-nem-cao-su-kim-cuong-lien-a',
    productGroup: '2. Nệm Cao Su Kim Cương Happy Gold & Liên Á L\'A Dome',
    specification: '100% Cao su thiên nhiên 5.000 lỗ thoáng & Mái vòm (1m6 / 1m8)',
    marketPrice: '6,84Tr – 16,29Tr',
    storePrice: '4,95Tr – 10,85Tr',
    warrantyAndService: 'Tặng bộ gối cao su + ga gối, bảo hành 12 năm',
  },
  {
    id: 'mp-dem-everon-artemis-hanvico-nano',
    productGroup: '3. Đệm Everon Artemis · Ceramic & Hanvico Nano Bạc',
    specification: 'Bông Advansa Đức, tia hồng ngoại Ceramic & Nano chống khuẩn',
    marketPrice: '3,95Tr – 10,40Tr',
    storePrice: '2,85Tr – 6,45Tr',
    warrantyAndService: 'Chống đau lưng, diệt 99% vi khuẩn, bảo hành 5 năm',
  },
  {
    id: 'mp-manh-truc-rem-go-biet-thu',
    productGroup: '4. Mành Trúc Tranh Đồng Quê & Rèm Sáo Gỗ Biệt Thự',
    specification: 'Mành tre trúc vẽ tranh Đôi Hạc / Mục Đồng & Rèm gỗ tự nhiên',
    marketPrice: '350k – 850k / m²',
    storePrice: '260k – 680k / m²',
    warrantyAndService: 'Nan trúc xử lý chống mối mọt, ròng rọc trợ lực bền 10 năm',
  },
  {
    id: 'mp-man-hop-thong-minh-van-go',
    productGroup: '2. Màn Hộp Thông Minh Vân Gỗ Thu Gọn Đầu Giường',
    specification: 'Hộp vân gỗ khắc Laser + Khung Inox 304 & 201 (1m6 / 1m8 / 2m)',
    marketPrice: '1,85Tr – 2,20Tr / bộ',
    storePrice: '1,35Tr – 1,55Tr / bộ',
    warrantyAndService: 'Xếp gọn 100% vào hộp gỗ trên tường, bảo hành 5 năm',
  },
  {
    id: 'mp-dem-gap2-chan-mui',
    productGroup: '3. Đệm Gấp 2 Chần Múi Lông Vũ & Caro (Dày 18–20cm)',
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
  // 00-HERITAGE-BAMBOO-2026. BỘ ĐÔI TUYỆT TÁC MÀNH TRE TRÚC & VÁCH BÌNH PHONG CHỮ THỌ NGỌC TUYẾN (12 ẢNH MỚI NHẤT):
  //   1. MT-NT-01: CÔNG TRÌNH VÁCH BÌNH PHONG TRE TRÚC CHỮ THỌ & MÀNH TRÚC ĐẠI TỰ NHÀ THỜ HỌ · TỪ ĐƯỜNG 3 GIAN · ĐÌNH CHÙA & BIỆT THỰ VEN HỒ
  //   2. MT-NT-02: BỘ SƯU TẬP MÀNH TRÚC THƯ PHÁP "PHÚC – ĐỨC" ĐẦM SEN, CHÙA MỘT CỘT, TÙNG TRÚC HẠC ĐỐI XỨNG & KHẮC TÊN THƯƠNG HIỆU RIÊNG (SALON TÓC THANH VÂN)
  // ===========================================================================
  {
    id: 'cong-trinh-vach-binh-phong-truc-chu-tho-nha-tho-ho-tu-duong-ngoc-tuyen-mtnt01',
    code: 'MT-NT-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Công Trình',
    title: 'Tuyệt Tác Vách Bình Phong Tre Trúc Chạm Chữ Thọ & Mành Trúc Đại Tự Nhà Thờ Họ · Từ Đường 3 Gian (Tùng – Liên Hoa Chữ Phúc – Trúc) · Đình Chùa & Biệt Thự Ven Hồ – Ngọc Tuyến',
    shortTitle: 'Vách Bình Phong Trúc Chữ Thọ & Mành Trúc Từ Đường 3 Gian · Biệt Thự',
    priceDisplay: '240.000đ – 650.000đ/m²',
    marketPriceRange: 'Giá thị trường: 360.000đ – 850.000đ / m²',
    marketPriceNote: 'Bộ sưu tập thực tế các công trình kiến trúc tâm linh & biệt thự cao cấp do Xưởng Mành Tre Trúc Ngọc Tuyến – Tuyến Hoa trực tiếp chế tác và thi công trọn gói: Bao gồm Hệ Vách Bình Phong & Cửa Bức Bàn Tre Trúc Chữ Thọ cho Nhà Thờ Họ – Đình Chùa, Bộ 3 bức Mành Trúc Đại Tự Từ Đường 3 Gian (Tùng Hạc – Đầm Sen Chữ Phúc 福 – Trúc Hạc) và Hệ 6 khoang Mành Trúc Đỏ Cánh Gián che nắng hành lang Biệt Thự Ven Hồ.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Mành Tre Trúc Đỏ Cánh Gián / Vàng Óng Che Nắng Hiên Nhà Gỗ & Hành Lang Biệt Thự Ven Hồ',
        marketPrice: '360.000đ – 400.000đ / m²',
        storePrice: '240.000đ – 280.000đ / m²',
        note: 'Nan trúc cật già xử lý nhiệt, sơn phủ PU 2K chống nắng mưa hướng Tây, độ bền 8–10 năm',
      },
      {
        sizeOrOption: '2. Bộ 3 Bức Mành Trúc Đại Tự Từ Đường 3 Gian (Gian Giữa Đầm Sen Chữ Phúc 福 · Hai Bên Tùng Hạc & Trúc Hạc)',
        marketPrice: '450.000đ – 520.000đ / m²',
        storePrice: '280.000đ – 320.000đ / m²',
        note: 'Nghệ nhân vẽ tay 100% đồng bộ theo khẩu độ 3 gian hoặc 5 gian nhà thờ họ, kèm ròng rọc đồng',
      },
      {
        sizeOrOption: '3. Hệ Vách Bình Phong & Cửa Bức Bàn Khung Cột Trúc Già Chạm Chữ Thọ Tròn Cổ Truyền (Đình Chùa · Từ Đường)',
        marketPrice: '750.000đ – 850.000đ / m²',
        storePrice: '450.000đ – 650.000đ / m²',
        note: 'Chế tác thủ công từ thân trúc già tuyển chọn, ghép mộng chữ Vạn – chữ Thọ tròn chuẩn kiến trúc cổ',
      },
    ],
    numericPrice: 280000,
    unitLabel: '1m² Mành Tre Trúc / Vách Bình Phong Trúc Cổ Truyền Ngọc Tuyến (Bao khảo sát & lắp đặt)',
    standardDimensions: 'Đo đạc & chế tác chuẩn theo từng khẩu độ gian thờ (3 gian, 5 gian) & hành lang biệt thự',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/MT_NT_01_cong_trinh_nha_tho_tu_duong_ngoc_tuyen_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/Gemini_Generated_Image_n9eggn9eggn9eggn_98e44927.png',
      '/assets/aistudio/842422492_122116310523452474_4393011875885865224_n_d64c0603.jpg',
      '/assets/aistudio/840601115_122116310565452474_6288815935226940809_n_5ce6244b.jpg',
      '/assets/aistudio/MT_NT_vach_truc_chu_tho_clean_hd.jpg',
      '/assets/aistudio/854835437_122118513585452474_3885401186457056246_n_114d87d9.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/MT_NT_01_cong_trinh_nha_tho_tu_duong_ngoc_tuyen_hd.jpg': {
        badge: 'Ảnh 1/6 · Bảng Giá & Tổng Hợp Công Trình Nhà Thờ Họ · Từ Đường · Biệt Thự Ngọc Tuyến',
        caption: 'Thiết kế HD sang trọng tổng hợp 4 hạng mục tiêu biểu kèm bảng giá niêm yết tại Xưởng Tre Trúc Ngọc Tuyến (ĐT/Zalo: 0989.655.388 – 0344.727.528).',
      },
      '/assets/aistudio/Gemini_Generated_Image_n9eggn9eggn9eggn_98e44927.png': {
        badge: 'Ảnh 2/6 · Hồ Sơ 06 Đại Công Trình "Ngọc Tuyến – Mành Che Nắng" Đình Chùa & Từ Đường',
        caption: 'Toàn cảnh 6 công trình thực tế lắp đặt hệ Vách Bình Phong Cửa Bức Bàn Tre Trúc Chữ Thọ tại các ngôi Chùa cổ, Nhà Thờ Họ 5 gian và Từ Đường gia tộc.',
      },
      '/assets/aistudio/842422492_122116310523452474_4393011875885865224_n_d64c0603.jpg': {
        badge: 'Ảnh 3/6 · Từ Đường 3 Gian Mái Ngói Đỏ: Bộ 3 Bức Tùng – Đầm Sen Chữ Phúc (福) – Trúc Hạc',
        caption: 'Bố cục đăng đối hoàn mỹ cho Nhà Thờ Họ 3 gian: Gian chính giữa rực rỡ bức Đầm Sen Hồng nâng chữ Phúc (福) vàng kim, hai gian tả hữu là Tùng Hạc & Trúc Hạc.',
      },
      '/assets/aistudio/840601115_122116310565452474_6288815935226940809_n_5ce6244b.jpg': {
        badge: 'Ảnh 4/6 · Vách Bình Phong Khung Cột Trúc Chạm Chữ Thọ Tròn Kết Hợp Mành Tranh Hai Bên',
        caption: 'Sự giao hòa đẳng cấp giữa bộ Vách Bình Phong cột trúc cật già chạm chữ Thọ tròn ở gian trung tâm và đôi mành trúc vẽ tranh Tùng Hạc có dây kéo ở hai gian bên.',
      },
      '/assets/aistudio/MT_NT_vach_truc_chu_tho_clean_hd.jpg': {
        badge: 'Ảnh 5/6 · Cận Cảnh Vách Bình Phong Tre Trúc Chạm Chữ Thọ & Hoa Văn Chữ Vạn Cổ Truyền',
        caption: 'Từng thân trúc già thẳng tắp được xử lý chống mối mọt, soi rãnh và ghép mộng thủ công tạo hình chữ Thọ tròn ở tâm điểm cùng ô thoáng chữ Vạn tinh xảo.',
      },
      '/assets/aistudio/854835437_122118513585452474_3885401186457056246_n_114d87d9.jpg': {
        badge: 'Ảnh 6/6 · Hệ 06 Khoang Mành Trúc Đỏ Cánh Gián Che Nắng Hành Lang Biệt Thự Ven Hồ',
        caption: 'Lắp đặt đồng bộ 6 tấm mành trúc phủ sơn đỏ cánh gián dọc hành lang biệt thự ven hồ có lan can sắt mỹ thuật, vừa cản nắng gắt vừa tôn vẻ quý phái.',
      },
    },
    highlightTag: 'Tuyệt Tác Kiến Trúc · Từ Đường · Đình Chùa & Biệt Thự',
    summary:
      'Bộ hồ sơ ảnh thực tế khẳng định vị thế dẫn đầu của Xưởng Mành Tre Trúc Ngọc Tuyến – Tuyến Hoa trong lĩnh vực chế tác Vách Bình Phong Tre Trúc Chữ Thọ và Mành Trúc Đại Tự cho Nhà Thờ Họ, Từ Đường 3 gian – 5 gian, Đình Chùa cổ tự và Biệt Thự sân vườn ven hồ.',
    visualAnnotations: [
      {
        label: 'Bố cục Tam Đa "Tùng – Liên Hoa Chữ Phúc (福) – Trúc" cho Từ Đường 3 Gian (Ảnh 3)',
        detail:
          'Gian giữa treo bức đại tự Đầm Sen Hồng nâng chữ Phúc (福) tròn viền triện vàng kim tụ vượng khí; gian trái vẽ Tùng Hạc Diên Niên, gian phải vẽ Trúc Hạc Bình An tạo thế phong thủy vững chãi, tôn nghiêm.',
      },
      {
        label: 'Nghệ thuật chế tác Vách Bình Phong & Cửa Bức Bàn Khung Cột Trúc Chữ Thọ (Ảnh 2, 4 & 5)',
        detail:
          'Sử dụng 100% thân trúc cật già đanh chắc làm khung cột chịu lực, kết hợp nan trúc vót mịn xếp dọc và phù điêu Chữ Thọ tròn – Chữ Vạn ở chính tâm, thay thế hoàn hảo cho cửa bức bàn gỗ với chi phí tiết kiệm một nửa.',
      },
      {
        label: 'Hệ 6 khoang Mành Trúc Đỏ Cánh Gián cho Biệt Thự Ven Hồ & Hiên Nhà Cổ (Ảnh 6)',
        detail:
          'Phủ sơn PU 2K màu đỏ cánh gián sang trọng, chịu nắng mưa trực tiếp bên mặt hồ mà không cong vênh, giữ cho hành lang biệt thự luôn mát rượi và kín đáo.',
      },
    ],
    specs: [
      { label: 'Mã bộ sưu tập', value: 'MT-NT-01 (Công Trình Từ Đường · Đình Chùa · Biệt Thự Ngọc Tuyến – 06 Ảnh)' },
      { label: 'Mành trúc đỏ biệt thự', value: '240.000đ – 280.000đ / m² (Giá TT: 360.000đ/m² · Bền 8–10 năm)' },
      { label: 'Mành tranh Từ Đường 3 gian', value: '280.000đ – 320.000đ / m² (Bộ 3 bức Tùng – Sen Phúc – Trúc vẽ tay)' },
      { label: 'Vách bình phong Chữ Thọ', value: '450.000đ – 650.000đ / m² (Chế tác thủ công cột trúc già theo kích thước gian)' },
      { label: 'Khảo sát & Bảo hành', value: 'Miễn phí đo đạc & lắp đặt tận nơi · Bảo hành 5 năm (ĐT/Zalo: 0989.655.388)' },
    ],
    articleParagraphs: [
      'Với những công trình tâm linh mang giá trị truyền đời như Nhà Thờ Họ, Từ Đường gia tộc, Đình Chùa hay các căn Biệt Thự nhà vườn truyền thống, việc lựa chọn hệ mành che nắng và vách bình phong không chỉ đòi hỏi độ bền vượt thời gian mà còn phải đạt chuẩn mực cao nhất về thẩm mỹ phong thủy Á Đông.',
      'Tại Xưởng Mành Tre Trúc Ngọc Tuyến – Tuyến Hoa, mỗi công trình đều được đo đạc tỉ mỉ theo thước Lỗ Ban và khẩu độ từng gian cột. Từ bộ 3 bức mành tranh "Tùng – Liên Hoa Chữ Phúc (福) – Trúc" che hiên Từ Đường 3 gian, hệ Vách Bình Phong khung cột trúc chạm Chữ Thọ tròn uy nghiêm, cho tới dãy 6 khoang mành trúc đỏ cánh gián ven hồ – tất cả đều toát lên khí chất sang trọng, cổ kính và trường tồn.'
    ],
    facebookPostCopy:
      '🏯🎋 [TUYỆT TÁC KIẾN TRÚC TÂM LINH & BIỆT THỰ] VÁCH BÌNH PHONG TRE TRÚC CHỮ THỌ & MÀNH TRÚC ĐẠI TỰ NHÀ THỜ HỌ – TỪ ĐƯỜNG 3 GIAN – ĐÌNH CHÙA | XƯỞNG NGỌC TUYẾN! 🐉✨\n' +
      '--------------------------------------------\n' +
      '🌟 Tự hào là đơn vị trực tiếp chế tác và thi công hàng trăm công trình Từ Đường, Nhà Thờ Họ, Đình Chùa và Biệt Thự Nhà Vườn trên toàn miền Bắc, Xưởng Mành Tre Trúc Ngọc Tuyến – Tuyến Hoa xin trân trọng giới thiệu các hạng mục cao cấp nhất:\n' +
      '🙏 1. BỘ 3 BỨC MÀNH TRÚC ĐẠI TỰ TỪ ĐƯỜNG 3 GIAN (TÙNG – SEN PHÚC – TRÚC):\n' +
      '   • Gian chính giữa: Đầm Sen Hồng nâng chữ PHÚC (福) tròn viền triện vàng kim rực rỡ\n' +
      '   • Hai gian tả hữu: Tùng Hạc Diên Niên & Trúc Hạc Bình An đăng đối, tụ khí lành cho từ đường\n' +
      '   👉 Đơn giá tại xưởng: Chỉ 280.000đ – 320.000đ / m² (Đã gồm con lăn ròng rọc & công lắp)\n' +
      '🏛️ 2. HỆ VÁCH BÌNH PHONG & CỬA BỨC BÀN KHUNG CỘT TRÚC CHẠM CHỮ THỌ TRÒN:\n' +
      '   • Chế tác thủ công 100% từ thân trúc cật già thẳng tắp, chạm chữ Thọ tròn & hoa văn chữ Vạn\n' +
      '   • Lắp đặt uy nghiêm cho Chùa, Đền, Nhà Thờ Họ 3 gian – 5 gian cổ truyền\n' +
      '   👉 Đơn giá chế tác theo gian: 450.000đ – 650.000đ / m² (Giá TT: 750k–850k/m²)\n' +
      '🏡 3. MÀNH TRÚC ĐỎ CÁNH GIÁN CHE NẮNG HÀNH LANG BIỆT THỰ VEN HỒ & NHÀ GỖ:\n' +
      '   • Sơn phủ PU 2K chống nắng mưa hướng Tây, bền màu 8–10 năm\n' +
      '   👉 Đơn giá tại xưởng: Chỉ 240.000đ – 280.000đ / m²\n' +
      '🚛 Khảo sát, đo đạc và lắp đặt hoàn thiện tận nơi – Bảo hành uy tín 5 năm!\n' +
      '📞 Gọi/Zalo tư vấn & báo giá trực tiếp: 0989.655.388 – 0344.727.528 (Ngọc Tuyến – Tuyến Hoa)!',
  },
  {
    id: 'bo-suu-tap-manh-truc-thu-phap-phuc-duc-chua-mot-cot-tung-truc-hac-mtnt02',
    code: 'MT-NT-02',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Công Trình',
    title: 'Bộ Sưu Tập Mành Trúc Nghệ Thuật Vẽ Tay Cao Cấp: Cặp Đầm Sen Thư Pháp "Phúc – Đức" · Danh Thắng Chùa Một Cột · Bộ Đôi Tùng Trúc Hạc Đối Xứng & Khắc Tên Thương Hiệu Riêng (Salon Tóc Thanh Vân)',
    shortTitle: 'Mành Trúc Thư Pháp Phúc – Đức · Chùa Một Cột & Khắc Tên Riêng',
    priceDisplay: '280.000đ – 320.000đ/m²',
    marketPriceRange: 'Giá thị trường: 420.000đ – 520.000đ / m²',
    marketPriceNote: 'Tuyển tập 06 tác phẩm Mành Tre Trúc vẽ tay sơn dầu nghệ thuật vừa hoàn thiện tại Xưởng Ngọc Tuyến – Tuyến Hoa: Gồm cặp mành nâu trầm Đầm Sen Hồng thư pháp vàng kim "PHÚC" – "ĐỨC", bức danh thắng "Chùa Một Cột – Liên Hoa Đài", cặp tranh mành treo tường đối xứng "Tùng Hạc – Trúc Hạc", bộ ghép đôi đại cảnh "Tùng Trúc Hạc Hội Tụ", bức "Trúc Lâm Sơn Thủy" và mẫu thiết kế tên thương hiệu riêng "Salon Tóc Thanh Vân".',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Mành Trúc Đầm Sen Thư Pháp "PHÚC" · "ĐỨC", "Chùa Một Cột", "Tùng Trúc Hạc Hội Tụ" & "Trúc Lâm Sơn Thủy"',
        marketPrice: '420.000đ – 450.000đ / m²',
        storePrice: '280.000đ / m²',
        note: 'Vẽ tay sơn dầu đa lớp trên nền trúc nâu cánh gián, kèm đầy đủ thanh treo & ròng rọc kéo',
      },
      {
        sizeOrOption: '2. Bộ Đôi 02 Bức Tranh Mành Trúc Treo Tường Đối Xứng "Tùng Hạc Trường Xuân – Trúc Hạc Diên Niên"',
        marketPrice: '1.450.000đ / cặp 2 bức',
        storePrice: '950.000đ / cặp 2 bức',
        note: 'Hoàn thiện nẹp gỗ hai đầu & dây đồng treo tường trang trí phòng khách, phòng thờ, phòng trà',
      },
      {
        sizeOrOption: '3. Mành Trúc Vẽ Tranh Phong Thủy Kèm Khắc Tên Thương Hiệu / Biểu Tượng Riêng (Như Mẫu "Salon Tóc Thanh Vân")',
        marketPrice: '480.000đ – 520.000đ / m²',
        storePrice: '300.000đ – 320.000đ / m²',
        note: 'Miễn phí thiết kế chữ thư pháp & biểu tượng ngành nghề (Salon tóc, Spa, Phòng trà, Nhà hàng)',
      },
    ],
    numericPrice: 280000,
    unitLabel: '1m² Mành Trúc Nghệ Thuật Vẽ Tay Sơn Dầu (Hoặc 950.000đ/cặp tranh đôi)',
    standardDimensions: 'Đủ mọi kích thước cửa sổ, cửa chính, gian thờ (Rộng 1,0m – 4,0m × Cao theo yêu cầu)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/MT_NT_02_manh_truc_phuc_duc_chua_mot_cot_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/870853899_122120622951452474_5205984175702478395_n_b6c310c0.jpg',
      '/assets/aistudio/884248146_122120622945452474_6926611193855207442_n_a0bdc48f.jpg',
      '/assets/aistudio/850377391_122117699481452474_5565931910353882378_n_c9a41c5a.jpg',
      '/assets/aistudio/840419467_122116368951452474_7553969230243714643_n_d263ae98.jpg',
      '/assets/aistudio/860180872_122119307565452474_8154266768295247578_n_913eab7e.jpg',
      '/assets/aistudio/863444160_122119307577452474_9091571183187625771_n_3adffd96.jpg',
      '/assets/aistudio/839936573_122116369563452474_6804773238405536847_n_4f5c9990.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/MT_NT_02_manh_truc_phuc_duc_chua_mot_cot_hd.jpg': {
        badge: 'Ảnh 1/8 · Bảng Giá & Tổng Hợp 06 Tuyệt Tác Mành Trúc Thư Pháp Phúc – Đức · Chùa Một Cột',
        caption: 'Banner HD tổng hợp trọn bộ 6 mẫu mành trúc vẽ tay sơn dầu mới nhất kèm bảng giá niêm yết tại Xưởng Ngọc Tuyến – Tuyến Hoa.',
      },
      '/assets/aistudio/870853899_122120622951452474_5205984175702478395_n_b6c310c0.jpg': {
        badge: 'Ảnh 2/8 · Mành Trúc Nâu Trầm Vẽ Đầm Sen Hồng & Thư Pháp Vàng Kim Chữ "PHÚC"',
        caption: 'Nét bút thư pháp chữ "Phúc" vàng rực bay bổng phía trên đầm sen hồng nở rộ và lá sen xanh mướt, mang lại phúc khí viên mãn cho gia đình.',
      },
      '/assets/aistudio/884248146_122120622945452474_6926611193855207442_n_a0bdc48f.jpg': {
        badge: 'Ảnh 3/8 · Mành Trúc Nâu Trầm Vẽ Đầm Sen Hồng & Thư Pháp Vàng Kim Chữ "ĐỨC"',
        caption: 'Tác phẩm "Đầm Sen Chữ Đức" kết hợp hoàn hảo cùng bức chữ Phúc tạo thành bộ đôi "Phúc – Đức" treo gian thờ gia tiên hoặc phòng khách lớn.',
      },
      '/assets/aistudio/850377391_122117699481452474_5565931910353882378_n_c9a41c5a.jpg': {
        badge: 'Ảnh 4/8 · Mành Trúc Vẽ Danh Thắng "Chùa Một Cột – Liên Hoa Đài" Cổ Kính',
        caption: 'Tái hiện sống động biểu tượng văn hóa ngàn năm Thăng Long – Hà Nội với mái chùa cong đỏ uy nghi trên trụ đá giữa hồ nước và hàng cau xanh.',
      },
      '/assets/aistudio/840419467_122116368951452474_7553969230243714643_n_d263ae98.jpg': {
        badge: 'Ảnh 5/8 · Bộ Đôi 02 Bức Tranh Mành Trúc Treo Tường Đối Xứng "Trúc Hạc – Tùng Hạc"',
        caption: 'Cặp tranh mành trúc treo đối xứng dưới ánh đèn vàng ấm áp: Bên trái là khóm trúc xanh & đôi hạc trắng, bên phải là tùng cổ thụ & mặt trời đỏ.',
      },
      '/assets/aistudio/860180872_122119307565452474_8154266768295247578_n_913eab7e.jpg': {
        badge: 'Ảnh 6/8 · Bộ Ghép Đôi 02 Tấm Mành Khổ Lớn "Đại Cảnh Tùng Trúc Hạc Hội Tụ"',
        caption: 'Hai tấm mành trúc khổ lớn ghép liền mạch tại xưởng tạo nên bức đại cảnh Tùng – Trúc – Hạc hùng vĩ dùng cho hiên nhà chính hoặc sảnh lớn.',
      },
      '/assets/aistudio/863444160_122119307577452474_9091571183187625771_n_3adffd96.jpg': {
        badge: 'Ảnh 7/8 · Mành Trúc Vẽ Tranh "Trúc Lâm Sơn Thủy – Núi Non Trùng Điệp"',
        caption: 'Khóm trúc quân tử xanh biếc vươn lên bên ghềnh đá và dãy núi non ẩn hiện trong mây trắng, mang lại cảm giác thư thái, tĩnh tại.',
      },
      '/assets/aistudio/839936573_122116369563452474_6804773238405536847_n_4f5c9990.jpg': {
        badge: 'Ảnh 8/8 · Thiết Kế & Vẽ Tên Thương Hiệu Riêng: Mẫu "Salon Tóc Thanh Vân"',
        caption: 'Bức mành trúc Trúc Hạc được nghệ nhân Ngọc Tuyến vẽ nổi tên thương hiệu "Salon Tóc Thanh Vân" và biểu tượng cây kéo vàng kim cực kỳ sang trọng.',
      },
    },
    highlightTag: 'Vẽ Tay Sơn Dầu · Đầm Sen Phúc Đức & Khắc Tên Riêng',
    summary:
      'Mỗi tấm mành tre trúc tại Xưởng Ngọc Tuyến – Tuyến Hoa là một tác phẩm hội họa độc bản được người nghệ nhân vẽ tay trực tiếp bằng sơn dầu cao cấp lên nền nan trúc cật già: Từ cặp Đầm Sen thư pháp "Phúc – Đức", danh thắng "Chùa Một Cột", bộ đôi "Tùng Hạc – Trúc Hạc" cho đến dịch vụ khắc họa tên riêng cho Salon, Spa, Phòng Trà.',
    visualAnnotations: [
      {
        label: 'Bộ đôi Mành Trúc Đầm Sen Thư Pháp Vàng Kim "PHÚC" & "ĐỨC" (Ảnh 2 & Ảnh 3)',
        detail:
          'Trên nền mành trúc màu nâu cánh gián trầm ấm, từng đóa sen hồng mãn khai và nụ sen chúm chím nâng đỡ chữ "Phúc" và chữ "Đức" viết theo lối thư pháp vàng rực, gửi gắm đạo lý uống nước nhớ nguồn.',
      },
      {
        label: 'Tranh Mành Danh Thắng "Chùa Một Cột" & Đại Cảnh "Tùng Trúc Hạc" (Ảnh 4, 5, 6 & 7)',
        detail:
          'Đường cọ tỉ mỉ khắc họa mái đao cong vút của Chùa Một Cột cùng thế đứng hiên ngang của cây Tùng cổ thụ, khóm Trúc xanh và đàn Hạc tiên biểu trưng cho trường thọ, thanh cao.',
      },
      {
        label: 'Chế tác Mành Trúc Biển Hiệu Độc Bản theo yêu cầu – Mẫu "Salon Tóc Thanh Vân" (Ảnh 8)',
        detail:
          'Khách hàng làm Salon Tóc, Spa dưỡng sinh, Quán Trà đạo, Nhà hàng được xưởng miễn phí thiết kế tên thương hiệu và biểu tượng riêng (như chiếc kéo vàng Salon Tóc Thanh Vân) hài hòa ngay trên bức tranh phong thủy.',
      },
    ],
    specs: [
      { label: 'Mã bộ sưu tập', value: 'MT-NT-02 (Mành Trúc Thư Pháp Phúc Đức · Chùa Một Cột · Tùng Trúc Hạc – 08 Ảnh)' },
      { label: 'Đơn giá mành tranh', value: '280.000đ / m² (Đầm Sen Phúc – Đức, Chùa Một Cột, Tùng Trúc Hạc, Sơn Thủy)' },
      { label: 'Cặp tranh đôi treo tường', value: '950.000đ / cặp 2 bức đối xứng (Tùng Hạc Trường Xuân – Trúc Hạc Diên Niên)' },
      { label: 'Mành vẽ tên & logo riêng', value: '300.000đ – 320.000đ / m² (Miễn phí thiết kế tên cửa hàng, Salon, Spa)' },
      { label: 'Chất liệu & Phụ kiện', value: 'Nan trúc cật già sơn PU + Sơn dầu vẽ tay bền màu 10 năm + Ròng rọc kéo' },
    ],
    articleParagraphs: [
      'Không chỉ đơn thuần là tấm rèm che nắng cản gió, bộ sưu tập Mành Trúc Nghệ Thuật Vẽ Tay (Mã MT-NT-02) của Xưởng Ngọc Tuyến – Tuyến Hoa nâng tầm không gian sống thành một phòng thưởng lãm nghệ thuật Á Đông đích thực. Từng nan trúc cật già được xử lý nhẵn mịn, phủ nền nâu trầm cổ điển trước khi các họa sĩ lành nghề điểm tô từng cánh sen hồng, nét bút thư pháp "Phúc – Đức" hay mái chùa Một Cột.',
      'Đặc biệt, Xưởng Ngọc Tuyến nhận chế tác mành trúc khắc tên thương hiệu và biểu tượng riêng theo yêu cầu – tiêu biểu như tác phẩm "Salon Tóc Thanh Vân" kết hợp khóm trúc xanh, cánh hạc trắng cùng hình ảnh cây kéo vàng nghệ thuật, tạo điểm nhấn sang trọng và thu hút tài lộc cho cửa tiệm.'
    ],
    facebookPostCopy:
      '🪷🎋 [TUYỆT TÁC MÀNH TRÚC VẼ TAY NGHỆ THUẬT] ĐẦM SEN THƯ PHÁP "PHÚC – ĐỨC" · CHÙA MỘT CỘT · TÙNG TRÚC HẠC & VẼ TÊN THƯƠNG HIỆU RIÊNG! 🖌️✨\n' +
      '--------------------------------------------\n' +
      '🌟 Ngắm nhìn trọn bộ 06 tuyệt phẩm Mành Tre Trúc vẽ tay sơn dầu vừa xuất xưởng tại Xưởng Tre Trúc Ngọc Tuyến – Tuyến Hoa, từng đường nét đều sắc sảo và có hồn như một bức tranh lụa cổ:\n' +
      '🪷 1. CẶP MÀNH ĐẦM SEN HỒNG THƯ PHÁP VÀNG KIM "PHÚC" – "ĐỨC":\n' +
      '   • Treo phòng thờ gia tiên, từ đường hoặc phòng khách lớn giúp tụ phúc đức, che nắng chắn gió lùa cực tốt.\n' +
      '🏯 2. MÀNH TRANH DANH THẮNG "CHÙA MỘT CỘT – LIÊN HOA ĐÀI":\n' +
      '   • Biểu tượng văn hóa ngàn năm Thăng Long cổ kính, sang trọng và thanh tịnh.\n' +
      '🦢 3. BỘ ĐÔI TRANH MÀNH ĐỐI XỨNG & ĐẠI CẢNH "TÙNG – TRÚC – HẠC HỘI TỤ":\n' +
      '   • Có cả bản cặp 2 bức treo tường đối xứng (950.000đ/cặp) và bản ghép đôi khổ lớn che hiên nhà.\n' +
      '✂️ 4. NHẬN VẼ TÊN THƯƠNG HIỆU & LOGO RIÊNG (NHƯ MẪU "SALON TÓC THANH VÂN"):\n' +
      '   • Thiết kế riêng tên Salon Tóc, Spa, Phòng Trà, Nhà Hàng kết hợp tranh phong thủy chiêu tài lộc!\n' +
      '💰 BẢNG GIÁ GỐC TẠI XƯỞNG NGỌC TUYẾN (Tặng kèm con lăn ròng rọc & dây kéo):\n' +
      '   👉 Mành trúc vẽ tranh Phúc – Đức / Chùa Một Cột / Tùng Trúc Hạc: Chỉ 280.000đ / m² (Giá TT: 420k/m²)\n' +
      '   👉 Cặp 2 bức tranh mành Tùng – Trúc Hạc treo tường: Chỉ 950.000đ / cặp\n' +
      '   👉 Mành trúc vẽ tên thương hiệu & logo riêng: Chỉ 300.000đ – 320.000đ / m²\n' +
      '📞 Gọi/Zalo đặt mành theo kích thước riêng: 0989.655.388 – 0344.727.528 (Ngọc Tuyến – Tuyến Hoa)!',
  },
  // ===========================================================================
  // 00-PRICE-FILLED-2026. BỘ BÀI ĐĂNG ĐÃ ĐIỀN ĐẦY ĐỦ BẢNG GIÁ THEO KÍCH THƯỚC:
  //   1. DLX-VK-01: BẢNG GIÁ ĐỆM LÒ XO TÚI ĐỘC LẬP VIKOSAN STANDARD 3 SAO (3*22) · 5 SAO (5*22) & VIP D'LUXE (VIP*30)
  //   2. CGL-EU-01: SET GA GỐI LỤA TENCEL EU (EUMD05–18), CHẦN BÔNG TỔ ONG & BỘ ĐŨI XƯỚC 5 MÓN (390K – 950K)
  //   3. CGL-DW-01: BỘ CHĂN GA GỐI LỤA TENCEL DREAM WORLD THÊU NHÀNH TRÚC 6 MÀU (1.350.000Đ/BỘ)
  // ===========================================================================
  {
    id: 'bang-gia-dem-lo-xo-tui-doc-lap-vikosan-3sao-5sao-vip-dluxe-dlxvk01',
    code: 'DLX-VK-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bảng Giá Đệm Lò Xo Túi Độc Lập Vikosan Chính Hãng (Bảo Hành 7 Năm): Dòng Standard 3 Sao (3*22 Dày 22cm) · Standard 5 Sao (5*22 Dày 22cm) & VIP 5 Sao D\'luxe (VIP*30 Dày 30cm)',
    shortTitle: 'Bảng Giá Đệm Lò Xo Túi Vikosan 3 Sao · 5 Sao · VIP D\'luxe',
    priceDisplay: '3.480.000đ – 8.990.000đ',
    marketPriceRange: 'Giá niêm yết hãng Vikosan: 4.980.000đ – 12.900.000đ / tấm',
    marketPriceNote: 'Đã điền đầy đủ bảng giá niêm yết nhà máy Vikosan và giá chiết khấu 30% tại Đại Lý Cấp 1 Tuyến Hoa cho cả 3 dòng Đệm Lò Xo Túi Độc Lập Vikosan (Standard 3*22 dày 22cm, Standard 5*22 dày 22cm, VIP***** D\'luxe dày 30cm) và Đệm Bông Ép Vikosan theo đúng 5 kích thước giường tiêu chuẩn.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Vikosan Standard 3 Sao (3*22 · Dày 22cm): 1m6×2m: 4.450.000đ | 1m8×2m: 4.890.000đ',
        marketPrice: '6.390.000đ – 6.990.000đ',
        storePrice: '4.450.000đ – 4.890.000đ',
        note: 'Cỡ 1m2×1m9: 3.480k (Hãng 4.980k) · 1m5×1m9: 4.050k · 2m0×2m2: 5.380k (Hãng 7.690k)',
      },
      {
        sizeOrOption: 'Vikosan Standard 5 Sao (5*22 · Dày 22cm): 1m6×2m: 5.800.000đ | 1m8×2m: 6.150.000đ',
        marketPrice: '8.290.000đ – 8.790.000đ',
        storePrice: '5.800.000đ – 6.150.000đ',
        note: 'Cỡ 1m2×1m9: 4.330k (Hãng 6.190k) · 1m5×1m9: 5.240k · 2m0×2m2: 6.600k (Hãng 9.450k)',
      },
      {
        sizeOrOption: 'Vikosan VIP 5 Sao D\'luxe (VIP*30 · Dày 30cm): 1m6×2m: 6.660.000đ | 1m8×2m: 7.350.000đ',
        marketPrice: '9.525.000đ – 10.500.000đ',
        storePrice: '6.660.000đ – 7.350.000đ',
        note: 'Cỡ 1m2×1m9: 6.080k · 1m5×1m9: 6.330k · 2m0×2m2: 8.990k (Giá hãng 12.900.000đ)',
      },
      {
        sizeOrOption: 'Đệm Bông Ép Gấp 3 Vikosan Chính Hãng: 1m6×2m: 1.690.000đ | 1m8×2m: 1.890.000đ',
        marketPrice: '2.450.000đ – 2.750.000đ',
        storePrice: '1.690.000đ – 1.890.000đ',
        note: 'Cỡ 1m2×1m9: 1.350k · 1m5×1m9: 1.550k · 2m0×2m2: 2.250k (Bảo hành 5 năm)',
      },
    ],
    numericPrice: 4450000,
    unitLabel: '1 tấm Đệm Lò Xo Túi Độc Lập Vikosan chính hãng (Chiết khấu 30% · Bảo hành 7 năm)',
    standardDimensions: 'Đủ 5 cỡ: 120×190cm | 150×190cm | 160×200cm | 180×200cm | 200×220cm (Dày 22cm & 30cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/DLX_VK_01_bang_gia_dem_lo_xo_vikosan_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/DLX_VK_02_vikosan_standard_3sao_5sao_hd.jpg',
      '/assets/aistudio/DLX_VK_03_vikosan_vip_dluxe_30cm_hd.jpg',
      '/assets/aistudio/IMG_5415_deebcd3c.JPG',
      '/assets/aistudio/IMG_5416_0a1f5739.JPG',
      '/assets/aistudio/IMG_5422_465eefd4.JPG',
      '/assets/aistudio/IMG_5408_6fe9b9bd.JPG',
    ],
    imageCaptions: {
      '/assets/aistudio/DLX_VK_01_bang_gia_dem_lo_xo_vikosan_hd.jpg': {
        badge: 'Ảnh 1/7 · Bảng Giá Tổng Hợp Đệm Lò Xo Túi Độc Lập Vikosan 3 Sao · 5 Sao · VIP D\'luxe',
        caption: 'Điền sẵn giá chiết khấu 30% tại Tuyến Hoa: Standard 3 Sao (3,48Tr–4,89Tr), Standard 5 Sao (4,33Tr–6,15Tr) và VIP 5 Sao D\'luxe dày 30cm (6,33Tr–8,99Tr).',
      },
      '/assets/aistudio/DLX_VK_02_vikosan_standard_3sao_5sao_hd.jpg': {
        badge: 'Ảnh 2/7 · Bảng Giá Chi Tiết Từng Cỡ: Vikosan Standard 3 Sao (3*22) & 5 Sao (5*22)',
        caption: 'Đối chiếu trực tiếp Giá Hãng và Giá Tuyến Hoa cho 5 kích thước từ 120×190×22cm đến 200×220×22cm.',
      },
      '/assets/aistudio/DLX_VK_03_vikosan_vip_dluxe_30cm_hd.jpg': {
        badge: 'Ảnh 3/7 · Bảng Giá Chi Tiết Vikosan VIP 5 Sao D\'luxe (Dày 30cm) & Đệm Bông Ép Vikosan',
        caption: 'Bản thượng hạng 3 viền EuroTop dày 30cm (6.080.000đ – 8.990.000đ) và bảng giá Đệm Bông Ép Gấp 3 Vikosan (1.350.000đ – 2.250.000đ).',
      },
      '/assets/aistudio/IMG_5415_deebcd3c.JPG': {
        badge: 'Ảnh 4/7 · Thực Tế Đệm Lò Xo Túi Độc Lập Standard 3 Sao (Dày 22cm)',
        caption: 'Mặt đệm chần gấm trắng kháng khuẩn họa tiết lục giác, thành đệm bọc nỉ xám nâu chần múi dọc sang trọng.',
      },
      '/assets/aistudio/IMG_5416_0a1f5739.JPG': {
        badge: 'Ảnh 5/7 · Thực Tế Đệm Lò Xo Túi Độc Lập Standard 5 Sao (Dày 22cm · Pillow Top)',
        caption: 'Tích hợp lớp Pillow Top êm ái phía trên hệ lò xo túi độc lập mật độ cao, triệt tiêu hoàn toàn rung động khi người nằm cạnh xoay mình.',
      },
      '/assets/aistudio/IMG_5422_465eefd4.JPG': {
        badge: 'Ảnh 6/7 · Thực Tế Đệm Lò Xo Túi VIP 5 Sao D\'luxe (VIP*30 Dày 30cm Thượng Hạng)',
        caption: 'Thiết kế 3 viền hoàng gia bề thế dày 30cm kết hợp lớp EuroTop cao su và Foam đàn hồi kép chuẩn khách sạn 5 sao.',
      },
      '/assets/aistudio/IMG_5408_6fe9b9bd.JPG': {
        badge: 'Ảnh 7/7 · Cận Cảnh Hệ Thống Lõi Lò Xo Túi Độc Lập & Kho Đệm Xuất Xưởng',
        caption: 'Hàng nghìn con lò xo thép cacbon chống gỉ được bọc trong từng túi vải không dệt độc lập, bảo hành chính hãng 7 năm.',
      },
    },
    highlightTag: 'Bảng Giá Điền Sẵn · Chiết Khấu 30% Vikosan',
    summary:
      'Bảng báo giá chính thức đã điền đầy đủ từng kích thước cho 3 dòng Đệm Lò Xo Túi Độc Lập Vikosan chính hãng (Bảo hành 7 năm): Standard 3 Sao (Mã 3*22 dày 22cm: từ 3.480.000đ), Standard 5 Sao (Mã 5*22 dày 22cm: từ 4.330.000đ) và VIP 5 Sao D\'luxe (Mã VIP*30 dày 30cm: từ 6.080.000đ) – Chiết khấu trực tiếp 30% tại Showroom Tuyến Hoa.',
    visualAnnotations: [
      {
        label: '1. Bảng giá Vikosan Standard 3 Sao (Mã 3*22 – Dày 22cm – Bảo hành 7 năm)',
        detail:
          '120×190cm: 3.480.000đ (Giá hãng 4.980.000đ) | 150×190cm: 4.050.000đ (Hãng 5.790.000đ) | 160×200cm: 4.450.000đ (Hãng 6.390.000đ) | 180×200cm: 4.890.000đ (Hãng 6.990.000đ) | 200×220cm: 5.380.000đ (Hãng 7.690.000đ).',
      },
      {
        label: '2. Bảng giá Vikosan Standard 5 Sao (Mã 5*22 – Dày 22cm – Bảo hành 7 năm)',
        detail:
          '120×190cm: 4.330.000đ (Giá hãng 6.190.000đ) | 150×190cm: 5.240.000đ (Hãng 7.490.000đ) | 160×200cm: 5.800.000đ (Hãng 8.290.000đ) | 180×200cm: 6.150.000đ (Hãng 8.790.000đ) | 200×220cm: 6.600.000đ (Hãng 9.450.000đ).',
      },
      {
        label: '3. Bảng giá Vikosan VIP***** D\'luxe (Mã VIP*30 – Dày 30cm Thượng Hạng)',
        detail:
          '120×190cm: 6.080.000đ (Giá hãng 8.690.000đ) | 150×190cm: 6.330.000đ (Hãng 9.050.000đ) | 160×200cm: 6.660.000đ (Hãng 9.525.000đ) | 180×200cm: 7.350.000đ (Hãng 10.500.000đ) | 200×220cm: 8.990.000đ (Hãng 12.900.000đ).',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DLX-VK-01 (Bảng Giá Đệm Lò Xo Túi Độc Lập Vikosan 3 Sao · 5 Sao · VIP D\'luxe)' },
      { label: 'Giá Standard 3 Sao (22cm)', value: '1m2: 3,48Tr | 1m5: 4,05Tr | 1m6: 4,45Tr | 1m8: 4,89Tr | 2m2: 5,38Tr' },
      { label: 'Giá Standard 5 Sao (22cm)', value: '1m2: 4,33Tr | 1m5: 5,24Tr | 1m6: 5,80Tr | 1m8: 6,15Tr | 2m2: 6,60Tr' },
      { label: 'Giá VIP 5 Sao D\'luxe (30cm)', value: '1m2: 6,08Tr | 1m5: 6,33Tr | 1m6: 6,66Tr | 1m8: 7,35Tr | 2m2: 8,99Tr' },
      { label: 'Bảo hành & Vận chuyển', value: 'Bảo hành chính hãng Vikosan 7 năm · Miễn phí giao tận giường' },
    ],
    articleParagraphs: [
      'Đáp ứng nhu cầu tra cứu nhanh bảng giá chính xác theo từng kích thước giường của quý khách hàng, Đại Lý Cấp 1 Chăn Ga Gối Đệm Tuyến Hoa công bố bảng giá niêm yết nhà máy Vikosan đối chiếu trực tiếp với mức giá ưu đãi chiết khấu 30% tại kho cho cả 3 dòng Đệm Lò Xo Túi Độc Lập Vikosan (Bảo hành chính hãng 7 năm).',
      'Toàn bộ các dòng Vikosan Standard 3 Sao (dày 22cm), Standard 5 Sao (dày 22cm) và VIP 5 Sao D\'luxe (dày 30cm) đều sử dụng hệ thống lò xo túi độc lập kháng khuẩn chống rung lắc, có thể đóng gói nguyên tấm hoặc hút chân không cuộn gọn tiện lợi để vận chuyển lên cầu thang tầng cao.'
    ],
    facebookPostCopy:
      '🛏️👑 [BẢNG GIÁ NIÊM YẾT & CHIẾT KHẤU 30%] ĐỆM LÒ XO TÚI ĐỘC LẬP VIKOSAN CHÍNH HÃNG – BẢO HÀNH 7 NĂM! ✨\n' +
      '--------------------------------------------\n' +
      '🔥 Showroom Tuyến Hoa lên sóng bảng giá điền sẵn từng kích thước cho 3 dòng Đệm Lò Xo Túi Độc Lập Vikosan (Đã giảm trực tiếp 30% so với giá hãng):\n\n' +
      '⭐ 1. DÒNG VIKOSAN STANDARD 3 SAO (Mã 3*22 – Dày 22cm):\n' +
      '   • Cỡ 120 × 190cm: 3.480.000đ (Giá hãng: 4.980.000đ)\n' +
      '   • Cỡ 150 × 190cm: 4.050.000đ (Giá hãng: 5.790.000đ)\n' +
      '   • Cỡ 160 × 200cm: 4.450.000đ (Giá hãng: 6.390.000đ)\n' +
      '   • Cỡ 180 × 200cm: 4.890.000đ (Giá hãng: 6.990.000đ)\n' +
      '   • Cỡ 200 × 220cm: 5.380.000đ (Giá hãng: 7.690.000đ)\n\n' +
      '⭐⭐ 2. DÒNG VIKOSAN STANDARD 5 SAO (Mã 5*22 – Dày 22cm):\n' +
      '   • Cỡ 120 × 190cm: 4.330.000đ (Giá hãng: 6.190.000đ)\n' +
      '   • Cỡ 150 × 190cm: 5.240.000đ (Giá hãng: 7.490.000đ)\n' +
      '   • Cỡ 160 × 200cm: 5.800.000đ (Giá hãng: 8.290.000đ)\n' +
      '   • Cỡ 180 × 200cm: 6.150.000đ (Giá hãng: 8.790.000đ)\n' +
      '   • Cỡ 200 × 220cm: 6.600.000đ (Giá hãng: 9.450.000đ)\n\n' +
      '👑 3. DÒNG VIKOSAN VIP 5 SAO D\'LUXE (Mã VIP*30 – Dày 30cm Thượng Hạng):\n' +
      '   • Cỡ 120 × 190cm: 6.080.000đ (Giá hãng: 8.690.000đ)\n' +
      '   • Cỡ 150 × 190cm: 6.330.000đ (Giá hãng: 9.050.000đ)\n' +
      '   • Cỡ 160 × 200cm: 6.660.000đ (Giá hãng: 9.525.000đ)\n' +
      '   • Cỡ 180 × 200cm: 7.350.000đ (Giá hãng: 10.500.000đ)\n' +
      '   • Cỡ 200 × 220cm: 8.990.000đ (Giá hãng: 12.900.000đ)\n' +
      '--------------------------------------------\n' +
      '🚛 Miễn phí xe bán tải Tuyến Hoa giao đệm tận giường – Bảo hành chính hãng 7 năm!\n' +
      '📞 Gọi/Zalo đặt hàng: 0344.727.528 (Showroom Tuyến Hoa – Chợ Cháy, Ứng Hòa, Hà Nội)',
  },
  {
    id: 'set-ga-goi-lua-tencel-eu-eumd-chan-bong-to-ong-dui-xuoc-cgleu01',
    code: 'CGL-EU-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Sưu Tập Lụa Tencel EU Chính Hãng: Set Ga Gối Tencel EU (Mã EUMD05 · 06 · 09 · 10 · 11 · 18 Kèm Túi Khóa Kéo), Set Ga Gối Chần Bông Tổ Ong 4 Màu & Bộ Đũi Xước 5 Món Kèm Chăn Hè',
    shortTitle: 'Set Ga Gối Lụa Tencel EU (EUMD), Tổ Ong & Đũi Xước (390k–950k)',
    priceDisplay: '390.000đ – 950.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 580.000đ – 1.450.000đ / bộ',
    marketPriceNote: 'Đã điền giá chi tiết cho 03 dòng chăn ga gối tiện dụng bán chạy nhất tại Showroom Tuyến Hoa: (1) Set Ga Gối Lụa Tencel EU trơn thêu viền kèm túi khóa kéo TENCEL EU (Mã EUMD05, EUMD06, EUMD09, EUMD10, EUMD11, EUMD18) giá 390.000đ/set; (2) Set Ga Gối Chần Bông Mặt Tổ Ong 4 màu giá 550.000đ/set; (3) Bộ Tencel EU Đũi Xước 5 Món kèm chăn hè chần bông giá 950.000đ/bộ.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Set Ga Gối Lụa Tencel EU (Mã EUMD05 · 06 · 09 · 10 · 11 · 18): 1m6 & 1m8',
        marketPrice: '580.000đ / set',
        storePrice: '390.000đ / set (Cỡ 2m2: 450.000đ)',
        note: 'Gồm 01 ga bo chun + 02 vỏ gối nằm đồng màu đính tag TENCEL EU kèm túi khóa kéo',
      },
      {
        sizeOrOption: '2. Set Ga Gối Chần Bông Mặt Tổ Ong Tencel (Xanh Da Trời · Xanh Dương · Hồng · Xám)',
        marketPrice: '790.000đ / set',
        storePrice: '550.000đ / set (Cỡ 2m2: 620.000đ)',
        note: 'Mặt ga và vỏ gối chần bông họa tiết tổ ong dày dặn, êm lưng, không xô lệch',
      },
      {
        sizeOrOption: '3. Bộ Tencel EU Đũi Xước 5 Món Kèm Chăn Hè Chần Bông (Hồng · Xanh Rêu · Biển · Ghi)',
        marketPrice: '1.350.000đ – 1.450.000đ / bộ',
        storePrice: '950.000đ / bộ (Cỡ 2m2: 1.050.000đ)',
        note: 'Trọn bộ 5 món: 01 Ga bo chun + 01 Chăn hè thu chần bông + 02 Vỏ gối đầu + 01 Vỏ gối ôm',
      },
    ],
    numericPrice: 390000,
    unitLabel: '1 set Ga Gối Lụa Tencel EU chính hãng kèm túi khóa kéo',
    standardDimensions: 'Đủ cỡ đệm 1,6m × 2,0m | 1,8m × 2,0m | 2,0m × 2,2m (Chun bo cao cấp ôm đệm dày tới 25cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/CGL_EU_01_tencel_eu_eumd_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211011_4373635352308930219_4373635352308930219_d1e3997b7240d7fb7f5069950733f5cc_99031ef0.jpg',
      '/assets/aistudio/1792915211346_4373635352308930219_4373635352308930219_35c17f5e89823d1d8ffeae5e4f272b12_233b5411.jpg',
      '/assets/aistudio/1792915211397_4373635352308930219_4373635352308930219_b2fed4ab02f536dcc537698d21f4e6af_fde3fc32.jpg',
      '/assets/aistudio/1792915211242_4373635352308930219_4373635352308930219_cdbc2ca46348ef830d619821cacb6431_2cabba17.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/CGL_EU_01_tencel_eu_eumd_bang_gia_hd.jpg': {
        badge: 'Ảnh 1/5 · Bảng Giá Điền Sẵn: Set Ga Gối Tencel EU (390k), Tổ Ong (550k) & Đũi Xước (950k)',
        caption: 'Tổng hợp 3 phân khúc ga gối Tencel EU bán chạy nhất kèm đơn giá rõ ràng cho cỡ 1m6/1m8 và cỡ đại 2m2.',
      },
      '/assets/aistudio/1792915211011_4373635352308930219_4373635352308930219_d1e3997b7240d7fb7f5069950733f5cc_99031ef0.jpg': {
        badge: 'Ảnh 2/5 · Tông Xanh Dương Mát Lạnh (EUMD05 / EUMD10 – Giá 390.000đ/set)',
        caption: 'Chất lụa Tencel EU mềm mát như nước, bo chun chắc chắn ôm khít thành đệm không bị bung góc.',
      },
      '/assets/aistudio/1792915211346_4373635352308930219_4373635352308930219_35c17f5e89823d1d8ffeae5e4f272b12_233b5411.jpg': {
        badge: 'Ảnh 3/5 · Tông Xanh Da Trời Băng (EUMD18 / Tổ Ong – Giá 390k – 550k/set)',
        caption: 'Màu xanh băng dịu mắt giúp hạ nhiệt phòng ngủ mùa hè, giặt máy nhanh khô và không xù lông.',
      },
      '/assets/aistudio/1792915211397_4373635352308930219_4373635352308930219_b2fed4ab02f536dcc537698d21f4e6af_fde3fc32.jpg': {
        badge: 'Ảnh 4/5 · Tông Xám Ghi Hiện Đại (EUMD09 / Bộ Đũi Xước 5 Món – Giá 390k – 950k)',
        caption: 'Gam xám ghi sạch sang phù hợp mọi gia đình có trẻ nhỏ, có cả bản ga gối lẻ và bộ 5 món kèm chăn hè.',
      },
      '/assets/aistudio/1792915211242_4373635352308930219_4373635352308930219_cdbc2ca46348ef830d619821cacb6431_2cabba17.jpg': {
        badge: 'Ảnh 5/5 · Tông Trắng Kem Khách Sạn 5 Sao (EUMD06 / EUMD11)',
        caption: 'Đóng trong túi khóa kéo nhựa trong TENCEL EU chính hãng, thích hợp mua thay đổi hàng tuần hoặc làm quà tặng.',
      },
    },
    highlightTag: 'Bảng Giá Điền Sẵn · Tencel EU 390k – 950k',
    summary:
      'Trọn bộ bảng giá điền sẵn cho dòng Ga Gối Lụa Tencel EU chính hãng (Mã EUMD05 · EUMD06 · EUMD09 · EUMD10 · EUMD11 · EUMD18 kèm túi khóa kéo giá chỉ 390.000đ/set), Set Ga Gối Chần Bông Mặt Tổ Ong 4 màu (550.000đ/set) và Bộ Tencel EU Đũi Xước 5 Món kèm chăn hè chần bông (950.000đ/bộ).',
    visualAnnotations: [
      {
        label: '1. Set Ga Gối Lụa Tencel EU kèm túi khóa kéo (Mã EUMD05 · 06 · 09 · 10 · 11 · 18): 390.000đ/set',
        detail:
          'Bao gồm 01 ga bo chun theo kích thước đệm + 02 vỏ gối nằm viền khung đôi đính tag vải "TENCEL EU" chính hãng; cỡ đại 2m0×2m2 giá 450.000đ/set.',
      },
      {
        label: '2. Set Ga Gối Chần Bông Mặt Tổ Ong Tencel (4 Màu: Xanh Da Trời, Xanh Dương, Hồng, Xám): 550.000đ/set',
        detail:
          'Toàn bộ bề mặt ga và đôi vỏ gối được chần bông gòn mỏng họa tiết lục giác tổ ong êm ái, giữ mặt ga luôn căng phẳng trên đệm; cỡ 2m0×2m2 giá 620.000đ/set.',
      },
      {
        label: '3. Bộ Tencel EU Đũi Xước 5 Món Kèm Chăn Hè Chần Bông: 950.000đ/bộ',
        detail:
          'Trọn bộ 5 món đồng màu (Hồng Đậm, Xanh Rêu, Xanh Biển Đậm, Xám Ghi) gồm ga bo chun, chăn hè chần bông 2m×2m2, 2 vỏ gối nằm và 1 vỏ gối ôm; cỡ 2m2 giá 1.050.000đ/bộ.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-EU-01 (Set Ga Gối Tencel EU EUMD · Chần Bông Tổ Ong · Đũi Xước 5 Món)' },
      { label: 'Giá Set Tencel EU (EUMD)', value: '390.000đ / set (1m6 & 1m8) | 450.000đ / set (Cỡ đại 2m0×2m2)' },
      { label: 'Giá Set Chần Bông Tổ Ong', value: '550.000đ / set (1m6 & 1m8) | 620.000đ / set (Cỡ đại 2m0×2m2)' },
      { label: 'Giá Bộ Đũi Xước 5 Món', value: '950.000đ / bộ 5 món có chăn hè (1m6 & 1m8) | 1.050.000đ (2m0×2m2)' },
      { label: 'Ưu đãi vận chuyển', value: 'Mua từ 02 set trở lên được miễn phí giao hàng tận nhà' },
    ],
    articleParagraphs: [
      'Bên cạnh các bộ chăn ga cưới 7 món cầu kỳ, nhu cầu mua các Set Ga Gối Lụa Tencel EU (gồm 1 ga bo chun + 2 vỏ gối nằm) để thay đổi giặt giũ thường xuyên trong mùa hè thu là vô cùng lớn. Showroom Tuyến Hoa nhập sẵn đầy đủ các mã màu EUMD05 (Xanh Dương), EUMD06 (Hồng Đất), EUMD09 (Xám Ghi), EUMD10 (Xanh Ngọc), EUMD11 (Kem Vàng) và EUMD18 (Xanh Băng) đóng trong túi khóa kéo TENCEL EU chính hãng với giá chỉ 390.000đ/set.',
      'Nếu quý khách thích mặt ga dày dặn không xô lệch có thể chọn dòng Set Ga Gối Chần Bông Mặt Tổ Ong (550.000đ/set) hoặc chọn trọn bộ 5 món Tencel EU Đũi Xước kèm sẵn chăn hè chần bông (950.000đ/bộ).'
    ],
    facebookPostCopy:
      '🌿✨ [BẢNG GIÁ ĐIỀN SẴN] SET GA GỐI LỤA TENCEL EU (EUMD), GA GỐI CHẦN BÔNG TỔ ONG & BỘ ĐŨI XƯỚC 5 MÓN – CHỈ TỪ 390K! 🛌\n' +
      '--------------------------------------------\n' +
      '🔥 Sắm ga gối thay đổi hàng tuần mát lịm lưng với bảng giá tận gốc tại Showroom Tuyến Hoa:\n\n' +
      '1️⃣ SET GA GỐI LỤA TENCEL EU KÈM TÚI KHÓA KÉO (Mã EUMD05 · 06 · 09 · 10 · 11 · 18):\n' +
      '   👉 Cỡ 1m6×2m & 1m8×2m: Chỉ 390.000đ / set (1 ga bo chun + 2 vỏ gối nằm)\n' +
      '   👉 Cỡ đại 2m0×2m2: Chỉ 450.000đ / set\n\n' +
      '2️⃣ SET GA GỐI CHẦN BÔNG MẶT TỔ ONG TENCEL (Xanh Da Trời · Xanh Dương · Hồng · Xám):\n' +
      '   👉 Cỡ 1m6×2m & 1m8×2m: Chỉ 550.000đ / set (Mặt chần bông tổ ong êm phẳng)\n' +
      '   👉 Cỡ đại 2m0×2m2: Chỉ 620.000đ / set\n\n' +
      '3️⃣ BỘ TENCEL EU ĐŨI XƯỚC 5 MÓN KÈM CHĂN HÈ CHẦN BÔNG (Hồng · Xanh Rêu · Biển · Ghi):\n' +
      '   👉 Cỡ 1m6×2m & 1m8×2m: Chỉ 950.000đ / bộ 5 món\n' +
      '   👉 Cỡ đại 2m0×2m2: Chỉ 1.050.000đ / bộ 5 món\n' +
      '--------------------------------------------\n' +
      '🎁 Mua từ 02 set miễn phí giao hàng tận nơi – Kiểm tra chất lụa mát mịn mới thanh toán!\n' +
      '📞 Gọi/Zalo chốt mã màu: 0344.727.528 (Showroom Tuyến Hoa)',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-dream-world-theu-nhanh-truc-6-mau-cgldw01',
    code: 'CGL-DW-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Dream World Thêu Nhành Trúc Thanh Khiết & Khung Viền Đôi (Đủ 06 Màu: Xanh Rêu · Xanh Tím Than · Đỏ Đô · Xám Ghi · Xanh Biển · Hồng Đất)',
    shortTitle: 'Bộ Chăn Ga Lụa Tencel Dream World Thêu Trúc (Đủ 6 Màu)',
    priceDisplay: '1.350.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 1.950.000đ – 2.450.000đ / bộ',
    marketPriceNote: 'Đã điền giá ưu đãi tại Showroom Tuyến Hoa (1.350.000đ/bộ cho giường 1m6 & 1m8; 1.490.000đ/bộ cho giường đại 2m0×2m2) cho dòng Chăn Ga Gối Lụa Tencel Dream World chần bông thêu nổi Nhành Trúc Thanh Khiết: Đủ 6 màu phong thủy.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ Lụa Tencel Dream World Thêu Nhành Trúc (Giường 1,6m×2,0m & 1,8m×2,0m)',
        marketPrice: '1.950.000đ – 2.150.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Đủ 6 màu: Xanh Rêu · Xanh Tím Than · Đỏ Đô · Xám Ghi · Xanh Biển · Hồng Đất',
      },
      {
        sizeOrOption: '2. Trọn Bộ Lụa Tencel Dream World Thêu Nhành Trúc (Giường Đại 2,0m × 2,2m)',
        marketPrice: '2.250.000đ – 2.450.000đ / bộ',
        storePrice: '1.490.000đ / bộ',
        note: 'Gồm: 01 Ga chần bông (phủ hoặc bo chun) + 01 Chăn chần lụa Tencel + 02 Vỏ gối đầu + 01 Vỏ gối ôm',
      },
      {
        sizeOrOption: '3. Mua Combo 02 Bộ Dream World Hoặc Mua Kèm Đệm Tại Tuyến Hoa',
        marketPrice: '3.900.000đ / 2 bộ',
        storePrice: '2.550.000đ / 2 bộ (Tiết kiệm 150.000đ)',
        note: 'Tặng túi đựng cao cấp & miễn phí giao tận nhà khu vực Ứng Hòa – Hà Nội',
      },
    ],
    numericPrice: 1350000,
    unitLabel: '1 bộ Chăn Ga Gối Lụa Tencel Dream World Thêu Nhành Trúc (Đủ 6 màu)',
    standardDimensions: 'Đủ cỡ giường 1,6m × 2,0m | 1,8m × 2,0m | 2,0m × 2,2m (6 màu phong thủy)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/CGL_DW_01_dream_world_theu_truc_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915265308_4373635352308930219_4373635352308930219_b56e4b9672559f5c6e88ef6004c1b545.jpg',
      '/assets/aistudio/1792915265363_4373635352308930219_4373635352308930219_78b0d21996bd9d26062f5d73560dcf8b.jpg',
      '/assets/aistudio/1792915265337_4373635352308930219_4373635352308930219_d8688e0d29240a931b6c455495632f75.jpg',
      '/assets/aistudio/1792915265388_4373635352308930219_4373635352308930219_001d049ce5ae17faba67925ee554de97.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/CGL_DW_01_dream_world_theu_truc_bang_gia_hd.jpg': {
        badge: 'Ảnh 1/5 · Bảng Giá Điền Sẵn Bộ Chăn Ga Gối Lụa Tencel Dream World Thêu Trúc (1.350.000đ)',
        caption: 'Tổng hợp bảng giá 6 gam màu phong thủy thêu nhành trúc & khung viền đôi sang trọng tại Showroom Tuyến Hoa.',
      },
      '/assets/aistudio/1792915265308_4373635352308930219_4373635352308930219_b56e4b9672559f5c6e88ef6004c1b545.jpg': {
        badge: 'Ảnh 2/5 · Tông Xanh Rêu Trúc Lâm & Xanh Tím Than (Giá 1.350.000đ/bộ)',
        caption: 'Nền lụa Tencel xanh mát rượi kết hợp nhành lá thanh mảnh thêu chỉ tơ trắng bạc nổi bật.',
      },
      '/assets/aistudio/1792915265363_4373635352308930219_4373635352308930219_78b0d21996bd9d26062f5d73560dcf8b.jpg': {
        badge: 'Ảnh 3/5 · Tông Đỏ Đô Hỷ Sự Phòng Cưới (Giá 1.350.000đ/bộ)',
        caption: 'Gam đỏ đô trầm ấm sang trọng, thêu khung viền đôi và họa tiết lá trúc may mắn cho phòng tân hôn.',
      },
      '/assets/aistudio/1792915265337_4373635352308930219_4373635352308930219_d8688e0d29240a931b6c455495632f75.jpg': {
        badge: 'Ảnh 4/5 · Tông Hồng Đất Pastel Thanh Lịch (Giá 1.350.000đ/bộ)',
        caption: 'Sắc hồng đất dịu dàng, tôn sáng không gian nội thất gỗ và giường bọc nệm.',
      },
      '/assets/aistudio/1792915265388_4373635352308930219_4373635352308930219_001d049ce5ae17faba67925ee554de97.jpg': {
        badge: 'Ảnh 5/5 · Tông Xám Ghi Chì Hiện Đại (Giá 1.350.000đ/bộ)',
        caption: 'Chăn và diềm ga chần bông quả trám tỉ mỉ, sạch sẽ và bền màu vượt thời gian.',
      },
    },
    highlightTag: 'Bảng Giá Điền Sẵn · Dream World Thêu Trúc (6 Màu)',
    summary:
      'Bộ Chăn Ga Gối Lụa Tencel Dream World thêu nổi Nhành Trúc Thanh Khiết và khung viền đôi trang nhã: Đầy đủ 06 màu sắc phong thủy (Xanh Rêu, Xanh Tím Than, Đỏ Đô, Xám Ghi, Xanh Biển, Hồng Đất) với giá niêm yết tại Showroom Tuyến Hoa chỉ 1.350.000đ/bộ (cỡ đại 2m0×2m2 giá 1.490.000đ/bộ).',
    visualAnnotations: [
      {
        label: 'Họa tiết thêu Nhành Trúc Thanh Khiết & Logo "Dream World" sắc sảo',
        detail:
          'Biểu tượng trúc quân tử thanh cao mang lại cảm giác bình yên, thư thái và giấc ngủ sâu sau ngày dài làm việc.',
      },
      {
        label: 'Bảng giá niêm yết rõ ràng theo kích thước giường',
        detail:
          'Giường 1,6m × 2,0m và 1,8m × 2,0m đồng giá 1.350.000đ/bộ; giường đại 2,0m × 2,2m giá 1.490.000đ/bộ (tiết kiệm 600.000đ so với giá thị trường).',
      },
      {
        label: 'Đủ 06 gam màu dễ phối nội thất: Xanh Rêu · Tím Than · Đỏ Đô · Xám Ghi · Xanh Biển · Hồng Đất',
        detail:
          'Mặt lụa Tencel 60s chần bông êm mịn, không tích điện mùa đông và mát mẻ vào mùa hè.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-DW-01 (Bộ Chăn Ga Gối Lụa Tencel Dream World Thêu Nhành Trúc)' },
      { label: 'Bảng 06 màu có sẵn', value: 'Xanh Rêu · Xanh Tím Than · Đỏ Đô · Xám Ghi · Xanh Biển · Hồng Đất' },
      { label: 'Giá cỡ 1m6×2m & 1m8×2m', value: '1.350.000đ / bộ (Giá thị trường: 1.950.000đ / bộ)' },
      { label: 'Giá cỡ đại 2m0×2m2', value: '1.490.000đ / bộ (Giá thị trường: 2.250.000đ / bộ)' },
      { label: 'Bảo hành & Giao hàng', value: 'Cam kết không xù lông, không phai màu · Giao hàng tận nhà' },
    ],
    articleParagraphs: [
      'Mẫu Chăn Ga Gối Lụa Tencel Dream World Thêu Nhành Trúc (Mã CGL-DW-01) chinh phục khách hàng nhờ phong cách thiết kế Á Đông thanh lịch: trên nền lụa Tencel bóng mượt là khung viền đôi thêu chỉ ánh kim cùng những nhành trúc vươn mình mềm mại.',
      'Showroom Tuyến Hoa đã cập nhật đầy đủ bảng giá điền sẵn cho cả 6 tông màu (Xanh Rêu, Xanh Tím Than, Đỏ Đô, Xám Ghi, Xanh Biển, Hồng Đất): chỉ 1.350.000đ/bộ cho giường 1m6 & 1m8 và 1.490.000đ/bộ cho giường đại 2m0×2m2.'
    ],
    facebookPostCopy:
      '🎋✨ [BẢNG GIÁ ĐIỀN SẴN] BỘ CHĂN GA GỐI LỤA TENCEL DREAM WORLD THÊU NHÀNH TRÚC THANH KHIẾT – ĐỦ 06 MÀU SANG TRỌNG! 🛌\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.950.000đ – 2.450.000đ / bộ\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA:\n' +
      '   👉 Cỡ giường 1,6m × 2,0m & 1,8m × 2,0m: Chỉ 1.350.000đ / bộ\n' +
      '   👉 Cỡ giường đại 2,0m × 2,2m: Chỉ 1.490.000đ / bộ\n' +
      '--------------------------------------------\n' +
      '🎨 ĐỦ 06 GAM MÀU PHONG THỦY ĐẸP MÊ HỒN:\n' +
      '   🌿 1. Xanh Rêu Trúc Lâm thanh mát\n' +
      '   🌌 2. Xanh Tím Than Royal quyền quý\n' +
      '   🍷 3. Đỏ Đô Hỷ Sự ấm áp phòng cưới\n' +
      '   🩶 4. Xám Ghi Chì hiện đại, sạch sang\n' +
      '   🌊 5. Xanh Biển Đại Dương dịu mắt\n' +
      '   🌷 6. Hồng Đất Pastel ngọt ngào\n' +
      '✅ Chất Lụa Tencel chần bông êm mịn, thêu nổi nhành trúc & logo Dream World sắc nét.\n' +
      '📞 Gọi/Zalo chốt màu giao ngay: 0344.727.528 (Showroom Tuyến Hoa)!',
  },
  // ===========================================================================
  // 00-ULTRA-TOP-2026. BỘ BÀI ĐĂNG MỚI NHẤT VỪA CHỈNH SỬA HD & LÊN BÀI:
  //   1. MT-TH-01: BỘ SƯU TẬP 21 MẪU MÀNH TRE TRÚC PHÒNG THỜ GIA TIÊN & PHÒNG TRÀ NGHỆ THUẬT (ĐÃ XÓA SẠCH WATERMARK)
  //   2. KXD-TH-01: TỔNG KHO ĐỆM CAO SU NON AMERICAN, KING SLEEP, CUỘN VẢI GẤM XÁM & PHÔI ĐỆM ÉP NHIỆT
  //   3. DKC-TH-01: ĐỆM BÔNG TINH KHIẾT MẶT TRẦN KIM CƯƠNG (GOOD LUCK, LÁ TRÚC, TỔ ONG) & KIM CƯƠNG PLAZA AIRY
  //   4. DLV-TH-01: ĐỆM CAO SU NON & BÔNG ÉP GẤP 2 CHẦN MÚI TỔ ONG THÊU LÔNG VŨ TRẮNG DÀY 18–20CM
  //   5. DGD-TH-01: ĐỆM BÔNG ÉP GẤM ĐỎ HOÀNG GIA (PHÒNG CƯỚI) & GẤM XÁM LÁ PHONG ĐÓNG TÚI KIM CƯƠNG
  //   6. DVC-TH-01: ĐỆM CAO CẤP TH VICUNA LUXURY SLEEP CHUẨN 5 SAO BỌC GÓC DA THÊU KIM CƯƠNG
  //   7. DCR-TH-01: ĐỆM GẤP 2 CHẦN MÚI KẺ CARO THÀNH XÁM GHI & KEM SÁNG DÀY 18CM
  // ===========================================================================
  {
    id: 'manh-truc-nghe-thuat-tranh-dong-que-biet-thu-3-tang-mt01',
    code: 'MT-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Bộ Sưu Tập 21 Mẫu Mành Tre Trúc Phòng Thờ Gia Tiên (Lưỡng Long Chầu Thọ · Chữ Hiếu · Vạn Cổ Anh Linh · Hoa Sen Vàng) & Mành Trúc Nghệ Thuật Phòng Trà – Phòng Khách (Liên Hoa Cửu Ngư · Tùng Hạc · Hoa Mẫu Đơn)',
    shortTitle: '21 Mẫu Mành Tre Trúc Phòng Thờ & Phòng Trà (260k–320k/m²)',
    priceDisplay: '260.000đ – 320.000đ/m²',
    marketPriceRange: 'Giá thị trường: 380.000đ – 520.000đ / m²',
    marketPriceNote: 'Đã chỉnh sửa hậu kỳ xóa sạch 100% chữ chìm watermark trên cả 21 mẫu Mành Tre Trúc vừa tải lên và đóng khung Typography HD Be Vietnam Pro sắc nét: Đầy đủ 07 mẫu Mành Tre Trúc Che Bàn Thờ Gia Tiên (Lưỡng Long Chầu Chữ Thọ, Vạn Cổ Anh Linh – Âm Siêu Dương Thái, Tổ Tiên Công Đức, Chữ Hiếu Hoa Sen Vàng, Bạch Liên Hoa) và 14 mẫu Mành Trúc Vẽ Tranh Thủy Mặc Phòng Trà – Phòng Khách – Biệt Thự (Liên Hoa Cửu Ngư, Tùng Hạc Diên Niên, Hoa Mẫu Đơn Phú Quý, Đèn Lồng Hoa Đào, Hoa Mai Đỏ, Sâm Ngọc Linh).',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Mành Tre Trúc Nghệ Thuật Phòng Trà & Phòng Khách (Liên Hoa Cửu Ngư, Hoa Mai Đỏ, Đèn Lồng, Mẫu Đơn, Sơn Thủy Tùng Hạc)',
        marketPrice: '380.000đ – 420.000đ / m²',
        storePrice: '260.000đ – 280.000đ / m²',
        note: 'Nan trúc cật tự nhiên xử lý chống mối mọt, kèm con lăn ròng rọc dây kéo lụa êm nhẹ',
      },
      {
        sizeOrOption: '2. Mành Tre Trúc Phong Thủy Phòng Thờ Gia Tiên (Lưỡng Long Chầu Thọ Nhũ Vàng, Chữ Hiếu Hoa Sen Vàng, Hoa Sen Khắc Nổi)',
        marketPrice: '450.000đ – 480.000đ / m²',
        storePrice: '300.000đ – 320.000đ / m²',
        note: 'Tông nâu cánh gián / đỏ trầm trang nghiêm, cản gió lùa & ánh nắng chiếu trực diện bát hương',
      },
      {
        sizeOrOption: '3. Bộ 3 Tấm Mành Trúc Vách Ngăn Gian Thờ Cổ Truyền ("Vạn Cổ Anh Linh – Âm Siêu Dương Thái", "Tổ Tiên Công Đức", Bạch Liên Hoa & Viền Triện)',
        marketPrice: '480.000đ – 550.000đ / m²',
        storePrice: '320.000đ – 360.000đ / m²',
        note: 'Ghép 3 bức tranh liền mạch theo kích thước gian thờ gỗ, miễn phí đo đạc & lắp đặt tận nhà',
      },
    ],
    numericPrice: 260000,
    unitLabel: '1 m² hoàn thiện cả bộ dây kéo ròng rọc & công lắp đặt',
    standardDimensions: 'Nhận đặt làm theo mọi kích thước cửa sổ, vách phòng trà & gian thờ (Rộng 0,8m – 4,5m × Cao 1,2m – 3,5m)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/MT_PT_01_manh_truc_phong_tho_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/MT_TH_01_manh_truc_nghe_thuat_hd.jpg',
      '/assets/aistudio/MT_PT_01_luong_long_chau_tho_hd.jpg',
      '/assets/aistudio/MT_PT_01_van_co_anh_linh_sen_trang_hd.jpg',
      '/assets/aistudio/MT_PT_01_chu_hieu_sen_vang_hd.jpg',
      '/assets/aistudio/MT_TH_01_lien_hoa_cuu_ngu_hd.jpg',
      '/assets/aistudio/MT_TH_01_son_thuy_tung_hac_binh_an_hd.jpg',
      '/assets/aistudio/MT_TH_01_hoa_mau_don_den_long_hd.jpg',
      '/assets/aistudio/IMG_9290_f6c3666b.JPG',
      '/assets/aistudio/IMG_9291_36ef56a4.JPG',
    ],
    imageCaptions: {
      '/assets/aistudio/MT_PT_01_manh_truc_phong_tho_hd.jpg': {
        badge: 'Ảnh 1/10 · Tổng Hợp Mành Tre Trúc Phòng Thờ Gia Tiên (Đã Xóa Sạch Watermark)',
        caption: 'Bố cục Typography HD Be Vietnam Pro sắc nét: Quy tụ 07 mẫu Mành Tre Trúc Phòng Thờ (Lưỡng Long Chầu Thọ, Vạn Cổ Anh Linh – Âm Siêu Dương Thái, Tổ Tiên Công Đức & Hoa Sen Chữ Hiếu).',
      },
      '/assets/aistudio/MT_TH_01_manh_truc_nghe_thuat_hd.jpg': {
        badge: 'Ảnh 2/10 · Tổng Hợp 14 Mẫu Mành Trúc Nghệ Thuật Phòng Trà & Phòng Khách',
        caption: 'Bố cục Typography HD sắc nét: Các mẫu Liên Hoa Cửu Ngư (Hoa Sen & Cá Chép Koi), Sơn Thủy Tùng Hạc Bình An, Hoa Mẫu Đơn Phú Quý & Đèn Lồng Hoa Đào.',
      },
      '/assets/aistudio/MT_PT_01_luong_long_chau_tho_hd.jpg': {
        badge: 'Ảnh 3/10 · Mành Trúc Nâu Đỏ Phòng Thờ Vẽ Nhũ Vàng "Lưỡng Long Chầu Chữ Thọ"',
        caption: 'Đôi rồng vàng chầu chữ Thọ tròn và hoa sen vàng nổi bật trên nền trúc nâu đỏ, che phía trên án gian thờ gia tiên cực kỳ uy nghiêm, ấm cúng.',
      },
      '/assets/aistudio/MT_PT_01_van_co_anh_linh_sen_trang_hd.jpg': {
        badge: 'Ảnh 4/10 · Bộ 3 Tấm Mành Trúc Vách Ngăn Gian Thờ "Vạn Cổ Anh Linh – Tổ Tiên Công Đức"',
        caption: 'Thiết kế ghép 3 tấm mành trúc liền mạch vẽ Bạch Liên Hoa – Hồng Liên Hoa và thư pháp chữ Hán – Việt trang trọng, ánh nến xuyên qua khe trúc lung linh.',
      },
      '/assets/aistudio/MT_PT_01_chu_hieu_sen_vang_hd.jpg': {
        badge: 'Ảnh 5/10 · Mành Trúc Nâu Cánh Gián Vẽ Hoa Sen Vàng Kim & Thư Pháp Chữ "HIẾU"',
        caption: 'Mẫu mành trúc nâu trầm vẽ Hoa Sen Vàng Kim và bài thơ thư pháp chữ "Hiếu", đồng điệu hoàn hảo với bàn thờ gỗ gụ, gỗ hương và hoành phi câu đối.',
      },
      '/assets/aistudio/MT_TH_01_lien_hoa_cuu_ngu_hd.jpg': {
        badge: 'Ảnh 6/10 · Mành Trúc Phòng Trà "Liên Hoa Cửu Ngư" (Đầm Sen, Chim Bói Cá & Cá Chép Koi)',
        caption: 'Bức tranh đầm sen hồng nở rộ cùng đôi chim bói cá và đàn cá chép Koi bơi lội sống động, lọc nắng dịu nhẹ cho không gian thưởng trà, tiếp khách.',
      },
      '/assets/aistudio/MT_TH_01_son_thuy_tung_hac_binh_an_hd.jpg': {
        badge: 'Ảnh 7/10 · Mành Trúc Thủy Mặc "Sơn Thủy Hữu Tình – Tùng Hạc Diên Niên & Hoa Mai Đỏ"',
        caption: 'Sự kết hợp tinh tế giữa núi non mây phủ, cây tùng cổ thụ, đôi hạc trắng và cành mai đỏ mùa xuân bên bức thư pháp "Bình An".',
      },
      '/assets/aistudio/MT_TH_01_hoa_mau_don_den_long_hd.jpg': {
        badge: 'Ảnh 8/10 · Mành Trúc "Hoa Mẫu Đơn Phú Quý & Đèn Lồng Đỏ Hoa Đào Cổ Phong"',
        caption: 'Mẫu mành trúc đôi lắp khung cửa kính lớn phòng khách hiện đại: Bông mẫu đơn hồng rực rỡ kết hợp đèn lồng đỏ hoa đào mang vượng khí tài lộc.',
      },
      '/assets/aistudio/IMG_9290_f6c3666b.JPG': {
        badge: 'Ảnh 9/10 · Công Trình Thực Tế Biệt Thự 3 Tầng: Mành Trúc Tranh Đồng Quê Khi Thả Kín',
        caption: 'Hình ảnh lắp đặt thực tế tại Biệt Thự 3 Tầng: Tầng 1 vẽ tranh Đôi Hạc Lúa Vàng bảo vệ cửa gỗ lim đại sảnh, Tầng 2 vẽ tranh Mục Đồng Chăn Trâu.',
      },
      '/assets/aistudio/IMG_9291_36ef56a4.JPG': {
        badge: 'Ảnh 10/10 · Công Trình Thực Tế Biệt Thự 3 Tầng: Kéo Lửng Mành Trúc Mở Lối Đi Đón Gió',
        caption: 'Hệ ròng rọc trợ lực giúp gia chủ kéo lửng bức mành trúc sảnh chính nhẹ nhàng để mở lối đi thông thoáng mà vẫn che mát phần hiên trên.',
      },
    },
    highlightTag: 'Mới Đăng · Đủ 21 Mẫu Mành Trúc Phòng Thờ & Phòng Trà',
    summary:
      'Trọn bộ 21 mẫu Mành Tre Trúc Nghệ Thuật & Phong Thủy Phòng Thờ vừa được chỉnh sửa xóa sạch watermark và đóng khung Typography HD sắc nét tại Xưởng Tuyến Hoa – Ngọc Tuyến: Bao gồm 07 mẫu Mành Trúc Che Bàn Thờ Gia Tiên (Lưỡng Long Chầu Thọ, Vạn Cổ Anh Linh – Âm Siêu Dương Thái, Tổ Tiên Công Đức, Chữ Hiếu Hoa Sen Vàng, Bạch Liên Hoa) và 14 mẫu Mành Trúc Phòng Trà – Phòng Khách – Cửa Hàng (Liên Hoa Cửu Ngư, Sơn Thủy Tùng Hạc, Hoa Mẫu Đơn, Đèn Lồng Hoa Đào, Hoa Mai Đỏ, Phố Cổ Giang Nam, Sâm Ngọc Linh).',
    visualAnnotations: [
      {
        label: 'Nhóm 07 mẫu Mành Tre Trúc Phòng Thờ Gia Tiên (Lưỡng Long Chầu Thọ, Chữ Hiếu, Vạn Cổ Anh Linh, Hoa Sen)',
        detail:
          'Được xử lý trên nền nan trúc màu nâu cánh gián, nâu đỏ hoặc vàng óng cổ truyền; họa tiết vẽ nhũ vàng "Lưỡng Long Chầu Chữ Thọ", Hoa Sen Vàng Kim, Bạch Liên Hoa và thư pháp "Vạn Cổ Anh Linh – Âm Siêu Dương Thái", "Tổ Tiên Công Đức", "Chữ Hiếu" giúp che chắn gió lùa, cản ánh nắng chiếu thẳng vào bát hương và giữ sự tôn nghiêm ấm cúng cho gian thờ.',
      },
      {
        label: 'Nhóm 14 mẫu Mành Tre Trúc Nghệ Thuật Phòng Trà, Phòng Khách & Showroom (Liên Hoa Cửu Ngư, Tùng Hạc, Mẫu Đơn)',
        detail:
          'Gồm các họa tiết phong thủy kinh điển: Đầm Sen Hồng – Chim Bói Cá – Đàn Cá Chép Koi (Liên Hoa Cửu Ngư), Sơn Thủy Tùng Hạc Diên Niên, Song Hạc Đào Nguyên, Hoa Mai Đỏ Đôi Bướm, Đèn Lồng Đỏ Hoa Đào, Phố Cổ Giang Nam, Hoa Mẫu Đơn Phú Quý, Bộ 3 tấm Viền Triện Hoa Mai Tròn và mẫu đặt vẽ riêng biển hiệu "Cửa Hàng Sâm Ngọc Linh".',
      },
      {
        label: 'Đã chỉnh sửa xóa sạch 100% watermark & Nâng cấp chất lượng nan trúc cật già phủ PU 2K',
        detail:
          'Toàn bộ hình ảnh đã được làm sạch chữ chìm đè trên tranh, cân chỉnh ánh sáng sắc nét; sản phẩm thực tế tại Xưởng Tuyến Hoa đan bằng dây dù cường lực, phủ sơn bóng PU chống mối mọt và trang bị con lăn ròng rọc đồng kéo cực nhẹ tay.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'MT-TH-01 (Bộ Sưu Tập 21 Mẫu Mành Tre Trúc Phòng Thờ & Phòng Trà Nghệ Thuật)' },
      { label: 'Đơn giá tại xưởng', value: '260.000đ – 280.000đ/m² (Mành phòng trà) | 300.000đ – 320.000đ/m² (Mành phòng thờ nhũ vàng)' },
      { label: 'Chất liệu nan mành', value: '100% Trúc cật già tự nhiên xử lý chống mối mọt, cong vênh, đan dây dù chịu lực' },
      { label: 'Danh mục 21 họa tiết', value: 'Lưỡng Long Chầu Thọ · Chữ Hiếu · Vạn Cổ Anh Linh · Liên Hoa Cửu Ngư · Tùng Hạc · Mẫu Đơn · Hoa Mai' },
      { label: 'Bảo hành & Lắp đặt', value: 'Bảo hành 3–5 năm, miễn phí đo đạc & lắp đặt tận nơi (Hotline/Zalo: 0989.655.388 – 0344.727.528)' },
    ],
    articleParagraphs: [
      'Trong kiến trúc nhà truyền thống Việt Nam cũng như các căn biệt thự, nhà phố, chung cư hiện đại, Mành Tre Trúc Nghệ Thuật đóng vai trò vô cùng đặc biệt: vừa là bức bình phong phong thủy che chắn nắng gắt, gió lùa và tụ khí lành cho không gian Phòng Thờ Gia Tiên, vừa là bức tranh thủy mặc mộc mạc làm bừng sáng góc Phòng Trà, Phòng Khách hay Phòng Đọc Sách.',
      'Từ 21 mẫu thiết kế vừa tải lên, đội ngũ kỹ thuật của Xưởng Mành Tre Trúc Tuyến Hoa – Ngọc Tuyến đã xử lý hậu kỳ xóa sạch toàn bộ watermark cũ, phục chế độ nét cao và phân loại rõ ràng thành 02 dòng chủ đạo: Dòng Mành Trúc Phòng Thờ (Lưỡng Long Chầu Chữ Thọ nhũ vàng, Bộ 3 tấm Vạn Cổ Anh Linh – Âm Siêu Dương Thái, Tổ Tiên Công Đức, Chữ Hiếu Hoa Sen Vàng, Bạch Liên Hoa) và Dòng Mành Trúc Phòng Trà – Phòng Khách – Cửa Hàng (Liên Hoa Cửu Ngư, Sơn Thủy Tùng Hạc, Song Hạc Đào Nguyên, Hoa Mẫu Đơn Phú Quý, Đèn Lồng Hoa Đào, Hoa Mai Đỏ, Phố Cổ Giang Nam và nhận vẽ logo riêng như mẫu Cửa Hàng Sâm Ngọc Linh).'
    ],
    facebookPostCopy:
      '🎋🪷 [TUYỆT PHẨM 21 MẪU MÀNH TRE TRÚC PHÒNG THỜ GIA TIÊN & PHÒNG TRÀ NGHỆ THUẬT – GIÁ GỐC TẠI XƯỞNG TUYẾN HOA!] 🐉✨\n' +
      '--------------------------------------------\n' +
      '🔥 Các bác đang tìm mẫu Mành Tre Trúc che Bàn Thờ Gia Tiên trang nghiêm hay lắp cửa sổ Phòng Trà, Phòng Khách, Nhà Thờ Họ đậm chất Á Đông thì ngắm ngay trọn bộ 21 mẫu đẹp nhất vừa lên kệ tại Xưởng Tuyến Hoa – Ngọc Tuyến nhé!\n' +
      '🙏 1. NHÓM MÀNH TRÚC PHÒNG THỜ GIA TIÊN (Cản gió lùa, chắn nắng hắt bát hương, tụ vượng khí):\n' +
      '   • Mẫu "Lưỡng Long Chầu Chữ Thọ" vẽ nhũ vàng trên nền trúc nâu đỏ uy nghiêm\n' +
      '   • Bộ 3 tấm vách ngăn "Vạn Cổ Anh Linh – Âm Siêu Dương Thái" & "Tổ Tiên Công Đức – Chữ Hiếu"\n' +
      '   • Mẫu Nâu Cánh Gián khắc Hoa Sen Vàng Kim, Chữ Hiếu Hoa Sen & Bạch Liên Hoa thanh khiết\n' +
      '🍵 2. NHÓM MÀNH TRÚC VẼ TRANH PHÒNG TRÀ – PHÒNG KHÁCH – NHÀ HÀNG:\n' +
      '   • Liên Hoa Cửu Ngư (Hoa Sen Hồng, Chim Bói Cá & Đàn Cá Chép Koi)\n' +
      '   • Thủy Mặc Sơn Thủy Hữu Tình – Tùng Hạc Diên Niên – Song Hạc Đào Nguyên\n' +
      '   • Hoa Mẫu Đơn Phú Quý, Đèn Lồng Đỏ Hoa Đào, Hoa Mai Đỏ Đôi Bướm, Phố Cổ Giang Nam\n' +
      '   • Nhận vẽ tên riêng & thương hiệu theo yêu cầu (như mẫu Cửa Hàng Sâm Ngọc Linh)\n' +
      '💰 BẢNG GIÁ TRỌN GÓI CẢ CON LĂN RÒNG RỌC & CÔNG LẮP ĐẶT:\n' +
      '   👉 Mành trúc vẽ tranh Phòng Trà / Phòng Khách: Chỉ 260.000đ – 280.000đ / m² (Giá TT: 380k–420k/m²)\n' +
      '   👉 Mành trúc Phòng Thờ vẽ nhũ vàng & Bộ 3 tấm: Chỉ 300.000đ – 320.000đ / m² (Giá TT: 450k–520k/m²)\n' +
      '✅ Nan trúc cật già tự nhiên xử lý chống mối mọt, phủ bóng PU bền màu 10 năm!\n' +
      '📞 Gọi/Zalo đặt lịch mang mẫu tận nhà đo đạc: 0989.655.388 – 0344.727.528 (Showroom Tuyến Hoa – Ngọc Tuyến)!',
  },
  {
    id: 'tong-kho-xuong-phoi-dem-cao-su-tong-hop-tuyen-hoa-kxd01',
    code: 'KXD-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Kho Xưởng',
    title: 'Tổng Kho Xưởng Đệm Cao Su Non American, Đệm King Sleep & Phôi Cao Su Tổng Hợp Ép Nhiệt Tuyến Hoa (Bọc Góc Kim Cương Vàng · Uốn Gập Dẻo Dai · Sỉ & Lẻ Tận Gốc)',
    shortTitle: 'Tổng Kho Đệm Cao Su Non American & King Sleep',
    priceDisplay: '1.150.000đ – 1.750.000đ',
    marketPriceRange: 'Giá thị trường: 1.750.000đ – 2.650.000đ / tấm',
    marketPriceNote: 'Bộ sưu tập thực tế vừa chụp tại Tổng Kho Xưởng Đệm Tuyến Hoa: Gồm các kiện Đệm Cao Su Non American bọc góc đen in logo Kim Cương vàng "100% Poly Ester" có khóa kéo trắng, dòng đệm trắng KING SLEEP, màn kiểm chứng uốn gập đôi 5 tấm đệm dẻo dai trong lồng thang nâng hàng inox, 2 cuộn vải gấm xám dệt caro may vỏ đệm và lõi phôi cao su tổng hợp ép nhiệt 18×2×19cm.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Đệm Cao Su Non American Nguyên Tấm / Gấp 3 (Bọc Góc Kim Cương Vàng Có Khóa Kéo)',
        marketPrice: '1.750.000đ – 2.250.000đ / tấm',
        storePrice: '1.150.000đ – 1.550.000đ / tấm',
        note: 'Uốn gập 180 độ dẻo dai không gãy lún – Êm lưng thoáng khí',
      },
      {
        sizeOrOption: '2. Đệm KING SLEEP & Phôi Đệm Cao Su Tổng Hợp Ép Nhiệt Dày 18–19cm (1,8m × 2,0m)',
        marketPrice: '2.450.000đ / tấm',
        storePrice: '1.750.000đ / tấm',
        note: 'Cốt đệm siêu đầm nặng, độ bền trên 10 năm không xẹp',
      },
      {
        sizeOrOption: '3. Đặt Cắt Đệm Theo Kích Thước Lẻ (Sập Gụ, Phản Gỗ, Giường Tầng) & Giá Sỉ Đại Lý',
        marketPrice: '1.950.000đ – 2.650.000đ / tấm',
        storePrice: '1.350.000đ – 1.650.000đ / tấm',
        note: 'May vỏ trực tiếp từ cuộn vải gấm xám caro tại xưởng',
      },
    ],
    numericPrice: 1350000,
    unitLabel: '1 tấm Đệm Cao Su Non American / King Sleep xuất xưởng',
    standardDimensions: 'Đủ cỡ: 1,2m×1,9m | 1,6m×2,0m | 1,8m×2,0m | 2,0m×2,2m (Nhận cắt mọi cỡ lẻ)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/KXD_AM_01_cao_su_non_american_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016702_4373635352308930219_4373635352308930219_4911d2249505ab896640c28518a2313f_4ecf452b.jpg',
      '/assets/aistudio/1792918016727_4373635352308930219_4373635352308930219_7bf37d678a6e59c76c1278c6e258a872_b3bd3aac.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/KXD_AM_01_cao_su_non_american_hd.jpg': {
        badge: 'Ảnh 1/3 · Banner HD Tổng Kho Đệm Cao Su Non American & King Sleep',
        caption: 'Bố cục Typography HD Be Vietnam Pro sắc nét: Tổng kho Đệm Cao Su Non American bọc góc đen logo Kim Cương vàng, khóa kéo trắng, uốn gập đôi dẻo dai trong thang nâng hàng inox.',
      },
      '/assets/aistudio/1792918016702_4373635352308930219_4373635352308930219_4911d2249505ab896640c28518a2313f_4ecf452b.jpg': {
        badge: 'Ảnh 2/3 · Cận Cảnh Lõi Phôi Cao Su Tổng Hợp Ép Nhiệt (18×2×19cm)',
        caption: 'Công khai kết cấu lõi phôi đa sắc ép nhiệt đặc khít bên trong kết hợp mặt bông trắng chần múi và các kiện Cao Su Non American xếp tầng tại xưởng.',
      },
      '/assets/aistudio/1792918016727_4373635352308930219_4373635352308930219_7bf37d678a6e59c76c1278c6e258a872_b3bd3aac.jpg': {
        badge: 'Ảnh 3/3 · Toàn Cảnh Tổng Kho Hàng Trăm Kiện Đệm Sẵn Sàng Xuất Xưởng',
        caption: 'Hàng trăm tấm đệm Cao Su Non American, King Sleep, DER LAMOR và đệm gấp 2 bo viền xếp thành từng kiện lớn từ 15–20 tấm tại kho xưởng mái tôn rộng lớn.',
      },
    },
    highlightTag: 'Mới Đăng · Kho Đệm Cao Su Non American & King Sleep',
    summary:
      'Trọn bộ phóng sự ảnh thực tế tại Tổng Kho Xưởng Đệm Tuyến Hoa: Từ chồng 11–20 tấm Đệm Cao Su Non American bọc góc đen in logo Kim Cương vàng có khóa kéo trắng, đệm trắng KING SLEEP, 2 cuộn vải gấm xám dệt caro may vỏ đệm, đến màn thử nghiệm uốn gập đôi 5 tấm đệm dẻo dai trong lồng thang nâng hàng inox.',
    visualAnnotations: [
      {
        label: 'Đệm Cao Su Non American bọc góc đen logo Kim Cương vàng & khóa kéo trắng',
        detail:
          'Ruột đệm màu kem vàng dẻo dai, bọc 4 góc bằng vải đen viền xám in logo Kim Cương vàng "100% Poly Ester", trang bị khóa kéo trắng chạy dọc thành đệm giúp kiểm tra ruột đệm dễ dàng.',
      },
      {
        label: 'Kiểm chứng độ dẻo dai: Uốn gập đôi 5 tấm đệm 180° trong lồng thang nâng hàng Inox',
        detail:
          'Các tấm đệm Cao Su Non American có thể uốn cong chữ U gập đôi hoàn toàn khi đưa vào lồng thang máy nâng hàng tại xưởng mà không hề bị gãy gập hay biến dạng phom đệm.',
      },
      {
        label: 'Dòng đệm trắng KING SLEEP & 2 cuộn vải gấm xám Caro dệt nổi tại xưởng may',
        detail:
          'Bên cạnh các kiện Cao Su Non American là dòng đệm trắng KING SLEEP sang trọng và những cuộn vải gấm xám dệt họa tiết hình học caro – kẻ sọc dùng để may áo đệm trực tiếp tại xưởng.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'KXD-TH-01 (Tổng Kho Đệm Cao Su Non American · King Sleep · Phôi Ép Nhiệt)' },
      { label: 'Thương hiệu & Dòng đệm', value: 'Cao Su Non American · King Sleep · Phôi Cao Su Tổng Hợp · DER LAMOR' },
      { label: 'Đặc điểm nhận diện', value: 'Góc bọc đen logo Kim Cương vàng "100% Poly Ester", khóa kéo trắng, uốn gập 180°' },
      { label: 'Giá xuất xưởng Tuyến Hoa', value: 'Chỉ từ 1.150.000đ – 1.750.000đ / tấm (Tiết kiệm 30%–35% so với giá thị trường)' },
      { label: 'Dịch vụ đặc biệt', value: 'Nhận cắt đặt mọi kích thước lẻ & Giao sỉ/lẻ tận nhà bằng xe tải riêng' },
    ],
    articleParagraphs: [
      'Bộ ảnh thực tế vừa ghi nhận tại Tổng Kho Xưởng Đệm Tuyến Hoa mang đến cái nhìn minh bạch 100% về quy mô sản xuất và lưu kho: Hàng trăm tấm Đệm Cao Su Non American và KING SLEEP được xếp ngay ngắn thành từng kiện cao từ 11 đến 20 tấm dưới mái xưởng rộng lớn, vận chuyển liên tục qua hệ thống lồng thang nâng hàng Inox chuyên dụng.',
      'Điểm ăn tiền nhất của dòng Đệm Cao Su Non American chính là độ đàn hồi dẻo dai vượt trội (uốn gập đôi 5 tấm cùng lúc không gãy lún), 4 góc bọc vải đen in logo Kim Cương vàng "100% Poly Ester" kèm khóa kéo trắng bền bỉ, cùng nguồn vải gấm xám caro nguyên cuộn nhập trực tiếp tại xưởng.'
    ],
    facebookPostCopy:
      '🏭 [MỤC SỞ THỊ TỔNG KHO XƯỞNG ĐỆM] ĐỆM CAO SU NON AMERICAN, KING SLEEP & PHÔI CAO SU TỔNG HỢP GIÁ TẬN GỐC! 🏭\n' +
      '--------------------------------------------\n' +
      '🔥 Quay chụp trực tiếp tại Tổng Kho Xưởng Đệm Tuyến Hoa: Hàng trăm tấm Đệm Cao Su Non American & KING SLEEP vừa ra lò, xếp kín lồng thang nâng hàng Inox chuẩn bị giao cho đại lý và bà con!\n' +
      '✅ Đệm Cao Su Non American: Uốn gập đôi 180 độ dẻo dai không gãy lún, nằm êm lưng, nâng đỡ cột sống cực tốt.\n' +
      '✅ Bọc góc đen in logo Kim Cương vàng "100% Poly Ester", có khóa kéo trắng kiểm tra ruột đệm thoải mái.\n' +
      '✅ Vải gấm xám dệt họa tiết hình học Caro nguyên cuộn tại xưởng – Nhận đặt cắt đệm mọi kích thước giường đóng riêng, sập gụ!\n' +
      '💰 GIÁ XUẤT XƯỞNG TRỰC TIẾP (Rẻ hơn thị trường 500k – 800k/tấm):\n' +
      '   • Đệm Cao Su Non American: Chỉ từ 1.150.000đ – 1.550.000đ / tấm\n' +
      '   • Đệm KING SLEEP & Phôi Cao Su Tổng Hợp dày 18–19cm: Chỉ 1.750.000đ / tấm\n' +
      '🚛 Xe bán tải Tuyến Hoa giao tận giường miễn phí – Kiểm tra hàng ưng ý mới thanh toán!\n' +
      '📞 Gọi/Zalo đặt đệm lẻ & sỉ: 0989.655.388 – 0344.727.528 (Showroom Tuyến Hoa)',
  },
  {
    id: 'dem-bong-tinh-khiet-kim-cuong-mat-tran-dkc01',
    code: 'DKC-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Bông Tinh Khiết Mặt Trần Kim Cương (Mẫu Hoa Mai "GOOD LUCK" · Lá Trúc · Tổ Ong) & Kim Cương Plaza Hoàng Gia Airy Polyester (Bảo Hành 5 Năm)',
    shortTitle: 'Đệm Kim Cương Mặt Trần Good Luck & Plaza Airy',
    priceDisplay: '1.850.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 2.450.000đ – 3.100.000đ / tấm',
    marketPriceNote: 'Trọn bộ Đệm Bông Tinh Khiết Mặt Trần thương hiệu Kim Cương (mẫu chần hoa 5 cánh chữ "GOOD LUCK", Lá Trúc, Tổ Ong góc bọc da đen-kem) & Kim Cương Plaza Hoàng Gia (Đệm Cao Su Non – Tổng Hợp – Bông Tinh Khiết Mặt Trần Airy Polyester Mattress) nguyên tem bảo hành 5 năm.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Giường 1,6m × 2,0m (Đệm Kim Cương Mặt Trần Mẫu Good Luck / Lá Trúc / Tổ Ong)',
        marketPrice: '2.450.000đ / tấm',
        storePrice: '1.850.000đ / tấm',
        note: 'Góc bọc da đen-kem sang trọng, chần bông nổi êm lưng',
      },
      {
        sizeOrOption: '2. Giường đôi 1,8m × 2,0m (Đệm Kim Cương Plaza Hoàng Gia Airy Polyester Mattress)',
        marketPrice: '2.750.000đ / tấm',
        storePrice: '2.050.000đ / tấm',
        note: 'Kết hợp Cao Su Non Tổng Hợp & Bông Tinh Khiết Mặt Trần',
      },
      {
        sizeOrOption: '3. Giường đại 2,0m × 2,2m (Bản Hoàng Gia Mặt Trần Cao Cấp Dày 14–18cm)',
        marketPrice: '3.100.000đ / tấm',
        storePrice: '2.350.000đ / tấm',
        note: 'Bảo hành chính hãng 5 năm – Kèm bảng giá niêm yết nhà máy',
      },
    ],
    numericPrice: 1850000,
    unitLabel: '1 tấm Đệm Kim Cương Mặt Trần chính hãng (BH 5 năm)',
    standardDimensions: 'Đủ kích thước: 1,5m×1,9m | 1,6m×2,0m | 1,8m×2,0m | 2,0m×2,2m (Độ dày 9cm / 14cm / 18cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/DKC_TH_01_kim_cuong_mat_tran_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918003089_4373635352308930219_4373635352308930219_a5ccc3d45dfc907903e18cbbbb8e9365_bf882307.jpg',
      '/assets/aistudio/1792918003163_4373635352308930219_4373635352308930219_3f68d7dd8f736b30aab8ab95a3d71907_285e6b75.jpg',
      '/assets/aistudio/1792918016556_4373635352308930219_4373635352308930219_e5e9f00e0ae5608b681c11af93f12660_7e65653b.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/DKC_TH_01_kim_cuong_mat_tran_hd.jpg': {
        badge: 'Ảnh 1/4 · Banner HD Đệm Kim Cương Mặt Trần Good Luck & Kim Cương Plaza',
        caption: 'Tổng hợp sắc nét dòng Đệm Bông Tinh Khiết Mặt Trần Kim Cương & Kim Cương Plaza Hoàng Gia Airy Polyester Mattress bảo hành 5 năm.',
      },
      '/assets/aistudio/1792918003089_4373635352308930219_4373635352308930219_a5ccc3d45dfc907903e18cbbbb8e9365_bf882307.jpg': {
        badge: 'Ảnh 2/4 · Bộ 4 Tấm Đệm Mặt Trần Xám Ghi Xếp Chéo Kèm 4 Bộ Tem Nhãn Vàng Xanh',
        caption: 'So sánh trực tiếp 4 họa tiết chần mặt trần (Lá Trúc, Hoa Mai Good Luck, Kẻ Caro, Tổ Ong) kèm 4 bộ tem nhãn vàng xanh Kim Cương & bảng giá nhà máy.',
      },
      '/assets/aistudio/1792918003163_4373635352308930219_4373635352308930219_3f68d7dd8f736b30aab8ab95a3d71907_285e6b75.jpg': {
        badge: 'Ảnh 3/4 · Đệm Kim Cương Plaza Hoàng Gia Airy Polyester Chần Lông Vũ Trắng',
        caption: '2 tấm đệm mặt trần xám ghi chần lông vũ trắng, tem xanh dương "Kim Cương Plaza – Đệm Cao Su Non Tổng Hợp & Bông Tinh Khiết Mặt Trần – Bảo hành 5 năm".',
      },
      '/assets/aistudio/1792918016556_4373635352308930219_4373635352308930219_e5e9f00e0ae5608b681c11af93f12660_7e65653b.jpg': {
        badge: 'Ảnh 4/4 · Cận Cảnh Góc Bọc Da Đen-Kem, Tem Kim Cương & Bảng Giá Niêm Yết',
        caption: 'Mỗi tấm đệm đều có 4 góc bọc da đen-kem chống trầy xước, tem xanh vàng "KIM CƯƠNG – ĐỆM BÔNG TINH KHIẾT" và bảng giá chính hãng.',
      },
    },
    highlightTag: 'Mới Đăng · Kim Cương Good Luck & Plaza Airy',
    summary:
      'Bộ sưu tập Đệm Bông Tinh Khiết Mặt Trần Kim Cương & Kim Cương Plaza Hoàng Gia chính hãng tại kho Tuyến Hoa: Nổi bật với mẫu chần hoa 5 cánh chữ "GOOD LUCK", mẫu Lá Trúc, Tổ Ong và Lông Vũ Trắng trên nền gấm xám chì sạch sang, góc bọc da đen-kem và nguyên tem bảo hành 5 năm.',
    visualAnnotations: [
      {
        label: 'Họa tiết chần bông hoa 5 cánh "GOOD LUCK", Lá Trúc & Tổ Ong trên nền xám chì',
        detail:
          'Bề mặt vải gấm xám than được chần nổi chữ "GOOD LUCK" cùng hoa mai 5 cánh, lá trúc hoặc tổ ong tinh xảo; hệ thống đã lọc bỏ bản ảnh nháp dính vệt bút đỏ để giữ bản chụp sắc nét nhất.',
      },
      {
        label: 'Tem xanh dương "Kim Cương Plaza – Kim Cương Hoàng Gia – Airy Polyester Mattress"',
        detail:
          'Phiên bản kết hợp Đệm Cao Su Non – Tổng Hợp & Đệm Bông Tinh Khiết Mặt Trần thêu lông vũ trắng, bảo hành chính hãng 5 năm.',
      },
      {
        label: '4 góc bọc da Đen – Kem sang trọng kèm bộ tem vàng xanh & bảng giá nhà máy',
        detail:
          'Gia cố 4 góc đệm bằng da công nghiệp 2 tông màu đen – kem vừa chống sờn góc khi vận chuyển vừa tôn lên vẻ lịch lãm cho phòng ngủ.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DKC-TH-01 (Đệm Kim Cương Mặt Trần Good Luck & Kim Cương Plaza Airy)' },
      { label: 'Thương hiệu', value: 'Đệm Kim Cương & Kim Cương Plaza Hoàng Gia Chính Hãng' },
      { label: 'Họa tiết mặt trần', value: 'Hoa Mai "GOOD LUCK" · Lá Trúc · Tổ Ong · Lông Vũ Trắng (Màu Xám Chì / Xám Ghi)' },
      { label: 'Giá tại Tuyến Hoa', value: '1.850.000đ (1m6×2m) | 2.050.000đ (1m8×2m) | 2.350.000đ (2m×2m2)' },
      { label: 'Chế độ bảo hành', value: 'Bảo hành chính hãng 5 năm – Đổi mới nếu lỗi nhà sản xuất' },
    ],
    articleParagraphs: [
      'Dòng Đệm Bông Tinh Khiết Mặt Trần Kim Cương & Kim Cương Plaza Hoàng Gia (Mã DKC-TH-01) vừa cập bến kho Tuyến Hoa với đầy đủ 4 họa tiết chần nổi được ưa chuộng nhất: mẫu hoa mai 5 cánh dập chữ "GOOD LUCK" may mắn, mẫu Lá Trúc thanh lịch, mẫu Tổ Ong hiện đại và mẫu thêu Lông Vũ Trắng.',
      'Toàn bộ các tấm đệm đều được bọc góc da đen-kem chắc chắn, đính kèm bộ tem nhãn vàng xanh "KIM CƯƠNG – ĐỆM BÔNG TINH KHIẾT" hoặc tem xanh dương "Kim Cương Plaza – Airy Polyester Mattress" cùng bảng giá niêm yết và phiếu bảo hành 5 năm.'
    ],
    facebookPostCopy:
      '💎 ĐỆM BÔNG TINH KHIẾT MẶT TRẦN KIM CƯƠNG "GOOD LUCK" & KIM CƯƠNG PLAZA HOÀNG GIA – BẢO HÀNH 5 NĂM! 💎\n' +
      '--------------------------------------------\n' +
      '📸 Ảnh chụp thực tế tại kho Tuyến Hoa: Đủ các mẫu chần nổi Hoa Mai "GOOD LUCK", Lá Trúc, Tổ Ong & Lông Vũ Trắng trên nền vải gấm xám chì siêu sạch và sang trọng!\n' +
      '✅ Góc đệm bọc da Đen – Kem lịch lãm, nguyên bộ tem nhãn vàng xanh Kim Cương & bảng giá nhà máy.\n' +
      '✅ Phiên bản Kim Cương Plaza Hoàng Gia (Airy Polyester Mattress): Kết hợp Cao Su Non Tổng Hợp & Bông Tinh Khiết Mặt Trần êm lưng, thoáng khí 4 mùa.\n' +
      '💰 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA:\n' +
      '   • Cỡ 1,6m × 2,0m: 1.850.000đ / tấm (Giá TT: 2.450.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m: 2.050.000đ / tấm (Giá TT: 2.750.000đ)\n' +
      '   • Cỡ 2,0m × 2,2m: 2.350.000đ / tấm (Giá TT: 3.100.000đ)\n' +
      '🚛 Miễn phí giao đệm tận giường – Bảo hành chính hãng 5 năm!\n' +
      '📞 Hotline/Zalo đặt hàng: 0989.655.388 – 0344.727.528 (Tuyến Hoa)',
  },
  {
    id: 'dem-gap-2-chan-mui-long-vu-tuyen-hoa-dlv01',
    code: 'DLV-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Cao Su Non & Bông Ép Gấp 2 Chần Múi Tổ Ong Thêu Lông Vũ Trắng Thành Vải Bố Cao Cấp (Dày 18cm – 20cm) – Đủ 05 Góc Chụp Sắc Nét',
    shortTitle: 'Đệm Gấp 2 Chần Múi Lông Vũ Dày 18–20cm',
    priceDisplay: '1.850.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 2.500.000đ – 3.150.000đ / tấm',
    marketPriceNote: 'Dòng đệm gấp 2 cao cấp tại Showroom Tuyến Hoa: Lõi cao su tổng hợp kết hợp bông ép kháng khuẩn dày 18–20cm, mặt trên chần múi tổ ong 3D thêu họa tiết Lông Vũ Trắng tinh khôi, thành đệm bọc vải bố Canvas sang trọng.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Cỡ giường 1,6m × 2,0m × Dày 18cm (Gấp 2 chần múi tổ ong thêu lông vũ)',
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
    imageUrl: '/assets/aistudio/DLV_TH_01_dem_long_vu_mat_tran_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016457_4373635352308930219_4373635352308930219_ce5968c3bf0facffcac3c3337b6368f8_6a935b43.jpg',
      '/assets/aistudio/1792918016482_4373635352308930219_4373635352308930219_4312b35fb8fb2294dae9814c0fd63b76_efca6d23.jpg',
      '/assets/aistudio/1792918016506_4373635352308930219_4373635352308930219_64e0bdcea0b4a6a81dd49838bee4f92b_9aa612e6.jpg',
      '/assets/aistudio/1792918016531_4373635352308930219_4373635352308930219_923776db7491fe49943cc0401d79b4a6_02f36a9c.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/DLV_TH_01_dem_long_vu_mat_tran_hd.jpg': {
        badge: 'Ảnh 1/5 · Banner HD Đệm Gấp 2 Chần Múi Lông Vũ Thành Vải Bố Dày 18–20cm',
        caption: 'Tổng hợp sắc nét dáng gập chữ A thành vải bố Canvas kem ghi và bề mặt chần múi tổ ong thêu lông vũ trắng tinh khôi.',
      },
      '/assets/aistudio/1792918016457_4373635352308930219_4373635352308930219_ce5968c3bf0facffcac3c3337b6368f8_6a935b43.jpg': {
        badge: 'Ảnh 2/5 · Bề Mặt Đệm Chần Múi Tổ Ong Thêu Lông Vũ Trắng Dựng Ngang Tại Kho',
        caption: 'Khi mở phẳng hai tấm liền mạch khít 100%, bề mặt vải gấm dệt kim xám bạc chần múi tổ ong thêu nổi họa tiết Lông Vũ trắng tinh xảo.',
      },
      '/assets/aistudio/1792918016482_4373635352308930219_4373635352308930219_4312b35fb8fb2294dae9814c0fd63b76_efca6d23.jpg': {
        badge: 'Ảnh 3/5 · Dáng Gập Chữ A Thành Vải Bố Canvas Dày 18–20cm',
        caption: 'Thành đệm bọc vải bố Canvas kem ghi đứng phom vuông vức như đệm khách sạn 5 sao, gập đôi linh hoạt dễ qua cầu thang.',
      },
      '/assets/aistudio/1792918016506_4373635352308930219_4373635352308930219_64e0bdcea0b4a6a81dd49838bee4f92b_9aa612e6.jpg': {
        badge: 'Ảnh 4/5 · Cận Cảnh Bản Lề Gập Đôi & Viền Bo Xương Cá',
        caption: 'Đường viền bo xương cá to bản khâu máy công nghiệp 2 kim ôm chặt cạnh đệm, chống sờn rách và chống xẹp góc suốt 10 năm.',
      },
      '/assets/aistudio/1792918016531_4373635352308930219_4373635352308930219_923776db7491fe49943cc0401d79b4a6_02f36a9c.jpg': {
        badge: 'Ảnh 5/5 · Cận Cảnh Ô Múi Chần Nổi Đa Điểm Thoáng Khí',
        caption: 'Các rãnh múi chần sâu tạo khe thoáng khí đối lưu, nâng đỡ êm ái vùng vai gáy và thắt lưng, không gây hầm bí mùa hè.',
      },
    },
    highlightTag: 'Mới Đăng · Chần Múi Lông Vũ Dày 18–20cm',
    summary:
      'Bộ 5 góc chụp thực tế sắc nét của dòng Đệm Gấp 2 Chần Múi Tổ Ong Thêu Lông Vũ Trắng cao cấp tại xưởng Tuyến Hoa: Thiết kế gập đôi linh hoạt nhưng khi trải phẳng liền mạch như đệm lò xo nguyên tấm, thành đệm bọc vải bố màu kem ghi chống bám bẩn.',
    visualAnnotations: [
      {
        label: 'Bề mặt chần múi tổ ong 3D thêu họa tiết Lông Vũ Trắng tinh khôi (Ảnh 2 & Ảnh 5)',
        detail:
          'Các ô múi chần sâu hình tổ ong tạo rãnh thoáng khí đối lưu, điểm xuyết họa tiết lông vũ trắng nổi bật trên nền gấm xám ghi sang trọng.',
      },
      {
        label: 'Thành đệm cao 18cm–20cm bọc vải bố Canvas kèm viền bo xương cá (Ảnh 3 & Ảnh 4)',
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
      { label: 'Mã sản phẩm', value: 'DLV-TH-01 (Đệm Gấp 2 Chần Múi Lông Vũ Tuyến Hoa – Bộ 5 Ảnh)' },
      { label: 'Giá thị trường', value: '2.500.000đ – 3.150.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '1.850.000đ (1m6×2m) | 2.050.000đ (1m8×2m) | 2.350.000đ (2m×2m2)' },
      { label: 'Độ dày tiêu chuẩn', value: '18cm – 20cm (Phom đệm dày sang trọng chuẩn giường hiện đại)' },
      { label: 'Bảo hành & Vận chuyển', value: 'Bảo hành 5 năm không xẹp lún · Giao tận giường miễn phí' },
    ],
    articleParagraphs: [
      'Dòng Đệm Gấp 2 Chần Múi Lông Vũ (Mã DLV-TH-01) là lựa chọn hoàn hảo cho các gia đình yêu thích vẻ sang trọng, bề thế của đệm dày 18cm–20cm nhưng vẫn muốn sự gọn nhẹ, dễ di chuyển qua cầu thang của thiết kế gập đôi.',
      'Toàn bộ 5 bức ảnh thực tế tại xưởng hiển thị trọn vẹn từng chi tiết: mặt trên là vải gấm dệt kim xám bạc chần múi tổ ong thêu họa tiết lông vũ trắng thanh thoát; phần thành xung quanh bọc vải bố Canvas màu ghi kem hiện đại, chống sờn rách và cực kỳ sạch sẽ.'
    ],
    facebookPostCopy:
      '✨ [SIÊU PHẨM MỚI VỀ] ĐỆM GẤP 2 CHẦN MÚI TỔ ONG THÊU LÔNG VŨ TRẮNG DÀY 18–20CM – ĐẸP NHƯ ĐỆM KHÁCH SẠN 5 SAO! ✨\n' +
      '--------------------------------------------\n' +
      '🔥 Bác nào thích nằm đệm dày 18–20cm nhìn sang trọng như đệm lò xo nguyên tấm nhưng lại ngại bê vác qua cầu thang hẹp thì chốt ngay mẫu Đệm Gấp 2 Chần Múi Lông Vũ này tại Showroom Tuyến Hoa nhé!\n' +
      '✅ Mặt trên: Vải gấm dệt kim chần múi tổ ong 3D thêu họa tiết Lông Vũ Trắng cực kỳ êm lưng, thoáng khí.\n' +
      '✅ Thành đệm: Bọc vải bố Canvas màu kem ghi sang trọng, bo viền xương cá siêu bền, không lo xẹp góc.\n' +
      '✅ Lõi đệm: Phôi cao su tổng hợp & bông ép nhiệt tỷ trọng cao – Nằm êm mà không bị võng lưng!\n' +
      '💰 GIÁ TẠI KHO TUYẾN HOA (Rẻ hơn thị trường 650k – 800k/tấm):\n' +
      '   • Cỡ 1,6m × 2,0m × 18cm: Chỉ 1.850.000đ (Giá TT: 2.500.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m × 18–20cm: Chỉ 2.050.000đ (Giá TT: 2.850.000đ)\n' +
      '   • Cỡ 2,0m × 2,2m × 20cm: Chỉ 2.350.000đ (Giá TT: 3.150.000đ)\n' +
      '🎁 Bảo hành chính hãng 5 năm – Miễn phí xe bán tải chở tận nhà!\n' +
      '📞 Gọi/Zalo chốt đơn ngay: 0989.655.388 – 0344.727.528 (Showroom Tuyến Hoa)',
  },
  {
    id: 'dem-bong-ep-gam-do-phong-cuoi-kim-cuong-dgd01',
    code: 'DGD-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Bông Ép Gấm Đỏ Hoàng Gia (Phòng Cưới) & Gấm Xám Lá Phong · Hoa Văn Cổ Điển Đóng Túi Kim Cương (Đủ 03 Góc Chụp)',
    shortTitle: 'Đệm Gấm Đỏ Phòng Cưới & Gấm Xám Lá Phong',
    priceDisplay: '1.450.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 1.850.000đ – 2.450.000đ / tấm',
    marketPriceNote: 'Đệm bông ép gấp 3 & mặt trần vỏ Gấm Đỏ Hoàng Gia (chuyên dùng cho phòng cưới may mắn) và Gấm Xám Lá Phong / Xám Hoa Văn Cổ Điển sạch đẹp, đóng túi khóa kéo góc đen logo Kim Cương vàng chính hãng.',
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
        sizeOrOption: 'Bản dày 14cm – 18cm (Cỡ 1,8m × 2,0m hoặc 2,0m × 2,2m Mặt Trần)',
        marketPrice: '2.450.000đ / tấm',
        storePrice: '1.950.000đ / tấm',
        note: 'Bông ép cứng cáp phẳng lưng – Bảo hành 5 năm',
      },
    ],
    numericPrice: 1450000,
    unitLabel: '1 tấm Đệm Gấm Đỏ / Gấm Xám Lá Phong chính hãng',
    standardDimensions: '1,5m×1,9m | 1,6m×2,0m | 1,8m×2,0m | 2,0m×2,2m (Độ dày 9cm / 14cm / 18cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/DGD_TH_01_dem_gam_do_la_phong_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918003114_4373635352308930219_4373635352308930219_183a5322d1c3677c81ea3c6eed04d596_c7602f66.jpg',
      '/assets/aistudio/1792918003138_4373635352308930219_4373635352308930219_8dab47a7f373f06a9c0f8a93b6f426a3_9e0a77a6.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/DGD_TH_01_dem_gam_do_la_phong_hd.jpg': {
        badge: 'Ảnh 1/3 · Banner HD Đệm Gấm Đỏ Hoàng Gia & Gấm Xám Lá Phong',
        caption: 'Bố cục Typography HD Be Vietnam Pro sắc nét: Bộ sưu tập Đệm Gấm Đỏ Phòng Cưới và Gấm Xám Lá Phong đóng túi Kim Cương vàng.',
      },
      '/assets/aistudio/1792918003114_4373635352308930219_4373635352308930219_183a5322d1c3677c81ea3c6eed04d596_c7602f66.jpg': {
        badge: 'Ảnh 2/3 · Bộ 3 Tấm Đệm Mặt Trần Dựng Đứng (2 Gấm Đỏ Hoàng Gia & 1 Gấm Xám Lá Phong)',
        caption: 'Hai tấm Đệm Gấm Đỏ Hoàng Gia chần bông rực rỡ đặt hai bên tấm Đệm Gấm Xám Lá Phong ở giữa, bọc góc đen-vàng sang trọng.',
      },
      '/assets/aistudio/1792918003138_4373635352308930219_4373635352308930219_8dab47a7f373f06a9c0f8a93b6f426a3_9e0a77a6.jpg': {
        badge: 'Ảnh 3/3 · Chồng 6 Kiện Đệm Gấp 3 Đóng Túi Khóa Kéo Góc Đen Logo Kim Cương Vàng',
        caption: '6 kiện đệm gấp 3 đóng túi khóa kéo "100% Poly Ester": Gồm 2 kiện Gấm Đỏ, 2 kiện Gấm Lá Phong và 2 kiện Gấm Hoa Cổ Điển.',
      },
    },
    highlightTag: 'Mới Đăng · Gấm Đỏ Phòng Cưới & Lá Phong',
    summary:
      'Trọn bộ hình ảnh thực tế lô Đệm Bông Ép Gấp 3 & Mặt Trần đóng túi Kim Cương tại kho Tuyến Hoa: Nổi bật với 2 tấm Gấm Đỏ Hoàng Gia dựng đứng hai bên tấm Gấm Xám Lá Phong cùng chồng 6 kiện đệm gấp 3 bọc túi khóa kéo góc đen in logo Kim Cương vàng.',
    visualAnnotations: [
      {
        label: 'Bộ 3 tấm Đệm Mặt Trần dựng đứng: 2 Gấm Đỏ Hoàng Gia & 1 Gấm Xám Lá Phong (Ảnh 2)',
        detail:
          'Vải gấm đỏ dệt hoa văn nổi chần bông rực rỡ cho phòng tân hôn, đặt cạnh mẫu gấm xám dệt hình lá phong thanh lịch.',
      },
      {
        label: 'Chồng 6 kiện Đệm Gấp 3 bọc túi khóa kéo góc đen logo Kim Cương vàng (Ảnh 3)',
        detail:
          'Mỗi túi đựng gồm 3 tấm gập gọn, góc túi bọc vải đen in logo Kim Cương vàng "100% Poly Ester", chia rõ 3 cặp hoa văn: Đỏ Hoàng Gia, Xám Lá Phong và Xám Hoa Cổ Điển.',
      },
      {
        label: 'Cốt bông ép nhiệt phẳng lưng chuẩn y khoa – Bảo hành 5 năm',
        detail:
          'Độ phẳng tối ưu giúp nâng đỡ cột sống cho cả người lớn tuổi, trẻ nhỏ và các cặp đôi mới cưới.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DGD-TH-01 (Đệm Bông Ép Gấm Đỏ & Gấm Xám Lá Phong – Bộ 3 Ảnh)' },
      { label: 'Chất liệu vỏ', value: 'Vải Gấm Đỏ Hoàng Gia · Gấm Xám Lá Phong · Gấm Hoa Cổ Điển (Có khóa kéo)' },
      { label: 'Giá thị trường', value: '1.850.000đ – 2.450.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '1.450.000đ (1m6×2m) | 1.650.000đ (1m8×2m) | 1.950.000đ (Bản dày)' },
      { label: 'Bảo hành', value: 'Bảo hành 5 năm – Miễn phí giao tận nhà' },
    ],
    articleParagraphs: [
      'Vào mỗi mùa cưới hỏi và dịp cuối năm, dòng Đệm Bông Ép Vỏ Gấm Đỏ Hoàng Gia (Mã DGD-TH-01) tại Showroom Tuyến Hoa luôn được các bậc phụ huynh ưu tiên lựa chọn để sắm trọn bộ chăn ga gối đệm + màn khung cho phòng tân hôn.',
      'Song song với màu đỏ truyền thống, kho Tuyến Hoa luôn sẵn các kiện đệm vỏ Gấm Xám Lá Phong và Gấm Hoa Cổ Điển đóng túi khóa kéo Kim Cương ép cứng phẳng lưng, giá chỉ từ 1.450.000đ/tấm.'
    ],
    facebookPostCopy:
      '🌺 ĐỆM BÔNG ÉP GẤM ĐỎ PHÒNG CƯỚI & GẤM XÁM LÁ PHONG – BỀN ĐẸP, PHẲNG LƯNG, GIÁ TẬN GỐC! 🌺\n' +
      '--------------------------------------------\n' +
      '💍 Gia đình chuẩn bị sắm giường cưới hay thay đệm mới cho ông bà, bố mẹ thì tham khảo ngay lô Đệm Gấm Đỏ Hoàng Gia & Gấm Xám Lá Phong vừa về ngập kho Tuyến Hoa nhé!\n' +
      '✅ Ruột bông ép nhiệt trắng tinh khiết, độ cứng tiêu chuẩn nâng đỡ cột sống, không lún võng.\n' +
      '✅ Vỏ gấm dệt dày dặn (Đỏ Hoàng Gia, Xám Lá Phong, Xám Hoa Cổ Điển), đóng túi khóa kéo góc đen logo Kim Cương vàng.\n' +
      '💰 GIÁ BÁN LẺ RẺ NHƯ GIÁ BUÔN:\n' +
      '   • Cỡ 1,6m × 2,0m: Chỉ 1.450.000đ / tấm (Giá TT: 1.850.000đ)\n' +
      '   • Cỡ 1,8m × 2,0m: Chỉ 1.650.000đ / tấm (Giá TT: 2.150.000đ)\n' +
      '   • Bản dày 14cm–18cm: Chỉ 1.950.000đ / tấm (Giá TT: 2.450.000đ)\n' +
      '🎁 Mua combo Đệm + Màn khung 1.000.000đ/bộ được giảm thêm ngay tiền mặt & bao lắp tận giường!\n' +
      '📞 Gọi/Zalo: 0989.655.388 – 0344.727.528 (Showroom Tuyến Hoa)',
  },
  {
    id: 'dem-th-vicuna-luxury-sleep-5-sao-dvc01',
    code: 'DVC-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Cao Cấp TH VICUNA Luxury Sleep Chuẩn 5 Sao – Bọc Góc Da Thêu Kim Cương Sang Trọng (Đủ 03 Ảnh Thực Tế)',
    shortTitle: 'Đệm TH VICUNA Luxury Sleep 5 Sao',
    priceDisplay: '2.150.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 2.850.000đ – 3.550.000đ / tấm',
    marketPriceNote: 'Dòng đệm thương hiệu TH VICUNA Luxury Sleep 5 sao cao cấp nguyên đai nguyên kiện tại kho Tuyến Hoa: Góc đệm bọc da thêu nổi logo kim cương, mặt gấm chần múi lông vũ 3D siêu êm.',
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
    imageUrl: '/assets/aistudio/DVC_TH_01_th_vicuna_5sao_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016629_4373635352308930219_4373635352308930219_d5df01664878568ea8e6066bf3bdb431_97fe4b70.jpg',
      '/assets/aistudio/1792918016605_4373635352308930219_4373635352308930219_ff42bd0c92e3d13ea3f0b5801bac59b4_4b51f748.jpg',
      '/assets/aistudio/1792918016580_4373635352308930219_4373635352308930219_3fd82c5b2fa089ea2e68a07151974250_668f1bab.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/DVC_TH_01_th_vicuna_5sao_bang_gia_hd.jpg': {
        badge: 'Bảng Giá Điền Sẵn · Đệm TH VICUNA Luxury Sleep 5 Sao (2,15Tr – 2,65Tr)',
        caption: 'Banner HD tổng hợp 3 góc chụp thực tế kèm bảng giá niêm yết theo kích thước 1m6×2m (2.150.000đ), 1m8×2m (2.350.000đ) và 2m0×2m2 (2.650.000đ).',
      },
      '/assets/aistudio/1792918016629_4373635352308930219_4373635352308930219_d5df01664878568ea8e6066bf3bdb431_97fe4b70.jpg': {
        badge: 'Ảnh 2/4 · Trọn Vẹn Dáng Đứng Đệm TH VICUNA Luxury Sleep 5 Sao',
        caption: 'Đã căn chỉnh khung 4:3 hiển thị trọn vẹn 4 góc bọc da thêu kim cương vàng, mặt chần múi lông vũ & tem bảng giá xanh lá.',
      },
      '/assets/aistudio/1792918016605_4373635352308930219_4373635352308930219_ff42bd0c92e3d13ea3f0b5801bac59b4_4b51f748.jpg': {
        badge: 'Ảnh 3/4 · Cận Cảnh Tem Góc Vàng Kim "TH VICUNA – 100% Poly Ester"',
        caption: 'Các kiện đệm TH VICUNA đóng túi khóa kéo nguyên đai nguyên kiện, thành túi thêu logo Vương Miện & Kim Cương vàng kim.',
      },
      '/assets/aistudio/1792918016580_4373635352308930219_4373635352308930219_3fd82c5b2fa089ea2e68a07151974250_668f1bab.jpg': {
        badge: 'Ảnh 4/4 · Tổng Kho Hàng Trăm Tấm Đệm TH VICUNA Sẵn Hàng Xuất Xưởng',
        caption: 'Sẵn kho đầy đủ các độ dày 14cm, 18cm, 20cm và kích thước 1m6, 1m8, 2m2 phục vụ đại lý và khách mua lẻ giá gốc.',
      },
    },
    highlightTag: 'Luxury Sleep 5 Sao · Bọc Góc Da Kim Cương',
    summary:
      'Bộ 3 ảnh chụp thực tế đã được chỉnh sáng và đóng khung chuẩn 4:3 cho dòng Đệm TH VICUNA Luxury Sleep 5 Sao tại kho Tuyến Hoa: Nổi bật với tem xanh – vàng kim 5 sao, 4 góc đệm gia cố ốp da thêu kim cương, mặt đệm gấm xám bạc chần bông siêu đàn hồi.',
    visualAnnotations: [
      {
        label: 'Nhãn hiệu "TH VICUNA – Luxury Sleep" 5 Sao chính hãng (Ảnh 1)',
        detail:
          'Thiết kế tem nhãn sang trọng kèm bảng báo giá chính hãng, cam kết tiêu chuẩn chất lượng giấc ngủ khách sạn 5 sao.',
      },
      {
        label: 'Ốp bảo vệ 4 góc đệm bằng da thêu kim cương tinh tế (Ảnh 1 & Ảnh 2)',
        detail:
          'Giúp 4 góc đệm luôn vuông vức, chống sờn rách khi di chuyển hoặc thay ga giường, tạo điểm nhấn đẳng cấp.',
      },
      {
        label: 'Tổng kho số lượng lớn đủ kích thước tại Tuyến Hoa (Ảnh 3)',
        detail:
          'Nhập và phân phối trực tiếp tại tổng kho, giúp khách hàng mua lẻ tiết kiệm từ 700.000đ – 900.000đ mỗi tấm.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DVC-TH-01 (Đệm TH VICUNA Luxury Sleep 5 Sao – Bộ 3 Ảnh)' },
      { label: 'Giá thị trường', value: '2.850.000đ – 3.550.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '2.150.000đ (1m6×2m) | 2.350.000đ (1m8×2m) | 2.650.000đ (2m×2m2)' },
      { label: 'Thiết kế đặc biệt', value: 'Ốp da 4 góc thêu kim cương + Mặt chần bông Luxury êm sâu' },
      { label: 'Bảo hành chính hãng', value: 'Bảo hành 7 năm – Miễn phí vận chuyển tận nhà' },
    ],
    articleParagraphs: [
      'Đệm TH VICUNA Luxury Sleep (Mã DVC-TH-01) là dòng đệm phân khúc cao cấp được nhiều gia đình chọn mua cho phòng ngủ chính và phòng cưới nhờ ngoại hình sang trọng vượt trội: từ tem góc vàng kim, ốp da thêu kim cương ở 4 góc cho đến lớp vải gấm chần nổi họa tiết lông vũ.',
      'Hàng luôn có sẵn số lượng lớn nguyên bọc nilon hút ẩm tại kho Tuyến Hoa để quý khách đến nằm thử trực tiếp và chọn kích thước chuẩn cho chiếc giường của gia đình.'
    ],
    facebookPostCopy:
      '👑 ĐỆM TH VICUNA LUXURY SLEEP 5 SAO – SANG TRỌNG ĐẲNG CẤP CHO PHÒNG NGỦ HIỆN ĐẠI! 👑\n' +
      '--------------------------------------------\n' +
      '✨ Nhìn cận cảnh 4 góc đệm bọc da thêu kim cương và mặt gấm chần nổi của dòng Đệm TH VICUNA Luxury Sleep là thấy ngay độ xịn sò chuẩn khách sạn 5 sao!\n' +
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
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Gấp 2 Chần Múi Kẻ Caro Thành Xám Ghi & Kem Sáng Cỡ Lớn (1,8m × 2,0m × Dày 18cm) – Đủ 02 Phiên Bản Màu Thành Đệm',
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
    imageUrl: '/assets/aistudio/DCR_TH_01_dem_caro_18cm_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792918016653_4373635352308930219_4373635352308930219_4e5893d4d7b1a42ce14f5c79a80e3b74_5615ca60.jpg',
      '/assets/aistudio/1792918016678_4373635352308930219_4373635352308930219_e02b93233d85d3ba3faf920984a28150_e939a0e0.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/DCR_TH_01_dem_caro_18cm_bang_gia_hd.jpg': {
        badge: 'Bảng Giá Điền Sẵn · Đệm Gấp 2 Chần Múi Kẻ Caro Dày 18cm (1,75Tr – 2,25Tr)',
        caption: 'Banner HD so sánh trực tiếp 2 phiên bản màu thành đệm (Xám Ghi Đậm & Kem Sáng) kèm bảng giá theo cỡ 1m6 (1.750.000đ), 1m8 (1.950.000đ) và 2m2 (2.250.000đ).',
      },
      '/assets/aistudio/1792918016653_4373635352308930219_4373635352308930219_4e5893d4d7b1a42ce14f5c79a80e3b74_5615ca60.jpg': {
        badge: 'Ảnh 2/3 · Phiên Bản Thành Vải Bố Màu Xám Ghi Đậm (Dày 18cm)',
        caption: 'Mặt trên chần múi vuông kẻ Caro khỏe khoắn, thành đệm bọc vải bố màu Xám Ghi đậm sạch sẽ, đặt trên kiện phôi 18×2×18.',
      },
      '/assets/aistudio/1792918016678_4373635352308930219_4373635352308930219_e02b93233d85d3ba3faf920984a28150_e939a0e0.jpg': {
        badge: 'Ảnh 3/3 · Phiên Bản Thành Vải Bố Màu Kem Sáng (Thông Số 18×2×18)',
        caption: 'Cùng mặt chần múi vuông kẻ Caro nhưng phối thành vải bố màu Kem Sáng thanh lịch, có tem góc Kim Cương chính hãng.',
      },
    },
    highlightTag: 'Đủ 2 Màu Thành Đệm · Chần Múi Caro 18cm',
    summary:
      'Bộ đôi ảnh thực tế đã căn chỉnh khung 4:3 trọn vẹn dáng đứng chữ A của dòng Đệm Gấp 2 Chần Múi Kẻ Caro dày 18cm tại xưởng Tuyến Hoa: Khách hàng bấm chọn xem trực tiếp giữa bản thành vải bố màu Xám Đậm và màu Kem Sáng.',
    visualAnnotations: [
      {
        label: 'Hệ thống ô chần múi vuông Caro phân bổ lực đồng đều',
        detail:
          'Các đường rãnh chần vuông vức giữ lớp bông và mút mặt trên cố định tuyệt đối, không bị xô lệch sau nhiều năm sử dụng.',
      },
      {
        label: 'Hai phiên bản màu thành đệm: Xám Ghi Đậm (Ảnh 1) & Kem Sáng (Ảnh 2)',
        detail:
          'Thành đệm Xám Ghi cực kỳ sạch khi nhà có trẻ nhỏ; thành đệm Kem Sáng lại hợp với giường gỗ sồi hoặc phòng ngủ tông sáng.',
      },
      {
        label: 'Độ dày thực tế 18cm (Thông số xưởng 18×2×18 ghi rõ dưới kiện đệm)',
        detail:
          'Đặt lên giường không cần dùng thêm chiếu hay topper phụ, độ cao vừa tầm ngồi lên xuống thoải mái.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DCR-TH-01 (Đệm Gấp 2 Chần Múi Kẻ Caro Dày 18cm – Bộ 2 Màu)' },
      { label: 'Màu sắc thành đệm', value: 'Xám Ghi Đậm (Ảnh 1) & Kem Sáng (Ảnh 2)' },
      { label: 'Giá thị trường', value: '2.350.000đ – 2.850.000đ / tấm' },
      { label: 'Giá tại Tuyến Hoa', value: '1.750.000đ (1m6×2m) | 1.950.000đ (1m8×2m) | 2.250.000đ (2m×2m2)' },
      { label: 'Bảo hành', value: 'Bảo hành 5 năm chính hãng tại Showroom Tuyến Hoa' },
    ],
    articleParagraphs: [
      'Bên cạnh mẫu chần múi lông vũ, Xưởng & Showroom Tuyến Hoa còn sản xuất và phân phối dòng Đệm Gấp 2 Chần Múi Kẻ Caro (Mã DCR-TH-01) với thiết kế ô vuông khỏe khoắn, hiện đại, độ dày chuẩn 18cm.',
      'Sản phẩm có sẵn cả hai tông màu thành đệm là Xám Ghi Đậm và Kem Sáng để quý khách dễ dàng bấm chọn đối chiếu ngay trên thẻ sản phẩm.'
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
  // ===========================================================================
  // 00-NEWEST. BỘ 03 BÀI ĐĂNG MỚI NHẤT TỪ LÔ 18 ẢNH VỪA TẢI LÊN:
  //            1. CHIẾU MÂY ĐIỀU HÒA SỢI NGẢI CỨU LÓT LƯỚI 3D NICOLAS NATURE HOME (IMG_5508 -> IMG_5531)
  //            2. RÈM BẠT CUỐN LƯỚI ĐEN GHI XUYÊN SÁNG CHE NẮNG MƯA HIÊN NHÀ (IMG_5470.JPG)
  // ===========================================================================
  // 00-ULTRA-TOP. BỘ 06 BÀI ĐĂNG TỪ 18 ẢNH VỪA TẢI LÊN (ĐÃ CHỈNH SỬA PHÔNG CHỮ BE VIETNAM PRO SẮC NÉT):
  //   1. SR-TH-02: CỬA HÀNG CHĂN GA GỐI ĐỆM NGỌC TUYẾN (IMG_5432 ĐÃ PHỤC CHẾ BIỂN HIỆU) & TÒA NHÀ 2 TẦNG
  //   2. DLX-EH-01: ĐỆM LÒ XO GOLD 3 VIỀN, PILLOW TOP, LUXURY & LÒ XO TÚI EVERHOME (IMG_5413, 5416, 5422, 5415, 5408)
  //   3. DCS-EH-01: NỆM CAO SU 100% THIÊN NHIÊN EVERHOME NGUYÊN KHỐI (IMG_5412, 5410, 5411, 5405)
  //   4. RTO-TH-01: VÁCH RÈM TỔ ONG CỬA VÒM TÂN CỔ ĐIỂN & NGĂN PHÒNG ĐIỀU HÒA (IMG_5433, 5434)
  //   5. RC-TH-01: RÈM CUỐN CHỐNG NẮNG VĂN PHÒNG & CỬA SỔ CẢN SÁNG 100% (IMG_5435, 5436, 5437, 5438)
  //   6. BC-TH-01: BẠT TỰ CUỐN LÒ XO TRÚC XANH, KẺ SỌC, LÁ CỌ & RÈM BẠT LƯỚI (IMG_5454, 5457, 5458, 5470)
  // ===========================================================================
  {
    id: 'toan-canh-showroom-tuyen-hoa-2-tang-sr02',
    code: 'SR-TH-02',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom',
    title: 'Showroom Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến – Tuyến Hoa (IMG_5432 Phông Chữ Biển Hiệu Sắc Nét) & Tòa Nhà 2 Tầng Mặt Đường Lớn',
    shortTitle: 'Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến – Tuyến Hoa (Đủ 5 Góc Chụp)',
    priceDisplay: 'Đệm 1,35Tr · Màn 1Tr',
    marketPriceRange: 'Đại lý cấp 1 Sông Hồng · Everhome · Everon · Kymdan',
    marketPriceNote: 'Đã phục chế & làm nét hoàn toàn biển hiệu Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến (IMG_5432.PNG) bằng phông chữ Be Vietnam Pro sang trọng, rõ nét từng dấu tiếng Việt và số Hotline/Zalo: 0344.727.528.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Chăn Ga Gối Đệm Chính Hãng: Sông Hồng · Everhome · Everon · Kymdan',
        marketPrice: '1.850.000đ – 7.800.000đ',
        storePrice: '1.350.000đ – 5.850.000đ',
        note: 'Chiết khấu trực tiếp 25% – 35% tại Cửa hàng Ngọc Tuyến – Tuyến Hoa',
      },
      {
        sizeOrOption: '2. Màn Khung Inox Cao Cấp (Rộng 1,8m × Dài 2,0m) & Chiếu Mây Điều Hòa',
        marketPrice: '650.000đ – 1.300.000đ / bộ',
        storePrice: '450.000đ – 1.000.000đ / bộ',
        note: 'Bao lắp đặt hoàn thiện tận giường ngủ',
      },
      {
        sizeOrOption: '3. Rèm Vải Cản Nắng 100% · Rèm Tổ Ong Cửa Vòm · Rèm Cuốn · Bạt Tự Cuốn',
        marketPrice: '300.000đ – 1.150.000đ',
        storePrice: '220.000đ – 850.000đ',
        note: 'Miễn phí mang mẫu, khảo sát & lắp đặt tận nơi',
      },
    ],
    numericPrice: 600000,
    unitLabel: 'Đại lý cấp 1 chính hãng – Giao & lắp đặt miễn phí tận nhà',
    standardDimensions: 'Mặt tiền 2 mặt thoáng · Chuyên Sông Hồng · Everhome · Everon · Kymdan',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/SR_NT_01_cua_hang_ngoc_tuyen_typography_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/IMG_5432_ngoc_tuyen_goc_1_hd.jpg',
      '/assets/aistudio/IMG_5432_ngoc_tuyen_goc_2_hd.jpg',
      '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png',
      '/assets/aistudio/SR_TH_02_gian_kinh_tang_1.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/SR_NT_01_cua_hang_ngoc_tuyen_typography_hd.jpg': {
        badge: 'Ảnh 1/5 · Poster HD Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến (Phông Chữ Rõ Nét)',
        caption: 'Bản thiết kế chuẩn phông chữ Be Vietnam Pro sắc nét: Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến – Chuyên Sông Hồng, Everhome, Everon, Kymdan (ĐT/Zalo: 0344.727.528).',
      },
      '/assets/aistudio/IMG_5432_ngoc_tuyen_goc_1_hd.jpg': {
        badge: 'Ảnh 2/5 · Mặt Tiền Góc Ngã Ba Cửa Hàng Ngọc Tuyến (Đã Phục Chế Biển Hiệu)',
        caption: 'Biển hiệu chính diện đã được thay thế hoàn toàn phần chữ AI bị nhòe bằng phông chữ vàng kim – trắng tinh khôi, đọc rõ từng thương hiệu và số điện thoại 0344.727.528.',
      },
      '/assets/aistudio/IMG_5432_ngoc_tuyen_goc_2_hd.jpg': {
        badge: 'Ảnh 3/5 · Không Gian Trưng Bày Đệm Gấp 3 & Chăn Ga Cưới (Góc Phải)',
        caption: 'Hàng chục kiện đệm bông ép gấp 3 Sông Hồng, Everhome, Everon xếp ngay ngắn cùng hệ kệ chăn ga gối lụa rực rỡ bên trong cửa hàng.',
      },
      '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu_6f3f19ae.png': {
        badge: 'Ảnh 4/5 · Toàn Cảnh Mặt Tiền Tòa Nhà 2 Tầng Showroom Tuyến Hoa',
        caption: 'Mặt tiền 3 gian kính lớn nằm ngay trục đường chính, vỉa hè rộng rãi đỗ ô tô tận cửa.',
      },
      '/assets/aistudio/SR_TH_02_gian_kinh_tang_1.jpg': {
        badge: 'Ảnh 5/5 · Cận Cảnh 3 Gian Kính Trưng Bày Giường Đệm & Rèm Vải',
        caption: 'Gian trái trưng bày giường chăn ga gối đệm mẫu; gian phải trưng bày hàng trăm dải phông rèm đủ sắc màu.',
      },
    },
    highlightTag: 'Mới Chỉnh Sửa · Phông Chữ Biển Hiệu Rõ Nét 100%',
    summary:
      'Toàn cảnh Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến (IMG_5432 đã được phục chế biển hiệu sắc nét bằng phông chữ Be Vietnam Pro) và Tòa nhà 2 tầng Showroom Tuyến Hoa: Đại lý cấp 1 phân phối chính hãng Sông Hồng, Everhome, Everon, Kymdan cùng hệ thống Màn Khung, Rèm Cửa, Bạt Che Nắng.',
    visualAnnotations: [
      {
        label: 'Biển hiệu Ngọc Tuyến đã được thiết kế lại phông chữ siêu nét',
        detail: 'Xử lý triệt để lỗi chữ AI bị nhòe trong ảnh gốc IMG_5432, hiển thị rõ nét: SÔNG HỒNG • EVERHOME • EVERON • KYMDAN và Hotline 0344.727.528.',
      },
      {
        label: 'Trưng bày đầy đủ Đệm Gấp 3, Đệm Lò Xo, Đệm Cao Su & Chăn Ga Cưới',
        detail: 'Sẵn hàng trăm tấm đệm chính hãng đủ kích thước 1m6×2m, 1m8×2m, 2m×2m2 giao ngay trong ngày.',
      },
      {
        label: 'Tư vấn tận tâm – Giao & lắp đặt miễn phí tận giường ngủ',
        detail: 'Đội xe bán tải Ngọc Tuyến – Tuyến Hoa vận chuyển miễn phí tận nơi tại Ứng Hòa và các huyện lân cận.',
      },
    ],
    specs: [
      { label: 'Mã bài đăng', value: 'SR-TH-02 (Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến & Showroom 2 Tầng)' },
      { label: 'Thương hiệu phân phối', value: 'Đại lý cấp 1: Sông Hồng · Everhome · Everon · Kymdan · Liên Á' },
      { label: 'Ngành hàng chủ lực', value: 'Chăn Ga Gối Đệm · Màn Khung Inox · Rèm Cửa · Rèm Tổ Ong · Bạt Cuốn' },
      { label: 'Giờ mở cửa', value: '06:30 – 21:00 tất cả các ngày trong tuần' },
      { label: 'Hotline / Zalo', value: '0344.727.528 (Anh Tuyến – Phục vụ tận nơi)' },
    ],
    articleParagraphs: [
      'Bức ảnh mặt tiền Cửa Hàng Chăn Ga Gối Đệm Ngọc Tuyến (IMG_5432.PNG) vừa được chỉnh sửa hậu kỳ chuyên sâu: toàn bộ phần chữ biển hiệu bị nhòe do camera AI đã được tái tạo bằng phông chữ Be Vietnam Pro ExtraBold sắc nét, nổi bật trên nền xanh Hoàng Gia – vàng kim sang trọng.',
      'Tại cửa hàng, quý khách có thể trực tiếp kiểm tra tem mác và độ êm của các dòng đệm bông ép gấp 3 Sông Hồng, đệm lò xo Gold 3 Viền & cao su thiên nhiên Everhome, đệm Everon và Kymdan chính hãng với mức chiết khấu từ 25% đến 35% so với giá niêm yết.',
      'Kết hợp cùng không gian Showroom 2 tầng Tuyến Hoa chuyên Màn Khung, Rèm Vải, Rèm Tổ Ong Cửa Vòm và Bạt Tự Cuốn, chúng tôi cam kết mang tới giải pháp nội thất phòng ngủ và che nắng mưa trọn gói với giá tận gốc.'
    ],
    facebookPostCopy:
      '🏢 [SHOWROOM CHÍNH HÃNG] CỬA HÀNG CHĂN GA GỐI ĐỆM NGỌC TUYẾN – TUYẾN HOA: ĐẠI LÝ CẤP 1 SÔNG HỒNG • EVERHOME • EVERON • KYMDAN!\n' +
      '--------------------------------------------\n' +
      '✨ Kính mời Quý khách ghé thăm Cửa hàng Ngọc Tuyến – Tuyến Hoa (Chợ Cháy, Ứng Hòa, Hà Nội):\n' +
      '🛏️ ĐỆM CHÍNH HÃNG CHIẾT KHẤU 25% – 35%: Đệm bông ép Sông Hồng, Đệm lò xo Gold 3 Viền & Cao su thiên nhiên Everhome, Everon, Kymdan.\n' +
      '👑 MÀN KHUNG INOX CAO CẤP (Rộng 1,8m × Dài 2,0m): Chỉ 1.000.000đ / 1 bộ cả lắp.\n' +
      '🪟 RÈM CỬA – RÈM TỔ ONG CỬA VÒM – RÈM CUỐN – BẠT TỰ CUỐN: Gia công tại xưởng, bao lắp đặt hoàn thiện.\n' +
      '--------------------------------------------\n' +
      '🚛 Miễn phí xe bán tải giao hàng & lắp đặt tận nhà!\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528 (Ngọc Tuyến – Tuyến Hoa)',
  },
  {
    id: 'dem-lo-xo-tui-gold-3-vien-everhome-dlx01',
    code: 'DLX-EH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Lò Xo Gold 3 Viền, Pillow Top, Luxury & Lò Xo Túi Độc Lập Everhome Chính Hãng – Đủ 8 Góc Chụp Chữ Rõ Nét',
    shortTitle: 'Đệm Lò Xo Gold 3 Viền & Pillow Top Everhome (8 Góc Chụp)',
    priceDisplay: '2.850.000đ – 5.250.000đ',
    marketPriceRange: 'Giá thị trường: 3.850.000đ – 6.800.000đ / tấm',
    marketPriceNote: 'Bộ sưu tập đầy đủ 5 mẫu Đệm Lò Xo Everhome mới nhất vừa cập nhật (IMG_5413 Gold 3 Viền, IMG_5416 Pillow Top viền xám than, IMG_5422 Luxury chần kim cương, IMG_5415 Lò xo túi thành nỉ nâu xám & IMG_5408 Kho lõi lò xo túi) đã được đóng khung Typography HD rõ nét từng mức giá.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Đệm Lò Xo Túi Độc Lập Everhome (Cỡ 1,6m × 2,0m × dày 23cm)',
        marketPrice: '3.850.000đ / tấm',
        storePrice: '2.850.000đ / tấm',
        note: 'Có cả bản nguyên tấm và bản cuộn hút chân không tiện lợi',
      },
      {
        sizeOrOption: '2. Đệm Lò Xo Gold 3 Viền Hoàng Gia Everhome (IMG_5413 – Dày 27cm)',
        marketPrice: '6.200.000đ / tấm',
        storePrice: '4.850.000đ / tấm',
        note: 'Vải gấm Đan Mạch chần nổi + Viền xanh Gold 3 đường chỉ đại',
      },
      {
        sizeOrOption: '3. Đệm Lò Xo Pillow Top Viền Xám Than & Bản Luxury (IMG_5416, IMG_5422)',
        marketPrice: '6.800.000đ / tấm',
        storePrice: '5.250.000đ – 5.600.000đ / tấm',
        note: 'Lớp Pillow Top êm ái chuẩn khách sạn 5 sao – Bảo hành 10 năm',
      },
    ],
    numericPrice: 2850000,
    unitLabel: '1 tấm chính hãng Everhome (Miễn phí xe bán tải giao tận giường)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m · 1,8m × 2,0m · 2,0m × 2,2m (Dày 23cm – 30cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/DLX_EH_01_dem_lo_xo_everhome_typography_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/IMG_5413_everhome_gold_3_vien_studio.jpg',
      '/assets/aistudio/IMG_5416_everhome_pillow_top_giuong_trang.jpg',
      '/assets/aistudio/IMG_5422_everhome_luxury_phong_ngu_go.jpg',
      '/assets/aistudio/IMG_5415_everhome_lo_xo_tui_giuong_trang.jpg',
      '/assets/aistudio/IMG_5408_kho_loi_lo_xo_tui_everhome.jpg',
      '/assets/aistudio/IMG_5406_everhome_lo_xo_tui_cuon.jpg',
      '/assets/aistudio/IMG_5407_tem_everhome_lo_xo_tui.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/DLX_EH_01_dem_lo_xo_everhome_typography_hd.jpg': {
        badge: 'Ảnh 1/8 · Bảng Báo Giá 4 Dòng Đệm Lò Xo Everhome Chính Hãng (Typography HD)',
        caption: 'Tổng hợp 4 phiên bản cao cấp nhất: Gold 3 Viền (4,85Tr), Pillow Top Viền Xám (5,25Tr), Luxury Chần Kim Cương (5,60Tr) và Lò Xo Túi Độc Lập.',
      },
      '/assets/aistudio/IMG_5413_everhome_gold_3_vien_studio.jpg': {
        badge: 'Ảnh 2/8 · Đệm Lò Xo Everhome Gold 3 Viền Cao Cấp (IMG_5413)',
        caption: 'Thiết kế 3 đường viền bo tròn chắc chắn, thành đệm dệt lượn sóng thêu logo vàng kim "GOLD – everhome", bảo hành chính hãng 10 năm.',
      },
      '/assets/aistudio/IMG_5416_everhome_pillow_top_giuong_trang.jpg': {
        badge: 'Ảnh 3/8 · Đệm Lò Xo Everhome Pillow Top Viền Xám Than Trên Giường Trắng (IMG_5416)',
        caption: 'Ảnh chụp thực tế tại phòng mẫu: Thành đệm xám than kẻ ô vuông thêu logo cam-xanh Everhome sắc nét, mặt trên phủ lớp Pillow Top trắng tinh khôi.',
      },
      '/assets/aistudio/IMG_5422_everhome_luxury_phong_ngu_go.jpg': {
        badge: 'Ảnh 4/8 · Đệm Lò Xo Túi Độc Lập Everhome Luxury Phòng Ngủ Ốp Gỗ (IMG_5422)',
        caption: 'Bề mặt chần gấm kim cương dày dặn kết hợp thành đệm thêu vương miện vàng kim sang trọng bậc nhất cho phòng ngủ Master.',
      },
      '/assets/aistudio/IMG_5415_everhome_lo_xo_tui_giuong_trang.jpg': {
        badge: 'Ảnh 5/8 · Đệm Lò Xo Túi Độc Lập Thành Nỉ Nâu Xám Múi Dọc (IMG_5415)',
        caption: 'Mặt đệm chần gấm trắng họa tiết lục giác tổ ong êm ái, thành đệm bọc nỉ nâu xám chần múi dọc hiện đại đặt trên giường tân cổ điển.',
      },
      '/assets/aistudio/IMG_5408_kho_loi_lo_xo_tui_everhome.jpg': {
        badge: 'Ảnh 6/8 · Kho Lõi Lò Xo Túi Độc Lập & Đệm Chần Gấm Tại Nhà Máy (IMG_5408)',
        caption: 'Cận cảnh hàng nghìn con lò xo túi độc lập bọc vải không dệt trắng tinh khiết xếp tầng tại kho nhà máy trước khi bọc gấm.',
      },
      '/assets/aistudio/IMG_5406_everhome_lo_xo_tui_cuon.jpg': {
        badge: 'Ảnh 7/8 · Lô Đệm Lò Xo Túi Độc Lập Cuộn Tròn Hút Chân Không (IMG_5406)',
        caption: 'Công nghệ ép hút chân không cuộn gọn (Roll-pack) dễ dàng vận chuyển qua cầu thang nhỏ hẹp.',
      },
      '/assets/aistudio/IMG_5407_tem_everhome_lo_xo_tui.jpg': {
        badge: 'Ảnh 8/8 · Cận Cảnh Tem Chính Hãng Everhome Lò Xo Túi (IMG_5407)',
        caption: 'Tem cam chính hãng "everhome ĐỆM LÒ XO TÚI - Hạnh phúc bền lâu" có mã QR xác thực xuất xứ.',
      },
    },
    highlightTag: 'Chính Hãng Everhome · Đủ 8 Góc Chụp Chữ Rõ Nét',
    summary:
      'Trọn bộ 5 dòng Đệm Lò Xo Everhome chính hãng (Gold 3 Viền, Pillow Top viền xám than, Luxury chần kim cương, Lò xo túi thành nỉ múi dọc & Kho lõi lò xo túi độc lập) đã được biên tập phông chữ Be Vietnam Pro sắc nét kèm bảng giá ưu đãi chiết khấu 25%–30%.',
    visualAnnotations: [
      {
        label: 'Đầy đủ 4 phân khúc: Lò Xo Túi (2,85Tr) · Gold 3 Viền (4,85Tr) · Pillow Top (5,25Tr) · Luxury (5,60Tr)',
        detail: 'Mỗi bức ảnh đều được gắn nhãn tên dòng đệm, cấu tạo và mức giá niêm yết rõ ràng bằng phông chữ không chân sắc nét.',
      },
      {
        label: 'Hệ thống lõi lò xo túi độc lập kháng gỉ (IMG_5408)',
        detail: 'Mỗi con lò xo thép cacbon được bọc trong túi vải riêng biệt giúp nâng đỡ cột sống 5 vùng, trở mình hoàn toàn không gây tiếng động.',
      },
      {
        label: 'Bảo hành chính hãng 10 năm – Miễn phí giao tận giường ngủ',
        detail: 'Cam kết hàng chính hãng Everhome 100%, đền gấp 10 lần nếu phát hiện hàng nhái.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DLX-EH-01 (Đệm Lò Xo Gold 3 Viền, Pillow Top & Lò Xo Túi Everhome)' },
      { label: 'Thương hiệu', value: 'Everhome Chính Hãng – Đại lý cấp 1 Ngọc Tuyến – Tuyến Hoa' },
      { label: 'Giá Lò Xo Túi 1,6m × 2,0m', value: '2.850.000đ / tấm (Giá thị trường: 3.850.000đ)' },
      { label: 'Giá Bản Gold 3 Viền (IMG_5413)', value: '4.850.000đ / tấm (Dày 27cm chuẩn khách sạn 5 sao)' },
      { label: 'Giá Bản Pillow Top & Luxury', value: '5.250.000đ – 5.600.000đ / tấm (IMG_5416 & IMG_5422)' },
      { label: 'Chế độ bảo hành', value: 'Bảo hành chính hãng Everhome 10 năm không xẹp lún' },
    ],
    articleParagraphs: [
      'Bộ 05 hình ảnh thực tế vừa tải lên (IMG_5413, IMG_5416, IMG_5422, IMG_5415 và IMG_5408) giới thiệu trọn vẹn các phân khúc Đệm Lò Xo cao cấp nhất của thương hiệu Everhome đang có sẵn tại Showroom Ngọc Tuyến – Tuyến Hoa.',
      'Từ mẫu Đệm Lò Xo Gold 3 Viền màu xanh ghi sang trọng (IMG_5413), mẫu Đệm Lò Xo Pillow Top thành xám than thêu logo cam nổi bật trên giường trắng tân cổ điển (IMG_5416), mẫu Đệm Everhome Luxury chần kim cương trong phòng ngủ ốp gỗ (IMG_5422), cho tới cận cảnh kho lõi lò xo túi độc lập trắng tinh khiết tại nhà máy (IMG_5408) – tất cả đều được gắn chú thích phông chữ Be Vietnam Pro sắc nét.',
      'Quý khách đặt mua tại Tổng Kho Tuyến Hoa được hưởng mức giá chiết khấu trực tiếp 25%–30%: chỉ từ 2.850.000đ/tấm cho dòng lò xo túi tiêu chuẩn và 4.850.000đ – 5.600.000đ/tấm cho các dòng Gold 3 Viền, Pillow Top và Luxury.'
    ],
    facebookPostCopy:
      '🛏️ [TỔNG KHO ĐỆM EVERHOME TUYẾN HOA] ĐỆM LÒ XO GOLD 3 VIỀN, PILLOW TOP & LÒ XO TÚI ĐỘC LẬP CHÍNH HÃNG!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.850.000đ – 6.800.000đ / tấm\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA (CHIẾT KHẤU NGAY 25% – 30%):\n' +
      '   👉 Đệm Lò Xo Túi Độc Lập Everhome (1,6m × 2,0m): Chỉ 2.850.000đ / tấm\n' +
      '   👉 Đệm Lò Xo Gold 3 Viền Everhome (IMG_5413): Chỉ 4.850.000đ / tấm\n' +
      '   👉 Đệm Lò Xo Pillow Top Viền Xám Than (IMG_5416): Chỉ 5.250.000đ / tấm\n' +
      '   👉 Đệm Lò Xo Luxury Chần Kim Cương (IMG_5422): Chỉ 5.600.000đ / tấm\n' +
      '--------------------------------------------\n' +
      '📌 ƯU ĐIỂM VƯỢT TRỘI:\n' +
      '✔️ Hệ lõi lò xo túi độc lập êm ái tuyệt đối, trở mình không rung lắc, nâng đỡ cột sống 5 vùng.\n' +
      '✔️ Lớp mặt Pillow Top & vải gấm Đan Mạch kháng khuẩn, mát mẻ mùa hè – ấm áp mùa đông.\n' +
      '✔️ Cam kết chính hãng Everhome 100% – Bảo hành 10 năm tận nhà!\n' +
      '📞 Gọi/Zalo giao ngay tận giường: 0344.727.528 (Showroom Ngọc Tuyến – Tuyến Hoa)',
  },
  {
    id: 'nem-cao-su-100-thien-nhien-everhome-dcs01',
    code: 'DCS-EH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Nệm Cao Su 100% Thiên Nhiên Everhome Nguyên Khối – Lỗ Tròn Thoáng Khí & Chân Vuông Chịu Lực (Đủ 5 Góc Chụp Chữ Rõ Nét)',
    shortTitle: 'Nệm Cao Su 100% Thiên Nhiên Everhome (5 Góc Chụp)',
    priceDisplay: '4.850.000đ – 5.850.000đ',
    marketPriceRange: 'Giá thị trường: 6.500.000đ – 8.200.000đ / tấm',
    marketPriceNote: 'Trọn bộ 03 ảnh thực tế chụp tại kho phôi Nệm Cao Su 100% Thiên Nhiên Everhome vừa tải lên (IMG_5412 lộ rõ mặt lỗ tròn & chân vuông, IMG_5410 kiện 7 tấm phôi trắng sữa, IMG_5411 kho phôi bọc nilon) đã được đóng khung Typography HD sắc nét.',
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
        sizeOrOption: '3. Nệm Cao Su Thiên Nhiên Everhome 1,8m × 2,0m (Dày 10cm – 15cm)',
        marketPrice: '7.800.000đ – 8.500.000đ / tấm',
        storePrice: '5.450.000đ – 5.850.000đ / tấm',
        note: 'Nâng đỡ 5 vùng cơ thể, chống đau mỏi lưng chuẩn y khoa',
      },
    ],
    numericPrice: 4850000,
    unitLabel: '1 tấm cao su thiên nhiên nguyên khối (Tặng kèm 2 gối cao su)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m · 1,8m × 2,0m · Độ dày 5cm / 10cm / 15cm',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/DCS_EH_01_nem_cao_su_everhome_typography_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/IMG_5412_phoi_cao_su_lo_vuong_hd.jpg',
      '/assets/aistudio/IMG_5410_kien_7_tam_cao_su_hd.jpg',
      '/assets/aistudio/IMG_5411_kho_phoi_cao_su_boc_nilon_hd.jpg',
      '/assets/aistudio/IMG_5405_everhome_cao_su_chan_vuong.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/DCS_EH_01_nem_cao_su_everhome_typography_hd.jpg': {
        badge: 'Ảnh 1/5 · Bảng Báo Giá & Cấu Tạo Nệm Cao Su 100% Thiên Nhiên Everhome (HD)',
        caption: 'Thiết kế 4 khung ảnh sắc nét với phông chữ Be Vietnam Pro rõ ràng: Phôi cao su trắng sữa nguyên khối, cấu trúc lỗ tròn – chân vuông và giá ưu đãi tại Tuyến Hoa.',
      },
      '/assets/aistudio/IMG_5412_phoi_cao_su_lo_vuong_hd.jpg': {
        badge: 'Ảnh 2/5 · Thực Tế 3 Tấm Phôi Cao Su Lộ Rõ Mặt Lỗ Tròn & Chân Vuông (IMG_5412)',
        caption: 'Nhìn trực diện cả mặt trên hàng nghìn lỗ thông hơi tròn nhỏ và mặt đáy cấu trúc chân vuông chịu lực vững chãi (Đã gắn nhãn chữ sắc nét).',
      },
      '/assets/aistudio/IMG_5410_kien_7_tam_cao_su_hd.jpg': {
        badge: 'Ảnh 3/5 · Kiện 7 Tấm Phôi Nệm Cao Su Trắng Sữa Nguyên Khối (IMG_5410)',
        caption: 'Phôi cao su thiên nhiên màu trắng sữa tinh khiết dày 10cm–15cm, khử mùi tuyệt đối, bọc nilon chống bụi nguyên kiện.',
      },
      '/assets/aistudio/IMG_5411_kho_phoi_cao_su_boc_nilon_hd.jpg': {
        badge: 'Ảnh 4/5 · Kho Phôi Nệm Cao Su Đóng Gói Nilon Tiêu Chuẩn Tại Xưởng (IMG_5411)',
        caption: 'Sẵn hàng số lượng lớn đủ kích thước 1m6×2m, 1m8×2m, 2m×2m2 tại Tổng Kho Đệm Tuyến Hoa, giao ngay trong ngày.',
      },
      '/assets/aistudio/IMG_5405_everhome_cao_su_chan_vuong.jpg': {
        badge: 'Ảnh 5/5 · Cận Cảnh Logo Dập Nổi EVERHOME 100% Thiên Nhiên (IMG_5405)',
        caption: 'Thành nệm dập nổi chữ EVERHOME chính hãng sắc nét, cam kết 15–20 năm không xẹp lún.',
      },
    },
    highlightTag: '100% Cao Su Thiên Nhiên · Đủ 5 Ảnh Chữ Sắc Nét',
    summary:
      'Nệm Cao Su 100% Thiên Nhiên Everhome nguyên khối tại kho Tuyến Hoa (IMG_5412, IMG_5410, IMG_5411, IMG_5405): Mặt trên hàng nghìn lỗ thông hơi tròn đối lưu khí, mặt dưới cấu trúc chân vuông vững chãi nâng đỡ cột sống hoàn hảo suốt 15–20 năm.',
    visualAnnotations: [
      {
        label: '100% mủ cao su thiên nhiên nguyên khối màu trắng sữa (IMG_5410, IMG_5412)',
        detail: 'Độ đàn hồi tự nhiên bền bỉ 15–20 năm không xẹp lún, nâng đỡ trọn vẹn 5 vùng cơ thể từ đầu đến chân.',
      },
      {
        label: 'Hệ thống lỗ thông hơi tròn mặt trên & chân vuông mặt dưới',
        detail: 'Lưu thông không khí liên tục, chống hầm nóng lưng vào mùa hè và giữ ấm áp vào mùa đông.',
      },
      {
        label: 'Giá gốc tại Tổng Kho Tuyến Hoa tiết kiệm gần 2 triệu/tấm',
        detail: 'Cỡ 1,6m×2m×10cm chỉ 4.850.000đ; cỡ 1,8m×2m×10cm–15cm chỉ 5.450.000đ – 5.850.000đ, tặng kèm 2 gối cao su non.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DCS-EH-01 (Nệm Cao Su 100% Thiên Nhiên Everhome)' },
      { label: 'Chất liệu cốt lõi', value: '100% Cao su thiên nhiên nguyên khối kháng khuẩn khử mùi' },
      { label: 'Giá cỡ 1,6m × 2,0m × 10cm', value: '4.850.000đ / tấm (Thị trường: 6.500.000đ/tấm)' },
      { label: 'Giá cỡ 1,8m × 2,0m × 10cm–15cm', value: '5.450.000đ – 5.850.000đ / tấm (Thị trường: 7.800.000đ)' },
      { label: 'Quà tặng kèm', value: 'Tặng ngay 02 ruột gối cao su non + Miễn phí giao tận phòng' },
      { label: 'Bảo hành chính hãng', value: '10 Năm không xẹp lún (Độ bền thực tế 15–20 năm)' },
    ],
    articleParagraphs: [
      'Nệm Cao Su 100% Thiên Nhiên Everhome (Mã DCS-EH-01) được sản xuất từ nguồn mủ cao su tự nhiên tinh khiết qua dây chuyền xử lý kháng khuẩn và khử mùi hiện đại, mang lại giấc ngủ êm sâu và hỗ trợ trị liệu đau mỏi lưng hiệu quả.',
      'Qua bộ 03 ảnh thực tế chụp trực tiếp tại kho vừa được chỉnh sáng và gắn chú thích phông chữ sắc nét (IMG_5412, IMG_5410, IMG_5411), quý khách có thể quan sát tận mắt chất phôi cao su trắng sữa nguyên khối cùng hệ thống lỗ thoáng khí tròn mặt trên và chân đế vuông chịu lực mặt dưới.',
      'Showroom Tuyến Hoa cam kết phân phối chính hãng với giá tận kho chỉ từ 4.850.000đ – 5.850.000đ/tấm, tặng kèm 02 gối cao su non và bảo hành 10 năm tận nhà.'
    ],
    facebookPostCopy:
      '🌿 [KHO NỆM CAO SU TUYẾN HOA] NỆM CAO SU 100% THIÊN NHIÊN EVERHOME NGUYÊN KHỐI – BẢO HÀNH 10 NĂM!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 6.500.000đ – 8.200.000đ / tấm\n' +
      '🔥 GIÁ GỐC TẠI KHO TUYẾN HOA (TẶNG KÈM 2 GỐI CAO SU NON):\n' +
      '   👉 Cỡ 1,6m × 2,0m (Dày 5cm): Chỉ 3.650.000đ / tấm\n' +
      '   👉 Cỡ 1,6m × 2,0m (Dày 10cm): Chỉ 4.850.000đ / tấm\n' +
      '   👉 Cỡ 1,8m × 2,0m (Dày 10cm – 15cm): Chỉ 5.450.000đ – 5.850.000đ / tấm\n' +
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
    categoryName: 'Rèm · Bạt · Showroom',
    title: 'Vách Rèm Tổ Ong Cửa Vòm Tân Cổ Điển Nan Quạt Xòe (IMG_5433) & Vách Ngăn Phòng Điều Hòa (IMG_5434) – Chữ Rõ Nét',
    shortTitle: 'Vách Rèm Tổ Ong Cửa Vòm & Ngăn Phòng (3 Góc Chụp)',
    priceDisplay: '650k – 950k / m²',
    marketPriceRange: 'Giá thị trường: 880.000đ – 1.250.000đ / m²',
    marketPriceNote: 'Trọn bộ 02 công trình thực tế Vách Rèm Tổ Ong vừa tải lên (IMG_5433 hệ cửa vòm nan quạt xòe màu nâu cà phê & IMG_5434 bộ đôi vách ngăn phòng khách có điều hòa) đã được chỉnh sáng và gắn chú thích phông chữ Be Vietnam Pro sắc nét.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Vách Rèm Tổ Ong Ngăn Phòng Khách / Cầu Thang (Hệ kéo ngang)',
        marketPrice: '880.000đ / m²',
        storePrice: '650.000đ – 850.000đ / m²',
        note: 'Lõi giấy bạc 2 lớp giữ nhiệt điều hòa 98%',
      },
      {
        sizeOrOption: '2. Vách Rèm Tổ Ong Lắp Cửa Vòm Tân Cổ Điển (Vòm nan quạt IMG_5433)',
        marketPrice: '1.250.000đ / m²',
        storePrice: '750.000đ – 950.000đ / m²',
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
    imageUrl: '/assets/aistudio/RTO_TH_01_vach_to_ong_cua_vom_typography_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/IMG_5433_vach_to_ong_cua_vom_nan_quat.jpg',
      '/assets/aistudio/IMG_5434_vach_to_ong_doi_phong_khach.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/RTO_TH_01_vach_to_ong_cua_vom_typography_hd.jpg': {
        badge: 'Ảnh 1/3 · Bảng Giá Vách Rèm Tổ Ong Cửa Vòm & Ngăn Phòng Điều Hòa (HD)',
        caption: 'So sánh trực quan 2 mẫu thi công thực tế: Cửa vòm nan quạt xòe (IMG_5433) và Bộ đôi vách rèm tổ ong phòng khách lắp điều hòa (IMG_5434).',
      },
      '/assets/aistudio/IMG_5433_vach_to_ong_cua_vom_nan_quat.jpg': {
        badge: 'Ảnh 2/3 · Thực Tế Vách Rèm Tổ Ong Cửa Vòm Kết Hợp Nan Quạt Xòe (IMG_5433)',
        caption: 'Phần vòm cong phía trên tạo hình nan quạt xòe sang trọng, phần dưới là cửa kéo ngang 2 cánh màu nâu cà phê khít tuyệt đối.',
      },
      '/assets/aistudio/IMG_5434_vach_to_ong_doi_phong_khach.jpg': {
        badge: 'Ảnh 3/3 · Bộ Đôi Vách Rèm Tổ Ong Lắp Ô Kính Vòm Phòng Khách (IMG_5434)',
        caption: 'Hai bộ vách rèm tổ ong lắp đồng bộ dưới ô kính vòm trong phòng khách có điều hòa, lõi tráng bạc cản nhiệt và giữ lạnh 98%.',
      },
    },
    highlightTag: 'Mới Chỉnh Sửa · Cửa Vòm Nan Quạt IMG_5433 & 5434',
    summary:
      'Thi công thực tế Vách Rèm Tổ Ong ngăn lạnh điều hòa cho hệ cửa vòm tân cổ điển kết hợp nan quạt xòe (IMG_5433) và bộ đôi vách ngăn phòng khách lắp dưới ô kính vòm hiện đại (IMG_5434) – đã đóng khung Typography HD sắc nét.',
    visualAnnotations: [
      {
        label: 'Thiết kế cửa vòm nan quạt xòe kết hợp vách kéo 2 cánh (IMG_5433)',
        detail: 'Phần vòm cong phía trên được xếp nan tổ ong hình rẻ quạt sang trọng, phần dưới kéo mở 2 cánh nhẹ nhàng.',
      },
      {
        label: 'Lõi tráng bạc 2 lớp giữ hơi lạnh điều hòa 98% (IMG_5434)',
        detail: 'Ngăn hoàn toàn hơi lạnh thất thoát sang phòng bếp hoặc cầu thang, giúp điều hòa làm mát nhanh và tiết kiệm 40% điện.',
      },
      {
        label: 'Xếp gọn sát tường chỉ 10cm – Không vướng ray sàn',
        detail: 'Khi không bật điều hòa, đẩy xếp gọn vào khung nhôm hai bên trả lại lối đi rộng thoáng hoàn toàn.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'RTO-TH-01 (Vách Rèm Tổ Ong Cửa Vòm & Phòng Khách)' },
      { label: 'Đơn giá vách phẳng', value: '650.000đ – 850.000đ / m² cả lắp (Giá thị trường: 880.000đ/m²)' },
      { label: 'Đơn giá hệ cửa vòm cong', value: '750.000đ – 950.000đ / m² cả lắp (Giá thị trường: 1.250.000đ/m²)' },
      { label: 'Cấu tạo vải rèm', value: 'Vải không dệt ép nếp tổ ong 26mm + Lõi tráng bạc cách nhiệt' },
      { label: 'Màu sắc khung & rèm', value: 'Khung nhôm nâu cafe, ghi xám, trắng sứ, vân gỗ | Vải kem, nâu, ghi' },
      { label: 'Bảo hành kỹ thuật', value: '3 Năm tận nhà bởi Xưởng Nhôm Kính & Rèm Tuyến Hoa' },
    ],
    articleParagraphs: [
      'Bộ đôi hình ảnh thực tế IMG_5433.JPG và IMG_5434.JPG vừa cập nhật minh họa rõ nét kỹ thuật gia công Vách Rèm Tổ Ong Cửa Vòm Tân Cổ Điển bậc thầy của Xưởng Rèm Tuyến Hoa.',
      'Ở công trình IMG_5433, ô cửa đi vòm cong được chia làm 2 phần tinh xảo: nửa vòm phía trên xếp nan tổ ong mở xòe hình rẻ quạt cố định khít sát vòm tường, nửa dưới là hệ vách kéo ngang 2 cánh khung nhôm nâu cà phê. Ở công trình IMG_5434, hai ô cửa vòm lớn trong phòng khách lắp máy lạnh được trang bị đồng bộ 2 bộ vách rèm tổ ong cản nắng và giữ nhiệt điều hòa tuyệt đối.',
      'Toàn bộ hình ảnh đã được gắn chú thích phông chữ Be Vietnam Pro rõ nét kèm đơn giá trọn gói chỉ từ 650.000đ – 950.000đ/m² bao gồm cả khảo sát và lắp đặt tận nhà.'
    ],
    facebookPostCopy:
      '🏛️ [SIÊU PHẨM CỬA VÒM & NGĂN PHÒNG] VÁCH RÈM TỔ ONG NGĂN LẠNH ĐIỀU HÒA TUYẾN HOA (IMG_5433 & IMG_5434)!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 880.000đ – 1.250.000đ / m²\n' +
      '🔥 GIÁ XUẤT XƯỞNG TUYẾN HOA (BAO ĐO ĐẠC & LẮP ĐẶT TẬN NHÀ):\n' +
      '   👉 Vách rèm tổ ong ngăn phòng khách / cầu thang: Chỉ 650.000đ – 850.000đ / m²\n' +
      '   👉 Vách rèm tổ ong uốn Cửa Vòm Nan Quạt Xòe: Chỉ 750.000đ – 950.000đ / m²\n' +
      '--------------------------------------------\n' +
      '✅ Lõi tráng bạc 2 lớp giữ nhiệt điều hòa 98%, tiết kiệm 40% tiền điện mùa hè.\n' +
      '✅ Kéo ra thành vách ngăn sang trọng – Đẩy xếp gọn sát tường chỉ 10cm, không vướng lối đi!\n' +
      '📞 Gọi/Zalo Anh Tuyến khảo sát miễn phí: 0344.727.528!',
  },
  {
    id: 'rem-cuon-chong-nang-van-phong-gia-dinh-rc01',
    code: 'RC-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom',
    title: 'Rèm Cuốn Chống Nắng Văn Phòng, Showroom & Cửa Sổ Gia Đình Cản Sáng 100% (Đủ 5 Ảnh Chữ Sắc Nét: Ghi Xám, Kem Vàng, Xanh Ghi, Kem Be)',
    shortTitle: 'Rèm Cuốn Chống Nắng Văn Phòng & Gia Đình (5 Góc Chụp)',
    priceDisplay: '280.000đ / m²',
    marketPriceRange: 'Giá thị trường: 380.000đ – 450.000đ / m²',
    marketPriceNote: 'Trọn bộ 04 công trình Rèm Cuốn Chống Nắng 100% vừa tải lên (IMG_5435 vách kính quầy bar màu ghi xám, IMG_5436 cửa sổ màu xanh ghi, IMG_5437 văn phòng vách kính góc màu kem vàng, IMG_5438 phòng làm việc A5 màu kem be) đã được gắn chú thích phông chữ Be Vietnam Pro sắc nét.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Cuốn Trơn Cản Sáng 100% (Ghi Xám / Kem Vàng / Xanh Ghi / Kem Be)',
        marketPrice: '380.000đ / m²',
        storePrice: '280.000đ / m²',
        note: 'Vải phủ nhựa PVC chống nắng & tia UV tuyệt đối – Cả lắp đặt',
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
    unitLabel: '1 m² hoàn thiện cả phụ kiện ống nhôm & công lắp đặt',
    standardDimensions: 'May đo lọt lòng khuôn cửa sổ hoặc phủ bì vách kính văn phòng lớn',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/RC_TH_01_rem_cuon_van_phong_typography_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/IMG_5435_rem_cuon_ghi_xam_quay_bar.jpg',
      '/assets/aistudio/IMG_5437_rem_cuon_kem_vang_vach_kinh.jpg',
      '/assets/aistudio/IMG_5436_rem_cuon_xanh_ghi_cua_so.jpg',
      '/assets/aistudio/IMG_5438_rem_cuon_kem_be_van_phong_a5.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/RC_TH_01_rem_cuon_van_phong_typography_hd.jpg': {
        badge: 'Ảnh 1/5 · Bảng Báo Giá 4 Tông Màu Rèm Cuốn Chống Nắng 100% (Typography HD)',
        caption: 'Tổng hợp 4 công trình thực tế với phông chữ Be Vietnam Pro sắc nét: Ghi xám hiện đại, Kem vàng ấm áp, Xanh dương ghi và Kem be trang nhã (Đồng giá 280.000đ/m² cả lắp).',
      },
      '/assets/aistudio/IMG_5435_rem_cuon_ghi_xam_quay_bar.jpg': {
        badge: 'Ảnh 2/5 · Dãy Rèm Cuốn Màu Ghi Xám Lắp Vách Kính Dài Quầy Bar (IMG_5435)',
        caption: 'Hệ 6 tấm rèm cuốn màu ghi xám buông phẳng phiu dọc hành lang kính lớn, cản nắng 100% và làm dịu mát toàn bộ không gian.',
      },
      '/assets/aistudio/IMG_5437_rem_cuon_kem_vang_vach_kinh.jpg': {
        badge: 'Ảnh 3/5 · Hệ Rèm Cuốn Màu Kem Vàng Lắp Full Vách Kính Góc Văn Phòng (IMG_5437)',
        caption: 'Lắp đồng bộ 8 tấm rèm cuốn màu kem vàng dưới trần thạch cao đèn LED hắt sáng, cách nhiệt giảm tải cho điều hòa âm trần.',
      },
      '/assets/aistudio/IMG_5436_rem_cuon_xanh_ghi_cua_so.jpg': {
        badge: 'Ảnh 4/5 · Rèm Cuốn Màu Xanh Dương Ghi Lắp Lọt Lòng Cửa Sổ (IMG_5436)',
        caption: 'Thiết kế lắp gọn trong hốc tường cửa sổ 2 cánh, dây kéo hạt nhựa trợ lực nhẹ nhàng, không chiếm diện tích phòng.',
      },
      '/assets/aistudio/IMG_5438_rem_cuon_kem_be_van_phong_a5.jpg': {
        badge: 'Ảnh 5/5 · Rèm Cuốn Màu Kem Be Phòng Hành Chính Tủ Hồ Sơ A5 (IMG_5438)',
        caption: 'Chống chói màn hình máy tính và máy in tuyệt đối, bề mặt vải phủ nhựa chống bám bụi dễ lau chùi.',
      },
    },
    highlightTag: 'Trọn Gói 280.000đ/m² · Đủ 5 Ảnh Chữ Rõ Nét',
    summary:
      'Bộ sưu tập 04 công trình Rèm Cuốn Chống Nắng 100% vừa tải lên (IMG_5435 màu ghi xám, IMG_5437 màu kem vàng, IMG_5436 màu xanh dương ghi & IMG_5438 màu kem be) đã được chỉnh sáng và đóng khung Typography HD sắc nét.',
    visualAnnotations: [
      {
        label: 'Cản nắng & cách nhiệt 100% cho vách kính lớn (IMG_5435, IMG_5437)',
        detail: 'Vải Polyester tráng nhựa PVC cản 100% ánh nắng chói chang, giúp màn hình máy tính không bị lóa và giảm tải cho điều hòa.',
      },
      {
        label: 'Lắp gọn lọt lòng cửa sổ – Không chiếm diện tích (IMG_5436, IMG_5438)',
        detail: 'Cuộn gọn hoàn toàn lên ống nhôm phía trên khi cần mở rộng tầm nhìn, cực kỳ gọn gàng cho bàn làm việc và tủ hồ sơ.',
      },
      {
        label: 'Giá xuất xưởng chỉ 280.000đ/m² bao gồm cả công lắp đặt',
        detail: 'Đầy đủ bảng màu Ghi xám, Kem vàng, Xanh dương ghi, Kem be; độ bền cơ học trên 10 năm.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'RC-TH-01 (Rèm Cuốn Chống Nắng Văn Phòng & Gia Đình)' },
      { label: 'Đơn giá rèm cuốn trơn', value: '280.000đ / m² cả lắp (Giá thị trường: 380.000đ/m²)' },
      { label: 'Đơn giá rèm cuốn lưới', value: '320.000đ / m² cả lắp (Giá thị trường: 450.000đ/m²)' },
      { label: 'Chất liệu vải', value: '75% PVC + 25% Polyester chống nắng 100%, chống bám bụi & chống ẩm' },
      { label: 'Màu sắc thực tế', value: 'Ghi xám (IMG_5435), Xanh ghi (IMG_5436), Kem vàng (IMG_5437), Kem be (IMG_5438)' },
      { label: 'Bảo hành phụ kiện', value: '3 Năm cho ống nhôm, dây kéo hạt nhựa cường lực và đầu khóa bi' },
    ],
    articleParagraphs: [
      'Bốn bức ảnh công trình thực tế vừa tải lên (IMG_5435, IMG_5436, IMG_5437 và IMG_5438) giới thiệu trọn bộ 4 tông màu Rèm Cuốn Chống Nắng 100% được ưa chuộng nhất tại Xưởng Rèm Tuyến Hoa.',
      'Từ dãy rèm cuốn màu ghi xám hiện đại lắp dọc vách kính quầy bar (IMG_5435), hệ rèm cuốn màu kem vàng lắp full vách kính góc văn phòng có điều hòa âm trần (IMG_5437), cho tới các bộ rèm cuốn lắp lọt lòng cửa sổ phòng làm việc màu xanh ghi (IMG_5436) và kem be (IMG_5438) – mỗi bức ảnh đều đã được gắn nhãn thông số và đơn giá bằng phông chữ Be Vietnam Pro sắc nét.',
      'Chỉ với 280.000đ/m² trọn gói bao gồm cả ống nhôm hợp kim, bộ đầu kéo bi trợ lực và công thợ lắp đặt tận nơi, quý khách đã sở hữu giải pháp chống nắng gọn gàng, bền bỉ trên 10 năm.'
    ],
    facebookPostCopy:
      '🪟 [XƯỞNG RÈM CUỐN TUYẾN HOA] RÈM CUỐN CHỐNG NẮNG 100% CHO VĂN PHÒNG, SHOWROOM & GIA ĐÌNH (IMG_5435 – IMG_5438)!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 380.000đ – 450.000đ / m²\n' +
      '🔥 GIÁ TẠI XƯỞNG TUYẾN HOA: CHỈ 280.000Đ / M² (BAO LẮP ĐẶT HOÀN THIỆN)!\n' +
      '--------------------------------------------\n' +
      '✅ Cản nắng – Cản nhiệt 100%, chống chói màn hình máy tính và bảo vệ đồ nội thất.\n' +
      '✅ Bề mặt phủ nhựa chống bám bụi, lau chùi cực nhanh, kéo lên hạ xuống nhẹ nhàng.\n' +
      '✅ Đủ 4 tông màu thực tế: Ghi xám (IMG_5435), Xanh ghi (IMG_5436), Kem vàng (IMG_5437), Kem be (IMG_5438).\n' +
      '📞 Gọi/Zalo mang mẫu đo đạc miễn phí tận nơi: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'bat-tu-cuon-nang-mua-mai-hien-bc01',
    code: 'BC-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom',
    title: 'Bạt Tự Cuốn Lò Xo Hoa Văn Trúc Xanh (IMG_5454), Kẻ Sọc Xanh Trắng (IMG_5457), Lá Cọ Nâu Đồng (IMG_5458) & Rèm Bạt Lưới (Đủ 5 Ảnh Chữ Sắc Nét)',
    shortTitle: 'Bạt Tự Cuốn Lò Xo & Rèm Bạt Lưới Hiên Nhà (5 Góc Chụp)',
    priceDisplay: '220k – 280k / m²',
    marketPriceRange: 'Giá thị trường: 300.000đ – 380.000đ / m²',
    marketPriceNote: 'Trọn bộ 03 ảnh thực tế Bạt Tự Cuốn Lò Xo vừa tải lên (IMG_5454 hoa văn trúc xanh biệt thự, IMG_5457 bạt PVC kẻ sọc xanh trắng, IMG_5458 rèm bạt cuốn lá cọ nâu đồng hành lang) cùng Rèm Bạt Lưới Xuyên Sáng (IMG_5470) đã được đóng khung Typography HD sắc nét.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Bạt Tự Cuốn Lò Xo Kẻ Sọc Xanh Trắng / Hoa Trúc Xanh (IMG_5454, IMG_5457)',
        marketPrice: '300.000đ / m²',
        storePrice: '220.000đ / m²',
        note: 'Bạt nhựa PVC tráng nhựa 2 mặt chống mưa nắng 100% – Cả lắp',
      },
      {
        sizeOrOption: '2. Hệ Rèm Bạt Cuốn Hoa Văn Lá Cọ Nâu Đồng Sang Trọng (IMG_5458)',
        marketPrice: '330.000đ / m²',
        storePrice: '240.000đ / m²',
        note: 'Mẫu cao cấp cho hành lang biệt thự, nhà phố, trường học',
      },
      {
        sizeOrOption: '3. Rèm Bạt Cuốn Lưới Đen Nâu Xuyên Sáng Hiên Nhà (Mẫu IMG_5470)',
        marketPrice: '380.000đ / m²',
        storePrice: '280.000đ / m²',
        note: 'Cản nắng mưa 95%, thoáng gió, nhìn rõ không gian bên ngoài',
      },
      {
        sizeOrOption: '4. Mái Hiên Di Động Tay Khuỷu Quay Tay Khổ Lớn',
        marketPrice: '580.000đ / m ngang',
        storePrice: '450.000đ / m ngang',
        note: 'Khung càng nhôm đúc hợp kim dày + Bạt Hàn Quốc',
      },
    ],
    numericPrice: 220000,
    unitLabel: '1 m² hoàn thiện cả ống nhôm, thanh đáy & công lắp đặt',
    standardDimensions: 'May đo chuẩn theo kích thước sảnh biệt thự, hiên nhà, hành lang dài',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/BC_TH_01_bat_tu_cuon_hien_nha_typography_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/IMG_5454_bat_cuon_hoa_truc_biet_thu.jpg',
      '/assets/aistudio/IMG_5457_bat_cuon_ke_soc_xanh_trang_hd.jpg',
      '/assets/aistudio/IMG_5458_rem_bat_cuon_la_co_hanh_lang.jpg',
      '/assets/aistudio/IMG_5470_rem_bat_luoi_xuyen_sang_hien_nha.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/BC_TH_01_bat_tu_cuon_hien_nha_typography_hd.jpg': {
        badge: 'Ảnh 1/5 · Bảng Báo Giá 4 Mẫu Bạt Tự Cuốn Lò Xo & Rèm Bạt Hiên Nhà (HD)',
        caption: 'Tổng hợp 4 mẫu thực tế với phông chữ Be Vietnam Pro sắc nét: Hoa trúc xanh (220k/m²), Kẻ sọc xanh trắng (220k/m²), Lá cọ nâu đồng (240k/m²) và Lưới xuyên sáng (280k/m²).',
      },
      '/assets/aistudio/IMG_5454_bat_cuon_hoa_truc_biet_thu.jpg': {
        badge: 'Ảnh 2/5 · Bạt Tự Cuốn Hoa Văn Trúc Xanh Che Sảnh Biệt Thự Mái Nhật (IMG_5454)',
        caption: 'Lắp đặt 2 bộ bạt tự cuốn họa tiết lá trúc xanh dịu mát che nắng mưa cho sảnh chính và ban công tầng 2 biệt thự.',
      },
      '/assets/aistudio/IMG_5457_bat_cuon_ke_soc_xanh_trang_hd.jpg': {
        badge: 'Ảnh 3/5 · Bạt Tự Cuốn Lò Xo PVC Kẻ Sọc Xanh Trắng Che Kín Hiên Nhà (IMG_5457)',
        caption: 'Bạt nhựa PVC 3 lớp tráng nhựa bóng 2 mặt cản mưa tạt và nắng gắt 100%, neo dây cố định chắc chắn chống gió bão.',
      },
      '/assets/aistudio/IMG_5458_rem_bat_cuon_la_co_hanh_lang.jpg': {
        badge: 'Ảnh 4/5 · Hệ Rèm Bạt Cuốn Hoa Văn Lá Cọ Nâu Đồng Che Hành Lang Dài (IMG_5458)',
        caption: 'Dãy 4 tấm rèm bạt cuốn họa tiết lá cọ nhiệt đới tông nâu đồng sang trọng, bảo vệ cửa gỗ và hành lang khỏi nắng hướng Tây.',
      },
      '/assets/aistudio/IMG_5470_rem_bat_luoi_xuyen_sang_hien_nha.jpg': {
        badge: 'Ảnh 5/5 · Thực Tế Rèm Bạt Cuốn Lưới Đen Nâu Lắp Hiên Mái Ngói (IMG_5470)',
        caption: 'Rèm bạt lưới Polyester phủ nhựa màu đen nâu lắp lọt khung hiên nhà mái ngói đỏ: Cản nắng mưa 95% nhưng vẫn giữ tầm nhìn thoáng đãng.',
      },
    },
    highlightTag: 'Mới Chỉnh Sửa · Đủ 5 Ảnh Bạt Cuốn Chữ Sắc Nét',
    summary:
      'Bộ sưu tập 04 mẫu Bạt Tự Cuốn Lò Xo & Rèm Bạt Hiên Nhà thực tế (IMG_5454 hoa văn trúc xanh biệt thự, IMG_5457 kẻ sọc xanh trắng, IMG_5458 lá cọ nâu đồng hành lang & IMG_5470 lưới xuyên sáng) đã được đóng khung Typography HD sắc nét, giá trọn gói từ 220.000đ – 280.000đ/m².',
    visualAnnotations: [
      {
        label: 'Bạt tự cuốn hoa văn trúc xanh & kẻ sọc xanh trắng (IMG_5454, IMG_5457 – 220k/m²)',
        detail: 'Chuyên lắp cho sảnh biệt thự, hiên nhà phố, trường học; chống thấm nước mưa và tia UV tuyệt đối 100%.',
      },
      {
        label: 'Hệ rèm bạt cuốn hoa văn lá cọ nâu đồng & bạt lưới (IMG_5458, IMG_5470)',
        detail: 'Tông màu sang trọng hài hòa với kiến trúc cửa gỗ và mái ngói, bảo vệ nội thất hiên nhà bền bỉ 8–10 năm.',
      },
      {
        label: 'Trục cuốn nhôm hợp kim Φ63 & Lò xo tự hãm Đài Loan bền bỉ',
        detail: 'Kéo nhẹ xuống cài chốt là mặt bạt căng phẳng phiu, khi trời mát nhả chốt bạt tự động cuộn gọn lên sát dầm trên.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'BC-TH-01 (Bạt Tự Cuốn Lò Xo & Rèm Bạt Cuốn Hiên Nhà Tuyến Hoa)' },
      { label: 'Giá bạt trúc xanh / kẻ sọc', value: '220.000đ / m² trọn gói cả lắp (IMG_5454 & IMG_5457)' },
      { label: 'Giá bạt hoa văn lá cọ nâu đồng', value: '240.000đ / m² trọn gói cả lắp (IMG_5458)' },
      { label: 'Giá rèm bạt lưới xuyên sáng', value: '280.000đ / m² trọn gói cả lắp (IMG_5470)' },
      { label: 'Cơ cấu vận hành', value: 'Ống nhôm Φ63 + Thanh đáy chống gió + Lò xo tự cuốn Đài Loan' },
    ],
    articleParagraphs: [
      'Ba bức ảnh công trình thực tế vừa tải lên (IMG_5454, IMG_5457 và IMG_5458) kết hợp cùng mẫu Rèm Bạt Lưới Xuyên Sáng (IMG_5470) mang đến cái nhìn toàn diện về các dòng Bạt Tự Cuốn Lò Xo do Xưởng Tuyến Hoa trực tiếp sản xuất và thi công.',
      'Tùy theo kiến trúc ngôi nhà, quý khách có thể chọn mẫu Bạt Tự Cuốn Hoa Văn Trúc Xanh thanh nhã cho sảnh biệt thự mái Nhật (IMG_5454), mẫu Bạt PVC Kẻ Sọc Xanh Trắng cản mưa nắng 100% cho hiên nhà phố (IMG_5457), hoặc mẫu Rèm Bạt Cuốn Hoa Văn Lá Cọ Nâu Đồng sang trọng cho hành lang dài (IMG_5458).',
      'Tất cả các bức ảnh đều đã được chỉnh sáng và in chú thích phông chữ Be Vietnam Pro rõ nét với đơn giá niêm yết công khai từ 220.000đ đến 280.000đ/m² bao gồm cả công thợ lắp đặt hoàn thiện.'
    ],
    facebookPostCopy:
      '☀️🌧️ [CÔNG TRÌNH MỚI – XƯỞNG BẠT TUYẾN HOA] BẠT TỰ CUỐN LÒ XO BIỆT THỰ, HIÊN NHÀ & RÈM BẠT LÁ CỌ SANG TRỌNG!\n' +
      '💰 BÁO GIÁ TẬN XƯỞNG BAO LẮP ĐẶT HOÀN THIỆN:\n' +
      '🔹 1. Bạt tự cuốn lò xo hoa văn trúc xanh & kẻ sọc xanh trắng (IMG_5454, IMG_5457): Chỉ 220.000đ / m².\n' +
      '🔹 2. Hệ rèm bạt cuốn hoa văn lá cọ nâu đồng hành lang (IMG_5458): Chỉ 240.000đ / m².\n' +
      '🔹 3. Rèm bạt cuốn lưới đen nâu xuyên sáng hiên mái ngói (IMG_5470): Chỉ 280.000đ / m².\n' +
      '🔹 4. Mái hiên di động tay khuỷu quay tay: Chỉ 450.000đ / m ngang hoàn thiện.\n' +
      '--------------------------------------------\n' +
      '✅ Bạt PVC 3 lớp chống mưa nắng 100%, bảo vệ cửa gỗ và hiên nhà bền bỉ 8–10 năm.\n' +
      '✅ Hệ trục cuốn nhôm Φ63 & lò xo tự hãm kéo thả nhẹ nhàng trong 3 giây!\n' +
      '📞 Gọi/Zalo ngay Xưởng Tuyến Hoa: 0344.727.528',
  },
  {
    id: 'chieu-may-dieu-hoa-tuyen-hoa-cm01',
    code: 'CM-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Chiếu Mây Điều Hòa Sợi Ngải Cứu Tự Nhiên Lót Lưới Tổ Ong 3D NICOLAS Nature Home – Tặng Kèm 2 Vỏ Gối & Túi Xách (Đủ 4 Góc Chụp)',
    shortTitle: 'Chiếu Mây Điều Hòa Ngải Cứu NICOLAS Nature Home (4 Góc Chụp)',
    priceDisplay: '450.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 650.000đ – 850.000đ / bộ',
    marketPriceNote: 'Trọn bộ Chiếu Mây Điều Hòa Sợi Ngải Cứu NICOLAS Nature Home (Luxury) tại Showroom Tuyến Hoa gồm: 01 chiếu mây viền gấm thêu vàng kim + 02 vỏ gối mây đồng bộ + 01 túi xách khóa kéo xanh navy sang trọng.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Giường 1,6m × 2,0m (Chiếu mây NICOLAS + 2 vỏ gối + Túi xách)',
        marketPrice: '650.000đ / bộ',
        storePrice: '450.000đ / bộ',
        note: 'Có đai chun NICOLAS LUXURY cài 4 góc đệm',
      },
      {
        sizeOrOption: '2. Giường 1,8m × 2,0m (Kích thước chuẩn giường đôi phổ biến)',
        marketPrice: '750.000đ / bộ',
        storePrice: '490.000đ / bộ',
        note: 'Bán chạy số 1 mùa hè – Thoáng mát lưng, không buốt lạnh',
      },
      {
        sizeOrOption: '3. Giường đại 2,0m × 2,2m (Khổ rộng gia đình)',
        marketPrice: '850.000đ / bộ',
        storePrice: '550.000đ / bộ',
        note: 'Miễn phí giao hàng tận nhà',
      },
    ],
    numericPrice: 450000,
    unitLabel: 'Trọn bộ: 1 Chiếu mây NICOLAS + 2 Vỏ gối mây + Túi xách xanh navy',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m (450k) · 1,8m × 2,0m (490k) · 2,0m × 2,2m (550k)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png',
    secondaryImages: [
      '/assets/aistudio/IMG_5508_chieu_may_nicolas_mat_tren.jpg',
      '/assets/aistudio/IMG_5519_chieu_may_nicolas_luoi_3d_tui_xanh.jpg',
      '/assets/aistudio/IMG_5527_chieu_may_nicolas_dai_chun_luxury.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png': {
        badge: 'Ảnh 1/4 · Bảng Giá & Cấu Tạo Chiếu Mây Ngải Cứu NICOLAS Nature Home',
        caption: 'Tổng hợp 3 kích thước chuẩn (1m6×2m: 450k · 1m8×2m: 490k · 2m0×2m2: 550k) kèm 2 vỏ gối mây và túi đựng chính hãng tại Showroom Tuyến Hoa.',
      },
      '/assets/aistudio/IMG_5508_chieu_may_nicolas_mat_tren.jpg': {
        badge: 'Ảnh 2/4 · Bề Mặt Sợi Mây Tự Nhiên & Ngải Cứu Thêu Logo NICOLAS (IMG_5508 – IMG_5511)',
        caption: 'Mặt trên đan khít từ sợi mây tự nhiên kết hợp tinh chất ngải cứu kháng khuẩn màu nâu trà sang trọng, viền lụa gấm thêu nhành trúc & chữ NICOLAS Nature Home.',
      },
      '/assets/aistudio/IMG_5519_chieu_may_nicolas_luoi_3d_tui_xanh.jpg': {
        badge: 'Ảnh 3/4 · Mặt Dưới Lót Lưới Tổ Ong 3D & Túi Đựng Xanh Navy (IMG_5519 – IMG_5523)',
        caption: 'Lớp đệm lưới tổ ong 3D màu xanh ghi dày dặn đối lưu không khí 100%, đi kèm túi xách bảo quản màu xanh navy có quai xách tiện lợi.',
      },
      '/assets/aistudio/IMG_5527_chieu_may_nicolas_dai_chun_luxury.jpg': {
        badge: 'Ảnh 4/4 · Cận Cảnh Sợi Đan Mịn & Đai Chun Định Vị NICOLAS LUXURY (IMG_5527 – IMG_5531)',
        caption: 'Sợi mây đan chéo bóng mịn không dằm xước, mặt sau trang bị đai chun dệt chữ vàng "NICOLAS LUXURY" cố định chắc chắn vào 4 góc đệm.',
      },
    },
    highlightTag: 'Sợi Mây Ngải Cứu NICOLAS · 450k/Bộ',
    summary:
      'Chiếu Mây Điều Hòa Sợi Ngải Cứu Tự Nhiên NICOLAS Nature Home (Luxury) cấu tạo 2 lớp thông minh: Mặt trên đan sợi mây tự nhiên kết hợp ngải cứu thảo mộc kháng khuẩn mát dịu, bo viền gấm thêu nhành trúc vàng kim; mặt dưới lót lưới tổ ong 3D thoáng khí kèm đai chun NICOLAS LUXURY cài 4 góc đệm.',
    visualAnnotations: [
      {
        label: 'Mặt trên sợi mây tự nhiên & thảo mộc ngải cứu (Natural Mugwort)',
        detail: 'Sợi mây đan khít bóng mịn, không dằm xước, tỏa hương thảo mộc dịu nhẹ giúp an thần và mát lưng ngay khi nằm phòng điều hòa.',
      },
      {
        label: 'Mặt dưới lót lưới tổ ong 3D thoáng khí + Đai chun NICOLAS LUXURY',
        detail: 'Lớp đệm lưới 3D đàn hồi êm ái, thoát mồ hôi cực nhanh và có 4 đai chun dệt chữ vàng cố định chống xô lệch trên mọi dòng đệm.',
      },
      {
        label: 'Trọn bộ kèm 2 vỏ gối mây đồng màu & túi xách xanh navy',
        detail: 'Mua 1 được 3: Gồm 01 chiếu mây điều hòa NICOLAS Nature Home, 02 vỏ gối mây sang trọng và 01 túi khóa kéo có cửa sổ trong suốt.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CM-TH-01 (Chiếu Mây Ngải Cứu NICOLAS Nature Home Luxury)' },
      { label: 'Chất liệu cấu tạo', value: 'Mặt trên sợi mây & ngải cứu tự nhiên + Mặt dưới lưới tổ ong 3D' },
      { label: 'Giá cỡ 1,6m × 2,0m', value: '450.000đ / bộ (Thị trường: 650.000đ/bộ)' },
      { label: 'Giá cỡ 1,8m × 2,0m', value: '490.000đ / bộ (Thị trường: 750.000đ/bộ)' },
      { label: 'Giá cỡ 2,0m × 2,2m', value: '550.000đ / bộ (Thị trường: 850.000đ/bộ)' },
      { label: 'Phụ kiện đi kèm', value: 'Tặng kèm 02 vỏ gối mây đồng bộ + 01 túi xách xanh navy NICOLAS' },
    ],
    articleParagraphs: [
      'Chiếu Mây Điều Hòa Sợi Ngải Cứu Tự Nhiên NICOLAS Nature Home (Mã CM-TH-01) là dòng chiếu trải đệm cao cấp kết hợp giữa sợi mây tự nhiên tuyển chọn và tinh chất ngải cứu thảo mộc (Natural Mugwort), mang lại cảm giác mát dịu tự nhiên, không gây lạnh buốt lưng cho người lớn tuổi và trẻ nhỏ khi nằm điều hòa.',
      'Mặt trên của chiếu được dệt chéo tỉ mỉ với độ bóng mịn cao, xung quanh bo viền vải gấm màu nâu trà thêu nổi logo vàng kim "NICOLAS Nature Home" cùng biểu tượng nhành trúc thanh lịch. Mặt dưới được ép lớp lưới tổ ong 3D thoáng khí màu xanh ghi dày dặn, kèm 4 dây đai chun bản rộng dệt chữ "NICOLAS LUXURY" giúp định vị phẳng phiu vào 4 góc đệm.',
      'Tại Showroom Tuyến Hoa, mỗi bộ chiếu đều đi kèm sẵn 02 vỏ gối mây đồng bộ và túi xách khóa kéo màu xanh navy sang trọng với mức giá gốc tận kho: cỡ 1,6m×2,0m chỉ 450.000đ/bộ; cỡ 1,8m×2,0m chỉ 490.000đ/bộ; cỡ đại 2,0m×2,2m chỉ 550.000đ/bộ.'
    ],
    facebookPostCopy:
      '🌿 [SHOWROOM TUYẾN HOA] CHIẾU MÂY ĐIỀU HÒA SỢI NGẢI CỨU TỰ NHIÊN NICOLAS NATURE HOME – LÓT LƯỚI 3D CAO CẤP!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 650.000đ – 850.000đ / bộ\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI TUYẾN HOA (TRỌN BỘ CHIẾU + 2 VỎ GỐI MÂY + TÚI XÁCH XANH NAVY):\n' +
      '   👉 Cỡ 1,6m × 2,0m: Chỉ 450.000đ / bộ\n' +
      '   👉 Cỡ 1,8m × 2,0m: Chỉ 490.000đ / bộ\n' +
      '   👉 Cỡ 2,0m × 2,2m: Chỉ 550.000đ / bộ\n' +
      '--------------------------------------------\n' +
      '📞 Gọi/Zalo đặt ngay: 0344.727.528 (Showroom Tuyến Hoa – Chợ Cháy, Ứng Hòa, Hà Nội)',
  },
  {
    id: 'showroom-chan-ga-goi-dem-rem-tuyen-hoa-sr01',
    code: 'SR-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom',
    title: 'Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa – Giấc Ngủ Ngon, Cuộc Sống Trọn Vẹn (Đủ 4 Góc Chụp)',
    shortTitle: 'Showroom Chăn Ga Gối Đệm & Rèm Tuyến Hoa (4 Góc Chụp)',
    priceDisplay: 'Đệm 1,35Tr · Rèm 600k',
    marketPriceRange: 'Tiết kiệm 15% – 30% so với giá thị trường',
    marketPriceNote: 'Trưng bày đầy đủ Chăn Ga êm ái, Gối thư giãn, Đệm chính hãng vững chãi và Rèm Cửa sang trọng tại Showroom Tuyến Hoa ("Giấc ngủ ngon - Cuộc sống trọn vẹn").',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Chăn Ga Gối Lụa Tencel & Đệm Bông Ép / Lò Xo Chính Hãng',
        marketPrice: '1.650.000đ – 5.950.000đ',
        storePrice: '1.350.000đ – 4.450.000đ',
        note: 'Cam kết chính hãng 100%, bảo hành 5–10 năm',
      },
      {
        sizeOrOption: '2. Chiếu Mây Điều Hòa Ngải Cứu NICOLAS & Màn Khung Inox (1,8m × 2,0m)',
        marketPrice: '650.000đ – 1.300.000đ / bộ',
        storePrice: '450.000đ – 1.000.000đ / bộ',
        note: 'Giao tận nơi & bao lắp đặt hoàn thiện tận giường',
      },
      {
        sizeOrOption: '3. Rèm Vải Cản Nắng – Rèm Gỗ – Rèm Trúc – Rèm Tổ Ong',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Miễn phí mang mẫu, khảo sát & lắp đặt tận nhà',
      },
    ],
    numericPrice: 1000000,
    unitLabel: 'Trưng bày đầy đủ Chăn Ga Gối Đệm & Rèm Cửa chính hãng',
    standardDimensions: 'Giấc ngủ ngon - Cuộc sống trọn vẹn (Kính chào Quý khách)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png',
    secondaryImages: [
      '/assets/aistudio/SR_TH_01_khu_chan_ga_goi_dem_ben_trai.jpg',
      '/assets/aistudio/SR_TH_01_khu_rem_vai_rem_go_ben_phai.jpg',
      '/assets/aistudio/showroom_tuyen_hoa_stamped.png',
    ],
    imageCaptions: {
      '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png': {
        badge: 'Ảnh 1/4 · Toàn Cảnh Mặt Tiền Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa',
        caption: 'Biển hiệu hoa sen hồng "Tuyến Hoa Chăn Ga Gối Đệm – Giấc ngủ ngon - Cuộc sống trọn vẹn" cùng không gian trưng bày sáng sang trọng.',
      },
      '/assets/aistudio/SR_TH_01_khu_chan_ga_goi_dem_ben_trai.jpg': {
        badge: 'Ảnh 2/4 · Phân Khu Bên Trái: Kệ Gỗ Trưng Bày Chăn Ga – Gối – Đệm Chính Hãng',
        caption: 'Hệ tủ kệ gỗ chiếu sáng LED ấm áp trưng bày hàng trăm bộ chăn ga lụa, gối nằm thư giãn và giường mẫu trải sẵn để quý khách thử trực tiếp.',
      },
      '/assets/aistudio/SR_TH_01_khu_rem_vai_rem_go_ben_phai.jpg': {
        badge: 'Ảnh 3/4 · Phân Khu Bên Phải: Hệ Rèm Vải – Rèm Cửa – Rèm Gỗ – Rèm Trúc',
        caption: 'Khu vực treo mẫu thực tế đa dạng sắc màu rèm vải cản nắng, rèm voan thêu, rèm gỗ tự nhiên và bộ giường mẫu hoa xanh thanh lịch.',
      },
      '/assets/aistudio/showroom_tuyen_hoa_stamped.png': {
        badge: 'Ảnh 4/4 · Bảng Niêm Yết Giá Tận Xưởng & Hotline Tư Vấn Tuyến Hoa',
        caption: 'Tổng hợp thông tin liên hệ và cam kết dịch vụ "Tư vấn nhiệt tình – Phục vụ chu đáo – Giá hợp lý" tại Showroom Tuyến Hoa (0344.727.528).',
      },
    },
    highlightTag: 'Showroom Chính Hãng Tuyến Hoa',
    summary:
      'Không gian trưng bày hiện đại của Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa ("Giấc ngủ ngon - Cuộc sống trọn vẹn"): Khu vực bên trái trưng bày kệ chăn ga, gối, đệm chính hãng; khu vực bên phải trưng bày hệ rèm vải, rèm cửa, rèm gỗ, rèm trúc sang trọng.',
    visualAnnotations: [
      {
        label: 'Chăn Ga êm ái – Gối thư giãn – Đệm vững chãi',
        detail: 'Trưng bày sẵn các bộ chăn ga gối lụa thêu, chiếu mây điều hòa và đệm chính hãng để quý khách trải nghiệm trực tiếp.',
      },
      {
        label: 'Hệ Rèm Vải – Rèm Cửa – Rèm Gỗ – Rèm Trúc sang trọng',
        detail: 'Hàng trăm mẫu vải cản nắng 100%, rèm cầu vồng, rèm gỗ tự nhiên treo mẫu thực tế dễ dàng chọn lựa.',
      },
      {
        label: 'Thảm đỏ "Kính Chào Quý Khách" & Dịch vụ tận tâm',
        detail: 'Không gian sáng đẹp, đón tiếp chu đáo, miễn phí mang mẫu, vận chuyển và lắp đặt tận phòng ngủ.',
      },
    ],
    specs: [
      { label: 'Mã hình ảnh', value: 'SR-TH-01 (Không Gian Showroom Chăn Ga Gối Đệm & Rèm Tuyến Hoa)' },
      { label: 'Thông điệp thương hiệu', value: 'Tuyến Hoa – Chăn Ga Gối Đệm: Giấc ngủ ngon - Cuộc sống trọn vẹn' },
      { label: 'Ngành hàng bên trái', value: 'Chăn ga êm ái thoáng mát | Gối thư giãn | Đệm êm ấm vững chãi' },
      { label: 'Ngành hàng bên phải', value: 'Rèm vải | Rèm cửa | Rèm gỗ | Rèm trúc sang trọng thẩm mỹ' },
      { label: 'Hotline / Zalo tư vấn', value: '0344.727.528 (Giao & lắp đặt miễn phí tận nhà)' },
    ],
    articleParagraphs: [
      'Chào mừng Quý khách đến với Showroom Chăn Ga Gối Đệm & Rèm Cửa Tuyến Hoa – điểm đến tin cậy mang lại "Giấc ngủ ngon – Cuộc sống trọn vẹn" cho mọi gia đình.',
      'Không gian bên trong Showroom được bố trí khoa học làm 2 phân khu chuyên biệt: Phía bên trái là hệ thống kệ gỗ âm đèn LED trưng bày hàng trăm mẫu Chăn Ga lụa thoáng mát, Gối nằm thư giãn tốt cho sức khỏe và Đệm chính hãng êm ấm vững chãi. Phía bên phải là khu trưng bày thực tế các mẫu Rèm Vải cản nắng, Rèm Gỗ, Rèm Trúc và Màn Khung cao cấp.',
      'Quý khách ghé thăm Showroom sẽ được trực tiếp sờ tận tay chất vải, nằm thử độ êm của đệm và nhận mức giá gốc tận xưởng tiết kiệm 15% – 30% so với thị trường.'
    ],
    facebookPostCopy:
      '🌸 [SHOWROOM CHÍNH HÃNG] CHĂN GA GỐI ĐỆM & RÈM CỬA TUYẾN HOA – GIẤC NGỦ NGON, CUỘC SỐNG TRỌN VẸN!\n' +
      '--------------------------------------------\n' +
      '✨ Kính mời Quý khách ghé thăm không gian trưng bày chính hãng của Showroom Tuyến Hoa:\n' +
      '🛏️ CHĂN GA & CHIẾU MÂY NICOLAS: Êm ái – Thoáng mát, đủ mẫu phòng cưới & gia đình (Chiếu mây 3D chỉ từ 450.000đ/bộ).\n' +
      '☁️ GỐI NẰM: Thư giãn cổ vai gáy – Tốt cho sức khỏe.\n' +
      '🛡️ ĐỆM CHÍNH HÃNG: Êm ấm – Vững chãi, bảo hành 5–10 năm (Từ 1.350.000đ/tấm).\n' +
      '🪟 RÈM CỬA – RÈM VẢI – RÈM GỖ – RÈM TRÚC: Sang trọng – Thẩm mỹ (Rèm vải cản nắng chỉ 600.000đ/m ngang cả lắp).\n' +
      '👑 MÀN KHUNG INOX CAO CẤP (1,8m × 2,0m): Chỉ 1.000.000đ / 1 bộ bao lắp tận giường!\n' +
      '--------------------------------------------\n' +
      '🚛 Tư vấn nhiệt tình – Phục vụ chu đáo – Miễn phí mang mẫu và lắp đặt tận nhà!\n' +
      '📞 Gọi/Zalo ngay: 0344.727.528 (Showroom Tuyến Hoa – Chợ Cháy, Ứng Hòa, Hà Nội)',
  },
  {
    id: 'bo-chan-ga-goi-chan-bong-phoi-ren-cong-chua-han-quoc-tim-lavender-cglcc01',
    code: 'CGL-CC-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Chần Bông Phối Ren Công Chúa Hàn Quốc (Korean Princess) – Ga Phủ Viền Ren Hoa Trắng & Bèo Nhún 2 Tầng (Đủ 08 Màu Pastel Ngọt Ngào)',
    shortTitle: 'Bộ Chăn Ga Chần Bông Phối Ren Công Chúa Hàn Quốc (Đủ 8 Màu)',
    priceDisplay: '1.350.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 1.950.000đ – 2.650.000đ / bộ',
    marketPriceNote: 'Siêu phẩm chăn ga gối phong cách Tiểu Thư Hàn Quốc (Korean Princess) vừa cập nhật trọn bộ 08 gam màu Pastel ngọt ngào (đã lọc bỏ 1 ảnh trùng màu Xanh Cốm): Mặt gối và diềm ga chần bông quả trám nổi dày dặn, chân váy ga phủ phối dải ren hoa trắng thêu nổi và bèo nhún 2 tầng bồng bềnh.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ Chăn Ga Gối Phối Ren Công Chúa Hàn Quốc (Giường 1,6m×2m & 1,8m×2m)',
        marketPrice: '1.950.000đ – 2.250.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Chọn đủ 8 màu: Tím Khoai Môn · Hồng Phấn · Xanh Cốm · Xám Ghi · Hồng Đào · Xanh Băng · Tím Nhạt · Cam Đào',
      },
      {
        sizeOrOption: '2. Trọn Bộ Chăn Ga Gối Phối Ren Công Chúa Hàn Quốc (Giường Đại 2,0m × 2,2m)',
        marketPrice: '2.350.000đ – 2.650.000đ / bộ',
        storePrice: '1.550.000đ / bộ',
        note: 'Gồm: 01 Ga phủ chần bông phối ren trắng + 01 Chăn chần bèo nhún + 04 Vỏ gối viền bèo đồng bộ',
      },
      {
        sizeOrOption: '3. Combo Phòng Cưới / Phòng Tiểu Thư: Bộ Ren Công Chúa + Màn Khung Ròng Rọc Tuyến Hoa',
        marketPrice: '3.250.000đ – 3.700.000đ / combo',
        storePrice: '2.250.000đ / combo (Tiết kiệm 100.000đ)',
        note: 'Miễn phí vận chuyển & bao lắp đặt tận giường khu vực Ứng Hòa – Hà Nội',
      },
    ],
    numericPrice: 1350000,
    unitLabel: '1 bộ Chăn Ga Gối Chần Bông Phối Ren Công Chúa (Có sẵn ruột chăn chần · Đủ 8 màu)',
    standardDimensions: 'Đủ cỡ giường 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (8 màu Pastel)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/CGL_CC_01_ren_cong_chua_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915225334_4373635352308930219_4373635352308930219_b1cc4f9fe287531332cb288e86597c7e_3574b865.jpg',
      '/assets/aistudio/1792915225360_4373635352308930219_4373635352308930219_e38fff738e62a19643254e199a9e5550.jpg',
      '/assets/aistudio/1792915225384_4373635352308930219_4373635352308930219_5dc45ce571529f90650ad1416fd99bc4.jpg',
      '/assets/aistudio/1792915225409_4373635352308930219_4373635352308930219_5b23f6c6a529f7a52a4e56fbaf9883e1.jpg',
      '/assets/aistudio/1792915225435_4373635352308930219_4373635352308930219_9dadbcffcbb6a7f2dd3a6fc4e50c509b.jpg',
      '/assets/aistudio/1792915225461_4373635352308930219_4373635352308930219_3c349c87e8e53b1f67cf72b3db09c36c.jpg',
      '/assets/aistudio/1792915225486_4373635352308930219_4373635352308930219_da4f8871606e7946c006883a8d8cdad5.jpg',
      '/assets/aistudio/1792915225513_4373635352308930219_4373635352308930219_8b6e1f9698779e80aff9b2765b034825.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/CGL_CC_01_ren_cong_chua_bang_gia_hd.jpg': {
        badge: 'Bảng Giá Điền Sẵn · Trọn Bộ 08 Màu Ren Công Chúa Hàn Quốc (1.350.000đ/bộ)',
        caption: 'Banner HD quy tụ đủ 8 gam màu Pastel Ren Công Chúa Hàn Quốc kèm bảng giá niêm yết: 1.350.000đ/bộ (1m6 & 1m8) và 1.550.000đ/bộ (2m0×2m2).',
      },
      '/assets/aistudio/1792915225334_4373635352308930219_4373635352308930219_b1cc4f9fe287531332cb288e86597c7e_3574b865.jpg': {
        badge: 'Màu 1/8 · Tím Khoai Môn Đậm (Deep Taro / Lavender)',
        caption: 'Gam màu Tím Khoai Môn lãng mạn, kết hợp dải ren hoa trắng nổi bật ở chân ga phủ chần bông quả trám.',
      },
      '/assets/aistudio/1792915225360_4373635352308930219_4373635352308930219_e38fff738e62a19643254e199a9e5550.jpg': {
        badge: 'Màu 2/8 · Hồng Phấn Pastel (Blush Pink Tiểu Thư)',
        caption: 'Tông Hồng Phấn ngọt ngào chuẩn phòng cưới Hàn Quốc, tôn sáng không gian phòng ngủ của các cặp đôi trẻ.',
      },
      '/assets/aistudio/1792915225384_4373635352308930219_4373635352308930219_5dc45ce571529f90650ad1416fd99bc4.jpg': {
        badge: 'Màu 3/8 · Xanh Cốm Matcha (Sage Green Thanh Mát)',
        caption: 'Sắc Xanh Cốm non dịu mắt, mang lại cảm giác thư thái, tươi mát suốt 4 mùa (Đã lọc 1 ảnh trùng lặp).',
      },
      '/assets/aistudio/1792915225409_4373635352308930219_4373635352308930219_5b23f6c6a529f7a52a4e56fbaf9883e1.jpg': {
        badge: 'Màu 4/8 · Xám Ghi Ánh Tím (Lilac Ash Grey Hiện Đại)',
        caption: 'Gam Xám Ghi pha ánh tím nhẹ nhàng, cực kỳ sạch sẽ, sang trọng và dễ phối với mọi màu sơn tường.',
      },
      '/assets/aistudio/1792915225435_4373635352308930219_4373635352308930219_9dadbcffcbb6a7f2dd3a6fc4e50c509b.jpg': {
        badge: 'Màu 5/8 · Hồng Đào Dâu Tây (Rose Pink Ấm Áp)',
        caption: 'Sắc Hồng Đào đậm đà, tươi tắn hơn hồng phấn, được ưa chuộng làm bộ chăn ga tân hôn may mắn.',
      },
      '/assets/aistudio/1792915225461_4373635352308930219_4373635352308930219_3c349c87e8e53b1f67cf72b3db09c36c.jpg': {
        badge: 'Màu 6/8 · Xanh Ngọc Băng (Ice Blue Pastel Tinh Khôi)',
        caption: 'Gam Xanh Băng trong trẻo phối ren hoa trắng tạo hiệu ứng mát lạnh, thanh lịch cho phòng ngủ.',
      },
      '/assets/aistudio/1792915225486_4373635352308930219_4373635352308930219_da4f8871606e7946c006883a8d8cdad5.jpg': {
        badge: 'Màu 7/8 · Tím Tử Đinh Hương Nhạt (Light Lilac Pastel)',
        caption: 'Tông Tím Lilac pha kem sáng nhẹ nhàng, dịu dàng hơn bản Tím Khoai Môn đậm.',
      },
      '/assets/aistudio/1792915225513_4373635352308930219_4373635352308930219_8b6e1f9698779e80aff9b2765b034825.jpg': {
        badge: 'Màu 8/8 · Cam Đào San Hô (Peach Apricot Rạng Rỡ)',
        caption: 'Gam Cam Đào ấm áp, trẻ trung, lên đèn vàng phòng ngủ cực kỳ lung linh và ấm cúng.',
      },
    },
    highlightTag: 'Mới Lên Sóng · Đủ 08 Màu Ren Công Chúa Hàn Quốc',
    summary:
      'Trọn bộ 08 gam màu Pastel ngọt ngào của mẫu Chăn Ga Gối Chần Bông Phối Ren Công Chúa Hàn Quốc (Korean Princess): Mặt gối và diềm ga chần quả trám nổi dày dặn, viền bèo nhún tiểu thư quanh chăn và gối, chân ga phủ rủ 2 tầng điểm dải ren hoa trắng thêu nổi cực kỳ duyên dáng.',
    visualAnnotations: [
      {
        label: 'Bảng 08 màu Pastel Hàn Quốc bấm chọn trực tiếp trên thẻ sản phẩm',
        detail:
          'Từ Tím Khoai Môn, Hồng Phấn, Xanh Cốm Matcha, Xám Ghi Ánh Tím đến Hồng Đào, Xanh Ngọc Băng, Tím Nhạt và Cam Đào San Hô – đáp ứng mọi sở thích và bản mệnh phong thủy.',
      },
      {
        label: 'Chân ga phủ rủ 2 tầng phối dải Ren Thêu Hoa Trắng & Bèo Nhún Sóng Lượn',
        detail:
          'Che kín hoàn toàn thành đệm và khung giường, tạo độ bồng bềnh lãng mạn chuẩn studio Hàn Quốc.',
      },
      {
        label: 'Mặt gối và diềm ga chần bông họa tiết quả trám cổ điển dày dặn',
        detail:
          'Giữ bề mặt ga và gối luôn căng phồng, êm ái, không bị xô lệch khi nằm và giữ ấm tuyệt vời.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-CC-01 (Bộ Chăn Ga Gối Chần Bông Phối Ren Công Chúa – Full 8 Màu)' },
      { label: 'Đủ 08 màu Pastel', value: 'Tím Đậm · Hồng Phấn · Xanh Cốm · Xám Ghi · Hồng Đào · Xanh Băng · Tím Nhạt · Cam Đào' },
      { label: 'Giá tại Tuyến Hoa', value: '1.350.000đ / bộ (1m6 & 1m8) | 1.550.000đ / bộ (2m×2m2)' },
      { label: 'Giá thị trường', value: '1.950.000đ – 2.650.000đ / bộ' },
      { label: 'Thành phần bộ', value: '01 Ga phủ chần bông phối ren trắng + 01 Chăn chần bông viền bèo + 04 Vỏ gối chần bèo' },
    ],
    articleParagraphs: [
      'Bộ Chăn Ga Gối Chần Bông Phối Ren Công Chúa Hàn Quốc (Mã CGL-CC-01) vừa được Showroom Tuyến Hoa cập nhật đầy đủ 08 gam màu Pastel ngọt ngào nhất năm nay: Tím Khoai Môn, Hồng Phấn, Xanh Cốm Matcha, Xám Ghi, Hồng Đào, Xanh Ngọc Băng, Tím Nhạt và Cam Đào San Hô.',
      'Toàn bộ mặt gối và phần diềm ga được chần bông quả trám nổi kỹ lưỡng, kết hợp lớp ren thêu hoa trắng chạy quanh chân giường. Quý khách bấm vào từng ô màu dưới ảnh chính để xem cận cảnh và đặt hàng với giá ưu đãi tại kho Tuyến Hoa chỉ 1.350.000đ/bộ.'
    ],
    facebookPostCopy:
      '👑🌸 [BST REN CÔNG CHÚA HÀN QUỐC – ĐỦ 08 MÀU PASTEL] BỘ CHĂN GA GỐI CHẦN BÔNG QUẢ TRÁM PHỐI REN HOA TRẮNG & BÈO NHÚN TIỂU THƯ! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.950.000đ – 2.650.000đ / bộ\n' +
      '🔥 GIÁ TẬN GỐC TẠI SHOWROOM TUYẾN HOA: Chỉ 1.350.000đ / bộ (Cỡ đại 2m×2m2: 1.550.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 BẢNG 08 GAM MÀU NGỌT NGÀO ĐÃ LÊN KỆ (Bấm xem từng màu trên web):\n' +
      '   💜 1. Tím Khoai Môn Đậm (Lavender) lãng mạn\n' +
      '   🌸 2. Hồng Phấn Pastel (Blush Pink) ngọt ngào\n' +
      '   🍵 3. Xanh Cốm Matcha (Sage Green) thanh mát\n' +
      '   🩶 4. Xám Ghi Ánh Tím hiện đại, sạch sang\n' +
      '   🌷 5. Hồng Đào Dâu Tây (Rose Pink) phòng cưới\n' +
      '   🧊 6. Xanh Ngọc Băng (Ice Blue) trong trẻo\n' +
      '   🪻 7. Tím Tử Đinh Hương Nhạt (Light Lilac) dịu dàng\n' +
      '   🍑 8. Cam Đào San Hô (Peach Coral) ấm áp\n' +
      '✅ Ga phủ chần bông quả trám dày dặn, chân ga rủ 2 tầng phối ren hoa trắng + Chăn chần có ruột + 04 vỏ gối viền bèo.\n' +
      '📞 Gọi/Zalo Anh Tuyến chốt màu giao ngay: 0344.727.528!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-theu-chu-d-dror-hoa-anh-dao-4-mau-cgldr01',
    code: 'CGL-DR-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Cao Cấp Chần Bông Thêu Chữ "D – Dror" & Nhành Hoa Anh Đào (Đủ 04 Màu: Xanh Rêu Ngọc Bích · Hồng Đất · Đỏ Ruby · Xám Ghi Chì)',
    shortTitle: 'Bộ Lụa Tencel Thêu Chữ D – Dror & Hoa Anh Đào (Đủ 4 Màu)',
    priceDisplay: '1.450.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 2.250.000đ – 2.950.000đ / bộ',
    marketPriceNote: 'Mẫu chăn ga gối Lụa Tencel 60s chần bông cao cấp thêu biểu tượng chữ "D – Dror" kết hợp nhành Hoa Anh Đào tinh xảo trên chăn và gối, diềm ga chần bông quả trám viền bèo tròn sang trọng: Có đủ 04 màu Xanh Rêu Ngọc Bích, Hồng Đất, Đỏ Ruby và Xám Ghi Chì.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ Lụa Tencel Thêu D – Dror & Hoa Anh Đào (Giường 1,6m×2m & 1,8m×2m)',
        marketPrice: '2.250.000đ – 2.550.000đ / bộ',
        storePrice: '1.450.000đ / bộ',
        note: 'Chọn 1 trong 4 màu: Xanh Rêu Ngọc Bích · Hồng Đất · Đỏ Ruby · Xám Ghi Chì',
      },
      {
        sizeOrOption: '2. Trọn Bộ Lụa Tencel Thêu D – Dror & Hoa Anh Đào (Giường Đại 2,0m × 2,2m)',
        marketPrice: '2.650.000đ – 2.950.000đ / bộ',
        storePrice: '1.650.000đ / bộ',
        note: 'Gồm: 01 Ga phủ chần quả trám + 01 Chăn chần lụa Tencel + 02 Vỏ gối nằm + 02 Vỏ gối tựa/ôm',
      },
      {
        sizeOrOption: '3. Ưu Đãi Mua Combo 02 Bộ Hoặc Mua Kèm Đệm Tại Showroom Tuyến Hoa',
        marketPrice: '4.500.000đ – 5.100.000đ / 2 bộ',
        storePrice: '2.750.000đ / 2 bộ (Tiết kiệm 150.000đ)',
        note: 'Tặng túi đựng cao cấp & miễn phí giao tận nhà khu vực Ứng Hòa – Hà Nội',
      },
    ],
    numericPrice: 1450000,
    unitLabel: '1 bộ Chăn Ga Gối Lụa Tencel Chần Bông Thêu D – Dror (Đủ 4 màu)',
    standardDimensions: 'Đủ cỡ giường 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (4 màu sang trọng)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/CGL_DR_01_dror_hoa_anh_dao_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915265308_4373635352308930219_4373635352308930219_b56e4b9672559f5c6e88ef6004c1b545.jpg',
      '/assets/aistudio/1792915265337_4373635352308930219_4373635352308930219_d8688e0d29240a931b6c455495632f75.jpg',
      '/assets/aistudio/1792915265363_4373635352308930219_4373635352308930219_78b0d21996bd9d26062f5d73560dcf8b.jpg',
      '/assets/aistudio/1792915265388_4373635352308930219_4373635352308930219_001d049ce5ae17faba67925ee554de97.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/CGL_DR_01_dror_hoa_anh_dao_bang_gia_hd.jpg': {
        badge: 'Bảng Giá Điền Sẵn · 04 Màu Lụa Tencel Thêu D – Dror & Hoa Anh Đào (1.450.000đ/bộ)',
        caption: 'Banner HD tổng hợp đủ 4 gam màu (Xanh Rêu Ngọc Bích, Hồng Đất, Đỏ Ruby, Xám Ghi Chì) kèm bảng giá 1.450.000đ/bộ (1m6 & 1m8) và 1.650.000đ/bộ (2m0×2m2).',
      },
      '/assets/aistudio/1792915265308_4373635352308930219_4373635352308930219_b56e4b9672559f5c6e88ef6004c1b545.jpg': {
        badge: 'Màu 1/4 · Xanh Rêu Ngọc Bích (Sage Jade Green Sang Trọng)',
        caption: 'Nền lụa Tencel Xanh Rêu Ngọc Bích mát rượi làm nổi bật họa tiết thêu nhành Hoa Anh Đào kem trắng & biểu tượng D – Dror.',
      },
      '/assets/aistudio/1792915265337_4373635352308930219_4373635352308930219_d8688e0d29240a931b6c455495632f75.jpg': {
        badge: 'Màu 2/4 · Hồng Đất Quý Phái (Dusty Rose Hiện Đại)',
        caption: 'Tông Hồng Đất trầm ấm, thanh lịch, không kén tuổi và giữ vẻ sang trọng chuẩn phòng ngủ Master.',
      },
      '/assets/aistudio/1792915265363_4373635352308930219_4373635352308930219_78b0d21996bd9d26062f5d73560dcf8b.jpg': {
        badge: 'Màu 3/4 · Đỏ Ruby Hỷ Sự (Ruby Red Phòng Cưới)',
        caption: 'Sắc Đỏ Ruby rực rỡ vượng khí kết hợp hoa anh đào thêu nổi ánh kim, lựa chọn hoàn hảo cho mùa cưới hỏi.',
      },
      '/assets/aistudio/1792915265388_4373635352308930219_4373635352308930219_001d049ce5ae17faba67925ee554de97.jpg': {
        badge: 'Màu 4/4 · Xám Ghi Chì Chần Quả Trám (Charcoal Grey)',
        caption: 'Gam Xám Ghi Chì nam tính, sạch sẽ, tôn bật đường chần bông quả trám và chỉ thêu nổi sắc nét.',
      },
    },
    highlightTag: 'Mới Lên Sóng · Lụa Tencel Thêu D – Dror & Hoa Anh Đào (4 Màu)',
    summary:
      'Sự kết hợp hoàn mỹ giữa chất liệu Lụa Tencel 60s bóng mượt, ga phủ chần bông quả trám dày dặn và nghệ thuật thêu nổi chữ "D – Dror" quyện cùng nhành Hoa Anh Đào thanh tao: Sẵn kho đủ 04 màu Xanh Rêu Ngọc Bích, Hồng Đất, Đỏ Ruby và Xám Ghi Chì.',
    visualAnnotations: [
      {
        label: 'Họa tiết thêu nổi chữ "D – Dror" & Nhành Hoa Anh Đào tinh xảo',
        detail:
          'Thêu vi tính mật độ cao bằng chỉ tơ bóng trên cả mặt chăn và vỏ gối, không bung chỉ, không cộm rát khi nằm.',
      },
      {
        label: 'Ga phủ & Chăn chần bông quả trám kèm viền bèo sò duyên dáng',
        detail:
          'Lớp bông tấm siêu nhẹ chần cố định giúp ga trải phẳng phiu trên mặt đệm, chăn đắp êm mát mùa hè và ấm áp mùa thu đông.',
      },
      {
        label: 'Đủ 04 gam màu thời thượng: Xanh Rêu · Hồng Đất · Đỏ Ruby · Xám Ghi Chì',
        detail:
          'Bấm chọn từng ô màu ngay trên thẻ sản phẩm để đối chiếu trực tiếp màu sắc phù hợp với nội thất phòng ngủ của gia đình.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-DR-01 (Bộ Lụa Tencel Chần Bông Thêu D – Dror & Hoa Anh Đào)' },
      { label: 'Bảng 04 màu có sẵn', value: '1. Xanh Rêu Ngọc Bích | 2. Hồng Đất | 3. Đỏ Ruby Cưới | 4. Xám Ghi Chì' },
      { label: 'Giá tại Tuyến Hoa', value: '1.450.000đ / bộ (1m6 & 1m8) | 1.650.000đ / bộ (2m×2m2)' },
      { label: 'Giá thị trường', value: '2.250.000đ – 2.950.000đ / bộ' },
      { label: 'Chất liệu & Quy cách', value: 'Lụa Tencel 60s chần bông quả trám – Ga phủ + Chăn chần + 4 Vỏ gối' },
    ],
    articleParagraphs: [
      'Dành cho những khách hàng yêu thích chất liệu Lụa Tencel mát mịn nhưng vẫn muốn bề mặt ga và chăn được chần bông đứng phom, mẫu Chăn Ga Gối Lụa Tencel Thêu Chữ "D – Dror" & Nhành Hoa Anh Đào (Mã CGL-DR-01) là thiết kế mới nhất vừa về tại Showroom Tuyến Hoa.',
      'Sản phẩm có đủ 04 tông màu sang trọng bậc nhất: Xanh Rêu Ngọc Bích mát lành, Hồng Đất thanh lịch, Đỏ Ruby phòng cưới và Xám Ghi Chì hiện đại. Giá ưu đãi trực tiếp tại Tổng Kho Tuyến Hoa chỉ 1.450.000đ/bộ (cỡ đại 2m×2m2 giá 1.650.000đ/bộ).'
    ],
    facebookPostCopy:
      '🌸✨ [MẪU MỚI VỀ KHO] BỘ CHĂN GA GỐI LỤA TENCEL CHẦN BÔNG THÊU CHỮ "D – DROR" & HOA ANH ĐÀO – ĐỦ 04 MÀU SANG TRỌNG! 👑\n' +
      '💰 GIÁ THỊ TRƯỜNG: 2.250.000đ – 2.950.000đ / bộ\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI TỔNG KHO TUYẾN HOA: Chỉ 1.450.000đ / bộ (Cỡ đại 2m×2m2: 1.650.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 ĐỦ 04 GAM MÀU THỜI THƯỢNG CHO MỌI PHÒNG NGỦ:\n' +
      '   🌿 1. Màu Xanh Rêu Ngọc Bích (Sage Green): Mát mắt, thư thái chuẩn Resort\n' +
      '   🌷 2. Màu Hồng Đất (Dusty Rose): Ngọt ngào, sang trọng, không kén tuổi\n' +
      '   ❤️ 3. Màu Đỏ Ruby Hỷ Sự: Rực rỡ, may mắn cho phòng tân hôn\n' +
      '   🩶 4. Màu Xám Ghi Chì (Charcoal Grey): Lịch lãm, hiện đại, siêu sạch\n' +
      '✅ Chất Lụa Tencel 60s mát lịm kết hợp ga phủ & chăn chần bông quả trám êm ái, thêu nổi chữ D – Dror & nhành Hoa Anh Đào sắc nét từng đường kim mũi chỉ.\n' +
      '📞 Gọi/Zalo Anh Tuyến đặt hàng giao tận nhà: 0344.727.528!',
  },

  // ===========================================================================
  // 00-LATEST. BỘ 06 BÀI ĐĂNG TỪ 18 ẢNH CHĂN GA CƯỚI LỤA TENCEL ALYDA® 7 MÓN THÊU HOÀNG GIA
  //            (MẪU ĐƠN, VERSAILLES, VƯƠNG MIỆN, BÁO GẤM, ĐÀN BƯỚM) & REN CÔNG CHÚA
  // ===========================================================================
  {
    id: 'bo-chan-ga-goi-cuoi-lua-tencel-alyda-theu-hoa-mau-don-phu-quy-cglal01',
    code: 'CGL-AL-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® 7 Món – Mẫu Thêu Hoa Mẫu Đơn Phú Quý Hoàng Gia (Đủ 03 Màu: Đỏ Hỷ Sự · Xanh Cổ Vịt · Xanh Tím Than)',
    shortTitle: 'Bộ Lụa Tencel Alyda 7 Món Thêu Hoa Mẫu Đơn (Đỏ · Xanh Cổ Vịt · Tím Than)',
    priceDisplay: '2.150.000đ / bộ 7 món',
    marketPriceRange: 'Giá thị trường: 3.200.000đ – 4.200.000đ / bộ 7 món',
    marketPriceNote: 'Tuyệt phẩm thêu Hoa Mẫu Đơn Phú Quý (Biểu tượng của sự vương giả, hạnh phúc viên mãn) trên nền Lụa Tencel Alyda® 7 món: Có đủ 3 màu Đỏ Hỷ Sự Phòng Cưới, Xanh Cổ Vịt Ngọc Lục Bảo và Xanh Tím Than.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ 7 Món Lụa Tencel Alyda® Thêu Hoa Mẫu Đơn (Giường 1,6m×2,0m & 1,8m×2,0m)',
        marketPrice: '3.200.000đ – 3.650.000đ / bộ',
        storePrice: '2.150.000đ / bộ 7 món',
        note: 'Chọn 1 trong 3 màu: Đỏ Hỷ Sự (Ảnh 1) · Xanh Cổ Vịt (Ảnh 2) · Xanh Tím Than (Ảnh 3)',
      },
      {
        sizeOrOption: '2. Trọn Bộ 7 Món Lụa Tencel Alyda® Thêu Hoa Mẫu Đơn (Giường Đại 2,0m × 2,2m)',
        marketPrice: '3.850.000đ – 4.200.000đ / bộ',
        storePrice: '2.350.000đ / bộ 7 món',
        note: 'Đóng gói chuẩn 7 món: 1 Ga phủ + 1 Vỏ chăn có sẵn ruột + 4 Vỏ gối đầu + 1 Vỏ gối ôm',
      },
      {
        sizeOrOption: '3. Combo Phòng Cưới Hoàng Gia: Mua 02 Bộ Alyda® 7 Món (Thay Đổi 4 Mùa)',
        marketPrice: '6.400.000đ – 7.300.000đ / 2 bộ',
        storePrice: '4.100.000đ / 2 bộ (Tiết kiệm 200.000đ)',
        note: 'Tặng kèm túi xách quà cưới sang trọng & miễn phí xe tải giao tận giường',
      },
    ],
    numericPrice: 2150000,
    unitLabel: '1 bộ Full 7 món Lụa Tencel Alyda® (Có sẵn ruột chăn & đủ 3 màu)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Quy cách 7 món)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211500_4373635352308930219_4373635352308930219_04e295b3aa5b354be1569c1d47ab183e_3f6b8135.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211554_4373635352308930219_4373635352308930219_51ff76f8ad7f55bb77456bc2a8119010_91199a71.jpg',
      '/assets/aistudio/1792915211670_4373635352308930219_4373635352308930219_dcf43bbff59df1a2035f4e523e822d87_1a356b82.jpg',
    ],
    highlightTag: 'Alyda® 7 Món · Thêu Hoa Mẫu Đơn Phú Quý (3 Màu)',
    summary:
      'Bộ sưu tập Lụa Tencel Alyda® 7 Món thêu Hoa Mẫu Đơn Phú Quý Hoàng Gia đối xứng 3 cụm lớn ở chân chăn và chạy dọc gối ôm: Gồm 3 phiên bản màu sắc quyền quý – Đỏ Hỷ Sự Phòng Cưới (Ảnh 1), Xanh Cổ Vịt Ngọc Lục Bảo (Ảnh 2) và Xanh Tím Than Huyền Bí (Ảnh 3).',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Màu Đỏ Hỷ Sự Phòng Cưới thêu Hoa Mẫu Đơn chỉ vàng kim rực rỡ',
        detail:
          'Bố cục thêu đối xứng 3 đài hoa mẫu đơn nở rộ kết hợp khung viền hoa văn cung đình Châu Âu, mang lại vượng khí tài lộc cho đêm tân hôn.',
      },
      {
        label: 'Ảnh 2 – Màu Xanh Cổ Vịt Ngọc Lục Bảo (Peacock Teal) sang trọng, mát lành',
        detail:
          'Nền lụa Tencel xanh cổ vịt bóng mượt làm tôn bật từng cánh hoa mẫu đơn thêu chỉ vàng đồng và hồng phấn tinh xảo.',
      },
      {
        label: 'Ảnh 3 – Màu Xanh Tím Than (Midnight Blue) chiều sâu quý phái',
        detail:
          'Gam màu trầm lịch lãm cực kỳ tôn nội thất gỗ và giường bọc da cao cấp, giữ vẻ mới đẹp suốt nhiều năm sử dụng.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-AL-01 (Bộ Lụa Tencel Alyda® 7 Món Thêu Hoa Mẫu Đơn Phú Quý)' },
      { label: 'Bảng 03 màu có sẵn', value: '1. Đỏ Hỷ Sự | 2. Xanh Cổ Vịt (Peacock Teal) | 3. Xanh Tím Than' },
      { label: 'Giá ưu đãi Tuyến Hoa', value: '2.150.000đ / bộ 7 món (1m6 & 1m8) | 2.350.000đ (2m×2m2)' },
      { label: 'Quy cách đủ 07 món', value: '1 Ga phủ + 1 Vỏ chăn có ruột + 2 Gối đầu có viền + 2 Gối đầu không viền + 1 Gối ôm' },
      { label: 'Chất liệu & Bảo hành', value: 'Lụa Tencel sinh học mềm mướt, thêu vi tính mật độ cao không bung chỉ' },
    ],
    articleParagraphs: [
      'Trong nghệ thuật bài trí phòng ngủ Á Đông, Hoa Mẫu Đơn được mệnh danh là "Chúa tể của các loài hoa", biểu trưng cho sự phú quý, giàu sang và tình duyên sắt son. Mẫu chăn ga gối Lụa Tencel Alyda® 7 món mã CGL-AL-01 tái hiện sống động từng cánh hoa mẫu đơn bằng kỹ thuật thêu vi tính đa sắc chỉ vàng kim – bạc – hồng kem trên nền lụa Tencel bóng mượt.',
      'Quý khách có thể bấm trực tiếp vào 3 ô ảnh thu nhỏ trên thẻ sản phẩm để ngắm trọn vẹn cả 3 gam màu: Đỏ Hỷ Sự, Xanh Cổ Vịt và Xanh Tím Than với giá ưu đãi tại Tổng Kho Tuyến Hoa chỉ 2.150.000đ/bộ 7 món.'
    ],
    facebookPostCopy:
      '🌺👑 [SIÊU PHẨM ALYDA® 7 MÓN] BỘ CHĂN GA GỐI LỤA TENCEL THÊU HOA MẪU ĐƠN PHÚ QUÝ HOÀNG GIA – ĐỦ 3 MÀU ĐỎ CƯỚI · XANH CỔ VỊT & TÍM THAN! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.200.000đ – 4.200.000đ / bộ 7 món\n' +
      '🔥 GIÁ TẬN GỐC TẠI SHOWROOM TUYẾN HOA: Chỉ 2.150.000đ / trọn bộ 7 món (Cỡ 2m×2m2: 2.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 ĐỦ 03 GAM MÀU ĐẲNG CẤP CHO PHÒNG CƯỚI & BIỆT THỰ:\n' +
      '   🔴 Màu Đỏ Hỷ Sự: Rực rỡ, viên mãn cho phòng tân hôn\n' +
      '   🦚 Màu Xanh Cổ Vịt (Peacock Teal): Mát mắt, sang trọng chuẩn Resort\n' +
      '   🌌 Màu Xanh Tím Than: Lịch lãm, chiều sâu, siêu sạch\n' +
      '🎁 Đóng gói đủ 7 món (1 Ga phủ + 1 Chăn Lụa CÓ SẴN RUỘT + 4 Vỏ gối đầu + 1 Vỏ gối ôm thêu nổi).\n' +
      '📞 Gọi/Zalo Anh Tuyến đặt hàng giao ngay: 0344.727.528!',
  },
  {
    id: 'bo-chan-ga-goi-cuoi-lua-tencel-alyda-theu-versailles-baroque-cglal02',
    code: 'CGL-AL-02',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® 7 Món – Mẫu Thêu Hoa Văn Cổ Điển Versailles & Baroque Đại Cát (03 Mẫu: Đỏ Baroque · Đỏ Versailles · Ghi Tím)',
    shortTitle: 'Bộ Lụa Tencel Alyda 7 Món Thêu Versailles & Baroque (3 Mẫu)',
    priceDisplay: '2.150.000đ / bộ 7 món',
    marketPriceRange: 'Giá thị trường: 3.200.000đ – 4.200.000đ / bộ 7 món',
    marketPriceNote: 'Bộ 3 thiết kế thêu hoa văn Cung Điện Versailles & Baroque Châu Âu sang trọng bậc nhất của thương hiệu Alyda®: Gồm Đỏ Hỷ Sự Baroque Đại Cát, Đỏ Hỷ Sự Khung Versailles Chỉ Vàng và Ghi Tím Khói Versailles.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ 7 Món Lụa Tencel Alyda® Versailles / Baroque (1,6m×2,0m & 1,8m×2,0m)',
        marketPrice: '3.200.000đ – 3.650.000đ / bộ',
        storePrice: '2.150.000đ / bộ 7 món',
        note: 'Chọn Mẫu 1 (Đỏ Baroque), Mẫu 2 (Đỏ Versailles) hoặc Mẫu 3 (Ghi Tím Versailles)',
      },
      {
        sizeOrOption: '2. Trọn Bộ 7 Món Lụa Tencel Alyda® Versailles / Baroque (Giường Đại 2,0m×2,2m)',
        marketPrice: '3.850.000đ – 4.200.000đ / bộ',
        storePrice: '2.350.000đ / bộ 7 món',
        note: 'Lụa Tencel dệt vân Jacquard chìm + Thêu nổi hoa văn hoàng gia vàng kim',
      },
      {
        sizeOrOption: '3. Mua Kèm Đệm Cưới Hoặc Màn Hộp Thông Minh Vân Gỗ Tại Tuyến Hoa',
        marketPrice: '4.600.000đ – 5.800.000đ / combo',
        storePrice: 'Giảm trực tiếp 100.000đ – 200.000đ',
        note: 'Miễn phí xe tải giao lắp trọn gói phòng cưới tận nhà',
      },
    ],
    numericPrice: 2150000,
    unitLabel: '1 bộ Full 7 món Lụa Tencel Alyda® (Có sẵn ruột chăn & đủ 3 mẫu)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Quy cách 7 món)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211805_4373635352308930219_4373635352308930219_6ca642034a200526a07f3b3f046af50c_fd787acc.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211896_4373635352308930219_4373635352308930219_a5377eb5effcd428845780be6f157f97_effdffc5.jpg',
      '/assets/aistudio/1792915211612_4373635352308930219_4373635352308930219_d492e56ecdfbfc29bbffc018169defff_bb528983.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/1792915211805_4373635352308930219_4373635352308930219_6ca642034a200526a07f3b3f046af50c_fd787acc.jpg': {
        badge: 'Mẫu 1/3 · Đỏ Hỷ Sự Thêu Hoa Văn Baroque Đại Cát (Full 7 Món)',
        caption: 'Thêu cụm hoa văn Baroque vàng kim bề thế ở trung tâm chăn, dọc gối ôm và cả 2 góc chân ga phủ.',
      },
      '/assets/aistudio/1792915211896_4373635352308930219_4373635352308930219_a5377eb5effcd428845780be6f157f97_effdffc5.jpg': {
        badge: 'Mẫu 2/3 · Đỏ Hỷ Sự Thêu Khung Cung Điện Versailles Chỉ Vàng',
        caption: 'Khung viền chữ U thêu hoa văn cổ điển Pháp chạy dọc mặt chăn và 4 góc vỏ gối đầu cực kỳ sang trọng.',
      },
      '/assets/aistudio/1792915211612_4373635352308930219_4373635352308930219_d492e56ecdfbfc29bbffc018169defff_bb528983.jpg': {
        badge: 'Mẫu 3/3 · Ghi Tím Khói Thêu Khung Versailles Chỉ Vàng',
        caption: 'Phối màu Ghi Tím trầm ấm cùng chỉ thêu vàng ánh kim nổi bật cho phòng ngủ hiện đại.',
      },
    },
    highlightTag: 'Alyda® 7 Món · Thêu Cổ Điển Versailles & Baroque',
    summary:
      'Lấy cảm hứng từ hoa văn kiến trúc Cung Điện Versailles (Pháp), bộ 3 mẫu Lụa Tencel Alyda® 7 món (CGL-AL-02) gây ấn tượng mạnh mẽ với đường thêu uốn lượn ánh kim vương giả trên nền vải Đỏ Hỷ Sự dệt vân chìm và Ghi Tím Khói hiện đại.',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Mẫu Đỏ Hỷ Sự Baroque Đại Cát: Cụm thêu trung tâm bề thế & viền góc ga phủ',
        detail:
          'Mặt vải đỏ dệt vân chìm tinh tế kết hợp hoa văn Baroque thêu chỉ vàng kim – xanh ngọc ở chính giữa chăn, gối ôm và cả 2 góc chân ga phủ.',
      },
      {
        label: 'Ảnh 2 – Mẫu Đỏ Hỷ Sự Khung Versailles Chỉ Vàng thanh thoát, quý phái',
        detail:
          'Thiết kế khung viền chữ U thêu hoa văn cổ điển Pháp chạy dọc mặt chăn và 4 góc vỏ gối đầu, tôn vẻ đẹp sang trọng vượt thời gian.',
      },
      {
        label: 'Ảnh 3 – Mẫu Ghi Tím Khói Khung Versailles Chỉ Vàng lịch lãm',
        detail:
          'Sự kết hợp hoàn hảo giữa nền lụa Ghi Tím trầm ấm và hoa văn thêu chỉ vàng ánh kim nổi bật.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-AL-02 (Bộ Lụa Tencel Alyda® 7 Món Thêu Versailles & Baroque)' },
      { label: 'Bảng 03 mẫu trong bài', value: '1. Đỏ Baroque Đại Cát | 2. Đỏ Khung Versailles | 3. Ghi Tím Versailles' },
      { label: 'Giá tại Tuyến Hoa', value: '2.150.000đ / bộ 7 món (1m6 & 1m8) | 2.350.000đ (2m×2m2)' },
      { label: 'Chi tiết 07 món', value: '1 Ga phủ + 1 Vỏ chăn có ruột + 2 Gối đầu có viền + 2 Gối đầu không viền + 1 Gối ôm' },
      { label: 'Cam kết chất lượng', value: 'Chính hãng Alyda® – Mặt lụa Tencel mát mịn, không phai màu' },
    ],
    articleParagraphs: [
      'Đối với những gia chủ yêu thích vẻ đẹp sang trọng mang hơi hướng Tân Cổ Điển Châu Âu, bộ sưu tập Lụa Tencel Alyda® thêu hoa văn Versailles & Baroque (mã CGL-AL-02) là điểm nhấn hoàn mỹ cho chiếc giường cưới hoặc phòng ngủ Master.',
      'Toàn bộ 3 mẫu Đỏ Baroque, Đỏ Versailles và Ghi Tím Versailles đều được đóng gói chuẩn 7 món (kèm sẵn ruột chăn) với mức giá ưu đãi tại Showroom Tuyến Hoa chỉ 2.150.000đ/bộ.'
    ],
    facebookPostCopy:
      '🏛️👑 [ĐẲNG CẤP HOÀNG GIA PHÁP] BỘ CHĂN GA GỐI CƯỚI LỤA TENCEL ALYDA® 7 MÓN THÊU HOA VĂN VERSAILLES & BAROQUE! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.200.000đ – 4.200.000đ / bộ 7 món\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI TỔNG KHO TUYẾN HOA: Chỉ 2.150.000đ / bộ 7 món (Cỡ 2m×2m2: 2.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 03 MẪU THÊU HOÀNG GIA TRONG BÀI:\n' +
      '   ❤️ Mẫu 1: Đỏ Hỷ Sự Thêu Hoa Văn Baroque Đại Cát (Thêu cả góc chân ga phủ)\n' +
      '   💛 Mẫu 2: Đỏ Hỷ Sự Thêu Khung Cung Điện Versailles Chỉ Vàng\n' +
      '   💜 Mẫu 3: Ghi Tím Khói Thêu Khung Versailles Chỉ Vàng lịch lãm\n' +
      '🎁 Full bộ 7 món: 1 Ga phủ + 1 Chăn Lụa CÓ SẴN RUỘT + 4 Vỏ gối đầu + 1 Vỏ gối ôm.\n' +
      '📞 Gọi/Zalo chốt mẫu ngay: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-alyda-theu-vuong-mien-vien-song-cglal03',
    code: 'CGL-AL-03',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Alyda® 7 Món – Mẫu Thêu Vương Miện Hoàng Gia (Royal Crown) & Viền Sóng Thổ Cẩm (Hồng Phấn · Xanh Đại Dương · Ghi Tím)',
    shortTitle: 'Bộ Lụa Tencel Alyda 7 Món Thêu Vương Miện & Viền Sóng (3 Màu)',
    priceDisplay: '2.150.000đ / bộ 7 món',
    marketPriceRange: 'Giá thị trường: 3.200.000đ – 4.200.000đ / bộ 7 món',
    marketPriceNote: 'Thiết kế thêu khung Vương Miện Hoàng Gia Châu Âu (Royal Crown) và Viền Sóng Thổ Cẩm Vàng Kim trên nền Lụa Tencel Alyda® 7 món: Gồm Hồng Phấn Pastel, Xanh Đại Dương Đậm và Ghi Tím Than.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ 7 Món Lụa Tencel Alyda® Vương Miện / Viền Sóng (1,6m×2m & 1,8m×2m)',
        marketPrice: '3.200.000đ – 3.650.000đ / bộ',
        storePrice: '2.150.000đ / bộ 7 món',
        note: 'Chọn màu: Hồng Phấn Vương Miện (Ảnh 1) · Xanh Đại Dương (Ảnh 2) · Ghi Tím (Ảnh 3)',
      },
      {
        sizeOrOption: '2. Trọn Bộ 7 Món Lụa Tencel Alyda® Cỡ Đại 2,0m × 2,2m',
        marketPrice: '3.850.000đ – 4.200.000đ / bộ',
        storePrice: '2.350.000đ / bộ 7 món',
        note: 'Đóng gói nguyên bộ 7 món có sẵn ruột chăn êm nhẹ',
      },
      {
        sizeOrOption: '3. Mua Từ 02 Bộ Alyda® 7 Món Trở Lên',
        marketPrice: '6.400.000đ – 7.300.000đ / 2 bộ',
        storePrice: '4.100.000đ / 2 bộ',
        note: 'Miễn phí vận chuyển tận giường khu vực Ứng Hòa – Hà Nội',
      },
    ],
    numericPrice: 2150000,
    unitLabel: '1 bộ Full 7 món Lụa Tencel Alyda® (Có sẵn ruột chăn & đủ 3 màu)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Quy cách 7 món)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211449_4373635352308930219_4373635352308930219_e510b69a1604206e2f95a4c9066f8007_f46e8239.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211725_4373635352308930219_4373635352308930219_1fa60294180917c6906684498dbe263c_d804d0dc.jpg',
      '/assets/aistudio/1792915211527_4373635352308930219_4373635352308930219_d60f07cd91339803fe6a144c786dcbbe_6f96e9ba.jpg',
    ],
    highlightTag: 'Alyda® 7 Món · Thêu Vương Miện & Viền Sóng (3 Màu)',
    summary:
      'Vẻ đẹp thanh lịch, quý phái chuẩn Hoàng Gia Châu Âu: Bộ đôi mẫu thêu Vương Miện (Royal Crown) màu Hồng Phấn Pastel (Ảnh 1) & Xanh Đại Dương Đậm (Ảnh 2) kết hợp cùng mẫu thêu Viền Sóng Lượn & Đai Gối Ôm Thổ Cẩm Vàng Kim màu Ghi Tím Than (Ảnh 3).',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Màu Hồng Phấn Pastel thêu khung Vương Miện Hoàng Gia ánh kim',
        detail:
          'Sắc hồng phấn ngọt ngào kết hợp đường thêu vương miện mềm mại trên cả 5 chiếc gối và mặt chăn, cực hợp phòng cưới trẻ trung.',
      },
      {
        label: 'Ảnh 2 – Màu Xanh Đại Dương Đậm thêu khung Vương Miện Hoàng Gia nổi bật',
        detail:
          'Nền lụa xanh biển sâu làm rực sáng từng đường chỉ thêu vàng đồng, tạo cảm giác mát lạnh và sang trọng.',
      },
      {
        label: 'Ảnh 3 – Màu Ghi Tím Than thêu Viền Sóng Kép & Đai Gối Ôm Thổ Cẩm',
        detail:
          'Điểm nhấn độc đáo ở đai thêu hoa văn thổ cẩm ánh kim ôm trọn chính giữa gối ôm và đường diềm lấp lánh dưới chân ga phủ.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-AL-03 (Bộ Lụa Tencel Alyda® 7 Món Thêu Vương Miện & Viền Sóng)' },
      { label: 'Bảng 03 mẫu màu', value: '1. Hồng Phấn Vương Miện | 2. Xanh Đại Dương Vương Miện | 3. Ghi Tím Viền Sóng' },
      { label: 'Giá tại Tuyến Hoa', value: '2.150.000đ / bộ 7 món (1m6 & 1m8) | 2.350.000đ (2m×2m2)' },
      { label: 'Trọn bộ 07 món', value: '1 Ga phủ + 1 Vỏ chăn có ruột + 2 Gối đầu có viền + 2 Gối đầu không viền + 1 Gối ôm' },
      { label: 'Ưu điểm vượt trội', value: 'Chất lụa Tencel 60s mát mịn, chống tĩnh điện, giặt máy bền màu' },
    ],
    articleParagraphs: [
      'Những đường thêu Vương Miện (Royal Crown) và Viền Sóng Lượn của thương hiệu Alyda® mang đến sự cân bằng tuyệt vời giữa nét sang trọng hoàng gia và sự tinh gọn hiện đại. Bề mặt chăn không bị quá dày đặc chi tiết mà chừa khoảng lụa trơn bóng mượt để tôn lên chất liệu Tencel thượng hạng.',
      'Bấm chọn từng ảnh nhỏ trên thẻ sản phẩm để xem cận cảnh 3 phiên bản Hồng Phấn, Xanh Đại Dương và Ghi Tím Than tại Showroom Tuyến Hoa.'
    ],
    facebookPostCopy:
      '👑🌸 [BST ALYDA® ROYAL CROWN 7 MÓN] BỘ CHĂN GA GỐI LỤA TENCEL THÊU VƯƠNG MIỆN HOÀNG GIA & VIỀN SÓNG VÀNG KIM! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.200.000đ – 4.200.000đ / bộ 7 món\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA: Chỉ 2.150.000đ / trọn bộ 7 món (Cỡ 2m×2m2: 2.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 03 MẪU MÀU SANG TRỌNG TRONG BÀI:\n' +
      '   🌸 Mẫu 1: Hồng Phấn Pastel Thêu Vương Miện Hoàng Gia ngọt ngào\n' +
      '   🌊 Mẫu 2: Xanh Đại Dương Đậm Thêu Vương Miện Chỉ Vàng quyền quý\n' +
      '   ✨ Mẫu 3: Ghi Tím Than Thêu Viền Sóng & Đai Gối Ôm Thổ Cẩm Vàng Kim\n' +
      '🎁 Đóng gói đủ 7 món (Có sẵn ruột chăn + Ga phủ + 5 Vỏ gối đồng bộ).\n' +
      '📞 Gọi/Zalo đặt hàng ngay: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-alyda-luxury-bao-gam-hoang-gia-cglal04',
    code: 'CGL-AL-04',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Alyda® Luxury 7 Món – Mẫu Thêu Biểu Tượng Báo Gấm Hoàng Gia (Leopard Couture) (02 Màu: Trắng Kem Phối Ghi & Ghi Xám Khói)',
    shortTitle: 'Bộ Lụa Tencel Alyda 7 Món Thêu Báo Gấm Luxury (Trắng Kem & Ghi Xám)',
    priceDisplay: '2.150.000đ / bộ 7 món',
    marketPriceRange: 'Giá thị trường: 3.200.000đ – 4.200.000đ / bộ 7 món',
    marketPriceNote: 'Phiên bản giới hạn mang phong cách thời trang cao cấp Ý (Italian Haute Couture) của Alyda®: Gối ôm thêu nổi biểu tượng Báo Gấm Hoàng Gia kèm chữ ký Alyda, viền chăn phối họa tiết vân báo & sóng vàng kim.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ 7 Món Lụa Tencel Alyda® Báo Gấm Luxury (1,6m×2,0m & 1,8m×2,0m)',
        marketPrice: '3.200.000đ – 3.650.000đ / bộ',
        storePrice: '2.150.000đ / bộ 7 món',
        note: 'Chọn màu: Trắng Kem Sữa Phối Ghi (Ảnh 1) hoặc Ghi Xám Khói Phối Vàng (Ảnh 2)',
      },
      {
        sizeOrOption: '2. Trọn Bộ 7 Món Lụa Tencel Alyda® Báo Gấm Luxury (Giường Đại 2,0m × 2,2m)',
        marketPrice: '3.850.000đ – 4.200.000đ / bộ',
        storePrice: '2.350.000đ / bộ 7 món',
        note: 'Phong cách Penthouse & Biệt thự hiện đại, có sẵn ruột chăn đồng bộ',
      },
      {
        sizeOrOption: '3. Mua Kèm Đệm Cao Su Hoặc Đệm Sông Hồng Thế Hệ 4 Tại Tuyến Hoa',
        marketPrice: '4.600.000đ – 5.800.000đ',
        storePrice: 'Giảm ngay 150.000đ vào tổng đơn',
        note: 'Miễn phí xe tải Tuyến Hoa giao tận phòng ngủ',
      },
    ],
    numericPrice: 2150000,
    unitLabel: '1 bộ Full 7 món Lụa Tencel Alyda® Luxury (Có sẵn ruột chăn & đủ 2 màu)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Quy cách 7 món)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211698_4373635352308930219_4373635352308930219_ded577f4f7bab7dfecdc3b7f2ecce26b_756efc26.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211583_4373635352308930219_4373635352308930219_c93bd92548eea948f5817d2363fcc431_3d40a498.jpg',
    ],
    highlightTag: 'Alyda® Luxury 7 Món · Báo Gấm Haute Couture (2 Màu)',
    summary:
      'Đậm chất thời trang xa xỉ Châu Âu cho phòng ngủ Penthouse & Biệt thự hiện đại: Bộ đôi Lụa Tencel Alyda® 7 món thêu biểu tượng Báo Gấm Hoàng Gia (Leopard Couture) cùng chữ ký "Alyda" trên gối ôm, có đủ 2 phối màu Trắng Kem Sữa Phối Ghi (Ảnh 1) và Ghi Xám Khói Phối Vàng Kim (Ảnh 2).',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Phối màu Trắng Kem Sữa & Ghi Bạc thanh lịch chuẩn Penthouse',
        detail:
          'Mặt chăn trắng kem sáng bừng phối mặt lật ghi xám và khung viền thêu vân báo gấm đan xen vân sóng vàng kim thời thượng.',
      },
      {
        label: 'Ảnh 2 – Phối màu Ghi Xám Khói & Vàng Ánh Kim mạnh mẽ, quyền lực',
        detail:
          'Gối ôm thêu nổi hình Báo Gấm bằng chỉ vàng kim lấp lánh trên nền lụa ghi xám, mang lại vẻ đẹp cá tính độc bản.',
      },
      {
        label: 'Quy cách đóng gói Full 07 Món cao cấp (Có sẵn ruột chăn êm ái)',
        detail:
          'Bao gồm: 01 Ga phủ phối viền + 01 Vỏ chăn có ruột + 04 Vỏ gối đầu viền chỉ vàng + 01 Vỏ gối ôm thêu Báo Gấm Alyda.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-AL-04 (Bộ Lụa Tencel Alyda® 7 Món Báo Gấm Leopard Couture)' },
      { label: 'Bảng 02 màu có sẵn', value: '1. Trắng Kem Sữa Phối Ghi Bạc | 2. Ghi Xám Khói Phối Vàng Kim' },
      { label: 'Giá tại Tuyến Hoa', value: '2.150.000đ / bộ 7 món (1m6 & 1m8) | 2.350.000đ (2m×2m2)' },
      { label: 'Trọn bộ 07 món', value: '1 Ga phủ + 1 Vỏ chăn có ruột + 4 Vỏ gối đầu + 1 Vỏ gối ôm thêu Báo Gấm' },
      { label: 'Phong cách thiết kế', value: 'Modern Luxury & Italian Couture – Chất lụa Tencel mát lạnh' },
    ],
    articleParagraphs: [
      'Khác biệt hoàn toàn với các mẫu thêu hoa truyền thống, dòng Alyda® Leopard Couture (mã CGL-AL-04) được thiết kế dành riêng cho các căn hộ hiện đại và gia chủ yêu thích phong cách thời trang cao cấp. Điểm nhấn đắt giá nhất nằm ở chiếc gối ôm thêu nổi hình Báo Gấm kiêu hãnh cùng khung viền chăn ghép dải họa tiết nghệ thuật.',
      'Sản phẩm có sẵn cả 2 tông màu Trắng Kem Phối Ghi và Ghi Xám Khói tại Showroom Tuyến Hoa với giá ưu đãi chỉ 2.150.000đ/bộ 7 món.'
    ],
    facebookPostCopy:
      '🐆✨ [PHIÊN BẢN LUXURY HAUTE COUTURE] BỘ CHĂN GA GỐI LỤA TENCEL ALYDA® 7 MÓN THÊU BÁO GẤM HOÀNG GIA (2 MÀU TRẮNG KEM & GHI XÁM)! 🛌\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.200.000đ – 4.200.000đ / bộ 7 món\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA: Chỉ 2.150.000đ / trọn bộ 7 món (Cỡ 2m×2m2: 2.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 02 PHỐI MÀU PENTHOUSE HIỆN ĐẠI:\n' +
      '   🤍 Mẫu 1: Trắng Kem Sữa phối viền Ghi Bạc thanh lịch, sáng phòng\n' +
      '   🩶 Mẫu 2: Ghi Xám Khói phối thêu Báo Gấm Vàng Kim sang trọng, cá tính\n' +
      '🎁 Đóng gói đủ 7 món: 1 Ga phủ + 1 Chăn Lụa CÓ SẴN RUỘT + 4 Vỏ gối đầu + 1 Vỏ gối ôm thêu Báo Gấm Alyda.\n' +
      '📞 Gọi/Zalo Anh Tuyến giao tận nhà: 0344.727.528!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-alyda-theu-dan-buom-vuon-hoa-cglal05',
    code: 'CGL-AL-05',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Alyda® 7 Món – BST Thêu Đàn Bướm Mùa Xuân, Hoa Mẫu Đơn Xanh & Hoa Nhí (05 Mẫu: Xanh Ngọc · Xanh Coban · Ghi Tím · Hồng Đào · Xanh Lam)',
    shortTitle: 'Bộ Lụa Tencel Alyda 7 Món Thêu Đàn Bướm & Hoa Nghệ Thuật (5 Mẫu)',
    priceDisplay: '2.150.000đ / bộ 7 món',
    marketPriceRange: 'Giá thị trường: 3.200.000đ – 4.200.000đ / bộ 7 món',
    marketPriceNote: 'Tuyển tập 05 mẫu thêu thiên nhiên nghệ thuật sống động nhất của Alyda® (Đàn Bướm Vũ Điệu Mùa Xuân, Hoa Mẫu Đơn Thanh Hoa, Vườn Hoa Love Is Promise & Hoa Nhí Lá Rơi): Mát lành, lãng mạn và tinh tế.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ 7 Món Lụa Tencel Alyda® Thêu Hoa & Đàn Bướm (1,6m×2m & 1,8m×2m)',
        marketPrice: '3.200.000đ – 3.650.000đ / bộ',
        storePrice: '2.150.000đ / bộ 7 món',
        note: 'Bấm chọn 1 trong 5 mẫu trên thanh ảnh thu nhỏ ngay dưới hình chính',
      },
      {
        sizeOrOption: '2. Trọn Bộ 7 Món Lụa Tencel Alyda® Cỡ Đại 2,0m × 2,2m',
        marketPrice: '3.850.000đ – 4.200.000đ / bộ',
        storePrice: '2.350.000đ / bộ 7 món',
        note: 'Đủ 7 món: 1 Ga phủ + 1 Chăn có sẵn ruột + 4 Vỏ gối đầu + 1 Vỏ gối ôm',
      },
      {
        sizeOrOption: '3. Ưu Đãi Mua Từ 02 Bộ Alyda® 7 Món Bất Kỳ',
        marketPrice: '6.400.000đ – 7.300.000đ / 2 bộ',
        storePrice: '4.100.000đ / 2 bộ (Tiết kiệm 200.000đ)',
        note: 'Miễn phí vận chuyển tận nhà & tặng túi đựng bảo quản',
      },
    ],
    numericPrice: 2150000,
    unitLabel: '1 bộ Full 7 món Lụa Tencel Alyda® (Có sẵn ruột chăn & đủ 5 mẫu)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Quy cách 7 món)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211832_4373635352308930219_4373635352308930219_c4966f3ae03156b04fa4394b17e74e2c_76003d64.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211778_4373635352308930219_4373635352308930219_7598a63eeea1f74b3bb881fbcca01067_0e9245a1.jpg',
      '/assets/aistudio/1792915211473_4373635352308930219_4373635352308930219_48ced99a070fee3313ed92993558ea0a_7180765f.jpg',
      '/assets/aistudio/1792915211870_4373635352308930219_4373635352308930219_f450e9ac2d42de96976826e7ba24ebb8_90820a26.jpg',
      '/assets/aistudio/1792915211641_4373635352308930219_4373635352308930219_9ff3cff2fc2aec1560b697991e4dbdae_15077a40.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/1792915211832_4373635352308930219_4373635352308930219_c4966f3ae03156b04fa4394b17e74e2c_76003d64.jpg': {
        badge: 'Mẫu 1/5 · Xanh Ngọc Lục Bảo Thêu Đàn Bướm Mùa Xuân (Full 7 Món)',
        caption: 'Họa tiết đàn bướm 3D tung cánh sống động trên nền lụa Tencel xanh ngọc mát lành.',
      },
      '/assets/aistudio/1792915211778_4373635352308930219_4373635352308930219_7598a63eeea1f74b3bb881fbcca01067_0e9245a1.jpg': {
        badge: 'Mẫu 2/5 · Xanh Coban Hoàng Gia Thêu Hoa Mẫu Đơn Thanh Hoa',
        caption: 'Nền lụa xanh Coban chiều sâu tôn bật đóa hoa mẫu đơn thêu chỉ kem trắng & vàng kim.',
      },
      '/assets/aistudio/1792915211473_4373635352308930219_4373635352308930219_48ced99a070fee3313ed92993558ea0a_7180765f.jpg': {
        badge: 'Mẫu 3/5 · Ghi Tím Khói Thêu Vườn Hoa Cẩm Tú "Love is promise"',
        caption: 'Chân chăn thêu vườn hoa cẩm tú cầu và bướm nhỏ kèm dòng chữ "Alyda – Love is promise".',
      },
      '/assets/aistudio/1792915211870_4373635352308930219_4373635352308930219_f450e9ac2d42de96976826e7ba24ebb8_90820a26.jpg': {
        badge: 'Mẫu 4/5 · Hồng Đào San Hô Thêu Hoa Nhí & Lá Ngân Hạnh Rơi',
        caption: 'Dải hoa nhí 5 cánh kết thành vòm ngang ngực chăn và điểm xuyết lá ngân hạnh rơi lãng mạn.',
      },
      '/assets/aistudio/1792915211641_4373635352308930219_4373635352308930219_9ff3cff2fc2aec1560b697991e4dbdae_15077a40.jpg': {
        badge: 'Mẫu 5/5 · Xanh Lam Sapphire Thêu Hoa Nhí & Lá Ngân Hạnh Rơi',
        caption: 'Phiên bản màu Xanh Lam Sapphire mát mắt của họa tiết Hoa Nhí & Lá Ngân Hạnh Rơi.',
      },
    },
    highlightTag: 'Alyda® 7 Món · Thêu Đàn Bướm & Vườn Hoa (5 Mẫu)',
    summary:
      'Mang cả khu vườn mùa xuân mát lành vào phòng ngủ với 05 thiết kế thêu nổi 3D của Alyda®: (1) Xanh Ngọc Lục Bảo Thêu Đàn Bướm, (2) Xanh Coban Thêu Hoa Mẫu Đơn Thanh Hoa, (3) Ghi Tím Khói Thêu Vườn Hoa "Love is promise", (4) Hồng Đào San Hô Thêu Hoa Nhí Lá Rơi và (5) Xanh Lam Sapphire Thêu Hoa Nhí Lá Rơi.',
    visualAnnotations: [
      {
        label: 'Ảnh 1 & 2 – Xanh Ngọc Thêu Đàn Bướm (Butterfly) & Xanh Coban Thêu Hoa Mẫu Đơn',
        detail:
          'Kỹ thuật thêu chuyển màu 3D làm từng cánh bướm và đóa hoa mẫu đơn xanh trắng nổi bật sống động trên nền lụa Tencel mát rượi.',
      },
      {
        label: 'Ảnh 3 – Ghi Tím Khói Thêu Vườn Hoa Cẩm Tú ("Alyda – Love is promise")',
        detail:
          'Những nhành hoa cẩm tú cầu và bướm nhỏ vươn lên từ chân chăn kết hợp dòng chữ thêu tay lãng mạn trên cả 5 chiếc gối.',
      },
      {
        label: 'Ảnh 4 & 5 – Bộ đôi Thêu Hoa Nhí & Lá Ngân Hạnh Rơi (Hồng Đào & Xanh Lam Sapphire)',
        detail:
          'Dải hoa nhí 5 cánh kết thành vòm ngang ngực chăn và điểm xuyết những chiếc lá rơi nhẹ nhàng khắp mặt chăn.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-AL-05 (Bộ Lụa Tencel Alyda® 7 Món Thêu Đàn Bướm & Vườn Hoa)' },
      { label: 'Đủ 05 mẫu lựa chọn', value: '1. Xanh Ngọc Bướm | 2. Xanh Coban Hoa | 3. Ghi Tím Hoa | 4. Hồng Đào | 5. Xanh Sapphire' },
      { label: 'Giá tại Tuyến Hoa', value: '2.150.000đ / bộ 7 món (1m6 & 1m8) | 2.350.000đ (2m×2m2)' },
      { label: 'Quy cách 07 món', value: '1 Ga phủ + 1 Vỏ chăn có ruột + 2 Gối đầu có viền + 2 Gối đầu không viền + 1 Gối ôm' },
      { label: 'Chất liệu vải', value: '100% Lụa Tencel cao cấp thoáng khí, thân thiện làn da nhạy cảm' },
    ],
    articleParagraphs: [
      'Bộ sưu tập Lụa Tencel Alyda® 7 món chủ đề Thiên Nhiên & Mùa Xuân (mã CGL-AL-05) là lựa chọn tuyệt vời cho các gia đình yêu thích vẻ đẹp mềm mại, thơ mộng và tươi mát. Mỗi bộ sản phẩm là một bức tranh thêu nghệ thuật với hàng chục nghìn mũi chỉ thêu mật độ cao không xù, không cộm lưng.',
      'Quý khách bấm vào từng ô ảnh từ 1 đến 5 ngay dưới ảnh chính để chọn mẫu ưng ý nhất và nhắn cho Showroom Tuyến Hoa qua Zalo 0344.727.528.'
    ],
    facebookPostCopy:
      '🦋🌸 [TUYỆT TÁC THÊU 3D ALYDA® 7 MÓN] BST CHĂN GA GỐI LỤA TENCEL THÊU ĐÀN BƯỚM MÙA XUÂN & VƯỜN HOA NGHỆ THUẬT (ĐỦ 5 MẪU)! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.200.000đ – 4.200.000đ / bộ 7 món\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA: Chỉ 2.150.000đ / trọn bộ 7 món (Cỡ 2m×2m2: 2.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 05 MẪU THÊU HOA & BƯỚM ĐẸP MÊ HỒN:\n' +
      '   🦋 Mẫu 1: Xanh Ngọc Lục Bảo Thêu Đàn Bướm Vũ Điệu Mùa Xuân\n' +
      '   💠 Mẫu 2: Xanh Coban Hoàng Gia Thêu Hoa Mẫu Đơn Thanh Hoa\n' +
      '   💐 Mẫu 3: Ghi Tím Khói Thêu Vườn Hoa Cẩm Tú "Love is promise"\n' +
      '   🍑 Mẫu 4: Hồng Đào San Hô Thêu Hoa Nhí & Lá Ngân Hạnh Rơi\n' +
      '   💎 Mẫu 5: Xanh Lam Sapphire Thêu Hoa Nhí & Lá Ngân Hạnh Rơi\n' +
      '🎁 Đủ 7 món: 1 Ga phủ + 1 Chăn Lụa CÓ SẴN RUỘT + 4 Vỏ gối đầu + 1 Vỏ gối ôm.\n' +
      '📞 Gọi/Zalo chốt mẫu ngay: 0344.727.528 (Tuyến Hoa)!',
  },

  // ===========================================================================
  // 00-TOP. BỘ 06 BÀI ĐĂNG TỪ LÔ 18 ẢNH TRƯỚC:
  //         CHĂN GA GỐI CƯỚI LỤA TENCEL ALYDA® LT 28 (ĐỎ & XANH THAN) & 17 MÃ SKY SILK
  // ===========================================================================
  {
    id: 'bo-chan-ga-goi-cuoi-lua-tencel-alyda-lt28-7mon-cgllt28',
    code: 'CGL-LT-28',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Cưới Lụa Tencel Hoàng Gia Alyda® LT 28 – Quy Cách Đóng Gói Full 7 Món Cao Cấp (Đủ 02 Màu: Đỏ Hỷ Sự & Xanh Than Ghi Chì Thêu Hoa Văn Cung Đình)',
    shortTitle: 'Bộ Chăn Ga Cưới Lụa Tencel Alyda LT 28 (7 Món · Đỏ & Xanh Than)',
    priceDisplay: '2.150.000đ / bộ 7 món',
    marketPriceRange: 'Giá thị trường: 3.200.000đ – 4.200.000đ / bộ 7 món',
    marketPriceNote: 'Siêu phẩm chăn ga gối cưới dòng Lụa Tencel cao cấp thương hiệu Alyda® (Mã LT 28 chính hãng có mã QR kiểm định – Đủ 2 màu Đỏ Hỷ Sự & Xanh Than Ghi Chì): Đóng gói nguyên bộ 07 món đầy đủ cả ga phủ, vỏ chăn có sẵn ruột và 5 vỏ gối thêu nổi hoàng gia.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Trọn Bộ 7 Món Lụa Tencel Alyda® LT 28 Giường 1,6m × 2,0m & 1,8m × 2,0m',
        marketPrice: '3.200.000đ – 3.650.000đ / bộ',
        storePrice: '2.150.000đ / bộ 7 món',
        note: 'Chọn màu Đỏ Hỷ Sự (Ảnh 1) hoặc Xanh Than Ghi Chì (Ảnh 2) – Đủ 7 món có ruột chăn',
      },
      {
        sizeOrOption: '2. Trọn Bộ 7 Món Lụa Tencel Alyda® LT 28 Giường Đại 2,0m × 2,2m',
        marketPrice: '3.850.000đ – 4.200.000đ / bộ',
        storePrice: '2.350.000đ / bộ 7 món',
        note: 'Vải Lụa Tencel dệt vân chìm bóng mượt, thêu vi tính chỉ vàng kim sắc nét',
      },
      {
        sizeOrOption: '3. Combo Phòng Cưới Trọn Gói: Bộ Lụa Tencel LT 28 (7 Món) + Màn Khung / Màn Hộp',
        marketPrice: '4.600.000đ – 5.800.000đ / combo',
        storePrice: '3.050.000đ – 3.400.000đ / combo',
        note: 'Giảm ngay 100.000đ khi mua kèm Đệm hoặc Màn Khung tại Showroom Tuyến Hoa',
      },
    ],
    numericPrice: 2150000,
    unitLabel: '1 bộ Full 7 món chính hãng Alyda® (Có sẵn ruột chăn · Đủ 2 màu Đỏ & Xanh Than)',
    standardDimensions: 'Đủ cỡ giường 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Quy cách chuẩn 7 món)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/CGL_LT_28_alyda_7_mon_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211423_4373635352308930219_4373635352308930219_72e61c228464506313c098328bfdea78_43281348.jpg',
      '/assets/aistudio/1792915211751_4373635352308930219_4373635352308930219_6920ebd645008b5baade37215ee7eea0_024ddbcb.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/CGL_LT_28_alyda_7_mon_bang_gia_hd.jpg': {
        badge: 'Bảng Giá Điền Sẵn · Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® 7 Món (2.150.000đ/bộ)',
        caption: 'Banner HD tổng hợp 6 mã thêu Hoàng Gia tiêu biểu (LT 28, LT 26, LT 21, LT 19, LT 31, LT 35) kèm bảng giá trọn bộ 7 món có sẵn ruột chăn.',
      },
      '/assets/aistudio/1792915211423_4373635352308930219_4373635352308930219_72e61c228464506313c098328bfdea78_43281348.jpg': {
        badge: 'Mẫu 1 · Bộ Lụa Tencel Alyda® LT 28 Đỏ Ruby Hoàng Gia (Full 7 Món)',
        caption: 'Sắc đỏ Ruby vượng khí phòng tân hôn, thêu nổi hoa văn cung đình Châu Âu ánh kim trên chăn và 5 vỏ gối.',
      },
      '/assets/aistudio/1792915211751_4373635352308930219_4373635352308930219_6920ebd645008b5baade37215ee7eea0_024ddbcb.jpg': {
        badge: 'Mẫu 2 · Bộ Lụa Tencel Alyda® LT 28 Xanh Than Quý Phái (Full 7 Món)',
        caption: 'Phiên bản màu Xanh Than (Royal Navy) lịch lãm, làm nổi bật đường thêu chỉ vàng kim tinh xảo.',
      },
    },
    highlightTag: 'Siêu Phẩm Phòng Cưới · Alyda® LT 28 (Đỏ & Xanh Than)',
    summary:
      'Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® Mã LT 28 sang trọng bậc nhất mùa cưới: Sắc đỏ Ruby vượng khí kết hợp mặt vải dệt vân Jacquard chìm mềm mượt như lụa tơ tằm, điểm xuyết khung thêu hoa văn Hoàng Gia ánh kim tinh xảo và quy cách đóng gói đủ 7 món (có sẵn ruột chăn).',
    visualAnnotations: [
      {
        label: 'Quy cách đóng gói Full 07 Món chuẩn phòng cưới (In rõ trên Catalogue hãng)',
        detail:
          'Bao gồm: 01 Ga phủ rủ cạnh sang trọng + 01 Vỏ gối ôm thêu hoa văn + 02 Vỏ gối đầu có viền + 02 Vỏ gối đầu không viền + 01 Vỏ chăn có sẵn ruột êm nhẹ.',
      },
      {
        label: 'Chất liệu Lụa Tencel sinh học dệt vân chìm bóng mượt, mát lạnh tự nhiên',
        detail:
          'Chiết xuất từ sợi gỗ sồi tự nhiên thoáng khí gấp 3 lần cotton thường, không tích điện mùa đông, không xù lông hay phai màu khi giặt máy.',
      },
      {
        label: 'Nghệ thuật thêu nổi Hoàng Gia Châu Âu đối xứng trên chăn và 5 gối',
        detail:
          'Từng đường kim mũi chỉ ánh vàng kim và bạc đan xen sắc sảo, tôn lên vẻ đẹp quyền quý, viên mãn cho phòng tân hôn.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'CGL-LT-28 (Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® LT 28)' },
      { label: 'Giá ưu đãi Tuyến Hoa', value: '2.150.000đ / bộ 7 món (1m6 & 1m8) | 2.350.000đ (2m×2m2)' },
      { label: 'Giá thị trường', value: '3.200.000đ – 4.200.000đ / bộ 7 món' },
      { label: 'Chi tiết 07 món', value: '1 Ga phủ + 1 Vỏ chăn có ruột + 2 Vỏ gối có viền + 2 Vỏ gối không viền + 1 Vỏ gối ôm' },
      { label: 'Chất liệu & Bảo hành', value: '100% Lụa Tencel cao cấp dệt vân chìm – Cam kết không xù, không phai màu' },
    ],
    articleParagraphs: [
      'Bộ Chăn Ga Gối Cưới Lụa Tencel Alyda® LT 28 vừa cập bến Showroom Tuyến Hoa là lựa chọn số 1 cho các cặp đôi chuẩn bị cưới hỏi hoặc biếu tặng tân gia cao cấp. Khác với các bộ chăn ga 4–5 món thông thường phải mua thêm ruột chăn và gối tựa, bộ LT 28 được đóng gói tiêu chuẩn 07 món đồng bộ từ ga phủ, chăn có sẵn ruột đến 4 vỏ gối đầu (2 có viền, 2 không viền) và 1 vỏ gối ôm.',
      'Tại Tổng Kho Chăn Ga Gối Đệm Tuyến Hoa (Chợ Cháy, Ứng Hòa), quý khách được kiểm tra trực tiếp độ mướt mát của chất lụa Tencel chính hãng Alyda® với mức giá tận gốc chỉ 2.150.000đ/bộ 7 món (rẻ hơn thị trường trên 1.000.000đ/bộ).'
    ],
    facebookPostCopy:
      '👑💒 [SIÊU PHẨM PHÒNG CƯỚI] BỘ CHĂN GA GỐI LỤA TENCEL HOÀNG GIA ALYDA® MÃ LT 28 – FULL BỘ 7 MÓN CÓ SẴN RUỘT CHĂN! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 3.200.000đ – 4.200.000đ / bộ 7 món\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI TỔNG KHO TUYẾN HOA:\n' +
      '   👉 Cỡ giường 1m6 × 2m & 1m8 × 2m: Chỉ 2.150.000đ / trọn bộ 7 món\n' +
      '   👉 Cỡ giường đại 2m0 × 2m2: Chỉ 2.350.000đ / trọn bộ 7 món\n' +
      '--------------------------------------------\n' +
      '🎁 QUY CÁCH ĐÓNG GÓI ĐỦ 07 MÓN CAO CẤP:\n' +
      '   ✅ 01 Ga phủ chần sang trọng\n' +
      '   ✅ 01 Vỏ chăn Lụa Tencel CÓ SẴN RUỘT êm nhẹ\n' +
      '   ✅ 02 Vỏ gối đầu có viền thêu nổi Hoàng Gia\n' +
      '   ✅ 02 Vỏ gối đầu không viền đồng bộ\n' +
      '   ✅ 01 Vỏ gối ôm thêu hoa văn cung đình\n' +
      '✨ Chất liệu Lụa Tencel dệt vân chìm mềm mướt như tơ, mát mùa hè – ấm mùa đông, cam kết không xù lông!\n' +
      '🚛 Miễn phí giao hàng tận nhà – Gọi/Zalo Anh Tuyến: 0344.727.528!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-sky-silk-do-cuoi-hong-pastel-cglsk01',
    code: 'CGL-SK-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Sky Silk 60s Tông Đỏ Phòng Cưới & Hồng Phấn Pastel (Đủ 03 Mã Màu: SKY24 Đỏ Tươi · SKY1 Đỏ Đô · SKY14 Hồng Phấn)',
    shortTitle: 'Bộ Chăn Ga Lụa Sky Silk Đỏ Cưới & Hồng (SKY24 · SKY1 · SKY14)',
    priceDisplay: '1.150.000đ / bộ 5 món',
    marketPriceRange: 'Giá thị trường: 1.650.000đ – 2.250.000đ / bộ',
    marketPriceNote: 'Bộ sưu tập Lụa Tencel Sky Silk đơn sắc thêu chữ nghệ thuật dành riêng cho phòng tân hôn và phòng ngủ lãng mạn: Đầy đủ 3 gam màu Đỏ Tươi (SKY24), Đỏ Đô Rượu Vang (SKY1) và Hồng Phấn Pastel (SKY14).',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Bộ 5 Món Lụa Sky Silk (Ga + Vỏ Chăn + 2 Vỏ Gối Đầu + 1 Vỏ Gối Ôm) – 1m6 & 1m8',
        marketPrice: '1.650.000đ – 1.850.000đ / bộ',
        storePrice: '1.150.000đ / bộ 5 món',
        note: 'Chọn mã màu: SKY24 (Đỏ Tươi), SKY1 (Đỏ Đô) hoặc SKY14 (Hồng Phấn)',
      },
      {
        sizeOrOption: '2. Bộ 5 Món Lụa Sky Silk Cỡ Đại 2,0m × 2,2m (Hoặc Chần Bông Ruột Chăn Hè Thu)',
        marketPrice: '1.950.000đ – 2.250.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Miễn phí bo chun theo đúng độ dày đệm từ 9cm đến 30cm',
      },
      {
        sizeOrOption: '3. Mua Từ 02 Bộ Sky Silk Bất Kỳ (Hoặc Mua Kèm Đệm Tại Tuyến Hoa)',
        marketPrice: '3.300.000đ – 3.700.000đ / 2 bộ',
        storePrice: '2.150.000đ / 2 bộ (Tiết kiệm 150.000đ)',
        note: 'Tặng kèm túi giặt chuyên dụng bảo vệ sợi lụa Tencel',
      },
    ],
    numericPrice: 1150000,
    unitLabel: '1 bộ 5 món Lụa Tencel Sky Silk (Đủ 3 mã: SKY24, SKY1, SKY14)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Miễn phí bo chun theo cỡ đệm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/CGL_SK_01_sky_silk_17_mau_bang_gia_hd.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211191_4373635352308930219_4373635352308930219_89ee19d8559544880707e8019ec9c5d6_3e4457fc.jpg',
      '/assets/aistudio/1792915211216_4373635352308930219_4373635352308930219_937cb974dfdfec95a6dfdacbe4887284_d0d5f770.jpg',
      '/assets/aistudio/1792915210976_4373635352308930219_4373635352308930219_230c053dddb35b8567efb4925e7f7e43_bcf990bc.jpg',
    ],
    imageCaptions: {
      '/assets/aistudio/CGL_SK_01_sky_silk_17_mau_bang_gia_hd.jpg': {
        badge: 'Bảng Giá Điền Sẵn · BST 17 Mã Màu Lụa Tencel Sky Silk 60s (1.150.000đ/bộ)',
        caption: 'Banner HD tổng hợp các mã màu Sky Silk 60s bán chạy kèm bảng giá niêm yết: 1.150.000đ/bộ 5 món (1m6 & 1m8) và 1.350.000đ/bộ (2m0×2m2).',
      },
      '/assets/aistudio/1792915211191_4373635352308930219_4373635352308930219_89ee19d8559544880707e8019ec9c5d6_3e4457fc.jpg': {
        badge: 'Mã SKY24 · Đỏ Tươi Hỷ Sự Rực Rỡ Phòng Tân Hôn',
        caption: 'Sắc Đỏ Tươi truyền thống kết hợp chữ thêu nổi Sky Silk trắng tinh khôi trên mặt chăn và gối ôm.',
      },
      '/assets/aistudio/1792915211216_4373635352308930219_4373635352308930219_937cb974dfdfec95a6dfdacbe4887284_d0d5f770.jpg': {
        badge: 'Mã SKY1 · Đỏ Đô Rượu Vang Trầm Ấm Quý Phái',
        caption: 'Gam Đỏ Đô chiều sâu chuẩn Châu Âu, tôn da và cực kỳ sang trọng dưới ánh đèn vàng phòng ngủ.',
      },
      '/assets/aistudio/1792915210976_4373635352308930219_4373635352308930219_230c053dddb35b8567efb4925e7f7e43_bcf990bc.jpg': {
        badge: 'Mã SKY14 · Hồng Phấn Pastel Ngọt Ngào Lãng Mạn',
        caption: 'Sắc Hồng Phấn nhẹ nhàng, chất lụa Tencel 60s mát mịn nâng niu giấc ngủ suốt 4 mùa.',
      },
    },
    highlightTag: 'Lụa Tencel Sky Silk · Mã SKY24 · SKY1 · SKY14',
    summary:
      'Bộ 03 mã màu Lụa Tencel Sky Silk bán chạy nhất cho phòng cưới & phòng ngủ vợ chồng trẻ: Mã SKY24 (Đỏ Tươi Hỷ Sự), Mã SKY1 (Đỏ Đô Rượu Vang quyền quý) và Mã SKY14 (Hồng Phấn Pastel ngọt ngào). Bề mặt lụa Tencel 60s bóng mịn, thêu nổi chữ "Sky Silk" thanh lịch trên cả chăn, gối đầu và gối ôm.',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Mã SKY24: Sắc Đỏ Tươi Hỷ Sự rực rỡ cho đêm tân hôn viên mãn',
        detail:
          'Tông đỏ tươi chuẩn truyền thống Á Đông kết hợp chữ thêu Sky Silk trắng tinh khôi trên mặt chăn và gối ôm.',
      },
      {
        label: 'Ảnh 2 – Mã SKY1: Sắc Đỏ Đô Rượu Vang trầm ấm, sang trọng chuẩn Châu Âu',
        detail:
          'Gam đỏ đậm chiều sâu, cực kỳ tôn da và giữ vẻ ấm cúng, quý phái dưới ánh đèn vàng phòng ngủ.',
      },
      {
        label: 'Ảnh 3 – Mã SKY14: Sắc Hồng Phấn Pastel nhẹ nhàng, thư thái',
        detail:
          'Lựa chọn hoàn hảo để đổi gió cho phòng ngủ vợ chồng trẻ hoặc phòng bé gái với chất lụa mát mịn nâng niu làn da.',
      },
    ],
    specs: [
      { label: 'Mã bài & Mã màu', value: 'CGL-SK-01 | Gồm 03 mã màu: SKY24 (Đỏ Tươi), SKY1 (Đỏ Đô), SKY14 (Hồng Phấn)' },
      { label: 'Giá tại Tuyến Hoa', value: '1.150.000đ / bộ 5 món (1m6 & 1m8) | 1.350.000đ (Cỡ đại 2m×2m2)' },
      { label: 'Giá thị trường', value: '1.650.000đ – 2.250.000đ / bộ' },
      { label: 'Quy cách 05 món', value: '01 Ga (phủ hoặc bo chun) + 01 Vỏ chăn lụa + 02 Vỏ gối nằm + 01 Vỏ gối ôm' },
      { label: 'Chất liệu vải', value: 'Lụa Tencel Sky Silk 60s mềm mát, kháng khuẩn, không bám bụi' },
    ],
    articleParagraphs: [
      'Dòng chăn ga gối Lụa Tencel Sky Silk nổi tiếng với thiết kế tối giản chuẩn khách sạn 5 sao: Không cần họa tiết rườm rà, chính độ bóng mượt tự nhiên của sợi lụa Tencel kết hợp logo "Sky Silk" thêu chỉ nổi tinh tế đã tạo nên sức hút sang trọng vượt thời gian.',
      'Trong nhóm màu ấm cho phòng cưới, Showroom Tuyến Hoa có sẵn cả 3 mã: SKY24 (Đỏ tươi), SKY1 (Đỏ đô rượu vang) và SKY14 (Hồng phấn). Quý khách bấm vào từng ảnh nhỏ bên dưới để xem cận cảnh từng mã màu và đọc đúng mã số khi đặt hàng.'
    ],
    facebookPostCopy:
      '🌹✨ [BST LỤA TENCEL SKY SILK] BỘ 3 MÃ MÀU ĐỎ CƯỚI & HỒNG PASTEL ĐẸP MÊ ĐẮM (MÃ SKY24 · SKY1 · SKY14) – MÁT LẠNH NHƯ LỤA TƠ TẰM! 🛌\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.650.000đ – 2.250.000đ / bộ\n' +
      '🔥 GIÁ TẬN GỐC TẠI SHOWROOM TUYẾN HOA: Chỉ 1.150.000đ / bộ 5 món (Cỡ 2m×2m2: 1.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 CHỌN NGAY 03 MÃ MÀU TRONG BÀI:\n' +
      '   🔴 Mã SKY24: Đỏ Tươi Hỷ Sự rực rỡ phòng cưới\n' +
      '   🍷 Mã SKY1: Đỏ Đô Rượu Vang trầm ấm, quý phái\n' +
      '   🌸 Mã SKY14: Hồng Phấn Pastel ngọt ngào, trẻ trung\n' +
      '✅ Trọn bộ 5 món: 01 Ga (miễn phí bo chun theo cỡ đệm) + 01 Chăn lụa + 02 Vỏ gối nằm + 01 Vỏ gối ôm thêu chữ Sky Silk.\n' +
      '📞 Gọi/Zalo chốt mã màu ngay: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-sky-silk-vang-kem-trang-su-cglsk02',
    code: 'CGL-SK-02',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Sky Silk 60s Tông Vàng Hoàng Gia, Trắng Sứ Khách Sạn 5 Sao & Kem Muji (Mã SKY225 · SKY25 · SKY27)',
    shortTitle: 'Bộ Chăn Ga Lụa Sky Silk Vàng · Trắng · Kem (SKY225 · SKY25 · SKY27)',
    priceDisplay: '1.150.000đ / bộ 5 món',
    marketPriceRange: 'Giá thị trường: 1.650.000đ – 2.250.000đ / bộ',
    marketPriceNote: 'Bộ 3 gam màu Sáng Sang Trọng giúp phòng ngủ rộng rãi và bừng sáng như Resort 5 sao: Vàng Hoàng Gia (SKY225), Trắng Kem Sữa (SKY25) và Kem Cát Muji (SKY27).',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Bộ 5 Món Lụa Sky Silk (Mã SKY225 Vàng · SKY25 Trắng · SKY27 Kem) – 1m6 & 1m8',
        marketPrice: '1.650.000đ – 1.850.000đ / bộ',
        storePrice: '1.150.000đ / bộ 5 món',
        note: 'Màu sáng sang trọng, hợp mệnh Kim – mệnh Thổ và nội thất gỗ hiện đại',
      },
      {
        sizeOrOption: '2. Bộ 5 Món Lụa Sky Silk Cỡ Đại 2,0m × 2,2m',
        marketPrice: '1.950.000đ – 2.250.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Hỗ trợ may bo chun vừa khít mọi loại đệm cao su, đệm lò xo dày 10–32cm',
      },
      {
        sizeOrOption: '3. Ưu Đãi Mua Combo 02 Bộ Sky Silk (Thay Đổi Giặt Giũ Hàng Tuần)',
        marketPrice: '3.300.000đ – 3.700.000đ / 2 bộ',
        storePrice: '2.150.000đ / 2 bộ',
        note: 'Miễn phí vận chuyển tận nhà khu vực Ứng Hòa – Hà Nội',
      },
    ],
    numericPrice: 1150000,
    unitLabel: '1 bộ 5 món Lụa Tencel Sky Silk (Đủ 3 mã: SKY225, SKY25, SKY27)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Ga phủ hoặc bo chun)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211087_4373635352308930219_4373635352308930219_04634c9b4c9c90fdaf3bdb657c425647_2906e971.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211242_4373635352308930219_4373635352308930219_cdbc2ca46348ef830d619821cacb6431_2cabba17.jpg',
      '/assets/aistudio/1792915211268_4373635352308930219_4373635352308930219_903485b44e9fa135a8195bf5ff38f066_3fd589a2.jpg',
    ],
    highlightTag: 'Tông Sáng Resort 5 Sao · SKY225 · SKY25 · SKY27',
    summary:
      'Dành cho gia chủ yêu thích không gian phòng ngủ sáng bừng, tinh khiết và đẳng cấp: Mã SKY225 (Vàng Hoàng Gia phú quý), Mã SKY25 (Trắng Kem Sữa thêu chỉ vàng chuẩn khách sạn 5 sao) và Mã SKY27 (Kem Cát Muji nhẹ nhàng, ấm áp).',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Mã SKY225: Sắc Vàng Hoàng Gia (Golden Champagne) vượng tài lộc',
        detail:
          'Bề mặt lụa óng ả như tơ vàng, cực kỳ ăn nhập với giường bọc nệm nỉ, giường gỗ tự nhiên và ánh đèn chùm ấm.',
      },
      {
        label: 'Ảnh 2 – Mã SKY25: Sắc Trắng Kem Sữa thêu logo Sky Silk chỉ vàng kim',
        detail:
          'Mang trọn trải nghiệm nghỉ dưỡng khách sạn 5 sao về phòng ngủ gia đình, sạch sẽ và thoáng đãng tuyệt đối.',
      },
      {
        label: 'Ảnh 3 – Mã SKY27: Sắc Kem Cát (Sand Beige) phong cách Muji Nhật Bản',
        detail:
          'Tông màu trung tính dịu mắt, dễ phối với mọi màu rèm cửa và sơn tường, không lo lộ vết bẩn.',
      },
    ],
    specs: [
      { label: 'Mã bài & Mã màu', value: 'CGL-SK-02 | Gồm 03 mã màu: SKY225 (Vàng), SKY25 (Trắng Kem), SKY27 (Kem Be)' },
      { label: 'Giá tại Tuyến Hoa', value: '1.150.000đ / bộ 5 món (1m6 & 1m8) | 1.350.000đ (2m×2m2)' },
      { label: 'Giá thị trường', value: '1.650.000đ – 2.250.000đ / bộ' },
      { label: 'Thành phần bộ', value: '01 Ga + 01 Chăn lụa + 02 Vỏ gối đầu + 01 Vỏ gối ôm đồng bộ' },
      { label: 'Đặc tính nổi bật', value: 'Sợi Tencel tự nhiên mát mịn, thấm hút mồ hôi gấp 2 lần cotton' },
    ],
    articleParagraphs: [
      'Theo xu hướng thiết kế nội thất phòng ngủ hiện đại và biệt thự tân cổ điển, các gam màu sáng như Vàng Champagne (SKY225), Trắng Kem Sữa (SKY25) và Kem Cát Muji (SKY27) luôn được ưu tiên hàng đầu vì tạo hiệu ứng thị giác mở rộng không gian và mang lại cảm giác thư thái ngay khi bước vào phòng.',
      'Toàn bộ 3 mã màu SKY225, SKY25 và SKY27 đang có sẵn tại Showroom Tuyến Hoa với giá ưu đãi chỉ 1.150.000đ/bộ 5 món, miễn phí bo chun theo kích thước đệm thực tế của gia đình.'
    ],
    facebookPostCopy:
      '✨🏨 [CHUẨN RESORT 5 SAO] BỘ CHĂN GA GỐI LỤA TENCEL SKY SILK TÔNG VÀNG HOÀNG GIA · TRẮNG SỨ & KEM MUJI (MÃ SKY225 · SKY25 · SKY27)! 🛌\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.650.000đ – 2.250.000đ / bộ\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA: Chỉ 1.150.000đ / bộ 5 món (Cỡ 2m×2m2: 1.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 03 MÃ MÀU SÁNG SANG TRỌNG TRONG BÀI:\n' +
      '   💛 Mã SKY225: Vàng Hoàng Gia (Golden Champagne) phú quý, vượng khí\n' +
      '   🤍 Mã SKY25: Trắng Kem Sữa thêu chỉ vàng chuẩn Khách Sạn 5 Sao\n' +
      '   🤎 Mã SKY27: Kem Cát Be phong cách Muji Nhật Bản thanh lịch\n' +
      '✅ Chất lụa Tencel mềm mướt, mát rượi khi chạm lưng, giặt máy thoải mái không xù lông.\n' +
      '📞 Gọi/Zalo Anh Tuyến đặt hàng giao ngay: 0344.727.528!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-sky-silk-xanh-ngoc-xanh-com-cglsk03',
    code: 'CGL-SK-03',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Sky Silk 60s Tông Xanh Ngọc Bích, Xanh Cốm & Xanh Cổ Vịt Lục Bảo (Mã SKY352 · SKY12 · SKY362 · SKY7)',
    shortTitle: 'Bộ Chăn Ga Lụa Sky Silk Xanh Ngọc & Xanh Cốm (SKY352 · SKY12 · SKY362)',
    priceDisplay: '1.150.000đ / bộ 5 món',
    marketPriceRange: 'Giá thị trường: 1.650.000đ – 2.250.000đ / bộ',
    marketPriceNote: 'Nhóm màu Xanh Thiên Nhiên (Mint – Jade – Emerald) làm dịu mắt tức thì trong mùa hè: Gồm SKY352 (Xanh Ngọc Mint), SKY12 (Xanh Cốm Trà Non) và cặp mã SKY362 / SKY7 (Xanh Cổ Vịt Lục Bảo).',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Bộ 5 Món Lụa Sky Silk (Mã SKY352 · SKY12 · SKY362 / SKY7) – 1m6 & 1m8',
        marketPrice: '1.650.000đ – 1.850.000đ / bộ',
        storePrice: '1.150.000đ / bộ 5 món',
        note: 'Màu xanh mát lành, cực hợp mệnh Mộc – mệnh Hỏa – mệnh Thủy',
      },
      {
        sizeOrOption: '2. Bộ 5 Món Lụa Sky Silk Cỡ Đại 2,0m × 2,2m',
        marketPrice: '1.950.000đ – 2.250.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Đường may viền gối bản rộng chuẩn khách sạn, khóa kéo chăn bền bỉ',
      },
      {
        sizeOrOption: '3. Mua Từ 02 Bộ Sky Silk Trở Lên',
        marketPrice: '3.300.000đ – 3.700.000đ / 2 bộ',
        storePrice: '2.150.000đ / 2 bộ',
        note: 'Miễn phí bo chun ga theo yêu cầu & giao tận phòng ngủ',
      },
    ],
    numericPrice: 1150000,
    unitLabel: '1 bộ 5 món Lụa Tencel Sky Silk (Đủ 4 mã: SKY352, SKY12, SKY362, SKY7)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211165_4373635352308930219_4373635352308930219_79e8453be4ed01196756b172fb03eaec_44e9bd52.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211113_4373635352308930219_4373635352308930219_18656ab8f37e99d74e56ab19f48f4c07_5be1967c.jpg',
      '/assets/aistudio/1792915211139_4373635352308930219_4373635352308930219_2001c9d89df8f4f1e251822c047364e5_c05643c5.jpg',
      '/assets/aistudio/1792915211372_4373635352308930219_4373635352308930219_810a1836769f2bf469f1034cdce1e7e0_bddd1d35.jpg',
    ],
    highlightTag: 'Xanh Ngọc & Lục Bảo · SKY352 · SKY12 · SKY362',
    summary:
      'Tuyển tập 04 mã màu Xanh Ngọc & Xanh Lục Bảo thanh mát nhất của dòng Lụa Tencel Sky Silk: Mã SKY352 (Xanh Ngọc Bích Nhạt Mint Sage), Mã SKY12 (Xanh Cốm Trà Non tươi mới) và bộ đôi Mã SKY362 / SKY7 (Xanh Cổ Vịt Ngọc Lục Bảo chiều sâu).',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Mã SKY352: Xanh Ngọc Bích Nhạt (Mint Celadon) dịu mát như sương sớm',
        detail:
          'Gam màu pastel thời thượng nhất năm, mang lại cảm giác hạ nhiệt 2–3 độ C ngay khi bước vào phòng ngủ.',
      },
      {
        label: 'Ảnh 2 – Mã SKY12: Xanh Cốm Ngọc (Jade Green) tươi trẻ, tràn đầy sinh khí',
        detail:
          'Sắc xanh lá non thanh nhã kết hợp chữ thêu Sky Silk ánh bạc mềm mại, rất được lòng các gia đình trẻ.',
      },
      {
        label: 'Ảnh 3 & 4 – Mã SKY362 & Mã SKY7: Xanh Cổ Vịt Ngọc Lục Bảo (Emerald Teal)',
        detail:
          'Hai mã số tương đương của cùng tông Xanh Lục Bảo đậm quyền quý (đồng bộ với rèm vải xanh cổ vịt tại Showroom Tuyến Hoa).',
      },
    ],
    specs: [
      { label: 'Mã bài & Mã màu', value: 'CGL-SK-03 | Gồm: SKY352 (Xanh Mint), SKY12 (Xanh Cốm), SKY362 & SKY7 (Xanh Cổ Vịt)' },
      { label: 'Giá tại Tuyến Hoa', value: '1.150.000đ / bộ 5 món (1m6 & 1m8) | 1.350.000đ (2m×2m2)' },
      { label: 'Giá thị trường', value: '1.650.000đ – 2.250.000đ / bộ' },
      { label: 'Trọn bộ 05 món', value: '01 Ga + 01 Vỏ chăn lụa + 02 Vỏ gối đầu + 01 Vỏ gối ôm thêu Sky Silk' },
      { label: 'Ưu điểm chất liệu', value: 'Lụa Tencel 60s điều hòa thân nhiệt, kháng khuẩn, thân thiện làn da nhạy cảm' },
    ],
    articleParagraphs: [
      'Những gam màu xanh ngọc bích và xanh lục bảo của bộ sưu tập Lụa Tencel Sky Silk luôn nằm trong nhóm cháy hàng nhanh nhất mỗi dịp hè thu tại Showroom Tuyến Hoa. Đặc biệt, khách hàng đã lắp rèm vải xanh cổ vịt hoặc rèm cầu vồng xanh ngọc thường chọn ngay mã SKY362 (hoặc mã tương đương SKY7) và SKY352 để tạo nên tổng thể phòng ngủ đồng điệu 100%.',
      'Bấm vào các ảnh phụ bên dưới để đối chiếu trực tiếp từng sắc độ xanh (SKY352, SKY12, SKY362, SKY7) trước khi đặt mua.'
    ],
    facebookPostCopy:
      '🌿💎 [MÁT LẠNH NHƯ BĂNG] BỘ CHĂN GA GỐI LỤA TENCEL SKY SILK TÔNG XANH NGỌC BÍCH · XANH CỐM & XANH CỔ VỊT (MÃ SKY352 · SKY12 · SKY362 · SKY7)! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.650.000đ – 2.250.000đ / bộ\n' +
      '🔥 GIÁ TẠI TỔNG KHO TUYẾN HOA: Chỉ 1.150.000đ / bộ 5 món (Cỡ 2m×2m2: 1.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 ĐỦ 04 MÃ MÀU XANH PHONG THỦY ĐỂ LỰA CHỌN:\n' +
      '   🍵 Mã SKY352: Xanh Ngọc Bích Nhạt (Mint Sage) dịu mát, thư giãn\n' +
      '   🌱 Mã SKY12: Xanh Cốm Ngọc (Jade Green) tươi mới, trẻ trung\n' +
      '   🦚 Mã SKY362 & SKY7: Xanh Cổ Vịt Ngọc Lục Bảo (Emerald Teal) sang trọng, sạch sẽ\n' +
      '✅ Trọn bộ 5 món Lụa Tencel 60s bóng mượt, miễn phí bo chun theo đúng độ dày đệm!\n' +
      '📞 Gọi/Zalo chốt mã màu ngay: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-sky-silk-xanh-duong-bang-tuyet-cglsk04',
    code: 'CGL-SK-04',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Sky Silk 60s Tông Xanh Lam Pastel, Xanh Đại Dương & Xanh Băng Tuyết (Mã SKY343 · SKY308 · SKY338 · SKY26)',
    shortTitle: 'Bộ Chăn Ga Lụa Sky Silk Xanh Dương & Xanh Băng (SKY343 · SKY308 · SKY338)',
    priceDisplay: '1.150.000đ / bộ 5 món',
    marketPriceRange: 'Giá thị trường: 1.650.000đ – 2.250.000đ / bộ',
    marketPriceNote: 'Bộ sưu tập tông Xanh Dương (Ocean & Ice Blue) giúp giấc ngủ sâu và êm dịu hơn: Gồm SKY343 (Xanh Lam Pastel), SKY308 (Xanh Coban Đại Dương) và cặp mã SKY338 / SKY26 (Xanh Ghi Băng Tuyết).',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Bộ 5 Món Lụa Sky Silk (Mã SKY343 · SKY308 · SKY338 / SKY26) – 1m6 & 1m8',
        marketPrice: '1.650.000đ – 1.850.000đ / bộ',
        storePrice: '1.150.000đ / bộ 5 món',
        note: 'Tông màu làm dịu thần kinh, giúp dễ đi vào giấc ngủ sâu',
      },
      {
        sizeOrOption: '2. Bộ 5 Món Lụa Sky Silk Cỡ Đại 2,0m × 2,2m',
        marketPrice: '1.950.000đ – 2.250.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Lụa Tencel thêu nổi chữ Sky Silk sắc nét trên cả chăn và gối',
      },
      {
        sizeOrOption: '3. Ưu Đãi Mua Combo 02 Bộ Sky Silk Bất Kỳ',
        marketPrice: '3.300.000đ – 3.700.000đ / 2 bộ',
        storePrice: '2.150.000đ / 2 bộ',
        note: 'Miễn phí giao hàng tận giường tại Ứng Hòa & Hà Nội',
      },
    ],
    numericPrice: 1150000,
    unitLabel: '1 bộ 5 món Lụa Tencel Sky Silk (Đủ 4 mã: SKY343, SKY308, SKY338, SKY26)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211346_4373635352308930219_4373635352308930219_35c17f5e89823d1d8ffeae5e4f272b12_233b5411.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211320_4373635352308930219_4373635352308930219_44065cce3fbf14de9cf2d727d9537fa9_28379d5e.jpg',
      '/assets/aistudio/1792915211397_4373635352308930219_4373635352308930219_b2fed4ab02f536dcc537698d21f4e6af_fde3fc32.jpg',
      '/assets/aistudio/1792915211062_4373635352308930219_4373635352308930219_714d2bf69fc437cc1ebf50ebe5ee7cad_e319b6f9.jpg',
    ],
    highlightTag: 'Xanh Dương & Băng Tuyết · SKY343 · SKY308 · SKY338',
    summary:
      'Trọn bộ 04 mã màu Xanh Dương – Xanh Băng Tuyết thanh lịch của dòng Lụa Tencel Sky Silk: Mã SKY343 (Xanh Da Trời Pastel), Mã SKY308 (Xanh Coban Đại Dương đậm nét) và cặp mã SKY338 / SKY26 (Xanh Ghi Băng Bắc Âu hiện đại).',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Mã SKY343: Xanh Lam Pastel (Sky Blue) trong trẻo, mát mắt',
        detail:
          'Gam màu đặc trưng của thương hiệu Sky Silk, mang lại vẻ trẻ trung, thoáng rộng cho phòng ngủ.',
      },
      {
        label: 'Ảnh 2 – Mã SKY308: Xanh Coban Đại Dương (Ocean Cobalt) lịch lãm, cá tính',
        detail:
          'Sắc xanh biển sâu nổi bật với dòng chữ thêu Sky Silk trắng tinh khôi, giữ độ mới bền bỉ theo năm tháng.',
      },
      {
        label: 'Ảnh 3 & 4 – Mã SKY338 & Mã SKY26: Xanh Ghi Băng Tuyết (Ice Grey Blue)',
        detail:
          'Sự pha trộn tinh tế giữa sắc xanh băng và ánh bạc sương mù (SKY26 là bản chụp sáng hơn của cùng mẫu phòng SKY338).',
      },
    ],
    specs: [
      { label: 'Mã bài & Mã màu', value: 'CGL-SK-04 | Gồm: SKY343 (Xanh Lam), SKY308 (Xanh Đại Dương), SKY338 & SKY26 (Xanh Băng)' },
      { label: 'Giá tại Tuyến Hoa', value: '1.150.000đ / bộ 5 món (1m6 & 1m8) | 1.350.000đ (2m×2m2)' },
      { label: 'Giá thị trường', value: '1.650.000đ – 2.250.000đ / bộ' },
      { label: 'Quy cách bộ', value: '01 Ga + 01 Chăn lụa + 02 Vỏ gối nằm + 01 Vỏ gối ôm đồng màu' },
      { label: 'Bảo hành chất lượng', value: 'Không bai dão, không xù lông, giặt máy êm ái' },
    ],
    articleParagraphs: [
      'Các nghiên cứu về giấc ngủ chỉ ra rằng gam màu xanh dương là tông màu giúp nhịp tim thư giãn và đi vào giấc ngủ nhanh nhất. Tại Showroom Tuyến Hoa, bộ tứ mã màu SKY343, SKY308, SKY338 và SKY26 đáp ứng trọn vẹn mọi sở thích từ xanh da trời nhẹ nhàng đến xanh đại dương đậm đà.',
      'Quý khách chỉ cần nhắn mã số trên góc ảnh (ví dụ: SKY343 hoặc SKY308) kèm kích thước đệm qua Zalo 0344.727.528, xưởng Tuyến Hoa sẽ bo chun chuẩn kích thước và giao tận nhà.'
    ],
    facebookPostCopy:
      '🌊❄️ [MÁT MỊN TỪNG CHẠM] BỘ CHĂN GA GỐI LỤA TENCEL SKY SILK TÔNG XANH LAM · XANH ĐẠI DƯƠNG & XANH BĂNG TUYẾT (MÃ SKY343 · SKY308 · SKY338 · SKY26)! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.650.000đ – 2.250.000đ / bộ\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA: Chỉ 1.150.000đ / bộ 5 món (Cỡ 2m×2m2: 1.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 04 MÃ MÀU XANH DƯƠNG ĐẲNG CẤP TRONG BÀI:\n' +
      '   💎 Mã SKY343: Xanh Lam Pastel (Sky Blue) trong trẻo, mát mắt\n' +
      '   🌊 Mã SKY308: Xanh Coban Đại Dương đậm nét, lịch lãm\n' +
      '   ❄️ Mã SKY338 & SKY26: Xanh Ghi Băng Tuyết chuẩn phong cách Bắc Âu\n' +
      '✅ Đủ 5 món đồng bộ: 1 Ga + 1 Chăn lụa + 2 Vỏ gối nằm + 1 Vỏ gối ôm thêu chữ Sky Silk.\n' +
      '📞 Gọi/Zalo đặt hàng ngay: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'bo-chan-ga-goi-lua-tencel-sky-silk-ghi-xam-xanh-da-muji-cglsk05',
    code: 'CGL-SK-05',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Bộ Chăn Ga Gối Lụa Tencel Sky Silk 60s Tông Ghi Xám Khói, Xám Chì Than & Xanh Đá Muji Hiện Đại (Mã SKY10 · SKY334 · SKY8)',
    shortTitle: 'Bộ Chăn Ga Lụa Sky Silk Ghi Xám & Xanh Đá (SKY10 · SKY334 · SKY8)',
    priceDisplay: '1.150.000đ / bộ 5 món',
    marketPriceRange: 'Giá thị trường: 1.650.000đ – 2.250.000đ / bộ',
    marketPriceNote: 'Bộ 3 gam màu Ghi Xám & Xanh Đá tối giản hiện đại (Luxury Minimalist) được các gia đình trẻ và căn hộ chung cư, biệt thự săn đón nhiều nhất: SKY10 (Ghi Xám Khói), SKY334 (Xám Chì Than) và SKY8 (Xanh Đá Muji).',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Bộ 5 Món Lụa Sky Silk (Mã SKY10 Ghi Xám · SKY334 Xám Chì · SKY8 Xanh Đá) – 1m6 & 1m8',
        marketPrice: '1.650.000đ – 1.850.000đ / bộ',
        storePrice: '1.150.000đ / bộ 5 món',
        note: 'Màu trung tính sang trọng, sạch sẽ, không bao giờ lỗi mốt',
      },
      {
        sizeOrOption: '2. Bộ 5 Món Lụa Sky Silk Cỡ Đại 2,0m × 2,2m',
        marketPrice: '1.950.000đ – 2.250.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Phối hoàn hảo với rèm cầu vồng ghi xám và đệm cao cấp tại Tuyến Hoa',
      },
      {
        sizeOrOption: '3. Mua Combo 02 Bộ Sky Silk Hoặc Mua Kèm Đệm Mới',
        marketPrice: '3.300.000đ – 3.700.000đ / 2 bộ',
        storePrice: '2.150.000đ / 2 bộ',
        note: 'Miễn phí bo chun theo cỡ đệm & giao tận giường',
      },
    ],
    numericPrice: 1150000,
    unitLabel: '1 bộ 5 món Lụa Tencel Sky Silk (Đủ 3 mã: SKY10, SKY334, SKY8)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792915211011_4373635352308930219_4373635352308930219_d1e3997b7240d7fb7f5069950733f5cc_99031ef0.jpg',
    secondaryImages: [
      '/assets/aistudio/1792915211294_4373635352308930219_4373635352308930219_4dde5f640cbfc704aeeaecd7a0bd9224_276bd3a6.jpg',
      '/assets/aistudio/1792915211036_4373635352308930219_4373635352308930219_a997e16bcd4b1084137a0e38f69d5377_08db1949.jpg',
    ],
    highlightTag: 'Tông Ghi Xám Hiện Đại · SKY10 · SKY334 · SKY8',
    summary:
      'Đỉnh cao phong cách Tối Giản Hiện Đại (Modern Luxury): Mã SKY10 (Ghi Xám Khói trung tính), Mã SKY334 (Xám Chì Than trầm lịch lãm) và Mã SKY8 (Xanh Đá Muji trẻ trung). Cực kỳ sạch sẽ, tôn nổi bật nội thất phòng ngủ và đồng bộ hoàn hảo với rèm cầu vồng ghi xám.',
    visualAnnotations: [
      {
        label: 'Ảnh 1 – Mã SKY10: Ghi Xám Khói (Smoke Grey) chuẩn căn hộ Penthouse',
        detail:
          'Độ bóng nhẹ của lụa Tencel biến sắc ghi xám trở nên mềm mại, sang trọng như nhung lụa khách sạn 5 sao.',
      },
      {
        label: 'Ảnh 2 – Mã SKY334: Xám Chì Than (Charcoal Slate) lịch lãm, siêu sạch',
        detail:
          'Gam màu trầm vững chãi, cực kỳ phù hợp cho gia đình có trẻ nhỏ hoặc yêu thích tông màu tối giản châu Âu.',
      },
      {
        label: 'Ảnh 3 – Mã SKY8: Xanh Đá Muji (Slate Blue Grey) phối ga chần hoa văn nổi',
        detail:
          'Sự giao thoa giữa sắc ghi xám và ánh xanh đá Nhật Bản, mang lại không gian nghỉ ngơi yên tĩnh tuyệt đối.',
      },
    ],
    specs: [
      { label: 'Mã bài & Mã màu', value: 'CGL-SK-05 | Gồm 03 mã màu: SKY10 (Ghi Khói), SKY334 (Xám Chì), SKY8 (Xanh Đá)' },
      { label: 'Giá tại Tuyến Hoa', value: '1.150.000đ / bộ 5 món (1m6 & 1m8) | 1.350.000đ (2m×2m2)' },
      { label: 'Giá thị trường', value: '1.650.000đ – 2.250.000đ / bộ' },
      { label: 'Trọn bộ 05 món', value: '01 Ga + 01 Chăn lụa + 02 Vỏ gối nằm + 01 Vỏ gối ôm thêu Sky Silk' },
      { label: 'Dịch vụ đi kèm', value: 'Miễn phí bo chun theo cỡ đệm – Giao hàng tận nơi kiểm tra mới thanh toán' },
    ],
    articleParagraphs: [
      'Nếu bạn đang tìm kiếm một bộ chăn ga gối vừa sang trọng như khách sạn, vừa sạch sẽ và dễ phối với rèm cầu vồng hoặc rèm vải màu ghi xám, thì bộ ba mã màu SKY10, SKY334 và SKY8 chính là lựa chọn hoàn hảo nhất.',
      'Toàn bộ 18 mẫu Chăn Ga Gối Lụa Tencel Alyda® LT 28 và Sky Silk đều đang có sẵn tại Showroom 3 Tầng Tuyến Hoa (Chợ Cháy, Ứng Hòa) để quý khách đến sờ tận tay chất vải mát lạnh hoặc đặt giao tận giường ngay trong ngày.'
    ],
    facebookPostCopy:
      '🖤✨ [SANG TRỌNG & SIÊU SẠCH] BỘ CHĂN GA GỐI LỤA TENCEL SKY SILK TÔNG GHI XÁM KHÓI · XÁM CHÌ & XANH ĐÁ MUJI (MÃ SKY10 · SKY334 · SKY8)! 🛌\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.650.000đ – 2.250.000đ / bộ\n' +
      '🔥 GIÁ TẠI TỔNG KHO TUYẾN HOA: Chỉ 1.150.000đ / bộ 5 món (Cỡ 2m×2m2: 1.350.000đ)!\n' +
      '--------------------------------------------\n' +
      '🎨 03 MÃ MÀU GHI XÁM HIỆN ĐẠI TRONG BÀI:\n' +
      '   🩶 Mã SKY10: Ghi Xám Khói (Smoke Grey) sang trọng chuẩn căn hộ hiện đại\n' +
      '   🖤 Mã SKY334: Xám Chì Than (Charcoal Slate) trầm ấm, lịch lãm, siêu sạch\n' +
      '   🪨 Mã SKY8: Xanh Đá Muji (Slate Blue Grey) tối giản kiểu Nhật\n' +
      '✅ Trọn bộ 5 món Lụa Tencel 60s mát lạnh: 1 Ga (miễn phí bo chun) + 1 Chăn lụa + 2 Vỏ gối nằm + 1 Vỏ gối ôm.\n' +
      '📞 Gọi/Zalo chốt mã màu ngay: 0344.727.528 (Tuyến Hoa)!',
  },

  // ===========================================================================
  // 00-NEW. BỘ 05 BÀI ĐĂNG QUẢNG CÁO MẪU ĐỆM MỚI TẢI TỪ INTERNET (SÔNG HỒNG GEN 4,
  //         KIM CƯƠNG HAPPY GOLD, EVERON ARTEMIS/CERAMIC, LIÊN Á L'A DOME & HANVICO NANO)
  // ===========================================================================
  {
    id: 'dem-cao-cap-song-hong-back-essential-the-he-4-dshbe01',
    code: 'DSH-BE-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Cao Cấp Sông Hồng Back Essential Thế Hệ Thứ 4 (Gập 2 & Nguyên Tấm Dày 17cm–32cm) – Kết Hợp Bông Tinh Khiết Kháng Khuẩn & Memory Foam Đàn Hồi 98%',
    shortTitle: 'Đệm Sông Hồng Back Essential Thế Hệ 4 (6.750.000đ)',
    priceDisplay: '6.750.000đ / tấm',
    marketPriceRange: 'Giá niêm yết hãng: 11.300.000đ – 14.730.000đ (Ưu đãi giảm 40%)',
    marketPriceNote: 'Mẫu đệm thế hệ thứ 4 mới nhất của Sông Hồng (tải trực tiếp từ hệ thống phân phối chính hãng kèm ảnh nguyên tấm & gập 2): Thay thế hoàn hảo đệm lò xo và cao su tại các căn hộ, biệt thự cao cấp nhờ cấu trúc đa tầng Memory Foam kết hợp bông tinh khiết kháng khuẩn.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Kích thước 1,6m × 2,0m (Độ dày 17cm – 22cm · Gập 2 hoặc Nguyên Tấm)',
        marketPrice: '11.300.000đ – 11.900.000đ',
        storePrice: '6.750.000đ – 7.150.000đ',
        note: 'Chiết khấu trực tiếp 40% tại Tổng Kho Tuyến Hoa + Tặng bộ ga gối cao cấp',
      },
      {
        sizeOrOption: '2. Kích thước 1,8m × 2,0m (Độ dày 17cm – 22cm · Gập 2 hoặc Nguyên Tấm)',
        marketPrice: '11.490.000đ – 12.470.000đ',
        storePrice: '6.950.000đ – 7.450.000đ',
        note: 'Nâng đỡ cột sống chuẩn y khoa, độ phục hồi sau chuyển động đạt 98%',
      },
      {
        sizeOrOption: '3. Bản Biệt Thự Siêu Dày 27cm – 32cm (Kích thước 1,6m×2,0m & 1,8m×2,0m)',
        marketPrice: '12.310.000đ – 14.730.000đ',
        storePrice: '7.650.000đ – 8.850.000đ',
        note: 'Dáng đệm bề thế như khách sạn 5 sao, miễn phí xe tải giao tận giường',
      },
    ],
    numericPrice: 6750000,
    unitLabel: '1 tấm chính hãng Sông Hồng (Kèm quà tặng & miễn phí giao tận nhà)',
    standardDimensions: 'Đủ cỡ 1,6m × 2,0m & 1,8m × 2,0m (Độ dày: 17cm, 22cm, 27cm, 32cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/dem_song_hong_back_essential_1.png',
    secondaryImages: [
      '/assets/aistudio/dem_song_hong_back_essential_2.png',
    ],
    highlightTag: 'Mẫu Đệm Mới Nhất · Sông Hồng Thế Hệ 4',
    summary:
      'Siêu phẩm Đệm Sông Hồng Back Essential (Thế hệ thứ 4) đạt tiêu chuẩn chất lượng xuất khẩu Mỹ: Lõi đệm kết hợp Bông tinh khiết kháng khuẩn ép công nghệ cao cùng lớp Memory Foam siêu đàn hồi (độ phục hồi 98%), bề mặt vải gấm thun 4 chiều Viscose chần xoáy thoáng khí cực êm.',
    visualAnnotations: [
      {
        label: 'Cấu tạo đa tầng đột phá: Bông Tinh Khiết Kháng Khuẩn + Memory Foam Đàn Hồi',
        detail:
          'Khắc phục hoàn toàn nhược điểm quá cứng của đệm bông ép truyền thống và quá trũng của đệm lò xo cũ, giúp nâng đỡ 5 vùng cột sống và chống đau mỏi lưng.',
      },
      {
        label: 'Áo đệm vải Gấm Thun 4 chiều & sợi gỗ tự nhiên Viscose chần bông Microfiber',
        detail:
          'Mặt trên chần xoáy 3D lưu thông không khí tối ưu, kiểm soát độ ẩm mùa nồm và mang lại cảm giác êm mát ngay khi đặt lưng.',
      },
      {
        label: 'Có đủ 2 phiên bản: Gập 2 tiện di chuyển cầu thang & Nguyên tấm bề thế (17cm–32cm)',
        detail:
          'Bấm xem ảnh số 2 để chiêm ngưỡng phiên bản Nguyên Tấm thành đệm chần múi sang trọng chuẩn Resort 5 sao.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DSH-BE-01 (Đệm Cao Cấp Sông Hồng Back Essential Thế Hệ 4)' },
      { label: 'Giá niêm yết hãng', value: '11.300.000đ – 14.730.000đ / tấm (Tùy độ dày 17cm – 32cm)' },
      { label: 'Giá ưu đãi Tuyến Hoa', value: 'Chỉ từ 6.750.000đ – 8.850.000đ / tấm (Chiết khấu tới 40%)' },
      { label: 'Chất liệu lõi & vỏ', value: 'Bông tinh khiết kháng khuẩn + Memory Foam | Vỏ Gấm Viscose chần Microfiber' },
      { label: 'Bảo hành & Vận chuyển', value: 'Bảo hành chính hãng 5 năm – Xe tải Tuyến Hoa giao miễn phí tận giường' },
    ],
    articleParagraphs: [
      'Đệm Sông Hồng Back Essential (Thế hệ thứ 4) là dòng đệm cao cấp mới nhất vừa được cập nhật vào danh mục phân phối chính hãng tại Showroom Tuyến Hoa. Sản phẩm được nghiên cứu chuyên sâu để thay thế các dòng đệm lò xo và cao su đắt đỏ, mang lại độ dày bề thế từ 17cm, 22cm, 27cm đến 32cm nhưng trọng lượng nhẹ hơn rất nhiều, dễ dàng vệ sinh và di chuyển.',
      'Tại Tổng Kho Chăn Ga Gối Đệm Tuyến Hoa (Chợ Cháy, Ứng Hòa), khách hàng đặt mua Đệm Sông Hồng Back Essential được hưởng mức chiết khấu trực tiếp lên tới 40% so với giá niêm yết hãng (chỉ từ 6.750.000đ cho cỡ 1m6×2m và 6.950.000đ cho cỡ 1m8×2m), kèm đầy đủ tem cào chống hàng giả và bảo hành chính hãng 5 năm.'
    ],
    facebookPostCopy:
      '👑🛌 [MẪU ĐỆM MỚI NHẤT] ĐỆM CAO CẤP SÔNG HỒNG BACK ESSENTIAL THẾ HỆ THỨ 4 – ÊM NHƯ KHÁCH SẠN 5 SAO, NÂNG ĐỠ CỘT SỐNG TUYỆT ĐỐI! ✨\n' +
      '💰 GIÁ NIÊM YẾT HÃNG: 11.300.000đ – 14.730.000đ / tấm\n' +
      '🔥 GIÁ KHUYẾN MÃI TẠI TỔNG KHO TUYẾN HOA (CHIẾT KHẤU TỚI 40%):\n' +
      '   👉 Cỡ 1m6 × 2m (Dày 17cm – 22cm): Chỉ 6.750.000đ – 7.150.000đ\n' +
      '   👉 Cỡ 1m8 × 2m (Dày 17cm – 22cm): Chỉ 6.950.000đ – 7.450.000đ\n' +
      '   👉 Bản Siêu Dày Biệt Thự 27cm – 32cm: Chỉ 7.650.000đ – 8.850.000đ\n' +
      '--------------------------------------------\n' +
      '✅ Cấu tạo đa tầng thế hệ 4: Kết hợp Bông tinh khiết kháng khuẩn siêu nhẹ & lớp Memory Foam đàn hồi 98%.\n' +
      '✅ Không quá cứng như bông ép cũ, không võng lưng như đệm lò xo thường – Cực tốt cho người đau lưng, thoát vị đĩa đệm!\n' +
      '✅ Áo đệm vải Gấm Viscose chần bông Microfiber thoáng mát 4 mùa, có cả bản Gập 2 tiện lợi & Nguyên Tấm.\n' +
      '🎁 Tặng ngay bộ ga gối cao cấp + Miễn phí xe tải Tuyến Hoa giao tận giường!\n' +
      '📞 Gọi/Zalo Anh Tuyến đặt hàng chính hãng: 0344.727.528!',
  },
  {
    id: 'nem-cao-su-thien-nhien-kim-cuong-happy-gold-dkchg01',
    code: 'DKC-HG-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Nệm Cao Su 100% Thiên Nhiên Kim Cương Happy Gold & Diamond Luxury (Hệ 5.000 Lỗ Thoáng Khí Kép – Nâng Đỡ 5 Vùng Cơ Thể, Bảo Hành 12 Năm)',
    shortTitle: 'Nệm Cao Su Thiên Nhiên Kim Cương Happy Gold',
    priceDisplay: '4.950.000đ / tấm',
    marketPriceRange: 'Giá thị trường: 6.840.000đ – 11.800.000đ / tấm',
    marketPriceNote: 'Dòng nệm cao su thiên nhiên "Quốc Dân" bán chạy số 1 của Nệm Kim Cương: Đúc nguyên khối từ 100% mủ cao su tự nhiên không pha tạp chất, thiết kế hơn 5.000 lỗ tròn nhỏ mặt trên và 500 lỗ vuông lớn mặt dưới đối lưu không khí mát rượi.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Nệm Cao Su Kim Cương Happy Gold Dày 5cm (Cỡ 1,6m × 2,0m & 1,8m × 2,0m)',
        marketPrice: '6.840.000đ – 7.500.000đ',
        storePrice: '4.950.000đ – 5.550.000đ',
        note: 'Tặng kèm 02 ruột gối cao su non cao cấp + Áo nệm gấm xốp',
      },
      {
        sizeOrOption: '2. Nệm Cao Su Kim Cương Happy Gold Dày 10cm Chuẩn Vàng (Cỡ 1,6m×2m & 1,8m×2m)',
        marketPrice: '10.530.000đ – 11.800.000đ',
        storePrice: '7.650.000đ – 8.550.000đ',
        note: 'Độ dày chuẩn nâng đỡ cột sống tối ưu, tặng 02 gối cao su + 01 bộ ga gối',
      },
      {
        sizeOrOption: '3. Nệm Cao Su Kim Cương Happy Gold Dày 15cm / Diamond Luxury 2 Mặt Lỗ (1m6 & 1m8)',
        marketPrice: '15.000.000đ – 18.200.000đ',
        storePrice: '10.950.000đ – 12.800.000đ',
        note: 'Bảo hành 12 năm chính hãng chống xẹp lún, đạt chứng chỉ LGA Đức & SGS Thụy Sĩ',
      },
    ],
    numericPrice: 4950000,
    unitLabel: '1 tấm 100% cao su thiên nhiên (Kèm quà tặng gối cao su & bảo hành 12 năm)',
    standardDimensions: 'Cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Độ dày: 5cm, 10cm, 15cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/nem_cao_su_kim_cuong_happy_gold_1.jpg',
    highlightTag: '100% Cao Su Thiên Nhiên · Bảo Hành 12 Năm',
    summary:
      'Hình ảnh thực tế cấu tạo lõi Nệm Cao Su Thiên Nhiên Kim Cương Happy Gold: Phía trong lớp áo nệm vải gấm xốp kháng khuẩn khóa kéo sang trọng là phôi cao su trắng sữa 100% tự nhiên với hơn 5.000 lỗ thoáng khí tròn đều tăm tắp, khử sạch mùi cao su hắc và nâng đỡ êm ái suốt 20 năm.',
    visualAnnotations: [
      {
        label: 'Phôi nệm 100% Cao Su Thiên Nhiên nguyên khối đạt chuẩn xuất khẩu',
        detail:
          'Độ đàn hồi vượt trội giúp ôm sát đường cong sinh lý từ đầu, vai, lưng, hông đến chân mà không gây rung lắc khi người nằm cạnh xoay mình.',
      },
      {
        label: 'Hệ thống 5.000 lỗ thông hơi tròn mặt trên & 500 lỗ vuông mặt dưới',
        detail:
          'Tạo luồng khí đối lưu liên tục, giúp lưng người nằm luôn khô thoáng mát mẻ vào mùa hè và ấm áp vào mùa đông.',
      },
      {
        label: 'Áo nệm vải Gấm Xốp dệt hoa văn khóa kéo dễ tháo rời giặt giũ',
        detail:
          'Tích hợp lớp vải lót bảo vệ phôi cao su bên trong, đi kèm phiếu bảo hành chính hãng 12 năm của Tập đoàn Nệm Kim Cương.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DKC-HG-01 (Nệm Cao Su Thiên Nhiên Kim Cương Happy Gold)' },
      { label: 'Giá tại Tuyến Hoa (Dày 5cm)', value: '4.950.000đ (1m6×2m) | 5.550.000đ (1m8×2m) – Thị trường: 6,84Tr – 7,5Tr' },
      { label: 'Giá tại Tuyến Hoa (Dày 10cm)', value: '7.650.000đ (1m6×2m) | 8.550.000đ (1m8×2m) – Thị trường: 10,53Tr – 11,8Tr' },
      { label: 'Chứng nhận quốc tế', value: 'LGA (Đức) về độ bền đàn hồi, SGS (Thụy Sĩ) kháng khuẩn & OEKO-TEX' },
      { label: 'Chế độ bảo hành', value: '12 Năm chính hãng Nệm Kim Cương – Đổi mới nếu xẹp lún' },
    ],
    articleParagraphs: [
      'Nệm Cao Su Thiên Nhiên Kim Cương Happy Gold là dòng sản phẩm chủ lực được nhiều gia đình tại Ứng Hòa lựa chọn khi muốn đầu tư một tấm nệm cao su 100% tự nhiên bền bỉ từ 15–20 năm với mức giá hợp lý nhất. Toàn bộ mủ cao su được xử lý khử mùi bằng dây chuyền công nghệ Đức, mang hương thơm dịu nhẹ tự nhiên và an toàn tuyệt đối cho cả trẻ sơ sinh.',
      'Khi đặt mua Nệm Cao Su Kim Cương Happy Gold tại Showroom Tuyến Hoa, quý khách được kiểm tra trực tiếp mặt cắt phôi cao su dập nổi logo Kim Cương chính hãng, hưởng mức giá sỉ rẻ hơn thị trường từ 2.000.000đ – 3.200.000đ/tấm cùng bộ quà tặng gối cao su non và ga gối cao cấp.'
    ],
    facebookPostCopy:
      '💎🌿 [KHUYẾN MÃI LỚN] NỆM CAO SU 100% THIÊN NHIÊN KIM CƯƠNG HAPPY GOLD – BẢO HÀNH CHÍNH HÃNG 12 NĂM, ĐỘ BỀN TRÊN 20 NĂM! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 6.840.000đ – 11.800.000đ / tấm\n' +
      '🔥 GIÁ SỈ TẠI TỔNG KHO TUYẾN HOA (TẶNG KÈM QUÀ LỚN):\n' +
      '   👉 Độ dày 5cm: Cỡ 1m6×2m chỉ 4.950.000đ | Cỡ 1m8×2m chỉ 5.550.000đ (Tặng 2 gối cao su non)\n' +
      '   👉 Độ dày 10cm: Cỡ 1m6×2m chỉ 7.650.000đ | Cỡ 1m8×2m chỉ 8.550.000đ (Tặng 2 gối cao su + 1 bộ ga gối)\n' +
      '   👉 Độ dày 15cm / Bản Diamond Luxury 2 mặt lỗ: Chỉ từ 10.950.000đ\n' +
      '--------------------------------------------\n' +
      '✅ Đúc nguyên khối từ 100% mủ cao su thiên nhiên, nâng đỡ 5 vùng cơ thể êm ái không tiếng động.\n' +
      '✅ Thiết kế >5.000 lỗ tròn nhỏ mặt trên & 500 lỗ vuông mặt dưới thoáng khí 4 mùa, không hầm bí lưng.\n' +
      '✅ Đạt chứng chỉ quốc tế SGS Thụy Sĩ & LGA Đức – Bảo hành chính hãng 12 năm!\n' +
      '🚛 Miễn phí xe tải Tuyến Hoa chở tận phòng ngủ – Kiểm tra hàng chính hãng mới thanh toán!\n' +
      '📞 Gọi/Zalo đặt hàng ngay: 0344.727.528!',
  },
  {
    id: 'dem-bong-ep-cao-cap-everon-artemis-ceramic-han-quoc-devat01',
    code: 'DEV-AT-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Bông Ép Cao Cấp Everon Artemis & Everon Ceramic Hàn Quốc (Bông Advansa Nhập Khẩu Đức Kháng Khuẩn, Phát Tia Hồng Ngoại Xa Tốt Cho Tuần Hoàn Máu)',
    shortTitle: 'Đệm Cao Cấp Everon Artemis & Ceramic Hàn Quốc',
    priceDisplay: '3.850.000đ / tấm',
    marketPriceRange: 'Giá niêm yết hãng: 5.190.000đ – 10.400.000đ / tấm',
    marketPriceNote: 'Bộ đôi dòng đệm danh tiếng nhất của thương hiệu Everon Hàn Quốc (gồm ảnh bộ Đệm Gập 2 Everon Artemis vỏ gấm vàng hoàng gia & chi tiết mặt chần bông Advansa Đức): Phù hợp tuyệt đối cho người lớn tuổi, phụ nữ mang thai và phòng cưới sang trọng.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Đệm Bông Ép Everon Padding / Ceramic Dày 9cm (Cỡ 1,6m × 2,0m & 1,8m × 2,0m)',
        marketPrice: '3.860.000đ – 5.590.000đ',
        storePrice: '2.950.000đ – 4.150.000đ',
        note: 'Sợi bông Ceramic phát tia hồng ngoại xa hỗ trợ tuần hoàn máu & giữ ấm mùa đông',
      },
      {
        sizeOrOption: '2. Đệm Bông Ép Everon Ceramic Dày 14cm – 15cm (Cỡ 1,6m × 2,0m & 1,8m × 2,0m)',
        marketPrice: '7.390.000đ – 8.290.000đ',
        storePrice: '5.450.000đ – 6.150.000đ',
        note: 'Độ phẳng chuẩn y khoa, không xẹp lún suốt 10 năm sử dụng',
      },
      {
        sizeOrOption: '3. Đệm Cao Cấp Everon Artemis Gập 2 Vỏ Gấm Hoàng Gia (Dày 15cm – 18cm · 1m6 & 1m8)',
        marketPrice: '7.750.000đ – 10.400.000đ',
        storePrice: '5.850.000đ – 7.800.000đ',
        note: 'Bông Advansa nhập khẩu Đức kháng khuẩn chống nấm mốc + Mặt chần gòn siêu êm',
      },
    ],
    numericPrice: 3850000,
    unitLabel: '1 tấm chính hãng Everon Hàn Quốc (Đầy đủ tem chống giả & bảo hành 5 năm)',
    standardDimensions: 'Cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Độ dày: 9cm, 15cm, 18cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/dem_everon_artemis_1.png',
    secondaryImages: [
      '/assets/aistudio/dem_everon_artemis_2.jpg',
    ],
    highlightTag: 'Chính Hãng Everon Hàn Quốc · Bông Advansa Đức',
    summary:
      'Đỉnh cao đệm bông ép thương hiệu Everon Hàn Quốc: Phiên bản cao cấp Artemis thiết kế gập 2 tấm sang trọng với lớp áo vải Gấm hoa văn Hoàng Gia màu vàng Champagne chần bông Advansa nhập khẩu từ Đức, kết hợp dòng Everon Ceramic phát tia hồng ngoại xa giúp lưu thông khí huyết và bảo vệ cột sống.',
    visualAnnotations: [
      {
        label: 'Lớp bông Advansa nhập khẩu CHLB Đức (4 lỗ thông khí siêu mịn)',
        detail:
          'Ngăn chặn sự xâm nhập của vi khuẩn, nấm mốc và bụi mịn, đạt chứng nhận tiêu chuẩn châu Âu, giữ bề mặt đệm luôn êm ái và thông thoáng.',
      },
      {
        label: 'Công nghệ sợi Ceramic phát tia hồng ngoại xa tốt cho sức khỏe',
        detail:
          'Tăng cường tuần hoàn máu và giữ nhiệt ổn định khi ngủ, đặc biệt hữu ích cho ông bà lớn tuổi hay bị đau nhức xương khớp mùa lạnh.',
      },
      {
        label: 'Thiết kế Gập 2 (Artemis) & Gập 3 (Ceramic) bọc vải Gấm الجاكار chính hãng',
        detail:
          'Đường viền may bo золотой tỉ mỉ, khóa kéo đồng dập nổi logo Everon và tem chống hàng giả điện tử chính hãng.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DEV-AT-01 (Đệm Bông Ép Cao Cấp Everon Artemis & Everon Ceramic)' },
      { label: 'Giá Everon Ceramic (9cm)', value: '3.850.000đ (1m6×2m) | 4.150.000đ (1m8×2m) – Giá hãng: 5,19Tr – 5,59Tr' },
      { label: 'Giá Everon Artemis (15–18cm)', value: '5.850.000đ – 7.800.000đ (Giá hãng: 7.750.000đ – 10.400.000đ)' },
      { label: 'Nguyên liệu cốt lõi', value: 'Bông Advansa nhập khẩu Đức + Sợi Ceramic hồng ngoại Hàn Quốc' },
      { label: 'Bảo hành chính hãng', value: '5 Năm toàn quốc bởi Everon Việt Nam & Showroom Tuyến Hoa' },
    ],
    articleParagraphs: [
      'Trong phân khúc đệm bông ép cao cấp tại Việt Nam, Everon Artemis và Everon Ceramic luôn giữ vị trí dẫn đầu nhờ độ bền vượt thời gian và tính năng chăm sóc sức khỏe khác biệt. Nếu Everon Ceramic nổi tiếng với sợi gốm phát tia hồng ngoại xa giúp kích thích tuần hoàn máu, thì Everon Artemis lại chinh phục các gia đình trẻ và phòng cưới nhờ thiết kế gập 2 tấm dày 15cm–18cm chần bông Advansa nhập khẩu từ Đức.',
      'Showroom Tuyến Hoa cam kết cung cấp 100% sản phẩm Everon chính hãng nguyên tem mác nhà máy với mức chiết khấu sâu từ 20% – 25% so với giá niêm yết toàn quốc, hỗ trợ chở tận nhà và đặt lên khung giường hoàn toàn miễn phí.'
    ],
    facebookPostCopy:
      '👑🇰🇷 [ĐỆM EVERON HÀN QUỐC CHÍNH HÃNG] BỘ ĐÔI EVERON ARTEMIS BÔNG ĐỨC & EVERON CERAMIC HỒNG NGOẠI CHĂM SÓC CỘT SỐNG! ✨\n' +
      '💰 GIÁ NIÊM YẾT HÃNG: 5.190.000đ – 10.400.000đ / tấm\n' +
      '🔥 GIÁ ƯU ĐÃI ĐẶC BIỆT TẠI SHOWROOM TUYẾN HOA:\n' +
      '   👉 Đệm Everon Padding / Ceramic Dày 9cm (1m6 & 1m8): Chỉ từ 2.950.000đ – 4.150.000đ\n' +
      '   👉 Đệm Everon Ceramic Dày 14cm–15cm (1m6 & 1m8): Chỉ từ 5.450.000đ – 6.150.000đ\n' +
      '   👉 Đệm Hoàng Gia Everon Artemis Gập 2 Dày 15cm–18cm: Chỉ từ 5.850.000đ – 7.800.000đ\n' +
      '--------------------------------------------\n' +
      '✅ Sử dụng sợi bông Advansa nhập khẩu từ Đức kháng khuẩn, chống bụi mịn và nấm mốc tuyệt đối.\n' +
      '✅ Sợi Ceramic phát tia hồng ngoại xa giúp lưu thông máu, giảm đau lưng cho người lớn tuổi.\n' +
      '✅ Vỏ gấm Hoàng Gia chần bông sang trọng, độ phẳng chuẩn y khoa, bảo hành chính hãng 5 năm!\n' +
      '📞 Gọi/Zalo Anh Tuyến tư vấn & giao tận nhà miễn phí: 0344.727.528!',
  },
  {
    id: 'nem-cao-su-thien-nhien-lien-a-la-dome-cool-grey-dlald01',
    code: 'DLA-LD-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Nệm Cao Su Thiên Nhiên Liên Á L\'A Dome Cool & L\'A Dome Grey (Cấu Trúc Mái Vòm Độc Quyền, Vải CoolAdapt Làm Mát & Than Hoạt Tính Khử Khuẩn – Bảo Hành 12 Năm)',
    shortTitle: 'Nệm Cao Su Liên Á L\'A Dome Mái Vòm Thoáng Khí',
    priceDisplay: '8.950.000đ / tấm',
    marketPriceRange: 'Giá niêm yết hãng: 12.690.000đ – 17.500.000đ / tấm',
    marketPriceNote: 'Tuyệt phẩm nệm cao su 100% thiên nhiên thế hệ mới của Liên Á (tải trực tiếp bộ ảnh L\'A Dome Premium/Cool & mặt cắt cấu trúc mái vòm tròn): Chịu lực gấp đôi nệm cao su truyền thống, tích hợp công nghệ làm mát CoolAdapt và than hoạt tính C.Fusion Latex.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Nệm Cao Su Thiên Nhiên Liên Á Classic (Dày 10cm · Cỡ 1,6m × 2,0m & 1,8m × 2,0m)',
        marketPrice: '12.690.000đ – 15.690.000đ',
        storePrice: '8.950.000đ – 10.950.000đ',
        note: '100% cao su thiên nhiên thuần khiết, bảo hành chính hãng 10 năm',
      },
      {
        sizeOrOption: '2. Nệm Cao Su Liên Á L\'A Dome Blue / Cool Cấu Trúc Mái Vòm (Dày 10cm · 1m6 & 1m8)',
        marketPrice: '14.500.000đ – 16.290.000đ',
        storePrice: '10.450.000đ – 11.850.000đ',
        note: 'Áo nệm vải MicroModal / CoolAdapt tản nhiệt mát lạnh, tháo giặt cực dễ',
      },
      {
        sizeOrOption: '3. Nệm Cao Su Liên Á L\'A Dome Grey Than Hoạt Tính Khử Khuẩn (Dày 10cm · 1m6 & 1m8)',
        marketPrice: '16.500.000đ – 19.190.000đ',
        storePrice: '11.950.000đ – 13.850.000đ',
        note: 'Công nghệ C.Fusion Latex dẫn truyền than hoạt tính khử mùi & kháng khuẩn 99%',
      },
    ],
    numericPrice: 8950000,
    unitLabel: '1 tấm cao su Liên Á chính hãng (Bảo hành 12 năm & tặng bộ gối cao su)',
    standardDimensions: 'Cỡ 1,6m × 2,0m & 1,8m × 2,0m (Độ dày: 10cm, 15cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/nem_cao_su_lien_a_ladome_1.jpg',
    secondaryImages: [
      '/assets/aistudio/nem_cao_su_lien_a_ladome_2.jpg',
    ],
    highlightTag: 'Liên Á L\'A Dome · Cấu Trúc Mái Vòm 12 Năm BH',
    summary:
      'Lấy cảm hứng từ kiến trúc mái vòm (Dome) vững chãi, Nệm Cao Su Liên Á L\'A Dome sở hữu các chân trụ tròn rỗng mặt dưới cùng rãnh thoát nhiệt thông minh, giúp hấp thụ chuyển động mượt mà, nâng đỡ tối ưu và thoáng khí gấp 2 lần nệm lỗ vuông thông thường.',
    visualAnnotations: [
      {
        label: 'Thiết kế cấu trúc Mái Vòm (Dome) độc quyền chịu lực siêu bền',
        detail:
          'Các lỗ thông hơi dạng vòm tròn giúp phân tán trọng lực đồng đều theo mọi hướng, tăng tuổi thọ phôi cao su lên trên 25 năm (Bảo hành chính hãng 12 năm).',
      },
      {
        label: 'Công nghệ làm mát CoolAdapt & Vải sợi tự nhiên MicroModal',
        detail:
          'Thúc đẩy sự bay hơi độ ẩm và mồ hôi nhanh chóng, giữ mặt nệm luôn mát mịn tự nhiên ngay cả trong những đêm hè oi bức.',
      },
      {
        label: 'Tùy chọn phiên bản L\'A Dome Grey dẫn truyền Than Hoạt Tính',
        detail:
          'Khử sạch mùi hôi, ngăn ngừa nấm mốc và kháng khuẩn chủ động trong suốt vòng đời sử dụng sản phẩm.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DLA-LD-01 (Nệm Cao Su Thiên Nhiên Liên Á L\'A Dome & Classic)' },
      { label: 'Giá Liên Á Classic (10cm)', value: '8.950.000đ (1m6×2m) | 10.950.000đ (1m8×2m) – Giá hãng: 12,69Tr – 15,69Tr' },
      { label: 'Giá Liên Á L\'A Dome (10cm)', value: '10.450.000đ – 13.850.000đ (Giá hãng: 14,50Tr – 19,19Tr)' },
      { label: 'Cấu trúc lõi nệm', value: '100% Cao su thiên nhiên cấu trúc Mái Vòm (Dome) & Than hoạt tính' },
      { label: 'Thời gian bảo hành', value: '12 Năm chính hãng Liên Á trên toàn quốc' },
    ],
    articleParagraphs: [
      'Nệm Cao Su Liên Á L\'A Dome là dòng sản phẩm cao cấp xuất khẩu sang hơn 45 quốc gia nhờ thiết kế cấu trúc Mái Vòm (Dome) đột phá. Thay vì các lỗ vuông truyền thống, hệ thống vòm tròn dưới đáy nệm hoạt động như hàng trăm chiếc lò xo cao su tự nhiên độc lập, vừa nâng đỡ êm ái từng đốt sống lưng, vừa đẩy luồng khí nóng thoát ra ngoài tức thì.',
      'Tại Showroom Tuyến Hoa, khách hàng đặt mua các dòng nệm Liên Á Classic, L\'A Dome Cool và L\'A Dome Grey được chiết khấu trực tiếp từ 25% – 30% so với giá niêm yết hãng, tặng kèm gối cao su Liên Á và miễn phí vận chuyển tận nhà.'
    ],
    facebookPostCopy:
      '🌿🏛️ [SIÊU PHẨM NỆM LIÊN Á] NỆM CAO SU THIÊN NHIÊN LIÊN Á L\'A DOME CẤU TRÚC MÁI VÒM & COOLADAPT LÀM MÁT – BẢO HÀNH 12 NĂM! ✨\n' +
      '💰 GIÁ NIÊM YẾT HÃNG: 12.690.000đ – 19.190.000đ / tấm\n' +
      '🔥 GIÁ KHUYẾN MÃI TẠI TỔNG KHO TUYẾN HOA (TIẾT KIỆM TỚI 5 TRIỆU/TẤM):\n' +
      '   👉 Nệm Cao Su Liên Á Classic 10cm (1m6 & 1m8): Chỉ 8.950.000đ – 10.950.000đ\n' +
      '   👉 Nệm Cao Su Liên Á L\'A Dome Cool Mái Vòm 10cm: Chỉ 10.450.000đ – 11.850.000đ\n' +
      '   👉 Nệm Cao Su Liên Á L\'A Dome Grey Than Hoạt Tính 10cm: Chỉ 11.950.000đ – 13.850.000đ\n' +
      '--------------------------------------------\n' +
      '✅ Cấu trúc Mái Vòm (Dome) độc quyền chịu lực gấp đôi và thoáng khí vượt trội.\n' +
      '✅ Áo nệm vải MicroModal kết hợp công nghệ CoolAdapt mát lạnh tự nhiên, có khóa kéo tháo giặt dễ dàng.\n' +
      '✅ Cam kết 100% chính hãng Liên Á, bảo hành 12 năm, tặng kèm bộ gối cao su cao cấp!\n' +
      '📞 Gọi/Zalo Anh Tuyến tư vấn & giao tận giường: 0344.727.528!',
  },
  {
    id: 'dem-chong-khuan-hanvico-nano-silver-eros-dhvnn01',
    code: 'DHV-NN-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Đệm Chống Khuẩn Hanvico Nano Silver & Nano Eros Cao Cấp (Công Nghệ Bông Vô Trùng Fresh Ever Silver Diệt 99% Vi Khuẩn – Ấm Áp Như Lòng Mẹ)',
    shortTitle: 'Đệm Chống Khuẩn Hanvico Nano Silver & Eros',
    priceDisplay: '2.850.000đ / tấm',
    marketPriceRange: 'Giá niêm yết hãng: 3.950.000đ – 7.500.000đ / tấm',
    marketPriceNote: 'Dòng đệm bông ép kháng khuẩn nổi tiếng với thông điệp "Hanvico – Ấm Áp Như Lòng Mẹ" (gồm 02 mẫu mới nhất: Hanvico Nano Kháng Khuẩn Gập 3 & Hanvico Nano Eros tích hợp lớp Topper êm ái): Chống nấm mốc tuyệt đối trong thời tiết nồm ẩm miền Bắc.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Đệm Bông Ép Hanvico Gấm Chống Khuẩn / Nano Dày 9cm (Cỡ 1,6m×2m & 1,8m×2m)',
        marketPrice: '3.950.000đ – 4.650.000đ',
        storePrice: '2.850.000đ – 3.350.000đ',
        note: 'Lõi bông Nano phân tử bạc diệt 99% vi trùng, thiết kế gấp 3 gọn nhẹ',
      },
      {
        sizeOrOption: '2. Đệm Bông Ép Hanvico Nano Kháng Khuẩn Dày 14cm – 15cm (Cỡ 1,6m×2m & 1,8m×2m)',
        marketPrice: '5.500.000đ – 6.400.000đ',
        storePrice: '3.950.000đ – 4.550.000đ',
        note: 'Vỏ gấm CPS chống cháy lan, chống thấm bụi và giữ phẳng cột sống',
      },
      {
        sizeOrOption: '3. Đệm Cao Cấp Hanvico Nano Eros / U.Eros Tích Hợp Topper Êm Ái (1m6 & 1m8)',
        marketPrice: '6.800.000đ – 8.200.000đ',
        storePrice: '4.850.000đ – 5.850.000đ',
        note: 'Kết hợp lõi bông Nano cứng vững và lớp Foam Topper vải Tencel mát mịn',
      },
    ],
    numericPrice: 2850000,
    unitLabel: '1 tấm chính hãng Hanvico (Bảo hành 5 năm & miễn phí vận chuyển)',
    standardDimensions: 'Cỡ 1,6m × 2,0m, 1,8m × 2,0m & 2,0m × 2,2m (Độ dày: 9cm, 14cm, 18cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/dem_hanvico_nano_khang_khuan_1.png',
    secondaryImages: [
      '/assets/aistudio/dem_hanvico_nano_eros_2.png',
    ],
    highlightTag: 'Hanvico Nano Bạc · Diệt 99% Vi Khuẩn Mùa Nồm',
    summary:
      'Ứng dụng công nghệ trải bông đứng kết hợp sợi kháng khuẩn Nano Bạc (Fresh Ever Silver) độc quyền Hàn Quốc, Đệm Hanvico Nano tiêu diệt tới 99% vi khuẩn và nấm mốc gây mùi mùa nồm ẩm, bảo vệ hệ hô hấp cho trẻ nhỏ và người lớn tuổi.',
    visualAnnotations: [
      {
        label: 'Lõi bông Nano Bạc (Fresh Ever Silver) kháng khuẩn & khử mùi 99%',
        detail:
          'Các hạt Nano bạc bao phủ quanh sợi bông Polyester nguyên sinh giúp ngăn chặn vi trùng, nấm mốc phát triển ngay cả trong mùa mưa phùn nồm ẩm miền Bắc.',
      },
      {
        label: 'Công nghệ ép nhiệt đứng tạo độ đàn hồi vững chãi, không võng lún',
        detail:
          'Giúp nâng đỡ xương sống thẳng tự nhiên, cực kỳ thích hợp cho trẻ em đang tuổi phát triển chiều cao và người bị đau dây thần kinh tọa.',
      },
      {
        label: 'Phiên bản nâng cấp Hanvico Nano Eros (Xem ảnh số 2) bọc vải Tencel chần bông',
        detail:
          'Bề mặt chần múi sang trọng với họa tiết thêu tinh tế, mang lại độ êm ái vượt trội mà vẫn giữ cốt đệm phẳng phiu.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'DHV-NN-01 (Đệm Chống Khuẩn Hanvico Nano Silver & Nano Eros)' },
      { label: 'Giá Hanvico Nano (9cm)', value: '2.850.000đ (1m6×2m) | 3.350.000đ (1m8×2m) – Giá hãng: 3,95Tr – 4,65Tr' },
      { label: 'Giá Hanvico Eros Cao Cấp', value: '4.850.000đ – 5.850.000đ (Giá hãng: 6.800.000đ – 8.200.000đ)' },
      { label: 'Công nghệ độc quyền', value: 'Bông chống khuẩn Nano Bạc Fresh Ever Silver + Vỏ Gấm / Tencel CPS' },
      { label: 'Bảo hành chính hãng', value: '5 Năm toàn quốc – Tem chống hàng giả Hanvico' },
    ],
    articleParagraphs: [
      'Với khí hậu miền Bắc thường xuyên có mùa nồm ẩm kéo dài, các loại đệm thông thường rất dễ bị tích tụ hơi ẩm và phát sinh nấm mốc. Đệm chống khuẩn Hanvico Nano Silver và Hanvico Nano Eros chính là lời giải hoàn hảo nhờ lõi bông tích hợp phân tử Nano bạc kháng khuẩn 99%, kết hợp lớp vỏ gấm CPS chống thấm bụi và chống cháy lan.',
      'Tại Showroom Tuyến Hoa (Chợ Cháy, Ứng Hòa), trọn bộ các dòng đệm Hanvico chính hãng đang được trợ giá ưu đãi chỉ từ 2.850.000đ/tấm, giao hàng miễn phí tận phòng ngủ ngay trong ngày.'
    ],
    facebookPostCopy:
      '🛡️🛌 [HANVICO – ẤM ÁP NHƯ LÒNG MẸ] ĐỆM CHỐNG KHUẨN HANVICO NANO SILVER & NANO EROS – DIỆT 99% VI KHUẨN, CHỐNG NẤM MỐC MÙA NỒM! ✨\n' +
      '💰 GIÁ NIÊM YẾT HÃNG: 3.950.000đ – 8.200.000đ / tấm\n' +
      '🔥 GIÁ ƯU ĐÃI TẠI SHOWROOM TUYẾN HOA (CHIẾT KHẤU TỚI 30%):\n' +
      '   👉 Đệm Hanvico Gấm / Nano Chống Khuẩn Dày 9cm (1m6 & 1m8): Chỉ 2.850.000đ – 3.350.000đ\n' +
      '   👉 Đệm Hanvico Nano Chống Khuẩn Dày 14cm–15cm (1m6 & 1m8): Chỉ 3.950.000đ – 4.550.000đ\n' +
      '   👉 Đệm Cao Cấp Hanvico Nano Eros Tích Hợp Topper Êm Ái: Chỉ 4.850.000đ – 5.850.000đ\n' +
      '--------------------------------------------\n' +
      '✅ Công nghệ bông vô trùng Nano Bạc (Fresh Ever Silver) tiêu diệt 99% vi trùng, bảo vệ đường hô hấp cho bé.\n' +
      '✅ Ép nhiệt đứng giữ phẳng cột sống, không xẹp lún, vỏ gấm CPS chống bám bụi sang trọng.\n' +
      '✅ Bảo hành chính hãng 5 năm – Miễn phí xe tải Tuyến Hoa chở tận nhà!\n' +
      '📞 Gọi/Zalo đặt hàng ngay: 0344.727.528 (Tuyến Hoa)!',
  },

  // ===========================================================================
  // 00. BỘ 04 BÀI ĐĂNG MỚI NHẤT TỪ 02 VIDEO & 06 ẢNH VỪA TẢI LÊN:
  //     MÀNH TRÚC BIỆT THỰ 3 TẦNG, RÈM GỖ PHÒNG THỜ & MÀN HỘP THÔNG MINH VÂN GỖ
  // ===========================================================================
  {
    id: 'video-biet-thu-3-tang-manh-truc-rem-vai-2-lop-rem-go-vidbt01',
    code: 'VID-BT-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: '[Video Thực Tế] Biệt Thự 3 Tầng Hoàn Thiện Trọn Gói: Mành Trúc Tranh Hạc Sảnh Chính, Rèm Vải 2 Lớp Âm Trần Phòng Khách & Rèm Sáo Gỗ Phòng Thờ',
    shortTitle: 'Video Biệt Thự 3 Tầng: Mành Trúc, Rèm 2 Lớp & Rèm Gỗ',
    priceDisplay: '680.000đ / m²',
    marketPriceRange: 'Giá thị trường: Rèm gỗ 850k/m² | Rèm vải 2 lớp 1.150k/m ngang',
    marketPriceNote: 'Video quay thực tế toàn cảnh từ ngoài vào trong căn Biệt Thự 3 Tầng hiện đại: Phối hợp hoàn hảo giữa Mành Trúc Tranh Hạc ngoài hiên, Rèm Vải 2 Lớp Âm Trần + Rèm Sáo Gỗ Tự Nhiên tại phòng khách – phòng thờ và Hệ Pin Năng Lượng Mặt Trời trên mái.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Sáo Gỗ Tự Nhiên Bản Ла 5cm (Lắp cửa sổ phòng khách & không gian phòng thờ)',
        marketPrice: '850.000đ / m²',
        storePrice: '680.000đ / m²',
        note: 'Gỗ Sồi / Gỗ Tùng tự nhiên sấy khô chống cong vênh, xoay lật lá gỗ 180 độ',
      },
      {
        sizeOrOption: '2. Hệ Rèm Vải 2 Lớp Âm Trần Phòng Khách Biệt Thự (Vải Gấm Nâu Kem + Voan Trắng Lụa)',
        marketPrice: '1.150.000đ / m ngang',
        storePrice: '850.000đ / m ngang',
        note: 'May định hình sóng suôn thẳng từ hốc thạch cao âm trần xuống sát sàn',
      },
      {
        sizeOrOption: '3. Mành Trúc Tranh Hạc Trắng Sảnh Chính Cửa Gỗ Lim (Cơ cấu cuộn kéo êm ái)',
        marketPrice: '380.000đ / m²',
        storePrice: '260.000đ / m²',
        note: 'Che nắng hướng chính diện, giữ mát đại sảnh biệt thự',
      },
    ],
    numericPrice: 680000,
    unitLabel: '1 m² rèm sáo gỗ tự nhiên | 850.000đ / m ngang rèm vải 2 lớp',
    standardDimensions: 'Thi công trọn gói đồng bộ ngoại thất & nội thất biệt thự 3 tầng',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/poster_biet_thu_manh_truc_rem_go.jpg',
    videoUrl: '/assets/aistudio/2026-10-27-120102922_bd1f1539.mp4',
    highlightTag: 'Video Toàn Cảnh Biệt Thự · Rèm Gỗ & Rèm 2 Lớp',
    summary:
      'Video thuyết minh toàn cảnh công trình Biệt Thự 3 Tầng hiện đại: Mở đầu là bộ Mành Trúc Tranh Hạc cuộn mở tại sảnh gỗ lim, tiến vào Phòng Khách sang trọng với bộ Rèm Vải 2 Lớp Âm Trần màu nâu kem phối hợp Rèm Sáo Gỗ tự nhiên, Tầng 2 là không gian Phòng Thờ gỗ truyền thống trang nghiêm và trên mái là hệ điện mặt trời.',
    visualAnnotations: [
      {
        label: 'Phút 0:00 – 0:02: Mành trúc tranh Đôi Hạc & Bụi Tre cuộn mở đón khách tại sảnh gỗ lim',
        detail:
          'Che nắng mặt tiền biệt thự nhưng khi cuộn lên lại mở ra tầm nhìn xuyên suốt vào không gian phòng khách hiện đại bên trong.',
      },
      {
        label: 'Phút 0:02 – 0:04: Phòng khách hiện đại phối Rèm Vải 2 Lớp Âm Trần & Rèm Sáo Gỗ cửa sổ',
        detail:
          'Các ô cửa kính lớn dùng Rèm Vải 2 Lớp màu nâu kem đồng điệu với bộ sofa da, trong khi các ô cửa sổ cạnh vách tivi lắp Rèm Sáo Gỗ tự nhiên sang trọng.',
      },
      {
        label: 'Phút 0:04 – 0:09: Không gian Phòng Thờ Tầng 2 trang nghiêm & Mái Pin Năng Lượng Mặt Trời',
        detail:
          'Tầng 2 bố trí gian thờ tự hoành phi câu đối kết hợp Rèm Sáo Gỗ nâu trầm chuẩn phong thủy; trên tầng thượng lắp kín hệ thống pin năng lượng mặt trời xanh sạch.',
      },
    ],
    specs: [
      { label: 'Mã video công trình', value: 'VID-BT-01 (Video Hoàn Thiện Trọn Gói Rèm & Mành Biệt Thự 3 Tầng)' },
      { label: 'Giá rèm sáo gỗ tự nhiên', value: '680.000đ / m² cả lắp (Giá thị trường: 850.000đ/m²)' },
      { label: 'Giá rèm vải 2 lớp âm trần', value: '850.000đ / m ngang cả lắp (Giá thị trường: 1.150.000đ/m)' },
      { label: 'Giá mành trúc tranh hạc', value: '260.000đ / m² cả lắp (Giá thị trường: 380.000đ/m²)' },
      { label: 'Đơn vị thiết kế & thi công', value: 'Showroom & Xưởng Rèm Tuyến Hoa (Hotline/Zalo: 0344.727.528)' },
    ],
    articleParagraphs: [
      'Video thực tế ghi lại hành trình bước vào ngôi biệt thự 3 tầng hoàn chỉnh – nơi mỗi không gian chức năng đều được Xưởng Rèm Tuyến Hoa tư vấn chất liệu rèm và mành phù hợp nhất: Sảnh hiên ngoài trời dùng Mành Trúc vẽ tranh Đôi Hạc chịu mưa nắng; Phòng khách dùng Rèm Vải 2 Lớp âm trần kết hợp Rèm Sáo Gỗ bản 5cm đồng màu vách gỗ nội thất.',
      'Đặc biệt tại khu vực Phòng Thờ tầng 2 với hệ cột gỗ, cửa võng và hoành phi câu đối truyền thống, giải pháp lắp đặt Rèm Sáo Gỗ tự nhiên màu nâu cánh gián giúp không gian thờ tự thêm phần cổ kính, trang nghiêm, thông thoáng mà vẫn chắn nắng tuyệt đối.'
    ],
    facebookPostCopy:
      '🎬🏡 [VIDEO THỰC TẾ] THAM QUAN BIỆT THỰ 3 TẦNG HOÀN THIỆN TRỌN GÓI MÀNH TRÚC, RÈM VẢI 2 LỚP & RÈM GỖ PHÒNG THỜ! ✨\n' +
      '--------------------------------------------\n' +
      '1️⃣ Sảnh chính cửa gỗ lim: Lắp Mành Trúc vẽ tranh Đôi Hạc & Rặng Tre Vàng cản nắng mưa 95% – Giá chỉ 260.000đ / m²!\n' +
      '2️⃣ Phòng khách sofa hiện đại: Lắp Hệ Rèm Vải 2 Lớp Âm Trần màu nâu kem sang trọng – Giá chỉ 850.000đ / m ngang!\n' +
      '3️⃣ Cửa sổ vách Tivi & Không gian Phòng Thờ Tầng 2: Lắp Rèm Sáo Gỗ Tự Nhiên xoay lật 180 độ đồng màu đồ thờ gỗ – Giá chỉ 680.000đ / m²!\n' +
      '--------------------------------------------\n' +
      '🚛 Anh Tuyến trực tiếp khảo sát, phối màu theo nội thất từng phòng và bảo hành tận nhà 3–5 năm.\n' +
      '📞 Gọi/Zalo tư vấn & báo giá trọn gói: 0344.727.528 (Showroom Tuyến Hoa)!',
  },
  {
    id: 'man-hop-thong-minh-van-go-thu-gon-dau-giuong-mh01',
    code: 'MH-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: 'Màn Hộp Thông Minh Vân Gỗ Cao Cấp Thu Gọn Đầu Giường (Khung Inox 304 & 201, Hộp Vân Gỗ Khắc Laser Chính Hãng) – Sang Trọng & Gọn Gàng Tuyệt Đối',
    shortTitle: 'Màn Hộp Thông Minh Vân Gỗ Thu Gọn Đầu Giường',
    priceDisplay: '1.350.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 1.850.000đ – 2.200.000đ / bộ',
    marketPriceNote: 'Dòng Màn Hộp Thông Minh thế hệ mới nhất (đóng kiện xốp chống sốc nguyên hộp – IMG_9295 & IMG_9296): Ban ngày xếp gọn 100% khung và vải màn vào chiếc hộp vân gỗ sang trọng gắn trên đầu giường, ban đêm kéo nhẹ 3 giây là bung màn kín giường.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Màn Hộp Thông Minh Hộp Trắng Sứ Cao Cấp (Giường 1,6m × 2,0m & 1,8m × 2,0m)',
        marketPrice: '1.750.000đ / bộ',
        storePrice: '1.250.000đ / bộ',
        note: 'Hộp nhựa पीवीसी/ABS trắng sứ hiện đại, khung căng Inox 304 & 201',
      },
      {
        sizeOrOption: '2. Màn Hộp Thông Minh Hộp Vân Gỗ Khắc Laser Chính Hãng (Giường 1,6m × 2,0m & 1,8m × 2,0m)',
        marketPrice: '1.950.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Vỏ hộp vân gỗ hương / óc chó bo tròn sang trọng, đồng màu giường gỗ (Bao lắp)',
      },
      {
        sizeOrOption: '3. Màn Hộp Thông Minh Vân Gỗ Khổ Đại (Giường 2,0m × 2,2m)',
        marketPrice: '2.200.000đ / bộ',
        storePrice: '1.550.000đ / bộ',
        note: 'Khung tay đòn trợ lực Inox 304 siêu khỏe, vải màn Polyester trắng/xanh nguyên sinh',
      },
    ],
    numericPrice: 1350000,
    unitLabel: '1 bộ hoàn thiện cả hộp vân gỗ, khung Inox 304 & công lắp đặt',
    standardDimensions: 'Hộp thu gọn 20cm × 17,5cm × 170cm (Bung màn chuẩn giường 1m6×2m & 1m8×2m)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/IMG_9295_0a9c81ad.JPG',
    secondaryImages: [
      '/assets/aistudio/IMG_9296_1c66df97.JPG',
    ],
    highlightTag: 'Màn Hộp Vân Gỗ · Thu Gọn 100% Vào Hộp',
    summary:
      'Giải pháp thay thế màn khung truyền thống dành cho phòng ngủ hiện đại: Toàn bộ phần vải màn tuyn Polyester và hệ khung tay đòn Inox 304 & 201 được thu gọn hoàn toàn vào bên trong chiếc Hộp Vân Gỗ bo tròn sang trọng gắn phía trên đầu giường. Trên đầu hộp được khắc Laser CNC biểu tượng gia đình & đàn ong chống hàng giả sắc nét.',
    visualAnnotations: [
      {
        label: 'Vỏ hộp vân gỗ bo tròn sang trọng đồng điệu với giường tủ gỗ tự nhiên',
        detail:
          'Khi không sử dụng, toàn bộ màn và khung xếp gọn 100% vào hộp gỗ kích thước chỉ 20cm × 17,5cm gắn trên tường đầu giường, trả lại không gian phòng ngủ thoáng rộng tuyệt đối.',
      },
      {
        label: 'Khuyên tròn Inox 304 mở nắp hộp & cơ cấu tay đòn trợ lực 3 giây',
        detail:
          'Chỉ cần móc nhẹ ngón tay vào khuyên tròn Inox để mở nắp hộp và kéo nhẹ về phía cuối giường, hệ khung căng Inox 304 & 201 sẽ tự động vươn ra êm ái.',
      },
      {
        label: 'Logo thương hiệu khắc Laser CNC chìm trực tiếp trên đầu hộp gỗ (Xem ảnh số 2 – IMG_9296)',
        detail:
          'Khắc Laser chìm sắc nét biểu tượng tổ ấm và 5 chú ong chăm chỉ, đóng gói trong khay xốp trắng định hình chống va đập tuyệt đối khi vận chuyển.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'MH-TH-01 (Màn Hộp Thông Minh Vân Gỗ Thu Gọn Đầu Giường)' },
      { label: 'Giá niêm yết tại Tuyến Hoa', value: '1.350.000đ / bộ Vân Gỗ | 1.250.000đ / bộ Trắng Sứ (Thị trường: 1,85Tr – 2,2Tr)' },
      { label: 'Quy cách hộp thu gọn', value: '200 × 175 × 1700 mm (Phù hợp giường 1,6m×2,0m, 1,8m×2,0m & 2,0m×2,2m)' },
      { label: 'Chất liệu khung & vải màn', value: 'Khung căng Inox 304 & 201 không gỉ + Vải màn Polyester trắng/xanh dai bền' },
      { label: 'Bảo hành chính hãng', value: '5 Năm cho hệ khung cơ khí & hộp màn – Miễn phí giao lắp tại Tuyến Hoa' },
    ],
    articleParagraphs: [
      'Nhiều gia đình yêu thích sự an toàn tuyệt đối của màn ngủ chống muỗi nhưng lại ngại các bộ khung màn cố định làm vướng tầm nhìn trong phòng ngủ hiện đại. Dòng sản phẩm Màn Hộp Thông Minh Vân Gỗ (Mã MH-TH-01) chính là bước đột phá: Ban ngày thu gọn 100% vào chiếc hộp vân gỗ nhỏ gọn như một món đồ trang trí nội thất trên đầu giường; ban đêm kéo nhẹ 3 giây là bung thành chiếc màn khung vững chãi.',
      'Qua 02 bức ảnh chụp cận cảnh mở thùng thực tế (IMG_9295 và IMG_9296), khách hàng có thể thấy rõ độ hoàn thiện tinh xảo của bề mặt vân gỗ bóng mịn, khuyên tròn Inox 304 sáng bóng, đường khắc Laser CNC sắc sảo và lớp xốp định hình dày dặn bảo vệ sản phẩm nguyên vẹn từ nhà máy đến tận phòng ngủ.'
    ],
    facebookPostCopy:
      '👑🛌 [SIÊU PHẨM MỚI] MÀN HỘP THÔNG MINH VÂN GỖ THU GỌN ĐẦU GIƯỜNG – KÉO 3 GIÂY LÀ BUNG, XẾP GỌN 100% VÀO HỘP GỖ! ✨\n' +
      '💰 GIÁ THỊ TRƯỜNG: 1.850.000đ – 2.200.000đ / bộ\n' +
      '🔥 GIÁ TẠI TỔNG KHO TUYẾN HOA (BAO LẮP ĐẶT TẬN GIƯỜNG):\n' +
      '   👉 Bản Hộp Trắng Sứ Hiện Đại (1m6 & 1m8): Chỉ 1.250.000đ / 1 bộ\n' +
      '   👉 Bản Hộp Vân Gỗ Khắc Laser Cao Cấp (1m6 & 1m8): Chỉ 1.350.000đ / 1 bộ\n' +
      '   👉 Bản Hộp Vân Gỗ Khổ Đại (2m0 × 2m2): Chỉ 1.550.000đ / 1 bộ\n' +
      '   👉 (Màn khung Inox truyền thống ròng rọc 1m8×2m vẫn giữ giá ưu đãi: 1.000.000đ / bộ)\n' +
      '--------------------------------------------\n' +
      '✅ Ban ngày xếp gọn 100% vải màn và khung vào chiếc hộp vân gỗ (20×17,5cm) trên đầu giường cực kỳ gọn đẹp!\n' +
      '✅ Khung căng tay đòn Inox 304 & 201 siêu bền, vải màn Polyester mắt nhỏ chống muỗi tuyệt đối.\n' +
      '✅ Hàng chính hãng khắc Laser CNC chống hàng giả, đóng thùng xốp nguyên kiện, bảo hành 5 năm!\n' +
      '📞 Gọi/Zalo Anh Tuyến lắp tận nhà: 0344.727.528!',
  },
  {
    id: 'video-xuong-san-xuat-man-hop-thong-minh-khac-laser-xmh01',
    code: 'XMH-TH-01',
    category: 'man-khung-1tr',
    categoryName: 'Đệm · Chiếu · Màn Khung',
    title: '[Video Xưởng Sản Xuất] Cận Cảnh Máy Khắc Laser CNC, Lắp Ráp Bản Lề Tay Đòn Inox 304 & Tổng Kho Màn Hộp Thông Minh Vân Gỗ – Trắng Sứ',
    shortTitle: 'Video Xưởng Khắc Laser & Kho Màn Hộp Thông Minh',
    priceDisplay: '1.250.000đ – 1.350.000đ',
    marketPriceRange: 'Giá xuất xưởng trực tiếp – Tiết kiệm 500.000đ – 650.000đ/bộ',
    marketPriceNote: 'Video 1 phút 05 giây quay trực tiếp tại Xưởng Sản Xuất kèm 02 ảnh thực tế (IMG_9297 thợ lắp bản lề Inox & IMG_9294 tổng kho hàng trăm hộp màn vân gỗ, trắng sứ): Minh chứng nguồn gốc hàng chính hãng cấp văn bằng sáng chế, xuất thẳng từ nhà máy về Showroom Tuyến Hoa.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Màn Hộp Thông Minh Vỏ Nhựa PVC/ABS Trắng Sứ (Khung Inox 304 & 201)',
        marketPrice: '1.750.000đ / bộ',
        storePrice: '1.250.000đ / bộ',
        note: 'Sẵn hàng số lượng lớn tại kho, phù hợp phòng ngủ sơn tường trắng/kem',
      },
      {
        sizeOrOption: '2. Màn Hộp Thông Minh Vỏ Giả Gỗ / Vân Gỗ Khắc Laser CNC (1m6×2m & 1m8×2m)',
        marketPrice: '1.950.000đ / bộ',
        storePrice: '1.350.000đ / bộ',
        note: 'Khắc Laser CNC chống hàng giả, bản lề & tay đòn Inox sáng bóng',
      },
      {
        sizeOrOption: '3. Chiết Khấu Sỉ / Lắp Combo Từ 02 Bộ Màn Hộp Thông Minh Cho Gia Đình Mới Xây',
        marketPrice: '3.900.000đ / 2 bộ',
        storePrice: 'Giảm ngay 100.000đ/đơn',
        note: 'Miễn phí xe tải chở tận nhà và công thợ khoan lắp chuẩn mực',
      },
    ],
    numericPrice: 1350000,
    unitLabel: '1 bộ chính hãng xuất xưởng (Đầy đủ tem QR & phiếu bảo hành)',
    standardDimensions: 'Đóng thùng nguyên kiện 200 × 175 × 1700 mm (Nặng ~7,5kg – 8,5kg/hộp)',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/IMG_9297_395de9ac.JPG',
    videoUrl: '/assets/aistudio/efac290438e544afea301caf4816b714_2cb14457.mp4',
    secondaryImages: [
      '/assets/aistudio/IMG_9294_917bb5f1.JPG',
    ],
    highlightTag: 'Video Xưởng Sản Xuất · Khắc Laser Chính Hãng',
    summary:
      'Video thực tế tại nhà máy sản xuất Màn Hộp Thông Minh: Từ công đoạn tia Laser đỏ khắc logo thương hiệu lên đầu hộp vân gỗ, kiểm tra hệ thống tay đòn thủy lực – lò xo Inox 304 bên trong hộp, đến khu vực đóng thùng carton dán tem mã QR truy xuất nguồn gốc rõ ràng.',
    visualAnnotations: [
      {
        label: 'Phút 0:00 – 0:27: Máy khắc Laser CNC Aiko khắc logo chìm chống hàng giả',
        detail:
          'Tia laser công nghệ cao khắc trực tiếp biểu tượng ngôi nhà gia đình và thông số chính hãng lên nắp hộp vân gỗ, không bao giờ bong tróc.',
      },
      {
        label: 'Phút 0:14 – 0:27 & Ảnh IMG_9297: Kiểm định cơ cấu tay đòn & bản lề Inox 304 bên trong hộp',
        detail:
          'Mở nắp hộp vân gỗ để kiểm tra thanh pit-tông trợ lực, bản lề Inox 304 sáng bóng và lau bóng từng đường vân gỗ trước khi xuất xưởng.',
      },
      {
        label: 'Phút 0:28 – 1:05 & Ảnh IMG_9294: Tổng kho hàng trăm hộp màn vân gỗ & thùng carton dán mã QR',
        detail:
          'Trên mỗi thùng hàng đều in rõ thông số kỹ thuật: Quy cách 200×175×1700mm, Vỏ hộp nhựa PVC giả gỗ, Khung căng Inox 304 & 201, Vải màn Polyester trắng/xanh.',
      },
    ],
    specs: [
      { label: 'Mã tư liệu xưởng', value: 'XMH-TH-01 (Video Dây Chuyền Sản Xuất & Tổng Kho Màn Hộp Thông Minh)' },
      { label: 'Công nghệ nhận diện', value: 'Khắc Laser CNC trực tiếp trên đầu hộp + Tem mã QR chống hàng nhái' },
      { label: 'Vật liệu khung cơ khí', value: 'Inox 304 & 201 kết hợp pit-tông trợ lực đóng mở nhẹ tay' },
      { label: 'Màu sắc hộp màn', value: 'Màu Vân Gỗ Tự Nhiên (1.350.000đ) & Màu Trắng Sứ Hiện Đại (1.250.000đ)' },
      { label: 'Phân phối & Lắp đặt', value: 'Showroom Tuyến Hoa – Chợ Cháy, Ứng Hòa (Hotline/Zalo: 0344.727.528)' },
    ],
    articleParagraphs: [
      'Để bà con hoàn toàn yên tâm về chất lượng và nguồn gốc xuất xứ khi chọn mua Màn Hộp Thông Minh tại Showroom Tuyến Hoa, chúng tôi công khai trọn vẹn video quay trực tiếp tại xưởng sản xuất cùng hình ảnh thợ kỹ thuật lắp ráp bản lề Inox (IMG_9297) và tổng kho hàng trăm bộ hộp màn vân gỗ – trắng sứ (IMG_9294).',
      'Mỗi bộ Màn Hộp Thông Minh đều trải qua quy trình kiểm định nghiêm ngặt: Khắc Laser CNC chống hàng giả trên đầu hộp, căn chỉnh tay đòn Inox 304 & 201 đóng mở mượt mà, lót xốp định hình 2 đầu và dán tem QR đầy đủ thông số trước khi giao đến tận giường khách hàng.'
    ],
    facebookPostCopy:
      '🏭🔬 [VIDEO TẠI XƯỞNG SẢN XUẤT] CẬN CẢNH MÁY KHẮC LASER CNC & TỔNG KHO MÀN HỘP THÔNG MINH VÂN GỖ CHÍNH HÃNG! ✨\n' +
      '--------------------------------------------\n' +
      '🎥 Xem trực tiếp quy trình xuất xưởng một bộ Màn Hộp Thông Minh cao cấp:\n' +
      '1️⃣ Máy khắc Laser CNC khắc chìm biểu tượng chính hãng lên đầu hộp vân gỗ, chống hàng giả 100%.\n' +
      '2️⃣ Hệ tay đòn trợ lực & bản lề Inox 304 & 201 sáng bóng giúp kéo bung màn hoặc thu gọn vào hộp chỉ trong 3 giây.\n' +
      '3️⃣ Đóng thùng carton nguyên kiện có lót xốp chống sốc và tem mã QR ghi rõ quy cách (200×175×1700mm).\n' +
      '--------------------------------------------\n' +
      '💰 GIÁ TẠI KHO TUYẾN HOA (BAO LẮP ĐẶT TẬN NHÀ):\n' +
      '   👉 Hộp Trắng Sứ: 1.250.000đ / bộ | Hộp Vân Gỗ Khắc Laser: 1.350.000đ / bộ\n' +
      '📞 Gọi/Zalo đặt hàng chính hãng: 0344.727.528 (Tuyến Hoa)!',
  },

  // ===========================================================================
  // 00A. BỘ 04 BÀI ĐĂNG MỚI TỪ LÔ 24 ẢNH VỪA TẢI LÊN (ĐÃ LỌC BỎ 20 FILE "- COPY" TRÙNG LẶP)
  // ===========================================================================
  {
    id: 'rem-cau-vong-ngoc-tuyen-han-quoc-cua-so-inox-rcv01',
    code: 'RCV-NT-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Rèm Cầu Vồng Ngọc Tuyến Hàn Quốc (Combi Blinds) Lắp Lọt Lòng Cửa Sổ Khung Inox An Toàn – Cản Sáng 95%',
    shortTitle: 'Rèm Cầu Vồng Ngọc Tuyến Hàn Quốc (520.000đ/m²)',
    priceDisplay: '520.000đ / m²',
    marketPriceRange: 'Giá thị trường: 650.000đ – 780.000đ / m²',
    marketPriceNote: 'Đã lọc bỏ 07 bản sao "- Copy" trùng lặp từ 08 ảnh tải lên: Giữ lại hình ảnh chuẩn sắc nét bộ Rèm Cầu Vồng Ngọc Tuyến màu nâu cafe lắp lọt lòng khung cửa sổ chấn song Inox an toàn, hộp máng nhôm sơn tĩnh điện đồng màu.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Cầu Vồng Hàn Quốc Ngọc Tuyến Dòng Tiêu Chuẩn (Cản sáng 85%–90%)',
        marketPrice: '650.000đ / m²',
        storePrice: '520.000đ / m²',
        note: 'Bao gồm hộp máng nhôm hợp kim & công thợ lắp đặt tận nơi',
      },
      {
        sizeOrOption: '2. Rèm Cầu Vồng Hàn Quốc Modero Cao Cấp (Cản sáng 95% – Màu Nâu Cafe / Ghi Đậm)',
        marketPrice: '720.000đ / m²',
        storePrice: '580.000đ / m²',
        note: 'Vải Polyester Hàn Quốc dệt 2 lớp đan xen chống bám bụi',
      },
      {
        sizeOrOption: '3. Rèm Cầu Vồng Blackout Cản Sáng Tuyệt Đối 100% (Phòng ngủ hướng Tây)',
        marketPrice: '850.000đ / m²',
        storePrice: '650.000đ / m²',
        note: 'Cản nhiệt điều hòa, bảo hành phụ kiện 3 năm tận nhà',
      },
    ],
    numericPrice: 520000,
    unitLabel: '1 m² hoàn thiện cả hộp máng nhôm & công lắp đặt',
    standardDimensions: 'May đo lọt lòng khuôn cửa sổ khung nhôm kính & chấn song Inox',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg',
    highlightTag: 'Rèm Cầu Vồng Ngọc Tuyến · Đã Lọc 7 Bản Trùng',
    summary:
      'Hình ảnh thực tế bộ Rèm Cầu Vồng Ngọc Tuyến màu nâu cafe ấm áp được Anh Tuyến trực tiếp lắp lọt lòng trong khuôn cửa sổ có khung chấn song Inox bảo vệ. Thiết kế 2 lớp vải – lưới đan xen giúp điều chỉnh ánh sáng linh hoạt từ 0% đến 100% chỉ bằng thao tác kéo dây nhẹ nhàng.',
    visualAnnotations: [
      {
        label: 'Lắp gọn lọt lòng khuôn cửa sổ có chấn song Inox',
        detail:
          'Hộp máng rèm nằm gọn phía trên khung cửa nhôm kính và nan Inox bảo vệ, không chiếm diện tích mặt tường và không vướng víu khi mở cửa đón gió.',
      },
      {
        label: 'Cấu tạo 2 lớp Combi Hàn Quốc (Dải vải cản nắng + Dải voan lưới)',
        detail:
          'Kéo so le để lấy ánh sáng dịu nhẹ ban ngày hoặc kéo khít để cản nắng 95% và đảm bảo sự riêng tư tuyệt đối vào buổi tối.',
      },
      {
        label: 'Hộp kỹ thuật nhôm sơn tĩnh điện màu Champagne đồng bộ',
        detail:
          'Hệ đầu kéo trợ lực bi sứ chạy êm ru, dây dù cường lực bền bỉ trên 10 năm sử dụng.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'RCV-NT-01 (Rèm Cầu Vồng Ngọc Tuyến Hàn Quốc)' },
      { label: 'Đơn giá tại xưởng', value: '520.000đ / m² cả lắp đặt (Giá thị trường: 650.000đ – 780.000đ/m²)' },
      { label: 'Chất liệu vải', value: '100% Polyester Hàn Quốc dệt 2 lớp kháng khuẩn, không bám bụi' },
      { label: 'Phụ kiện đi kèm', value: 'Hộp máng nhôm tĩnh điện, thanh đáy nhôm tròn, dây kéo trợ lực' },
      { label: 'Bảo hành kỹ thuật', value: '3 Năm tận nhà bởi Xưởng Rèm Ngọc Tuyến – Tuyến Hoa (0344.727.528)' },
    ],
    articleParagraphs: [
      'Trong lô 24 ảnh khách hàng vừa gửi lên, bức ảnh "Rèm cầu vồng Ngọc Tuyến" có 08 bản sao trùng lặp (- Copy). Hệ thống đã tự động lọc bỏ 07 bản trùng và giữ lại hình ảnh thực tế sắc nét nhất của bộ Rèm Cầu Vồng Hàn Quốc màu nâu cafe lắp tại cửa sổ gia đình.',
      'Ưu điểm vượt trội của Rèm Cầu Vồng Ngọc Tuyến (Mã RCV-NT-01) là khả năng lắp lọt lòng gọn gàng ngay phía trên khung chấn song Inox cửa sổ, vừa giữ trọn nét hiện đại, thoáng sáng cho căn phòng, vừa chống nắng nóng và tia UV hiệu quả với đơn giá trọn gói chỉ 520.000đ/m².'
    ],
    facebookPostCopy:
      '🌈 [RÈM CẦU VỒNG NGỌC TUYẾN] SANG TRỌNG – GỌN GÀNG – ĐIỀU CHỈNH ÁNH SÁNG THÔNG MINH!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 650.000đ – 780.000đ / m²\n' +
      '🔥 GIÁ TẠI XƯỞNG NGỌC TUYẾN – TUYẾN HOA: CHỈ 520.000Đ / M² (BAO ĐO ĐẠC & LẮP ĐẶT TẬN NHÀ)!\n' +
      '--------------------------------------------\n' +
      '✅ Thiết kế 2 lớp vải – lưới Hàn Quốc đan xen: Kéo nhẹ lấy sáng dịu mắt hoặc đóng kín cản nắng 95%–100%.\n' +
      '✅ Lắp gọn lọt lòng khuôn cửa sổ có chấn song Inox, cực kỳ thẩm mỹ và tiết kiệm diện tích.\n' +
      '✅ Hộp máng nhôm sơn tĩnh điện đồng màu, vải Polyester chống bám bụi, độ bền trên 10 năm.\n' +
      '📞 Gọi/Zalo Anh Tuyến mang mẫu tư vấn tận nhà miễn phí: 0344.727.528!',
  },
  {
    id: 'anh-tuyen-nghiem-thu-rem-cau-vong-thong-tang-rem-vai-rcv02',
    code: 'RCV-TH-02',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Anh Tuyến Trực Tiếp Nghiệm Thu Hệ Rèm Cầu Vồng Ghi Đậm Cửa Sổ Phòng Học, Cầu Thang Thông Tầng & Rèm Vải Cửa Ban Công',
    shortTitle: 'Nghiệm Thu Rèm Cầu Vồng Ghi Đậm & Rèm Vải Thông Tầng',
    priceDisplay: '520.000đ / m²',
    marketPriceRange: 'Giá thị trường: Rèm cầu vồng 650k/m² | Rèm vải 750k/m ngang',
    marketPriceNote: 'Đã lọc bỏ 11 bản sao "- Copy" trùng lặp (từ 11 file ảnh Anh Tuyến tại cầu thang & 2 file ảnh rèm cầu vồng ghi đậm phòng học): Quy hoạch thành bộ sưu tập nghiệm thu thực tế sắc nét, rõ ràng.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Cầu Vồng Hàn Quốc Màu Ghi Đậm / Ghi Xám (Cửa sổ phòng học & cầu thang)',
        marketPrice: '650.000đ / m²',
        storePrice: '520.000đ / m²',
        note: 'Lắp gọn trong ô thoáng cầu thang & cửa sổ bàn học',
      },
      {
        sizeOrOption: '2. Rèm Vải Gấm Ghi Sáng Cản Nắng Cửa Mở Ra Ban Công (1 Lớp)',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Trọn gói thanh suốt trắng sứ, đầu vua & công lắp',
      },
      {
        sizeOrOption: '3. Combo Đồng Bộ Cả Nhà (Rèm Vải 2 Lớp Phòng Khách + Rèm Cầu Vồng Các Tầng)',
        marketPrice: '850.000đ / m ngang',
        storePrice: 'Ưu đãi giảm thêm 5%',
        note: 'Anh Tuyến trực tiếp đo đạc và bảo hành 3 năm',
      },
    ],
    numericPrice: 520000,
    unitLabel: '1 m² rèm cầu vồng | 600.000đ / m ngang rèm vải hoàn thiện',
    standardDimensions: 'May đo chuẩn theo ô cửa sổ phòng học, ô thoáng cầu thang & cửa ban công',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/20261017_162136_c08f9065.jpg',
    secondaryImages: [
      '/assets/aistudio/1792619301743_1293093313519991016_1293093313519991016_c3b884b0135e24592fd618ad629e07fd_9004b446.jpg',
    ],
    highlightTag: 'Anh Tuyến Trực Tiếp Lắp Đặt · Đã Lọc 11 Bản Trùng',
    summary:
      'Hình ảnh thực tế Anh Tuyến nở nụ cười rạng rỡ sau khi hoàn tất lắp đặt hệ thống Rèm Cầu Vồng Hàn Quốc màu ghi xám đậm cho các ô cửa sổ lấy sáng cầu thang, cửa sổ phòng học (nội thất tủ hồng pastel phối ghi hiện đại) và bộ Rèm Vải 2 Lớp mở ra ban công tầng 2.',
    visualAnnotations: [
      {
        label: 'Chủ tiệm Anh Tuyến trực tiếp thi công và kiểm tra từng bộ rèm',
        detail:
          'Không qua trung gian: Anh Tuyến trực tiếp đo đạc, khoan lắp và căn chỉnh độ phẳng của từng dải rèm cầu vồng trước khi bàn giao cho gia chủ.',
      },
      {
        label: 'Rèm cầu vồng màu ghi đậm lắp lọt lòng ô thoáng cầu thang & phòng học',
        detail:
          'Màu ghi xám hiện đại cực kỳ ăn nhập với sơn tường trắng và hệ tủ quần áo – bàn học phối màu hồng pastel – ghi xám của các bé.',
      },
      {
        label: 'Phối hợp đồng điệu giữa Rèm Cầu Vồng cửa sổ & Rèm Vải cửa ban công',
        detail:
          'Cửa đi ban công dùng rèm vải kéo ngang mềm mại (600.000đ/m), trong khi các ô cửa sổ dọc hành lang và bàn học dùng rèm cầu vồng cuốn gọn (520.000đ/m²).',
      },
    ],
    specs: [
      { label: 'Mã công trình', value: 'RCV-TH-02 (Hệ Rèm Cầu Vồng Ghi Đậm & Rèm Vải Ban Công Nhà Phố)' },
      { label: 'Đơn giá rèm cầu vồng', value: '520.000đ / m² hoàn thiện (Giá thị trường: 650.000đ/m²)' },
      { label: 'Đơn giá rèm vải ban công', value: '600.000đ / m ngang (1 lớp) | 850.000đ / m ngang (2 lớp)' },
      { label: 'Không gian lắp đặt', value: 'Ô thoáng cầu thang, cửa sổ bàn học tủ hồng – ghi, sảnh tầng 2' },
      { label: 'Người phụ trách', value: 'Anh Tuyến – Cửa hàng Tuyến Hoa (Hotline/Zalo: 0344.727.528)' },
    ],
    articleParagraphs: [
      'Từ 11 bản ảnh trùng lặp chụp Anh Tuyến tại sảnh cầu thang tầng 2 và 02 bản ảnh chụp ô cửa sổ phòng học nội thất hồng – ghi vừa tải lên, hệ thống đã lọc sạch các bản "- Copy" để đăng tải bài viết tổng hợp rõ ràng nhất.',
      'Giải pháp kết hợp Rèm Cầu Vồng Hàn Quốc màu ghi xám (520.000đ/m²) tại các ô cửa sổ đứng, ô thoáng cầu thang, cửa sổ bàn học cùng Rèm Vải Gấm cùng tông màu ghi sáng (600.000đ/m ngang) tại cửa ban công giúp không gian nhà phố 2–3 tầng vừa thông thoáng, hiện đại, vừa cản nắng tuyệt đối.'
    ],
    facebookPostCopy:
      '👷‍♂️✨ ANH TUYẾN TRỰC TIẾP BÀN GIAO HỆ RÈM CẦU VỒNG HÀN QUỐC & RÈM VẢI NHÀ PHỐ HIỆN ĐẠI! ✨\n' +
      '--------------------------------------------\n' +
      '✅ Ô cửa sổ cầu thang & cửa sổ bàn học của bé (tủ hồng phối ghi): Lắp Rèm Cầu Vồng Hàn Quốc màu ghi đậm gọn gàng, lấy sáng linh hoạt, không vướng bàn học – Giá chỉ 520.000đ / m²!\n' +
      '✅ Cửa chính mở ra ban công: Lắp Rèm Vải Gấm màu ghi sáng đồng bộ, sóng rèm suôn thẳng cản nắng 100% – Giá chỉ 600.000đ / m ngang!\n' +
      '✅ Anh Tuyến trực tiếp mang mẫu tư vấn tận nhà, đo đạc chuẩn từng milimet và bảo hành 3 năm chu đáo.\n' +
      '📞 Gọi/Zalo đặt lịch đo lắp ngay trong ngày: 0344.727.528 (Tuyến Hoa)!',
  },
  {
    id: 'cong-trinh-rem-vai-2-lop-phong-khach-xe-tai-tuyen-hoa-rv03',
    code: 'RV-TH-03',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Hoàn Thiện Phòng Khách Nhà Phố Ứng Hòa: Rèm Vải 2 Lớp Gấm Ghi Xám + Voan Trắng & Xe Tải Tuyến Hoa Giao Lắp Tận Sân',
    shortTitle: 'Rèm Vải 2 Lớp Phòng Khách & Xe Tải Giao Tận Nhà',
    priceDisplay: '600.000đ / m ngang',
    marketPriceRange: 'Giá thị trường: 750.000đ – 1.150.000đ / m ngang',
    marketPriceNote: 'Trọn gói công trình thực tế tại Ứng Hòa: Xe tải chuyên dụng của Tuyến Hoa chở toàn bộ rèm cửa, thanh ray và phụ kiện vào tận sân nhà khách hàng và lắp đặt hoàn thiện trong ngày.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Vải Gấm Ghi Xám Cản Nắng 100% (Hệ 1 Lớp Tiêu Chuẩn)',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Đã bao gồm thanh suốt hợp kim, đai vén & công lắp',
      },
      {
        sizeOrOption: '2. Hệ Rèm Vải 2 Lớp Cao Cấp (Lớp Gấm Ghi Xám + Lớp Voan Trắng Lụa)',
        marketPrice: '1.150.000đ / m ngang',
        storePrice: '850.000đ / m ngang',
        note: 'Độ nhún sóng tiêu chuẩn 2,5m vải / 1m ngang cửa',
      },
      {
        sizeOrOption: '3. Rèm Cầu Vồng Cửa Sổ Phụ Cạnh Cầu Thang (Đồng màu ghi xám)',
        marketPrice: '650.000đ / m²',
        storePrice: '520.000đ / m²',
        note: 'Phối đồng bộ tông màu với bộ rèm vải cửa chính',
      },
    ],
    numericPrice: 600000,
    unitLabel: '1 mét ngang hoàn thiện (Miễn phí xe tải giao & lắp đặt)',
    standardDimensions: 'Cửa chính đại sảnh rộng 2,8m – 4,0m × cao 2,7m – 3,0m',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792619301814_1293093313519991016_1293093313519991016_7660cb9abb659911e5fe3cd71a7f60bb_2e6c2394.jpg',
    secondaryImages: [
      '/assets/aistudio/1792619301680_1293093313519991016_1293093313519991016_e1e1340b0c22b60107b156d2a1eeaa43_4fe9d601.jpg',
    ],
    highlightTag: 'Xe Tải Giao Tận Sân · Rèm Vải 600k/m',
    summary:
      'Toàn cảnh phòng khách nhà phố hiện đại vừa được đội ngũ Tuyến Hoa lắp đặt hoàn thiện: Bộ rèm vải 2 lớp màu ghi xám sang trọng tại cửa chính 4 cánh kết hợp rèm cầu vồng cùng tông màu bên ô cửa sổ cầu thang, phía ngoài sân là xe tải chuyên dụng Tuyến Hoa chở hàng tận nơi.',
    visualAnnotations: [
      {
        label: 'Sóng rèm vải 2 lớp may độ nhún 2,5 tạo múi tròn suôn thẳng',
        detail:
          'Lớp vải gấm ghi xám bên ngoài cản sáng 100%, lớp voan trắng lụa bên trong giúp đón ánh sáng dịu nhẹ và tôn lên vẻ sang trọng cho phòng khách.',
      },
      {
        label: 'Phối màu đồng bộ 100% giữa cửa chính và cửa sổ cầu thang',
        detail:
          'Ô cửa sổ bên cạnh cầu thang đá hoa cương được lắp bộ rèm cầu vồng cùng tông màu ghi xám, tạo tổng thể kiến trúc hài hòa, tinh tế.',
      },
      {
        label: 'Xe tải Tuyến Hoa đỗ tận cổng – Giao lắp trọn gói 0đ phí vận chuyển',
        detail:
          'Toàn bộ thanh ray dài 3m–4m và vải rèm đã là hơi phẳng phiu được chở bằng xe tải riêng của cửa hàng đến lắp đặt ngay trong ngày.',
      },
    ],
    specs: [
      { label: 'Mã công trình', value: 'RV-TH-03 (Rèm Vải 2 Lớp Phòng Khách & Rèm Cầu Vồng Đồng Bộ)' },
      { label: 'Giá rèm vải 1 lớp', value: '600.000đ / m ngang cả lắp (Giá thị trường: 750.000đ/m)' },
      { label: 'Giá rèm vải 2 lớp', value: '850.000đ / m ngang cả lắp (Giá thị trường: 1.150.000đ/m)' },
      { label: 'Tỉ lệ may nhún sóng', value: 'Chuẩn 2,5m vải hoàn thiện / 1m ngang cửa, là hơi định hình múi' },
      { label: 'Vận chuyển & Lắp đặt', value: 'Miễn phí 100% bằng xe tải Tuyến Hoa tại Ứng Hòa & vùng lân cận' },
    ],
    articleParagraphs: [
      'Bức ảnh thực tế chụp từ chính diện phòng khách nhìn ra sân cổng ghi lại trọn vẹn quy trình phục vụ tận tâm của Xưởng Rèm Tuyến Hoa: Chiếc xe tải trắng của cửa hàng đỗ ngay trước cổng, vận chuyển đầy đủ kiện phụ kiện và bộ rèm vải 2 lớp may đo riêng cho gia chủ.',
      'Từng nếp sóng rèm gấm màu ghi xám kết hợp lớp voan trắng xước đều được thợ may Tuyến Hoa căn chỉnh cách mặt sàn đúng 1,5cm – 2cm, vừa giữ vệ sinh sạch sẽ khi lau nhà, vừa tạo dáng rèm buông rủ bề thế như khách sạn 5 sao.'
    ],
    facebookPostCopy:
      '🚛🪟 XE TẢI TUYẾN HOA GIAO & LẮP ĐẶT HOÀN THIỆN BỘ RÈM VẢI 2 LỚP PHÒNG KHÁCH SANG TRỌNG!\n' +
      '💰 GIÁ THỊ TRƯỜNG: 750.000đ – 1.150.000đ / m ngang\n' +
      '🔥 GIÁ GỐC TẠI XƯỞNG TUYẾN HOA (BAO THANH TREO & CÔNG LẮP ĐẶT):\n' +
      '   👉 Rèm vải gấm cản nắng 100% (1 lớp): Chỉ 600.000đ / m ngang\n' +
      '   👉 Rèm vải 2 lớp cao cấp (Gấm cản nắng + Voan trắng lụa): Chỉ 850.000đ / m ngang\n' +
      '   👉 Rèm cầu vồng Hàn Quốc cửa sổ: Chỉ 520.000đ / m²\n' +
      '--------------------------------------------\n' +
      '✅ May đủ độ nhún 2,5m vải/1m cửa, sóng rèm tròn đều suôn thẳng từ trần xuống sàn.\n' +
      '✅ Xe tải cửa hàng chở hàng và thợ khoan lắp sạch sẽ tận nhà hoàn toàn MIỄN PHÍ!\n' +
      '📞 Gọi/Zalo Anh Tuyến: 0344.727.528',
  },
  {
    id: 'khao-sat-cua-nhom-kinh-view-ho-cua-luoi-rem-to-ong-ks01',
    code: 'KS-VH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Anh Tuyến Trực Tiếp Khảo Sát Hệ Cửa Nhôm Kính Lớn View Hồ & Nghiệm Thu Cửa Lưới Chống Muỗi – Vách Rèm Tổ Ong Cách Nhiệt',
    shortTitle: 'Khảo Sát Cửa Kính View Hồ & Lắp Cửa Lưới – Rèm Tổ Ong',
    priceDisplay: '550.000đ / m²',
    marketPriceRange: 'Giá thị trường: 750.000đ – 950.000đ / m² (Khảo sát tận nhà 0đ)',
    marketPriceNote: 'Đã lọc bỏ 02 bản sao "- Copy" trùng lặp từ 03 file ảnh tải lên: Giữ lại bức ảnh chuẩn Anh Tuyến đeo mic khảo sát thực tế hệ cửa nhôm kính lớn chấn song Inox view hồ kèm 02 ảnh nghiệm thu Cửa lưới chống muỗi & Vách rèm tổ ong.',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Cửa Lưới Chống Muỗi Xếp Xích Sợi Thủy Tinh (Lắp lọt lòng cửa sổ & cửa đi)',
        marketPrice: '750.000đ / m²',
        storePrice: '550.000đ / m²',
        note: 'Ngăn 100% muỗi, côn trùng bay từ mặt hồ vào nhà mà vẫn đón gió mát',
      },
      {
        sizeOrOption: '2. Vách Rèm Tổ Ong Tráng Bạc 2 Lớp Cản Nhiệt Điều Hòa (Màu Ghi Than Chì)',
        marketPrice: '880.000đ / m²',
        storePrice: '650.000đ / m²',
        note: 'Giữ lạnh điều hòa 100%, kéo xếp gọn sát tường',
      },
      {
        sizeOrOption: '3. Khảo Sát Đo Đạc & Tư Vấn Giải Pháp Rèm Cửa – Cửa Lưới Tận Công Trình',
        marketPrice: '200.000đ – 300.000đ',
        storePrice: 'MIỄN PHÍ 100%',
        note: 'Anh Tuyến trực tiếp kiểm tra kích thước đố cửa nhôm Xingfa & nan Inox',
      },
    ],
    numericPrice: 550000,
    unitLabel: '1 m² cửa lưới chống muỗi | 650.000đ / m² vách rèm tổ ong',
    standardDimensions: 'Gia công theo kích thước lọt lòng đố cửa nhôm Xingfa (dày 3cm–4cm)',
    mediaType: 'image',
    imageUrl: '/assets/aistudio/1792658171296_1293093313519991016_1293093313519991016_f85acd8d91ec951798f3b410a5744ecc_-_Copy_-_Copy_78dd3953.jpg',
    secondaryImages: [
      '/assets/aistudio/1792658171183_1293093313519991016_1293093313519991016_10108ab564c8fb6ade925f6a8e609889_1971346a.jpg',
      '/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg',
    ],
    highlightTag: 'Khảo Sát Cửa View Hồ · Đã Lọc 2 Bản Trùng',
    summary:
      'Bộ 3 hình ảnh thực tế tại công trình nhà phố ven hồ: (1) Anh Tuyến trực tiếp khảo sát hệ cửa nhôm kính lớn có khung nan Inox bảo vệ nhìn ra mặt hồ; (2) Tư vấn lắp đặt hệ Cửa Lưới Chống Muỗi xếp ly lọt lòng khung cửa; và (3) Nghiệm thu hệ Vách Rèm Tổ Ong màu ghi than chì cản nhiệt điều hòa tuyệt đối.',
    visualAnnotations: [
      {
        label: 'Khảo sát thực tế hệ cửa nhôm Xingfa & chấn song Inox view hồ',
        detail:
          'Nhà ven sông hồ có gió mát nhưng nhiều muỗi và nắng chói mặt nước; Anh Tuyến trực tiếp đo khe hở đố cửa để lắp kết hợp cửa lưới chống muỗi và rèm cản nắng.',
      },
      {
        label: 'Cửa lưới chống muỗi xếp ly sợi thủy tinh đón trọn gió hồ tự nhiên',
        detail:
          'Mắt lưới siêu mịn ngăn 100% muỗi, dĩn, kiến ba khoang bay vào phòng mà không cản tầm nhìn ra mặt hồ xanh mát (Đơn giá: 550.000đ/m²).',
      },
      {
        label: 'Nghiệm thu vách rèm tổ ong tráng bạc màu ghi than chì hiện đại',
        detail:
          'Khi bật điều hòa, kéo vách rèm tổ ong (650.000đ/m²) để khóa chặt 100% hơi lạnh và cản nắng hướng Tây hoàn hảo.',
      },
    ],
    specs: [
      { label: 'Mã công trình', value: 'KS-VH-01 (Khảo Sát Cửa Sổ View Hồ & Thi Công Cửa Lưới – Rèm Tổ Ong)' },
      { label: 'Giá cửa lưới chống muỗi', value: '550.000đ / m² cả lắp (Giá thị trường: 750.000đ/m²)' },
      { label: 'Giá vách rèm tổ ong', value: '650.000đ / m² cả lắp (Giá thị trường: 880.000đ/m²)' },
      { label: 'Chi phí khảo sát đo đạc', value: 'Miễn phí 100% tận nhà tại Ứng Hòa và các huyện lân cận' },
      { label: 'Hotline / Zalo trực tiếp', value: '0344.727.528 (Anh Tuyến)' },
    ],
    articleParagraphs: [
      'Trong lô 24 ảnh mới tải lên, bức ảnh Anh Tuyến đứng khảo sát trước khung cửa nhôm kính lớn có chấn song Inox nhìn ra mặt hồ xuất hiện 03 lần (- Copy). Hệ thống đã lọc bỏ 02 bản trùng lặp và kết hợp cùng 02 bức ảnh nghiệm thu thực tế tại cùng công trình để tạo nên bài đăng hoàn chỉnh.',
      'Đối với các ngôi nhà có cửa sổ lớn nhìn ra hồ nước, cánh đồng hoặc vườn cây, giải pháp lắp đặt Cửa Lưới Chống Muỗi xếp xích (550.000đ/m²) kết hợp Vách Rèm Tổ Ong cản nhiệt (650.000đ/m²) hoặc Rèm Cầu Vồng (520.000đ/m²) của Xưởng Tuyến Hoa giúp gia chủ mở cửa đón gió trời mát rượi suốt bốn mùa mà không lo muỗi hay côn trùng xâm nhập.'
    ],
    facebookPostCopy:
      '🌊🪟 [KHẢO SÁT & THI CÔNG THỰC TẾ] GIẢI PHÁP CỬA LƯỚI CHỐNG MUỖI & VÁCH RÈM TỔ ONG CHO NHÀ VIEW HỒ THOÁNG MÁT!\n' +
      '--------------------------------------------\n' +
      '✅ Nhà ven hồ, ven sông hay gần vườn cây thường rất thoáng gió nhưng lại nhiều muỗi, dĩn và nắng gắt phản chiếu.\n' +
      '✅ Anh Tuyến trực tiếp đến tận công trình khảo sát đố cửa nhôm kính & chấn song Inox hoàn toàn MIỄN PHÍ!\n' +
      '💰 BÁO GIÁ GỐC TẠI XƯỞNG TUYẾN HOA (BAO LẮP ĐẶT HOÀN THIỆN):\n' +
      '   👉 Cửa lưới chống muỗi xếp xích cao cấp: Chỉ 550.000đ / m² (Mở cửa đón gió hồ 24/24 không lo muỗi)\n' +
      '   👉 Vách rèm tổ ong tráng bạc 2 lớp cản nhiệt điều hòa: Chỉ 650.000đ / m²\n' +
      '   👉 Rèm cầu vồng Hàn Quốc lấy sáng thông minh: Chỉ 520.000đ / m²\n' +
      '📞 Gọi/Zalo Anh Tuyến tư vấn & khảo sát ngay: 0344.727.528!',
  },
  // ===========================================================================
  // 00B. BỘ BÀI ĐĂNG TỔ HỢP SHOWROOM 3 TẦNG, RÈM TỰ ĐỘNG THÔNG MINH & VIDEO THI CÔNG (ĐÃ CẮT BỎ VIDEO/ẢNH TRÙNG LẶP)
  // ===========================================================================
  {
    id: 'rem-tu-dong-ngoi-nha-thong-minh-tuyen-hoa-rtd01',
    code: 'RTD-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Ngôi Nhà Thông Minh Tuyến Hoa: Hệ Rèm Vải 2 Lớp Tự Động & Rèm Cầu Vồng Tự Động Điều Khiển Remote Từ Xa (Đẳng Cấp Được Khẳng Định)',
    shortTitle: 'Rèm Vải & Rèm Cầu Vồng Tự Động Thông Minh',
    priceDisplay: '600.000đ / m ngang',
    marketPriceRange: 'Giá thị trường: Rèm vải 750k–1.150k/m | Động cơ tự động 3,8Tr–4,5Tr/bộ',
    marketPriceNote: 'Đã cắt bỏ các đoạn ghép ngoài lề và màn hình đen CapCut: Giữ trọn phân cảnh Anh Tuyến giới thiệu Hệ Rèm Vải 2 Lớp Tự Động & Rèm Cầu Vồng Tự Động điều khiển chỉ với 1 nút bấm kèm bộ đôi hình ảnh "Rèm Tuyến Hoa – Phục Vụ Anh Chị Em Mọi Miền Tổ Quốc".',
    marketPriceTiers: [
      {
        sizeOrOption: '1. Rèm Vải Gấm Ghi Xám Cản Nắng 100% (May sóng Oze / Định hình)',
        marketPrice: '750.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Bao gồm thanh treo hợp kim & công thợ lắp đặt',
      },
      {
        sizeOrOption: '2. Hệ Rèm Vải 2 Lớp Phòng Khách Hiện Đại (Vải chính + Voan trắng)',
        marketPrice: '1.150.000đ / m ngang',
        storePrice: '850.000đ / m ngang',
        note: 'Sóng rèm suôn thẳng kịch sàn, sang trọng chuẩn biệt thự',
      },
      {
        sizeOrOption: '3. Trọn Bộ Động Cơ Rèm Tự Động Thông Minh (Điều khiển Remote / App)',
        marketPrice: '3.800.000đ / bộ motor',
        storePrice: '2.850.000đ / bộ motor',
        note: 'Chỉ 1 nút bấm đóng mở rèm vải & rèm cầu vồng từ xa',
      },
    ],
    numericPrice: 600000,
    unitLabel: '1 mét ngang rèm hoàn thiện (Hỗ trợ nâng cấp Motor tự động)',
    standardDimensions: 'Thiết kế may đo theo cửa phòng khách, phòng thờ, biệt thự & nhà thông minh',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/IMG_5314_ae0205c4.PNG',
    videoUrl: '/assets/videos/motorized_drapery_dual.mp4',
    secondaryImages: [
      '/assets/aistudio/IMG_5312_c3f3e101.PNG',
    ],
    highlightTag: 'Rèm Tự Động Thông Minh · Đã Lọc Video Trùng',
    summary:
      'Bài đăng chắt lọc từ bộ ảnh & video mới của Anh Tuyến ("Rèm Tuyến Hoa – Phục Vụ Anh Chị Em Mọi Miền Tổ Quốc" & "Đẳng Cấp Được Khẳng Định"): Chỉ với một nút bấm trên điều khiển từ xa (Remote), hệ rèm vải 2 lớp tự động kéo mở nhẹ nhàng và rèm cầu vồng tự động cuốn lên êm ái.',
    visualAnnotations: [
      {
        label: 'Anh Tuyến trực tiếp giới thiệu: "Phục Vụ Anh Chị Em Mọi Miền Tổ Quốc"',
        detail:
          'Hình ảnh thực tế Anh Tuyến đứng trước bộ rèm vải gấm màu ghi xám sang trọng và bộ rèm phòng thờ chuẩn mực ("Đẳng cấp được khẳng định").',
      },
      {
        label: 'Chỉ 1 nút bấm Remote: Rèm vải 2 lớp & Rèm cầu vồng tự động vận hành',
        detail:
          'Động cơ rèm thông minh chạy siêu êm, tích hợp điều khiển từ xa giúp người già và trẻ nhỏ đóng/mở rèm cửa cao kịch trần cực kỳ tiện nghi.',
      },
      {
        label: 'Đã cắt bỏ hoàn toàn cảnh ghép ngoài lề & logo CapCut cuối video',
        detail:
          'Biên tập tinh gọn, lịch sự, tập trung 100% vào không gian phòng khách hiện đại và chất lượng rèm cửa Tuyến Hoa.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'RTD-TH-01 (Rèm Vải Gấm & Hệ Rèm Tự Động Thông Minh Tuyến Hoa)' },
      { label: 'Thông điệp chủ tiệm', value: 'Rèm Tuyến Hoa – Đẳng Cấp Được Khẳng Định – Phục Vụ Mọi Miền Tổ Quốc' },
      { label: 'Giá rèm vải 1 lớp / 2 lớp', value: '600.000đ/m ngang (1 lớp) | 850.000đ/m ngang (2 lớp âm trần)' },
      { label: 'Giá rèm cầu vồng / Motor', value: 'Rèm cầu vồng: 520.000đ/m² | Motor tự động: 2.850.000đ/bộ' },
      { label: 'Hotline / Zalo tư vấn', value: '0344.727.528 (Anh Tuyến – Khảo sát & lắp đặt tận nơi)' },
    ],
    articleParagraphs: [
      'Chào mừng Quý khách đến với giải pháp Ngôi Nhà Thông Minh (Smart Home) do Xưởng Mành Rèm Tuyến Hoa trực tiếp thiết kế và thi công! Chỉ với một nút bấm trên điều khiển từ xa (Remote) hoặc điện thoại, hệ thống Rèm Vải 2 Lớp âm trần tự động kéo ra – đóng lại êm ru, đồng thời hệ Rèm Cầu Vồng cửa sổ cũng tự động cuốn lên đón ánh sáng tự nhiên.',
      'Bên cạnh dòng rèm tự động hiện đại, Tuyến Hoa luôn tự hào với các mẫu Rèm Vải Gấm màu ghi xám chống nắng 100% lắp cho phòng khách và không gian phòng thờ gia tiên ("Rèm Tuyến Hoa – Đẳng cấp được khẳng định"), cam kết đơn giá gốc tại xưởng chỉ 600.000đ/m ngang trọn gói cả thanh treo và công lắp đặt.'
    ],
    facebookPostCopy:
      '🏡✨ CHÀO MỪNG BẠN ĐẾN VỚI NGÔI NHÀ THÔNG MINH – RÈM TỰ ĐỘNG & RÈM VẢI CAO CẤP TUYẾN HOA! ✨🏡\n' +
      '("RÈM TUYẾN HOA – ĐẲNG CẤP ĐƯỢC KHẲNG ĐỊNH – PHỤC VỤ ANH CHỊ EM MỌI MIỀN TỔ QUỐC")\n' +
      '--------------------------------------------\n' +
      '🎮 Chỉ với MỘT NÚT BẤM trên điều khiển từ xa:\n' +
      '✅ Hệ Rèm Vải 2 Lớp Âm Trần tự động kéo ra và đóng lại nhẹ nhàng, sang trọng.\n' +
      '✅ Hệ Rèm Cầu Vồng Hàn Quốc tự động cuốn lên – hạ xuống điều chỉnh ánh sáng cực kỳ tiện nghi!\n' +
      '✅ Các mẫu Rèm Vải Gấm Ghi Xám phòng khách & phòng thờ suôn sóng tròn đều, cản nắng 100%.\n' +
      '💰 BẢNG GIÁ GỐC TẠI XƯỞNG TUYẾN HOA:\n' +
      '   • Rèm vải gấm cản nắng 1 lớp: 600.000đ / mét ngang (Cả thanh treo & công lắp)\n' +
      '   • Rèm vải 2 lớp (Vải gấm + Voan lụa): 850.000đ / mét ngang\n' +
      '   • Rèm cầu vồng Hàn Quốc: 520.000đ / m²\n' +
      '   • Động cơ Rèm Tự Động điều khiển Remote: 2.850.000đ / bộ (Bảo hành 3 năm)\n' +
      '🚛 Miễn phí mang mẫu khảo sát & lắp đặt tận nhà!\n' +
      '📞 Gọi/Zalo ngay Anh Tuyến: 0344.727.528',
  },
  {
    id: 'video-to-hop-showroom-3-tang-va-thi-cong-thuc-te-vid01',
    code: 'VID-TH-01',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Video Toàn Cảnh Tổ Hợp Showroom 3 Tầng Năng Lượng Mặt Trời & Anh Tuyến Trực Tiếp Lắp Đặt Rèm Cửa – Đệm Tận Nhà (Đã Cắt Lọc Cảnh Trùng)',
    shortTitle: 'Video Tổ Hợp Showroom 3 Tầng & Lắp Đặt Thực Tế',
    priceDisplay: 'Rèm 600k/m · Đệm 1,35Tr',
    marketPriceRange: 'Đại lý cấp 1 & Xưởng sản xuất trực tiếp – Rẻ hơn thị trường 15% – 30%',
    marketPriceNote: 'Đã gộp 3 video cắt lẻ trùng lặp (Tầng 1, Tầng 2, Tầng 3) và cắt bỏ 2 giây màn hình đen CapCut ở cuối video để tạo thành 01 bài đăng tổng hợp chuyên nghiệp nhất.',
    marketPriceTiers: [
      {
        sizeOrOption: 'TẦNG 1: Rèm Vải (600k/m) · Rèm Cầu Vồng (520k/m²) · Rèm Cuốn (280k/m²) · Mành Trúc · Bạt Cuốn (220k/m²)',
        marketPrice: '300k – 850k / đơn vị',
        storePrice: '220k – 600k / đơn vị',
        note: 'Mặt tiền 3 ô rộng thoáng – Trưng bày hàng trăm mẫu thực tế',
      },
      {
        sizeOrOption: 'TẦNG 2: Chăn Ga Gối Đệm (Từ 1,35Tr) · Màn Khung 1,8m×2m (1Tr/bộ) · Sofa – Giường – Tủ & Livestream',
        marketPrice: '1,65Tr – 5,95Tr',
        storePrice: '1,0Tr – 4,45Tr',
        note: 'Không gian nội thất hiện đại & phòng Livestream báo giá trực tiếp',
      },
      {
        sizeOrOption: 'TẦNG 3: Công Nghệ Quản Lý Đơn Hàng & Đặc Sản Vùng Miền (Tương Ngọc Tuyến 65k/chai – 120k/bình)',
        marketPrice: '80k – 180k',
        storePrice: '65k – 120k',
        note: 'Mái bằng năng lượng mặt trời tiết kiệm điện, bảo vệ môi trường',
      },
    ],
    numericPrice: 600000,
    unitLabel: 'Tổ hợp 3 tầng: Mành Rèm – Chăn Ga Gối Đệm – Nội Thất – Đặc Sản Ngọc Tuyến',
    standardDimensions: 'Mặt tiền 3 ô rộng thoáng · Tầng 1 Rèm Cửa · Tầng 2 Đệm & Nội Thất · Tầng 3 Công Nghệ & Đặc Sản',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/poster_tuyen_hoa_install.jpg',
    videoUrl: '/assets/aistudio/lv_0_20260706112032_1ddbd08c.mp4',
    highlightTag: 'Tổ Hợp 3 Tầng · Đã Gộp 3 Video Trùng',
    summary:
      'Bài đăng tổng hợp quy mô Tổ Hợp Showroom 3 Tầng Tuyến Hoa (Mái năng lượng mặt trời xanh sạch) và thước phim thực tế Anh Tuyến cùng đội ngũ kỹ thuật trực tiếp cầm máy khoan lắp rèm cửa, bàn giao đệm tận giường cho khách hàng.',
    visualAnnotations: [
      {
        label: 'Tầng 1: Trung tâm Rèm Cửa – Mành Rèm – Bạt Tự Cuốn – Hạt Gỗ',
        detail:
          'Trưng bày đầy đủ Rèm vải cản nắng, Rèm cầu vồng Hàn Quốc, Rèm cuốn văn phòng, Mành trúc thường, Mành trúc vẽ tranh, Bạt cuốn và Rèm hạt gỗ phong thủy.',
      },
      {
        label: 'Tầng 2: Không gian Chăn Ga Gối Đệm, Sofa, Giường Tủ & Livestream Bán Hàng',
        detail:
          'Trưng bày các bộ Sofa hiện đại, Giường ngủ, Tủ quần áo, Bàn ghế ăn, Đệm chính hãng và khu vực Livestream tư vấn bán hàng trực tuyến.',
      },
      {
        label: 'Tầng 3 & Mái Năng Lượng Mặt Trời: Công Nghệ & Đặc Sản Vùng Miền',
        detail:
          'Ứng dụng công nghệ hiện đại trong quản lý vận hành kết hợp trưng bày sản phẩm thủ công mỹ nghệ và đặc sản Tương Ngọc Tuyến gia truyền.',
      },
    ],
    specs: [
      { label: 'Mã bài đăng', value: 'VID-TH-01 (Tổ Hợp Showroom 3 Tầng & Video Thi Công Thực Tế Tuyến Hoa)' },
      { label: 'Xử lý chống trùng lặp', value: 'Đã gộp 3 video 9 giây trùng lặp & cắt bỏ màn hình đen CapCut cuối video' },
      { label: 'Phân khu Tầng 1', value: 'Rèm vải (600k/m), Rèm cầu vồng (520k/m²), Rèm cuốn (280k/m²), Mành trúc, Bạt cuốn' },
      { label: 'Phân khu Tầng 2', value: 'Chăn Ga Gối Đệm, Màn khung (1Tr/bộ), Sofa, Giường tủ & Góc Livestream' },
      { label: 'Phân khu Tầng 3', value: 'Trung tâm Công nghệ & Đặc sản vùng miền Tương Ngọc Tuyến (65k – 120k)' },
    ],
    articleParagraphs: [
      'Nhằm mang đến trải nghiệm mua sắm "Tất cả cho ngôi nhà bạn thêm đẹp" tại một điểm đến duy nhất, Tổ hợp Showroom Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa được quy hoạch bài bản trên 3 tầng hiện đại sử dụng hệ thống điện mặt trời áp mái thân thiện với môi trường.',
      'Tại Tầng 1 với mặt tiền 3 ô kính rộng thoáng, quý khách dễ dàng lựa chọn mọi dòng Rèm vải, Rèm cầu vồng, Rèm cuốn trơn, Mành trúc vẽ tranh, Bạt cuốn và Rèm hạt gỗ. Bước lên Tầng 2 là thế giới Chăn ga gối đệm, Sofa, Giường tủ và khu vực Livestream báo giá trực tiếp. Tầng 3 là trung tâm công nghệ điều phối đơn hàng kết hợp trưng bày đặc sản vùng miền Tương Ngọc Tuyến thủ công.'
    ],
    facebookPostCopy:
      '🏢🌟 KHÁM PHÁ TỔ HỢP SHOWROOM 3 TẦNG TUYẾN HOA – TẤT CẢ CHO NGÔI NHÀ BẠN THÊM ĐẸP! 🌟🏢\n' +
      '--------------------------------------------\n' +
      '☀️ Tòa nhà 3 tầng hiện đại với Mái Năng Lượng Mặt Trời xanh sạch & Mặt tiền 3 ô rộng thoáng đỗ ô tô thoải mái:\n' +
      '🔹 TẦNG 1 – THẾ GIỚI RÈM CỬA & MÀNH RÈM:\n' +
      '   • Rèm vải cản nắng 100%: 600.000đ/m ngang cả lắp | Rèm cầu vồng: 520.000đ/m²\n' +
      '   • Rèm cuốn văn phòng: 280.000đ/m² | Bạt tự cuốn: 220.000đ/m² | Mành trúc & Rèm hạt gỗ phong thủy.\n' +
      '🔹 TẦNG 2 – CHĂN GA GỐI ĐỆM, NỘI THẤT & LIVESTREAM BÁN HÀNG:\n' +
      '   • Đệm Kim Cương, Everhome, TH VICUNA, Đệm Gấp 2 Chần Múi: Từ 1.350.000đ – 2.850.000đ/tấm.\n' +
      '   • Màn khung Inox 1,8m×2,0m: 1.000.000đ/bộ bao lắp | Sofa hiện đại, Giường ngủ, Tủ quần áo, Bàn ghế ăn.\n' +
      '🔹 TẦNG 3 – CÔNG NGHỆ & ĐẶC SẢN VÙNG MIỀN:\n' +
      '   • Trung tâm điều phối đơn hàng & Đặc sản Tương Ngọc Tuyến ủ chum sành (65k/chai 500ml – 120k/bình quà biếu).\n' +
      '--------------------------------------------\n' +
      '🚛 Giao hàng nhanh – Lắp đặt tận nơi – Giá gốc tận xưởng không lo về giá!\n' +
      '📞 Hotline / Zalo: 0344.727.528 (Showroom Tuyến Hoa – Chợ Cháy / Chợ Ngăm, Ứng Hòa, Hà Nội)',
  },
  {
    id: 'video-can-canh-rem-gam-xanh-co-vit-yem-no-dinh-da-vid02',
    code: 'VID-TH-02',
    category: 'cong-trinh-video',
    categoryName: 'Rèm · Bạt · Showroom & Video',
    title: 'Video Thực Tế Cận Cảnh Bộ Rèm Vải Gấm Xanh Cổ Vịt Thêu Hoa Vàng Phối Yếm Nơ Đính Đá Pha Lê Tuyến Hoa',
    shortTitle: 'Video Rèm Gấm Xanh Cổ Vịt Yếm Nơ Đính Đá',
    priceDisplay: '600.000đ / m ngang',
    marketPriceRange: 'Giá thị trường rèm thêu có yếm võng đính đá: 800.000đ – 950.000đ / m ngang',
    marketPriceNote: 'Video quay thực tế 100% tại nhà khách hàng: Bộ rèm vải gấm xanh cổ vịt thêu hoa cúc vàng nổi 3D kèm yếm võng đính nơ và tua rua hạt đá pha lê, đồng giá trọn gói 600.000đ/m ngang cả lắp.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Rèm Vải Gấm Thêu Hoa Xanh Cổ Vịt (May hoàn thiện theo mét ngang cửa)',
        marketPrice: '800.000đ / m ngang',
        storePrice: '600.000đ / m ngang',
        note: 'Bao gồm thanh treo, trụ đỡ, dây vén & công lắp',
      },
      {
        sizeOrOption: 'Combo Rèm Cửa Buồng + Yếm Võng Đính Nơ Tua Rua Đá Pha Lê',
        marketPrice: '950.000đ / m ngang',
        storePrice: '650.000đ / m ngang',
        note: 'May thủ công tỉ mỉ cho phòng cưới & cửa buồng truyền thống',
      },
      {
        sizeOrOption: 'Rèm Hạt Gỗ / Hạt Nhựa Pha Lê Treo Cửa Phòng Thờ & Cửa Thông Phòng',
        marketPrice: '550.000đ / m²',
        storePrice: '420.000đ / m²',
        note: 'Đan chữ Phúc – Lộc – Thọ hợp phong thủy',
      },
    ],
    numericPrice: 600000,
    unitLabel: '1 mét ngang hoàn thiện cả thanh treo & công lắp',
    standardDimensions: 'May đo theo kích thước cửa buồng, cửa phòng cưới, cửa cầu thang & phòng khách',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/poster_curtain_floral.jpg',
    videoUrl: '/assets/aistudio/2026-07-05-161259219_b4419ba0.mp4',
    highlightTag: 'Video Quay Thật 100% · Yếm Nơ Pha Lê',
    summary:
      'Video quay cận cảnh từng đường kim mũi chỉ của bộ Rèm Vải Gấm Xanh Cổ Vịt thêu hoa vàng nổi 3D kết hợp phần yếm rèm lượn sóng đính nơ và rèm hạt pha lê lấp lánh do chính tay Anh Tuyến lắp đặt tại nhà khách hàng.',
    visualAnnotations: [
      {
        label: 'Chất vải gấm xanh cổ vịt (Teal Blue) thêu hoa vàng 3D sắc nét',
        detail:
          'Vải gấm lụa dày dặn cản sáng tuyệt đối, họa tiết hoa vàng thêu nổi tạo chiều sâu sang trọng và ấm cúng.',
      },
      {
        label: 'Yếm võng đính nơ & tua rua hạt đá pha lê thủ công',
        detail:
          'Che kín hoàn toàn thanh suốt treo rèm phía trên, tạo điểm nhấn mềm mại duyên dáng cho cửa buồng và phòng tân hôn.',
      },
      {
        label: 'Trọn gói 600.000đ/m ngang cả thanh treo & công thợ lắp tận nơi',
        detail:
          'Không phát sinh phụ phí, bảo hành 3 năm tận nhà cho toàn bộ phụ kiện và đường may.',
      },
    ],
    specs: [
      { label: 'Mã video', value: 'VID-TH-02 (Video Cận Cảnh Rèm Gấm Xanh Cổ Vịt Yếm Nơ Đính Đá)' },
      { label: 'Chất liệu', value: 'Vải gấm lụa thêu hoa nổi 3D + Yếm nơ viền ren hạt đá pha lê' },
      { label: 'Giá thị trường', value: '800.000đ – 950.000đ / mét ngang' },
      { label: 'Giá tại Tuyến Hoa', value: '600.000đ / mét ngang hoàn thiện (Có yếm nơ đính đá: 650.000đ/m)' },
      { label: 'Bảo hành', value: 'Bảo hành 3 năm tận nhà – Miễn phí mang mẫu tư vấn' },
    ],
    articleParagraphs: [
      'Trong đoạn video thực tế mã VID-TH-02, quý khách có thể quan sát cận cảnh chất lượng may đo thủ công của Xưởng Mành Rèm Tuyến Hoa qua bộ rèm vải gấm màu xanh cổ vịt thêu hoa vàng rực rỡ lắp đặt cho cửa buồng và không gian phòng khách gia đình.',
      'Từng múi sóng rèm được định hình tròn đều chuẩn tỷ lệ 2,5m vải trên 1m ngang cửa, kết hợp lớp yếm võng đính nơ và hạt đá pha lê lấp lánh giúp che khuyết điểm khung cửa và tôn lên vẻ trang trọng, đầm ấm cho ngôi nhà.'
    ],
    facebookPostCopy:
      '🌸🎬 [VIDEO QUAY THẬT 100%] CẬN CẢNH BỘ RÈM GẤM XANH CỔ VỊT THÊU HOA VÀNG & YẾM NƠ ĐÍNH ĐÁ TUYẾN HOA! 🎬🌸\n' +
      '--------------------------------------------\n' +
      '✨ Mời các bác xem cận cảnh từng đường kim mũi chỉ và độ rủ sóng của bộ rèm cửa buồng / phòng cưới vừa được Anh Tuyến lắp đặt hoàn thiện:\n' +
      '✅ Nền vải gấm lụa xanh cổ vịt dày dặn, thêu hoa cúc vàng nổi 3D cực sang.\n' +
      '✅ Phần yếm rèm lượn sóng đính nơ kèm tua rua hạt đá pha lê lấp lánh.\n' +
      '💰 GIÁ TRỌN GÓI TẠI XƯỞNG TUYẾN HOA:\n' +
      '   • Rèm vải gấm cản nắng / thêu hoa: Chỉ 600.000đ / mét ngang (Đã bao gồm thanh treo & công lắp đặt).\n' +
      '   • Thêm yếm võng đính nơ hạt đá thủ công: Chỉ 650.000đ / mét ngang (Giá thị trường 850k–950k/m).\n' +
      '📞 Gọi/Zalo Anh Tuyến mang mẫu tận nhà miễn phí: 0344.727.528!',
  },
  {
    id: 'video-vong-xep-ngoc-tuyen-cao-cap-vx01',
    code: 'VX-NT-01',
    category: 'man-khung-1tr',
    categoryName: 'Chăn Ga Gối Đệm & Màn Khung',
    title: 'Video Giới Thiệu Võng Xếp Ngọc Tuyến Cao Cấp Khung Chịu Lực 200kg – Vòng Bi Đưa Êm, Lưới Mát Lưng',
    shortTitle: 'Video Võng Xếp Ngọc Tuyến Chịu Lực 200kg',
    priceDisplay: '550.000đ / bộ',
    marketPriceRange: 'Giá thị trường: 750.000đ – 950.000đ / bộ cả khung & lưới',
    marketPriceNote: 'Trọn bộ Võng Xếp Ngọc Tuyến gồm khung ống thép/inox cỡ lớn chịu tải 200kg + Lưới võng Polyester 2 lớp thoáng khí + Túi đựng chuyên dụng.',
    marketPriceTiers: [
      {
        sizeOrOption: 'Bộ Võng Xếp Ngọc Tuyến Khung Thép Sơn Tĩnh Điện + Lưới 2 Lớp',
        marketPrice: '750.000đ / bộ',
        storePrice: '550.000đ / bộ',
        note: 'Khung ống phi 32 dày dặn, vòng bi bạc đạn đưa êm ru',
      },
      {
        sizeOrOption: 'Bộ Võng Xếp Ngọc Tuyến Khung Inox 100% Không Gỉ Cỡ Đại + Lưới Cao Cấp',
        marketPrice: '950.000đ / bộ',
        storePrice: '720.000đ / bộ',
        note: 'Chịu lực 200kg – Bảo hành khung võng 3 năm',
      },
      {
        sizeOrOption: 'Lưới Võng Cán Gỗ / Cán Thép Mua Lẻ Thay Thế (Khổ rộng gia đình)',
        marketPrice: '250.000đ / chiếc',
        storePrice: '180.000đ / chiếc',
        note: 'Lưới dày 2 lớp thoáng mát, không giãn xệ',
      },
    ],
    numericPrice: 550000,
    unitLabel: 'Trọn bộ Khung võng xếp + Lưới võng 2 lớp Ngọc Tuyến',
    standardDimensions: 'Khung ống chịu lực 200kg · Gấp gọn trong 30 giây · Có túi xách đi kèm',
    mediaType: 'video',
    imageUrl: '/assets/aistudio/poster_vong_xep_ngoc_tuyen.jpg',
    videoUrl: '/assets/aistudio/gemini_generated_video_493AC8E9_855479a1.mp4',
    highlightTag: 'Video Võng Xếp Ngọc Tuyến · Đưa Êm Mát Lưng',
    summary:
      'Video giới thiệu dòng Võng Xếp Ngọc Tuyến chính hãng ("Võng Xếp Ngọc Tuyến – Hân Hạnh Phục Vụ Quý Khách"): Khung võng ống to vững chãi, đầu võng lắp vòng bi bạc đạn Nhật đưa êm không kêu cót két, lưới võng xanh mát rộng rãi.',
    visualAnnotations: [
      {
        label: 'Khung võng xếp ống to chịu tải trọng tới 200kg',
        detail:
          'Chân đế bọc cao su chống trượt sàn gạch, các thanh giằng khóa chốt an toàn tuyệt đối cho cả người lớn và trẻ nhỏ.',
      },
      {
        label: 'Đầu võng chạy vòng bi bạc đạn đôi siêu êm',
        detail:
          'Đưa võng nhẹ nhàng, êm ru, không phát ra tiếng kêu cót két gây mất giấc ngủ trưa.',
      },
      {
        label: 'Lưới võng Polyester 2 lớp cán rộng thoáng khí',
        detail:
          'Mặt lưới đan lỗ thoáng hơi mát lưng mùa hè, tháo giặt nhanh khô, gấp gọn cả khung trong 30 giây.',
      },
    ],
    specs: [
      { label: 'Mã sản phẩm', value: 'VX-NT-01 (Võng Xếp Ngọc Tuyến Chính Hãng)' },
      { label: 'Tải trọng chịu lực', value: '200kg (Nằm 2 người lớn + trẻ nhỏ thoải mái)' },
      { label: 'Giá thị trường', value: '750.000đ – 950.000đ / bộ' },
      { label: 'Giá tại Tuyến Hoa', value: '550.000đ / bộ (Khung sơn tĩnh điện) | 720.000đ / bộ (Khung Inox)' },
      { label: 'Bảo hành & Giao hàng', value: 'Bảo hành khung 3 năm – Giao tận nhà miễn phí' },
    ],
    articleParagraphs: [
      'Bên cạnh Chăn Ga Gối Đệm, Màn Khung và Mành Rèm, cơ sở Ngọc Tuyến – Tuyến Hoa còn phân phối dòng Võng Xếp Ngọc Tuyến (Mã VX-NT-01) được bà con tin dùng nhờ khung võng ống to đầm chắc và lưới võng 2 lớp cực kỳ thoáng mát.',
      'Trọn bộ sản phẩm gồm cả khung võng xếp và lưới võng cán rộng chỉ từ 550.000đ/bộ (rẻ hơn thị trường 200.000đ/bộ), miễn phí vận chuyển tận nhà khi đặt kèm Đệm, Chiếu mây hoặc Màn khung.'
    ],
    facebookPostCopy:
      '🌿 [VIDEO THỰC TẾ] VÕNG XẾP NGỌC TUYẾN CAO CẤP – ĐƯA ÊM RU, MÁT LƯNG, BỀN BỈ 10 NĂM! 🌿\n' +
      '--------------------------------------------\n' +
      '✅ Khung võng ống to chịu lực tới 200kg, chân bọc cao su chống xước nền gạch.\n' +
      '✅ Đầu võng chạy vòng bi bạc đạn siêu êm, không kêu cót két.\n' +
      '✅ Lưới võng 2 lớp cán rộng thoáng khí, nằm êm lưng không bị hằn đau.\n' +
      '💰 GIÁ TẠI KHO NGỌC TUYẾN – TUYẾN HOA:\n' +
      '   • Bộ Khung Thép Sơn Tĩnh Điện + Lưới 2 Lớp: Chỉ 550.000đ / bộ (Giá TT: 750.000đ)\n' +
      '   • Bộ Khung Inox 100% Cỡ Đại + Lưới Cao Cấp: Chỉ 720.000đ / bộ (Giá TT: 950.000đ)\n' +
      '🚛 Giao hàng nhanh tận nhà – Kiểm tra ưng ý mới thanh toán!\n' +
      '📞 Gọi/Zalo đặt ngay: 0344.727.528 (Ngọc Tuyến – Tuyến Hoa)',
  },

  // ===========================================================================
  // 0B. XƯỞNG SẢN XUẤT & CÔNG TRÌNH VÁCH RÈM TỔ ONG TUYẾN HOA
  // ===========================================================================
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
    secondaryImages: [],
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
      '/assets/aistudio/20261023_112551_27542eea.jpg',
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

export const OFFICIAL_WEBSITE_URL = 'https://tuyenhoa-weld.vercel.app/';

export function generateFullCatalogFacebookPost(category: NewProductCategory = 'all'): string {
  const posts = filterAnnotatedProducts(category);
  const header =
    '🌟 TỔNG HỢP BÀI ĐĂNG & BẢNG GIÁ CÁC SẢN PHẨM TẠI SHOWROOM & XƯỞNG TUYẾN HOA 🌟\n' +
    '📍 Địa chỉ: Khu vực Chợ Cháy – Chợ Ngăm, Huyện Ứng Hòa, Hà Nội\n' +
    '📞 Hotline / Zalo đặt hàng & lắp đặt tận nhà: 0344.727.528\n' +
    `🌐 Website chính thức (Xem đủ ${ANNOTATED_PRODUCT_POSTS.length} mẫu & bảng giá): ${OFFICIAL_WEBSITE_URL}\n` +
    '==================================================\n' +
    '📋 BẢNG GIÁ NIÊM YẾT RÕ RÀNG (RẺ HƠN GIÁ THỊ TRƯỜNG 15% – 40%):\n' +
    '1️⃣ BỘ CHĂN GA GỐI LỤA TENCEL ALYDA® LT 28 (7 MÓN), SKY SILK (17 MÃ MÀU) & CÁC MẪU ĐỆM MỚI NHẤT:\n' +
    '   • Bộ Chăn Ga Gối Cưới Lụa Tencel Hoàng Gia Alyda® LT 28 (Full 7 món có sẵn ruột chăn): Cỡ 1m6 & 1m8 giá 2.150.000đ/bộ | Cỡ 2m×2m2 giá 2.350.000đ/bộ (Thị trường: 3,2Tr – 4,2Tr).\n' +
    '   • Bộ Chăn Ga Gối Lụa Tencel Sky Silk 60s (Đủ 17 mã màu SKY1 – SKY362): Cỡ 1m6 & 1m8 giá 1.150.000đ/bộ 5 món | Cỡ 2m×2m2 giá 1.350.000đ/bộ.\n' +
    '   • Đệm Cao Cấp Sông Hồng Back Essential Thế Hệ 4 (Dày 17–32cm): Cỡ 1m6×2m chỉ từ 6.750.000đ | Cỡ 1m8×2m chỉ từ 6.950.000đ (Giá hãng: 11,3Tr – 14,7Tr).\n' +
    '   • Nệm Cao Su 100% Thiên Nhiên Kim Cương Happy Gold (BH 12 năm): Dày 5cm từ 4.950.000đ | Dày 10cm từ 7.650.000đ (Tặng bộ gối cao su non + ga gối).\n' +
    '   • Đệm Everon Hàn Quốc Chính Hãng: Dòng Ceramic hồng ngoại dày 9cm từ 3.850.000đ | Dòng Hoàng Gia Everon Artemis bông Đức dày 15–18cm từ 5.850.000đ.\n' +
    '   • Nệm Cao Su Thiên Nhiên Liên Á Classic & L\'A Dome Mái Vòm (BH 12 năm): Cỡ 1m6 & 1m8 dày 10cm từ 8.950.000đ – 11.950.000đ.\n' +
    '   • Đệm Chống Khuẩn Hanvico Nano Silver & Nano Eros: Cỡ 1m6 & 1m8 từ 2.850.000đ – 4.850.000đ.\n' +
    '   • Màn Hộp Thông Minh Thu Gọn Đầu Giường (Khung Inox 304 & 201, khắc Laser): Bản Hộp Trắng Sứ 1.250.000đ/bộ | Bản Hộp Vân Gỗ 1.350.000đ/bộ | Cỡ 2m×2m2 giá 1.550.000đ/bộ.\n' +
    '   • Màn khung Inox ròng rọc giường đôi Rộng 1,8m × Dài 2,0m: 1.000.000đ / 1 bộ (Giá thị trường: 1.250.000đ – 1.450.000đ).\n' +
    '   • Đệm Gấp 2 Chần Múi Lông Vũ, Kim Cương Mặt Trần & TH VICUNA 5 Sao (Dày 18–20cm): Từ 1.750.000đ – 2.350.000đ.\n' +
    '   • Đệm Lò Xo Túi Độc Lập Everhome: Cỡ 1m6×2m giá 2.850.000đ | Cỡ 1m8×2m giá 3.250.000đ | Nệm Cao Su Everhome 10cm giá 4.850.000đ.\n' +
    '   • Chiếu mây điều hòa lót lưới 3D & ngải cứu (tặng 2 vỏ gối + túi xách): Cỡ 1m6×2m giá 450.000đ/bộ | Cỡ 1m8×2m giá 490.000đ/bộ | Cỡ 2m×2m2 giá 550.000đ/bộ.\n\n' +
    '2️⃣ MÀNH TRÚC TRANH ĐỒNG QUÊ BIỆT THỰ, BẠT TỰ CUỐN CHE NẮNG MƯA, MÁI HIÊN & BẠT XẾP:\n' +
    '   • Mành trúc tự nhiên sơn PU che nắng mưa: 220.000đ / 1 m² | Mành trúc vẽ tranh đồng quê (Đôi Hạc Lúa Vàng, Mục Đồng Chăn Trâu): 260.000đ / 1 m² cả lắp.\n' +
    '   • Bạt tự cuốn lò xo kẻ sọc xanh trắng / vàng xanh: 220.000đ / 1 m² cả lắp (Thị trường: 300.000đ/m²).\n' +
    '   • Bạt tự cuốn hoa văn nâu đồng & lá trúc: 240.000đ / 1 m² cả lắp | Bạt lưới đen xuyên sáng: 280.000đ / 1 m².\n' +
    '   • Mái bạt xếp lượn sóng Hàn Quốc 3 lớp: 350.000đ / 1 m² trọn gói cả khung sắt & công hàn lắp.\n\n' +
    '3️⃣ XƯỞNG RÈM VẢI, RÈM SÁO GỖ PHÒNG THỜ, RÈM CẦU VỒNG NGỌC TUYẾN, RÈM CUỐN, VÁCH TỔ ONG & CỬA LƯỚI:\n' +
    '   • Rèm sáo gỗ tự nhiên bản 5cm (Phòng khách & Phòng thờ biệt thự): 680.000đ / 1 m² cả lắp.\n' +
    '   • Rèm cuốn chống nắng 100% văn phòng & gia đình: 280.000đ / 1 m² cả lắp.\n' +
    '   • Rèm vải gấm cản nắng 100% (1 lớp): 600.000đ / mét ngang cả thanh treo & công lắp (Rèm 2 lớp âm trần: 850.000đ/m).\n' +
    '   • Rèm cầu vồng Hàn Quốc Ngọc Tuyến: 520.000đ / 1 m² | Cửa lưới chống muỗi xếp xích: 550.000đ / 1 m² | Vách rèm tổ ong ngăn lạnh điều hòa: 650.000đ / 1 m² (Cửa vòm cong: 750.000đ/m²).\n\n' +
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
    `🌐 XEM BẢNG GIÁ & ẢNH THỰC TẾ TẠI WEBSITE: ${OFFICIAL_WEBSITE_URL}\n` +
    '📞 GỌI / KẾT BẠN ZALO NGAY: 0344.727.528 (Showroom Tuyến Hoa)';

  return header + itemsText + footer;
}
