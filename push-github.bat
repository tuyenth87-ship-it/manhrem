@echo off
chcp 65001 >nul
echo ========================================================
echo   TU DONG CAU HINH GIT VA DAY CODE LEN GITHUB
echo   Website: Chan Ga Goi Dem ^& Manh Rem Tuyen Hoa
echo ========================================================
echo.

echo [1/4] Dang cau hinh ten va email Git...
git config --global user.name "Ngoc Tuyen"
git config --global user.email "TUYENTH87@gmail.com"

echo [2/4] Dang khoi tao kho luu tru Git va dong goi file...
git init
git add .
git commit -m "Hoan thien website Chan Ga Goi Dem va Manh Rem Tuyen Hoa"
git branch -M main

echo.
set /p REPO_URL="Nhap duong dan GitHub Repository cua ban (vi du https://github.com/ngoctuyen/chan-ga-goi-dem-tuyen-hoa.git): "

if "%REPO_URL%"=="" (
    echo Ban chua nhap duong dan Repository. Vui long chay lai file nay!
    pause
    exit /b
)

echo [3/4] Dang ket noi toi GitHub: %REPO_URL% ...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo [4/4] Dang day toan bo code len GitHub (nhanh main - tu dong ghi de file trung)...
git push -u origin main --force

echo.
echo ========================================================
echo   HOAN TAT! Kiem tra trang GitHub cua ban.
echo ========================================================
pause
