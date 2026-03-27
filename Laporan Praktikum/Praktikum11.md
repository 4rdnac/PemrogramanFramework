# Jobsheet 11

## Implementasi ISR Otomatis

### 1. Tambahkan revalidate

- Buka halaman static.tsx pada folder src/pages/produk

  ![alt text](../Praktikum11/images/01.png)

### 2. Pengujian ISR

- Jalankan npm run build & npm run start

  ![alt text](../Praktikum11/images/02.png)

  ![alt text](../Praktikum11/images/03.png)

- Tambahkan data baru di database pada firebase

  ![alt text](../Praktikum11/images/04.png)

- Refresh halaman sebelum 10 detik → Data lama.

  ![alt text](../Praktikum11/images/05.png)

- Refresh setelah 10 detik → Data baru muncul.

  ![alt text](../Praktikum11/images/06.png)

## On-Demand Revalidation

### 1. Buat API Revalidate

- Buat file revalidate.ts pada folder pages/api/ dan modifikasi

  ![alt text](../Praktikum11/images/07.png)

  ![alt text](../Praktikum11/images/08.png)

### 2. Tambahkan Parameter Data

- Modifikasi file revalidate.ts

  ![alt text](../Praktikum11/images/09.png)

- Uji coba menambahkan parameter dan value pada url http://localhost:3000/api/revalidate?data=produk maka akan muncul true dan sesuai dengan kondisi (req.query.data ===”produk”)

  ![alt text](../Praktikum11/images/10.png)

### 3. Tambahkan Token Security

- Buka file .env dan modifikasi

  ![alt text](../Praktikum11/images/11.png)

- Modifikasi file revalidate.ts

  ![alt text](../Praktikum11/images/12.png)

