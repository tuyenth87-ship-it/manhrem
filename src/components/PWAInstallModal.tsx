import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import {
  Smartphone,
  Download,
  Share,
  PlusSquare,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const ok = await install();
      if (ok) {
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.96 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col z-10 max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-300/40 p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src="/assets/aistudio/20261017_162136_c08f9065.jpg"
                  alt="App Icon Tuyến Hoa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[38%_32%] scale-115 rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-bold font-display text-white">
                    App Tuyến Hoa Mobile
                  </h3>
                  <span className="text-[9px] bg-amber-400 text-stone-950 px-1.5 py-0.2 rounded font-bold uppercase">
                    PWA App
                  </span>
                </div>
                <p className="text-[11px] text-stone-300">
                  Cài đặt trực tiếp lên màn hình điện thoại
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 space-y-4 overflow-y-auto text-stone-800 text-xs sm:text-sm">
            {/* Value props */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 space-y-2">
              <div className="font-bold text-amber-950 flex items-center gap-1.5 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Trải nghiệm mượt mà như ứng dụng di động:</span>
              </div>
              <ul className="space-y-1.5 text-stone-700 text-xs">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mở 1 chạm trên màn hình chính, không cần nhập link</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tra giá đệm, tính giá rèm, gọi thợ đo tận nhà 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dung lượng siêu nhẹ (dưới 2MB), không tốn bộ nhớ máy</span>
                </li>
              </ul>
            </div>

            {/* Android / Chromium One-Click Direct Flow */}
            {isInstallable && (
              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={handleInstallClick}
                  className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all text-sm min-h-[48px]"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>Cài Đặt Lên Màn Hình Ngay (1 Chạm)</span>
                </button>
                <p className="text-[11px] text-stone-400 text-center">
                  Hỗ trợ Android, Chrome, Edge và trình duyệt Chromium
                </p>
              </div>
            )}

            {/* iOS Safari Guided Flow */}
            {isIOS && (
              <div className="space-y-3 pt-1">
                <div className="text-xs font-bold text-stone-900">
                  Hướng dẫn cài đặt trên iPhone / iPad (Safari):
                </div>

                <div className="space-y-2.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900">
                        Bấm nút <span className="font-bold text-sky-700">Chia sẻ</span> ở thanh dưới cùng Safari
                      </p>
                      <p className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                        (Biểu tượng ô vuông mũi tên hướng lên <Share className="w-3.5 h-3.5 text-sky-600 inline" />)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900">
                        Cuộn xuống và chọn <span className="font-bold text-amber-900">"Thêm vào MH chính"</span>
                      </p>
                      <p className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                        (Hoặc "Add to Home Screen" <PlusSquare className="w-3.5 h-3.5 text-stone-700 inline" />)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900">
                        Bấm nút <span className="font-bold text-emerald-700">"Thêm" (Add)</span> ở góc trên bên phải
                      </p>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Icon Tuyến Hoa sẽ xuất hiện ngay ngoài màn hình iPhone của bạn!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* General instructions if not Android beforeinstallprompt or not iOS */}
            {!isInstallable && !isIOS && (
              <div className="space-y-3 pt-1">
                <div className="text-xs font-bold text-stone-900">
                  Cách thêm vào màn hình chính trên mọi thiết bị:
                </div>
                <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 space-y-2 text-xs text-stone-700">
                  <p>
                    1. Bấm vào nút <strong>Menu (3 dấu chấm)</strong> ở góc trên trình duyệt.
                  </p>
                  <p>
                    2. Chọn mục <strong>"Cài đặt ứng dụng"</strong> hoặc <strong>"Thêm vào màn hình chính"</strong>.
                  </p>
                  <p>
                    3. Xác nhận để đưa icon <strong>Tuyến Hoa</strong> ra màn hình điện thoại.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
            <span className="text-[11px] text-stone-500">
              Hotline Tuyến Hoa: <strong>{STORE_INFO.hotlineDisplay}</strong>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl text-xs font-semibold transition-colors"
            >
              Đóng lại
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
