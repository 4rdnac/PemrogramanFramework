# Jobsheet 3

## Langkah 1 – Menjalankan Project

![alt text](../Praktikum03/images/01.png)

## Langkah 2 – Membuat Catch-All Route

![alt text](../Praktikum03/images/02.png)

![alt text](../Praktikum03/images/03.png)

![alt text](../Praktikum03/images/04.png)

![alt text](../Praktikum03/images/05.png)

![alt text](../Praktikum03/images/06.png)

## Langkah 3 – Pengujian Catch-All Route

![alt text](../Praktikum03/images/07.png)

![alt text](../Praktikum03/images/08.png)

![alt text](../Praktikum03/images/09.png)

![alt text](../Praktikum03/images/10.png)

![alt text](../Praktikum03/images/11.png)

![alt text](../Praktikum03/images/12.png)

## Langkah 4 – Optional Catch-All Route

![alt text](../Praktikum03/images/13.png)

![alt text](../Praktikum03/images/14.png)

![alt text](../Praktikum03/images/15.png)

## Langkah 5 – Validasi Parameter

![alt text](../Praktikum03/images/16.png)

![alt text](../Praktikum03/images/17.png)

## Langkah 6 – Membuat Halaman Login & Register

![alt text](../Praktikum03/images/18.png)

![alt text](../Praktikum03/images/19.png)

![alt text](../Praktikum03/images/20.png)

![alt text](../Praktikum03/images/21.png)

## Langkah 7 – Navigasi Imperatif (router.push)

![alt text](../Praktikum03/images/22.png)

![alt text](../Praktikum03/images/23.png)

![alt text](../Praktikum03/images/24.png)

## Langkah 8 – Simulasi Redirect (Belum Login)

![alt text](../Praktikum03/images/25.png)

![alt text](../Praktikum03/images/26.gif)

# Tugas Praktikum

## Tugas 1 (Wajib)

- Buat catch-all route:

![alt text](../Praktikum03/images/27.png)

- /category/[...slug].js

![alt text](../Praktikum03/images/28.png)

- Tampilkan seluruh parameter URL dalam bentuk list.

![alt text](../Praktikum03/images/29.png)

## Tugas 2 (Wajib)

- Buat navigasi:
  - Login → Product (imperatif)

    ![alt text](../Praktikum03/images/30.png)

    ![alt text](../Praktikum03/images/31.png)

    ![alt text](../Praktikum03/images/32.gif)

  - Login ↔ Register (Link)

    ![alt text](../Praktikum03/images/33.gif)

## Tugas 3 (Pengayaan)

- Terapkan redirect otomatis ke login jika user belum login.

  ![alt text](../Praktikum03/images/34.png)

  ![alt text](../Praktikum03/images/35.png)

  ![alt text](../Praktikum03/images/36.gif)

## Pertanyaan Evaluasi

1. Apa perbedaan [id].js dan [...slug].js?

   `[id].js` digunakan untuk menangkap satu parameter URL (berupa string), sedangkan `[...slug].js` digunakan untuk menangkap banyak parameter sekaligus dalam bentuk array (catch-all route).

2. Mengapa slug berbentuk array?

   Karena setiap segmen URL yang dipisahkan tanda / akan dibaca sebagai elemen terpisah, sehingga Next.js menyimpannya dalam bentuk array. 
   
3. Kapan sebaiknya menggunakan Link dan router.push()? 
   
   Link digunakan untuk navigasi biasa melalui klik, sedangkan router.push() digunakan untuk navigasi yang membutuhkan logika tambahan seperti setelah login atau submit form.

4. Mengapa navigasi Next.js tidak me-refresh halaman?

   Karena Next.js menggunakan client-side navigation (SPA), sehingga hanya mengganti komponen tanpa me-reload seluruh halaman.
