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

- Buka file servicefirebase.ts dan tambahkan code

  ![alt text](../Praktikum15/images/14.png)

## 3. Authorize di NextAuth (Database Login)

- Buka file [...nextauth].ts modifikasi menjadi berikut ( pada bagian providers )

  ![alt text](../Praktikum15/images/15.png)

## 4. Tambahkan Role ke Token

- JWT Callback pada file [...nextauth].ts Modifikasi menjadi

  ![alt text](../Praktikum15/images/16.png)

- Jalankan browser http://localhost:3000/auth/login

  ![alt text](../Praktikum15/images/17.gif)

## 5. Callback URL Logic

- Modifikasi withAuth.ts pada folder src/middleware

  ![alt text](../Praktikum15/images/18.png)

  Tujuannya setelah login, user kembali ke halaman sebelumnya.

## 6. Membuat halaman Admin dan authorize

- Buat halaman admin 

  ![alt text](../Praktikum15/images/19.png)

- Pada index.tsx tambahkan code berikut  

  ![alt text](../Praktikum15/images/20.png)

- Modifikasi withAuth.ts  

  ![alt text](../Praktikum15/images/21.png)

- Jalankan browser localhost:3000/produk dan pada status sudah login. Rubah urlnya menjadi http://localhost:3000/admin maka user akan diarahkan ke localhost. Pada intinya role selain admin tidak bisa mengakses 

  ![alt text](../Praktikum15/images/22.gif)

- Untuk mencoba halaman admin rubah role pada firebas pada salah satu akun dan jalankan http://localhost:3000/admin

  ![alt text](../Praktikum15/images/23.gif)

  
