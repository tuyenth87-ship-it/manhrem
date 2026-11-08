export type BambooCategory =
  | 'all'
  | 'tranh-tho-phat'
  | 'tranh-phong-thuy'
  | 'tranh-tra-that'
  | 'cong-trinh'
  | 'xuong-san-xuat';

export interface BambooArtwork {
  id: string;
  code: string;
  title: string;
  category: BambooCategory;
  categoryLabel: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  priceEstimate: string;
  standardSize: string;
  material: string;
  meaning: string;
  suitableRooms: string[];
  specs: string[];
  featured?: boolean;
}

export const BAMBOO_CATEGORIES: { id: BambooCategory; label: string; count: number }[] = [
  { id: 'all', label: 'Tất Cả 50 Mẫu Mới', count: 50 },
  { id: 'tranh-tra-that', label: 'Trà Thất & Cổ Phong (22)', count: 22 },
  { id: 'tranh-phong-thuy', label: 'Tranh Phong Thủy & Tài Lộc (10)', count: 10 },
  { id: 'tranh-tho-phat', label: 'Tranh Thờ & Phật Giáo (7)', count: 7 },
  { id: 'cong-trinh', label: 'Công Trình Thực Tế (7)', count: 7 },
  { id: 'xuong-san-xuat', label: 'Xưởng & Chi Tiết Nan (4)', count: 4 },
];

export const BAMBOO_ARTWORKS: BambooArtwork[] = [
  // --- NHÓM 0: 12 TUYỆT TÁC MÀNH TĂM TRE TÂN CỔ ĐIỂN MỚI TẢI LÊN (MT-TC-05 & MT-TC-06) ---
  {
    id: 'mttc05-01-tam-lien-chim-xanh-hoa-dao',
    code: 'MTTC-05A',
    title: 'Bộ 3 Bức Tam Liên Khung Triện "Chim Xanh Hoa Đào – Sơn Thủy Giang Nam – Trúc Quân Tử"',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500739569_122100659330890917_1694898813546800220_n_0efe9cb1.jpg',
    aspect: 'landscape',
    priceEstimate: '320.000 đ / m² (Trọn bộ phụ kiện)',
    standardSize: 'Bộ 3 tấm đối xứng (1 tấm chính giữa + 2 tấm biên theo ô cửa)',
    material: 'Nan tăm tre Bắc Bộ bào mịn 1,2mm dệt chỉ dù + In UV 2 mặt bền màu',
    meaning: 'Thế "Tam Tài" đăng đối viên mãn: Chim xanh báo tin vui mùa xuân, non nước hữu tình và khóm trúc quân tử thanh cao.',
    suitableRooms: ['Phòng khách sau sofa', 'Phòng trà đạo', 'Vách kính biệt thự'],
    specs: [
      'Viền triện góc chữ Vạn kết hợp nút thắt cát tường cổ điển đồng bộ cả 3 tấm',
      'Tấm giữa khung quạt tròn Chim Xanh đậu cành Đào Xuân, hai bên là Sơn Thủy & Trúc',
      'Lọc 80%–85% nắng gắt thành ánh sáng vàng ấm áp, giữ luồng gió đối lưu mát mẻ',
      'Tặng kèm thanh treo gỗ, diềm che đồng bộ và con lăn dây kéo tự hãm'
    ],
    featured: true
  },
  {
    id: 'mttc05-02-tam-lien-thanh-tung-nghenh-khach',
    code: 'MTTC-05B',
    title: 'Bộ 3 Bức Đối Xứng "Thanh Tùng Nghênh Khách & Song Hạc Trường Xuân"',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/500763669_122100650714890917_5640505122017559987_n_f0196d09.jpg',
    aspect: 'landscape',
    priceEstimate: '320.000 đ / m² (Trọn bộ phụ kiện)',
    standardSize: 'Bộ 3 tấm Tam Liên theo kích thước vách kính / cửa sổ lớn',
    material: 'Mành tăm tre tự nhiên dệt chỉ mịn vẽ đại cảnh Tùng Hạc & Thư pháp',
    meaning: 'Nghênh đón quý nhân và tài lộc vào nhà; cây Tùng cổ thụ và đôi Hạc trắng biểu trưng cho trường thọ, bách niên giai lão.',
    suitableRooms: ['Phòng khách chính', 'Sảnh biệt thự', 'Từ đường & Nhà gỗ'],
    specs: [
      'Tấm chính giữa họa đại cảnh Tùng cổ thụ vươn mình trên đỉnh núi mây mù',
      'Hai tấm phụ hai bên là khung tròn Tùng Sơn đối xứng kèm nút thắt cát tường',
      'Bốn chữ thư pháp "Thanh Tùng Nghênh Khách" thể hiện lòng hiếu khách trọng nghĩa',
      'Bảo hành 5 năm độ bền nan tre và cơ cấu ròng rọc khóa bi tại Xưởng Ngọc Tuyến'
    ],
    featured: true
  },
  {
    id: 'mttc05-03-tam-lien-chim-tri-bach-ngoc-lan',
    code: 'MTTC-05C',
    title: 'Bộ 3 Bức Đại Cảnh Công Bút "Chim Trĩ Đỏ & Hoa Bạch Ngọc Lan Trên Ghềnh Đá"',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/500740951_122100654650890917_65672671287950655_n_a36680ac.jpg',
    aspect: 'landscape',
    priceEstimate: '320.000 đ – 340.000 đ / m²',
    standardSize: 'Bộ 3 tấm ghép liên hoàn (Rộng 1,8m – 3,2m x Cao 1,5m – 2,5m)',
    material: 'Nan tăm trúc chuốt mịn in hội họa công bút cung đình sắc nét',
    meaning: 'Chim trĩ đỏ và hoa Bạch Ngọc Lan tượng trưng cho tước lộc vinh hoa, gia môn phú quý và khí chất vương giả.',
    suitableRooms: ['Phòng khách sang trọng', 'Phòng làm việc lãnh đạo', 'Phòng trà VIP'],
    specs: [
      'Họa tiết chim trĩ đỏ sải cánh giữa vòng tròn trung tâm nối liền sang hai bức phụ',
      'Đôi chim trường thọ đậu trên ghềnh đá cổ thưởng hoa Bạch Ngọc Lan & hoa Trà Hồng',
      'Xử lý hấp sấy chống mối mọt, chống cong vênh dưới nắng hướng Tây',
      'Đo đạc và chế tác chuẩn xác theo kích thước cửa thực tế của gia chủ'
    ],
    featured: true
  },
  {
    id: 'mttc05-04-bat-giac-bang-mai-moc-lan-long-chim',
    code: 'MTTC-05D',
    title: 'Bộ Đôi "Khung Cửa Bát Giác Băng Mai – Hoa Mộc Lan Hồng & Lồng Chim Cổ"',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500739763_122100650882890917_3729632059607191024_n_25084717.jpg',
    aspect: 'square',
    priceEstimate: '300.000 đ / m²',
    standardSize: 'Bộ đôi 2 tấm đối xứng (Mỗi tấm rộng 0,8m – 1,4m x Cao 1,5m – 2,2m)',
    material: 'Nan tăm tre tự nhiên mịn màng in hiệu ứng cửa sổ 3D',
    meaning: 'Nghệ thuật "Tá Cảnh" mở rộng không gian, mang hơi thở mùa xuân thanh nhã và an nhiên vào bàn trà, phòng khách.',
    suitableRooms: ['Phòng trà đạo', 'Phòng khách chung cư', 'Cửa sổ bàn làm việc'],
    specs: [
      'Hai nửa khung cửa sổ bát giác chạm hoa văn băng mai đặt đối xứng ở hai mép mành',
      'Cành hoa mộc lan hồng phấn vươn ra đón đôi bướm xuân và lồng chim cổ điển',
      'Tạo chiều sâu 3D giúp căn phòng nhỏ trở nên thoáng rộng và sang trọng hơn',
      'Đi kèm bộ dây rút tự hãm kéo thả êm nhẹ từng tấm độc lập'
    ],
    featured: true
  },
  {
    id: 'mttc05-05-bat-giac-hoa-dao-long-chim-se',
    code: 'MTTC-05E',
    title: 'Bộ Đôi "Cửa Sổ Bát Giác Hoa Đào Hồng, Lồng Chim Quý Tộc & Đàn Chim Sẻ"',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500739985_122100650528890917_234871176915682253_n_d0aa2bed.jpg',
    aspect: 'square',
    priceEstimate: '300.000 đ / m²',
    standardSize: 'Bộ đôi 2 tấm ghép khít hoặc lắp 2 ô cửa sổ liền kề',
    material: 'Mành tăm tre vàng mộc tự nhiên dệt chỉ dù cao cấp',
    meaning: 'Hoa đào hồng báo hỷ sự, đàn chim sẻ ríu rít bên lồng chim quý tộc tượng trưng cho gia đình sum vầy, ấm êm.',
    suitableRooms: ['Sau sofa phòng khách', 'Bàn trà gia đình', 'Phòng ngủ Master'],
    specs: [
      'Thiết kế 2 bức mành ghép đôi tạo hiệu ứng mở hai ô cửa sổ gỗ lim nhìn ra vườn đào',
      'Gam màu hồng đào dịu ngọt trên nền nan tre vàng ấm áp không kén nội thất',
      'Cản nắng 85% chống tia UV bảo vệ đồ gỗ và sofa da trong phòng',
      'Miễn phí tư vấn kích thước chuẩn Thước Lỗ Ban phong thủy'
    ],
    featured: true
  },
  {
    id: 'mttc05-06-ban-nguyet-hoa-dao-long-chim-hd05',
    code: 'HĐ-05',
    title: 'Bộ 3 Bức Mã HĐ-05 "Khung Bán Nguyệt Hoa Đào Xuân & Lồng Chim Quý Tộc"',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500761713_122100651074890917_8609774874102564285_n_e19483f4.jpg',
    aspect: 'landscape',
    priceEstimate: '320.000 đ / m²',
    standardSize: 'Bộ 3 tấm ghép vách ngăn hoặc che cửa kính lớn',
    material: 'Nan tăm tre tự nhiên dệt chỉ mịn + Thanh treo gỗ đồng màu',
    meaning: 'Vách ngăn ước lệ tinh tế phân tách phòng khách và phòng ăn mà không làm bí bách luồng khí phong thủy.',
    suitableRooms: ['Vách ngăn phòng khách – phòng ăn', 'Nhà hàng Á Đông', 'Phòng trà lớn'],
    specs: [
      'Hai bên là nửa khung cửa tròn chạm triện cổ điển tạo bố cục vòm nguyệt môn',
      'Cành đào hồng vươn dài qua 3 tấm mành treo chiếc lồng chim thanh nhã',
      'Khi cần không gian mở có thể kéo cuộn gọn gàng lên sát trần chỉ trong 5 giây',
      'Sản xuất trực tiếp tại Xưởng Ngọc Tuyến – Tuyến Hoa (ĐT: 0344.727.528)'
    ],
    featured: true
  },
  {
    id: 'mttc06-01-lien-hoa-ngu-ngu-diem-trien',
    code: 'MTTC-06A',
    title: 'Bộ Đôi "Liên Hoa Ngũ Ngư – Niên Niên Hữu Dư" Viền Diềm Triện Cổ Điển',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500742419_122100651926890917_2678072256097837987_n_3e96dbc4.jpg',
    aspect: 'square',
    priceEstimate: '280.000 đ / m²',
    standardSize: 'Bộ đôi 2 tấm ghép liền mạch (Rộng 1,2m – 2,4m x Cao 1,4m – 2,2m)',
    material: 'Nan tăm tre chuốt mịn in tranh thủy mặc Liên Hoa Ngũ Ngư',
    meaning: 'Ngũ Ngư Quần Liên (5 chú cá chép đỏ quây quần bên hoa sen) mang ý nghĩa ngũ phúc lâm môn, tài lộc dư dả quanh năm.',
    suitableRooms: ['Phòng trà đạo', 'Phòng thờ gia tiên', 'Phòng khách Á Đông'],
    specs: [
      'Phần diềm mành phía trên chạm đường triện cổ điển cực kỳ trang nhã',
      'Tâm bức mành là vòng tròn 5 chú cá chép đỏ bơi quanh đóa sen hồng nở rộ',
      'Hai bức ghép khít chính xác từng đường nét cánh sen và gợn nước',
      'Tặng kèm đầy đủ thanh treo, diềm hộp và bộ dây kéo tự hãm'
    ],
    featured: true
  },
  {
    id: 'mttc06-02-ha-duong-nguyet-sac-dai-hong-lien',
    code: 'MTTC-06B',
    title: 'Mành Tăm Tre "Hà Đường Nguyệt Sắc" – Đại Hồng Liên & Chuồn Chuồn Đỏ',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500740964_122100651800890917_6445939849596325175_n_aef97f54.jpg',
    aspect: 'portrait',
    priceEstimate: '260.000 đ / m²',
    standardSize: 'Mành đơn 1 tấm (Rộng 0,8m – 1,6m x Cao 1,4m – 2,2m)',
    material: 'Nan tăm tre tự nhiên dệt chỉ mịn họa hoa sen hồng thủy mặc',
    meaning: 'Tâm thanh tịnh như đóa sen hồng vươn lên giữa mặt hồ phẳng lặng, mang lại giấc ngủ an lành và sự thư thái.',
    suitableRooms: ['Cửa sổ phòng ngủ', 'Phòng thiền', 'Phòng thờ Phật', 'Thư phòng'],
    specs: [
      'Đóa Đại Hồng Liên bung cánh mềm mại trên nền nan tăm tre vàng kem dịu mắt',
      'Điểm xuyết lá sen thủy mặc và chú chuồn chuồn đỏ đậu khẽ trên búp sen non',
      'Che nắng dịu nhẹ cho cửa sổ đầu giường mà vẫn giữ phòng ngủ thoáng khí',
      'Dễ dàng vệ sinh lau bụi bằng khăn khô hoặc chổi lông gà'
    ],
    featured: true
  },
  {
    id: 'mttc06-03-son-thuy-thuyen-cau-hoa-dao-dam-sen',
    code: 'MTTC-06C',
    title: 'Bộ 3 Bức Thủy Mặc Đại Cảnh "Hoa Đào Xuân – Sơn Thủy Thuyền Câu – Đầm Sen Hồng"',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500741325_122100651254890917_9134618704346618147_n_9bb8c8f2.jpg',
    aspect: 'landscape',
    priceEstimate: '320.000 đ / m²',
    standardSize: 'Bộ 3 tấm ghép panorama cho cửa sổ rộng hoặc vách trà thất',
    material: 'Mành tăm tre cao cấp in tranh thủy mặc sơn thủy Giang Nam',
    meaning: 'Sơn quản nhân đinh, Thủy quản tài lộc: Núi non vững chãi và dòng nước êm đềm đem lại bình an, thịnh vượng.',
    suitableRooms: ['Phòng trà lớn', 'Phòng khách kệ Tivi', 'Biệt thự nhà vườn'],
    specs: [
      'Bức họa trải dài qua 3 tấm mành: Đào xuân bên trái, núi mờ thuyền câu ở giữa, đầm sen bên phải',
      'Tạo cảm giác không gian mở rộng mênh mông như đang ngắm cảnh bên bờ hồ Giang Nam',
      'Mỗi tấm có dây rút riêng giúp tùy chỉnh ánh sáng từng khoang cửa linh hoạt',
      'Bảo hành 5 năm chính hãng tại Xưởng Mành Tre Trúc Ngọc Tuyến'
    ],
    featured: true
  },
  {
    id: 'mttc06-04-bach-ngoc-lan-khung-tron-nui-mo',
    code: 'MTTC-06D',
    title: 'Bộ 3 Bức Khung Tròn Bán Nguyệt "Bạch Ngọc Lan, Đôi Chim Sẻ & Núi Non Mờ Sương"',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500742756_122100651614890917_6342530107713701372_n_1104912c.jpg',
    aspect: 'landscape',
    priceEstimate: '320.000 đ / m²',
    standardSize: 'Bộ 3 tấm đối xứng (Rộng 1,8m – 3,0m x Cao 1,5m – 2,2m)',
    material: 'Nan tăm tre kem ngà tự nhiên dệt chỉ mịn',
    meaning: 'Hoa Bạch Ngọc Lan biểu trưng cho phẩm hạnh cao quý, tinh khôi; đôi chim sẻ mang sinh khí vui tươi cho tổ ấm.',
    suitableRooms: ['Phòng khách hiện đại', 'Phòng đọc sách', 'Cửa sổ phòng ăn'],
    specs: [
      'Hai nửa ô cửa tròn chạm song gỗ cổ điển ở hai biên tạo khung cảnh chiều sâu',
      'Cành hoa Bạch Ngọc Lan trắng tinh khôi vươn dài trên nền núi non mờ sương',
      'Tông màu kem ngà nhã nhặn cực kỳ hợp với nội thất gỗ sồi và tường trắng',
      'Đầy đủ phụ kiện bát treo tường / treo trần lắp đặt chỉ trong 10 phút'
    ],
    featured: true
  },
  {
    id: 'mttc06-05-the-ngoai-dao-nguyen-zen',
    code: 'MTTC-06E',
    title: 'Bộ Đôi "Thế Ngoại Đào Nguyên" – Đôi Nhành Đào Xuân Phong Cách Tối Giản (Zen)',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500741571_122100652178890917_6050608616275871117_n_1679b80f.jpg',
    aspect: 'square',
    priceEstimate: '280.000 đ / m²',
    standardSize: 'Bộ đôi 2 tấm (Mỗi tấm rộng 0,8m – 1,2m x Cao 1,4m – 2,0m)',
    material: 'Nan tăm tre vàng mộc tự nhiên dệt chỉ dù',
    meaning: 'Mỹ học Thiền (Zen) đề cao khoảng thở tĩnh lặng, giúp gia chủ buông bỏ mệt mỏi mỗi khi ngồi bên bàn trà.',
    suitableRooms: ['Bàn trà bệt Tatami', 'Góc thiền tại gia', 'Spa & Trà quán'],
    specs: [
      'Giữ trọn 80% diện tích nền nan tăm tre vàng mộc tự nhiên làm khoảng trắng nghệ thuật',
      'Điểm xuyết hai nhành đào đỏ thắm vươn nhẹ từ hai cạnh mành vào trung tâm',
      'Phù hợp hoàn hảo với nội thất gỗ mộc, phong cách Nhật Bản (Wabi-Sabi / Zen)',
      'Cơ cấu con lăn khóa dây đồng thau bền bỉ'
    ],
    featured: true
  },
  {
    id: 'mttc06-06-thanh-truc-quan-tu-thu-phap',
    code: 'MTTC-06F',
    title: 'Mành Tăm Tre "Thanh Trúc Quân Tử (竹)" – Ba Thân Trúc Xanh & Thơ Thư Pháp',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/500761507_122100650810890917_2106910062024523522_n_4df92d19.jpg',
    aspect: 'portrait',
    priceEstimate: '260.000 đ / m²',
    standardSize: 'Mành đơn 1 tấm hoặc ghép nhiều tấm theo ô cửa sổ',
    material: 'Nan tăm tre tự nhiên in tranh Trúc Xanh & Thư pháp sắc nét',
    meaning: 'Trúc là biểu tượng của bậc chính nhân quân tử: Ruột rỗng tâm ngay, đốt thẳng kiên cường, bốn mùa xanh tốt bình an.',
    suitableRooms: ['Thư phòng', 'Phòng làm việc', 'Cửa sổ hành lang', 'Phòng trà'],
    specs: [
      'Ba thân trúc xanh vươn thẳng mạnh mẽ từng đốt rõ ràng bên khóm lá trúc non',
      'Nổi bật đại tự "Trúc" (竹) cùng hai câu thơ thư pháp và ấn triện đỏ trang trọng',
      'Mang lại cảm giác thanh mát, hạ nhiệt độ phòng từ 3–5 độ C trong mùa hè',
      'Giá tại xưởng Ngọc Tuyến – Tuyến Hoa chỉ 260.000đ/m² trọn gói phụ kiện'
    ],
    featured: true
  },

  // --- NHÓM 1: CÔNG TRÌNH THỰC TẾ & XƯỞNG SẢN XUẤT ---
  {
    id: 'bamboo-motor-auto',
    code: 'DC-TD01',
    title: 'Động Cơ Rèm Cuốn Tự Động Thông Minh Phòng Ngủ',
    category: 'cong-trinh',
    categoryLabel: 'Công Trình Thực Tế',
    image: '/assets/aistudio/IMG_5053_4a4c9d67.JPG',
    aspect: 'portrait',
    priceEstimate: 'Từ 1.850.000 đ / bộ động cơ',
    standardSize: 'Tùy chỉnh theo ô cửa sổ',
    material: 'Máng nhôm hợp kim sơn tĩnh điện + Động cơ siêu tĩnh âm',
    meaning: 'Hiện đại hóa không gian sống, điều khiển rèm từ xa qua remote và điện thoại.',
    suitableRooms: ['Phòng ngủ gia đình', 'Biệt thự thông minh', 'Cửa sổ phòng khách'],
    specs: [
      'Động cơ tubular vận hành êm ái dưới 30dB',
      'Tích hợp điều khiển từ xa và kết nối smartphone',
      'Hộp máng nhôm sơn tĩnh điện chống bụi bẩn',
      'Lắp đặt gọn gàng, bảo hành chính hãng 3 năm'
    ],
    featured: true
  },
  {
    id: 'bamboo-plastic-green-detail',
    code: 'RN-01',
    title: 'Cận Cảnh Mành Nhựa Xanh Che Nắng Mưa Ban Công',
    category: 'xuong-san-xuat',
    categoryLabel: 'Xưởng & Chi Tiết Nan',
    image: '/assets/aistudio/IMG_5054_57166ef1.JPG',
    aspect: 'portrait',
    priceEstimate: '180.000 đ - 250.000 đ / m²',
    standardSize: 'Khổ rộng 1.5m, 2m, 2.5m x cao 2m-3m',
    material: 'Nan nhựa tổng hợp dẻo dai chống tia cực tím UV',
    meaning: 'Chắn nắng cản mưa bền bỉ ngoài trời, giữ nhiệt độ ban công mát mẻ quanh năm.',
    suitableRooms: ['Ban công chung cư', 'Hiên nhà mái tôn', 'Quán cà phê ngoài trời'],
    specs: [
      'Chất liệu nhựa PVC dẻo dai không giòn vỡ',
      'Đan chỉ cước dù đa điểm chịu gió lớn',
      'Chống phai màu dưới ánh nắng gay gắt',
      'Dễ dàng vệ sinh xịt nước sạch bụi'
    ]
  },
  {
    id: 'bamboo-workshop-smoked',
    code: 'XUONG-01',
    title: 'Mành Tre Trúc Hun Khói Cuộn Sẵn Tại Xưởng Tuyến Hoa',
    category: 'xuong-san-xuat',
    categoryLabel: 'Xưởng & Chi Tiết Nan',
    image: '/assets/aistudio/IMG_5055_1f6ba0de.JPG',
    aspect: 'portrait',
    priceEstimate: '220.000 đ - 320.000 đ / m²',
    standardSize: 'Khổ ngang 1.5m - 3.0m x cao 2.0m - 3.5m',
    material: 'Tre trúc tự nhiên hun khói truyền thống',
    meaning: 'Hun khói tự nhiên chống mối mọt vĩnh viễn, màu nâu cánh gián sang trọng.',
    suitableRooms: ['Xưởng sản xuất Ứng Hòa', 'Nhà gỗ cổ truyền', 'Nhà thờ họ'],
    specs: [
      'Tre già trên 3 năm tuổi qua sấy khô kiệt nước',
      'Xử lý hun khói thảo mộc không hóa chất độc hại',
      'Sẵn hàng số lượng lớn phục vụ công trình',
      'Giao hàng và lắp đặt tận nơi toàn miền Bắc'
    ],
    featured: true
  },
  {
    id: 'bamboo-workshop-pulley-rolls',
    code: 'XUONG-02',
    title: 'Mành Tăm Tre Kèm Dây Kéo Ròng Rọc Sẵn Sàng Lắp Đặt',
    category: 'xuong-san-xuat',
    categoryLabel: 'Xưởng & Chi Tiết Nan',
    image: '/assets/aistudio/IMG_5056_6bd86dd6.JPG',
    aspect: 'portrait',
    priceEstimate: '250.000 đ - 350.000 đ / m²',
    standardSize: 'Sản xuất theo kích thước ô cửa khách yêu cầu',
    material: 'Tăm tre tự nhiên + Dây dù bện + Ròng rọc inox',
    meaning: 'Thiết kế cơ học chuẩn xác, kéo cuộn êm nhẹ không bị kẹt hay xô lệch.',
    suitableRooms: ['Cửa chính nhà cổ', 'Cửa sổ biệt thự', 'Chòi nghỉ sân vườn'],
    specs: [
      'Trang bị sẵn ròng rọc inox chống rỉ sét',
      'Dây kéo dù lõi thép chịu lực kéo bền bỉ',
      'Cuộn tròn đều tăm tắp, dễ dàng vận hành',
      'Bảo hành cơ cấu kéo 2 năm miễn phí'
    ]
  },
  {
    id: 'bamboo-slat-closeup-yellow',
    code: 'NAN-01',
    title: 'Chi Tiết Nan Mành Tăm Tre Vàng Óng Tự Nhiên Dệt Chỉ Cước',
    category: 'xuong-san-xuat',
    categoryLabel: 'Xưởng & Chi Tiết Nan',
    image: '/assets/aistudio/IMG_5057_fab87445.JPG',
    aspect: 'portrait',
    priceEstimate: '260.000 đ / m²',
    standardSize: 'Cuộn theo mét tới hoặc mét vuông',
    material: 'Cật tre già tự nhiên chuốt tròn đều',
    meaning: 'Vẻ đẹp mộc mạc tinh khôi, lưu thông không khí trong lành tự nhiên.',
    suitableRooms: ['Phòng khách mộc', 'Nhà sàn', 'Khu nghỉ dưỡng sinh thái'],
    specs: [
      'Nan vót nhẵn bóng, không dằm xước tay',
      'Khoảng cách kẽ nan thông gió đối lưu tối ưu',
      'Dệt bằng chỉ cước nilon siêu dai đa sợi',
      'Giữ trọn hương thơm thanh mát của tre trúc'
    ]
  },
  {
    id: 'bamboo-porch-antique-lim-house',
    code: 'CT-01',
    title: 'Công Trình Lắp Mành Tre Hiên Nhà Cổ Gỗ Lim 5 Gian',
    category: 'cong-trinh',
    categoryLabel: 'Công Trình Thực Tế',
    image: '/assets/aistudio/IMG_5058_5cb633e1.JPG',
    aspect: 'portrait',
    priceEstimate: '320.000 đ / m² hoàn thiện',
    standardSize: 'Dãy 5 gian hiên rộng 14m x cao 2.8m',
    material: 'Tre trúc cật già sơn màu cánh gián trầm bóng',
    meaning: 'Che chắn nắng gắt hướng Tây bảo vệ hệ cột gỗ lim ngàn năm không nứt nẻ.',
    suitableRooms: ['Hiên nhà gỗ cổ truyền', 'Từ đường dòng họ', 'Đình chùa di tích'],
    specs: [
      'Cản 100% nắng chiếu thẳng vào lòng nhà',
      'Màu sắc đồng bộ với gỗ lim và ngói cổ',
      'Hệ thống ròng rọc kép nhẹ tênh cho người lớn tuổi',
      'Chống mưa hắt tạt làm mục sàn gỗ và tường vôi'
    ],
    featured: true
  },
  {
    id: 'bamboo-pu-coated-drying',
    code: 'XUONG-03',
    title: 'Lô Mành Tre Sơn Phủ Bóng PU Chống Mốc Tại Sân Xưởng',
    category: 'xuong-san-xuat',
    categoryLabel: 'Xưởng & Chi Tiết Nan',
    image: '/assets/aistudio/IMG_5059_d1ba2d02.JPG',
    aspect: 'portrait',
    priceEstimate: '280.000 đ / m²',
    standardSize: 'Đa dạng kích thước tại xưởng',
    material: 'Tre trúc tuyển chọn phủ 2 lớp sơn bóng PU',
    meaning: 'Bảo vệ nan tre khỏi ẩm mốc nấm mốc mùa nồm ẩm miền Bắc.',
    suitableRooms: ['Khu vực ẩm ướt', 'Nhà ven sông', 'Công trình ngoài trời'],
    specs: [
      'Phủ sơn bóng ngoại thất chống thấm nước mưa',
      'Không mùi hóa chất độc hại sau khi phơi khô',
      'Nan tre giữ được độ đàn hồi dẻo dai',
      'Bền màu trên 8 năm ngoài trời'
    ]
  },
  {
    id: 'bamboo-balcony-condo-grey',
    code: 'CT-02',
    title: 'Mành Nhựa Xám Che Nắng Ban Công Chung Cư Cao Tầng',
    category: 'cong-trinh',
    categoryLabel: 'Công Trình Thực Tế',
    image: '/assets/aistudio/IMG_5060_ca5752a4.JPG',
    aspect: 'portrait',
    priceEstimate: '220.000 đ / m²',
    standardSize: 'Rộng 3.2m x cao 2.5m ban công căn hộ',
    material: 'Nhựa xám ghi hiện đại cản nhiệt cao cấp',
    meaning: 'Cản nắng hướng Tây gay gắt, bảo vệ cây cảnh và máy giặt ngoài ban công.',
    suitableRooms: ['Ban công chung cư', 'Cửa sổ nhà phố cao tầng', 'Logia phơi đồ'],
    specs: [
      'Thiết kế dây cáp căng chống gió giật tầng cao',
      'Màu ghi xám hiện đại hợp quy hoạch đô thị',
      'Cản nắng 95%, thông thoáng gió mát tự nhiên',
      'Thao tác cuốn gọn lên sát trần khi không dùng'
    ]
  },
  {
    id: 'bamboo-plastic-large-hall-green',
    code: 'CT-03',
    title: 'Tấm Mành Nhựa Xanh Khổ Lớn Che Chắn Hội Trường & Chùa',
    category: 'cong-trinh',
    categoryLabel: 'Công Trình Thực Tế',
    image: '/assets/aistudio/IMG_5061_c8b88fac.JPG',
    aspect: 'portrait',
    priceEstimate: '190.000 đ / m²',
    standardSize: 'Khổ siêu lớn rộng 6m x cao 3.8m',
    material: 'Nhựa đan cước dày dặn dẻo dai',
    meaning: 'Tạo không gian sinh hoạt râm mát cho hàng trăm Phật tử và khách thập phương.',
    suitableRooms: ['Hành lang đền chùa', 'Nhà ăn tập thể', 'Hội trường sự kiện'],
    specs: [
      'Khổ nan đan liên tục liền tấm siêu lớn',
      'Hạ nhiệt độ không gian từ 4 - 6 độ C tức thì',
      'Chống chịu mưa bão và nắng cháy',
      'Tiết kiệm tối đa chi phí che chắn công trình lớn'
    ]
  },
  {
    id: 'bamboo-handpainted-nhan-phucloctho',
    code: 'TR-01',
    title: 'Bộ Đôi Mành Tre Vẽ Tranh Chữ "Nhẫn" & "Phúc Lộc Thọ"',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5062_cd0a51ff.JPG',
    aspect: 'landscape',
    priceEstimate: '1.300.000 đ / bộ (1.2m x 2m)',
    standardSize: '1.2m x 2.0m hoặc 1.5m x 2.0m',
    material: 'Mành tăm tre tự nhiên vẽ sơn dầu nghệ thuật',
    meaning: 'Chữ "Nhẫn" cành mai vàng rực rỡ và "Phúc Lộc Thọ" hoa sen hạc tiên đem lại an lạc.',
    suitableRooms: ['Phòng khách gia đình', 'Gian tiếp khách từ đường', 'Thư phòng'],
    specs: [
      'Vẽ tay thủ công tỉ mỉ từng chi tiết hoa mai và cánh sen',
      'Chất liệu sơn dầu acrylic không phai không bong tróc',
      'Ý nghĩa chữ Nhẫn nhắc nhở sự điềm tĩnh độ lượng',
      'Kèm phụ kiện thanh treo và ròng rọc đồng bộ'
    ],
    featured: true
  },
  {
    id: 'bamboo-hexagonal-gazebo-lotus',
    code: 'CT-04',
    title: 'Mành Tre Vẽ Đầm Sen Hạc Lắp Chòi Nghỉ Lục Giác Sân Vườn',
    category: 'cong-trinh',
    categoryLabel: 'Công Trình Thực Tế',
    image: '/assets/aistudio/IMG_5063_cdc2f3cd.JPG',
    aspect: 'square',
    priceEstimate: '1.400.000 đ / bộ cánh chòi',
    standardSize: 'Trọn bộ 6 cánh theo 6 vách chòi lục giác',
    material: 'Tăm tre cật vẽ tranh sơn dầu phong cảnh đầm sen hạc',
    meaning: 'Biến chòi uống trà sân vườn thành chốn bồng lai tiên cảnh tao nhã.',
    suitableRooms: ['Chòi nghỉ lục giác sân vườn', 'Khu nghỉ dưỡng sinh thái', 'Quán trà đạo'],
    specs: [
      'Uốn lượn ôm khít 6 cạnh của chòi lục giác mái ngói',
      'Che mưa gió bảo vệ bàn trà gỗ gụ bên trong',
      'Bức tranh đầm sen hạc nối liền 360 độ sống động',
      'Gia chủ cực kỳ ưng ý và tự hào tiếp khách quý'
    ],
    featured: true
  },
  {
    id: 'bamboo-ancestral-nguyen-gia-trang',
    code: 'CT-05',
    title: 'Công Trình Từ Đường "Nguyễn Gia Trang" - Bộ Tam Mành Tre',
    category: 'cong-trinh',
    categoryLabel: 'Công Trình Thực Tế',
    image: '/assets/aistudio/IMG_5064_22d927b3.JPG',
    aspect: 'landscape',
    priceEstimate: '1.350.000 đ / bộ x 3 bộ đồng bộ',
    standardSize: 'Bộ 3 gian: Mỗi tấm 1.4m x 2.4m',
    material: 'Tăm tre hun khói vẽ đại tự chữ Phúc viền hoa văn cổ, Tùng Bách & Trúc Quân Tử',
    meaning: 'Vinh hiển tổ tông, rước phúc lộc vạn đại cho con cháu dòng họ Nguyễn Gia Trang.',
    suitableRooms: ['Từ đường dòng họ', 'Nhà thờ tổ tiên', 'Đền chùa miếu mạo'],
    specs: [
      'Tấm chính giữa vẽ chữ PHÚC thư pháp dát vàng uy nghi',
      'Hai bên là Tùng Hạc trường thọ và Trúc đón gió lành',
      'Kích thước chuẩn cung Đỏ Thước Lỗ Ban 38.8cm',
      'Tuyến Hoa đo đạc, thiết kế và thi công trực tiếp'
    ],
    featured: true
  },
  {
    id: 'bamboo-memorial-to-quoc-ghi-cong',
    code: 'CT-06',
    title: 'Công Trình Nhà Tưởng Niệm Liệt Sĩ "Tổ Quốc Ghi Công"',
    category: 'tranh-tho-phat',
    categoryLabel: 'Tranh Thờ & Phật Giáo',
    image: '/assets/aistudio/IMG_5066_874ef5f2.JPG',
    aspect: 'landscape',
    priceEstimate: '1.450.000 đ / bộ',
    standardSize: 'Khổ lớn gian chính giữa 1.8m x 2.6m',
    material: 'Tăm tre cật tự nhiên vẽ chữ THỌ tròn và đầm sen vàng ngũ sắc',
    meaning: 'Tri ân các anh hùng liệt sĩ, biểu tượng sự trường tồn đời đời của dân tộc.',
    suitableRooms: ['Đài tưởng niệm liệt sĩ', 'Đền chùa tâm linh', 'Nhà thờ họ lớn'],
    specs: [
      'Họa tiết chữ THỌ tròn hoàng kim trang nghiêm',
      'Đầm sen hồng ngát hương và đàn cá chép bơi lội',
      'Được chính quyền và bà con nhân dân đánh giá cao',
      'Chống chịu nắng mưa vượt trội ngoài sảnh đình'
    ],
    featured: true
  },
  {
    id: 'bamboo-village-temple-phuc-cranes',
    code: 'CT-07',
    title: 'Mành Tre Cánh Gián Vẽ Chữ "Phúc" Uy Nghi Đình Cổ',
    category: 'cong-trinh',
    categoryLabel: 'Công Trình Thực Tế',
    image: '/assets/aistudio/IMG_5068_fb7355e6.JPG',
    aspect: 'landscape',
    priceEstimate: '1.380.000 đ / bộ',
    standardSize: 'Hệ 3 bức rèm tiền tế rộng 5m x cao 2.5m',
    material: 'Mành tre cật hun khói sơn màu cánh gián đậm vẽ chữ Phúc thư pháp lớn',
    meaning: 'Phúc đức tổ tiên như biển lớn, rước may mắn tài lộc cho cả làng.',
    suitableRooms: ['Đình làng truyền thống', 'Nhà thờ đại tộc', 'Biệt phủ phong thủy'],
    specs: [
      'Sơn màu nâu cánh gián cổ kính ăn khớp kiến trúc đình cổ',
      'Hạc trắng bay về đậu trên mỏm đá bên cây tùng già',
      'Ròng rọc dây dù kéo nhẹ nhàng chỉ bằng một tay',
      'Đã hoàn thiện đúng dịp hội làng đầu xuân'
    ],
    featured: true
  },
  {
    id: 'bamboo-art-pine-cranes-old-tree',
    code: 'TR-02',
    title: 'Kiệt Tác Mành Tre Vẽ Tay "Tùng Hạc Diên Niên" Cổ Thụ',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5080_fc1f5903.JPG',
    aspect: 'portrait',
    priceEstimate: '1.300.000 đ / bộ (1.2m x 2.0m)',
    standardSize: '1.2m x 2.0m hoặc 1.0m x 2.0m (990.000 đ)',
    material: 'Mành tăm tre dệt cước vẽ sơn dầu chịu nhiệt',
    meaning: 'Biểu tượng của chí khí người quân tử, trường thọ vô biên và gia đình êm ấm.',
    suitableRooms: ['Phòng khách gia đình', 'Thư phòng', 'Lối đi thông tầng'],
    specs: [
      'Thế Tùng cổ thụ bám vách đá nghênh phong vươn lên',
      'Đôi chim Hạc trắng mỏ đỏ lông tuyết tuyệt mỹ',
      'Màu lá tùng xanh ngọc bích phối vách đá tự nhiên',
      'Tặng kèm móc treo và dây kéo hoàn chỉnh'
    ],
    featured: true
  },

  // --- NHÓM 2: BỘ SƯU TẬP TRANH MÀNH TĂM TRE TMHC (TRANH THỜ & PHẬT GIÁO) ---
  {
    id: 'tmhc-155-pine-crane-waterfall',
    code: 'TMHC 155',
    title: 'Mành Tre Bàn Thờ TMHC 155 - Tùng Hạc Thác Nước Gia Tiên',
    category: 'tranh-tho-phat',
    categoryLabel: 'Tranh Thờ & Phật Giáo',
    image: '/assets/aistudio/IMG_5086_b17e364e.JPG',
    aspect: 'portrait',
    priceEstimate: '950.000 đ - 1.300.000 đ / bộ',
    standardSize: '80cm x 150cm, 100cm x 180cm, 120cm x 200cm',
    material: 'Tăm tre tự nhiên dệt tơ bóng vẽ cảnh Tùng Hạc bồng lai',
    meaning: 'Che chắn trang trọng trước ban thờ gia tiên, tụ khí sinh tài, con cháu trường thọ hiếu thuận.',
    suitableRooms: ['Bàn thờ gia tiên', 'Phòng thờ chung cư', 'Không gian tâm linh'],
    specs: [
      'Cây tùng thế vươn che chở cho đàn hạc tiên bên dòng thác bạc',
      'Giúp không gian thờ cúng ấm cúng, tránh gió tản hương',
      'Kích thước lọt lòng hoặc phủ bì theo Thước Lỗ Ban 38.8cm',
      'Cơ chế cuốn rèm mượt mà khi thắp nhang lễ Phật'
    ],
    featured: true
  },
  {
    id: 'tmhc-159-pink-lotus-trio',
    code: 'TMHC 159',
    title: 'Mành Tre TMHC 159 - Hoa Sen Hồng Tam Thế Thanh Khiết',
    category: 'tranh-tho-phat',
    categoryLabel: 'Tranh Thờ & Phật Giáo',
    image: '/assets/aistudio/IMG_5119_d12e4b6c.JPG',
    aspect: 'portrait',
    priceEstimate: '890.000 đ - 1.250.000 đ / bộ',
    standardSize: '100cm x 180cm, 120cm x 200cm',
    material: 'Tăm tre tự nhiên vẽ 3 đóa sen hồng ngọc',
    meaning: 'Tam hoa tụ đỉnh - tâm hồn thanh khiết không vướng bụi trần, gia đạo an yên.',
    suitableRooms: ['Phòng thờ Phật', 'Bàn trà phòng ăn', 'Cửa sổ phòng ngủ'],
    specs: [
      'Ba đóa sen nở rực rỡ tượng trưng quá khứ - hiện tại - tương lai bình an',
      'Nền màu hổ phách vàng ấm cúng lan tỏa năng lượng tích cực',
      'Bảo vệ gian thờ khỏi ánh nhìn trực diện từ cửa ra vào',
      'Chất liệu tre trúc tự nhiên thân thiện phong thủy'
    ],
    featured: true
  },
  {
    id: 'tmhc-158-altar-lotus-koi',
    code: 'TMHC 158',
    title: 'Mành Tre Phòng Thờ TMHC 158 - Sen Hồng Song Ngư Kim Cát',
    category: 'tranh-tho-phat',
    categoryLabel: 'Tranh Thờ & Phật Giáo',
    image: '/assets/aistudio/IMG_5128_bc606a31.JPG',
    aspect: 'portrait',
    priceEstimate: '920.000 đ - 1.280.000 đ / bộ',
    standardSize: '90cm x 160cm, 110cm x 190cm',
    material: 'Tăm tre thanh mảnh dệt chỉ vàng vẽ hoa sen ngọc và đàn cá chép',
    meaning: 'Niên niên hữu dư (năm nào cũng dư dả), hoa sen thanh tịnh che chắn bàn thờ.',
    suitableRooms: ['Bàn thờ đứng gia tiên', 'Bàn thờ treo tường', 'Tủ thờ gỗ gụ'],
    specs: [
      'Đôi cá chép vàng óng bơi lội dưới đóa sen hồng viên mãn',
      'Giữ không gian thờ cúng linh thiêng, riêng biệt',
      'Hệ dây kéo cuộn lên gọn gàng sát nóc tủ thờ',
      'Chống bám bụi nhang khói cực tốt, dễ lau chùi'
    ],
    featured: true
  },
  {
    id: 'tmhc-055-bodhisattva-guanyin',
    code: 'TMHC 055',
    title: 'Mành Tre Phật Giáo TMHC 055 - Phật Bà Quan Thế Âm Bồ Tát',
    category: 'tranh-tho-phat',
    categoryLabel: 'Tranh Thờ & Phật Giáo',
    image: '/assets/aistudio/IMG_5141_a5813859.JPG',
    aspect: 'portrait',
    priceEstimate: '1.200.000 đ - 1.650.000 đ / bộ',
    standardSize: '1.0m x 2.0m, 1.2m x 2.2m, 1.4m x 2.4m',
    material: 'Tăm tre cao cấp vẽ hình tượng Đức Quan Âm Bồ Tát ngự tòa sen',
    meaning: 'Cầu bình an, từ bi hỷ xả, hóa giải hung tai, mang phúc lành vô lượng cho gia môn.',
    suitableRooms: ['Phòng thờ Phật gia đình', 'Bàn thờ Phật Bà', 'Thiền thất'],
    specs: [
      'Hình tướng Phật Bà Quan Âm từ bi, trang nghiêm tuyệt đối',
      'Tay cầm nhành dương liễu và bình cam lộ phổ độ chúng sinh',
      'Tòa sen trắng thanh tịnh giữa làn mây ngũ sắc thiêng liêng',
      'Được các Phật tử và sư thầy lựa chọn nhiều nhất'
    ],
    featured: true
  },
  {
    id: 'tmhc-057-shakyamuni-buddha-gold',
    code: 'TMHC 057',
    title: 'Mành Tre Phật Giáo TMHC 057 - Đức Phật Thích Ca Kim Sắc',
    category: 'tranh-tho-phat',
    categoryLabel: 'Tranh Thờ & Phật Giáo',
    image: '/assets/aistudio/IMG_5143_bea74cf3.JPG',
    aspect: 'portrait',
    priceEstimate: '1.250.000 đ - 1.700.000 đ / bộ',
    standardSize: '1.0m x 2.0m, 1.2m x 2.2m',
    material: 'Mành tăm tre vẽ Đức Bổn Sư Thích Ca Mâu Ni hào quang hoàng kim',
    meaning: 'Ánh sáng trí tuệ soi rọi mười phương, tâm an vạn sự an, khai mở phúc đức.',
    suitableRooms: ['Phòng thờ Phật Thích Ca', 'Chánh điện tại gia', 'Không gian tụng kinh'],
    specs: [
      'Đức Phật chắp tay tọa thiền tĩnh tại giữa vòng hào quang kim sắc',
      'Màu sắc mạ vàng lấp lánh phản chiếu ánh đèn thờ cúng',
      'Tạo bầu không khí trang nghiêm thanh tịnh nhất',
      'Chất liệu nan tre sấy khô thanh tịnh không nhiễm bụi bẩn'
    ],
    featured: true
  },

  // --- NHÓM 3: BỘ SƯU TẬP TRANH PHONG THỦY & TÀI LỘC ---
  {
    id: 'tmhc-080-hong-van-duong-dau',
    code: 'TMHC 080',
    title: 'Mành Tre Phong Thủy TMHC 080 - "Hồng Vận Đương Đầu" Vận Đỏ Ngập Tràn',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5144_8ffe7909.JPG',
    aspect: 'square',
    priceEstimate: '1.150.000 đ - 1.450.000 đ / bộ',
    standardSize: '1.4m x 1.4m, 1.6m x 1.6m, 1.8m x 1.8m',
    material: 'Tăm tre vẽ phong cảnh núi đỏ, thác bạc và ánh thái dương đỏ rực',
    meaning: 'Hồng Vận Đương Đầu: Vận may đỏ rực dẫn đầu, công việc thăng tiến hanh thông, đón tài lộc bất tận.',
    suitableRooms: ['Phòng khách gia đình', 'Văn phòng giám đốc', 'Cửa hàng kinh doanh'],
    specs: [
      'Rừng cây lá đỏ rực mùa thu đón ánh nắng mặt trời buổi sớm',
      'Thác nước cuồn cuộn biểu trưng dòng tiền tài liên tục chảy vào nhà',
      'Con thuyền đỏ xuôi dòng đón trọn lộc biếc',
      'Màu sắc tươi tắn kích hoạt sinh khí cho ngôi nhà'
    ],
    featured: true
  },
  {
    id: 'tmhc-087-nghenh-khach-tung',
    code: 'TMHC 087',
    title: 'Mành Tre TMHC 087 - "Nghênh Khách Tùng" Cổ Thụ Đón Khách',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5134_ddd92c8e.JPG',
    aspect: 'square',
    priceEstimate: '1.100.000 đ - 1.400.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre tự nhiên vẽ thế cây Tùng đón khách và bài thơ tao nhã',
    meaning: 'Nghênh tiếp quý nhân, bạn bè bốn phương tề tựu, gia chủ hiếu khách phát tài.',
    suitableRooms: ['Phòng khách chính', 'Sảnh tiếp tân công ty', 'Biệt thự sân vườn'],
    specs: [
      'Cây tùng đại thụ vươn cành như vòng tay rộng mở chào đón khách',
      'Vầng thái dương đỏ rực soi sáng đỉnh non bồng bềnh',
      'Bài thơ thư pháp ý nghĩa về tình bằng hữu chân thành',
      'Lọc ánh sáng dịu nhẹ tạo sự ấm cúng cho gian phòng'
    ],
    featured: true
  },
  {
    id: 'tmhc-090-huc-nhat-dong-thang-deer',
    code: 'TMHC 090',
    title: 'Mành Tre TMHC 090 - "Húc Nhật Đông Thăng" & Đôi Hươu Vàng',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5138_a567b2b6.JPG',
    aspect: 'square',
    priceEstimate: '1.200.000 đ - 1.500.000 đ / bộ',
    standardSize: '1.5m x 1.5m, 1.8m x 1.8m',
    material: 'Tăm tre dệt cước vẽ tranh Húc Nhật Đông Thăng hùng vĩ',
    meaning: 'Mặt trời mọc hướng Đông mang sinh khí mới, hươu vàng (Lộc) đem lại bổng lộc dồi dào.',
    suitableRooms: ['Phòng khách hướng Đông', 'Phòng làm việc', 'Nhà ống hiện đại'],
    specs: [
      'Hệ thống thác nước đôi hùng tráng cuộn trào bọt trắng',
      'Đôi hươu vàng thảnh thơi gặm cỏ bên suối hoa đào',
      'Kích hoạt vận may thăng tiến công danh sự nghiệp',
      'Tặng kèm thanh suốt gỗ tự nhiên và dây kéo cao cấp'
    ]
  },
  {
    id: 'tmhc-030-van-su-nhu-y-lotus',
    code: 'TMHC 030',
    title: 'Mành Tre TMHC 030 - Chữ "VẠN SỰ NHƯ Ý" & Sen Hồng Uyên Ương',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5121_96863f8d.JPG',
    aspect: 'portrait',
    priceEstimate: '980.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.2m x 2.0m hoặc 1.4m x 2.0m',
    material: 'Tăm tre tăm tròn vẽ đầm sen nước ngọc và chữ Vạn Sự Như Ý',
    meaning: 'Mọi ước vọng đều thành hiện thực, vợ chồng son sắt hòa thuận, con cái thành đạt.',
    suitableRooms: ['Cửa thông phòng ngủ', 'Phòng khách chung cư', 'Cửa sổ ban công'],
    specs: [
      'Nét chữ thư pháp "Vạn Sự Như Ý" bay bổng uyển chuyển',
      'Đôi chim uyên ương bơi lội giữa đầm sen xanh biếc',
      'Hạt nước đọng trên lá sen vẽ chân thực từng chi tiết',
      'Rất thích hợp làm quà tặng tân gia, mừng cưới'
    ]
  },
  {
    id: 'tmhc-002-truc-quan-tu-lotus-fish',
    code: 'TMHC 002',
    title: 'Mành Tre Thông Phòng TMHC 002 - Chữ "TRÚC" & Đầm Sen Cá Chép',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5118_eebc2ba1.JPG',
    aspect: 'portrait',
    priceEstimate: '920.000 đ - 1.250.000 đ / bộ',
    standardSize: '80cm x 200cm, 90cm x 200cm, 100cm x 200cm',
    material: 'Tăm tre tự nhiên dệt tơ bóng vẽ bụi trúc xanh và hoa sen cá chép',
    meaning: 'Che chắn hướng cửa đối xung phong thủy, mang lại khí tiết thanh cao và tiền tài dư dả.',
    suitableRooms: ['Cửa thông phòng ngủ', 'Cửa buồng', 'Lối đi hành lang'],
    specs: [
      'Chữ TRÚC đại tự thư pháp nổi bật trên nền xanh mát',
      'Hóa giải thế cửa phòng ngủ đối diện cửa bếp / nhà vệ sinh',
      'Đàn cá chép ngũ sắc tụ hội dưới bóng sen hồng',
      'Kéo lên hạ xuống linh hoạt không cản trở việc đi lại'
    ]
  },
  {
    id: 'tmhc-079-nghenh-khach-ink-wash',
    code: 'TMHC 079',
    title: 'Mành Tre TMHC 079 - Tùng Đón Khách Mực Tàu Thủy Mặc Cổ Điển',
    category: 'tranh-phong-thuy',
    categoryLabel: 'Tranh Phong Thủy & Tài Lộc',
    image: '/assets/aistudio/IMG_5140_29f57d7c.JPG',
    aspect: 'square',
    priceEstimate: '1.050.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.4m x 1.4m, 1.6m x 1.6m',
    material: 'Tăm tre vẽ mực nho thủy mặc đơn sắc truyền thống',
    meaning: 'Khí chất nho nhã, điềm tĩnh, trường tồn cùng thời gian.',
    suitableRooms: ['Phòng khách tân cổ điển', 'Thư viện sách', 'Trà quán'],
    specs: [
      'Họa theo phong cách tranh thủy mặc mực nho bác học',
      'Tán tùng vươn dài che mát cánh buồm xuôi sóng',
      'Màu sắc mộc mạc không sợ lỗi mốt theo thời gian',
      'Tạo điểm nhấn văn hóa sâu sắc cho ngôi nhà'
    ]
  },

  // --- NHÓM 4: BỘ SƯU TẬP TRÀ THẤT & SƠN THỦY CỔ PHONG ---
  {
    id: 'tmhc-129-son-thai-nhu-on',
    code: 'TMHC 129',
    title: 'Mành Tre TMHC 129 - "Sơn Thái Như Ổn" Núi Vàng Hùng Vĩ',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5087_5fe970c8.JPG',
    aspect: 'portrait',
    priceEstimate: '1.100.000 đ - 1.450.000 đ / bộ',
    standardSize: '1.4m x 1.8m hoặc 1.6m x 2.0m',
    material: 'Mành tre tăm cuốn vẽ dãy núi Thái Sơn kỳ vĩ và rừng phong đỏ',
    meaning: 'Sơn Thái Như Ổn: Vững vàng như núi Thái Sơn, gia đạo bền vững, chỗ dựa kiên cố.',
    suitableRooms: ['Cửa sổ phòng trà', 'Bàn trà bệt tatami', 'Phòng làm việc'],
    specs: [
      'Cảnh sắc tráng lệ với ngàn đỉnh núi nhấp nhô mây khói',
      'Đại tự "Sơn Thái Như Ổn" thư pháp uy nghi',
      'Hệ rèm cuốn 2 mảnh kết hợp hài hòa cửa sổ rộng',
      'Cản ánh nắng gắt nhưng vẫn giữ được độ sáng tự nhiên dịu nhẹ'
    ],
    featured: true
  },
  {
    id: 'tmhc-102-son-thuy-huu-tinh-tea',
    code: 'TMHC 102',
    title: 'Mành Tre Treo Tường TMHC 102 - Sơn Thủy Hữu Tình & Thuyền Hoa',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5088_281978d2.JPG',
    aspect: 'square',
    priceEstimate: '1.050.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre mộc vẽ cảnh sông nước làng quê rực rỡ nắng mai',
    meaning: 'Cảnh sắc êm đềm, xua tan mọi âu lo phiền muộn, đưa tâm hồn về miền an lạc.',
    suitableRooms: ['Phòng uống trà', 'Góc thiền tại gia', 'Phòng khách chung cư'],
    specs: [
      'Mặt trời đỏ mọc trên đỉnh non thiêng mây trắng bao phủ',
      'Cây cối trổ hoa rực rỡ bên dòng nước êm đềm',
      'Treo phông nền bàn trà đạo kết hợp đèn lồng ấm cúng',
      'Tặng kèm dây treo inox và núm giữ rèm sang trọng'
    ]
  },
  {
    id: 'tmhc-092-chu-tam-thu-phap-peach',
    code: 'TMHC 092',
    title: 'Mành Tre Thư Pháp TMHC 092 - Chữ "TÂM" & Cành Đào Đỏ',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5089_1d3b51c0.JPG',
    aspect: 'square',
    priceEstimate: '1.080.000 đ - 1.380.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.6m x 1.6m',
    material: 'Tăm tre vàng ấm vẽ chữ TÂM thư pháp và cành đào khoe sắc',
    meaning: 'Tâm an vạn sự an - Giữ tâm sáng, lòng thiện, gia đình thuận hòa phúc thọ.',
    suitableRooms: ['Không gian trà đạo', 'Phòng khách', 'Phòng đọc sách'],
    specs: [
      'Chữ TÂM viết lối thảo thư phóng khoáng của danh nhân',
      'Cành đào đỏ rực ngát hương xuân dưới vầng trăng rằm',
      'Bài thơ khuyên răn về chữ Tâm tu thân dưỡng tính',
      'Được nhiều gia đình trí thức và nghệ sĩ yêu thích'
    ],
    featured: true
  },
  {
    id: 'tmhc-004-truc-quan-tu-co-phong',
    code: 'TMHC 004',
    title: 'Mành Tre Cuốn TMHC 004 - Trúc Quân Tử & Thi Họa Cổ Phong',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5117_3a131457.JPG',
    aspect: 'portrait',
    priceEstimate: '1.050.000 đ - 1.400.000 đ / bộ',
    standardSize: '1.4m x 1.8m hoặc 1.6m x 2.0m',
    material: 'Tăm tre mảnh dệt cước dẻo vẽ khóm trúc mực tàu và thơ cổ',
    meaning: 'Biểu tượng của người quân tử: Thẳng thắn, kiên cường, dẻo dai trước bão giông.',
    suitableRooms: ['Cửa sổ phòng làm việc', 'Thư phòng', 'Bàn trà ngắm vườn'],
    specs: [
      'Bụi trúc xanh mực tàu vươn cao ngạo nghễ',
      'Đàn én chao liệng giữa non nước hữu tình',
      'Hệ rèm cuốn 2 cánh kéo tách biệt linh hoạt',
      'Che nắng tốt mà vẫn thông thoáng đón gió tự nhiên'
    ]
  },
  {
    id: 'tmhc-033-sen-lam-ngoc-3d',
    code: 'TMHC 033',
    title: 'Mành Tre Nghệ Thuật TMHC 033 - Chữ "HÀ" & Sen Lam Ngọc 3D',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5120_3564f76c.JPG',
    aspect: 'portrait',
    priceEstimate: '1.150.000 đ - 1.500.000 đ / bộ',
    standardSize: '1.4m x 1.8m hoặc 1.6m x 2.0m',
    material: 'Tăm tre cao cấp vẽ hoa sen xanh lam ngọc 3D hiệu ứng nổi khối',
    meaning: 'Sự quý phái, độc đáo, mang vẻ đẹp hiện đại thanh thoát cho ngôi nhà.',
    suitableRooms: ['Cửa sổ phòng trà hiện đại', 'Căn hộ chung cư', 'Phòng làm việc'],
    specs: [
      'Hiệu ứng cánh sen xanh lam ngọc 3D bay bổng sống động',
      'Chữ HÀ (Sen) thư pháp mềm mại cùng bài thơ thi vị',
      'Màu sắc tinh tế, khác biệt hoàn toàn rèm truyền thống',
      'Được giới trẻ và người yêu nghệ thuật đặc biệt ưa chuộng'
    ]
  },
  {
    id: 'tmhc-088-thac-nuoc-dam-sen',
    code: 'TMHC 088',
    title: 'Mành Tre Thủy Mặc TMHC 088 - Thác Nước Non Tiên & Đầm Sen Hồng',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5130_c96314a3.JPG',
    aspect: 'square',
    priceEstimate: '1.050.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre tự nhiên vẽ non xanh nước biếc và hoa sen nở rộ',
    meaning: 'Thác nước đổ tài lộc, đầm sen thanh tịnh, thuyền hoa an lạc.',
    suitableRooms: ['Phòng thưởng trà', 'Góc ban công ngắm cảnh', 'Phòng khách'],
    specs: [
      'Dòng thác bạc từ đỉnh núi non tiên đổ xuống mặt hồ phẳng lặng',
      'Những đóa sen hồng tươi tắn khoe sắc góc hồ',
      'Tạo cảm giác mát mẻ sảng khoái cho căn phòng',
      'Lắp đặt nhanh gọn chỉ trong 15 phút'
    ]
  },
  {
    id: 'tmhc-086-hoang-hon-song-thu',
    code: 'TMHC 086',
    title: 'Mành Tre TMHC 086 - Sông Thu Ráng Chiều & Cây Tùng Cổ',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5131_6bde6922.JPG',
    aspect: 'square',
    priceEstimate: '1.050.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre vẽ hoàng hôn ráng chiều ấm áp trên sông quê',
    meaning: 'Cảm giác ấm cúng gia đình sum vầy sau ngày dài làm việc bận rộn.',
    suitableRooms: ['Phòng khách gia đình', 'Bàn trà ấm cúng', 'Phòng ngủ người lớn tuổi'],
    specs: [
      'Ánh hoàng hôn đỏ thắm nhuộm ấm cả không gian căn phòng',
      'Cây tùng vững vàng che chở cho xóm chài nhỏ',
      'Giúp không gian thư thái, giảm căng thẳng stress',
      'Độ bền màu sơn trên 10 năm'
    ]
  },
  {
    id: 'tmhc-083-lang-co-phong-do',
    code: 'TMHC 083',
    title: 'Mành Tre TMHC 083 - Làng Cổ Rừng Cây Phong Đỏ Rực',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5132_eb6f3d15.JPG',
    aspect: 'square',
    priceEstimate: '1.080.000 đ - 1.380.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre vẽ mái ngói làng cổ nép dưới tán phong đỏ rực',
    meaning: 'Sự trù phú, bình yên của làng quê xưa, mang may mắn thịnh vượng.',
    suitableRooms: ['Phòng khách cổ truyền', 'Nhà thờ họ', 'Phòng trà phong cách Á Đông'],
    specs: [
      'Họa tiết từng ngôi nhà mái ngói cổ kính đan xen hoa đỏ',
      'Sắc đỏ ấm áp đem lại vận may tiền tài dịp Tết đến xuân về',
      'Chất tre tăm thơm dịu không hóa chất',
      'Được nhiều khách hàng chọn làm quà biếu ông bà cha mẹ'
    ]
  },
  {
    id: 'tmhc-089-thuyen-do-song-huong',
    code: 'TMHC 089',
    title: 'Mành Tre TMHC 089 - Thuyền Đò Bến Vắng Trăng Nước Sông Hương',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5133_168f91e4.JPG',
    aspect: 'square',
    priceEstimate: '1.020.000 đ - 1.300.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre vẽ cảnh sông nước trăng thanh thơ mộng',
    meaning: 'Tĩnh lặng, an nhiên, đưa tâm trí về trạng thái thư thái sâu sắc.',
    suitableRooms: ['Phòng ngủ', 'Phòng thiền', 'Góc đọc sách thư giãn'],
    specs: [
      'Bóng con thuyền mộc mạc trôi nhẹ trên làn nước êm ả',
      'Gam màu vàng kem dịu mắt dễ đi vào giấc ngủ ngon',
      'Che chắn ánh sáng ban mai nhẹ nhàng, không gây chói',
      'Gọn nhẹ, dễ tháo lắp và bảo dưỡng'
    ]
  },
  {
    id: 'tmhc-091-nui-biec-song-xanh',
    code: 'TMHC 091',
    title: 'Mành Tre TMHC 091 - Núi Biếc Sông Xanh Làng Quê Yên Bình',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5136_b99b392a.JPG',
    aspect: 'square',
    priceEstimate: '1.050.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre vẽ tranh thủy mặc màu xanh ngọc bích tươi mát',
    meaning: 'Thanh lọc không khí, tươi mới tinh thần, điều hòa khí sắc cho căn nhà.',
    suitableRooms: ['Phòng khách mùa hè', 'Bàn trà ngoài hiên', 'Phòng làm việc sáng tạo'],
    specs: [
      'Gam màu xanh lam ngọc và xanh lá mạ mát rượi con mắt',
      'Cảnh sông nước bao la giúp căn phòng nhỏ có cảm giác rộng hơn',
      'Đan nan tăm tre cản nhiệt nắng nóng mùa hè 4-5 độ C',
      'Phù hợp mọi không gian nội thất từ cổ điển đến hiện đại'
    ]
  },
  {
    id: 'tmhc-085-chim-uyen-uong-hoa-dao',
    code: 'TMHC 085',
    title: 'Mành Tre TMHC 085 - Đôi Chim Uyên Ương Cành Đào Đầu Xuân',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5137_6bfb66a6.JPG',
    aspect: 'square',
    priceEstimate: '1.050.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre dệt cước vẽ đôi chim uyên ương ríu rít trên cành hoa đào',
    meaning: 'Tình yêu đôi lứa bền chặt, hôn nhân viên mãn, hạnh phúc trăm năm.',
    suitableRooms: ['Phòng tân hôn', 'Phòng ngủ vợ chồng', 'Phòng khách'],
    specs: [
      'Đôi chim uyên ương lông ngũ sắc quấn quýt bên nhau',
      'Cành đào phai nở rộ đón khí xuân ngập tràn sức sống',
      'Là món quà cưới và tân gia vô cùng ý nghĩa',
      'Dễ lau chùi bằng khăn ẩm mà không lo bay màu'
    ]
  },
  {
    id: 'tmhc-093-lang-chai-thuy-mac',
    code: 'TMHC 093',
    title: 'Mành Tre Thủy Mặc TMHC 093 - Làng Chài Giang Nam Điềm Nhiên',
    category: 'tranh-tra-that',
    categoryLabel: 'Trà Thất & Cổ Phong',
    image: '/assets/aistudio/IMG_5139_90f0056b.JPG',
    aspect: 'square',
    priceEstimate: '1.050.000 đ - 1.350.000 đ / bộ',
    standardSize: '1.5m x 1.5m hoặc 1.8m x 1.8m',
    material: 'Tăm tre vẽ màu xanh rêu cổ điển phong cảnh làng chài ven sông',
    meaning: 'Cuộc sống an nhàn, bình dị, thoát khỏi những xô bồ phố thị.',
    suitableRooms: ['Phòng trà thiền', 'Phòng sách', 'Biệt phủ nhà vườn'],
    specs: [
      'Tái hiện không gian làng chài cổ kính bên bờ sông xanh ngắt',
      'Con thuyền con đò trôi êm đềm như một bức họa cổ xưa',
      'Màu xanh rêu hòa cùng màu gỗ tự nhiên cực kỳ sang trọng',
      'Rèm kéo cuộn nhẹ nhàng trơn tru'
    ]
  }
];
