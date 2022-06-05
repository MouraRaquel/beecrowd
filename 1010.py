a = input().split()
b = input().split()

x1 = int(a[1]) * float(a[2])
x2 = int(b[1]) * float(b[2])

valor = x1 + x2
print('VALOR A PAGAR: R$ {:.2f}'.format(valor))
