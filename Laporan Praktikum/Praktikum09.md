# Jobsheet 9

## 1. Setup Halaman Static

1. Buat file baru pada pages/products/static.tsx

   ![alt text](../Praktikum09/images/01.png)

2. Modifikasi file static.tsx

   ![alt text](../Praktikum09/images/02.png)

## 2. Build Production Mode

1. Pindah beberapa folder diluar pages antara lain

- Untuk menghindari error maka folder Views, utils, styles dipindah di luar folder src sehingga susunan folder pada src sebagai berikut

  ![alt text](../Praktikum09/images/03.png)

2. Jalankan: npm run build

- Jalankan npm run dev dan pastikan ini jalan ( jangan distop saat ngebuild ), jadi buka dua terminal
  - Terminal 1 : jalankan aplikasi npm run dev

    ![alt text](../Praktikum09/images/04.png)

  - Terminal 2 : build aplikasi

    ![alt text](../Praktikum09/images/05.png)

3. Jalankan npm run start dan Akses: http://localhost:3000/products/static

![alt text](../Praktikum09/images/06.png)

![alt text](../Praktikum09/images/07.png)
