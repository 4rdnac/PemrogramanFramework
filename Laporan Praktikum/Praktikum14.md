# Jobsheet 14

## 1. Membuat Register View

- Buat folder pada views dengan nama register dan tambahkan 2 file yaitu index.tsx dan register.module.scss

  ![alt text](../Praktikum14/images/01.png)

- Buka file register.tsx pada folder auth/register.tsx dan modifikasi file register.tsx ( pada folder pages/auth/register.tsx )

  ![alt text](../Praktikum14/images/02.png)

- Modifikasi register.module.scss

  ![alt text](../Praktikum14/images/03.png)

  ![alt text](../Praktikum14/images/04.png)

- Tambahkan form inputan pada file index.tsx ( pada folder views/auth/register/index.tsx ) Form berisi:
  - Email

    ![alt text](../Praktikum14/images/05.png)

  - Full Name

    ![alt text](../Praktikum14/images/06.png)

  - Password

    ![alt text](../Praktikum14/images/07.png)

  - Button Register

    ![alt text](../Praktikum14/images/08.png)

- Jalankan browsernya http://localhost:3000/auth/register sehingga tampilan sebagai
  berikut

  ![alt text](../Praktikum14/images/09.png)

## 2. Membuat API Register

- Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi

  ![alt text](../Praktikum14/images/10.png)

  ![alt text](../Praktikum14/images/11.png)

- Buat file register.ts pada folder api

  ![alt text](../Praktikum14/images/12.png)

- Modifikasi file register.ts

  ![alt text](../Praktikum14/images/13.png)

- Modifikasi index.tsx pada folder register ( tambahkan beberapa code)

  ![alt text](../Praktikum14/images/14.png)

- Buka browser http://localhost:3000/auth/register isikan data dan klik register. Jika berhasil maka akan masuk ke menu login

  ![alt text](../Praktikum14/images/15.gif)

## 3. Install bcrypt

- npm install bcrypt --force

  ![alt text](../Praktikum14/images/16.png)

- npm install --save-dev @types/bcrypt –force

  ![alt text](../Praktikum14/images/17.png)

- Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi

  ![alt text](../Praktikum14/images/18.png)

  ![alt text](../Praktikum14/images/19.png)

- Jalankan browser http://localhost:3000/auth/register dan input data setelah itu klik register

  ![alt text](../Praktikum14/images/20.png)

- Buka pada firebase jika berhasil maka data register akan masuk

  ![alt text](../Praktikum14/images/21.png)

- Jika user memasukkan data yang sama sistem tidak akan memproses tetapi permasalahannya user memasukkan data yang sama tidak ada pemberitahuan pada layar maka dari itu perlu ada perubahan pada code index.tsx pada folder views/auth/register
  - Line 41

    ![alt text](../Praktikum14/images/22.png)

  - Line 94 dan 96

    ![alt text](../Praktikum14/images/23.png)

  - Line 34 rubah menjadi email

    ![alt text](../Praktikum14/images/24.png)

- Modifikasi juga pada register.module.scss

  ![alt text](../Praktikum14/images/25.png)

- Jika berhasil maka hasilnya seperti berikut

  ![alt text](../Praktikum14/images/26.png)

- Tambakan loading dengan menambahkan kode pada index.tsx

  ![alt text](../Praktikum14/images/27.png)

- Jika berhasil maka hasilnya akan muncul loading saat klik register

## Pengujian

### 1 – Register Baru

- Email baru

  ![alt text](../Praktikum14/images/28.gif)

- Hasil data tersimpan di Firestore, password ter-hash, redirect ke login

### 2 – Email Sudah Ada

- Email yang sama

  ![alt text](../Praktikum14/images/29.gif)

- Hasil Error 400 & Message: Email already exists

### 3 – Method GET

- Akses /api/register

  ![alt text](../Praktikum14/images/30.png)

- Hasil 405 Method Not Allowed

## Tugas Praktikum

1. Implementasikan register terhubung database. Sudah
2. Tambahkan validasi:

- Email wajib

  ![alt text](../Praktikum14/images/31.png)

- Password minimal 6 karakter

  ![alt text](../Praktikum14/images/32.png)

3. Tambahkan role default "member".

![alt text](../Praktikum14/images/33.png)

4. Tampilkan pesan error di UI.

![alt text](../Praktikum14/images/34.png)

![alt text](../Praktikum14/images/35.png)

5. Screenshot hasil Register sukses, Email sudah ada Database Firestore

![alt text](../Praktikum14/images/28.gif)

![alt text](../Praktikum14/images/29.gif)

## Pertanyaan Analisis

1. Mengapa password harus di-hash?

   Password harus di-hash agar tidak tersimpan dalam bentuk asli, sehingga lebih aman jika database bocor.

2. Apa perbedaan addDoc dan setDoc?

   addDoc otomatis membuat ID dokumen baru, sedangkan setDoc bisa menentukan ID sendiri atau menimpa data yang sudah ada.

3. Mengapa perlu validasi method POST?

   Validasi method POST diperlukan agar API hanya menerima request yang sesuai (misalnya untuk kirim data), sehingga lebih aman dan terkontrol.

4. Apa risiko jika email tidak dicek unik?

   Jika email tidak dicek unik, bisa terjadi duplikasi akun dan konflik data saat login atau identifikasi user.

5. Apa fungsi role pada user?

   Role pada user berfungsi untuk mengatur hak akses, misalnya membedakan admin dan user biasa.
