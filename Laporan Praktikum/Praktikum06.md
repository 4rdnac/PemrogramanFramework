# Jobsheet 6

## 1. Menjalankan Project

![alt text](../Praktikum06/images/01.png)

![alt text](../Praktikum06/images/02.png)

## 2. Membuat API Produk

![alt text](../Praktikum06/images/03.png)

![alt text](../Praktikum06/images/04.png)

![alt text](../Praktikum06/images/05.png)

## 3. Fetch Data API di Frontend

![alt text](../Praktikum06/images/06.png)

![alt text](../Praktikum06/images/07.png)

## 4. Setup Firebase

![alt text](../Praktikum06/images/08.png)

![alt text](../Praktikum06/images/09.png)

![alt text](../Praktikum06/images/10.png)

![alt text](../Praktikum06/images/11.png)

![alt text](../Praktikum06/images/12.png)

![alt text](../Praktikum06/images/13.png)

![alt text](../Praktikum06/images/14.png)

![alt text](../Praktikum06/images/15.png)

![alt text](../Praktikum06/images/16.png)

![alt text](../Praktikum06/images/17.png)

![alt text](../Praktikum06/images/18.png)

![alt text](../Praktikum06/images/19.png)

![alt text](../Praktikum06/images/20.png)

## 5. Install Firebase

![alt text](../Praktikum06/images/21.png)

![alt text](../Praktikum06/images/22.png)

![alt text](../Praktikum06/images/23.png)

## 6. Konfigurasi Environment Variable

![alt text](../Praktikum06/images/24.png)

![alt text](../Praktikum06/images/25.png)

## 7. Konfigurasi Firebase

![alt text](../Praktikum06/images/26.png)

## 8. Ambil Data dari Firestore

![alt text](../Praktikum06/images/27.png)

![alt text](../Praktikum06/images/28.png)

## 9. API Mengambil Data Firebase

![alt text](../Praktikum06/images/29.png)

![alt text](../Praktikum06/images/30.png)

![alt text](../Praktikum06/images/31.png)

![alt text](../Praktikum06/images/32.png)

![alt text](../Praktikum06/images/33.png)

# Tugas Praktikum

## Tugas 1 (Wajib)

- Tambahkan minimal 3 data produk di Firestore

![alt text](../Praktikum06/images/34.png)

- Pastikan data tampil di halaman produk

![alt text](../Praktikum06/images/35.png)

## Tugas 2 (Wajib)

- Tambahkan field baru:
  - category

![alt text](../Praktikum06/images/36.png)

- Tampilkan category di frontend

![alt text](../Praktikum06/images/37.png)

![alt text](../Praktikum06/images/38.png)

![alt text](../Praktikum06/images/39.png)

## Tugas 3 (Pengayaan)

- Tambahkan tombol Refresh Data

![alt text](../Praktikum06/images/40.png)

- Gunakan fetch ulang tanpa reload halaman

![alt text](../Praktikum06/images/41.gif)

![alt text](../Praktikum06/images/42.gif)

## Pertanyaan Evaluasi

1. Apa fungsi API Routes pada Next.js?

   API Routes digunakan untuk membuat backend langsung di dalam project Next.js. Dengan API Routes, kita bisa membuat endpoint seperti /api/produk untuk mengambil, menambah, atau mengubah data tanpa perlu membuat server terpisah (misalnya Express). Jadi frontend dan backend bisa dalam satu project.

2. Mengapa .env.local tidak boleh di-push ke repository?

   Karena file .env.local biasanya berisi data sensitif seperti API key, password, atau konfigurasi database. Jika di-push ke repository (terutama public), orang lain bisa melihat dan menyalahgunakan data tersebut. Oleh karena itu biasanya file ini dimasukkan ke .gitignore.

3. Apa perbedaan data statis dan data dinamis?

   Data statis adalah data yang tidak berubah dan sudah ditentukan sebelumnya, misalnya teks tetap di halaman atau data hardcode. Data dinamis adalah data yang bisa berubah-ubah, biasanya diambil dari database atau API, seperti daftar produk dari Firestore.

4. Mengapa Next.js disebut framework fullstack?

   Karena Next.js bisa menangani frontend (React, tampilan UI) dan backend (API Routes, server-side rendering) dalam satu framework. Jadi tidak perlu membuat backend dan frontend secara terpisah.
