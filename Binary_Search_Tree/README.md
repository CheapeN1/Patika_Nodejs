# Binary_Search_Tree

Binary Search Tree (BST) algoritması kullanarak verilen diziyi [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] adım adım oluşturalım:

Root Elemanının Belirlenmesi:

İlk eleman root olur: root = 7
Diğer Elemanların Eklenmesi:

5: 7'den küçük olduğu için soluna eklenir.
7
5 (sol)
1: 7'den küçük, 5'ten küçük olduğu için 5'in soluna eklenir.
7
5 (sol)
1 (sol)
8: 7'den büyük olduğu için sağına eklenir.
7
5 (sol)
1 (sol)
8 (sağ)
3: 7'den küçük, 5'ten küçük, 1'den büyük olduğu için 1'in sağına eklenir.
7
5 (sol)
1 (sol)
3 (sağ)
8 (sağ)
6: 7'den küçük, 5'ten büyük olduğu için 5'in sağına eklenir.
7
5 (sol)
1 (sol)
3 (sağ)
6 (sağ)
8 (sağ)
0: 7'den küçük, 5'ten küçük, 1'den küçük olduğu için 1'in soluna eklenir.
7
5 (sol)
1 (sol)
0 (sol)
3 (sağ)
6 (sağ)
8 (sağ)
9: 7'den büyük, 8'den büyük olduğu için 8'in sağına eklenir.
7
5 (sol)
1 (sol)
0 (sol)
3 (sağ)
6 (sağ)
8 (sağ)
9 (sağ)
4: 7'den küçük, 5'ten küçük, 1'den büyük, 3'ten büyük olduğu için 3'ün sağına eklenir.
7
5 (sol)
1 (sol)
0 (sol)
3 (sağ)
4 (sağ)
6 (sağ)
8 (sağ)
9 (sağ)
2: 7'den küçük, 5'ten küçük, 1'den büyük, 3'ten küçük olduğu için 3'ün soluna eklenir.
7
5 (sol)
1 (sol)
0 (sol)
3 (sağ)
2 (sol)
4 (sağ)
6 (sağ)
8 (sağ)
9 (sağ)