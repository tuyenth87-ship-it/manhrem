import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_PROMPT = `
Bạn là "Trợ lý ảo Tuyến Hoa" - chuyên gia tư vấn tận tâm của Cửa Hàng Mành Rèm, Chăn Ga Gối Đệm Tuyến Hoa tại Chợ Cháy, Huyện Ứng Hòa, Hà Nội.
Hotline & Zalo liên hệ: 0344727528 (hoặc 0344.727.528).

THÔNG TIN VỀ CỬA HÀNG TUYẾN HOA:
- Địa chỉ: Khu vực trung tâm Chợ Cháy, Huyện Ứng Hòa, Thành phố Hà Nội.
- Giờ mở cửa: 06:30 đến 21:00 hàng ngày, kể cả thứ 7, Chủ Nhật và ngày lễ.
- Dịch vụ đặc biệt: Thợ Tuyến Hoa nhận MANG MẪU VẢI RÈM, ĐỆM VÀ CHIẾU TRỰC TIẾP ĐẾN TẬN NHÀ tại tất cả các xã thuộc Ứng Hòa (Trầm Lộng, Đồng Tân, Vạn Thái, Hòa Nam, Hòa Xá, Vân Đình, Kim Đường, v.v.) để đo đạc, khảo sát kích thước và tư vấn phối màu miễn phí 100%.
- Cam kết: Hàng chính hãng 100% nguyên tem mác, đền gấp 10 lần nếu phát hiện hàng giả; giao hàng tận nhà, kê đệm tận giường kiểm tra ưng ý mới thanh toán (COD); miễn phí vận chuyển trong huyện Ứng Hòa.

BẢNG GIÁ VÀ CÁC SẢN PHẨM CÔNG KHAI CỦA TUYẾN HOA:
1. ĐỆM BÔNG ÉP & CAO SU:
- Đệm bông ép Vikosan Nano kháng khuẩn (Hàn Quốc): Giá từ 1.350.000đ (1m2x1m9x5cm) đến 3.150.000đ (1m8x2mx14cm). Bảo hành 5 năm. Thiết kế gập 3 tấm, nằm phẳng lưng không đau cột sống, vỏ gấm Valize.
- Đệm Sông Hồng bông tinh khiết thế hệ 3 & Back Essential: Giá từ 2.380.000đ (1m2x1m9x10cm) đến 5.450.000đ (1m8x2mx20cm Back Essential). Bảo hành 5 năm, tem chống giả cào SMS. Kết hợp foam đàn hồi êm ái nâng đỡ 5 vùng cơ thể.
- Đệm Everon Ceramic & Than hoạt tính: Giá từ 3.390.000đ đến 4.950.000đ. Bảo hành 5 năm. Khử mùi nấm mốc, phát tia hồng ngoại xa tốt cho tuần hoàn máu.
- Đệm cao su thiên nhiên 100% Kymdan Deluxe kháng cháy: Giá từ 15.600.000đ (1m4x2mx5cm) đến 34.200.000đ (1m8x2mx15cm). Bảo hành 15 năm chính hãng Kymdan. Đỉnh cao êm ái, nâng đỡ chuẩn y khoa.

2. MÀNH RÈM CỬA CHUYÊN NGHIỆP:
- Rèm vải 2 lớp cản sáng 100% (Gấm thô cản nhiệt + Voan xước trắng): Giá từ 680.000đ đến 1.080.000đ/mét ngang hoàn thiện (đã gồm 2 lớp, thanh ray nhôm tĩnh âm, phụ kiện và công may lắp tận nhà tại Ứng Hòa).
- Rèm cầu vồng Hàn Quốc Modero (Combi Blinds): Giá từ 480.000đ đến 780.000đ/m2 tùy độ cản sáng (85%, 95% hoặc Blackout 100%). Điều chỉnh lấy sáng 180 độ so le.
- Rèm tổ ong kết hợp lưới chống muỗi 2 trong 1 (Hệ xích không ray sàn): Giá từ 1.150.000đ đến 1.450.000đ/m2. Vừa cản 100% hơi lạnh điều hòa vừa ngăn muỗi côn trùng chuột bọ, không vấp ngã.
- Rèm sáo gỗ tự nhiên Basswood bản 35mm - 50mm: Giá từ 590.000đ đến 790.000đ/m2. Sơn UV chống cong vênh mối mọt.
- Rèm sáo nhôm chống ẩm bản 25mm: Giá từ 260.000đ đến 310.000đ/m2 (cho phòng tắm, bếp).

3. MÀNH & CHIẾU TRUYỀN THỐNG:
- Chiếu trúc hạt Hương Trúc / Cao Sơn xuất khẩu loại 1: Giá từ 620.000đ (1m2) đến 1.180.000đ (2mx2m2). Hạt chuốt bóng mịn không hóa chất, cước đôi dẻo dai nằm mát sâu.
- Chiếu mây đan điều hòa Shikada / Muji lưới 3D: Giá từ 420.000đ đến 720.000đ. Êm ái, tặng kèm vỏ gối mây.
- Mành tre trúc che nắng mưa ban công sân vườn sơn PU bóng: Giá từ 175.000đ đến 235.000đ/m2, kèm bộ ròng rọc kéo.
- Mành tăm tre phòng thờ phong thủy: 240.000đ - 280.000đ/m2.

4. CHĂN GA GỐI:
- Bộ chăn ga gối lụa Tencel 60s thêu hoàng gia (Set 5 món): 1.250.000đ - 1.650.000đ.
- Ruột gối cao su non chống mỏi vai gáy định hình: 280.000đ/chiếc (combo 2 chiếc 520.000đ).
- Ruột chăn bông tinh khiết Sông Hồng siêu nhẹ: 480.000đ - 620.000đ.

QUY TẮC TRẢ LỜI CỦA BẠN:
- Luôn giữ thái độ thân thiện, niềm nở, gần gũi, xưng hô lịch thiệp ("Dạ, Tuyến Hoa xin chào quý khách", "Em/Cháu chào anh/chị/cô/chú").
- Báo giá cụ thể, công khai theo dữ liệu trên, giải thích rõ ưu điểm của từng loại để khách dễ chọn.
- Nhắc khách có thể gọi trực tiếp hoặc nhắn Zalo 0344727528 để hẹn thợ mang mẫu đến tận nhà đo đạc miễn phí tại khu vực Ứng Hòa.
- Trả lời ngắn gọn, súc tích, định dạng gạch đầu dòng rõ ràng, dễ đọc trên màn hình điện thoại.
`;

// Fallback intelligent answer generator if GEMINI_API_KEY is not configured or fails
function getLocalFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('giá') && (q.includes('đệm') || q.includes('nệm'))) {
    return `Dạ Cửa hàng Tuyến Hoa xin gửi tới quý khách bảng giá đệm chính hãng công khai:
- Đệm bông ép Vikosan Nano (Hàn Quốc): 1.350.000đ – 3.150.000đ (bảo hành 5 năm, gập 3 tấm, nằm thẳng lưng chống đau cột sống).
- Đệm Sông Hồng bông tinh khiết thế hệ 3: 2.380.000đ – 5.450.000đ (bảo hành 5 năm, đàn hồi êm ái nâng đỡ 5 vùng).
- Đệm Everon than hoạt tính / Ceramic: 3.390.000đ – 4.950.000đ (khử mùi ẩm mốc, phát tia hồng ngoại).
- Đệm cao su thiên nhiên 100% Kymdan Deluxe: 15.600.000đ – 34.200.000đ (bảo hành 15 năm, nâng đỡ chuẩn y khoa).

Quý khách cần kích thước bao nhiêu (1m6x2m hay 1m8x2m)? Gọi ngay Hotline/Zalo 0344727528 để Tuyến Hoa giao đệm tận giường miễn phí tại Ứng Hòa ạ!`;
  }

  if (q.includes('rèm') || q.includes('mành')) {
    return `Dạ Cửa hàng Tuyến Hoa chuyên thi công các loại mành rèm cao cấp tại Ứng Hòa:
- Rèm vải 2 lớp cản sáng 100% (Gấm Nhật + Voan trắng): 680.000đ – 1.080.000đ / mét ngang hoàn thiện (đã gồm thanh ray và công may lắp).
- Rèm cầu vồng Hàn Quốc Modero: 480.000đ – 780.000đ / m² (so le lấy sáng 180° hiện đại).
- Rèm tổ ong kết hợp lưới chống muỗi 2 trong 1: 1.150.000đ – 1.450.000đ / m² (vừa cản nhiệt điều hòa vừa ngăn muỗi, xích không ray).
- Rèm sáo gỗ tự nhiên Basswood: 590.000đ – 790.000đ / m².
- Mành tre trúc che ban công ngoài trời sơn PU: 175.000đ – 235.000đ / m².

Thợ Tuyến Hoa nhận mang mẫu vải và cây rèm mẫu đến tận nhà đo đạc khảo sát miễn phí. Quý khách liên hệ Hotline/Zalo 0344727528 nhé ạ!`;
  }

  if (q.includes('địa chỉ') || q.includes('ở đâu') || q.includes('chợ cháy')) {
    return `Dạ Cửa hàng Tuyến Hoa nằm ngay tại khu vực trung tâm Chợ Cháy, Huyện Ứng Hòa, Thành phố Hà Nội.
Cửa hàng mở cửa từ 06:30 đến 21:00 tất cả các ngày trong tuần.
Nếu quý khách bận rộn không tiện qua trực tiếp, thợ Tuyến Hoa có dịch vụ mang mẫu vải rèm và đệm đến tận nhà quý khách tại tất cả các xã thuộc Ứng Hòa để đo đạc và tư vấn miễn phí 100%. Hotline/Zalo hỗ trợ: 0344727528.`;
  }

  if (q.includes('chiếu') || q.includes('chiếu trúc') || q.includes('mây')) {
    return `Dạ Tuyến Hoa có sẵn các mẫu chiếu mát giải nhiệt mùa hè:
- Chiếu trúc hạt Hương Trúc / Cao Sơn xuất khẩu loại 1: Giá 620.000đ – 1.180.000đ (tre già chuốt bóng, cước đôi siêu dai, nằm mát rượi).
- Chiếu mây đan điều hòa Shikada / Muji lót lưới 3D: Giá 420.000đ – 720.000đ (êm ái, tặng kèm vỏ gối mây).

Quý khách nhắn tin hoặc gọi Hotline/Zalo 0344727528 để được giao hàng tận nhà kiểm tra mới trả tiền ạ!`;
  }

  if (q.includes('đo') || q.includes('lắp') || q.includes('khảo sát')) {
    return `Dạ có ạ! Cửa hàng Tuyến Hoa có đội thợ chuyên nghiệp trực tiếp mang thước đo và catalogue mẫu vải rèm, đệm đến tận nhà quý khách tại Ứng Hòa (Trầm Lộng, Đồng Tân, Vạn Thái, Vân Đình...) để khảo sát và báo giá chính xác hoàn toàn MIỄN PHÍ.
Quý khách chỉ cần để lại số điện thoại hoặc gọi ngay Hotline 0344727528 để hẹn lịch thợ qua nhé ạ!`;
  }

  return `Dạ Cửa hàng Tuyến Hoa (Chợ Cháy, Ứng Hòa, Hà Nội - Hotline: 0344727528) xin lắng nghe ạ!
Tuyến Hoa chuyên cung cấp:
- Đệm bông ép & cao su: Vikosan, Sông Hồng, Everon, Kymdan
- Mành rèm cửa: Rèm vải 2 lớp, rèm cầu vồng Hàn Quốc, rèm tổ ong chống muỗi 2in1, rèm sáo gỗ
- Chiếu trúc hạt Hương Trúc, chiếu mây Shikada, mành tre ngoài trời ban công
- Chăn ga gối Lụa Tencel 60s, ruột chăn Sông Hồng, gối cao su non

Quý khách đang quan tâm đến sản phẩm nào để Tuyến Hoa tư vấn chi tiết và báo giá tốt nhất cho mình ạ?`;
}

// API Route for AI Chat
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Check if GEMINI_API_KEY is available
    if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY') {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: message,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            temperature: 0.7,
          },
        });

        const reply = response.text || getLocalFallbackResponse(message);
        res.json({ reply });
        return;
      } catch (geminiError) {
        console.warn('Gemini API call warning, using store fallback:', geminiError);
        // Fallback to high quality store answer
        const reply = getLocalFallbackResponse(message);
        res.json({ reply });
        return;
      }
    } else {
      // Local intelligent response
      const reply = getLocalFallbackResponse(message);
      res.json({ reply });
      return;
    }
  } catch (error) {
    console.error('Error handling chat:', error);
    res.status(500).json({
      reply: 'Dạ xin lỗi quý khách, hệ thống đang bận một chút. Quý khách vui lòng gọi trực tiếp Hotline Tuyến Hoa: 0344727528 để được hỗ trợ tức thì ạ!',
    });
  }
});

// Serve frontend in production or integrate Vite in development
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Vite dev middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

startServer();
