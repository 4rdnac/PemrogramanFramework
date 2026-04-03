# Jobsheet 12

## 1. Install NextAuth

![alt text](../Praktikum13/images/01.png)

## 2. Konfigurasi API Auth

![alt text](../Praktikum13/images/02.png)

![alt text](../Praktikum13/images/03.png)

## 3. Tambahkan Secret

- Buka file .env.local dan tambahkan code pada line 12
  - NEXTAUTH_SECRET=RANDOM_BASE64_STRING
  - Untuk mendapatkan nilai RANDOM_BASE64_STRING gunakan generator
    RANDOM_BASE64_STRING seperti https://www.convertsimple.com/random-base64-generator/

    ![alt text](../Praktikum13/images/04.png)

## 4. Tambahkan SessionProvider

![alt text](../Praktikum13/images/05.png)

## 5. Tambahkan Tombol Login & Logout

- Buka index.tsx pada folder component/navbar dan modifikasi pada line 10 dan 2

  ![alt text](../Praktikum13/images/06.png)

- Buka file file navbar.module.scss tambahkan code pada line 9

  ![alt text](../Praktikum13/images/07.png)

- Jalankan http://localhost:3000/

  ![alt text](../Praktikum13/images/08.png)

- Jika di klik sign in maka akan muncul dan isikan textbox masing. Setelah itu klik button sign in dan setelah diklik maka akan kembali ke halaman localhost

  ![alt text](../Praktikum13/images/09.png)

- Setelah berhasil login maka akan muncul session

  ![alt text](../Praktikum13/images/10.png)

- Untuk dapat menangkap data pada session maka tambahkan code sebagai berikut:

  ![alt text](../Praktikum13/images/11.png)

- Uji coba sign in dan sign out

  ![alt text](../Praktikum13/images/12.gif)

## 6. Menambahkan Data Tambahan (Full Name)

- Buka file [...nextauth].js

  ![alt text](../Praktikum13/images/13.png)

  ![alt text](../Praktikum13/images/14.png)

- Modifikasi navbar.module.scss

  ![alt text](../Praktikum13/images/15.png)

  ![alt text](../Praktikum13/images/16.png)

- Modifikasi index.tsx pada folder components/layouts/navbar

  ![alt text](../Praktikum13/images/17.png)

- Jalankan browser pada localhost & lakukan sign in

  ![alt text](../Praktikum13/images/18.gif)

## 7. Proteksi Halaman Profile

- pages/profile/index.tsx dan modifikasi file index.tsx

  ![alt text](../Praktikum13/images/19.png)

- jalankan browser

  ![alt text](../Praktikum13/images/20.png)

- Buat file withAuth.ts dan folder dengan nama middleware di src

  ![alt text](../Praktikum13/images/21.png)

- Modifikasi middleware.ts

  ![alt text](../Praktikum13/images/22.png)

  
