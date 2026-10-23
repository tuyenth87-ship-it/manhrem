# Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa — Chợ Cháy, Ứng Hòa, Hà Nội

Website trưng bày sản phẩm, tính giá tự động và tư vấn trực tuyến của **Cửa Hàng Chăn Ga Gối Đệm & Mành Rèm Tuyến Hoa** (Khu vực Chợ Cháy, Ứng Hòa, Hà Nội — Hotline/Zalo: **0344.727.528**).

---

## Tính năng nổi bật

- **Bạt Mái Xếp Lượn Sóng & Bạt Tự Động (350.000đ/m² cả công lắp)**: Bộ sưu tập 5 bài viết theo từng ảnh công trình thực tế + 3 video thực tế Tuyến Hoa + 6 video bạt tự động điều khiển từ xa & công cụ tính giá mái bạt theo diện tích.
- **Rèm Vải Cản Nắng Cao Cấp (600.000đ/m ngang cả công lắp)**: 8 mẫu rèm vải 1 lớp, 2 lớp âm trần, rèm phòng thờ sập gụ thực tế kèm bộ tính giá tự động.
- **Rèm Tự Động Thông Minh 4.0**: Trình mô phỏng đóng/mở rèm bằng Remote/App trực quan và bảng giá động cơ.
- **Đệm Chính Hãng Công Khai Giá**: Vikosan, Sông Hồng, Everon, Kymdan, chiếu trúc hạt, mành tre truyền thống, mành hạt gỗ phong thủy.
- **Tối Ưu Đa Nền Tảng (Mobile & Desktop)**: Phông chữ `Be Vietnam Pro` & `Plus Jakarta Sans` sắc nét dễ đọc, giao diện sang trọng, thoáng đãng, hỗ trợ cài đặt App (PWA) trên điện thoại.

---

## Hướng dẫn đẩy code lên GitHub (Từng bước dễ làm)

### Cách A: Đẩy trực tiếp từ thanh công cụ AI Studio (Nhanh nhất — Không cần gõ lệnh)
1. Nhìn lên **góc trên bên phải** màn hình làm việc, nhấn vào biểu tượng **GitHub** (hoặc nút **Save to GitHub / Export**).
2. Đăng nhập tài khoản GitHub của bạn và nhấn **Authorize** (Cấp quyền).
3. **Quan trọng để không bị lỗi xung đột file**: Chọn tạo **Repository mới tinh** (đặt tên mới chưa từng dùng, ví dụ: `web-rem-tuyen-hoa-2025` hoặc `chan-ga-goi-dem-tuyen-hoa-moi`) để kho chứa trên GitHub hoàn toàn trống, sau đó nhấn xác nhận.

---

### Cách B: Đẩy từ máy tính cá nhân (Git Bash / VS Code / Terminal)

#### Bước 1: Tải mã nguồn về máy tính
1. Nhấn nút **Download / Export** trên thanh công cụ để tải file `.zip` về máy và giải nén.
2. Mở thư mục vừa giải nén:
   - **Trên Windows**: Chỉ cần nhấn đúp chuột vào file **`push-github.bat`**, dán đường dẫn GitHub Repository vào rồi nhấn Enter (file đã được cài sẵn lệnh `--force` tự động xử lý lỗi trùng file).
   - **Hoặc dùng Git Bash / Terminal**: Xem Bước 2 & Bước 3 bên dưới.

#### Bước 2: Tạo Repository trên GitHub
1. Truy cập [https://github.com/new](https://github.com/new)
2. Đặt tên Repository (ví dụ: `chan-ga-goi-dem-tuyen-hoa`)
3. Chọn **Public**, **KHÔNG tích chọn** *"Add a README file"*, rồi nhấn **Create repository**.

#### Bước 3: Chạy lệnh cấu hình và đẩy code (Đã tích hợp sửa lỗi xung đột file)
Sao chép và chạy lần lượt các lệnh sau (lệnh `git push -u origin main --force` sẽ tự động ghi đè code chuẩn của web lên nếu trên GitHub lỡ có sẵn file `README.md` hoặc `.gitignore`):

```bash
git config --global user.name "Ngoc Tuyen"
git config --global user.email "TUYENTH87@gmail.com"

git init
git add .
git commit -m "Hoan thien website Chan Ga Goi Dem va Manh Rem Tuyen Hoa"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/<TEN_TAI_KHOAN_GITHUB>/chan-ga-goi-dem-tuyen-hoa.git
git push -u origin main --force
```

*(Lưu ý: Thay `<TEN_TAI_KHOAN_GITHUB>` bằng tên tài khoản GitHub của bạn).*

---

## Cách xuất bản thành trang web thực tế miễn phí

### Cách 1: Chạy trực tiếp trên GitHub Pages (Đã cài sẵn tự động)
Dự án đã được tích hợp sẵn file tự động `.github/workflows/deploy.yml` và cấu hình đường dẫn tương đối (`base: './'`):
1. Trên trang GitHub Repository của bạn, vào mục **Settings** -> **Pages** (menu bên trái).
2. Tại phần **Build and deployment** -> mục **Source**, chọn **GitHub Actions**.
3. Chờ khoảng 1 phút để GitHub tự động đóng gói và cấp link website `https://<ten-tai-khoan>.github.io/<ten-repo>/`.

### Cách 2: Đẩy lên Vercel (Nhanh nhất — chỉ 30 giây)
1. Truy cập [https://vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
2. Nhấn **Add New Project** -> Chọn repository `chan-ga-goi-dem-tuyen-hoa` vừa đẩy lên.
3. Nhấn **Deploy** (File `vercel.json` và `.npmrc` đã được cấu hình sẵn, không cần chỉnh sửa gì thêm).

---

## Chạy thử trên máy tính cá nhân (Local Development)

```bash
# 1. Cài đặt thư viện
npm install --legacy-peer-deps

# 2. Chạy chế độ phát triển (http://localhost:3000)
npm run dev

# 3. Đóng gói bản dựng sản phẩm (xuất ra thư mục dist/)
npm run build
```
