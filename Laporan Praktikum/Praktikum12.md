# Jobsheet 12

## 1. Membuat Middleware

- Modifikasi file index.tsx pada folder src/pages/produk

  ![alt text](../Praktikum12/images/01.png)

- Buat file: src/middleware.ts Sejajar dengan folder pages.

  ![alt text](../Praktikum12/images/02.png)

## 2. Struktur Dasar Middleware

- Jika menggunakan NextResponse.next() → tidak ada redirect.

  ![alt text](../Praktikum12/images/03.png)

- Jadi masih bisa mengakses ke http://localhost:3000/produk
