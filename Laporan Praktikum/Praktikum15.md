# Jobsheet 15

## 1. Custom Login Page

- Tambahkan custom page di NextAuth

  ![alt text](../Praktikum15/images/01.png)

  ![alt text](../Praktikum15/images/02.png)

- Jalankan browser http://localhost:3000/ dan klik sign in maka akan diarahkan ke login

  ![alt text](../Praktikum15/images/03.gif)

## 2. Handle Login di Frontend

- Copy paste isi dari register/index.tsx ke file login/index.tsx

  ![alt text](../Praktikum15/images/04.png)

- Copy paste isi dari register/register.module.scss ke file login/login.module.scss

- Semua text register pada file index.tsx pada folder login diubah menjadi login

  ![alt text](../Praktikum15/images/05.png)

- Jangan lupa setting link hrefnya

  ![alt text](../Praktikum15/images/06.png)

- Lakukan hal yang sama pada file login.module.scss rubah text register menjadi login

  ![alt text](../Praktikum15/images/07.png)

- Cek pada file login.tsx pada pages/auth

  ![alt text](../Praktikum15/images/08.png)

  ![alt text](../Praktikum15/images/09.png)

- Jalankan browser localhost:3000/auth/login. Tampilannya akan sama dengan register

  ![alt text](../Praktikum15/images/10.png)

- Pada tampilan login kita tidak perlu hapus fullname jadi pada folder views/auth/login/index.tsx hapus fullname

  ![alt text](../Praktikum15/images/11.png)

  Sehingga hasilnya seperti berikut :

  ![alt text](../Praktikum15/images/12.png)

- Buka file index.tsx pada folder views/auth/login dan modifikasi codenya seperti berikut

  ![alt text](../Praktikum15/images/13.png)

- Buka file servicefirebase.ts dan tambahkan code di line 25-38

  ![alt text](../Praktikum15/images/14.png)

