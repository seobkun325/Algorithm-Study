import sys
input = sys.stdin.readline

S, K = map(int, input().split())

arr = [0]*K
for i in range(K) :
    arr[i] = S//K
namuji = S-arr[0]*K
ans = 1
for i in range(namuji) :
    arr[i] += 1
for x in arr :
    ans *= x
print(ans)
