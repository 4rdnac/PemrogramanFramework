# Jobsheet 8

## 1. Setup Halaman SSR

1. Buat file baru pada pages/products/server.tsx

   ![alt text](../Praktikum08/images/01.png)

2. Modifikasi file server.tsx :

   ![alt text](../Praktikum08/images/02.png)

3. Jalankan browser : http://localhost:3000/produk/server

   ![alt text](../Praktikum08/images/03.png)

## 2. Implementasi getServerSideProps pada server.tsx

1. Tambah getServerSideProps pada server.tsx

   ![alt text](../Praktikum08/images/04.png)

2. Jalankan browser `http://localhost:3000/produk/server`

   ![alt text](../Praktikum08/images/05.png)

## 3. Refactor Type ( produk type )

1. Buat folder types pada folder pages dan buat file Product.type.ts

   ![alt text](../Praktikum08/images/06.png)

2. Modifikasi Product.type.ts

   ![alt text](../Praktikum08/images/07.png)

3. Setelah membuat file Product.type.ts maka modifikasi pada file server.tsx menjadi

   ![alt text](../Praktikum08/images/08.png)
