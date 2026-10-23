export interface RealProjectItem {
  id: string;
  title: string;
  tag: string;
  category: 'curtain' | 'zebra' | 'honeycomb' | 'full-house' | 'story';
  location: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  description: string;
  specs: string[];
  date: string;
  featured?: boolean;
}

export const REAL_PROJECTS: RealProjectItem[] = [
  {
    id: 'proj-tuyen-hoa-handover-5314',
    title: 'Anh Tuyến Trực Tiếp Nghiệm Thu Bàn Giao Rèm Vải Cản Nắng (Trọn Gói 600.000đ/m Ngang Cả Lắp Đặt)',
    tag: 'Phục Vụ Mọi Miền Tổ Quốc',
    category: 'curtain',
    location: 'Chợ Cháy, Ứng Hòa & Phục vụ toàn quốc',
    image: '/assets/aistudio/IMG_5314_ae0205c4.PNG',
    aspect: 'portrait',
    description: 'Chủ cửa hàng Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa trực tiếp lắp đặt và nghiệm thu bộ rèm vải chống nắng màu ghi xám hiện đại tại nhà khách hàng. Đơn giá ưu đãi trọn gói chỉ 600.000đ / mét ngang đã bao gồm cả vải, thanh suốt hợp kim, dây vén rèm và công thợ thi công lắp đặt hoàn thiện.',
    specs: [
      'Đồng giá trọn gói 600.000đ / mét ngang cả công thi công lắp đặt',
      'Vải gấm cản nắng 100%, lên sóng tròn đều chuẩn tỉ lệ 2.5m vải',
      'Thanh suốt hợp kim mạ vàng đồng kèm đai vén rèm chính hãng',
      'Anh Tuyến trực tiếp khảo sát, đo đạc và bảo hành 3 năm tận nhà'
    ],
    date: 'Mới bàn giao',
    featured: true,
  },
  {
    id: 'proj-altar-room-grey-5312',
    title: 'Rèm Tuyến Hoa – Đẳng Cấp Được Khẳng Định: Rèm Vải Ghi Trầm Phòng Thờ & Sập Gụ Chiếu Cói',
    tag: 'Không Gian Phòng Thờ & Sập Gụ',
    category: 'curtain',
    location: 'Nhà truyền thống tại Huyện Ứng Hòa, Hà Nội',
    image: '/assets/aistudio/IMG_5312_c3f3e101.PNG',
    aspect: 'portrait',
    description: 'Bộ rèm vải gấm màu ghi xám trầm mặc được lắp đặt trang nghiêm bên cạnh án gian thờ gia tiên và sập gụ trải chiếu cói chữ Thọ. Từng múi sóng rèm suôn thẳng tắp, cản nắng gắt chiếu vào đồ gỗ quý với mức giá trọn gói 600.000đ/m ngang cả công lắp đặt.',
    specs: [
      'Trọn gói 600.000đ / m ngang bao gồm thanh treo & công lắp đặt',
      'Tông màu ghi trầm trang nhã, tôn nghiêm cho không gian thờ tự',
      'Bảo vệ sập gụ, án gian gỗ khỏi ánh nắng chiếu trực tiếp',
      'Phụ kiện suốt đồng và khuyên Ore cao cấp kéo trượt êm ái'
    ],
    date: 'Mới bàn giao',
    featured: true,
  },
  {
    id: 'proj-villa-cream-curtain-5310',
    title: 'Biệt Thự Hiện Đại: Hệ Rèm Vải 2 Lớp Kem Sữa Kịch Trần Full Tường Sang Trọng',
    tag: 'Công Trình Biệt Thự & Căn Hộ Cao Cấp',
    category: 'full-house',
    location: 'Khu đô thị & Biệt thự Ứng Hòa - Hà Nội',
    image: '/assets/aistudio/IMG_5310_8f861c11.JPG',
    aspect: 'landscape',
    description: 'Thi công hệ rèm vải 2 lớp màu kem sữa (Cream Beige) lắp âm trần full tường kết hợp hệ đèn thả trần nghệ thuật. Lớp vải chính vén gọn hai bên bằng đai đồng bộ, lớp voan trắng lụa xuyên sáng tạo không gian ấm áp, lộng lẫy dịp lễ Giáng Sinh và năm mới.',
    specs: [
      'Rèm vải 1 lớp cản nắng từ 600.000đ/m ngang cả công lắp đặt',
      'May định hình âm trần kịch sàn chiều cao lớn chuẩn khách sạn 5 sao',
      'Lớp voan lụa trắng mềm mại lấy sáng dịu nhẹ cho phòng khách rộng',
      'Là hơi công nghiệp tạo múi sóng thẳng tắp ngay khi treo'
    ],
    date: 'Bàn giao hoàn thiện',
    featured: true,
  },
  {
    id: 'proj-trad-living-embroidered-5293',
    title: 'Phòng Khách Gỗ Gụ Truyền Thống: Rèm Vải 2 Lớp Phối Voan Trắng Thêu Hoa Nghệ Thuật',
    tag: 'Rèm Vải 2 Lớp Voan Thêu',
    category: 'curtain',
    location: 'Trầm Lộng - Chợ Cháy, Ứng Hòa',
    image: '/assets/aistudio/IMG_5293_ff6844ca.JPG',
    aspect: 'landscape',
    description: 'Sự kết hợp tinh tế giữa bộ bàn ghế gỗ tự nhiên truyền thống và hệ rèm vải 2 lớp: Lớp vải cản nắng màu xanh ghi lịch lãm đi cùng lớp voan trắng thêu hoa lá sống động, mang lại sinh khí tươi mới cho phòng khách gia đình.',
    specs: [
      'Lớp voan trắng thêu hoa nổi thủ công tinh xảo',
      'Lớp vải gấm cản sáng 100% chống nóng mùa hè miền Bắc',
      'Lắp đặt nhanh gọn, sạch sẽ trong 1 buổi sáng',
      'Giá rèm vải cản nắng chỉ từ 600.000đ/m ngang cả công lắp'
    ],
    date: 'Bàn giao thực tế',
    featured: true,
  },
  {
    id: 'proj-bronze-border-ceiling-5304',
    title: 'Rèm Vải Gấm Nâu Đồng Phối Viền Thổ Cẩm Lắp Hộc Âm Trần Đèn Hắt Ấm Cúng',
    tag: 'Rèm Gấm Phối Viền Cổ Điển',
    category: 'curtain',
    location: 'Phòng khách & Phòng thờ gia đình tại Ứng Hòa',
    image: '/assets/aistudio/IMG_5304_60468f41.JPG',
    aspect: 'portrait',
    description: 'Mẫu rèm vải gấm màu nâu đồng ánh kim điểm xuyết đường viền thổ cẩm cổ điển trên cổ rèm, lắp đặt trong hộc thạch cao có đèn LED vàng hắt sáng. Vẻ đẹp bề thế, ấm áp, cực kỳ hợp với nội thất gỗ và chiếu hoa gia đình.',
    specs: [
      'Đồng giá 600.000đ / mét ngang hoàn thiện cả công lắp đặt',
      'Chất vải gấm nâu đồng dệt vân nổi sang trọng, chống bám bụi',
      'Viền hoa văn cổ điển tạo điểm nhấn quý phái dưới ánh đèn trần',
      'Ray âm trần hợp kim nhôm trượt siêu êm không tiếng động'
    ],
    date: 'Mới bàn giao',
    featured: true,
  },
  {
    id: 'proj-gold-collar-window-5306',
    title: 'Rèm Vải Cửa Sổ 2 Cánh Phối Cổ Vàng Đồng & Thanh Suốt Hợp Kim Mạ Vàng',
    tag: 'Rèm Cửa Sổ Phối Cổ Vàng',
    category: 'curtain',
    location: 'Nhà mới xây tại Huyện Ứng Hòa, Hà Nội',
    image: '/assets/aistudio/IMG_5306_e08d9303.JPG',
    aspect: 'portrait',
    description: 'Bộ rèm cửa sổ nhôm kính 2 cánh mới hoàn thiện: Thân rèm màu ghi sáng hiện đại phối cổ rèm màu vàng hoàng gia có viền kim tuyến, treo trên thanh suốt hợp kim mạ vàng đồng chạm đầu rồng phượng. Giá trọn gói 600.000đ/m ngang cả công lắp.',
    specs: [
      'Trọn gói 600.000đ / m ngang (vải + suốt mạ vàng + công lắp)',
      'Thiết kế phối cổ 2 màu tôn chiều cao khung cửa sổ',
      'Đai vén rèm đính tem đỏ chính hãng Rèm Tuyến Hoa',
      'Cản nắng 100% cho phòng ngủ và phòng khách'
    ],
    date: 'Mới bàn giao',
    featured: false,
  },
  {
    id: 'proj-modern-bedroom-recessed-5282',
    title: 'Phòng Ngủ Master Hiện Đại: Rèm Vải 2 Lớp Ghi Xám & Voan Lụa Lắp Âm Trần',
    tag: 'Phòng Ngủ Hiện Đại',
    category: 'curtain',
    location: 'Nhà phố hiện đại tại Vân Đình - Ứng Hòa',
    image: '/assets/aistudio/IMG_5282_af0ccdef.JPG',
    aspect: 'portrait',
    description: 'Không gian phòng ngủ yên bình và sang trọng với hệ rèm vải 2 lớp lắp âm trần thạch cao: Lớp vải gấm bố màu ghi xám cản sáng tuyệt đối giúp ngủ sâu giấc, kết hợp lớp voan trắng mềm mại lọc ánh sáng tự nhiên.',
    specs: [
      'Rèm vải 1 lớp cản sáng trọn gói 600.000đ/m ngang cả công lắp',
      'Sóng rèm định hình suôn thẳng từ hộc thạch cao xuống sàn',
      'Cách nhiệt điều hòa mùa hè và giữ ấm tuyệt đối mùa đông',
      'Miễn phí mang mẫu vải tận nhà ướm thử theo màu sơn tường'
    ],
    date: 'Bàn giao thực tế',
    featured: true,
  },
  {
    id: 'proj-spa-salon-two-tone-5290',
    title: 'Hệ Rèm Vải Phối 2 Tông Màu Xanh Cổ Vịt & Ghi Sáng Cho Spa Dưỡng Sinh',
    tag: 'Rèm Spa & Thẩm Mỹ Viện',
    category: 'curtain',
    location: 'Tiệm Spa & Chăm sóc sắc đẹp tại Ứng Hòa',
    image: '/assets/aistudio/IMG_5290_021aafcc.JPG',
    aspect: 'portrait',
    description: 'Thi công hệ rèm vải trang trí và ngăn không gian cho Spa gội đầu dưỡng sinh: Phối hợp nhịp nhàng giữa dải vải màu xanh cổ vịt (Teal Blue) và màu ghi sáng tạo cảm giác thư giãn, sang trọng và chuyên nghiệp. Giá trọn gói 600.000đ/m ngang cả lắp đặt.',
    specs: [
      'Đồng giá 600.000đ / m ngang hoàn thiện cả thanh ray & công lắp',
      'Phối màu theo bộ nhận diện thương hiệu của Spa / Salon',
      'Chất vải dày dặn, rủ sóng mềm mại, cách âm và tạo sự riêng tư',
      'Thi công nhanh gọn trong ngày không ảnh hưởng việc kinh doanh'
    ],
    date: 'Bàn giao hoàn thiện',
    featured: false,
  },
  {
    id: 'proj-living-room-luxury',
    title: 'Biệt Thự Nhà Phố Ứng Hòa: Rèm Vải 2 Lớp Cản Sáng & Rèm Cầu Vồng Thông Tầng',
    tag: 'Công Trình Biệt Thự Nhà Phố',
    category: 'curtain',
    location: 'Khu vực Chợ Cháy - Đồng Tân, Ứng Hòa',
    image: '/assets/aistudio/1792619301814_1293093313519991016_1293093313519991016_7660cb9abb659911e5fe3cd71a7f60bb_2e6c2394.jpg',
    aspect: 'landscape',
    description: 'Thi công hoàn thiện phòng khách thông tầng cao cấp: Rèm vải 2 lớp gấm thô màu ghi xám sang trọng cản sáng 100%, lớp voan trắng xước tinh tế tại cửa chính; kết hợp rèm cầu vồng Hàn Quốc tại cửa sổ cầu thang. Xe tải Tuyến Hoa chở phụ kiện và lắp đặt trọn gói trong ngày.',
    specs: [
      'Vải gấm Nhật cản sáng 100% & cản nhiệt điều hòa',
      'Lớp voan trắng xước cao cấp đón nắng nhẹ',
      'Thanh ray nhôm định hình tĩnh âm chịu tải lớn',
      'Xe chuyên dụng Tuyến Hoa giao và thi công tận nhà'
    ],
    date: 'Bàn giao hoàn thiện',
    featured: true,
  },
  {
    id: 'proj-curtain-detail-pleats',
    title: 'Cận Cảnh Đường May Sóng Rèm Vải 2 Lớp & Phụ Kiện Treo',
    tag: 'Chi Tiết Kỹ Thuật May Đo',
    category: 'curtain',
    location: 'Lắp đặt tại nhà khách hàng Ứng Hòa',
    image: '/assets/aistudio/1792619301680_1293093313519991016_1293093313519991016_e1e1340b0c22b60107b156d2a1eeaa43_4fe9d601.jpg',
    aspect: 'portrait',
    description: 'Từng nếp sóng rèm được thợ Tuyến Hoa là hơi định hình ly sóng chuẩn tỉ lệ vàng 2.5m vải/1m cửa. Đai buộc rèm đính nút tinh tế cùng thanh suốt trắng sứ hài hòa với trần thạch cao.',
    specs: [
      'Độ nhún ly sóng chuẩn 2.5m vải tạo nếp bồng bềnh',
      'Là hơi định hình chống nhăn nhúm',
      'Đai buộc rèm bản to may viền đồng bộ',
      'Khóa ray và chốt giữ chắc chắn tuyệt đối'
    ],
    date: 'Chụp tại công trình thực tế',
    featured: false,
  },
  {
    id: 'proj-zebra-bedroom-window',
    title: 'Rèm Cầu Vồng Hàn Quốc Modero Cửa Sổ Khung Inox Chuẩn Xác',
    tag: 'Rèm Cầu Vồng Hàn Quốc',
    category: 'zebra',
    location: 'Trầm Lộng, Huyện Ứng Hòa, Hà Nội',
    image: '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg',
    aspect: 'portrait',
    description: 'Bộ rèm cầu vồng Hàn Quốc 2 lớp so le màu ghi bạc lắp lọt lòng cửa sổ an toàn. Điều chỉnh ánh sáng linh hoạt 0% - 100%, hộp máng nhôm hợp kim chống rung lắc, sợi vải polyester cản nắng 95% chống bám bụi.',
    specs: [
      'Công nghệ dệt Combi 2 lớp Hàn Quốc',
      'Hộp máng nhôm đúc tĩnh điện chống cong vênh',
      'Lắp lọt lòng khuôn bao cửa gọn gàng tuyệt đối',
      'Dây kéo trợ lực trơn tru không gây tiếng ồn'
    ],
    date: 'Bàn giao thực tế',
    featured: true,
  },
  {
    id: 'proj-full-house-hallway',
    title: 'Toàn Cảnh Hệ Thống Rèm Đồng Bộ Nhà Phố 2 Tầng Hiện Đại',
    tag: 'Toàn Cảnh Không Gian Sống',
    category: 'full-house',
    location: 'Thị trấn Vân Đình, Ứng Hòa',
    image: '/assets/aistudio/1792619301743_1293093313519991016_1293093313519991016_c3b884b0135e24592fd618ad629e07fd_9004b446.jpg',
    aspect: 'landscape',
    description: 'Góc nhìn từ tầng 2 nhìn xuống cầu thang và sảnh chính: Sự đồng điệu hoàn hảo giữa rèm cầu vồng tại các cửa sổ lấy sáng và rèm vải 2 lớp mở ra ban công thoáng đãng, mang đến vẻ đẹp sang trọng hiện đại.',
    specs: [
      'Thiết kế đồng bộ từ phòng khách lên các phòng ngủ tầng trên',
      'Phối màu chuẩn phong thủy và sơn tường nhà phố',
      'Khảo sát và lên thiết kế tổng thể miễn phí',
      'Đảm bảo cản sáng và thông gió tối ưu'
    ],
    date: 'Bàn giao trọn gói',
    featured: true,
  },
  {
    id: 'proj-family-tuyen-hoa-heritage',
    title: 'Đại Gia Đình Tuyến Hoa - Uy Tín Hơn 20 Năm Gắn Bó Cùng Bà Con Quê Hương Chợ Cháy',
    tag: 'Câu Chuyện & Uy Tín Tuyến Hoa',
    category: 'story',
    location: 'Làng quê Chợ Cháy, Huyện Ứng Hòa, Hà Nội',
    image: '/assets/aistudio/__i_ti_c_b_ng_bay_gi_a_l_ng_qu__-_Copy_5de32935.png',
    aspect: 'landscape',
    description: 'Khoảnh khắc sum vầy ngập tràn sắc hoa và bóng bay của đại gia đình Tuyến Hoa cùng các thế hệ gắn bó với nghề tại mảnh đất Chợ Cháy, Ứng Hòa. Chúng tôi kinh doanh bằng chữ TÂM, coi mỗi khách hàng như bà con lối xóm, luôn tận tình bảo hành và đồng hành dài lâu.',
    specs: [
      'Hơn 20 năm phục vụ bà con huyện Ứng Hòa',
      'Đại lý cấp 1 phân phối đệm và mành rèm chính hãng',
      'Dịch vụ thợ tận nhà chu đáo, bảo hành tại chỗ',
      'Được hàng nghìn gia đình địa phương tin yêu gửi trọn niềm tin'
    ],
    date: 'Kỷ niệm gia đình Tuyến Hoa',
    featured: true,
  },
  {
    id: 'proj-craftsman-tuyen-hoa-owner',
    title: 'Anh Tuyến - Trực Tiếp Đo Đạc & Nghiệm Thu Rèm Cửa Tại Nhà Khách Hàng',
    tag: 'Chủ Tiệm & Thợ May Đo Tuyến Hoa',
    category: 'curtain',
    location: 'Công trình nhà phố tại Chợ Cháy, Ứng Hòa',
    image: '/assets/aistudio/20261017_162136_c08f9065.jpg',
    aspect: 'portrait',
    description: 'Nụ cười rạng rỡ của anh Tuyến sau khi hoàn tất lắp đặt hệ thống rèm vải 2 lớp và rèm cầu vồng thông tầng. Với tay nghề may đo tỉ mỉ và cái tâm của người con đất Chợ Cháy, anh trực tiếp tư vấn, đo đạc và kiểm tra từng đường chỉ, nếp sóng rèm trước khi bàn giao cho gia chủ.',
    specs: [
      'Chủ tiệm Tuyến Hoa trực tiếp khảo sát và mang mẫu vải tận nhà',
      'Tư vấn phối màu rèm vải & rèm cầu vồng chuẩn thẩm mỹ',
      'Kiểm tra độ êm ái ray trượt và khóa phụ kiện trước khi bàn giao',
      'Cam kết bảo hành kỹ thuật 3 năm tận nhà tại huyện Ứng Hòa'
    ],
    date: 'Bàn giao thực tế',
    featured: true,
  },
  {
    id: 'proj-honeycomb-partition-grey',
    title: 'Nghiệm Thu Hệ Vách Rèm Tổ Ong Cản Nhiệt Điều Hòa Màu Ghi Than Chì',
    tag: 'Vách Rèm Tổ Ong Cản Nhiệt',
    category: 'honeycomb',
    location: 'Nhà phố hiện đại tại Chợ Cháy, Ứng Hòa',
    image: '/assets/aistudio/1792658171075_1293093313519991016_1293093313519991016_0f9d66d4bfaa9005e2909eb62a753963_bebb2fef.jpg',
    aspect: 'portrait',
    description: 'Anh Tuyến trực tiếp nghiệm thu và bàn giao hệ vách rèm tổ ong màu ghi than chì cao cấp tại nhà khách hàng Ứng Hòa. Cấu trúc tổ ong ép nhiệt dập nếp định hình, lớp bạc kép bên trong cản 100% thất thoát nhiệt điều hòa, khi không dùng có thể xếp gọn gàng sát tường tiết kiệm không gian tối đa.',
    specs: [
      'Lớp tráng bạc kép bên trong cản nhiệt & cách âm vượt trội',
      'Hệ xếp ly nan nhôm trượt êm ái, đóng mở nhẹ nhàng bằng một tay',
      'Màu xám ghi than chì hiện đại, tôn vinh kiến trúc phòng ngủ & phòng khách',
      'Bảo hành hệ khung nhôm và phụ kiện 3 năm tại Ứng Hòa'
    ],
    date: 'Nghiệm thu hoàn thiện',
    featured: true,
  },
  {
    id: 'proj-window-insect-screen-call',
    title: 'Cửa Lưới Chống Muỗi Xếp Xích Cửa Sổ & Trực Tiếp Tư Vấn Khảo Sát Tận Nhà',
    tag: 'Cửa Lưới Chống Muỗi Cao Cấp',
    category: 'honeycomb',
    location: 'Khu dân cư Chợ Cháy - Hòa Xá, Ứng Hòa',
    image: '/assets/aistudio/1792658171183_1293093313519991016_1293093313519991016_10108ab564c8fb6ade925f6a8e609889_1971346a.jpg',
    aspect: 'portrait',
    description: 'Anh Tuyến trực tiếp tiếp nhận điện thoại từ khách hàng, tư vấn đo đạc lắp đặt cửa lưới chống muỗi xếp ly bên khung cửa sổ. Mắt lưới sợi thủy tinh siêu mịn ngăn 100% muỗi, dĩn, kiến ba khoang bay vào nhà mà vẫn thông gió đón ánh sáng tự nhiên chan hòa.',
    specs: [
      'Trực tiếp anh Tuyến tiếp nhận hotline 0344727528 & tư vấn kỹ thuật',
      'Mắt lưới sợi thủy tinh phủ nhựa PP chịu lực gió, không lo rách rưới',
      'Hệ xếp gọn lọt lòng khuôn cửa nhôm xingfa cực kỳ gọn gàng',
      'Khảo sát mang mẫu thực tế đo đạc tận nhà miễn phí 100%'
    ],
    date: 'Tư vấn & thi công thực tế',
    featured: true,
  },
  {
    id: 'proj-survey-window-lakeview',
    title: 'Khảo Sát May Đo Hệ Rèm Cho Khung Cửa Sổ View Sông Hồ Thoáng Đãng',
    tag: 'Khảo Sát Thực Tế Công Trình',
    category: 'full-house',
    location: 'Biệt thự ven sông/hồ tại huyện Ứng Hòa, Hà Nội',
    image: '/assets/aistudio/1792658171296_1293093313519991016_1293093313519991016_f85acd8d91ec951798f3b410a5744ecc_-_Copy_-_Copy_78dd3953.jpg',
    aspect: 'portrait',
    description: 'Anh Tuyến tại công trình nhà phố ven hồ Ứng Hòa: Kiểm tra thực tế kích thước khung bao cửa nhôm xingfa và khung nan inox bảo vệ trước khi may đo rèm vải 2 lớp và rèm cầu vồng, đảm bảo rèm kéo êm mượt và không vướng nan sắt.',
    specs: [
      'Đo đạc kích thước chính xác từng milimet cho cửa kính hướng nắng',
      'Lựa chọn phương án rèm lắp lọt lòng hoặc phủ bì tối ưu tầm nhìn ra hồ',
      'Tư vấn chất liệu vải chống bạc màu trước tia UV ven mặt nước',
      'Bàn giao lắp đặt đồng bộ toàn bộ các tầng trong 24 giờ'
    ],
    date: 'Khảo sát công trình',
    featured: true,
  },
  {
    id: 'proj-ancestral-nguyen-gia-trang',
    title: 'Từ Đường "Nguyễn Gia Trang": Bộ Tam Mành Tre Vẽ Tranh Chữ Phúc & Tùng Hạc',
    tag: 'Công Trình Từ Đường Dòng Họ',
    category: 'curtain',
    location: 'Từ Đường Nguyễn Gia Trang, Ứng Hòa, Hà Nội',
    image: '/assets/aistudio/IMG_5064_22d927b3.JPG',
    aspect: 'landscape',
    description: 'Tuyến Hoa vinh dự hoàn thiện bộ tam mành tre tăm vẽ tay phong thủy cho Từ Đường Nguyễn Gia Trang: Gian giữa vẽ chữ PHÚC viền vàng tôn nghiêm trên nền đầm sen, hai gian bên là Tùng Hạc diên niên và Trúc Quân Tử đón điềm lành, chuẩn kích thước Thước Lỗ Ban 38.8cm cung đỏ cát tường.',
    specs: [
      'Chất liệu tăm tre hun khói chống mối mọt vĩnh viễn',
      'Vẽ sơn dầu acrylic thủ công bền màu ngoài trời',
      'Đồng bộ 3 gian thờ tổ tiên tôn nghiêm uy nghi',
      'Tuyến Hoa đo đạc, thiết kế và thi công trọn gói'
    ],
    date: 'Bàn giao khánh thành',
    featured: true,
  },
  {
    id: 'proj-memorial-to-quoc-ghi-cong',
    title: 'Nhà Tưởng Niệm Liệt Sĩ: Mành Tre Đại Tự Chữ Thọ & Đầm Sen Vàng',
    tag: 'Công Trình Tâm Linh Trang Nghiêm',
    category: 'curtain',
    location: 'Nhà tưởng niệm Tổ Quốc Ghi Công, Ứng Hòa',
    image: '/assets/aistudio/IMG_5066_874ef5f2.JPG',
    aspect: 'landscape',
    description: 'Thi công tấm mành tre phong thủy khổ lớn che chắn tiền đường Nhà Tưởng Niệm Liệt Sĩ "Tổ Quốc Ghi Công": Bức tranh chữ Thọ tròn viên mãn cùng đàn cá chép bơi lội dưới bóng hoa sen hồng, mang ý nghĩa non sông trường tồn, đời đời nhớ ơn các anh hùng liệt sĩ.',
    specs: [
      'Khổ mành lớn rộng trên 4m x cao 2.6m liền mạch',
      'Chịu nắng mưa thời tiết khắc nghiệt ngoài trời',
      'Màu sắc trang trọng, tôn nghiêm chốn linh thiêng',
      'Được chính quyền và bà con nhân dân khen ngợi'
    ],
    date: 'Nghiệm thu hoàn thiện',
    featured: true,
  },
  {
    id: 'proj-hexagonal-garden-gazebo',
    title: 'Chòi Nghỉ Lục Giác Sân Vườn: Hệ Mành Tre Vẽ Tranh Đầm Sen Hạc 360 Độ',
    tag: 'Biệt Phủ & Nhà Vườn Sinh Thái',
    category: 'full-house',
    location: 'Nhà vườn sinh thái cao cấp tại Ứng Hòa',
    image: '/assets/aistudio/IMG_5063_cdc2f3cd.JPG',
    aspect: 'square',
    description: 'Không gian chòi lục giác mái ngói đỏ được bao quanh bởi 6 bức mành tre vẽ tay liên hoàn đầm sen hồng và bầy hạc trắng. Vừa che mưa hắt bảo vệ bàn trà gỗ gụ, vừa tạo cảm giác thư thái bồng lai tiên cảnh khi ngồi đàm đạo ngắm trăng.',
    specs: [
      'Khảo sát và may đo theo góc vát 6 cạnh chòi lục giác',
      'Tranh vẽ liên hoàn 360 độ hòa quyện thiên nhiên',
      'Dây ròng rọc inox cuốn rèm nhẹ nhàng khi cần đón gió',
      'Gia chủ cực kỳ tâm đắc khi tiếp đãi bạn hữu'
    ],
    date: 'Bàn giao thực tế',
    featured: true,
  },
  {
    id: 'proj-porch-antique-lim-house',
    title: 'Hiên Nhà Cổ Gỗ Lim 5 Gian: Dãy Mành Tre Màu Cánh Gián Che Nắng Hướng Tây',
    tag: 'Nhà Cổ Truyền Thống Miền Bắc',
    category: 'curtain',
    location: 'Làng cổ ven sông Đáy, Huyện Ứng Hòa',
    image: '/assets/aistudio/IMG_5058_5cb633e1.JPG',
    aspect: 'portrait',
    description: 'Lắp đặt đồng bộ dãy mành tre trúc hun khói sơn phủ PU màu cánh gián cho hiên nhà cổ gỗ lim 5 gian. Ngăn chặn 100% ánh nắng gay gắt chiếu trực tiếp vào hàng cột gỗ lim và cửa bức bàn, chống nứt nẻ cong vênh gỗ quý.',
    specs: [
      'Bảo vệ trọn vẹn dàn cột gỗ lim đắt giá khỏi nắng gắt',
      'Màu cánh gián hài hòa với mái ngói mũi hài cổ kính',
      'Chống mưa tạt ướt thềm gạch Bát Tràng',
      'Độ bền nan tre trên 10 năm ngoài hiên nhà'
    ],
    date: 'Thi công hoàn thiện',
    featured: true,
  },
  {
    id: 'proj-village-temple-phuc',
    title: 'Đình Làng Truyền Thống: Mành Tre Đại Tự Chữ Phúc & Tùng Hạc Diên Niên',
    tag: 'Di Tích Đình Làng Cổ Kính',
    category: 'curtain',
    location: 'Đình làng truyền thống huyện Ứng Hòa',
    image: '/assets/aistudio/IMG_5068_fb7355e6.JPG',
    aspect: 'landscape',
    description: 'Hệ mành tre trầm mặc che mưa nắng gian tiền tế ngôi đình làng cổ kính: Chữ PHÚC đại tự thư pháp vàng óng ở vị trí trung tâm, đôi hạc trắng chầu tùng bách hai bên, gìn giữ nét văn hóa làng quê Chợ Cháy.',
    specs: [
      'Tre cật già chọn lọc kỹ lưỡng, luộc chống mọt',
      'Nghệ nhân vẽ tay từng cánh hoa sen và nét mây bay',
      'Ròng rọc dây dù kéo nhẹ nhàng, phụ nữ lớn tuổi kéo dễ dàng',
      'Bàn giao đúng dịp lễ hội làng'
    ],
    date: 'Bàn giao khánh thành',
    featured: true,
  },
  {
    id: 'proj-motor-auto-smart',
    title: 'Phòng Ngủ Hiện Đại: Lắp Đặt Hệ Rèm Cuốn Tự Động Động Cơ Ống Siêu Êm',
    tag: 'Rèm Tự Động Thông Minh',
    category: 'curtain',
    location: 'Khu đô thị mới thị trấn Vân Đình, Ứng Hòa',
    image: '/assets/aistudio/IMG_5053_4a4c9d67.JPG',
    aspect: 'portrait',
    description: 'Nâng cấp rèm cuốn tự động thông minh: Hộp máng nhôm hợp kim sơn tĩnh điện màu ghi sang trọng, tích hợp động cơ tubular siêu êm điều khiển qua remote và kết nối điều khiển bằng giọng nói trên điện thoại thông minh.',
    specs: [
      'Động cơ tubular siêu tĩnh âm độ ồn dưới 30dB',
      'Điều khiển từ xa qua remote cầm tay & app smartphone',
      'Hộp máng nhôm đúc nguyên khối chống bám bụi',
      'Bảo hành chính hãng động cơ 3 năm tận nhà'
    ],
    date: 'Lắp đặt bàn giao',
    featured: true,
  },
];

