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

## Pengujian

### Uji 1 – Login Valid

Input:

- Email benar
- Password benar

  Hasil:

- Login berhasil
- Redirect sesuai callbackUrl

  ![alt text](../Praktikum15/images/24.gif)

### Uji 2 – Password Salah

Input:

- Email benar
- Password salah

  Hasil:

- Error message tampil
- Tidak login

  ![alt text](../Praktikum15/images/25.gif)

### Uji 3 – Akses Admin sebagai User

Login sebagai:

- role: user
  Akses:
  /admin

  Hasil:

- Redirect ke home

  ![alt text](../Praktikum15/images/22.gif)

### Uji 4 – Akses Admin sebagai Admin

Login sebagai:

- role: admin
  Akses:
  /admin

  Hasil:

- Bisa masuk halaman admin

  ![alt text](../Praktikum15/images/23.gif)

## Pertanyaan Analisis

1. Mengapa password harus diverifikasi dengan bcrypt.compare?

   Password harus diverifikasi dengan bcrypt.compare karena password di database disimpan dalam bentuk hash, bukan teks asli, sehingga perlu dibandingkan secara aman tanpa mengubah hash tersebut; selain itu bcrypt juga melindungi dari serangan seperti brute force dengan mekanisme salt.

2. Mengapa role disimpan di token?

   Role disimpan di token agar informasi hak akses user bisa langsung digunakan di setiap request tanpa perlu query ulang ke database, sehingga proses autentikasi dan otorisasi menjadi lebih cepat dan efisien.

3. Apa fungsi callbackUrl?

   callbackUrl berfungsi untuk menentukan ke halaman mana user akan diarahkan setelah login berhasil, sehingga user bisa kembali ke halaman yang sebelumnya ingin diakses.

4. Mengapa middleware penting untuk security?

   Middleware penting untuk security karena berjalan sebelum halaman diakses, sehingga bisa memblokir user yang belum login atau tidak memiliki izin sebelum konten ditampilkan, membuat sistem lebih aman dibanding pengecekan di client.

5. Apa risiko jika role tidak dicek di middleware?

   Jika role tidak dicek di middleware, maka user bisa mengakses halaman yang seharusnya terbatas (misalnya halaman admin), sehingga berpotensi terjadi kebocoran data atau penyalahgunaan fitur.
