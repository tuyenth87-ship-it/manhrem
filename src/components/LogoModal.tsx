import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Sparkles, CheckCircle2, ShieldCheck, Phone, MapPin } from 'lucide-react';
import { OWNER_PHOTO } from './BrandLogo';
import { STORE_INFO } from '../data/products';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  if (!isOpen) return null;

  const handleDownloadLogo = () => {
    // Generate high-res circular badge on canvas and trigger download
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw luxury background circle
    const centerX = 400;
    const centerY = 400;

    // Gradient background
    const bgGrad = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, 400);
    bgGrad.addColorStop(0, '#292524');
    bgGrad.addColorStop(1, '#0C0A09');
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 380, 0, Math.PI * 2);
    ctx.fill();

    // Outer gold ring
    const goldGrad = ctx.createLinearGradient(100, 100, 700, 700);
    goldGrad.addColorStop(0, '#FDE68A');
    goldGrad.addColorStop(0.35, '#F59E0B');
    goldGrad.addColorStop(0.7, '#D97706');
    goldGrad.addColorStop(1, '#92400E');

    ctx.strokeStyle = goldGrad;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 370, 0, Math.PI * 2);
    ctx.stroke();

    // Dashed inner ring
    ctx.setLineDash([12, 10]);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#FBBF24';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 350, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw user portrait
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Inner circle clip for photo
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, 310, 175, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, 150, 60, 500, 500);
      ctx.restore();

      // Border around photo
      ctx.strokeStyle = goldGrad;
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(centerX, 310, 175, 0, Math.PI * 2);
      ctx.stroke();

      // Bottom Ribbon
      ctx.fillStyle = '#1C1917';
      ctx.strokeStyle = goldGrad;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(140, 505, 520, 72, 36);
      ctx.fill();
      ctx.stroke();

      // Text TUYẾN HOA
      ctx.fillStyle = '#FDE68A';
      ctx.font = 'bold 44px Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText('TUYẾN HOA', centerX, 556);

      // Subtitle RÈM • CHĂN • ĐỆM
      ctx.fillStyle = '#F59E0B';
      ctx.font = 'bold 24px system-ui, sans-serif';
      ctx.fillText('RÈM • CHĂN • ĐỆM', centerX, 625);

      // Subtitle Location
      ctx.fillStyle = '#A8A29E';
      ctx.font = '500 18px system-ui, sans-serif';
      ctx.fillText('CHỢ CHÁY · ỨNG HÒA · HÀ NỘI', centerX, 665);

      // Download
      const link = document.createElement('a');
      link.download = 'logo_rem_chan_dem_tuyen_hoa.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = OWNER_PHOTO;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col z-10 max-h-[92vh]"
        >
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-white">
                  Logo Thương Hiệu Tuyến Hoa
                </h3>
                <p className="text-xs text-stone-400">
                  Thiết kế theo hình ảnh chính thức của anh Tuyến
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Logo Showcase Area */}
          <div className="p-6 space-y-6 overflow-y-auto">
            {/* Dark Background Emblem Presentation */}
            <div className="bg-gradient-to-b from-stone-950 via-stone-900 to-black p-6 sm:p-8 rounded-3xl border border-stone-800 flex flex-col items-center justify-center shadow-xl text-center relative overflow-hidden">
              {/* Subtle radial glow */}
              <div className="absolute w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

              {/* Medallion Frame */}
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-amber-600 via-amber-200 to-amber-700 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-stone-900 relative shadow-inner">
                    <img
                      src={OWNER_PHOTO}
                      alt="Logo Rèm Chăn Đệm Tuyến Hoa"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[38%_32%] scale-110"
                    />
                  </div>
                </div>

                {/* Verified Craftsman Badge */}
                <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-emerald-500 border-3 border-stone-900 flex items-center justify-center text-white shadow-lg" title="Thợ chính đo đạc & may đo tận nơi">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              {/* Typography Badge */}
              <div className="mt-5 space-y-1 relative z-10">
                <div className="inline-block px-5 py-1.5 rounded-full bg-black/80 border border-amber-400/80 shadow-md">
                  <span className="text-xl sm:text-2xl font-display font-bold text-amber-200 tracking-wider">
                    TUYẾN HOA
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest pt-1">
                  RÈM • CHĂN • ĐỆM
                </div>
                <div className="text-[11px] text-stone-400 font-medium">
                  Chợ Cháy · Huyện Ứng Hòa · Hà Nội
                </div>
              </div>
            </div>

            {/* Information & Features */}
            <div className="space-y-2.5 text-xs text-stone-700 bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Ý nghĩa logo thương hiệu Tuyến Hoa:</span>
              </div>
              <ul className="space-y-1.5 pl-5 list-disc text-stone-700">
                <li>
                  <strong>Chân thực &amp; Thân thiện:</strong> Sử dụng hình ảnh nụ cười của anh Tuyến sau khi hoàn thiện công trình rèm cửa cho khách hàng Ứng Hòa.
                </li>
                <li>
                  <strong>Đầy đủ ngành hàng:</strong> Nội dung chữ in rõ <em>"Rèm • Chăn • Đệm"</em> để khách hàng nhận diện ngay các dịch vụ của cửa hàng.
                </li>
                <li>
                  <strong>Đồng bộ toàn diện:</strong> Logo đã được dán lên thanh tiêu đề (Navbar máy tính &amp; điện thoại), menu ngăn kéo, chân trang web và app di động.
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="button"
                onClick={handleDownloadLogo}
                className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Tải Logo Về Máy (File PNG Độ Nét Cao)</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
