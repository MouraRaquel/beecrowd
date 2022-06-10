a = input().split()

A = int(a[0])
B = int(a[1])
C = int(a[2])

MaiorAB = (A+B+abs(A-B))/2

MaiorTotal = (C+MaiorAB+abs(C-MaiorAB))/2

print('{:.0f} eh o maior'.format(MaiorTotal))