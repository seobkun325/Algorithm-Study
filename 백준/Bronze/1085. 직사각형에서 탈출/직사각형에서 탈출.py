x,y,w,h = map(int, (input().split(' ')))
first = min(abs(x-0), abs(x-w))
second = min(abs(y-0), abs(y-h))
print(min(first, second))