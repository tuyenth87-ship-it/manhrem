import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Smartphone,
  Wifi,
  BatteryCharging,
  Volume2,
  VolumeX,
  Sliders,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
  Ruler,
  Mic,
  Sun,
  Moon,
  Film,
  Zap,
  Globe,
  Video,
  ChevronRight,
  RotateCcw,
  Hand,
} from 'lucide-react';
import {
  SHADE_STORE_ANALYSIS,
  MOTORIZED_VIDEO_DEMOS,
  MOTORIZED_CURTAIN_PRODUCTS,
  SMART_MOTOR_OPTIONS,
  MotorizedSystemCategory,
  MotorizedCurtainProduct,
  calculateMotorizedCurtainQuote,
  filterMotorizedSystems,
  getSmartSchedulePresetPosition,
} from '../data/motorizedCurtains';
import { CartItem } from '../types/store';
import { STORE_INFO } from '../data/products';

interface MotorizedCurtainShowcaseProps {
  onAddToCart: (item: CartItem) => void;
  onRequestMeasurement: (curtainType: string, note: string) => void;
  onShowToast?: (msg: string) => void;
}

const CATEGORY_TABS: { id: MotorizedSystemCategory; label: string }[] = [
  { id: 'all', label: 'Tất Cả Hệ Rèm Tự Động (6)' },
  { id: 'drapery', label: 'Rèm Vải Kéo Ngang Tự Động' },
  { id: 'roller-zebra', label: 'Rèm Cuốn & Cầu Vồng Pin Sạc' },
  { id: 'roman', label: 'Rèm Roman Xếp Lớp Tự Động' },
  { id: 'cellular-skylight', label: 'Rèm Tổ Ong & Giếng Trời' },
  { id: 'motors', label: 'Động Cơ Somfy / Aqara / Tuya' },
];

export const MotorizedCurtainShowcase: React.FC<MotorizedCurtainShowcaseProps> = ({
  onAddToCart,
  onRequestMeasurement,
  onShowToast,
}) => {
  // Video & Interactive Motion Studio state
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const activeVideo = MOTORIZED_VIDEO_DEMOS[activeVideoIndex] || MOTORIZED_VIDEO_DEMOS[0];

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [curtainClosedPercent, setCurtainClosedPercent] = useState<number>(activeVideo.defaultOpenPercent);
  const [sheerClosedPercent, setSheerClosedPercent] = useState<number>(activeVideo.defaultSheerPercent);
  const [targetCurtainPercent, setTargetCurtainPercent] = useState<number>(activeVideo.defaultOpenPercent);
  const [targetSheerPercent, setTargetSheerPercent] = useState<number>(activeVideo.defaultSheerPercent);
  const [motorStatusText, setMotorStatusText] = useState<string>(
    'Động cơ đang ở chế độ chờ — Bấm Remote, kéo thanh trượt App hoặc chọn Kịch bản để xem rèm chạy thực tế'
  );
  const [activeVoiceCommand, setActiveVoiceCommand] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Filter state for products
  const [selectedCategory, setSelectedCategory] = useState<MotorizedSystemCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Quote Calculator state
  const [quoteWidth, setQuoteWidth] = useState<number>(3.0);
  const [quoteFabricOption, setQuoteFabricOption] = useState<'single-600k' | 'double-850k' | 'none'>('single-600k');
  const [quoteMotorId, setQuoteMotorId] = useState<string>('motor-tuya-wifi');
  const [quoteDualMotor, setQuoteDualMotor] = useState<boolean>(false);

  // Sync defaults when switching video demo
  const handleSelectVideoDemo = (idx: number) => {
    const nextVid = MOTORIZED_VIDEO_DEMOS[idx];
    if (!nextVid) return;
    setActiveVideoIndex(idx);
    setTargetCurtainPercent(nextVid.defaultOpenPercent);
    setTargetSheerPercent(nextVid.defaultSheerPercent);
    setIsPlaying(true);
    setMotorStatusText(`Đang trình chiếu: ${nextVid.title} (${nextVid.motorModel} • ${nextVid.noiseLevelDb}dB)`);
  };

  // Smoothly animate curtainClosedPercent & sheerClosedPercent toward targets
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurtainClosedPercent((prev) => {
        if (Math.abs(prev - targetCurtainPercent) <= 1) return targetCurtainPercent;
        return prev < targetCurtainPercent ? prev + 2 : prev - 2;
      });
      setSheerClosedPercent((prev) => {
        if (Math.abs(prev - targetSheerPercent) <= 1) return targetSheerPercent;
        return prev < targetSheerPercent ? prev + 2 : prev - 2;
      });
    }, 35);
    return () => clearInterval(interval);
  }, [targetCurtainPercent, targetSheerPercent, isPlaying]);

  // Control HTML5 video element play/pause
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = isMuted;
    if (isPlaying) {
      vid.play().catch(() => {
        // Fallback if autoplay blocked or stream offline
      });
    } else {
      vid.pause();
    }
  }, [isPlaying, isMuted, activeVideoIndex]);

  const triggerRemoteCommand = (newCurtainTarget: number, newSheerTarget: number, label: string) => {
    setIsPlaying(true);
    setTargetCurtainPercent(newCurtainTarget);
    setTargetSheerPercent(newSheerTarget);
    setMotorStatusText(label);
    if (onShowToast) {
      onShowToast(label);
    }
  };

  const handleStopMotor = () => {
    setTargetCurtainPercent(curtainClosedPercent);
    setTargetSheerPercent(sheerClosedPercent);
    setMotorStatusText(`Đã dừng động cơ tại vị trí ${curtainClosedPercent}% (Khóa hành trình êm)`);
  };

  const handleTouchMotionDemo = () => {
    const nextTarget = curtainClosedPercent > 50 ? 0 : 100;
    setIsPlaying(true);
    setTargetCurtainPercent(nextTarget);
    setMotorStatusText(
      `Cảm biến Touch-Motion kích hoạt: Kéo nhẹ tay 5cm -> Động cơ tự trượt ${
        nextTarget === 100 ? 'ĐÓNG KÍN 100%' : 'MỞ TOÀN BỘ 0%'
      }`
    );
    if (onShowToast) {
      onShowToast('Đã kích hoạt cảm biến Kéo Nhẹ Tự Chạy (Touch-Motion)');
    }
  };

  const handleVoiceCommand = (phrase: string, sceneKey: 'morning-sunrise' | 'noon-uv-shield' | 'evening-cinema' | 'night-sleep' | 'full-open') => {
    setActiveVoiceCommand(phrase);
    const preset = getSmartSchedulePresetPosition(sceneKey);
    setIsPlaying(true);
    setTargetCurtainPercent(preset.curtainClosedPercent);
    setTargetSheerPercent(preset.sheerClosedPercent);
    setMotorStatusText(`Giọng nói "${phrase}" -> ${preset.sceneLabel}`);
    setTimeout(() => setActiveVoiceCommand(null), 3500);
  };

  const filteredProducts = filterMotorizedSystems(MOTORIZED_CURTAIN_PRODUCTS, selectedCategory, searchQuery);

  const quoteResult = calculateMotorizedCurtainQuote({
    widthMeters: quoteWidth,
    fabricOption: quoteFabricOption,
    motorId: quoteMotorId,
    isDualLayerMotor: quoteDualMotor,
  });

  const handleAddProductToCart = (product: MotorizedCurtainProduct) => {
    onAddToCart({
      productId: product.id,
      productName: product.name,
      variantId: product.code,
      variantName: `${product.motorBrand} (${product.powerType})`,
      size: product.unit,
      price: product.price,
      quantity: 1,
      category: 'rem-cua',
      customNote: `Chuẩn công nghệ ${product.shadeStoreEquivalent} - Độ ồn ${product.noiseDb}`,
    });
  };

  const handleAddQuoteToCart = () => {
    onAddToCart({
      productId: `custom-motorized-${quoteMotorId}`,
      productName: `Bộ Rèm Tự Động Thiết Kế Riêng (Rộng ${quoteResult.widthMeters}m)`,
      variantId: `${quoteFabricOption}-${quoteMotorId}-${quoteDualMotor ? '2ray' : '1ray'}`,
      variantName: quoteResult.motorName,
      size: `Rộng ${quoteResult.widthMeters}m (${quoteResult.motorCount} ray điện)`,
      price: quoteResult.totalPrice,
      quantity: 1,
      category: 'rem-cua',
      customNote: quoteResult.breakdownSummary,
    });
  };

  return (
    <section
      aria-label="Chuyên trang Rèm Tự Động Thông Minh The Shade Store & Tuyến Hoa"
      className="space-y-8 md:space-y-12"
    >
      {/* 1. HERO & ARCHITECTURAL ANALYSIS OF THE SHADE STORE (USA) */}
      <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
            <Globe className="w-3.5 h-3.5" />
            <span>PHÂN TÍCH CÔNG NGHỆ THE SHADE STORE (MỸ) × MÀNH RÈM TUYẾN HOA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white leading-snug">
            Rèm Tự Động Thông Minh 4.0 — Trải Nghiệm Video Thực Tế &amp; Điều Khiển Từ Xa Chuẩn Biệt Thự Mỹ
          </h2>

          <p className="text-stone-100 text-sm sm:text-base leading-relaxed">
            Từ kết quả nghiên cứu chuyên sâu hệ sinh thái mành rèm cao cấp hàng đầu Hoa Kỳ{' '}
            <span className="text-amber-300 font-bold">TheShadeStore.com</span> kết hợp cùng kho dữ liệu hình ảnh &amp;
            video rèm tự động quốc tế, <strong className="text-white font-bold">Chăn Ga Gối Đệm &amp; Mành Rèm Tuyến Hoa</strong> mang
            đến giải pháp nâng cấp động cơ thông minh cho toàn bộ dòng{' '}
            <span className="text-emerald-300 font-bold">
              Rèm vải cản nắng 600.000đ/m ngang, Rèm cầu vồng Hàn Quốc, Rèm Roman &amp; Rèm tổ ong giếng trời
            </span>{' '}
            tại Ứng Hòa – Hà Nội và toàn quốc.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
            <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
              <div className="text-amber-400 font-mono text-lg sm:text-xl font-extrabold">&lt; 26 dB</div>
              <div className="text-xs font-medium text-stone-200 mt-0.5">Động cơ siêu tĩnh âm êm như tiếng lá rơi</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
              <div className="text-emerald-400 font-mono text-lg sm:text-xl font-extrabold">Pin / 220V</div>
              <div className="text-xs font-medium text-stone-200 mt-0.5">Có bản Pin Sạc không cần đục tường đi dây</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
              <div className="text-sky-400 font-mono text-lg sm:text-xl font-extrabold">Touch-Run</div>
              <div className="text-xs font-medium text-stone-200 mt-0.5">Kéo nhẹ 5cm tự chạy • Mất điện kéo tay nhẹ</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-3">
              <div className="text-rose-400 font-mono text-lg sm:text-xl font-extrabold">600k/m Vải</div>
              <div className="text-xs font-medium text-stone-200 mt-0.5">Tích hợp ngay với vải rèm 600k/m Tuyến Hoa</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE VIDEO & LIVE SMART CURTAIN CONTROL STUDIO */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden">
        <div className="bg-stone-900 text-white px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 font-bold">
              <Video className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  LIVE INTERACTIVE VIDEO STUDIO
                </span>
                <span className="text-xs text-amber-300 font-semibold hidden sm:inline">
                  Bấm Remote hoặc Kéo App để xem rèm đóng mở trực tiếp
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Video Thực Tế &amp; Mô Phỏng Điều Khiển Rèm Tự Động Thông Minh
              </h3>
            </div>
          </div>

          {/* 4 Video Scene Selector Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {MOTORIZED_VIDEO_DEMOS.map((vid, idx) => (
              <button
                key={vid.id}
                type="button"
                onClick={() => handleSelectVideoDemo(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeVideoIndex === idx
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {vid.code}: {vid.systemType === 'drapery-dual' ? 'Rèm Vải 2 Lớp' : vid.systemType === 'zebra-combi' ? 'Rèm Cầu Vồng Pin Sạc' : vid.systemType === 'roman-fold' ? 'Rèm Roman Xếp Lớp' : 'Rèm Tổ Ong Giếng Trời'}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Main Grid: Left = Video & Synchronized Curtain Motion Viewport, Right = Smart Remote & App Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column (7 cols): Live Video + Architectural Curtain Physics Overlay */}
          <div className="lg:col-span-7 p-4 sm:p-6 bg-stone-950 flex flex-col justify-between space-y-4">
            {/* Viewport Frame */}
            <div
              data-testid="motorized-video-viewport"
              data-curtain-closed={curtainClosedPercent}
              data-sheer-closed={sheerClosedPercent}
              className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-stone-700 shadow-2xl bg-stone-900 select-none"
            >
              {/* Background Architectural Window & Real HTML5 Video Stream */}
              <img
                src={activeVideo.posterImage}
                alt={activeVideo.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
              <video
                ref={videoRef}
                key={activeVideo.videoUrl}
                src={activeVideo.videoUrl}
                poster={activeVideo.posterImage}
                loop
                muted={isMuted}
                playsInline
                autoPlay
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-35 pointer-events-none"
              />

              {/* Top Recessed Motor Track Bar */}
              <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-stone-950 via-stone-800 to-stone-900 border-b border-amber-400/40 z-20 flex items-center justify-between px-3">
                <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      curtainClosedPercent !== targetCurtainPercent || sheerClosedPercent !== targetSheerPercent
                        ? 'bg-emerald-400 animate-ping'
                        : 'bg-emerald-400'
                    }`}
                  />
                  <span>RAY ĐIỆN ÂM TRẦN: {activeVideo.motorModel}</span>
                </span>
                <span className="text-[10px] font-mono text-stone-300">
                  Độ ồn: {activeVideo.noiseLevelDb}dB • Vải đóng: {curtainClosedPercent}%
                </span>
              </div>

              {/* Dynamic Motorized Curtain / Shade Physics Layer */}
              {activeVideo.systemType === 'drapery-dual' && (
                <>
                  {/* Layer 1: Sheer Voile (Lớp Voan Trắng Xuyên Sáng) */}
                  <div
                    style={{ width: `${sheerClosedPercent / 2}%` }}
                    className="absolute top-5 bottom-0 left-0 bg-gradient-to-r from-white/75 via-stone-100/65 to-white/70 backdrop-blur-[1.5px] border-r border-white/60 transition-all duration-75 z-10 flex"
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-full border-r border-stone-300/30 bg-gradient-to-r from-white/10 via-stone-200/30 to-transparent"
                      />
                    ))}
                  </div>
                  <div
                    style={{ width: `${sheerClosedPercent / 2}%` }}
                    className="absolute top-5 bottom-0 right-0 bg-gradient-to-l from-white/75 via-stone-100/65 to-white/70 backdrop-blur-[1.5px] border-l border-white/60 transition-all duration-75 z-10 flex"
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-full border-l border-stone-300/30 bg-gradient-to-l from-white/10 via-stone-200/30 to-transparent"
                      />
                    ))}
                  </div>

                  {/* Layer 2: Ripple-Fold Blackout Drapery (Lớp Vải Gấm Cản Sáng 600k/m) */}
                  <div
                    style={{ width: `${Math.max(8, curtainClosedPercent / 2)}%` }}
                    className="absolute top-5 bottom-0 left-0 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-r-2 border-amber-400/60 shadow-2xl transition-all duration-75 z-15 flex overflow-hidden"
                  >
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-full bg-gradient-to-r from-black/45 via-stone-600/35 to-black/45 border-r border-white/5"
                      />
                    ))}
                  </div>
                  <div
                    style={{ width: `${Math.max(8, curtainClosedPercent / 2)}%` }}
                    className="absolute top-5 bottom-0 right-0 bg-gradient-to-l from-stone-900 via-stone-800 to-stone-900 border-l-2 border-amber-400/60 shadow-2xl transition-all duration-75 z-15 flex overflow-hidden"
                  >
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-full bg-gradient-to-l from-black/45 via-stone-600/35 to-black/45 border-l border-white/5"
                      />
                    ))}
                  </div>
                </>
              )}

              {activeVideo.systemType === 'zebra-combi' && (
                <div
                  style={{ height: `${Math.max(8, curtainClosedPercent)}%` }}
                  className="absolute top-5 inset-x-0 bg-stone-900/30 backdrop-blur-[1px] border-b-4 border-stone-800 shadow-2xl transition-all duration-75 z-15 flex flex-col overflow-hidden"
                >
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 w-full transition-colors ${
                        idx % 2 === 0
                          ? 'bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 opacity-95'
                          : curtainClosedPercent > 85
                          ? 'bg-stone-800/90'
                          : 'bg-white/35 backdrop-blur-[1px]'
                      }`}
                    />
                  ))}
                </div>
              )}

              {activeVideo.systemType === 'roman-fold' && (
                <div
                  style={{ height: `${Math.max(12, curtainClosedPercent)}%` }}
                  className="absolute top-5 inset-x-4 bg-gradient-to-b from-amber-900/95 via-stone-800/95 to-amber-950/95 border-b-4 border-amber-400/70 rounded-b-lg shadow-2xl transition-all duration-75 z-15 flex flex-col overflow-hidden"
                >
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="flex-1 w-full border-b border-amber-200/25 bg-gradient-to-b from-white/10 via-transparent to-black/35 shadow-inner"
                    />
                  ))}
                </div>
              )}

              {activeVideo.systemType === 'cellular-honeycomb' && (
                <div
                  style={{ height: `${Math.max(10, curtainClosedPercent)}%` }}
                  className="absolute top-5 inset-x-0 bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900 border-b-4 border-amber-500 shadow-2xl transition-all duration-75 z-15 flex flex-col overflow-hidden"
                >
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="flex-1 w-full border-b border-stone-500/40 bg-gradient-to-r from-stone-800 via-stone-600/60 to-stone-800 flex items-center justify-center"
                    >
                      <span className="text-[8px] font-mono text-amber-200/40 tracking-widest">
                        ⬡ LỚP BẠC KÉP CÁCH NHIỆT ĐIỀU HÒA 100% ⬡
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Voice Command Floating Banner */}
              {activeVoiceCommand && (
                <div className="absolute top-9 left-1/2 -translate-x-1/2 z-30 bg-stone-950/90 text-white px-4 py-2 rounded-full border border-emerald-400/60 shadow-xl flex items-center gap-2 text-xs font-semibold">
                  <Mic className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>&ldquo;{activeVoiceCommand}&rdquo;</span>
                </div>
              )}

              {/* Bottom Overlay HUD Controls */}
              <div className="absolute bottom-3 inset-x-3 z-20 flex flex-wrap items-center justify-between gap-2 bg-stone-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-white">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((p) => !p)}
                    className="w-8 h-8 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center font-bold transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Tạm dừng video mô phỏng' : 'Phát video mô phỏng'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMuted((m) => !m)}
                    className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Bật âm thanh video' : 'Tắt âm thanh video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                  <div className="text-[11px]">
                    <div className="font-bold text-amber-300 truncate max-w-[200px] sm:max-w-xs">
                      {activeVideo.code}: {activeVideo.motorModel}
                    </div>
                    <div className="text-[10px] text-stone-300 font-mono">
                      Độ đóng rèm: {curtainClosedPercent}% {activeVideo.systemType === 'drapery-dual' ? `• Lớp voan: ${sheerClosedPercent}%` : ''}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleTouchMotionDemo}
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Hand className="w-3.5 h-3.5" />
                    <span>Thử Kéo Nhẹ Tự Chạy</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Live Status Bar & Video Description */}
            <div className="bg-stone-900 rounded-2xl p-3.5 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Zap className="w-4 h-4 shrink-0" />
                <span data-testid="motor-status-readout">{motorStatusText}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">{activeVideo.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {activeVideo.technicalHighlights.map((hl, i) => (
                  <div
                    key={i}
                    className="bg-stone-950/80 border border-stone-800 rounded-xl p-2.5 text-[11px] text-stone-300 flex items-start gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Remote Control, Smartphone % Slider & Smart Scenes */}
          <div className="lg:col-span-5 p-4 sm:p-6 bg-stone-50 border-t lg:border-t-0 lg:border-l border-stone-200 flex flex-col justify-between space-y-5">
            {/* Control Block 1: Physical Wireless Remote Control */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <Wifi className="w-4 h-4 text-amber-700" />
                  <span>1. Bấm Thử Remote Điều Khiển Từ Xa</span>
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                  Sóng RF Xuyên Tường 30m
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() =>
                    triggerRemoteCommand(0, 0, 'Remote: MỞ TOÀN BỘ RÈM (0%) — Đón ánh sáng tự nhiên 100%')
                  }
                  className="p-2.5 rounded-xl border border-stone-200 hover:border-amber-600 bg-stone-50 hover:bg-amber-50 text-stone-900 text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
                >
                  <span className="text-emerald-700 font-mono text-sm">MỞ 100%</span>
                  <span className="text-[10px] text-stone-500">Kéo gọn 2 bên</span>
                </button>

                <button
                  type="button"
                  onClick={handleStopMotor}
                  className="p-2.5 rounded-xl border border-rose-200 hover:border-rose-500 bg-rose-50/70 hover:bg-rose-100 text-rose-950 text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
                >
                  <span className="text-rose-700 font-mono text-sm">TẠM DỪNG</span>
                  <span className="text-[10px] text-rose-700">Nút STOP / MY</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    triggerRemoteCommand(100, 100, 'Remote: ĐÓNG KÍN RÈM 100% — Cản nắng & cách nhiệt tuyệt đối')
                  }
                  className="p-2.5 rounded-xl border border-stone-200 hover:border-amber-600 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
                >
                  <span className="text-amber-300 font-mono text-sm">ĐÓNG KÍN</span>
                  <span className="text-[10px] text-stone-300">Cản sáng 100%</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() =>
                    triggerRemoteCommand(25, 100, 'Remote: Mở 75% rèm vải + Đóng 100% lớp voan trắng lọc nắng')
                  }
                  className="py-2 px-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-[11px] font-semibold text-stone-700 cursor-pointer"
                >
                  Khép Voan Lụa
                </button>
                <button
                  type="button"
                  onClick={() =>
                    triggerRemoteCommand(50, 50, 'Remote: Đóng rèm 50% cân đối ánh sáng phòng khách')
                  }
                  className="py-2 px-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-[11px] font-semibold text-stone-700 cursor-pointer"
                >
                  Đóng Nửa 50%
                </button>
                <button
                  type="button"
                  onClick={() =>
                    triggerRemoteCommand(75, 100, 'Remote: Đóng 75% chắn nắng hướng Tây buổi chiều')
                  }
                  className="py-2 px-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-[11px] font-semibold text-stone-700 cursor-pointer"
                >
                  Chắn Nắng 75%
                </button>
              </div>
            </div>

            {/* Control Block 2: Smartphone App Percentage Sliders */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-emerald-700" />
                  <span>2. Điều Khiển Theo % Trên App Điện Thoại</span>
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">App Tiếng Việt</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="curtain-percent-slider" className="font-semibold text-stone-700">
                    Độ đóng lớp Rèm Chính (Cản nắng 100%):
                  </label>
                  <span className="font-mono font-bold text-amber-900">{targetCurtainPercent}%</span>
                </div>
                <input
                  id="curtain-percent-slider"
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={targetCurtainPercent}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setIsPlaying(true);
                    setTargetCurtainPercent(val);
                    setMotorStatusText(`App Smartphone: Đang kéo rèm chính đến vị trí ${val}%`);
                  }}
                  className="w-full accent-amber-800 cursor-pointer"
                />
              </div>

              {activeVideo.systemType === 'drapery-dual' && (
                <div className="space-y-2 pt-1 border-t border-stone-100">
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor="sheer-percent-slider" className="font-semibold text-stone-700">
                      Độ đóng lớp Voan Lụa Trắng (Ray thứ 2):
                    </label>
                    <span className="font-mono font-bold text-emerald-800">{targetSheerPercent}%</span>
                  </div>
                  <input
                    id="sheer-percent-slider"
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={targetSheerPercent}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setIsPlaying(true);
                      setTargetSheerPercent(val);
                      setMotorStatusText(`App Smartphone: Đang kéo lớp voan trắng đến vị trí ${val}%`);
                    }}
                    className="w-full accent-emerald-700 cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Control Block 3: Smart Home Automation & Voice Commands */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                <Mic className="w-4 h-4 text-rose-600" />
                <span>3. Hẹn Giờ Tự Động &amp; Ra Lệnh Giọng Nói</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleVoiceCommand('Hey Siri, chào buổi sáng', 'morning-sunrise')}
                  className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
                    <Sun className="w-3.5 h-3.5 text-amber-600" />
                    <span>06:30 Bình Minh</span>
                  </div>
                  <div className="text-[10px] text-stone-600 mt-0.5">Mở rèm chính, khép voan</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleVoiceCommand('Ok Google, chắn nắng trưa', 'noon-uv-shield')}
                  className="p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-950">
                    <Sliders className="w-3.5 h-3.5 text-orange-600" />
                    <span>13:00 Nắng Gắt</span>
                  </div>
                  <div className="text-[10px] text-stone-600 mt-0.5">Tự đóng 75% giữ mát điều hòa</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleVoiceCommand('Hey Siri, bật chế độ xem phim', 'evening-cinema')}
                  className="p-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-950">
                    <Film className="w-3.5 h-3.5 text-indigo-600" />
                    <span>20:00 Xem Phim</span>
                  </div>
                  <div className="text-[10px] text-stone-600 mt-0.5">Đóng 95% chống chói TV</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleVoiceCommand('Ok Google, chúc ngủ ngon', 'night-sleep')}
                  className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-left text-white transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Moon className="w-3.5 h-3.5 text-amber-400" />
                    <span>22:00 Đi Ngủ</span>
                  </div>
                  <div className="text-[10px] text-stone-300 mt-0.5">Đóng kín 100% cả 2 lớp</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DEEP ARCHITECTURAL BREAKDOWN OF THESHADESTORE.COM APPLIED TO TUYẾN HOA */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              BÁO CÁO PHÂN TÍCH KỸ THUẬT &amp; MẪU MÃ TỪ THESHADESTORE.COM (HOA KỲ)
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              4 Công Nghệ Rèm Tự Động Hàng Đầu Thế Giới Đã Có Mặt Tại Tuyến Hoa
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            Ứng dụng thực tế cho nhà phố, biệt thự &amp; chung cư Việt Nam
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SHADE_STORE_ANALYSIS.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    {insight.categoryBadge}
                  </span>
                  <span className="text-[11px] font-mono text-stone-500 truncate">{insight.englishTerm}</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-stone-900">{insight.vietnameseTitle}</h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{insight.summary}</p>

                <ul className="space-y-1.5 pt-1">
                  {insight.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="text-xs text-stone-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Ứng dụng thực tế tại Tuyến Hoa (Chợ Cháy - Ứng Hòa):</span>
                </div>
                <p className="text-xs text-stone-800 leading-relaxed">{insight.tuyenHoaApplication}</p>
                <div className="text-[11px] font-mono font-bold text-emerald-800 pt-0.5">
                  ★ Thông số: {insight.specHighlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CATALOG OF 6 MOTORIZED CURTAIN & SHADE SYSTEMS */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              BẢNG GIÁ NIÊM YẾT MINH BẠCH • BẢO HÀNH ĐỘNG CƠ TỚI 5 NĂM
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              Bộ Sưu Tập Rèm Tự Động &amp; Động Cơ Thông Minh Tuyến Hoa
            </h3>
          </div>

          {/* Search box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm Somfy, Aqara, Pin sạc, Rèm 2 lớp..."
              className="w-full px-3.5 py-2 text-xs bg-white rounded-xl border border-stone-200 focus:outline-hidden focus:border-amber-800"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 2 Columns on Mobile, 3 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                    <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-stone-950/85 backdrop-blur-xs text-amber-300 text-[9px] sm:text-[11px] font-bold truncate">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 left-1.5 flex justify-end">
                    <span className="px-1.5 sm:px-2 py-0.5 rounded bg-white/95 text-stone-900 font-mono text-[9px] sm:text-[10px] font-bold shadow-xs truncate">
                      {product.noiseDb} • {product.powerType}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-2.5 sm:p-5 space-y-1.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-stone-500 font-medium gap-1">
                    <span className="uppercase tracking-wider font-bold text-amber-800 truncate">{product.categoryLabel}</span>
                    <span className="font-mono shrink-0">{product.code}</span>
                  </div>

                  <h4 className="text-xs sm:text-base font-bold text-stone-900 leading-snug line-clamp-2">{product.name}</h4>

                  <div className="hidden sm:block text-[11px] text-stone-500 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-200/70">
                    Chuẩn thiết kế: <strong className="text-stone-800">{product.shadeStoreEquivalent}</strong>
                  </div>

                  <p className="hidden sm:block text-xs text-stone-600 leading-relaxed">{product.summary}</p>

                  <ul className="hidden sm:block space-y-1 pt-1">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-stone-700 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Actions Footer */}
              <div className="p-2.5 sm:p-5 pt-2 sm:pt-3 border-t border-stone-100 bg-stone-50/60 space-y-2 sm:space-y-3">
                <div className="flex items-baseline justify-between gap-1">
                  <div>
                    <div className="text-xs sm:text-xl font-bold text-amber-900 font-mono">
                      {product.price.toLocaleString('vi-VN')}đ
                    </div>
                    <div className="text-[9px] sm:text-[11px] text-stone-500 truncate">{product.unit}</div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-xs text-stone-400 line-through font-mono">
                      {product.originalPrice.toLocaleString('vi-VN')}đ
                    </span>
                    <div className="text-[10px] font-bold text-emerald-700">{product.warranty}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => handleAddProductToCart(product)}
                    className="min-h-[38px] sm:min-h-[42px] py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-95 text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Đặt Mua</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onRequestMeasurement(
                        product.name,
                        `Khảo sát lắp đặt ${product.name} (${product.motorBrand} - ${product.powerType})`
                      )
                    }
                    className="min-h-[38px] sm:min-h-[42px] py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-amber-100 hover:bg-amber-200 active:scale-95 text-amber-950 border border-amber-300 text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <Ruler className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Khảo Sát</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. INTERACTIVE MOTORIZED CURTAIN + 600K FABRIC BUNDLE CALCULATOR */}
      <div className="bg-gradient-to-br from-amber-50/90 via-white to-stone-100 rounded-3xl p-5 sm:p-8 border border-amber-300/80 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Calculator Inputs */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                TÍNH GIÁ TRỌN GÓI RÈM VẢI 600K/M + ĐỘNG CƠ RÈM TỰ ĐỘNG
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                Bảng Dự Toán Chi Phí Lắp Rèm Tự Động Thông Minh Tại Nhà
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Kết hợp trực tiếp vải rèm chống nắng 100% giá 600.000đ/m ngang của Tuyến Hoa với các dòng động cơ Tuya,
                Dooya Pin Sạc, Aqara HomeKit hoặc Somfy Pháp. Miễn phí 100% công lắp đặt &amp; cài đặt App.
              </p>
            </div>

            {/* Step 1: Width */}
            <div className="space-y-2 bg-white p-4 rounded-2xl border border-stone-200">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <label htmlFor="motor-quote-width" className="font-bold text-stone-800">
                  1. Chọn chiều rộng ngang cửa (Mét ngang):
                </label>
                <span className="font-mono font-bold text-amber-900 text-base">{quoteWidth.toFixed(1)} mét ngang</span>
              </div>
              <input
                id="motor-quote-width"
                type="range"
                min={1.5}
                max={6.0}
                step={0.1}
                value={quoteWidth}
                onChange={(e) => setQuoteWidth(Number(e.target.value))}
                className="w-full accent-amber-800 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                <span>1.5m (Cửa sổ)</span>
                <span>3.0m (Cửa chính)</span>
                <span>4.5m (Biệt thự)</span>
                <span>6.0m (Đại sảnh)</span>
              </div>
            </div>

            {/* Step 2: Fabric Option */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-bold text-stone-800">2. Chọn gói Vải Rèm kết hợp:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'single-600k',
                    title: 'Rèm Vải 1 Lớp 600k/m',
                    desc: 'Vải gấm cản nắng 100% trọn gói',
                  },
                  {
                    id: 'double-850k',
                    title: 'Rèm Vải 2 Lớp 850k/m',
                    desc: '1 lớp vải cản nắng + 1 lớp voan lụa',
                  },
                  {
                    id: 'none',
                    title: 'Chỉ Mua Động Cơ + Ray',
                    desc: 'Lắp vào bộ vải rèm nhà đang có sẵn',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setQuoteFabricOption(opt.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      quoteFabricOption === opt.id
                        ? 'bg-amber-900 text-white border-amber-900 shadow-xs'
                        : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.title}</div>
                    <div
                      className={`text-[11px] mt-0.5 ${
                        quoteFabricOption === opt.id ? 'text-amber-200' : 'text-stone-500'
                      }`}
                    >
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Motor Brand */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-bold text-stone-800">3. Chọn Hãng Động Cơ Thông Minh:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SMART_MOTOR_OPTIONS.map((motor) => (
                  <button
                    key={motor.id}
                    type="button"
                    onClick={() => setQuoteMotorId(motor.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      quoteMotorId === motor.id
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{motor.brand}</span>
                      <span className="text-[11px] font-mono text-amber-500 font-bold">
                        {motor.baseMotorPrice.toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                    <div
                      className={`text-[11px] mt-0.5 ${
                        quoteMotorId === motor.id ? 'text-stone-300' : 'text-stone-500'
                      }`}
                    >
                      {motor.powerType} • Độ ồn {motor.noiseDb}dB • BH {motor.warrantyYears} năm
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Single vs Dual Motor Track */}
            <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-stone-200">
              <div>
                <div className="text-xs font-bold text-stone-800">Hệ Ray Điện Đôi (2 Động Cơ Độc Lập Cho 2 Lớp)</div>
                <div className="text-[11px] text-stone-500">
                  Bật nếu bạn muốn điều khiển riêng biệt cả lớp vải chính và lớp voan trắng bằng 2 motor
                </div>
              </div>
              <button
                type="button"
                onClick={() => setQuoteDualMotor((d) => !d)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  quoteDualMotor
                    ? 'bg-emerald-700 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {quoteDualMotor ? 'Đang chọn: 2 Động Cơ' : '1 Động Cơ Chính'}
              </button>
            </div>
          </div>

          {/* Right: Live Quote Breakdown Summary Card */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-5 sm:p-6 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  BÁO GIÁ TRỌN GÓI DỰ KIẾN
                </span>
                <h4 className="text-lg font-bold text-white">Cửa Rộng {quoteResult.widthMeters} Mét Ngang</h4>
              </div>
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1.5 border-b border-stone-800">
                <span className="text-stone-300">Chi phí Vải rèm may hoàn thiện:</span>
                <span className="font-mono font-bold text-white">
                  {quoteResult.fabricCost.toLocaleString('vi-VN')}đ
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800">
                <span className="text-stone-300">
                  Động cơ ({quoteResult.motorCount} × {quoteResult.motorName}):
                </span>
                <span className="font-mono font-bold text-amber-300">
                  {quoteResult.motorCost.toLocaleString('vi-VN')}đ
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800">
                <span className="text-stone-300">
                  Thanh ray điện hợp kim + Dây curoa tĩnh âm ({quoteResult.widthMeters * quoteResult.motorCount}m):
                </span>
                <span className="font-mono font-bold text-white">
                  {quoteResult.trackCost.toLocaleString('vi-VN')}đ
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800">
                <span className="text-stone-300">Công thợ lắp đặt &amp; Cài App tận nhà:</span>
                <span className="font-mono font-bold text-emerald-400">MIỄN PHÍ 0đ</span>
              </div>
            </div>

            <div className="bg-stone-950 rounded-xl p-4 border border-amber-500/40 flex items-baseline justify-between">
              <span className="text-xs font-bold uppercase text-stone-300">TỔNG TRỌN GÓI:</span>
              <span
                data-testid="motorized-quote-total"
                className="text-2xl font-mono font-bold text-amber-400"
              >
                {quoteResult.totalPrice.toLocaleString('vi-VN')}đ
              </span>
            </div>

            <p className="text-[11px] text-stone-300 leading-relaxed">{quoteResult.breakdownSummary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={handleAddQuoteToCart}
                className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Đặt Mua Cấu Hình Này</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  onRequestMeasurement(
                    `Rèm Tự Động Rộng ${quoteResult.widthMeters}m`,
                    `${quoteResult.breakdownSummary} - Tổng dự kiến: ${quoteResult.totalPrice.toLocaleString('vi-VN')}đ`
                  )
                }
                className="py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-white border border-stone-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Ruler className="w-4 h-4 text-emerald-400" />
                <span>Hẹn Anh Tuyến Khảo Sát</span>
              </button>
            </div>

            <div className="text-[11px] text-center text-stone-400 pt-1">
              Hotline/Zalo kỹ thuật rèm tự động Tuyến Hoa:{' '}
              <a href={`tel:${STORE_INFO.hotline}`} className="text-amber-300 font-bold font-mono underline">
                {STORE_INFO.hotlineDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
