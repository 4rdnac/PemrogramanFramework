# Jobsheet 16

## 1. Masuk ke Google Cloud Console

- Buka https://console.cloud.google.com/apis/credentials

  ![alt text](../Praktikum16/images/01.png)

## 2 – Buat Project Baru

- Klik New Project

  ![alt text](../Praktikum16/images/02.png)

- Nama project: MyAppNext

  ![alt text](../Praktikum16/images/03.png)

- Klik Create

- Setelah berhasil klik https://console.cloud.google.com/apis/credentials pastikan projectnya MyAppNext

  ![alt text](../Praktikum16/images/04.png)

## 3. Konfigurasi OAuth Consent Screen

- Pilih OAuth consent screen

  ![alt text](../Praktikum16/images/05.png)

- Pilih Get Started

  ![alt text](../Praktikum16/images/06.png)

- Maka akan muncul seperti berikut dan isikan

  ![alt text](../Praktikum16/images/07.png)

  ![alt text](../Praktikum16/images/08.png)

  ![alt text](../Praktikum16/images/09.png)

  ![alt text](../Praktikum16/images/10.png)
  - Klik create

## 4. Buat OAuth Credentials

1. Klik create client pada Clients

![alt text](../Praktikum16/images/11.png)

![alt text](../Praktikum16/images/12.png)

## 5. Tambahkan Environment Variables

1. Copy dan paste client ID dan Client secret ke .env

![alt text](../Praktikum16/images/13.png)

![alt text](../Praktikum16/images/14.png)

## 6. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

1. Buka file [...nextauth].ts pada folder api/auth dan modifikasi menjadi berikut

![alt text](../Praktikum16/images/15.png)

![alt text](../Praktikum16/images/16.png)

## 7. Tambahkan Button Login Google

1.  Modifikasi file index.tsx pada folder views/auth/login

    ![alt text](../Praktikum16/images/17.png)

2.  Menampilkan image dari google
    - Buka file index.tsx dan tambahkan code berikut

      ![alt text](../Praktikum16/images/18.png)

    - Buka file navbar.module.css dan tambahkan code berikut

      ![alt text](../Praktikum16/images/19.png)

3.  Jalankan browser localhost:3000/auth/login masuk melalui sign in with google.Jika
    berhasil maka akan terhubung dengan akun google.

    ![alt text](../Praktikum16/images/20.gif)

    Note: data akun google tidak tersimpan dalam database

## 8. Simpan Data Google ke Database

- Buka file servicefirebase.ts pada folder src/utils/db/ dan tambahkan beberapa kode berikut

  ![alt text](../Praktikum16/images/21.png)

- Tambahkan juga code berikut

  ![alt text](../Praktikum16/images/22.png)

- Panggil Service di JWT Callback buka file […nextAuth].ts

  ![alt text](../Praktikum16/images/23.png)

- Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika data akun googlenya masuk ke database maka anda telah berhasil

  ![alt text](../Praktikum16/images/24.gif)
