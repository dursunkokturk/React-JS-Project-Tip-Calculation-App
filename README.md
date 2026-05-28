# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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
TeknolojiAçıklamaReact 18UI bileşenleri ve state yönetimiCSS3Özel stiller ve @media ile duyarlı tasarımViteGeliştirme sunucusu ve derleme aracı

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
src/
├── assets/
│   └── img/
│       └── logo-person.png
├── App.jsx        # Ana uygulama bileşeni
└── App.css        # Tüm stiller

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
