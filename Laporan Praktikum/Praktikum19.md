# Jobsheet 18

## PRAKTIKUM 1 – Membuat Repository GitHub

Sudah menggunakan repository sebelumnya

## PRAKTIKUM 2 – Deployment ke Vercel

### A. Login ke Vercel
- Buka: https://vercel.com
- Login menggunakan GitHub (buat akun jika belum punya)

### B. Import Project
1. Klik Add New Project
2. Install GitHub terlebih dahulu
3. Klik Import

**Note**: Lakukan konfigurasi sebelum import

### C. Mengatasi Error Saat Deployment

**Masalah**: Static Site Generation Gagal

**Penyebab**: Masih ada code static-site generation di project

**Solusi**:
1. Hapus file `static.tsx`
2. Comment semua code SSG pada line 46 di file `[produk].tsx`

### D. Implementasi SSR (Server Side Rendering)
1. Buka comment SSR di file `[produk].tsx`
2. Buat file `.env.local`:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```
3. Ganti semua hardcoded URL dengan `process.env.NEXT_PUBLIC_API_URL`
    - Contoh: `fetch('${process.env.NEXT_PUBLIC_API_URL}/api/product')`
    - Update di file `[produk].tsx` dan `server.tsx`
4. Commit dan push
5. Klik deploy

## PRAKTIKUM 3 – Environment Variable di Vercel

1. Buka Project di Vercel
2. Settings → Environment Variables
3. Import dari `.env.local` atau isi manual:
    ```
    NEXT_PUBLIC_API_URL=https://namaproject.vercel.app
    ```
    **Note**: Tanpa tanda `/` di belakang URL
4. Redeploy: Deployment → Redeploy

## PRAKTIKUM 4 – Konfigurasi Google OAuth Production

1. Masuk ke Google Cloud Console
2. Credentials → OAuth Client
3. Tambahkan Authorized Origins
4. Tambahkan Redirect URI
5. Save perubahan
6. Update code `index.tsx` di folder `views/auth/login`
7. Redeploy Vercel

## PRAKTIKUM 5 – Pengujian Setelah Deployment

### Test Route
- `/` (Home)
- `/about`
- `/product`
- `/profile`
- Login Google
- Login credential biasa

### Verifikasi
- SSR berjalan dengan baik
- API tidak menggunakan localhost
- Database terkoneksi
- Google login berhasil

## Analisis Konsep

| Konsep | Penjelasan |
|--------|-----------|
| SSG | Data diambil saat build |
| SSR | Data diambil saat request |
| CSR | Data diambil di browser |
| Environment Variable | Variabel rahasia/konfigurasi |
| Redeploy | Build ulang setelah perubahan |
| OAuth Production | Harus update origin & callback |

## Tugas Praktikum

1. Deploy project Next.js ke Vercel
2. Pastikan API tidak menggunakan localhost
3. Konfigurasikan Google OAuth production
4. Lakukan minimal 1 redeploy
5. Dokumentasikan:
    - Screenshot dashboard Vercel
    - URL hasil deployment
    - Screenshot login Google berhasil

## Refleksi & Diskusi

1. Mengapa localhost tidak boleh digunakan di production?
2. Mengapa SSG bisa gagal saat build?
3. Apa perbedaan SSR dan SSG saat deployment?
4. Mengapa perlu redeploy setelah menambahkan environment?
5. Apa fungsi redirect URI pada OAuth?
