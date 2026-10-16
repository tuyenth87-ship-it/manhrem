export type ProductCategory = 
  | 'all'
  | 'dem'
  | 'rem-cua'
  | 'manh-chieu'
  | 'chan-ga-goi';

export type MattressBrand = 'vikosan' | 'song-hong' | 'everon' | 'kymdan' | 'tuyen-hoa';

export interface ProductVariant {
  id: string;
  name: string;
  size: string; // e.g. "1m6 x 2m x 9cm"
  price: number; // in VND
  originalPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory: string; // e.g. "Đệm bông ép", "Rèm cầu vồng", "Chiếu trúc", "Rèm tổ ong"
  brand: string;
  rating: number;
  reviewsCount: number;
  summary: string;
  description: string[];
  features: string[];
  specs: {
    material: string;
    warranty: string;
    origin: string;
    thicknessOrSize?: string;
    suitableFor?: string;
  };
  variants: ProductVariant[];
  defaultVariantIndex: number;
  badge?: string;
  image: string;
  secondaryImage?: string;
  galleryImages?: string[];
  iconType: 'mattress' | 'curtain' | 'mat' | 'bedding' | 'wood' | 'honeycomb';
  accentColor: string;
}

export interface CartItem {
  productId: string;
  productName: string;
  variantId: string;
  variantName: string;
  size: string;
  price: number;
  quantity: number;
  category: ProductCategory;
  customNote?: string;
}

export interface CurtainCalculationResult {
  curtainType: string;
  typeName: string;
  width: number;
  height: number;
  areaOrLength: number;
  unit: 'm2' | 'mét ngang';
  unitPrice: number;
  fabricGrade: string;
  totalPrice: number;
  includedAccessories: string[];
}

export interface CustomerOrderInfo {
  fullName: string;
  phone: string;
  address: string;
  villageOrHamlet: string; // Thôn / Xóm / Phố tại Ứng Hòa hoặc nơi khác
  districtNote: string;
  notes: string;
  paymentMethod: 'cod' | 'bank_transfer' | 'consult_at_home';
}

export interface PlacedOrder {
  orderId: string;
  createdAt: string;
  customer: CustomerOrderInfo;
  items: CartItem[];
  totalAmount: number;
  shippingFee: number;
  status: 'confirmed' | 'measuring_scheduled' | 'delivering';
}
