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
];
