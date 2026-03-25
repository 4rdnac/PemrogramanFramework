# Jobsheet 10

## 1. Membuat Dynamic Route

1. Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )

   ![alt text](../Praktikum10/images/01.png)

2. Jalankan browser http://localhost:3000/produk

   ![alt text](../Praktikum10/images/02.png)

3. Jika kita klik salah satu gambar maka akan menuju halaman lain

   ![alt text](../Praktikum10/images/03.png)

## 2. Implementasi CSR (Client Rendering)

1.  Modifikasi pada file [produk].tsx pada folder src/pages/produk/

    ![alt text](../Praktikum10/images/04.png)

2.  Pada file produk.ts pada folder pages/api di rename menjadi [[...product]].ts

    ![alt text](../Praktikum10/images/05.png)

3.  Modifikasi file servicefirebase.ts

    ![alt text](../Praktikum10/images/06.png)

4.  Modifikasi file [[...produk]].ts

    ![alt text](../Praktikum10/images/07.png)

5.  Jalankan browser http://localhost:3000/api/produk/3W8Rr9sqrTcG5Y3FFU0o

    ![alt text](../Praktikum10/images/08.png)

6.  Jalankan alamat url http://localhost:3000/api/produk/123

    ![alt text](../Praktikum10/images/09.png)

7.  Buat file dengan nama index.tsx pada folder views/DetailProduct selain itu buat juga file dengan nama detailProduct.module.scss

    ![alt text](../Praktikum10/images/10.png)

8.  Modifikasi detailProduct.module.scss

    ![alt text](../Praktikum10/images/11.png)

    ![alt text](../Praktikum10/images/12.png)

9.  Modifikasi index.tsx pada folder DetailProduct

    ![alt text](../Praktikum10/images/13.png)

10. Modifikasi file [product].tsx

    ![alt text](../Praktikum10/images/13.png)
    
11. Modifikasi index.tsx pada folder views/detailProduct line 16

    ![alt text](../Praktikum10/images/14.png)

12. Jalankan browser http://localhost:3000/produk/ saat produk diklik maka akan muncul
    detailProduk http://localhost:3000/produk/pAWIT99SWmVbVrNm49ml

    ![alt text](../Praktikum10/images/15.png)

    ![alt text](../Praktikum10/images/16.png)

13. Agar tulisan detail produk ditengah maka modifikasi file detailProduct.module.scss line 103-108 dan file index.tsx tambahkan code pada line 7,8 dan 22 menjadi 

    ![alt text](../Praktikum10/images/17.png)

    ![alt text](../Praktikum10/images/18.png)

14. Sehingga hasilnya seperti berikut

    ![alt text](../Praktikum10/images/19.png)