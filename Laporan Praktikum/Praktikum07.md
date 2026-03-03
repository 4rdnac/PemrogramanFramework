# Jobsheet 7

## 1. Setup Data Produk

1. Siapkan project Next.js.
2. Buat endpoint API /api/products.
3. Pastikan data memiliki:
   - id
   - name
   - category
   - price
   - image
4. jalankan browser http://localhost:3000/api/produk

   ![alt text](../Praktikum07/images/01.png)

## 2. Implementasi CSR dengan useEffect

1. Membuat file index.tsx pada folder views/products

   ![alt text](../Praktikum07/images/02.png)

2. Modifikasi index.tsx

   ![alt text](../Praktikum07/images/03.png)

3. Buka file index.tsx pada pages/produk/

   ![alt text](../Praktikum07/images/04.png)

4. Modifikasi index.tsx pada pages/produk/

   ![alt text](../Praktikum07/images/05.png)

5. Jalankan browser http://localhost:3000/produk

   ![alt text](../Praktikum07/images/06.png)

6. Pada folder produk buat file produk.modules.scss

   ![alt text](../Praktikum07/images/07.png)

7. Modifikasi produk.modules.scss

   ![alt text](../Praktikum07/images/08.png)

8. Modifikasi Pada file index.tsx pada folder pages/views/product

   ![alt text](../Praktikum07/images/09.png)

9. Jalankan Browser

   ![alt text](../Praktikum07/images/10.png)

## 3. Implementasi Skeleton Loading

1. Modfikasi file index.tsx pada folder views/product/index.tsx

   ![alt text](../Praktikum07/images/11.png)

2. Modifikasi file product.module.scss

   ![alt text](../Praktikum07/images/12.png)

   ![alt text](../Praktikum07/images/13.png)

3. Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip

   ![alt text](../Praktikum07/images/14.gif)

4. Modifikasi pada index.tsx pada folder views/product/index.tsx

   ![alt text](../Praktikum07/images/15.png)

5. Jalankan browser
   - Jika dijalankan akan muncul skeletonnya terlebih dahulu setelah itu muncul gambar dan informasinya

   ![alt text](../Praktikum07/images/16.gif)

## 4. Implementasi SWR

1. Install SWR

   ![alt text](../Praktikum07/images/17.png)

2. Buka dan modifkasi file index.tsx pada folder pages/product/

   ![alt text](../Praktikum07/images/18.png)

   ![alt text](../Praktikum07/images/19.png)

3. Agar terlihat lebih rapi

- Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js

  ![alt text](../Praktikum07/images/20.png)

- Modifikasi file fetcher.ts

  ![alt text](../Praktikum07/images/21.png)

- Modifikasi file index.tsx pada folder pages/produk

   ![alt text](../Praktikum07/images/22.png)

### Hasil & Perbandingan

   ![alt text](../Praktikum07/images/23.gif)

useEffect manual membutuhkan kode lebih panjang karena state dan loading harus diatur sendiri. Data hanya diambil saat komponen mount dan tidak memiliki cache, sehingga selalu fetch ulang kecuali direfresh manual.

SWR lebih ringkas karena cukup satu hook, memiliki cache sehingga data tampil instan, serta otomatis melakukan revalidasi dan menangani loading.

