import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T) :
    N = int(input())
    arr = [1000000]*(N+1)
    mmm = 0
    idx = 0
    ans = 0
    for _ in range(N):
        a,b = map(int, input().split())
        arr[a] = b
    gijun = arr[0]
    for x in arr :
        if x < gijun :
            ans+=1
            gijun = x
    print(ans)
