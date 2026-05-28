# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
<br>
<br>
<br>
<br>
<br>

# TR
# Bahşiş Hesaplayıcı
Restoran hesabınızı kolayca bölen, bahşiş miktarını ve kişi başına düşen toplam tutarı anlık hesaplayan React uygulaması.

## Özellikler

Hızlı Oran Seçimi — %5, %10, %15, %25, %50 gibi hazır bahşiş oranları <br>
Özel Oran Girişi — İstediğiniz herhangi bir bahşiş yüzdesini girebilirsiniz <br>
Kişi Bazlı Hesaplama — Bahşiş ve toplam tutarı kişi sayısına böler <br>
Gerçek Zamanlı Güncelleme — Her değişiklikte sonuçlar anında yenilenir <br>
Form Doğrulama — Geçersiz veya boş girişler için kullanıcı dostu hata mesajları <br>
Sıfırlama Butonu — Tek tıkla tüm alanları temizler <br>
Duyarlı Tasarım — Mobil ve masaüstü için ayrı düzenler <br>


## Ekran Görüntüsü

Uygulama açık yeşil arka plan, sol tarafta form alanları ve sağ tarafta koyu panel üzerinde hesaplama sonuçlarıyla iki sütunlu bir arayüze sahiptir.


## Teknolojiler
Teknoloji Açıklama <br>
React 18UI bileşenleri ve state yönetimi <br>
CSS3Özel stiller ve @media ile duyarlı tasarım <br>
ViteGeliştirme sunucusu ve derleme aracı <br>

## Kurulum
bash# Repoyu klonlayın
git clone https://github.com/kullanici-adi/bahsis-hesaplayici.git

### Proje klasörüne girin
cd bahsis-hesaplayici

### Bağımlılıkları yükleyin
npm install

### Geliştirme sunucusunu başlatın
npm run dev
Tarayıcınızda http://localhost:5173 adresini açın.

## Proje Yapısı
src/ <br>
├── assets/ <br>
│   └── img/ <br>
│       └── logo-person.png <br>
├── App.jsx        # Ana uygulama bileşeni <br>
└── App.css        # Tüm stiller <br>

## Kullanım
Hesap alanına toplam fatura tutarını girin (₺)
Listeden bir bahşiş oranı seçin ya da Özel butonuna basarak kendi oranınızı yazın
Kişi Sayısı alanına kaç kişi olduğunu girin
Sağ panelde kişi başına bahşiş ve toplam tutar otomatik olarak görünür
Yeni bir hesaplama için SIFIRLA butonuna basın


## Tasarım Detayları
Renk Paleti: #C5E4E7 (arka plan) · #00474B (koyu panel) · #26C2AE (vurgu)
Font: Space Mono
Breakpoint: 1109px üzerinde iki sütunlu masaüstü düzeni, altında tek sütunlu mobil düzen
<br>
<br>
<br>
<br>
<br>






#EN
#Tip Calculator
A React app that easily splits your restaurant bill, calculating tip amount and total per person in real time.
Features
Quick Rate Selection — Preset tip rates like 5%, 10%, 15%, 25%, 50% <br>
Custom Rate Input — Enter any tip percentage you want <br>
Per-Person Calculation — Splits tip and total by number of people <br>
Real-Time Updates — Results refresh instantly with every change <br>
Form Validation — User-friendly error messages for invalid or empty inputs <br>
Reset Button — Clears all fields with a single click <br>
Responsive Design — Separate layouts for mobile and desktop <br>

<br>
<br>
<br>
##Screenshot
The app features a two-column interface with a light green background, form fields on the left, and calculation results on a dark panel on the right.

<br>
<br>
<br>

##Technologies
TechnologyDescriptionReact 18UI components and state managementCSS3Custom styles and responsive design with @mediaViteDevelopment server and build tool

##Installation
bash# Clone the repo
git clone https://github.com/username/tip-calculator.git

### Navigate to the project folder
cd tip-calculator

### Install dependencies
npm install

### Start the development server
npm run dev
Open http://localhost:5173 in your browser.

<br>
<br>
<br>

## Project Structure
src/
├── assets/
│   └── img/
│       └── logo-person.png
├── App.jsx        # Main application component
└── App.css        # All styles

<br>
<br>
<br>

## Usage

Enter the total bill amount in the Bill field (₺)
Select a tip rate from the list or press Custom to enter your own
Enter the number of people in the Number of People field
The tip and total per person appear automatically in the right panel
Press RESET for a new calculation

##Design Details
Color Palette: #C5E4E7 (background) · #00474B (dark panel) · #26C2AE (accent)
Font: Space Mono
Breakpoint: Two-column desktop layout above 1109px, single-column mobile layout below
