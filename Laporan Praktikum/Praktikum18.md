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

---

## PRAKTIKUM 6: Testing dengan getByTestId

1. Tambahkan pada About Page:

```jsx
<h1 data-testid="title">About Page</h1>
```

2. Update testing di `about.spec.tsx` dengan `getByTestId()`

---

## PRAKTIKUM 7: Testing dengan Router (Mocking)

Mock Next Router untuk mengatasi error "NextRouter was not mounted"

---

## PRAKTIKUM 8: Menangani Undefined Data

Tangani undefined properties untuk menghindari error pada coverage

---

## Analisis Coverage

| Metric     | Target |
| ---------- | ------ |
| Statements | ≥80%   |
| Branch     | ≥80%   |
| Functions  | ≥80%   |
| Lines      | ≥80%   |

---

## Tugas Praktikum

1. Buat unit test untuk halaman Product dan 1 komponen
2. Gunakan:
   - Min. 1 snapshot test
   - Min. 1 toBe()
   - Min. 1 getByTestId()
3. Coverage minimal 50%
4. Implementasikan router mocking
5. Dokumentasikan hasil coverage

---

## Diskusi & Refleksi

1. Mengapa unit testing penting sebelum production?
2. Mengapa branch coverage sulit mencapai 100%?
3. Apa itu mocking?
4. Kapan snapshot test digunakan?
5. Apakah semua file harus dites?

---

## Kesimpulan

Mahasiswa telah mempelajari:

- Instalasi dan konfigurasi Jest
- React Testing Library
- Unit testing pada pages
- Coverage report generation
- Router mocking
- Pentingnya testing di industri
