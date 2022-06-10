p1 = list(map(float, input().split()))
p2 = list(map(float, input().split()))

dist = ((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)**0.5

print('{:.4f}'.format(dist))