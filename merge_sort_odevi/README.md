# merge_sort_odevi

Merge Sort Aşamaları
Verilen dizi: [16, 21, 11, 8, 12, 22]

Merge Sort algoritmasını adım adım uygulayalım:

Diziyi Parçalara Ayırma:

İlk önce dizi ikiye bölünür:
Sol yarı: [16, 21, 11]
Sağ yarı: [8, 12, 22]
Sol Yarının Parçalara Ayrılması:

[16, 21, 11] dizisi tekrar ikiye bölünür:

Sol yarı: [16]
Sağ yarı: [21, 11]
[21, 11] dizisi tekrar ikiye bölünür:

Sol yarı: [21]
Sağ yarı: [11]
Sağ Yarının Parçalara Ayrılması:

[8, 12, 22] dizisi tekrar ikiye bölünür:

Sol yarı: [8]
Sağ yarı: [12, 22]
[12, 22] dizisi tekrar ikiye bölünür:

Sol yarı: [12]
Sağ yarı: [22]
Parçaların Birleştirilmesi:

Sol yarıyı birleştiriyoruz:

[21] ve [11] birleştirilir:
[11, 21]
[16] ve [11, 21] birleştirilir:
[11, 16, 21]
Sağ yarıyı birleştiriyoruz:

[12] ve [22] birleştirilir:
[12, 22]
[8] ve [12, 22] birleştirilir:
[8, 12, 22]
İki ana parçayı birleştiriyoruz:

[11, 16, 21] ve [8, 12, 22] birleştirilir:
[8, 11, 12, 16, 21, 22]
Merge Sort'un Aşamaları:
Bölünmüş Hali:

[16, 21, 11, 8, 12, 22]
[16, 21, 11] ve [8, 12, 22]
[16] ve [21, 11]; [8] ve [12, 22]
[21] ve [11]; [12] ve [22]
Birleştirilmiş Hali:

[11, 21]
[11, 16, 21]
[12, 22]
[8, 12, 22]
[8, 11, 12, 16, 21, 22]


Big-O Gösterimi
Merge Sort'un zaman karmaşıklığı 
O(nlogn)'dir. Her aşamada diziyi ikiye böldüğümüz ve her aşamada birleştirme işlemi yaptığımız için bu karmaşıklık ortaya çıkar. En iyi, en kötü ve ortalama durumda da bu karmaşıklığa sahiptir.