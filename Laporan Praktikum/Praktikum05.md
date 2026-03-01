# Jobsheet 5

## 1 Menjalankan Project

![alt text](../Praktikum05/images/01.png)

## 2. Membuat Custom Document

![alt text](../Praktikum05/images/02.png)

![alt text](../Praktikum05/images/03.png)

## 3. Pengaturan Title per Halaman

![alt text](../Praktikum05/images/04.png)

![alt text](../Praktikum05/images/05.png)

## 4. Membuat Custom Error Page (404)

![alt text](../Praktikum05/images/06.png)

![alt text](../Praktikum05/images/07.png)

![alt text](../Praktikum05/images/08.png)

## 5. Styling Halaman 404

![alt text](../Praktikum05/images/09.png)

![alt text](../Praktikum05/images/10.png)

![alt text](../Praktikum05/images/11.png)

![alt text](../Praktikum05/images/12.png)

## 6. Menampilkan Gambar dari Folder Public

![alt text](../Praktikum05/images/13.png)

![alt text](../Praktikum05/images/14.png)

![alt text](../Praktikum05/images/15.png)

![alt text](../Praktikum05/images/16.png)

# Tugas Praktikum

## Tugas 1 (Wajib)

Tambahkan:

- Judul halaman
- Deskripsi singkat
- Gambar ilustrasi

![alt text](../Praktikum05/images/17.png)

![alt text](../Praktikum05/images/18.png)

![alt text](../Praktikum05/images/19.png)

## Tugas 2 (Wajib)

- Custom warna, font, dan layout halaman 404
- Navbar tidak tampil di halaman 404

![alt text](../Praktikum05/images/20.png)

![alt text](../Praktikum05/images/21.png)

![alt text](../Praktikum05/images/22.png)

![alt text](../Praktikum05/images/23.png)

## Tugas 3 (Pengayaan)

- Tambahkan tombol:
  - “Kembali ke Home”
- Gunakan navigasi Next.js (Link)

![alt text](../Praktikum05/images/24.png)

![alt text](../Praktikum05/images/25.png)

![alt text](../Praktikum05/images/26.gif)

## Pertanyaan Evaluasi 
1. Apa fungsi utama _document.js? 

    Fungsi utama _document.js di Next.js adalah untuk mengatur struktur dasar HTML aplikasi, seperti <html>, <head>, dan <body>. File ini digunakan untuk kebutuhan global yang berhubungan dengan dokumen HTML secara keseluruhan, misalnya menambahkan atribut pada <html> (seperti lang="id") atau menambahkan script eksternal yang berlaku untuk seluruh aplikasi.

2. Mengapa `<title>` tidak disarankan di _document.js? 

    Karena _document.js bersifat global dan statis untuk seluruh aplikasi. Jika kamu menaruh `<title>` di sana, maka semua halaman akan memiliki judul yang sama. Di Next.js, `<title>`sebaiknya ditaruh di setiap halaman menggunakan komponen Head dari next/head, supaya setiap halaman bisa memiliki judul yang berbeda dan lebih baik untuk SEO.

3. Apa perbedaan halaman biasa dan halaman 404.js? 

    Halaman biasa dibuat untuk route tertentu (misalnya /about, /profile) dan hanya tampil saat URL tersebut diakses. Sedangkan 404.js adalah halaman khusus yang otomatis ditampilkan oleh Next.js ketika user mengakses URL yang tidak ada. Jadi 404.js berfungsi sebagai halaman error “Not Found” dan tidak perlu dibuat routing manual.

4. Mengapa folder public tidak perlu di-import?

    Karena folder public di Next.js bersifat otomatis sebagai static folder. Semua file di dalam public bisa langsung diakses melalui URL root tanpa perlu import. Contohnya, jika ada gambar public/logo.png, maka cukup dipanggil dengan `<img src="/logo.png" />`. Next.js secara otomatis menyajikan file tersebut sebagai aset statis.

