# Jobsheet 2

## 1. Routing Dasar (Static Routing)

- FIle Halaman About

  ![alt text](../Praktikum02/images/01.png)

  ![alt text](../Praktikum02/images/02.png)

- Uji di Browser

  ![alt text](../Praktikum02/images/03.png)

## 2. Routing Menggunakan Folder

- Rapikan Struktur Pages

  ![alt text](../Praktikum02/images/04.png)

- Uji di Browser

  ![alt text](../Praktikum02/images/05.png)

## 3. Nested Routing

- Buat Folder Setting

![alt text](../Praktikum02/images/06.png)

- Modifikasi Kode

  ![alt text](../Praktikum02/images/07.png)

  ![alt text](../Praktikum02/images/08.png)

- Akses:

  /setting/user

  ![alt text](../Praktikum02/images/09.png)

  /setting/app

  ![alt text](../Praktikum02/images/10.png)

- Modifikasi struktur folder

  ![alt text](../Praktikum02/images/11.png)

- Jalankan di browser

  ![alt text](../Praktikum02/images/12.png)

* Nested Lebih Dalam

![alt text](../Praktikum02/images/13.png)

- Akses:
  /setting/user/password

  ![alt text](../Praktikum02/images/14.png)

## 4. Dynamic Routing

- Buat Halaman Produk

  ![alt text](../Praktikum02/images/15.png)

- Buka browser

  ![alt text](../Praktikum02/images/16.png)

* Cek menggunakan console.log

  ![alt text](../Praktikum02/images/17.png)

* Modifikasi [id].tsx

  ![alt text](../Praktikum02/images/18.png)

* Buka browser

  ![alt text](../Praktikum02/images/19.png)

  ![alt text](../Praktikum02/images/20.png)

  ![alt text](../Praktikum02/images/21.png)

## 5. Membuat Komponen Navbar

- Struktur Komponen

  ![alt text](../Praktikum02/images/22.png)

* Modifikasi index.tsx

  ![alt text](../Praktikum02/images/23.png)

* Modifikasi global.css

  ![alt text](../Praktikum02/images/24.png)

- Modifikasi index.tsx pada folder pages

  ![alt text](../Praktikum02/images/25.png)

* Jalankan di browser

  ![alt text](../Praktikum02/images/26.png)

* Modifikasi navbar agar tampil di semua page

  ![alt text](../Praktikum02/images/27.png)

  ![alt text](../Praktikum02/images/28.png)

* Jalankan browser

  ![alt text](../Praktikum02/images/29.png)

  ![alt text](../Praktikum02/images/30.png)

## 6. Membuat Layout Global (App Shell)

![alt text](../Praktikum02/images/31.png)

## 7. Implementasi Layout di \_app.tsx

![alt text](../Praktikum02/images/32.png)

![alt text](../Praktikum02/images/33.png)

# Tugas Praktikum

## Tugas 1 – Routing

1. Buat halaman:
   - /profile

     ![alt text](../Praktikum02/images/34.png)

   - /profile/edit

     ![alt text](../Praktikum02/images/36.png)

2. Pastikan routing berjalan tanpa error

   ![alt text](../Praktikum02/images/35.png)

   ![alt text](../Praktikum02/images/37.png)

## Tugas 2 – Dynamic Routing

1. Buat routing:

2. /blog/[slug]

   ![alt text](../Praktikum02/images/38.png)

3. Tampilkan nilai slug di halaman

   ![alt text](../Praktikum02/images/39.png)

## Tugas 3 – Layout

1. Tambahkan Footer pada AppShell

   ![alt text](../Praktikum02/images/40.png)

   ![alt text](../Praktikum02/images/41.png)

2. Footer tampil di semua halaman

   ![alt text](../Praktikum02/images/42.png)

## Pertanyaan Refleksi

1. Apa perbedaan routing berbasis file dan routing manual?

   Routing berbasis file adalah sistem routing yang otomatis dibuat berdasarkan struktur folder dan file di dalam project (seperti di Next.js). Jadi kita tidak perlu menuliskan konfigurasi route secara manual.

2. Mengapa dynamic routing penting dalam aplikasi web?

   Dynamic routing memungkinkan satu template halaman digunakan untuk menampilkan berbagai data yang berbeda berdasarkan parameter pada URL. Hal ini membuat aplikasi lebih fleksibel, efisien, dan mudah dikembangkan, terutama ketika menangani banyak data seperti artikel, produk, atau profil pengguna.

3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?

   Layout global memungkinkan elemen yang sama digunakan secara konsisten di banyak halaman tanpa harus ditulis berulang-ulang. Hal ini membuat struktur kode lebih rapi, mengurangi duplikasi, mempermudah perawatan (maintenance), dan menjaga konsistensi tampilan di seluruh aplikasi.
