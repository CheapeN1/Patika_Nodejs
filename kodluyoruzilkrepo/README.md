Insertion Sort Aşamaları
Verilen dizi: [22, 27, 16, 2, 18, 6]

Insertion Sort algoritmasını adım adım uygulayalım:

İlk eleman (22) zaten sıralı kabul edilir.

[22, 27, 16, 2, 18, 6]
27 elemanını sıralı hale getiriyoruz. Zaten 22'den büyük olduğu için yer değiştirme yok.

[22, 27, 16, 2, 18, 6]
16 elemanını sıralı hale getiriyoruz. 27'den küçük, 22'den küçük, en başa geliyor.

[16, 22, 27, 2, 18, 6]
2 elemanını sıralı hale getiriyoruz. 27'den küçük, 22'den küçük, 16'dan küçük, en başa geliyor.

[2, 16, 22, 27, 18, 6]
18 elemanını sıralı hale getiriyoruz. 27'den küçük, 22'den küçük, 16'dan büyük, 16'nın yanına geliyor.

[2, 16, 18, 22, 27, 6]
6 elemanını sıralı hale getiriyoruz. 27'den küçük, 22'den küçük, 18'den küçük, 16'dan küçük, en baştan bir sonraki eleman olarak geliyor.

[2, 6, 16, 18, 22, 27]



Time Complexity Case
18 sayısı sıralandıktan sonra [2, 6, 16, 18, 22, 27] dizisinde ortada bulunur. Bu nedenle "Average case" kapsamına girer.

Selection Sort Aşamaları
Verilen dizi: [7, 3, 5, 8, 2, 9, 4, 15, 6]

Selection Sort algoritmasını adım adım uygulayalım:

İlk adımda en küçük elemanı bulup en başa alıyoruz (2 ve 7 yer değiştirir).

[2, 3, 5, 8, 7, 9, 4, 15, 6]
İkinci adımda ikinci en küçük elemanı bulup ikinci sıraya alıyoruz (zaten sıralı).

[2, 3, 5, 8, 7, 9, 4, 15, 6]
Üçüncü adımda üçüncü en küçük elemanı bulup üçüncü sıraya alıyoruz (4 ve 5 yer değiştirir).

[2, 3, 4, 8, 7, 9, 5, 15, 6]
Dördüncü adımda dördüncü en küçük elemanı bulup dördüncü sıraya alıyoruz (5 ve 8 yer değiştirir).

[2, 3, 4, 5, 7, 9, 8, 15, 6]
Selection Sort'un ilk dört adımı bu şekildedir.