import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  PhoneCall,
  MapPin,
  ShieldCheck,
  Ruler,
  Check,
  ArrowRight,
  Bot,
  User,
  ShoppingBag,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '../data/products';
import { Product, CartItem } from '../types/store';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  suggestedProducts?: Product[];
  actionType?: 'call' | 'measurement' | 'view_catalog' | 'view_products';
  actionData?: any;
}

interface TuyenHoaChatboxProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onAddToCart?: (item: CartItem) => void;
  onSelectProduct?: (product: Product) => void;
  onRequestMeasurement?: (type: string, note: string) => void;
}

const QUICK_QUESTIONS = [
  'Báo giá đệm Vikosan & Sông Hồng',
  'Tư vấn rèm vải 2 lớp & rèm cầu vồng',
  'Rèm tổ ong chống muỗi thế nào?',
  'Hẹn thợ mang mẫu đo tận nhà',
  'Chiếu trúc loại nào nằm mát?',
  'Địa chỉ cửa hàng Tuyến Hoa ở đâu?'
];

export const TuyenHoaChatbox: React.FC<TuyenHoaChatboxProps> = ({
  isOpen,
  onClose,
  onOpen,
  onAddToCart,
  onSelectProduct,
  onRequestMeasurement,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Dạ em chào anh/chị! Em là Chuyên viên tư vấn của Cửa Hàng Tuyến Hoa tại Chợ Cháy - Ứng Hòa.\n\nBên em chuyên đệm Vikosan, Sông Hồng, Everon, Kymdan, mành rèm cản sáng, rèm tổ ong chống muỗi và chiếu trúc mây cao cấp. Em có thể tư vấn mẫu hoặc báo giá kích thước nào cho anh/chị ạ?`,
      timestamp: 'Vừa xong',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(scrollToBottom, 100);
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  // Knowledge retrieval & response engine
  const generateStoreAnswer = (query: string): { text: string; products?: Product[]; actionType?: any; actionData?: any } => {
    const q = query.toLowerCase();

    // 1. Dem Vikosan
    if (q.includes('vikosan')) {
      const p = PRODUCTS.find((x) => x.id === 'dem-vikosan-luxury');
      return {
        text: `Dạ đệm Vikosan bông ép Hàn Quốc bên Tuyến Hoa là hàng công ty chính hãng 100%, bảo hành 5 năm lỗi đổi mới:\n\n• Cấu tạo: Lõi bông xơ tinh khiết ép nhiệt công nghệ nano, phẳng cứng chuẩn y khoa không đau lưng, vỏ gấm dệt xốp thoáng khí.\n• Thiết kế gấp 3 mảnh rất tiện vệ sinh và cất giữ.\n• Giá công khai theo kích thước:\n  - 1m2 x 1m9 (dày 5F/7F/9F): từ 1.350.000đ đến 1.850.000đ\n  - 1m6 x 2m (dày 9F/14F): từ 2.250.000đ đến 2.750.000đ\n  - 1m8 x 2m (dày 9F/14F): từ 2.550.000đ đến 3.250.000đ\n\nBên em giao tận giường miễn phí trong Ứng Hòa, kiểm tra đúng hàng mới nhận ạ!`,
        products: p ? [p] : undefined,
        actionType: 'call',
      };
    }

    // 2. Dem Song Hong
    if (q.includes('sông hồng') || q.includes('song hong')) {
      const p = PRODUCTS.find((x) => x.id === 'dem-song-hong-tinh-khiet');
      return {
        text: `Dạ đệm Sông Hồng thế hệ 2 & 3 là dòng bán chạy hàng đầu tại Tuyến Hoa:\n\n• 100% bông tinh khiết kháng khuẩn, hoàn toàn không keo dính độc hại.\n• Đệm có độ êm ái vừa vặn, không bị lún trũng như mút xốp thông thường, rất tốt cho người lớn tuổi và trẻ nhỏ.\n• Giá đệm Sông Hồng tại cửa hàng:\n  - 1m2 x 1m9 (dày 7F - 9F): 1.850.000đ - 2.250.000đ\n  - 1m6 x 2m (dày 9F - 15F): 2.750.000đ - 3.850.000đ\n  - 1m8 x 2m (dày 9F - 15F): 3.150.000đ - 4.850.000đ\n\nĐầy đủ tem chống hàng giả và bảo hành 5 năm của May Sông Hồng ạ.`,
        products: p ? [p] : undefined,
      };
    }

    // 3. Everon & Kymdan
    if (q.includes('everon') || q.includes('kymdan') || q.includes('cao su')) {
      const everon = PRODUCTS.find((x) => x.id === 'dem-everon-padding');
      const kymdan = PRODUCTS.find((x) => x.id === 'dem-kymdan-deluxe');
      return {
        text: `Dạ Tuyến Hoa có đủ cả Đệm Everon Hàn Quốc và Đệm cao su tự nhiên Kymdan:\n\n1. Đệm Everon vỏ gấm xốp than hoạt tính: Giá từ 2.450.000đ đến 7.200.000đ, độ bền cao, không xẹp lún.\n2. Đệm cao su Kymdan Deluxe 100% thiên nhiên: Dày 5cm - 10cm - 15cm, giá từ 14.500.000đ đến 38.500.000đ, bảo hành chính hãng 15 năm (độ bền thực tế 25 năm), nâng đỡ 7 vùng cơ thể hoàn hảo.\n\nAnh/chị cần giường kích thước nào (1m6 hay 1m8) em báo giá cụ thể và tặng kèm quà ga gối ạ!`,
        products: [everon, kymdan].filter(Boolean) as Product[],
      };
    }

    // 4. Rem cau vong
    if (q.includes('cầu vồng') || q.includes('cau vong') || q.includes('korean')) {
      const p = PRODUCTS.find((x) => x.id === 'rem-cau-vong-modero');
      return {
        text: `Dạ rèm cầu vồng Modero/Fineplus Hàn Quốc hiện đại cực kỳ sang trọng cho phòng khách và phòng ngủ:\n\n• Gồm 2 lớp vải so le: 1 dải vải cản sáng và 1 dải voan lưới đan xen, kéo điều chỉnh ánh sáng linh hoạt 0% - 100%.\n• Hộp máng và thanh đáy bằng nhôm sơn tĩnh điện cao cấp, dây kéo trơn tru nhẹ nhàng.\n• Giá tính theo m² (hoàn thiện phụ kiện & công lắp): từ 420.000đ - 850.000đ/m² tùy mã vải và độ cản nhiệt.\n• Anh/chị chỉ cần để lại số điện thoại hoặc gọi 0344727528, bên em mang mẫu vải thật đến tận nhà đo chuẩn từng mi-li-mét ạ!`,
        products: p ? [p] : undefined,
        actionType: 'measurement',
        actionData: 'Rèm Cầu Vồng Hàn Quốc',
      };
    }

    // 5. Rem to ong & luoi chong muoi
    if (q.includes('tổ ong') || q.includes('to ong') || q.includes('muỗi') || q.includes('chong muoi')) {
      const p = PRODUCTS.find((x) => x.id === 'rem-to-ong-luoi-muoi');
      return {
        text: `Dạ rèm tổ ong kết hợp lưới chống muỗi hệ 2 trong 1 là mẫu rèm thông minh bán chạy nhất mùa này:\n\n• Cánh thứ 1: Rèm tổ ong tráng bạc cách nhiệt, ngăn thất thoát điều hòa 98%, cản sáng cản ồn.\n• Cánh thứ 2: Lưới inox hoặc PE cao cấp ngăn tuyệt đối muỗi, ruồi, kiến ba khoang mà vẫn thoáng gió trời.\n• Xếp gọn trơn tru không ray hoặc ray siêu thấp không lo vấp ngã.\n• Giá hoàn thiện: 880.000đ - 1.250.000đ/m² tùy hệ nhôm Xingfa.\n\nTuyến Hoa hỗ trợ thợ kỹ thuật qua đo đạc và lên phương án miễn phí tại nhà ở Ứng Hòa!`,
        products: p ? [p] : undefined,
        actionType: 'measurement',
        actionData: 'Rèm Tổ Ong Chống Muỗi',
      };
    }

    // 6. Rem vai 2 lop / rem sao go / sao nhom
    if (q.includes('rèm') || q.includes('rem') || q.includes('vải') || q.includes('sáo gỗ') || q.includes('sáo nhôm')) {
      const remVai = PRODUCTS.find((x) => x.id === 'rem-vai-gam-2-lop');
      const remGo = PRODUCTS.find((x) => x.id === 'rem-sao-go-basswood');
      return {
        text: `Dạ Tuyến Hoa cung cấp đầy đủ các mẫu mành rèm cao cấp:\n\n• Rèm vải 2 lớp (1 lớp vải cản sáng 100% + 1 lớp voan thêu tinh tế): 550.000đ - 950.000đ/mét ngang hoàn thiện (đã gồm độ nhún 2.5 và thanh phụ kiện).\n• Rèm sáo gỗ tự nhiên Basswood: 620.000đ/m², xoay lật 180 độ sang trọng phong cách tân cổ điển.\n• Rèm sáo nhôm tĩnh điện chống ẩm: 280.000đ/m² cho phòng bếp, phòng tắm.\n\nBên em có thợ mang mẫu vải catalogue tới tận nhà tại huyện Ứng Hòa để gia đình mình chọn màu hợp sơn tường và phong thủy ạ!`,
        products: [remVai, remGo].filter(Boolean) as Product[],
        actionType: 'measurement',
        actionData: 'Rèm Cửa Tư Vấn',
      };
    }

    // 7. Chieu truc & manh tre
    if (q.includes('chiếu') || q.includes('chieu') || q.includes('mành tre') || q.includes('manh tre') || q.includes('trúc')) {
      const chieuTruc = PRODUCTS.find((x) => x.id === 'chieu-truc-hat-den');
      const manhTre = PRODUCTS.find((x) => x.id === 'manh-tre-nang-ngoai-troi');
      return {
        text: `Dạ cửa hàng có đầy đủ chiếu nằm mát và mành che nắng bền đẹp:\n\n• Chiếu trúc hạt đen Hương Trúc/Cao Sơn: Hạt gỗ trúc già bóng láng, nằm mát rượi, dây cước đôi bện chắc không bai giãn. Giá 680.000đ - 950.000đ (1m2 đến 2m2).\n• Chiếu mây Shikada / Muji Nhật Bản: Dùng cho phòng điều hòa cực êm lưng, gấp gọn gàng, giá 450.000đ - 750.000đ.\n• Mành tre nan hun khói chống nắng ban công, nhà thờ: 195.000đ/m² gồm đầy đủ ròng rọc dây kéo.\n\nHàng dày dặn tuyển chọn kỹ lưỡng, bảo hành độ bền nhiều năm ạ!`,
        products: [chieuTruc, manhTre].filter(Boolean) as Product[],
      };
    }

    // 8. Dia chi, hotline & hen do tai nha
    if (q.includes('địa chỉ') || q.includes('dia chi') || q.includes('ở đâu') || q.includes('chợ cháy') || q.includes('hotline') || q.includes('sđt') || q.includes('sdt') || q.includes('đo')) {
      return {
        text: `Dạ thông tin cửa hàng Tuyến Hoa:\n\n🏠 Địa chỉ: Khu vực Chợ Cháy, Xã Đồng Tân, Huyện Ứng Hòa, Hà Nội (Trung tâm Chợ Cháy sầm uất).\n📞 Hotline & Zalo: 0344.727.528 (Trực 24/7).\n🚗 Dịch vụ: Miễn phí 100% thợ mang mẫu đo tận nhà trên toàn huyện Ứng Hòa (Chợ Cháy, Vân Đình, Trầm Lộng, Hòa Nam, Kim Đường, Hòa Xá...). Giao hàng tận giường miễn phí, nhận hàng kiểm tra mới phải thanh toán ạ!`,
        actionType: 'call',
      };
    }

    // 9. Gia ca & bao gia chung
    if (q.includes('giá') || q.includes('gia') || q.includes('báo giá') || q.includes('bao gia') || q.includes('bao nhieu')) {
      return {
        text: `Dạ Tuyến Hoa luôn cam kết GIÁ CÔNG KHAI và rẻ nhất khu vực Ứng Hòa do nhập trực tiếp từ xưởng và đại lý cấp 1:\n\n• Đệm bông ép Vikosan: từ 1.350.000đ\n• Đệm Sông Hồng thế hệ 2 & 3: từ 1.850.000đ\n• Đệm Everon Hàn Quốc: từ 2.450.000đ\n• Đệm Kymdan tự nhiên: từ 14.500.000đ\n• Rèm vải 2 lớp hoàn thiện: từ 550.000đ/mét ngang\n• Rèm cầu vồng Hàn Quốc: từ 420.000đ/m²\n• Rèm tổ ong ngăn điều hòa + lưới muỗi: từ 880.000đ/m²\n• Chiếu trúc hạt mát: từ 680.000đ\n\nAnh/chị đang quan tâm mặt hàng nào, cho em xin kích thước để em báo giá chuẩn xác nhất kèm ưu đãi giảm giá hôm nay nhé!`,
        actionType: 'view_catalog',
      };
    }

    // Default polite response
    return {
      text: `Dạ cảm ơn anh/chị đã quan tâm Cửa hàng Tuyến Hoa (Chợ Cháy - Ứng Hòa - Hotline: 0344727528).\n\nHiện bên em đang có chương trình: Miễn phí công thợ khảo sát & mang mẫu đo đạc tại nhà, tặng kèm gối hoặc phụ kiện khi lắp đặt trọn gói. Anh/chị cần tư vấn đệm (Vikosan, Sông Hồng, Everon), rèm cửa hay chiếu trúc thì nhắn em hỗ trợ ngay nhé ạ!`,
      products: PRODUCTS.slice(0, 2),
      actionType: 'call',
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Vừa xong',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const response = generateStoreAnswer(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: 'Vừa xong',
        suggestedProducts: response.products,
        actionType: response.actionType,
        actionData: response.actionData,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleQuickQuestionClick = (q: string) => {
    handleSend(q);
  };

  return (
    <>
      {/* Floating Trigger Button (Desktop only: on mobile, users access Chat via bottom bar and top announcement) */}
      {!isOpen && (
        <aside aria-label="Nút mở khung chat tư vấn Tuyến Hoa" className="hidden md:block">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            type="button"
            className="fixed bottom-6 right-6 z-40 bg-stone-900 text-white px-4 py-3 rounded-full shadow-2xl border-2 border-amber-400/80 flex items-center gap-2 group hover:bg-stone-800 transition-all cursor-pointer"
            title="Chat tư vấn cùng Tuyến Hoa"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-amber-300" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              )}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold leading-tight flex items-center gap-1 text-amber-200">
                Chat Tư Vấn Tuyến Hoa
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-stone-300">Báo giá đệm & rèm 24/7</span>
            </div>
          </motion.button>
        </aside>
      )}

      {/* Main Chat Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-4 sm:pr-6 pointer-events-none">
            {/* Backdrop on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs pointer-events-auto sm:hidden"
            />

            {/* Chat Box Panel */}
            <motion.section
              aria-label="Khung trò chuyện tư vấn Tuyến Hoa"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full sm:max-w-md h-[90vh] sm:h-[620px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-300/40 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-amber-300" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-stone-900" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold tracking-tight text-white font-display">
                        Tư Vấn Viên Tuyến Hoa
                      </h3>
                      <span className="text-[9px] bg-amber-500/30 text-amber-300 px-1.5 py-0.2 rounded font-semibold">
                        Chợ Cháy
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-300 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-amber-400" />
                      Ứng Hòa, Hà Nội · Hotline: {STORE_INFO.hotlineDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <a
                    href={`tel:${STORE_INFO.hotline}`}
                    className="p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
                    title="Gọi ngay 0344727528"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Đóng khung chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Trust Tag Strip */}
              <div className="bg-amber-50/90 border-b border-amber-100 px-3 py-1.5 flex items-center justify-between text-[11px] text-amber-950 shrink-0">
                <span className="flex items-center gap-1 font-medium">
                  <Ruler className="w-3.5 h-3.5 text-amber-700" />
                  Miễn phí đo mẫu tại nhà Ứng Hòa
                </span>
                <span className="flex items-center gap-1 font-bold text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Chính hãng
                </span>
              </div>

              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 bg-stone-50/70">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 sm:p-3.5 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-stone-900 text-white rounded-br-xs shadow-xs'
                          : 'bg-white text-stone-800 border border-stone-200/90 rounded-bl-xs shadow-xs whitespace-pre-line'
                      }`}
                    >
                      {msg.text}

                      {/* Action buttons inside bot bubble */}
                      {msg.actionType === 'measurement' && onRequestMeasurement && (
                        <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              onRequestMeasurement(
                                msg.actionData || 'Rèm cửa & Đệm',
                                'Khách hẹn tư vấn mang mẫu qua chatbox Tuyến Hoa'
                              );
                              onClose();
                            }}
                            className="px-3 py-1.5 bg-amber-900 hover:bg-amber-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                          >
                            <Ruler className="w-3.5 h-3.5" />
                            <span>Đặt thợ mang mẫu đo tại nhà</span>
                          </button>
                        </div>
                      )}

                      {msg.actionType === 'call' && (
                        <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center gap-2">
                          <a
                            href={`tel:${STORE_INFO.hotline}`}
                            className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Gọi Hotline: {STORE_INFO.hotlineDisplay}</span>
                          </a>
                        </div>
                      )}

                      {/* Product recommendation card */}
                      {msg.suggestedProducts && msg.suggestedProducts.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-stone-100 space-y-2">
                          <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                            Sản phẩm nổi bật liên quan:
                          </p>
                          <div className="space-y-1.5">
                            {msg.suggestedProducts.map((p) => (
                              <div
                                key={p.id}
                                onClick={() => {
                                  if (onSelectProduct) {
                                    onSelectProduct(p);
                                    onClose();
                                  }
                                }}
                                className="group flex items-center justify-between p-2 rounded-xl bg-stone-50 hover:bg-amber-50/80 border border-stone-200 transition-all cursor-pointer"
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-10 h-10 rounded-lg object-cover border border-stone-200 shrink-0"
                                  />
                                  <div className="truncate text-left">
                                    <div className="text-xs font-bold text-stone-900 truncate group-hover:text-amber-950">
                                      {p.name}
                                    </div>
                                    <div className="text-[11px] text-amber-900 font-mono font-bold">
                                      {p.variants[0]?.price.toLocaleString('vi-VN')} đ
                                    </div>
                                  </div>
                                </div>
                                <span className="text-[10px] text-stone-500 group-hover:text-amber-900 flex items-center gap-0.5 shrink-0 pl-1 font-semibold">
                                  Xem <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-stone-400 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-2xl rounded-bl-xs px-3.5 py-2.5 w-fit shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] text-stone-500 ml-1">Tuyến Hoa đang soạn câu trả lời...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="p-2 border-t border-stone-200 bg-white/95 overflow-x-auto scrollbar-none shrink-0">
                <div className="flex items-center gap-1.5 min-w-max">
                  {QUICK_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickQuestionClick(q)}
                      className="px-2.5 py-1 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-950 rounded-lg text-[11px] font-medium transition-colors border border-stone-200/80 whitespace-nowrap"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-white border-t border-stone-200 shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Hỏi giá đệm Vikosan, rèm vải, chiếu trúc..."
                    className="flex-1 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:border-amber-900 focus:bg-white transition-all min-h-[42px]"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="min-h-[42px] px-3.5 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-200 disabled:text-stone-400 text-white rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-xs"
                    aria-label="Gửi tin nhắn"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <div className="flex items-center justify-between text-[10px] text-stone-400 mt-1.5 px-1">
                  <span>Dữ liệu thực tế Cửa hàng Tuyến Hoa</span>
                  <span>Hotline: 0344727528</span>
                </div>
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
