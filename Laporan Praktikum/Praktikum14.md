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


