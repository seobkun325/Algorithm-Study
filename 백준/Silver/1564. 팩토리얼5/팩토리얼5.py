import sys
input = sys.stdin.readline

N = int(input())
num = 1
for i in range(1,N+1) :
    num = num * i
    while (num % 10 == 0) :
        num = num // 10
    num = num % 10000000000000
num = num%100000
ans = str(num)
for _ in range(5- len(ans)) :
    print(0,end="")
print(ans)