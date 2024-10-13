import sys
input =  sys.stdin.readline

n, m = map(int, input().split())
m = min(m, n-m)

ja = 1
mo = 1

for i in range(m) :
    ja *= (n-i)
    mo *= (i+1)
print(ja//mo)