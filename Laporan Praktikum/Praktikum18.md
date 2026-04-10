# Jobsheet 18

## PRAKTIKUM 1: Setup Jest di Next.js

### Install Dependencies

```bash
npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force
```

![alt text](../Praktikum18/images/01.png)

### Buat File Konfigurasi

**Dokumentasi:** https://nextjs.org/docs/pages/guides/testing/jest

- Buat file: `jest.config.mjs`

  ![alt text](../Praktikum18/images/02.png)

  ![alt text](../Praktikum18/images/03.png)

- Tambahkan script di `package.json`

  ![alt text](../Praktikum18/images/04.png)

---

## PRAKTIKUM 2: Struktur Folder Testing

```
src/
├── pages/
├── components/
├── views/
└── __test__/
    ├── pages/
    └── components/
```

![alt text](../Praktikum18/images/05.png)

---

## PRAKTIKUM 3: Testing Halaman About

### Buat File Testing

- File: `src/__test__/pages/about.spec.tsx`

  ![alt text](../Praktikum18/images/06.png)

- Contoh Testing Snapshot. Pada about.spec.tsx tambahkan code berikut :

  ![alt text](../Praktikum18/images/07.png)

### Jalankan Testing

```bash
npm run test
```

**Output:** `PASS about.spec.tsx`

![alt text](../Praktikum18/images/08.png)

## PRAKTIKUM 4: Coverage Report

```bash
npm run test:coverage
```

![alt text](../Praktikum18/images/09.png)

Buka: `coverage/lcov-report/index.html`

![alt text](../Praktikum18/images/10.png)

**Target industri:** ≥80% coverage

![alt text](../Praktikum18/images/11.png)

---

## PRAKTIKUM 5: Konfigurasi Coverage Lengkap

Update `jest.config.mjs` dan jalankan:

![alt text](../Praktikum18/images/12.png)

```bash
npm run test:coverage
```

![alt text](../Praktikum18/images/13.png)

![alt text](../Praktikum18/images/14.png)

---

## PRAKTIKUM 6: Testing dengan getByTestId

1. Tambahkan pada About Page:

```jsx
<h1 data-testid="title">About Page</h1>
```

![alt text](../Praktikum18/images/15.png)

2. Update testing di `about.spec.tsx` dengan `getByTestId()`

![alt text](../Praktikum18/images/16.png)

![alt text](../Praktikum18/images/17.png)

3. Coba jika dibuat salah (ubah menjadi toBe("About")):

![alt text](../Praktikum18/images/18.png)

![alt text](../Praktikum18/images/19.png)

![alt text](../Praktikum18/images/20.png)

---

## PRAKTIKUM 7: Testing dengan Router (Mocking)

1. Buat file product.spec.tsx dan tambahkan kode berikut

![alt text](../Praktikum18/images/21.png)

2. Ketika testing halaman Product, sering muncul error: `NextRouter was not mounted`

![alt text](../Praktikum18/images/21.png)

**Solusi:** Mock Next Router Tambahkan di file product.spec.tsx

![alt text](../Praktikum18/images/23.png)

---

## PRAKTIKUM 8: Menangani Undefined Data

Jalankan `npm run test:coverage` maka akan muncul error

![alt text](../Praktikum18/images/24.png)

Jika muncul error Cannot read properties of undefined, perbaiki di komponen pada file index.tsx pada folder pages/produk

![alt text](../Praktikum18/images/25.png)

Jalankan npm run test:coverage

![alt text](../Praktikum18/images/26.png)

Maka Solusinya perbaiki code pada file

![alt text](../Praktikum18/images/27.png)

Note pastikan : comment pada code berikut pada 2 code testing

![alt text](../Praktikum18/images/28.png)

![alt text](../Praktikum18/images/29.png)

---

## Analisis Coverage

![alt text](../Praktikum18/images/30.png)

| Metric     | Target |
| ---------- | ------ |
| Statements | ≥80%   |
| Branch     | ≥60%   |
| Functions  | ≥90%   |
| Lines      | ≥88%   |

---

## Tugas Praktikum

1. Buat unit test untuk

- Halaman Product

  Sudah pada praktikum di atas

- 1 Komponen

- Buat file src/**test**/components/footer.spec.tsx

  ![alt text](../Praktikum18/images/31.png)

- Modifikasi index.tsx pada folder component/layouts/footer untuk menambahkan data-testid="footer"

  ![alt text](../Praktikum18/images/32.png)

- hasil:

![alt text](../Praktikum18/images/33.png)

2. Gunakan:
   - Min. 1 snapshot test
   - Min. 1 toBe()
   - Min. 1 getByTestId()

   ![alt text](../Praktikum18/images/34.png)

3. Coverage minimal 50%

   ![alt text](../Praktikum18/images/35.png)

   ![alt text](../Praktikum18/images/36.png)

4. Implementasikan router mocking

   Sudah pada praktikum 7

5. Dokumentasikan hasil coverage

   ![alt text](../Praktikum18/images/36.png)

---

## Diskusi & Refleksi

1. Mengapa unit testing penting sebelum production?

   Unit testing penting sebelum production karena membantu menemukan bug lebih awal, memastikan setiap fungsi berjalan sesuai harapan, dan mencegah error besar saat aplikasi sudah digunakan user.

2. Mengapa branch coverage sulit mencapai 100%?

   Branch coverage sulit 100% karena tidak semua kondisi (if/else, edge case, error case) mudah diuji, apalagi yang jarang terjadi atau butuh kondisi khusus.

3. Apa itu mocking?

   Mocking adalah teknik mengganti fungsi atau dependency asli (seperti API, database, router) dengan versi palsu agar testing bisa berjalan lebih cepat dan terkontrol.

4. Kapan snapshot test digunakan?

   Snapshot test digunakan untuk membandingkan tampilan UI (hasil render) dengan versi sebelumnya, sehingga jika ada perubahan yang tidak disengaja bisa langsung terdeteksi.

5. Apakah semua file harus dites?

   Tidak semua file harus dites, biasanya yang diuji adalah bagian penting seperti logic, fungsi utama, dan komponen krusial, bukan file sederhana atau yang hanya berisi tampilan statis.

---

## Kesimpulan

Mahasiswa telah mempelajari:

- Instalasi dan konfigurasi Jest
- React Testing Library
- Unit testing pada pages
- Coverage report generation
- Router mocking
- Pentingnya testing di industri
