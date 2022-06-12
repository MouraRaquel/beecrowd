n = int(input())

segundos = n%60
minutos = (n//60)%60
horas = ((n//60)//60)

print('{}:{}:{}'.format(horas, minutos, segundos))