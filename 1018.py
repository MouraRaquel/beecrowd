n = int(input())

cem = n//100
cinquenta = (n%100)//50
vinte = ((n%100)%50)//20
dez = ((n%50)%20)//10
cinco = ((n%20)%10)//5
dois = ((n%10)%5)//2
um = ((n%5)%2)//1

print(n)
print(cem, 'nota(s) de R$ 100,00')
print(cinquenta, 'nota(s) de R$ 50,00')
print(vinte, 'nota(s) de R$ 20,00')
print(dez, 'nota(s) de R$ 10,00')
print(cinco, 'nota(s) de R$ 5,00')
print(dois, 'nota(s) de R$ 2,00')
print(um, 'nota(s) de R$ 1,00')