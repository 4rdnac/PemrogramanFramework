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

## 3. Redirect Sederhana

![alt text](../Praktikum12/images/04.png)

- Semua halaman akan redirect ke home dan error dikarenakan terus menerus loading

  ![alt text](../Praktikum12/images/05.png)

## 4. Batasi Route Tertentu

- Untuk mengatasi pada bagian 3 maka perlu pembatasan route

  ![alt text](../Praktikum12/images/06.png)

- Artinya:
  - Halaman selain /produk dan /about tetap normal
  
    ![alt text](../Praktikum12/images/07.png)

  - Ketika user mengakses halaman produk dan about maka akan langsung redirect ke halaman home
